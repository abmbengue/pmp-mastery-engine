import type { PrismaClient } from "../../src/generated/prisma/client";
import { seedLessonWithContent, upsertSkill } from "./helpers";
import { PMP_LESSONS, PMP_MODULES } from "./content/pmp-lessons";
import { compactToLessonSeed } from "./content/compact";

export async function seedPmp(prisma: PrismaClient) {
  const academy = await prisma.academy.upsert({
    where: { slug: "pmp-project-management" },
    create: {
      slug: "pmp-project-management",
      titleFr: "PMP / Gestion de Projet",
      titleEn: "PMP / Project Management",
      descriptionFr:
        "Préparez-vous avec du contenu pédagogique ORIGINAL (People, Process, Business, Agile, Hybrid). Pas de reproduction PMBOK / PMI.",
      descriptionEn:
        "Prepare with ORIGINAL educational content (People, Process, Business, Agile, Hybrid). No PMBOK / PMI reproduction.",
      status: "ACTIVE",
      sortOrder: 1,
    },
    update: {
      status: "ACTIVE",
      descriptionFr:
        "Préparez-vous avec du contenu pédagogique ORIGINAL (People, Process, Business, Agile, Hybrid). Pas de reproduction PMBOK / PMI.",
      descriptionEn:
        "Prepare with ORIGINAL educational content (People, Process, Business, Agile, Hybrid). No PMBOK / PMI reproduction.",
    },
  });

  const totalMinutes = PMP_LESSONS.reduce((s, l) => s + l.estimatedMinutes, 0);
  const course = await prisma.course.upsert({
    where: { academyId_slug: { academyId: academy.id, slug: "pmp-foundations" } },
    create: {
      academyId: academy.id,
      slug: "pmp-foundations",
      titleFr: "Fondamentaux PMP",
      titleEn: "PMP Foundations",
      descriptionFr:
        "Parcours micro-learning original : fondations, People, Process, Business, Agile, Hybrid, situations.",
      descriptionEn:
        "Original micro-learning path: foundations, People, Process, Business, Agile, Hybrid, situations.",
      sortOrder: 0,
      estimatedMinutes: totalMinutes,
    },
    update: {
      titleFr: "Fondamentaux PMP",
      titleEn: "PMP Foundations",
      descriptionFr:
        "Parcours micro-learning original : fondations, People, Process, Business, Agile, Hybrid, situations.",
      descriptionEn:
        "Original micro-learning path: foundations, People, Process, Business, Agile, Hybrid, situations.",
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

  const baseSkills: Array<[string, string, string]> = [
    ["pmp-foundations", "Fondamentaux gestion de projet", "Project management foundations"],
    ["pmp-people", "People", "People"],
    ["pmp-process", "Process", "Process"],
    ["pmp-business-environment", "Environnement business", "Business Environment"],
    ["pmp-methodologies", "Méthodologies de projet", "Project methodologies"],
    ["pmp-agile", "Agile", "Agile"],
    ["pmp-hybrid", "Hybride", "Hybrid"],
    ["pmp-situational-thinking", "Pensée situationnelle", "Situational Thinking"],
    ["leadership", "Leadership", "Leadership"],
    ["communication", "Communication", "Communication"],
    ["stakeholder-engagement", "Parties prenantes", "Stakeholder engagement"],
    ["risk-management", "Gestion des risques", "Risk management"],
    ["change-management", "Gestion du changement", "Change management"],
    ["conflict-management", "Gestion des conflits", "Conflict management"],
    ["agile-mindset", "Mentalité agile", "Agile mindset"],
    ["governance", "Gouvernance", "Governance"],
  ];
  for (const [slug, fr, en] of baseSkills) {
    await skillId(slug, fr, en);
  }

  for (const mod of PMP_MODULES) {
    const moduleLessons = PMP_LESSONS.filter((l) => l.moduleSlug === mod.slug);
    const estimatedMinutes = moduleLessons.reduce((s, l) => s + l.estimatedMinutes, 0);
    const courseModule = await prisma.module.create({
      data: {
        courseId: course.id,
        slug: mod.slug,
        titleFr: mod.titleFr,
        titleEn: mod.titleEn,
        descriptionFr: mod.descriptionFr,
        descriptionEn: mod.descriptionEn,
        category: mod.category,
        sortOrder: mod.sortOrder,
        estimatedMinutes,
      },
    });

    for (const lesson of moduleLessons) {
      const sid = await skillId(lesson.skillSlug, lesson.titleFr, lesson.titleEn);
      let textFr = lesson.textBodyFr;
      let textEn = lesson.textBodyEn;
      if (lesson.situation) {
        textFr += `\n\nSituation : ${lesson.situation.scenarioFr}\nMeilleure action : ${lesson.situation.bestActionFr}`;
        textEn += `\n\nSituation: ${lesson.situation.scenarioEn}\nBest action: ${lesson.situation.bestActionEn}`;
      }
      const config = {
        ...compactToLessonSeed({ ...lesson, textBodyFr: textFr, textBodyEn: textEn }),
        learningObjective: lesson.learningObjective,
      };
      await seedLessonWithContent(prisma, courseModule.id, sid, config, {
        academySlug: "pmp-project-management",
        relatedSkillSlug: lesson.skillSlug,
        extraSkillIds:
          lesson.skillSlug !== "pmp-foundations"
            ? [await skillId("pmp-foundations", "Fondamentaux", "Foundations")]
            : [],
      });
    }
  }

  return { academy, course };
}
