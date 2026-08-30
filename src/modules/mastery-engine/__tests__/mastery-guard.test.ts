/**
 * Mastery Level Guard — live-DB 3-state persistence audit.
 *
 * Kept from the base branch (the `mastery-guard` module exists and is
 * architecturally coherent with the C+D ConceptMastery 3-tier invariant).
 * Adapted only to use the canonical generated Prisma client singleton instead
 * of instantiating `PrismaClient` from `@prisma/client`.
 */
import { describe, it, expect } from "vitest";
import prisma from "@/data/prisma-client";
import {
  auditMasteryLevels,
  assertMasteryLevelIntegrity,
} from "../mastery-guard";

describe("Mastery Level Guard", () => {
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
    await assertMasteryLevelIntegrity(prisma);
  });
});
