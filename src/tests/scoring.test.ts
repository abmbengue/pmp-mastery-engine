import { describe, it, expect } from "vitest";
import {
  evaluateAnswer,
  computeQuizScore,
} from "@/modules/assessment-engine/scoring-service";

describe("assessment scoring", () => {
  it("validates single choice correctly", () => {
    expect(evaluateAnswer("SINGLE_CHOICE", ["a"], ["a"])).toBe(true);
    expect(evaluateAnswer("SINGLE_CHOICE", ["b"], ["a"])).toBe(false);
  });

  it("validates true/false correctly", () => {
    expect(evaluateAnswer("TRUE_FALSE", ["true-id"], ["true-id"])).toBe(true);
  });

  it("validates multiple choice correctly", () => {
    expect(evaluateAnswer("MULTIPLE_CHOICE", ["a", "b"], ["a", "b"])).toBe(true);
    expect(evaluateAnswer("MULTIPLE_CHOICE", ["a"], ["a", "b"])).toBe(false);
    expect(evaluateAnswer("MULTIPLE_CHOICE", ["b", "a"], ["a", "b"])).toBe(true);
  });

  it("computes quiz score as average", () => {
    expect(
      computeQuizScore([
        { isCorrect: true, score: 100, correctOptionIds: [] },
        { isCorrect: false, score: 0, correctOptionIds: [] },
      ])
    ).toBe(50);
  });

  it("returns 0 for empty results", () => {
    expect(computeQuizScore([])).toBe(0);
  });
});
