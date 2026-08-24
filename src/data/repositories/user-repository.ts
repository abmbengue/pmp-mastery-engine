import prisma from "@/data/prisma-client";
import type { Locale } from "@/shared/types/locale";

export async function findUserByEmail(email: string) {
  return prisma.user.findUnique({ where: { email } });
}

export async function findUserById(id: string) {
  return prisma.user.findUnique({ where: { id } });
}

export async function createUser(data: {
  email: string;
  name: string;
  locale?: Locale;
  passwordHash?: string;
}) {
  return prisma.user.create({
    data: {
      email: data.email,
      name: data.name,
      passwordHash: data.passwordHash,
      locale: data.locale === "en" ? "EN" : "FR",
    },
  });
}

export async function updateUserLocale(userId: string, locale: Locale) {
  return prisma.user.update({
    where: { id: userId },
    data: { locale: locale === "en" ? "EN" : "FR" },
  });
}

export async function enrollUserInCourse(userId: string, courseId: string) {
  return prisma.enrollment.upsert({
    where: { userId_courseId: { userId, courseId } },
    create: { userId, courseId },
    update: {},
  });
}

export async function enrollUserInActiveV1Courses(userId: string) {
  const activeCourses = await prisma.course.findMany({
    where: {
      academy: {
        status: "ACTIVE",
      },
    },
    select: { id: true },
  });

  await Promise.all(activeCourses.map((course) => enrollUserInCourse(userId, course.id)));
  return activeCourses.length;
}

export async function findEnrollment(userId: string, courseId: string) {
  return prisma.enrollment.findUnique({
    where: { userId_courseId: { userId, courseId } },
  });
}

export async function findUserEnrollments(userId: string) {
  return prisma.enrollment.findMany({
    where: { userId },
    include: {
      course: {
        include: {
          academy: true,
          modules: {
            include: { lessons: true },
            orderBy: { sortOrder: "asc" },
          },
        },
      },
    },
    orderBy: { enrolledAt: "asc" },
  });
}

export async function findUserRecentScores(userId: string, limit = 5) {
  return prisma.quizAttempt.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    take: limit,
    include: {
      question: {
        include: { skill: true },
      },
    },
  });
}

export async function findUserDashboardData(userId: string) {
  const [user, enrollments, masteries, recentScores, streak] = await Promise.all([
    prisma.user.findUnique({ where: { id: userId } }),
    findUserEnrollments(userId),
    prisma.conceptMastery.findMany({ where: { userId }, include: { skill: true } }),
    findUserRecentScores(userId),
    prisma.learningStreak.findUnique({ where: { userId } }),
  ]);

  return {
    user,
    enrollments,
    masteries,
    recentScores,
    streak,
  };
}
