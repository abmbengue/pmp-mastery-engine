import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { PrismaClient } from "@prisma/client";
import {
  calculateExamBankFingerprint,
  verifyExamBankIntegrity,
} from "../exam-bank-guard";

describe("Exam Bank Guard — Fingerprint", () => {
  let prisma: PrismaClient;

  beforeAll(() => {
    prisma = new PrismaClient();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should calculate fingerprint deterministically", async () => {
    const fp1 = await calculateExamBankFingerprint(prisma);
    const fp2 = await calculateExamBankFingerprint(prisma);
    expect(fp1).toBe(fp2);
  });

  it("should verify exam bank integrity structure", async () => {
    const report = await verifyExamBankIntegrity(prisma);
    expect(report).toHaveProperty("isValid");
    expect(report).toHaveProperty("fingerprint");
    expect(report).toHaveProperty("questionCount");
    expect(report).toHaveProperty("expectedFingerprint");
  });

  it("should report fingerprint status", async () => {
    const report = await verifyExamBankIntegrity(prisma);
    expect(report.expectedFingerprint).toBe(
      "d18c86618e8cba16c623e8982f362f00e930a8ed5ea8b9c53abb8b5b0df0b1e2"
    );
  });

  it("should flag mismatch if fingerprint differs", async () => {
    const report = await verifyExamBankIntegrity(prisma);
    if (report.fingerprint !== report.expectedFingerprint) {
      expect(report.isValid).toBe(false);
      expect(report.issues.some((i) => i.includes("Fingerprint"))).toBe(true);
    }
  });

  it("should count exactly 200 protected questions", async () => {
    const report = await verifyExamBankIntegrity(prisma);
    expect(report.questionCount).toBeLessThanOrEqual(200);
    if (report.questionCount !== 200) {
      expect(report.issues.some((i) => i.includes("200"))).toBe(true);
    }
  });
});
