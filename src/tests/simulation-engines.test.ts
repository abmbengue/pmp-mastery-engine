import { describe, it, expect } from "vitest";
import {
  calculateCompoundInterest,
  COMPOUND_SCENARIOS,
} from "@/modules/simulation-engine/engines/compound-interest";
import { calculateBudget, BUDGET_SCENARIOS } from "@/modules/simulation-engine/engines/budget";
import {
  calculateDebtRepayment,
  compareDebtScenarios,
  DEBT_SCENARIOS,
} from "@/modules/simulation-engine/engines/debt-repayment";
import {
  calculateMultipleValuation,
  MULTIPLES_SCENARIOS,
} from "@/modules/simulation-engine/engines/valuation-multiples";
import {
  calculateDCF,
  dcfSensitivityByWacc,
  DCF_SCENARIOS,
} from "@/modules/simulation-engine/engines/dcf";
import {
  compoundInterestSensitivity,
  getScenarioInputs,
} from "@/modules/simulation-engine/simulation-service";

describe("Compound Interest engine", () => {
  it("handles zero contribution", () => {
    const result = calculateCompoundInterest({
      initialAmount: 1000,
      monthlyContribution: 0,
      annualRatePercent: 12,
      years: 1,
      contributionFrequency: "monthly",
    });
    expect(result.outputs.totalContributions).toBe(1000);
    expect(result.outputs.finalValue).toBeGreaterThan(1000);
  });

  it("handles zero interest", () => {
    const result = calculateCompoundInterest({
      initialAmount: 1000,
      monthlyContribution: 100,
      annualRatePercent: 0,
      years: 1,
      contributionFrequency: "monthly",
    });
    expect(result.outputs.finalValue).toBe(2200);
    expect(result.outputs.growth).toBe(0);
  });

  it("computes a standard case", () => {
    const result = calculateCompoundInterest(COMPOUND_SCENARIOS.BASE);
    expect(result.outputs.finalValue).toBeGreaterThan(result.outputs.totalContributions);
    expect(result.outputs.growth).toBeGreaterThan(0);
  });

  it("grows more with a higher rate", () => {
    const low = calculateCompoundInterest({ ...COMPOUND_SCENARIOS.BASE, annualRatePercent: 4 });
    const high = calculateCompoundInterest({ ...COMPOUND_SCENARIOS.BASE, annualRatePercent: 8 });
    expect(high.outputs.finalValue).toBeGreaterThan(low.outputs.finalValue);
  });

  it("supports sensitivity table", () => {
    const rows = compoundInterestSensitivity(COMPOUND_SCENARIOS.BASE, [4, 6, 8]);
    expect(rows).toHaveLength(3);
    expect(rows[2].finalValue).toBeGreaterThan(rows[0].finalValue);
  });
});

describe("Budget engine", () => {
  it("detects surplus", () => {
    const result = calculateBudget(BUDGET_SCENARIOS.UPSIDE);
    expect(result.outputs.isSurplus).toBe(true);
    expect(result.outputs.remainingCash).toBeGreaterThan(0);
  });

  it("detects deficit", () => {
    const result = calculateBudget(BUDGET_SCENARIOS.DOWNSIDE);
    expect(result.outputs.isSurplus).toBe(false);
    expect(result.outputs.remainingCash).toBeLessThan(0);
  });

  it("handles zero savings when income equals expenses", () => {
    const result = calculateBudget({
      monthlyIncome: 1000,
      housing: 1000,
      food: 0,
      transport: 0,
      utilities: 0,
      debt: 0,
      otherExpenses: 0,
      savingsTarget: 100,
    });
    expect(result.outputs.savingsRate).toBe(0);
    expect(result.outputs.remainingCash).toBe(0);
  });
});

describe("Debt repayment engine", () => {
  it("computes a standard case", () => {
    const result = calculateDebtRepayment(DEBT_SCENARIOS.BASE);
    expect(result.outputs.payable).toBe(true);
    expect(result.outputs.monthsToRepay).toBeGreaterThan(0);
    expect(result.outputs.totalInterest).toBeGreaterThan(0);
  });

  it("saves interest with a higher payment", () => {
    const cmp = compareDebtScenarios(DEBT_SCENARIOS.BASE, 400);
    expect(cmp.interestSaved).toBeGreaterThan(0);
    expect(cmp.monthsSaved).toBeGreaterThan(0);
  });

  it("rejects invalid payment that does not cover interest", () => {
    expect(() =>
      calculateDebtRepayment({
        debtAmount: 10000,
        annualRatePercent: 24,
        monthlyPayment: 50,
      })
    ).toThrow();
  });
});

describe("Valuation multiples engine", () => {
  it("computes EV and Equity Value", () => {
    const result = calculateMultipleValuation(MULTIPLES_SCENARIOS.BASE);
    expect(result.outputs.enterpriseValue).toBe(160);
    expect(result.outputs.equityValue).toBe(130);
  });

  it("scales with different multiples", () => {
    const low = calculateMultipleValuation({ ...MULTIPLES_SCENARIOS.BASE, evEbitdaMultiple: 6 });
    const high = calculateMultipleValuation({ ...MULTIPLES_SCENARIOS.BASE, evEbitdaMultiple: 10 });
    expect(high.outputs.enterpriseValue).toBeGreaterThan(low.outputs.enterpriseValue);
  });
});

describe("DCF basics engine", () => {
  it("computes a standard case", () => {
    const result = calculateDCF(DCF_SCENARIOS.BASE);
    expect(result.outputs.projectedFcf).toHaveLength(5);
    expect(result.outputs.enterpriseValue).toBeGreaterThan(0);
    expect(result.outputs.pvOfTerminalValue).toBeGreaterThan(0);
  });

  it("supports WACC sensitivity", () => {
    const rows = dcfSensitivityByWacc(DCF_SCENARIOS.BASE, [8, 10, 12]);
    expect(rows[0].enterpriseValue).toBeGreaterThan(rows[2].enterpriseValue);
  });

  it("rejects WACC <= terminal growth", () => {
    expect(() =>
      calculateDCF({
        ...DCF_SCENARIOS.BASE,
        waccPercent: 2,
        terminalGrowthPercent: 2,
      })
    ).toThrow();
  });
});

describe("Scenario presets", () => {
  it("exposes base / upside / downside for each type", () => {
    for (const type of [
      "COMPOUND_INTEREST",
      "BUDGET",
      "DEBT_REPAYMENT",
      "VALUATION_MULTIPLES",
      "DCF_BASICS",
    ] as const) {
      expect(getScenarioInputs(type, "BASE")).toBeTruthy();
      expect(getScenarioInputs(type, "UPSIDE")).toBeTruthy();
      expect(getScenarioInputs(type, "DOWNSIDE")).toBeTruthy();
    }
  });
});
