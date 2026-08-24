import prisma from "@/data/prisma-client";
import {
  videoPayloadSchema,
  type VideoPayload,
} from "@/shared/types/content-payloads";
import type { Locale } from "@/shared/types/locale";
import { pickLocalized } from "@/shared/types/locale";
import { resolveMediaAsset, type MediaRef } from "@/modules/media";
import { isShortCompletedForUser } from "@/modules/learning-engine/short-progress-service";

/**
 * Short Learning foundation — lists VIDEO items flagged as shorts.
 * Media resolved via MediaProvider abstraction (placeholder | external).
 */

export type ShortLearningCard = {
  id: string;
  title: string;
  description: string;
  durationSeconds: number | null;
  thumbnailUrl: string | null;
  videoUrl: string | null;
  isPlaceholder: boolean;
  provider: string;
  media: MediaRef;
  topic: string | null;
  difficulty: string | null;
  academySlug: string;
  relatedSkillSlug: string | null;
  relatedLessonSlug: string | null;
  learningObjective: string | null;
  lessonPath: string | null;
  language: "fr" | "en" | "both";
  completed?: boolean;
  reviewSuggested?: boolean;
};

export type ShortListFilters = {
  topic?: string | null;
  skill?: string | null;
  difficulty?: string | null;
  language?: string | null;
  academySlug?: string | null;
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
  const media = resolveMediaAsset({
    videoUrl: payload.videoUrl,
    thumbnailUrl: payload.thumbnailUrl,
    durationSeconds: payload.durationSeconds,
    isPlaceholder: payload.isPlaceholder,
    provider: payload.provider as MediaRef["provider"] | undefined,
  });

  return {
    id: item.id,
    title: pickLocalized(payload.titleFr, payload.titleEn, locale),
    description: pickLocalized(payload.descriptionFr, payload.descriptionEn, locale),
    durationSeconds: payload.durationSeconds,
    thumbnailUrl: media.thumbnailUrl ?? null,
    videoUrl: media.url,
    isPlaceholder: media.isPlaceholder,
    provider: media.provider,
    media,
    topic: payload.topic ?? null,
    difficulty: payload.difficulty ?? null,
    academySlug: payload.academySlug ?? academy.slug,
    relatedSkillSlug: payload.relatedSkillSlug ?? null,
    relatedLessonSlug: payload.relatedLessonSlug ?? null,
    learningObjective: payload.learningObjective ?? null,
    lessonPath: `/academies/${academy.slug}/courses/${course.slug}/modules/${mod.slug}/lessons/${item.lesson.slug}`,
    language: payload.language,
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
    if (
      filters.language &&
      filters.language !== "both" &&
      card.language !== "both" &&
      card.language !== filters.language
    ) {
      continue;
    }
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
  const languages = [...new Set(shorts.map((s) => s.language))];
  return {
    topics: topics.sort(),
    skills: skills.sort(),
    difficulties: difficulties.sort(),
    languages: languages.sort(),
  };
}

export type ShortDiscoverySections = {
  featured: ShortLearningCard[];
  recommended: ShortLearningCard[];
  continueWatching: ShortLearningCard[];
  completed: ShortLearningCard[];
  forReview: ShortLearningCard[];
  all: ShortLearningCard[];
};

/**
 * Discovery sections for Shorts page — reuses mastery + completion, not a new reco engine.
 */
export async function getShortDiscovery(
  academySlug: string,
  userId: string,
  locale: Locale,
  filters: ShortListFilters = {}
): Promise<ShortDiscoverySections> {
  const all = await listShortsByAcademy(academySlug, locale, filters);

  const weakSkills = await prisma.conceptMastery.findMany({
    where: { userId, level: "WEAK" },
    include: { skill: true },
  });
  const dueSkills = await prisma.conceptMastery.findMany({
    where: {
      userId,
      OR: [
        { nextReviewAt: { lte: new Date() } },
        { level: "WEAK" },
      ],
    },
    include: { skill: true },
  });
  const weakSlugs = new Set(weakSkills.map((w) => w.skill.slug));
  const dueSlugs = new Set(dueSkills.map((d) => d.skill.slug));

  const withFlags: ShortLearningCard[] = [];
  for (const s of all) {
    const completed = await isShortCompletedForUser(userId, s.id);
    withFlags.push({
      ...s,
      completed,
      reviewSuggested:
        (!!s.relatedSkillSlug &&
          (weakSlugs.has(s.relatedSkillSlug) || dueSlugs.has(s.relatedSkillSlug))) ||
        false,
    });
  }

  const completed = withFlags.filter((s) => s.completed);
  const incomplete = withFlags.filter((s) => !s.completed);
  const forReview = withFlags.filter((s) => s.reviewSuggested);
  const continueWatching = incomplete.slice(0, 4);
  const featured = withFlags.filter((s) => s.isPlaceholder).slice(0, 4);
  const recommended = [
    ...forReview.filter((s) => !s.completed),
    ...incomplete,
  ]
    .filter((s, i, arr) => arr.findIndex((x) => x.id === s.id) === i)
    .slice(0, 6);

  return {
    featured: featured.length ? featured : withFlags.slice(0, 4),
    recommended,
    continueWatching,
    completed,
    forReview,
    all: withFlags,
  };
}
