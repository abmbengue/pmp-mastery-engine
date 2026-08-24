import prisma from "@/data/prisma-client";
import {
  getLearningPathBySlug,
  listLearningPaths,
  type LearningPathDefinition,
} from "@/modules/learning-engine/learning-paths";
import { buildLessonPath } from "@/modules/learning-engine/next-lesson-service";
import type { Locale } from "@/shared/types/locale";
import { pickLocalized } from "@/shared/types/locale";

export type LearningPathView = {
  slug: string;
  title: string;
  description: string;
  academySlug: string;
  courseSlug: string;
  coursePath: string;
  totalLessons: number;
  completedLessons: number;
  percentage: number;
  nextLessonPath: string | null;
  nextLessonTitle: string | null;
  skillSlugs: string[];
};

async function resolvePathProgress(
  userId: string | null,
  def: LearningPathDefinition,
  locale: Locale
): Promise<LearningPathView> {
  const course = await prisma.course.findFirst({
    where: {
      slug: def.courseSlug,
      academy: { slug: def.academySlug },
    },
    include: {
      academy: true,
      modules: {
        include: { lessons: { orderBy: { sortOrder: "asc" } } },
        orderBy: { sortOrder: "asc" },
      },
    },
  });

  const modules = course
    ? def.moduleSlugs?.length
      ? course.modules.filter((m) => def.moduleSlugs!.includes(m.slug))
      : course.modules
    : [];

  const lessons = modules.flatMap((m) =>
    m.lessons.map((l) => ({
      ...l,
      moduleSlug: m.slug,
      courseSlug: course!.slug,
      academySlug: course!.academy.slug,
    }))
  );

  let completedLessons = 0;
  let nextLessonPath: string | null = null;
  let nextLessonTitle: string | null = null;

  if (userId && lessons.length > 0) {
    const progress = await prisma.lessonProgress.findMany({
      where: {
        userId,
        lessonId: { in: lessons.map((l) => l.id) },
      },
    });
    const byLesson = new Map(progress.map((p) => [p.lessonId, p]));
    completedLessons = progress.filter((p) => p.status === "COMPLETED").length;

    for (const lesson of lessons) {
      if (byLesson.get(lesson.id)?.status !== "COMPLETED") {
        nextLessonPath = buildLessonPath({
          academySlug: lesson.academySlug,
          courseSlug: lesson.courseSlug,
          moduleSlug: lesson.moduleSlug,
          lessonSlug: lesson.slug,
        });
        nextLessonTitle = pickLocalized(lesson.titleFr, lesson.titleEn, locale);
        break;
      }
    }
  } else if (lessons[0] && course) {
    nextLessonPath = buildLessonPath({
      academySlug: course.academy.slug,
      courseSlug: course.slug,
      moduleSlug: lessons[0].moduleSlug,
      lessonSlug: lessons[0].slug,
    });
    nextLessonTitle = pickLocalized(lessons[0].titleFr, lessons[0].titleEn, locale);
  }

  const totalLessons = lessons.length;
  const percentage =
    totalLessons === 0 ? 0 : Math.round((completedLessons / totalLessons) * 100);

  return {
    slug: def.slug,
    title: pickLocalized(def.titleFr, def.titleEn, locale),
    description: pickLocalized(def.descriptionFr, def.descriptionEn, locale),
    academySlug: def.academySlug,
    courseSlug: def.courseSlug,
    coursePath: `/academies/${def.academySlug}/courses/${def.courseSlug}`,
    totalLessons,
    completedLessons,
    percentage,
    nextLessonPath,
    nextLessonTitle,
    skillSlugs: def.skillSlugs,
  };
}

export async function listLearningPathsForUser(
  userId: string | null,
  locale: Locale
): Promise<LearningPathView[]> {
  const defs = listLearningPaths();
  return Promise.all(defs.map((d) => resolvePathProgress(userId, d, locale)));
}

export async function getLearningPathForUser(
  slug: string,
  userId: string | null,
  locale: Locale
): Promise<LearningPathView | null> {
  const def = getLearningPathBySlug(slug);
  if (!def) return null;
  return resolvePathProgress(userId, def, locale);
}
