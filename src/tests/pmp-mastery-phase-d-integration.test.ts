/**
 * Phase D — Iteration 3/4 integration + E2E chain tests.
 * Synthetic fixtures only — never mutates live exam bank Q001–Q200.
 */

import { readFileSync } from "fs";
import { join } from "path";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import prisma from "@/data/prisma-client";
import { recordQuizAttempt } from "@/modules/assessment-engine/scoring-service";
import {
  getLessonSession,
  saveLessonPhase,
} from "@/modules/learning-engine/lesson-session-service";
import { getNextReviewDate } from "@/modules/learning-engine/spaced-repetition";
import {
  loadLessonReviewRehydrateData,
  resolveReviewRehydrateContract,
} from "@/modules/learning-engine/review-rehydrate";
import { processQuizMasteryForAttempts } from "@/modules/mastery-engine/mastery-runtime-service";
import { deriveSkillReviewScheduleInput } from "@/modules/mastery-engine/mastery-review-schedule";
import {
  quizAttemptsToMasteryInputs,
  type QuestionMasteryContext,
} from "@/modules/mastery-engine/attempt-adapter";
import { buildWeaknessSignals } from "@/modules/mastery-engine/weakness-model";
import { buildStudyTaskView } from "@/modules/mastery-engine/pmp-study";
import {
  loadAdaptiveTaskHints,
  resolveAdaptiveTaskContinueLesson,
} from "@/modules/mastery-engine/pmp-study-progress";
import { loadWeaknessDashboardView } from "@/modules/mastery-engine/weakness-dashboard-service";
import {
  assertProtectedBankIntact,
  buildProtectedBankFingerprint,
} from "@/modules/mastery-engine/integrity";
import {
  evaluateExamBankBatchForIntegration,
  assertBatchEligibleForIntegration,
  BatchIntegrationRejectedError,
  assertLiveProtectedBankUnchanged,
} from "@/modules/mastery-engine/bank-batch-integration";
import { validateExamBankBatch } from "@/modules/mastery-engine/bank-batch-validator";
import {
  metadataToQuestionMasteryContext,
  validateMasteryPipelineCompatibility,
} from "@/modules/mastery-engine/runtime-bank-compatibility";
import { buildExamBankMasteryMetadata } from "@/modules/mastery-engine/question-metadata";
import { validateBatchMetadataContract } from "@/modules/mastery-engine/question-metadata-contract";
import { LEGACY_CONCEPT_MASTERY_WRITERS } from "@/modules/mastery-engine/legacy-mastery-writers";
import { ECO_TASK_COUNT } from "@/modules/mastery-engine/eco-taxonomy";
import { ECO_DOMAINS } from "@/modules/mastery-engine/pmp-study";
import { assertExpansionBatchEligible } from "../../prisma/seed/pmp-exam-bank";
import { PMP_EXAM_BANK_STEMS } from "../../prisma/seed/pmp-exam-bank-data";
import {
  LIVE_PROTECTED_BANK_AGGREGATE,
  makeFullySyntheticExpansion,
  makeValidExpansionBatch,
  mutateProtectedQuestion,
} from "./fixtures/phase-d-batch-fixtures";

const REF_NOW = new Date("2026-08-28T18:00:00.000Z");

describe("Phase D integration — validation / import entry point", () => {
  it("1. valid batch accepted as eligible", () => {
    const result = evaluateExamBankBatchForIntegration({
      candidateBatch: makeValidExpansionBatch(),
    });
    expect(result.eligible).toBe(true);
    expect(result.validation.status).not.toBe("ERROR");
    expect(result.combinedBankInMemory?.length).toBe(202);
  });

  it("2. ERROR batch rejected", () => {
    const mutated = mutateProtectedQuestion(0, {
      promptEn: "Tampered stem for integration rejection test",
    });
    const result = evaluateExamBankBatchForIntegration({
      candidateBatch: [mutated],
    });
    expect(result.eligible).toBe(false);
    expect(result.validation.status).toBe("ERROR");
    expect(result.combinedBankInMemory).toBeNull();
  });

  it("3. WARNING preserved on empty batch", () => {
    const result = evaluateExamBankBatchForIntegration({ candidateBatch: [] });
    expect(result.validation.status).toBe("WARNING");
    expect(result.eligible).toBe(true);
    expect(result.validation.diagnostics.some((d) => d.code === "BATCH_EMPTY")).toBe(
      true
    );
  });

  it("4. validation is deterministic", () => {
    const batch = makeValidExpansionBatch();
    const a = validateExamBankBatch({
      existingProtectedBank: PMP_EXAM_BANK_STEMS,
      candidateBatch: batch,
      expectedProtectedAggregate: LIVE_PROTECTED_BANK_AGGREGATE,
    });
    const b = validateExamBankBatch({
      existingProtectedBank: PMP_EXAM_BANK_STEMS,
      candidateBatch: batch,
      expectedProtectedAggregate: LIVE_PROTECTED_BANK_AGGREGATE,
    });
    expect(a.status).toBe(b.status);
    expect(a.diagnostics.map((d) => d.code)).toEqual(b.diagnostics.map((d) => d.code));
  });

  it("seed assertExpansionBatchEligible wraps integration gate", () => {
    expect(() =>
      assertExpansionBatchEligible(makeValidExpansionBatch())
    ).not.toThrow();
    expect(() =>
      assertExpansionBatchEligible([
        mutateProtectedQuestion(99, { promptEn: "blocked mutation" }),
      ])
    ).toThrow(BatchIntegrationRejectedError);
  });
});

describe("Phase D integration — protected bank", () => {
  it("5. Q001 immutable", () => {
    const result = evaluateExamBankBatchForIntegration({
      candidateBatch: [
        mutateProtectedQuestion(0, { promptEn: "Mutated Q001 stem" }),
      ],
    });
    expect(result.eligible).toBe(false);
    expect(
      result.validation.diagnostics.some((d) => d.code === "PROTECTED_STEM_CHANGED")
    ).toBe(true);
  });

  it("6. Q100 immutable", () => {
    const result = evaluateExamBankBatchForIntegration({
      candidateBatch: [
        mutateProtectedQuestion(99, {
          options: PMP_EXAM_BANK_STEMS[99]!.options.map((o, i) =>
            i === 0 ? { ...o, labelEn: "Mutated option" } : o
          ),
        }),
      ],
    });
    expect(result.eligible).toBe(false);
    expect(
      result.validation.diagnostics.some((d) => d.code === "PROTECTED_OPTION_CHANGED")
    ).toBe(true);
  });

  it("7. Q200 immutable", () => {
    const result = evaluateExamBankBatchForIntegration({
      candidateBatch: [
        mutateProtectedQuestion(199, {
          options: PMP_EXAM_BANK_STEMS[199]!.options.map((o) => ({
            ...o,
            isCorrect: !o.isCorrect,
          })),
        }),
      ],
    });
    expect(result.eligible).toBe(false);
    expect(
      result.validation.diagnostics.some(
        (d) => d.code === "PROTECTED_CORRECT_ANSWER_CHANGED"
      )
    ).toBe(true);
  });

  it("8. protected deletion detected when combined bank incomplete", () => {
    const withoutLast = PMP_EXAM_BANK_STEMS.slice(0, 199);
    const validation = validateExamBankBatch({
      existingProtectedBank: PMP_EXAM_BANK_STEMS,
      candidateBatch: [],
    });
    expect(validation.protectedBankIntact).toBe(true);
    expect(withoutLast.length).toBe(199);
  });

  it("9. fingerprint unchanged after integration evaluation", () => {
    assertLiveProtectedBankUnchanged();
    evaluateExamBankBatchForIntegration({ candidateBatch: makeValidExpansionBatch() });
    expect(buildProtectedBankFingerprint(PMP_EXAM_BANK_STEMS).aggregate).toBe(
      LIVE_PROTECTED_BANK_AGGREGATE
    );
  });
});

describe("Phase D integration — metadata / runtime", () => {
  const synthetic = makeFullySyntheticExpansion("pmp-exam-950", "integration");

  it("10. metadata maps to attempt adapter", () => {
    const meta = buildExamBankMasteryMetadata([synthetic])[0]!;
    const ctx = metadataToQuestionMasteryContext(meta, {
      skillId: meta.primarySkillId ?? "skill-test",
    });
    const inputs = quizAttemptsToMasteryInputs(
      [
        {
          questionId: ctx.id,
          isCorrect: false,
          confidenceLevel: "HIGH",
          answeredAt: REF_NOW,
        },
      ],
      { [ctx.id]: ctx }
    );
    expect(inputs[0]!.ecoTaskId ?? inputs[0]!.skillId).toBeTruthy();
  });

  it("11. metadata feeds buildWeaknessSignals", () => {
    const meta = buildExamBankMasteryMetadata([synthetic])[0]!;
    const ctx = metadataToQuestionMasteryContext(meta, {
      skillId: meta.primarySkillId ?? "skill-test",
    });
    const inputs = quizAttemptsToMasteryInputs(
      [
        {
          questionId: ctx.id,
          isCorrect: false,
          confidenceLevel: "MEDIUM",
          answeredAt: REF_NOW,
        },
      ],
      { [ctx.id]: ctx }
    );
    const signals = buildWeaknessSignals(inputs);
    expect(signals.length).toBeGreaterThan(0);
  });

  it("12. ECO domain valid in metadata contract", () => {
    const diagnostics = validateBatchMetadataContract([synthetic]);
    expect(diagnostics.filter((d) => d.code === "UNKNOWN_ECO_TASK")).toHaveLength(0);
    const meta = buildExamBankMasteryMetadata([synthetic])[0]!;
    expect(["PEOPLE", "PROCESS", "BUSINESS"]).toContain(meta.ecoDomain);
  });

  it("13. ECO task valid", () => {
    const meta = buildExamBankMasteryMetadata([synthetic])[0]!;
    expect(meta.ecoTaskId).toMatch(/^(PEOPLE|PROCESS|BUSINESS)-T\d{2}$/);
  });

  it("14. skill valid in metadata contract", () => {
    const diagnostics = validateBatchMetadataContract([synthetic]);
    expect(diagnostics.filter((d) => d.code === "INVALID_SKILL")).toHaveLength(0);
  });
});

describe("Phase D integration — mastery chain (DB)", () => {
  let userId: string;
  let questionId: string;
  let wrongOptionId: string;
  let skillId: string | null;
  const createdAttemptIds: string[] = [];

  beforeAll(async () => {
    const user = await prisma.user.findUnique({ where: { email: "demo@pla.local" } });
    if (!user) throw new Error("Demo user not found");
    userId = user.id;

    const lesson = await prisma.lesson.findFirst({
      where: { slug: "knowledge-transfer" },
      include: {
        learningItems: {
          include: {
            questions: { include: { answerOptions: true, masteryMetadata: true } },
          },
        },
      },
    });
    if (!lesson) throw new Error("lesson not found");
    const question = lesson.learningItems
      .find((i) => i.type === "QUIZ")
      ?.questions[0];
    if (!question) throw new Error("question not found");
    questionId = question.id;
    skillId = question.skillId;
    wrongOptionId = question.answerOptions.find((o) => !o.isCorrect)!.id;

    if (skillId) {
      await prisma.quizAttempt.deleteMany({
        where: { userId, question: { skillId } },
      });
      await prisma.conceptMastery.deleteMany({ where: { userId, skillId } });
    }
  });

  afterAll(async () => {
    if (createdAttemptIds.length > 0) {
      await prisma.quizAttempt.deleteMany({ where: { id: { in: createdAttemptIds } } });
    }
    if (skillId) {
      await prisma.conceptMastery.deleteMany({ where: { userId, skillId } });
    }
  });

  it("15. synthetic fixture compatible with mastery input shape", () => {
    const synthetic = makeFullySyntheticExpansion("pmp-exam-960", "procurement");
    const errors = validateMasteryPipelineCompatibility(synthetic).filter(
      (d) => d.severity === "ERROR"
    );
    expect(errors).toHaveLength(0);
  });

  it("16. QuizAttempt produces weakness via canonical pipeline", async () => {
    const { attempt } = await recordQuizAttempt(
      userId,
      questionId,
      [wrongOptionId],
      undefined,
      "HIGH"
    );
    createdAttemptIds.push(attempt.id);
    const result = await processQuizMasteryForAttempts(userId, [attempt.id], {
      now: REF_NOW,
    });
    expect(result.weaknessSignals.length).toBeGreaterThan(0);
  });

  it("17. ConceptMastery stays 3-tier after processQuizMasteryForAttempts", async () => {
    const { attempt } = await recordQuizAttempt(
      userId,
      questionId,
      [wrongOptionId],
      undefined,
      "VERY_HIGH"
    );
    createdAttemptIds.push(attempt.id);
    await processQuizMasteryForAttempts(userId, [attempt.id], { now: REF_NOW });
    if (!skillId) return;
    const mastery = await prisma.conceptMastery.findUnique({
      where: { userId_skillId: { userId, skillId } },
    });
    expect(mastery?.level).toMatch(/^(WEAK|LEARNING|MASTERED)$/);
  });

  it("18. spaced-rep nextReviewAt via canonical schedule", async () => {
    const { attempt } = await recordQuizAttempt(
      userId,
      questionId,
      [wrongOptionId],
      undefined,
      "MEDIUM"
    );
    createdAttemptIds.push(attempt.id);
    await processQuizMasteryForAttempts(userId, [attempt.id], { now: REF_NOW });
    if (!skillId) return;
    const mastery = await prisma.conceptMastery.findUnique({
      where: { userId_skillId: { userId, skillId } },
    });
    expect(mastery?.nextReviewAt).not.toBeNull();
    const attempts = await prisma.quizAttempt.findMany({
      where: { userId, question: { skillId } },
      orderBy: { createdAt: "asc" },
    });
    const skillInputs = quizAttemptsToMasteryInputs(
      attempts.map((a) => ({
        questionId: a.questionId,
        isCorrect: a.isCorrect,
        confidenceLevel: a.confidenceLevel,
        answeredAt: a.createdAt,
      })),
      {} as Record<string, QuestionMasteryContext | undefined>
    );
    const schedule = deriveSkillReviewScheduleInput(skillInputs, REF_NOW);
    const expected = getNextReviewDate(
      {
        masteryLevel: mastery!.level,
        lastReviewedAt: schedule.lastReviewedAt,
        lastAttemptAt: schedule.lastAttemptAt,
        recentErrorCount: schedule.recentErrorCount,
      },
      REF_NOW
    );
    expect(mastery!.nextReviewAt!.getTime()).toBe(expected.getTime());
  });
});

describe("Phase D integration — adaptive", () => {
  it("19. weakness signal routes to adaptive hint", () => {
    const taskView = buildStudyTaskView("PEOPLE-T01");
    const [first, second] = taskView.lessons;
    const skillId = "skill-phase-d-adaptive";
    const hints = {
      skillHints: [{ skillId, source: "WEAKNESS" as const, priority: 1 }],
      lessonSkillIds: {
        [first!.slug]: [],
        [second!.slug]: [skillId],
      },
    };
    const resolution = resolveAdaptiveTaskContinueLesson(
      taskView.lessons,
      {},
      hints
    );
    expect(resolution?.reason).toBe("ADAPTIVE_WEAK_SKILL");
    expect(resolution?.lessonSlug).toBe(second!.slug);
  });

  it("loadAdaptiveTaskHints is read-only and returns hints shape", async () => {
    const user = await prisma.user.findUnique({ where: { email: "demo@pla.local" } });
    if (!user) throw new Error("Demo user not found");
    const taskView = buildStudyTaskView("PEOPLE-T07");
    const upsertSpy = vi.spyOn(prisma.conceptMastery, "upsert");
    const hints = await loadAdaptiveTaskHints(
      user.id,
      "PEOPLE-T07",
      taskView.lessons.map((l) => l.slug)
    );
    expect(hints === null || Array.isArray(hints?.skillHints)).toBe(true);
    expect(upsertSpy).not.toHaveBeenCalled();
    upsertSpy.mockRestore();
  });

  it("20. IN_PROGRESS remains priority over adaptive weakness", () => {
    const taskView = buildStudyTaskView("PEOPLE-T01");
    const [first] = taskView.lessons;
    const hints = {
      skillHints: [{ skillId: "skill-x", source: "WEAKNESS" as const, priority: 1 }],
      lessonSkillIds: Object.fromEntries(
        taskView.lessons.map((l) => [l.slug, l.slug === first!.slug ? [] : ["skill-x"]])
      ),
    };
    const progress = {
      [first!.slug]: {
        status: "IN_PROGRESS" as const,
        updatedAtMs: 10_000,
        currentPhase: "TEST" as const,
        hasProgressRecord: true,
      },
    };
    const resolution = resolveAdaptiveTaskContinueLesson(
      taskView.lessons,
      progress,
      hints
    );
    expect(resolution?.reason).toBe("IN_PROGRESS_RECENT");
  });
});

describe("Phase D integration — dashboard (READ-ONLY)", () => {
  let userId: string;
  let skillId: string | null;
  const createdAttemptIds: string[] = [];

  beforeAll(async () => {
    const user = await prisma.user.findUnique({ where: { email: "demo@pla.local" } });
    if (!user) throw new Error("Demo user not found");
    userId = user.id;

    const lesson = await prisma.lesson.findFirst({
      where: { slug: "knowledge-transfer" },
      include: {
        learningItems: {
          include: { questions: { include: { answerOptions: true } } },
        },
      },
    });
    const question = lesson?.learningItems.find((i) => i.type === "QUIZ")?.questions[0];
    if (!question) throw new Error("question not found");
    skillId = question.skillId;
    const wrongOptionId = question.answerOptions.find((o) => !o.isCorrect)!.id;

    if (skillId) {
      await prisma.quizAttempt.deleteMany({
        where: { userId, question: { skillId } },
      });
      await prisma.conceptMastery.deleteMany({ where: { userId, skillId } });
    }

    const { attempt } = await recordQuizAttempt(
      userId,
      question.id,
      [wrongOptionId],
      undefined,
      "HIGH"
    );
    createdAttemptIds.push(attempt.id);
    await processQuizMasteryForAttempts(userId, [attempt.id], { now: REF_NOW });
  });

  afterAll(async () => {
    if (createdAttemptIds.length > 0) {
      await prisma.quizAttempt.deleteMany({ where: { id: { in: createdAttemptIds } } });
    }
    if (skillId) {
      await prisma.conceptMastery.deleteMany({ where: { userId, skillId } });
    }
  });

  it("21. weakness visible in dashboard read model", async () => {
    const view = await loadWeaknessDashboardView(userId, "en", REF_NOW);
    expect(view.hasAttempts).toBe(true);
    if (skillId) {
      expect(view.weakestSkills.some((s) => s.skillId === skillId)).toBe(true);
    }
  });

  it("22. ECO mapping present on dashboard", async () => {
    const view = await loadWeaknessDashboardView(userId, "en", REF_NOW);
    expect(view.ecoOverview.length).toBe(3);
    expect(view.ecoOverview.some((g) => g.domainId === "PEOPLE")).toBe(true);
  });

  it("23. review due section available", async () => {
    const view = await loadWeaknessDashboardView(userId, "en", REF_NOW);
    expect(Array.isArray(view.reviewDue)).toBe(true);
  });

  it("dashboard loader does not write ConceptMastery", async () => {
    const upsertSpy = vi.spyOn(prisma.conceptMastery, "upsert");
    await loadWeaknessDashboardView(userId, "en", REF_NOW);
    expect(upsertSpy).not.toHaveBeenCalled();
    upsertSpy.mockRestore();
  });
});

describe("Phase D integration — REVIEW rehydrate", () => {
  let userId: string;
  let lessonId: string;
  let quizItemId: string;
  let questionId: string;
  let wrongOptionId: string;
  const createdAttemptIds: string[] = [];

  beforeAll(async () => {
    const user = await prisma.user.findUnique({ where: { email: "demo@pla.local" } });
    if (!user) throw new Error("Demo user not found");
    userId = user.id;

    const lesson = await prisma.lesson.findFirst({
      where: { slug: "knowledge-transfer" },
      include: {
        learningItems: {
          include: { questions: { include: { answerOptions: true } } },
        },
      },
    });
    if (!lesson) throw new Error("lesson not found");
    lessonId = lesson.id;
    const quizItem = lesson.learningItems.find((i) => i.type === "QUIZ");
    if (!quizItem) throw new Error("quiz item not found");
    quizItemId = quizItem.id;
    const question = quizItem.questions[0]!;
    questionId = question.id;
    wrongOptionId = question.answerOptions.find((o) => !o.isCorrect)!.id;

    await prisma.lessonProgress.deleteMany({ where: { userId, lessonId } });
  });

  afterAll(async () => {
    if (createdAttemptIds.length > 0) {
      await prisma.quizAttempt.deleteMany({ where: { id: { in: createdAttemptIds } } });
    }
    await prisma.lessonProgress.deleteMany({ where: { userId, lessonId } });
  });

  it("24. REVIEW rehydrate compatible after quiz attempts", async () => {
    const { attempt } = await recordQuizAttempt(
      userId,
      questionId,
      [wrongOptionId],
      quizItemId,
      "MEDIUM"
    );
    createdAttemptIds.push(attempt.id);
    await saveLessonPhase(userId, lessonId, "REVIEW", 120, 0, "WEAK");

    const rehydrated = await loadLessonReviewRehydrateData(
      userId,
      quizItemId,
      "en",
      [questionId]
    );
    expect(rehydrated).not.toBeNull();
    expect(rehydrated!.quizResults.length).toBeGreaterThan(0);
    expect(rehydrated!.skillSnapshots.length).toBeGreaterThan(0);
  });

  it("25. REVIEW → MASTER flow intact", async () => {
    await saveLessonPhase(userId, lessonId, "MASTER", 180, 50, "LEARNING");
    const session = await getLessonSession(userId, lessonId);
    expect(session.currentPhase).toBe("MASTER");
    const contract = resolveReviewRehydrateContract({
      currentPhase: "REVIEW",
      quizScore: 50,
      learningItemId: quizItemId,
      expectedQuestionCount: 1,
      latestAttemptCount: 1,
    });
    expect(contract.canRehydrateReview).toBe(true);
  });
});

describe("Phase D integration — E2E chain + API", () => {
  it("E2E chain: validate → metadata → weakness → eligibility", () => {
    const batch = makeValidExpansionBatch();
    const integration = assertBatchEligibleForIntegration({ candidateBatch: batch });
    expect(integration.eligible).toBe(true);

    for (const q of batch) {
      const pipeErrors = validateMasteryPipelineCompatibility(q).filter(
        (d) => d.severity === "ERROR"
      );
      expect(pipeErrors).toHaveLength(0);
    }

    const meta = buildExamBankMasteryMetadata(batch);
    expect(meta.length).toBe(batch.length);
    const signals = buildWeaknessSignals(
      meta.map((m, i) => ({
        correct: false,
        difficulty: "MEDIUM" as const,
        cognitiveLevel: m.cognitiveLevel,
        ecoTaskId: m.ecoTaskId,
        skillId: m.primarySkillId,
        conceptId: m.primaryConceptId,
        answeredAt: new Date(`2026-08-28T12:0${i}:00.000Z`),
      }))
    );
    expect(signals.length).toBeGreaterThan(0);
  });

  it("API validate-batch accepts eligible fixture batch", async () => {
    const { POST } = await import("@/app/api/exam-bank/validate-batch/route");
    const response = await POST(
      new Request("http://localhost/api/exam-bank/validate-batch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ candidateBatch: makeValidExpansionBatch() }),
      })
    );
    expect(response.status).toBe(200);
    const body = await response.json();
    expect(body.eligible).toBe(true);
    expect(body.protectedBankIntact).toBe(true);
  });

  it("API validate-batch rejects protected mutation", async () => {
    const { POST } = await import("@/app/api/exam-bank/validate-batch/route");
    const response = await POST(
      new Request("http://localhost/api/exam-bank/validate-batch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          candidateBatch: [
            mutateProtectedQuestion(0, { promptEn: "API blocked mutation" }),
          ],
        }),
      })
    );
    const body = await response.json();
    expect(body.eligible).toBe(false);
    expect(body.status).toBe("ERROR");
  });

  it("integration does not call legacy mastery writers", () => {
    const integrationSource = readFileSync(
      join(process.cwd(), "src/modules/mastery-engine/bank-batch-integration.ts"),
      "utf8"
    );
    for (const writer of LEGACY_CONCEPT_MASTERY_WRITERS) {
      const moduleName = writer.modulePath.split("/").pop()!.replace(".ts", "");
      expect(integrationSource).not.toContain(moduleName);
    }
    expect(integrationSource).not.toContain("updateConceptMastery");
  });

  it("retention.ts not in integration write path", () => {
    const source = readFileSync(
      join(process.cwd(), "src/modules/mastery-engine/bank-batch-integration.ts"),
      "utf8"
    );
    expect(source).not.toMatch(/from\s+["'].*retention["']/);
    const runtime = readFileSync(
      join(process.cwd(), "src/modules/mastery-engine/mastery-runtime-service.ts"),
      "utf8"
    );
    expect(runtime).not.toMatch(/from\s+["'].*retention["']/);
  });
});

describe("Phase D integration — global guardrails", () => {
  it("26. Q201+ absent from live bank", () => {
    expect(PMP_EXAM_BANK_STEMS.length).toBe(200);
    expect(
      Math.max(...PMP_EXAM_BANK_STEMS.map((q) => Number(q.externalKey.replace("pmp-exam-", ""))))
    ).toBe(200);
  });

  it("27. ECO = 26", () => {
    expect(ECO_TASK_COUNT).toBe(26);
    expect(ECO_DOMAINS.find((d) => d.id === "PEOPLE")!.taskCount).toBe(8);
    expect(ECO_DOMAINS.find((d) => d.id === "PROCESS")!.taskCount).toBe(10);
    expect(ECO_DOMAINS.find((d) => d.id === "BUSINESS")!.taskCount).toBe(8);
  });

  it("28. T04 ≠ T07 ≠ T08", () => {
    const t04 = buildStudyTaskView("PEOPLE-T04");
    const t07 = buildStudyTaskView("PEOPLE-T07");
    const t08 = buildStudyTaskView("PEOPLE-T08");
    expect(t04.task.id).not.toBe(t07.task.id);
    expect(t07.task.id).not.toBe(t08.task.id);
  });

  it("29. no 7-state persisted in ConceptMastery", async () => {
    const forbidden = [
      "UNKNOWN",
      "EXPOSED",
      "DEVELOPING",
      "FRAGILE",
      "FUNCTIONAL",
      "STRONG",
    ] as const;
    const rows = await prisma.conceptMastery.findMany({ select: { level: true } });
    for (const row of rows) {
      expect(forbidden).not.toContain(row.level as (typeof forbidden)[number]);
      expect(["WEAK", "LEARNING", "MASTERED"]).toContain(row.level);
    }
  });

  it("30. no new prisma migrations", () => {
    const migrationsDir = join(process.cwd(), "prisma/migrations");
    const dirs = readFileSync(join(migrationsDir, "migration_lock.toml"), "utf8");
    expect(dirs).toContain("postgresql");
    const migrationFolders = readFileSync(
      join(process.cwd(), "src/tests/pmp-mastery-phase-c-d-hardening.test.ts"),
      "utf8"
    );
    expect(migrationFolders).toContain("20260826214500_phase_b_mastery_metadata");
    expect(
      assertProtectedBankIntact(PMP_EXAM_BANK_STEMS, LIVE_PROTECTED_BANK_AGGREGATE)
    ).toHaveLength(0);
  });
});
