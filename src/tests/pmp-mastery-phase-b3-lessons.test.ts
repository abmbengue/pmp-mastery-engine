/**
 * Phase B.3 — lesson architecture / ECO map / P0 coverage tests.
 * Does not generate exam questions. Protected bank fingerprint must stay locked.
 */

import { describe, expect, it } from "vitest";
import {
  assertP0Coverage,
  assertT07T08Separation,
  buildEcoLessonCoverageReport,
  entriesForEcoTask,
  LESSON_ECO_MAP,
  mappedLessonIds,
  primaryLessonsForEcoTask,
} from "@/modules/mastery-engine/lesson-eco-map";
import {
  INSTRUCTOR_LESSONS,
  instructorLessonsPendingSource,
} from "@/modules/mastery-engine/instructor-lessons";
import {
  getLessonPedagogy,
  P0_LESSON_PEDAGOGY,
} from "@/modules/mastery-engine/lesson-pedagogy";
import {
  assertProtectedBankIntact,
  buildProtectedBankFingerprint,
  auditGraphIntegrity,
} from "@/modules/mastery-engine/integrity";
import { ECO_TASK_COUNT, ECO_TASKS } from "@/modules/mastery-engine/eco-taxonomy";
import { getConcept } from "@/modules/mastery-engine/concept-graph";
import { MASTERY_SKILL_COUNT } from "@/modules/mastery-engine/mastery-skills";
import { PMP_LESSONS } from "../../prisma/seed/content/pmp-lessons";
import { PMP_PHASE_B3_LESSON_SLUGS } from "../../prisma/seed/content/pmp-phase-b3-lessons";
import {
  PMP_EXAM_BANK,
  PMP_EXAM_BANK_STEMS,
} from "../../prisma/seed/pmp-exam-bank-data";

const PROTECTED_BANK_AGGREGATE =
  "d18c86618e8cba16c623e8982f362f00e930a8ed5ea8b9c53abb8b5b0df0b1e2";

describe("Phase B.3 — ECO 26 intact", () => {
  it("keeps 26 ECO tasks with People 8 including T07/T08", () => {
    expect(ECO_TASK_COUNT).toBe(26);
    expect(ECO_TASKS.filter((t) => t.domainId === "PEOPLE")).toHaveLength(8);
    expect(ECO_TASKS.some((t) => t.id === "PEOPLE-T07")).toBe(true);
    expect(ECO_TASKS.some((t) => t.id === "PEOPLE-T08")).toBe(true);
  });
});

describe("Phase B.3 — lessonEcoMap", () => {
  it("maps lessons to all 26 ECO tasks with P0 primaries", () => {
    expect(LESSON_ECO_MAP.length).toBeGreaterThan(50);
    const report = buildEcoLessonCoverageReport();
    expect(report).toHaveLength(26);
    expect(assertP0Coverage()).toEqual([]);
    expect(assertT07T08Separation()).toEqual([]);
    expect(primaryLessonsForEcoTask("PEOPLE-T01")).toContain("shared-vision");
    expect(primaryLessonsForEcoTask("PEOPLE-T07")).toContain("knowledge-transfer");
    expect(primaryLessonsForEcoTask("PEOPLE-T08")).toContain("communication");
    expect(primaryLessonsForEcoTask("PROCESS-T06")).toContain("cost");
  });

  it("does not treat communication as PRIMARY for T04 or T07", () => {
    const t04 = entriesForEcoTask("PEOPLE-T04").filter(
      (e) => e.lessonId === "communication"
    );
    expect(t04.every((e) => e.coverageType !== "PRIMARY")).toBe(true);
    expect(primaryLessonsForEcoTask("PEOPLE-T07")).not.toContain("communication");
  });

  it("covers catalog lessons used in the map", () => {
    const catalog = new Set(PMP_LESSONS.map((l) => l.slug));
    for (const id of mappedLessonIds()) {
      expect(catalog.has(id)).toBe(true);
    }
  });
});

describe("Phase B.3 — instructor 12-lesson architecture", () => {
  it("defines 12 instructor lessons with L3/L8/L10 pending", () => {
    expect(INSTRUCTOR_LESSONS).toHaveLength(12);
    const pending = instructorLessonsPendingSource();
    expect(pending.map((l) => l.id).sort()).toEqual([
      "INSTRUCTOR-L03",
      "INSTRUCTOR-L08",
      "INSTRUCTOR-L10",
    ]);
  });

  it("splits Lesson 6 into T07 and T08 branches", () => {
    const l6 = INSTRUCTOR_LESSONS.find((l) => l.id === "INSTRUCTOR-L06")!;
    expect(l6.branches?.map((b) => b.id)).toEqual([
      "L06-A-KNOWLEDGE-TRANSFER",
      "L06-B-COMMUNICATION",
    ]);
    expect(l6.branches?.[0].ecoTaskIds).toEqual(["PEOPLE-T07"]);
    expect(l6.branches?.[1].ecoTaskIds).toEqual(["PEOPLE-T08"]);
  });
});

describe("Phase B.3 — P0 lessons & pedagogy", () => {
  it("adds shared-vision and knowledge-transfer lessons", () => {
    expect(PMP_LESSONS.length).toBe(79);
    for (const slug of PMP_PHASE_B3_LESSON_SLUGS) {
      const lesson = PMP_LESSONS.find((l) => l.slug === slug);
      expect(lesson).toBeTruthy();
      expect(lesson!.situation?.bestActionEn).toBeTruthy();
      expect(1 + (lesson!.questions?.length ?? 0)).toBeGreaterThanOrEqual(2);
    }
  });

  it("provides pedagogy packs for T01/T07/T08/T06", () => {
    expect(P0_LESSON_PEDAGOGY).toHaveLength(4);
    for (const id of ["shared-vision", "knowledge-transfer", "communication", "cost"]) {
      const pack = getLessonPedagogy(id);
      expect(pack).toBeTruthy();
      expect(pack!.screens.length).toBeGreaterThanOrEqual(2);
      expect(pack!.decisionRules.length).toBeGreaterThanOrEqual(1);
    }
  });

  it("enriches graph concepts/skills for P0", () => {
    expect(getConcept("tacit-vs-explicit-knowledge")?.parentConceptId).toBe(
      "knowledge-transfer"
    );
    expect(getConcept("evm-metric-to-decision")?.parentConceptId).toBe(
      "project-finance"
    );
    expect(getConcept("shared-vision")?.skillIds).toContain(
      "skill-facilitate-shared-vision"
    );
    expect(MASTERY_SKILL_COUNT).toBe(67);
  });
});

describe("Phase B.3 — protected bank unchanged", () => {
  it("keeps fingerprint and stems intact", () => {
    expect(PMP_EXAM_BANK_STEMS).toHaveLength(200);
    expect(PMP_EXAM_BANK).toHaveLength(200);
    expect(assertProtectedBankIntact(PMP_EXAM_BANK_STEMS, PROTECTED_BANK_AGGREGATE)).toEqual(
      []
    );
    expect(buildProtectedBankFingerprint(PMP_EXAM_BANK_STEMS).aggregate).toBe(
      PROTECTED_BANK_AGGREGATE
    );
  });

  it("keeps graph integrity without P0 issues", () => {
    expect(auditGraphIntegrity().filter((i) => i.severity === "P0")).toEqual([]);
  });
});
