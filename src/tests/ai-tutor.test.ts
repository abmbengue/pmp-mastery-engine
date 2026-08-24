import { describe, it, expect, beforeEach, vi } from "vitest";
import {
  normalizeAiTutorMode,
  AiTutorError,
} from "@/modules/ai-tutor/ai-tutor-port";
import { NoopAiTutor } from "@/modules/ai-tutor/providers/noop-ai-tutor";
import { MockAiTutor } from "@/modules/ai-tutor/providers/mock-ai-tutor";
import {
  AiTutorService,
  createAiTutorProvider,
  __resetAiTutorServiceForTests,
} from "@/modules/ai-tutor/ai-tutor-service";
import { getAiTutorConfig } from "@/modules/ai-tutor/ai-tutor-config";
import { buildAiTutorPrompts } from "@/modules/ai-tutor/prompts";

describe("NoopAiTutor", () => {
  it("returns stub message in French", async () => {
    const response = await new NoopAiTutor().ask({
      action: "EXPLAIN",
      context: { locale: "fr", lessonId: "test" },
    });
    expect(response.isStub).toBe(true);
    expect(response.message).toContain("tuteur IA");
    expect(response.provider).toBe("noop");
  });

  it("returns stub message in English", async () => {
    const response = await new NoopAiTutor().ask({
      action: "EXPLAIN",
      context: { locale: "en", lessonId: "test" },
    });
    expect(response.isStub).toBe(true);
    expect(response.message).toContain("AI Tutor");
  });
});

describe("MockAiTutor", () => {
  it("returns FR explain response", async () => {
    const response = await new MockAiTutor().ask({
      action: "EXPLAIN",
      context: { locale: "fr", lessonTitle: "Intérêt composé", skillTitle: "Capitalisation" },
    });
    expect(response.isStub).toBe(false);
    expect(response.locale).toBe("fr");
    expect(response.message).toContain("Capitalisation");
  });

  it("returns EN hint response", async () => {
    const response = await new MockAiTutor().ask({
      action: "HINT",
      context: { locale: "en", skillTitle: "Compound Interest" },
    });
    expect(response.message.toLowerCase()).toContain("hint");
    expect(response.mode).toBe("HINT");
  });

  it("handles wrong-answer explain mistake", async () => {
    const response = await new MockAiTutor().ask({
      action: "EXPLAIN_MISTAKE",
      context: {
        locale: "en",
        skillTitle: "Income",
        question: {
          id: "q1",
          prompt: "Which is passive income?",
          userAnswerLabels: ["Salary"],
          correctAnswerLabels: ["Dividends"],
          explanation: "Dividends do not require trading time.",
          isCorrect: false,
        },
      },
    });
    expect(response.message).toContain("Income");
    expect(response.message).toContain("Dividends do not require trading time.");
  });

  it("can simulate provider failure", async () => {
    await expect(
      new MockAiTutor({ fail: true }).ask({
        action: "EXPLAIN",
        context: { locale: "en" },
      })
    ).rejects.toThrow(/forced failure/);
  });
});

describe("AiTutorService", () => {
  it("normalizes legacy actions to modes", () => {
    expect(normalizeAiTutorMode("give_hint")).toBe("HINT");
    expect(normalizeAiTutorMode("why_wrong")).toBe("EXPLAIN_MISTAKE");
    expect(normalizeAiTutorMode("explain_concept")).toBe("EXPLAIN");
  });

  it("wraps provider failures as AiTutorError", async () => {
    const service = new AiTutorService(new MockAiTutor({ fail: true }));
    await expect(
      service.ask({ action: "EXPLAIN", context: { locale: "en" } })
    ).rejects.toBeInstanceOf(AiTutorError);
  });

  it("falls back to noop when openai has no key", () => {
    const provider = createAiTutorProvider(
      getAiTutorConfig({ AI_PROVIDER: "openai", AI_API_KEY: "" })
    );
    expect(provider.providerName).toBe("noop");
  });
});

describe("prompt/context design", () => {
  it("omits correct answer from HINT prompts", () => {
    const { user } = buildAiTutorPrompts(
      {
        action: "HINT",
        context: {
          locale: "en",
          lessonTitle: "Income",
          question: {
            id: "q1",
            prompt: "Which is passive?",
            userAnswerLabels: ["Salary"],
            correctAnswerLabels: ["SECRET_CORRECT"],
            explanation: "SECRET_EXPLANATION",
          },
        },
      },
      "HINT",
      4000
    );
    expect(user).not.toContain("SECRET_CORRECT");
    expect(user).not.toContain("SECRET_EXPLANATION");
    expect(user).toContain("Salary");
  });

  it("includes correct answer for EXPLAIN_MISTAKE", () => {
    const { user } = buildAiTutorPrompts(
      {
        action: "EXPLAIN_MISTAKE",
        context: {
          locale: "fr",
          question: {
            id: "q1",
            prompt: "Question?",
            correctAnswerLabels: ["Bonne réponse"],
            explanation: "Parce que…",
          },
        },
      },
      "EXPLAIN_MISTAKE",
      4000
    );
    expect(user).toContain("Bonne réponse");
    expect(user).toContain("Parce que…");
  });
});

describe("AI Tutor API", () => {
  beforeEach(() => {
    vi.resetModules();
    __resetAiTutorServiceForTests();
    vi.stubEnv("AI_PROVIDER", "mock");
  });

  it("rejects unauthorized requests", async () => {
    vi.doMock("@/auth", () => ({ auth: vi.fn().mockResolvedValue(null) }));
    const { POST } = await import("@/app/api/ai-tutor/route");
    const response = await POST(
      new Request("http://localhost/api/ai-tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode: "EXPLAIN", locale: "en" }),
      })
    );
    expect(response.status).toBe(401);
  });

  it("validates request body", async () => {
    vi.doMock("@/auth", () => ({
      auth: vi.fn().mockResolvedValue({ user: { id: "u1" } }),
    }));
    const { POST } = await import("@/app/api/ai-tutor/route");
    const response = await POST(
      new Request("http://localhost/api/ai-tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode: "INVALID", locale: "en" }),
      })
    );
    expect(response.status).toBe(400);
  });

  it("returns success with mock provider", async () => {
    vi.doMock("@/auth", () => ({
      auth: vi.fn().mockResolvedValue({ user: { id: "u1" } }),
    }));
    __resetAiTutorServiceForTests();
    const { POST } = await import("@/app/api/ai-tutor/route");
    const response = await POST(
      new Request("http://localhost/api/ai-tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: "EXPLAIN",
          locale: "en",
          academySlug: "personal-finance",
          courseSlug: "essentials",
          moduleSlug: "foundations",
          lessonSlug: "understanding-income",
        }),
      })
    );
    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data.ok).toBe(true);
    expect(data.message).toBeTruthy();
    expect(data.provider).toBe("mock");
  });

  it("returns unavailable when provider fails", async () => {
    vi.doMock("@/auth", () => ({
      auth: vi.fn().mockResolvedValue({ user: { id: "u1" } }),
    }));
    vi.doMock("@/modules/ai-tutor/ai-tutor-service", async () => {
      const actual = await vi.importActual<typeof import("@/modules/ai-tutor/ai-tutor-service")>(
        "@/modules/ai-tutor/ai-tutor-service"
      );
      return {
        ...actual,
        getAiTutorService: () =>
          new actual.AiTutorService(new MockAiTutor({ fail: true })),
      };
    });
    const { POST } = await import("@/app/api/ai-tutor/route");
    const response = await POST(
      new Request("http://localhost/api/ai-tutor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mode: "HINT", locale: "fr" }),
      })
    );
    expect(response.status).toBe(503);
    const data = await response.json();
    expect(data.error).toBe("ai_tutor_unavailable");
  });
});
