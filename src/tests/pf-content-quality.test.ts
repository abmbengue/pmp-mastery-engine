import { describe, expect, it } from "vitest";
import { PF_LESSONS } from "../../prisma/seed/content/pf-lessons";
import { validateLessonCatalog } from "@/modules/content/content-validator";

const UPGRADED_SLUGS = [
  "saving-rate",
  "saving-habits",
  "fixed-vs-variable-expenses",
  "cash-flow-basics",
  "opportunity-cost",
  "inflation-basics",
  "understanding-interest",
  "minimum-payments",
  "debt-snowball",
  "debt-avalanche",
  "why-save",
  "introduction-to-investing",
  "stocks-basics",
  "bonds-basics",
  "funds-and-etfs",
  "investment-horizon",
  "liquidity-basics",
  "real-estate-basics",
  "retirement-basics",
  "financial-independence",
  "portfolio-basics",
  "wealth-habits",
] as const;

describe("Personal Finance content quality pass", () => {
  it("keeps 53 lessons with validator pass", () => {
    expect(PF_LESSONS.length).toBe(53);
    expect(validateLessonCatalog(PF_LESSONS).ok).toBe(true);
  });

  it("applies quality upgrades to 22 targeted lessons", () => {
    for (const slug of UPGRADED_SLUGS) {
      expect(PF_LESSONS.some((l) => l.slug === slug)).toBe(true);
    }
  });

  it("upgraded lessons use situational questions and multi-question quizzes", () => {
    for (const slug of UPGRADED_SLUGS) {
      const lesson = PF_LESSONS.find((l) => l.slug === slug)!;
      expect(lesson.textBodyFr.length).toBeGreaterThan(850);
      expect(lesson.textBodyEn.length).toBeGreaterThan(850);
      expect(1 + (lesson.questions?.length ?? 0)).toBeGreaterThanOrEqual(2);
      const prompts = lesson.question.promptFr + lesson.question.promptEn;
      expect(prompts.toLowerCase()).toMatch(
        /situation|ménage|household|fcfa|€|month|mois|would you|feriez|quelle option|most appropriate|revenu net/
      );
    }
  });

  it("stocks-basics and real-estate-basics avoid pure definition prompts", () => {
    for (const slug of ["stocks-basics", "real-estate-basics"] as const) {
      const lesson = PF_LESSONS.find((l) => l.slug === slug)!;
      expect(lesson.question.promptFr).not.toMatch(/^Qu'est-ce|^Définir|^What is|^Define/i);
      expect(lesson.question.promptEn).not.toMatch(/^What is|^Define/i);
    }
  });

  it("simulator-linked lessons reference simulators pedagogically", () => {
    const budget = PF_LESSONS.find((l) => l.slug === "building-a-budget")!;
    const compound = PF_LESSONS.find((l) => l.slug === "compound-interest")!;
    const debt = PF_LESSONS.find((l) => l.slug === "debt-repayment-strategies")!;
    expect(budget.textBodyFr.toLowerCase()).toMatch(/simulateur|budget/);
    expect(compound.textBodyEn.toLowerCase()).toMatch(/simulator|compound/);
    expect(debt.textBodyFr.toLowerCase()).toMatch(/simulateur|remboursement|dette/);

    const cashFlow = PF_LESSONS.find((l) => l.slug === "cash-flow-basics")!;
    expect(cashFlow.textBodyFr.toLowerCase()).toMatch(/simulateur|budget/);
  });

  it("raises total PF question count after quality pass", () => {
    const totalQuestions = PF_LESSONS.reduce(
      (sum, l) => sum + 1 + (l.questions?.length ?? 0),
      0
    );
    expect(totalQuestions).toBeGreaterThanOrEqual(110);
  });
});
