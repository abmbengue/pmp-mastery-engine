import { beforeAll, describe, expect, it } from "vitest";
import prisma from "@/data/prisma-client";
import { createUser, enrollUserInActiveV1Courses, findUserDashboardData, updateUserLocale } from "@/data/repositories/user-repository";
import { hashPassword } from "@/modules/auth/password";
import { finishLesson } from "@/modules/learning-engine/lesson-session-service";
import { recordQuizAttempt } from "@/modules/assessment-engine/scoring-service";

describe("auth and user isolation integration", () => {
  let userAId: string;
  let userBId: string;
  let lessonId: string;
  let questionId: string;
  let correctOptionId: string;
  let skillId: string | null = null;

  beforeAll(async () => {
    const suffix = Date.now();
    const passwordHash = await hashPassword("StrongPass1");

    const userA = await createUser({
      email: `usera-${suffix}@example.com`,
      name: "User A",
      locale: "fr",
      passwordHash,
    });
    const userB = await createUser({
      email: `userb-${suffix}@example.com`,
      name: "User B",
      locale: "en",
      passwordHash,
    });
    userAId = userA.id;
    userBId = userB.id;

    await enrollUserInActiveV1Courses(userAId);
    await enrollUserInActiveV1Courses(userBId);

    const lesson = await prisma.lesson.findFirst({
      where: { slug: "understanding-income" },
      include: {
        learningItems: {
          include: { questions: { include: { answerOptions: true } } },
        },
      },
    });
    if (!lesson) throw new Error("Lesson not found");
    lessonId = lesson.id;
    const quizItem = lesson.learningItems.find((i) => i.type === "QUIZ");
    if (!quizItem) throw new Error("Quiz item not found");
    const question = quizItem.questions[0];
    questionId = question.id;
    correctOptionId = question.answerOptions.find((o) => o.isCorrect)!.id;
    skillId = question.skillId;
  });

  it("persists locale preference per user", async () => {
    await updateUserLocale(userAId, "en");
    const userA = await prisma.user.findUnique({ where: { id: userAId } });
    expect(userA?.locale).toBe("EN");
  });

  it("creates isolated progress data per user", async () => {
    await finishLesson(userAId, lessonId, 180, 100, skillId);
    await recordQuizAttempt(userAId, questionId, [correctOptionId]);

    const userAData = await findUserDashboardData(userAId);
    const userBData = await findUserDashboardData(userBId);

    expect(userAData.recentScores.length).toBeGreaterThan(0);
    expect(userBData.recentScores.length).toBe(0);

    const userAProgress = await prisma.lessonProgress.findMany({ where: { userId: userAId } });
    const userBProgress = await prisma.lessonProgress.findMany({ where: { userId: userBId } });
    expect(userAProgress.length).toBeGreaterThan(0);
    expect(userBProgress.length).toBe(0);
  });

  it("keeps mastery records isolated per user", async () => {
    const userAMastery = await prisma.conceptMastery.findMany({ where: { userId: userAId } });
    const userBMastery = await prisma.conceptMastery.findMany({ where: { userId: userBId } });
    expect(userAMastery.length).toBeGreaterThanOrEqual(1);
    expect(userBMastery.length).toBe(0);
  });

  it("auto-enrolls only into active V1 courses", async () => {
    const userAEnrollments = await prisma.enrollment.findMany({ where: { userId: userAId }, include: { course: { include: { academy: true } } } });
    const slugs = userAEnrollments.map((e) => e.course.academy.slug).sort();
    expect(slugs).toEqual(["personal-finance", "pmp-project-management"]);
  });
});
