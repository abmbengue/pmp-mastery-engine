import { describe, expect, it } from "vitest";
import { CF_LESSONS, CF_MODULES } from "../../prisma/seed/content/cf-lessons";
import { validateLessonCatalog } from "@/modules/content/content-validator";
import { SIMULATION_CATALOG } from "@/modules/simulation-engine/simulation-service";

describe("Corporate Finance content expansion", () => {
  it("expands to a rich bilingual catalog across five modules", () => {
    expect(CF_LESSONS.length).toBeGreaterThanOrEqual(50);
    expect(CF_MODULES.map((m) => m.slug)).toEqual([
      "cf-foundations",
      "financing-capital-structure",
      "valuation",
      "investment-ma",
      "advanced-cf",
    ]);
    for (const mod of CF_MODULES) {
      const count = CF_LESSONS.filter((l) => l.moduleSlug === mod.slug).length;
      expect(count).toBeGreaterThanOrEqual(10);
    }
  });

  it("covers required foundations / financing / valuation / investment / advanced concepts", () => {
    const slugs = new Set(CF_LESSONS.map((l) => l.slug));
    for (const slug of [
      "role-of-corporate-finance",
      "value-creation-basics",
      "income-statement",
      "balance-sheet",
      "cash-flow-statement",
      "ebitda-basics",
      "operating-cash-flow",
      "working-capital",
      "cash-conversion-cycle",
      "financial-ratios-basics",
      "capex-and-depreciation",
      "debt-vs-equity-financing",
      "capital-structure-basics",
      "cost-of-debt",
      "cost-of-equity",
      "leverage-and-financial-risk",
      "enterprise-value",
      "equity-value",
      "ev-equity-bridge",
      "trading-multiples",
      "ev-ebitda",
      "wacc-basics",
      "terminal-value",
      "dcf-enterprise-value",
      "multiples-and-dcf-basics",
      "npv-basics",
      "irr-basics",
      "accretion-dilution",
      "synergies-basics",
      "roic-basics",
      "scenario-analysis-cf",
    ]) {
      expect(slugs.has(slug)).toBe(true);
    }
  });

  it("keeps rich pedagogical structure FR/EN with decisions", () => {
    for (const l of CF_LESSONS) {
      expect(l.textBodyFr).toContain("Objectif");
      expect(l.textBodyEn).toContain("Objective");
      expect(l.textBodyFr).toContain("À retenir");
      expect(l.textBodyEn).toContain("Key takeaway");
      expect(l.textBodyFr).toContain("Décision");
      expect(l.textBodyEn).toContain("Decision");
      expect(l.textBodyFr).not.toEqual(l.textBodyEn);
      expect(l.textBodyFr.length).toBeGreaterThan(700);
      expect(l.textBodyEn.length).toBeGreaterThan(700);
      expect(l.estimatedMinutes).toBeGreaterThanOrEqual(3);
      expect(l.estimatedMinutes).toBeLessThanOrEqual(15);
      expect(l.exercisePromptFr.length).toBeGreaterThan(20);
      expect(l.question.options.some((o) => o.isCorrect)).toBe(true);
    }
  });

  it("adds situational multi-question quizzes on key lessons", () => {
    const totalQuestions = CF_LESSONS.reduce(
      (sum, l) => sum + 1 + (l.questions?.length ?? 0),
      0
    );
    expect(totalQuestions).toBeGreaterThanOrEqual(70);
    const multi = CF_LESSONS.filter((l) => (l.questions?.length ?? 0) >= 1);
    expect(multi.length).toBeGreaterThanOrEqual(10);
  });

  it("passes content validator", () => {
    expect(validateLessonCatalog(CF_LESSONS).ok).toBe(true);
  });

  it("links CF simulators to expanded lessons", () => {
    const cfSims = SIMULATION_CATALOG.filter((e) => e.academySlug === "corporate-finance");
    expect(cfSims.map((e) => e.type).sort()).toEqual(["DCF_BASICS", "VALUATION_MULTIPLES"]);
    for (const entry of cfSims) {
      expect(CF_LESSONS.some((l) => l.slug === entry.lessonSlug)).toBe(true);
    }
    expect(
      cfSims.find((e) => e.type === "VALUATION_MULTIPLES")?.lessonSlug
    ).toBe("multiples-and-dcf-basics");
    expect(cfSims.find((e) => e.type === "DCF_BASICS")?.lessonSlug).toBe(
      "multiples-and-dcf-basics"
    );
  });

  it("references simulators pedagogically in linked lessons", () => {
    const multiplesDcf = CF_LESSONS.find((l) => l.slug === "multiples-and-dcf-basics")!;
    const dcfSens = CF_LESSONS.find((l) => l.slug === "dcf-sensitivity-basics")!;
    expect(multiplesDcf.textBodyFr.toLowerCase()).toMatch(/simulateur|multiples|dcf/);
    expect(multiplesDcf.textBodyEn.toLowerCase()).toMatch(/simulator|multiples|dcf/);
    expect(dcfSens.textBodyFr.toLowerCase()).toMatch(/simulateur|sensibilit|wacc/);
    expect(dcfSens.textBodyEn.toLowerCase()).toMatch(/simulator|sensitiv|wacc/);
  });

  it("has no duplicate lesson titles within the catalog", () => {
    const titlesFr = CF_LESSONS.map((l) => l.titleFr);
    const titlesEn = CF_LESSONS.map((l) => l.titleEn);
    expect(new Set(titlesFr).size).toBe(titlesFr.length);
    expect(new Set(titlesEn).size).toBe(titlesEn.length);
  });
});
