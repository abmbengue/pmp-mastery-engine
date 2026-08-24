import { NextResponse } from "next/server";
import { z } from "zod";
import { findUserByEmail } from "@/data/repositories/user-repository";
import { findLessonBySlug } from "@/data/repositories/lesson-repository";
import { saveLessonPhase, getLessonSession } from "@/modules/learning-engine/lesson-session-service";

const bodySchema = z.object({
  userEmail: z.string().email(),
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
  const raw = await request.json();
  const parsed = bodySchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }
  const { userEmail, academySlug, courseSlug, moduleSlug, lessonSlug, phase, timeSpentSec, quizScore, masteryLevel } = parsed.data;

  const user = await findUserByEmail(userEmail);
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const lesson = await findLessonBySlug(academySlug, courseSlug, moduleSlug, lessonSlug);
  if (!lesson) return NextResponse.json({ error: "Lesson not found" }, { status: 404 });

  await saveLessonPhase(user.id, lesson.id, phase, timeSpentSec, quizScore, masteryLevel);
  return NextResponse.json({ ok: true });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userEmail = searchParams.get("userEmail");
  const academySlug = searchParams.get("academySlug");
  const courseSlug = searchParams.get("courseSlug");
  const moduleSlug = searchParams.get("moduleSlug");
  const lessonSlug = searchParams.get("lessonSlug");

  if (!userEmail || !academySlug || !courseSlug || !moduleSlug || !lessonSlug) {
    return NextResponse.json({ error: "Missing params" }, { status: 400 });
  }

  const user = await findUserByEmail(userEmail);
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const lesson = await findLessonBySlug(academySlug, courseSlug, moduleSlug, lessonSlug);
  if (!lesson) return NextResponse.json({ error: "Lesson not found" }, { status: 404 });

  const session = await getLessonSession(user.id, lesson.id);
  return NextResponse.json(session);
}
