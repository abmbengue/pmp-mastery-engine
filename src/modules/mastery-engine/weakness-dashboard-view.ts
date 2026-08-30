/**
 * Phase C Iteration 8 — pure weakness dashboard read model.
 * Consumes buildWeaknessSignals output; does not redefine weakness formulas.
 */

import type { WeaknessSignal } from "./weakness-model";
import {
  computeWeightedPerformance,
  type AttemptMasteryInput,
} from "./weakness-model";
import type { EcoDomainStableId, EcoTaskStableId } from "./types";
import { getEcoTaskById } from "./eco-taxonomy";
import type { ReviewQueueItemPure } from "@/modules/learning-engine/spaced-repetition";

export type SkillWeaknessDashboardItem = {
  skillId: string;
  skillSlug: string;
  skillTitleFr: string;
  skillTitleEn: string;
  ecoTaskId: EcoTaskStableId | null;
  ecoDomainId: EcoDomainStableId | null;
  ecoTaskTitleFr: string | null;
  ecoTaskTitleEn: string | null;
  priority: number;
  weaknessLabelFr: string;
  weaknessLabelEn: string;
  masteryLevel: "WEAK" | "LEARNING" | "MASTERED" | null;
  attempts: number;
  correct: number;
  incorrect: number;
  recentPerformance: number;
  historicalPerformance: number;
  confidence: string | null;
  reviewDue: boolean;
  actionTaskHref: string | null;
  actionLessonHref: string | null;
};

export type EcoDomainWeaknessGroup = {
  domainId: EcoDomainStableId;
  domainTitleFr: string;
  domainTitleEn: string;
  taskCount: number;
  items: SkillWeaknessDashboardItem[];
};

export type WeaknessDashboardReviewItem = {
  skillId: string;
  skillSlug: string;
  skillTitleFr: string;
  skillTitleEn: string;
  reasonCode: string;
  priority: number;
  dueAt: string;
  actionTaskHref: string | null;
  actionLessonHref: string | null;
};

export type WeaknessDashboardView = {
  hasAttempts: boolean;
  weakestSkills: SkillWeaknessDashboardItem[];
  ecoOverview: EcoDomainWeaknessGroup[];
  reviewDue: WeaknessDashboardReviewItem[];
};

export type SkillDashboardMeta = {
  skillId: string;
  skillSlug: string;
  titleFr: string;
  titleEn: string;
  masteryLevel: "WEAK" | "LEARNING" | "MASTERED" | null;
};

export type SkillActionLinks = {
  ecoTaskId: EcoTaskStableId | null;
  actionTaskHref: string | null;
  actionLessonHref: string | null;
};

function sortWeaknessItems(
  items: SkillWeaknessDashboardItem[]
): SkillWeaknessDashboardItem[] {
  return [...items].sort((a, b) => {
    if (a.priority !== b.priority) return a.priority - b.priority;
    return a.skillId.localeCompare(b.skillId);
  });
}

function dominantEcoForSkill(
  attempts: AttemptMasteryInput[]
): EcoTaskStableId | null {
  const counts = new Map<EcoTaskStableId, number>();
  for (const attempt of attempts) {
    if (!attempt.ecoTaskId) continue;
    counts.set(attempt.ecoTaskId, (counts.get(attempt.ecoTaskId) ?? 0) + 1);
  }
  let best: EcoTaskStableId | null = null;
  let bestCount = 0;
  for (const [taskId, count] of counts) {
    if (count > bestCount) {
      best = taskId;
      bestCount = count;
    }
  }
  return best;
}

/**
 * Build dashboard skill rows from canonical weakness signals + read metadata.
 * Tie-break: priority ASC, then skillId ASC (matches adaptive hints).
 */
export function buildSkillWeaknessDashboardItems(input: {
  signals: WeaknessSignal[];
  skillMeta: Map<string, SkillDashboardMeta>;
  attemptsBySkillId: Record<string, AttemptMasteryInput[]>;
  reviewDueSkillIds: Set<string>;
  actionLinksBySkillId: Map<string, SkillActionLinks>;
}): SkillWeaknessDashboardItem[] {
  const seen = new Set<string>();
  const items: SkillWeaknessDashboardItem[] = [];

  for (const signal of input.signals) {
    if (!signal.skillId || seen.has(signal.skillId)) continue;
    seen.add(signal.skillId);

    const meta = input.skillMeta.get(signal.skillId);
    if (!meta) continue;

    if (meta.masteryLevel === "MASTERED") continue;

    const attempts = input.attemptsBySkillId[signal.skillId] ?? [];
    const recent = attempts.slice(-5);
    const last = attempts[attempts.length - 1];
    const links = input.actionLinksBySkillId.get(signal.skillId);
    const ecoTaskId =
      signal.ecoTaskId ?? dominantEcoForSkill(attempts) ?? links?.ecoTaskId ?? null;
    const eco = ecoTaskId ? getEcoTaskById(ecoTaskId) : null;

    items.push({
      skillId: signal.skillId,
      skillSlug: meta.skillSlug,
      skillTitleFr: meta.titleFr,
      skillTitleEn: meta.titleEn,
      ecoTaskId,
      ecoDomainId: eco?.domainId ?? null,
      ecoTaskTitleFr: eco?.titleFr ?? null,
      ecoTaskTitleEn: eco?.titleEn ?? null,
      priority: signal.priority,
      weaknessLabelFr: signal.weaknessLabelFr,
      weaknessLabelEn: signal.weaknessLabelEn,
      masteryLevel: meta.masteryLevel,
      attempts: attempts.length,
      correct: attempts.filter((a) => a.correct).length,
      incorrect: attempts.filter((a) => !a.correct).length,
      recentPerformance: computeWeightedPerformance(recent),
      historicalPerformance: computeWeightedPerformance(attempts),
      confidence: last?.confidence ?? null,
      reviewDue: input.reviewDueSkillIds.has(signal.skillId),
      actionTaskHref: links?.actionTaskHref ?? null,
      actionLessonHref: links?.actionLessonHref ?? null,
    });
  }

  return sortWeaknessItems(items);
}

export function groupWeaknessByEcoDomain(
  items: SkillWeaknessDashboardItem[],
  domainMeta: readonly {
    id: EcoDomainStableId;
    titleFr: string;
    titleEn: string;
    taskCount: number;
  }[]
): EcoDomainWeaknessGroup[] {
  return domainMeta.map((domain) => ({
    domainId: domain.id,
    domainTitleFr: domain.titleFr,
    domainTitleEn: domain.titleEn,
    taskCount: domain.taskCount,
    items: sortWeaknessItems(
      items.filter((item) => item.ecoDomainId === domain.id)
    ),
  }));
}

export function buildWeaknessDashboardReviewItems(input: {
  queue: ReviewQueueItemPure[];
  skillMeta: Map<string, SkillDashboardMeta>;
  actionLinksBySkillId: Map<string, SkillActionLinks>;
  now?: Date;
}): WeaknessDashboardReviewItem[] {
  const now = input.now ?? new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const soonLimit = new Date(today);
  soonLimit.setDate(soonLimit.getDate() + 3);

  const dueItems = input.queue.filter((item) => {
    const dueDay = new Date(item.dueAt);
    dueDay.setHours(0, 0, 0, 0);
    return (
      item.reasonCode === "DUE_TODAY" ||
      item.reasonCode === "DUE_SOON" ||
      dueDay.getTime() <= soonLimit.getTime()
    );
  });

  const rows: WeaknessDashboardReviewItem[] = [];
  for (const item of dueItems) {
    const meta = input.skillMeta.get(item.skillId);
    if (!meta) continue;
    const links = input.actionLinksBySkillId.get(item.skillId);
    rows.push({
      skillId: item.skillId,
      skillSlug: item.skillSlug,
      skillTitleFr: meta.titleFr,
      skillTitleEn: meta.titleEn,
      reasonCode: item.reasonCode,
      priority: item.priority,
      dueAt: item.dueAt.toISOString(),
      actionTaskHref: links?.actionTaskHref ?? null,
      actionLessonHref: links?.actionLessonHref ?? null,
    });
  }

  return rows.sort((a, b) => {
    if (a.priority !== b.priority) return a.priority - b.priority;
    return a.skillId.localeCompare(b.skillId);
  });
}

export function buildWeaknessDashboardView(input: {
  hasAttempts: boolean;
  signals: WeaknessSignal[];
  skillMeta: Map<string, SkillDashboardMeta>;
  attemptsBySkillId: Record<string, AttemptMasteryInput[]>;
  reviewQueue: ReviewQueueItemPure[];
  actionLinksBySkillId: Map<string, SkillActionLinks>;
  domainMeta: readonly {
    id: EcoDomainStableId;
    titleFr: string;
    titleEn: string;
    taskCount: number;
  }[];
  now?: Date;
}): WeaknessDashboardView {
  const reviewDueSkillIds = new Set(
    input.reviewQueue
      .filter(
        (item) =>
          item.reasonCode === "DUE_TODAY" ||
          item.reasonCode === "DUE_SOON" ||
          item.reasonCode === "WEAK_MASTERY"
      )
      .map((item) => item.skillId)
  );

  const weakestSkills = buildSkillWeaknessDashboardItems({
    signals: input.signals,
    skillMeta: input.skillMeta,
    attemptsBySkillId: input.attemptsBySkillId,
    reviewDueSkillIds,
    actionLinksBySkillId: input.actionLinksBySkillId,
  });

  return {
    hasAttempts: input.hasAttempts,
    weakestSkills: weakestSkills.slice(0, 8),
    ecoOverview: groupWeaknessByEcoDomain(weakestSkills, input.domainMeta),
    reviewDue: buildWeaknessDashboardReviewItems({
      queue: input.reviewQueue,
      skillMeta: input.skillMeta,
      actionLinksBySkillId: input.actionLinksBySkillId,
      now: input.now,
    }),
  };
}
