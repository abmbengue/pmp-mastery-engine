import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { getShortById } from "@/modules/learning-engine/short-learning-service";
import {
  markShortBodySchema,
  markShortCompleted,
} from "@/modules/learning-engine/short-progress-service";

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ error: "malformed_request" }, { status: 400 });
  }

  const parsed = markShortBodySchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid_input" }, { status: 400 });
  }

  const short = await getShortById(parsed.data.shortId, "en");
  if (!short || short.academySlug !== parsed.data.academySlug) {
    return NextResponse.json({ error: "not_found" }, { status: 404 });
  }

  const result = await markShortCompleted(session.user.id, parsed.data.shortId);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 404 });
  }

  return NextResponse.json({
    ok: true,
    shortId: result.shortId,
    shortsCompleted: result.shortsCompleted,
    progressStatus: result.progressStatus,
  });
}
