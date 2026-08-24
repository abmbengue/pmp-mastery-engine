import prisma from "@/data/prisma-client";
import type { AcademyStatus } from "@/generated/prisma/client";
import type { Locale } from "@/shared/types/locale";
import { pickLocalized } from "@/shared/types/locale";

export async function findAllAcademies(status?: AcademyStatus) {
  return prisma.academy.findMany({
    where: status ? { status } : undefined,
    orderBy: { sortOrder: "asc" },
    include: {
      courses: {
        orderBy: { sortOrder: "asc" },
      },
    },
  });
}

export async function findAcademyBySlug(slug: string) {
  return prisma.academy.findUnique({
    where: { slug },
    include: {
      courses: {
        orderBy: { sortOrder: "asc" },
        include: {
          modules: {
            orderBy: { sortOrder: "asc" },
            include: {
              lessons: { orderBy: { sortOrder: "asc" } },
            },
          },
        },
      },
    },
  });
}

export function localizeAcademy(
  academy: {
    titleFr: string;
    titleEn: string;
    descriptionFr: string;
    descriptionEn: string;
  },
  locale: Locale
) {
  return {
    title: pickLocalized(academy.titleFr, academy.titleEn, locale),
    description: pickLocalized(academy.descriptionFr, academy.descriptionEn, locale),
  };
}
