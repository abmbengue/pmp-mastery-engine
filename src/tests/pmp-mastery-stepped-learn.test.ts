/**
 * Phase B.3.2 — stepped interactive LEARN (Shared Vision, T07, T08).
 */

import { describe, expect, it } from "vitest";
import { getLessonPedagogy } from "@/modules/mastery-engine/lesson-pedagogy";
import { distinctionsForEcoTask } from "@/modules/mastery-engine/critical-distinctions";
import {
  buildSteppedLearnSteps,
  selectSteppedMiniCaseChoices,
  usesSteppedLearn,
} from "@/modules/mastery-engine/pedagogy-stepped-learn-steps";
import { buildStudyTaskView } from "@/modules/mastery-engine/pmp-study";

const STEPPED_LESSONS = [
  {
    slug: "shared-vision" as const,
    ecoTaskId: "PEOPLE-T01" as const,
    distinctionIds: ["dist-vision-goal-value", "dist-deliverable-outcome-benefit-value"],
    mindsetAssessEn: /expectations diverge|diverge/i,
    miniCaseCorrectId: "b",
  },
  {
    slug: "knowledge-transfer" as const,
    ecoTaskId: "PEOPLE-T07" as const,
    distinctionIds: ["dist-knowledge-transfer-vs-communication"],
    mindsetAssessEn: /tacit|pairing|coaching/i,
    miniCaseCorrectId: "b",
  },
  {
    slug: "communication" as const,
    ecoTaskId: "PEOPLE-T08" as const,
    distinctionIds: ["dist-engagement-vs-communication", "dist-knowledge-transfer-vs-communication"],
    mindsetAssessEn: /urgency|dialogue|interactive/i,
    miniCaseCorrectId: "b",
  },
];

describe("stepped interactive LEARN", () => {
  it("enables stepped flow for shared-vision, knowledge-transfer, and communication", () => {
    expect(usesSteppedLearn("shared-vision")).toBe(true);
    expect(usesSteppedLearn("knowledge-transfer")).toBe(true);
    expect(usesSteppedLearn("communication")).toBe(true);
    expect(usesSteppedLearn("cost")).toBe(false);
  });

  it.each(STEPPED_LESSONS)(
    "$slug builds WHAT → WHY → RECOGNIZE → DECIDE → distinctions → mini-case → takeaway",
    ({ slug, ecoTaskId }) => {
      const pack = getLessonPedagogy(slug);
      expect(pack).toBeDefined();
      const distinctions = distinctionsForEcoTask(ecoTaskId);
      const steps = buildSteppedLearnSteps(pack!, distinctions);
      expect(steps.map((s) => s.kind)).toEqual([
        "what",
        "why",
        "recognize",
        "decide",
        "distinctions",
        "mini_case",
        "takeaway",
      ]);
    }
  );

  it.each(STEPPED_LESSONS)(
    "$slug uses canonical critical distinctions only",
    ({ slug, ecoTaskId, distinctionIds }) => {
      const pack = getLessonPedagogy(slug);
      const distinctions = distinctionsForEcoTask(ecoTaskId);
      const steps = buildSteppedLearnSteps(pack!, distinctions);
      const distinctionStep = steps.find((s) => s.kind === "distinctions");
      expect(distinctionStep?.kind).toBe("distinctions");
      if (distinctionStep?.kind !== "distinctions") return;
      expect(distinctionStep.distinctions.map((d) => d.id)).toEqual(distinctionIds);
    }
  );

  it.each(STEPPED_LESSONS)(
    "$slug limits mini-case to three choices with one correct answer",
    ({ slug, miniCaseCorrectId }) => {
      const pack = getLessonPedagogy(slug)!;
      const miniCaseScreen = pack.screens.find((s) => s.intent === "MINI_CASE");
      expect(miniCaseScreen).toBeDefined();
      const choices = selectSteppedMiniCaseChoices(slug, miniCaseScreen!);
      expect(choices).toHaveLength(3);
      expect(choices.filter((c) => c.correct).length).toBe(1);
      expect(choices.find((c) => c.correct)?.id).toBe(miniCaseCorrectId);
    }
  );

  it.each(STEPPED_LESSONS)(
    "$slug frames ASSESS → ALIGN → DECIDE → ACT from pack content",
    ({ slug, ecoTaskId, mindsetAssessEn }) => {
      const pack = getLessonPedagogy(slug)!;
      const steps = buildSteppedLearnSteps(pack, distinctionsForEcoTask(ecoTaskId));
      const decide = steps.find((s) => s.kind === "decide");
      expect(decide?.kind).toBe("decide");
      if (decide?.kind !== "decide") return;
      expect(decide.mindset.map((m) => m.phase)).toEqual([
        "ASSESS",
        "ALIGN",
        "DECIDE",
        "ACT",
      ]);
      expect(decide.mindset[0].bodyEn).toMatch(mindsetAssessEn);
      expect(decide.mindset[1].bodyEn.length).toBeGreaterThan(0);
    }
  );

  it("preserves T07 ≠ T08 distinction mapping", () => {
    const t07 = buildStudyTaskView("PEOPLE-T07").lessons.map((l) => l.slug);
    const t08 = buildStudyTaskView("PEOPLE-T08").lessons.map((l) => l.slug);
    expect(t07).toContain("knowledge-transfer");
    expect(t08).toContain("communication");
    expect(t07).not.toContain("communication");
    expect(t08).not.toContain("knowledge-transfer");
  });
});
