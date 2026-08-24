import {
  AiTutorError,
  normalizeAiTutorMode,
  type AiTutorPort,
  type AiTutorRequest,
  type AiTutorResponse,
} from "@/modules/ai-tutor/ai-tutor-port";
import { buildAiTutorPrompts } from "@/modules/ai-tutor/prompts";
import type { AiTutorRuntimeConfig } from "@/modules/ai-tutor/ai-tutor-config";

/**
 * OpenAI-compatible chat completions provider (native fetch — no SDK required).
 * Swap base URL / model via env without rewriting the app.
 */
export class OpenAiCompatibleAiTutor implements AiTutorPort {
  readonly providerName = "openai";

  constructor(private readonly config: AiTutorRuntimeConfig) {}

  async ask(request: AiTutorRequest): Promise<AiTutorResponse> {
    if (!this.config.apiKey) {
      throw new AiTutorError("AI_API_KEY is missing", "MISSING_API_KEY");
    }

    const mode = normalizeAiTutorMode(request.action);
    const { system, user } = buildAiTutorPrompts(
      request,
      mode,
      this.config.maxContextChars
    );

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), this.config.timeoutMs);

    try {
      const res = await fetch(`${this.config.baseUrl}/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.config.apiKey}`,
        },
        body: JSON.stringify({
          model: this.config.model,
          temperature: 0.4,
          max_tokens: 450,
          messages: [
            { role: "system", content: system },
            { role: "user", content: user },
          ],
        }),
        signal: controller.signal,
      });

      if (res.status === 429) {
        throw new AiTutorError("Provider rate limited", "RATE_LIMIT");
      }
      if (!res.ok) {
        throw new AiTutorError(
          `Provider unavailable (${res.status})`,
          "PROVIDER_UNAVAILABLE"
        );
      }

      const data = (await res.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
      };
      const message = data.choices?.[0]?.message?.content?.trim();
      if (!message) {
        throw new AiTutorError("Empty provider response", "INVALID_RESPONSE");
      }

      return {
        message,
        locale: request.context.locale,
        isStub: false,
        mode,
        provider: this.providerName,
      };
    } catch (err) {
      if (err instanceof AiTutorError) throw err;
      if (err instanceof Error && err.name === "AbortError") {
        throw new AiTutorError("Provider timeout", "TIMEOUT", err);
      }
      throw new AiTutorError("Provider unavailable", "PROVIDER_UNAVAILABLE", err);
    } finally {
      clearTimeout(timer);
    }
  }
}
