import { z } from "zod";

/** Text block content stored in LearningItem.payload */
export const textPayloadSchema = z.object({
  bodyFr: z.string(),
  bodyEn: z.string(),
});

const contentDifficultySchema = z.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED"]);

/**
 * VIDEO / Short Learning payload.
 * Real hosting (YouTube, Vimeo, self-host) is deferred.
 * `url` and `videoUrl` are aliases — prefer `videoUrl` for new content.
 * `durationSec` and `durationSeconds` are aliases — prefer `durationSeconds`.
 */
export const videoPayloadSchema = z
  .object({
    url: z.string().url().nullable().optional(),
    videoUrl: z.string().url().nullable().optional(),
    durationSec: z.number().int().nonnegative().nullable().optional(),
    durationSeconds: z.number().int().nonnegative().nullable().optional(),
    titleFr: z.string(),
    titleEn: z.string(),
    language: z.enum(["fr", "en", "both"]),
    thumbnailUrl: z.string().url().nullable(),
    descriptionFr: z.string(),
    descriptionEn: z.string(),
    isPlaceholder: z.boolean().default(true),
    /** Short Learning (~3 min max) flag */
    isShort: z.boolean().optional().default(false),
    topic: z.string().optional(),
    difficulty: contentDifficultySchema.optional(),
    academySlug: z.string().optional(),
    relatedSkillSlug: z.string().optional(),
  })
  .transform((data) => {
    const videoUrl = data.videoUrl ?? data.url ?? null;
    const durationSeconds = data.durationSeconds ?? data.durationSec ?? null;
    return {
      ...data,
      url: videoUrl,
      videoUrl,
      durationSec: durationSeconds,
      durationSeconds,
      isShort: data.isShort ?? false,
      isPlaceholder: data.isPlaceholder ?? true,
    };
  })
  .refine(
    (data) => data.isShort !== true || (data.durationSeconds === null || data.durationSeconds <= 180),
    { message: "Short Learning videos must be at most ~3 minutes (180 seconds)" }
  );

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

/** Future SIMULATION items — architecture only */
export const simulationPayloadSchema = z.object({
  titleFr: z.string(),
  titleEn: z.string(),
  descriptionFr: z.string().optional(),
  descriptionEn: z.string().optional(),
  isPlaceholder: z.boolean().default(true),
  simulatorKey: z.string().optional(),
});

/** Future ASSESSMENT / mock exam items — architecture only */
export const assessmentPayloadSchema = z.object({
  titleFr: z.string(),
  titleEn: z.string(),
  descriptionFr: z.string().optional(),
  descriptionEn: z.string().optional(),
  isPlaceholder: z.boolean().default(true),
  questionCount: z.number().int().positive().optional(),
  timeLimitMinutes: z.number().int().positive().optional(),
});

export const learningItemPayloadSchemas = {
  TEXT: textPayloadSchema,
  VIDEO: videoPayloadSchema,
  EXERCISE: exercisePayloadSchema,
  QUIZ: quizPayloadSchema,
  FLASHCARD: flashcardPayloadSchema,
  SIMULATION: simulationPayloadSchema,
  ASSESSMENT: assessmentPayloadSchema,
} as const;

export type TextPayload = z.infer<typeof textPayloadSchema>;
export type VideoPayload = z.infer<typeof videoPayloadSchema>;
export type ExercisePayload = z.infer<typeof exercisePayloadSchema>;
export type FlashcardPayload = z.infer<typeof flashcardPayloadSchema>;
export type QuizPayload = z.infer<typeof quizPayloadSchema>;
export type SimulationPayload = z.infer<typeof simulationPayloadSchema>;
export type AssessmentPayload = z.infer<typeof assessmentPayloadSchema>;

export type LearningItemType = keyof typeof learningItemPayloadSchemas;

export function validateLearningItemPayload<T extends LearningItemType>(
  type: T,
  payload: unknown
) {
  return learningItemPayloadSchemas[type].parse(payload);
}

export function isShortVideoPayload(payload: VideoPayload): boolean {
  return payload.isShort === true;
}
