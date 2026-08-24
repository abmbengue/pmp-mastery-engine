import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/auth";
import {
  createRetrySession,
  getOrCreatePracticeTarget,
  getPmpPerformanceHistory,
  setPracticeTarget,
  overrideExamErrorCategory,
} from "@/modules/assessment-engine/exam-service";

export async function GET(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const url = new URL(request.url);
  const locale = url.searchParams.get("locale") === "en" ? "en" : "fr";
  const history = await getPmpPerformanceHistory(session.user.id, locale);
  const target = await getOrCreatePracticeTarget(session.user.id);
  return NextResponse.json({
    history,
    targetScorePercent: target.targetScorePercent,
    targetGap:
      target.targetScorePercent -
      (history.currentScore ?? 0),
  });
}

const bodySchema = z.discriminatedUnion("action", [
  z.object({
    action: z.literal("set_target"),
    targetScorePercent: z.union([
      z.literal(70),
      z.literal(75),
      z.literal(80),
      z.literal(85),
    ]),
  }),
  z.object({
    action: z.literal("start_retry"),
    parentSessionId: z.string().min(1),
    retryType: z.enum([
      "RETRY_WRONG_QUESTIONS",
      "RETRY_WEAK_SKILLS",
      "RETRY_WEAK_DOMAIN",
      "RETRY_ERROR_TYPE",
      "RETRY_MIXED",
    ]),
  }),
  z.object({
    action: z.literal("override_error"),
    sessionQuestionId: z.string().min(1),
    category: z.enum([
      "KNOWLEDGE_GAP",
      "MISREAD_SCENARIO",
      "WRONG_PRIORITY",
      "WRONG_ACTION",
      "AGILE_MINDSET",
      "STAKEHOLDER_ERROR",
      "RISK_ERROR",
      "PROCESS_ERROR",
      "OTHER",
    ]),
  }),
]);

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  try {
    if (parsed.data.action === "set_target") {
      const target = await setPracticeTarget(
        session.user.id,
        parsed.data.targetScorePercent
      );
      return NextResponse.json({ ok: true, target });
    }
    if (parsed.data.action === "start_retry") {
      const { session: retrySession, plan } = await createRetrySession(
        session.user.id,
        parsed.data.parentSessionId,
        parsed.data.retryType
      );
      return NextResponse.json({
        ok: true,
        sessionId: retrySession.id,
        plan,
      });
    }
    await overrideExamErrorCategory(
      session.user.id,
      parsed.data.sessionQuestionId,
      parsed.data.category
    );
    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
