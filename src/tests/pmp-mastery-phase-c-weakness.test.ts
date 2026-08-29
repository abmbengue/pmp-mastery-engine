/**
 * Phase C2 — Weakness wiring: QuizAttempt → attempt-adapter → buildWeaknessSignals.
 * Does not implement C3 mastery runtime writes.
 */

import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import { beforeAll, describe, expect, it, vi } from "vitest";
import prisma from "@/data/prisma-client";
import { recordQuizAttempt } from "@/modules/assessment-engine/scoring-service";
import * as progressService from "@/modules/learning-engine/progress-service";
import {
  quizAttemptToMasteryInput,
  quizAttemptsToMasteryInputs,
  toQuizAttemptObservation,
  weaknessSignalsFromQuizAttempts,
} from "@/modules/mastery-engine/attempt-adapter";
import {
  assertProtectedBankIntact,
  buildProtectedBankFingerprint,
} from "@/modules/mastery-engine/integrity";
import { ECO_TASK_COUNT } from "@/modules/mastery-engine/eco-taxonomy";
import { ECO_DOMAINS } from "@/modules/mastery-engine/pmp-study";
import { buildStudyTaskView } from "@/modules/mastery-engine/pmp-study";
import {
  buildWeaknessSignals,
  computeWeightedPerformance,
} from "@/modules/mastery-engine/weakness-model";
import { PMP_EXAM_BANK_STEMS } from "../../prisma/seed/pmp-exam-bank-data";

const PROTECTED_BANK_AGGREGATE =
  "d18c86618e8cba16c623e8982f362f00e930a8ed5ea8b9c53abb8b5b0df0b1e2";

const answeredAt = new Date("2026-08-28T12:00:00.000Z");

const baseQuestion = {
  id: "q-1",
  externalKey: "pmp-exam-001",
  skillId: "skill-db-1",
  conceptSlug: "knowledge-transfer",
  ecoTaskCode: "PE-07",
  examDifficulty: "MEDIUM" as const,
  difficulty: 2,
  learningObjective: "APPLY" as const,
  masteryMetadata: {
    ecoTaskId: "PEOPLE-T07",
    primaryConceptId: "knowledge-transfer",
    primarySkillId: "skill-enable-knowledge-transfer",
    cognitiveLevel: "APPLICATION",
    difficulty: "MEDIUM",
    misconceptionIds: ["mc-risk-issue"],
  },
};

describe("C2 — QuizAttempt → AttemptMasteryInput", () => {
  it("maps a single QuizAttempt observation to AttemptMasteryInput", () => {
    const input = quizAttemptToMasteryInput(
      {
        questionId: "q-1",
        isCorrect: true,
        confidenceLevel: "HIGH",
        answeredAt,
      },
      baseQuestion
    );
    expect(input.correct).toBe(true);
    expect(input.skillId).toBe("skill-db-1");
    expect(input.conceptId).toBe("knowledge-transfer");
    expect(input.ecoTaskId).toBe("PEOPLE-T07");
    expect(input.confidence).toBe("HIGH");
    expect(input.cognitiveLevel).toBe("APPLICATION");
    expect(input.questionExternalKey).toBe("pmp-exam-001");
    expect(input.misconceptionId).toBe("mc-risk-issue");
    expect(input.answeredAt).toEqual(answeredAt);
  });

  it("maps multiple attempts without collapsing them", () => {
    const inputs = quizAttemptsToMasteryInputs(
      [
        {
          questionId: "q-1",
          isCorrect: false,
          confidenceLevel: "MEDIUM",
          answeredAt,
        },
        {
          questionId: "q-2",
          isCorrect: true,
          confidenceLevel: "LOW",
          answeredAt: new Date("2026-08-28T12:01:00.000Z"),
        },
      ],
      {
        "q-1": { ...baseQuestion, id: "q-1" },
        "q-2": {
          ...baseQuestion,
          id: "q-2",
          externalKey: "pmp-exam-002",
          skillId: "skill-db-2",
        },
      }
    );
    expect(inputs).toHaveLength(2);
    expect(inputs[0]!.correct).toBe(false);
    expect(inputs[1]!.correct).toBe(true);
    expect(inputs[0]!.skillId).toBe("skill-db-1");
    expect(inputs[1]!.skillId).toBe("skill-db-2");
  });

  it("maps correct attempts", () => {
    const input = quizAttemptToMasteryInput(
      {
        questionId: "q-1",
        isCorrect: true,
        confidenceLevel: "MEDIUM",
        answeredAt,
      },
      baseQuestion
    );
    expect(input.correct).toBe(true);
  });

  it("maps incorrect attempts", () => {
    const input = quizAttemptToMasteryInput(
      {
        questionId: "q-1",
        isCorrect: false,
        confidenceLevel: "VERY_HIGH",
        answeredAt,
      },
      baseQuestion
    );
    expect(input.correct).toBe(false);
    expect(input.confidence).toBe("VERY_HIGH");
  });

  it("preserves confidenceLevel when valid", () => {
    for (const level of ["VERY_LOW", "LOW", "MEDIUM", "HIGH", "VERY_HIGH"] as const) {
      const input = quizAttemptToMasteryInput(
        {
          questionId: "q-1",
          isCorrect: true,
          confidenceLevel: level,
          answeredAt,
        },
        baseQuestion
      );
      expect(input.confidence).toBe(level);
    }
  });

  it("preserves null confidence and rejects invalid confidence strings", () => {
    expect(
      quizAttemptToMasteryInput(
        {
          questionId: "q-1",
          isCorrect: true,
          confidenceLevel: null,
          answeredAt,
        },
        baseQuestion
      ).confidence
    ).toBeNull();
    expect(
      quizAttemptToMasteryInput(
        {
          questionId: "q-1",
          isCorrect: true,
          confidenceLevel: "NOT_A_LEVEL",
          answeredAt,
        },
        baseQuestion
      ).confidence
    ).toBeNull();
  });

  it("associates skillId from question context", () => {
    const input = quizAttemptToMasteryInput(
      {
        questionId: "q-1",
        isCorrect: false,
        confidenceLevel: "LOW",
        answeredAt,
      },
      { ...baseQuestion, skillId: "skill-assoc-9" }
    );
    expect(input.skillId).toBe("skill-assoc-9");
  });

  it("preserves timestamp answeredAt exactly", () => {
    const ts = new Date("2026-01-15T08:30:00.000Z");
    const input = quizAttemptToMasteryInput(
      {
        questionId: "q-1",
        isCorrect: true,
        confidenceLevel: "HIGH",
        answeredAt: ts,
      },
      baseQuestion
    );
    expect(input.answeredAt).toBe(ts);
    expect(input.answeredAt.toISOString()).toBe("2026-01-15T08:30:00.000Z");
  });

  it("handles invalid / incomplete data explicitly", () => {
    expect(
      toQuizAttemptObservation({
        questionId: null,
        isCorrect: true,
        createdAt: answeredAt,
      })
    ).toBeNull();
    expect(
      toQuizAttemptObservation({
        questionId: "q-1",
        isCorrect: true,
        createdAt: null,
        answeredAt: null,
      })
    ).toBeNull();

    const partial = quizAttemptsToMasteryInputs(
      [
        {
          questionId: "missing-q",
          isCorrect: false,
          confidenceLevel: "HIGH",
          answeredAt,
        },
      ],
      {}
    );
    expect(partial).toHaveLength(1);
    expect(partial[0]!.skillId).toBeUndefined();
    expect(partial[0]!.ecoTaskId).toBeUndefined();
    expect(partial[0]!.confidence).toBe("HIGH");
    expect(partial[0]!.answeredAt).toEqual(answeredAt);

    const withoutSkill = quizAttemptToMasteryInput(
      {
        questionId: "q-1",
        isCorrect: false,
        confidenceLevel: "MEDIUM",
        answeredAt,
      },
      { ...baseQuestion, skillId: null }
    );
    expect(withoutSkill.skillId).toBeUndefined();
  });

  it("is deterministic: same input → same output", () => {
    const attempts = [
      {
        questionId: "q-1",
        isCorrect: false,
        confidenceLevel: "HIGH" as string | null,
        answeredAt,
      },
      {
        questionId: "q-2",
        isCorrect: true,
        confidenceLevel: "LOW" as string | null,
        answeredAt: new Date("2026-08-28T12:05:00.000Z"),
      },
    ];
    const questions = {
      "q-1": { ...baseQuestion, id: "q-1" },
      "q-2": { ...baseQuestion, id: "q-2", skillId: "skill-db-1" },
    };
    const a = quizAttemptsToMasteryInputs(attempts, questions);
    const b = quizAttemptsToMasteryInputs(attempts, questions);
    expect(a).toEqual(b);

    const s1 = weaknessSignalsFromQuizAttempts(attempts, questions);
    const s2 = weaknessSignalsFromQuizAttempts(attempts, questions);
    expect(s1).toEqual(s2);
  });
});

describe("C2 — buildWeaknessSignals wiring", () => {
  it("feeds adapter outputs into buildWeaknessSignals without double transform", () => {
    const attempts = [
      {
        questionId: "q-1",
        isCorrect: false,
        confidenceLevel: "VERY_HIGH",
        answeredAt,
      },
      {
        questionId: "q-2",
        isCorrect: false,
        confidenceLevel: "HIGH",
        answeredAt: new Date("2026-08-28T12:01:00.000Z"),
      },
    ];
    const questions = {
      "q-1": { ...baseQuestion, id: "q-1" },
      "q-2": { ...baseQuestion, id: "q-2", skillId: "skill-db-1" },
    };

    const inputs = quizAttemptsToMasteryInputs(attempts, questions);
    const viaAdapter = weaknessSignalsFromQuizAttempts(attempts, questions);
    const viaDirect = buildWeaknessSignals(inputs);

    expect(viaAdapter).toEqual(viaDirect);
    expect(viaAdapter.some((s) => s.skillId === "skill-db-1")).toBe(true);
    expect(computeWeightedPerformance(inputs)).toBeLessThan(70);
  });

  it("does not invent a second weakness aggregator", () => {
    const adapterSource = readFileSync(
      join(process.cwd(), "src/modules/mastery-engine/attempt-adapter.ts"),
      "utf8"
    );
    expect(adapterSource).toContain("buildWeaknessSignals");
    expect(adapterSource).toContain("weaknessSignalsFromQuizAttempts");
    expect(adapterSource).not.toMatch(/function buildWeakness/);
    expect(adapterSource).not.toContain("updateConceptMastery");
  });

  it("produces WEAK skill signal below 70% and skips strong skills", () => {
    const weak = buildWeaknessSignals([
      {
        correct: false,
        difficulty: "MEDIUM",
        cognitiveLevel: "APPLICATION",
        skillId: "skill-db-weak",
        answeredAt,
        confidence: "VERY_HIGH",
      },
      {
        correct: false,
        difficulty: "MEDIUM",
        cognitiveLevel: "APPLICATION",
        skillId: "skill-db-weak",
        answeredAt,
        confidence: "HIGH",
      },
    ]);
    expect(weak.some((s) => s.skillId === "skill-db-weak")).toBe(true);

    const strong = buildWeaknessSignals([
      {
        correct: true,
        difficulty: "MEDIUM",
        cognitiveLevel: "APPLICATION",
        skillId: "skill-db-strong",
        answeredAt,
        confidence: "HIGH",
      },
    ]);
    expect(strong.some((s) => s.skillId === "skill-db-strong")).toBe(false);
  });
});

describe("C2 — recordQuizAttempt write separation", () => {
  let userId: string;
  let questionId: string;
  let correctOptionId: string;

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
    correctOptionId = question.answerOptions.find((o) => o.isCorrect)!.id;
  });

  it("recordQuizAttempt does not write ConceptMastery", async () => {
    const upsertSpy = vi.spyOn(progressService, "updateConceptMastery");
    const scoringSource = readFileSync(
      join(process.cwd(), "src/modules/assessment-engine/scoring-service.ts"),
      "utf8"
    );
    expect(scoringSource).not.toContain("updateConceptMastery");

    const { attempt, validation } = await recordQuizAttempt(
      userId,
      questionId,
      [correctOptionId],
      undefined,
      "HIGH"
    );

    expect(validation.score).toBe(100);
    expect(attempt.confidenceLevel).toBe("HIGH");
    expect(upsertSpy).not.toHaveBeenCalled();
    upsertSpy.mockRestore();

    const observation = toQuizAttemptObservation({
      questionId: attempt.questionId,
      isCorrect: attempt.isCorrect,
      confidenceLevel: attempt.confidenceLevel,
      createdAt: attempt.createdAt,
    });
    expect(observation).not.toBeNull();
    expect(observation!.confidenceLevel).toBe("HIGH");
  });

  it("ConceptMastery remains 3-tier only (no 7-state persisted)", async () => {
    const schema = readFileSync(
      join(process.cwd(), "prisma/schema.prisma"),
      "utf8"
    );
    const block = schema.slice(
      schema.indexOf("enum MasteryLevel"),
      schema.indexOf("enum MasteryLevel") + 120
    );
    expect(block).toContain("WEAK");
    expect(block).toContain("LEARNING");
    expect(block).toContain("MASTERED");
    expect(block).not.toMatch(/EXPOSED|FRAGILE|FUNCTIONAL|UNKNOWN/);

    const rows = await prisma.conceptMastery.findMany({
      select: { level: true },
      take: 50,
    });
    for (const row of rows) {
      expect(["WEAK", "LEARNING", "MASTERED"]).toContain(row.level);
    }
  });
});

describe("C2 — C1 non-regression + garde-fous", () => {
  it("C1 confidence helpers remain available", async () => {
    const {
      parseConfidenceInput,
      isTestPhaseConfidenceComplete,
      numericToConfidence,
    } = await import("@/modules/mastery-engine/confidence");
    expect(parseConfidenceInput(3)).toBe("MEDIUM");
    expect(numericToConfidence(1)).toBe("VERY_LOW");
    expect(isTestPhaseConfidenceComplete(["q"], { q: 5 })).toBe(true);
  });

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
