import prisma from "@/data/prisma-client";
import {
  buildReviewQueue,
  sectionForReason,
  type ReviewCalendarSection,
  type ReviewReasonCode,
} from "@/modules/learning-engine/spaced-repetition";
import {
  mapErrorToCorrectiveLearning,
  rankRecurringErrors,
} from "@/modules/learning-engine/corrective-learning";
import { buildLessonPath } from "@/modules/learning-engine/next-lesson-service";
import { recommendNextLearning } from "@/modules/learning-engine/recommendation-service";
import type { Locale } from "@/shared/types/locale";
import { pickLocalized } from "@/shared/types/locale";
import type { ExamErrorCategoryCode } from "@/modules/assessment-engine/analytics-engine";

export type ReviewQueueItem = {
  skillId: string;
  skillSlug: string;
  skillTitle: string;
  masteryLevel: "WEAK" | "LEARNING" | "MASTERED";
  reasonCode: ReviewReasonCode;
  reason: string;
  priority: number;
  dueAt: string;
  intervalDays: number;
  lessonTitle: string | null;
  lessonPath: string | null;
  estimatedMinutes: number | null;
  shortExplanation: string;
  section: ReviewCalendarSection;
};

export type ReviewCalendar = {
  dueToday: ReviewQueueItem[];
  dueSoon: ReviewQueueItem[];
  weakConcepts: ReviewQueueItem[];
  repeatedErrors: ReviewQueueItem[];
  recentlyLearned: ReviewQueueItem[];
  /** Flat prioritized queue (compat) */
  all: ReviewQueueItem[];
  primaryAction: ReviewQueueItem | null;
};

function reasonLabel(
  code: ReviewReasonCode,
  locale: Locale,
  skillTitle: string
): string {
  if (locale === "fr") {
    switch (code) {
      case "WEAK_MASTERY":
        return `Maîtrise faible de « ${skillTitle} » — à revoir bientôt.`;
      case "REPEATED_ERROR":
        return `Erreurs répétées sur « ${skillTitle} ».`;
      case "DUE_TODAY":
        return `Révision due aujourd'hui pour « ${skillTitle} ».`;
      case "DUE_SOON":
        return `Révision bientôt pour « ${skillTitle} ».`;
      case "RECENT_FAILURE":
        return `Échec récent sur « ${skillTitle} ».`;
      case "RECENTLY_LEARNED":
        return `Récemment appris : « ${skillTitle} » — consolidez.`;
      case "UNFINISHED_LESSON":
        return "Leçon en cours à terminer.";
      case "CORRECTIVE_LEARNING":
        return `Apprentissage correctif recommandé pour « ${skillTitle} ».`;
      default:
        return `À revoir : ${skillTitle}`;
    }
  }
  switch (code) {
    case "WEAK_MASTERY":
      return `Weak mastery of “${skillTitle}” — review soon.`;
    case "REPEATED_ERROR":
      return `Repeated errors on “${skillTitle}”.`;
    case "DUE_TODAY":
      return `Review due today for “${skillTitle}”.`;
    case "DUE_SOON":
      return `Review coming soon for “${skillTitle}”.`;
    case "RECENT_FAILURE":
      return `Recent failure on “${skillTitle}”.`;
    case "RECENTLY_LEARNED":
      return `Recently learned: “${skillTitle}” — consolidate.`;
    case "UNFINISHED_LESSON":
      return "Unfinished lesson to complete.";
    case "CORRECTIVE_LEARNING":
      return `Corrective learning recommended for “${skillTitle}”.`;
    default:
      return `Review: ${skillTitle}`;
  }
}

async function findLessonForSkillSlug(
  userId: string,
  skillId: string,
  enrolledCourseIds: string[]
) {
  if (enrolledCourseIds.length === 0) return null;
  const links = await prisma.lessonSkill.findMany({
    where: {
      skillId,
      lesson: { module: { courseId: { in: enrolledCourseIds } } },
    },
    include: {
      lesson: {
        include: {
          module: { include: { course: { include: { academy: true } } } },
          lessonProgress: { where: { userId } },
        },
      },
    },
  });
  for (const link of links) {
    if (link.lesson.lessonProgress[0]?.status !== "COMPLETED") return link.lesson;
  }
  return links[0]?.lesson ?? null;
}

async function buildQueueItems(
  userId: string,
  locale: Locale,
  now: Date
): Promise<ReviewQueueItem[]> {
  const enrollments = await prisma.enrollment.findMany({
    where: { userId },
    select: { courseId: true },
  });
  const enrolledCourseIds = enrollments.map((e) => e.courseId);

  const masteries = await prisma.conceptMastery.findMany({
    where: { userId },
    include: { skill: true },
  });

  const errors = await prisma.examError.groupBy({
    by: ["skillSlug"],
    where: { userId, skillSlug: { not: null } },
    _count: { skillSlug: true },
  });
  const errorCountBySkill = new Map(
    errors.map((e) => [e.skillSlug!, e._count.skillSlug])
  );

  const candidates = [];
  for (const m of masteries) {
    const attempts = await prisma.quizAttempt.findMany({
      where: { userId, question: { skillId: m.skillId } },
      orderBy: { createdAt: "desc" },
      take: 5,
      select: { createdAt: true, isCorrect: true },
    });
    candidates.push({
      skillId: m.skillId,
      skillSlug: m.skill.slug,
      masteryLevel: m.level as "WEAK" | "LEARNING" | "MASTERED",
      lastReviewedAt: m.lastReviewedAt,
      nextReviewAt: m.nextReviewAt,
      attemptCount: attempts.length,
      recentErrorCount: errorCountBySkill.get(m.skill.slug) ?? 0,
      lastAttemptAt: attempts[0]?.createdAt ?? null,
      lastAttemptCorrect: attempts[0]?.isCorrect ?? null,
    });
  }

  for (const [slug, count] of errorCountBySkill) {
    if (candidates.some((c) => c.skillSlug === slug)) continue;
    const skill = await prisma.skill.findUnique({ where: { slug } });
    if (!skill) continue;
    candidates.push({
      skillId: skill.id,
      skillSlug: skill.slug,
      masteryLevel: "WEAK" as const,
      lastReviewedAt: null,
      nextReviewAt: null,
      attemptCount: 0,
      recentErrorCount: count,
      lastAttemptAt: null,
      lastAttemptCorrect: null,
    });
  }

  const pureQueue = buildReviewQueue(candidates, now);
  const items: ReviewQueueItem[] = [];

  for (const row of pureQueue.slice(0, 20)) {
    const skill = await prisma.skill.findUnique({ where: { id: row.skillId } });
    if (!skill) continue;
    const skillTitle = pickLocalized(skill.titleFr, skill.titleEn, locale);
    const lesson = await findLessonForSkillSlug(
      userId,
      row.skillId,
      enrolledCourseIds
    );
    const lessonPath = lesson
      ? buildLessonPath({
          academySlug: lesson.module.course.academy.slug,
          courseSlug: lesson.module.course.slug,
          moduleSlug: lesson.module.slug,
          lessonSlug: lesson.slug,
        })
      : null;

    items.push({
      skillId: row.skillId,
      skillSlug: row.skillSlug,
      skillTitle,
      masteryLevel: row.masteryLevel,
      reasonCode: row.reasonCode,
      reason: reasonLabel(row.reasonCode, locale, skillTitle),
      priority: row.priority,
      dueAt: row.dueAt.toISOString(),
      intervalDays: row.intervalDays,
      lessonTitle: lesson
        ? pickLocalized(lesson.titleFr, lesson.titleEn, locale)
        : null,
      lessonPath,
      estimatedMinutes: lesson?.estimatedMinutes ?? 8,
      shortExplanation:
        locale === "fr"
          ? `Révision micro-learning (~${lesson?.estimatedMinutes ?? 8} min). Prochaine échéance calculée : ${row.intervalDays} j.`
          : `Micro-learning review (~${lesson?.estimatedMinutes ?? 8} min). Scheduled interval: ${row.intervalDays} d.`,
      section: sectionForReason(row.reasonCode),
    });
  }

  const unfinished = await prisma.lessonProgress.findMany({
    where: {
      userId,
      status: "IN_PROGRESS",
      lesson: { module: { courseId: { in: enrolledCourseIds } } },
    },
    take: 3,
    orderBy: { updatedAt: "desc" },
    include: {
      lesson: {
        include: {
          module: { include: { course: { include: { academy: true } } } },
          skills: { include: { skill: true }, take: 1 },
        },
      },
    },
  });

  for (const u of unfinished) {
    const lesson = u.lesson;
    const skill = lesson.skills[0]?.skill;
    items.push({
      skillId: skill?.id ?? "unfinished",
      skillSlug: skill?.slug ?? "unfinished-lesson",
      skillTitle: skill
        ? pickLocalized(skill.titleFr, skill.titleEn, locale)
        : pickLocalized(lesson.titleFr, lesson.titleEn, locale),
      masteryLevel: "LEARNING",
      reasonCode: "UNFINISHED_LESSON",
      reason: reasonLabel(
        "UNFINISHED_LESSON",
        locale,
        pickLocalized(lesson.titleFr, lesson.titleEn, locale)
      ),
      priority: 55,
      dueAt: now.toISOString(),
      intervalDays: 0,
      lessonTitle: pickLocalized(lesson.titleFr, lesson.titleEn, locale),
      lessonPath: buildLessonPath({
        academySlug: lesson.module.course.academy.slug,
        courseSlug: lesson.module.course.slug,
        moduleSlug: lesson.module.slug,
        lessonSlug: lesson.slug,
      }),
      estimatedMinutes: lesson.estimatedMinutes,
      shortExplanation:
        locale === "fr"
          ? "Terminez cette leçon pour consolider votre progression."
          : "Finish this lesson to consolidate your progress.",
      section: "recentlyLearned",
    });
  }

  items.sort((a, b) => a.priority - b.priority);
  return items.slice(0, 20);
}

/**
 * Flat review queue (Phase 9 compat).
 */
export async function getReviewQueue(
  userId: string,
  locale: Locale,
  now: Date = new Date()
): Promise<ReviewQueueItem[]> {
  return buildQueueItems(userId, locale, now);
}

/**
 * Grouped review calendar for the Review page (Phase 10).
 */
export async function getReviewCalendar(
  userId: string,
  locale: Locale,
  now: Date = new Date()
): Promise<ReviewCalendar> {
  const all = await buildQueueItems(userId, locale, now);
  const dueToday = all.filter((i) => i.section === "dueToday" || i.reasonCode === "WEAK_MASTERY");
  const dueSoon = all.filter((i) => i.section === "dueSoon");
  const weakConcepts = all.filter((i) => i.section === "weakConcepts");
  const repeatedErrors = all.filter((i) => i.section === "repeatedErrors");
  const recentlyLearned = all.filter((i) => i.section === "recentlyLearned");

  // Deduplicate section lists by skillSlug while keeping order
  const uniq = (rows: ReviewQueueItem[]) => {
    const seen = new Set<string>();
    return rows.filter((r) => {
      const key = `${r.skillSlug}-${r.reasonCode}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  };

  return {
    dueToday: uniq(dueToday).slice(0, 8),
    dueSoon: uniq(dueSoon).slice(0, 6),
    weakConcepts: uniq(weakConcepts).slice(0, 6),
    repeatedErrors: uniq(repeatedErrors).slice(0, 6),
    recentlyLearned: uniq(recentlyLearned).slice(0, 6),
    all,
    primaryAction: all[0] ?? null,
  };
}

export async function getCorrectiveLearningForUser(
  userId: string,
  locale: Locale
) {
  const recentErrors = await prisma.examError.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    take: 50,
    select: { category: true, skillSlug: true },
  });

  const counts: Record<string, number> = {};
  for (const e of recentErrors) {
    counts[e.category] = (counts[e.category] ?? 0) + 1;
  }
  const ranked = rankRecurringErrors(counts);
  if (ranked.length === 0) {
    const fallback = await recommendNextLearning(userId, locale);
    return { corrective: null as null, recommendation: fallback, ranked: [] };
  }

  const top = ranked[0];
  const skillHint =
    recentErrors.find((e) => e.category === top.category)?.skillSlug ?? null;
  const hint = mapErrorToCorrectiveLearning(
    top.category as ExamErrorCategoryCode,
    skillHint
  );

  const recommendation = await recommendNextLearning(userId, locale);

  return {
    corrective: hint,
    recommendation,
    ranked,
  };
}
