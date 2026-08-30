/**
 * Phase C4 — Spaced repetition / review scheduling.
 * QuizAttempt → mastery runtime → deriveSkillReviewScheduleInput → getNextReviewDate → ConceptMastery.nextReviewAt
 */

import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import prisma from "@/data/prisma-client";
import { recordQuizAttempt } from "@/modules/assessment-engine/scoring-service";
import * as progressService from "@/modules/learning-engine/progress-service";
import { finishLesson } from "@/modules/learning-engine/lesson-session-service";
import {
  buildReviewQueue,
  getNextReviewDate,
  REVIEW_INTERVALS_DAYS,
} from "@/modules/learning-engine/spaced-repetition";
import { processQuizMasteryForAttempts } from "@/modules/mastery-engine/mastery-runtime-service";
import { resolveMasteryLevelForSkillAttempts } from "@/modules/mastery-engine/mastery-runtime-service";
import {
  computeConceptMasteryNextReviewAt,
  countRecentSkillErrors,
  deriveSkillReviewScheduleInput,
  RECENT_ATTEMPT_WINDOW,
} from "@/modules/mastery-engine/mastery-review-schedule";
import {
  parseConfidenceInput,
  isTestPhaseConfidenceComplete,
} from "@/modules/mastery-engine/confidence";
import {
  weaknessSignalsFromQuizAttempts,
  quizAttemptsToMasteryInputs,
} from "@/modules/mastery-engine/attempt-adapter";
import {
  assertProtectedBankIntact,
  buildProtectedBankFingerprint,
} from "@/modules/mastery-engine/integrity";
import { ECO_TASK_COUNT } from "@/modules/mastery-engine/eco-taxonomy";
import { ECO_DOMAINS } from "@/modules/mastery-engine/pmp-study";
import { buildStudyTaskView } from "@/modules/mastery-engine/pmp-study";
import type { AttemptMasteryInput } from "@/modules/mastery-engine/weakness-model";
import { PMP_EXAM_BANK_STEMS } from "../../prisma/seed/pmp-exam-bank-data";

const PROTECTED_BANK_AGGREGATE =
  "d18c86618e8cba16c623e8982f362f00e930a8ed5ea8b9c53abb8b5b0df0b1e2";

const REF_NOW = new Date("2026-08-28T14:00:00.000Z");

function addDays(d: Date, days: number): Date {
  const out = new Date(d);
  out.setDate(out.getDate() + days);
  return out;
}

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

describe("C4 — interval rules (getNextReviewDate)", () => {
  const baseInput = {
    lastReviewedAt: REF_NOW,
    lastAttemptAt: REF_NOW,
    recentErrorCount: 0,
  };

  it("1. WEAK → review +1 day", () => {
    const due = getNextReviewDate(
      { ...baseInput, masteryLevel: "WEAK" },
      REF_NOW
    );
    expect(due.getTime()).toBe(addDays(REF_NOW, REVIEW_INTERVALS_DAYS.WEAK).getTime());
    expect(REVIEW_INTERVALS_DAYS.WEAK).toBe(1);
  });

  it("2. LEARNING → review +3 days", () => {
    const due = getNextReviewDate(
      { ...baseInput, masteryLevel: "LEARNING" },
      REF_NOW
    );
    expect(due.getTime()).toBe(addDays(REF_NOW, REVIEW_INTERVALS_DAYS.LEARNING).getTime());
    expect(REVIEW_INTERVALS_DAYS.LEARNING).toBe(3);
  });

  it("3. MASTERED → review +7 days", () => {
    const due = getNextReviewDate(
      { ...baseInput, masteryLevel: "MASTERED" },
      REF_NOW
    );
    expect(due.getTime()).toBe(addDays(REF_NOW, REVIEW_INTERVALS_DAYS.MASTERED).getTime());
    expect(REVIEW_INTERVALS_DAYS.MASTERED).toBe(7);
  });

  it("4. recentErrorCount >= 2 applies REPEATED_ERROR_PULL_FORWARD", () => {
    const without = getNextReviewDate(
      { ...baseInput, masteryLevel: "LEARNING", recentErrorCount: 0 },
      REF_NOW
    );
    const withErrors = getNextReviewDate(
      { ...baseInput, masteryLevel: "LEARNING", recentErrorCount: 2 },
      REF_NOW
    );
    const expectedDays =
      REVIEW_INTERVALS_DAYS.LEARNING -
      REVIEW_INTERVALS_DAYS.REPEATED_ERROR_PULL_FORWARD;
    expect(withErrors.getTime()).toBe(addDays(REF_NOW, expectedDays).getTime());
    expect(withErrors.getTime()).toBeLessThan(without.getTime());
  });

  it("5. recentErrorCount = 0 in last 5 attempts", () => {
    const attempts = Array.from({ length: 5 }, (_, i) => attempt(true, i * 1000));
    expect(countRecentSkillErrors(attempts)).toBe(0);
    const schedule = deriveSkillReviewScheduleInput(attempts, REF_NOW);
    expect(schedule.recentErrorCount).toBe(0);
  });

  it("6. recentErrorCount = 1 in last 5 attempts", () => {
    const attempts = [attempt(false), attempt(true, 1000), attempt(true, 2000)];
    expect(countRecentSkillErrors(attempts)).toBe(1);
    const schedule = deriveSkillReviewScheduleInput(attempts, REF_NOW);
    expect(schedule.recentErrorCount).toBe(1);
  });

  it("7. recentErrorCount = 2 in last 5 attempts (window canonical)", () => {
    expect(RECENT_ATTEMPT_WINDOW).toBe(5);
    const attempts = [attempt(false), attempt(false, 1000), attempt(true, 2000)];
    expect(countRecentSkillErrors(attempts)).toBe(2);
    const schedule = deriveSkillReviewScheduleInput(attempts, REF_NOW);
    expect(schedule.recentErrorCount).toBe(2);
  });

  it("8. multiple skills keep independent schedules", () => {
    const skillA = [attempt(false, 0, "skill-a"), attempt(false, 1000, "skill-a")];
    const skillB = [attempt(true, 0, "skill-b"), attempt(true, 1000, "skill-b")];
    const scheduleA = deriveSkillReviewScheduleInput(skillA, REF_NOW);
    const scheduleB = deriveSkillReviewScheduleInput(skillB, REF_NOW);
    expect(scheduleA.recentErrorCount).toBe(2);
    expect(scheduleB.recentErrorCount).toBe(0);

    const dueA = computeConceptMasteryNextReviewAt("WEAK", scheduleA, REF_NOW);
    const dueB = computeConceptMasteryNextReviewAt("MASTERED", scheduleB, REF_NOW);
    expect(dueA.getTime()).not.toBe(dueB.getTime());
  });

  it("9. lastReviewedAt is the scheduling base when present", () => {
    const reviewed = new Date("2026-08-20T10:00:00.000Z");
    const lastAttempt = new Date("2026-08-25T10:00:00.000Z");
    const due = getNextReviewDate(
      {
        masteryLevel: "LEARNING",
        lastReviewedAt: reviewed,
        lastAttemptAt: lastAttempt,
        recentErrorCount: 0,
      },
      REF_NOW
    );
    expect(due.getTime()).toBe(addDays(reviewed, 3).getTime());
  });

  it("10. falls back to lastAttemptAt when lastReviewedAt absent", () => {
    const lastAttempt = new Date("2026-08-25T10:00:00.000Z");
    const due = getNextReviewDate(
      {
        masteryLevel: "LEARNING",
        lastReviewedAt: null,
        lastAttemptAt: lastAttempt,
        recentErrorCount: 0,
      },
      REF_NOW
    );
    expect(due.getTime()).toBe(addDays(lastAttempt, 3).getTime());
  });

  it("11. falls back to now when lastReviewedAt and lastAttemptAt absent", () => {
    const due = getNextReviewDate(
      {
        masteryLevel: "LEARNING",
        lastReviewedAt: null,
        lastAttemptAt: null,
        recentErrorCount: 0,
      },
      REF_NOW
    );
    expect(due.getTime()).toBe(addDays(REF_NOW, 3).getTime());
  });

  it("15. determinism with controlled now", () => {
    const attempts = [attempt(false), attempt(true, 30_000)];
    const schedule = deriveSkillReviewScheduleInput(attempts, REF_NOW);
    const a = computeConceptMasteryNextReviewAt("LEARNING", schedule, REF_NOW);
    const b = computeConceptMasteryNextReviewAt("LEARNING", schedule, REF_NOW);
    expect(a.getTime()).toBe(b.getTime());
  });

  it("16. no dependency on real clock in pure helpers", () => {
    const fixed = new Date("2025-01-15T08:00:00.000Z");
    const attempts = [attempt(true)];
    const schedule = deriveSkillReviewScheduleInput(attempts, fixed);
    const due = computeConceptMasteryNextReviewAt("MASTERED", schedule, fixed);
    expect(due.getTime()).toBe(
      getNextReviewDate(
        {
          masteryLevel: "MASTERED",
          lastReviewedAt: fixed,
          lastAttemptAt: attempts[0]!.answeredAt,
          recentErrorCount: 0,
        },
        fixed
      ).getTime()
    );
  });
});

describe("C4 — buildReviewQueue", () => {
  it("13. recognizes a review that is due today", () => {
    const dueAt = addDays(REF_NOW, -1);
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

  it("14. future review is not due in queue", () => {
    const future = addDays(REF_NOW, 10);
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
});

describe("C4 — runtime persistence (DB)", () => {
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
    correctOptionId = question.answerOptions.find((o) => o.isCorrect)!.id;
    wrongOptionId = question.answerOptions.find((o) => !o.isCorrect)!.id;
  });

  afterAll(async () => {
    if (createdAttemptIds.length > 0) {
      await prisma.quizAttempt.deleteMany({ where: { id: { in: createdAttemptIds } } });
    }
    if (skillId) {
      await prisma.quizAttempt.deleteMany({
        where: { userId, question: { skillId } },
      });
      await prisma.conceptMastery.deleteMany({ where: { userId, skillId } });
    }
  });

  it("12. nextReviewAt persisted in ConceptMastery via canonical runtime", async () => {
    const wrong = await recordQuizAttempt(userId, questionId, [wrongOptionId], undefined, "HIGH");
    const wrong2 = await recordQuizAttempt(userId, questionId, [wrongOptionId], undefined, "HIGH");
    createdAttemptIds.push(wrong.attempt.id, wrong2.attempt.id);

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

  it("18. ConceptMastery.level stays 3-tier only", async () => {
    if (!skillId) return;
    const mastery = await prisma.conceptMastery.findUnique({
      where: { userId_skillId: { userId, skillId } },
    });
    expect(["WEAK", "LEARNING", "MASTERED"]).toContain(mastery?.level);
  });

  it("19. 7-state never persisted on ConceptMastery", async () => {
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
      take: 30,
    });
    for (const row of rows) {
      expect(forbidden).not.toContain(row.level as (typeof forbidden)[number]);
      expect(["WEAK", "LEARNING", "MASTERED"]).toContain(row.level);
    }
  });

  it("recordQuizAttempt and finishLesson do not write nextReviewAt independently", async () => {
    const upsertSpy = vi.spyOn(progressService, "updateConceptMastery");
    await recordQuizAttempt(userId, questionId, [correctOptionId], undefined, "MEDIUM");
    expect(upsertSpy).not.toHaveBeenCalled();
    upsertSpy.mockClear();

    const lesson = await prisma.lesson.findFirst({ where: { slug: "understanding-income" } });
    if (lesson) {
      await finishLesson(userId, lesson.id, 120, 80, skillId);
    }
    expect(upsertSpy).not.toHaveBeenCalled();
    upsertSpy.mockRestore();
  });
});

describe("C4 — write path audit", () => {
  it("17. retention.ts absent from runtime write path", () => {
    const runtimeSource = readFileSync(
      join(process.cwd(), "src/modules/mastery-engine/mastery-runtime-service.ts"),
      "utf8"
    );
    const scheduleSource = readFileSync(
      join(process.cwd(), "src/modules/mastery-engine/mastery-review-schedule.ts"),
      "utf8"
    );
    const progressSource = readFileSync(
      join(process.cwd(), "src/modules/learning-engine/progress-service.ts"),
      "utf8"
    );
    expect(runtimeSource).not.toMatch(/from\s+["'].*retention["']/);
    expect(scheduleSource).not.toMatch(/from\s+["'].*retention["']/);
    expect(progressSource).toContain("getNextReviewDate");
    expect(progressSource).not.toMatch(/from\s+["'].*retention["']/);
    expect(runtimeSource).toContain("deriveSkillReviewScheduleInput");
    expect(runtimeSource).toContain("updateConceptMastery");
  });

  it("processQuizMasteryForAttempts injects now into updateConceptMastery schedule", () => {
    const runtimeSource = readFileSync(
      join(process.cwd(), "src/modules/mastery-engine/mastery-runtime-service.ts"),
      "utf8"
    );
    expect(runtimeSource).toContain("deriveSkillReviewScheduleInput(skillInputs, now)");
    expect(runtimeSource).toContain("now,");
  });
});

describe("C4 — C1/C2/C3 non-regression", () => {
  it("20. C1 confidence helpers intact", () => {
    expect(parseConfidenceInput(3)).toBe("MEDIUM");
    expect(parseConfidenceInput(0)).toBeNull();
    expect(isTestPhaseConfidenceComplete(["q"], { q: 2 })).toBe(true);
  });

  it("21. C2 weakness wiring intact", () => {
    const answeredAt = new Date("2026-08-28T12:00:00.000Z");
    const signals = weaknessSignalsFromQuizAttempts(
      [
        {
          questionId: "q-1",
          isCorrect: false,
          confidenceLevel: "VERY_HIGH",
          answeredAt,
        },
      ],
      {
        "q-1": {
          id: "q-1",
          externalKey: "pmp-exam-050",
          skillId: "skill-c4",
          conceptSlug: "concept-c4",
          ecoTaskCode: "PE-01",
          examDifficulty: "MEDIUM",
          difficulty: 2,
          learningObjective: "APPLY",
          masteryMetadata: {
            ecoTaskId: "PEOPLE-T01",
            primaryConceptId: "concept-c4",
            primarySkillId: "skill-c4",
            cognitiveLevel: "APPLICATION",
            difficulty: "MEDIUM",
            misconceptionIds: [],
          },
        },
      }
    );
    expect(signals.some((s) => s.skillId === "skill-c4")).toBe(true);
    const inputs = quizAttemptsToMasteryInputs(
      [
        {
          questionId: "q-1",
          isCorrect: false,
          confidenceLevel: "HIGH",
          answeredAt,
        },
      ],
      {}
    );
    expect(inputs[0]!.confidence).toBe("HIGH");
  });

  it("22. C3 mastery tier resolution intact", () => {
    const inputs = [
      attempt(true),
      attempt(true),
      attempt(false, 3000),
    ];
    expect(resolveMasteryLevelForSkillAttempts(inputs)).toBe("LEARNING");
  });
});

describe("C4 — garde-fous", () => {
  it("fingerprint / ECO / T04≠T07≠T08 / Q201+ / migrations", () => {
    expect(PMP_EXAM_BANK_STEMS.length).toBe(200);
    expect(buildProtectedBankFingerprint(PMP_EXAM_BANK_STEMS).aggregate).toBe(
      PROTECTED_BANK_AGGREGATE
    );
    expect(
      assertProtectedBankIntact(PMP_EXAM_BANK_STEMS, PROTECTED_BANK_AGGREGATE)
    ).toHaveLength(0);

    expect(ECO_TASK_COUNT).toBe(26);
    expect(ECO_DOMAINS.find((d) => d.id === "PEOPLE")!.taskCount).toBe(8);
    expect(ECO_DOMAINS.find((d) => d.id === "PROCESS")!.taskCount).toBe(10);
    expect(ECO_DOMAINS.find((d) => d.id === "BUSINESS")!.taskCount).toBe(8);

    const t04 = buildStudyTaskView("PEOPLE-T04");
    const t07 = buildStudyTaskView("PEOPLE-T07");
    const t08 = buildStudyTaskView("PEOPLE-T08");
    expect(t04.task.id).not.toBe(t07.task.id);
    expect(t07.task.id).not.toBe(t08.task.id);

    const keys = PMP_EXAM_BANK_STEMS.map((q) => q.externalKey);
    expect(Math.max(...keys.map((k) => Number(k.replace("pmp-exam-", ""))))).toBe(
      200
    );

    const dirs = readdirSync(join(process.cwd(), "prisma/migrations"), {
      withFileTypes: true,
    })
      .filter((e) => e.isDirectory())
      .map((e) => e.name);
    expect(dirs).toHaveLength(10);
  });
});
