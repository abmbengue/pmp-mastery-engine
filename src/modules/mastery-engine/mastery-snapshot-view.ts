/**
 * Serializable skill mastery snapshot (Phase C — display-only 7-state view).
 * Not persisted to DB; ConceptMastery remains 3-tier canonical.
 */

import type { ConfidenceLevel, MasteryState } from "./types";

export type SkillMasterySnapshotView = {
  skillId: string;
  masteryState: MasteryState;
  attempts: number;
  correct: number;
  incorrect: number;
  recentPerformance: number;
  historicalPerformance: number;
  confidence: ConfidenceLevel | null;
};
