/**
 * Phase C Iteration 8 — READ-ONLY weakness dashboard loader.
 */

import prisma from "@/data/prisma-client";
import { buildReviewQueue } from "@/modules/learning-engine/spaced-repetition";
import type { Locale } from "@/shared/types/locale";
import { quizAttemptsToMasteryInputs } from "./attempt-adapter";
import type { QuestionMasteryContext } from "./attempt-adapter";
import {
  ECO_DOMAINS,
  buildPmpLessonHref,
  buildPmpStudyTaskHref,
  buildStudyTaskView,
  resolvePmpStudyTaskBackLink,
} from "./pmp-study";
import {
  PMP_ACADEMY_SLUG,
  PMP_COURSE_SLUG,
} from "./pmp-lesson-catalog";
import { buildWeaknessSignals } from "./weakness-model";
import type { AttemptMasteryInput } from "./weakness-model";
import type { EcoTaskStableId } from "./types";
import {
  buildWeaknessDashboardView,
  type SkillActionLinks,
  type SkillDashboardMeta,
  type WeaknessDashboardView,
} from "./weakness-dashboard-view";

const attemptSelect = {
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
} as const;

async function loadSkillLessonSlugs(): Promise<Map<string, string[]>> {
  const lessons = await prisma.lesson.findMany({
    where: {
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

  const map = new Map<string, string[]>();
  for (const lesson of lessons) {
    const skillIds = new Set<string>();
    for (const link of lesson.skills) skillIds.add(link.skillId);
    for (const item of lesson.learningItems) {
      for (const question of item.questions) {
        if (question.skillId) skillIds.add(question.skillId);
      }
    }
    for (const skillId of skillIds) {
      const slugs = map.get(skillId) ?? [];
      slugs.push(lesson.slug);
      map.set(skillId, slugs);
    }
  }
  return map;
}

function buildActionLinksForSkill(
  skillId: string,
  lessonSlugsBySkillId: Map<string, string[]>,
  dominantEcoTaskId: EcoTaskStableId | null
): SkillActionLinks {
  let ecoTaskId = dominantEcoTaskId;
  if (!ecoTaskId) {
    for (const slug of lessonSlugsBySkillId.get(skillId) ?? []) {
      const back = resolvePmpStudyTaskBackLink(slug);
      if (back) {
        ecoTaskId = back.taskId;
        break;
      }
    }
  }

  const actionTaskHref = ecoTaskId ? buildPmpStudyTaskHref(ecoTaskId) : null;
  let actionLessonHref: string | null = null;
  if (ecoTaskId) {
    const taskView = buildStudyTaskView(ecoTaskId);
    actionLessonHref =
      taskView.primaryHref ??
      taskView.lessons.find((lesson) => lesson.coverageType === "PRIMARY")?.href ??
      taskView.lessons[0]?.href ??
      null;
  } else {
    const slug = lessonSlugsBySkillId.get(skillId)?.[0];
    actionLessonHref = slug ? buildPmpLessonHref(slug) : null;
  }

  return { ecoTaskId, actionTaskHref, actionLessonHref };
}

function groupAttemptsBySkillId(
  inputs: AttemptMasteryInput[]
): Record<string, AttemptMasteryInput[]> {
  const map: Record<string, AttemptMasteryInput[]> = {};
  for (const input of inputs) {
    if (!input.skillId) continue;
    const list = map[input.skillId] ?? [];
    list.push(input);
    map[input.skillId] = list;
  }
  return map;
}

function dominantEcoForAttempts(attempts: AttemptMasteryInput[]): EcoTaskStableId | null {
  const counts = new Map<EcoTaskStableId, number>();
  for (const attempt of attempts) {
    if (!attempt.ecoTaskId) continue;
    counts.set(attempt.ecoTaskId, (counts.get(attempt.ecoTaskId) ?? 0) + 1);
  }
  let best: EcoTaskStableId | null = null;
  let bestCount = 0;
  for (const [taskId, count] of counts) {
    if (count > bestCount) {
      best = taskId;
      bestCount = count;
    }
  }
  return best;
}

/**
 * READ-ONLY dashboard weakness view for a user.
 */
export async function loadWeaknessDashboardView(
  userId: string,
  _locale: Locale,
  now: Date = new Date()
): Promise<WeaknessDashboardView> {
  const attemptCount = await prisma.quizAttempt.count({ where: { userId } });
  if (attemptCount === 0) {
    return {
      hasAttempts: false,
      weakestSkills: [],
      ecoOverview: ECO_DOMAINS.map((domain) => ({
        domainId: domain.id,
        domainTitleFr: domain.titleFr,
        domainTitleEn: domain.titleEn,
        taskCount: domain.taskCount,
        items: [],
      })),
      reviewDue: [],
    };
  }

  const [attempts, masteries, lessonSlugsBySkillId] = await Promise.all([
    prisma.quizAttempt.findMany({
      where: { userId },
      orderBy: { createdAt: "asc" },
      select: attemptSelect,
    }),
    prisma.conceptMastery.findMany({
      where: { userId },
      include: { skill: true },
    }),
    loadSkillLessonSlugs(),
  ]);

  const questionsById: Record<string, QuestionMasteryContext> = {};
  for (const row of attempts) {
    questionsById[row.question.id] = {
      ...row.question,
      masteryMetadata: row.question.masteryMetadata,
    };
  }

  const weaknessInputs = quizAttemptsToMasteryInputs(
    attempts.map((attempt) => ({
      questionId: attempt.questionId,
      isCorrect: attempt.isCorrect,
      confidenceLevel: attempt.confidenceLevel,
      answeredAt: attempt.createdAt,
    })),
    questionsById
  );

  const signals = buildWeaknessSignals(weaknessInputs);
  const attemptsBySkillId = groupAttemptsBySkillId(weaknessInputs);

  const skillMeta = new Map<string, SkillDashboardMeta>();
  const missingSkillIds: string[] = [];
  for (const mastery of masteries) {
    skillMeta.set(mastery.skillId, {
      skillId: mastery.skillId,
      skillSlug: mastery.skill.slug,
      titleFr: mastery.skill.titleFr,
      titleEn: mastery.skill.titleEn,
      masteryLevel: mastery.level,
    });
  }

  for (const skillId of Object.keys(attemptsBySkillId)) {
    if (skillMeta.has(skillId)) continue;
    missingSkillIds.push(skillId);
  }

  if (missingSkillIds.length > 0) {
    const skills = await prisma.skill.findMany({
      where: { id: { in: missingSkillIds } },
    });
    for (const skill of skills) {
      skillMeta.set(skill.id, {
        skillId: skill.id,
        skillSlug: skill.slug,
        titleFr: skill.titleFr,
        titleEn: skill.titleEn,
        masteryLevel: null,
      });
    }
  }

  const reviewQueue = buildReviewQueue(
    masteries.map((mastery) => ({
      skillId: mastery.skillId,
      skillSlug: mastery.skill.slug,
      masteryLevel: mastery.level,
      lastReviewedAt: mastery.lastReviewedAt,
      nextReviewAt: mastery.nextReviewAt,
      attemptCount: attemptsBySkillId[mastery.skillId]?.length ?? 0,
      recentErrorCount: (attemptsBySkillId[mastery.skillId] ?? [])
        .slice(-5)
        .filter((attempt) => !attempt.correct).length,
      lastAttemptAt:
        attemptsBySkillId[mastery.skillId]?.slice(-1)[0]?.answeredAt ??
        mastery.lastReviewedAt,
      lastAttemptCorrect:
        attemptsBySkillId[mastery.skillId]?.slice(-1)[0]?.correct ?? null,
    })),
    now
  );

  const actionLinksBySkillId = new Map<string, SkillActionLinks>();
  const allSkillIds = new Set([
    ...Object.keys(attemptsBySkillId),
    ...masteries.map((m) => m.skillId),
  ]);
  for (const skillId of allSkillIds) {
    actionLinksBySkillId.set(
      skillId,
      buildActionLinksForSkill(
        skillId,
        lessonSlugsBySkillId,
        dominantEcoForAttempts(attemptsBySkillId[skillId] ?? [])
      )
    );
  }

  return buildWeaknessDashboardView({
    hasAttempts: true,
    signals,
    skillMeta,
    attemptsBySkillId,
    reviewQueue,
    actionLinksBySkillId,
    domainMeta: ECO_DOMAINS,
    now,
  });
}
