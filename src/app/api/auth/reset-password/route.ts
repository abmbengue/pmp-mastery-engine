import { NextResponse } from "next/server";
import {
  resetPasswordSchema,
  resetPasswordWithToken,
} from "@/modules/auth/password-reset";
import { checkRateLimit, clientIpFromRequest, safeApiLog } from "@/modules/security";

export async function POST(request: Request) {
  const ip = clientIpFromRequest(request);
  const rl = checkRateLimit(`pwd-reset-consume:${ip}`, 20, 15 * 60_000);
  if (!rl.ok) {
    safeApiLog("password_reset_consume_rate_limited", { ip });
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

  const parsed = resetPasswordSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "invalid_input" },
      { status: 400 }
    );
  }

  const result = await resetPasswordWithToken({
    token: parsed.data.token,
    password: parsed.data.password,
  });

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
