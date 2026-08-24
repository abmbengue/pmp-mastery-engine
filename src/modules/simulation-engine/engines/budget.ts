import { z } from "zod";
import { roundMoney, roundRate, type SimulationResult } from "@/modules/simulation-engine/types";

export const budgetInputSchema = z.object({
  monthlyIncome: z.number().min(0).max(1_000_000),
  housing: z.number().min(0).max(1_000_000),
  food: z.number().min(0).max(1_000_000),
  transport: z.number().min(0).max(1_000_000),
  utilities: z.number().min(0).max(1_000_000),
  debt: z.number().min(0).max(1_000_000),
  otherExpenses: z.number().min(0).max(1_000_000),
  savingsTarget: z.number().min(0).max(1_000_000),
});

export type BudgetInput = z.infer<typeof budgetInputSchema>;

export type BudgetOutput = {
  totalExpenses: number;
  remainingCash: number;
  savingsRate: number;
  expenseRatio: number;
  isSurplus: boolean;
  gapToTarget: number;
};

export function calculateBudget(raw: BudgetInput): SimulationResult<BudgetOutput> {
  const input = budgetInputSchema.parse(raw);
  const totalExpenses = roundMoney(
    input.housing +
      input.food +
      input.transport +
      input.utilities +
      input.debt +
      input.otherExpenses
  );
  const remainingCash = roundMoney(input.monthlyIncome - totalExpenses);
  const savingsRate =
    input.monthlyIncome === 0 ? 0 : roundRate(Math.max(0, remainingCash) / input.monthlyIncome, 4);
  const expenseRatio =
    input.monthlyIncome === 0 ? 0 : roundRate(totalExpenses / input.monthlyIncome, 4);
  const gapToTarget = roundMoney(input.savingsTarget - Math.max(0, remainingCash));

  let interpretationFr: string;
  let interpretationEn: string;
  if (remainingCash < 0) {
    interpretationFr = `Déficit de ${Math.abs(remainingCash).toFixed(0)} €. Réduisez les dépenses ou augmentez les revenus.`;
    interpretationEn = `Deficit of ${Math.abs(remainingCash).toFixed(0)}. Reduce expenses or increase income.`;
  } else if (savingsRate >= 0.2) {
    interpretationFr = `Taux d'épargne de ${(savingsRate * 100).toFixed(0)} % — solide. Observez l'effet d'un objectif encore plus élevé.`;
    interpretationEn = `Savings rate of ${(savingsRate * 100).toFixed(0)}% — solid. Try raising the target further.`;
  } else {
    interpretationFr = `Votre taux d'épargne est de ${(savingsRate * 100).toFixed(0)} %. Essayez d'atteindre 20 % et observez la différence.`;
    interpretationEn = `Your savings rate is ${(savingsRate * 100).toFixed(0)}%. Try increasing savings to 20% and observe the difference.`;
  }

  return {
    outputs: {
      totalExpenses,
      remainingCash,
      savingsRate,
      expenseRatio,
      isSurplus: remainingCash >= 0,
      gapToTarget,
    },
    meta: {
      type: "BUDGET",
      scenarioId: "CUSTOM",
      interpretationFr,
      interpretationEn,
    },
  };
}

export const BUDGET_SCENARIOS: Record<"BASE" | "UPSIDE" | "DOWNSIDE", BudgetInput> = {
  BASE: {
    monthlyIncome: 3000,
    housing: 1000,
    food: 400,
    transport: 200,
    utilities: 150,
    debt: 200,
    otherExpenses: 350,
    savingsTarget: 450,
  },
  UPSIDE: {
    monthlyIncome: 3200,
    housing: 900,
    food: 350,
    transport: 150,
    utilities: 140,
    debt: 150,
    otherExpenses: 250,
    savingsTarget: 640,
  },
  DOWNSIDE: {
    monthlyIncome: 2800,
    housing: 1400,
    food: 500,
    transport: 300,
    utilities: 200,
    debt: 350,
    otherExpenses: 450,
    savingsTarget: 400,
  },
};
