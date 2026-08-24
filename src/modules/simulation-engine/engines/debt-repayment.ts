import { z } from "zod";
import { roundMoney, type SimulationResult } from "@/modules/simulation-engine/types";

export const debtRepaymentInputSchema = z
  .object({
    debtAmount: z.number().positive().max(10_000_000),
    annualRatePercent: z.number().min(0).max(40),
    monthlyPayment: z.number().positive().max(1_000_000),
  })
  .superRefine((data, ctx) => {
    const monthlyRate = data.annualRatePercent / 100 / 12;
    const interestFirstMonth = data.debtAmount * monthlyRate;
    if (data.monthlyPayment <= interestFirstMonth && monthlyRate > 0) {
      ctx.addIssue({
        code: "custom",
        message: "monthly_payment_too_low",
        path: ["monthlyPayment"],
      });
    }
  });

export type DebtRepaymentInput = z.infer<typeof debtRepaymentInputSchema>;

export type DebtRepaymentOutput = {
  monthsToRepay: number;
  totalInterest: number;
  totalPaid: number;
  payable: boolean;
};

const MAX_MONTHS = 600;

export function calculateDebtRepayment(
  raw: DebtRepaymentInput
): SimulationResult<DebtRepaymentOutput> {
  const input = debtRepaymentInputSchema.parse(raw);
  const monthlyRate = input.annualRatePercent / 100 / 12;

  let balance = input.debtAmount;
  let months = 0;
  let totalPaid = 0;

  while (balance > 0.01 && months < MAX_MONTHS) {
    const interest = balance * monthlyRate;
    const payment = Math.min(input.monthlyPayment, balance + interest);
    balance = balance + interest - payment;
    totalPaid += payment;
    months += 1;
    if (payment <= interest && monthlyRate > 0) {
      return {
        outputs: {
          monthsToRepay: 0,
          totalInterest: 0,
          totalPaid: 0,
          payable: false,
        },
        meta: {
          type: "DEBT_REPAYMENT",
          scenarioId: "CUSTOM",
          interpretationFr:
            "Le paiement mensuel ne couvre pas les intérêts. Augmentez le paiement.",
          interpretationEn:
            "The monthly payment does not cover interest. Increase the payment.",
        },
      };
    }
  }

  const totalInterest = roundMoney(totalPaid - input.debtAmount);
  totalPaid = roundMoney(totalPaid);

  return {
    outputs: {
      monthsToRepay: months,
      totalInterest,
      totalPaid,
      payable: balance <= 0.01,
    },
    meta: {
      type: "DEBT_REPAYMENT",
      scenarioId: "CUSTOM",
      interpretationFr: `Remboursement estimé en ${months} mois, avec ${totalInterest.toFixed(0)} € d'intérêts.`,
      interpretationEn: `Estimated payoff in ${months} months, with ${totalInterest.toFixed(0)} in interest.`,
    },
  };
}

export type DebtComparison = {
  scenarioA: SimulationResult<DebtRepaymentOutput>;
  scenarioB: SimulationResult<DebtRepaymentOutput>;
  interestSaved: number;
  monthsSaved: number;
};

export function compareDebtScenarios(
  base: DebtRepaymentInput,
  higherPayment: number
): DebtComparison {
  const scenarioA = calculateDebtRepayment(base);
  const scenarioB = calculateDebtRepayment({
    ...base,
    monthlyPayment: higherPayment,
  });
  return {
    scenarioA,
    scenarioB,
    interestSaved: roundMoney(
      scenarioA.outputs.totalInterest - scenarioB.outputs.totalInterest
    ),
    monthsSaved: scenarioA.outputs.monthsToRepay - scenarioB.outputs.monthsToRepay,
  };
}

export const DEBT_SCENARIOS: Record<"BASE" | "UPSIDE" | "DOWNSIDE", DebtRepaymentInput> = {
  BASE: { debtAmount: 10000, annualRatePercent: 12, monthlyPayment: 250 },
  UPSIDE: { debtAmount: 10000, annualRatePercent: 12, monthlyPayment: 400 },
  DOWNSIDE: { debtAmount: 10000, annualRatePercent: 15, monthlyPayment: 220 },
};
