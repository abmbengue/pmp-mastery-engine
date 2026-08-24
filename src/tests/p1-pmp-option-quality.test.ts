import { describe, expect, it } from "vitest";
import { PMP_EXAM_BANK } from "../../prisma/seed/pmp-exam-bank-data";

describe("P1 PMP option content quality", () => {
  it("keeps 200 questions with correct answers present", () => {
    expect(PMP_EXAM_BANK.length).toBe(200);
    for (const q of PMP_EXAM_BANK) {
      expect(q.options.some((o) => o.isCorrect)).toBe(true);
      expect(q.options.length).toBeGreaterThanOrEqual(2);
    }
  });

  it("rejects exact duplicate options within a question", () => {
    for (const q of PMP_EXAM_BANK) {
      const en = q.options.map((o) => o.labelEn);
      const fr = q.options.map((o) => o.labelFr);
      expect(new Set(en).size).toBe(en.length);
      expect(new Set(fr).size).toBe(fr.length);
    }
  });

  it("limits option label reuse across the bank", () => {
    const freqEn = new Map<string, number>();
    const freqCorrect = new Map<string, number>();
    for (const q of PMP_EXAM_BANK) {
      for (const o of q.options) {
        freqEn.set(o.labelEn, (freqEn.get(o.labelEn) ?? 0) + 1);
        if (o.isCorrect) {
          freqCorrect.set(o.labelEn, (freqCorrect.get(o.labelEn) ?? 0) + 1);
        }
      }
    }
    const maxAny = Math.max(...freqEn.values());
    const maxCorrect = Math.max(...freqCorrect.values());
    // P1 target: no mechanical stem reuse (audit flagged 14–16×)
    expect(maxAny).toBeLessThanOrEqual(3);
    expect(maxCorrect).toBeLessThanOrEqual(2);
  });

  it("requires bilingual FR/EN options and scenarios", () => {
    for (const q of PMP_EXAM_BANK) {
      expect(q.scenarioFr).not.toEqual(q.scenarioEn);
      expect(q.promptFr).not.toEqual(q.promptEn);
      for (const o of q.options) {
        expect(o.labelFr.length).toBeGreaterThan(8);
        expect(o.labelEn.length).toBeGreaterThan(8);
        expect(o.labelFr).not.toEqual(o.labelEn);
      }
    }
  });

  it("keeps distractors with wrong-option explanations on single-choice items", () => {
    const single = PMP_EXAM_BANK.filter((q) => q.type === "SINGLE_CHOICE");
    expect(single.length).toBeGreaterThan(100);
    for (const q of single) {
      const wrong = q.options.filter((o) => !o.isCorrect);
      expect(wrong.length).toBeGreaterThanOrEqual(2);
      expect(wrong.every((o) => o.explanationWrongEn && o.explanationWrongFr)).toBe(true);
    }
  });

  it("preserves external keys and does not claim PMI/PMBOK copyrighted wording", () => {
    const keys = PMP_EXAM_BANK.map((q) => q.externalKey);
    expect(new Set(keys).size).toBe(200);
    const blob = JSON.stringify(PMP_EXAM_BANK).toLowerCase();
    expect(blob).not.toContain("pmbok®");
    expect(blob).not.toContain("pmi©");
  });
});
