/**
 * Confidence calibration model (Phase B — architecture only).
 */

import type { ConfidenceLevel } from "./types";

export type ConfidenceCalibration =
  | "OVERCONFIDENT"
  | "UNDERCONFIDENT"
  | "CALIBRATED"
  | "UNKNOWN";

export function numericToConfidence(n: 1 | 2 | 3 | 4 | 5): ConfidenceLevel {
  if (n <= 1) return "VERY_LOW";
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

/** Maps API/UI input (1–5 or canonical level) to ConfidenceLevel; null when absent. */
export function parseConfidenceInput(
  value: number | string | null | undefined
): ConfidenceLevel | null {
  if (value == null) return null;
  if (typeof value === "number") {
    if (!Number.isInteger(value) || value < 1 || value > 5) return null;
    return numericToConfidence(value as 1 | 2 | 3 | 4 | 5);
  }
  if (typeof value === "string" && isConfidenceLevel(value)) return value;
  return null;
}
