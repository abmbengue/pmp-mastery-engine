/**
 * Future academies — configuration only (PLANNED).
 * Adding a new academy must not require pedagogical engine changes.
 */

export type PlannedAcademyConfig = {
  slug: string;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  sortOrder: number;
  status: "PLANNED";
  /** Suggested first course slug when activated */
  suggestedCourseSlug: string;
  /** Suggested module categories */
  suggestedModuleCategories: string[];
};

export const PLANNED_ACADEMY_CONFIGS: PlannedAcademyConfig[] = [
  {
    slug: "business-strategy",
    titleFr: "Business & Stratégie",
    titleEn: "Business & Strategy",
    descriptionFr: "Stratégie d'entreprise — contenu à venir.",
    descriptionEn: "Business strategy — content coming soon.",
    sortOrder: 3,
    status: "PLANNED",
    suggestedCourseSlug: "strategy-essentials",
    suggestedModuleCategories: ["FOUNDATIONS", "COMPETITIVE", "EXECUTION"],
  },
  {
    slug: "financial-modeling",
    titleFr: "Modélisation financière",
    titleEn: "Financial Modeling",
    descriptionFr: "Modélisation financière — contenu à venir.",
    descriptionEn: "Financial modeling — content coming soon.",
    sortOrder: 4,
    status: "PLANNED",
    suggestedCourseSlug: "modeling-essentials",
    suggestedModuleCategories: ["FOUNDATIONS", "THREE_STATEMENT", "VALUATION"],
  },
  {
    slug: "energy-oil-gas",
    titleFr: "Énergie & Oil & Gas",
    titleEn: "Energy & Oil & Gas",
    descriptionFr: "Secteur énergie — contenu à venir.",
    descriptionEn: "Energy sector — content coming soon.",
    sortOrder: 5,
    status: "PLANNED",
    suggestedCourseSlug: "energy-essentials",
    suggestedModuleCategories: ["FOUNDATIONS", "UPSTREAM", "PROJECTS"],
  },
  {
    slug: "leadership-management",
    titleFr: "Leadership & Management",
    titleEn: "Leadership & Management",
    descriptionFr: "Leadership — contenu à venir.",
    descriptionEn: "Leadership — content coming soon.",
    sortOrder: 6,
    status: "PLANNED",
    suggestedCourseSlug: "leadership-essentials",
    suggestedModuleCategories: ["FOUNDATIONS", "TEAMS", "COMMUNICATION"],
  },
  {
    slug: "professional-english",
    titleFr: "Anglais professionnel",
    titleEn: "Professional English",
    descriptionFr: "Anglais professionnel — contenu à venir.",
    descriptionEn: "Professional English — content coming soon.",
    sortOrder: 7,
    status: "PLANNED",
    suggestedCourseSlug: "english-essentials",
    suggestedModuleCategories: ["FOUNDATIONS", "MEETINGS", "WRITING"],
  },
];

export function listPlannedAcademies() {
  return PLANNED_ACADEMY_CONFIGS;
}

export function getPlannedAcademy(slug: string) {
  return PLANNED_ACADEMY_CONFIGS.find((a) => a.slug === slug) ?? null;
}

/**
 * Activation checklist for a future AI / developer — no engine changes required.
 */
export const ACADEMY_ACTIVATION_STEPS = [
  "Add CompactLesson catalog under prisma/seed/content/",
  "Create seed wrapper calling seedLessonWithContent (reuse helpers)",
  "Upsert Academy status ACTIVE in seed",
  "Run content validator (validateLessonCatalog)",
  "Wire Learning Path entry if needed (config only)",
  "Add FR/EN shorts metadata as needed",
  "Run lint / test / build / e2e",
] as const;
