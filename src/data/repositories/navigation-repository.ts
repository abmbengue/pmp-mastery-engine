import prisma from "@/data/prisma-client";

export async function findNextLesson(
  academySlug: string,
  courseSlug: string,
  moduleSlug: string,
  currentLessonSlug: string
): Promise<{ slug: string; moduleSlug: string } | null> {
  const course = await prisma.course.findFirst({
    where: { slug: courseSlug, academy: { slug: academySlug } },
    include: {
      modules: {
        orderBy: { sortOrder: "asc" },
        include: { lessons: { orderBy: { sortOrder: "asc" } } },
      },
    },
  });
  if (!course) return null;

  const allLessons: { slug: string; moduleSlug: string }[] = [];
  for (const mod of course.modules) {
    for (const lesson of mod.lessons) {
      allLessons.push({ slug: lesson.slug, moduleSlug: mod.slug });
    }
  }

  const currentIdx = allLessons.findIndex(
    (l) => l.slug === currentLessonSlug && l.moduleSlug === moduleSlug
  );
  if (currentIdx === -1 || currentIdx === allLessons.length - 1) return null;
  return allLessons[currentIdx + 1];
}
