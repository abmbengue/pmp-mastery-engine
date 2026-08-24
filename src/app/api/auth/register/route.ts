import { NextResponse } from "next/server";
import { findUserByEmail, createUser, enrollUserInActiveV1Courses } from "@/data/repositories/user-repository";
import { deriveDisplayNameFromEmail, hashPassword, registerSchema } from "@/modules/auth/password";
import {
  checkRateLimit,
  clientIpFromRequest,
  safeApiLog,
} from "@/modules/security";

export async function POST(request: Request) {
  const ip = clientIpFromRequest(request);
  const rl = checkRateLimit(`register:${ip}`, 10, 15 * 60_000);
  if (!rl.ok) {
    safeApiLog("register_rate_limited", { ip });
    return NextResponse.json(
      { error: "rate_limited", retryAfterSec: rl.retryAfterSec },
      {
        status: 429,
        headers: { "Retry-After": String(rl.retryAfterSec) },
      }
    );
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = registerSchema.safeParse(raw);

  if (!parsed.success) {
    return NextResponse.json({
      error: parsed.error.issues[0]?.message ?? "invalid_input",
    }, { status: 400 });
  }

  const { email, password, locale } = parsed.data;
  const existing = await findUserByEmail(email);
  if (existing) {
    return NextResponse.json({ error: "email_exists" }, { status: 409 });
  }

  const passwordHash = await hashPassword(password);
  const user = await createUser({
    email,
    name: deriveDisplayNameFromEmail(email),
    locale,
    passwordHash,
  });

  // V1 simplification: auto-enroll only into active V1 courses.
  await enrollUserInActiveV1Courses(user.id);

  safeApiLog("register_ok", { userId: user.id });
  return NextResponse.json({ ok: true, email: user.email });
}
