/**
 * Phase B.3.2 — stepped interactive LEARN (all P0 pedagogy packs).
 */

import { describe, expect, it } from "vitest";
import {
  getLessonPedagogy,
  P0_LESSON_PEDAGOGY,
  type LessonPedagogyPack,
} from "@/modules/mastery-engine/lesson-pedagogy";
import {
  distinctionsForEcoTask,
  type CriticalDistinctionCard,
} from "@/modules/mastery-engine/critical-distinctions";
import {
  buildSteppedLearnSteps,
  selectSteppedMiniCaseChoices,
  STEPPED_LEARN_LESSON_IDS,
  usesSteppedLearn,
} from "@/modules/mastery-engine/pedagogy-stepped-learn-steps";
import { buildStudyTaskView } from "@/modules/mastery-engine/pmp-study";
import { primaryLessonsForEcoTask } from "@/modules/mastery-engine/lesson-eco-map";

function distinctionsForPedagogyPack(
  pack: LessonPedagogyPack
): CriticalDistinctionCard[] {
  return Array.from(
    new Map(
      pack.ecoTaskIds
        .flatMap((taskId) => distinctionsForEcoTask(taskId))
        .map((d) => [d.id, d] as const)
    ).values()
  );
}

const STEPPED_LESSONS = [
  {
    slug: "shared-vision" as const,
    distinctionIds: ["dist-vision-goal-value", "dist-deliverable-outcome-benefit-value"],
    mindsetAssessEn: /expectations diverge|diverge/i,
    miniCaseCorrectId: "b",
    hasMiniCase: true,
    hasDistinctions: true,
  },
  {
    slug: "knowledge-transfer" as const,
    distinctionIds: ["dist-knowledge-transfer-vs-communication"],
    mindsetAssessEn: /tacit|pairing|coaching/i,
    miniCaseCorrectId: "b",
    hasMiniCase: true,
    hasDistinctions: true,
  },
  {
    slug: "communication" as const,
    distinctionIds: [
      "dist-engagement-vs-communication",
      "dist-knowledge-transfer-vs-communication",
    ],
    mindsetAssessEn: /urgency|dialogue|interactive/i,
    miniCaseCorrectId: "b",
    hasMiniCase: true,
    hasDistinctions: true,
  },
  {
    slug: "risk-vs-issue" as const,
    distinctionIds: [
      "dist-appetite-vs-threshold",
      "dist-contingency-vs-management-reserve",
      "dist-risk-vs-impediment",
      "dist-risk-vs-issue",
      "dist-threat-vs-opportunity",
    ],
    mindsetAssessEn: /predictive|adaptive|change/i,
    hasMiniCase: false,
    hasDistinctions: true,
  },
  {
    slug: "cost" as const,
    distinctionIds: [
      "dist-contingency-vs-management-reserve",
      "dist-cpi-vs-spi",
      "dist-eac-vs-etc",
      "dist-pv-ev-ac",
    ],
    mindsetAssessEn: /CPI|BAC\/CPI|EAC/i,
    miniCaseCorrectId: "b",
    hasMiniCase: true,
    hasDistinctions: true,
  },
  {
    slug: "project-lifecycle-basics" as const,
    distinctionIds: [] as string[],
    mindsetAssessEn: /acceptance|obligations|close/i,
    miniCaseCorrectId: "b",
    hasMiniCase: true,
    hasDistinctions: false,
  },
  {
    slug: "lessons-learned" as const,
    distinctionIds: ["dist-knowledge-transfer-vs-communication", "dist-opa-vs-eef"],
    mindsetAssessEn: /LESSON LEARNED|ANALYSIS|IMPROVEMENT/i,
    hasMiniCase: false,
    hasDistinctions: true,
  },
];

describe("stepped interactive LEARN", () => {
  it("enables stepped flow for all P0 pedagogy packs", () => {
    for (const pack of P0_LESSON_PEDAGOGY) {
      expect(usesSteppedLearn(pack.lessonId)).toBe(true);
    }
    expect(STEPPED_LEARN_LESSON_IDS).toHaveLength(P0_LESSON_PEDAGOGY.length);
    expect(usesSteppedLearn("planning")).toBe(false);
  });

  it.each(STEPPED_LESSONS)(
    "$slug builds canonical stepped sequence (mini-case only when pack provides one)",
    ({ slug, hasMiniCase, hasDistinctions }) => {
      const pack = getLessonPedagogy(slug);
      expect(pack).toBeDefined();
      const distinctions = distinctionsForPedagogyPack(pack!);
      const steps = buildSteppedLearnSteps(pack!, distinctions);
      const expected = [
        "what",
        "why",
        "recognize",
        "decide",
        ...(hasDistinctions ? (["distinctions"] as const) : []),
        ...(hasMiniCase ? (["mini_case"] as const) : []),
        "takeaway",
      ];
      expect(steps.map((s) => s.kind)).toEqual(expected);
    }
  );

  it.each(STEPPED_LESSONS.filter((l) => l.hasDistinctions))(
    "$slug uses canonical critical distinctions only",
    ({ slug, distinctionIds }) => {
      const pack = getLessonPedagogy(slug)!;
      const distinctions = distinctionsForPedagogyPack(pack);
      const steps = buildSteppedLearnSteps(pack, distinctions);
      const distinctionStep = steps.find((s) => s.kind === "distinctions");
      expect(distinctionStep?.kind).toBe("distinctions");
      if (distinctionStep?.kind !== "distinctions") return;
      expect(distinctionStep.distinctions.map((d) => d.id).sort()).toEqual(
        [...distinctionIds].sort()
      );
    }
  );

  it.each(STEPPED_LESSONS.filter((l) => l.hasMiniCase))(
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

  it("project-lifecycle-basics omits distinctions step when no canonical distinctions exist", () => {
    const pack = getLessonPedagogy("project-lifecycle-basics")!;
    const distinctions = distinctionsForPedagogyPack(pack);
    expect(distinctions).toHaveLength(0);
    const steps = buildSteppedLearnSteps(pack, distinctions);
    expect(steps.some((s) => s.kind === "distinctions")).toBe(false);
  });

  it.each(STEPPED_LESSONS.filter((l) => !l.hasMiniCase))(
    "$slug omits mini-case when pack has no MINI_CASE screen",
    ({ slug }) => {
      const pack = getLessonPedagogy(slug)!;
      expect(pack.screens.some((s) => s.intent === "MINI_CASE")).toBe(false);
      const steps = buildSteppedLearnSteps(pack, distinctionsForPedagogyPack(pack));
      expect(steps.some((s) => s.kind === "mini_case")).toBe(false);
    }
  );

  it.each(STEPPED_LESSONS)(
    "$slug frames ASSESS → ALIGN → DECIDE → ACT from pack content",
    ({ slug, mindsetAssessEn }) => {
      const pack = getLessonPedagogy(slug)!;
      const steps = buildSteppedLearnSteps(pack, distinctionsForPedagogyPack(pack));
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

  it("lessons-learned DECIDE uses canonical DECISION_RULE screen body", () => {
    const pack = getLessonPedagogy("lessons-learned")!;
    const decisionScreen = pack.screens.find((s) => s.intent === "DECISION_RULE");
    expect(decisionScreen).toBeDefined();
    const steps = buildSteppedLearnSteps(pack, distinctionsForPedagogyPack(pack));
    const decide = steps.find((s) => s.kind === "decide");
    expect(decide?.kind).toBe("decide");
    if (decide?.kind !== "decide") return;
    expect(decide.mindset[2].bodyEn).toBe(decisionScreen!.bodyEn);
  });

  it("preserves T07 ≠ T08 distinction mapping", () => {
    const t07 = buildStudyTaskView("PEOPLE-T07").lessons.map((l) => l.slug);
    const t08 = buildStudyTaskView("PEOPLE-T08").lessons.map((l) => l.slug);
    expect(t07).toContain("knowledge-transfer");
    expect(t08).toContain("communication");
    expect(t07).not.toContain("communication");
    expect(t08).not.toContain("knowledge-transfer");
  });

  it("preserves T04 ≠ T07 ≠ T08 primary lesson mappings", () => {
    const t04 = primaryLessonsForEcoTask("PEOPLE-T04");
    const t07 = primaryLessonsForEcoTask("PEOPLE-T07");
    const t08 = primaryLessonsForEcoTask("PEOPLE-T08");
    expect(t04).toContain("stakeholders-basics");
    expect(t07).toContain("knowledge-transfer");
    expect(t08).toContain("communication");
    expect(t04).not.toContain("communication");
    expect(t04).not.toContain("knowledge-transfer");
    expect(t07).not.toContain("communication");
    expect(t08).not.toContain("knowledge-transfer");
  });
});
