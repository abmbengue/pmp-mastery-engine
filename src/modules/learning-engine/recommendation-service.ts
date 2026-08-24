import type { Locale } from "@/shared/types/locale";
import { pickLocalized } from "@/shared/types/locale";
import { buildLessonPath } from "@/modules/learning-engine/next-lesson-service";
import { getNextLessonForCourse } from "@/modules/learning-engine/next-lesson-repository";
import prisma from "@/data/prisma-client";

export type RecommendationReasonCode =
  | "WEAK_SKILL"
  | "REPEATED_ERROR"
  | "WEAK_DOMAIN"
  | "CORRECTIVE_LEARNING"
  | "DUE_FOR_REVIEW"
  | "LEARNING_SKILL"
  | "IN_PROGRESS_LESSON"
  | "NEXT_INCOMPLETE"
  | "NONE";

export type LearningRecommendation = {
  reasonCode: RecommendationReasonCode;
  title: string;
  reason: string;
  path: string;
  estimatedMinutes: number | null;
  academySlug: string;
  courseSlug: string;
  skillSlug?: string;
  masteryLevel?: "WEAK" | "LEARNING" | "MASTERED";
  lessonSlug?: string;
};

function reasonText(
  code: RecommendationReasonCode,
  locale: Locale,
  skillTitle?: string,
  masteryLevel?: string
): string {
  if (locale === "fr") {
    switch (code) {
      case "WEAK_SKILL":
        return `Recommandé car votre maîtrise de « ${skillTitle} » est faible.`;
      case "REPEATED_ERROR":
        return `Recommandé car vous répétez des erreurs sur « ${skillTitle} ».`;
      case "WEAK_DOMAIN":
        return `Recommandé car le domaine « ${skillTitle} » reste faible.`;
      case "CORRECTIVE_LEARNING":
        return `Recommandé comme apprentissage correctif lié à vos erreurs (« ${skillTitle} »).`;
      case "DUE_FOR_REVIEW":
        return `Recommandé car « ${skillTitle} » est dû pour une révision espacée.`;
      case "LEARNING_SKILL":
        return `Recommandé car vous apprenez encore « ${skillTitle} » (niveau ${masteryLevel ?? "LEARNING"}).`;
      case "IN_PROGRESS_LESSON":
        return "Recommandé car cette leçon est déjà en cours.";
      case "NEXT_INCOMPLETE":
        return "Recommandé car c'est la prochaine leçon logique de votre parcours.";
      default:
        return "Aucune recommandation pour le moment.";
    }
  }

  switch (code) {
    case "WEAK_SKILL":
      return `Recommended because your mastery of “${skillTitle}” is currently Weak.`;
    case "REPEATED_ERROR":
      return `Recommended because you repeatedly miss items related to “${skillTitle}”.`;
    case "WEAK_DOMAIN":
      return `Recommended because the “${skillTitle}” domain remains weak.`;
    case "CORRECTIVE_LEARNING":
      return `Recommended as corrective learning linked to your errors (“${skillTitle}”).`;
    case "DUE_FOR_REVIEW":
      return `Recommended because “${skillTitle}” is due for spaced review.`;
    case "LEARNING_SKILL":
      return `Recommended because you are still learning “${skillTitle}” (level ${masteryLevel ?? "LEARNING"}).`;
    case "IN_PROGRESS_LESSON":
      return "Recommended because this lesson is already in progress.";
    case "NEXT_INCOMPLETE":
      return "Recommended because this is the next logical lesson in your path.";
    default:
      return "No recommendation right now.";
  }
}

async function findLessonForSkill(
  userId: string,
  skillId: string,
  enrolledCourseIds: string[]
) {
  if (enrolledCourseIds.length === 0) return null;

  const links = await prisma.lessonSkill.findMany({
    where: {
      skillId,
      lesson: {
        module: { courseId: { in: enrolledCourseIds } },
      },
    },
    include: {
      lesson: {
        include: {
          module: {
            include: {
              course: { include: { academy: true } },
            },
          },
          lessonProgress: {
            where: { userId },
          },
        },
      },
    },
  });

  links.sort((a, b) => {
    const modDiff = a.lesson.module.sortOrder - b.lesson.module.sortOrder;
    if (modDiff !== 0) return modDiff;
    return a.lesson.sortOrder - b.lesson.sortOrder;
  });

  // Prefer incomplete lessons linked to the skill
  for (const link of links) {
    const status = link.lesson.lessonProgress[0]?.status;
    if (status !== "COMPLETED") {
      return link.lesson;
    }
  }
  // All linked lessons completed → no skill-based recommendation from this skill
  return null;
}

/**
 * Deterministic recommendation engine (no ML, no AI).
 * Priority: WEAK skill → repeated error skill → weak domain → LEARNING → IN_PROGRESS → next incomplete → none
 */
export async function recommendNextLearning(
  userId: string,
  locale: Locale
): Promise<LearningRecommendation | null> {
  const enrollments = await prisma.enrollment.findMany({
    where: { userId },
    include: {
      course: { include: { academy: true } },
    },
    orderBy: { enrolledAt: "asc" },
  });

  if (enrollments.length === 0) return null;

  const enrolledCourseIds = enrollments.map((e) => e.courseId);

  const masteries = await prisma.conceptMastery.findMany({
    where: { userId },
    include: { skill: true },
  });

  const weak = masteries.filter((m) => m.level === "WEAK");
  const learning = masteries.filter((m) => m.level === "LEARNING");

  // 1) Weak skill mastery
  for (const mastery of weak) {
    const lesson = await findLessonForSkill(userId, mastery.skillId, enrolledCourseIds);
    if (!lesson) continue;

    const skillTitle = pickLocalized(
      mastery.skill.titleFr,
      mastery.skill.titleEn,
      locale
    );
    const path = buildLessonPath({
      academySlug: lesson.module.course.academy.slug,
      courseSlug: lesson.module.course.slug,
      moduleSlug: lesson.module.slug,
      lessonSlug: lesson.slug,
    });

    return {
      reasonCode: "WEAK_SKILL",
      title: pickLocalized(lesson.titleFr, lesson.titleEn, locale),
      reason: reasonText("WEAK_SKILL", locale, skillTitle, mastery.level),
      path,
      estimatedMinutes: lesson.estimatedMinutes,
      academySlug: lesson.module.course.academy.slug,
      courseSlug: lesson.module.course.slug,
      skillSlug: mastery.skill.slug,
      masteryLevel: mastery.level,
      lessonSlug: lesson.slug,
    };
  }

  // 2) Repeated exam errors by skill (weight recommendations without mutating mastery)
  const errorGroups = await prisma.examError.groupBy({
    by: ["skillSlug"],
    where: { userId, skillSlug: { not: null } },
    _count: { skillSlug: true },
    orderBy: { _count: { skillSlug: "desc" } },
    take: 5,
  });
  for (const group of errorGroups) {
    if (!group.skillSlug || group._count.skillSlug < 2) continue;
    const skill = await prisma.skill.findUnique({
      where: { slug: group.skillSlug },
    });
    if (!skill) continue;
    const lesson = await findLessonForSkill(userId, skill.id, enrolledCourseIds);
    if (!lesson) continue;
    const skillTitle = pickLocalized(skill.titleFr, skill.titleEn, locale);
    const path = buildLessonPath({
      academySlug: lesson.module.course.academy.slug,
      courseSlug: lesson.module.course.slug,
      moduleSlug: lesson.module.slug,
      lessonSlug: lesson.slug,
    });
    return {
      reasonCode: "REPEATED_ERROR",
      title: pickLocalized(lesson.titleFr, lesson.titleEn, locale),
      reason: reasonText("REPEATED_ERROR", locale, skillTitle),
      path,
      estimatedMinutes: lesson.estimatedMinutes,
      academySlug: lesson.module.course.academy.slug,
      courseSlug: lesson.module.course.slug,
      skillSlug: skill.slug,
      lessonSlug: lesson.slug,
    };
  }

  // 2b) Corrective learning from top recurring error category (extends same engine)
  if (errorGroups.length > 0) {
    const { mapErrorToCorrectiveLearning } = await import(
      "@/modules/learning-engine/corrective-learning"
    );
    const topErrors = await prisma.examError.groupBy({
      by: ["category"],
      where: { userId },
      _count: { category: true },
      orderBy: { _count: { category: "desc" } },
      take: 1,
    });
    if (topErrors[0] && topErrors[0]._count.category >= 2) {
      const hint = mapErrorToCorrectiveLearning(topErrors[0].category);

      // Prefer explicit corrective lesson slugs when present (same recommendation engine)
      for (const lessonSlug of hint.preferredLessonSlugs) {
        const lesson = await prisma.lesson.findFirst({
          where: {
            slug: lessonSlug,
            module: { courseId: { in: enrolledCourseIds } },
          },
          include: {
            module: { include: { course: { include: { academy: true } } } },
            skills: { include: { skill: true } },
          },
        });
        if (!lesson) continue;
        const skill = lesson.skills[0]?.skill;
        const skillTitle = skill
          ? pickLocalized(skill.titleFr, skill.titleEn, locale)
          : pickLocalized(lesson.titleFr, lesson.titleEn, locale);
        const path = buildLessonPath({
          academySlug: lesson.module.course.academy.slug,
          courseSlug: lesson.module.course.slug,
          moduleSlug: lesson.module.slug,
          lessonSlug: lesson.slug,
        });
        return {
          reasonCode: "CORRECTIVE_LEARNING",
          title: pickLocalized(lesson.titleFr, lesson.titleEn, locale),
          reason: reasonText("CORRECTIVE_LEARNING", locale, skillTitle),
          path,
          estimatedMinutes: lesson.estimatedMinutes,
          academySlug: lesson.module.course.academy.slug,
          courseSlug: lesson.module.course.slug,
          skillSlug: skill?.slug,
          lessonSlug: lesson.slug,
        };
      }

      for (const slug of hint.preferredSkillSlugs) {
        const skill = await prisma.skill.findUnique({ where: { slug } });
        if (!skill) continue;
        const lesson = await findLessonForSkill(
          userId,
          skill.id,
          enrolledCourseIds
        );
        if (!lesson) continue;
        const skillTitle = pickLocalized(skill.titleFr, skill.titleEn, locale);
        const path = buildLessonPath({
          academySlug: lesson.module.course.academy.slug,
          courseSlug: lesson.module.course.slug,
          moduleSlug: lesson.module.slug,
          lessonSlug: lesson.slug,
        });
        return {
          reasonCode: "CORRECTIVE_LEARNING",
          title: pickLocalized(lesson.titleFr, lesson.titleEn, locale),
          reason: reasonText("CORRECTIVE_LEARNING", locale, skillTitle),
          path,
          estimatedMinutes: lesson.estimatedMinutes,
          academySlug: lesson.module.course.academy.slug,
          courseSlug: lesson.module.course.slug,
          skillSlug: skill.slug,
          lessonSlug: lesson.slug,
        };
      }
    }
  }

  // 3) Weak domain via recent exam result → map to related skill lesson
  const lastResult = await prisma.examResult.findFirst({
    where: { session: { userId } },
    orderBy: { createdAt: "desc" },
  });
  if (lastResult?.domainBreakdown) {
    const domains = lastResult.domainBreakdown as Array<{
      domain: string;
      percentage: number;
      total: number;
      band: string;
    }>;
    const weakest = domains
      .filter((d) => d.total > 0)
      .sort((a, b) => a.percentage - b.percentage)[0];
    if (weakest && weakest.band === "WEAK") {
      const domainSkillSlug =
        weakest.domain === "PEOPLE"
          ? "pmp-people"
          : weakest.domain === "BUSINESS_ENVIRONMENT"
            ? "pmp-business-environment"
            : "pmp-process";
      const skill = await prisma.skill.findUnique({
        where: { slug: domainSkillSlug },
      });
      if (skill) {
        const lesson = await findLessonForSkill(
          userId,
          skill.id,
          enrolledCourseIds
        );
        if (lesson) {
          const path = buildLessonPath({
            academySlug: lesson.module.course.academy.slug,
            courseSlug: lesson.module.course.slug,
            moduleSlug: lesson.module.slug,
            lessonSlug: lesson.slug,
          });
          return {
            reasonCode: "WEAK_DOMAIN",
            title: pickLocalized(lesson.titleFr, lesson.titleEn, locale),
            reason: reasonText("WEAK_DOMAIN", locale, weakest.domain),
            path,
            estimatedMinutes: lesson.estimatedMinutes,
            academySlug: lesson.module.course.academy.slug,
            courseSlug: lesson.module.course.slug,
            skillSlug: skill.slug,
            lessonSlug: lesson.slug,
          };
        }
      }
    }
  }

  for (const mastery of learning) {
    const lesson = await findLessonForSkill(userId, mastery.skillId, enrolledCourseIds);
    if (!lesson) continue;

    // Prefer spaced-repetition due items before generic LEARNING
    const { computeNextReviewAt } = await import(
      "@/modules/learning-engine/spaced-repetition"
    );
    const due = computeNextReviewAt({
      masteryLevel: "LEARNING",
      lastReviewedAt: mastery.lastReviewedAt,
      lastAttemptAt: mastery.lastReviewedAt,
      recentErrorCount: 0,
    });
    if (due.getTime() <= Date.now()) {
      const skillTitle = pickLocalized(
        mastery.skill.titleFr,
        mastery.skill.titleEn,
        locale
      );
      const path = buildLessonPath({
        academySlug: lesson.module.course.academy.slug,
        courseSlug: lesson.module.course.slug,
        moduleSlug: lesson.module.slug,
        lessonSlug: lesson.slug,
      });
      return {
        reasonCode: "DUE_FOR_REVIEW",
        title: pickLocalized(lesson.titleFr, lesson.titleEn, locale),
        reason: reasonText("DUE_FOR_REVIEW", locale, skillTitle),
        path,
        estimatedMinutes: lesson.estimatedMinutes,
        academySlug: lesson.module.course.academy.slug,
        courseSlug: lesson.module.course.slug,
        skillSlug: mastery.skill.slug,
        masteryLevel: mastery.level,
        lessonSlug: lesson.slug,
      };
    }

    const reasonCode = "LEARNING_SKILL" as const;
    const skillTitle = pickLocalized(
      mastery.skill.titleFr,
      mastery.skill.titleEn,
      locale
    );
    const path = buildLessonPath({
      academySlug: lesson.module.course.academy.slug,
      courseSlug: lesson.module.course.slug,
      moduleSlug: lesson.module.slug,
      lessonSlug: lesson.slug,
    });

    return {
      reasonCode,
      title: pickLocalized(lesson.titleFr, lesson.titleEn, locale),
      reason: reasonText(reasonCode, locale, skillTitle, mastery.level),
      path,
      estimatedMinutes: lesson.estimatedMinutes,
      academySlug: lesson.module.course.academy.slug,
      courseSlug: lesson.module.course.slug,
      skillSlug: mastery.skill.slug,
      masteryLevel: mastery.level,
      lessonSlug: lesson.slug,
    };
  }

  // Prefer any IN_PROGRESS lesson across enrollments (most recently updated)
  const inProgress = await prisma.lessonProgress.findFirst({
    where: {
      userId,
      status: "IN_PROGRESS",
      lesson: { module: { courseId: { in: enrolledCourseIds } } },
    },
    orderBy: { updatedAt: "desc" },
    include: {
      lesson: {
        include: {
          module: {
            include: { course: { include: { academy: true } } },
          },
        },
      },
    },
  });

  if (inProgress) {
    const lesson = inProgress.lesson;
    const path = buildLessonPath({
      academySlug: lesson.module.course.academy.slug,
      courseSlug: lesson.module.course.slug,
      moduleSlug: lesson.module.slug,
      lessonSlug: lesson.slug,
    });
    return {
      reasonCode: "IN_PROGRESS_LESSON",
      title: pickLocalized(lesson.titleFr, lesson.titleEn, locale),
      reason: reasonText("IN_PROGRESS_LESSON", locale),
      path,
      estimatedMinutes: lesson.estimatedMinutes,
      academySlug: lesson.module.course.academy.slug,
      courseSlug: lesson.module.course.slug,
      lessonSlug: lesson.slug,
    };
  }

  // Fall back to next incomplete lesson from first incomplete course
  for (const enrollment of enrollments) {
    const next = await getNextLessonForCourse(userId, enrollment.courseId);
    if (next?.lesson && next.path && !next.isCourseComplete) {
      return {
        reasonCode: "NEXT_INCOMPLETE",
        title: pickLocalized(next.lesson.titleFr, next.lesson.titleEn, locale),
        reason: reasonText("NEXT_INCOMPLETE", locale),
        path: next.path,
        estimatedMinutes: next.lesson.estimatedMinutes,
        academySlug: next.curriculum.academySlug,
        courseSlug: next.curriculum.courseSlug,
        lessonSlug: next.lesson.slug,
      };
    }
  }

  return null;
}
