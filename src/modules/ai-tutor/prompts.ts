import type {
  AiTutorContext,
  AiTutorMode,
  AiTutorRequest,
} from "@/modules/ai-tutor/ai-tutor-port";

const SAFETY_RULES_EN = `
You are a professional learning tutor for Professional Learning Academy.
Rules:
- Act as a tutor: guide, explain simply, use examples. Do NOT just give away answers.
- For HINT mode: never reveal the correct quiz answer; give a clue only.
- For EXPLAIN_MISTAKE: explain the misconception, then guide toward understanding.
- Respond ONLY in the user's language.
- Stay within general education. Never give personalized financial, legal, or tax advice.
- Never invent sources or claim to know documents not provided.
- For PMP topics: use only the provided platform context; do not reproduce PMBOK copyrighted text.
- Never ask for passwords or personal account data.
`.trim();

const SAFETY_RULES_FR = `
Tu es un tuteur pédagogique pour Professional Learning Academy.
Règles :
- Agis comme un tuteur : guide, explique simplement, donne un exemple. Ne donne PAS directement la réponse.
- En mode HINT : ne révèle jamais la bonne réponse du quiz ; donne seulement un indice.
- En mode EXPLAIN_MISTAKE : explique l'erreur de raisonnement, puis guide la compréhension.
- Réponds UNIQUEMENT dans la langue de l'utilisateur.
- Reste dans l'éducation générale. Aucun conseil financier, juridique ou fiscal personnalisé.
- N'invente pas de sources et ne prétends pas connaître un document non fourni.
- Pour le PMP : utilise uniquement le contexte fourni ; ne reproduis pas de texte protégé du PMBOK.
- Ne demande jamais de mot de passe ni de données de compte.
`.trim();

function modeInstructions(mode: AiTutorMode, locale: "fr" | "en"): string {
  if (locale === "fr") {
    switch (mode) {
      case "HINT":
        return "Mode HINT : donne un indice utile sans révéler la réponse. Pose éventuellement une question de réflexion.";
      case "TEACH":
        return "Mode TEACH : explique le concept, donne un exemple simple, puis pose une question de vérification courte.";
      case "EXPLAIN_MISTAKE":
        return "Mode EXPLAIN_MISTAKE : aide l'apprenant à comprendre pourquoi sa réponse est incorrecte, sans le juger.";
      case "EXPLAIN":
      default:
        return "Mode EXPLAIN : explique le concept clairement et simplement avec un exemple concret.";
    }
  }

  switch (mode) {
    case "HINT":
      return "HINT mode: give a useful clue without revealing the answer. Optionally ask a reflection question.";
    case "TEACH":
      return "TEACH mode: explain the concept, give a simple example, then ask a short check question.";
    case "EXPLAIN_MISTAKE":
      return "EXPLAIN_MISTAKE mode: help the learner understand why their answer is incorrect, without judgment.";
    case "EXPLAIN":
    default:
      return "EXPLAIN mode: clarify the concept simply with a concrete example.";
  }
}

function truncate(text: string, max: number): string {
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1)}…`;
}

/**
 * Builds provider prompts. HINT mode intentionally omits correct answers.
 */
export function buildAiTutorPrompts(
  request: AiTutorRequest,
  mode: AiTutorMode,
  maxContextChars: number
): { system: string; user: string } {
  const locale = request.context.locale;
  const safety = locale === "fr" ? SAFETY_RULES_FR : SAFETY_RULES_EN;
  const system = `${safety}\n\n${modeInstructions(mode, locale)}`;

  const ctx = request.context;
  const lines: string[] = [];

  lines.push(locale === "fr" ? "Contexte pédagogique :" : "Learning context:");
  if (ctx.academyTitle) lines.push(`- Academy: ${ctx.academyTitle}`);
  if (ctx.courseTitle) lines.push(`- Course: ${ctx.courseTitle}`);
  if (ctx.moduleTitle) lines.push(`- Module: ${ctx.moduleTitle}`);
  if (ctx.lessonTitle) lines.push(`- Lesson: ${ctx.lessonTitle}`);
  if (ctx.lessonDescription) lines.push(`- Lesson summary: ${ctx.lessonDescription}`);
  if (ctx.skillTitle) lines.push(`- Skill: ${ctx.skillTitle}`);
  if (ctx.learningItemType) lines.push(`- Item type: ${ctx.learningItemType}`);
  if (ctx.simulationType) {
    lines.push(`- Simulation: ${ctx.simulationType}`);
    if (ctx.simulationScenario) lines.push(`- Scenario: ${ctx.simulationScenario}`);
    if (ctx.simulationSummary) lines.push(`- Result summary: ${ctx.simulationSummary}`);
  }

  if (ctx.question) {
    lines.push(locale === "fr" ? "- Question :" : "- Question:");
    lines.push(`  ${ctx.question.prompt}`);
    if (ctx.question.userAnswerLabels?.length) {
      lines.push(
        locale === "fr"
          ? `  Réponse de l'apprenant : ${ctx.question.userAnswerLabels.join(", ")}`
          : `  Learner answer: ${ctx.question.userAnswerLabels.join(", ")}`
      );
    }
    // Never include correct answer for HINT
    if (mode !== "HINT" && ctx.question.correctAnswerLabels?.length) {
      lines.push(
        locale === "fr"
          ? `  Bonne réponse (pour le tuteur uniquement) : ${ctx.question.correctAnswerLabels.join(", ")}`
          : `  Correct answer (tutor only): ${ctx.question.correctAnswerLabels.join(", ")}`
      );
    }
    if (mode !== "HINT" && ctx.question.explanation) {
      lines.push(
        locale === "fr"
          ? `  Explication plateforme : ${ctx.question.explanation}`
          : `  Platform explanation: ${ctx.question.explanation}`
      );
    }
  }

  if (request.userMessage?.trim()) {
    lines.push(locale === "fr" ? "- Message apprenant :" : "- Learner message:");
    lines.push(`  ${request.userMessage.trim()}`);
  }

  lines.push(
    locale === "fr"
      ? "Réponds comme un tuteur concis (max ~180 mots)."
      : "Reply as a concise tutor (max ~180 words)."
  );

  const user = truncate(lines.join("\n"), maxContextChars);
  return { system, user };
}

export function sanitizeUserMessage(
  message: string | undefined,
  maxChars: number
): string | undefined {
  if (!message) return undefined;
  const cleaned = message.replace(/\s+/g, " ").trim();
  if (!cleaned) return undefined;
  return cleaned.slice(0, maxChars);
}

/** Strip fields that must never leave the server boundary toward a provider */
export function redactContextForLogging(context: AiTutorContext): Record<string, unknown> {
  return {
    locale: context.locale,
    academySlug: context.academySlug,
    courseSlug: context.courseSlug,
    moduleSlug: context.moduleSlug,
    lessonId: context.lessonId,
    skillSlug: context.skillSlug,
    hasQuestion: Boolean(context.question),
  };
}
