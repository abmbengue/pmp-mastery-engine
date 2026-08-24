import { NextResponse } from "next/server";
import { z } from "zod";
import { findUserByEmail } from "@/data/repositories/user-repository";
import { verifyPassword } from "@/modules/auth/password";
import {
  checkRateLimit,
  clientIpFromRequest,
  safeApiLog,
} from "@/modules/security";

const bodySchema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(8),
});

/**
 * Login gate with IP + email rate limiting (Educational MVP / single-node).
 * On success the client still calls Auth.js signIn("credentials").
 * Does not return whether the email exists.
 */
export async function POST(request: Request) {
  const ip = clientIpFromRequest(request);

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_credentials" }, { status: 401 });
  }

  const email = parsed.data.email.toLowerCase();
  const rlIp = checkRateLimit(`login-ip:${ip}`, 30, 15 * 60_000);
  const rlEmail = checkRateLimit(`login-email:${email}`, 10, 15 * 60_000);
  if (!rlIp.ok || !rlEmail.ok) {
    safeApiLog("login_rate_limited", { ip });
    return NextResponse.json(
      { error: "rate_limited", retryAfterSec: Math.max(rlIp.retryAfterSec, rlEmail.retryAfterSec) },
      {
        status: 429,
        headers: {
          "Retry-After": String(
            Math.max(rlIp.retryAfterSec, rlEmail.retryAfterSec)
          ),
        },
      }
    );
  }

  const user = await findUserByEmail(email);
  if (!user?.passwordHash) {
    return NextResponse.json({ error: "invalid_credentials" }, { status: 401 });
  }

  const valid = await verifyPassword(parsed.data.password, user.passwordHash);
  if (!valid) {
    return NextResponse.json({ error: "invalid_credentials" }, { status: 401 });
  }

  return NextResponse.json({ ok: true });
}
