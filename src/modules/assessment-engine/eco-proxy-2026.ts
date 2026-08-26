/**
 * PLA ECO-proxy mastery ontology (Phase B).
 *
 * Structure (domain weights, task counts, delivery split) is informed by the
 * PMP Exam Content Outline — July 2026 update, used as an internal alignment
 * reference only.
 *
 * IMPORTANT:
 * - Labels and focus areas are **PLA paraphrases**, not PMI ECO wording.
 * - Do not present this as an official PMI blueprint or ECO reproduction.
 * - Learner-facing UI must keep Practice Readiness ≠ official PMI scoring.
 */

import type { PmpDomainCode } from "@/modules/assessment-engine/exam-types";

export const ECO_PROXY_VERSION = "2026.07-pla-proxy" as const;

/** Target domain mix for PLA practice alignment (ECO 2026 structure). */
export const ECO_PROXY_DOMAIN_WEIGHTS = {
  PEOPLE: 0.33,
  PROCESS: 0.41,
  BUSINESS_ENVIRONMENT: 0.26,
} as const satisfies Record<PmpDomainCode, number>;

/**
 * Target delivery mix for PLA practice alignment.
 * ECO 2026 notes ~40% predictive and ~60% adaptive/agile + hybrid combined.
 */
export const ECO_PROXY_DELIVERY_WEIGHTS = {
  PREDICTIVE: 0.4,
  AGILE_OR_HYBRID: 0.6,
} as const;

export type EcoDomainCode = "PE" | "PR" | "BE";

export type EcoTaskCode =
  | "PE-01"
  | "PE-02"
  | "PE-03"
  | "PE-04"
  | "PE-05"
  | "PE-06"
  | "PE-07"
  | "PE-08"
  | "PR-01"
  | "PR-02"
  | "PR-03"
  | "PR-04"
  | "PR-05"
  | "PR-06"
  | "PR-07"
  | "PR-08"
  | "PR-09"
  | "PR-10"
  | "BE-01"
  | "BE-02"
  | "BE-03"
  | "BE-04"
  | "BE-05"
  | "BE-06"
  | "BE-07"
  | "BE-08";

export type EcoTaskDefinition = {
  code: EcoTaskCode;
  ecoDomain: EcoDomainCode;
  /** Maps to PLA exam domain enum */
  plaDomain: PmpDomainCode;
  sortOrder: number;
  /** PLA-owned short label (not PMI text) */
  titleEn: string;
  titleFr: string;
  /** PLA pedagogical focus keywords — not ECO enabler lists */
  focusAreas: string[];
  relatedSkillSlugs: string[];
};

export const ECO_PROXY_TASKS: readonly EcoTaskDefinition[] = [
  // Domain I — People (33%)
  {
    code: "PE-01",
    ecoDomain: "PE",
    plaDomain: "PEOPLE",
    sortOrder: 1,
    titleEn: "Shared vision",
    titleFr: "Vision partagée",
    focusAreas: ["vision-alignment", "stakeholder-buy-in", "misunderstanding-root-cause"],
    relatedSkillSlugs: ["leadership", "stakeholder-engagement", "pmp-people"],
  },
  {
    code: "PE-02",
    ecoDomain: "PE",
    plaDomain: "PEOPLE",
    sortOrder: 2,
    titleEn: "Conflict handling",
    titleFr: "Gestion des conflits",
    focusAreas: ["conflict-sources", "resolution-strategy", "ground-rules"],
    relatedSkillSlugs: ["conflict-management", "communication", "pmp-people"],
  },
  {
    code: "PE-03",
    ecoDomain: "PE",
    plaDomain: "PEOPLE",
    sortOrder: 3,
    titleEn: "Team leadership",
    titleFr: "Direction d'équipe",
    focusAreas: ["expectations", "empowerment", "roles", "leadership-style"],
    relatedSkillSlugs: ["leadership", "team-development", "pmp-people"],
  },
  {
    code: "PE-04",
    ecoDomain: "PE",
    plaDomain: "PEOPLE",
    sortOrder: 4,
    titleEn: "Stakeholder engagement",
    titleFr: "Implication des parties prenantes",
    focusAreas: ["identify-analyze", "engagement-plan", "trust", "influence"],
    relatedSkillSlugs: ["stakeholder-engagement", "communication", "pmp-people"],
  },
  {
    code: "PE-05",
    ecoDomain: "PE",
    plaDomain: "PEOPLE",
    sortOrder: 5,
    titleEn: "Expectation alignment",
    titleFr: "Alignement des attentes",
    focusAreas: ["categorize-stakeholders", "facilitate-alignment", "mentoring"],
    relatedSkillSlugs: ["stakeholder-engagement", "communication", "pmp-people"],
  },
  {
    code: "PE-06",
    ecoDomain: "PE",
    plaDomain: "PEOPLE",
    sortOrder: 6,
    titleEn: "Expectation management",
    titleFr: "Pilotage des attentes",
    focusAreas: ["customer-expectations", "satisfaction-monitoring", "outcome-alignment"],
    relatedSkillSlugs: ["stakeholder-engagement", "business-value", "pmp-people"],
  },
  {
    code: "PE-07",
    ecoDomain: "PE",
    plaDomain: "PEOPLE",
    sortOrder: 7,
    titleEn: "Knowledge transfer",
    titleFr: "Transfert de connaissances",
    focusAreas: ["critical-knowledge", "learning-environment", "handover"],
    relatedSkillSlugs: ["team-development", "communication", "pmp-people"],
  },
  {
    code: "PE-08",
    ecoDomain: "PE",
    plaDomain: "PEOPLE",
    sortOrder: 8,
    titleEn: "Communication planning",
    titleFr: "Planification de la communication",
    focusAreas: ["communication-strategy", "feedback-loops", "reporting", "transparency"],
    relatedSkillSlugs: ["communication", "governance", "pmp-people"],
  },

  // Domain II — Process (41%)
  {
    code: "PR-01",
    ecoDomain: "PR",
    plaDomain: "PROCESS",
    sortOrder: 1,
    titleEn: "Integrated planning & delivery approach",
    titleFr: "Plan intégré et approche de livraison",
    focusAreas: ["complexity", "predictive-agile-hybrid", "integrated-plan", "dependencies"],
    relatedSkillSlugs: ["pmp-process", "pmp-hybrid", "pmp-foundations"],
  },
  {
    code: "PR-02",
    ecoDomain: "PR",
    plaDomain: "PROCESS",
    sortOrder: 2,
    titleEn: "Scope definition & control",
    titleFr: "Périmètre — définition et maîtrise",
    focusAreas: ["scope-definition", "stakeholder-agreement", "decomposition"],
    relatedSkillSlugs: ["pmp-process", "business-value"],
  },
  {
    code: "PR-03",
    ecoDomain: "PR",
    plaDomain: "PROCESS",
    sortOrder: 3,
    titleEn: "Value-focused delivery",
    titleFr: "Livraison orientée valeur",
    focusAreas: ["value-components", "prioritization", "incremental-value", "benefits-tracking"],
    relatedSkillSlugs: ["business-value", "agile-mindset", "pmp-process"],
  },
  {
    code: "PR-04",
    ecoDomain: "PR",
    plaDomain: "PROCESS",
    sortOrder: 4,
    titleEn: "Resource planning",
    titleFr: "Planification des ressources",
    focusAreas: ["resource-plan", "availability", "optimization"],
    relatedSkillSlugs: ["team-development", "pmp-process"],
  },
  {
    code: "PR-05",
    ecoDomain: "PR",
    plaDomain: "PROCESS",
    sortOrder: 5,
    titleEn: "Procurement",
    titleFr: "Approvisionnements",
    focusAreas: ["procurement-plan", "contracts", "vendor-performance", "negotiation"],
    relatedSkillSlugs: ["procurement", "pmp-process"],
  },
  {
    code: "PR-06",
    ecoDomain: "PR",
    plaDomain: "PROCESS",
    sortOrder: 6,
    titleEn: "Project finances",
    titleFr: "Finances du projet",
    focusAreas: ["budget", "contingency", "cost-tracking", "reserves", "evm-lite"],
    relatedSkillSlugs: ["cost", "pmp-process"],
  },
  {
    code: "PR-07",
    ecoDomain: "PR",
    plaDomain: "PROCESS",
    sortOrder: 7,
    titleEn: "Quality of deliverables",
    titleFr: "Qualité des livrables",
    focusAreas: ["quality-requirements", "qa-qc", "compliance-quality", "continuous-improvement"],
    relatedSkillSlugs: ["quality", "pmp-process"],
  },
  {
    code: "PR-08",
    ecoDomain: "PR",
    plaDomain: "PROCESS",
    sortOrder: 8,
    titleEn: "Schedule planning",
    titleFr: "Échéancier",
    focusAreas: ["schedule-baseline", "estimates", "dependencies", "variance-analysis"],
    relatedSkillSlugs: ["schedule", "pmp-process"],
  },
  {
    code: "PR-09",
    ecoDomain: "PR",
    plaDomain: "PROCESS",
    sortOrder: 9,
    titleEn: "Project status assessment",
    titleFr: "Évaluation de l'état du projet",
    focusAreas: ["metrics", "artifacts", "progress", "status-communication"],
    relatedSkillSlugs: ["pmp-process", "governance", "pmp-situational-thinking"],
  },
  {
    code: "PR-10",
    ecoDomain: "PR",
    plaDomain: "PROCESS",
    sortOrder: 10,
    titleEn: "Closure & transition",
    titleFr: "Clôture et transition",
    focusAreas: ["acceptance", "transition-readiness", "lessons", "closeout"],
    relatedSkillSlugs: ["pmp-process", "governance"],
  },

  // Domain III — Business environment (26%)
  {
    code: "BE-01",
    ecoDomain: "BE",
    plaDomain: "BUSINESS_ENVIRONMENT",
    sortOrder: 1,
    titleEn: "Project governance",
    titleFr: "Gouvernance de projet",
    focusAreas: ["governance-structure", "success-metrics", "escalation-thresholds"],
    relatedSkillSlugs: ["governance", "pmp-business-environment"],
  },
  {
    code: "BE-02",
    ecoDomain: "BE",
    plaDomain: "BUSINESS_ENVIRONMENT",
    sortOrder: 2,
    titleEn: "Compliance",
    titleFr: "Conformité",
    focusAreas: ["regulatory", "sustainability", "noncompliance-impact", "controls"],
    relatedSkillSlugs: ["governance", "quality", "pmp-business-environment"],
  },
  {
    code: "BE-03",
    ecoDomain: "BE",
    plaDomain: "BUSINESS_ENVIRONMENT",
    sortOrder: 3,
    titleEn: "Change control",
    titleFr: "Maîtrise des changements",
    focusAreas: ["change-process", "approved-changes", "documentation-updates"],
    relatedSkillSlugs: ["change-management", "governance", "pmp-business-environment"],
  },
  {
    code: "BE-04",
    ecoDomain: "BE",
    plaDomain: "BUSINESS_ENVIRONMENT",
    sortOrder: 4,
    titleEn: "Impediments & issues",
    titleFr: "Obstacles et points à traiter",
    focusAreas: ["impediment-impact", "issue-vs-risk", "escalation", "resolution"],
    relatedSkillSlugs: ["pmp-situational-thinking", "conflict-management", "pmp-business-environment"],
  },
  {
    code: "BE-05",
    ecoDomain: "BE",
    plaDomain: "BUSINESS_ENVIRONMENT",
    sortOrder: 5,
    titleEn: "Risk management",
    titleFr: "Gestion des risques",
    focusAreas: ["identify", "analyze", "response", "risk-register", "communication"],
    relatedSkillSlugs: ["risk-management", "pmp-business-environment"],
  },
  {
    code: "BE-06",
    ecoDomain: "BE",
    plaDomain: "BUSINESS_ENVIRONMENT",
    sortOrder: 6,
    titleEn: "Continuous improvement",
    titleFr: "Amélioration continue",
    focusAreas: ["lessons-learned", "process-updates", "organizational-assets"],
    relatedSkillSlugs: ["quality", "pmp-business-environment"],
  },
  {
    code: "BE-07",
    ecoDomain: "BE",
    plaDomain: "BUSINESS_ENVIRONMENT",
    sortOrder: 7,
    titleEn: "Organizational change support",
    titleFr: "Soutien au changement organisationnel",
    focusAreas: ["culture", "org-change-impact", "adoption"],
    relatedSkillSlugs: ["change-management", "pmp-business-environment"],
  },
  {
    code: "BE-08",
    ecoDomain: "BE",
    plaDomain: "BUSINESS_ENVIRONMENT",
    sortOrder: 8,
    titleEn: "External business environment",
    titleFr: "Environnement commercial externe",
    focusAreas: ["market-regulatory-tech", "scope-backlog-impact", "continuous-scan"],
    relatedSkillSlugs: ["business-value", "pmp-business-environment"],
  },
] as const;

const TASK_BY_CODE = new Map(
  ECO_PROXY_TASKS.map((t) => [t.code, t] as const)
);

export function getEcoTask(code: EcoTaskCode): EcoTaskDefinition {
  const task = TASK_BY_CODE.get(code);
  if (!task) throw new Error(`Unknown ECO-proxy task: ${code}`);
  return task;
}

export function listEcoTasksByDomain(domain: EcoDomainCode): EcoTaskDefinition[] {
  return ECO_PROXY_TASKS.filter((t) => t.ecoDomain === domain);
}

export function ecoTaskCodes(): EcoTaskCode[] {
  return ECO_PROXY_TASKS.map((t) => t.code);
}

/** Count of PLA-proxy tasks (must stay 8 + 10 + 8 = 26). */
export const ECO_PROXY_TASK_COUNT = ECO_PROXY_TASKS.length;
