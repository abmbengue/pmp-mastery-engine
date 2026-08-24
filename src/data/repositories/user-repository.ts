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
}) {
  return prisma.user.create({
    data: {
      email: data.email,
      name: data.name,
      locale: data.locale === "en" ? "EN" : "FR",
    },
  });
}

export async function enrollUserInCourse(userId: string, courseId: string) {
  return prisma.enrollment.upsert({
    where: { userId_courseId: { userId, courseId } },
    create: { userId, courseId },
    update: {},
  });
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
          },
        },
      },
    },
  });
}
