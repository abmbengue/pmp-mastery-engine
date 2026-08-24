import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/auth", () => ({
  auth: vi.fn(),
}));

describe("API authorization", () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it("rejects unauthorized lesson progress requests", async () => {
    const { auth } = await import("@/auth");
    vi.mocked(auth).mockResolvedValue(null);
    const { POST } = await import("@/app/api/lesson/progress/route");
    const request = new Request("http://localhost/api/lesson/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        academySlug: "personal-finance",
        courseSlug: "essentials",
        moduleSlug: "foundations",
        lessonSlug: "understanding-income",
        phase: "LEARN",
        timeSpentSec: 10,
      }),
    });
    const response = await POST(request);
    expect(response.status).toBe(401);
  });

  it("rejects unauthorized lesson completion requests", async () => {
    const { auth } = await import("@/auth");
    vi.mocked(auth).mockResolvedValue(null);
    const { POST } = await import("@/app/api/lesson/complete/route");
    const request = new Request("http://localhost/api/lesson/complete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        academySlug: "personal-finance",
        courseSlug: "essentials",
        moduleSlug: "foundations",
        lessonSlug: "understanding-income",
        timeSpentSec: 10,
        quizScore: 100,
      }),
    });
    const response = await POST(request);
    expect(response.status).toBe(401);
  });

  it("rejects unauthorized quiz attempt requests", async () => {
    const { auth } = await import("@/auth");
    vi.mocked(auth).mockResolvedValue(null);
    const { POST } = await import("@/app/api/quiz/attempt/route");
    const request = new Request("http://localhost/api/quiz/attempt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ learningItemId: "x", answers: [] }),
    });
    const response = await POST(request);
    expect(response.status).toBe(401);
  });

  it("rejects unauthorized AI tutor requests", async () => {
    const { auth } = await import("@/auth");
    vi.mocked(auth).mockResolvedValue(null);
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

  it("rejects unauthorized short completion requests", async () => {
    const { auth } = await import("@/auth");
    vi.mocked(auth).mockResolvedValue(null);
    const { POST } = await import("@/app/api/shorts/complete/route");
    const response = await POST(
      new Request("http://localhost/api/shorts/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ shortId: "x", academySlug: "personal-finance" }),
      })
    );
    expect(response.status).toBe(401);
  });

  it("rejects unauthorized simulation completion requests", async () => {
    const { auth } = await import("@/auth");
    vi.mocked(auth).mockResolvedValue(null);
    const { POST } = await import("@/app/api/simulation/complete/route");
    const response = await POST(
      new Request("http://localhost/api/simulation/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ simulationType: "BUDGET", scenarioId: "BASE" }),
      })
    );
    expect(response.status).toBe(401);
  });

  it("rejects unauthorized exam start requests", async () => {
    const { auth } = await import("@/auth");
    vi.mocked(auth).mockResolvedValue(null);
    const { POST } = await import("@/app/api/exam/route");
    const response = await POST(
      new Request("http://localhost/api/exam", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ examSlug: "quick-practice" }),
      })
    );
    expect(response.status).toBe(401);
  });
});
