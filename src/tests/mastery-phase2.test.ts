import { describe, it, expect } from "vitest";
import { computeMasteryLevelFromScore } from "@/shared/utils/mastery";

/**
 * Mastery thresholds updated in Phase 2: LEARNING threshold changed from 50 to 60.
 * MASTERED: >= 80, LEARNING: >= 60, WEAK: < 60.
 */
describe("mastery level computation (Phase 2 thresholds)", () => {
  it("returns MASTERED for score >= 80", () => {
    expect(computeMasteryLevelFromScore(80)).toBe("MASTERED");
    expect(computeMasteryLevelFromScore(100)).toBe("MASTERED");
    expect(computeMasteryLevelFromScore(95)).toBe("MASTERED");
  });

  it("returns LEARNING for score >= 60 and < 80", () => {
    expect(computeMasteryLevelFromScore(60)).toBe("LEARNING");
    expect(computeMasteryLevelFromScore(79)).toBe("LEARNING");
    expect(computeMasteryLevelFromScore(70)).toBe("LEARNING");
  });

  it("returns WEAK for score < 60", () => {
    expect(computeMasteryLevelFromScore(0)).toBe("WEAK");
    expect(computeMasteryLevelFromScore(59)).toBe("WEAK");
  });

  it("boundary: 59 is WEAK, 60 is LEARNING, 79 is LEARNING, 80 is MASTERED", () => {
    expect(computeMasteryLevelFromScore(59)).toBe("WEAK");
    expect(computeMasteryLevelFromScore(60)).toBe("LEARNING");
    expect(computeMasteryLevelFromScore(79)).toBe("LEARNING");
    expect(computeMasteryLevelFromScore(80)).toBe("MASTERED");
  });
});
