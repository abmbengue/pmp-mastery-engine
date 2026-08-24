import type { PrismaClient } from "../../src/generated/prisma/client";
import { seedLessonWithContent, upsertSkill } from "./helpers";
import { CF_LESSONS, CF_MODULES } from "./content/cf-lessons";
import { compactToLessonSeed } from "./content/compact";

export async function seedCorporateFinance(prisma: PrismaClient) {
  const academy = await prisma.academy.upsert({
    where: { slug: "corporate-finance" },
    create: {
      slug: "corporate-finance",
      titleFr: "Finance d'entreprise",
      titleEn: "Corporate Finance",
      descriptionFr:
        "États financiers, BFR, valorisation, DCF et bases M&A — contenu pédagogique (pas une valorisation professionnelle).",
      descriptionEn:
        "Statements, working capital, valuation, DCF, and M&A basics — educational (not a professional valuation).",
      status: "ACTIVE",
      sortOrder: 2,
    },
    update: {
      status: "ACTIVE",
      titleFr: "Finance d'entreprise",
      titleEn: "Corporate Finance",
      descriptionFr:
        "États financiers, BFR, valorisation, DCF et bases M&A — contenu pédagogique (pas une valorisation professionnelle).",
      descriptionEn:
        "Statements, working capital, valuation, DCF, and M&A basics — educational (not a professional valuation).",
    },
  });

  const totalMinutes = CF_LESSONS.reduce((s, l) => s + l.estimatedMinutes, 0);
  const course = await prisma.course.upsert({
    where: { academyId_slug: { academyId: academy.id, slug: "cf-essentials" } },
    create: {
      academyId: academy.id,
      slug: "cf-essentials",
      titleFr: "Essentiels de la finance d'entreprise",
      titleEn: "Corporate Finance Essentials",
      descriptionFr: "Parcours micro-learning : états financiers, BFR, valorisation, DCF, M&A.",
      descriptionEn: "Micro-learning path: statements, WC, valuation, DCF, M&A.",
      sortOrder: 0,
      estimatedMinutes: totalMinutes,
    },
    update: {
      titleFr: "Essentiels de la finance d'entreprise",
      titleEn: "Corporate Finance Essentials",
      descriptionFr: "Parcours micro-learning : états financiers, BFR, valorisation, DCF, M&A.",
      descriptionEn: "Micro-learning path: statements, WC, valuation, DCF, M&A.",
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

  await skillId("cf-foundations", "Fondamentaux finance d'entreprise", "Corporate finance foundations");
  await skillId("cf-valuation", "Bases de valorisation", "Valuation basics");
  await skillId("cf-cash-flow", "Cash flow", "Cash flow");
  await skillId("cf-capital-structure", "Structure du capital", "Capital structure");
  await skillId("cf-working-capital", "Besoin en fonds de roulement", "Working capital");
  await skillId("cf-ma", "Bases M&A", "M&A basics");

  for (const mod of CF_MODULES) {
    const moduleLessons = CF_LESSONS.filter((l) => l.moduleSlug === mod.slug);
    const estimatedMinutes = moduleLessons.reduce((s, l) => s + l.estimatedMinutes, 0);
    const module = await prisma.module.create({
      data: {
        courseId: course.id,
        slug: mod.slug,
        titleFr: mod.titleFr,
        titleEn: mod.titleEn,
        descriptionFr: `${mod.titleFr} — micro-learning finance d'entreprise.`,
        descriptionEn: `${mod.titleEn} — corporate finance micro-learning.`,
        category: mod.category,
        sortOrder: mod.sortOrder,
        estimatedMinutes,
      },
    });

    for (const lesson of moduleLessons) {
      const sid = await skillId(lesson.skillSlug, lesson.titleFr, lesson.titleEn);
      const config = {
        ...compactToLessonSeed(lesson),
        learningObjective: lesson.learningObjective,
      };
      await seedLessonWithContent(prisma, module.id, sid, config, {
        academySlug: "corporate-finance",
        relatedSkillSlug: lesson.skillSlug,
        extraSkillIds:
          lesson.skillSlug !== "cf-foundations"
            ? [
                await skillId(
                  "cf-foundations",
                  "Fondamentaux finance d'entreprise",
                  "Corporate finance foundations"
                ),
              ]
            : [],
      });
    }
  }

  return { academy, course };
}
