import { describe, it, expect } from "vitest";
import {
  LESSON_PHASES,
  getNextPhase,
  getPrevPhase,
  isLastPhase,
  phaseIndex,
} from "@/modules/learning-engine/lesson-phases";

describe("lesson phases", () => {
  it("defines 5 phases in correct order", () => {
    expect(LESSON_PHASES).toEqual(["LEARN", "PRACTICE", "TEST", "REVIEW", "MASTER"]);
  });

  it("returns next phase", () => {
    expect(getNextPhase("LEARN")).toBe("PRACTICE");
    expect(getNextPhase("PRACTICE")).toBe("TEST");
    expect(getNextPhase("TEST")).toBe("REVIEW");
    expect(getNextPhase("REVIEW")).toBe("MASTER");
  });

  it("returns null for last phase next", () => {
    expect(getNextPhase("MASTER")).toBeNull();
  });

  it("returns previous phase", () => {
    expect(getPrevPhase("PRACTICE")).toBe("LEARN");
    expect(getPrevPhase("MASTER")).toBe("REVIEW");
  });

  it("returns null for first phase prev", () => {
    expect(getPrevPhase("LEARN")).toBeNull();
  });

  it("identifies last phase", () => {
    expect(isLastPhase("MASTER")).toBe(true);
    expect(isLastPhase("LEARN")).toBe(false);
    expect(isLastPhase("REVIEW")).toBe(false);
  });

  it("returns correct phase index", () => {
    expect(phaseIndex("LEARN")).toBe(0);
    expect(phaseIndex("MASTER")).toBe(4);
  });
});
