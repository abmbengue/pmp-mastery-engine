/**
 * Instructor 12-lesson pedagogical architecture (Phase B.3).
 * Condensé source-grounded from authorized prompt blueprint (not a claim of PDF access).
 */

import type { ContentProvenance, EcoTaskStableId } from "./types";

export type InstructorLessonId =
  | "INSTRUCTOR-L01"
  | "INSTRUCTOR-L02"
  | "INSTRUCTOR-L03"
  | "INSTRUCTOR-L04"
  | "INSTRUCTOR-L05"
  | "INSTRUCTOR-L06"
  | "INSTRUCTOR-L07"
  | "INSTRUCTOR-L08"
  | "INSTRUCTOR-L09"
  | "INSTRUCTOR-L10"
  | "INSTRUCTOR-L11"
  | "INSTRUCTOR-L12";

export type InstructorLessonPart =
  | "LAUNCH_AND_PLAN"
  | "EXECUTE_AND_MONITOR"
  | "CLOSE_AND_IMPROVE"
  | "TRANSITION";

export type InstructorLessonRecord = {
  id: InstructorLessonId;
  sortOrder: number;
  part: InstructorLessonPart;
  titleFr: string;
  titleEn: string;
  provenance: ContentProvenance;
  ecoTaskIds: EcoTaskStableId[];
  plaLessonIds: string[];
  branches?: Array<{
    id: string;
    titleFr: string;
    titleEn: string;
    ecoTaskIds: EcoTaskStableId[];
    plaLessonIds: string[];
    notes?: string;
  }>;
  notes?: string;
};

export const INSTRUCTOR_LESSONS: readonly InstructorLessonRecord[] = [
  {
    id: "INSTRUCTOR-L01",
    sortOrder: 1,
    part: "LAUNCH_AND_PLAN",
    titleFr: "Fondations",
    titleEn: "Foundations",
    provenance: "INSTRUCTOR_DERIVED",
    ecoTaskIds: ["PROCESS-T01"],
    plaLessonIds: [
      "what-is-project-management",
      "project-lifecycle-basics",
      "project-roles",
      "agile-mindset",
      "tailoring",
      "hybrid-project-basics",
      "when-to-use-hybrid",
    ],
    notes: "Environment / approach / why — not a catalog.",
  },
  {
    id: "INSTRUCTOR-L02",
    sortOrder: 2,
    part: "LAUNCH_AND_PLAN",
    titleFr: "Vision, parties prenantes et gouvernance",
    titleEn: "Vision, stakeholders, and governance",
    provenance: "INSTRUCTOR_DERIVED",
    ecoTaskIds: [
      "PEOPLE-T01",
      "PEOPLE-T04",
      "PEOPLE-T05",
      "PEOPLE-T06",
      "BUSINESS-T01",
    ],
    plaLessonIds: [
      "shared-vision",
      "stakeholders-basics",
      "governance",
      "governance-hybrid",
      "root-cause-vs-symptom",
      "coaching-and-mentoring",
    ],
  },
  {
    id: "INSTRUCTOR-L03",
    sortOrder: 3,
    part: "LAUNCH_AND_PLAN",
    titleFr: "Périmètre, valeur et conformité",
    titleEn: "Scope, value, and compliance",
    provenance: "INSTRUCTOR_DERIVED",
    ecoTaskIds: ["PROCESS-T02", "PROCESS-T03", "BUSINESS-T02"],
    plaLessonIds: [
      "scope",
      "requirements-basics",
      "business-value",
      "benefits",
      "definition-of-done",
      "compliance",
    ],
    notes:
      "Blueprint-authorized condensé (prompt). Project vs product scope, DoR/DoD, value chain, compliance.",
  },
  {
    id: "INSTRUCTOR-L04",
    sortOrder: 4,
    part: "LAUNCH_AND_PLAN",
    titleFr: "Élaborer le plan : intégration, ressources et finances",
    titleEn: "Build the plan: integration, resources, and finance",
    provenance: "INSTRUCTOR_DERIVED",
    ecoTaskIds: ["PROCESS-T01", "PROCESS-T04", "PROCESS-T06"],
    plaLessonIds: [
      "planning",
      "integration",
      "project-initiation",
      "resource-management",
      "cost",
      "product-ownership",
      "combining-predictive-and-agile",
    ],
  },
  {
    id: "INSTRUCTOR-L05",
    sortOrder: 5,
    part: "LAUNCH_AND_PLAN",
    titleFr: "Approvisionnement, qualité et planification",
    titleEn: "Procurement, quality, and schedule",
    provenance: "INSTRUCTOR_DERIVED",
    ecoTaskIds: ["PROCESS-T05", "PROCESS-T07", "PROCESS-T08"],
    plaLessonIds: ["procurement-basics", "quality", "schedule", "estimation-techniques"],
  },
  {
    id: "INSTRUCTOR-L06",
    sortOrder: 6,
    part: "LAUNCH_AND_PLAN",
    titleFr: "Communication et transfert des connaissances",
    titleEn: "Communication and knowledge transfer",
    provenance: "INSTRUCTOR_DERIVED",
    ecoTaskIds: ["PEOPLE-T07", "PEOPLE-T08"],
    plaLessonIds: [
      "knowledge-transfer",
      "communication",
      "feedback",
      "distributed-teams",
      "lessons-learned",
      "retrospective",
    ],
    branches: [
      {
        id: "L06-A-KNOWLEDGE-TRANSFER",
        titleFr: "Transfert des connaissances",
        titleEn: "Knowledge transfer",
        ecoTaskIds: ["PEOPLE-T07"],
        plaLessonIds: ["knowledge-transfer", "lessons-learned", "retrospective"],
        notes: "T07 = circulate KNOW-HOW / capability — not information push alone",
      },
      {
        id: "L06-B-COMMUNICATION",
        titleFr: "Planifier et gérer la communication",
        titleEn: "Plan and manage communication",
        ecoTaskIds: ["PEOPLE-T08"],
        plaLessonIds: ["communication", "feedback", "distributed-teams"],
        notes: "T08 = right information, right people, right channel/time — ≠ T04 engagement",
      },
    ],
  },
  {
    id: "INSTRUCTOR-L07",
    sortOrder: 7,
    part: "EXECUTE_AND_MONITOR",
    titleFr: "Diriger et responsabiliser l'équipe",
    titleEn: "Lead and empower the team",
    provenance: "INSTRUCTOR_DERIVED",
    ecoTaskIds: ["PEOPLE-T02", "PEOPLE-T03"],
    plaLessonIds: [
      "conflict-management-basics",
      "collaboration",
      "leadership",
      "servant-leadership",
      "team-development",
      "team-performance",
      "motivation",
      "psychological-safety",
      "emotional-intelligence-pm",
      "team-conflict-architecture",
      "collaborate-before-escalating",
    ],
  },
  {
    id: "INSTRUCTOR-L08",
    sortOrder: 8,
    part: "EXECUTE_AND_MONITOR",
    titleFr: "Gestion des risques, des changements et des problèmes",
    titleEn: "Manage risks, changes, and issues",
    provenance: "INSTRUCTOR_DERIVED",
    ecoTaskIds: ["BUSINESS-T03", "BUSINESS-T04", "BUSINESS-T05"],
    plaLessonIds: [
      "risk-management-hybrid",
      "risk-vs-issue",
      "risk-vs-issue-situational",
      "change-management-basics",
      "change-request-critical-path",
      "issue-management",
      "impediments-management",
    ],
    notes:
      "Blueprint-authorized condensé. Risk≠issue≠impediment; predictive≠adaptive change.",
  },
  {
    id: "INSTRUCTOR-L09",
    sortOrder: 9,
    part: "EXECUTE_AND_MONITOR",
    titleFr: "Attentes client et statut / performance",
    titleEn: "Customer expectations and status / performance",
    provenance: "INSTRUCTOR_DERIVED",
    ecoTaskIds: ["PEOPLE-T06", "PROCESS-T09"],
    plaLessonIds: [
      "project-controls-metrics",
      "velocity-and-flow",
      "cost",
      "stakeholders-basics",
    ],
  },
  {
    id: "INSTRUCTOR-L10",
    sortOrder: 10,
    part: "CLOSE_AND_IMPROVE",
    titleFr: "Clôturer le projet avec succès",
    titleEn: "Close the project successfully",
    provenance: "INSTRUCTOR_DERIVED",
    ecoTaskIds: ["PROCESS-T10"],
    plaLessonIds: [
      "project-lifecycle-basics",
      "lessons-learned",
      "knowledge-transfer",
      "benefits-realization",
    ],
    notes:
      "Blueprint-authorized condensé. Acceptance, transition readiness, benefits sustainment.",
  },
  {
    id: "INSTRUCTOR-L11",
    sortOrder: 11,
    part: "CLOSE_AND_IMPROVE",
    titleFr: "Amélioration continue et changement organisationnel",
    titleEn: "Continuous improvement and organizational change",
    provenance: "INSTRUCTOR_DERIVED",
    ecoTaskIds: ["BUSINESS-T06", "BUSINESS-T07", "BUSINESS-T08"],
    plaLessonIds: [
      "retrospective",
      "lessons-learned",
      "organizational-change",
      "portfolio-context",
      "project-selection",
    ],
  },
  {
    id: "INSTRUCTOR-L12",
    sortOrder: 12,
    part: "TRANSITION",
    titleFr: "Étapes suivantes",
    titleEn: "Next steps",
    provenance: "DERIVED_PEDAGOGICAL",
    ecoTaskIds: [],
    plaLessonIds: ["exam-reasoning-integration", "pla-situational-method"],
    notes:
      "Pedagogical transition LEARNING→PRACTICE→WEAKNESS→REVIEW→RETENTION→MOCKS. Use official ECO 2026 exam params if course numbers diverge.",
  },
];

export function getInstructorLesson(
  id: InstructorLessonId
): InstructorLessonRecord | undefined {
  return INSTRUCTOR_LESSONS.find((l) => l.id === id);
}

/** Kept for compatibility — should be empty after blueprint authorization. */
export function instructorLessonsPendingSource(): InstructorLessonRecord[] {
  return INSTRUCTOR_LESSONS.filter((l) =>
    String(l.provenance).startsWith("SOURCE_PENDING")
  );
}
