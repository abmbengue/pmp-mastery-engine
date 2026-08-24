import { NextResponse } from "next/server";
import { z } from "zod";
import { findUserByEmail } from "@/data/repositories/user-repository";
import { findLessonBySlug } from "@/data/repositories/lesson-repository";
import { finishLesson, getCourseProgress } from "@/modules/learning-engine/lesson-session-service";
import prisma from "@/data/prisma-client";

const bodySchema = z.object({
  userEmail: z.string().email(),
  academySlug: z.string(),
  courseSlug: z.string(),
  moduleSlug: z.string(),
  lessonSlug: z.string(),
  timeSpentSec: z.number().int().nonnegative(),
  quizScore: z.number().min(0).max(100),
});

export async function POST(request: Request) {
  const raw = await request.json();
  const parsed = bodySchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }
  const { userEmail, academySlug, courseSlug, moduleSlug, lessonSlug, timeSpentSec, quizScore } = parsed.data;

  const user = await findUserByEmail(userEmail);
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const lesson = await findLessonBySlug(academySlug, courseSlug, moduleSlug, lessonSlug);
  if (!lesson) return NextResponse.json({ error: "Lesson not found" }, { status: 404 });

  // Resolve skillId from quiz question of this lesson
  const quizItem = lesson.learningItems.find((i) => i.type === "QUIZ");
  const question = quizItem?.questions[0];
  const skillId = question?.skillId ?? null;

  await finishLesson(user.id, lesson.id, timeSpentSec, quizScore, skillId);

  // Return updated course progress
  const course = await prisma.course.findFirst({
    where: {
      slug: courseSlug,
      academy: { slug: academySlug },
    },
  });
  const courseProgress = course ? await getCourseProgress(user.id, course.id) : null;

  return NextResponse.json({ ok: true, courseProgress });
}
