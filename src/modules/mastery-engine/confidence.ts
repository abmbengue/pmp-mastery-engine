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
