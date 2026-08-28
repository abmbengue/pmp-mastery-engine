/**
 * Lesson phase types. These are the 5 micro-learning phases.
 * Durations are stored per-lesson in DB (learnMinutes etc.), never hardcoded.
 */
export type LessonPhase = "LEARN" | "PRACTICE" | "TEST" | "REVIEW" | "MASTER";

export const LESSON_PHASES: LessonPhase[] = [
  "LEARN",
  "PRACTICE",
  "TEST",
  "REVIEW",
  "MASTER",
];

export function getNextPhase(current: LessonPhase): LessonPhase | null {
  const idx = LESSON_PHASES.indexOf(current);
  return idx < LESSON_PHASES.length - 1 ? LESSON_PHASES[idx + 1] : null;
}

export function getPrevPhase(current: LessonPhase): LessonPhase | null {
  const idx = LESSON_PHASES.indexOf(current);
  return idx > 0 ? LESSON_PHASES[idx - 1] : null;
}

export function isLastPhase(phase: LessonPhase): boolean {
  return phase === "MASTER";
}

export function phaseIndex(phase: LessonPhase): number {
  return LESSON_PHASES.indexOf(phase);
}

/** Validates persisted phase metadata (task progress + lesson resume). */
export function parseLessonPhase(value: unknown): LessonPhase | null {
  if (
    value === "LEARN" ||
    value === "PRACTICE" ||
    value === "TEST" ||
    value === "REVIEW" ||
    value === "MASTER"
  ) {
    return value;
  }
  return null;
}
