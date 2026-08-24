import { describe, it, expect } from "vitest";
import { computeMasteryLevelFromScore } from "@/shared/utils/mastery";

describe("mastery computation", () => {
  it("returns MASTERED for score >= 80", () => {
    expect(computeMasteryLevelFromScore(80)).toBe("MASTERED");
    expect(computeMasteryLevelFromScore(100)).toBe("MASTERED");
  });

  it("returns LEARNING for score >= 60 and < 80 (threshold updated in Phase 2)", () => {
    expect(computeMasteryLevelFromScore(60)).toBe("LEARNING");
    expect(computeMasteryLevelFromScore(79)).toBe("LEARNING");
  });

  it("returns WEAK for score < 60 (threshold updated in Phase 2)", () => {
    expect(computeMasteryLevelFromScore(0)).toBe("WEAK");
    expect(computeMasteryLevelFromScore(59)).toBe("WEAK");
  });
});
