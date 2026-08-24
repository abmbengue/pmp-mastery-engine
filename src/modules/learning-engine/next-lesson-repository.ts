import prisma from "@/data/prisma-client";
import {
  buildLessonPath,
  resolveNextLesson,
  sortLessonsInCourseOrder,
  type LessonProgressStatusValue,
  type NextLessonResult,
  type OrderedLesson,
} from "@/modules/learning-engine/next-lesson-service";

export type CourseCurriculum = {
  courseId: string;
  courseSlug: string;
  academySlug: string;
  academyTitleFr: string;
  academyTitleEn: string;
  courseTitleFr: string;
  courseTitleEn: string;
  lessons: OrderedLesson[];
};

export async function loadCourseCurriculum(courseId: string): Promise<CourseCurriculum | null> {
  const course = await prisma.course.findUnique({
    where: { id: courseId },
    include: {
      academy: true,
      modules: {
        orderBy: { sortOrder: "asc" },
        include: {
          lessons: { orderBy: { sortOrder: "asc" } },
        },
      },
    },
  });

  if (!course) return null;

  const lessons: OrderedLesson[] = [];
  for (const mod of course.modules) {
    for (const lesson of mod.lessons) {
      lessons.push({
        id: lesson.id,
        slug: lesson.slug,
        moduleId: mod.id,
        moduleSlug: mod.slug,
        moduleSortOrder: mod.sortOrder,
        lessonSortOrder: lesson.sortOrder,
        titleFr: lesson.titleFr,
        titleEn: lesson.titleEn,
        estimatedMinutes: lesson.estimatedMinutes,
      });
    }
  }

  return {
    courseId: course.id,
    courseSlug: course.slug,
    academySlug: course.academy.slug,
    academyTitleFr: course.academy.titleFr,
    academyTitleEn: course.academy.titleEn,
    courseTitleFr: course.titleFr,
    courseTitleEn: course.titleEn,
    lessons: sortLessonsInCourseOrder(lessons),
  };
}

export async function loadProgressMap(
  userId: string,
  lessonIds: string[]
): Promise<Record<string, LessonProgressStatusValue>> {
  if (lessonIds.length === 0) return {};

  const records = await prisma.lessonProgress.findMany({
    where: { userId, lessonId: { in: lessonIds } },
    select: { lessonId: true, status: true, updatedAt: true },
  });

  const map: Record<string, LessonProgressStatusValue> = {};
  for (const record of records) {
    map[record.lessonId] = record.status;
  }
  return map;
}

export type NextLessonForCourse = NextLessonResult & {
  path: string | null;
  curriculum: CourseCurriculum;
};

export async function getNextLessonForCourse(
  userId: string,
  courseId: string
): Promise<NextLessonForCourse | null> {
  const curriculum = await loadCourseCurriculum(courseId);
  if (!curriculum) return null;

  const progressMap = await loadProgressMap(
    userId,
    curriculum.lessons.map((l) => l.id)
  );
  const resolved = resolveNextLesson(curriculum.lessons, progressMap);

  const path =
    resolved.lesson === null
      ? null
      : buildLessonPath({
          academySlug: curriculum.academySlug,
          courseSlug: curriculum.courseSlug,
          moduleSlug: resolved.lesson.moduleSlug,
          lessonSlug: resolved.lesson.slug,
        });

  return { ...resolved, path, curriculum };
}
