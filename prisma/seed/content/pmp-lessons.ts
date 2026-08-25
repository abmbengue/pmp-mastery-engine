/**
 * PMP / Project Management lesson catalog — content expansion.
 * ORIGINAL pedagogical content — NOT PMI / PMBOK reproduction.
 */

export type { PmpLesson } from "./pmp-types";
import type { PmpLesson } from "./pmp-types";
import { PMP_FOUNDATIONS_LESSONS } from "./pmp-foundations";
import { PMP_PEOPLE_LESSONS } from "./pmp-people";
import { PMP_PROCESS_LESSONS } from "./pmp-process";
import { PMP_BUSINESS_LESSONS } from "./pmp-business";
import { PMP_AGILE_LESSONS } from "./pmp-agile";
import { PMP_HYBRID_LESSONS } from "./pmp-hybrid";
import { PMP_SITUATIONAL_LESSONS } from "./pmp-situational";
import { applyPmpQualityUpgrades } from "./pmp-quality-upgrades";

export const PMP_MODULES = [
  {
    slug: "foundations",
    titleFr: "Fondamentaux",
    titleEn: "Foundations",
    category: "FOUNDATIONS",
    sortOrder: 0,
    descriptionFr: "Définitions, rôles clés et distinction projet vs opération.",
    descriptionEn: "Definitions, key roles, and project vs operations distinction.",
  },
  {
    slug: "people",
    titleFr: "People",
    titleEn: "People",
    category: "PEOPLE",
    sortOrder: 1,
    descriptionFr: "Leadership, équipe, communication, parties prenantes et collaboration.",
    descriptionEn: "Leadership, team, communication, stakeholders, and collaboration.",
  },
  {
    slug: "process",
    titleFr: "Process",
    titleEn: "Process",
    category: "PROCESS",
    sortOrder: 2,
    descriptionFr: "Initiation, planification, périmètre, planning, coûts, risques, qualité et intégration.",
    descriptionEn: "Initiation, planning, scope, schedule, cost, risk, quality, and integration.",
  },
  {
    slug: "business-environment",
    titleFr: "Environnement business",
    titleEn: "Business Environment",
    category: "BUSINESS_ENVIRONMENT",
    sortOrder: 3,
    descriptionFr: "Gouvernance, conformité, stratégie, bénéfices et valeur business.",
    descriptionEn: "Governance, compliance, strategy, benefits, and business value.",
  },
  {
    slug: "agile",
    titleFr: "Agile",
    titleEn: "Agile",
    category: "AGILE",
    sortOrder: 4,
    descriptionFr: "Mindset agile, livraison itérative, backlog, DoD et flux.",
    descriptionEn: "Agile mindset, iterative delivery, backlog, DoD, and flow.",
  },
  {
    slug: "hybrid",
    titleFr: "Hybride",
    titleEn: "Hybrid",
    category: "HYBRID",
    sortOrder: 5,
    descriptionFr: "Combiner approches prédictives et adaptatives selon le contexte.",
    descriptionEn: "Combine predictive and adaptive approaches by context.",
  },
  {
    slug: "situational-thinking",
    titleFr: "Pensée situationnelle",
    titleEn: "Situational Thinking",
    category: "SITUATIONAL",
    sortOrder: 6,
    descriptionFr: "Méthode PLA et mini-cas pour raisonner la meilleure action.",
    descriptionEn: "PLA method and mini-cases to reason the best action.",
  },
] as const;

export const PMP_LESSONS: PmpLesson[] = applyPmpQualityUpgrades([
  ...PMP_FOUNDATIONS_LESSONS,
  ...PMP_PEOPLE_LESSONS,
  ...PMP_PROCESS_LESSONS,
  ...PMP_BUSINESS_LESSONS,
  ...PMP_AGILE_LESSONS,
  ...PMP_HYBRID_LESSONS,
  ...PMP_SITUATIONAL_LESSONS,
]);
