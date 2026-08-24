import { describe, it, expect } from "vitest";
import {
  textPayloadSchema,
  videoPayloadSchema,
  simulationPayloadSchema,
  assessmentPayloadSchema,
  validateLearningItemPayload,
  isShortVideoPayload,
} from "@/shared/types/content-payloads";

describe("content payload validation", () => {
  it("validates text payload", () => {
    const payload = { bodyFr: "Texte", bodyEn: "Text" };
    expect(textPayloadSchema.parse(payload)).toEqual(payload);
  });

  it("validates video placeholder payload with aliases", () => {
    const payload = {
      url: null,
      durationSec: null,
      titleFr: "Vidéo",
      titleEn: "Video",
      language: "both" as const,
      thumbnailUrl: null,
      descriptionFr: "Description FR",
      descriptionEn: "Description EN",
      isPlaceholder: true,
    };
    const parsed = videoPayloadSchema.parse(payload);
    expect(parsed.videoUrl).toBeNull();
    expect(parsed.durationSeconds).toBeNull();
    expect(parsed.isPlaceholder).toBe(true);
    expect(parsed.isShort).toBe(false);
  });

  it("validates short video metadata under 3 minutes", () => {
    const parsed = videoPayloadSchema.parse({
      videoUrl: null,
      durationSeconds: 150,
      titleFr: "Short FR",
      titleEn: "Short EN",
      language: "both",
      thumbnailUrl: null,
      descriptionFr: "d",
      descriptionEn: "d",
      isPlaceholder: true,
      isShort: true,
      topic: "income",
      difficulty: "BEGINNER",
      academySlug: "personal-finance",
      relatedSkillSlug: "pf-income",
    });
    expect(isShortVideoPayload(parsed)).toBe(true);
    expect(parsed.durationSeconds).toBe(150);
    expect(parsed.topic).toBe("income");
  });

  it("rejects short videos longer than 180 seconds", () => {
    expect(() =>
      videoPayloadSchema.parse({
        videoUrl: null,
        durationSeconds: 240,
        titleFr: "Too long",
        titleEn: "Too long",
        language: "both",
        thumbnailUrl: null,
        descriptionFr: "d",
        descriptionEn: "d",
        isPlaceholder: true,
        isShort: true,
      })
    ).toThrow();
  });

  it("rejects invalid video payload", () => {
    expect(() => videoPayloadSchema.parse({ titleFr: "x", titleEn: "y" })).toThrow();
  });

  it("validates simulation and assessment placeholders", () => {
    expect(
      simulationPayloadSchema.parse({
        titleFr: "Sim",
        titleEn: "Sim",
        isPlaceholder: true,
      }).isPlaceholder
    ).toBe(true);
    expect(
      assessmentPayloadSchema.parse({
        titleFr: "Exam",
        titleEn: "Exam",
        questionCount: 10,
      }).isPlaceholder
    ).toBe(true);
  });

  it("validates via type dispatcher for all architecture types", () => {
    expect(validateLearningItemPayload("TEXT", { bodyFr: "FR", bodyEn: "EN" }).bodyFr).toBe("FR");
    expect(
      validateLearningItemPayload("SIMULATION", {
        titleFr: "S",
        titleEn: "S",
      }).titleEn
    ).toBe("S");
    expect(
      validateLearningItemPayload("ASSESSMENT", {
        titleFr: "A",
        titleEn: "A",
      }).titleFr
    ).toBe("A");
  });
});
