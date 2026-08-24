import { describe, expect, it } from "vitest";
import {
  resolveMediaAsset,
  PlaceholderMediaProvider,
  ExternalMediaProvider,
} from "@/modules/media";
import { videoPayloadSchema } from "@/shared/types/content-payloads";
import { generateReadinessReportPdf } from "@/modules/assessment-engine/readiness-report-pdf";
import { buildSimplePdf } from "@/modules/assessment-engine/simple-pdf";
import { validateLessonCatalog } from "@/modules/content/content-validator";
import { listPlannedAcademies, ACADEMY_ACTIVATION_STEPS } from "@/modules/content/planned-academies";
import { PF_LESSONS } from "../../prisma/seed/content/pf-lessons";
import { CF_LESSONS } from "../../prisma/seed/content/cf-lessons";
import { PMP_LESSONS } from "../../prisma/seed/content/pmp-lessons";
import type { ReadinessReport } from "@/modules/assessment-engine/readiness-report-service";

describe("Phase 11 media abstraction", () => {
  it("resolves placeholder when no URL", () => {
    const media = resolveMediaAsset({ videoUrl: null, isPlaceholder: true });
    expect(media.provider).toBe("placeholder");
    expect(media.url).toBeNull();
    expect(media.isPlaceholder).toBe(true);
  });

  it("resolves external URL without changing players", () => {
    const media = resolveMediaAsset({
      videoUrl: "https://cdn.example.com/demo.mp4",
      provider: "external",
      isPlaceholder: false,
    });
    expect(media.provider).toBe("external");
    expect(media.url).toContain("demo.mp4");
    expect(new ExternalMediaProvider().id).toBe("external");
    expect(new PlaceholderMediaProvider().id).toBe("placeholder");
  });

  it("validates VIDEO payload with provider field", () => {
    const parsed = videoPayloadSchema.parse({
      titleFr: "Test",
      titleEn: "Test",
      language: "both",
      thumbnailUrl: null,
      descriptionFr: "d",
      descriptionEn: "d",
      isPlaceholder: true,
      isShort: true,
      durationSeconds: 120,
      provider: "placeholder",
      relatedLessonSlug: "emergency-fund",
      learningObjective: "IDENTIFY",
    });
    expect(parsed.provider).toBe("placeholder");
    expect(parsed.relatedLessonSlug).toBe("emergency-fund");
  });
});

describe("Phase 11 readiness PDF", () => {
  const sample: ReadinessReport = {
    disclaimerEn: "Practice Readiness — NOT AN OFFICIAL PMI SCORE",
    disclaimerFr: "Preparation pratique — PAS UN SCORE PMI OFFICIEL",
    disclaimer: "Practice Readiness — NOT AN OFFICIAL PMI SCORE",
    practiceReadiness: "DEVELOPING",
    readinessExplanation: "Keep practicing",
    averageScore: 70,
    bestScore: 80,
    recentScore: 72,
    scoreTrend: "UP",
    evolution: [60, 70, 72],
    questionsAnswered: 40,
    targetScorePercent: 80,
    targetGap: 10,
    domains: [
      { domain: "PEOPLE", percentage: 70, band: "LEARNING", total: 10 },
      { domain: "PROCESS", percentage: 65, band: "LEARNING", total: 10 },
      { domain: "BUSINESS_ENVIRONMENT", percentage: 60, band: "WEAK", total: 5 },
    ],
    delivery: [
      { approach: "AGILE", percentage: 70, band: "LEARNING", total: 5 },
      { approach: "HYBRID", percentage: 60, band: "WEAK", total: 5 },
      { approach: "PREDICTIVE", percentage: 55, band: "WEAK", total: 5 },
    ],
    weakSkills: [{ slug: "risk-management", title: "Risk", level: "WEAK" }],
    recurringErrors: [{ category: "RISK_ERROR", count: 3 }],
    retryAverage: 75,
    recommendedActions: [
      { title: "Review risk", reason: "Weak skill", path: "/review" },
    ],
    narrative: "Keep practicing. Not an official PMI score.",
  };

  it("generates a PDF buffer with PMI disclaimer", () => {
    const pdf = generateReadinessReportPdf(sample, "en");
    expect(pdf.byteLength).toBeGreaterThan(200);
    const text = Buffer.from(pdf).toString("latin1");
    expect(text.startsWith("%PDF")).toBe(true);
    expect(text).toContain("NOT AN OFFICIAL PMI SCORE");
  });

  it("generates FR PDF with French disclaimer", () => {
    const frReport = { ...sample, disclaimer: sample.disclaimerFr };
    const pdf = generateReadinessReportPdf(frReport, "fr");
    const text = Buffer.from(pdf).toString("latin1");
    expect(text).toContain("PAS UN SCORE PMI OFFICIEL");
  });

  it("simple pdf writer is deterministic for same lines", () => {
    const a = buildSimplePdf(["Hello"], "T");
    const b = buildSimplePdf(["Hello"], "T");
    expect(Buffer.from(a).equals(Buffer.from(b))).toBe(true);
  });
});

describe("Phase 11 content validation", () => {
  it("accepts production catalogs", () => {
    expect(validateLessonCatalog(PF_LESSONS).ok).toBe(true);
    expect(validateLessonCatalog(CF_LESSONS).ok).toBe(true);
    expect(validateLessonCatalog(PMP_LESSONS as never).ok).toBe(true);
  });

  it("detects missing FR and quiz without correct answer", () => {
    const bad = validateLessonCatalog([
      {
        ...PF_LESSONS[0],
        slug: "bad-lesson",
        titleFr: "",
        question: {
          ...PF_LESSONS[0].question,
          options: [
            { labelFr: "A", labelEn: "A", isCorrect: false },
            { labelFr: "B", labelEn: "B", isCorrect: false },
          ],
        },
      },
    ]);
    expect(bad.ok).toBe(false);
    expect(bad.issues.some((i) => i.code === "MISSING_FR")).toBe(true);
    expect(bad.issues.some((i) => i.code === "QUIZ_NO_CORRECT")).toBe(true);
  });

  it("detects short over 180 seconds", () => {
    const bad = validateLessonCatalog([
      {
        ...PF_LESSONS[0],
        slug: "long-short",
        isShort: true,
        shortDurationSeconds: 240,
      },
    ]);
    expect(bad.issues.some((i) => i.code === "SHORT_TOO_LONG")).toBe(true);
  });
});

describe("Phase 11 planned academies config", () => {
  it("lists five planned academies without activating them", () => {
    const planned = listPlannedAcademies();
    expect(planned).toHaveLength(5);
    expect(planned.every((a) => a.status === "PLANNED")).toBe(true);
    expect(ACADEMY_ACTIVATION_STEPS.length).toBeGreaterThan(3);
  });
});
