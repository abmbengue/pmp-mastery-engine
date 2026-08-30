/**
 * ECO Guard — task taxonomy distribution.
 *
 * Adapted from the base-branch guard test to the canonical Phase C+D
 * implementation. The base branch referenced an `eco-guard` module that was
 * never implemented; its intended invariants (26 ECO tasks, People 8 /
 * Process 10 / Business 8, distinct tasks T04/T07/T08) are enforced by the
 * canonical `eco-taxonomy` module. No second guard architecture is introduced.
 */
import { describe, it, expect } from "vitest";
import {
  ECO_TASKS,
  ECO_TASK_COUNT,
  listEcoTasksByDomain,
  getEcoTaskByLegacyCode,
} from "../eco-taxonomy";

describe("ECO Guard — taxonomy distribution", () => {
  it("should expose exactly 26 ECO tasks", () => {
    expect(ECO_TASK_COUNT).toBe(26);
    expect(ECO_TASKS).toHaveLength(26);
  });

  it("should track People, Process, Business domains", () => {
    const domains = new Set(ECO_TASKS.map((t) => t.domainId));
    expect(domains.has("PEOPLE")).toBe(true);
    expect(domains.has("PROCESS")).toBe(true);
    expect(domains.has("BUSINESS")).toBe(true);
  });

  it("should distribute People = 8 / Process = 10 / Business = 8", () => {
    expect(listEcoTasksByDomain("PEOPLE")).toHaveLength(8);
    expect(listEcoTasksByDomain("PROCESS")).toHaveLength(10);
    expect(listEcoTasksByDomain("BUSINESS")).toHaveLength(8);
  });

  it("should have no duplicate task ids", () => {
    const ids = new Set(ECO_TASKS.map((t) => t.id));
    expect(ids.size).toBe(ECO_TASK_COUNT);
  });

  it("should keep T04, T07 and T08 distinct (PE-04 != PE-07 != PE-08)", () => {
    const t04 = getEcoTaskByLegacyCode("PE-04");
    const t07 = getEcoTaskByLegacyCode("PE-07");
    const t08 = getEcoTaskByLegacyCode("PE-08");
    expect(t04).toBeDefined();
    expect(t07).toBeDefined();
    expect(t08).toBeDefined();
    const ids = [t04!.id, t07!.id, t08!.id];
    expect(new Set(ids).size).toBe(3);
  });
});
