/**
 * Legacy linear PMP Study task Continue/Start resolution (Phase B.3.2).
 */

import { parseLessonPhase, type LessonPhase } from "@/modules/learning-engine/lesson-phases";
import type { LessonProgressStatusValue } from "@/modules/learning-engine/next-lesson-service";
import type { StudyLessonRef } from "./pmp-study";

export type TaskLessonProgressStatus = LessonProgressStatusValue;

export type TaskLessonProgressSnapshot = {
  status: TaskLessonProgressStatus;
  updatedAtMs: number | null;
  currentPhase: LessonPhase | null;
  hasProgressRecord: boolean;
};

export type TaskLessonAction = "CONTINUE" | "START";

export type TaskContinueReason =
  | "IN_PROGRESS_RECENT"
  | "FIRST_INCOMPLETE_WITH_PROGRESS"
  | "FIRST_INCOMPLETE_NO_PROGRESS"
  | "ALL_COMPLETE_PRIMARY"
  | "ADAPTIVE_WEAK_SKILL"
  | "ADAPTIVE_REVIEW_DUE";

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

export function emptyTaskProgressSnapshot(): TaskLessonProgressSnapshot {
  return {
    status: "NOT_STARTED",
    updatedAtMs: null,
    currentPhase: null,
    hasProgressRecord: false,
  };
}

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
    const progress = progressBySlug[firstIncomplete.slug] ?? emptyTaskProgressSnapshot();
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
    const progress = progressBySlug[lesson.slug] ?? emptyTaskProgressSnapshot();
    return {
      ...lesson,
      progressStatus: progress.status,
      currentPhase: progress.currentPhase,
      isContinueTarget: continueTargetSlug === lesson.slug,
    };
  });
}

export function parseTaskLessonCurrentPhase(metadata: unknown): LessonPhase | null {
  if (!metadata || typeof metadata !== "object") return null;
  return parseLessonPhase((metadata as Record<string, unknown>).currentPhase);
}
