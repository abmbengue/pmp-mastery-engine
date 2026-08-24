import type { PrismaClient } from "../../src/generated/prisma/client";
import { seedLessonWithContent, upsertSkill } from "./helpers";
import { PF_LESSONS, PF_MODULES } from "./content/pf-lessons";
import { compactToLessonSeed } from "./content/compact";

export async function seedPersonalFinance(prisma: PrismaClient) {
  const academy = await prisma.academy.upsert({
    where: { slug: "personal-finance" },
    create: {
      slug: "personal-finance",
      titleFr: "Finance Personnelle",
      titleEn: "Personal Finance",
      descriptionFr:
        "Apprenez à gérer vos finances personnelles : budget, dette, investissement et patrimoine. Contenu pédagogique — pas un conseil personnalisé.",
      descriptionEn:
        "Learn personal finance: budgeting, debt, investing, and wealth building. Educational content — not personalized advice.",
      status: "ACTIVE",
      sortOrder: 0,
    },
    update: {
      status: "ACTIVE",
      titleFr: "Finance Personnelle",
      titleEn: "Personal Finance",
      descriptionFr:
        "Apprenez à gérer vos finances personnelles : budget, dette, investissement et patrimoine. Contenu pédagogique — pas un conseil personnalisé.",
      descriptionEn:
        "Learn personal finance: budgeting, debt, investing, and wealth building. Educational content — not personalized advice.",
    },
  });

  const totalMinutes = PF_LESSONS.reduce((s, l) => s + l.estimatedMinutes, 0);
  const course = await prisma.course.upsert({
    where: { academyId_slug: { academyId: academy.id, slug: "essentials" } },
    create: {
      academyId: academy.id,
      slug: "essentials",
      titleFr: "Les essentiels de la finance personnelle",
      titleEn: "Personal Finance Essentials",
      descriptionFr: "Parcours micro-learning : fondations, dette, investissement, patrimoine.",
      descriptionEn: "Micro-learning path: foundations, debt, investing, wealth building.",
      sortOrder: 0,
      estimatedMinutes: totalMinutes,
    },
    update: {
      titleFr: "Les essentiels de la finance personnelle",
      titleEn: "Personal Finance Essentials",
      descriptionFr: "Parcours micro-learning : fondations, dette, investissement, patrimoine.",
      descriptionEn: "Micro-learning path: foundations, debt, investing, wealth building.",
      estimatedMinutes: totalMinutes,
    },
  });

  const skillCache = new Map<string, string>();
  async function skillId(slug: string, titleFr: string, titleEn: string) {
    if (skillCache.has(slug)) return skillCache.get(slug)!;
    const s = await upsertSkill(prisma, { slug, titleFr, titleEn });
    skillCache.set(slug, s.id);
    return s.id;
  }

  // Ensure common PF skills exist
  await skillId("pf-foundations", "Fondamentaux finance personnelle", "Personal finance foundations");
  await skillId("pf-income", "Revenus", "Income");
  await skillId("pf-budgeting", "Budget", "Budgeting");
  await skillId("pf-debt", "Dette", "Debt");
  await skillId("pf-investing", "Bases de l'investissement", "Investing basics");
  await skillId("pf-interest", "Intérêt", "Interest");
  await skillId("pf-wealth", "Construction de patrimoine", "Wealth building");
  await skillId("pf-compounding", "Intérêt composé", "Compound interest");

  for (const mod of PF_MODULES) {
    const moduleLessons = PF_LESSONS.filter((l) => l.moduleSlug === mod.slug);
    const estimatedMinutes = moduleLessons.reduce((s, l) => s + l.estimatedMinutes, 0);
    const courseModule = await prisma.module.create({
      data: {
        courseId: course.id,
        slug: mod.slug,
        titleFr: mod.titleFr,
        titleEn: mod.titleEn,
        descriptionFr: `${mod.titleFr} — micro-learning finance personnelle.`,
        descriptionEn: `${mod.titleEn} — personal finance micro-learning.`,
        category: mod.category,
        sortOrder: mod.sortOrder,
        estimatedMinutes,
      },
    });

    for (const lesson of moduleLessons) {
      const sid = await skillId(
        lesson.skillSlug,
        lesson.titleFr,
        lesson.titleEn
      );
      const config = {
        ...compactToLessonSeed(lesson),
        learningObjective: lesson.learningObjective,
      };
      await seedLessonWithContent(prisma, courseModule.id, sid, config, {
        academySlug: "personal-finance",
        relatedSkillSlug: lesson.skillSlug,
        extraSkillIds:
          lesson.skillSlug !== "pf-foundations"
            ? [await skillId("pf-foundations", "Fondamentaux", "Foundations")]
            : [],
      });
    }
  }

  return { academy, course };
}
