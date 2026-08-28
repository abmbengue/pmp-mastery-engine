/**
 * Task-scoped lesson progress for PMP Study (Phase B.3.2 P1).
 * Reuses LessonProgress — no new progression system.
 */

import prisma from "@/data/prisma-client";
import { parseLessonPhase, type LessonPhase } from "@/modules/learning-engine/lesson-phases";
import type { LessonProgressStatusValue } from "@/modules/learning-engine/next-lesson-service";
import {
  PMP_ACADEMY_SLUG,
  PMP_COURSE_SLUG,
} from "./pmp-lesson-catalog";
import type { StudyLessonRef } from "./pmp-study";

export type TaskLessonProgressStatus = LessonProgressStatusValue;

export type TaskLessonProgressSnapshot = {
  status: TaskLessonProgressStatus;
  updatedAtMs: number | null;
  currentPhase: LessonPhase | null;
  /** True when a LessonProgress row exists in DB. */
  hasProgressRecord: boolean;
};

export type TaskLessonAction = "CONTINUE" | "START";

export type TaskContinueReason =
  | "IN_PROGRESS_RECENT"
  | "FIRST_INCOMPLETE_WITH_PROGRESS"
  | "FIRST_INCOMPLETE_NO_PROGRESS"
  | "ALL_COMPLETE_PRIMARY";

export type TaskContinueResolution = {
  action: TaskLessonAction;
  lessonSlug: string;
  reason: TaskContinueReason;
  currentPhase: LessonPhase | null;
};

export type StudyLessonWithProgress = StudyLessonRef & {
  progressStatus: TaskLessonProgressStatus;
  currentPhase: LessonPhase | null;
  isContinueTarget: boolean;
};

function primaryLesson(lessons: StudyLessonRef[]): StudyLessonRef | undefined {
  return lessons.find((l) => l.coverageType === "PRIMARY") ?? lessons[0];
}

function parseCurrentPhase(metadata: unknown): LessonPhase | null {
  if (!metadata || typeof metadata !== "object") return null;
  return parseLessonPhase((metadata as Record<string, unknown>).currentPhase);
}

function emptySnapshot(): TaskLessonProgressSnapshot {
  return {
    status: "NOT_STARTED",
    updatedAtMs: null,
    currentPhase: null,
    hasProgressRecord: false,
  };
}

/**
 * Pure task-scoped Continue/Start resolution from canonical lesson order + progress map.
 */
export function resolveTaskContinueLesson(
  lessons: StudyLessonRef[],
  progressBySlug: Record<string, TaskLessonProgressSnapshot | undefined>
): TaskContinueResolution | null {
  if (lessons.length === 0) return null;

  const inProgress = lessons
    .map((lesson) => ({ lesson, progress: progressBySlug[lesson.slug] }))
    .filter(({ progress }) => progress?.status === "IN_PROGRESS")
    .sort((a, b) => {
      const aTime = a.progress?.updatedAtMs ?? 0;
      const bTime = b.progress?.updatedAtMs ?? 0;
      return bTime - aTime;
    });

  if (inProgress.length > 0) {
    const { lesson, progress } = inProgress[0];
    return {
      action: "CONTINUE",
      lessonSlug: lesson.slug,
      reason: "IN_PROGRESS_RECENT",
      currentPhase: progress?.currentPhase ?? null,
    };
  }

  const firstIncomplete = lessons.find(
    (lesson) => progressBySlug[lesson.slug]?.status !== "COMPLETED"
  );

  if (firstIncomplete) {
    const progress = progressBySlug[firstIncomplete.slug] ?? emptySnapshot();
    if (progress.hasProgressRecord) {
      return {
        action: "CONTINUE",
        lessonSlug: firstIncomplete.slug,
        reason: "FIRST_INCOMPLETE_WITH_PROGRESS",
        currentPhase: progress.currentPhase,
      };
    }
    return {
      action: "START",
      lessonSlug: firstIncomplete.slug,
      reason: "FIRST_INCOMPLETE_NO_PROGRESS",
      currentPhase: null,
    };
  }

  const primary = primaryLesson(lessons);
  if (!primary) return null;

  return {
    action: "START",
    lessonSlug: primary.slug,
    reason: "ALL_COMPLETE_PRIMARY",
    currentPhase: null,
  };
}

export function enrichLessonsWithTaskProgress(
  lessons: StudyLessonRef[],
  progressBySlug: Record<string, TaskLessonProgressSnapshot | undefined>,
  continueTargetSlug: string | null
): StudyLessonWithProgress[] {
  return lessons.map((lesson) => {
    const progress = progressBySlug[lesson.slug] ?? emptySnapshot();
    return {
      ...lesson,
      progressStatus: progress.status,
      currentPhase: progress.currentPhase,
      isContinueTarget: continueTargetSlug === lesson.slug,
    };
  });
}

/**
 * Load existing LessonProgress for mapped task lessons (server-side only).
 */
export async function loadTaskLessonProgressMap(
  userId: string,
  lessonSlugs: string[]
): Promise<Record<string, TaskLessonProgressSnapshot>> {
  const uniqueSlugs = [...new Set(lessonSlugs)];
  const result: Record<string, TaskLessonProgressSnapshot> = {};
  for (const slug of uniqueSlugs) {
    result[slug] = emptySnapshot();
  }
  if (uniqueSlugs.length === 0) return result;

  const dbLessons = await prisma.lesson.findMany({
    where: {
      slug: { in: uniqueSlugs },
      module: {
        course: {
          slug: PMP_COURSE_SLUG,
          academy: { slug: PMP_ACADEMY_SLUG },
        },
      },
    },
    select: { id: true, slug: true },
  });

  const slugById = new Map(dbLessons.map((l) => [l.id, l.slug] as const));
  const records = await prisma.lessonProgress.findMany({
    where: {
      userId,
      lessonId: { in: dbLessons.map((l) => l.id) },
    },
    select: {
      lessonId: true,
      status: true,
      updatedAt: true,
      metadata: true,
    },
  });

  for (const record of records) {
    const slug = slugById.get(record.lessonId);
    if (!slug) continue;
    result[slug] = {
      status: record.status as TaskLessonProgressStatus,
      updatedAtMs: record.updatedAt.getTime(),
      currentPhase: parseCurrentPhase(record.metadata),
      hasProgressRecord: true,
    };
  }

  return result;
}
