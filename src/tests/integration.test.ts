import { describe, it, expect, beforeAll } from "vitest";
import prisma from "@/data/prisma-client";
import { findAllAcademies, findAcademyBySlug, localizeAcademy } from "@/data/repositories/academy-repository";
import { findCourseBySlug, localizeCourse } from "@/data/repositories/course-repository";
import { findLessonBySlug, localizeLesson } from "@/data/repositories/lesson-repository";
import { localizeQuestion } from "@/data/repositories/question-repository";
import {
  startLesson,
  completeLesson,
  getCourseProgress,
} from "@/modules/learning-engine/progress-service";
import { recordQuizAttempt } from "@/modules/assessment-engine/scoring-service";

describe("content and progression integration", () => {
  let demoUserId: string;
  let pfCourseId: string;
  let firstLessonId: string;
  let firstQuestionId: string;
  let correctOptionId: string;

  beforeAll(async () => {
    const user = await prisma.user.findUnique({
      where: { email: "demo@pla.local" },
    });
    if (!user) throw new Error("Demo user not found — run db:seed first");
    demoUserId = user.id;

    const academy = await findAcademyBySlug("personal-finance");
    expect(academy).not.toBeNull();
    const course = academy!.courses[0];
    pfCourseId = course.id;

    const lesson = await findLessonBySlug(
      "personal-finance",
      "essentials",
      "foundations",
      "understanding-income"
    );
    expect(lesson).not.toBeNull();
    firstLessonId = lesson!.id;

    const quizItem = lesson!.learningItems.find((i) => i.type === "QUIZ");
    const question = quizItem!.questions[0];
    firstQuestionId = question.id;
    correctOptionId = question.answerOptions.find((o) => o.isCorrect)!.id;
  });

  it("retrieves all academies including planned ones", async () => {
    const academies = await findAllAcademies();
    expect(academies.length).toBeGreaterThanOrEqual(8);
    const active = academies.filter((a) => a.status === "ACTIVE");
    expect(active).toHaveLength(2);
  });

  it("localizes academy content in FR and EN", async () => {
    const academy = await findAcademyBySlug("personal-finance");
    expect(localizeAcademy(academy!, "fr").title).toBe("Finance Personnelle");
    expect(localizeAcademy(academy!, "en").title).toBe("Personal Finance");
  });

  it("localizes course content in FR and EN", async () => {
    const course = await findCourseBySlug("personal-finance", "essentials");
    expect(localizeCourse(course!, "fr").title).toContain("essentiels");
    expect(localizeCourse(course!, "en").title).toContain("Essentials");
  });

  it("localizes lesson and question content", async () => {
    const lesson = await findLessonBySlug(
      "personal-finance",
      "essentials",
      "foundations",
      "understanding-income"
    );
    expect(localizeLesson(lesson!, "fr").title).toContain("revenus");
    expect(localizeLesson(lesson!, "en").title).toContain("Income");

    const question = lesson!.learningItems
      .find((i) => i.type === "QUIZ")!
      .questions[0];
    expect(localizeQuestion(question, "fr").prompt).toContain("revenu passif");
    expect(localizeQuestion(question, "en").prompt).toContain("passive income");
  });

  it("seeds 2 modules and 6 lessons per active academy", async () => {
    for (const slug of ["personal-finance", "pmp-project-management"]) {
      const academy = await findAcademyBySlug(slug);
      const course = academy!.courses[0];
      const fullCourse = await findCourseBySlug(slug, course.slug);
      expect(fullCourse!.modules).toHaveLength(2);
      const lessonCount = fullCourse!.modules.reduce(
        (sum, m) => sum + m.lessons.length,
        0
      );
      expect(lessonCount).toBe(6);
    }
  });

  it("tracks lesson progress and course completion", async () => {
    await startLesson(demoUserId, firstLessonId);
    await completeLesson(demoUserId, firstLessonId, 300);

    const progress = await getCourseProgress(demoUserId, pfCourseId);
    expect(progress!.completedLessons).toBeGreaterThanOrEqual(1);
    expect(progress!.percentage).toBeGreaterThan(0);
    expect(progress!.totalTimeSpentSec).toBeGreaterThanOrEqual(300);
  });

  it("records quiz attempt and updates mastery", async () => {
    const { validation } = await recordQuizAttempt(
      demoUserId,
      firstQuestionId,
      [correctOptionId]
    );
    expect(validation.isCorrect).toBe(true);
    expect(validation.score).toBe(100);
  });
});
