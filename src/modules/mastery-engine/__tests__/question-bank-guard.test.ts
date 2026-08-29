import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { PrismaClient } from "@prisma/client";
import {
  verifyQ201PlusAbsence,
  assertQ201PlusAbsence,
} from "../question-bank-guard";

describe("Question Bank Guard", () => {
  let prisma: PrismaClient;

  beforeAll(() => {
    prisma = new PrismaClient();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should verify Q201+ absence from live bank", async () => {
    const report = await verifyQ201PlusAbsence(prisma);
    expect(report).toHaveProperty("isValid");
    expect(report).toHaveProperty("q001To200Count");
    expect(report).toHaveProperty("q201PlusCount");
  });

  it("should count Q001–Q200 correctly", async () => {
    const report = await verifyQ201PlusAbsence(prisma);
    expect(report.q001To200Count).toBeLessThanOrEqual(200);
  });

  it("should report live Q201+ if present", async () => {
    const report = await verifyQ201PlusAbsence(prisma);
    if (report.q201PlusCount > 0) {
      expect(report.isValid).toBe(false);
      expect(report.issues.length).toBeGreaterThan(0);
      expect(report.liveQ201Plus.length).toBe(report.q201PlusCount);
    }
  });

  it("should not throw when Q201+ absent", async () => {
    // Should not throw
    await assertQ201PlusAbsence(prisma);
  });
});
