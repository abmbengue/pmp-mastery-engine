/**
 * Pure exam types — no Prisma / React dependency.
 * Duration and counts live on exam configuration, never hardcoded in UI.
 */

export type ExamTypeCode =
  | "QUICK_PRACTICE"
  | "DOMAIN_PRACTICE"
  | "MOCK_EXAM"
  | "FULL_PMP";

export type ExamSessionStatusCode =
  | "NOT_STARTED"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "ABANDONED";

export type PmpDomainCode =
  | "PEOPLE"
  | "PROCESS"
  | "BUSINESS_ENVIRONMENT";

export type PmpDeliveryApproachCode = "AGILE" | "HYBRID" | "PREDICTIVE";

export type ExamDifficultyCode = "EASY" | "MEDIUM" | "HARD";

export type PracticeReadinessLevel = "NOT_READY" | "DEVELOPING" | "READY";

export type PerformanceBand = "STRONG" | "NEEDS_PRACTICE" | "WEAK";

export interface ExamConfigDefinition {
  slug: string;
  type: ExamTypeCode;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  questionCount: number;
  /** Minutes; 0 = untimed. Never hardcode in React. */
  durationMinutes: number;
  domainFilter?: PmpDomainCode;
}

/**
 * Built-in exam templates. FULL_PMP is architecturally ready for 180 items;
 * V1 may run with a smaller bank until the seed grows.
 */
export const EXAM_TEMPLATES: ExamConfigDefinition[] = [
  {
    slug: "quick-practice",
    type: "QUICK_PRACTICE",
    titleFr: "Pratique rapide",
    titleEn: "Quick Practice",
    descriptionFr: "10 questions situationnelles pour s'échauffer.",
    descriptionEn: "10 situational questions for a warm-up.",
    questionCount: 10,
    durationMinutes: 15,
  },
  {
    slug: "domain-people",
    type: "DOMAIN_PRACTICE",
    titleFr: "Pratique domaine — People",
    titleEn: "Domain Practice — People",
    descriptionFr: "25 questions centrées sur le domaine People.",
    descriptionEn: "25 questions focused on the People domain.",
    questionCount: 25,
    durationMinutes: 35,
    domainFilter: "PEOPLE",
  },
  {
    slug: "domain-process",
    type: "DOMAIN_PRACTICE",
    titleFr: "Pratique domaine — Process",
    titleEn: "Domain Practice — Process",
    descriptionFr: "25 questions centrées sur le domaine Process.",
    descriptionEn: "25 questions focused on the Process domain.",
    questionCount: 25,
    durationMinutes: 35,
    domainFilter: "PROCESS",
  },
  {
    slug: "domain-business",
    type: "DOMAIN_PRACTICE",
    titleFr: "Pratique domaine — Business Environment",
    titleEn: "Domain Practice — Business Environment",
    descriptionFr: "25 questions sur l'environnement business.",
    descriptionEn: "25 questions on the business environment.",
    questionCount: 25,
    durationMinutes: 35,
    domainFilter: "BUSINESS_ENVIRONMENT",
  },
  {
    slug: "mock-exam",
    type: "MOCK_EXAM",
    titleFr: "Examen blanc",
    titleEn: "Mock Exam",
    descriptionFr: "60 questions — simulation pédagogique (score de pratique).",
    descriptionEn: "60 questions — educational mock (practice score only).",
    questionCount: 60,
    durationMinutes: 80,
  },
  {
    slug: "full-pmp",
    type: "FULL_PMP",
    titleFr: "Simulation PMP complète (architecture)",
    titleEn: "Full PMP Simulation (architecture)",
    descriptionFr:
      "Architecture prête pour 180 questions. La banque V1 peut être plus petite.",
    descriptionEn:
      "Architecture ready for 180 questions. The V1 bank may be smaller.",
    questionCount: 180,
    durationMinutes: 230,
  },
];

export interface ScoredExamItem {
  questionId: string;
  /** Empty / missing = unanswered */
  selectedOptionIds: string[];
  correctOptionIds: string[];
  isCorrect: boolean;
  unanswered: boolean;
  domain?: PmpDomainCode | null;
  deliveryApproach?: PmpDeliveryApproachCode | null;
  skillSlugs: string[];
}

export interface ExamScoreResult {
  rawScore: number;
  percentage: number;
  correct: number;
  incorrect: number;
  unanswered: number;
  total: number;
}

export interface DomainPerformanceRow {
  domain: PmpDomainCode;
  correct: number;
  total: number;
  percentage: number;
  band: PerformanceBand;
}

export interface SkillPerformanceRow {
  skillSlug: string;
  correct: number;
  total: number;
  percentage: number;
  band: PerformanceBand;
}

export interface DeliveryPerformanceRow {
  approach: PmpDeliveryApproachCode;
  correct: number;
  total: number;
  percentage: number;
  band: PerformanceBand;
}

export interface ReadinessInput {
  recentPercentages: number[];
  domainPerformances: DomainPerformanceRow[];
  skillPerformances: SkillPerformanceRow[];
  unansweredRate: number;
  repeatedMistakeCount: number;
}

export interface ReadinessResult {
  level: PracticeReadinessLevel;
  /** Practice readiness — never marketed as official PMI readiness */
  labelEn: string;
  labelFr: string;
  score: number;
  limitationsEn: string;
  limitationsFr: string;
}
