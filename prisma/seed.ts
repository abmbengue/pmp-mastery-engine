import bcrypt from "bcryptjs";
import { prisma } from "./seed/client";
import { seedPersonalFinance } from "./seed/personal-finance";
import { seedPmp } from "./seed/pmp";
import { seedCorporateFinance } from "./seed/corporate-finance";
import { seedSimulationItems } from "./seed/simulations";
import { seedPmpExamBank } from "./seed/pmp-exam-bank";
import { PLANNED_ACADEMY_CONFIGS } from "../src/modules/content/planned-academies";

async function main() {
  console.log("Seeding database...");

  // Clean existing data (order matters for FK constraints)
  await prisma.examError.deleteMany();
  await prisma.practiceTarget.deleteMany();
  await prisma.examAnswer.deleteMany();
  await prisma.examResult.deleteMany();
  await prisma.examSessionQuestion.deleteMany();
  await prisma.examSession.deleteMany();
  await prisma.exam.deleteMany();
  await prisma.questionSkill.deleteMany();
  await prisma.quizAttempt.deleteMany();
  await prisma.conceptMastery.deleteMany();
  await prisma.lessonProgress.deleteMany();
  await prisma.enrollment.deleteMany();
  await prisma.learningStreak.deleteMany();
  await prisma.answerOption.deleteMany();
  await prisma.question.deleteMany();
  await prisma.learningItem.deleteMany();
  await prisma.lessonSkill.deleteMany();
  await prisma.lesson.deleteMany();
  await prisma.module.deleteMany();
  await prisma.course.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.user.deleteMany();
  await prisma.academy.deleteMany();

  // Seed planned academies (catalogue only — config-driven)
  for (const academy of PLANNED_ACADEMY_CONFIGS) {
    await prisma.academy.create({
      data: {
        slug: academy.slug,
        titleFr: academy.titleFr,
        titleEn: academy.titleEn,
        descriptionFr: academy.descriptionFr,
        descriptionEn: academy.descriptionEn,
        sortOrder: academy.sortOrder,
        status: "PLANNED",
      },
    });
  }

  // Seed active academies with content
  const pf = await seedPersonalFinance(prisma);
  const pmp = await seedPmp(prisma);
  const cf = await seedCorporateFinance(prisma);
  await seedSimulationItems(prisma);
  const examBank = await seedPmpExamBank(prisma);

  // Demo user for tests only (never used as default real identity)
  const demoUserPasswordHash = await bcrypt.hash("Demo123!", 12);
  const demoUser = await prisma.user.create({
    data: {
      email: "demo@pla.local",
      name: "Demo User",
      locale: "FR",
      passwordHash: demoUserPasswordHash,
    },
  });

  await prisma.enrollment.create({
    data: { userId: demoUser.id, courseId: pf.course.id },
  });

  await prisma.enrollment.create({
    data: { userId: demoUser.id, courseId: pmp.course.id },
  });

  await prisma.enrollment.create({
    data: { userId: demoUser.id, courseId: cf.course.id },
  });

  await prisma.learningStreak.create({
    data: { userId: demoUser.id, currentStreak: 0, longestStreak: 0 },
  });

  console.log("Seed completed.");
  console.log(
    `  Academies: ${PLANNED_ACADEMY_CONFIGS.length + 3} (${3} active, ${PLANNED_ACADEMY_CONFIGS.length} planned)`
  );
  console.log(`  PMP exam bank: ${examBank.bankCount} questions`);
  console.log(`  Demo user: ${demoUser.email}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
