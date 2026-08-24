import { NextResponse } from "next/server";
import { z } from "zod";
import { auth } from "@/auth";
import { findLessonBySlug } from "@/data/repositories/lesson-repository";
import { saveLessonPhase, getLessonSession } from "@/modules/learning-engine/lesson-session-service";

const bodySchema = z.object({
  academySlug: z.string(),
  courseSlug: z.string(),
  moduleSlug: z.string(),
  lessonSlug: z.string(),
  phase: z.enum(["LEARN", "PRACTICE", "TEST", "REVIEW", "MASTER"]),
  timeSpentSec: z.number().int().nonnegative(),
  quizScore: z.number().optional(),
  masteryLevel: z.string().optional(),
});

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
  const { academySlug, courseSlug, moduleSlug, lessonSlug, phase, timeSpentSec, quizScore, masteryLevel } = parsed.data;

  const lesson = await findLessonBySlug(academySlug, courseSlug, moduleSlug, lessonSlug);
  if (!lesson) return NextResponse.json({ error: "Lesson not found" }, { status: 404 });

  await saveLessonPhase(session.user.id, lesson.id, phase, timeSpentSec, quizScore, masteryLevel);
  return NextResponse.json({ ok: true });
}

export async function GET(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const academySlug = searchParams.get("academySlug");
  const courseSlug = searchParams.get("courseSlug");
  const moduleSlug = searchParams.get("moduleSlug");
  const lessonSlug = searchParams.get("lessonSlug");

  if (!academySlug || !courseSlug || !moduleSlug || !lessonSlug) {
    return NextResponse.json({ error: "Missing params" }, { status: 400 });
  }

  const lesson = await findLessonBySlug(academySlug, courseSlug, moduleSlug, lessonSlug);
  if (!lesson) return NextResponse.json({ error: "Lesson not found" }, { status: 404 });

  const lessonSession = await getLessonSession(session.user.id, lesson.id);
  return NextResponse.json(lessonSession);
}
