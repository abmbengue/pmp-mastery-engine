import { describe, expect, it } from "vitest";
import { PMP_LESSONS, PMP_MODULES } from "../../prisma/seed/content/pmp-lessons";
import {
  PMP_QUALITY_UPGRADE_SLUGS,
  PMP_PRIORITY_UPGRADE_SLUGS,
  PMP_POLISH_UPGRADE_SLUGS,
} from "../../prisma/seed/content/pmp-quality-upgrades";
import { validateLessonCatalog } from "@/modules/content/content-validator";
import { PMP_EXAM_BANK } from "../../prisma/seed/pmp-exam-bank-data";

describe("PMP content quality pass (Mission 2 + Mission 4 polish)", () => {
  it("keeps 79 lessons (77 preserved + 2 B.3 P0) and seven modules", () => {
    expect(PMP_LESSONS.length).toBe(79);
    expect(PMP_MODULES.map((m) => m.slug)).toEqual([
      "foundations",
      "people",
      "process",
      "business-environment",
      "agile",
      "hybrid",
      "situational-thinking",
    ]);
    expect(validateLessonCatalog(PMP_LESSONS).ok).toBe(true);
  });

  it("applies quality upgrades including Mission 4 polish set", () => {
    expect(PMP_QUALITY_UPGRADE_SLUGS.length).toBe(45);
    expect(PMP_PRIORITY_UPGRADE_SLUGS).toContain("combining-predictive-and-agile");
    expect(PMP_POLISH_UPGRADE_SLUGS.length).toBe(10);
    for (const slug of PMP_QUALITY_UPGRADE_SLUGS) {
      expect(PMP_LESSONS.some((l) => l.slug === slug)).toBe(true);
    }
  });

  it("upgraded lessons use situation blocks and multi-question decision quizzes", () => {
    const definitional =
      /^(what is |what are |which of the following|which statement|what distinguishes|what is the (main |difference|advantage|goal)|what is critical|what is central)/i;

    for (const slug of PMP_QUALITY_UPGRADE_SLUGS) {
      const lesson = PMP_LESSONS.find((l) => l.slug === slug)!;
      expect(lesson.situation?.scenarioEn).toBeTruthy();
      expect(lesson.situation?.bestActionFr).toBeTruthy();
      expect(1 + (lesson.questions?.length ?? 0)).toBeGreaterThanOrEqual(2);
      expect(lesson.textBodyEn.length).toBeGreaterThan(900);
      expect(lesson.textBodyFr.length).toBeGreaterThan(900);
      expect(definitional.test(lesson.question.promptEn)).toBe(false);
      expect(lesson.question.promptFr).not.toMatch(
        /^Qu'est-ce|^Définir|^Que signifie|^Quel est le|Quelle est la (définition|différence)/i
      );
      const wrong = lesson.question.options.filter((o) => !o.isCorrect);
      expect(wrong.length).toBeGreaterThanOrEqual(2);
      expect(
        wrong.every((o) => o.explanationWrongFr && o.explanationWrongEn)
      ).toBe(true);
    }
  });

  it("raises situational coverage and lesson question count after quality pass", () => {
    const totalQuestions = PMP_LESSONS.reduce(
      (sum, l) => sum + 1 + (l.questions?.length ?? 0),
      0
    );
    expect(totalQuestions).toBeGreaterThanOrEqual(130);
    expect(PMP_LESSONS.filter((l) => l.situation).length).toBeGreaterThanOrEqual(50);
    expect(
      PMP_LESSONS.filter((l) => 1 + (l.questions?.length ?? 0) >= 2).length
    ).toBeGreaterThanOrEqual(45);
  });

  it("removes former definitional main prompts on upgraded critical slugs", () => {
    for (const slug of [
      "combining-predictive-and-agile",
      "benefits",
      "organizational-context",
      "organizational-change",
      "iterative-delivery",
      "governance",
      "cost",
      "delivery-strategy",
    ]) {
      const lesson = PMP_LESSONS.find((l) => l.slug === slug)!;
      expect(lesson.question.promptEn.toLowerCase()).toMatch(
        /situation|first|best|next|should|clarify|before|helio|nordia|flowmart|contineo|sponsor|team|vendor|portal|sprint|gate/
      );
    }
  });

  it("keeps exam bank of 200 questions unchanged by this pass", () => {
    expect(PMP_EXAM_BANK.length).toBe(200);
  });

  it("avoids PMI proprietary EEF jargon in organizational-context upgrade", () => {
    const lesson = PMP_LESSONS.find((l) => l.slug === "organizational-context")!;
    const blob =
      lesson.textBodyEn +
      lesson.question.promptEn +
      (lesson.questions ?? []).map((q) => q.promptEn).join(" ");
    expect(blob).not.toMatch(/\bEEFs?\b|Enterprise Environmental Factors/i);
  });

  it("aligns hybrid lesson skills with exam pmp-hybrid tag", () => {
    const hybridLessons = PMP_LESSONS.filter((l) => l.moduleSlug === "hybrid");
    expect(hybridLessons.length).toBe(10);
    expect(hybridLessons.every((l) => l.skillSlug === "pmp-hybrid")).toBe(true);
    expect(PMP_LESSONS.some((l) => l.skillSlug === "hybrid-delivery")).toBe(false);
    expect(
      PMP_EXAM_BANK.some((q) => (q.skills ?? []).includes("pmp-hybrid"))
    ).toBe(true);
  });

  it("aligns team-development lesson skill with exam team-development tag", () => {
    const lesson = PMP_LESSONS.find((l) => l.slug === "team-development")!;
    expect(lesson.skillSlug).toBe("team-development");
  });

  it("places lessons-learned before integration in process module", () => {
    const process = PMP_LESSONS.filter((l) => l.moduleSlug === "process").sort(
      (a, b) => a.sortOrder - b.sortOrder
    );
    const ll = process.findIndex((l) => l.slug === "lessons-learned");
    const integ = process.findIndex((l) => l.slug === "integration");
    expect(ll).toBeGreaterThanOrEqual(0);
    expect(integ).toBeGreaterThan(ll);
  });

  it("Mission 4 polish lessons use non-Helios primary vignettes", () => {
    for (const slug of PMP_POLISH_UPGRADE_SLUGS) {
      const lesson = PMP_LESSONS.find((l) => l.slug === slug)!;
      expect(lesson.situation?.scenarioEn).toBeTruthy();
      expect(1 + (lesson.questions?.length ?? 0)).toBeGreaterThanOrEqual(2);
      expect(lesson.textBodyEn).not.toMatch(/\bHelios\b/);
    }
  });
});
