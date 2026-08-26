/**
 * PMBOK Guide 8 — seven Performance Domains (PLA reference layer).
 * Quality is cross-cutting — not a PD heading per mission spec.
 *
 * Full PMBOK text was not present in workspace at Phase B build;
 * domain names follow mission Knowledge Pack specification.
 * sourceConfidence: MEDIUM until full PMBOK pack is imported.
 */

import type {
  CrossCuttingKnowledgeId,
  PmbokPerformanceDomain,
  PmbokPerformanceDomainId,
} from "./types";

export const PMBOK8_PERFORMANCE_DOMAINS: readonly PmbokPerformanceDomain[] = [
  {
    id: "PD-GOVERNANCE",
    nameEn: "Governance",
    nameFr: "Gouvernance",
    descriptionEn:
      "Structures, policies, and decision rights that guide project work and accountability.",
    descriptionFr:
      "Structures, politiques et droits de décision qui orientent le travail projet et la responsabilité.",
    sourceType: "PMBOK8",
    sourceConfidence: "MEDIUM",
    note: "Paraphrase — verify against imported PMBOK 8 when available",
  },
  {
    id: "PD-SCOPE",
    nameEn: "Scope",
    nameFr: "Périmètre",
    descriptionEn: "Defining and controlling what is and is not included in the project.",
    descriptionFr: "Définir et maîtriser ce qui est inclus ou exclu du projet.",
    sourceType: "PMBOK8",
    sourceConfidence: "MEDIUM",
  },
  {
    id: "PD-SCHEDULE",
    nameEn: "Schedule",
    nameFr: "Échéancier",
    descriptionEn: "Planning, sequencing, and controlling time to deliver outcomes.",
    descriptionFr: "Planifier, séquencer et maîtriser le temps de livraison.",
    sourceType: "PMBOK8",
    sourceConfidence: "MEDIUM",
  },
  {
    id: "PD-FINANCE",
    nameEn: "Finance",
    nameFr: "Finances",
    descriptionEn: "Planning, estimating, budgeting, and controlling project finances.",
    descriptionFr: "Planifier, estimer, budgétiser et maîtriser les finances du projet.",
    sourceType: "PMBOK8",
    sourceConfidence: "MEDIUM",
  },
  {
    id: "PD-STAKEHOLDERS",
    nameEn: "Stakeholders",
    nameFr: "Parties prenantes",
    descriptionEn: "Identifying, engaging, and collaborating with people affected by the project.",
    descriptionFr:
      "Identifier, impliquer et collaborer avec les personnes impactées par le projet.",
    sourceType: "PMBOK8",
    sourceConfidence: "MEDIUM",
  },
  {
    id: "PD-RESOURCES",
    nameEn: "Resources",
    nameFr: "Ressources",
    descriptionEn: "Planning, acquiring, and optimizing people, materials, and capacity.",
    descriptionFr: "Planifier, acquérir et optimiser les personnes, matériaux et capacités.",
    sourceType: "PMBOK8",
    sourceConfidence: "MEDIUM",
  },
  {
    id: "PD-RISK",
    nameEn: "Risk",
    nameFr: "Risques",
    descriptionEn: "Identifying and responding to uncertainty that may affect objectives.",
    descriptionFr: "Identifier et répondre à l'incertitude pouvant affecter les objectifs.",
    sourceType: "PMBOK8",
    sourceConfidence: "MEDIUM",
  },
];

export const CROSS_CUTTING_QUALITY = {
  id: "KN-QUALITY" as CrossCuttingKnowledgeId,
  nameEn: "Quality",
  nameFr: "Qualité",
  descriptionEn:
    "Cross-cutting knowledge area — requirements, prevention/appraisal/failure costs, QA vs QC. Linked to ECO Process Task 7.",
  descriptionFr:
    "Domaine transversal — exigences, coûts prévention/appraisal/échec, AQ vs CQ. Lié à la tâche ECO Processus 7.",
  linkedEcoTaskLegacy: "PR-07",
  sourceType: "PMBOK8" as const,
  sourceConfidence: "MEDIUM" as const,
};

const PD_BY_ID = new Map(PMBOK8_PERFORMANCE_DOMAINS.map((d) => [d.id, d] as const));

export function getPmbokDomain(id: PmbokPerformanceDomainId): PmbokPerformanceDomain {
  const d = PD_BY_ID.get(id);
  if (!d) throw new Error(`Unknown PMBOK PD: ${id}`);
  return d;
}

/** Heuristic ECO legacy code → primary PMBOK PD (DERIVED — not PMI official) */
export const ECO_LEGACY_TO_PMBOK_PD: Record<string, PmbokPerformanceDomainId> = {
  "PE-01": "PD-STAKEHOLDERS",
  "PE-02": "PD-STAKEHOLDERS",
  "PE-03": "PD-RESOURCES",
  "PE-04": "PD-STAKEHOLDERS",
  "PE-05": "PD-STAKEHOLDERS",
  "PE-06": "PD-STAKEHOLDERS",
  "PE-07": "PD-RESOURCES",
  "PE-08": "PD-STAKEHOLDERS",
  "PR-01": "PD-GOVERNANCE",
  "PR-02": "PD-SCOPE",
  "PR-03": "PD-SCOPE",
  "PR-04": "PD-RESOURCES",
  "PR-05": "PD-RESOURCES",
  "PR-06": "PD-FINANCE",
  "PR-07": "PD-SCOPE",
  "PR-08": "PD-SCHEDULE",
  "PR-09": "PD-GOVERNANCE",
  "PR-10": "PD-GOVERNANCE",
  "BE-01": "PD-GOVERNANCE",
  "BE-02": "PD-GOVERNANCE",
  "BE-03": "PD-SCOPE",
  "BE-04": "PD-RISK",
  "BE-05": "PD-RISK",
  "BE-06": "PD-GOVERNANCE",
  "BE-07": "PD-GOVERNANCE",
  "BE-08": "PD-GOVERNANCE",
};

export function primaryPmbokDomainForEcoLegacy(
  legacyCode: string
): PmbokPerformanceDomainId | undefined {
  return ECO_LEGACY_TO_PMBOK_PD[legacyCode];
}

export function usesCrossCuttingQuality(legacyCode: string): boolean {
  return legacyCode === "PR-07";
}
