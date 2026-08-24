import { describe, expect, it } from "vitest";
import { PMP_EXAM_BANK } from "../../prisma/seed/pmp-exam-bank-data";

describe("PMP exam bank FR/EN consistency", () => {
  it("has at least 100 original bilingual questions", () => {
    expect(PMP_EXAM_BANK.length).toBeGreaterThanOrEqual(100);
  });

  it("keeps stable keys and bilingual fields for every item", () => {
    for (const q of PMP_EXAM_BANK) {
      expect(q.externalKey).toMatch(/^pmp-exam-\d{3}$/);
      expect(q.promptFr.length).toBeGreaterThan(5);
      expect(q.promptEn.length).toBeGreaterThan(5);
      expect(q.scenarioFr.length).toBeGreaterThan(5);
      expect(q.scenarioEn.length).toBeGreaterThan(5);
      expect(q.explanationCorrectFr.length).toBeGreaterThan(10);
      expect(q.explanationCorrectEn.length).toBeGreaterThan(10);
      expect(q.options.length).toBeGreaterThanOrEqual(2);
      expect(q.options.some((o) => o.isCorrect)).toBe(true);
      // FR and EN must both exist; they may differ in wording (not mechanical clones only)
      expect(q.promptFr).not.toEqual(q.promptEn);
      expect(q.scenarioFr).not.toEqual(q.scenarioEn);
    }
  });

  it("covers people / process / business and delivery approaches", () => {
    const domains = new Set(PMP_EXAM_BANK.map((q) => q.domain));
    expect(domains.has("PEOPLE")).toBe(true);
    expect(domains.has("PROCESS")).toBe(true);
    expect(domains.has("BUSINESS_ENVIRONMENT")).toBe(true);

    const approaches = new Set(PMP_EXAM_BANK.map((q) => q.deliveryApproach));
    expect(approaches.has("AGILE")).toBe(true);
    expect(approaches.has("HYBRID")).toBe(true);
    expect(approaches.has("PREDICTIVE")).toBe(true);

    const difficulties = new Set(PMP_EXAM_BANK.map((q) => q.examDifficulty));
    expect(difficulties.has("EASY")).toBe(true);
    expect(difficulties.has("MEDIUM")).toBe(true);
    expect(difficulties.has("HARD")).toBe(true);
  });

  it("does not embed protected PMI/PMBOK exam wording markers", () => {
    const blob = JSON.stringify(PMP_EXAM_BANK).toLowerCase();
    expect(blob).not.toContain("pmbok®");
    expect(blob).not.toContain("pmi©");
  });
});
