/**
 * Retention model — item, skill, and concept layers (PLA proprietary schedule).
 */

import type { MasteryState, RetentionScheduleConfig } from "./types";
import { DEFAULT_RETENTION_SCHEDULE } from "./types";

export type RetentionRecord = {
  lastSeen: Date | null;
  lastCorrect: Date | null;
  lastIncorrect: Date | null;
  reviewCount: number;
  retentionScore: number;
  nextReviewAt: Date | null;
};

export function intervalDaysForReviewCount(
  reviewCount: number,
  config: RetentionScheduleConfig = DEFAULT_RETENTION_SCHEDULE
): number {
  const intervals = config.dayIntervals;
  if (reviewCount < 0) return intervals[0] ?? 0;
  if (reviewCount >= intervals.length) {
    return intervals[intervals.length - 1] ?? 30;
  }
  return intervals[reviewCount] ?? 1;
}

export function computeNextReviewDate(
  reviewCount: number,
  from: Date = new Date(),
  config: RetentionScheduleConfig = DEFAULT_RETENTION_SCHEDULE
): Date {
  const days = intervalDaysForReviewCount(reviewCount, config);
  const next = new Date(from);
  next.setDate(next.getDate() + days);
  return next;
}

export function computeRetentionScore(input: {
  correctStreak: number;
  incorrectRecent: number;
  reviewCount: number;
  masteryState: MasteryState;
}): number {
  let score = 50;
  score += Math.min(30, input.correctStreak * 10);
  score -= Math.min(40, input.incorrectRecent * 15);
  score += Math.min(10, input.reviewCount * 2);
  if (input.masteryState === "STRONG" || input.masteryState === "MASTERED") score += 10;
  if (input.masteryState === "FRAGILE" || input.masteryState === "DEVELOPING") score -= 10;
  return Math.max(0, Math.min(100, score));
}

export function buildRetentionRecord(input: {
  lastSeen: Date | null;
  lastCorrect: Date | null;
  lastIncorrect: Date | null;
  reviewCount: number;
  masteryState: MasteryState;
  correctStreak?: number;
  incorrectRecent?: number;
}): RetentionRecord {
  const retentionScore = computeRetentionScore({
    correctStreak: input.correctStreak ?? 0,
    incorrectRecent: input.incorrectRecent ?? 0,
    reviewCount: input.reviewCount,
    masteryState: input.masteryState,
  });
  const base = input.lastSeen ?? new Date();
  return {
    lastSeen: input.lastSeen,
    lastCorrect: input.lastCorrect,
    lastIncorrect: input.lastIncorrect,
    reviewCount: input.reviewCount,
    retentionScore,
    nextReviewAt: computeNextReviewDate(input.reviewCount, base),
  };
}
