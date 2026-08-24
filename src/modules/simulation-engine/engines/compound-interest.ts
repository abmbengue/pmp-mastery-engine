import { z } from "zod";
import { roundMoney, roundRate, type SimulationResult } from "@/modules/simulation-engine/types";

/**
 * Compound interest with monthly compounding and optional monthly contributions.
 *
 * monthlyRate = annualRate / 12
 * For each month: balance = balance * (1 + monthlyRate) + contribution
 *
 * When rate = 0: final = initial + contribution * months
 */
export const compoundInterestInputSchema = z.object({
  initialAmount: z.number().min(0).max(10_000_000),
  monthlyContribution: z.number().min(0).max(1_000_000),
  annualRatePercent: z.number().min(0).max(30),
  years: z.number().min(0).max(60),
  contributionFrequency: z.enum(["monthly", "none"]).default("monthly"),
});

export type CompoundInterestInput = z.infer<typeof compoundInterestInputSchema>;

export type CompoundInterestOutput = {
  totalContributions: number;
  growth: number;
  finalValue: number;
  growthPercentage: number;
  months: number;
};

export function calculateCompoundInterest(
  raw: CompoundInterestInput
): SimulationResult<CompoundInterestOutput> {
  const input = compoundInterestInputSchema.parse(raw);
  const months = Math.round(input.years * 12);
  const monthlyRate = input.annualRatePercent / 100 / 12;
  const contribution =
    input.contributionFrequency === "none" ? 0 : input.monthlyContribution;

  let balance = input.initialAmount;
  for (let m = 0; m < months; m += 1) {
    balance = balance * (1 + monthlyRate) + contribution;
  }

  const totalContributions = roundMoney(input.initialAmount + contribution * months);
  const finalValue = roundMoney(balance);
  const growth = roundMoney(finalValue - totalContributions);
  const growthPercentage =
    totalContributions === 0 ? 0 : roundRate(growth / totalContributions, 4);

  return {
    outputs: {
      totalContributions,
      growth,
      finalValue,
      growthPercentage,
      months,
    },
    meta: {
      type: "COMPOUND_INTEREST",
      scenarioId: "CUSTOM",
      steps: [
        { labelFr: "Cotisations totales", labelEn: "Total contributions", value: totalContributions },
        { labelFr: "Croissance", labelEn: "Growth", value: growth },
        { labelFr: "Valeur finale", labelEn: "Final value", value: finalValue },
      ],
      interpretationFr:
        growthPercentage >= 0.4
          ? "La capitalisation pèse fortement : le temps et le taux amplifient la croissance."
          : "Augmentez le taux, la durée ou les cotisations pour observer plus de croissance.",
      interpretationEn:
        growthPercentage >= 0.4
          ? "Compounding matters a lot here: time and rate amplify growth."
          : "Raise the rate, duration, or contributions to observe more growth.",
    },
  };
}

export const COMPOUND_SCENARIOS: Record<
  "BASE" | "UPSIDE" | "DOWNSIDE",
  CompoundInterestInput
> = {
  BASE: {
    initialAmount: 5000,
    monthlyContribution: 200,
    annualRatePercent: 6,
    years: 10,
    contributionFrequency: "monthly",
  },
  UPSIDE: {
    initialAmount: 5000,
    monthlyContribution: 300,
    annualRatePercent: 8,
    years: 10,
    contributionFrequency: "monthly",
  },
  DOWNSIDE: {
    initialAmount: 5000,
    monthlyContribution: 100,
    annualRatePercent: 3,
    years: 10,
    contributionFrequency: "monthly",
  },
};
