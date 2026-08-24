import { NextResponse } from "next/server";
import { auth } from "@/auth";
import {
  AiTutorError,
  getAiTutorService,
} from "@/modules/ai-tutor";
import {
  aiTutorApiBodySchema,
  loadAiTutorContext,
} from "@/modules/ai-tutor/context-loader";
import {
  checkRateLimit,
  clientIpFromRequest,
  safeApiLog,
} from "@/modules/security";

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const rl = checkRateLimit(`ai-tutor:${session.user.id}`, 30, 60_000);
  if (!rl.ok) {
    safeApiLog("ai_tutor_rate_limited", { userId: session.user.id });
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
    return NextResponse.json({ error: "malformed_request" }, { status: 400 });
  }

  const parsed = aiTutorApiBodySchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "invalid_input", details: parsed.error.issues[0]?.message },
      { status: 400 }
    );
  }

  try {
    const context = await loadAiTutorContext(parsed.data);

    // During an in-progress exam, never allow answer-revealing modes
    let mode = parsed.data.mode;
    if (context.learningItemType === "EXAM_IN_PROGRESS" && mode !== "HINT") {
      mode = "HINT";
    }

    const service = getAiTutorService();
    const response = await service.ask({
      action: mode,
      context,
      userMessage: parsed.data.userMessage,
    });

    return NextResponse.json({
      ok: true,
      message: response.message,
      locale: response.locale,
      mode: response.mode,
      provider: response.provider,
      isStub: response.isStub,
    });
  } catch (err) {
    const code = err instanceof AiTutorError ? err.code : "UNKNOWN";
    const status =
      code === "MALFORMED_REQUEST" || code === "MISSING_API_KEY" ? 400 : 503;
    safeApiLog("ai_tutor_error", {
      userId: session.user.id,
      code,
      ip: clientIpFromRequest(request),
    });

    return NextResponse.json(
      {
        ok: false,
        error: "ai_tutor_unavailable",
        code,
      },
      { status }
    );
  }
}
