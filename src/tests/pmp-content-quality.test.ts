import { describe, expect, it } from "vitest";
import { PMP_LESSONS, PMP_MODULES } from "../../prisma/seed/content/pmp-lessons";
import {
  PMP_QUALITY_UPGRADE_SLUGS,
  PMP_PRIORITY_UPGRADE_SLUGS,
} from "../../prisma/seed/content/pmp-quality-upgrades";
import { validateLessonCatalog } from "@/modules/content/content-validator";
import { PMP_EXAM_BANK } from "../../prisma/seed/pmp-exam-bank-data";

describe("PMP content quality pass (Mission 2)", () => {
  it("keeps 77 lessons and seven modules", () => {
    expect(PMP_LESSONS.length).toBe(77);
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

  it("applies quality upgrades to 33 targeted lessons including former D", () => {
    expect(PMP_QUALITY_UPGRADE_SLUGS.length).toBe(33);
    expect(PMP_PRIORITY_UPGRADE_SLUGS).toContain("combining-predictive-and-agile");
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
    expect(totalQuestions).toBeGreaterThanOrEqual(120);
    expect(PMP_LESSONS.filter((l) => l.situation).length).toBeGreaterThanOrEqual(25);
    expect(
      PMP_LESSONS.filter((l) => 1 + (l.questions?.length ?? 0) >= 2).length
    ).toBeGreaterThanOrEqual(30);
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
});
