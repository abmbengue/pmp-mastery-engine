/**
 * Sprint final C+D — Iteration 1/4: Phase C hardening + Phase D readiness freeze.
 * Locks architecture invariants before Phase D MVP work. No new business features.
 */

import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import { describe, expect, it } from "vitest";
import {
  assertProtectedBankIntact,
  buildProtectedBankFingerprint,
} from "@/modules/mastery-engine/integrity";
import {
  ECO_TASKS,
  ECO_TASK_COUNT,
} from "@/modules/mastery-engine/eco-taxonomy";
import { ECO_DOMAINS } from "@/modules/mastery-engine/pmp-study";
import { buildCoverageMatrix } from "@/modules/mastery-engine/coverage-matrix";
import { detectDuplicatesAmongBank } from "@/modules/mastery-engine/duplicate-detection";
import { buildExamBankMasteryMetadata } from "@/modules/mastery-engine/question-metadata";
import { buildWeaknessSignals } from "@/modules/mastery-engine/weakness-model";
import { deriveSkillReviewScheduleInput } from "@/modules/mastery-engine/mastery-review-schedule";
import {
  REVIEW_INTERVALS_DAYS,
  getNextReviewDate,
} from "@/modules/learning-engine/spaced-repetition";
import { PMP_EXAM_BANK_STEMS } from "../../prisma/seed/pmp-exam-bank-data";

const PROTECTED_BANK_AGGREGATE =
  "d18c86618e8cba16c623e8982f362f00e930a8ed5ea8b9c53abb8b5b0df0b1e2";

const SRC_ROOT = join(process.cwd(), "src");

function readSource(relativePath: string): string {
  return readFileSync(join(SRC_ROOT, relativePath), "utf8");
}

function listTsFiles(dir: string): string[] {
  const abs = join(SRC_ROOT, dir);
  const entries = readdirSync(abs, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const rel = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...listTsFiles(rel));
    } else if (entry.name.endsWith(".ts") || entry.name.endsWith(".tsx")) {
      files.push(rel);
    }
  }
  return files;
}

describe("Iteration 1/4 — Phase C hardening guards", () => {
  it("fingerprint Q001–Q200 unchanged", () => {
    expect(PMP_EXAM_BANK_STEMS.length).toBe(200);
    expect(buildProtectedBankFingerprint(PMP_EXAM_BANK_STEMS).aggregate).toBe(
      PROTECTED_BANK_AGGREGATE
    );
    expect(
      assertProtectedBankIntact(PMP_EXAM_BANK_STEMS, PROTECTED_BANK_AGGREGATE)
    ).toHaveLength(0);
  });

  it("ECO = 26 with People 8 / Process 10 / Business 8", () => {
    expect(ECO_TASK_COUNT).toBe(26);
    expect(ECO_DOMAINS.find((d) => d.id === "PEOPLE")!.taskCount).toBe(8);
    expect(ECO_DOMAINS.find((d) => d.id === "PROCESS")!.taskCount).toBe(10);
    expect(ECO_DOMAINS.find((d) => d.id === "BUSINESS")!.taskCount).toBe(8);
    expect(ECO_TASKS.length).toBe(26);
  });

  it("Q201+ absent from protected bank", () => {
    const keys = PMP_EXAM_BANK_STEMS.map((q) => q.externalKey);
    expect(Math.max(...keys.map((k) => Number(k.replace("pmp-exam-", ""))))).toBe(
      200
    );
  });

  it("no new prisma migrations beyond known set", () => {
    const migrationsDir = join(process.cwd(), "prisma/migrations");
    const dirs = readdirSync(migrationsDir, { withFileTypes: true })
      .filter((e) => e.isDirectory())
      .map((e) => e.name)
      .sort();
    expect(dirs).toEqual([
      "20260824064545_init",
      "20260824073721_add_lesson_progress_metadata",
      "20260824080800_add_user_password_hash",
      "20260824090402_phase4_content_difficulty_lesson_skills",
      "20260824153000_phase7_pmp_exam_simulator",
      "20260824160000_phase8_learning_analytics",
      "20260824170000_phase10_next_review_at",
      "20260824193000_p1_password_reset",
      "20260826211500_phase_b_eco_proxy_metadata",
      "20260826214500_phase_b_mastery_metadata",
    ]);
  });

  it("ConceptMastery schema stays 3-tier with nextReviewAt only", () => {
    const schema = readFileSync(join(process.cwd(), "prisma/schema.prisma"), "utf8");
    const block = schema.slice(
      schema.indexOf("model ConceptMastery"),
      schema.indexOf("model LearningStreak")
    );
    expect(block).toContain("level          MasteryLevel");
    expect(block).toContain("nextReviewAt   DateTime?");
    expect(block).not.toMatch(/masteryState/);
    expect(block).not.toMatch(/EXPOSED|FRAGILE|FUNCTIONAL/);
  });
});

describe("Iteration 1/4 — canonical mastery write path", () => {
  it("lesson TEST API routes through processQuizMasteryForAttempts", () => {
    const route = readSource("app/api/quiz/attempt/route.ts");
    expect(route).toContain("processQuizMasteryForAttempts");
    expect(route).toContain("recordQuizAttempt");
    expect(route).not.toContain("updateConceptMastery");
  });

  it("mastery-runtime is the Phase C lesson mastery orchestrator", () => {
    const runtime = readSource("modules/mastery-engine/mastery-runtime-service.ts");
    expect(runtime).toContain("processQuizMasteryForAttempts");
    expect(runtime).toContain("buildWeaknessSignals");
    expect(runtime).toContain("deriveSkillReviewScheduleInput");
    expect(runtime).toContain("updateConceptMastery");
    expect(runtime).not.toMatch(/from\s+["'].*retention["']/);
  });

  it("recordQuizAttempt and finishLesson do not write ConceptMastery", () => {
    const scoring = readSource("modules/assessment-engine/scoring-service.ts");
    const session = readSource("modules/learning-engine/lesson-session-service.ts");
    expect(scoring).not.toContain("updateConceptMastery");
    expect(scoring).not.toContain("conceptMastery");
    expect(session).not.toContain("updateConceptMastery");
    expect(session).not.toContain("conceptMastery");
  });

  it("READ-ONLY loaders do not import updateConceptMastery", () => {
    const readOnlyPaths = [
      "modules/learning-engine/review-rehydrate.ts",
      "modules/mastery-engine/weakness-dashboard-service.ts",
      "modules/mastery-engine/pmp-study-progress.ts",
      "modules/mastery-engine/mastery-snapshot.ts",
      "modules/mastery-engine/adaptive-task-resolver.ts",
    ];
    for (const path of readOnlyPaths) {
      const source = readSource(path);
      expect(source, path).not.toContain("updateConceptMastery");
      expect(source, path).not.toContain("conceptMastery.upsert");
    }
  });

  it("documents legacy ConceptMastery writers outside lesson runtime (pre-Phase C)", () => {
    const legacyWriters = [
      "modules/assessment-engine/exam-service.ts",
      "app/api/simulation/complete/route.ts",
      "modules/demo/demo-user-data.ts",
    ];
    for (const path of legacyWriters) {
      expect(readSource(path)).toContain("updateConceptMastery");
    }
    const runtime = readSource("modules/mastery-engine/mastery-runtime-service.ts");
    expect(runtime).not.toContain("exam-service");
    expect(runtime).not.toContain("simulation/complete");
  });
});

describe("Iteration 1/4 — single weakness primitive", () => {
  it("buildWeaknessSignals is the only weakness aggregator export", () => {
    const weaknessModel = readSource("modules/mastery-engine/weakness-model.ts");
    expect(weaknessModel).toContain("export function buildWeaknessSignals");
    expect(weaknessModel).not.toMatch(/export function (calculate|derive)Weakness/);

    const masteryFiles = listTsFiles("modules/mastery-engine");
    const parallelPrimitives = masteryFiles.filter((file) => {
      const source = readSource(file);
      return (
        /export function (calculate|derive)Weakness/.test(source) ||
        /buildWeaknessSignalsV2/.test(source)
      );
    });
    expect(parallelPrimitives).toEqual([]);
  });

  it("dashboard and adaptive consume buildWeaknessSignals", () => {
    for (const path of [
      "modules/mastery-engine/weakness-dashboard-service.ts",
      "modules/mastery-engine/pmp-study-progress.ts",
      "modules/mastery-engine/mastery-runtime-service.ts",
    ]) {
      const source = readSource(path);
      expect(source).toContain("buildWeaknessSignals");
    }
  });
});

describe("Iteration 1/4 — single spaced-repetition source for ConceptMastery writes", () => {
  it("progress-service delegates nextReviewAt to spaced-repetition.ts", () => {
    const progress = readSource("modules/learning-engine/progress-service.ts");
    expect(progress).toContain('from "@/modules/learning-engine/spaced-repetition"');
    expect(progress).toContain("getNextReviewDate");
    expect(progress).not.toMatch(/from\s+["'].*retention["']/);
  });

  it("mastery-review-schedule delegates to getNextReviewDate", () => {
    const schedule = readSource("modules/mastery-engine/mastery-review-schedule.ts");
    expect(schedule).toContain("getNextReviewDate");
    expect(schedule).not.toMatch(/from\s+["'].*retention["']/);
  });

  it("retention.ts is display-only (snapshot path), not mastery write path", () => {
    const runtimeConsumers = listTsFiles("modules").filter((file) => {
      if (file === "modules/mastery-engine/index.ts") return false;
      const source = readSource(file);
      return /from\s+["'].*retention["']/.test(source);
    });
    expect(runtimeConsumers).toEqual(["modules/mastery-engine/weakness-model.ts"]);
    expect(readSource("modules/mastery-engine/weakness-model.ts")).toContain(
      "buildRetentionRecord"
    );
    expect(readSource("modules/mastery-engine/weakness-model.ts")).toContain(
      "buildSkillMasterySnapshot"
    );
    expect(readSource("modules/learning-engine/progress-service.ts")).not.toMatch(
      /from\s+["'].*retention["']/
    );
    expect(readSource("modules/mastery-engine/mastery-runtime-service.ts")).not.toMatch(
      /from\s+["'].*retention["']/
    );
  });

  it("canonical intervals remain WEAK=1 LEARNING=3 MASTERED=7", () => {
    expect(REVIEW_INTERVALS_DAYS.WEAK).toBe(1);
    expect(REVIEW_INTERVALS_DAYS.LEARNING).toBe(3);
    expect(REVIEW_INTERVALS_DAYS.MASTERED).toBe(7);
  });

  it("deriveSkillReviewScheduleInput feeds getNextReviewDate consistently", () => {
    const now = new Date("2026-08-28T12:00:00.000Z");
    const schedule = deriveSkillReviewScheduleInput(
      [
        {
          correct: false,
          difficulty: "MEDIUM",
          cognitiveLevel: "APPLICATION",
          answeredAt: new Date("2026-08-27T12:00:00.000Z"),
        },
        {
          correct: true,
          difficulty: "MEDIUM",
          cognitiveLevel: "APPLICATION",
          answeredAt: now,
        },
      ],
      now
    );
    const due = getNextReviewDate(
      {
        masteryLevel: "LEARNING",
        lastReviewedAt: schedule.lastReviewedAt,
        lastAttemptAt: schedule.lastAttemptAt,
        recentErrorCount: schedule.recentErrorCount,
      },
      now
    );
    expect(due.getTime()).toBeGreaterThan(now.getTime());
  });
});

describe("Iteration 1/4 — Phase D readiness map (reuse, do not duplicate)", () => {
  const phaseDReuseMap: Array<{
    capability: string;
    primitive: string;
    file: string;
  }> = [
    {
      capability: "Protected bank integrity / fingerprint",
      primitive: "buildProtectedBankFingerprint / assertProtectedBankIntact",
      file: "modules/mastery-engine/integrity.ts",
    },
    {
      capability: "ECO × concept × skill coverage gaps",
      primitive: "buildCoverageMatrix",
      file: "modules/mastery-engine/coverage-matrix.ts",
    },
    {
      capability: "New question metadata without stem edits",
      primitive: "buildExamBankMasteryMetadata",
      file: "modules/mastery-engine/question-metadata.ts",
    },
    {
      capability: "Duplicate / near-duplicate detection",
      primitive: "detectDuplicatesAmongBank",
      file: "modules/mastery-engine/duplicate-detection.ts",
    },
    {
      capability: "ECO taxonomy (26 tasks)",
      primitive: "ECO_TASKS / ECO_DOMAINS",
      file: "modules/mastery-engine/eco-taxonomy.ts",
    },
    {
      capability: "Quiz attempt → mastery inputs",
      primitive: "quizAttemptsToMasteryInputs",
      file: "modules/mastery-engine/attempt-adapter.ts",
    },
    {
      capability: "Weakness prioritization",
      primitive: "buildWeaknessSignals",
      file: "modules/mastery-engine/weakness-model.ts",
    },
    {
      capability: "Lesson TEST mastery write path",
      primitive: "processQuizMasteryForAttempts",
      file: "modules/mastery-engine/mastery-runtime-service.ts",
    },
    {
      capability: "Review scheduling",
      primitive: "deriveSkillReviewScheduleInput → getNextReviewDate",
      file: "modules/mastery-engine/mastery-review-schedule.ts",
    },
    {
      capability: "Adaptive task routing",
      primitive: "loadAdaptiveTaskHints / resolveAdaptiveTaskContinueLesson",
      file: "modules/mastery-engine/pmp-study-progress.ts",
    },
    {
      capability: "Dashboard weakness surfacing",
      primitive: "loadWeaknessDashboardView",
      file: "modules/mastery-engine/weakness-dashboard-service.ts",
    },
    {
      capability: "REVIEW rehydration",
      primitive: "loadLessonReviewRehydrateData",
      file: "modules/learning-engine/review-rehydrate.ts",
    },
    {
      capability: "Display-only 7-state mastery",
      primitive: "buildSkillMasterySnapshotViews / deriveMasteryState",
      file: "modules/mastery-engine/mastery-snapshot.ts",
    },
  ];

  for (const row of phaseDReuseMap) {
    it(`Phase D reuses: ${row.capability}`, () => {
      const source = readSource(row.file);
      const exportName = row.primitive.split(" / ")[0]!.split(" → ")[0]!;
      expect(source).toContain(exportName.split(" ")[0]!);
    });
  }

  it("coverage matrix runs on current protected bank", () => {
    const report = buildCoverageMatrix(PMP_EXAM_BANK_STEMS);
    expect(report.cells.length).toBeGreaterThan(0);
    expect(Object.keys(report.byEcoTask).length).toBe(26);
  });

  it("metadata layer covers all 200 protected questions", () => {
    const metadata = buildExamBankMasteryMetadata(PMP_EXAM_BANK_STEMS);
    expect(metadata.length).toBe(200);
  });

  it("duplicate detection runs without throwing on protected bank", () => {
    const metadata = buildExamBankMasteryMetadata(PMP_EXAM_BANK_STEMS);
    const dupes = detectDuplicatesAmongBank(PMP_EXAM_BANK_STEMS, metadata);
    expect(Array.isArray(dupes)).toBe(true);
  });

  it("weakness primitive is callable for Phase D gap targeting", () => {
    const signals = buildWeaknessSignals([
      {
        correct: false,
        difficulty: "HARD",
        cognitiveLevel: "JUDGMENT",
        ecoTaskId: "PEOPLE-T07",
        skillId: "knowledge-transfer",
        answeredAt: new Date(),
      },
    ]);
    expect(signals.length).toBeGreaterThan(0);
  });
});

function readRepoFile(relativePath: string): string {
  return readFileSync(join(process.cwd(), relativePath), "utf8");
}

describe("Iteration 1/4 — Phase D integration touchpoints (identified, not implemented)", () => {
  const touchpoints = [
    "src/modules/mastery-engine/mastery-runtime-service.ts",
    "src/modules/mastery-engine/adaptive-task-resolver.ts",
    "src/modules/mastery-engine/pmp-study-progress.ts",
    "src/modules/mastery-engine/weakness-dashboard-service.ts",
    "src/modules/learning-engine/review-rehydrate.ts",
    "src/app/[locale]/components/lesson-player/LessonPlayer.tsx",
    "src/app/[locale]/pmp-study/[domainId]/[taskId]/page.tsx",
    "src/app/[locale]/dashboard/page.tsx",
    "prisma/seed/pmp-exam-bank-data.ts",
    "src/modules/mastery-engine/coverage-matrix.ts",
    "src/modules/mastery-engine/duplicate-detection.ts",
  ];

  for (const path of touchpoints) {
    it(`touchpoint exists: ${path}`, () => {
      expect(() => readRepoFile(path)).not.toThrow();
    });
  }
});
