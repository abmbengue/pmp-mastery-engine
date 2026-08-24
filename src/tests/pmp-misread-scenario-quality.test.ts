import { describe, expect, it } from "vitest";
import { PMP_EXAM_BANK } from "../../prisma/seed/pmp-exam-bank-data";
import { MISREAD_SCENARIO_UPGRADES } from "../../prisma/seed/pmp-exam-bank-misread-upgrades";
import { classifyError } from "@/modules/assessment-engine/analytics-engine";
import { mapErrorToCorrectiveLearning } from "@/modules/learning-engine/corrective-learning";

const UPGRADED_KEYS = Object.keys(MISREAD_SCENARIO_UPGRADES);

describe("PMP MISREAD_SCENARIO question quality upgrades", () => {
  it("keeps 200 questions and applies 18 targeted upgrades", () => {
    expect(PMP_EXAM_BANK.length).toBe(200);
    expect(UPGRADED_KEYS.length).toBe(18);
    for (const key of UPGRADED_KEYS) {
      const q = PMP_EXAM_BANK.find((x) => x.externalKey === key)!;
      expect(q.learningObjective).toBe("IDENTIFY");
      expect(["FIRST_ACTION", "BEST_ACTION"]).toContain(q.scenarioType);
    }
  });

  it("classifies upgraded questions as MISREAD_SCENARIO via existing engine", () => {
    for (const key of UPGRADED_KEYS) {
      const q = PMP_EXAM_BANK.find((x) => x.externalKey === key)!;
      expect(
        classifyError({
          scenarioType: q.scenarioType,
          domain: q.domain,
          deliveryApproach: q.deliveryApproach,
          skillSlugs: q.skills,
          learningObjective: q.learningObjective,
        })
      ).toBe("MISREAD_SCENARIO");
    }
  });

  it("provides scenario-comprehension prompts and four plausible options", () => {
    for (const key of UPGRADED_KEYS) {
      const q = PMP_EXAM_BANK.find((x) => x.externalKey === key)!;
      expect(q.scenarioFr.length).toBeGreaterThan(80);
      expect(q.scenarioEn.length).toBeGreaterThan(80);
      expect(q.options.length).toBe(4);
      expect(q.options.filter((o) => !o.isCorrect).length).toBe(3);
      expect(q.options.filter((o) => o.isCorrect).length).toBe(1);
      for (const w of q.options.filter((o) => !o.isCorrect)) {
        expect(w.explanationWrongFr?.length).toBeGreaterThan(10);
        expect(w.explanationWrongEn?.length).toBeGreaterThan(10);
      }
    }
  });

  it("covers PEOPLE, PROCESS, and BUSINESS domains in upgrades", () => {
    const domains = new Set(
      UPGRADED_KEYS.map((k) => PMP_EXAM_BANK.find((q) => q.externalKey === k)!.domain)
    );
    expect(domains.has("PEOPLE")).toBe(true);
    expect(domains.has("PROCESS")).toBe(true);
    expect(domains.has("BUSINESS_ENVIRONMENT")).toBe(true);
  });

  it("supports corrective learning for MISREAD_SCENARIO", () => {
    const hint = mapErrorToCorrectiveLearning("MISREAD_SCENARIO");
    expect(hint.preferredLessonSlugs.length).toBeGreaterThan(0);
    expect(hint.summaryEn).toContain("scenario");
  });

  it("increases MISREAD_SCENARIO bank coverage materially", () => {
    let misread = 0;
    for (const q of PMP_EXAM_BANK) {
      if (
        classifyError({
          scenarioType: q.scenarioType,
          domain: q.domain,
          deliveryApproach: q.deliveryApproach,
          skillSlugs: q.skills,
          learningObjective: q.learningObjective,
        }) === "MISREAD_SCENARIO"
      ) {
        misread++;
      }
    }
    expect(misread).toBeGreaterThanOrEqual(15);
  });
});
