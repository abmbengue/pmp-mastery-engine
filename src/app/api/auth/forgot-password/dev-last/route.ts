import { NextResponse } from "next/server";
import { DevPasswordResetEmail } from "@/modules/auth/password-reset-email";

/**
 * Dev/E2E only — never enable in real production.
 * Returns the last password-reset email payload from the DevPasswordResetEmail sink.
 */
export async function GET() {
  if (process.env.PASSWORD_RESET_DEV_EXPOSE !== "1") {
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }

  const payload = DevPasswordResetEmail.lastPayload;
  if (!payload) {
    return NextResponse.json({ error: "empty" }, { status: 404 });
  }

  return NextResponse.json({
    to: payload.to,
    resetUrl: payload.resetUrl,
    locale: payload.locale,
  });
}
