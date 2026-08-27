/**
 * PMP Mastery Engine — shared types (Phase B foundation).
 * PLA proprietary architecture — not PMI official scoring or certification.
 */

export type SourceType =
  | "PMI_ECO_2026"
  | "PMBOK8"
  | "PMBOK8_FR"
  | "PMP_LESSON_1"
  | "PMP_LESSON_2"
  | "PMP_LESSON_3"
  | "PMP_LESSON_4"
  | "PMP_LESSON_5"
  | "PMP_LESSON_6"
  | "PMP_LESSON_7"
  | "PMP_LESSON_8"
  | "PMP_LESSON_9"
  | "PMP_LESSON_10"
  | "PMP_LESSON_11"
  | "PMP_LESSON_12"
  | "PLA_INTERNAL"
  | "DERIVED_PEDAGOGICAL"
  | "ECO_VERIFIED"
  | "INSTRUCTOR_DERIVED"
  | "PMBOK_REFERENCE"
  | "SOURCE_PENDING";

/** Provenance tag for lesson / pedagogy content (Phase B.3). */
export type ContentProvenance =
  | "ECO_VERIFIED"
  | "INSTRUCTOR_DERIVED"
  | "PMBOK_REFERENCE"
  | "DERIVED_PEDAGOGICAL"
  | "PLA_INTERNAL"
  | "SOURCE_PENDING"
  | "SOURCE_PENDING_INSTRUCTOR_LESSON_3"
  | "SOURCE_PENDING_INSTRUCTOR_LESSON_8"
  | "SOURCE_PENDING_INSTRUCTOR_LESSON_10";

export type LessonEcoCoverageType = "PRIMARY" | "SECONDARY" | "SUPPORTING";

export type LessonAuditClass =
  | "PRIMARY"
  | "SUPPORTING"
  | "REDUNDANT"
  | "THIN"
  | "UNMAPPED";

export type SourceConfidence = "HIGH" | "MEDIUM" | "LOW" | "UNVERIFIED";

export type EcoDomainStableId = "PEOPLE" | "PROCESS" | "BUSINESS";

/** Stable ECO task IDs — e.g. PEOPLE-T01 */
export type EcoTaskStableId =
  | `PEOPLE-T${string}`
  | `PROCESS-T${string}`
  | `BUSINESS-T${string}`;

export type PmbokPerformanceDomainId =
  | "PD-GOVERNANCE"
  | "PD-SCOPE"
  | "PD-SCHEDULE"
  | "PD-FINANCE"
  | "PD-STAKEHOLDERS"
  | "PD-RESOURCES"
  | "PD-RISK";

/** Quality is cross-cutting in PMBOK 8 — not a 7th PD heading */
export type CrossCuttingKnowledgeId = "KN-QUALITY";

export type CognitiveLevel =
  | "RECOGNITION"
  | "UNDERSTANDING"
  | "APPLICATION"
  | "ANALYSIS"
  | "JUDGMENT"
  | "TRANSFER";

export type MasteryState =
  | "UNKNOWN"
  | "EXPOSED"
  | "DEVELOPING"
  | "FRAGILE"
  | "FUNCTIONAL"
  | "STRONG"
  | "MASTERED";

export type ConfidenceLevel =
  | "VERY_LOW"
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "VERY_HIGH";

export type DeliveryApproachTag =
  | "PREDICTIVE"
  | "ADAPTIVE"
  | "AGILE"
  | "ITERATIVE"
  | "INCREMENTAL"
  | "HYBRID"
  | "MIXED";

export type MappingStatus = "VERIFIED" | "PARTIAL" | "UNVERIFIED";

/**
 * Distinguishes bank legacy domain (Question.pmpDomain / seed domain)
 * from ECO mastery domain (People / Process / Business task ownership).
 * Do not collapse these — PARTIAL mappings often reflect this duality.
 */
export type LegacyBankDomain = "PEOPLE" | "PROCESS" | "BUSINESS_ENVIRONMENT";
export type EcoMasteryDomain = EcoDomainStableId;

export type MappingConfidence = "HIGH" | "MEDIUM" | "LOW" | "UNVERIFIED";

export type CoverageStatus = "GREEN" | "YELLOW" | "RED";

export type MisconceptionErrorKind =
  | "conceptual-gap"
  | "misconception"
  | "application-error"
  | "careless-error"
  | "communication-error"
  | "strategy-error"
  | "knowledge-recall"
  | "scope-confusion"
  | "risk-confusion"
  | "stakeholder-confusion";

export type ConfusionType =
  | "terminology"
  | "process-vs-event"
  | "role-vs-activity"
  | "output-vs-outcome"
  | "symptom-vs-cause";

export interface SourceRef {
  sourceType: SourceType;
  sourceConfidence: SourceConfidence;
  note?: string;
}

export interface EcoTaskRecord extends SourceRef {
  id: EcoTaskStableId;
  domainId: EcoDomainStableId;
  sortOrder: number;
  titleEn: string;
  titleFr: string;
  /** Legacy Phase B proxy code (PE-01 … BE-08) */
  legacyCode: string;
  plaExamDomain: "PEOPLE" | "PROCESS" | "BUSINESS_ENVIRONMENT";
  focusKeywords: string[];
}

export interface PmbokPerformanceDomain extends SourceRef {
  id: PmbokPerformanceDomainId;
  nameEn: string;
  nameFr: string;
  descriptionEn: string;
  descriptionFr: string;
}

export interface ConceptRecord extends SourceRef {
  id: string;
  nameEn: string;
  nameFr: string;
  descriptionEn: string;
  descriptionFr: string;
  ecoDomains: EcoDomainStableId[];
  ecoTaskIds: EcoTaskStableId[];
  pmbokPerformanceDomains: PmbokPerformanceDomainId[];
  crossCutting?: CrossCuttingKnowledgeId[];
  parentConceptId?: string;
  subConceptIds: string[];
  prerequisiteConceptIds: string[];
  relatedConceptIds: string[];
  commonlyConfusedWith: string[];
  skillIds: string[];
  difficulty: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  status: "ACTIVE" | "DRAFT";
}

export interface MasterySkillRecord extends SourceRef {
  id: string;
  conceptId: string;
  nameEn: string;
  nameFr: string;
  descriptionEn: string;
  descriptionFr: string;
  prerequisiteSkillIds: string[];
  difficulty: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  cognitiveLevel: CognitiveLevel;
  /** Maps to existing PLA skill slug when applicable */
  plaSkillSlug?: string;
}

export interface MisconceptionRecord extends SourceRef {
  id: string;
  nameEn: string;
  nameFr: string;
  explanationEn: string;
  explanationFr: string;
  confusionType: ConfusionType;
  conceptAId: string;
  conceptBId: string;
  affectedSkillIds: string[];
  ecoTaskIds: EcoTaskStableId[];
  errorKinds: MisconceptionErrorKind[];
}

export interface QuestionMasteryMetadata extends SourceRef {
  externalKey: string;
  ecoDomain: EcoDomainStableId;
  ecoTaskId: EcoTaskStableId;
  ecoTaskIdsSecondary: EcoTaskStableId[];
  pmbokPerformanceDomain?: PmbokPerformanceDomainId;
  pmbokPerformanceDomainsSecondary: PmbokPerformanceDomainId[];
  crossCutting: CrossCuttingKnowledgeId[];
  primaryConceptId: string;
  secondaryConceptIds: string[];
  primarySkillId?: string;
  secondarySkillIds: string[];
  cognitiveLevel: CognitiveLevel;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  approach: DeliveryApproachTag;
  misconceptionIds: string[];
  mappingStatus: MappingStatus;
  mappingConfidence: MappingConfidence;
}

export interface SkillMasterySnapshot {
  skillId: string;
  attempts: number;
  correct: number;
  incorrect: number;
  recentPerformance: number;
  historicalPerformance: number;
  confidence: ConfidenceLevel | null;
  retentionScore: number;
  cognitiveLevelPerformance: Partial<Record<CognitiveLevel, number>>;
  lastSeen: Date | null;
  nextReview: Date | null;
  masteryState: MasteryState;
}

export interface RetentionScheduleConfig {
  /** PLA proprietary intervals — not PMI requirement */
  dayIntervals: readonly number[];
}

export const DEFAULT_RETENTION_SCHEDULE: RetentionScheduleConfig = {
  dayIntervals: [0, 1, 3, 7, 14, 30],
};
