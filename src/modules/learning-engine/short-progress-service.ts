import { z } from "zod";
import prisma from "@/data/prisma-client";
import {
  getShortById,
  listShortsByAcademy,
  type ShortLearningCard,
} from "@/modules/learning-engine/short-learning-service";
import type { Locale } from "@/shared/types/locale";

export const markShortBodySchema = z.object({
  shortId: z.string().min(1).max(120),
  academySlug: z.string().min(1).max(120),
});

type ProgressMetadata = {
  currentPhase?: string;
  quizScore?: number | null;
  masteryLevel?: string | null;
  shortsCompleted?: string[];
};

function parseMetadata(raw: unknown): ProgressMetadata {
  if (!raw || typeof raw !== "object") return {};
  return raw as ProgressMetadata;
}

/**
 * Marks a Short Learning VIDEO item as completed for the user.
 * Reuses LessonProgress on the parent lesson; stores short IDs in metadata.shortsCompleted.
 */
export async function markShortCompleted(userId: string, shortId: string) {
  const item = await prisma.learningItem.findUnique({
    where: { id: shortId },
    include: {
      lesson: true,
    },
  });

  if (!item || item.type !== "VIDEO") {
    return { ok: false as const, error: "not_found" as const };
  }

  const payload = item.payload as {
    isShort?: boolean;
    durationSeconds?: number | null;
  };
  if (!payload?.isShort) {
    return { ok: false as const, error: "not_a_short" as const };
  }

  const existing = await prisma.lessonProgress.findUnique({
    where: { userId_lessonId: { userId, lessonId: item.lessonId } },
  });

  const metadata = parseMetadata(existing?.metadata);
  const shortsCompleted = new Set(metadata.shortsCompleted ?? []);
  shortsCompleted.add(shortId);
  const nextMetadata: ProgressMetadata = {
    ...metadata,
    shortsCompleted: Array.from(shortsCompleted),
  };

  const extraSeconds = Math.max(30, Math.round(payload.durationSeconds ?? 60));

  const progress = await prisma.lessonProgress.upsert({
    where: { userId_lessonId: { userId, lessonId: item.lessonId } },
    create: {
      userId,
      lessonId: item.lessonId,
      status: "IN_PROGRESS",
      startedAt: new Date(),
      timeSpentSec: extraSeconds,
      metadata: nextMetadata,
    },
    update: {
      status: existing?.status === "COMPLETED" ? "COMPLETED" : "IN_PROGRESS",
      startedAt: existing?.startedAt ?? new Date(),
      timeSpentSec: (existing?.timeSpentSec ?? 0) + 30,
      metadata: nextMetadata,
    },
  });

  return {
    ok: true as const,
    shortId,
    lessonId: item.lessonId,
    shortsCompleted: nextMetadata.shortsCompleted ?? [],
    progressStatus: progress.status,
  };
}

export async function isShortCompletedForUser(
  userId: string,
  shortId: string
): Promise<boolean> {
  const item = await prisma.learningItem.findUnique({
    where: { id: shortId },
    select: { lessonId: true },
  });
  if (!item) return false;

  const progress = await prisma.lessonProgress.findUnique({
    where: { userId_lessonId: { userId, lessonId: item.lessonId } },
  });
  const metadata = parseMetadata(progress?.metadata);
  return (metadata.shortsCompleted ?? []).includes(shortId);
}

export async function getShortWithCompletion(
  shortId: string,
  locale: Locale,
  userId: string | null
): Promise<(ShortLearningCard & { completed: boolean }) | null> {
  const short = await getShortById(shortId, locale);
  if (!short) return null;
  const completed = userId
    ? await isShortCompletedForUser(userId, shortId)
    : false;
  return { ...short, completed };
}

export async function listShortsWithCompletion(
  academySlug: string,
  locale: Locale,
  userId: string | null
): Promise<Array<ShortLearningCard & { completed: boolean }>> {
  const shorts = await listShortsByAcademy(academySlug, locale);
  if (!userId) {
    return shorts.map((s) => ({ ...s, completed: false }));
  }

  const completedSet = await getCompletedShortIdsForUser(
    userId,
    shorts.map((s) => s.id)
  );
  return shorts.map((s) => ({
    ...s,
    completed: completedSet.has(s.id),
  }));
}

/**
 * Batch completion lookup — avoids N+1 progress queries on Shorts discovery.
 */
export async function getCompletedShortIdsForUser(
  userId: string,
  shortIds: string[]
): Promise<Set<string>> {
  if (shortIds.length === 0) return new Set();

  const items = await prisma.learningItem.findMany({
    where: { id: { in: shortIds } },
    select: { id: true, lessonId: true },
  });
  const lessonIds = [...new Set(items.map((i) => i.lessonId))];
  if (lessonIds.length === 0) return new Set();

  const progresses = await prisma.lessonProgress.findMany({
    where: { userId, lessonId: { in: lessonIds } },
    select: { lessonId: true, metadata: true },
  });

  const completed = new Set<string>();
  const byLesson = new Map(
    progresses.map((p) => [p.lessonId, parseMetadata(p.metadata)])
  );
  for (const item of items) {
    const meta = byLesson.get(item.lessonId);
    if (meta?.shortsCompleted?.includes(item.id)) {
      completed.add(item.id);
    }
  }
  return completed;
}
