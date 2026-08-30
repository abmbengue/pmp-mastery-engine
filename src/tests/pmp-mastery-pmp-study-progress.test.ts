/**
 * Phase B.3.2 P1 — task-scoped Continue/Start for PMP Study.
 */

import { describe, expect, it } from "vitest";
import { buildStudyTaskView } from "@/modules/mastery-engine/pmp-study";
import {
  enrichLessonsWithTaskProgress,
  resolveTaskContinueLesson,
  type TaskLessonProgressSnapshot,
} from "@/modules/mastery-engine/pmp-study-progress";

function snap(
  partial: Partial<TaskLessonProgressSnapshot> & Pick<TaskLessonProgressSnapshot, "status">
): TaskLessonProgressSnapshot {
  return {
    updatedAtMs: null,
    currentPhase: null,
    hasProgressRecord: partial.status !== "NOT_STARTED",
    ...partial,
  };
}

describe("resolveTaskContinueLesson", () => {
  const t01 = buildStudyTaskView("PEOPLE-T01");
  const lessons = t01.lessons;

  it("maps PEOPLE-T01 to shared-vision as PRIMARY lesson", () => {
    expect(lessons.some((l) => l.slug === "shared-vision")).toBe(true);
    expect(lessons.find((l) => l.slug === "shared-vision")?.coverageType).toBe(
      "PRIMARY"
    );
  });

  it("with no progress → Start on first incomplete lesson", () => {
    const resolution = resolveTaskContinueLesson(lessons, {});
    expect(resolution).not.toBeNull();
    expect(resolution?.action).toBe("START");
    expect(resolution?.reason).toBe("FIRST_INCOMPLETE_NO_PROGRESS");
    expect(resolution?.lessonSlug).toBe(lessons[0].slug);
  });

  it("with IN_PROGRESS → Continue on most recently updated lesson", () => {
    const [first, second] = lessons;
    expect(first).toBeDefined();
    expect(second).toBeDefined();

    const resolution = resolveTaskContinueLesson(lessons, {
      [first!.slug]: snap({
        status: "IN_PROGRESS",
        updatedAtMs: 1_000,
        hasProgressRecord: true,
        currentPhase: "LEARN",
      }),
      [second!.slug]: snap({
        status: "IN_PROGRESS",
        updatedAtMs: 5_000,
        hasProgressRecord: true,
        currentPhase: "PRACTICE",
      }),
    });

    expect(resolution?.action).toBe("CONTINUE");
    expect(resolution?.reason).toBe("IN_PROGRESS_RECENT");
    expect(resolution?.lessonSlug).toBe(second!.slug);
    expect(resolution?.currentPhase).toBe("PRACTICE");
  });

  it("after completed lessons → Start on next incomplete without progress record", () => {
    const [first, second] = lessons;
    expect(first).toBeDefined();
    expect(second).toBeDefined();

    const resolution = resolveTaskContinueLesson(lessons, {
      [first!.slug]: snap({
        status: "COMPLETED",
        updatedAtMs: 2_000,
        hasProgressRecord: true,
      }),
    });

    expect(resolution?.action).toBe("START");
    expect(resolution?.reason).toBe("FIRST_INCOMPLETE_NO_PROGRESS");
    expect(resolution?.lessonSlug).toBe(second!.slug);
  });

  it("with progress record on first incomplete but not IN_PROGRESS → Continue", () => {
    const [first] = lessons;
    expect(first).toBeDefined();

    const resolution = resolveTaskContinueLesson(lessons, {
      [first!.slug]: snap({
        status: "NOT_STARTED",
        hasProgressRecord: true,
        currentPhase: "LEARN",
      }),
    });

    expect(resolution?.action).toBe("CONTINUE");
    expect(resolution?.reason).toBe("FIRST_INCOMPLETE_WITH_PROGRESS");
    expect(resolution?.lessonSlug).toBe(first!.slug);
  });

  it("when all lessons completed → Start PRIMARY lesson", () => {
    const progress = Object.fromEntries(
      lessons.map((lesson) => [
        lesson.slug,
        snap({
          status: "COMPLETED",
          updatedAtMs: 1_000,
          hasProgressRecord: true,
        }),
      ])
    );

    const resolution = resolveTaskContinueLesson(lessons, progress);
    const primary = lessons.find((l) => l.coverageType === "PRIMARY") ?? lessons[0];

    expect(resolution?.action).toBe("START");
    expect(resolution?.reason).toBe("ALL_COMPLETE_PRIMARY");
    expect(resolution?.lessonSlug).toBe(primary?.slug);
  });

  it("with IN_PROGRESS and invalid currentPhase metadata → Continue with null phase", () => {
    const [first] = lessons;
    expect(first).toBeDefined();

    const resolution = resolveTaskContinueLesson(lessons, {
      [first!.slug]: snap({
        status: "IN_PROGRESS",
        updatedAtMs: 3_000,
        hasProgressRecord: true,
        currentPhase: null,
      }),
    });

    expect(resolution?.action).toBe("CONTINUE");
    expect(resolution?.reason).toBe("IN_PROGRESS_RECENT");
    expect(resolution?.currentPhase).toBeNull();
  });

  it("returns null for empty lesson list", () => {
    expect(resolveTaskContinueLesson([], {})).toBeNull();
  });

  it("enriches lesson list with progress badges and continue target", () => {
    const [first] = lessons;
    expect(first).toBeDefined();

    const enriched = enrichLessonsWithTaskProgress(
      lessons,
      {
        [first!.slug]: snap({
          status: "IN_PROGRESS",
          hasProgressRecord: true,
          currentPhase: "TEST",
        }),
      },
      first!.slug
    );

    const row = enriched.find((l) => l.slug === first!.slug);
    expect(row?.progressStatus).toBe("IN_PROGRESS");
    expect(row?.currentPhase).toBe("TEST");
    expect(row?.isContinueTarget).toBe(true);
  });
});
