import { z } from "zod";
import { roundMoney, type SimulationResult } from "@/modules/simulation-engine/types";

export const dcfInputSchema = z
  .object({
    year1Fcf: z.number().min(0).max(1_000_000_000_000),
    growthRatePercent: z.number().min(-50).max(50),
    waccPercent: z.number().min(0.1).max(40),
    terminalGrowthPercent: z.number().min(-5).max(10),
    forecastYears: z.number().int().min(1).max(15),
  })
  .superRefine((data, ctx) => {
    if (data.waccPercent <= data.terminalGrowthPercent) {
      ctx.addIssue({
        code: "custom",
        message: "wacc_must_exceed_terminal_growth",
        path: ["waccPercent"],
      });
    }
  });

export type DcfInput = z.infer<typeof dcfInputSchema>;

export type DcfOutput = {
  projectedFcf: number[];
  pvOfFcf: number;
  terminalValue: number;
  pvOfTerminalValue: number;
  enterpriseValue: number;
};

export function calculateDCF(raw: DcfInput): SimulationResult<DcfOutput> {
  const input = dcfInputSchema.parse(raw);
  const g = input.growthRatePercent / 100;
  const wacc = input.waccPercent / 100;
  const tg = input.terminalGrowthPercent / 100;

  const projectedFcf: number[] = [];
  let fcf = input.year1Fcf;
  for (let y = 1; y <= input.forecastYears; y += 1) {
    if (y > 1) fcf = fcf * (1 + g);
    projectedFcf.push(roundMoney(fcf));
  }

  let pvOfFcf = 0;
  for (let i = 0; i < projectedFcf.length; i += 1) {
    const year = i + 1;
    pvOfFcf += projectedFcf[i] / (1 + wacc) ** year;
  }
  pvOfFcf = roundMoney(pvOfFcf);

  const lastFcf = projectedFcf[projectedFcf.length - 1];
  const terminalValue = roundMoney((lastFcf * (1 + tg)) / (wacc - tg));
  const pvOfTerminalValue = roundMoney(
    terminalValue / (1 + wacc) ** input.forecastYears
  );
  const enterpriseValue = roundMoney(pvOfFcf + pvOfTerminalValue);

  return {
    outputs: {
      projectedFcf,
      pvOfFcf,
      terminalValue,
      pvOfTerminalValue,
      enterpriseValue,
    },
    meta: {
      type: "DCF_BASICS",
      scenarioId: "CUSTOM",
      steps: [
        { labelFr: "VA des FCF", labelEn: "PV of FCF", value: pvOfFcf },
        { labelFr: "Valeur terminale", labelEn: "Terminal value", value: terminalValue },
        {
          labelFr: "VA de la valeur terminale",
          labelEn: "PV of terminal value",
          value: pvOfTerminalValue,
        },
        { labelFr: "Enterprise Value", labelEn: "Enterprise Value", value: enterpriseValue },
      ],
      interpretationFr:
        "Simulateur pédagogique : un WACC plus élevé réduit la valeur actualisée. Ce n'est pas une valorisation professionnelle.",
      interpretationEn:
        "Educational simulator: a higher WACC lowers present value. This is not a professional valuation.",
    },
  };
}

export function dcfSensitivityByWacc(
  base: DcfInput,
  waccPercents: number[]
): Array<{ waccPercent: number; enterpriseValue: number }> {
  return waccPercents.map((waccPercent) => {
    const result = calculateDCF({ ...base, waccPercent });
    return { waccPercent, enterpriseValue: result.outputs.enterpriseValue };
  });
}

export const DCF_SCENARIOS: Record<"BASE" | "UPSIDE" | "DOWNSIDE", DcfInput> = {
  BASE: {
    year1Fcf: 10,
    growthRatePercent: 5,
    waccPercent: 10,
    terminalGrowthPercent: 2,
    forecastYears: 5,
  },
  UPSIDE: {
    year1Fcf: 12,
    growthRatePercent: 7,
    waccPercent: 9,
    terminalGrowthPercent: 2.5,
    forecastYears: 5,
  },
  DOWNSIDE: {
    year1Fcf: 8,
    growthRatePercent: 3,
    waccPercent: 12,
    terminalGrowthPercent: 1.5,
    forecastYears: 5,
  },
};
