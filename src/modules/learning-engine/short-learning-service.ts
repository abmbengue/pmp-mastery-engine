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
  relatedLessonSlug: string | null;
  learningObjective: string | null;
  lessonPath: string | null;
};

export type ShortListFilters = {
  topic?: string | null;
  skill?: string | null;
  difficulty?: string | null;
};

function parseVideoPayload(raw: unknown): VideoPayload | null {
  const parsed = videoPayloadSchema.safeParse(raw);
  return parsed.success ? parsed.data : null;
}

function toCard(
  item: {
    id: string;
    payload: unknown;
    lesson: {
      slug: string;
      module: {
        slug: string;
        course: { slug: string; academy: { slug: string } };
      };
    };
  },
  locale: Locale
): ShortLearningCard | null {
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
    relatedLessonSlug: payload.relatedLessonSlug ?? null,
    learningObjective: payload.learningObjective ?? null,
    lessonPath: `/academies/${academy.slug}/courses/${course.slug}/modules/${mod.slug}/lessons/${item.lesson.slug}`,
  };
}

export async function listShortsByAcademy(
  academySlug: string,
  locale: Locale,
  filters: ShortListFilters = {}
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
    const card = toCard(item, locale);
    if (!card) continue;
    if (filters.topic && card.topic !== filters.topic) continue;
    if (filters.skill && card.relatedSkillSlug !== filters.skill) continue;
    if (filters.difficulty && card.difficulty !== filters.difficulty) continue;
    shorts.push(card);
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
  if (!item) return null;
  return toCard(item, locale);
}

export function listShortFilterOptions(shorts: ShortLearningCard[]) {
  const topics = [...new Set(shorts.map((s) => s.topic).filter(Boolean))] as string[];
  const skills = [
    ...new Set(shorts.map((s) => s.relatedSkillSlug).filter(Boolean)),
  ] as string[];
  const difficulties = [
    ...new Set(shorts.map((s) => s.difficulty).filter(Boolean)),
  ] as string[];
  return {
    topics: topics.sort(),
    skills: skills.sort(),
    difficulties: difficulties.sort(),
  };
}
