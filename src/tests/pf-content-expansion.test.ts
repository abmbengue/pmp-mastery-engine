import { describe, expect, it } from "vitest";
import { PF_LESSONS, PF_MODULES } from "../../prisma/seed/content/pf-lessons";
import { validateLessonCatalog } from "@/modules/content/content-validator";
import { SIMULATION_CATALOG } from "@/modules/simulation-engine/simulation-service";

describe("Personal Finance content expansion", () => {
  it("expands to a rich bilingual catalog across four modules", () => {
    expect(PF_LESSONS.length).toBeGreaterThanOrEqual(45);
    expect(PF_MODULES.map((m) => m.slug)).toEqual([
      "foundations",
      "debt",
      "saving-investing",
      "wealth-building",
    ]);
    for (const mod of PF_MODULES) {
      const count = PF_LESSONS.filter((l) => l.moduleSlug === mod.slug).length;
      expect(count).toBeGreaterThanOrEqual(10);
    }
  });

  it("covers required foundation / debt / investing / wealth concepts", () => {
    const slugs = new Set(PF_LESSONS.map((l) => l.slug));
    for (const slug of [
      "understanding-money",
      "understanding-income",
      "net-vs-gross-income",
      "fixed-vs-variable-expenses",
      "building-a-budget",
      "cash-flow-basics",
      "emergency-fund",
      "saving-rate",
      "opportunity-cost",
      "what-is-debt",
      "loan-amortization",
      "minimum-payments",
      "debt-snowball",
      "debt-avalanche",
      "refinancing-basics",
      "cost-of-borrowing",
      "funds-and-etfs",
      "volatility-basics",
      "dollar-cost-averaging",
      "investment-fees",
      "net-worth",
      "compound-interest",
      "real-vs-nominal-return",
      "financial-independence",
      "behavioral-finance-basics",
      "risk-management-pf",
    ]) {
      expect(slugs.has(slug)).toBe(true);
    }
  });

  it("keeps rich pedagogical structure FR/EN with decisions", () => {
    for (const l of PF_LESSONS) {
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
      expect(l.estimatedMinutes).toBeLessThanOrEqual(10);
      expect(l.exercisePromptFr.length).toBeGreaterThan(20);
      expect(l.question.options.some((o) => o.isCorrect)).toBe(true);
    }
  });

  it("adds situational multi-question quizzes on key lessons", () => {
    const totalQuestions = PF_LESSONS.reduce(
      (sum, l) => sum + 1 + (l.questions?.length ?? 0),
      0
    );
    expect(totalQuestions).toBeGreaterThanOrEqual(70);
    const multi = PF_LESSONS.filter((l) => (l.questions?.length ?? 0) >= 1);
    expect(multi.length).toBeGreaterThanOrEqual(10);
  });

  it("passes content validator", () => {
    expect(validateLessonCatalog(PF_LESSONS).ok).toBe(true);
  });

  it("links PF simulators to expanded lessons", () => {
    const pfSims = SIMULATION_CATALOG.filter((e) => e.academySlug === "personal-finance");
    expect(pfSims.map((e) => e.type).sort()).toEqual([
      "BUDGET",
      "COMPOUND_INTEREST",
      "DEBT_REPAYMENT",
    ]);
    for (const entry of pfSims) {
      expect(PF_LESSONS.some((l) => l.slug === entry.lessonSlug)).toBe(true);
    }
    expect(
      pfSims.find((e) => e.type === "DEBT_REPAYMENT")?.lessonSlug
    ).toBe("debt-repayment-strategies");
    expect(
      pfSims.find((e) => e.type === "COMPOUND_INTEREST")?.lessonSlug
    ).toBe("compound-interest");
    expect(pfSims.find((e) => e.type === "BUDGET")?.lessonSlug).toBe(
      "building-a-budget"
    );
  });

  it("references simulators pedagogically in linked lessons", () => {
    const budget = PF_LESSONS.find((l) => l.slug === "building-a-budget")!;
    const compound = PF_LESSONS.find((l) => l.slug === "compound-interest")!;
    const debt = PF_LESSONS.find((l) => l.slug === "debt-repayment-strategies")!;
    expect(budget.textBodyFr.toLowerCase()).toMatch(/simulateur|budget/);
    expect(compound.textBodyEn.toLowerCase()).toMatch(/simulator|compound/);
    expect(debt.textBodyFr.toLowerCase()).toMatch(/simulateur|remboursement|dette/);
  });
});
