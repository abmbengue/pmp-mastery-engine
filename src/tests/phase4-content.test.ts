import { describe, it, expect, beforeAll } from "vitest";
import prisma from "@/data/prisma-client";
import { getDashboardV2 } from "@/modules/dashboard/dashboard-service";
import { getCoursePageV2 } from "@/modules/learning-engine/course-page-service";
import { getNextLessonForCourse } from "@/modules/learning-engine/next-lesson-repository";
import { listShortsByAcademy } from "@/modules/learning-engine/short-learning-service";
import { findAcademyBySlug } from "@/data/repositories/academy-repository";
import { findLessonBySlug } from "@/data/repositories/lesson-repository";
import { startLesson, completeLesson } from "@/modules/learning-engine/progress-service";

describe("Phase 4 content and dashboard aggregation", () => {
  let demoUserId: string;
  let pfCourseId: string;
  let cfCourseId: string;

  beforeAll(async () => {
    const user = await prisma.user.findUnique({ where: { email: "demo@pla.local" } });
    if (!user) throw new Error("Demo user not found — run db:seed first");
    demoUserId = user.id;

    const pf = await findAcademyBySlug("personal-finance");
    const cf = await findAcademyBySlug("corporate-finance");
    expect(pf).not.toBeNull();
    expect(cf).not.toBeNull();
    pfCourseId = pf!.courses[0].id;
    cfCourseId = cf!.courses[0].id;
  });

  it("activates Corporate Finance with bilingual content", async () => {
    const academy = await findAcademyBySlug("corporate-finance");
    expect(academy?.status).toBe("ACTIVE");
    expect(academy?.titleFr).toContain("entreprise");
    expect(academy?.titleEn).toContain("Corporate");
    const course = academy!.courses.find((c) => c.slug === "cf-essentials");
    expect(course).toBeTruthy();
    expect(course!.modules.length).toBeGreaterThanOrEqual(2);
    const lessonCount = course!.modules.reduce((n, m) => n + m.lessons.length, 0);
    expect(lessonCount).toBeGreaterThanOrEqual(4);
    expect(lessonCount).toBeGreaterThanOrEqual(20);
  });

  it("structures Personal Finance with categories and multi-skills", async () => {
    const academy = await findAcademyBySlug("personal-finance");
    const course = academy!.courses[0];
    const categories = course.modules.map((m) => m.category);
    expect(categories).toContain("FOUNDATIONS");
    expect(categories).toContain("INVESTING");
    expect(categories).toContain("WEALTH_BUILDING");
    expect(categories).toContain("DEBT");

    const compound = await findLessonBySlug(
      "personal-finance",
      "essentials",
      "wealth-building",
      "compound-interest"
    );
    expect(compound).not.toBeNull();
    expect(compound!.difficulty).toBe("INTERMEDIATE");

    const links = await prisma.lessonSkill.findMany({
      where: { lessonId: compound!.id },
      include: { skill: true },
    });
    const slugs = links.map((l) => l.skill.slug);
    expect(slugs).toEqual(
      expect.arrayContaining(["pf-compounding", "pf-foundations"])
    );
  });

  it("structures PMP around people/process/agile categories", async () => {
    const academy = await findAcademyBySlug("pmp-project-management");
    expect(academy?.status).toBe("ACTIVE");
    const categories = academy!.courses[0].modules.map((m) => m.category);
    expect(categories).toEqual(expect.arrayContaining(["PROCESS", "AGILE"]));

    const skills = await prisma.skill.findMany({
      where: {
        slug: {
          in: [
            "pmp-people",
            "pmp-process",
            "pmp-business-environment",
            "pmp-agile",
            "pmp-hybrid",
            "pmp-situational-thinking",
          ],
        },
      },
    });
    expect(skills.length).toBe(6);
  });

  it("exposes short video metadata for academies", async () => {
    const pfShorts = await listShortsByAcademy("personal-finance", "en");
    expect(pfShorts.length).toBeGreaterThan(0);
    expect(pfShorts[0].isPlaceholder).toBe(true);
    expect(pfShorts[0].durationSeconds).toBeLessThanOrEqual(180);

    const cfShorts = await listShortsByAcademy("corporate-finance", "fr");
    expect(cfShorts.length).toBeGreaterThan(0);
    expect(cfShorts[0].title.length).toBeGreaterThan(0);
  });

  it("aggregates dashboard V2 sections", async () => {
    const dashboard = await getDashboardV2(demoUserId, "en");
    expect(dashboard.myLearning.length).toBeGreaterThanOrEqual(3);
    expect(dashboard.quickAccess.map((q) => q.academySlug)).toEqual([
      "personal-finance",
      "pmp-project-management",
      "corporate-finance",
    ]);
    expect(dashboard.quickAccess.every((q) => q.comingSoon === false)).toBe(true);
    expect(dashboard.stats).toMatchObject({
      lessonsCompleted: expect.any(Number),
      quizzesCompleted: expect.any(Number),
      averageScore: expect.any(Number),
      learningTimeMinutes: expect.any(Number),
      currentStreak: expect.any(Number),
    });
    expect(dashboard.skills).toHaveProperty("weak");
    expect(dashboard.skills).toHaveProperty("learning");
    expect(dashboard.skills).toHaveProperty("mastered");
  });

  it("resolves next lesson and course statuses from real progress", async () => {
    const first = await findLessonBySlug(
      "personal-finance",
      "essentials",
      "foundations",
      "understanding-income"
    );
    expect(first).not.toBeNull();

    await prisma.lessonProgress.deleteMany({
      where: { userId: demoUserId, lessonId: first!.id },
    });

    let next = await getNextLessonForCourse(demoUserId, pfCourseId);
    expect(next?.lesson?.slug).toBe("understanding-income");

    await startLesson(demoUserId, first!.id);
    next = await getNextLessonForCourse(demoUserId, pfCourseId);
    expect(next?.reason).toBe("IN_PROGRESS");
    expect(next?.lesson?.id).toBe(first!.id);

    await completeLesson(demoUserId, first!.id, 120);
    next = await getNextLessonForCourse(demoUserId, pfCourseId);
    expect(next?.lesson?.slug).toBe("tracking-expenses");

    const coursePage = await getCoursePageV2(demoUserId, "personal-finance", "essentials", "en");
    expect(coursePage).not.toBeNull();
    expect(coursePage!.progress.completedLessons).toBeGreaterThanOrEqual(1);
    const income = coursePage!.modules
      .flatMap((m) => m.lessons)
      .find((l) => l.slug === "understanding-income");
    expect(income?.status).toBe("COMPLETED");
    expect(coursePage!.nextLesson).not.toBeNull();
  });

  it("localizes Corporate Finance course page FR/EN", async () => {
    const fr = await getCoursePageV2(demoUserId, "corporate-finance", "cf-essentials", "fr");
    const en = await getCoursePageV2(demoUserId, "corporate-finance", "cf-essentials", "en");
    expect(fr?.title).toContain("entreprise");
    expect(en?.title).toContain("Corporate");
    expect(fr?.modules[0]?.lessons[0]?.estimatedMinutes).toBeGreaterThan(0);
  });

  it("keeps Corporate Finance course reachable for dashboard quick access", async () => {
    const next = await getNextLessonForCourse(demoUserId, cfCourseId);
    expect(next?.path).toContain("/academies/corporate-finance/courses/cf-essentials/");
  });
});
