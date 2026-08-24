import { z } from "zod";

/** Text block content stored in LearningItem.payload */
export const textPayloadSchema = z.object({
  bodyFr: z.string(),
  bodyEn: z.string(),
});

/** Video placeholder — real hosting deferred to a later phase */
export const videoPayloadSchema = z.object({
  url: z.string().url().nullable(),
  durationSec: z.number().int().nonnegative().nullable(),
  titleFr: z.string(),
  titleEn: z.string(),
  language: z.enum(["fr", "en", "both"]),
  thumbnailUrl: z.string().url().nullable(),
  descriptionFr: z.string(),
  descriptionEn: z.string(),
  isPlaceholder: z.boolean().default(true),
});

export const exercisePayloadSchema = z.object({
  promptFr: z.string(),
  promptEn: z.string(),
  hintFr: z.string().optional(),
  hintEn: z.string().optional(),
});

export const flashcardPayloadSchema = z.object({
  frontFr: z.string(),
  frontEn: z.string(),
  backFr: z.string(),
  backEn: z.string(),
});

export const quizPayloadSchema = z.object({
  instructionsFr: z.string().optional(),
  instructionsEn: z.string().optional(),
});

export const learningItemPayloadSchemas = {
  TEXT: textPayloadSchema,
  VIDEO: videoPayloadSchema,
  EXERCISE: exercisePayloadSchema,
  QUIZ: quizPayloadSchema,
  FLASHCARD: flashcardPayloadSchema,
} as const;

export type TextPayload = z.infer<typeof textPayloadSchema>;
export type VideoPayload = z.infer<typeof videoPayloadSchema>;
export type ExercisePayload = z.infer<typeof exercisePayloadSchema>;
export type FlashcardPayload = z.infer<typeof flashcardPayloadSchema>;
export type QuizPayload = z.infer<typeof quizPayloadSchema>;

export type LearningItemType = keyof typeof learningItemPayloadSchemas;

export function validateLearningItemPayload<T extends LearningItemType>(
  type: T,
  payload: unknown
) {
  return learningItemPayloadSchemas[type].parse(payload);
}
