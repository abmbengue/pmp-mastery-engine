import type {
  AiTutorPort,
  AiTutorRequest,
  AiTutorResponse,
} from "@/modules/ai-tutor/ai-tutor-port";
import { normalizeAiTutorMode } from "@/modules/ai-tutor/ai-tutor-port";

/**
 * No-op AI Tutor — used when no API key is configured (dev / CI / demo).
 * Application keeps working; UI shows a clear stub message.
 */
export class NoopAiTutor implements AiTutorPort {
  readonly providerName = "noop";

  async ask(request: AiTutorRequest): Promise<AiTutorResponse> {
    const locale = request.context.locale;
    const mode = normalizeAiTutorMode(request.action);
    const message =
      locale === "fr"
        ? "Le tuteur IA n'est pas connecté (mode Noop). Configurez AI_PROVIDER et AI_API_KEY pour activer un fournisseur réel. En attendant, relisez l'explication de la leçon et réessayez le quiz."
        : "The AI Tutor is not connected (Noop mode). Set AI_PROVIDER and AI_API_KEY to enable a real provider. Meanwhile, review the lesson explanation and retry the quiz.";

    return {
      message,
      locale,
      isStub: true,
      mode,
      provider: this.providerName,
    };
  }
}

export const noopAiTutor = new NoopAiTutor();
