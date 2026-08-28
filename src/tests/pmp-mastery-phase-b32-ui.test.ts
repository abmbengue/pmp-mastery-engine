/**
 * Phase B.3.2 — PMP study UI wiring tests.
 * No exam generation. Protected bank fingerprint locked.
 */

import { describe, expect, it } from "vitest";
import {
  assertProtectedBankIntact,
  buildProtectedBankFingerprint,
} from "@/modules/mastery-engine/integrity";
import { PMP_EXAM_BANK_STEMS } from "../../prisma/seed/pmp-exam-bank-data";
import { ECO_TASK_COUNT } from "@/modules/mastery-engine/eco-taxonomy";
import { getLessonPedagogy } from "@/modules/mastery-engine/lesson-pedagogy";
import { distinctionsForEcoTask } from "@/modules/mastery-engine/critical-distinctions";
import {
  buildPmpLessonHref,
  buildPmpStudyTaskHref,
  buildStudyTaskView,
  ECO_DOMAINS,
  isEcoDomainId,
  isEcoTaskId,
  resolvePmpStudyTaskBackLink,
} from "@/modules/mastery-engine/pmp-study";
import { PMP_LESSON_CATALOG } from "@/modules/mastery-engine/pmp-lesson-catalog";

const PROTECTED_BANK_AGGREGATE =
  "d18c86618e8cba16c623e8982f362f00e930a8ed5ea8b9c53abb8b5b0df0b1e2";

describe("Phase B.3.2 PMP study UI wiring", () => {
  it("keeps ECO baseline at 26 tasks and 3 domains", () => {
    expect(ECO_TASK_COUNT).toBe(26);
    expect(ECO_DOMAINS).toHaveLength(3);
    expect(ECO_DOMAINS.map((d) => d.taskCount).reduce((a, b) => a + b, 0)).toBe(26);
    expect(isEcoDomainId("PEOPLE")).toBe(true);
    expect(isEcoTaskId("PEOPLE-T07")).toBe(true);
    expect(isEcoTaskId("PEOPLE-T08")).toBe(true);
    expect(isEcoTaskId("PEOPLE-T04")).toBe(true);
  });

  it("preserves T04 ≠ T07 ≠ T08", () => {
    const t04 = buildStudyTaskView("PEOPLE-T04");
    const t07 = buildStudyTaskView("PEOPLE-T07");
    const t08 = buildStudyTaskView("PEOPLE-T08");
    expect(t04.task.titleEn).toMatch(/stakeholder/i);
    expect(t07.task.titleEn).toMatch(/knowledge transfer/i);
    expect(t08.task.titleEn).toMatch(/communication/i);
    expect(t04.task.id).not.toBe(t07.task.id);
    expect(t07.task.id).not.toBe(t08.task.id);
  });

  it("builds task views with mapped lessons and distinctions", () => {
    const view = buildStudyTaskView("PEOPLE-T01");
    expect(view.domain.id).toBe("PEOPLE");
    expect(view.lessons.length).toBeGreaterThan(0);
    expect(view.lessons.some((l) => l.slug === "shared-vision")).toBe(true);
    expect(view.primaryHref).toContain("/academies/pmp-project-management/");
    expect(view.primaryHref).toContain("/lessons/");
    expect(view.distinctions.length).toBeGreaterThan(0);
    expect(distinctionsForEcoTask("PEOPLE-T01").length).toBe(view.distinctions.length);
  });

  it("resolves academy lesson hrefs from catalog", () => {
    expect(PMP_LESSON_CATALOG.length).toBe(79);
    const href = buildPmpLessonHref("communication");
    expect(href).toBe(
      "/academies/pmp-project-management/courses/pmp-foundations/modules/people/lessons/communication"
    );
  });

  it("exposes pedagogy packs for P0 lessons and not for arbitrary thin lessons", () => {
    expect(getLessonPedagogy("shared-vision")).toBeDefined();
    expect(getLessonPedagogy("knowledge-transfer")).toBeDefined();
    expect(getLessonPedagogy("communication")).toBeDefined();
    expect(getLessonPedagogy("cost")).toBeDefined();
    // A catalog lesson without a pack must remain undefined (no fake content)
    const withoutPack = PMP_LESSON_CATALOG.find(
      (l) => !getLessonPedagogy(l.slug)
    );
    expect(withoutPack).toBeDefined();
    expect(getLessonPedagogy(withoutPack!.slug)).toBeUndefined();
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

  it("builds ECO task back links from canonical lesson mappings", () => {
    expect(resolvePmpStudyTaskBackLink("shared-vision")).toEqual({
      taskId: "PEOPLE-T01",
      domainId: "PEOPLE",
      href: "/pmp-study/PEOPLE/PEOPLE-T01",
    });
    expect(resolvePmpStudyTaskBackLink("knowledge-transfer")).toEqual({
      taskId: "PEOPLE-T07",
      domainId: "PEOPLE",
      href: "/pmp-study/PEOPLE/PEOPLE-T07",
    });
    expect(resolvePmpStudyTaskBackLink("communication")).toEqual({
      taskId: "PEOPLE-T08",
      domainId: "PEOPLE",
      href: "/pmp-study/PEOPLE/PEOPLE-T08",
    });
    expect(resolvePmpStudyTaskBackLink("risk-vs-issue")).toEqual({
      taskId: "BUSINESS-T05",
      domainId: "BUSINESS",
      href: "/pmp-study/BUSINESS/BUSINESS-T05",
    });
    expect(resolvePmpStudyTaskBackLink("cost")).toEqual({
      taskId: "PROCESS-T06",
      domainId: "PROCESS",
      href: "/pmp-study/PROCESS/PROCESS-T06",
    });
    expect(resolvePmpStudyTaskBackLink("project-lifecycle-basics")).toEqual({
      taskId: "PROCESS-T10",
      domainId: "PROCESS",
      href: "/pmp-study/PROCESS/PROCESS-T10",
    });
    expect(resolvePmpStudyTaskBackLink("lessons-learned")).toEqual({
      taskId: "BUSINESS-T06",
      domainId: "BUSINESS",
      href: "/pmp-study/BUSINESS/BUSINESS-T06",
    });
    expect(buildPmpStudyTaskHref("PEOPLE-T01")).toBe(
      "/pmp-study/PEOPLE/PEOPLE-T01"
    );
  });

  it("returns null for lessons without eco mapping", () => {
    expect(resolvePmpStudyTaskBackLink("not-a-real-lesson-slug")).toBeNull();
  });
});
