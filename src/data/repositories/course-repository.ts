import prisma from "@/data/prisma-client";
import type { Locale } from "@/shared/types/locale";
import { pickLocalized } from "@/shared/types/locale";

export async function findCourseBySlug(academySlug: string, courseSlug: string) {
  return prisma.course.findFirst({
    where: {
      slug: courseSlug,
      academy: { slug: academySlug },
    },
    include: {
      academy: true,
      modules: {
        orderBy: { sortOrder: "asc" },
        include: {
          lessons: {
            orderBy: { sortOrder: "asc" },
          },
        },
      },
    },
  });
}

export async function findCoursesByAcademySlug(academySlug: string) {
  return prisma.course.findMany({
    where: { academy: { slug: academySlug } },
    orderBy: { sortOrder: "asc" },
  });
}

export function localizeCourse(
  course: {
    titleFr: string;
    titleEn: string;
    descriptionFr: string;
    descriptionEn: string;
  },
  locale: Locale
) {
  return {
    title: pickLocalized(course.titleFr, course.titleEn, locale),
    description: pickLocalized(course.descriptionFr, course.descriptionEn, locale),
  };
}
