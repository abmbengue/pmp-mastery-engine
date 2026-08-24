/**
 * Pure computation utilities for mastery and scoring — no Prisma dependency.
 * Can be imported from both server and client components safely.
 *
 * Mastery thresholds (Phase 2):
 *   MASTERED : score >= 80
 *   LEARNING : score >= 60
 *   WEAK     : score < 60
 */
export type MasteryLevel = "MASTERED" | "LEARNING" | "WEAK";

export function computeMasteryLevelFromScore(scorePercent: number): MasteryLevel {
  if (scorePercent >= 80) return "MASTERED";
  if (scorePercent >= 60) return "LEARNING";
  return "WEAK";
}

export function computeQuizScoreFromResults(
  results: { isCorrect: boolean }[]
): number {
  if (results.length === 0) return 0;
  const correct = results.filter((r) => r.isCorrect).length;
  return Math.round((correct / results.length) * 100);
}
