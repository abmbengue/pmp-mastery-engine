import type { CompactLesson } from "./types";

export type ContentValidationIssue = {
  code: string;
  path: string;
  message: string;
};

export type ContentValidationResult = {
  ok: boolean;
  issues: ContentValidationIssue[];
};

/**
 * Validates compact lesson catalogs before seed / handoff.
 * Pure — no DB access (relatedLessonSlug uniqueness checked within pack).
 */
export function validateLessonCatalog(
  lessons: CompactLesson[],
  options?: { requireShortDuration?: boolean }
): ContentValidationResult {
  const issues: ContentValidationIssue[] = [];
  const slugs = new Set<string>();

  for (const lesson of lessons) {
    const path = `${lesson.moduleSlug}/${lesson.slug}`;

    if (!lesson.slug?.trim()) {
      issues.push({ code: "MISSING_SLUG", path, message: "Lesson slug missing" });
    } else if (slugs.has(lesson.slug)) {
      issues.push({
        code: "DUPLICATE_SLUG",
        path,
        message: `Duplicate lesson slug: ${lesson.slug}`,
      });
    } else {
      slugs.add(lesson.slug);
    }

    if (!lesson.titleFr?.trim()) {
      issues.push({ code: "MISSING_FR", path, message: "titleFr missing" });
    }
    if (!lesson.titleEn?.trim()) {
      issues.push({ code: "MISSING_EN", path, message: "titleEn missing" });
    }
    if (!lesson.textBodyFr?.trim()) {
      issues.push({ code: "MISSING_FR", path, message: "textBodyFr missing" });
    }
    if (!lesson.textBodyEn?.trim()) {
      issues.push({ code: "MISSING_EN", path, message: "textBodyEn missing" });
    }
    if (!lesson.skillSlug?.trim()) {
      issues.push({ code: "MISSING_SKILL", path, message: "skillSlug missing" });
    }
    if (!lesson.learningObjective) {
      issues.push({
        code: "MISSING_LEARNING_OBJECTIVE",
        path,
        message: "learningObjective missing",
      });
    }
    if (!lesson.estimatedMinutes || lesson.estimatedMinutes <= 0) {
      issues.push({
        code: "INVALID_DURATION",
        path,
        message: "estimatedMinutes must be > 0",
      });
    }
    if (!lesson.question?.options?.length) {
      issues.push({ code: "EMPTY_QUIZ", path, message: "Quiz has no options" });
    } else if (!lesson.question.options.some((o) => o.isCorrect)) {
      issues.push({
        code: "QUIZ_NO_CORRECT",
        path,
        message: "Quiz has no correct answer",
      });
    }
    if (!lesson.flashcardFrontFr || !lesson.flashcardBackFr) {
      issues.push({ code: "MISSING_FR", path, message: "Flashcard FR incomplete" });
    }
    if (!lesson.flashcardFrontEn || !lesson.flashcardBackEn) {
      issues.push({ code: "MISSING_EN", path, message: "Flashcard EN incomplete" });
    }
    if (!lesson.exercisePromptFr || !lesson.exercisePromptEn) {
      issues.push({
        code: "MISSING_EXERCISE",
        path,
        message: "Exercise prompts incomplete",
      });
    }

    if (lesson.isShort) {
      if (lesson.shortDurationSeconds == null) {
        issues.push({
          code: "SHORT_NO_DURATION",
          path,
          message: "Short missing durationSeconds",
        });
      } else if (lesson.shortDurationSeconds > 180) {
        issues.push({
          code: "SHORT_TOO_LONG",
          path,
          message: "Short exceeds 180 seconds",
        });
      } else if (lesson.shortDurationSeconds < 60 && options?.requireShortDuration) {
        issues.push({
          code: "SHORT_TOO_SHORT",
          path,
          message: "Short under 60 seconds",
        });
      }
    }
  }

  return { ok: issues.length === 0, issues };
}

export function assertCatalogValid(lessons: CompactLesson[]) {
  const result = validateLessonCatalog(lessons);
  if (!result.ok) {
    const sample = result.issues
      .slice(0, 5)
      .map((i) => `${i.code}@${i.path}`)
      .join(", ");
    throw new Error(`Content validation failed (${result.issues.length}): ${sample}`);
  }
  return result;
}
