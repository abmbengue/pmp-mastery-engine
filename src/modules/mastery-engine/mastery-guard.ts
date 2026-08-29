import { PrismaClient, MasteryLevel } from "@prisma/client";

/**
 * MASTERY LEVEL GUARD — 3-STATE PERSISTENCE
 *
 * ConceptMastery.level must ONLY be:
 * - WEAK
 * - LEARNING
 * - MASTERED
 *
 * The 7-state mastery model (Unfamiliar, Novice, Beginner, Intermediate,
 * Competent, Proficient, Expert) is DISPLAY-ONLY and must NEVER be persisted.
 *
 * This guard verifies the invariant.
 */

const VALID_LEVELS: MasteryLevel[] = ["WEAK", "LEARNING", "MASTERED"];

export interface MasteryLevelAudit {
  isValid: boolean;
  totalMasteries: number;
  byLevel: Record<MasteryLevel, number>;
  issues: string[];
  timestamp: Date;
}

/**
 * Audit mastery level distribution.
 */
export async function auditMasteryLevels(
  prisma: PrismaClient
): Promise<MasteryLevelAudit> {
  const issues: string[] = [];
  const byLevel: Record<MasteryLevel, number> = {
    WEAK: 0,
    LEARNING: 0,
    MASTERED: 0,
  };

  const masteries = await prisma.conceptMastery.findMany();

  for (const m of masteries) {
    if (VALID_LEVELS.includes(m.level)) {
      byLevel[m.level]++;
    } else {
      issues.push(`Invalid mastery level: ${m.level}`);
    }
  }

  const isValid = issues.length === 0;

  return {
    isValid,
    totalMasteries: masteries.length,
    byLevel,
    issues,
    timestamp: new Date(),
  };
}

/**
 * Assert mastery level integrity. Throws if violations found.
 */
export async function assertMasteryLevelIntegrity(
  prisma: PrismaClient
): Promise<void> {
  const audit = await auditMasteryLevels(prisma);
  if (!audit.isValid) {
    throw new Error(
      `Mastery level integrity failed:\n${audit.issues.join("\n")}`
    );
  }
}
