import { describe, it, expect, beforeAll } from "vitest";
import prisma from "@/data/prisma-client";
import { getLessonSession, saveLessonPhase, finishLesson } from "@/modules/learning-engine/lesson-session-service";
import { recordQuizAttempt } from "@/modules/assessment-engine/scoring-service";
import { processQuizMasteryForAttempts } from "@/modules/mastery-engine/mastery-runtime-service";
import { findNextLesson } from "@/data/repositories/navigation-repository";
import { getCourseProgress } from "@/modules/learning-engine/progress-service";

describe("lesson session and progression", () => {
  let userId: string;
  let lessonId: string;
  let courseId: string;

  beforeAll(async () => {
    const user = await prisma.user.findUnique({ where: { email: "demo@pla.local" } });
    if (!user) throw new Error("Demo user not found — run db:seed first");
    userId = user.id;

    const lesson = await prisma.lesson.findFirst({
      where: { slug: "understanding-income" },
      include: { module: { include: { course: true } } },
    });
    if (!lesson) throw new Error("Lesson not found");
    lessonId = lesson.id;
    courseId = lesson.module.courseId;

    // Reset progress for clean test
    await prisma.lessonProgress.deleteMany({ where: { userId, lessonId } });
  });

  it("returns default state for unstarted lesson", async () => {
    const state = await getLessonSession(userId, lessonId);
    expect(state.currentPhase).toBe("LEARN");
    expect(state.isCompleted).toBe(false);
    expect(state.quizScore).toBeNull();
  });

  it("saves intermediate phase progress", async () => {
    await saveLessonPhase(userId, lessonId, "PRACTICE", 60);
    const state = await getLessonSession(userId, lessonId);
    expect(state.currentPhase).toBe("PRACTICE");
    expect(state.isCompleted).toBe(false);
  });

  it("saves quiz score in metadata", async () => {
    await saveLessonPhase(userId, lessonId, "REVIEW", 120, 80, "MASTERED");
    const state = await getLessonSession(userId, lessonId);
    expect(state.currentPhase).toBe("REVIEW");
    expect(state.quizScore).toBe(80);
    expect(state.masteryLevel).toBe("MASTERED");
  });

  it("marks lesson as completed (mastery via quiz runtime, not finishLesson)", async () => {
    const skillId = await prisma.skill
      .findFirst({ where: { slug: "pf-income" } })
      .then((s) => s?.id ?? null);

    const quizItem = await prisma.learningItem.findFirst({
      where: { lessonId, type: "QUIZ" },
      include: { questions: { include: { answerOptions: true } } },
    });
    const question = quizItem?.questions[0];
    const correctOptionId = question?.answerOptions.find((o) => o.isCorrect)?.id;

    if (question && correctOptionId) {
      const { attempt } = await recordQuizAttempt(userId, question.id, [correctOptionId]);
      await processQuizMasteryForAttempts(userId, [attempt.id]);
    }

    await finishLesson(userId, lessonId, 180, 80, skillId);
    const state = await getLessonSession(userId, lessonId);
    expect(state.isCompleted).toBe(true);

    if (skillId) {
      const mastery = await prisma.conceptMastery.findUnique({
        where: { userId_skillId: { userId, skillId } },
      });
      expect(mastery?.level).toBe("MASTERED");
    }
  });

  it("calculates course progress after lesson completion", async () => {
    const progress = await getCourseProgress(userId, courseId);
    expect(progress).not.toBeNull();
    expect(progress!.completedLessons).toBeGreaterThanOrEqual(1);
    expect(progress!.percentage).toBeGreaterThan(0);
    expect(progress!.totalLessons).toBeGreaterThanOrEqual(7);
  });

  it("returns correct percentage for a single completed lesson", async () => {
    // Reset progress for this course only (avoid wiping other parallel suites)
    const courseLessons = await prisma.lesson.findMany({
      where: { module: { courseId } },
      select: { id: true },
    });
    await prisma.lessonProgress.deleteMany({
      where: { userId, lessonId: { in: courseLessons.map((l) => l.id) } },
    });
    await finishLesson(userId, lessonId, 180, 80, null);
    const progress = await getCourseProgress(userId, courseId);
    const expected = Math.round((1 / progress!.totalLessons) * 100);
    expect(progress!.completedLessons).toBe(1);
    expect(progress!.percentage).toBe(expected);
  });
});

describe("next lesson navigation", () => {
  it("returns next lesson in same module", async () => {
    const next = await findNextLesson(
      "personal-finance",
      "essentials",
      "foundations",
      "understanding-income"
    );
    expect(next).not.toBeNull();
    expect(next!.slug).toBe("net-vs-gross-income");
    expect(next!.moduleSlug).toBe("foundations");
  });

  it("returns next lesson across modules after last foundations lesson", async () => {
    const next = await findNextLesson(
      "personal-finance",
      "essentials",
      "foundations",
      "inflation-basics"
    );
    expect(next).not.toBeNull();
    expect(next!.moduleSlug).toBe("debt");
  });

  it("returns null for last lesson of course", async () => {
    const next = await findNextLesson(
      "personal-finance",
      "essentials",
      "wealth-building",
      "wealth-habits"
    );
    expect(next).toBeNull();
  });
});
