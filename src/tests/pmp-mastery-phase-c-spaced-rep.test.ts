/**
 * Phase C — spaced-repetition consolidation (iteration 6/10).
 */

import { readFileSync } from "fs";
import { join } from "path";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import prisma from "@/data/prisma-client";
import { recordQuizAttempt } from "@/modules/assessment-engine/scoring-service";
import {
  buildReviewQueue,
  getNextReviewDate,
} from "@/modules/learning-engine/spaced-repetition";
import { processQuizMasteryForAttempts } from "@/modules/mastery-engine/mastery-runtime-service";
import {
  computeConceptMasteryNextReviewAt,
  countRecentSkillErrors,
  deriveSkillReviewScheduleInput,
} from "@/modules/mastery-engine/mastery-review-schedule";
import {
  assertProtectedBankIntact,
  buildProtectedBankFingerprint,
} from "@/modules/mastery-engine/integrity";
import { ECO_TASK_COUNT } from "@/modules/mastery-engine/eco-taxonomy";
import { buildStudyTaskView } from "@/modules/mastery-engine/pmp-study";
import type { AttemptMasteryInput } from "@/modules/mastery-engine/weakness-model";
import { computeMasteryLevelFromScore } from "@/shared/utils/mastery";
import { PMP_EXAM_BANK_STEMS } from "../../prisma/seed/pmp-exam-bank-data";

const PROTECTED_BANK_AGGREGATE =
  "d18c86618e8cba16c623e8982f362f00e930a8ed5ea8b9c53abb8b5b0df0b1e2";

const REF_NOW = new Date("2026-08-28T14:00:00.000Z");

function attempt(
  correct: boolean,
  offsetMs = 0,
  skillId = "skill-a"
): AttemptMasteryInput {
  return {
    correct,
    difficulty: "MEDIUM",
    cognitiveLevel: "APPLICATION",
    skillId,
    answeredAt: new Date(REF_NOW.getTime() + offsetMs),
  };
}

describe("Phase C — spaced-rep schedule (pure)", () => {
  it("A. nextReviewAt is calculated via spaced-repetition primitive", () => {
    const attempts = [attempt(true)];
    const schedule = deriveSkillReviewScheduleInput(attempts, REF_NOW);
    const level = computeMasteryLevelFromScore(100);
    const expected = getNextReviewDate(
      {
        masteryLevel: level,
        lastReviewedAt: schedule.lastReviewedAt,
        lastAttemptAt: schedule.lastAttemptAt,
        recentErrorCount: schedule.recentErrorCount,
      },
      REF_NOW
    );
    const actual = computeConceptMasteryNextReviewAt(level, schedule, REF_NOW);
    expect(actual.getTime()).toBe(expected.getTime());
    expect(actual.getTime()).toBeGreaterThan(REF_NOW.getTime());
  });

  it("B. weakness signals pull review earlier (canonical repeated-error rule)", () => {
    const weakAttempts = [
      attempt(false, 0),
      attempt(false, 60_000),
      attempt(false, 120_000),
    ];
    const schedule = deriveSkillReviewScheduleInput(weakAttempts, REF_NOW);
    expect(schedule.recentErrorCount).toBeGreaterThanOrEqual(2);

    const weakLevel = computeMasteryLevelFromScore(0);
    const withErrors = computeConceptMasteryNextReviewAt(weakLevel, schedule, REF_NOW);

    const noErrorSchedule = deriveSkillReviewScheduleInput(
      [attempt(true)],
      REF_NOW
    );
    const withoutErrors = computeConceptMasteryNextReviewAt(
      weakLevel,
      noErrorSchedule,
      REF_NOW
    );

    expect(withErrors.getTime()).toBeLessThan(withoutErrors.getTime());
    expect(withErrors.getTime()).toBe(
      getNextReviewDate(
        {
          masteryLevel: weakLevel,
          lastReviewedAt: schedule.lastReviewedAt,
          lastAttemptAt: schedule.lastAttemptAt,
          recentErrorCount: schedule.recentErrorCount,
        },
        REF_NOW
      ).getTime()
    );
  });

  it("C. improvement consolidates with longer interval", () => {
    const weakSchedule = deriveSkillReviewScheduleInput(
      [attempt(false), attempt(false)],
      REF_NOW
    );
    const strongSchedule = deriveSkillReviewScheduleInput(
      [attempt(true), attempt(true), attempt(true), attempt(true), attempt(true)],
      REF_NOW
    );
    const weakLevel = computeMasteryLevelFromScore(0);
    const masteredLevel = computeMasteryLevelFromScore(100);

    const weakDue = computeConceptMasteryNextReviewAt(weakLevel, weakSchedule, REF_NOW);
    const masteredDue = computeConceptMasteryNextReviewAt(
      masteredLevel,
      strongSchedule,
      REF_NOW
    );

    expect(masteredDue.getTime()).toBeGreaterThan(weakDue.getTime());
  });

  it("D. multiple skills keep independent schedules", () => {
    const skillA = [
      attempt(false, 0, "skill-a"),
      attempt(false, 1_000, "skill-a"),
    ];
    const skillB = [
      attempt(true, 0, "skill-b"),
      attempt(true, 1_000, "skill-b"),
      attempt(true, 2_000, "skill-b"),
    ];
    const scheduleA = deriveSkillReviewScheduleInput(skillA, REF_NOW);
    const scheduleB = deriveSkillReviewScheduleInput(skillB, REF_NOW);

    expect(scheduleA.recentErrorCount).toBe(2);
    expect(scheduleB.recentErrorCount).toBe(0);

    const levelA = computeMasteryLevelFromScore(0);
    const levelB = computeMasteryLevelFromScore(100);
    const dueA = computeConceptMasteryNextReviewAt(levelA, scheduleA, REF_NOW);
    const dueB = computeConceptMasteryNextReviewAt(levelB, scheduleB, REF_NOW);

    expect(dueA.getTime()).not.toBe(dueB.getTime());
    expect(countRecentSkillErrors(skillA)).not.toBe(countRecentSkillErrors(skillB));
  });

  it("E. due nextReviewAt is recognized by buildReviewQueue", () => {
    const dueAt = new Date(REF_NOW);
    dueAt.setDate(dueAt.getDate() - 1);
    const queue = buildReviewQueue(
      [
        {
          skillId: "skill-due",
          skillSlug: "skill-due",
          masteryLevel: "LEARNING",
          lastReviewedAt: dueAt,
          nextReviewAt: dueAt,
          attemptCount: 2,
          recentErrorCount: 0,
          lastAttemptAt: dueAt,
          lastAttemptCorrect: true,
        },
      ],
      REF_NOW
    );
    expect(queue.some((q) => q.skillId === "skill-due")).toBe(true);
    expect(queue.some((q) => q.reasonCode === "DUE_TODAY")).toBe(true);
  });

  it("F. future nextReviewAt is not due", () => {
    const future = new Date(REF_NOW);
    future.setDate(future.getDate() + 10);
    const queue = buildReviewQueue(
      [
        {
          skillId: "skill-future",
          skillSlug: "skill-future",
          masteryLevel: "MASTERED",
          lastReviewedAt: REF_NOW,
          nextReviewAt: future,
          attemptCount: 5,
          recentErrorCount: 0,
          lastAttemptAt: REF_NOW,
          lastAttemptCorrect: true,
        },
      ],
      REF_NOW
    );
    expect(queue.some((q) => q.skillId === "skill-future")).toBe(false);
  });

  it("G. determinism — same input + same now yields same result", () => {
    const attempts = [attempt(false), attempt(true, 30_000)];
    const schedule = deriveSkillReviewScheduleInput(attempts, REF_NOW);
    const level = computeMasteryLevelFromScore(50);
    const a = computeConceptMasteryNextReviewAt(level, schedule, REF_NOW);
    const b = computeConceptMasteryNextReviewAt(level, schedule, REF_NOW);
    expect(a.getTime()).toBe(b.getTime());
  });

  it("H. controlled now — no dependency on real clock in pure helpers", () => {
    const fixed = new Date("2025-01-15T08:00:00.000Z");
    const attempts = [attempt(true)];
    const schedule = deriveSkillReviewScheduleInput(attempts, fixed);
    const level = computeMasteryLevelFromScore(100);
    const due = computeConceptMasteryNextReviewAt(level, schedule, fixed);
    const expected = getNextReviewDate(
      {
        masteryLevel: level,
        lastReviewedAt: fixed,
        lastAttemptAt: attempts[0]!.answeredAt,
        recentErrorCount: 0,
      },
      fixed
    );
    expect(due.getTime()).toBe(expected.getTime());
  });

  it("I. mastery-runtime does not import retention.ts at runtime", () => {
    const runtimeSource = readFileSync(
      join(process.cwd(), "src/modules/mastery-engine/mastery-runtime-service.ts"),
      "utf8"
    );
    const scheduleSource = readFileSync(
      join(process.cwd(), "src/modules/mastery-engine/mastery-review-schedule.ts"),
      "utf8"
    );
    expect(runtimeSource).not.toMatch(/from\s+["'].*retention["']/);
    expect(runtimeSource).not.toMatch(/import\s*\(\s*["'].*retention["']\s*\)/);
    expect(runtimeSource).toContain("mastery-review-schedule");
    expect(scheduleSource).toContain("spaced-repetition");
    expect(scheduleSource).not.toMatch(/from\s+["'].*retention["']/);
  });
});

describe("Phase C — spaced-rep runtime (DB)", () => {
  let userId: string;
  let questionId: string;
  let correctOptionId: string;
  let wrongOptionId: string;
  let skillId: string | null;
  const createdAttemptIds: string[] = [];

  beforeAll(async () => {
    const user = await prisma.user.findUnique({
      where: { email: "demo@pla.local" },
    });
    if (!user) throw new Error("Demo user not found — run db:seed first");
    userId = user.id;

    const lesson = await prisma.lesson.findFirst({
      where: { slug: "understanding-income" },
      include: {
        learningItems: {
          include: { questions: { include: { answerOptions: true } } },
        },
      },
    });
    if (!lesson) throw new Error("Lesson not found");
    const quizItem = lesson.learningItems.find((i) => i.type === "QUIZ");
    if (!quizItem) throw new Error("Quiz item not found");
    const question = quizItem.questions[0];
    questionId = question.id;
    skillId = question.skillId;
    const correct = question.answerOptions.find((o) => o.isCorrect);
    const wrong = question.answerOptions.find((o) => !o.isCorrect);
    if (!correct || !wrong) throw new Error("Options not found");
    correctOptionId = correct.id;
    wrongOptionId = wrong.id;
  });

  afterAll(async () => {
    if (createdAttemptIds.length > 0) {
      await prisma.quizAttempt.deleteMany({ where: { id: { in: createdAttemptIds } } });
    }
    if (skillId) {
      await prisma.conceptMastery.deleteMany({
        where: { userId, skillId },
      });
    }
  });

  it("recalculates nextReviewAt after quiz via spaced-repetition", async () => {
    const wrong = await recordQuizAttempt(userId, questionId, [wrongOptionId], undefined, "HIGH");
    createdAttemptIds.push(wrong.attempt.id);
    const wrong2 = await recordQuizAttempt(userId, questionId, [wrongOptionId], undefined, "HIGH");
    createdAttemptIds.push(wrong2.attempt.id);

    await processQuizMasteryForAttempts(userId, [wrong.attempt.id, wrong2.attempt.id], {
      now: REF_NOW,
    });

    if (!skillId) return;

    const mastery = await prisma.conceptMastery.findUnique({
      where: { userId_skillId: { userId, skillId } },
    });
    expect(mastery?.nextReviewAt).not.toBeNull();

    const expected = getNextReviewDate(
      {
        masteryLevel: mastery!.level,
        lastReviewedAt: REF_NOW,
        lastAttemptAt: wrong2.attempt.createdAt,
        recentErrorCount: 2,
      },
      REF_NOW
    );
    expect(mastery!.nextReviewAt!.getTime()).toBe(expected.getTime());
  });

  it("J. ConceptMastery.level stays 3-tier only", async () => {
    const right = await recordQuizAttempt(userId, questionId, [correctOptionId], undefined, "HIGH");
    createdAttemptIds.push(right.attempt.id);
    await processQuizMasteryForAttempts(userId, [right.attempt.id], { now: REF_NOW });

    if (!skillId) return;
    const mastery = await prisma.conceptMastery.findUnique({
      where: { userId_skillId: { userId, skillId } },
    });
    expect(["WEAK", "LEARNING", "MASTERED"]).toContain(mastery?.level);
  });

  it("K. no 7-state values are persisted on ConceptMastery", async () => {
    const forbidden = [
      "UNKNOWN",
      "EXPOSED",
      "DEVELOPING",
      "FRAGILE",
      "FUNCTIONAL",
      "STRONG",
    ] as const;

    const rows = await prisma.conceptMastery.findMany({
      where: { userId },
      select: { level: true },
    });
    for (const row of rows) {
      expect(forbidden).not.toContain(row.level as (typeof forbidden)[number]);
      expect(["WEAK", "LEARNING", "MASTERED"]).toContain(row.level);
    }
  });
});

describe("Phase C — protected bank and ECO guards (spaced-rep)", () => {
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
    expect(t04.task.titleEn).toMatch(/stakeholder/i);
    expect(t07.task.titleEn).toMatch(/knowledge transfer/i);
    expect(t08.task.titleEn).toMatch(/communication/i);
  });
});
