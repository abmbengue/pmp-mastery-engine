import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { PrismaClient } from "@prisma/client";
import { runComprehensiveGuards, assertAllGuards } from "../guard-suite";

describe("Guard Suite — Comprehensive Integration", () => {
  let prisma: PrismaClient;

  beforeAll(() => {
    prisma = new PrismaClient();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should run all guards and return comprehensive report", async () => {
    const report = await runComprehensiveGuards(prisma);
    expect(report).toBeDefined();
    expect(report).toHaveProperty("passed");
    expect(report).toHaveProperty("examBank");
    expect(report).toHaveProperty("ecoDistribution");
    expect(report).toHaveProperty("taskDistinction");
    expect(report).toHaveProperty("q201Plus");
    expect(report).toHaveProperty("masteryLevels");
    expect(report).toHaveProperty("allIssues");
    expect(report).toHaveProperty("timestamp");
  });

  it("should have all sub-guard reports defined", async () => {
    const report = await runComprehensiveGuards(prisma);
    expect(report.examBank).toBeDefined();
    expect(report.ecoDistribution).toBeDefined();
    expect(report.taskDistinction).toBeDefined();
    expect(report.q201Plus).toBeDefined();
    expect(report.masteryLevels).toBeDefined();
  });

  it("should collect all issues into array", async () => {
    const report = await runComprehensiveGuards(prisma);
    expect(Array.isArray(report.allIssues)).toBe(true);
  });

  it("should have correct timestamp", async () => {
    const report = await runComprehensiveGuards(prisma);
    expect(report.timestamp).toBeInstanceOf(Date);
  });

  it("should set passed = true when no issues", async () => {
    const report = await runComprehensiveGuards(prisma);
    if (report.allIssues.length === 0) {
      expect(report.passed).toBe(true);
    }
  });

  it("should set passed = false when issues exist", async () => {
    const report = await runComprehensiveGuards(prisma);
    if (report.allIssues.length > 0) {
      expect(report.passed).toBe(false);
    }
  });

  it("should not throw assertAllGuards when all pass", async () => {
    const report = await runComprehensiveGuards(prisma);
    if (report.passed) {
      await expect(assertAllGuards(prisma)).resolves.not.toThrow();
    }
  });

  it("should throw assertAllGuards when violations exist", async () => {
    const report = await runComprehensiveGuards(prisma);
    if (!report.passed) {
      await expect(assertAllGuards(prisma)).rejects.toThrow();
    }
  });

  it("should include exam bank in report", async () => {
    const report = await runComprehensiveGuards(prisma);
    expect(report.examBank).toHaveProperty("isValid");
    expect(report.examBank).toHaveProperty("fingerprint");
  });

  it("should include ECO distribution in report", async () => {
    const report = await runComprehensiveGuards(prisma);
    expect(report.ecoDistribution).toHaveProperty("distribution");
    expect(report.ecoDistribution).toHaveProperty("expected");
  });

  it("should include Q201+ check in report", async () => {
    const report = await runComprehensiveGuards(prisma);
    expect(report.q201Plus).toHaveProperty("q201PlusCount");
    expect(report.q201Plus).toHaveProperty("q001To200Count");
  });

  it("should include mastery level audit in report", async () => {
    const report = await runComprehensiveGuards(prisma);
    expect(report.masteryLevels).toHaveProperty("byLevel");
    expect(report.masteryLevels.byLevel).toHaveProperty("WEAK");
    expect(report.masteryLevels.byLevel).toHaveProperty("LEARNING");
    expect(report.masteryLevels.byLevel).toHaveProperty("MASTERED");
  });
});
