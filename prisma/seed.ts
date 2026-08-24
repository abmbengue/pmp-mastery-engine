import bcrypt from "bcryptjs";
import { prisma } from "./seed/client";
import { seedPersonalFinance } from "./seed/personal-finance";
import { seedPmp } from "./seed/pmp";
import { seedCorporateFinance } from "./seed/corporate-finance";
import { seedSimulationItems } from "./seed/simulations";

const PLANNED_ACADEMIES = [
  {
    slug: "business-strategy",
    titleFr: "Business & Stratégie",
    titleEn: "Business & Strategy",
    descriptionFr: "Stratégie d'entreprise — contenu à venir.",
    descriptionEn: "Business strategy — content coming soon.",
    sortOrder: 3,
  },
  {
    slug: "financial-modeling",
    titleFr: "Modélisation financière",
    titleEn: "Financial Modeling",
    descriptionFr: "Modélisation financière — contenu à venir.",
    descriptionEn: "Financial modeling — content coming soon.",
    sortOrder: 4,
  },
  {
    slug: "energy-oil-gas",
    titleFr: "Énergie & Oil & Gas",
    titleEn: "Energy & Oil & Gas",
    descriptionFr: "Secteur énergie — contenu à venir.",
    descriptionEn: "Energy sector — content coming soon.",
    sortOrder: 5,
  },
  {
    slug: "leadership-management",
    titleFr: "Leadership & Management",
    titleEn: "Leadership & Management",
    descriptionFr: "Leadership — contenu à venir.",
    descriptionEn: "Leadership — content coming soon.",
    sortOrder: 6,
  },
  {
    slug: "professional-english",
    titleFr: "Anglais professionnel",
    titleEn: "Professional English",
    descriptionFr: "Anglais professionnel — contenu à venir.",
    descriptionEn: "Professional English — content coming soon.",
    sortOrder: 7,
  },
];

async function main() {
  console.log("Seeding database...");

  // Clean existing data (order matters for FK constraints)
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

  // Seed planned academies (catalogue only)
  for (const academy of PLANNED_ACADEMIES) {
    await prisma.academy.create({
      data: { ...academy, status: "PLANNED" },
    });
  }

  // Seed active academies with content
  const pf = await seedPersonalFinance(prisma);
  const pmp = await seedPmp(prisma);
  const cf = await seedCorporateFinance(prisma);
  await seedSimulationItems(prisma);

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
    `  Academies: ${PLANNED_ACADEMIES.length + 3} (${3} active, ${PLANNED_ACADEMIES.length} planned)`
  );
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
