import prisma from "@/data/prisma-client";
import type { LessonProgressStatus, MasteryLevel } from "@/generated/prisma/client";
export { computeMasteryLevelFromScore } from "@/shared/utils/mastery";

export async function startLesson(userId: string, lessonId: string) {
  return prisma.lessonProgress.upsert({
    where: { userId_lessonId: { userId, lessonId } },
    create: {
      userId,
      lessonId,
      status: "IN_PROGRESS",
      startedAt: new Date(),
    },
    update: {
      status: "IN_PROGRESS",
      startedAt: new Date(),
    },
  });
}

export async function completeLesson(
  userId: string,
  lessonId: string,
  timeSpentSec: number
) {
  return prisma.lessonProgress.upsert({
    where: { userId_lessonId: { userId, lessonId } },
    create: {
      userId,
      lessonId,
      status: "COMPLETED",
      timeSpentSec,
      startedAt: new Date(),
      completedAt: new Date(),
    },
    update: {
      status: "COMPLETED",
      timeSpentSec,
      completedAt: new Date(),
    },
  });
}

export async function getLessonProgress(userId: string, lessonId: string) {
  return prisma.lessonProgress.findUnique({
    where: { userId_lessonId: { userId, lessonId } },
  });
}

export async function getCourseProgress(userId: string, courseId: string) {
  const course = await prisma.course.findUnique({
    where: { id: courseId },
    include: {
      modules: {
        include: { lessons: true },
      },
    },
  });

  if (!course) return null;

  const allLessons = course.modules.flatMap((m) => m.lessons);
  const lessonIds = allLessons.map((l) => l.id);

  const progressRecords = await prisma.lessonProgress.findMany({
    where: {
      userId,
      lessonId: { in: lessonIds },
    },
  });

  const completed = progressRecords.filter((p) => p.status === "COMPLETED").length;
  const total = allLessons.length;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
  const totalTimeSpentSec = progressRecords.reduce(
    (sum, p) => sum + p.timeSpentSec,
    0
  );

  return {
    courseId,
    completedLessons: completed,
    totalLessons: total,
    percentage,
    totalTimeSpentSec,
  };
}

export async function updateConceptMastery(
  userId: string,
  skillId: string,
  level: MasteryLevel
) {
  return prisma.conceptMastery.upsert({
    where: { userId_skillId: { userId, skillId } },
    create: {
      userId,
      skillId,
      level,
      lastReviewedAt: new Date(),
    },
    update: {
      level,
      lastReviewedAt: new Date(),
    },
  });
}

export async function getUserMasteries(userId: string) {
  return prisma.conceptMastery.findMany({
    where: { userId },
    include: { skill: true },
  });
}

export type { LessonProgressStatus, MasteryLevel };
