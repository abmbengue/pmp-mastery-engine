import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { PrismaClient } from "@prisma/client";
import {
  calculateExamBankFingerprint,
  verifyExamBankIntegrity,
} from "../exam-bank-guard";

describe("Exam Bank Guard — Fingerprint & Integrity", () => {
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

  it("should return non-empty fingerprint", async () => {
    const fp = await calculateExamBankFingerprint(prisma);
    expect(fp.length).toBeGreaterThan(0);
  });

  it("should verify exam bank integrity report structure", async () => {
    const report = await verifyExamBankIntegrity(prisma);
    expect(report).toHaveProperty("isValid");
    expect(report).toHaveProperty("fingerprint");
    expect(report).toHaveProperty("questionCount");
    expect(report).toHaveProperty("expectedFingerprint");
    expect(report).toHaveProperty("protectedCount");
    expect(report).toHaveProperty("issues");
    expect(report).toHaveProperty("timestamp");
  });

  it("should set expected fingerprint", async () => {
    const report = await verifyExamBankIntegrity(prisma);
    expect(report.expectedFingerprint).toBe(
      "d18c86618e8cba16c623e8982f362f00e930a8ed5ea8b9c53abb8b5b0df0b1e2"
    );
  });

  it("should report when fingerprint mismatches", async () => {
    const report = await verifyExamBankIntegrity(prisma);
    if (report.fingerprint !== report.expectedFingerprint) {
      expect(report.isValid).toBe(false);
      expect(report.issues.length).toBeGreaterThan(0);
    }
  });

  it("should report when question count is not 200", async () => {
    const report = await verifyExamBankIntegrity(prisma);
    if (report.questionCount !== 200) {
      expect(report.isValid).toBe(false);
      expect(report.issues.some((i) => i.includes("200"))).toBe(true);
    }
  });
});
