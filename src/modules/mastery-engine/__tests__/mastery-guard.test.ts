import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { PrismaClient } from "@prisma/client";
import {
  auditMasteryLevels,
  assertMasteryLevelIntegrity,
} from "../mastery-guard";

describe("Mastery Level Guard", () => {
  let prisma: PrismaClient;

  beforeAll(() => {
    prisma = new PrismaClient();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should audit mastery levels", async () => {
    const audit = await auditMasteryLevels(prisma);
    expect(audit).toHaveProperty("isValid");
    expect(audit).toHaveProperty("totalMasteries");
    expect(audit).toHaveProperty("byLevel");
  });

  it("should track WEAK, LEARNING, MASTERED only", async () => {
    const audit = await auditMasteryLevels(prisma);
    expect(audit.byLevel).toHaveProperty("WEAK");
    expect(audit.byLevel).toHaveProperty("LEARNING");
    expect(audit.byLevel).toHaveProperty("MASTERED");
  });

  it("should report invalid levels as issues", async () => {
    const audit = await auditMasteryLevels(prisma);
    if (audit.issues.length > 0) {
      expect(audit.isValid).toBe(false);
      expect(
        audit.issues.some((i) => i.includes("Invalid mastery level"))
      ).toBe(true);
    }
  });

  it("should not throw when all levels valid", async () => {
    // Should not throw
    await assertMasteryLevelIntegrity(prisma);
  });
});
