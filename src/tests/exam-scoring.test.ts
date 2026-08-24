import { describe, it, expect } from "vitest";
import {
  calculateDeliveryPerformance,
  calculateDomainPerformance,
  calculateExamScore,
  calculatePmpReadiness,
  calculateSkillPerformance,
  evaluateSelectedOptions,
  performanceBandFromPercentage,
} from "@/modules/assessment-engine/exam-scoring";
import type { ScoredExamItem } from "@/modules/assessment-engine/exam-types";

function item(
  partial: Partial<ScoredExamItem> & { questionId: string }
): ScoredExamItem {
  return {
    selectedOptionIds: [],
    correctOptionIds: ["a"],
    isCorrect: false,
    unanswered: true,
    skillSlugs: [],
    ...partial,
  };
}

describe("calculateExamScore", () => {
  it("handles all correct", () => {
    const items = [
      item({
        questionId: "1",
        selectedOptionIds: ["a"],
        correctOptionIds: ["a"],
        isCorrect: true,
        unanswered: false,
      }),
      item({
        questionId: "2",
        selectedOptionIds: ["b"],
        correctOptionIds: ["b"],
        isCorrect: true,
        unanswered: false,
      }),
    ];
    const score = calculateExamScore(items);
    expect(score.correct).toBe(2);
    expect(score.incorrect).toBe(0);
    expect(score.unanswered).toBe(0);
    expect(score.percentage).toBe(100);
    expect(score.rawScore).toBe(2);
  });

  it("handles all wrong", () => {
    const items = [
      item({
        questionId: "1",
        selectedOptionIds: ["x"],
        correctOptionIds: ["a"],
        isCorrect: false,
        unanswered: false,
      }),
      item({
        questionId: "2",
        selectedOptionIds: ["y"],
        correctOptionIds: ["b"],
        isCorrect: false,
        unanswered: false,
      }),
    ];
    const score = calculateExamScore(items);
    expect(score.correct).toBe(0);
    expect(score.incorrect).toBe(2);
    expect(score.percentage).toBe(0);
  });

  it("handles unanswered", () => {
    const items = [
      item({ questionId: "1", unanswered: true, selectedOptionIds: [] }),
      item({
        questionId: "2",
        selectedOptionIds: ["a"],
        isCorrect: true,
        unanswered: false,
      }),
    ];
    const score = calculateExamScore(items);
    expect(score.unanswered).toBe(1);
    expect(score.correct).toBe(1);
    expect(score.percentage).toBe(50);
  });

  it("handles mixed answers", () => {
    const items = [
      item({
        questionId: "1",
        selectedOptionIds: ["a"],
        isCorrect: true,
        unanswered: false,
      }),
      item({
        questionId: "2",
        selectedOptionIds: ["x"],
        isCorrect: false,
        unanswered: false,
      }),
      item({ questionId: "3", unanswered: true }),
      item({
        questionId: "4",
        selectedOptionIds: ["d"],
        isCorrect: true,
        unanswered: false,
      }),
    ];
    const score = calculateExamScore(items);
    expect(score).toMatchObject({
      correct: 2,
      incorrect: 1,
      unanswered: 1,
      total: 4,
      percentage: 50,
      rawScore: 2,
    });
  });

  it("returns zeros for empty exam", () => {
    expect(calculateExamScore([])).toEqual({
      rawScore: 0,
      percentage: 0,
      correct: 0,
      incorrect: 0,
      unanswered: 0,
      total: 0,
    });
  });
});

describe("calculateDomainPerformance", () => {
  it("computes domain scores and bands", () => {
    const items: ScoredExamItem[] = [
      item({
        questionId: "1",
        domain: "PEOPLE",
        isCorrect: true,
        unanswered: false,
        selectedOptionIds: ["a"],
      }),
      item({
        questionId: "2",
        domain: "PEOPLE",
        isCorrect: false,
        unanswered: false,
        selectedOptionIds: ["x"],
      }),
      item({
        questionId: "3",
        domain: "PROCESS",
        isCorrect: true,
        unanswered: false,
        selectedOptionIds: ["a"],
      }),
      item({
        questionId: "4",
        domain: "BUSINESS_ENVIRONMENT",
        isCorrect: false,
        unanswered: false,
        selectedOptionIds: ["x"],
      }),
    ];
    const rows = calculateDomainPerformance(items);
    const people = rows.find((r) => r.domain === "PEOPLE")!;
    expect(people.percentage).toBe(50);
    expect(people.band).toBe("WEAK");
    const process = rows.find((r) => r.domain === "PROCESS")!;
    expect(process.percentage).toBe(100);
    expect(process.band).toBe("STRONG");
  });
});

describe("calculateSkillPerformance", () => {
  it("aggregates multi-skill questions", () => {
    const items: ScoredExamItem[] = [
      item({
        questionId: "1",
        skillSlugs: ["risk-management", "stakeholder-engagement"],
        isCorrect: true,
        unanswered: false,
        selectedOptionIds: ["a"],
      }),
      item({
        questionId: "2",
        skillSlugs: ["risk-management"],
        isCorrect: false,
        unanswered: false,
        selectedOptionIds: ["x"],
      }),
      item({
        questionId: "3",
        skillSlugs: ["conflict-management"],
        isCorrect: false,
        unanswered: false,
        selectedOptionIds: ["x"],
      }),
    ];
    const rows = calculateSkillPerformance(items);
    const risk = rows.find((r) => r.skillSlug === "risk-management")!;
    expect(risk.total).toBe(2);
    expect(risk.correct).toBe(1);
    expect(risk.percentage).toBe(50);
    expect(rows[0].percentage).toBeLessThanOrEqual(rows[rows.length - 1].percentage);
  });
});

describe("calculateDeliveryPerformance", () => {
  it("scores agile / hybrid / predictive", () => {
    const items: ScoredExamItem[] = [
      item({
        questionId: "1",
        deliveryApproach: "AGILE",
        isCorrect: true,
        unanswered: false,
        selectedOptionIds: ["a"],
      }),
      item({
        questionId: "2",
        deliveryApproach: "AGILE",
        isCorrect: true,
        unanswered: false,
        selectedOptionIds: ["a"],
      }),
      item({
        questionId: "3",
        deliveryApproach: "HYBRID",
        isCorrect: false,
        unanswered: false,
        selectedOptionIds: ["x"],
      }),
    ];
    const rows = calculateDeliveryPerformance(items);
    expect(rows.find((r) => r.approach === "AGILE")!.percentage).toBe(100);
    expect(rows.find((r) => r.approach === "HYBRID")!.percentage).toBe(0);
    expect(rows.find((r) => r.approach === "PREDICTIVE")!.total).toBe(0);
  });
});

describe("calculatePmpReadiness", () => {
  it("returns NOT_READY for low scores and mistakes", () => {
    const result = calculatePmpReadiness({
      recentPercentages: [30, 40],
      domainPerformances: [
        {
          domain: "PEOPLE",
          correct: 1,
          total: 5,
          percentage: 20,
          band: "WEAK",
        },
      ],
      skillPerformances: [
        {
          skillSlug: "conflict-management",
          correct: 0,
          total: 3,
          percentage: 0,
          band: "WEAK",
        },
        {
          skillSlug: "risk-management",
          correct: 1,
          total: 4,
          percentage: 25,
          band: "WEAK",
        },
      ],
      unansweredRate: 0.4,
      repeatedMistakeCount: 5,
    });
    expect(result.level).toBe("NOT_READY");
    expect(result.labelEn).toContain("Practice Readiness");
    expect(result.labelEn).not.toMatch(/PMI readiness/i);
    expect(result.limitationsEn.toLowerCase()).toContain("not an official");
  });

  it("returns DEVELOPING for mid thresholds", () => {
    const result = calculatePmpReadiness({
      recentPercentages: [55, 60, 58],
      domainPerformances: [
        {
          domain: "PROCESS",
          correct: 6,
          total: 10,
          percentage: 60,
          band: "NEEDS_PRACTICE",
        },
      ],
      skillPerformances: [
        {
          skillSlug: "schedule",
          correct: 3,
          total: 5,
          percentage: 60,
          band: "NEEDS_PRACTICE",
        },
      ],
      unansweredRate: 0.1,
      repeatedMistakeCount: 1,
    });
    expect(result.level).toBe("DEVELOPING");
  });

  it("returns READY when strong and consistent", () => {
    const result = calculatePmpReadiness({
      recentPercentages: [82, 85, 88],
      domainPerformances: [
        {
          domain: "PEOPLE",
          correct: 8,
          total: 10,
          percentage: 80,
          band: "STRONG",
        },
        {
          domain: "PROCESS",
          correct: 9,
          total: 10,
          percentage: 90,
          band: "STRONG",
        },
        {
          domain: "BUSINESS_ENVIRONMENT",
          correct: 8,
          total: 10,
          percentage: 80,
          band: "STRONG",
        },
      ],
      skillPerformances: [
        {
          skillSlug: "leadership",
          correct: 4,
          total: 5,
          percentage: 80,
          band: "STRONG",
        },
        {
          skillSlug: "risk-management",
          correct: 5,
          total: 5,
          percentage: 100,
          band: "STRONG",
        },
      ],
      unansweredRate: 0.05,
      repeatedMistakeCount: 0,
    });
    expect(result.level).toBe("READY");
    expect(result.score).toBeGreaterThanOrEqual(75);
  });

  it("penalizes repeated mistakes", () => {
    const base = {
      recentPercentages: [70, 72],
      domainPerformances: [
        {
          domain: "PEOPLE",
          correct: 7,
          total: 10,
          percentage: 70,
          band: "NEEDS_PRACTICE" as const,
        },
      ],
      skillPerformances: [],
      unansweredRate: 0.05,
    };
    const mild = calculatePmpReadiness({ ...base, repeatedMistakeCount: 0 });
    const heavy = calculatePmpReadiness({ ...base, repeatedMistakeCount: 6 });
    expect(heavy.score).toBeLessThan(mild.score);
  });
});

describe("helpers", () => {
  it("maps performance bands", () => {
    expect(performanceBandFromPercentage(80)).toBe("STRONG");
    expect(performanceBandFromPercentage(60)).toBe("NEEDS_PRACTICE");
    expect(performanceBandFromPercentage(59)).toBe("WEAK");
  });

  it("evaluates selected options", () => {
    expect(evaluateSelectedOptions(["a"], ["a"], "SINGLE_CHOICE")).toBe(true);
    expect(evaluateSelectedOptions(["b", "a"], ["a", "b"], "MULTIPLE_CHOICE")).toBe(
      true
    );
    expect(evaluateSelectedOptions([], ["a"], "TRUE_FALSE")).toBe(false);
  });
});
