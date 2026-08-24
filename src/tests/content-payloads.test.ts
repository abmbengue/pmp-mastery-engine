import { describe, it, expect } from "vitest";
import {
  textPayloadSchema,
  videoPayloadSchema,
  validateLearningItemPayload,
} from "@/shared/types/content-payloads";

describe("content payload validation", () => {
  it("validates text payload", () => {
    const payload = { bodyFr: "Texte", bodyEn: "Text" };
    expect(textPayloadSchema.parse(payload)).toEqual(payload);
  });

  it("validates video placeholder payload", () => {
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
    expect(videoPayloadSchema.parse(payload)).toEqual(payload);
  });

  it("rejects invalid video payload", () => {
    expect(() =>
      videoPayloadSchema.parse({ titleFr: "x", titleEn: "y" })
    ).toThrow();
  });

  it("validates via type dispatcher", () => {
    const result = validateLearningItemPayload("TEXT", {
      bodyFr: "FR",
      bodyEn: "EN",
    });
    expect(result.bodyFr).toBe("FR");
  });
});
