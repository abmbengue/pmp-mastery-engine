import prisma from "@/data/prisma-client";
import { getNextLessonForCourse } from "@/modules/learning-engine/next-lesson-repository";
import {
  buildLessonPath,
  computeCourseProgressFromStatuses,
  getLessonStatus,
  type LessonProgressStatusValue,
} from "@/modules/learning-engine/next-lesson-service";
import type { Locale } from "@/shared/types/locale";
import { pickLocalized } from "@/shared/types/locale";

export type LessonStatusView = {
  id: string;
  slug: string;
  title: string;
  estimatedMinutes: number | null;
  difficulty: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  status: LessonProgressStatusValue;
  path: string;
  isNext: boolean;
};

export type ModuleStatusView = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string | null;
  estimatedMinutes: number | null;
  lessons: LessonStatusView[];
};

export type CoursePageV2Data = {
  courseId: string;
  title: string;
  description: string;
  estimatedMinutes: number | null;
  totalDurationMinutes: number;
  progress: {
    completedLessons: number;
    totalLessons: number;
    percentage: number;
  };
  nextLesson: {
    title: string;
    path: string;
    estimatedMinutes: number | null;
  } | null;
  isComplete: boolean;
  modules: ModuleStatusView[];
};

export async function getCoursePageV2(
  userId: string | null,
  academySlug: string,
  courseSlug: string,
  locale: Locale
): Promise<CoursePageV2Data | null> {
  const course = await prisma.course.findFirst({
    where: {
      slug: courseSlug,
      academy: { slug: academySlug },
    },
    include: {
      academy: true,
      modules: {
        orderBy: { sortOrder: "asc" },
        include: {
          lessons: { orderBy: { sortOrder: "asc" } },
        },
      },
    },
  });

  if (!course) return null;

  const allLessons = course.modules.flatMap((mod) =>
    mod.lessons.map((lesson) => ({
      id: lesson.id,
      slug: lesson.slug,
      moduleSlug: mod.slug,
      moduleSortOrder: mod.sortOrder,
      lessonSortOrder: lesson.sortOrder,
      titleFr: lesson.titleFr,
      titleEn: lesson.titleEn,
      estimatedMinutes: lesson.estimatedMinutes,
      difficulty: lesson.difficulty,
    }))
  );

  const progressMap: Record<string, LessonProgressStatusValue> = {};
  if (userId) {
    const records = await prisma.lessonProgress.findMany({
      where: {
        userId,
        lessonId: { in: allLessons.map((l) => l.id) },
      },
      select: { lessonId: true, status: true },
    });
    for (const record of records) {
      progressMap[record.lessonId] = record.status;
    }
  }

  const orderedForProgress = allLessons.map((l) => ({
    id: l.id,
    slug: l.slug,
    moduleId: "",
    moduleSlug: l.moduleSlug,
    moduleSortOrder: l.moduleSortOrder,
    lessonSortOrder: l.lessonSortOrder,
    titleFr: l.titleFr,
    titleEn: l.titleEn,
    estimatedMinutes: l.estimatedMinutes,
  }));

  const progress = computeCourseProgressFromStatuses(orderedForProgress, progressMap);

  let nextLesson: CoursePageV2Data["nextLesson"] = null;
  let nextLessonId: string | null = null;
  let isComplete = progress.percentage === 100 && progress.totalLessons > 0;

  if (userId) {
    const next = await getNextLessonForCourse(userId, course.id);
    if (next?.lesson && next.path) {
      nextLessonId = next.lesson.id;
      nextLesson = {
        title: pickLocalized(next.lesson.titleFr, next.lesson.titleEn, locale),
        path: next.path,
        estimatedMinutes: next.lesson.estimatedMinutes,
      };
      isComplete = next.isCourseComplete;
    } else if (next?.isCourseComplete) {
      isComplete = true;
    }
  } else if (allLessons[0]) {
    const first = allLessons[0];
    nextLessonId = first.id;
    nextLesson = {
      title: pickLocalized(first.titleFr, first.titleEn, locale),
      path: buildLessonPath({
        academySlug,
        courseSlug,
        moduleSlug: first.moduleSlug,
        lessonSlug: first.slug,
      }),
      estimatedMinutes: first.estimatedMinutes,
    };
  }

  const totalDurationMinutes = allLessons.reduce(
    (sum, l) => sum + (l.estimatedMinutes ?? 0),
    0
  );

  const modules: ModuleStatusView[] = course.modules.map((mod) => ({
    id: mod.id,
    slug: mod.slug,
    title: pickLocalized(mod.titleFr, mod.titleEn, locale),
    description: pickLocalized(mod.descriptionFr, mod.descriptionEn, locale),
    category: mod.category,
    estimatedMinutes: mod.estimatedMinutes,
    lessons: mod.lessons.map((lesson) => ({
      id: lesson.id,
      slug: lesson.slug,
      title: pickLocalized(lesson.titleFr, lesson.titleEn, locale),
      estimatedMinutes: lesson.estimatedMinutes,
      difficulty: lesson.difficulty,
      status: getLessonStatus(lesson.id, progressMap),
      path: buildLessonPath({
        academySlug,
        courseSlug,
        moduleSlug: mod.slug,
        lessonSlug: lesson.slug,
      }),
      isNext: lesson.id === nextLessonId,
    })),
  }));

  return {
    courseId: course.id,
    title: pickLocalized(course.titleFr, course.titleEn, locale),
    description: pickLocalized(course.descriptionFr, course.descriptionEn, locale),
    estimatedMinutes: course.estimatedMinutes,
    totalDurationMinutes,
    progress,
    nextLesson,
    isComplete,
    modules,
  };
}
