import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { PrismaClient } from "@prisma/client";
import { auditEcoDistribution, verifyTaskDistinction } from "../eco-guard";

describe("ECO Guard", () => {
  let prisma: PrismaClient;

  beforeAll(() => {
    prisma = new PrismaClient();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should audit ECO distribution", async () => {
    const report = await auditEcoDistribution(prisma);
    expect(report).toHaveProperty("isValid");
    expect(report).toHaveProperty("distribution");
    expect(report).toHaveProperty("expected");
  });

  it("should track People, Process, Business domains", async () => {
    const report = await auditEcoDistribution(prisma);
    expect(report.distribution).toHaveProperty("People");
    expect(report.distribution).toHaveProperty("Process");
    expect(report.distribution).toHaveProperty("Business");
  });

  it("should verify task distinction", async () => {
    const report = await verifyTaskDistinction(prisma);
    expect(report).toHaveProperty("isValid");
    expect(report.distribution).toHaveProperty("PE-04");
    expect(report.distribution).toHaveProperty("PE-07");
    expect(report.distribution).toHaveProperty("PE-08");
  });

  it("should report when ECO totals mismatch", async () => {
    const report = await auditEcoDistribution(prisma);
    if (!report.isValid) {
      expect(report.issues.length).toBeGreaterThan(0);
    }
  });

  it("should check People = 8", async () => {
    const report = await auditEcoDistribution(prisma);
    if (report.distribution.People !== 8) {
      expect(report.issues.some((i) => i.includes("People"))).toBe(true);
    }
  });

  it("should check Process = 10", async () => {
    const report = await auditEcoDistribution(prisma);
    if (report.distribution.Process !== 10) {
      expect(report.issues.some((i) => i.includes("Process"))).toBe(true);
    }
  });

  it("should check Business = 8", async () => {
    const report = await auditEcoDistribution(prisma);
    if (report.distribution.Business !== 8) {
      expect(report.issues.some((i) => i.includes("Business"))).toBe(true);
    }
  });
});
