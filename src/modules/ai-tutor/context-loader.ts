import { z } from "zod";
import prisma from "@/data/prisma-client";
import type { AiTutorContext } from "@/modules/ai-tutor/ai-tutor-port";
import type { Locale } from "@/shared/types/locale";
import { pickLocalized } from "@/shared/types/locale";

export const aiTutorApiBodySchema = z.object({
  mode: z.enum(["HINT", "EXPLAIN", "TEACH", "EXPLAIN_MISTAKE"]),
  locale: z.enum(["fr", "en"]),
  academySlug: z.string().min(1).max(120).optional(),
  courseSlug: z.string().min(1).max(120).optional(),
  moduleSlug: z.string().min(1).max(120).optional(),
  lessonSlug: z.string().min(1).max(120).optional(),
  questionId: z.string().min(1).max(120).optional(),
  selectedOptionIds: z.array(z.string().min(1).max(120)).max(10).optional(),
  userMessage: z.string().max(500).optional(),
});

export type AiTutorApiBody = z.infer<typeof aiTutorApiBodySchema>;

/**
 * Loads only the educational fields needed for tutoring.
 * Never loads passwordHash, other users, or full curricula.
 */
export async function loadAiTutorContext(
  body: AiTutorApiBody
): Promise<AiTutorContext> {
  const locale = body.locale as Locale;
  const context: AiTutorContext = { locale };

  if (body.academySlug && body.courseSlug && body.moduleSlug && body.lessonSlug) {
    const lesson = await prisma.lesson.findFirst({
      where: {
        slug: body.lessonSlug,
        module: {
          slug: body.moduleSlug,
          course: {
            slug: body.courseSlug,
            academy: { slug: body.academySlug },
          },
        },
      },
      include: {
        skills: { include: { skill: true }, take: 3 },
        module: {
          include: {
            course: { include: { academy: true } },
          },
        },
      },
    });

    if (lesson) {
      const academy = lesson.module.course.academy;
      const course = lesson.module.course;
      const mod = lesson.module;
      context.academySlug = academy.slug;
      context.academyTitle = pickLocalized(academy.titleFr, academy.titleEn, locale);
      context.courseSlug = course.slug;
      context.courseTitle = pickLocalized(course.titleFr, course.titleEn, locale);
      context.moduleSlug = mod.slug;
      context.moduleTitle = pickLocalized(mod.titleFr, mod.titleEn, locale);
      context.lessonId = lesson.id;
      context.lessonTitle = pickLocalized(lesson.titleFr, lesson.titleEn, locale);
      context.lessonDescription = pickLocalized(
        lesson.descriptionFr,
        lesson.descriptionEn,
        locale
      );
      context.userLevel =
        lesson.difficulty === "ADVANCED"
          ? "advanced"
          : lesson.difficulty === "INTERMEDIATE"
            ? "intermediate"
            : "beginner";

      const primarySkill = lesson.skills[0]?.skill;
      if (primarySkill) {
        context.skillSlug = primarySkill.slug;
        context.skillTitle = pickLocalized(
          primarySkill.titleFr,
          primarySkill.titleEn,
          locale
        );
        context.conceptSlug = primarySkill.slug;
      }
    }
  }

  if (body.questionId) {
    const question = await prisma.question.findUnique({
      where: { id: body.questionId },
      include: {
        answerOptions: { orderBy: { sortOrder: "asc" } },
        skill: true,
      },
    });

    if (question) {
      const selected = new Set(body.selectedOptionIds ?? []);
      const userAnswerLabels = question.answerOptions
        .filter((o) => selected.has(o.id))
        .map((o) => pickLocalized(o.labelFr, o.labelEn, locale));
      const correctAnswerLabels = question.answerOptions
        .filter((o) => o.isCorrect)
        .map((o) => pickLocalized(o.labelFr, o.labelEn, locale));
      const isCorrect =
        userAnswerLabels.length > 0 &&
        question.answerOptions
          .filter((o) => o.isCorrect)
          .every((o) => selected.has(o.id)) &&
        question.answerOptions
          .filter((o) => selected.has(o.id))
          .every((o) => o.isCorrect);

      context.question = {
        id: question.id,
        prompt: pickLocalized(question.promptFr, question.promptEn, locale),
        userAnswerLabels,
        correctAnswerLabels,
        explanation: pickLocalized(
          question.explanationCorrectFr,
          question.explanationCorrectEn,
          locale
        ),
        isCorrect,
      };
      context.learningItemType = "QUIZ";

      if (question.skill && !context.skillSlug) {
        context.skillSlug = question.skill.slug;
        context.skillTitle = pickLocalized(
          question.skill.titleFr,
          question.skill.titleEn,
          locale
        );
      }
    }
  }

  return context;
}
