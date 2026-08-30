/**
 * Phase D — documents legacy ConceptMastery write paths identified in Iter 1/4.
 * Not refactored in Iter 2/4; excluded from future Phase D batch expansion path.
 */

export type LegacyMasteryWriter = {
  modulePath: string;
  function: string;
  role: "exam-completion" | "simulation-demo" | "demo-seed";
  usesCanonicalPipeline: boolean;
  phaseDRecommendation:
    | "exclude-from-phase-d"
    | "document-only"
    | "future-unify";
};

/**
 * Legacy writers that bypass processQuizMasteryForAttempts.
 * Lesson TEST flow remains the canonical Phase C/D mastery write path.
 */
export const LEGACY_CONCEPT_MASTERY_WRITERS: readonly LegacyMasteryWriter[] = [
  {
    modulePath: "src/modules/assessment-engine/exam-service.ts",
    function: "updateConceptMastery",
    role: "exam-completion",
    usesCanonicalPipeline: false,
    phaseDRecommendation: "exclude-from-phase-d",
  },
  {
    modulePath: "src/app/api/simulation/complete/route.ts",
    function: "updateConceptMastery",
    role: "simulation-demo",
    usesCanonicalPipeline: false,
    phaseDRecommendation: "exclude-from-phase-d",
  },
  {
    modulePath: "src/modules/demo/demo-user-data.ts",
    function: "updateConceptMastery",
    role: "demo-seed",
    usesCanonicalPipeline: false,
    phaseDRecommendation: "document-only",
  },
] as const;

export const CANONICAL_LESSON_MASTERY_WRITE_PATH =
  "recordQuizAttempt → processQuizMasteryForAttempts → updateConceptMastery";

export function isLegacyMasteryWriterPath(modulePath: string): boolean {
  return LEGACY_CONCEPT_MASTERY_WRITERS.some((w) => w.modulePath === modulePath);
}
