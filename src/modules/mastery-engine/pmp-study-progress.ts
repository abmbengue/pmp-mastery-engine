/**
 * Task-scoped lesson progress for PMP Study (Phase B.3.2 P1 + Phase C adaptive).
 * Reuses LessonProgress — no new progression system.
 */

import prisma from "@/data/prisma-client";
import {
  PMP_ACADEMY_SLUG,
  PMP_COURSE_SLUG,
} from "./pmp-lesson-catalog";
import type { EcoTaskStableId } from "./types";
import type { AdaptiveTaskHints } from "./adaptive-task-resolver";
import { quizAttemptsToMasteryInputs } from "./attempt-adapter";
import type { QuestionMasteryContext } from "./attempt-adapter";
import { buildReviewQueue } from "@/modules/learning-engine/spaced-repetition";
import { buildWeaknessSignals } from "./weakness-model";
import {
  emptyTaskProgressSnapshot,
  enrichLessonsWithTaskProgress,
  parseTaskLessonCurrentPhase,
  resolveTaskContinueLesson,
  type StudyLessonWithProgress,
  type TaskContinueReason,
  type TaskContinueResolution,
  type TaskLessonAction,
  type TaskLessonProgressSnapshot,
  type TaskLessonProgressStatus,
} from "./task-continue-resolver";

export {
  emptyTaskProgressSnapshot,
  enrichLessonsWithTaskProgress,
  resolveTaskContinueLesson,
  type StudyLessonWithProgress,
  type TaskContinueReason,
  type TaskContinueResolution,
  type TaskLessonAction,
  type TaskLessonProgressSnapshot,
  type TaskLessonProgressStatus,
};

export { resolveAdaptiveTaskContinueLesson } from "./adaptive-task-resolver";
export type { AdaptiveTaskHints, AdaptiveSkillHint } from "./adaptive-task-resolver";

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
    result[slug] = emptyTaskProgressSnapshot();
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
      currentPhase: parseTaskLessonCurrentPhase(record.metadata),
      hasProgressRecord: true,
    };
  }

  return result;
}

async function loadLessonSkillIdsBySlug(
  lessonSlugs: string[]
): Promise<Record<string, string[]>> {
  const result: Record<string, string[]> = {};
  for (const slug of lessonSlugs) {
    result[slug] = [];
  }
  if (lessonSlugs.length === 0) return result;

  const dbLessons = await prisma.lesson.findMany({
    where: {
      slug: { in: lessonSlugs },
      module: {
        course: {
          slug: PMP_COURSE_SLUG,
          academy: { slug: PMP_ACADEMY_SLUG },
        },
      },
    },
    select: {
      slug: true,
      skills: { select: { skillId: true } },
      learningItems: {
        select: {
          questions: { select: { skillId: true } },
        },
      },
    },
  });

  for (const lesson of dbLessons) {
    const ids = new Set<string>();
    for (const link of lesson.skills) {
      if (link.skillId) ids.add(link.skillId);
    }
    for (const item of lesson.learningItems) {
      for (const q of item.questions) {
        if (q.skillId) ids.add(q.skillId);
      }
    }
    result[lesson.slug] = [...ids];
  }

  return result;
}

/**
 * Read-only adaptive hints for a PMP Study task (weakness signals + review due).
 * Does not write mastery state; 7-state is never persisted here.
 */
export async function loadAdaptiveTaskHints(
  userId: string,
  ecoTaskId: EcoTaskStableId,
  lessonSlugs: string[]
): Promise<AdaptiveTaskHints> {
  const lessonSkillIds = await loadLessonSkillIdsBySlug(lessonSlugs);
  const allSkillIds = [...new Set(Object.values(lessonSkillIds).flat())];

  if (allSkillIds.length === 0) {
    return { skillHints: [], lessonSkillIds };
  }

  const skillHints: AdaptiveTaskHints["skillHints"] = [];
  const seenSkills = new Set<string>();

  const attempts = await prisma.quizAttempt.findMany({
    where: {
      userId,
      question: { skillId: { in: allSkillIds } },
    },
    orderBy: { createdAt: "asc" },
    select: {
      questionId: true,
      isCorrect: true,
      confidenceLevel: true,
      createdAt: true,
      question: {
        select: {
          id: true,
          externalKey: true,
          skillId: true,
          conceptSlug: true,
          ecoTaskCode: true,
          examDifficulty: true,
          difficulty: true,
          learningObjective: true,
          masteryMetadata: {
            select: {
              ecoTaskId: true,
              primaryConceptId: true,
              primarySkillId: true,
              cognitiveLevel: true,
              difficulty: true,
              misconceptionIds: true,
            },
          },
        },
      },
    },
  });

  const questionsById: Record<string, QuestionMasteryContext> = {};
  for (const row of attempts) {
    questionsById[row.question.id] = {
      ...row.question,
      masteryMetadata: row.question.masteryMetadata,
    };
  }

  const weaknessInputs = quizAttemptsToMasteryInputs(
    attempts.map((a) => ({
      questionId: a.questionId,
      isCorrect: a.isCorrect,
      confidenceLevel: a.confidenceLevel,
      answeredAt: a.createdAt,
    })),
    questionsById
  );

  const attemptsBySkillId: Record<string, typeof weaknessInputs> = {};
  for (const input of weaknessInputs) {
    if (!input.skillId) continue;
    const list = attemptsBySkillId[input.skillId] ?? [];
    list.push(input);
    attemptsBySkillId[input.skillId] = list;
  }

  const weaknessSignals = buildWeaknessSignals(weaknessInputs);
  for (const signal of weaknessSignals) {
    if (!signal.skillId || !allSkillIds.includes(signal.skillId)) continue;
    if (signal.ecoTaskId && signal.ecoTaskId !== ecoTaskId) continue;
    if (seenSkills.has(signal.skillId)) continue;
    seenSkills.add(signal.skillId);
    skillHints.push({
      skillId: signal.skillId,
      source: "WEAKNESS",
      priority: signal.priority,
    });
  }

  const masteries = await prisma.conceptMastery.findMany({
    where: { userId, skillId: { in: allSkillIds } },
    include: { skill: true },
  });

  const now = new Date();
  const reviewQueue = buildReviewQueue(
    masteries.map((m) => ({
      skillId: m.skillId,
      skillSlug: m.skill.slug,
      masteryLevel: m.level,
      lastReviewedAt: m.lastReviewedAt,
      nextReviewAt: m.nextReviewAt,
      attemptCount: attemptsBySkillId[m.skillId]?.length ?? 0,
      recentErrorCount: (attemptsBySkillId[m.skillId] ?? [])
        .slice(-5)
        .filter((attempt) => !attempt.correct).length,
      lastAttemptAt:
        attemptsBySkillId[m.skillId]?.slice(-1)[0]?.answeredAt ??
        m.lastReviewedAt,
      lastAttemptCorrect:
        attemptsBySkillId[m.skillId]?.slice(-1)[0]?.correct ?? null,
    })),
    now
  );

  for (const item of reviewQueue) {
    if (seenSkills.has(item.skillId)) continue;
    if (
      item.reasonCode !== "DUE_TODAY" &&
      item.reasonCode !== "DUE_SOON" &&
      item.reasonCode !== "WEAK_MASTERY"
    ) {
      continue;
    }
    seenSkills.add(item.skillId);
    skillHints.push({
      skillId: item.skillId,
      source: item.reasonCode === "WEAK_MASTERY" ? "WEAK_MASTERY" : "REVIEW_DUE",
      priority: item.priority,
    });
  }

  for (const mastery of masteries) {
    if (mastery.level !== "WEAK" || seenSkills.has(mastery.skillId)) continue;
    seenSkills.add(mastery.skillId);
    skillHints.push({
      skillId: mastery.skillId,
      source: "WEAK_MASTERY",
      priority: 50 + skillHints.length,
    });
  }

  skillHints.sort((a, b) => {
    if (a.priority !== b.priority) return a.priority - b.priority;
    return a.skillId.localeCompare(b.skillId);
  });

  return { skillHints, lessonSkillIds };
}
