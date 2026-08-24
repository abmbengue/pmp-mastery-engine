import { createHash, randomBytes } from "node:crypto";
import { z } from "zod";
import prisma from "@/data/prisma-client";
import { hashPassword } from "@/modules/auth/password";
import {
  getPasswordResetEmailPort,
} from "@/modules/auth/password-reset-email";
import { checkRateLimit, safeApiLog } from "@/modules/security";

const RESET_TTL_MS = Number(process.env.PASSWORD_RESET_TTL_MS ?? 60 * 60 * 1000); // 1h
const APP_BASE_URL = process.env.APP_BASE_URL ?? "http://localhost:3000";

export const passwordRules = z
  .string()
  .min(8)
  .regex(/[A-Z]/, "password_uppercase")
  .regex(/[a-z]/, "password_lowercase")
  .regex(/[0-9]/, "password_number");

export const forgotPasswordSchema = z.object({
  email: z.string().trim().email(),
  locale: z.enum(["fr", "en"]).default("en"),
});

export const resetPasswordSchema = z
  .object({
    token: z.string().min(20).max(200),
    password: passwordRules,
    confirmPassword: z.string().min(8),
  })
  .refine((d) => d.password === d.confirmPassword, {
    message: "password_mismatch",
    path: ["confirmPassword"],
  });

function hashToken(rawToken: string): string {
  return createHash("sha256").update(rawToken).digest("hex");
}

function generateRawToken(): string {
  return randomBytes(32).toString("base64url");
}

/**
 * Request a reset. Always returns the same generic ok shape (no email enumeration).
 */
export async function requestPasswordReset(input: {
  email: string;
  locale: "fr" | "en";
  ip?: string;
}): Promise<{ ok: true }> {
  const ip = input.ip ?? "unknown";
  const rlIp = checkRateLimit(`pwd-reset-ip:${ip}`, 10, 15 * 60_000);
  const rlEmail = checkRateLimit(
    `pwd-reset-email:${input.email.toLowerCase()}`,
    5,
    15 * 60_000
  );
  if (!rlIp.ok || !rlEmail.ok) {
    safeApiLog("password_reset_rate_limited", { ip });
    // Still generic — do not reveal throttling details that aid enumeration timing beyond 429 at API layer
    return { ok: true };
  }

  const user = await prisma.user.findUnique({
    where: { email: input.email.toLowerCase() },
  });

  if (!user?.passwordHash) {
    // Indistinguishable success
    return { ok: true };
  }

  // Invalidate outstanding unused tokens for this user
  await prisma.passwordResetToken.updateMany({
    where: { userId: user.id, usedAt: null },
    data: { usedAt: new Date() },
  });

  const rawToken = generateRawToken();
  const tokenHash = hashToken(rawToken);
  const expiresAt = new Date(Date.now() + RESET_TTL_MS);

  await prisma.passwordResetToken.create({
    data: {
      userId: user.id,
      tokenHash,
      expiresAt,
    },
  });

  const resetUrl = `${APP_BASE_URL}/${input.locale}/reset-password?token=${encodeURIComponent(rawToken)}`;
  await getPasswordResetEmailPort().sendResetEmail({
    to: user.email,
    resetUrl,
    locale: input.locale,
    expiresAt,
  });

  safeApiLog("password_reset_requested", { userId: user.id });
  return { ok: true };
}

/**
 * Consume a one-time token and set a new password hash.
 */
export async function resetPasswordWithToken(input: {
  token: string;
  password: string;
}): Promise<{ ok: true } | { ok: false; error: "invalid_token" | "expired_token" | "used_token" }> {
  const tokenHash = hashToken(input.token);
  const row = await prisma.passwordResetToken.findUnique({
    where: { tokenHash },
    include: { user: true },
  });

  if (!row) return { ok: false, error: "invalid_token" };
  if (row.usedAt) return { ok: false, error: "used_token" };
  if (row.expiresAt.getTime() <= Date.now()) {
    return { ok: false, error: "expired_token" };
  }

  const passwordHash = await hashPassword(input.password);

  await prisma.$transaction([
    prisma.user.update({
      where: { id: row.userId },
      data: { passwordHash },
    }),
    prisma.passwordResetToken.update({
      where: { id: row.id },
      data: { usedAt: new Date() },
    }),
    // Invalidate any other outstanding tokens
    prisma.passwordResetToken.updateMany({
      where: { userId: row.userId, usedAt: null, id: { not: row.id } },
      data: { usedAt: new Date() },
    }),
  ]);

  safeApiLog("password_reset_completed", { userId: row.userId });
  return { ok: true };
}

/** Test helper — peek hashed token existence without exposing raw token */
export async function countActiveResetTokens(userId: string): Promise<number> {
  return prisma.passwordResetToken.count({
    where: { userId, usedAt: null, expiresAt: { gt: new Date() } },
  });
}
