export type AiProviderName = "noop" | "mock" | "openai";

export type AiTutorRuntimeConfig = {
  provider: AiProviderName;
  model: string;
  apiKey: string | null;
  baseUrl: string;
  timeoutMs: number;
  maxUserMessageChars: number;
  maxContextChars: number;
};

/**
 * Reads AI Tutor configuration from environment.
 * Never expose these values to the browser.
 */
export function getAiTutorConfig(
  env: NodeJS.ProcessEnv = process.env
): AiTutorRuntimeConfig {
  const rawProvider = (env.AI_PROVIDER ?? "noop").toLowerCase();
  const apiKey = env.AI_API_KEY?.trim() || null;

  let provider: AiProviderName = "noop";
  if (rawProvider === "mock") provider = "mock";
  else if (rawProvider === "openai") provider = "openai";
  else if (rawProvider === "noop") provider = "noop";
  else if (rawProvider === "anthropic") {
    // Reserved for a future provider — fall back to noop until implemented
    provider = "noop";
  }

  // Missing key → safe fallback for local/CI/demo
  if (provider === "openai" && !apiKey) {
    provider = "noop";
  }

  return {
    provider,
    model: env.AI_MODEL?.trim() || "gpt-4o-mini",
    apiKey,
    baseUrl: env.AI_BASE_URL?.trim() || "https://api.openai.com/v1",
    timeoutMs: Number(env.AI_TIMEOUT_MS ?? 20_000) || 20_000,
    maxUserMessageChars: Number(env.AI_MAX_USER_MESSAGE_CHARS ?? 500) || 500,
    maxContextChars: Number(env.AI_MAX_CONTEXT_CHARS ?? 4000) || 4000,
  };
}
