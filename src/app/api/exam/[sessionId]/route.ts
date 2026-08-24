import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/auth";
import {
  answerExamQuestion,
  flagExamQuestion,
  getExamSessionView,
  submitExamSession,
  updateExamNavigation,
  abandonExamSession,
} from "@/modules/assessment-engine/exam-service";

type RouteParams = { params: Promise<{ sessionId: string }> };

export async function GET(request: Request, { params }: RouteParams) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { sessionId } = await params;
  const url = new URL(request.url);
  const locale = url.searchParams.get("locale") === "en" ? "en" : "fr";

  const view = await getExamSessionView(session.user.id, sessionId, locale);
  if (!view) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(view);
}

const patchSchema = z.discriminatedUnion("action", [
  z.object({
    action: z.literal("answer"),
    sessionQuestionId: z.string().min(1),
    selectedOptionIds: z.array(z.string()).max(10),
    currentIndex: z.number().int().min(0).optional(),
    elapsedSeconds: z.number().int().min(0).optional(),
    remainingSeconds: z.number().int().nullable().optional(),
  }),
  z.object({
    action: z.literal("flag"),
    sessionQuestionId: z.string().min(1),
    flagged: z.boolean(),
  }),
  z.object({
    action: z.literal("navigate"),
    currentIndex: z.number().int().min(0).optional(),
    elapsedSeconds: z.number().int().min(0).optional(),
    remainingSeconds: z.number().int().nullable().optional(),
  }),
  z.object({
    action: z.literal("abandon"),
  }),
]);

export async function PATCH(request: Request, { params }: RouteParams) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { sessionId } = await params;
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = patchSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  try {
    const data = parsed.data;
    if (data.action === "answer") {
      await answerExamQuestion(
        session.user.id,
        sessionId,
        data.sessionQuestionId,
        data.selectedOptionIds,
        data.currentIndex,
        data.elapsedSeconds,
        data.remainingSeconds
      );
    } else if (data.action === "flag") {
      await flagExamQuestion(
        session.user.id,
        sessionId,
        data.sessionQuestionId,
        data.flagged
      );
    } else if (data.action === "navigate") {
      await updateExamNavigation(session.user.id, sessionId, data);
    } else if (data.action === "abandon") {
      await abandonExamSession(session.user.id, sessionId);
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Update failed";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

const submitSchema = z.object({
  locale: z.enum(["fr", "en"]).default("fr"),
  elapsedSeconds: z.number().int().min(0).optional(),
});

export async function POST(request: Request, { params }: RouteParams) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { sessionId } = await params;
  let raw: unknown = {};
  try {
    raw = await request.json();
  } catch {
    raw = {};
  }

  const parsed = submitSchema.safeParse(raw ?? {});
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  try {
    const outcome = await submitExamSession(
      session.user.id,
      sessionId,
      parsed.data.locale,
      parsed.data.elapsedSeconds
    );
    return NextResponse.json({
      ok: true,
      practiceScore: outcome.score,
      readiness: outcome.readiness,
      domainBreakdown: outcome.domainBreakdown,
      skillBreakdown: outcome.skillBreakdown,
      deliveryBreakdown: outcome.deliveryBreakdown,
      recommendation: outcome.recommendation,
      notice:
        parsed.data.locale === "fr"
          ? "Score de pratique uniquement — ce n'est pas un score officiel PMI."
          : "Practice score only — this is not an official PMI score.",
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Submit failed";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
