import { NextResponse } from "next/server";
import {
  forgotPasswordSchema,
  requestPasswordReset,
} from "@/modules/auth/password-reset";
import { clientIpFromRequest, checkRateLimit, safeApiLog } from "@/modules/security";

/**
 * Always returns generic success to avoid email enumeration.
 * Rate-limited; may return 429 when abused.
 */
export async function POST(request: Request) {
  const ip = clientIpFromRequest(request);
  const rl = checkRateLimit(`pwd-reset-api:${ip}`, 20, 15 * 60_000);
  if (!rl.ok) {
    safeApiLog("password_reset_api_rate_limited", { ip });
    return NextResponse.json(
      { ok: true, message: "if_account_exists_email_sent" },
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

  const parsed = forgotPasswordSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_input" }, { status: 400 });
  }

  await requestPasswordReset({
    email: parsed.data.email.toLowerCase(),
    locale: parsed.data.locale,
    ip,
  });

  return NextResponse.json({
    ok: true,
    message: "if_account_exists_email_sent",
  });
}
