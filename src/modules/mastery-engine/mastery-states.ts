/**
 * Mastery state taxonomy & transition helpers (Phase B — model only).
 */

import type { CognitiveLevel, MasteryState } from "./types";

export const MASTERY_STATE_ORDER: readonly MasteryState[] = [
  "UNKNOWN",
  "EXPOSED",
  "DEVELOPING",
  "FRAGILE",
  "FUNCTIONAL",
  "STRONG",
  "MASTERED",
];

/** MASTERED requires more than 3 correct answers — placeholder weights for Phase C */
export type MasteryEvidenceInput = {
  attempts: number;
  weightedCorrectRate: number;
  distinctQuestionCount: number;
  maxCognitiveAchieved: CognitiveLevel;
  daysSinceFirstExposure: number;
  recentIncorrectStreak: number;
  confidenceCalibrated: boolean;
};

const COGNITIVE_RANK: Record<CognitiveLevel, number> = {
  RECOGNITION: 1,
  UNDERSTANDING: 2,
  APPLICATION: 3,
  ANALYSIS: 4,
  JUDGMENT: 5,
  TRANSFER: 6,
};

export function deriveMasteryState(input: MasteryEvidenceInput): MasteryState {
  if (input.attempts === 0) return "UNKNOWN";
  if (input.attempts <= 1) return "EXPOSED";

  const rate = input.weightedCorrectRate;
  if (input.recentIncorrectStreak >= 2 && rate < 70) return "FRAGILE";
  if (rate < 45) return "DEVELOPING";
  if (rate < 60) return "FRAGILE";
  if (rate < 75) return "FUNCTIONAL";
  if (rate < 85) return "STRONG";

  const judgmentReady =
    COGNITIVE_RANK[input.maxCognitiveAchieved] >= COGNITIVE_RANK.JUDGMENT;
  const varietyOk = input.distinctQuestionCount >= 5;
  const retentionOk = input.daysSinceFirstExposure >= 7;
  const calibrated = input.confidenceCalibrated;

  if (judgmentReady && varietyOk && retentionOk && calibrated && rate >= 85) {
    return "MASTERED";
  }
  return "STRONG";
}

export function compareMasteryStates(a: MasteryState, b: MasteryState): number {
  return MASTERY_STATE_ORDER.indexOf(a) - MASTERY_STATE_ORDER.indexOf(b);
}
