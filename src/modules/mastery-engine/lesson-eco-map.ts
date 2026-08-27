/**
 * Lesson ↔ ECO task many-to-many map (Phase B.3).
 * ECO = what can be examined. Lessons = how we teach.
 * Mapping provenance is tagged — never claim INSTRUCTOR_DERIVED as PMI official.
 */

import { ECO_TASKS } from "./eco-taxonomy";
import type {
  ContentProvenance,
  EcoTaskStableId,
  LessonAuditClass,
  LessonEcoCoverageType,
} from "./types";

export type LessonEcoMapEntry = {
  lessonId: string;
  ecoTaskId: EcoTaskStableId;
  coverageType: LessonEcoCoverageType;
  coverageStrength: 1 | 2 | 3 | 4 | 5;
  source: ContentProvenance;
  notes?: string;
  conceptIds?: string[];
  skillIds?: string[];
};

export type LessonAuditRow = {
  lessonId: string;
  auditClass: LessonAuditClass;
  primaryEcoTasks: EcoTaskStableId[];
  notes?: string;
};

function m(
  lessonId: string,
  ecoTaskId: EcoTaskStableId,
  coverageType: LessonEcoCoverageType,
  coverageStrength: 1 | 2 | 3 | 4 | 5,
  source: ContentProvenance,
  notes?: string,
  conceptIds?: string[],
  skillIds?: string[]
): LessonEcoMapEntry {
  return {
    lessonId,
    ecoTaskId,
    coverageType,
    coverageStrength,
    source,
    notes,
    conceptIds,
    skillIds,
  };
}

/**
 * Canonical lessonEcoMap — covers the PLA catalog (+ B.3 additions).
 * PRIMARY = main teachable vehicle for the task.
 */
export const LESSON_ECO_MAP: readonly LessonEcoMapEntry[] = [
  // —— Foundations ——
  m("what-is-project-management", "PROCESS-T01", "SUPPORTING", 2, "PLA_INTERNAL"),
  m("what-is-project-management", "PROCESS-T03", "SUPPORTING", 2, "PLA_INTERNAL"),
  m("project-roles", "PEOPLE-T03", "SUPPORTING", 2, "PLA_INTERNAL"),
  m("project-roles", "BUSINESS-T01", "SECONDARY", 2, "PLA_INTERNAL"),
  m("project-lifecycle-basics", "PROCESS-T01", "SECONDARY", 3, "PLA_INTERNAL"),
  m("project-lifecycle-basics", "PROCESS-T10", "SUPPORTING", 2, "PLA_INTERNAL"),

  // —— People ——
  m("leadership", "PEOPLE-T03", "PRIMARY", 4, "PLA_INTERNAL", undefined, ["team-leadership"], ["skill-select-leadership-style"]),
  m("team-development", "PEOPLE-T03", "PRIMARY", 4, "PLA_INTERNAL"),
  m("team-performance", "PEOPLE-T03", "SECONDARY", 3, "PLA_INTERNAL"),
  m("conflict-management-basics", "PEOPLE-T02", "PRIMARY", 5, "INSTRUCTOR_DERIVED", "Instructor Lesson 7 condensed"),
  m("negotiation-basics", "PEOPLE-T04", "SECONDARY", 3, "PLA_INTERNAL"),
  m(
    "communication",
    "PEOPLE-T08",
    "PRIMARY",
    5,
    "INSTRUCTOR_DERIVED",
    "Instructor Lesson 6 branch B — T08 ≠ T04",
    ["communication-planning", "communication-vs-engagement"],
    ["skill-communication-strategy", "skill-tailor-communication", "skill-distinguish-communication-engagement"]
  ),
  m(
    "communication",
    "PEOPLE-T04",
    "SUPPORTING",
    2,
    "DERIVED_PEDAGOGICAL",
    "Communication supports engagement but is not engagement"
  ),
  m("stakeholders-basics", "PEOPLE-T04", "PRIMARY", 4, "INSTRUCTOR_DERIVED", "Instructor Lesson 2"),
  m("stakeholders-basics", "PEOPLE-T05", "SECONDARY", 3, "INSTRUCTOR_DERIVED"),
  m("stakeholders-basics", "PEOPLE-T06", "SECONDARY", 3, "INSTRUCTOR_DERIVED"),
  m("emotional-intelligence-pm", "PEOPLE-T03", "SECONDARY", 3, "PLA_INTERNAL"),
  m("emotional-intelligence-pm", "PEOPLE-T02", "SUPPORTING", 2, "PLA_INTERNAL"),
  m("servant-leadership", "PEOPLE-T03", "PRIMARY", 4, "INSTRUCTOR_DERIVED", "Instructor Lesson 7"),
  m("coaching-and-mentoring", "PEOPLE-T03", "SECONDARY", 3, "INSTRUCTOR_DERIVED"),
  m("coaching-and-mentoring", "PEOPLE-T05", "SUPPORTING", 2, "INSTRUCTOR_DERIVED", "Mentoring appears in Lesson 2"),
  m("motivation", "PEOPLE-T03", "SECONDARY", 3, "INSTRUCTOR_DERIVED"),
  m("psychological-safety", "PEOPLE-T02", "SECONDARY", 3, "INSTRUCTOR_DERIVED"),
  m("psychological-safety", "PEOPLE-T03", "SECONDARY", 3, "INSTRUCTOR_DERIVED"),
  m("collaboration", "PEOPLE-T02", "SECONDARY", 3, "INSTRUCTOR_DERIVED", "Collaborate ≠ compromise"),
  m("distributed-teams", "PEOPLE-T08", "SECONDARY", 3, "PLA_INTERNAL"),
  m("distributed-teams", "PEOPLE-T03", "SUPPORTING", 2, "PLA_INTERNAL"),

  // —— B.3 P0 additions ——
  m(
    "shared-vision",
    "PEOPLE-T01",
    "PRIMARY",
    5,
    "INSTRUCTOR_DERIVED",
    "Instructor Lesson 2 — vision commune; ECO PEOPLE-T01",
    ["shared-vision"],
    ["skill-promote-shared-vision", "skill-facilitate-shared-vision"]
  ),
  m("shared-vision", "PEOPLE-T05", "SECONDARY", 3, "INSTRUCTOR_DERIVED"),
  m(
    "knowledge-transfer",
    "PEOPLE-T07",
    "PRIMARY",
    5,
    "INSTRUCTOR_DERIVED",
    "Instructor Lesson 6 branch A — T07 ≠ T08",
    ["knowledge-transfer", "tacit-vs-explicit-knowledge"],
    ["skill-enable-knowledge-transfer", "skill-choose-knowledge-transfer-method"]
  ),
  m(
    "knowledge-transfer",
    "BUSINESS-T06",
    "SUPPORTING",
    2,
    "DERIVED_PEDAGOGICAL",
    "Org-level reuse connects to continuous improvement"
  ),

  // —— Process ——
  m("project-initiation", "PROCESS-T01", "PRIMARY", 4, "INSTRUCTOR_DERIVED", "Lesson 4 needs assessment / charter"),
  m("planning", "PROCESS-T01", "PRIMARY", 4, "INSTRUCTOR_DERIVED"),
  m("scope", "PROCESS-T02", "PRIMARY", 4, "SOURCE_PENDING_INSTRUCTOR_LESSON_3"),
  m("requirements-basics", "PROCESS-T02", "SECONDARY", 3, "SOURCE_PENDING_INSTRUCTOR_LESSON_3"),
  m("schedule", "PROCESS-T08", "PRIMARY", 5, "INSTRUCTOR_DERIVED", "Instructor Lesson 5"),
  m("estimation-techniques", "PROCESS-T08", "SECONDARY", 3, "PLA_INTERNAL"),
  m("estimation-techniques", "PROCESS-T04", "SUPPORTING", 2, "PLA_INTERNAL"),
  m(
    "cost",
    "PROCESS-T06",
    "PRIMARY",
    5,
    "INSTRUCTOR_DERIVED",
    "Instructor Lesson 4 — EVM metric→decision",
    ["project-finance", "status-vs-forecast"],
    ["skill-plan-budget", "skill-track-cost-variance", "skill-interpret-evm"]
  ),
  m("risk-vs-issue", "BUSINESS-T05", "SECONDARY", 4, "PLA_INTERNAL"),
  m("risk-vs-issue", "BUSINESS-T04", "SECONDARY", 3, "PLA_INTERNAL"),
  m("issue-management", "BUSINESS-T04", "PRIMARY", 4, "SOURCE_PENDING_INSTRUCTOR_LESSON_8"),
  m("quality", "PROCESS-T07", "PRIMARY", 5, "INSTRUCTOR_DERIVED", "Instructor Lesson 5 — QA≠QC"),
  m("change-management-basics", "BUSINESS-T03", "PRIMARY", 4, "SOURCE_PENDING_INSTRUCTOR_LESSON_8"),
  m("procurement-basics", "PROCESS-T05", "PRIMARY", 4, "INSTRUCTOR_DERIVED", "Instructor Lesson 5"),
  m("resource-management", "PROCESS-T04", "PRIMARY", 4, "INSTRUCTOR_DERIVED", "Instructor Lesson 4"),
  m("project-controls-metrics", "PROCESS-T09", "PRIMARY", 4, "INSTRUCTOR_DERIVED", "Instructor Lesson 9"),
  m("project-controls-metrics", "PROCESS-T06", "SECONDARY", 3, "INSTRUCTOR_DERIVED"),
  m("integration", "PROCESS-T01", "PRIMARY", 4, "INSTRUCTOR_DERIVED", "Instructor Lesson 4"),
  m(
    "lessons-learned",
    "PEOPLE-T07",
    "SECONDARY",
    3,
    "INSTRUCTOR_DERIVED",
    "Closure/archive facet of knowledge; primary KT is knowledge-transfer lesson"
  ),
  m("lessons-learned", "BUSINESS-T06", "PRIMARY", 4, "INSTRUCTOR_DERIVED", "Instructor Lesson 11"),
  m("lessons-learned", "PROCESS-T10", "SECONDARY", 3, "SOURCE_PENDING_INSTRUCTOR_LESSON_10"),

  // —— Business ——
  m("governance", "BUSINESS-T01", "PRIMARY", 4, "INSTRUCTOR_DERIVED", "Instructor Lesson 2"),
  m("compliance", "BUSINESS-T02", "PRIMARY", 4, "PLA_INTERNAL"),
  m("organizational-strategy", "BUSINESS-T07", "SECONDARY", 3, "PLA_INTERNAL"),
  m("organizational-strategy", "PROCESS-T03", "SUPPORTING", 2, "PLA_INTERNAL"),
  m("business-value", "PROCESS-T03", "PRIMARY", 4, "SOURCE_PENDING_INSTRUCTOR_LESSON_3"),
  m("benefits", "PROCESS-T03", "PRIMARY", 4, "INSTRUCTOR_DERIVED", "Lesson 4 benefits plan"),
  m("benefits-realization", "PROCESS-T03", "SECONDARY", 3, "PLA_INTERNAL"),
  m("organizational-context", "BUSINESS-T07", "SECONDARY", 3, "PLA_INTERNAL"),
  m("project-selection", "BUSINESS-T08", "SECONDARY", 3, "PLA_INTERNAL"),
  m("project-selection", "BUSINESS-T07", "SUPPORTING", 2, "PLA_INTERNAL"),
  m("portfolio-context", "BUSINESS-T08", "PRIMARY", 3, "PLA_INTERNAL"),
  m("organizational-change", "BUSINESS-T07", "PRIMARY", 4, "INSTRUCTOR_DERIVED", "Instructor Lesson 11"),

  // —— Agile ——
  m("agile-mindset", "PROCESS-T01", "SECONDARY", 3, "INSTRUCTOR_DERIVED", "Instructor Lesson 1"),
  m("agile-mindset", "PEOPLE-T03", "SUPPORTING", 2, "PLA_INTERNAL"),
  m("iterative-delivery", "PROCESS-T01", "SECONDARY", 3, "PLA_INTERNAL"),
  m("iterative-delivery", "PROCESS-T03", "SECONDARY", 3, "PLA_INTERNAL"),
  m("backlog", "PROCESS-T02", "SECONDARY", 3, "PLA_INTERNAL"),
  m("prioritization-techniques", "PROCESS-T03", "SECONDARY", 4, "PLA_INTERNAL"),
  m("product-ownership", "PROCESS-T03", "SECONDARY", 3, "INSTRUCTOR_DERIVED", "Product vs project — Lesson 4"),
  m("product-ownership", "PEOPLE-T04", "SUPPORTING", 2, "PLA_INTERNAL"),
  m("iteration-planning", "PROCESS-T08", "SECONDARY", 3, "PLA_INTERNAL"),
  m("sprint-concepts", "PROCESS-T08", "SECONDARY", 3, "PLA_INTERNAL"),
  m("definition-of-done", "PROCESS-T07", "SECONDARY", 3, "PLA_INTERNAL"),
  m("definition-of-done", "PROCESS-T02", "SUPPORTING", 2, "SOURCE_PENDING_INSTRUCTOR_LESSON_3"),
  m("feedback", "PEOPLE-T08", "SECONDARY", 3, "INSTRUCTOR_DERIVED", "Lesson 6 feedback"),
  m("feedback", "BUSINESS-T06", "SUPPORTING", 2, "PLA_INTERNAL"),
  m("retrospective", "BUSINESS-T06", "PRIMARY", 4, "INSTRUCTOR_DERIVED", "Lesson 11 + Lesson 6 retros"),
  m("retrospective", "PEOPLE-T07", "SECONDARY", 3, "INSTRUCTOR_DERIVED"),
  m("velocity-and-flow", "PROCESS-T09", "SECONDARY", 3, "INSTRUCTOR_DERIVED", "Lesson 9 forecasting"),
  m("impediments-management", "BUSINESS-T04", "PRIMARY", 4, "PLA_INTERNAL"),

  // —— Hybrid ——
  m("hybrid-project-basics", "PROCESS-T01", "SECONDARY", 3, "INSTRUCTOR_DERIVED", "Lesson 1/4 hybrid"),
  m("when-to-use-hybrid", "PROCESS-T01", "SECONDARY", 4, "INSTRUCTOR_DERIVED"),
  m("combining-predictive-and-agile", "PROCESS-T01", "PRIMARY", 4, "INSTRUCTOR_DERIVED"),
  m("planning-boundaries-hybrid", "PROCESS-T01", "SECONDARY", 3, "PLA_INTERNAL"),
  m("mixed-delivery-models", "PROCESS-T01", "SECONDARY", 3, "PLA_INTERNAL"),
  m("tailoring", "PROCESS-T01", "SECONDARY", 4, "INSTRUCTOR_DERIVED", "Lesson 1 adaptation"),
  m("governance-hybrid", "BUSINESS-T01", "SECONDARY", 3, "INSTRUCTOR_DERIVED"),
  m("stakeholder-management-hybrid", "PEOPLE-T04", "SECONDARY", 3, "PLA_INTERNAL"),
  m("risk-management-hybrid", "BUSINESS-T05", "PRIMARY", 4, "SOURCE_PENDING_INSTRUCTOR_LESSON_8"),
  m("delivery-strategy", "PROCESS-T01", "SECONDARY", 3, "PLA_INTERNAL"),
  m("delivery-strategy", "PROCESS-T03", "SUPPORTING", 2, "PLA_INTERNAL"),

  // —— Situational ——
  m("pla-situational-method", "PEOPLE-T02", "SUPPORTING", 2, "PLA_INTERNAL", "Exam reasoning scaffold"),
  m("identify-before-acting", "BUSINESS-T04", "SUPPORTING", 2, "PLA_INTERNAL"),
  m("root-cause-vs-symptom", "PEOPLE-T01", "SECONDARY", 3, "INSTRUCTOR_DERIVED", "Lesson 2 root cause"),
  m("root-cause-vs-symptom", "PEOPLE-T02", "SUPPORTING", 2, "PLA_INTERNAL"),
  m("collaborate-before-escalating", "PEOPLE-T02", "SECONDARY", 3, "INSTRUCTOR_DERIVED"),
  m("scope-creep-mid-sprint", "PROCESS-T02", "SECONDARY", 3, "PLA_INTERNAL"),
  m("scope-creep-mid-sprint", "BUSINESS-T03", "SECONDARY", 3, "PLA_INTERNAL"),
  m("team-conflict-architecture", "PEOPLE-T02", "PRIMARY", 4, "INSTRUCTOR_DERIVED"),
  m("vendor-delay-risk", "BUSINESS-T05", "SECONDARY", 3, "PLA_INTERNAL"),
  m("vendor-delay-risk", "PROCESS-T05", "SUPPORTING", 2, "PLA_INTERNAL"),
  m("change-request-critical-path", "BUSINESS-T03", "PRIMARY", 4, "PLA_INTERNAL"),
  m("protect-value-decisions", "PROCESS-T03", "SECONDARY", 3, "PLA_INTERNAL"),
  m("risk-vs-issue-situational", "BUSINESS-T05", "PRIMARY", 4, "PLA_INTERNAL"),
  m("risk-vs-issue-situational", "BUSINESS-T04", "SECONDARY", 3, "PLA_INTERNAL"),
  m("agile-vs-predictive-choice", "PROCESS-T01", "PRIMARY", 4, "INSTRUCTOR_DERIVED"),
  m(
    "exam-reasoning-integration",
    "PROCESS-T09",
    "SUPPORTING",
    2,
    "PLA_INTERNAL",
    "Instructor Lesson 12 transition — practice/mastery hook"
  ),
];

export const LESSON_AUDIT: readonly LessonAuditRow[] = [
  { lessonId: "shared-vision", auditClass: "PRIMARY", primaryEcoTasks: ["PEOPLE-T01"], notes: "B.3 created" },
  { lessonId: "knowledge-transfer", auditClass: "PRIMARY", primaryEcoTasks: ["PEOPLE-T07"], notes: "B.3 created; distinct from communication" },
  { lessonId: "communication", auditClass: "PRIMARY", primaryEcoTasks: ["PEOPLE-T08"], notes: "B.3 enhanced; T08≠T04" },
  { lessonId: "cost", auditClass: "PRIMARY", primaryEcoTasks: ["PROCESS-T06"], notes: "B.3 EVM decision pedagogy" },
  { lessonId: "conflict-management-basics", auditClass: "PRIMARY", primaryEcoTasks: ["PEOPLE-T02"] },
  { lessonId: "leadership", auditClass: "PRIMARY", primaryEcoTasks: ["PEOPLE-T03"] },
  { lessonId: "stakeholders-basics", auditClass: "PRIMARY", primaryEcoTasks: ["PEOPLE-T04"] },
  { lessonId: "scope", auditClass: "PRIMARY", primaryEcoTasks: ["PROCESS-T02"], notes: "SOURCE_PENDING Lesson 3" },
  { lessonId: "resource-management", auditClass: "THIN", primaryEcoTasks: ["PROCESS-T04"] },
  { lessonId: "procurement-basics", auditClass: "THIN", primaryEcoTasks: ["PROCESS-T05"] },
  { lessonId: "quality", auditClass: "PRIMARY", primaryEcoTasks: ["PROCESS-T07"] },
  { lessonId: "schedule", auditClass: "PRIMARY", primaryEcoTasks: ["PROCESS-T08"] },
  { lessonId: "project-controls-metrics", auditClass: "SUPPORTING", primaryEcoTasks: ["PROCESS-T09"] },
  { lessonId: "project-lifecycle-basics", auditClass: "THIN", primaryEcoTasks: ["PROCESS-T10"], notes: "Closure thin — SOURCE_PENDING Lesson 10" },
  { lessonId: "governance", auditClass: "PRIMARY", primaryEcoTasks: ["BUSINESS-T01"] },
  { lessonId: "compliance", auditClass: "PRIMARY", primaryEcoTasks: ["BUSINESS-T02"] },
  { lessonId: "change-management-basics", auditClass: "PRIMARY", primaryEcoTasks: ["BUSINESS-T03"] },
  { lessonId: "issue-management", auditClass: "PRIMARY", primaryEcoTasks: ["BUSINESS-T04"] },
  { lessonId: "risk-management-hybrid", auditClass: "PRIMARY", primaryEcoTasks: ["BUSINESS-T05"] },
  { lessonId: "retrospective", auditClass: "PRIMARY", primaryEcoTasks: ["BUSINESS-T06"] },
  { lessonId: "organizational-change", auditClass: "PRIMARY", primaryEcoTasks: ["BUSINESS-T07"] },
  { lessonId: "portfolio-context", auditClass: "SUPPORTING", primaryEcoTasks: ["BUSINESS-T08"] },
];

export function entriesForLesson(lessonId: string): LessonEcoMapEntry[] {
  return LESSON_ECO_MAP.filter((e) => e.lessonId === lessonId);
}

export function entriesForEcoTask(ecoTaskId: EcoTaskStableId): LessonEcoMapEntry[] {
  return LESSON_ECO_MAP.filter((e) => e.ecoTaskId === ecoTaskId);
}

export function primaryLessonsForEcoTask(ecoTaskId: EcoTaskStableId): string[] {
  return entriesForEcoTask(ecoTaskId)
    .filter((e) => e.coverageType === "PRIMARY")
    .map((e) => e.lessonId);
}

export function mappedLessonIds(): string[] {
  return [...new Set(LESSON_ECO_MAP.map((e) => e.lessonId))];
}

export type EcoLessonCoverageReport = {
  ecoTaskId: EcoTaskStableId;
  primaryLessons: string[];
  secondaryLessons: string[];
  supportingLessons: string[];
  hasPrimary: boolean;
  status: "GREEN" | "YELLOW" | "RED";
};

export function buildEcoLessonCoverageReport(): EcoLessonCoverageReport[] {
  return ECO_TASKS.map((t) => {
    const entries = entriesForEcoTask(t.id);
    const primaryLessons = entries
      .filter((e) => e.coverageType === "PRIMARY")
      .map((e) => e.lessonId);
    const secondaryLessons = entries
      .filter((e) => e.coverageType === "SECONDARY")
      .map((e) => e.lessonId);
    const supportingLessons = entries
      .filter((e) => e.coverageType === "SUPPORTING")
      .map((e) => e.lessonId);
    const hasPrimary = primaryLessons.length > 0;
    let status: "GREEN" | "YELLOW" | "RED" = "RED";
    if (hasPrimary && (secondaryLessons.length > 0 || primaryLessons.length > 1)) {
      status = "GREEN";
    } else if (hasPrimary) {
      status = "YELLOW";
    } else if (secondaryLessons.length > 0) {
      status = "YELLOW";
    }
    return {
      ecoTaskId: t.id,
      primaryLessons,
      secondaryLessons,
      supportingLessons,
      hasPrimary,
      status,
    };
  });
}

export function assertT07T08Separation(): string[] {
  const issues: string[] = [];
  const t07Primary = primaryLessonsForEcoTask("PEOPLE-T07");
  const t08Primary = primaryLessonsForEcoTask("PEOPLE-T08");
  if (!t07Primary.includes("knowledge-transfer")) {
    issues.push("PEOPLE-T07 must have knowledge-transfer as PRIMARY");
  }
  if (!t08Primary.includes("communication")) {
    issues.push("PEOPLE-T08 must have communication as PRIMARY");
  }
  if (t07Primary.includes("communication")) {
    issues.push("communication must not be PRIMARY for PEOPLE-T07");
  }
  if (t08Primary.includes("knowledge-transfer")) {
    issues.push("knowledge-transfer must not be PRIMARY for PEOPLE-T08");
  }
  const t04Primary = primaryLessonsForEcoTask("PEOPLE-T04");
  if (t04Primary.includes("communication")) {
    issues.push("communication must not be PRIMARY for PEOPLE-T04 (engagement ≠ communication)");
  }
  return issues;
}

export function assertP0Coverage(): string[] {
  const issues: string[] = [];
  const checks: Array<[EcoTaskStableId, string]> = [
    ["PEOPLE-T01", "shared-vision"],
    ["PEOPLE-T07", "knowledge-transfer"],
    ["PEOPLE-T08", "communication"],
    ["PROCESS-T06", "cost"],
  ];
  for (const [task, lesson] of checks) {
    const primary = primaryLessonsForEcoTask(task);
    if (!primary.includes(lesson)) {
      issues.push(`${task} missing PRIMARY lesson ${lesson}`);
    }
  }
  return issues;
}
