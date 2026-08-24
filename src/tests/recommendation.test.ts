import { beforeAll, describe, expect, it } from "vitest";
import prisma from "@/data/prisma-client";
import { recommendNextLearning } from "@/modules/learning-engine/recommendation-service";
import { completeLesson, startLesson } from "@/modules/learning-engine/progress-service";
import { findLessonBySlug } from "@/data/repositories/lesson-repository";

describe("recommendNextLearning", () => {
  let userId: string;
  let skillId: string;
  let incomeLessonId: string;
  let compoundLessonId: string;

  beforeAll(async () => {
    const suffix = Date.now();
    const user = await prisma.user.create({
      data: {
        email: `reco-${suffix}@example.com`,
        name: "Reco User",
        locale: "EN",
      },
    });
    userId = user.id;

    const courses = await prisma.course.findMany({
      where: { academy: { status: "ACTIVE" } },
      select: { id: true },
    });
    await Promise.all(
      courses.map((c) =>
        prisma.enrollment.create({ data: { userId, courseId: c.id } })
      )
    );

    const income = await findLessonBySlug(
      "personal-finance",
      "essentials",
      "foundations",
      "understanding-income"
    );
    const compound = await findLessonBySlug(
      "personal-finance",
      "essentials",
      "wealth-building",
      "compound-interest"
    );
    expect(income).not.toBeNull();
    expect(compound).not.toBeNull();
    incomeLessonId = income!.id;
    compoundLessonId = compound!.id;

    const skill = await prisma.skill.findUnique({ where: { slug: "pf-compounding" } });
    expect(skill).not.toBeNull();
    skillId = skill!.id;
  });

  it("returns next incomplete when no mastery data", async () => {
    await prisma.lessonProgress.deleteMany({ where: { userId } });
    await prisma.conceptMastery.deleteMany({ where: { userId } });
    const reco = await recommendNextLearning(userId, "en");
    expect(reco).not.toBeNull();
    expect(reco!.reasonCode).toBe("NEXT_INCOMPLETE");
    expect(reco!.path).toContain("/lessons/");
  });

  it("prioritizes WEAK skill lessons", async () => {
    await prisma.lessonProgress.deleteMany({ where: { userId } });
    await prisma.conceptMastery.deleteMany({ where: { userId } });
    await prisma.conceptMastery.create({
      data: { userId, skillId, level: "WEAK" },
    });
    const reco = await recommendNextLearning(userId, "en");
    expect(reco?.reasonCode).toBe("WEAK_SKILL");
    expect(reco?.skillSlug).toBe("pf-compounding");
    expect(reco?.reason.toLowerCase()).toContain("weak");
  });

  it("prioritizes LEARNING skill when no WEAK", async () => {
    await prisma.conceptMastery.deleteMany({ where: { userId } });
    await prisma.conceptMastery.create({
      data: { userId, skillId, level: "LEARNING" },
    });
    const reco = await recommendNextLearning(userId, "en");
    expect(reco?.reasonCode).toBe("LEARNING_SKILL");
    expect(reco?.reason).toMatch(/learning/i);
  });

  it("ignores completed lessons for skill recommendation when alternatives exist", async () => {
    await completeLesson(userId, compoundLessonId, 60);
    await prisma.conceptMastery.deleteMany({ where: { userId } });
    await prisma.conceptMastery.create({
      data: { userId, skillId, level: "WEAK" },
    });
    const reco = await recommendNextLearning(userId, "en");
    expect(reco).not.toBeNull();
    // Compounding skill lessons are completed → fall through to another priority
    expect(reco!.lessonSlug).not.toBe("compound-interest");
    expect(["NEXT_INCOMPLETE", "IN_PROGRESS_LESSON", "WEAK_SKILL", "LEARNING_SKILL"]).toContain(
      reco!.reasonCode
    );
  });

  it("prioritizes IN_PROGRESS lesson when no mastery signals", async () => {
    await prisma.conceptMastery.deleteMany({ where: { userId } });
    await prisma.lessonProgress.deleteMany({ where: { userId } });
    await startLesson(userId, incomeLessonId);
    const reco = await recommendNextLearning(userId, "en");
    expect(reco?.reasonCode).toBe("IN_PROGRESS_LESSON");
    expect(reco?.lessonSlug).toBe("understanding-income");
  });

  it("returns null recommendation when user has no enrollments", async () => {
    const orphan = await prisma.user.create({
      data: {
        email: `orphan-reco-${Date.now()}@example.com`,
        name: "Orphan",
        locale: "FR",
      },
    });
    const reco = await recommendNextLearning(orphan.id, "fr");
    expect(reco).toBeNull();
  });

  it("localizes recommendation reason in FR", async () => {
    await prisma.conceptMastery.deleteMany({ where: { userId } });
    await prisma.lessonProgress.deleteMany({ where: { userId } });
    await prisma.conceptMastery.create({
      data: { userId, skillId, level: "LEARNING" },
    });
    const reco = await recommendNextLearning(userId, "fr");
    expect(reco?.reason).toMatch(/apprenez|Recommandé/i);
  });
});
