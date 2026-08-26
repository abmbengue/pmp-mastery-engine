/**
 * PMP Mastery Model — Phase B data-layer types & helpers.
 * Pure TypeScript (no Prisma). Engines in later phases consume these contracts.
 */

import {
  ECO_PROXY_DELIVERY_WEIGHTS,
  ECO_PROXY_DOMAIN_WEIGHTS,
  ECO_PROXY_TASKS,
  type EcoTaskCode,
  getEcoTask,
} from "@/modules/assessment-engine/eco-proxy-2026";
import type {
  ExamDifficultyCode,
  PmpDeliveryApproachCode,
  PmpDomainCode,
} from "@/modules/assessment-engine/exam-types";
import {
  computeNextReviewAt,
  intervalDaysForMastery,
} from "@/modules/learning-engine/spaced-repetition";
import type { MasteryLevel } from "@/shared/utils/mastery";

/** Six-layer mastery progression (mission model). */
export type MasteryCognitiveLevel =
  | "KNOWLEDGE"
  | "UNDERSTANDING"
  | "APPLICATION"
  | "JUDGMENT"
  | "TRANSFER"
  | "RETENTION";

/** Optional learner self-rating captured at answer time (Phase C+ UX). */
export type ConfidenceLevel = 1 | 2 | 3 | 4 | 5;

export type ConceptNode = {
  slug: string;
  titleEn: string;
  titleFr: string;
  /** Primary ECO-proxy task */
  ecoTaskCode: EcoTaskCode;
  /** Optional parent concept slug */
  parentSlug?: string;
  /** Related PLA skill slugs */
  skillSlugs: string[];
  /** Typical prerequisites (concept slugs) */
  prerequisites: string[];
};

/**
 * Compact concept graph for mastery routing.
 * Sub-concepts stay PLA-owned; not PMBOK extracts.
 */
export const MASTERY_CONCEPTS: readonly ConceptNode[] = [
  {
    slug: "shared-vision",
    titleEn: "Shared vision",
    titleFr: "Vision partagée",
    ecoTaskCode: "PE-01",
    skillSlugs: ["leadership", "stakeholder-engagement"],
    prerequisites: [],
  },
  {
    slug: "conflict-resolution",
    titleEn: "Conflict resolution",
    titleFr: "Résolution de conflit",
    ecoTaskCode: "PE-02",
    skillSlugs: ["conflict-management"],
    prerequisites: [],
  },
  {
    slug: "team-leadership",
    titleEn: "Leading the project team",
    titleFr: "Diriger l'équipe projet",
    ecoTaskCode: "PE-03",
    skillSlugs: ["leadership", "team-development"],
    prerequisites: [],
  },
  {
    slug: "stakeholder-engagement",
    titleEn: "Stakeholder engagement",
    titleFr: "Implication des parties prenantes",
    ecoTaskCode: "PE-04",
    skillSlugs: ["stakeholder-engagement"],
    prerequisites: [],
  },
  {
    slug: "expectation-alignment",
    titleEn: "Expectation alignment",
    titleFr: "Alignement des attentes",
    ecoTaskCode: "PE-05",
    skillSlugs: ["stakeholder-engagement", "communication"],
    prerequisites: ["stakeholder-engagement"],
  },
  {
    slug: "expectation-management",
    titleEn: "Expectation management",
    titleFr: "Pilotage des attentes",
    ecoTaskCode: "PE-06",
    skillSlugs: ["stakeholder-engagement", "business-value"],
    prerequisites: ["expectation-alignment"],
  },
  {
    slug: "knowledge-transfer",
    titleEn: "Knowledge transfer",
    titleFr: "Transfert de connaissances",
    ecoTaskCode: "PE-07",
    skillSlugs: ["team-development", "communication"],
    prerequisites: [],
  },
  {
    slug: "communication-planning",
    titleEn: "Communication planning",
    titleFr: "Planification de la communication",
    ecoTaskCode: "PE-08",
    skillSlugs: ["communication"],
    prerequisites: [],
  },
  {
    slug: "integrated-planning",
    titleEn: "Integrated planning",
    titleFr: "Planification intégrée",
    ecoTaskCode: "PR-01",
    skillSlugs: ["pmp-process", "pmp-hybrid"],
    prerequisites: [],
  },
  {
    slug: "scope-control",
    titleEn: "Scope control",
    titleFr: "Maîtrise du périmètre",
    ecoTaskCode: "PR-02",
    skillSlugs: ["pmp-process"],
    prerequisites: ["integrated-planning"],
  },
  {
    slug: "value-delivery",
    titleEn: "Value-focused delivery",
    titleFr: "Livraison orientée valeur",
    ecoTaskCode: "PR-03",
    skillSlugs: ["business-value", "agile-mindset"],
    prerequisites: [],
  },
  {
    slug: "resource-planning",
    titleEn: "Resource planning",
    titleFr: "Planification des ressources",
    ecoTaskCode: "PR-04",
    skillSlugs: ["team-development", "pmp-process"],
    prerequisites: ["integrated-planning"],
  },
  {
    slug: "procurement",
    titleEn: "Procurement",
    titleFr: "Approvisionnements",
    ecoTaskCode: "PR-05",
    skillSlugs: ["procurement"],
    prerequisites: [],
  },
  {
    slug: "project-finance",
    titleEn: "Project finances / cost",
    titleFr: "Finances / coûts",
    ecoTaskCode: "PR-06",
    skillSlugs: ["cost"],
    prerequisites: [],
  },
  {
    slug: "quality-deliverables",
    titleEn: "Quality of deliverables",
    titleFr: "Qualité des livrables",
    ecoTaskCode: "PR-07",
    skillSlugs: ["quality"],
    prerequisites: [],
  },
  {
    slug: "schedule-control",
    titleEn: "Schedule control",
    titleFr: "Maîtrise de l'échéancier",
    ecoTaskCode: "PR-08",
    skillSlugs: ["schedule"],
    prerequisites: ["integrated-planning"],
  },
  {
    slug: "status-assessment",
    titleEn: "Project status assessment",
    titleFr: "Évaluation de l'état",
    ecoTaskCode: "PR-09",
    skillSlugs: ["pmp-process", "governance"],
    prerequisites: ["schedule-control", "project-finance"],
  },
  {
    slug: "closure-transition",
    titleEn: "Closure & transition",
    titleFr: "Clôture et transition",
    ecoTaskCode: "PR-10",
    skillSlugs: ["pmp-process"],
    prerequisites: ["status-assessment"],
  },
  {
    slug: "governance",
    titleEn: "Project governance",
    titleFr: "Gouvernance",
    ecoTaskCode: "BE-01",
    skillSlugs: ["governance"],
    prerequisites: [],
  },
  {
    slug: "compliance",
    titleEn: "Compliance",
    titleFr: "Conformité",
    ecoTaskCode: "BE-02",
    skillSlugs: ["governance", "quality"],
    prerequisites: ["governance"],
  },
  {
    slug: "change-control",
    titleEn: "Change control",
    titleFr: "Maîtrise des changements",
    ecoTaskCode: "BE-03",
    skillSlugs: ["change-management"],
    prerequisites: ["governance"],
  },
  {
    slug: "impediments-issues",
    titleEn: "Impediments & issues",
    titleFr: "Obstacles et points à traiter",
    ecoTaskCode: "BE-04",
    skillSlugs: ["pmp-situational-thinking", "conflict-management"],
    prerequisites: [],
  },
  {
    slug: "risk-management",
    titleEn: "Risk management",
    titleFr: "Gestion des risques",
    ecoTaskCode: "BE-05",
    skillSlugs: ["risk-management"],
    prerequisites: [],
  },
  {
    slug: "continuous-improvement",
    titleEn: "Continuous improvement",
    titleFr: "Amélioration continue",
    ecoTaskCode: "BE-06",
    skillSlugs: ["quality"],
    prerequisites: [],
  },
  {
    slug: "org-change",
    titleEn: "Organizational change",
    titleFr: "Changement organisationnel",
    ecoTaskCode: "BE-07",
    skillSlugs: ["change-management"],
    prerequisites: [],
  },
  {
    slug: "external-environment",
    titleEn: "External business environment",
    titleFr: "Environnement commercial externe",
    ecoTaskCode: "BE-08",
    skillSlugs: ["business-value"],
    prerequisites: [],
  },
] as const;

const CONCEPT_BY_SLUG = new Map(MASTERY_CONCEPTS.map((c) => [c.slug, c] as const));

export function getConcept(slug: string): ConceptNode | undefined {
  return CONCEPT_BY_SLUG.get(slug);
}

export function conceptsForEcoTask(code: EcoTaskCode): ConceptNode[] {
  return MASTERY_CONCEPTS.filter((c) => c.ecoTaskCode === code);
}

/** Map existing PLA learningObjective → mastery cognitive band (approximate). */
export function learningObjectiveToCognitive(
  objective: "IDENTIFY" | "APPLY" | "ANALYZE" | "DECIDE"
): MasteryCognitiveLevel {
  switch (objective) {
    case "IDENTIFY":
      return "KNOWLEDGE";
    case "APPLY":
      return "APPLICATION";
    case "ANALYZE":
      return "UNDERSTANDING";
    case "DECIDE":
      return "JUDGMENT";
    default:
      return "APPLICATION";
  }
}

export type MasteryAttemptSignal = {
  questionExternalKey?: string;
  ecoTaskCode: EcoTaskCode;
  conceptSlug?: string;
  correct: boolean;
  difficulty: ExamDifficultyCode;
  confidence?: ConfidenceLevel;
  answeredAt: Date;
};

export type EcoTaskWeakness = {
  ecoTaskCode: EcoTaskCode;
  masteryLevel: MasteryLevel;
  attemptCount: number;
  correctCount: number;
  accuracy: number;
  avgConfidence: number | null;
  calibrated: boolean | null;
  nextReviewAt: Date | null;
};

/**
 * Confidence calibration: high confidence + wrong = overconfident (needs remediation);
 * low confidence + correct = underconfident (needs reinforcement, not harder content).
 */
export function assessCalibration(
  correct: boolean,
  confidence?: ConfidenceLevel
): "OVERCONFIDENT" | "UNDERCONFIDENT" | "CALIBRATED" | "UNKNOWN" {
  if (confidence == null) return "UNKNOWN";
  if (correct && confidence <= 2) return "UNDERCONFIDENT";
  if (!correct && confidence >= 4) return "OVERCONFIDENT";
  return "CALIBRATED";
}

/**
 * Difficulty-weighted score contribution for mastery ≠ raw %.
 * HARD correct counts more; HARD miss hurts more.
 */
export function difficultyWeight(difficulty: ExamDifficultyCode): number {
  if (difficulty === "HARD") return 1.35;
  if (difficulty === "EASY") return 0.85;
  return 1;
}

export function computeWeightedAccuracy(
  attempts: Pick<MasteryAttemptSignal, "correct" | "difficulty">[]
): number {
  if (attempts.length === 0) return 0;
  let earned = 0;
  let possible = 0;
  for (const a of attempts) {
    const w = difficultyWeight(a.difficulty);
    possible += w;
    if (a.correct) earned += w;
  }
  return Math.round((earned / possible) * 100);
}

export function masteryLevelFromWeightedAccuracy(pct: number): MasteryLevel {
  if (pct >= 80) return "MASTERED";
  if (pct >= 60) return "LEARNING";
  return "WEAK";
}

/** Item-level retention hook (Phase C engines write/read this shape). */
export type ItemRetentionState = {
  questionExternalKey: string;
  ecoTaskCode: EcoTaskCode;
  conceptSlug?: string;
  masteryLevel: MasteryLevel;
  lastReviewedAt: Date | null;
  nextReviewAt: Date;
  intervalDays: number;
};

export function buildItemRetentionState(
  input: {
    questionExternalKey: string;
    ecoTaskCode: EcoTaskCode;
    conceptSlug?: string;
    masteryLevel: MasteryLevel;
    lastReviewedAt: Date | null;
    recentErrorCount?: number;
  },
  now: Date = new Date()
): ItemRetentionState {
  const nextReviewAt = computeNextReviewAt(
    {
      masteryLevel: input.masteryLevel,
      lastReviewedAt: input.lastReviewedAt,
      lastAttemptAt: input.lastReviewedAt,
      recentErrorCount: input.recentErrorCount ?? 0,
    },
    now
  );
  return {
    questionExternalKey: input.questionExternalKey,
    ecoTaskCode: input.ecoTaskCode,
    conceptSlug: input.conceptSlug,
    masteryLevel: input.masteryLevel,
    lastReviewedAt: input.lastReviewedAt,
    nextReviewAt,
    intervalDays: intervalDaysForMastery(input.masteryLevel),
  };
}

export type EcoTaggedQuestion = {
  externalKey: string;
  domain: PmpDomainCode;
  deliveryApproach: PmpDeliveryApproachCode;
  ecoTaskCode: EcoTaskCode;
  /** Secondary tasks when a vignette spans multiple areas */
  ecoTaskCodesSecondary?: EcoTaskCode[];
  conceptSlug?: string;
};

export type EcoCoverageRow = {
  ecoTaskCode: EcoTaskCode;
  titleEn: string;
  plaDomain: PmpDomainCode;
  questionCount: number;
  status: "COVERED" | "THIN" | "MISSING";
};

export type EcoCoverageReport = {
  version: string;
  totalQuestions: number;
  taggedQuestions: number;
  byTask: EcoCoverageRow[];
  missingTaskCodes: EcoTaskCode[];
  thinTaskCodes: EcoTaskCode[];
  domainActual: Record<PmpDomainCode, number>;
  domainTargetWeights: typeof ECO_PROXY_DOMAIN_WEIGHTS;
  deliveryActual: {
    PREDICTIVE: number;
    AGILE: number;
    HYBRID: number;
    agileOrHybridShare: number;
  };
  deliveryTarget: typeof ECO_PROXY_DELIVERY_WEIGHTS;
  /** PLA domain tag ≠ ECO-proxy domain for primary task (informational) */
  domainMismatchCount: number;
};

const THIN_THRESHOLD = 3;

export function buildEcoCoverageReport(
  questions: EcoTaggedQuestion[],
  version = "phase-b"
): EcoCoverageReport {
  const byCode = new Map<EcoTaskCode, number>();
  for (const t of ECO_PROXY_TASKS) byCode.set(t.code, 0);

  const domainActual: Record<PmpDomainCode, number> = {
    PEOPLE: 0,
    PROCESS: 0,
    BUSINESS_ENVIRONMENT: 0,
  };
  const deliveryActual = { PREDICTIVE: 0, AGILE: 0, HYBRID: 0 };
  let domainMismatchCount = 0;
  let tagged = 0;

  for (const q of questions) {
    domainActual[q.domain] += 1;
    deliveryActual[q.deliveryApproach] += 1;
    if (!q.ecoTaskCode) continue;
    tagged += 1;
    byCode.set(q.ecoTaskCode, (byCode.get(q.ecoTaskCode) ?? 0) + 1);
    const task = getEcoTask(q.ecoTaskCode);
    if (task.plaDomain !== q.domain) domainMismatchCount += 1;
  }

  const total = questions.length || 1;
  const agileOrHybridShare =
    (deliveryActual.AGILE + deliveryActual.HYBRID) / total;

  const byTask: EcoCoverageRow[] = ECO_PROXY_TASKS.map((t) => {
    const questionCount = byCode.get(t.code) ?? 0;
    let status: EcoCoverageRow["status"] = "COVERED";
    if (questionCount === 0) status = "MISSING";
    else if (questionCount < THIN_THRESHOLD) status = "THIN";
    return {
      ecoTaskCode: t.code,
      titleEn: t.titleEn,
      plaDomain: t.plaDomain,
      questionCount,
      status,
    };
  });

  return {
    version,
    totalQuestions: questions.length,
    taggedQuestions: tagged,
    byTask,
    missingTaskCodes: byTask.filter((r) => r.status === "MISSING").map((r) => r.ecoTaskCode),
    thinTaskCodes: byTask.filter((r) => r.status === "THIN").map((r) => r.ecoTaskCode),
    domainActual,
    domainTargetWeights: ECO_PROXY_DOMAIN_WEIGHTS,
    deliveryActual: { ...deliveryActual, agileOrHybridShare },
    deliveryTarget: ECO_PROXY_DELIVERY_WEIGHTS,
    domainMismatchCount,
  };
}

export function summarizeWeakEcoTasks(
  attemptsByTask: Map<EcoTaskCode, MasteryAttemptSignal[]>
): EcoTaskWeakness[] {
  const out: EcoTaskWeakness[] = [];
  for (const task of ECO_PROXY_TASKS) {
    const attempts = attemptsByTask.get(task.code) ?? [];
    if (attempts.length === 0) continue;
    const correctCount = attempts.filter((a) => a.correct).length;
    const accuracy = computeWeightedAccuracy(attempts);
    const masteryLevel = masteryLevelFromWeightedAccuracy(accuracy);
    const confidences = attempts
      .map((a) => a.confidence)
      .filter((c): c is ConfidenceLevel => c != null);
    const avgConfidence =
      confidences.length === 0
        ? null
        : confidences.reduce((s, c) => s + c, 0) / confidences.length;
    const last = attempts[attempts.length - 1];
    const calibration = assessCalibration(last.correct, last.confidence);
    out.push({
      ecoTaskCode: task.code,
      masteryLevel,
      attemptCount: attempts.length,
      correctCount,
      accuracy,
      avgConfidence,
      calibrated:
        calibration === "UNKNOWN" ? null : calibration === "CALIBRATED",
      nextReviewAt: buildItemRetentionState({
        questionExternalKey: last.questionExternalKey ?? task.code,
        ecoTaskCode: task.code,
        masteryLevel,
        lastReviewedAt: last.answeredAt,
        recentErrorCount: attempts.filter((a) => !a.correct).length,
      }).nextReviewAt,
    });
  }
  return out.sort((a, b) => a.accuracy - b.accuracy);
}
