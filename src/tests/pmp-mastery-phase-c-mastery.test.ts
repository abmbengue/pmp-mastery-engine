/**
 * Phase C3 — Mastery runtime: canonical ConceptMastery write path.
 * QuizAttempt → adapter → buildWeaknessSignals → mastery tier → updateConceptMastery.
 */

import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import { beforeAll, describe, expect, it, vi } from "vitest";
import prisma from "@/data/prisma-client";
import { recordQuizAttempt } from "@/modules/assessment-engine/scoring-service";
import * as progressService from "@/modules/learning-engine/progress-service";
import { finishLesson } from "@/modules/learning-engine/lesson-session-service";
import {
  processQuizMasteryForAttempts,
  resolveMasteryLevelForSkillAttempts,
} from "@/modules/mastery-engine/mastery-runtime-service";
import * as attemptAdapter from "@/modules/mastery-engine/attempt-adapter";
import * as weaknessModel from "@/modules/mastery-engine/weakness-model";
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
import { computeMasteryLevelFromScore } from "@/shared/utils/mastery";
import {
  computeWeightedPerformance,
  type AttemptMasteryInput,
} from "@/modules/mastery-engine/weakness-model";
import { LEGACY_CONCEPT_MASTERY_WRITERS } from "@/modules/mastery-engine/legacy-mastery-writers";
import { PMP_EXAM_BANK_STEMS } from "../../prisma/seed/pmp-exam-bank-data";

const PROTECTED_BANK_AGGREGATE =
  "d18c86618e8cba16c623e8982f362f00e930a8ed5ea8b9c53abb8b5b0df0b1e2";

const REF_NOW = new Date("2026-08-28T12:00:00.000Z");

describe("C3 — pure mastery tier resolution", () => {
  const answeredAt = new Date("2026-08-28T12:00:00.000Z");

  function input(correct: boolean): AttemptMasteryInput {
    return {
      correct,
      difficulty: "MEDIUM",
      cognitiveLevel: "APPLICATION",
      answeredAt,
      skillId: "skill-test",
    };
  }

  it("WEAK when weighted performance < 60", () => {
    const inputs = [input(false), input(false)];
    expect(computeWeightedPerformance(inputs)).toBe(0);
    expect(resolveMasteryLevelForSkillAttempts(inputs)).toBe("WEAK");
    expect(computeMasteryLevelFromScore(0)).toBe("WEAK");
  });

  it("LEARNING when weighted performance is 60–79", () => {
    const inputs = [input(true), input(true), input(false)];
    const perf = computeWeightedPerformance(inputs);
    expect(perf).toBeGreaterThanOrEqual(60);
    expect(perf).toBeLessThan(80);
    expect(resolveMasteryLevelForSkillAttempts(inputs)).toBe("LEARNING");
  });

  it("MASTERED when weighted performance >= 80", () => {
    const inputs = [input(true), input(true)];
    expect(computeWeightedPerformance(inputs)).toBe(100);
    expect(resolveMasteryLevelForSkillAttempts(inputs)).toBe("MASTERED");
  });

  it("deterministic: same inputs → same mastery level", () => {
    const inputs = [input(true), input(false), input(true)];
    const a = resolveMasteryLevelForSkillAttempts(inputs);
    const b = resolveMasteryLevelForSkillAttempts(inputs);
    expect(a).toBe(b);
    expect(a).toBe(computeMasteryLevelFromScore(computeWeightedPerformance(inputs)));
  });

  it("empty attempt list yields WEAK (0% weighted performance)", () => {
    expect(resolveMasteryLevelForSkillAttempts([])).toBe("WEAK");
    expect(computeWeightedPerformance([])).toBe(0);
  });
});

describe("C3 — processQuizMasteryForAttempts runtime (DB)", () => {
  let userId: string;
  let questionId: string;
  let correctOptionId: string;
  let wrongOptionId: string;
  let skillId: string | null;

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

  async function resetSkillRuntimeState() {
    if (!skillId) return;
    await prisma.quizAttempt.deleteMany({
      where: { userId, question: { skillId } },
    });
    await prisma.conceptMastery.deleteMany({ where: { userId, skillId } });
  }

  it("correct attempt persists MASTERED when performance is strong", async () => {
    if (!skillId) return;
    await resetSkillRuntimeState();

    const { attempt } = await recordQuizAttempt(
      userId,
      questionId,
      [correctOptionId],
      undefined,
      "HIGH"
    );
    await processQuizMasteryForAttempts(userId, [attempt.id], { now: REF_NOW });

    const row = await prisma.conceptMastery.findUnique({
      where: { userId_skillId: { userId, skillId } },
    });
    expect(row?.level).toBe("MASTERED");
  });

  it("incorrect attempt drives WEAK mastery when performance collapses", async () => {
    if (!skillId) return;
    await resetSkillRuntimeState();

    const attempts = [];
    for (let i = 0; i < 3; i += 1) {
      const { attempt } = await recordQuizAttempt(
        userId,
        questionId,
        [wrongOptionId],
        undefined,
        "VERY_HIGH"
      );
      attempts.push(attempt.id);
    }
    await processQuizMasteryForAttempts(userId, attempts, { now: REF_NOW });

    const row = await prisma.conceptMastery.findUnique({
      where: { userId_skillId: { userId, skillId } },
    });
    expect(row?.level).toBe("WEAK");
  });

  it("multiple attempts aggregate into one ConceptMastery upsert per skill", async () => {
    if (!skillId) return;
    await resetSkillRuntimeState();
    const upsertSpy = vi.spyOn(progressService, "updateConceptMastery");

    const first = await recordQuizAttempt(userId, questionId, [correctOptionId], undefined, "MEDIUM");
    const second = await recordQuizAttempt(userId, questionId, [wrongOptionId], undefined, "LOW");

    await processQuizMasteryForAttempts(
      userId,
      [first.attempt.id, second.attempt.id],
      { now: REF_NOW }
    );

    const callsForSkill = upsertSpy.mock.calls.filter((c) => c[1] === skillId);
    expect(callsForSkill).toHaveLength(1);
    expect(["WEAK", "LEARNING", "MASTERED"]).toContain(callsForSkill[0]![2]);

    upsertSpy.mockRestore();
  });

  it("uses attempt-adapter and buildWeaknessSignals in canonical order", async () => {
    const adapterSpy = vi.spyOn(attemptAdapter, "quizAttemptsToMasteryInputs");
    const weaknessSpy = vi.spyOn(weaknessModel, "buildWeaknessSignals");

    const { attempt } = await recordQuizAttempt(
      userId,
      questionId,
      [wrongOptionId],
      undefined,
      "HIGH"
    );
    await processQuizMasteryForAttempts(userId, [attempt.id], { now: REF_NOW });

    expect(adapterSpy).toHaveBeenCalled();
    expect(weaknessSpy).toHaveBeenCalled();
    const weaknessArg = weaknessSpy.mock.calls[0]![0] as AttemptMasteryInput[];
    expect(Array.isArray(weaknessArg)).toBe(true);

    adapterSpy.mockRestore();
    weaknessSpy.mockRestore();
  });

  it("returns empty result for no attempts / invalid attempt ids", async () => {
    expect(await processQuizMasteryForAttempts(userId, [])).toEqual({
      weaknessSignals: [],
      updatedSkillIds: [],
      skillSnapshots: [],
    });
    expect(
      await processQuizMasteryForAttempts(userId, ["nonexistent-attempt-id"], {
        now: REF_NOW,
      })
    ).toEqual({
      weaknessSignals: [],
      updatedSkillIds: [],
      skillSnapshots: [],
    });
  });

  it("ConceptMastery stays 3-tier only — 7-state never persisted", async () => {
    const schema = readFileSync(
      join(process.cwd(), "prisma/schema.prisma"),
      "utf8"
    );
    const enumBlock = schema.slice(
      schema.indexOf("enum MasteryLevel"),
      schema.indexOf("enum MasteryLevel") + 120
    );
    expect(enumBlock).toContain("WEAK");
    expect(enumBlock).toContain("LEARNING");
    expect(enumBlock).toContain("MASTERED");
    expect(enumBlock).not.toMatch(/EXPOSED|FRAGILE|FUNCTIONAL|STRONG|UNKNOWN/);

    const { attempt } = await recordQuizAttempt(userId, questionId, [correctOptionId]);
    await processQuizMasteryForAttempts(userId, [attempt.id], { now: REF_NOW });

    const rows = await prisma.conceptMastery.findMany({
      where: { userId },
      select: { level: true },
      take: 20,
    });
    for (const row of rows) {
      expect(["WEAK", "LEARNING", "MASTERED"]).toContain(row.level);
    }
  });

  it("7-state may appear in display snapshots but not in DB level column", async () => {
    const { attempt } = await recordQuizAttempt(userId, questionId, [correctOptionId], undefined, "HIGH");
    const result = await processQuizMasteryForAttempts(userId, [attempt.id], { now: REF_NOW });

    if (skillId) {
      const snap = result.skillSnapshots.find((s) => s.skillId === skillId);
      expect(snap?.masteryState).toBeDefined();
      const row = await prisma.conceptMastery.findUnique({
        where: { userId_skillId: { userId, skillId } },
      });
      expect(row?.level).not.toMatch(/EXPOSED|FRAGILE|FUNCTIONAL|STRONG/);
    }
  });
});

describe("C3 — write path separation", () => {
  let userId: string;
  let questionId: string;
  let lessonId: string;
  let correctOptionId: string;
  let skillId: string | null;

  beforeAll(async () => {
    const user = await prisma.user.findUnique({
      where: { email: "demo@pla.local" },
    });
    if (!user) throw new Error("Demo user not found");
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
    lessonId = lesson.id;
    const quizItem = lesson.learningItems.find((i) => i.type === "QUIZ");
    const question = quizItem?.questions[0];
    if (!question) throw new Error("Question not found");
    questionId = question.id;
    skillId = question.skillId;
    correctOptionId = question.answerOptions.find((o) => o.isCorrect)!.id;
  });

  it("recordQuizAttempt does not call updateConceptMastery", async () => {
    const upsertSpy = vi.spyOn(progressService, "updateConceptMastery");
    const scoringSource = readFileSync(
      join(process.cwd(), "src/modules/assessment-engine/scoring-service.ts"),
      "utf8"
    );
    expect(scoringSource).not.toContain("updateConceptMastery");

    await recordQuizAttempt(userId, questionId, [correctOptionId], undefined, "MEDIUM");
    expect(upsertSpy).not.toHaveBeenCalled();
    upsertSpy.mockRestore();
  });

  it("finishLesson does not call updateConceptMastery", async () => {
    const upsertSpy = vi.spyOn(progressService, "updateConceptMastery");
    const finishSource = readFileSync(
      join(process.cwd(), "src/modules/learning-engine/lesson-session-service.ts"),
      "utf8"
    );
    expect(finishSource).not.toContain("updateConceptMastery");

    await finishLesson(userId, lessonId, 180, 85, skillId);
    expect(upsertSpy).not.toHaveBeenCalled();
    upsertSpy.mockRestore();
  });

  it("documents legacy writers outside canonical lesson path", () => {
    expect(LEGACY_CONCEPT_MASTERY_WRITERS).toHaveLength(3);
    const paths = LEGACY_CONCEPT_MASTERY_WRITERS.map((w) => w.modulePath);
    expect(paths).toContain("src/modules/assessment-engine/exam-service.ts");
    expect(paths).toContain("src/app/api/simulation/complete/route.ts");
    expect(paths).toContain("src/modules/demo/demo-user-data.ts");
    expect(
      LEGACY_CONCEPT_MASTERY_WRITERS.every((w) => !w.usesCanonicalPipeline)
    ).toBe(true);
  });

  it("quiz attempt API routes through processQuizMasteryForAttempts", () => {
    const routeSource = readFileSync(
      join(process.cwd(), "src/app/api/quiz/attempt/route.ts"),
      "utf8"
    );
    expect(routeSource).toContain("processQuizMasteryForAttempts");
    expect(routeSource).not.toContain("updateConceptMastery");
  });
});

describe("C3 — C1/C2 non-regression", () => {
  it("C1 confidence helpers still work", () => {
    expect(parseConfidenceInput(3)).toBe("MEDIUM");
    expect(isTestPhaseConfidenceComplete(["q1"], { q1: 4 })).toBe(true);
    expect(parseConfidenceInput(0)).toBeNull();
  });

  it("C2 weakness wiring still feeds buildWeaknessSignals", () => {
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
          externalKey: "pmp-exam-010",
          skillId: "skill-regression",
          conceptSlug: "concept-a",
          ecoTaskCode: "PE-01",
          examDifficulty: "MEDIUM",
          difficulty: 2,
          learningObjective: "APPLY",
          masteryMetadata: {
            ecoTaskId: "PEOPLE-T01",
            primaryConceptId: "concept-a",
            primarySkillId: "skill-regression",
            cognitiveLevel: "APPLICATION",
            difficulty: "MEDIUM",
            misconceptionIds: [],
          },
        },
      }
    );
    expect(signals.some((s) => s.skillId === "skill-regression")).toBe(true);
    const inputs = quizAttemptsToMasteryInputs(
      [
        {
          questionId: "q-1",
          isCorrect: false,
          confidenceLevel: "VERY_HIGH",
          answeredAt,
        },
      ],
      {}
    );
    expect(inputs[0]!.confidence).toBe("VERY_HIGH");
  });
});

describe("C3 — garde-fous", () => {
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
