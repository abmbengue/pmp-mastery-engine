/**
 * Phase C — adaptive Continue/Start for PMP Study tasks.
 * Pure resolver: weakness/review hints override linear order when safe.
 * IN_PROGRESS lessons always win (legacy behavior preserved).
 */

import type { StudyLessonRef } from "./pmp-study";
import {
  resolveTaskContinueLesson,
  type TaskContinueReason,
  type TaskContinueResolution,
  type TaskLessonProgressSnapshot,
  emptyTaskProgressSnapshot,
} from "./task-continue-resolver";

export type AdaptiveSkillHintSource = "WEAKNESS" | "REVIEW_DUE" | "WEAK_MASTERY";

export type AdaptiveSkillHint = {
  skillId: string;
  source: AdaptiveSkillHintSource;
  /** Lower = higher priority */
  priority: number;
};

export type AdaptiveTaskHints = {
  skillHints: AdaptiveSkillHint[];
  /** lesson slug → DB skill ids linked to that lesson */
  lessonSkillIds: Record<string, string[]>;
};

function emptySnapshot(): TaskLessonProgressSnapshot {
  return emptyTaskProgressSnapshot();
}

function findInProgressResolution(
  lessons: StudyLessonRef[],
  progressBySlug: Record<string, TaskLessonProgressSnapshot | undefined>
): TaskContinueResolution | null {
  const inProgress = lessons
    .map((lesson) => ({ lesson, progress: progressBySlug[lesson.slug] }))
    .filter(({ progress }) => progress?.status === "IN_PROGRESS")
    .sort((a, b) => {
      const aTime = a.progress?.updatedAtMs ?? 0;
      const bTime = b.progress?.updatedAtMs ?? 0;
      return bTime - aTime;
    });

  if (inProgress.length === 0) return null;

  const { lesson, progress } = inProgress[0];
  return {
    action: "CONTINUE",
    lessonSlug: lesson.slug,
    reason: "IN_PROGRESS_RECENT",
    currentPhase: progress?.currentPhase ?? null,
  };
}

function lessonOrderRank(lesson: StudyLessonRef, lessons: StudyLessonRef[]): number {
  const coverageRank: Record<StudyLessonRef["coverageType"], number> = {
    PRIMARY: 0,
    SECONDARY: 1,
    SUPPORTING: 2,
  };
  const index = lessons.findIndex((l) => l.slug === lesson.slug);
  return coverageRank[lesson.coverageType] * 100 + index;
}

function pickLessonForSkill(
  skillId: string,
  lessons: StudyLessonRef[],
  progressBySlug: Record<string, TaskLessonProgressSnapshot | undefined>,
  lessonSkillIds: Record<string, string[]>
): StudyLessonRef | null {
  const matching = lessons.filter((lesson) =>
    (lessonSkillIds[lesson.slug] ?? []).includes(skillId)
  );
  if (matching.length === 0) return null;

  const incomplete = matching.filter(
    (lesson) => progressBySlug[lesson.slug]?.status !== "COMPLETED"
  );
  const pool = incomplete.length > 0 ? incomplete : matching;
  return [...pool].sort(
    (a, b) => lessonOrderRank(a, lessons) - lessonOrderRank(b, lessons)
  )[0];
}

function adaptiveReasonForSource(source: AdaptiveSkillHintSource): TaskContinueReason {
  if (source === "REVIEW_DUE") return "ADAPTIVE_REVIEW_DUE";
  return "ADAPTIVE_WEAK_SKILL";
}

function tryAdaptiveResolution(
  lessons: StudyLessonRef[],
  progressBySlug: Record<string, TaskLessonProgressSnapshot | undefined>,
  hints?: AdaptiveTaskHints | null
): TaskContinueResolution | null {
  if (!hints || hints.skillHints.length === 0) return null;

  const sortedHints = [...hints.skillHints].sort((a, b) => {
    if (a.priority !== b.priority) return a.priority - b.priority;
    return a.skillId.localeCompare(b.skillId);
  });

  for (const hint of sortedHints) {
    const lesson = pickLessonForSkill(
      hint.skillId,
      lessons,
      progressBySlug,
      hints.lessonSkillIds
    );
    if (!lesson) continue;

    const progress = progressBySlug[lesson.slug] ?? emptySnapshot();
    const action =
      progress.status === "IN_PROGRESS" ||
      (progress.hasProgressRecord && progress.status !== "COMPLETED")
        ? "CONTINUE"
        : "START";

    return {
      action,
      lessonSlug: lesson.slug,
      reason: adaptiveReasonForSource(hint.source),
      currentPhase: progress.currentPhase,
    };
  }

  return null;
}

/**
 * Adaptive task Continue/Start — IN_PROGRESS first, then weakness/review hints, then legacy.
 */
export function resolveAdaptiveTaskContinueLesson(
  lessons: StudyLessonRef[],
  progressBySlug: Record<string, TaskLessonProgressSnapshot | undefined>,
  hints?: AdaptiveTaskHints | null
): TaskContinueResolution | null {
  if (lessons.length === 0) return null;

  const inProgress = findInProgressResolution(lessons, progressBySlug);
  if (inProgress) return inProgress;

  const adaptive = tryAdaptiveResolution(lessons, progressBySlug, hints);
  if (adaptive) return adaptive;

  return resolveTaskContinueLesson(lessons, progressBySlug);
}
