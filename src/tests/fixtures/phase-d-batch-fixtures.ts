/**
 * Phase D — isolated synthetic batch fixtures (never written to live exam bank).
 */

import { PMP_EXAM_BANK_STEMS } from "../../../prisma/seed/pmp-exam-bank-data";
import type { ExamBankQuestionSeed } from "../../../prisma/seed/pmp-exam-bank-types";

export const LIVE_PROTECTED_BANK_AGGREGATE =
  "d18c86618e8cba16c623e8982f362f00e930a8ed5ea8b9c53abb8b5b0df0b1e2";

export function cloneQuestion(
  source: ExamBankQuestionSeed,
  externalKey: string,
  overrides: Partial<ExamBankQuestionSeed> = {}
): ExamBankQuestionSeed {
  return {
    ...structuredClone(source),
    externalKey,
    options: structuredClone(source.options),
    ...overrides,
  };
}

export function makeFullySyntheticExpansion(
  externalKey: string,
  variant: "integration" | "procurement" = "integration"
): ExamBankQuestionSeed {
  if (variant === "procurement") {
    return {
      externalKey,
      domain: "PROCESS",
      deliveryApproach: "PREDICTIVE",
      processArea: "Procurement management",
      examDifficulty: "HARD",
      scenarioType: "RISK",
      learningObjective: "ANALYZE",
      skills: ["procurement"],
      type: "SINGLE_CHOICE",
      scenarioEn: `Vendor contract renegotiation deadlock during procurement wave ${externalKey}`,
      scenarioFr: `Impasse renégociation fournisseur pendant achats ${externalKey}`,
      promptEn: `What should the project manager do next for ${externalKey}?`,
      promptFr: `Que doit faire le chef de projet pour ${externalKey}?`,
      explanationCorrectEn: "Use contract terms and procurement strategy.",
      explanationCorrectFr: "Utiliser les clauses contractuelles et la stratégie achats.",
      options: [
        {
          labelEn: "Review contract terms and engage procurement with options",
          labelFr: "Revoir les clauses et engager achats avec options",
          isCorrect: true,
        },
        {
          labelEn: "Cancel the contract unilaterally",
          labelFr: "Annuler le contrat unilatéralement",
          isCorrect: false,
        },
        {
          labelEn: "Ignore vendor performance",
          labelFr: "Ignorer la performance fournisseur",
          isCorrect: false,
        },
        {
          labelEn: "Skip change control",
          labelFr: "Contourner le contrôle des changements",
          isCorrect: false,
        },
      ],
      ecoTaskCode: "PR-05",
      conceptSlug: "procurement",
    };
  }

  return {
    externalKey,
    domain: "PROCESS",
    deliveryApproach: "HYBRID",
    processArea: "Integration management",
    examDifficulty: "MEDIUM",
    scenarioType: "NEXT_ACTION",
    learningObjective: "APPLY",
    skills: ["integrated-planning"],
    type: "SINGLE_CHOICE",
    scenarioEn: `Synthetic zephyr quantum integration bridge scenario ${externalKey}`,
    scenarioFr: `Scénario synthétique pont intégration ${externalKey}`,
    promptEn: `What is the best action for synthetic expansion item ${externalKey}?`,
    promptFr: `Quelle est la meilleure action pour l'item ${externalKey}?`,
    explanationCorrectEn: "Analyze impact, engage stakeholders, then recommend.",
    explanationCorrectFr: "Analyser l'impact, engager les parties prenantes, puis recommander.",
    options: [
      {
        labelEn: "Analyze impact then present options with recommendation",
        labelFr: "Analyser l'impact puis présenter des options avec recommandation",
        isCorrect: true,
      },
      {
        labelEn: "Escalate immediately without analysis",
        labelFr: "Escalader immédiatement sans analyse",
        isCorrect: false,
      },
      {
        labelEn: "Ignore stakeholder concerns",
        labelFr: "Ignorer les préoccupations des parties prenantes",
        isCorrect: false,
      },
      {
        labelEn: "Change baseline without approval",
        labelFr: "Modifier la ligne de base sans approbation",
        isCorrect: false,
      },
    ],
    ecoTaskCode: "PR-01",
    conceptSlug: "integrated-planning",
  };
}

export function makeValidExpansionBatch(): ExamBankQuestionSeed[] {
  return [
    makeFullySyntheticExpansion("pmp-exam-901", "integration"),
    makeFullySyntheticExpansion("pmp-exam-902", "procurement"),
  ];
}

export function mutateProtectedQuestion(
  index: 0 | 99 | 199,
  overrides: Partial<ExamBankQuestionSeed>
): ExamBankQuestionSeed {
  const original = PMP_EXAM_BANK_STEMS[index]!;
  return cloneQuestion(original, original.externalKey, overrides);
}
