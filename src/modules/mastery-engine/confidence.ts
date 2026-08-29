/**
 * Confidence calibration model (Phase B foundation + Phase C1 capture).
 */

import type { ConfidenceLevel } from "./types";

export type ConfidenceCalibration =
  | "OVERCONFIDENT"
  | "UNDERCONFIDENT"
  | "CALIBRATED"
  | "UNKNOWN";

/** UI / API numeric confidence scale (1–5). */
export const CONFIDENCE_NUMERIC_LEVELS = [1, 2, 3, 4, 5] as const;
export type ConfidenceNumeric = (typeof CONFIDENCE_NUMERIC_LEVELS)[number];

export function isValidConfidenceNumeric(
  value: unknown
): value is ConfidenceNumeric {
  return (
    typeof value === "number" &&
    !Number.isNaN(value) &&
    Number.isInteger(value) &&
    value >= 1 &&
    value <= 5
  );
}

/**
 * Client-side TEST gate: every question must have an explicit confidence 1–5.
 */
export function isTestPhaseConfidenceComplete(
  questionIds: readonly string[],
  confidenceByQuestionId: Readonly<Record<string, number | undefined>>
): boolean {
  return questionIds.every((id) =>
    isValidConfidenceNumeric(confidenceByQuestionId[id])
  );
}

export function numericToConfidence(n: 1 | 2 | 3 | 4 | 5): ConfidenceLevel {
  if (n === 1) return "VERY_LOW";
  if (n === 2) return "LOW";
  if (n === 3) return "MEDIUM";
  if (n === 4) return "HIGH";
  return "VERY_HIGH";
}

export function confidenceToNumeric(level: ConfidenceLevel): number {
  switch (level) {
    case "VERY_LOW":
      return 1;
    case "LOW":
      return 2;
    case "MEDIUM":
      return 3;
    case "HIGH":
      return 4;
    case "VERY_HIGH":
      return 5;
    default:
      return 3;
  }
}

export function assessConfidenceCalibration(
  correct: boolean,
  confidence?: ConfidenceLevel | null
): ConfidenceCalibration {
  if (!confidence) return "UNKNOWN";
  const n = confidenceToNumeric(confidence);
  if (correct && n <= 2) return "UNDERCONFIDENT";
  if (!correct && n >= 4) return "OVERCONFIDENT";
  return "CALIBRATED";
}

export function inferWeaknessFromCalibration(
  calibration: ConfidenceCalibration
): "misconception" | "knowledge-gap" | "fragile-knowledge" | "none" {
  if (calibration === "OVERCONFIDENT") return "misconception";
  if (calibration === "UNDERCONFIDENT") return "fragile-knowledge";
  if (calibration === "UNKNOWN") return "none";
  return "none";
}

const CONFIDENCE_LEVELS: readonly ConfidenceLevel[] = [
  "VERY_LOW",
  "LOW",
  "MEDIUM",
  "HIGH",
  "VERY_HIGH",
];

export function isConfidenceLevel(value: string): value is ConfidenceLevel {
  return (CONFIDENCE_LEVELS as readonly string[]).includes(value);
}

/**
 * Maps API/UI input (1–5 or canonical level) to ConfidenceLevel.
 * Returns null when absent (legacy-compatible) or when invalid.
 */
export function parseConfidenceInput(
  value: number | string | null | undefined
): ConfidenceLevel | null {
  if (value == null) return null;
  if (typeof value === "number") {
    if (!isValidConfidenceNumeric(value)) return null;
    return numericToConfidence(value);
  }
  if (typeof value === "string" && isConfidenceLevel(value)) return value;
  return null;
}
