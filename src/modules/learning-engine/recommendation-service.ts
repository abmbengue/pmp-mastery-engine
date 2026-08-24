import type { Locale } from "@/shared/types/locale";
import { pickLocalized } from "@/shared/types/locale";
import { buildLessonPath } from "@/modules/learning-engine/next-lesson-service";
import { getNextLessonForCourse } from "@/modules/learning-engine/next-lesson-repository";
import prisma from "@/data/prisma-client";

export type RecommendationReasonCode =
  | "WEAK_SKILL"
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
 * Priority: WEAK → LEARNING → IN_PROGRESS → next incomplete → none
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

  for (const mastery of [...weak, ...learning]) {
    const lesson = await findLessonForSkill(userId, mastery.skillId, enrolledCourseIds);
    if (!lesson) continue;

    const reasonCode = mastery.level === "WEAK" ? "WEAK_SKILL" : "LEARNING_SKILL";
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
