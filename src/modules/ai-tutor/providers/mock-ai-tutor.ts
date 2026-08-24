import type {
  AiTutorPort,
  AiTutorRequest,
  AiTutorResponse,
} from "@/modules/ai-tutor/ai-tutor-port";
import { normalizeAiTutorMode } from "@/modules/ai-tutor/ai-tutor-port";

/**
 * Deterministic mock provider for tests and local demos without external calls.
 */
export class MockAiTutor implements AiTutorPort {
  readonly providerName = "mock";

  constructor(private readonly options?: { fail?: boolean }) {}

  async ask(request: AiTutorRequest): Promise<AiTutorResponse> {
    if (this.options?.fail) {
      throw new Error("Mock provider forced failure");
    }

    const locale = request.context.locale;
    const mode = normalizeAiTutorMode(request.action);
    const concept =
      request.context.skillTitle ??
      request.context.lessonTitle ??
      request.context.conceptSlug ??
      (locale === "fr" ? "ce concept" : "this concept");

    let message: string;

    if (locale === "fr") {
      switch (mode) {
        case "HINT":
          message = `Indice : relisez la définition de « ${concept} » et éliminez les options qui contredisent l'idée principale. Quelle option reste la plus cohérente ?`;
          break;
        case "TEACH":
          message = `Enseignement : « ${concept} » se comprend mieux avec un exemple simple du quotidien. Après cet exemple, demandez-vous : puis-je l'expliquer en une phrase ?`;
          break;
        case "EXPLAIN_MISTAKE":
          message = `Votre réponse montre une confusion fréquente sur « ${concept} ». La plateforme explique : ${request.context.question?.explanation ?? "revoyez l'explication de la leçon"}. Concentrez-vous sur la différence clé, puis réessayez.`;
          break;
        case "EXPLAIN":
        default:
          message = `Explication : « ${concept} » est un concept clé de cette leçon. En termes simples : ${request.context.lessonDescription ?? "partez de la définition donnée dans le contenu"}.`;
      }
    } else {
      switch (mode) {
        case "HINT":
          message = `Hint: revisit the definition of “${concept}” and eliminate options that contradict the main idea. Which option remains most consistent?`;
          break;
        case "TEACH":
          message = `Teach: “${concept}” is clearer with a simple everyday example. After the example, ask yourself: can I explain it in one sentence?`;
          break;
        case "EXPLAIN_MISTAKE":
          message = `Your answer shows a common mix-up about “${concept}”. Platform explanation: ${request.context.question?.explanation ?? "review the lesson explanation"}. Focus on the key difference, then try again.`;
          break;
        case "EXPLAIN":
        default:
          message = `Explanation: “${concept}” is a key idea in this lesson. In simple terms: ${request.context.lessonDescription ?? "start from the definition in the learning content"}.`;
      }
    }

    return {
      message,
      locale,
      isStub: false,
      mode,
      provider: this.providerName,
    };
  }
}

export const mockAiTutor = new MockAiTutor();
