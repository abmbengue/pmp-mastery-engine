import { describe, it, expect } from "vitest";
import { noopAiTutor } from "@/modules/ai-tutor/noop-ai-tutor";

describe("NoopAiTutor", () => {
  it("returns stub message in French", async () => {
    const response = await noopAiTutor.ask({
      action: "explain_concept",
      context: { locale: "fr", lessonId: "test" },
    });
    expect(response.isStub).toBe(true);
    expect(response.message).toContain("tuteur IA");
  });

  it("returns stub message in English", async () => {
    const response = await noopAiTutor.ask({
      action: "explain_concept",
      context: { locale: "en", lessonId: "test" },
    });
    expect(response.isStub).toBe(true);
    expect(response.message).toContain("AI Tutor");
  });
});
