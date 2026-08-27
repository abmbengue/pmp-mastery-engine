import { readFileSync } from "fs";
import { describe, expect, it } from "vitest";
import {
  ECO_TASKS,
  ECO_TASK_COUNT,
  getEcoTaskById,
  legacyToStableEcoId,
} from "@/modules/mastery-engine/eco-taxonomy";
import { getConcept } from "@/modules/mastery-engine/concept-graph";
import { getMasterySkill } from "@/modules/mastery-engine/mastery-skills";
import { MISCONCEPTIONS } from "@/modules/mastery-engine/misconceptions";
import {
  PMP_EXAM_BANK,
  PMP_EXAM_BANK_STEMS,
} from "../../prisma/seed/pmp-exam-bank-data";

describe("Phase B.1 — Knowledge Pack source governance", () => {
  const sourceJson = JSON.parse(
    readFileSync("knowledge/PMP_MASTER_KNOWLEDGE_PACK.source.json", "utf8")
  ) as {
    version: string;
    eco: {
      totalTasks: number;
      people: Array<{ stableId: string; legacyCode: string; sourceType: string; sourceConfidence: string }>;
      process: unknown[];
      business_environment: unknown[];
    };
  };

  it("source pack declares 26 ECO tasks / People 8", () => {
    expect(sourceJson.version).toBe("1.1");
    expect(sourceJson.eco.totalTasks).toBe(26);
    expect(sourceJson.eco.people).toHaveLength(8);
    expect(sourceJson.eco.process).toHaveLength(10);
    expect(sourceJson.eco.business_environment).toHaveLength(8);
  });

  it("source pack includes PEOPLE-T07 and PEOPLE-T08 as PMI_ECO_2026 HIGH", () => {
    const t07 = sourceJson.eco.people.find((t) => t.stableId === "PEOPLE-T07");
    const t08 = sourceJson.eco.people.find((t) => t.stableId === "PEOPLE-T08");
    expect(t07?.legacyCode).toBe("PE-07");
    expect(t08?.legacyCode).toBe("PE-08");
    expect(t07?.sourceType).toBe("PMI_ECO_2026");
    expect(t08?.sourceType).toBe("PMI_ECO_2026");
    expect(t07?.sourceConfidence).toBe("HIGH");
    expect(t08?.sourceConfidence).toBe("HIGH");
  });

  it("code taxonomy remains 26 / 8 / 10 / 8 with T07 T08", () => {
    expect(ECO_TASK_COUNT).toBe(26);
    expect(ECO_TASKS.filter((t) => t.domainId === "PEOPLE")).toHaveLength(8);
    expect(ECO_TASKS.filter((t) => t.domainId === "PROCESS")).toHaveLength(10);
    expect(ECO_TASKS.filter((t) => t.domainId === "BUSINESS")).toHaveLength(8);
    expect(legacyToStableEcoId("PE-07")).toBe("PEOPLE-T07");
    expect(legacyToStableEcoId("PE-08")).toBe("PEOPLE-T08");
    const t07 = getEcoTaskById("PEOPLE-T07");
    const t08 = getEcoTaskById("PEOPLE-T08");
    expect(t07.sourceType).toBe("PMI_ECO_2026");
    expect(t08.sourceType).toBe("PMI_ECO_2026");
    expect(t07.sourceConfidence).toBe("HIGH");
    expect(t08.sourceConfidence).toBe("HIGH");
  });

  it("preserves concept/skill links for T07 and T08", () => {
    expect(getConcept("knowledge-transfer")?.ecoTaskIds).toContain("PEOPLE-T07");
    expect(getConcept("communication-planning")?.ecoTaskIds).toContain("PEOPLE-T08");
    expect(getConcept("communication-vs-engagement")?.ecoTaskIds).toEqual(
      expect.arrayContaining(["PEOPLE-T04", "PEOPLE-T08"])
    );
    expect(getMasterySkill("skill-enable-knowledge-transfer")?.conceptId).toBe(
      "knowledge-transfer"
    );
    expect(getMasterySkill("skill-communication-strategy")?.conceptId).toBe(
      "communication-planning"
    );
    expect(getMasterySkill("skill-tailor-communication")?.conceptId).toBe(
      "communication-planning"
    );
    expect(
      MISCONCEPTIONS.some((m) => m.id === "mc-communication-engagement")
    ).toBe(true);
  });

  it("does not alter protected 200 exam stems or externalKeys", () => {
    expect(PMP_EXAM_BANK).toHaveLength(200);
    expect(PMP_EXAM_BANK_STEMS).toHaveLength(200);
    for (let i = 0; i < 200; i += 1) {
      const n = String(i + 1).padStart(3, "0");
      expect(PMP_EXAM_BANK[i].externalKey).toBe(`pmp-exam-${n}`);
      expect(PMP_EXAM_BANK_STEMS[i].externalKey).toBe(`pmp-exam-${n}`);
      expect(PMP_EXAM_BANK[i].promptEn).toBe(PMP_EXAM_BANK_STEMS[i].promptEn);
      expect(PMP_EXAM_BANK[i].options).toEqual(PMP_EXAM_BANK_STEMS[i].options);
    }
  });
});
