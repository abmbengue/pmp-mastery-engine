import type {
  AiTutorPort,
  AiTutorRequest,
  AiTutorResponse,
} from "@/modules/ai-tutor/ai-tutor-port";

/**
 * No-op AI Tutor implementation for V1.
 * Returns stub messages indicating the feature is not yet connected.
 * Replace with a real LLM provider implementation in a future phase.
 */
export class NoopAiTutor implements AiTutorPort {
  async ask(request: AiTutorRequest): Promise<AiTutorResponse> {
    const locale = request.context.locale;
    const message =
      locale === "fr"
        ? "Le tuteur IA n'est pas encore connecté. Cette fonctionnalité sera disponible prochainement."
        : "The AI Tutor is not connected yet. This feature will be available soon.";

    return { message, locale, isStub: true };
  }
}

export const noopAiTutor = new NoopAiTutor();
