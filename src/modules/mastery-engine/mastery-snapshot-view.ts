/**
 * Serializable skill mastery snapshot (Phase C — display-only 7-state view).
 * Not persisted to DB; ConceptMastery remains 3-tier canonical.
 */

import type { ConfidenceLevel, MasteryState } from "./types";

/** Display-only retention projection — mirrors RetentionRecord without write-path coupling */
export type SkillMasteryRetentionView = {
  lastSeen: Date | null;
  lastCorrect: Date | null;
  lastIncorrect: Date | null;
  reviewCount: number;
  retentionScore: number;
  nextReviewAt: Date | null;
};

export type SkillMasterySnapshotView = {
  skillId: string;
  masteryState: MasteryState;
  attempts: number;
  correct: number;
  incorrect: number;
  recentPerformance: number;
  historicalPerformance: number;
  confidence: ConfidenceLevel | null;
  /** Display-only retention projection — never persisted to ConceptMastery */
  retention: SkillMasteryRetentionView;
};
