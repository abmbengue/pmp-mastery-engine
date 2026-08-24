import { NextResponse } from "next/server";
import { auth } from "@/auth";
import {
  isDemoModeEnabled,
  isDemoUserSession,
} from "@/modules/demo/demo-config";
import { resetDemoUserData } from "@/modules/demo/demo-reset-service";

export async function POST() {
  if (!isDemoModeEnabled()) {
    return NextResponse.json({ error: "demo_disabled" }, { status: 404 });
  }

  const session = await auth();
  if (!session?.user?.id || !isDemoUserSession(session)) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  await resetDemoUserData();
  return NextResponse.json({ ok: true });
}
