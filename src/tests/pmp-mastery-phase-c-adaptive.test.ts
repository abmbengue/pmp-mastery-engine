/**
 * Phase C — adaptive PMP Study Continue/Start (iteration 5/10).
 */

import { describe, expect, it } from "vitest";
import { buildStudyTaskView } from "@/modules/mastery-engine/pmp-study";
import {
  resolveAdaptiveTaskContinueLesson,
  resolveTaskContinueLesson,
  type AdaptiveTaskHints,
  type TaskLessonProgressSnapshot,
} from "@/modules/mastery-engine/pmp-study-progress";
import {
  assertProtectedBankIntact,
  buildProtectedBankFingerprint,
} from "@/modules/mastery-engine/integrity";
import { ECO_TASK_COUNT } from "@/modules/mastery-engine/eco-taxonomy";
import { PMP_EXAM_BANK_STEMS } from "../../prisma/seed/pmp-exam-bank-data";

const PROTECTED_BANK_AGGREGATE =
  "d18c86618e8cba16c623e8982f362f00e930a8ed5ea8b9c53abb8b5b0df0b1e2";

function snap(
  partial: Partial<TaskLessonProgressSnapshot> & Pick<TaskLessonProgressSnapshot, "status">
): TaskLessonProgressSnapshot {
  return {
    updatedAtMs: null,
    currentPhase: null,
    hasProgressRecord: partial.status !== "NOT_STARTED",
    ...partial,
  };
}

describe("Phase C — adaptive task resolver (pure)", () => {
  const t01 = buildStudyTaskView("PEOPLE-T01");
  const lessons = t01.lessons;

  it("falls back to legacy when no adaptive hints", () => {
    const legacy = resolveTaskContinueLesson(lessons, {});
    const adaptive = resolveAdaptiveTaskContinueLesson(lessons, {}, null);
    expect(adaptive).toEqual(legacy);
  });

  it("falls back to legacy when hints have no matching skills", () => {
    const hints: AdaptiveTaskHints = {
      skillHints: [{ skillId: "unknown-skill", source: "WEAKNESS", priority: 1 }],
      lessonSkillIds: Object.fromEntries(lessons.map((l) => [l.slug, []])),
    };
    const legacy = resolveTaskContinueLesson(lessons, {});
    const adaptive = resolveAdaptiveTaskContinueLesson(lessons, {}, hints);
    expect(adaptive).toEqual(legacy);
  });

  it("IN_PROGRESS always wins over adaptive weakness hint", () => {
    const [first, second] = lessons;
    const skillId = "skill-weak-1";
    const hints: AdaptiveTaskHints = {
      skillHints: [{ skillId, source: "WEAKNESS", priority: 1 }],
      lessonSkillIds: {
        [first!.slug]: [skillId],
        [second!.slug]: [],
      },
    };
    const progress = {
      [second!.slug]: snap({
        status: "IN_PROGRESS",
        updatedAtMs: 9_000,
        hasProgressRecord: true,
        currentPhase: "TEST",
      }),
    };

    const resolution = resolveAdaptiveTaskContinueLesson(lessons, progress, hints);
    expect(resolution?.lessonSlug).toBe(second!.slug);
    expect(resolution?.reason).toBe("IN_PROGRESS_RECENT");
  });

  it("routes weakness hint to linked incomplete lesson", () => {
    const [first, second] = lessons;
    const skillId = "skill-weak-2";
    const hints: AdaptiveTaskHints = {
      skillHints: [{ skillId, source: "WEAKNESS", priority: 1 }],
      lessonSkillIds: {
        [first!.slug]: [],
        [second!.slug]: [skillId],
      },
    };
    const progress = {
      [first!.slug]: snap({
        status: "COMPLETED",
        hasProgressRecord: true,
      }),
    };

    const resolution = resolveAdaptiveTaskContinueLesson(lessons, progress, hints);
    expect(resolution?.lessonSlug).toBe(second!.slug);
    expect(resolution?.reason).toBe("ADAPTIVE_WEAK_SKILL");
    expect(resolution?.action).toBe("START");
  });

  it("prioritizes review-due hint over later weak mastery hint", () => {
    const [first] = lessons;
    const reviewSkill = "skill-review";
    const weakSkill = "skill-weak-late";
    const hints: AdaptiveTaskHints = {
      skillHints: [
        { skillId: reviewSkill, source: "REVIEW_DUE", priority: 10 },
        { skillId: weakSkill, source: "WEAK_MASTERY", priority: 50 },
      ],
      lessonSkillIds: {
        [first!.slug]: [reviewSkill],
        [lessons[1]!.slug]: [weakSkill],
      },
    };

    const resolution = resolveAdaptiveTaskContinueLesson(lessons, {}, hints);
    expect(resolution?.lessonSlug).toBe(first!.slug);
    expect(resolution?.reason).toBe("ADAPTIVE_REVIEW_DUE");
  });

  it("is deterministic for identical inputs", () => {
    const skillA = "skill-a";
    const skillB = "skill-b";
    const hints: AdaptiveTaskHints = {
      skillHints: [
        { skillId: skillB, source: "WEAKNESS", priority: 2 },
        { skillId: skillA, source: "WEAKNESS", priority: 1 },
      ],
      lessonSkillIds: {
        [lessons[0]!.slug]: [skillA],
        [lessons[1]!.slug]: [skillB],
      },
    };

    const a = resolveAdaptiveTaskContinueLesson(lessons, {}, hints);
    const b = resolveAdaptiveTaskContinueLesson(lessons, {}, hints);
    expect(a).toEqual(b);
    expect(a?.lessonSlug).toBe(lessons[0]!.slug);
  });

  it("supports multiple skills mapped to different lessons", () => {
    const skillFirst = "skill-first";
    const skillSecond = "skill-second";
    const hintsFirst: AdaptiveTaskHints = {
      skillHints: [{ skillId: skillFirst, source: "WEAKNESS", priority: 1 }],
      lessonSkillIds: {
        [lessons[0]!.slug]: [skillFirst],
        [lessons[1]!.slug]: [skillSecond],
      },
    };
    const hintsSecond: AdaptiveTaskHints = {
      skillHints: [{ skillId: skillSecond, source: "WEAKNESS", priority: 1 }],
      lessonSkillIds: hintsFirst.lessonSkillIds,
    };

    const firstPick = resolveAdaptiveTaskContinueLesson(lessons, {}, hintsFirst);
    const secondPick = resolveAdaptiveTaskContinueLesson(lessons, {}, hintsSecond);
    expect(firstPick?.lessonSlug).toBe(lessons[0]!.slug);
    expect(secondPick?.lessonSlug).toBe(lessons[1]!.slug);
  });

  it("does not persist 7-state (resolver is read-only / pure)", () => {
    const hints: AdaptiveTaskHints = {
      skillHints: [{ skillId: "s1", source: "WEAKNESS", priority: 1 }],
      lessonSkillIds: { [lessons[0]!.slug]: ["s1"] },
    };
    const result = resolveAdaptiveTaskContinueLesson(lessons, {}, hints);
    expect(result?.reason).toMatch(/^ADAPTIVE_/);
    expect(JSON.stringify(result)).not.toMatch(/FRAGILE|FUNCTIONAL|STRONG/);
  });
});

describe("Phase C — protected bank and ECO guards", () => {
  it("keeps protected bank fingerprint unchanged", () => {
    expect(PMP_EXAM_BANK_STEMS.length).toBe(200);
    expect(buildProtectedBankFingerprint(PMP_EXAM_BANK_STEMS).aggregate).toBe(
      PROTECTED_BANK_AGGREGATE
    );
    expect(
      assertProtectedBankIntact(PMP_EXAM_BANK_STEMS, PROTECTED_BANK_AGGREGATE)
    ).toHaveLength(0);
  });

  it("keeps ECO at 26 tasks", () => {
    expect(ECO_TASK_COUNT).toBe(26);
  });

  it("does not add Q201+ stems", () => {
    const keys = PMP_EXAM_BANK_STEMS.map((q) => q.externalKey);
    expect(Math.max(...keys.map((k) => Number(k.replace("pmp-exam-", ""))))).toBe(200);
  });

  it("preserves T04 ≠ T07 ≠ T08", () => {
    const t04 = buildStudyTaskView("PEOPLE-T04");
    const t07 = buildStudyTaskView("PEOPLE-T07");
    const t08 = buildStudyTaskView("PEOPLE-T08");
    expect(t04.task.id).not.toBe(t07.task.id);
    expect(t07.task.id).not.toBe(t08.task.id);
  });
});
