import { describe, expect, it } from "vitest";
import { PMP_LESSONS, PMP_MODULES } from "../../prisma/seed/content/pmp-lessons";
import { PMP_EXAM_BANK } from "../../prisma/seed/pmp-exam-bank-data";
import { validateLessonCatalog } from "@/modules/content/content-validator";
import { classifyError } from "@/modules/assessment-engine/analytics-engine";
import { mapErrorToCorrectiveLearning } from "@/modules/learning-engine/corrective-learning";

describe("PMP content expansion", () => {
  it("expands to a rich bilingual catalog across seven modules", () => {
    expect(PMP_LESSONS.length).toBeGreaterThanOrEqual(70);
    expect(PMP_MODULES.map((m) => m.slug)).toEqual([
      "foundations",
      "people",
      "process",
      "business-environment",
      "agile",
      "hybrid",
      "situational-thinking",
    ]);
    expect(PMP_LESSONS.filter((l) => l.moduleSlug === "people").length).toBeGreaterThanOrEqual(
      12
    );
    expect(PMP_LESSONS.filter((l) => l.moduleSlug === "process").length).toBeGreaterThanOrEqual(
      14
    );
    expect(
      PMP_LESSONS.filter((l) => l.moduleSlug === "situational-thinking").length
    ).toBeGreaterThanOrEqual(10);
  });

  it("covers required people / process / business / agile / hybrid / situational concepts", () => {
    const slugs = new Set(PMP_LESSONS.map((l) => l.slug));
    for (const slug of [
      "leadership",
      "servant-leadership",
      "conflict-management-basics",
      "negotiation-basics",
      "stakeholders-basics",
      "psychological-safety",
      "distributed-teams",
      "project-initiation",
      "requirements-basics",
      "risk-vs-issue",
      "issue-management",
      "lessons-learned",
      "organizational-strategy",
      "benefits-realization",
      "project-selection",
      "agile-mindset",
      "prioritization-techniques",
      "definition-of-done",
      "velocity-and-flow",
      "when-to-use-hybrid",
      "planning-boundaries-hybrid",
      "pla-situational-method",
      "identify-before-acting",
      "root-cause-vs-symptom",
      "scope-creep-mid-sprint",
      "exam-reasoning-integration",
    ]) {
      expect(slugs.has(slug)).toBe(true);
    }
  });

  it("keeps rich pedagogical structure FR/EN with decisions", () => {
    for (const l of PMP_LESSONS) {
      expect(l.textBodyFr).toContain("Objectif");
      expect(l.textBodyEn).toContain("Objective");
      expect(l.textBodyFr).toContain("À retenir");
      expect(l.textBodyEn).toContain("Key takeaway");
      expect(l.textBodyFr).toContain("Décision");
      expect(l.textBodyEn).toContain("Decision");
      expect(l.textBodyFr).not.toEqual(l.textBodyEn);
      expect(l.textBodyFr.length).toBeGreaterThan(700);
      expect(l.textBodyEn.length).toBeGreaterThan(700);
      expect(l.estimatedMinutes).toBeGreaterThanOrEqual(5);
      expect(l.estimatedMinutes).toBeLessThanOrEqual(12);
      expect(l.question.options.length).toBeGreaterThanOrEqual(3);
      expect(l.question.options.some((o) => o.isCorrect)).toBe(true);
    }
  });

  it("teaches PLA situational method as proprietary framework", () => {
    const method = PMP_LESSONS.find((l) => l.slug === "pla-situational-method")!;
    expect(method.textBodyFr).toMatch(/OBSERVE|OBSERVER/i);
    expect(method.textBodyEn).toMatch(/OBSERVE/i);
    expect(method.textBodyFr).toMatch(/ADAPT/i);
    expect((method.questions?.length ?? 0) + 1).toBeGreaterThanOrEqual(3);
  });

  it("adds situational scenarios and multi-question quizzes", () => {
    const totalQuestions = PMP_LESSONS.reduce(
      (sum, l) => sum + 1 + (l.questions?.length ?? 0),
      0
    );
    expect(totalQuestions).toBeGreaterThanOrEqual(85);
    const situational = PMP_LESSONS.filter((l) => l.situation);
    expect(situational.length).toBeGreaterThanOrEqual(8);
    for (const s of situational) {
      expect(s.situation?.scenarioEn).toBeTruthy();
      expect(s.situation?.bestActionFr).toBeTruthy();
    }
  });

  it("passes content validator", () => {
    expect(validateLessonCatalog(PMP_LESSONS).ok).toBe(true);
  });

  it("keeps shorts under 180 seconds", () => {
    const shorts = PMP_LESSONS.filter((l) => l.isShort);
    expect(shorts.length).toBeGreaterThanOrEqual(8);
    for (const s of shorts) {
      expect(s.shortDurationSeconds!).toBeLessThanOrEqual(180);
      expect(s.shortScriptFr!.length).toBeGreaterThan(40);
      expect(s.shortScriptEn!.length).toBeGreaterThan(40);
    }
  });

  it("preserves corrective-learning lesson slug references", () => {
    const slugs = new Set(PMP_LESSONS.map((l) => l.slug));
    for (const category of [
      "KNOWLEDGE_GAP",
      "MISREAD_SCENARIO",
      "WRONG_PRIORITY",
      "WRONG_ACTION",
      "AGILE_MINDSET",
      "STAKEHOLDER_ERROR",
      "RISK_ERROR",
      "PROCESS_ERROR",
    ] as const) {
      const hint = mapErrorToCorrectiveLearning(category);
      expect(hint.preferredLessonSlugs.some((s) => slugs.has(s))).toBe(true);
    }
  });

  it("maps exam bank metadata to classifyError categories", () => {
    const categories = new Set<string>();
    for (const q of PMP_EXAM_BANK) {
      categories.add(
        classifyError({
          scenarioType: q.scenarioType,
          domain: q.domain,
          deliveryApproach: q.deliveryApproach,
          skillSlugs: q.skills,
          learningObjective: q.learningObjective,
        })
      );
    }
    for (const cat of [
      "STAKEHOLDER_ERROR",
      "RISK_ERROR",
      "AGILE_MINDSET",
      "WRONG_ACTION",
      "PROCESS_ERROR",
      "KNOWLEDGE_GAP",
    ]) {
      expect(categories.has(cat)).toBe(true);
    }
  });

  it("has no duplicate lesson titles", () => {
    const titlesFr = PMP_LESSONS.map((l) => l.titleFr);
    const titlesEn = PMP_LESSONS.map((l) => l.titleEn);
    expect(new Set(titlesFr).size).toBe(titlesFr.length);
    expect(new Set(titlesEn).size).toBe(titlesEn.length);
  });
});
