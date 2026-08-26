/**
 * Official ECO July 2026 task taxonomy with stable IDs.
 * Task titles are PLA paraphrases — not verbatim PMI ECO text.
 */

import type { EcoDomainStableId, EcoTaskRecord, EcoTaskStableId } from "./types";

export const ECO_DOMAIN_WEIGHTS = {
  PEOPLE: 0.33,
  PROCESS: 0.41,
  BUSINESS: 0.26,
} as const satisfies Record<EcoDomainStableId, number>;

export const ECO_DELIVERY_SPLIT = {
  predictive: 0.4,
  adaptiveAgileHybrid: 0.6,
} as const;

const TASKS: EcoTaskRecord[] = [
  // PEOPLE — 33%
  {
    id: "PEOPLE-T01",
    domainId: "PEOPLE",
    sortOrder: 1,
    titleEn: "Develop a common vision",
    titleFr: "Développer une vision commune",
    legacyCode: "PE-01",
    plaExamDomain: "PEOPLE",
    focusKeywords: ["shared-vision", "alignment", "root-cause-misunderstanding"],
    sourceType: "PMI_ECO_2026",
    sourceConfidence: "HIGH",
  },
  {
    id: "PEOPLE-T02",
    domainId: "PEOPLE",
    sortOrder: 2,
    titleEn: "Manage conflicts",
    titleFr: "Gérer les conflits",
    legacyCode: "PE-02",
    plaExamDomain: "PEOPLE",
    focusKeywords: ["conflict-sources", "resolution", "ground-rules"],
    sourceType: "PMI_ECO_2026",
    sourceConfidence: "HIGH",
  },
  {
    id: "PEOPLE-T03",
    domainId: "PEOPLE",
    sortOrder: 3,
    titleEn: "Lead the project team",
    titleFr: "Diriger l'équipe de projet",
    legacyCode: "PE-03",
    plaExamDomain: "PEOPLE",
    focusKeywords: ["expectations", "empowerment", "roles", "leadership-style"],
    sourceType: "PMI_ECO_2026",
    sourceConfidence: "HIGH",
  },
  {
    id: "PEOPLE-T04",
    domainId: "PEOPLE",
    sortOrder: 4,
    titleEn: "Engage stakeholders",
    titleFr: "Impliquer les parties prenantes",
    legacyCode: "PE-04",
    plaExamDomain: "PEOPLE",
    focusKeywords: ["identify", "analyze", "engagement-plan", "trust", "influence"],
    sourceType: "PMI_ECO_2026",
    sourceConfidence: "HIGH",
  },
  {
    id: "PEOPLE-T05",
    domainId: "PEOPLE",
    sortOrder: 5,
    titleEn: "Align stakeholder expectations",
    titleFr: "Aligner les attentes des parties prenantes",
    legacyCode: "PE-05",
    plaExamDomain: "PEOPLE",
    focusKeywords: ["categorize", "facilitate-alignment", "mentoring"],
    sourceType: "PMI_ECO_2026",
    sourceConfidence: "HIGH",
  },
  {
    id: "PEOPLE-T06",
    domainId: "PEOPLE",
    sortOrder: 6,
    titleEn: "Manage stakeholder expectations",
    titleFr: "Gérer les attentes des parties prenantes",
    legacyCode: "PE-06",
    plaExamDomain: "PEOPLE",
    focusKeywords: ["customer-expectations", "satisfaction", "outcome-alignment"],
    sourceType: "PMI_ECO_2026",
    sourceConfidence: "HIGH",
  },
  {
    id: "PEOPLE-T07",
    domainId: "PEOPLE",
    sortOrder: 7,
    titleEn: "Ensure knowledge transfer",
    titleFr: "Assurer le transfert des connaissances",
    legacyCode: "PE-07",
    plaExamDomain: "PEOPLE",
    focusKeywords: ["critical-knowledge", "learning-environment", "handover"],
    sourceType: "PMI_ECO_2026",
    sourceConfidence: "HIGH",
  },
  {
    id: "PEOPLE-T08",
    domainId: "PEOPLE",
    sortOrder: 8,
    titleEn: "Plan and manage communication",
    titleFr: "Planifier et gérer la communication",
    legacyCode: "PE-08",
    plaExamDomain: "PEOPLE",
    focusKeywords: ["communication-strategy", "feedback", "reporting", "transparency"],
    sourceType: "PMI_ECO_2026",
    sourceConfidence: "HIGH",
  },
  // PROCESS — 41%
  {
    id: "PROCESS-T01",
    domainId: "PROCESS",
    sortOrder: 1,
    titleEn: "Integrated plan and delivery approach",
    titleFr: "Plan intégré et approche de livraison",
    legacyCode: "PR-01",
    plaExamDomain: "PROCESS",
    focusKeywords: ["tailoring", "predictive-agile-hybrid", "integrated-plan"],
    sourceType: "PMI_ECO_2026",
    sourceConfidence: "HIGH",
  },
  {
    id: "PROCESS-T02",
    domainId: "PROCESS",
    sortOrder: 2,
    titleEn: "Develop and manage scope",
    titleFr: "Développer et gérer le périmètre",
    legacyCode: "PR-02",
    plaExamDomain: "PROCESS",
    focusKeywords: ["scope-definition", "agreement", "decomposition"],
    sourceType: "PMI_ECO_2026",
    sourceConfidence: "HIGH",
  },
  {
    id: "PROCESS-T03",
    domainId: "PROCESS",
    sortOrder: 3,
    titleEn: "Value-based delivery",
    titleFr: "Livraison axée sur la valeur",
    legacyCode: "PR-03",
    plaExamDomain: "PROCESS",
    focusKeywords: ["value-components", "prioritization", "benefits-tracking"],
    sourceType: "PMI_ECO_2026",
    sourceConfidence: "HIGH",
  },
  {
    id: "PROCESS-T04",
    domainId: "PROCESS",
    sortOrder: 4,
    titleEn: "Plan and manage resources",
    titleFr: "Planifier et gérer les ressources",
    legacyCode: "PR-04",
    plaExamDomain: "PROCESS",
    focusKeywords: ["resource-plan", "availability", "optimization"],
    sourceType: "PMI_ECO_2026",
    sourceConfidence: "HIGH",
  },
  {
    id: "PROCESS-T05",
    domainId: "PROCESS",
    sortOrder: 5,
    titleEn: "Plan and manage procurement",
    titleFr: "Planifier et gérer les approvisionnements",
    legacyCode: "PR-05",
    plaExamDomain: "PROCESS",
    focusKeywords: ["contracts", "vendor-performance", "negotiation"],
    sourceType: "PMI_ECO_2026",
    sourceConfidence: "HIGH",
  },
  {
    id: "PROCESS-T06",
    domainId: "PROCESS",
    sortOrder: 6,
    titleEn: "Plan and manage finance",
    titleFr: "Planifier et gérer les finances",
    legacyCode: "PR-06",
    plaExamDomain: "PROCESS",
    focusKeywords: ["budget", "contingency", "reserves", "cost-tracking"],
    sourceType: "PMI_ECO_2026",
    sourceConfidence: "HIGH",
  },
  {
    id: "PROCESS-T07",
    domainId: "PROCESS",
    sortOrder: 7,
    titleEn: "Plan and optimize quality of deliverables",
    titleFr: "Planifier et optimiser la qualité des livrables",
    legacyCode: "PR-07",
    plaExamDomain: "PROCESS",
    focusKeywords: ["quality-requirements", "qa-qc", "continuous-improvement"],
    sourceType: "PMI_ECO_2026",
    sourceConfidence: "HIGH",
  },
  {
    id: "PROCESS-T08",
    domainId: "PROCESS",
    sortOrder: 8,
    titleEn: "Plan and manage schedule",
    titleFr: "Planifier et gérer l'échéancier",
    legacyCode: "PR-08",
    plaExamDomain: "PROCESS",
    focusKeywords: ["baseline", "estimates", "dependencies", "variance"],
    sourceType: "PMI_ECO_2026",
    sourceConfidence: "HIGH",
  },
  {
    id: "PROCESS-T09",
    domainId: "PROCESS",
    sortOrder: 9,
    titleEn: "Evaluate project status",
    titleFr: "Évaluer l'état du projet",
    legacyCode: "PR-09",
    plaExamDomain: "PROCESS",
    focusKeywords: ["metrics", "artifacts", "status-communication"],
    sourceType: "PMI_ECO_2026",
    sourceConfidence: "HIGH",
  },
  {
    id: "PROCESS-T10",
    domainId: "PROCESS",
    sortOrder: 10,
    titleEn: "Manage project closure",
    titleFr: "Gérer la clôture du projet",
    legacyCode: "PR-10",
    plaExamDomain: "PROCESS",
    focusKeywords: ["acceptance", "transition", "closeout", "lessons"],
    sourceType: "PMI_ECO_2026",
    sourceConfidence: "HIGH",
  },
  // BUSINESS — 26%
  {
    id: "BUSINESS-T01",
    domainId: "BUSINESS",
    sortOrder: 1,
    titleEn: "Define and establish project governance",
    titleFr: "Définir et établir la gouvernance du projet",
    legacyCode: "BE-01",
    plaExamDomain: "BUSINESS_ENVIRONMENT",
    focusKeywords: ["governance-structure", "success-metrics", "escalation"],
    sourceType: "PMI_ECO_2026",
    sourceConfidence: "HIGH",
  },
  {
    id: "BUSINESS-T02",
    domainId: "BUSINESS",
    sortOrder: 2,
    titleEn: "Plan and manage compliance",
    titleFr: "Planifier et gérer la conformité",
    legacyCode: "BE-02",
    plaExamDomain: "BUSINESS_ENVIRONMENT",
    focusKeywords: ["regulatory", "sustainability", "controls"],
    sourceType: "PMI_ECO_2026",
    sourceConfidence: "HIGH",
  },
  {
    id: "BUSINESS-T03",
    domainId: "BUSINESS",
    sortOrder: 3,
    titleEn: "Manage and control changes",
    titleFr: "Gérer et maîtriser les changements",
    legacyCode: "BE-03",
    plaExamDomain: "BUSINESS_ENVIRONMENT",
    focusKeywords: ["change-process", "approved-changes", "documentation"],
    sourceType: "PMI_ECO_2026",
    sourceConfidence: "HIGH",
  },
  {
    id: "BUSINESS-T04",
    domainId: "BUSINESS",
    sortOrder: 4,
    titleEn: "Remove impediments and manage issues",
    titleFr: "Éliminer les obstacles et gérer les points à traiter",
    legacyCode: "BE-04",
    plaExamDomain: "BUSINESS_ENVIRONMENT",
    focusKeywords: ["impediments", "issues", "risk-to-issue", "escalation"],
    sourceType: "PMI_ECO_2026",
    sourceConfidence: "HIGH",
  },
  {
    id: "BUSINESS-T05",
    domainId: "BUSINESS",
    sortOrder: 5,
    titleEn: "Plan and manage risk",
    titleFr: "Planifier et gérer les risques",
    legacyCode: "BE-05",
    plaExamDomain: "BUSINESS_ENVIRONMENT",
    focusKeywords: ["identify", "analyze", "response", "risk-register"],
    sourceType: "PMI_ECO_2026",
    sourceConfidence: "HIGH",
  },
  {
    id: "BUSINESS-T06",
    domainId: "BUSINESS",
    sortOrder: 6,
    titleEn: "Continuous improvement",
    titleFr: "Amélioration continue",
    legacyCode: "BE-06",
    plaExamDomain: "BUSINESS_ENVIRONMENT",
    focusKeywords: ["lessons-learned", "process-updates", "opa"],
    sourceType: "PMI_ECO_2026",
    sourceConfidence: "HIGH",
  },
  {
    id: "BUSINESS-T07",
    domainId: "BUSINESS",
    sortOrder: 7,
    titleEn: "Support organizational change",
    titleFr: "Soutenir le changement organisationnel",
    legacyCode: "BE-07",
    plaExamDomain: "BUSINESS_ENVIRONMENT",
    focusKeywords: ["culture", "adoption", "org-change-impact"],
    sourceType: "PMI_ECO_2026",
    sourceConfidence: "HIGH",
  },
  {
    id: "BUSINESS-T08",
    domainId: "BUSINESS",
    sortOrder: 8,
    titleEn: "Evaluate external business environment changes",
    titleFr: "Évaluer l'environnement commercial externe",
    legacyCode: "BE-08",
    plaExamDomain: "BUSINESS_ENVIRONMENT",
    focusKeywords: ["market", "regulatory", "geopolitical", "backlog-impact"],
    sourceType: "PMI_ECO_2026",
    sourceConfidence: "HIGH",
  },
];

const BY_ID = new Map(TASKS.map((t) => [t.id, t] as const));
const BY_LEGACY = new Map(TASKS.map((t) => [t.legacyCode, t] as const));

export const ECO_TASKS: readonly EcoTaskRecord[] = TASKS;
export const ECO_TASK_COUNT = TASKS.length;

export function getEcoTaskById(id: EcoTaskStableId): EcoTaskRecord {
  const t = BY_ID.get(id);
  if (!t) throw new Error(`Unknown ECO task: ${id}`);
  return t;
}

export function getEcoTaskByLegacyCode(legacyCode: string): EcoTaskRecord | undefined {
  return BY_LEGACY.get(legacyCode);
}

export function legacyToStableEcoId(legacyCode: string): EcoTaskStableId {
  const t = getEcoTaskByLegacyCode(legacyCode);
  if (!t) throw new Error(`No stable ECO id for legacy code: ${legacyCode}`);
  return t.id;
}

export function listEcoTasksByDomain(domainId: EcoDomainStableId): EcoTaskRecord[] {
  return TASKS.filter((t) => t.domainId === domainId);
}

export function stableEcoTaskIds(): EcoTaskStableId[] {
  return TASKS.map((t) => t.id);
}
