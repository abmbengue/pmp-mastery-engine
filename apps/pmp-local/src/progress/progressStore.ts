const STORAGE_KEY = "pmp-local-progress-v1";

export type AttemptRecord = {
  questionId: string;
  correct: boolean;
  timestamp: string;
  confidence?: number;
};

export type LocalProgress = {
  lastLessonId?: string;
  lastQuestionId?: string;
  attempts: AttemptRecord[];
};

const EMPTY: LocalProgress = { attempts: [] };

export function loadProgress(): LocalProgress {
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return EMPTY;

  try {
    const parsed = JSON.parse(raw) as LocalProgress;
    if (!Array.isArray(parsed.attempts)) return EMPTY;
    return parsed;
  } catch {
    return EMPTY;
  }
}

function saveProgress(progress: LocalProgress): void {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function hasProgress(): boolean {
  const progress = loadProgress();
  return progress.attempts.length > 0 || Boolean(progress.lastLessonId);
}

export function markLessonStarted(lessonId: string, firstQuestionId: string): void {
  const progress = loadProgress();
  saveProgress({
    ...progress,
    lastLessonId: lessonId,
    lastQuestionId: progress.lastQuestionId ?? firstQuestionId,
  });
}

export function saveAttempt(input: {
  lessonId: string;
  questionId: string;
  correct: boolean;
  confidence?: number;
}): void {
  const progress = loadProgress();
  const attempt: AttemptRecord = {
    questionId: input.questionId,
    correct: input.correct,
    confidence: input.confidence,
    timestamp: new Date().toISOString(),
  };

  saveProgress({
    ...progress,
    lastLessonId: input.lessonId,
    lastQuestionId: input.questionId,
    attempts: [...progress.attempts, attempt],
  });
}
