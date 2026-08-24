/**
 * Deterministic spaced-repetition intervals (days).
 * Pedagogical / explicable — NOT machine learning.
 * Centralized configuration — do not scatter magic numbers.
 */
export const REVIEW_INTERVALS_DAYS = {
  WEAK: 1,
  LEARNING: 3,
  MASTERED: 7,
  /** Items due within this many days appear in "Due soon" */
  DUE_SOON_WINDOW_DAYS: 3,
  /** After a repeated exam error, pull forward by this many days */
  REPEATED_ERROR_PULL_FORWARD: 2,
} as const;

export type ReviewReasonCode =
  | "WEAK_MASTERY"
  | "REPEATED_ERROR"
  | "DUE_TODAY"
  | "DUE_SOON"
  | "RECENT_FAILURE"
  | "RECENTLY_LEARNED"
  | "UNFINISHED_LESSON"
  | "CORRECTIVE_LEARNING";

export interface ReviewCandidateInput {
  skillId: string;
  skillSlug: string;
  masteryLevel: "WEAK" | "LEARNING" | "MASTERED";
  lastReviewedAt: Date | null;
  /** Persisted schedule when available */
  nextReviewAt?: Date | null;
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
 * Deterministic next review date from mastery + last activity.
 * Alias: getNextReviewDate
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
  const due = new Date(base);
  due.setDate(due.getDate() + days);
  return due;
}

/** Public alias for scheduling APIs / docs */
export function getNextReviewDate(
  input: Pick<
    ReviewCandidateInput,
    "masteryLevel" | "lastReviewedAt" | "lastAttemptAt" | "recentErrorCount"
  >,
  now: Date = new Date()
): Date {
  return computeNextReviewAt(input, now);
}

/**
 * Pure review queue builder — deterministic for same inputs + now.
 * Prefers persisted nextReviewAt when provided.
 */
export function buildReviewQueue(
  candidates: ReviewCandidateInput[],
  now: Date = new Date()
): ReviewQueueItemPure[] {
  const today = startOfDay(now);
  const soonLimit = new Date(today);
  soonLimit.setDate(soonLimit.getDate() + REVIEW_INTERVALS_DAYS.DUE_SOON_WINDOW_DAYS);

  const items: ReviewQueueItemPure[] = [];

  for (const c of candidates) {
    const computed = computeNextReviewAt(c, now);
    const dueAt = c.nextReviewAt ?? computed;
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
        c.masteryLevel === "LEARNING" ? 40 : c.masteryLevel === "MASTERED" ? 55 : 45;
    } else if (dueDay.getTime() <= soonLimit.getTime()) {
      reasonCode = "DUE_SOON";
      priority = 70;
    } else if (
      c.masteryLevel === "LEARNING" &&
      c.lastReviewedAt &&
      startOfDay(c.lastReviewedAt).getTime() >=
        today.getTime() - 2 * 24 * 60 * 60 * 1000
    ) {
      reasonCode = "RECENTLY_LEARNED";
      priority = 80;
    }

    if (!reasonCode) continue;

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

export type ReviewCalendarSection =
  | "dueToday"
  | "dueSoon"
  | "weakConcepts"
  | "repeatedErrors"
  | "recentlyLearned";

export function sectionForReason(code: ReviewReasonCode): ReviewCalendarSection {
  switch (code) {
    case "DUE_TODAY":
      return "dueToday";
    case "DUE_SOON":
      return "dueSoon";
    case "WEAK_MASTERY":
      return "weakConcepts";
    case "REPEATED_ERROR":
    case "RECENT_FAILURE":
    case "CORRECTIVE_LEARNING":
      return "repeatedErrors";
    case "RECENTLY_LEARNED":
    case "UNFINISHED_LESSON":
    default:
      return "recentlyLearned";
  }
}
