/**
 * Phase C — pure helpers to build display-only skill mastery snapshots.
 */

import type { AttemptMasteryInput } from "./weakness-model";
import { buildSkillMasterySnapshot } from "./weakness-model";
import type { SkillMasterySnapshotView } from "./mastery-snapshot-view";

export function toSkillMasterySnapshotView(
  skillId: string,
  attempts: AttemptMasteryInput[]
): SkillMasterySnapshotView | null {
  if (!skillId || attempts.length === 0) return null;
  const snap = buildSkillMasterySnapshot({ skillId, attempts });
  return {
    skillId,
    masteryState: snap.masteryState,
    attempts: snap.attempts,
    correct: snap.correct,
    incorrect: snap.incorrect,
    recentPerformance: snap.recentPerformance,
    historicalPerformance: snap.historicalPerformance,
    confidence: snap.confidence,
    retention: snap.retention,
  };
}

export function buildSkillMasterySnapshotViews(
  skillIds: string[],
  attemptsBySkillId: Record<string, AttemptMasteryInput[]>
): SkillMasterySnapshotView[] {
  const views: SkillMasterySnapshotView[] = [];
  for (const skillId of skillIds) {
    const attempts = attemptsBySkillId[skillId] ?? [];
    const view = toSkillMasterySnapshotView(skillId, attempts);
    if (view) views.push(view);
  }
  return views;
}
