/**
 * Phase C4 — derives ConceptMastery review schedule inputs from quiz attempts.
 * Runtime nextReviewAt uses learning-engine/spaced-repetition.ts exclusively.
 */

import type { MasteryLevel } from "@/generated/prisma/client";
import { getNextReviewDate } from "@/modules/learning-engine/spaced-repetition";
import type { AttemptMasteryInput } from "./weakness-model";

/** Canonical recent-error window for skill-scoped scheduling (last N attempts). */
export const RECENT_ATTEMPT_WINDOW = 5;

export function countRecentSkillErrors(attempts: AttemptMasteryInput[]): number {
  return attempts.slice(-RECENT_ATTEMPT_WINDOW).filter((a) => !a.correct).length;
}

export type SkillReviewScheduleInput = {
  lastReviewedAt: Date;
  lastAttemptAt: Date | null;
  recentErrorCount: number;
};

/**
 * Deterministic schedule inputs from skill-scoped attempts + review timestamp.
 */
export function deriveSkillReviewScheduleInput(
  attempts: AttemptMasteryInput[],
  reviewedAt: Date
): SkillReviewScheduleInput {
  const last = attempts[attempts.length - 1];
  return {
    lastReviewedAt: reviewedAt,
    lastAttemptAt: last?.answeredAt ?? null,
    recentErrorCount: countRecentSkillErrors(attempts),
  };
}

/**
 * Canonical nextReviewAt for ConceptMastery — delegates to spaced-repetition.ts.
 */
export function computeConceptMasteryNextReviewAt(
  level: MasteryLevel,
  schedule: SkillReviewScheduleInput,
  now: Date
): Date {
  return getNextReviewDate(
    {
      masteryLevel: level,
      lastReviewedAt: schedule.lastReviewedAt,
      lastAttemptAt: schedule.lastAttemptAt,
      recentErrorCount: schedule.recentErrorCount,
    },
    now
  );
}
