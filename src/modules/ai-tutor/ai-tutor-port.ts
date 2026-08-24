import type { Locale } from "@/shared/types/locale";

/**
 * Pedagogical modes for the AI Tutor V1.
 * HINT  — guide without revealing the answer
 * EXPLAIN — clarify a concept simply
 * TEACH — teach with example + check question
 * EXPLAIN_MISTAKE — help after a wrong quiz answer
 */
export type AiTutorMode = "HINT" | "EXPLAIN" | "TEACH" | "EXPLAIN_MISTAKE";

/** @deprecated Prefer AiTutorMode — kept for compatibility */
export type AiTutorAction =
  | AiTutorMode
  | "explain_concept"
  | "explain_like_beginner"
  | "give_example"
  | "test_me"
  | "why_wrong"
  | "give_hint"
  | "explain_in_french"
  | "explain_in_english";

export interface AiTutorQuestionContext {
  id: string;
  prompt: string;
  /** Labels of options the user selected (never passwords / PII) */
  userAnswerLabels?: string[];
  /** Correct option labels — omitted from HINT prompts by the prompt builder */
  correctAnswerLabels?: string[];
  explanation?: string;
  isCorrect?: boolean;
}

/** Minimal educational context — never include password, hash, or other users' data */
export interface AiTutorContext {
  locale: Locale;
  academySlug?: string;
  academyTitle?: string;
  courseSlug?: string;
  courseTitle?: string;
  moduleSlug?: string;
  moduleTitle?: string;
  lessonId?: string;
  lessonTitle?: string;
  lessonDescription?: string;
  skillSlug?: string;
  skillTitle?: string;
  learningItemType?: string;
  userLevel?: "beginner" | "intermediate" | "advanced";
  question?: AiTutorQuestionContext;
  /** Legacy field used by early stubs */
  conceptSlug?: string;
  recentAnswer?: {
    questionId: string;
    selectedOptionIds: string[];
    isCorrect: boolean;
  };
}

export interface AiTutorRequest {
  action: AiTutorAction;
  context: AiTutorContext;
  userMessage?: string;
}

export interface AiTutorResponse {
  message: string;
  locale: Locale;
  isStub: boolean;
  mode?: AiTutorMode;
  provider?: string;
}

export class AiTutorError extends Error {
  constructor(
    message: string,
    public readonly code:
      | "PROVIDER_UNAVAILABLE"
      | "TIMEOUT"
      | "INVALID_RESPONSE"
      | "MISSING_API_KEY"
      | "RATE_LIMIT"
      | "MALFORMED_REQUEST"
      | "UNKNOWN",
    public readonly cause?: unknown
  ) {
    super(message);
    this.name = "AiTutorError";
  }
}

/**
 * Port interface for the AI Tutor.
 * Implementations can be swapped without modifying the learning engine or UI.
 */
export interface AiTutorPort {
  readonly providerName: string;
  ask(request: AiTutorRequest): Promise<AiTutorResponse>;
}

export function normalizeAiTutorMode(action: AiTutorAction): AiTutorMode {
  switch (action) {
    case "HINT":
    case "give_hint":
      return "HINT";
    case "TEACH":
    case "give_example":
    case "test_me":
    case "explain_like_beginner":
      return "TEACH";
    case "EXPLAIN_MISTAKE":
    case "why_wrong":
      return "EXPLAIN_MISTAKE";
    case "EXPLAIN":
    case "explain_concept":
    case "explain_in_french":
    case "explain_in_english":
    default:
      return "EXPLAIN";
  }
}
