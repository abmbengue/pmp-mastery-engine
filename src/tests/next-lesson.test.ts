import { describe, it, expect } from "vitest";
import {
  resolveNextLesson,
  getLessonStatus,
  computeCourseProgressFromStatuses,
  buildLessonPath,
  type OrderedLesson,
} from "@/modules/learning-engine/next-lesson-service";

function lesson(
  id: string,
  moduleSortOrder: number,
  lessonSortOrder: number,
  moduleSlug = `m${moduleSortOrder}`,
  slug = `l${lessonSortOrder}`
): OrderedLesson {
  return {
    id,
    slug,
    moduleId: `mod-${moduleSortOrder}`,
    moduleSlug,
    moduleSortOrder,
    lessonSortOrder,
    titleFr: `FR ${slug}`,
    titleEn: `EN ${slug}`,
    estimatedMinutes: 5,
  };
}

describe("Next Lesson Engine", () => {
  const curriculum = [
    lesson("a", 0, 0, "foundations", "understanding-income"),
    lesson("b", 0, 1, "foundations", "tracking-expenses"),
    lesson("c", 1, 0, "investing", "why-save"),
  ];

  it("returns first incomplete when nothing started", () => {
    const result = resolveNextLesson(curriculum, {});
    expect(result.reason).toBe("FIRST_INCOMPLETE");
    expect(result.lesson?.id).toBe("a");
    expect(result.isCourseComplete).toBe(false);
  });

  it("prioritizes IN_PROGRESS over earlier incomplete", () => {
    const result = resolveNextLesson(curriculum, {
      a: "COMPLETED",
      c: "IN_PROGRESS",
    });
    expect(result.reason).toBe("IN_PROGRESS");
    expect(result.lesson?.id).toBe("c");
  });

  it("picks earliest IN_PROGRESS when several exist", () => {
    const result = resolveNextLesson(curriculum, {
      b: "IN_PROGRESS",
      c: "IN_PROGRESS",
    });
    expect(result.lesson?.id).toBe("b");
  });

  it("returns first incomplete after completed lessons", () => {
    const result = resolveNextLesson(curriculum, {
      a: "COMPLETED",
      b: "COMPLETED",
    });
    expect(result.reason).toBe("FIRST_INCOMPLETE");
    expect(result.lesson?.id).toBe("c");
  });

  it("returns COURSE_COMPLETE when all done", () => {
    const result = resolveNextLesson(curriculum, {
      a: "COMPLETED",
      b: "COMPLETED",
      c: "COMPLETED",
    });
    expect(result.reason).toBe("COURSE_COMPLETE");
    expect(result.lesson).toBeNull();
    expect(result.isCourseComplete).toBe(true);
  });

  it("handles empty curriculum", () => {
    const result = resolveNextLesson([], {});
    expect(result.isCourseComplete).toBe(true);
  });

  it("computes lesson status defaults to NOT_STARTED", () => {
    expect(getLessonStatus("missing", {})).toBe("NOT_STARTED");
    expect(getLessonStatus("a", { a: "IN_PROGRESS" })).toBe("IN_PROGRESS");
  });

  it("computes course progress from statuses", () => {
    const progress = computeCourseProgressFromStatuses(curriculum, {
      a: "COMPLETED",
      b: "IN_PROGRESS",
    });
    expect(progress.completedLessons).toBe(1);
    expect(progress.inProgressLessons).toBe(1);
    expect(progress.notStartedLessons).toBe(1);
    expect(progress.percentage).toBe(33);
  });

  it("builds lesson path without hardcoded course ids", () => {
    expect(
      buildLessonPath({
        academySlug: "personal-finance",
        courseSlug: "essentials",
        moduleSlug: "foundations",
        lessonSlug: "understanding-income",
      })
    ).toBe(
      "/academies/personal-finance/courses/essentials/modules/foundations/lessons/understanding-income"
    );
  });
});
