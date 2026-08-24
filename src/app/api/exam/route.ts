import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/auth";
import {
  createExamSession,
  listExams,
} from "@/modules/assessment-engine/exam-service";
import { checkRateLimit, safeApiLog } from "@/modules/security";

const startSchema = z.object({
  examSlug: z.string().min(1).max(120),
});

export async function GET(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = new URL(request.url);
  const locale = url.searchParams.get("locale") === "en" ? "en" : "fr";
  const exams = await listExams(locale);
  return NextResponse.json({ exams });
}

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const rl = checkRateLimit(`exam-start:${session.user.id}`, 20, 60_000);
  if (!rl.ok) {
    safeApiLog("exam_start_rate_limited", { userId: session.user.id });
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
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = startSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  try {
    const examSession = await createExamSession(
      session.user.id,
      parsed.data.examSlug
    );
    return NextResponse.json({
      sessionId: examSession.id,
      examSlug: examSession.exam.slug,
      questionCount: examSession.questions.length,
      durationMinutes: examSession.exam.durationMinutes,
      remainingSeconds: examSession.remainingSeconds,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to start exam";
    safeApiLog("exam_start_failed", { userId: session.user.id });
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
