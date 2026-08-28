import prisma from "@/data/prisma-client";
import { completeLesson, getLessonProgress, getCourseProgress } from "./progress-service";
import type { LessonPhase } from "./lesson-phases";
import { parseLessonPhase } from "./lesson-phases";

export interface LessonSessionState {
  lessonId: string;
  userId: string;
  currentPhase: LessonPhase;
  quizScore: number | null;
  masteryLevel: string | null;
  isCompleted: boolean;
  timeSpentSec: number;
}

/**
 * Load the current session state for a user/lesson pair.
 * If no record exists, the lesson is NOT_STARTED.
 */
export async function getLessonSession(
  userId: string,
  lessonId: string
): Promise<LessonSessionState> {
  const progress = await getLessonProgress(userId, lessonId);

  const defaultState: LessonSessionState = {
    lessonId,
    userId,
    currentPhase: "LEARN",
    quizScore: null,
    masteryLevel: null,
    isCompleted: false,
    timeSpentSec: 0,
  };

  if (!progress) return defaultState;

  // Parse resumable state from JSON metadata field
  const meta = progress.metadata as Record<string, unknown> | null;
  return {
    lessonId,
    userId,
    currentPhase: parseLessonPhase(meta?.currentPhase) ?? "LEARN",
    quizScore: (meta?.quizScore as number) ?? null,
    masteryLevel: (meta?.masteryLevel as string) ?? null,
    isCompleted: progress.status === "COMPLETED",
    timeSpentSec: progress.timeSpentSec,
  };
}

/**
 * Save intermediate phase progress (not yet completed).
 */
export async function saveLessonPhase(
  userId: string,
  lessonId: string,
  phase: LessonPhase,
  timeSpentSec: number,
  quizScore?: number,
  masteryLevel?: string
) {
  const existing = await getLessonProgress(userId, lessonId);

  if (!existing) {
    await prisma.lessonProgress.create({
      data: {
        userId,
        lessonId,
        status: "IN_PROGRESS",
        startedAt: new Date(),
        timeSpentSec,
        metadata: {
          currentPhase: phase,
          quizScore: quizScore ?? null,
          masteryLevel: masteryLevel ?? null,
        },
      },
    });
    return;
  }

  await prisma.lessonProgress.update({
    where: { userId_lessonId: { userId, lessonId } },
    data: {
      timeSpentSec,
      metadata: {
        currentPhase: phase,
        quizScore: quizScore ?? null,
        masteryLevel: masteryLevel ?? null,
      },
    },
  });
}

/**
 * Mark lesson as fully completed.
 * Phase C: ConceptMastery is written at TEST submit via mastery-runtime-service.
 */
export async function finishLesson(
  userId: string,
  lessonId: string,
  timeSpentSec: number,
  quizScore: number,
  skillId: string | null
) {
  void quizScore;
  void skillId;
  await completeLesson(userId, lessonId, timeSpentSec);
}

export { getCourseProgress };
