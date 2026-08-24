import {
  calculateCompoundInterest,
  COMPOUND_SCENARIOS,
  type CompoundInterestInput,
} from "@/modules/simulation-engine/engines/compound-interest";
import {
  calculateBudget,
  BUDGET_SCENARIOS,
  type BudgetInput,
} from "@/modules/simulation-engine/engines/budget";
import {
  calculateDebtRepayment,
  compareDebtScenarios,
  DEBT_SCENARIOS,
  type DebtRepaymentInput,
} from "@/modules/simulation-engine/engines/debt-repayment";
import {
  calculateMultipleValuation,
  MULTIPLES_SCENARIOS,
  type ValuationMultiplesInput,
} from "@/modules/simulation-engine/engines/valuation-multiples";
import {
  calculateDCF,
  dcfSensitivityByWacc,
  DCF_SCENARIOS,
  type DcfInput,
} from "@/modules/simulation-engine/engines/dcf";
import type { SimulationScenarioId, SimulationType } from "@/modules/simulation-engine/types";

export type SimulationCatalogEntry = {
  type: SimulationType;
  academySlug: string;
  courseSlug: string;
  moduleSlug: string;
  lessonSlug: string;
  skillSlug: string;
  estimatedMinutes: number;
  difficulty: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
};

export const SIMULATION_CATALOG: SimulationCatalogEntry[] = [
  {
    type: "COMPOUND_INTEREST",
    academySlug: "personal-finance",
    courseSlug: "essentials",
    moduleSlug: "wealth-building",
    lessonSlug: "compound-interest",
    skillSlug: "pf-compounding",
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
  },
  {
    type: "BUDGET",
    academySlug: "personal-finance",
    courseSlug: "essentials",
    moduleSlug: "foundations",
    lessonSlug: "building-a-budget",
    skillSlug: "pf-budgeting",
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
  },
  {
    type: "DEBT_REPAYMENT",
    academySlug: "personal-finance",
    courseSlug: "essentials",
    moduleSlug: "debt",
    lessonSlug: "debt-repayment-strategies",
    skillSlug: "pf-debt",
    estimatedMinutes: 8,
    difficulty: "INTERMEDIATE",
  },
  {
    type: "VALUATION_MULTIPLES",
    academySlug: "corporate-finance",
    courseSlug: "cf-essentials",
    moduleSlug: "valuation",
    lessonSlug: "multiples-and-dcf-basics",
    skillSlug: "cf-valuation",
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
  },
  {
    type: "DCF_BASICS",
    academySlug: "corporate-finance",
    courseSlug: "cf-essentials",
    moduleSlug: "valuation",
    lessonSlug: "multiples-and-dcf-basics",
    skillSlug: "cf-valuation",
    estimatedMinutes: 12,
    difficulty: "INTERMEDIATE",
  },
];

export function getSimulationCatalogEntry(type: SimulationType) {
  return SIMULATION_CATALOG.find((e) => e.type === type) ?? null;
}

export function getScenarioInputs(
  type: SimulationType,
  scenarioId: Exclude<SimulationScenarioId, "CUSTOM">
) {
  switch (type) {
    case "COMPOUND_INTEREST":
      return COMPOUND_SCENARIOS[scenarioId];
    case "BUDGET":
      return BUDGET_SCENARIOS[scenarioId];
    case "DEBT_REPAYMENT":
      return DEBT_SCENARIOS[scenarioId];
    case "VALUATION_MULTIPLES":
      return MULTIPLES_SCENARIOS[scenarioId];
    case "DCF_BASICS":
      return DCF_SCENARIOS[scenarioId];
  }
}

export function runCompoundInterest(inputs: CompoundInterestInput) {
  return calculateCompoundInterest(inputs);
}

export function runBudget(inputs: BudgetInput) {
  return calculateBudget(inputs);
}

export function runDebtRepayment(inputs: DebtRepaymentInput) {
  return calculateDebtRepayment(inputs);
}

export function runDebtComparison(base: DebtRepaymentInput, higherPayment: number) {
  return compareDebtScenarios(base, higherPayment);
}

export function runValuationMultiples(inputs: ValuationMultiplesInput) {
  return calculateMultipleValuation(inputs);
}

export function runDcf(inputs: DcfInput) {
  return calculateDCF(inputs);
}

export function compoundInterestSensitivity(
  base: CompoundInterestInput,
  rates: number[]
) {
  return rates.map((annualRatePercent) => ({
    annualRatePercent,
    finalValue: calculateCompoundInterest({ ...base, annualRatePercent }).outputs
      .finalValue,
  }));
}

export function dcfSensitivity(base: DcfInput, waccPercents: number[]) {
  return dcfSensitivityByWacc(base, waccPercents);
}

export {
  calculateCompoundInterest,
  calculateBudget,
  calculateDebtRepayment,
  calculateMultipleValuation,
  calculateDCF,
};
