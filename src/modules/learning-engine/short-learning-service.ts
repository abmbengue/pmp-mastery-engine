import prisma from "@/data/prisma-client";
import {
  videoPayloadSchema,
  type VideoPayload,
} from "@/shared/types/content-payloads";
import type { Locale } from "@/shared/types/locale";
import { pickLocalized } from "@/shared/types/locale";

/**
 * Short Learning foundation — lists VIDEO items flagged as shorts.
 * No real video hosting yet; placeholders only.
 */

export type ShortLearningCard = {
  id: string;
  title: string;
  description: string;
  durationSeconds: number | null;
  thumbnailUrl: string | null;
  isPlaceholder: boolean;
  topic: string | null;
  difficulty: string | null;
  academySlug: string;
  relatedSkillSlug: string | null;
  lessonPath: string | null;
};

function parseVideoPayload(raw: unknown): VideoPayload | null {
  const parsed = videoPayloadSchema.safeParse(raw);
  return parsed.success ? parsed.data : null;
}

export async function listShortsByAcademy(
  academySlug: string,
  locale: Locale
): Promise<ShortLearningCard[]> {
  const items = await prisma.learningItem.findMany({
    where: {
      type: "VIDEO",
      lesson: {
        module: {
          course: {
            academy: { slug: academySlug },
          },
        },
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
        },
      },
    },
    orderBy: { sortOrder: "asc" },
  });

  const shorts: ShortLearningCard[] = [];

  for (const item of items) {
    const payload = parseVideoPayload(item.payload);
    if (!payload || !payload.isShort) continue;

    const academy = item.lesson.module.course.academy;
    const course = item.lesson.module.course;
    const mod = item.lesson.module;

    shorts.push({
      id: item.id,
      title: pickLocalized(payload.titleFr, payload.titleEn, locale),
      description: pickLocalized(payload.descriptionFr, payload.descriptionEn, locale),
      durationSeconds: payload.durationSeconds,
      thumbnailUrl: payload.thumbnailUrl,
      isPlaceholder: payload.isPlaceholder,
      topic: payload.topic ?? null,
      difficulty: payload.difficulty ?? null,
      academySlug: payload.academySlug ?? academy.slug,
      relatedSkillSlug: payload.relatedSkillSlug ?? null,
      lessonPath: `/academies/${academy.slug}/courses/${course.slug}/modules/${mod.slug}/lessons/${item.lesson.slug}`,
    });
  }

  return shorts;
}

export async function getShortById(
  shortId: string,
  locale: Locale
): Promise<ShortLearningCard | null> {
  const item = await prisma.learningItem.findUnique({
    where: { id: shortId },
    include: {
      lesson: {
        include: {
          module: {
            include: {
              course: { include: { academy: true } },
            },
          },
        },
      },
    },
  });

  if (!item || item.type !== "VIDEO") return null;
  const payload = parseVideoPayload(item.payload);
  if (!payload || !payload.isShort) return null;

  const academy = item.lesson.module.course.academy;
  const course = item.lesson.module.course;
  const mod = item.lesson.module;

  return {
    id: item.id,
    title: pickLocalized(payload.titleFr, payload.titleEn, locale),
    description: pickLocalized(payload.descriptionFr, payload.descriptionEn, locale),
    durationSeconds: payload.durationSeconds,
    thumbnailUrl: payload.thumbnailUrl,
    isPlaceholder: payload.isPlaceholder,
    topic: payload.topic ?? null,
    difficulty: payload.difficulty ?? null,
    academySlug: payload.academySlug ?? academy.slug,
    relatedSkillSlug: payload.relatedSkillSlug ?? null,
    lessonPath: `/academies/${academy.slug}/courses/${course.slug}/modules/${mod.slug}/lessons/${item.lesson.slug}`,
  };
}
