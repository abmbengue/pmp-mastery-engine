import prisma from "@/data/prisma-client";
import type { Locale } from "@/shared/types/locale";
import { pickLocalized } from "@/shared/types/locale";

export async function findLessonBySlug(
  academySlug: string,
  courseSlug: string,
  moduleSlug: string,
  lessonSlug: string
) {
  return prisma.lesson.findFirst({
    where: {
      slug: lessonSlug,
      module: {
        slug: moduleSlug,
        course: {
          slug: courseSlug,
          academy: { slug: academySlug },
        },
      },
    },
    include: {
      learningItems: {
        orderBy: { sortOrder: "asc" },
        include: {
          questions: {
            include: { answerOptions: { orderBy: { sortOrder: "asc" } } },
          },
        },
      },
      module: {
        include: {
          course: { include: { academy: true } },
        },
      },
    },
  });
}

export async function findModuleBySlug(
  academySlug: string,
  courseSlug: string,
  moduleSlug: string
) {
  return prisma.module.findFirst({
    where: {
      slug: moduleSlug,
      course: {
        slug: courseSlug,
        academy: { slug: academySlug },
      },
    },
    include: {
      lessons: { orderBy: { sortOrder: "asc" } },
      course: { include: { academy: true } },
    },
  });
}

export function localizeLesson(
  lesson: {
    titleFr: string;
    titleEn: string;
    descriptionFr: string;
    descriptionEn: string;
  },
  locale: Locale
) {
  return {
    title: pickLocalized(lesson.titleFr, lesson.titleEn, locale),
    description: pickLocalized(lesson.descriptionFr, lesson.descriptionEn, locale),
  };
}

export function localizeModule(
  module: {
    titleFr: string;
    titleEn: string;
    descriptionFr: string;
    descriptionEn: string;
  },
  locale: Locale
) {
  return {
    title: pickLocalized(module.titleFr, module.titleEn, locale),
    description: pickLocalized(module.descriptionFr, module.descriptionEn, locale),
  };
}
