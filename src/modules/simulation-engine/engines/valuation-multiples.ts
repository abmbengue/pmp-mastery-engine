import { z } from "zod";
import { roundMoney, roundRate, type SimulationResult } from "@/modules/simulation-engine/types";

export const valuationMultiplesInputSchema = z.object({
  revenue: z.number().min(0).max(1_000_000_000_000),
  ebitda: z.number().min(0).max(1_000_000_000_000),
  ebit: z.number().min(0).max(1_000_000_000_000),
  netDebt: z.number().min(-1_000_000_000_000).max(1_000_000_000_000),
  evEbitdaMultiple: z.number().min(0).max(50),
});

export type ValuationMultiplesInput = z.infer<typeof valuationMultiplesInputSchema>;

export type ValuationMultiplesOutput = {
  enterpriseValue: number;
  equityValue: number;
  impliedEvRevenue: number | null;
  impliedEvEbit: number | null;
};

export function calculateMultipleValuation(
  raw: ValuationMultiplesInput
): SimulationResult<ValuationMultiplesOutput> {
  const input = valuationMultiplesInputSchema.parse(raw);
  const enterpriseValue = roundMoney(input.ebitda * input.evEbitdaMultiple);
  const equityValue = roundMoney(enterpriseValue - input.netDebt);
  const impliedEvRevenue =
    input.revenue === 0 ? null : roundRate(enterpriseValue / input.revenue, 4);
  const impliedEvEbit =
    input.ebit === 0 ? null : roundRate(enterpriseValue / input.ebit, 4);

  return {
    outputs: {
      enterpriseValue,
      equityValue,
      impliedEvRevenue,
      impliedEvEbit,
    },
    meta: {
      type: "VALUATION_MULTIPLES",
      scenarioId: "CUSTOM",
      steps: [
        {
          labelFr: "EV = EBITDA × multiple",
          labelEn: "EV = EBITDA × multiple",
          value: enterpriseValue,
        },
        {
          labelFr: "Equity Value = EV − dette nette",
          labelEn: "Equity Value = EV − net debt",
          value: equityValue,
        },
      ],
      interpretationFr:
        "Outil pédagogique : un multiple plus élevé augmente l'EV, mais ne remplace pas une analyse complète.",
      interpretationEn:
        "Educational tool: a higher multiple raises EV, but does not replace a full analysis.",
    },
  };
}

export const MULTIPLES_SCENARIOS: Record<
  "BASE" | "UPSIDE" | "DOWNSIDE",
  ValuationMultiplesInput
> = {
  BASE: { revenue: 100, ebitda: 20, ebit: 15, netDebt: 30, evEbitdaMultiple: 8 },
  UPSIDE: { revenue: 100, ebitda: 22, ebit: 16, netDebt: 25, evEbitdaMultiple: 10 },
  DOWNSIDE: { revenue: 100, ebitda: 18, ebit: 12, netDebt: 40, evEbitdaMultiple: 6 },
};
