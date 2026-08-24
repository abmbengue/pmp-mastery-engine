import { describe, expect, it } from "vitest";
import { CF_LESSONS } from "../../prisma/seed/content/cf-lessons";
import { validateLessonCatalog } from "@/modules/content/content-validator";

const UPGRADED_SLUGS = [
  "operating-cash-flow",
  "dcf-enterprise-value",
  "role-of-corporate-finance",
  "balance-sheet",
  "cash-flow-statement",
  "revenue-basics",
  "ebit-basics",
  "net-income",
  "capex-and-depreciation",
  "accounts-receivable",
  "accounts-payable",
  "cash-conversion-cycle",
  "cost-of-debt",
  "dilution-basics",
  "enterprise-value",
  "equity-value",
  "ev-equity-bridge",
  "trading-multiples",
  "ev-ebitda",
  "free-cash-flow",
  "wacc-basics",
  "terminal-value",
  "valuation-ranges-and-limits",
  "capital-budgeting-basics",
  "irr-basics",
  "payback-period",
  "purchase-price",
  "sources-uses",
  "roe-and-roa",
  "economic-profit-basics",
  "working-capital-optimization",
  "fcf-conversion",
  "deleveraging-basics",
] as const;

describe("Corporate Finance content quality pass", () => {
  it("keeps 64 lessons with validator pass", () => {
    expect(CF_LESSONS.length).toBe(64);
    expect(validateLessonCatalog(CF_LESSONS).ok).toBe(true);
  });

  it("applies quality upgrades to 33 targeted lessons", () => {
    for (const slug of UPGRADED_SLUGS) {
      expect(CF_LESSONS.some((l) => l.slug === slug)).toBe(true);
    }
  });

  it("upgraded lessons use situational questions and multi-question quizzes", () => {
    for (const slug of UPGRADED_SLUGS) {
      const lesson = CF_LESSONS.find((l) => l.slug === slug)!;
      expect(lesson.textBodyFr.length).toBeGreaterThan(900);
      expect(lesson.textBodyEn.length).toBeGreaterThan(900);
      expect(1 + (lesson.questions?.length ?? 0)).toBeGreaterThanOrEqual(2);
      const prompts = lesson.question.promptFr + lesson.question.promptEn;
      expect(prompts.toLowerCase()).toMatch(
        /situation|entreprise|company|fcfa|€|\$|md |would you|feriez|quelle option|most appropriate|roic|wacc|ebitda|npv|irr|acquisition|cash|dette|debt/
      );
      expect(lesson.question.promptFr).not.toMatch(
        /^Qu'est-ce|^Définir|^Que signifie|^What is|^Define|^What does/i
      );
    }
  });

  it("valuation chain lessons reference simulators where expected", () => {
    const trading = CF_LESSONS.find((l) => l.slug === "trading-multiples")!;
    const dcf = CF_LESSONS.find((l) => l.slug === "dcf-enterprise-value")!;
    const multiplesDcf = CF_LESSONS.find((l) => l.slug === "multiples-and-dcf-basics")!;
    expect(trading.textBodyFr.toLowerCase()).toMatch(/simulateur|multiple/);
    expect(dcf.textBodyFr.toLowerCase()).toMatch(/simulateur|dcf/);
    expect(dcf.textBodyEn.toLowerCase()).toMatch(/simulator|dcf/);
    expect(multiplesDcf.textBodyFr.toLowerCase()).toMatch(/simulateur|multiples|dcf/);
  });

  it("raises total CF question count after quality pass", () => {
    const totalQuestions = CF_LESSONS.reduce(
      (sum, l) => sum + 1 + (l.questions?.length ?? 0),
      0
    );
    expect(totalQuestions).toBeGreaterThanOrEqual(120);
  });

  it("preserves module coverage after upgrades", () => {
    for (const mod of [
      "cf-foundations",
      "financing-capital-structure",
      "valuation",
      "investment-ma",
      "advanced-cf",
    ]) {
      expect(CF_LESSONS.filter((l) => l.moduleSlug === mod).length).toBeGreaterThanOrEqual(10);
    }
  });
});
