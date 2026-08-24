import { getAiTutorConfig, type AiTutorRuntimeConfig } from "@/modules/ai-tutor/ai-tutor-config";
import {
  AiTutorError,
  normalizeAiTutorMode,
  type AiTutorPort,
  type AiTutorRequest,
  type AiTutorResponse,
} from "@/modules/ai-tutor/ai-tutor-port";
import { redactContextForLogging, sanitizeUserMessage } from "@/modules/ai-tutor/prompts";
import { NoopAiTutor } from "@/modules/ai-tutor/providers/noop-ai-tutor";
import { MockAiTutor } from "@/modules/ai-tutor/providers/mock-ai-tutor";
import { OpenAiCompatibleAiTutor } from "@/modules/ai-tutor/providers/openai-compatible-ai-tutor";

export function createAiTutorProvider(
  config: AiTutorRuntimeConfig = getAiTutorConfig()
): AiTutorPort {
  switch (config.provider) {
    case "mock":
      return new MockAiTutor();
    case "openai":
      return new OpenAiCompatibleAiTutor(config);
    case "noop":
    default:
      return new NoopAiTutor();
  }
}

/**
 * Application-facing AI Tutor service.
 * UI and API talk only to this layer — never to a concrete provider.
 */
export class AiTutorService {
  constructor(
    private readonly provider: AiTutorPort,
    private readonly config: AiTutorRuntimeConfig = getAiTutorConfig()
  ) {}

  get providerName(): string {
    return this.provider.providerName;
  }

  async ask(request: AiTutorRequest): Promise<AiTutorResponse> {
    const started = Date.now();
    const mode = normalizeAiTutorMode(request.action);
    const safeRequest: AiTutorRequest = {
      ...request,
      action: mode,
      userMessage: sanitizeUserMessage(
        request.userMessage,
        this.config.maxUserMessageChars
      ),
    };

    try {
      const response = await this.provider.ask(safeRequest);
      this.log({
        ok: true,
        provider: this.provider.providerName,
        mode,
        durationMs: Date.now() - started,
        context: redactContextForLogging(safeRequest.context),
      });
      return { ...response, mode, provider: this.provider.providerName };
    } catch (err) {
      const code = err instanceof AiTutorError ? err.code : "UNKNOWN";
      this.log({
        ok: false,
        provider: this.provider.providerName,
        mode,
        durationMs: Date.now() - started,
        errorCode: code,
        context: redactContextForLogging(safeRequest.context),
      });
      throw err instanceof AiTutorError
        ? err
        : new AiTutorError("AI Tutor failed", "UNKNOWN", err);
    }
  }

  private log(payload: Record<string, unknown>) {
    // Technical logs only — never API keys, passwords, or full private content
    console.info("[ai-tutor]", JSON.stringify(payload));
  }
}

let defaultService: AiTutorService | null = null;

export function getAiTutorService(): AiTutorService {
  if (!defaultService) {
    const config = getAiTutorConfig();
    defaultService = new AiTutorService(createAiTutorProvider(config), config);
  }
  return defaultService;
}

/** Test helper — reset singleton between cases */
export function __resetAiTutorServiceForTests() {
  defaultService = null;
}

export function createAiTutorServiceForTests(provider: AiTutorPort): AiTutorService {
  return new AiTutorService(provider, getAiTutorConfig({ AI_PROVIDER: "mock" }));
}
