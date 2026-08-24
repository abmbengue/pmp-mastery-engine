import { describe, it, expect } from "vitest";
import { computeMasteryLevelFromScore } from "@/modules/learning-engine/progress-service";

describe("mastery computation", () => {
  it("returns MASTERED for score >= 80", () => {
    expect(computeMasteryLevelFromScore(80)).toBe("MASTERED");
    expect(computeMasteryLevelFromScore(100)).toBe("MASTERED");
  });

  it("returns LEARNING for score >= 50 and < 80", () => {
    expect(computeMasteryLevelFromScore(50)).toBe("LEARNING");
    expect(computeMasteryLevelFromScore(79)).toBe("LEARNING");
  });

  it("returns WEAK for score < 50", () => {
    expect(computeMasteryLevelFromScore(0)).toBe("WEAK");
    expect(computeMasteryLevelFromScore(49)).toBe("WEAK");
  });
});
