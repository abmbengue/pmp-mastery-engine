/**
 * Learning Paths — simple pedagogical groupings.
 * Reuses existing courses/modules/lessons/skills + progress.
 * NOT a second progression engine.
 */

export type LearningPathDefinition = {
  slug: string;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  academySlug: string;
  courseSlug: string;
  /** Optional module filter; empty = whole course */
  moduleSlugs?: string[];
  skillSlugs: string[];
};

export const LEARNING_PATHS: LearningPathDefinition[] = [
  {
    slug: "financial-foundations",
    titleFr: "Fondations financières",
    titleEn: "Financial Foundations",
    descriptionFr:
      "Parcours micro-learning : revenus, budget, fonds d'urgence et bonnes habitudes d'épargne.",
    descriptionEn:
      "Micro-learning path: income, budgeting, emergency fund, and healthy saving habits.",
    academySlug: "personal-finance",
    courseSlug: "essentials",
    moduleSlugs: ["foundations", "debt"],
    skillSlugs: ["pf-foundations", "pf-budgeting", "pf-debt", "pf-income"],
  },
  {
    slug: "corporate-finance-fundamentals",
    titleFr: "Fondamentaux de la finance d'entreprise",
    titleEn: "Corporate Finance Fundamentals",
    descriptionFr:
      "États financiers, besoin en fonds de roulement, valorisation et bases du DCF.",
    descriptionEn:
      "Financial statements, working capital, valuation, and DCF basics.",
    academySlug: "corporate-finance",
    courseSlug: "cf-essentials",
    skillSlugs: ["cf-foundations", "cf-valuation", "cf-cash-flow", "cf-capital-structure"],
  },
  {
    slug: "pmp-core-preparation",
    titleFr: "Préparation PMP — socle",
    titleEn: "PMP Core Preparation",
    descriptionFr:
      "People, Process, Business Environment, Agile et Hybrid — contenu pédagogique original (pas un score PMI).",
    descriptionEn:
      "People, Process, Business Environment, Agile, and Hybrid — original educational content (not a PMI score).",
    academySlug: "pmp-project-management",
    courseSlug: "pmp-foundations",
    skillSlugs: [
      "pmp-foundations",
      "pmp-people",
      "pmp-process",
      "pmp-business-environment",
      "pmp-agile",
      "pmp-situational-thinking",
    ],
  },
];

export function getLearningPathBySlug(slug: string) {
  return LEARNING_PATHS.find((p) => p.slug === slug) ?? null;
}

export function listLearningPaths() {
  return LEARNING_PATHS;
}
