import { z } from "zod";

export const simulationTypeSchema = z.enum([
  "COMPOUND_INTEREST",
  "BUDGET",
  "DEBT_REPAYMENT",
  "VALUATION_MULTIPLES",
  "DCF_BASICS",
]);

export type SimulationType = z.infer<typeof simulationTypeSchema>;

export const simulationScenarioIdSchema = z.enum(["BASE", "UPSIDE", "DOWNSIDE", "CUSTOM"]);
export type SimulationScenarioId = z.infer<typeof simulationScenarioIdSchema>;

export type SimulationScenario<TInputs> = {
  id: SimulationScenarioId;
  labelKey: string;
  inputs: TInputs;
};

export type SimulationMeta = {
  type: SimulationType;
  scenarioId: SimulationScenarioId;
  steps?: Array<{ labelFr: string; labelEn: string; value: number; unit?: string }>;
  interpretationFr?: string;
  interpretationEn?: string;
};

export type SimulationResult<TOutputs extends Record<string, unknown>> = {
  outputs: TOutputs;
  meta: SimulationMeta;
};

/** Round money to 2 decimals using banker's-friendly half-up via cents */
export function roundMoney(value: number): number {
  if (!Number.isFinite(value)) return 0;
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

export function roundRate(value: number, digits = 4): number {
  if (!Number.isFinite(value)) return 0;
  const f = 10 ** digits;
  return Math.round((value + Number.EPSILON) * f) / f;
}

export function formatMoney(value: number, locale: "fr" | "en"): string {
  return new Intl.NumberFormat(locale === "fr" ? "fr-FR" : "en-US", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(roundMoney(value));
}

export function formatPercent(value: number, locale: "fr" | "en", digits = 1): string {
  return new Intl.NumberFormat(locale === "fr" ? "fr-FR" : "en-US", {
    style: "percent",
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}
