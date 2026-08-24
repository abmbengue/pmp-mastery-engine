import type { Locale } from "@/shared/types/locale";

/** Context passed to the AI Tutor for contextual responses */
export interface AiTutorContext {
  lessonId?: string;
  lessonTitle?: string;
  conceptSlug?: string;
  userLevel?: "beginner" | "intermediate" | "advanced";
  locale: Locale;
  recentAnswer?: {
    questionId: string;
    selectedOptionIds: string[];
    isCorrect: boolean;
  };
}

export type AiTutorAction =
  | "explain_concept"
  | "explain_like_beginner"
  | "give_example"
  | "test_me"
  | "why_wrong"
  | "explain_in_french"
  | "explain_in_english";

export interface AiTutorRequest {
  action: AiTutorAction;
  context: AiTutorContext;
  userMessage?: string;
}

export interface AiTutorResponse {
  message: string;
  locale: Locale;
  isStub: boolean;
}

/**
 * Port interface for the AI Tutor.
 * Implementations can be swapped without modifying the learning engine.
 */
export interface AiTutorPort {
  ask(request: AiTutorRequest): Promise<AiTutorResponse>;
}
