import type { ContentDifficulty, PrismaClient } from "../../src/generated/prisma/client";

export async function upsertSkill(
  prisma: PrismaClient,
  data: {
    slug: string;
    titleFr: string;
    titleEn: string;
    descriptionFr?: string;
    descriptionEn?: string;
  }
) {
  return prisma.skill.upsert({
    where: { slug: data.slug },
    create: data,
    update: data,
  });
}

export async function linkLessonSkills(
  prisma: PrismaClient,
  lessonId: string,
  skillIds: string[]
) {
  for (const skillId of skillIds) {
    await prisma.lessonSkill.upsert({
      where: { lessonId_skillId: { lessonId, skillId } },
      create: { lessonId, skillId },
      update: {},
    });
  }
}

export async function createQuestionWithOptions(
  prisma: PrismaClient,
  data: {
    learningItemId: string;
    skillId: string;
    type: "SINGLE_CHOICE" | "MULTIPLE_CHOICE" | "TRUE_FALSE";
    promptFr: string;
    promptEn: string;
    explanationCorrectFr: string;
    explanationCorrectEn: string;
    difficulty: number;
    category?: string;
    options: Array<{
      labelFr: string;
      labelEn: string;
      isCorrect: boolean;
      explanationWrongFr?: string;
      explanationWrongEn?: string;
    }>;
  }
) {
  return prisma.question.create({
    data: {
      learningItemId: data.learningItemId,
      skillId: data.skillId,
      type: data.type,
      promptFr: data.promptFr,
      promptEn: data.promptEn,
      explanationCorrectFr: data.explanationCorrectFr,
      explanationCorrectEn: data.explanationCorrectEn,
      difficulty: data.difficulty,
      category: data.category,
      answerOptions: {
        create: data.options.map((opt, i) => ({
          labelFr: opt.labelFr,
          labelEn: opt.labelEn,
          isCorrect: opt.isCorrect,
          explanationWrongFr: opt.explanationWrongFr,
          explanationWrongEn: opt.explanationWrongEn,
          sortOrder: i,
        })),
      },
    },
    include: { answerOptions: true },
  });
}

export interface LessonSeedConfig {
  slug: string;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  sortOrder: number;
  estimatedMinutes: number;
  difficulty?: ContentDifficulty;
  skillSlugs?: string[];
  learnMinutes: number;
  practiceMinutes: number;
  testMinutes: number;
  reviewMinutes: number;
  masterMinutes: number;
  textBodyFr: string;
  textBodyEn: string;
  videoTitleFr: string;
  videoTitleEn: string;
  /** Mark lesson VIDEO as Short Learning (~3 min) */
  isShort?: boolean;
  shortTopic?: string;
  shortDurationSeconds?: number;
  shortScriptFr?: string;
  shortScriptEn?: string;
  keyTakeawayFr?: string;
  keyTakeawayEn?: string;
  /** Override VIDEO description (Short script) */
  videoDescriptionFr?: string;
  videoDescriptionEn?: string;
  flashcardFrontFr: string;
  flashcardFrontEn: string;
  flashcardBackFr: string;
  flashcardBackEn: string;
  exercisePromptFr: string;
  exercisePromptEn: string;
  /** Optional learning objective for VIDEO / Short metadata */
  learningObjective?: "IDENTIFY" | "APPLY" | "ANALYZE" | "DECIDE";
  question: {
    type: "SINGLE_CHOICE" | "MULTIPLE_CHOICE" | "TRUE_FALSE";
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
  /** Optional extra quiz items (same QUIZ LearningItem) — content expansion */
  questions?: Array<{
    type: "SINGLE_CHOICE" | "MULTIPLE_CHOICE" | "TRUE_FALSE";
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
}

export async function seedLessonWithContent(
  prisma: PrismaClient,
  moduleId: string,
  skillId: string,
  config: LessonSeedConfig,
  options?: {
    academySlug?: string;
    extraSkillIds?: string[];
    relatedSkillSlug?: string;
  }
) {
  const difficulty = config.difficulty ?? "BEGINNER";

  const lesson = await prisma.lesson.create({
    data: {
      moduleId,
      slug: config.slug,
      titleFr: config.titleFr,
      titleEn: config.titleEn,
      descriptionFr: config.descriptionFr,
      descriptionEn: config.descriptionEn,
      sortOrder: config.sortOrder,
      estimatedMinutes: config.estimatedMinutes,
      difficulty,
      learnMinutes: config.learnMinutes,
      practiceMinutes: config.practiceMinutes,
      testMinutes: config.testMinutes,
      reviewMinutes: config.reviewMinutes,
      masterMinutes: config.masterMinutes,
    },
  });

  const allSkillIds = Array.from(
    new Set([skillId, ...(options?.extraSkillIds ?? [])])
  );
  await linkLessonSkills(prisma, lesson.id, allSkillIds);

  await prisma.learningItem.create({
    data: {
      lessonId: lesson.id,
      type: "TEXT",
      sortOrder: 0,
      difficulty: 1,
      payload: {
        bodyFr: config.textBodyFr,
        bodyEn: config.textBodyEn,
      },
    },
  });

  const durationSeconds = config.isShort
    ? (config.shortDurationSeconds ?? 150)
    : null;

  await prisma.learningItem.create({
    data: {
      lessonId: lesson.id,
      type: "VIDEO",
      sortOrder: 1,
      difficulty: 1,
      payload: {
        url: null,
        videoUrl: null,
        durationSec: durationSeconds,
        durationSeconds,
        titleFr: config.videoTitleFr,
        titleEn: config.videoTitleEn,
        language: "both",
        thumbnailUrl: null,
        descriptionFr: config.videoDescriptionFr ?? config.descriptionFr,
        descriptionEn: config.videoDescriptionEn ?? config.descriptionEn,
        isPlaceholder: true,
        isShort: config.isShort ?? false,
        keyTakeawayFr: config.keyTakeawayFr,
        keyTakeawayEn: config.keyTakeawayEn,
        topic: config.shortTopic,
        difficulty,
        academySlug: options?.academySlug,
        relatedSkillSlug: options?.relatedSkillSlug,
        relatedLessonSlug: config.slug,
        learningObjective:
          config.learningObjective ?? (config.isShort ? "IDENTIFY" : undefined),
        provider: "placeholder",
      },
    },
  });

  await prisma.learningItem.create({
    data: {
      lessonId: lesson.id,
      type: "EXERCISE",
      sortOrder: 2,
      difficulty: 2,
      payload: {
        promptFr: config.exercisePromptFr,
        promptEn: config.exercisePromptEn,
      },
    },
  });

  const quizItem = await prisma.learningItem.create({
    data: {
      lessonId: lesson.id,
      type: "QUIZ",
      sortOrder: 3,
      difficulty: config.question.difficulty,
      payload: {
        instructionsFr:
          (config.questions?.length ?? 0) > 0
            ? "Répondez aux questions suivantes."
            : "Répondez à la question suivante.",
        instructionsEn:
          (config.questions?.length ?? 0) > 0
            ? "Answer the following questions."
            : "Answer the following question.",
      },
    },
  });

  const allQuestions = [config.question, ...(config.questions ?? [])];
  for (const q of allQuestions) {
    await createQuestionWithOptions(prisma, {
      learningItemId: quizItem.id,
      skillId,
      type: q.type,
      promptFr: q.promptFr,
      promptEn: q.promptEn,
      explanationCorrectFr: q.explanationCorrectFr,
      explanationCorrectEn: q.explanationCorrectEn,
      difficulty: q.difficulty,
      options: q.options,
    });
  }
  await prisma.learningItem.create({
    data: {
      lessonId: lesson.id,
      type: "FLASHCARD",
      sortOrder: 4,
      difficulty: 1,
      payload: {
        frontFr: config.flashcardFrontFr,
        frontEn: config.flashcardFrontEn,
        backFr: config.flashcardBackFr,
        backEn: config.flashcardBackEn,
      },
    },
  });

  return lesson;
}
