/**
 * Minimal content shape for validation (compatible with seed CompactLesson).
 */
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
  question: {
    type: "SINGLE_CHOICE" | "TRUE_FALSE" | "MULTIPLE_CHOICE";
    promptFr: string;
    promptEn: string;
    explanationCorrectFr: string;
    explanationCorrectEn: string;
    difficulty: number;
    options: Array<{
      labelFr: string;
      labelEn: string;
      isCorrect: boolean;
      explanationWrongFr?: string;
      explanationWrongEn?: string;
    }>;
  };
  questions?: Array<{
    type: "SINGLE_CHOICE" | "TRUE_FALSE" | "MULTIPLE_CHOICE";
    promptFr: string;
    promptEn: string;
    explanationCorrectFr: string;
    explanationCorrectEn: string;
    difficulty: number;
    options: Array<{
      labelFr: string;
      labelEn: string;
      isCorrect: boolean;
      explanationWrongFr?: string;
      explanationWrongEn?: string;
    }>;
  }>;
};
