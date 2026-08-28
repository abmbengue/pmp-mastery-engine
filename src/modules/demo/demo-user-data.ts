import type { PrismaClient } from "@/generated/prisma/client";
import { findLessonBySlug } from "@/data/repositories/lesson-repository";
import {
  completeLesson,
  startLesson,
  updateConceptMastery,
} from "@/modules/learning-engine/progress-service";
import { recordQuizAttempt } from "@/modules/assessment-engine/scoring-service";
import { processQuizMasteryForAttempts } from "@/modules/mastery-engine/mastery-runtime-service";
import {
  answerExamQuestion,
  createExamSession,
  ensureExamTemplates,
  submitExamSession,
} from "@/modules/assessment-engine/exam-service";

type SeedContext = {
  prisma: PrismaClient;
  userId: string;
};

async function completeLessonWithQuiz(
  ctx: SeedContext,
  academySlug: string,
  courseSlug: string,
  moduleSlug: string,
  lessonSlug: string,
  timeSpentSec: number
) {
  const lesson = await findLessonBySlug(
    academySlug,
    courseSlug,
    moduleSlug,
    lessonSlug
  );
  if (!lesson) return;

  await startLesson(ctx.userId, lesson.id);
  await completeLesson(ctx.userId, lesson.id, timeSpentSec);

  const quizItem = lesson.learningItems.find((item) => item.type === "QUIZ");
  const question = quizItem?.questions[0];
  if (!question) return;

  const correctOption = question.answerOptions.find((option) => option.isCorrect);
  if (!correctOption) return;

  const { attempt } = await recordQuizAttempt(
    ctx.userId,
    question.id,
    [correctOption.id],
    quizItem.id
  );
  await processQuizMasteryForAttempts(ctx.userId, [attempt.id]);
}

async function startLessonOnly(
  ctx: SeedContext,
  academySlug: string,
  courseSlug: string,
  moduleSlug: string,
  lessonSlug: string
) {
  const lesson = await findLessonBySlug(
    academySlug,
    courseSlug,
    moduleSlug,
    lessonSlug
  );
  if (!lesson) return;
  await startLesson(ctx.userId, lesson.id);
}

async function seedConceptMastery(ctx: SeedContext) {
  const skills = await ctx.prisma.skill.findMany({
    where: {
      slug: {
        in: [
          "pf-income",
          "pf-budgeting",
          "pf-debt",
          "pmp-people",
          "pmp-process",
          "cf-valuation",
        ],
      },
    },
    select: { id: true, slug: true },
  });

  const levelBySlug: Record<string, "WEAK" | "LEARNING" | "MASTERED"> = {
    "pf-income": "MASTERED",
    "pf-budgeting": "LEARNING",
    "pf-debt": "WEAK",
    "pmp-people": "LEARNING",
    "pmp-process": "MASTERED",
    "cf-valuation": "WEAK",
  };

  for (const skill of skills) {
    const level = levelBySlug[skill.slug];
    if (level) {
      await updateConceptMastery(ctx.userId, skill.id, level);
    }
  }
}

async function seedPmpExamPractice(ctx: SeedContext) {
  await ensureExamTemplates();
  const session = await createExamSession(ctx.userId, "quick-practice");
  const view = await ctx.prisma.examSession.findUnique({
    where: { id: session.id },
    include: {
      questions: {
        include: {
          question: {
            include: { answerOptions: true },
          },
        },
        orderBy: { sortOrder: "asc" },
      },
    },
  });
  if (!view) return;

  for (const row of view.questions) {
    const option = row.question.answerOptions[0];
    if (!option) continue;
    await answerExamQuestion(
      ctx.userId,
      session.id,
      row.id,
      [option.id],
      row.sortOrder
    );
  }

  await submitExamSession(ctx.userId, session.id, "en");
}

/**
 * Seeds rich pedagogical data for the demo account using the same services as production.
 */
export async function seedDemoUserLearningData(
  prisma: PrismaClient,
  userId: string
) {
  const ctx: SeedContext = { prisma, userId };

  await completeLessonWithQuiz(
    ctx,
    "personal-finance",
    "essentials",
    "foundations",
    "understanding-income",
    420
  );
  await completeLessonWithQuiz(
    ctx,
    "personal-finance",
    "essentials",
    "foundations",
    "building-a-budget",
    360
  );
  await completeLessonWithQuiz(
    ctx,
    "personal-finance",
    "essentials",
    "foundations",
    "emergency-fund",
    300
  );
  await startLessonOnly(
    ctx,
    "personal-finance",
    "essentials",
    "debt",
    "debt-repayment-strategies"
  );

  await completeLessonWithQuiz(
    ctx,
    "pmp-project-management",
    "pmp-foundations",
    "people",
    "stakeholders-basics",
    480
  );
  await startLessonOnly(
    ctx,
    "pmp-project-management",
    "pmp-foundations",
    "process",
    "project-initiation"
  );

  await completeLessonWithQuiz(
    ctx,
    "corporate-finance",
    "cf-essentials",
    "cf-foundations",
    "role-of-corporate-finance",
    390
  );

  await seedConceptMastery(ctx);

  await prisma.learningStreak.upsert({
    where: { userId },
    create: { userId, currentStreak: 5, longestStreak: 7 },
    update: { currentStreak: 5, longestStreak: 7 },
  });

  await seedPmpExamPractice(ctx);
}
