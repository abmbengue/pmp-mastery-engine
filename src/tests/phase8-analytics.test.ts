import { describe, expect, it } from "vitest";
import {
  avoidRecentQuestions,
  buildExamBlueprint,
  buildExamFromBlueprint,
  createSeededRng,
  seededShuffle,
  type BlueprintQuestionCandidate,
} from "@/modules/assessment-engine/exam-blueprint";
import {
  buildRetryExam,
  calculatePmpReadinessV2,
  calculateScoreTrend,
  classifyError,
} from "@/modules/assessment-engine/analytics-engine";

function makeCandidates(n: number): BlueprintQuestionCandidate[] {
  const domains = ["PEOPLE", "PROCESS", "BUSINESS_ENVIRONMENT"] as const;
  const diffs = ["EASY", "MEDIUM", "HARD"] as const;
  const deliveries = ["AGILE", "HYBRID", "PREDICTIVE"] as const;
  const scenarios = [
    "FIRST_ACTION",
    "NEXT_ACTION",
    "BEST_ACTION",
    "RISK",
    "STAKEHOLDER",
    "CONFLICT",
    "CHANGE",
    "AGILE",
    "HYBRID",
    "GOVERNANCE",
  ] as const;
  const skills = [
    "risk-management",
    "leadership",
    "stakeholder-engagement",
    "agile-mindset",
    "governance",
  ];
  return Array.from({ length: n }, (_, i) => ({
    id: `q${i + 1}`,
    domain: domains[i % domains.length],
    deliveryApproach: deliveries[i % deliveries.length],
    difficulty: diffs[i % diffs.length],
    scenarioType: scenarios[i % scenarios.length],
    skillSlugs: [skills[i % skills.length], skills[(i + 1) % skills.length]],
    learningObjective: "DECIDE" as const,
  }));
}

describe("buildExamBlueprint", () => {
  it("builds mock exam pedagogical distribution", () => {
    const bp = buildExamBlueprint("MOCK_EXAM");
    expect(bp.totalQuestions).toBe(60);
    expect(bp.domainDistribution.PEOPLE).toBe(18);
    expect(bp.domainDistribution.PROCESS).toBe(30);
    expect(bp.domainDistribution.BUSINESS_ENVIRONMENT).toBe(12);
  });

  it("builds full pmp 180 blueprint", () => {
    const bp = buildExamBlueprint("FULL_PMP");
    expect(bp.totalQuestions).toBe(180);
  });
});

describe("buildExamFromBlueprint", () => {
  it("is deterministic for same seed", () => {
    const candidates = makeCandidates(200);
    const bp = buildExamBlueprint("MOCK_EXAM");
    const a = buildExamFromBlueprint(bp, candidates, "seed-alpha");
    const b = buildExamFromBlueprint(bp, candidates, "seed-alpha");
    expect(a.map((s) => s.questionId)).toEqual(b.map((s) => s.questionId));
  });

  it("differs for different seeds", () => {
    const candidates = makeCandidates(200);
    const bp = buildExamBlueprint("QUICK_PRACTICE");
    const a = buildExamFromBlueprint(bp, candidates, "seed-a");
    const b = buildExamFromBlueprint(bp, candidates, "seed-b");
    expect(a.map((s) => s.questionId)).not.toEqual(b.map((s) => s.questionId));
  });

  it("has no duplicates", () => {
    const candidates = makeCandidates(200);
    const bp = buildExamBlueprint("MOCK_EXAM");
    const slots = buildExamFromBlueprint(bp, candidates, "dup-check");
    const ids = slots.map((s) => s.questionId);
    expect(new Set(ids).size).toBe(ids.length);
    expect(ids.length).toBe(60);
  });

  it("throws when bank is insufficient (no silent shortfall)", () => {
    const candidates = makeCandidates(20);
    const bp = buildExamBlueprint("FULL_PMP");
    expect(() => buildExamFromBlueprint(bp, candidates, "x")).toThrow(
      /INSUFFICIENT_QUESTION_BANK/
    );
  });

  it("respects domain filter for domain practice", () => {
    const candidates = makeCandidates(200);
    const bp = buildExamBlueprint("DOMAIN_PRACTICE", {
      domainFilter: "PROCESS",
    });
    const slots = buildExamFromBlueprint(bp, candidates, "domain");
    expect(slots.every((s) => s.domain === "PROCESS")).toBe(true);
  });
});

describe("avoidRecentQuestions", () => {
  it("excludes recent when enough remain", () => {
    const result = avoidRecentQuestions(
      ["a", "b", "c", "d", "e"],
      ["a", "b"],
      3
    );
    expect(result.fellBack).toBe(false);
    expect(result.available).toEqual(["c", "d", "e"]);
  });

  it("falls back when bank would be insufficient", () => {
    const result = avoidRecentQuestions(["a", "b", "c"], ["a", "b"], 3);
    expect(result.fellBack).toBe(true);
    expect(result.available).toEqual(["a", "b", "c"]);
  });
});

describe("classifyError", () => {
  it("classifies risk and stakeholder errors", () => {
    expect(classifyError({ scenarioType: "RISK" })).toBe("RISK_ERROR");
    expect(
      classifyError({ skillSlugs: ["stakeholder-engagement"] })
    ).toBe("STAKEHOLDER_ERROR");
  });

  it("classifies action priorities", () => {
    expect(
      classifyError({
        scenarioType: "FIRST_ACTION",
        learningObjective: "ANALYZE",
      })
    ).toBe("WRONG_PRIORITY");
    expect(
      classifyError({
        scenarioType: "BEST_ACTION",
        learningObjective: "DECIDE",
      })
    ).toBe("WRONG_ACTION");
  });
});

describe("calculateScoreTrend", () => {
  it("returns insufficient data below 3 attempts", () => {
    expect(calculateScoreTrend([50, 60])).toBe("INSUFFICIENT_DATA");
  });

  it("detects improving and declining", () => {
    expect(calculateScoreTrend([50, 55, 70, 75])).toBe("IMPROVING");
    expect(calculateScoreTrend([80, 75, 60, 50])).toBe("DECLINING");
  });

  it("detects stable", () => {
    expect(calculateScoreTrend([70, 71, 69, 70])).toBe("STABLE");
  });
});

describe("calculatePmpReadinessV2", () => {
  it("includes explanation and target gap", () => {
    const result = calculatePmpReadinessV2({
      recentPercentages: [60, 65, 70],
      averageScore: 65,
      scoreTrend: "IMPROVING",
      domainPerformances: [
        {
          domain: "PROCESS",
          percentage: 55,
          total: 10,
          band: "WEAK",
        },
      ],
      skillPerformances: [
        {
          skillSlug: "risk-management",
          percentage: 40,
          total: 5,
          band: "WEAK",
        },
      ],
      unansweredRate: 0.05,
      repeatedMistakeCount: 1,
      retryPercentages: [72],
      targetScorePercent: 75,
    });
    expect(result.explanationEn.toLowerCase()).toContain("improving");
    expect(result.gap).toBe(75 - 65);
    expect(result.labelEn).toContain("Practice Readiness");
    expect(result.limitationsEn.toLowerCase()).toContain("not an official");
  });
});

describe("buildRetryExam", () => {
  it("targets weak skills with combined count", () => {
    const plan = buildRetryExam({
      type: "RETRY_WEAK_SKILLS",
      wrongQuestionIds: [],
      weakSkillSlugs: ["risk-management", "stakeholder-engagement"],
      errorCategories: [],
      easyFailStreak: 0,
      lastRetryPercentage: null,
    });
    expect(plan.questionCount).toBe(15);
    expect(plan.skillSlugs).toHaveLength(2);
  });

  it("steps difficulty after improvement", () => {
    const plan = buildRetryExam({
      type: "RETRY_WEAK_SKILLS",
      wrongQuestionIds: [],
      weakSkillSlugs: ["risk-management"],
      errorCategories: [],
      easyFailStreak: 3,
      lastRetryPercentage: 80,
    });
    expect(plan.preferDifficulties).toContain("HARD");
  });
});

describe("seeded rng", () => {
  it("is stable", () => {
    const a = createSeededRng("x");
    const b = createSeededRng("x");
    expect([a(), a(), a()]).toEqual([b(), b(), b()]);
    expect(seededShuffle([1, 2, 3, 4], createSeededRng("s"))).toEqual(
      seededShuffle([1, 2, 3, 4], createSeededRng("s"))
    );
  });
});
