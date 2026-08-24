import { beforeEach, describe, expect, it } from "vitest";
import { createHash } from "node:crypto";
import prisma from "@/data/prisma-client";
import { createUser } from "@/data/repositories/user-repository";
import { hashPassword, verifyPassword } from "@/modules/auth/password";
import {
  countActiveResetTokens,
  requestPasswordReset,
  resetPasswordWithToken,
} from "@/modules/auth/password-reset";
import {
  DevPasswordResetEmail,
  setPasswordResetEmailPort,
} from "@/modules/auth/password-reset-email";
import { resetRateLimitBuckets } from "@/modules/security";

function tokenFromUrl(url: string): string {
  const u = new URL(url);
  return u.searchParams.get("token") ?? "";
}

describe("P1 password reset", () => {
  beforeEach(() => {
    resetRateLimitBuckets();
    DevPasswordResetEmail.reset();
    setPasswordResetEmailPort(new DevPasswordResetEmail());
  });

  it("accepts known email and unknown email with indistinguishable ok", async () => {
    const suffix = Date.now();
    const passwordHash = await hashPassword("StrongPass1");
    await createUser({
      email: `reset-known-${suffix}@example.com`,
      name: "Reset Known",
      locale: "en",
      passwordHash,
    });

    const known = await requestPasswordReset({
      email: `reset-known-${suffix}@example.com`,
      locale: "en",
      ip: "10.0.0.1",
    });
    const unknown = await requestPasswordReset({
      email: `reset-unknown-${suffix}@example.com`,
      locale: "en",
      ip: "10.0.0.2",
    });

    expect(known).toEqual({ ok: true });
    expect(unknown).toEqual({ ok: true });
    expect(DevPasswordResetEmail.history.length).toBe(1);
    expect(DevPasswordResetEmail.lastPayload?.to).toBe(`reset-known-${suffix}@example.com`);
  });

  it("stores only hashed tokens and never plaintext in DB", async () => {
    const suffix = Date.now();
    const passwordHash = await hashPassword("StrongPass1");
    const user = await createUser({
      email: `reset-hash-${suffix}@example.com`,
      name: "Reset Hash",
      locale: "en",
      passwordHash,
    });

    await requestPasswordReset({
      email: user.email,
      locale: "en",
      ip: "10.0.0.3",
    });

    const raw = tokenFromUrl(DevPasswordResetEmail.lastPayload!.resetUrl);
    expect(raw.length).toBeGreaterThan(20);

    const expectedHash = createHash("sha256").update(raw).digest("hex");
    const rows = await prisma.passwordResetToken.findMany({ where: { userId: user.id } });
    expect(rows.length).toBeGreaterThanOrEqual(1);
    expect(rows.every((r) => r.tokenHash === expectedHash || r.usedAt !== null || r.tokenHash.length === 64)).toBe(
      true
    );
    expect(rows.some((r) => r.tokenHash === expectedHash)).toBe(true);
    expect(JSON.stringify(rows)).not.toContain(raw);
  });

  it("replaces password, rejects old password, accepts new, and is single-use", async () => {
    const suffix = Date.now();
    const passwordHash = await hashPassword("StrongPass1");
    const user = await createUser({
      email: `reset-flow-${suffix}@example.com`,
      name: "Reset Flow",
      locale: "en",
      passwordHash,
    });

    await requestPasswordReset({
      email: user.email,
      locale: "en",
      ip: "10.0.0.4",
    });
    const raw = tokenFromUrl(DevPasswordResetEmail.lastPayload!.resetUrl);
    expect(await countActiveResetTokens(user.id)).toBe(1);

    const first = await resetPasswordWithToken({
      token: raw,
      password: "NewStrong9",
    });
    expect(first).toEqual({ ok: true });
    expect(await countActiveResetTokens(user.id)).toBe(0);

    const updated = await prisma.user.findUnique({ where: { id: user.id } });
    expect(await verifyPassword("StrongPass1", updated!.passwordHash!)).toBe(false);
    expect(await verifyPassword("NewStrong9", updated!.passwordHash!)).toBe(true);

    const reuse = await resetPasswordWithToken({
      token: raw,
      password: "AnotherPass1",
    });
    expect(reuse.ok).toBe(false);
  });

  it("rejects expired tokens", async () => {
    const suffix = Date.now();
    const passwordHash = await hashPassword("StrongPass1");
    const user = await createUser({
      email: `reset-exp-${suffix}@example.com`,
      name: "Reset Exp",
      locale: "en",
      passwordHash,
    });

    await requestPasswordReset({
      email: user.email,
      locale: "en",
      ip: "10.0.0.5",
    });
    const raw = tokenFromUrl(DevPasswordResetEmail.lastPayload!.resetUrl);
    const tokenHash = createHash("sha256").update(raw).digest("hex");

    await prisma.passwordResetToken.update({
      where: { tokenHash },
      data: { expiresAt: new Date(Date.now() - 1000) },
    });

    const result = await resetPasswordWithToken({
      token: raw,
      password: "NewStrong9",
    });
    expect(result).toEqual({ ok: false, error: "expired_token" });
  });

  it("invalidates prior unused tokens when a new reset is requested", async () => {
    const suffix = Date.now();
    const passwordHash = await hashPassword("StrongPass1");
    const user = await createUser({
      email: `reset-inv-${suffix}@example.com`,
      name: "Reset Inv",
      locale: "en",
      passwordHash,
    });

    await requestPasswordReset({ email: user.email, locale: "en", ip: "10.0.0.6" });
    const firstRaw = tokenFromUrl(DevPasswordResetEmail.lastPayload!.resetUrl);

    await requestPasswordReset({ email: user.email, locale: "en", ip: "10.0.0.7" });
    const secondRaw = tokenFromUrl(DevPasswordResetEmail.lastPayload!.resetUrl);
    expect(secondRaw).not.toBe(firstRaw);
    expect(await countActiveResetTokens(user.id)).toBe(1);

    const old = await resetPasswordWithToken({ token: firstRaw, password: "NewStrong9" });
    expect(old.ok).toBe(false);

    const neu = await resetPasswordWithToken({ token: secondRaw, password: "NewStrong9" });
    expect(neu.ok).toBe(true);
  });
});
