/**
 * Deterministic spaced-repetition intervals (days).
 * Pedagogical / explicable — NOT machine learning.
 */
export const REVIEW_INTERVALS_DAYS = {
  WEAK: 0,
  LEARNING: 3,
  MASTERED: 14,
  /** After a repeated exam error, pull forward by this many days */
  REPEATED_ERROR_PULL_FORWARD: 2,
} as const;

export type ReviewReasonCode =
  | "WEAK_MASTERY"
  | "REPEATED_ERROR"
  | "DUE_TODAY"
  | "RECENT_FAILURE"
  | "UNFINISHED_LESSON"
  | "CORRECTIVE_LEARNING";

export interface ReviewCandidateInput {
  skillId: string;
  skillSlug: string;
  masteryLevel: "WEAK" | "LEARNING" | "MASTERED";
  lastReviewedAt: Date | null;
  attemptCount: number;
  recentErrorCount: number;
  lastAttemptAt: Date | null;
  lastAttemptCorrect: boolean | null;
}

export interface ReviewQueueItemPure {
  skillId: string;
  skillSlug: string;
  masteryLevel: "WEAK" | "LEARNING" | "MASTERED";
  reasonCode: ReviewReasonCode;
  /** Lower = higher priority */
  priority: number;
  dueAt: Date;
  intervalDays: number;
}

function startOfDay(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

export function intervalDaysForMastery(
  level: "WEAK" | "LEARNING" | "MASTERED"
): number {
  return REVIEW_INTERVALS_DAYS[level];
}

/**
 * Next due date from last review (or last attempt) + mastery interval.
 */
export function computeNextReviewAt(
  input: Pick<
    ReviewCandidateInput,
    "masteryLevel" | "lastReviewedAt" | "lastAttemptAt" | "recentErrorCount"
  >,
  now: Date = new Date()
): Date {
  const base = input.lastReviewedAt ?? input.lastAttemptAt ?? now;
  let days = intervalDaysForMastery(input.masteryLevel);
  if (input.recentErrorCount >= 2) {
    days = Math.max(0, days - REVIEW_INTERVALS_DAYS.REPEATED_ERROR_PULL_FORWARD);
  }
  if (input.masteryLevel === "WEAK") {
    days = 0;
  }
  const due = new Date(base);
  due.setDate(due.getDate() + days);
  return due;
}

/**
 * Pure review queue builder — deterministic for same inputs + now.
 */
export function buildReviewQueue(
  candidates: ReviewCandidateInput[],
  now: Date = new Date()
): ReviewQueueItemPure[] {
  const today = startOfDay(now);
  const items: ReviewQueueItemPure[] = [];

  for (const c of candidates) {
    const dueAt = computeNextReviewAt(c, now);
    const dueDay = startOfDay(dueAt);
    const intervalDays = intervalDaysForMastery(c.masteryLevel);

    let reasonCode: ReviewReasonCode | null = null;
    let priority = 100;

    if (c.masteryLevel === "WEAK") {
      reasonCode = "WEAK_MASTERY";
      priority = 10 + Math.min(20, c.recentErrorCount * 2);
    } else if (c.recentErrorCount >= 2) {
      reasonCode = "REPEATED_ERROR";
      priority = 20 + Math.max(0, 10 - c.recentErrorCount);
    } else if (c.lastAttemptCorrect === false) {
      reasonCode = "RECENT_FAILURE";
      priority = 30;
    } else if (dueDay.getTime() <= today.getTime()) {
      reasonCode = "DUE_TODAY";
      priority =
        c.masteryLevel === "LEARNING" ? 40 : c.masteryLevel === "MASTERED" ? 60 : 50;
    }

    if (!reasonCode) continue;

    // Prefer fewer attempts already done on weak skills (need exposure)
    priority += Math.min(15, c.attemptCount);

    items.push({
      skillId: c.skillId,
      skillSlug: c.skillSlug,
      masteryLevel: c.masteryLevel,
      reasonCode,
      priority,
      dueAt,
      intervalDays,
    });
  }

  return items.sort((a, b) => {
    if (a.priority !== b.priority) return a.priority - b.priority;
    return a.skillSlug.localeCompare(b.skillSlug);
  });
}
