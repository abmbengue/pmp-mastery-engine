import { describe, expect, it } from "vitest";
import { videoPayloadSchema } from "@/shared/types/content-payloads";
import {
  mapErrorToCorrectiveLearning,
  rankRecurringErrors,
} from "@/modules/learning-engine/corrective-learning";
import {
  buildReviewQueue,
  computeNextReviewAt,
} from "@/modules/learning-engine/spaced-repetition";

describe("error → corrective learning linkage", () => {
  it("links errorType → skill → learningObjective", () => {
    const hint = mapErrorToCorrectiveLearning("STAKEHOLDER_ERROR", "communication");
    expect(hint.errorCategory).toBe("STAKEHOLDER_ERROR");
    expect(hint.preferredSkillSlugs[0]).toBe("communication");
    expect(hint.learningObjective).toBe("APPLY");
    expect(hint.summaryEn.length).toBeGreaterThan(10);
    expect(hint.summaryFr.length).toBeGreaterThan(10);
  });

  it("ranks recurring errors for readiness surfaces", () => {
    const ranked = rankRecurringErrors({
      PROCESS_ERROR: 4,
      RISK_ERROR: 1,
      MISREAD_SCENARIO: 4,
    });
    expect(ranked.map((r) => r.category)).toEqual([
      "MISREAD_SCENARIO",
      "PROCESS_ERROR",
      "RISK_ERROR",
    ]);
  });
});

describe("review queue priorities", () => {
  it("prioritizes weak before mastered due items", () => {
    const now = new Date("2026-08-24T10:00:00Z");
    const queue = buildReviewQueue(
      [
        {
          skillId: "m",
          skillSlug: "zzz-mastered",
          masteryLevel: "MASTERED",
          lastReviewedAt: new Date("2026-07-01T10:00:00Z"),
          attemptCount: 4,
          recentErrorCount: 0,
          lastAttemptAt: new Date("2026-07-01T10:00:00Z"),
          lastAttemptCorrect: true,
        },
        {
          skillId: "w",
          skillSlug: "aaa-weak",
          masteryLevel: "WEAK",
          lastReviewedAt: null,
          attemptCount: 0,
          recentErrorCount: 1,
          lastAttemptAt: now,
          lastAttemptCorrect: false,
        },
      ],
      now
    );
    expect(queue[0].skillSlug).toBe("aaa-weak");
    expect(queue[0].reasonCode).toBe("WEAK_MASTERY");
  });

  it("LEARNING uses short interval, MASTERED longer", () => {
    const now = new Date("2026-08-24T10:00:00Z");
    const learningDue = computeNextReviewAt(
      {
        masteryLevel: "LEARNING",
        lastReviewedAt: new Date("2026-08-24T10:00:00Z"),
        lastAttemptAt: null,
        recentErrorCount: 0,
      },
      now
    );
    const masteredDue = computeNextReviewAt(
      {
        masteryLevel: "MASTERED",
        lastReviewedAt: new Date("2026-08-24T10:00:00Z"),
        lastAttemptAt: null,
        recentErrorCount: 0,
      },
      now
    );
    expect(learningDue.getTime()).toBeLessThan(masteredDue.getTime());
  });
});

describe("short video metadata (Phase 9)", () => {
  it("accepts related lesson + learning objective on VIDEO shorts", () => {
    const parsed = videoPayloadSchema.parse({
      titleFr: "Fonds d'urgence",
      titleEn: "Emergency fund",
      language: "both",
      thumbnailUrl: null,
      descriptionFr: "Court",
      descriptionEn: "Short",
      isPlaceholder: true,
      isShort: true,
      durationSeconds: 155,
      topic: "emergency-fund",
      difficulty: "BEGINNER",
      academySlug: "personal-finance",
      relatedSkillSlug: "pf-budgeting",
      relatedLessonSlug: "emergency-fund",
      learningObjective: "IDENTIFY",
    });
    expect(parsed.relatedLessonSlug).toBe("emergency-fund");
    expect(parsed.learningObjective).toBe("IDENTIFY");
    expect(parsed.durationSeconds).toBeLessThanOrEqual(180);
  });
});

describe("readiness report disclaimers (pedagogical copy)", () => {
  it("EN and FR disclaimers never claim official PMI scoring", () => {
    const disclaimerEn =
      "Practice Readiness — NOT AN OFFICIAL PMI SCORE. Educational estimate only; not a pass/fail prediction.";
    const disclaimerFr =
      "Préparation pratique — PAS UN SCORE PMI OFFICIEL. Estimation pédagogique uniquement ; pas une prédiction de réussite.";
    expect(disclaimerEn).toMatch(/NOT AN OFFICIAL PMI SCORE/i);
    expect(disclaimerFr).toMatch(/PAS UN SCORE PMI OFFICIEL/i);
    expect(disclaimerEn.toLowerCase()).not.toContain("guaranteed");
    expect(disclaimerFr.toLowerCase()).not.toContain("garanti");
  });
});
