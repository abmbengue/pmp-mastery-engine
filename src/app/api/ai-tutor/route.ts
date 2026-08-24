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

  const parsed = aiTutorApiBodySchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "invalid_input", details: parsed.error.issues[0]?.message },
      { status: 400 }
    );
  }

  try {
    const context = await loadAiTutorContext(parsed.data);
    const service = getAiTutorService();
    const response = await service.ask({
      action: parsed.data.mode,
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
