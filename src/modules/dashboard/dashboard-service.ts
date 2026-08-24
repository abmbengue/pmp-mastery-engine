import prisma from "@/data/prisma-client";
import { findUserDashboardData } from "@/data/repositories/user-repository";
import { getNextLessonForCourse } from "@/modules/learning-engine/next-lesson-repository";
import {
  computeCourseProgressFromStatuses,
  getLessonStatus,
  type LessonProgressStatusValue,
} from "@/modules/learning-engine/next-lesson-service";
import type { Locale } from "@/shared/types/locale";
import { pickLocalized } from "@/shared/types/locale";

export type SkillBucket = {
  id: string;
  slug: string;
  title: string;
  level: "WEAK" | "LEARNING" | "MASTERED";
};

export type DashboardCourseCard = {
  enrollmentId: string;
  courseId: string;
  courseSlug: string;
  academySlug: string;
  academyTitle: string;
  courseTitle: string;
  percentage: number;
  completedLessons: number;
  totalLessons: number;
  lastActivityAt: Date | null;
  nextLessonTitle: string | null;
  nextLessonPath: string | null;
  nextModuleSlug: string | null;
  isComplete: boolean;
};

export type ContinueLearningCard = DashboardCourseCard & {
  moduleTitle: string | null;
};

export type LearningStats = {
  lessonsCompleted: number;
  totalLessons: number;
  quizzesCompleted: number;
  averageScore: number;
  learningTimeMinutes: number;
  currentStreak: number;
  globalProgressPercent: number;
};

export type QuickAccessItem = {
  academySlug: string;
  title: string;
  status: "ACTIVE" | "PLANNED";
  courseSlug: string | null;
  coursePath: string | null;
  comingSoon: boolean;
};

export type DashboardV2Data = {
  continueLearning: ContinueLearningCard | null;
  myLearning: DashboardCourseCard[];
  skills: {
    weak: SkillBucket[];
    learning: SkillBucket[];
    mastered: SkillBucket[];
  };
  stats: LearningStats;
  quickAccess: QuickAccessItem[];
};

function localizeTitle(
  fr: string,
  en: string,
  locale: Locale
): string {
  return pickLocalized(fr, en, locale);
}

export async function getDashboardV2(
  userId: string,
  locale: Locale
): Promise<DashboardV2Data> {
  const data = await findUserDashboardData(userId);

  const myLearning: DashboardCourseCard[] = [];

  for (const enrollment of data.enrollments) {
    const course = enrollment.course;
    const next = await getNextLessonForCourse(userId, course.id);
    if (!next) continue;

    const progressMap: Record<string, LessonProgressStatusValue> = {};
    const progressRecords = await prisma.lessonProgress.findMany({
      where: {
        userId,
        lessonId: { in: next.curriculum.lessons.map((l) => l.id) },
      },
      select: { lessonId: true, status: true, updatedAt: true, completedAt: true },
    });

    let lastActivityAt: Date | null = null;
    for (const record of progressRecords) {
      progressMap[record.lessonId] = record.status;
      const activity = record.updatedAt ?? record.completedAt;
      if (activity && (!lastActivityAt || activity > lastActivityAt)) {
        lastActivityAt = activity;
      }
    }

    const progress = computeCourseProgressFromStatuses(
      next.curriculum.lessons,
      progressMap
    );

    const nextLessonTitle = next.lesson
      ? localizeTitle(next.lesson.titleFr, next.lesson.titleEn, locale)
      : null;

    myLearning.push({
      enrollmentId: enrollment.id,
      courseId: course.id,
      courseSlug: course.slug,
      academySlug: course.academy.slug,
      academyTitle: localizeTitle(
        course.academy.titleFr,
        course.academy.titleEn,
        locale
      ),
      courseTitle: localizeTitle(course.titleFr, course.titleEn, locale),
      percentage: progress.percentage,
      completedLessons: progress.completedLessons,
      totalLessons: progress.totalLessons,
      lastActivityAt,
      nextLessonTitle,
      nextLessonPath: next.path,
      nextModuleSlug: next.lesson?.moduleSlug ?? null,
      isComplete: next.isCourseComplete,
    });
  }

  // Continue Learning: prefer most recently active incomplete course
  const incomplete = myLearning.filter((c) => !c.isComplete);
  incomplete.sort((a, b) => {
    const aTime = a.lastActivityAt?.getTime() ?? 0;
    const bTime = b.lastActivityAt?.getTime() ?? 0;
    return bTime - aTime;
  });
  const primary = incomplete[0] ?? null;

  let continueLearning: ContinueLearningCard | null = null;
  if (primary) {
    let moduleTitle: string | null = null;
    if (primary.nextModuleSlug) {
      const mod = await prisma.module.findFirst({
        where: {
          slug: primary.nextModuleSlug,
          courseId: primary.courseId,
        },
      });
      if (mod) {
        moduleTitle = localizeTitle(mod.titleFr, mod.titleEn, locale);
      }
    }
    continueLearning = { ...primary, moduleTitle };
  }

  const skills = {
    weak: data.masteries
      .filter((m) => m.level === "WEAK")
      .map((m) => ({
        id: m.id,
        slug: m.skill.slug,
        title: localizeTitle(m.skill.titleFr, m.skill.titleEn, locale),
        level: "WEAK" as const,
      })),
    learning: data.masteries
      .filter((m) => m.level === "LEARNING")
      .map((m) => ({
        id: m.id,
        slug: m.skill.slug,
        title: localizeTitle(m.skill.titleFr, m.skill.titleEn, locale),
        level: "LEARNING" as const,
      })),
    mastered: data.masteries
      .filter((m) => m.level === "MASTERED")
      .map((m) => ({
        id: m.id,
        slug: m.skill.slug,
        title: localizeTitle(m.skill.titleFr, m.skill.titleEn, locale),
        level: "MASTERED" as const,
      })),
  };

  const lessonsCompleted = myLearning.reduce((sum, c) => sum + c.completedLessons, 0);
  const totalLessons = myLearning.reduce((sum, c) => sum + c.totalLessons, 0);
  const quizzesCompleted = await prisma.quizAttempt.count({ where: { userId } });

  const avgAgg = await prisma.quizAttempt.aggregate({
    where: { userId },
    _avg: { score: true },
  });

  const timeAgg = await prisma.lessonProgress.aggregate({
    where: { userId },
    _sum: { timeSpentSec: true },
  });

  const stats: LearningStats = {
    lessonsCompleted,
    totalLessons,
    quizzesCompleted,
    averageScore: Math.round(avgAgg._avg.score ?? 0),
    learningTimeMinutes: Math.round((timeAgg._sum.timeSpentSec ?? 0) / 60),
    currentStreak: data.streak?.currentStreak ?? 0,
    globalProgressPercent:
      totalLessons === 0 ? 0 : Math.round((lessonsCompleted / totalLessons) * 100),
  };

  const quickAccessTargets = [
    "personal-finance",
    "pmp-project-management",
    "corporate-finance",
  ] as const;

  const academies = await prisma.academy.findMany({
    where: { slug: { in: [...quickAccessTargets] } },
    include: {
      courses: { orderBy: { sortOrder: "asc" }, take: 1 },
    },
  });

  const bySlug = new Map(academies.map((a) => [a.slug, a]));
  const quickAccess: QuickAccessItem[] = quickAccessTargets.map((slug) => {
    const academy = bySlug.get(slug);
    if (!academy) {
      return {
        academySlug: slug,
        title: slug,
        status: "PLANNED",
        courseSlug: null,
        coursePath: null,
        comingSoon: true,
      };
    }
    const course = academy.courses[0] ?? null;
    const isActive = academy.status === "ACTIVE" && course !== null;
    return {
      academySlug: academy.slug,
      title: localizeTitle(academy.titleFr, academy.titleEn, locale),
      status: academy.status,
      courseSlug: course?.slug ?? null,
      coursePath:
        isActive && course
          ? `/academies/${academy.slug}/courses/${course.slug}`
          : null,
      comingSoon: !isActive,
    };
  });

  return {
    continueLearning,
    myLearning,
    skills,
    stats,
    quickAccess,
  };
}

export { getLessonStatus };
