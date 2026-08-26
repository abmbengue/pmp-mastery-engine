import { describe, expect, it } from "vitest";
import {
  ECO_PROXY_DOMAIN_WEIGHTS,
  ECO_PROXY_TASK_COUNT,
  ECO_PROXY_TASKS,
  ECO_PROXY_VERSION,
  ecoTaskCodes,
} from "@/modules/assessment-engine/eco-proxy-2026";
import {
  MASTERY_CONCEPTS,
  assessCalibration,
  buildEcoCoverageReport,
  buildItemRetentionState,
  computeWeightedAccuracy,
  learningObjectiveToCognitive,
  masteryLevelFromWeightedAccuracy,
} from "@/modules/assessment-engine/mastery-model";
import {
  PMP_EXAM_BANK,
  PMP_EXAM_BANK_STEMS,
} from "../../prisma/seed/pmp-exam-bank-data";

describe("PMP Mastery Engine Phase B — ECO-proxy ontology", () => {
  it("defines 26 PLA ECO-proxy tasks (8+10+8) for 2026 structure", () => {
    expect(ECO_PROXY_TASK_COUNT).toBe(26);
    expect(ECO_PROXY_TASKS.filter((t) => t.ecoDomain === "PE")).toHaveLength(8);
    expect(ECO_PROXY_TASKS.filter((t) => t.ecoDomain === "PR")).toHaveLength(10);
    expect(ECO_PROXY_TASKS.filter((t) => t.ecoDomain === "BE")).toHaveLength(8);
    expect(ecoTaskCodes()).toHaveLength(26);
    expect(ECO_PROXY_VERSION).toContain("2026");
  });

  it("uses ECO 2026 domain weight targets (33/41/26)", () => {
    expect(ECO_PROXY_DOMAIN_WEIGHTS.PEOPLE).toBeCloseTo(0.33);
    expect(ECO_PROXY_DOMAIN_WEIGHTS.PROCESS).toBeCloseTo(0.41);
    expect(ECO_PROXY_DOMAIN_WEIGHTS.BUSINESS_ENVIRONMENT).toBeCloseTo(0.26);
  });

  it("maps every ECO task to at least one mastery concept", () => {
    for (const task of ECO_PROXY_TASKS) {
      const concepts = MASTERY_CONCEPTS.filter((c) => c.ecoTaskCode === task.code);
      expect(concepts.length, task.code).toBeGreaterThanOrEqual(1);
    }
  });

  it("does not embed PMI ECO copyright markers in ontology labels", () => {
    const blob = JSON.stringify(ECO_PROXY_TASKS).toLowerCase();
    expect(blob).not.toContain("pmbok");
    expect(blob).not.toContain("grandes lignes du contenu");
    expect(blob).not.toContain("©2025 project management institute");
  });
});

describe("PMP Mastery Engine Phase B — exam bank ECO tags", () => {
  it("tags all 200 exam items with ecoTaskCode + conceptSlug", () => {
    expect(PMP_EXAM_BANK).toHaveLength(200);
    for (const q of PMP_EXAM_BANK) {
      expect(q.ecoTaskCode, q.externalKey).toBeTruthy();
      expect(q.conceptSlug, q.externalKey).toBeTruthy();
      expect(ecoTaskCodes()).toContain(q.ecoTaskCode);
    }
  });

  it("does not alter stems, options, or correct answers when applying ECO tags", () => {
    expect(PMP_EXAM_BANK).toHaveLength(PMP_EXAM_BANK_STEMS.length);
    for (let i = 0; i < PMP_EXAM_BANK.length; i += 1) {
      const q = PMP_EXAM_BANK[i];
      const stem = PMP_EXAM_BANK_STEMS[i];
      expect(q.externalKey).toBe(stem.externalKey);
      expect(q.domain).toBe(stem.domain);
      expect(q.deliveryApproach).toBe(stem.deliveryApproach);
      expect(q.processArea).toBe(stem.processArea);
      expect(q.examDifficulty).toBe(stem.examDifficulty);
      expect(q.scenarioType).toBe(stem.scenarioType);
      expect(q.learningObjective).toBe(stem.learningObjective);
      expect(q.skills).toEqual(stem.skills);
      expect(q.type).toBe(stem.type);
      expect(q.promptFr).toBe(stem.promptFr);
      expect(q.promptEn).toBe(stem.promptEn);
      expect(q.scenarioFr).toBe(stem.scenarioFr);
      expect(q.scenarioEn).toBe(stem.scenarioEn);
      expect(q.explanationCorrectFr).toBe(stem.explanationCorrectFr);
      expect(q.explanationCorrectEn).toBe(stem.explanationCorrectEn);
      expect(q.options).toEqual(stem.options);
    }
  });

  it("produces an ECO coverage report with known gaps for Phase D", () => {
    const report = buildEcoCoverageReport(
      PMP_EXAM_BANK.map((q) => ({
        externalKey: q.externalKey,
        domain: q.domain,
        deliveryApproach: q.deliveryApproach,
        ecoTaskCode: q.ecoTaskCode!,
        ecoTaskCodesSecondary: q.ecoTaskCodesSecondary,
        conceptSlug: q.conceptSlug,
      }))
    );
    expect(report.taggedQuestions).toBe(200);
    expect(report.missingTaskCodes.length).toBeGreaterThan(0);
    expect(report.missingTaskCodes).toEqual(
      expect.arrayContaining([
        "PE-01",
        "PE-07",
        "PR-06",
        "PR-09",
        "PR-10",
        "BE-01",
        "BE-04",
        "BE-06",
      ])
    );
    expect(report.missingTaskCodes).not.toContain("PR-05");
    expect(report.missingTaskCodes).not.toContain("PR-04");
    // Risk/Change tagged BE while bank domain still PROCESS → mismatches expected
    expect(report.domainMismatchCount).toBeGreaterThan(0);
  });
});

describe("PMP Mastery Engine Phase B — mastery helpers", () => {
  it("maps learning objectives to cognitive bands", () => {
    expect(learningObjectiveToCognitive("IDENTIFY")).toBe("KNOWLEDGE");
    expect(learningObjectiveToCognitive("DECIDE")).toBe("JUDGMENT");
  });

  it("weights difficulty in accuracy and derives mastery level", () => {
    const pct = computeWeightedAccuracy([
      { correct: true, difficulty: "HARD" },
      { correct: false, difficulty: "EASY" },
    ]);
    expect(pct).toBeGreaterThan(50);
    expect(masteryLevelFromWeightedAccuracy(85)).toBe("MASTERED");
    expect(masteryLevelFromWeightedAccuracy(50)).toBe("WEAK");
  });

  it("assesses confidence calibration", () => {
    expect(assessCalibration(false, 5)).toBe("OVERCONFIDENT");
    expect(assessCalibration(true, 1)).toBe("UNDERCONFIDENT");
    expect(assessCalibration(true, 4)).toBe("CALIBRATED");
    expect(assessCalibration(true)).toBe("UNKNOWN");
  });

  it("builds item-level retention schedule hooks", () => {
    const now = new Date("2026-08-26T12:00:00Z");
    const state = buildItemRetentionState(
      {
        questionExternalKey: "pmp-exam-001",
        ecoTaskCode: "PE-04",
        conceptSlug: "stakeholder-engagement",
        masteryLevel: "WEAK",
        lastReviewedAt: now,
      },
      now
    );
    expect(state.intervalDays).toBe(1);
    expect(state.nextReviewAt.getTime()).toBeGreaterThan(now.getTime());
  });
});
