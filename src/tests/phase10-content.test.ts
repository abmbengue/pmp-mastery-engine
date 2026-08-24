import { describe, expect, it } from "vitest";
import {
  getNextReviewDate,
  REVIEW_INTERVALS_DAYS,
  sectionForReason,
  buildReviewQueue,
} from "@/modules/learning-engine/spaced-repetition";
import { LEARNING_PATHS } from "@/modules/learning-engine/learning-paths";
import { PF_LESSONS } from "../../prisma/seed/content/pf-lessons";
import { CF_LESSONS } from "../../prisma/seed/content/cf-lessons";
import { PMP_LESSONS } from "../../prisma/seed/content/pmp-lessons";
import { videoPayloadSchema } from "@/shared/types/content-payloads";

describe("Phase 10 review scheduling", () => {
  it("uses WEAK=1 LEARNING=3 MASTERED=7 intervals", () => {
    expect(REVIEW_INTERVALS_DAYS.WEAK).toBe(1);
    expect(REVIEW_INTERVALS_DAYS.LEARNING).toBe(3);
    expect(REVIEW_INTERVALS_DAYS.MASTERED).toBe(7);
  });

  it("getNextReviewDate is deterministic", () => {
    const now = new Date("2026-08-24T08:00:00Z");
    const a = getNextReviewDate(
      {
        masteryLevel: "MASTERED",
        lastReviewedAt: now,
        lastAttemptAt: null,
        recentErrorCount: 0,
      },
      now
    );
    const b = getNextReviewDate(
      {
        masteryLevel: "MASTERED",
        lastReviewedAt: now,
        lastAttemptAt: null,
        recentErrorCount: 0,
      },
      now
    );
    expect(a.toISOString()).toBe(b.toISOString());
    const expected = new Date(now);
    expected.setDate(expected.getDate() + 7);
    expect(a.getTime()).toBe(expected.getTime());
  });

  it("maps reason codes to calendar sections", () => {
    expect(sectionForReason("DUE_TODAY")).toBe("dueToday");
    expect(sectionForReason("WEAK_MASTERY")).toBe("weakConcepts");
    expect(sectionForReason("REPEATED_ERROR")).toBe("repeatedErrors");
    expect(sectionForReason("RECENTLY_LEARNED")).toBe("recentlyLearned");
  });

  it("respects persisted nextReviewAt when building queue", () => {
    const now = new Date("2026-08-24T12:00:00Z");
    const queue = buildReviewQueue(
      [
        {
          skillId: "1",
          skillSlug: "schedule-skill",
          masteryLevel: "LEARNING",
          lastReviewedAt: now,
          nextReviewAt: now,
          attemptCount: 1,
          recentErrorCount: 0,
          lastAttemptAt: now,
          lastAttemptCorrect: true,
        },
      ],
      now
    );
    expect(queue[0]?.reasonCode).toBe("DUE_TODAY");
  });
});

describe("Phase 10 learning paths", () => {
  it("defines three bilingual paths without a second progression engine", () => {
    expect(LEARNING_PATHS.map((p) => p.slug).sort()).toEqual([
      "corporate-finance-fundamentals",
      "financial-foundations",
      "pmp-core-preparation",
    ]);
    for (const p of LEARNING_PATHS) {
      expect(p.titleFr.length).toBeGreaterThan(3);
      expect(p.titleEn.length).toBeGreaterThan(3);
      expect(p.academySlug).toBeTruthy();
      expect(p.courseSlug).toBeTruthy();
    }
  });
});

describe("Phase 10 content catalogs FR/EN", () => {
  it("expands personal finance with required modules", () => {
    expect(PF_LESSONS.length).toBeGreaterThanOrEqual(45);
    for (const slug of [
      "understanding-income",
      "tracking-expenses",
      "emergency-fund",
      "debt-repayment-strategies",
      "why-save",
      "compound-interest",
      "wealth-habits",
    ]) {
      expect(PF_LESSONS.some((l) => l.slug === slug)).toBe(true);
    }
    for (const l of PF_LESSONS) {
      expect(l.titleFr).toBeTruthy();
      expect(l.titleEn).toBeTruthy();
      expect(l.textBodyFr.length).toBeGreaterThan(40);
      expect(l.textBodyEn.length).toBeGreaterThan(40);
      expect(l.question.options.length).toBeGreaterThanOrEqual(2);
    }
  });

  it("expands corporate finance catalogs", () => {
    expect(CF_LESSONS.length).toBeGreaterThanOrEqual(50);
    expect(CF_LESSONS.some((l) => l.slug === "wacc-basics")).toBe(true);
    expect(CF_LESSONS.some((l) => l.slug === "accretion-dilution")).toBe(true);
  });

  it("expands original PMP content including situational cases", () => {
    expect(PMP_LESSONS.length).toBeGreaterThanOrEqual(70);
    const situational = PMP_LESSONS.filter(
      (l) => l.moduleSlug === "situational-thinking"
    );
    expect(situational.length).toBeGreaterThanOrEqual(10);
    for (const s of situational) {
      expect(s.situation?.scenarioEn).toBeTruthy();
      expect(s.situation?.bestActionFr).toBeTruthy();
    }
  });

  it("prepares short metadata within 180 seconds", () => {
    const shorts = [...PF_LESSONS, ...CF_LESSONS, ...PMP_LESSONS].filter(
      (l) => l.isShort
    );
    expect(shorts.length).toBeGreaterThanOrEqual(10);
    for (const s of shorts) {
      expect(s.shortDurationSeconds!).toBeGreaterThanOrEqual(60);
      expect(s.shortDurationSeconds!).toBeLessThanOrEqual(180);
      const parsed = videoPayloadSchema.parse({
        titleFr: s.titleFr,
        titleEn: s.titleEn,
        language: "both",
        thumbnailUrl: null,
        descriptionFr: s.descriptionFr,
        descriptionEn: s.descriptionEn,
        isPlaceholder: true,
        isShort: true,
        durationSeconds: s.shortDurationSeconds,
        topic: s.shortTopic ?? s.slug,
        difficulty: s.difficulty,
        relatedLessonSlug: s.slug,
        learningObjective: s.learningObjective,
      });
      expect(parsed.relatedLessonSlug).toBe(s.slug);
    }
  });
});
