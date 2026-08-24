import { beforeEach, describe, expect, it } from "vitest";
import {
  checkRateLimit,
  resetRateLimitBuckets,
  safeApiLog,
} from "@/modules/security";
import { validateLessonCatalog } from "@/modules/content/content-validator";
import { mapErrorToCorrectiveLearning } from "@/modules/learning-engine/corrective-learning";
import { enrichLegacyBody, buildPedagogicalBody } from "../../prisma/seed/content/pedagogy";
import { PF_LESSONS } from "../../prisma/seed/content/pf-lessons";
import { CF_LESSONS } from "../../prisma/seed/content/cf-lessons";
import { PMP_LESSONS } from "../../prisma/seed/content/pmp-lessons";
import { PMP_EXAM_BANK } from "../../prisma/seed/pmp-exam-bank-data";

describe("Phase 12 pedagogical content quality", () => {
  it("enriches PF/CF/PMP lesson bodies with structured micro-learning sections", () => {
    expect(PF_LESSONS.length).toBeGreaterThanOrEqual(45);
    expect(CF_LESSONS.length).toBeGreaterThanOrEqual(50);
    expect(PMP_LESSONS.length).toBeGreaterThanOrEqual(70);

    for (const l of [...PF_LESSONS, ...CF_LESSONS, ...PMP_LESSONS]) {
      expect(l.textBodyFr).toContain("Objectif");
      expect(l.textBodyEn).toContain("Objective");
      expect(l.textBodyFr).toContain("À retenir");
      expect(l.textBodyEn).toContain("Key takeaway");
      expect(l.textBodyFr.length).toBeGreaterThan(500);
      expect(l.textBodyEn.length).toBeGreaterThan(500);
      expect(l.textBodyFr).not.toEqual(l.textBodyEn);
      expect(l.descriptionFr.length).toBeGreaterThan(5);
      expect(l.descriptionEn.length).toBeGreaterThan(5);
    }
  });

  it("adds capital structure / cost of capital lessons in CF", () => {
    expect(CF_LESSONS.some((l) => l.slug === "capital-structure-basics")).toBe(true);
    expect(CF_LESSONS.some((l) => l.slug === "cost-of-debt")).toBe(true);
    expect(CF_LESSONS.some((l) => l.slug === "cost-of-equity")).toBe(true);
  });

  it("requires pedagogical short scripts under 180s", () => {
    const shorts = [...PF_LESSONS, ...CF_LESSONS, ...PMP_LESSONS].filter((l) => l.isShort);
    expect(shorts.length).toBeGreaterThanOrEqual(10);
    for (const s of shorts) {
      expect(s.shortDurationSeconds!).toBeLessThanOrEqual(180);
      expect(s.shortScriptFr!.length).toBeGreaterThan(40);
      expect(s.shortScriptEn!.length).toBeGreaterThan(40);
      expect(s.keyTakeawayFr).toBeTruthy();
      expect(s.keyTakeawayEn).toBeTruthy();
    }
  });

  it("passes content validator for enriched catalogs", () => {
    expect(validateLessonCatalog(PF_LESSONS).ok).toBe(true);
    expect(validateLessonCatalog(CF_LESSONS).ok).toBe(true);
    expect(validateLessonCatalog(PMP_LESSONS as never).ok).toBe(true);
  });

  it("buildPedagogicalBody keeps FR/EN section parity", () => {
    const body = buildPedagogicalBody({
      objectiveFr: "o",
      objectiveEn: "o",
      explanationFr: "e",
      explanationEn: "e",
      exampleFr: "x",
      exampleEn: "x",
      practicalFr: "p",
      practicalEn: "p",
      mistakeFr: "m",
      mistakeEn: "m",
      takeawayFr: "t",
      takeawayEn: "t",
    });
    expect(body.textBodyFr.split("\n\n").length).toBe(body.textBodyEn.split("\n\n").length);
    const enriched = enrichLegacyBody({
      titleFr: "Titre",
      titleEn: "Title",
      descriptionFr: "Desc",
      descriptionEn: "Desc",
      textBodyFr: "Court",
      textBodyEn: "Short",
      skillSlug: "demo",
    });
    expect(enriched.textBodyFr).toContain("Objectif");
  });
});

describe("Phase 12 PMP exam bank quality", () => {
  it("keeps 200 original questions without template markers", () => {
    expect(PMP_EXAM_BANK.length).toBe(200);
    const blob = JSON.stringify(PMP_EXAM_BANK);
    expect(blob.toLowerCase()).not.toContain("educational context #");
    expect(blob.toLowerCase()).not.toContain("contexte pédagogique #");
    expect(blob.toLowerCase()).not.toContain("pmbok®");
  });

  it("has unique scenarios and pedagogical wrong-option explanations", () => {
    const scenarios = new Set(PMP_EXAM_BANK.map((q) => q.scenarioEn));
    expect(scenarios.size).toBeGreaterThan(50);
    const withWrongExpl = PMP_EXAM_BANK.filter((q) =>
      q.options.some((o) => !o.isCorrect && o.explanationWrongEn)
    );
    expect(withWrongExpl.length).toBeGreaterThan(150);
  });
});

describe("Phase 12 corrective learning lesson links", () => {
  it("maps error categories to existing PMP lesson slugs", () => {
    const slugs = new Set(PMP_LESSONS.map((l) => l.slug));
    for (const category of [
      "STAKEHOLDER_ERROR",
      "RISK_ERROR",
      "AGILE_MINDSET",
      "PROCESS_ERROR",
      "WRONG_ACTION",
    ] as const) {
      const hint = mapErrorToCorrectiveLearning(category);
      expect(hint.preferredLessonSlugs.length).toBeGreaterThan(0);
      expect(hint.preferredLessonSlugs.some((s) => slugs.has(s))).toBe(true);
      expect(hint.preferredSkillSlugs.length).toBeGreaterThan(0);
    }
  });
});

describe("Phase 12 rate limiting", () => {
  beforeEach(() => {
    resetRateLimitBuckets();
  });

  it("allows requests under the limit and blocks after", () => {
    expect(checkRateLimit("t:user", 2, 60_000).ok).toBe(true);
    expect(checkRateLimit("t:user", 2, 60_000).ok).toBe(true);
    expect(checkRateLimit("t:user", 2, 60_000).ok).toBe(false);
  });

  it("can be disabled via DISABLE_RATE_LIMIT for e2e", () => {
    const prev = process.env.DISABLE_RATE_LIMIT;
    process.env.DISABLE_RATE_LIMIT = "1";
    try {
      expect(checkRateLimit("t:disabled", 1, 60_000).ok).toBe(true);
      expect(checkRateLimit("t:disabled", 1, 60_000).ok).toBe(true);
    } finally {
      if (prev === undefined) delete process.env.DISABLE_RATE_LIMIT;
      else process.env.DISABLE_RATE_LIMIT = prev;
    }
  });

  it("redacts secrets in safeApiLog", () => {
    const logs: string[] = [];
    const original = console.info;
    console.info = ((msg: string) => {
      logs.push(String(msg));
    }) as typeof console.info;
    try {
      safeApiLog("test", { password: "secret", userId: "u1" });
      expect(logs[0]).toContain("[redacted]");
      expect(logs[0]).not.toContain("secret");
      expect(logs[0]).toContain("u1");
    } finally {
      console.info = original;
    }
  });
});
