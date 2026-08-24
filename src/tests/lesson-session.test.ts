import { describe, it, expect, beforeAll } from "vitest";
import prisma from "@/data/prisma-client";
import { getLessonSession, saveLessonPhase, finishLesson } from "@/modules/learning-engine/lesson-session-service";
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

  it("marks lesson as completed and updates mastery", async () => {
    const skillId = await prisma.skill
      .findFirst({ where: { slug: "pf-foundations" } })
      .then((s) => s?.id ?? null);

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
    expect(progress!.totalLessons).toBe(6);
  });

  it("returns correct percentage: 1/6 = 17%", async () => {
    // Reset all progress first then complete only one lesson
    await prisma.lessonProgress.deleteMany({ where: { userId } });
    await finishLesson(userId, lessonId, 180, 80, null);
    const progress = await getCourseProgress(userId, courseId);
    expect(progress!.percentage).toBe(17); // Math.round(1/6*100)
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
    expect(next!.slug).toBe("tracking-expenses");
    expect(next!.moduleSlug).toBe("foundations");
  });

  it("returns next lesson in next module", async () => {
    const next = await findNextLesson(
      "personal-finance",
      "essentials",
      "foundations",
      "building-a-budget"
    );
    expect(next).not.toBeNull();
    expect(next!.moduleSlug).toBe("saving-investing");
    expect(next!.slug).toBe("why-save");
  });

  it("returns null for last lesson of course", async () => {
    const next = await findNextLesson(
      "personal-finance",
      "essentials",
      "saving-investing",
      "risk-and-return"
    );
    expect(next).toBeNull();
  });
});
