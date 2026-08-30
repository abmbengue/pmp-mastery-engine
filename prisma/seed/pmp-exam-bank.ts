import type { PrismaClient } from "../../src/generated/prisma/client";
import { EXAM_TEMPLATES } from "../../src/modules/assessment-engine/exam-types";
import { upsertSkill } from "./helpers";
import { PMP_EXAM_BANK } from "./pmp-exam-bank-data";
import { PMP_QUESTION_MASTERY_METADATA } from "./pmp-question-mastery-metadata";

const EXAM_SKILLS = [
  {
    slug: "leadership",
    titleFr: "Leadership",
    titleEn: "Leadership",
    descriptionFr: "Guider, motiver et aligner l'équipe projet.",
    descriptionEn: "Guide, motivate, and align the project team.",
  },
  {
    slug: "conflict-management",
    titleFr: "Gestion des conflits",
    titleEn: "Conflict Management",
  },
  {
    slug: "team-development",
    titleFr: "Développement d'équipe",
    titleEn: "Team Development",
  },
  {
    slug: "stakeholder-engagement",
    titleFr: "Engagement des parties prenantes",
    titleEn: "Stakeholder Engagement",
  },
  {
    slug: "communication",
    titleFr: "Communication",
    titleEn: "Communication",
  },
  {
    slug: "risk-management",
    titleFr: "Gestion des risques",
    titleEn: "Risk Management",
  },
  {
    slug: "schedule",
    titleFr: "Planning / échéancier",
    titleEn: "Schedule",
  },
  {
    slug: "cost",
    titleFr: "Coûts",
    titleEn: "Cost",
  },
  {
    slug: "quality",
    titleFr: "Qualité",
    titleEn: "Quality",
  },
  {
    slug: "procurement",
    titleFr: "Approvisionnement",
    titleEn: "Procurement",
  },
  {
    slug: "change-management",
    titleFr: "Gestion du changement",
    titleEn: "Change Management",
  },
  {
    slug: "agile-mindset",
    titleFr: "Mentalité agile",
    titleEn: "Agile Mindset",
  },
  {
    slug: "hybrid-delivery",
    titleFr: "Livraison hybride",
    titleEn: "Hybrid Delivery",
  },
  {
    slug: "governance",
    titleFr: "Gouvernance",
    titleEn: "Governance",
  },
  {
    slug: "business-value",
    titleFr: "Valeur business",
    titleEn: "Business Value",
  },
] as const;

export async function seedPmpExamBank(prisma: PrismaClient) {
  console.log("Seeding PMP exam bank...");

  const skillIds = new Map<string, string>();

  // Existing PMP course skills (Phase 4) — reuse, do not duplicate system
  for (const slug of [
    "pmp-people",
    "pmp-process",
    "pmp-business-environment",
    "pmp-agile",
    "pmp-hybrid",
    "pmp-situational-thinking",
    "pmp-foundations",
    "pmp-methodologies",
  ]) {
    const existing = await prisma.skill.findUnique({ where: { slug } });
    if (existing) skillIds.set(slug, existing.id);
  }

  for (const s of EXAM_SKILLS) {
    const skill = await upsertSkill(prisma, {
      slug: s.slug,
      titleFr: s.titleFr,
      titleEn: s.titleEn,
      descriptionFr: "descriptionFr" in s ? s.descriptionFr : undefined,
      descriptionEn: "descriptionEn" in s ? s.descriptionEn : undefined,
    });
    skillIds.set(s.slug, skill.id);
  }

  for (const t of EXAM_TEMPLATES) {
    await prisma.exam.upsert({
      where: { slug: t.slug },
      create: {
        slug: t.slug,
        type: t.type,
        titleFr: t.titleFr,
        titleEn: t.titleEn,
        descriptionFr: t.descriptionFr,
        descriptionEn: t.descriptionEn,
        questionCount: t.questionCount,
        durationMinutes: t.durationMinutes,
        domainFilter: t.domainFilter ?? null,
        isActive: true,
      },
      update: {
        type: t.type,
        titleFr: t.titleFr,
        titleEn: t.titleEn,
        descriptionFr: t.descriptionFr,
        descriptionEn: t.descriptionEn,
        questionCount: t.questionCount,
        durationMinutes: t.durationMinutes,
        domainFilter: t.domainFilter ?? null,
        isActive: true,
      },
    });
  }

  let created = 0;
  for (const q of PMP_EXAM_BANK) {
    const primarySlug = q.skills[0];
    const primaryId = skillIds.get(primarySlug);
    if (!primaryId) {
      throw new Error(`Missing skill for exam bank: ${primarySlug}`);
    }

    const difficultyNum =
      q.examDifficulty === "HARD" ? 3 : q.examDifficulty === "MEDIUM" ? 2 : 1;

    const existing = await prisma.question.findUnique({
      where: { externalKey: q.externalKey },
      include: { answerOptions: true, skillLinks: true },
    });

    if (existing) {
      await prisma.answerOption.deleteMany({ where: { questionId: existing.id } });
      await prisma.questionSkill.deleteMany({ where: { questionId: existing.id } });
      await prisma.question.update({
        where: { id: existing.id },
        data: {
          skillId: primaryId,
          type: q.type,
          promptFr: q.promptFr,
          promptEn: q.promptEn,
          explanationCorrectFr: q.explanationCorrectFr,
          explanationCorrectEn: q.explanationCorrectEn,
          difficulty: difficultyNum,
          category: "PMP_EXAM",
          examBank: true,
          pmpDomain: q.domain,
          deliveryApproach: q.deliveryApproach,
          processArea: q.processArea,
          examDifficulty: q.examDifficulty,
          scenarioFr: q.scenarioFr,
          scenarioEn: q.scenarioEn,
          scenarioType: q.scenarioType,
          learningObjective: q.learningObjective,
          ecoTaskCode: q.ecoTaskCode ?? null,
          conceptSlug: q.conceptSlug ?? null,
          answerOptions: {
            create: q.options.map((opt, i) => ({
              labelFr: opt.labelFr,
              labelEn: opt.labelEn,
              isCorrect: opt.isCorrect,
              explanationWrongFr: opt.explanationWrongFr,
              explanationWrongEn: opt.explanationWrongEn,
              sortOrder: i,
            })),
          },
        },
      });
      for (const slug of q.skills.slice(1)) {
        const sid = skillIds.get(slug);
        if (!sid) continue;
        await prisma.questionSkill.create({
          data: { questionId: existing.id, skillId: sid },
        });
      }
    } else {
      const createdQ = await prisma.question.create({
        data: {
          externalKey: q.externalKey,
          skillId: primaryId,
          type: q.type,
          promptFr: q.promptFr,
          promptEn: q.promptEn,
          explanationCorrectFr: q.explanationCorrectFr,
          explanationCorrectEn: q.explanationCorrectEn,
          difficulty: difficultyNum,
          category: "PMP_EXAM",
          examBank: true,
          pmpDomain: q.domain,
          deliveryApproach: q.deliveryApproach,
          processArea: q.processArea,
          examDifficulty: q.examDifficulty,
          scenarioFr: q.scenarioFr,
          scenarioEn: q.scenarioEn,
          scenarioType: q.scenarioType,
          learningObjective: q.learningObjective,
          ecoTaskCode: q.ecoTaskCode ?? null,
          conceptSlug: q.conceptSlug ?? null,
          answerOptions: {
            create: q.options.map((opt, i) => ({
              labelFr: opt.labelFr,
              labelEn: opt.labelEn,
              isCorrect: opt.isCorrect,
              explanationWrongFr: opt.explanationWrongFr,
              explanationWrongEn: opt.explanationWrongEn,
              sortOrder: i,
            })),
          },
        },
      });
      for (const slug of q.skills.slice(1)) {
        const sid = skillIds.get(slug);
        if (!sid) continue;
        await prisma.questionSkill.create({
          data: { questionId: createdQ.id, skillId: sid },
        });
      }
      created += 1;
    }

    const meta = PMP_QUESTION_MASTERY_METADATA.find((m) => m.externalKey === q.externalKey);
    if (meta) {
      const questionRow = await prisma.question.findUnique({
        where: { externalKey: q.externalKey },
        select: { id: true },
      });
      await prisma.questionMasteryMetadata.upsert({
        where: { externalKey: q.externalKey },
        create: {
          externalKey: q.externalKey,
          questionId: questionRow?.id ?? null,
          ecoDomain: meta.ecoDomain,
          ecoTaskId: meta.ecoTaskId,
          ecoTaskIdsSecondary: meta.ecoTaskIdsSecondary,
          pmbokPerformanceDomain: meta.pmbokPerformanceDomain ?? null,
          pmbokPerformanceDomainsSecondary: meta.pmbokPerformanceDomainsSecondary,
          crossCutting: meta.crossCutting,
          primaryConceptId: meta.primaryConceptId,
          secondaryConceptIds: meta.secondaryConceptIds,
          primarySkillId: meta.primarySkillId ?? null,
          secondarySkillIds: meta.secondarySkillIds,
          cognitiveLevel: meta.cognitiveLevel,
          difficulty: meta.difficulty,
          approach: meta.approach,
          misconceptionIds: meta.misconceptionIds,
          mappingStatus: meta.mappingStatus,
          mappingConfidence: meta.mappingConfidence,
          sourceType: meta.sourceType,
          sourceConfidence: meta.sourceConfidence,
        },
        update: {
          questionId: questionRow?.id ?? null,
          ecoDomain: meta.ecoDomain,
          ecoTaskId: meta.ecoTaskId,
          ecoTaskIdsSecondary: meta.ecoTaskIdsSecondary,
          pmbokPerformanceDomain: meta.pmbokPerformanceDomain ?? null,
          pmbokPerformanceDomainsSecondary: meta.pmbokPerformanceDomainsSecondary,
          crossCutting: meta.crossCutting,
          primaryConceptId: meta.primaryConceptId,
          secondaryConceptIds: meta.secondaryConceptIds,
          primarySkillId: meta.primarySkillId ?? null,
          secondarySkillIds: meta.secondarySkillIds,
          cognitiveLevel: meta.cognitiveLevel,
          difficulty: meta.difficulty,
          approach: meta.approach,
          misconceptionIds: meta.misconceptionIds,
          mappingStatus: meta.mappingStatus,
          mappingConfidence: meta.mappingConfidence,
          sourceType: meta.sourceType,
          sourceConfidence: meta.sourceConfidence,
        },
      });
    }
  }

  const metaCount = await prisma.questionMasteryMetadata.count();
  const bankCount = await prisma.question.count({ where: { examBank: true } });
  console.log(
    `PMP exam bank ready: ${bankCount} questions (${created} newly created), ${EXAM_TEMPLATES.length} exam templates, ${metaCount} mastery metadata rows.`
  );

  return { bankCount, skillIds, metaCount };
}

/**
 * Phase D — gate for future expansion batches before DB persistence.
 * Live Q001–Q200 seed path does not invoke this; synthetic/test batches only.
 */
import type { ExamBankQuestionSeed } from "./pmp-exam-bank-types";
import {
  assertBatchEligibleForIntegration,
  type BatchIntegrationResult,
} from "../../src/modules/mastery-engine/bank-batch-integration";

export function assertExpansionBatchEligible(
  candidateBatch: ExamBankQuestionSeed[]
): BatchIntegrationResult {
  return assertBatchEligibleForIntegration({ candidateBatch });
}
