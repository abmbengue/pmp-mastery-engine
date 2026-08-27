/**
 * Phase B.3.1 — content quality checks for enriched lessons.
 * No exam generation. Protected bank fingerprint locked.
 */

import { describe, expect, it } from "vitest";
import { PMP_LESSONS } from "../../prisma/seed/content/pmp-lessons";
import { PMP_B31_UPGRADE_SLUGS } from "../../prisma/seed/content/pmp-quality-upgrades-b31";
import {
  assertProtectedBankIntact,
  buildProtectedBankFingerprint,
} from "@/modules/mastery-engine/integrity";
import { ECO_TASK_COUNT } from "@/modules/mastery-engine/eco-taxonomy";
import {
  assertT07T08Separation,
  primaryLessonsForEcoTask,
} from "@/modules/mastery-engine/lesson-eco-map";
import {
  PMP_EXAM_BANK_STEMS,
} from "../../prisma/seed/pmp-exam-bank-data";

const PROTECTED_BANK_AGGREGATE =
  "d18c86618e8cba16c623e8982f362f00e930a8ed5ea8b9c53abb8b5b0df0b1e2";

const B31_SLUGS = [
  "project-lifecycle-basics",
  "resource-management",
  "shared-vision",
  "knowledge-transfer",
  "cost",
  "stakeholders-basics",
  "definition-of-done",
  "lessons-learned",
  "risk-vs-issue",
  "procurement-basics",
  "compliance",
] as const;

describe("Phase B.3.1 — lesson content quality", () => {
  it("enriches the prioritized lesson set with situations and decision quizzes", () => {
    expect(PMP_B31_UPGRADE_SLUGS).toEqual([...B31_SLUGS]);
    for (const slug of B31_SLUGS) {
      const lesson = PMP_LESSONS.find((l) => l.slug === slug)!;
      expect(lesson.situation?.bestActionEn).toBeTruthy();
      expect(1 + (lesson.questions?.length ?? 0)).toBeGreaterThanOrEqual(2);
      expect(lesson.textBodyEn.length).toBeGreaterThan(900);
      expect(lesson.textBodyFr.length).toBeGreaterThan(900);
      // Decision-oriented main prompt (not pure definition)
      expect(lesson.question.promptEn).not.toMatch(
        /^(what is |what are |which of the following|which statement)/i
      );
    }
  });

  it("keeps closure lesson centered on PROCESS-T10 readiness/transition", () => {
    const lesson = PMP_LESSONS.find((l) => l.slug === "project-lifecycle-basics")!;
    expect(lesson.titleEn.toLowerCase()).toContain("close");
    expect(lesson.textBodyEn.toLowerCase()).toMatch(/readiness|transition|acceptance/);
    expect(primaryLessonsForEcoTask("PROCESS-T10")).toContain(
      "project-lifecycle-basics"
    );
  });

  it("keeps T07≠T08≠T04 and ECO 26", () => {
    expect(ECO_TASK_COUNT).toBe(26);
    expect(assertT07T08Separation()).toEqual([]);
    expect(primaryLessonsForEcoTask("PEOPLE-T07")).toContain("knowledge-transfer");
    expect(primaryLessonsForEcoTask("PEOPLE-T08")).toContain("communication");
    const kt = PMP_LESSONS.find((l) => l.slug === "knowledge-transfer")!;
    expect(kt.textBodyEn).toMatch(/T07|PEOPLE-T07|knowledge transfer/i);
    expect(kt.textBodyEn).toMatch(/T08|communication/i);
  });

  it("keeps protected bank fingerprint unchanged and generates 0 exam questions", () => {
    expect(PMP_EXAM_BANK_STEMS).toHaveLength(200);
    expect(
      assertProtectedBankIntact(PMP_EXAM_BANK_STEMS, PROTECTED_BANK_AGGREGATE)
    ).toEqual([]);
    expect(buildProtectedBankFingerprint(PMP_EXAM_BANK_STEMS).aggregate).toBe(
      PROTECTED_BANK_AGGREGATE
    );
  });
});
