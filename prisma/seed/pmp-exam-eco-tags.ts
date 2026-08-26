/**
 * ECO-proxy metadata backfill for the protected 200 exam items.
 * Adds ecoTaskCode / conceptSlug only — does NOT alter stems, options, or scoring.
 *
 * Mapping is heuristic from existing processArea + skills → PLA ECO-proxy codes
 * informed by ECO 2026 structure (not PMI text).
 */

import type { EcoTaskCode } from "@/modules/assessment-engine/eco-proxy-2026";
import type { ExamBankQuestionSeed } from "./pmp-exam-bank-types";

export type EcoTagPatch = {
  ecoTaskCode: EcoTaskCode;
  ecoTaskCodesSecondary?: EcoTaskCode[];
  conceptSlug: string;
};

/** Primary processArea → ECO-proxy task (PLA heuristic). Includes misread-upgrade labels. */
const PROCESS_AREA_PRIMARY: Record<string, EcoTagPatch> = {
  "Stakeholder engagement": {
    ecoTaskCode: "PE-04",
    ecoTaskCodesSecondary: ["PE-05", "PE-06"],
    conceptSlug: "stakeholder-engagement",
  },
  "Conflict management": {
    ecoTaskCode: "PE-02",
    conceptSlug: "conflict-resolution",
  },
  "Team leadership": {
    ecoTaskCode: "PE-03",
    conceptSlug: "team-leadership",
  },
  Scope: {
    ecoTaskCode: "PR-02",
    conceptSlug: "scope-control",
  },
  "Scope management": {
    ecoTaskCode: "PR-02",
    conceptSlug: "scope-control",
  },
  Schedule: {
    ecoTaskCode: "PR-08",
    conceptSlug: "schedule-control",
  },
  "Schedule management": {
    ecoTaskCode: "PR-08",
    conceptSlug: "schedule-control",
  },
  Quality: {
    ecoTaskCode: "PR-07",
    conceptSlug: "quality-deliverables",
  },
  "Quality management": {
    ecoTaskCode: "PR-07",
    conceptSlug: "quality-deliverables",
  },
  /**
   * Bank often tags Risk under PROCESS domain; ECO 2026 places risk under
   * business environment. Tag BE-05 without rewriting domain/stems (Phase C+).
   */
  Risk: {
    ecoTaskCode: "BE-05",
    conceptSlug: "risk-management",
  },
  "Risk management": {
    ecoTaskCode: "BE-05",
    conceptSlug: "risk-management",
  },
  /** Change control / change management → BE in ECO 2026. */
  "Change control": {
    ecoTaskCode: "BE-03",
    conceptSlug: "change-control",
  },
  "Change management": {
    ecoTaskCode: "BE-03",
    ecoTaskCodesSecondary: ["BE-07"],
    conceptSlug: "change-control",
  },
  Benefits: {
    ecoTaskCode: "PR-03",
    conceptSlug: "value-delivery",
  },
  "Benefits realization": {
    ecoTaskCode: "PR-03",
    conceptSlug: "value-delivery",
  },
  Compliance: {
    ecoTaskCode: "BE-02",
    conceptSlug: "compliance",
  },
  "Organizational strategy": {
    ecoTaskCode: "BE-07",
    ecoTaskCodesSecondary: ["BE-08", "BE-01"],
    conceptSlug: "org-change",
  },
  "Organizational change": {
    ecoTaskCode: "BE-07",
    conceptSlug: "org-change",
  },
  "Portfolio alignment": {
    ecoTaskCode: "BE-08",
    ecoTaskCodesSecondary: ["BE-01", "PR-03"],
    conceptSlug: "external-environment",
  },
  "Integration management": {
    ecoTaskCode: "PR-01",
    conceptSlug: "integrated-planning",
  },
  "Hybrid delivery": {
    ecoTaskCode: "PR-01",
    ecoTaskCodesSecondary: ["PR-03"],
    conceptSlug: "integrated-planning",
  },
  "Procurement management": {
    ecoTaskCode: "PR-05",
    conceptSlug: "procurement",
  },
  "Resource management": {
    ecoTaskCode: "PR-04",
    conceptSlug: "resource-planning",
  },
  "Communications management": {
    ecoTaskCode: "PE-08",
    conceptSlug: "communication-planning",
  },
};

/** Skill-based secondary enrichment when present. */
function secondaryFromSkills(
  skills: string[],
  primary: EcoTaskCode
): EcoTaskCode[] {
  const extra: EcoTaskCode[] = [];
  const push = (code: EcoTaskCode) => {
    if (code !== primary && !extra.includes(code)) extra.push(code);
  };
  for (const s of skills) {
    if (s === "communication") push("PE-08");
    if (s === "cost") push("PR-06");
    if (s === "procurement") push("PR-05");
    if (s === "governance") push("BE-01");
    if (s === "business-value" && primary !== "PR-03") push("PR-03");
    if (s === "pmp-hybrid" || s === "hybrid-delivery") push("PR-01");
    if (s === "pmp-situational-thinking") push("BE-04");
  }
  return extra;
}

export function resolveEcoTagForQuestion(
  q: Pick<ExamBankQuestionSeed, "processArea" | "skills" | "externalKey">
): EcoTagPatch {
  const base = PROCESS_AREA_PRIMARY[q.processArea];
  if (!base) {
    throw new Error(
      `No ECO-proxy mapping for processArea="${q.processArea}" (${q.externalKey})`
    );
  }
  const fromSkills = secondaryFromSkills(q.skills, base.ecoTaskCode);
  const secondary = [
    ...(base.ecoTaskCodesSecondary ?? []),
    ...fromSkills,
  ].filter((c, i, arr) => arr.indexOf(c) === i && c !== base.ecoTaskCode);

  return {
    ecoTaskCode: base.ecoTaskCode,
    ecoTaskCodesSecondary: secondary.length > 0 ? secondary : undefined,
    conceptSlug: base.conceptSlug,
  };
}

/** Apply ECO tags onto seeds without touching stem/option fields. */
export function applyEcoProxyTags(
  bank: ExamBankQuestionSeed[]
): ExamBankQuestionSeed[] {
  return bank.map((q) => {
    const tag = resolveEcoTagForQuestion(q);
    return {
      ...q,
      ecoTaskCode: tag.ecoTaskCode,
      ecoTaskCodesSecondary: tag.ecoTaskCodesSecondary,
      conceptSlug: tag.conceptSlug,
    };
  });
}
