/**
 * Next Lesson Engine — progress-aware resolution of "what to do next".
 *
 * Priority:
 * 1. Lesson currently IN_PROGRESS (earliest in course order)
 * 2. First lesson not completed (NOT_STARTED / no progress)
 * 3. Course complete
 *
 * Pure logic is unit-tested without DB. DB loading lives in getNextLessonForCourse.
 */

export type LessonProgressStatusValue = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";

export type OrderedLesson = {
  id: string;
  slug: string;
  moduleId: string;
  moduleSlug: string;
  moduleSortOrder: number;
  lessonSortOrder: number;
  titleFr: string;
  titleEn: string;
  estimatedMinutes: number | null;
};

export type NextLessonReason =
  | "IN_PROGRESS"
  | "FIRST_INCOMPLETE"
  | "COURSE_COMPLETE";

export type NextLessonResult = {
  reason: NextLessonReason;
  lesson: OrderedLesson | null;
  isCourseComplete: boolean;
};

export function sortLessonsInCourseOrder(lessons: OrderedLesson[]): OrderedLesson[] {
  return [...lessons].sort((a, b) => {
    if (a.moduleSortOrder !== b.moduleSortOrder) {
      return a.moduleSortOrder - b.moduleSortOrder;
    }
    return a.lessonSortOrder - b.lessonSortOrder;
  });
}

/**
 * Resolve the next lesson from an ordered course curriculum + user progress map.
 */
export function resolveNextLesson(
  lessons: OrderedLesson[],
  progressByLessonId: Record<string, LessonProgressStatusValue>
): NextLessonResult {
  const ordered = sortLessonsInCourseOrder(lessons);

  if (ordered.length === 0) {
    return { reason: "COURSE_COMPLETE", lesson: null, isCourseComplete: true };
  }

  const inProgress = ordered.find(
    (lesson) => progressByLessonId[lesson.id] === "IN_PROGRESS"
  );
  if (inProgress) {
    return { reason: "IN_PROGRESS", lesson: inProgress, isCourseComplete: false };
  }

  const firstIncomplete = ordered.find((lesson) => {
    const status = progressByLessonId[lesson.id];
    return status !== "COMPLETED";
  });

  if (firstIncomplete) {
    return {
      reason: "FIRST_INCOMPLETE",
      lesson: firstIncomplete,
      isCourseComplete: false,
    };
  }

  return { reason: "COURSE_COMPLETE", lesson: null, isCourseComplete: true };
}

export function buildLessonPath(params: {
  academySlug: string;
  courseSlug: string;
  moduleSlug: string;
  lessonSlug: string;
}): string {
  return `/academies/${params.academySlug}/courses/${params.courseSlug}/modules/${params.moduleSlug}/lessons/${params.lessonSlug}`;
}

export function getLessonStatus(
  lessonId: string,
  progressByLessonId: Record<string, LessonProgressStatusValue>
): LessonProgressStatusValue {
  return progressByLessonId[lessonId] ?? "NOT_STARTED";
}

export function computeCourseProgressFromStatuses(
  lessons: OrderedLesson[],
  progressByLessonId: Record<string, LessonProgressStatusValue>
): {
  completedLessons: number;
  totalLessons: number;
  percentage: number;
  inProgressLessons: number;
  notStartedLessons: number;
} {
  const totalLessons = lessons.length;
  let completedLessons = 0;
  let inProgressLessons = 0;
  let notStartedLessons = 0;

  for (const lesson of lessons) {
    const status = getLessonStatus(lesson.id, progressByLessonId);
    if (status === "COMPLETED") completedLessons += 1;
    else if (status === "IN_PROGRESS") inProgressLessons += 1;
    else notStartedLessons += 1;
  }

  const percentage =
    totalLessons === 0 ? 0 : Math.round((completedLessons / totalLessons) * 100);

  return {
    completedLessons,
    totalLessons,
    percentage,
    inProgressLessons,
    notStartedLessons,
  };
}
