import { describe, expect, it } from "vitest";
import {
  buildReviewQueue,
  computeNextReviewAt,
  intervalDaysForMastery,
  REVIEW_INTERVALS_DAYS,
} from "@/modules/learning-engine/spaced-repetition";
import {
  mapErrorToCorrectiveLearning,
  rankRecurringErrors,
} from "@/modules/learning-engine/corrective-learning";

describe("spaced repetition", () => {
  it("uses configurable intervals by mastery", () => {
    expect(intervalDaysForMastery("WEAK")).toBe(REVIEW_INTERVALS_DAYS.WEAK);
    expect(intervalDaysForMastery("LEARNING")).toBe(REVIEW_INTERVALS_DAYS.LEARNING);
    expect(intervalDaysForMastery("MASTERED")).toBe(REVIEW_INTERVALS_DAYS.MASTERED);
  });

  it("schedules weak skills after the configured short interval", () => {
    const now = new Date("2026-08-24T12:00:00Z");
    const due = computeNextReviewAt(
      {
        masteryLevel: "WEAK",
        lastReviewedAt: now,
        lastAttemptAt: null,
        recentErrorCount: 0,
      },
      now
    );
    const expected = new Date(now);
    expected.setDate(expected.getDate() + REVIEW_INTERVALS_DAYS.WEAK);
    expect(due.getTime()).toBe(expected.getTime());
  });

  it("exposes getNextReviewDate as alias", async () => {
    const { getNextReviewDate } = await import(
      "@/modules/learning-engine/spaced-repetition"
    );
    const now = new Date("2026-08-24T12:00:00Z");
    const a = getNextReviewDate(
      {
        masteryLevel: "LEARNING",
        lastReviewedAt: now,
        lastAttemptAt: null,
        recentErrorCount: 0,
      },
      now
    );
    const b = computeNextReviewAt(
      {
        masteryLevel: "LEARNING",
        lastReviewedAt: now,
        lastAttemptAt: null,
        recentErrorCount: 0,
      },
      now
    );
    expect(a.getTime()).toBe(b.getTime());
  });

  it("builds a deterministic priority queue", () => {
    const now = new Date("2026-08-24T12:00:00Z");
    const queue = buildReviewQueue(
      [
        {
          skillId: "1",
          skillSlug: "risk-management",
          masteryLevel: "WEAK",
          lastReviewedAt: null,
          attemptCount: 1,
          recentErrorCount: 3,
          lastAttemptAt: now,
          lastAttemptCorrect: false,
        },
        {
          skillId: "2",
          skillSlug: "leadership",
          masteryLevel: "MASTERED",
          lastReviewedAt: new Date("2026-08-01T12:00:00Z"),
          attemptCount: 5,
          recentErrorCount: 0,
          lastAttemptAt: new Date("2026-08-01T12:00:00Z"),
          lastAttemptCorrect: true,
        },
        {
          skillId: "3",
          skillSlug: "stakeholder-engagement",
          masteryLevel: "LEARNING",
          lastReviewedAt: new Date("2026-08-10T12:00:00Z"),
          attemptCount: 2,
          recentErrorCount: 2,
          lastAttemptAt: new Date("2026-08-20T12:00:00Z"),
          lastAttemptCorrect: false,
        },
      ],
      now
    );
    expect(queue[0].skillSlug).toBe("risk-management");
    expect(queue[0].reasonCode).toBe("WEAK_MASTERY");
    expect(queue.some((q) => q.reasonCode === "REPEATED_ERROR")).toBe(true);
    const again = buildReviewQueue(
      [
        {
          skillId: "1",
          skillSlug: "risk-management",
          masteryLevel: "WEAK",
          lastReviewedAt: null,
          attemptCount: 1,
          recentErrorCount: 3,
          lastAttemptAt: now,
          lastAttemptCorrect: false,
        },
        {
          skillId: "2",
          skillSlug: "leadership",
          masteryLevel: "MASTERED",
          lastReviewedAt: new Date("2026-08-01T12:00:00Z"),
          attemptCount: 5,
          recentErrorCount: 0,
          lastAttemptAt: new Date("2026-08-01T12:00:00Z"),
          lastAttemptCorrect: true,
        },
        {
          skillId: "3",
          skillSlug: "stakeholder-engagement",
          masteryLevel: "LEARNING",
          lastReviewedAt: new Date("2026-08-10T12:00:00Z"),
          attemptCount: 2,
          recentErrorCount: 2,
          lastAttemptAt: new Date("2026-08-20T12:00:00Z"),
          lastAttemptCorrect: false,
        },
      ],
      now
    );
    expect(again.map((q) => q.skillSlug)).toEqual(queue.map((q) => q.skillSlug));
  });
});

describe("corrective learning", () => {
  it("maps error types to skills and objectives", () => {
    const risk = mapErrorToCorrectiveLearning("RISK_ERROR", "risk-management");
    expect(risk.preferredSkillSlugs[0]).toBe("risk-management");
    expect(risk.learningObjective).toBe("APPLY");
    expect(risk.reasonCode).toBe("CORRECTIVE_LEARNING");

    const agile = mapErrorToCorrectiveLearning("AGILE_MINDSET");
    expect(agile.preferredSkillSlugs).toContain("agile-mindset");
  });

  it("ranks recurring errors deterministically", () => {
    const ranked = rankRecurringErrors({
      RISK_ERROR: 2,
      STAKEHOLDER_ERROR: 5,
      OTHER: 5,
    });
    expect(ranked[0].category).toBe("OTHER");
    expect(ranked[1].category).toBe("STAKEHOLDER_ERROR");
    expect(ranked[2].count).toBe(2);
  });
});
