import prisma from "@/data/prisma-client";
import { DEMO_USER_EMAIL } from "@/modules/demo/demo-config";
import { seedDemoUserLearningData } from "@/modules/demo/demo-user-data";

async function findDemoUserId(): Promise<string | null> {
  const user = await prisma.user.findUnique({
    where: { email: DEMO_USER_EMAIL },
    select: { id: true },
  });
  return user?.id ?? null;
}

/** Removes all pedagogical data for the demo user (never call for other users). */
export async function clearDemoUserLearningData(userId: string) {
  await prisma.examError.deleteMany({ where: { userId } });
  await prisma.practiceTarget.deleteMany({ where: { userId } });

  const sessions = await prisma.examSession.findMany({
    where: { userId },
    select: { id: true },
  });
  const sessionIds = sessions.map((session) => session.id);

  if (sessionIds.length > 0) {
    await prisma.examAnswer.deleteMany({
      where: { sessionQuestion: { sessionId: { in: sessionIds } } },
    });
    await prisma.examResult.deleteMany({ where: { sessionId: { in: sessionIds } } });
    await prisma.examSessionQuestion.deleteMany({
      where: { sessionId: { in: sessionIds } },
    });
    await prisma.examSession.deleteMany({ where: { userId } });
  }

  await prisma.quizAttempt.deleteMany({ where: { userId } });
  await prisma.conceptMastery.deleteMany({ where: { userId } });
  await prisma.lessonProgress.deleteMany({ where: { userId } });
  await prisma.learningStreak.updateMany({
    where: { userId },
    data: { currentStreak: 0, longestStreak: 0 },
  });
}

/** Resets demo account data to the initial seeded preview state. */
export async function resetDemoUserData() {
  const userId = await findDemoUserId();
  if (!userId) {
    throw new Error("Demo user not found");
  }

  await clearDemoUserLearningData(userId);
  await seedDemoUserLearningData(prisma, userId);
  return { ok: true as const, userId };
}

export async function assertDemoUserId(userId: string): Promise<boolean> {
  const demoUserId = await findDemoUserId();
  return demoUserId !== null && demoUserId === userId;
}
