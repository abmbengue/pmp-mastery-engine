import type { LessonSeedConfig } from "../helpers";

/** Shared compact lesson shape used by Phase 10 content catalogs */
export type CompactLesson = {
  slug: string;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  moduleSlug: string;
  sortOrder: number;
  estimatedMinutes: number;
  difficulty: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  skillSlug: string;
  learningObjective: "IDENTIFY" | "APPLY" | "ANALYZE" | "DECIDE";
  isShort?: boolean;
  shortTopic?: string;
  shortDurationSeconds?: number;
  /** Phase 12 pedagogical short script (placeholder media) */
  shortScriptFr?: string;
  shortScriptEn?: string;
  keyTakeawayFr?: string;
  keyTakeawayEn?: string;
  textBodyFr: string;
  textBodyEn: string;
  flashcardFrontFr: string;
  flashcardFrontEn: string;
  flashcardBackFr: string;
  flashcardBackEn: string;
  exercisePromptFr: string;
  exercisePromptEn: string;
  question: LessonSeedConfig["question"];
};

export function compactToLessonSeed(lesson: CompactLesson): LessonSeedConfig {
  const shortDescriptionFr = lesson.isShort
    ? [lesson.shortScriptFr, lesson.keyTakeawayFr ? `À retenir : ${lesson.keyTakeawayFr}` : null]
        .filter(Boolean)
        .join("\n\n") || lesson.descriptionFr
    : lesson.descriptionFr;
  const shortDescriptionEn = lesson.isShort
    ? [lesson.shortScriptEn, lesson.keyTakeawayEn ? `Key takeaway: ${lesson.keyTakeawayEn}` : null]
        .filter(Boolean)
        .join("\n\n") || lesson.descriptionEn
    : lesson.descriptionEn;

  return {
    slug: lesson.slug,
    titleFr: lesson.titleFr,
    titleEn: lesson.titleEn,
    descriptionFr: lesson.descriptionFr,
    descriptionEn: lesson.descriptionEn,
    sortOrder: lesson.sortOrder,
    estimatedMinutes: lesson.estimatedMinutes,
    difficulty: lesson.difficulty,
    learnMinutes: Math.min(3, Math.max(2, Math.floor(lesson.estimatedMinutes * 0.35))),
    practiceMinutes: Math.min(3, Math.max(2, Math.floor(lesson.estimatedMinutes * 0.25))),
    testMinutes: 2,
    reviewMinutes: 1,
    masterMinutes: 1,
    textBodyFr: lesson.textBodyFr,
    textBodyEn: lesson.textBodyEn,
    videoTitleFr: lesson.titleFr,
    videoTitleEn: lesson.titleEn,
    isShort: lesson.isShort,
    shortTopic: lesson.shortTopic ?? lesson.slug,
    shortDurationSeconds: lesson.shortDurationSeconds,
    shortScriptFr: lesson.shortScriptFr,
    shortScriptEn: lesson.shortScriptEn,
    keyTakeawayFr: lesson.keyTakeawayFr,
    keyTakeawayEn: lesson.keyTakeawayEn,
    videoDescriptionFr: shortDescriptionFr,
    videoDescriptionEn: shortDescriptionEn,
    flashcardFrontFr: lesson.flashcardFrontFr,
    flashcardFrontEn: lesson.flashcardFrontEn,
    flashcardBackFr: lesson.flashcardBackFr,
    flashcardBackEn: lesson.flashcardBackEn,
    exercisePromptFr: lesson.exercisePromptFr,
    exercisePromptEn: lesson.exercisePromptEn,
    question: lesson.question,
  };
}
