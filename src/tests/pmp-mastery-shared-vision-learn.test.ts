/**
 * Phase B.3.2 P1 — shared-vision interactive LEARN steps.
 */

import { describe, expect, it } from "vitest";
import { getLessonPedagogy } from "@/modules/mastery-engine/lesson-pedagogy";
import { distinctionsForEcoTask } from "@/modules/mastery-engine/critical-distinctions";
import {
  buildSharedVisionLearnSteps,
  selectSharedVisionMiniCaseChoices,
  usesSteppedLearn,
} from "@/modules/mastery-engine/pedagogy-shared-vision-steps";

describe("shared-vision interactive LEARN steps", () => {
  const pack = getLessonPedagogy("shared-vision");
  const miniCaseScreen = pack!.screens.find((s) => s.intent === "MINI_CASE");

  it("enables stepped flow only for shared-vision", () => {
    expect(usesSteppedLearn("shared-vision")).toBe(true);
    expect(usesSteppedLearn("communication")).toBe(false);
    expect(usesSteppedLearn("knowledge-transfer")).toBe(false);
  });

  it("builds WHAT → WHY → RECOGNIZE → DECIDE → distinctions → mini-case → takeaway", () => {
    const distinctions = distinctionsForEcoTask("PEOPLE-T01");
    const steps = buildSharedVisionLearnSteps(pack!, distinctions);
    expect(steps.map((s) => s.kind)).toEqual([
      "what",
      "why",
      "recognize",
      "decide",
      "distinctions",
      "mini_case",
      "takeaway",
    ]);
  });

  it("uses canonical critical distinctions only (no inline pack duplicates)", () => {
    const distinctions = distinctionsForEcoTask("PEOPLE-T01");
    const steps = buildSharedVisionLearnSteps(pack!, distinctions);
    const distinctionStep = steps.find((s) => s.kind === "distinctions");
    expect(distinctionStep?.kind).toBe("distinctions");
    if (distinctionStep?.kind !== "distinctions") return;

    expect(distinctionStep.distinctions.map((d) => d.id)).toEqual([
      "dist-vision-goal-value",
      "dist-deliverable-outcome-benefit-value",
    ]);
    expect(
      distinctionStep.distinctions.some((d) => d.id === "dist-deliverable-outcome-benefit-value")
    ).toBe(true);
  });

  it("limits mini-case to three conceptual choices with one correct answer", () => {
    expect(miniCaseScreen).toBeDefined();
    const choices = selectSharedVisionMiniCaseChoices(miniCaseScreen!);
    expect(choices).toHaveLength(3);
    expect(choices.filter((c) => c.correct).length).toBe(1);
    expect(choices.find((c) => c.correct)?.id).toBe("b");
    expect(choices.map((c) => c.id)).toEqual(["b", "a", "c"]);
  });

  it("frames PMP mindset ASSESS → ALIGN → DECIDE → ACT from existing pack content", () => {
    const distinctions = distinctionsForEcoTask("PEOPLE-T01");
    const steps = buildSharedVisionLearnSteps(pack!, distinctions);
    const decide = steps.find((s) => s.kind === "decide");
    expect(decide?.kind).toBe("decide");
    if (decide?.kind !== "decide") return;

    expect(decide.mindset.map((m) => m.phase)).toEqual([
      "ASSESS",
      "ALIGN",
      "DECIDE",
      "ACT",
    ]);
    expect(decide.mindset[0].bodyEn).toMatch(/expectations diverge/i);
    expect(decide.mindset[1].bodyEn).toMatch(/Project vision/);
    expect(decide.mindset[2].bodyEn).toMatch(/Whom to involve/i);
    expect(decide.mindset[3].bodyEn).toMatch(/Before executing/i);
  });

  it("includes recognition cues from misconceptions and exam cues", () => {
    const distinctions = distinctionsForEcoTask("PEOPLE-T01");
    const steps = buildSharedVisionLearnSteps(pack!, distinctions);
    const recognize = steps.find((s) => s.kind === "recognize");
    expect(recognize?.kind).toBe("recognize");
    if (recognize?.kind !== "recognize") return;

    expect(recognize.cues.length).toBeGreaterThanOrEqual(3);
    expect(recognize.cues.some((c) => c.en.includes("Trap:"))).toBe(true);
    expect(recognize.cues.some((c) => c.en.includes("align vision"))).toBe(true);
  });
});
