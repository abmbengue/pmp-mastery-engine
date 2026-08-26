/**
 * Question mastery metadata layer — maps protected exam items without stem edits.
 */

import type { ExamBankQuestionSeed } from "../../../prisma/seed/pmp-exam-bank-types";
import { resolveEcoTagForQuestion } from "../../../prisma/seed/pmp-exam-eco-tags";
import { getConcept } from "./concept-graph";
import { legacyToStableEcoId, getEcoTaskById } from "./eco-taxonomy";
import { misconceptionsForConcept } from "./misconceptions";
import {
  primaryPmbokDomainForEcoLegacy,
  usesCrossCuttingQuality,
} from "./pmbok8-domains";
import { skillsForConcept } from "./mastery-skills";
import { mapLearningObjectiveToCognitive } from "./mastery-skills";
import type {
  CognitiveLevel,
  DeliveryApproachTag,
  MappingConfidence,
  MappingStatus,
  QuestionMasteryMetadata,
} from "./types";

/** Maps legacy conceptSlug from eco-tags → canonical concept graph id */
const CONCEPT_SLUG_ALIASES: Record<string, string> = {
  "conflict-resolution": "conflict-management",
  "team-leadership": "team-leadership",
  "stakeholder-engagement": "stakeholder-engagement",
  "expectation-alignment": "expectation-alignment",
  "expectation-management": "expectation-management",
  "knowledge-transfer": "knowledge-transfer",
  "communication-planning": "communication-planning",
  "shared-vision": "shared-vision",
  "integrated-planning": "integrated-planning",
  "scope-control": "scope-management",
  "value-delivery": "value-delivery",
  "resource-planning": "resource-management",
  procurement: "procurement",
  "project-finance": "project-finance",
  "quality-deliverables": "quality-management",
  "schedule-control": "schedule-management",
  "status-assessment": "project-status",
  "closure-transition": "project-closure",
  governance: "governance",
  compliance: "compliance",
  "change-control": "change-control",
  "impediments-issues": "issue-management",
  "risk-management": "risk-management",
  "continuous-improvement": "continuous-improvement",
  "org-change": "organizational-change",
  "external-environment": "external-environment",
};

const SCENARIO_MISCONCEPTION: Record<string, string[]> = {
  CONFLICT: ["mc-conflict-issue"],
  RISK: ["mc-risk-issue"],
  CHANGE: ["mc-requested-approved", "mc-scope-change"],
  STAKEHOLDER: ["mc-communication-engagement"],
  AGILE: ["mc-adaptive-hybrid"],
  HYBRID: ["mc-adaptive-hybrid", "mc-predictive-adaptive"],
};

function deliveryTag(
  approach: ExamBankQuestionSeed["deliveryApproach"]
): DeliveryApproachTag {
  if (approach === "PREDICTIVE") return "PREDICTIVE";
  if (approach === "AGILE") return "AGILE";
  return "HYBRID";
}

function inferMappingConfidence(
  q: ExamBankQuestionSeed,
  conceptId: string
): { status: MappingStatus; confidence: MappingConfidence } {
  const concept = getConcept(conceptId);
  if (!concept) {
    return { status: "UNVERIFIED", confidence: "UNVERIFIED" };
  }
  const legacy = q.ecoTaskCode ?? resolveEcoTagForQuestion(q).ecoTaskCode;
  const task = getEcoTaskById(legacyToStableEcoId(legacy));
  if (task.plaExamDomain !== q.domain) {
    return { status: "PARTIAL", confidence: "MEDIUM" };
  }
  if (q.processArea.includes("management") && q.processArea !== "Risk management") {
    return { status: "PARTIAL", confidence: "MEDIUM" };
  }
  return { status: "VERIFIED", confidence: "HIGH" };
}

export function buildQuestionMasteryMetadata(
  q: ExamBankQuestionSeed
): QuestionMasteryMetadata {
  const ecoTag = q.ecoTaskCode
    ? {
        ecoTaskCode: q.ecoTaskCode,
        ecoTaskCodesSecondary: q.ecoTaskCodesSecondary,
        conceptSlug: q.conceptSlug,
      }
    : resolveEcoTagForQuestion(q);

  const ecoTaskId = legacyToStableEcoId(ecoTag.ecoTaskCode);
  const ecoTask = getEcoTaskById(ecoTaskId);
  const conceptId =
    CONCEPT_SLUG_ALIASES[ecoTag.conceptSlug ?? ""] ?? ecoTag.conceptSlug ?? "integrated-planning";

  const secondaryEcoIds = (ecoTag.ecoTaskCodesSecondary ?? []).map((c) =>
    legacyToStableEcoId(c)
  );

  const pmbokPrimary = primaryPmbokDomainForEcoLegacy(ecoTag.ecoTaskCode);
  const crossCutting = usesCrossCuttingQuality(ecoTag.ecoTaskCode)
    ? (["KN-QUALITY"] as const)
    : [];

  const skills = skillsForConcept(conceptId);
  const primarySkill = skills[0];
  const secondarySkills = skills.slice(1, 4);

  const scenarioMis = SCENARIO_MISCONCEPTION[q.scenarioType] ?? [];
  const conceptMis = misconceptionsForConcept(conceptId).map((m) => m.id);
  const misconceptionIds = [...new Set([...scenarioMis, ...conceptMis])].slice(0, 5);

  const cognitiveLevel: CognitiveLevel = mapLearningObjectiveToCognitive(
    q.learningObjective
  );

  const { status, confidence } = inferMappingConfidence(q, conceptId);

  const secondaryConcepts: string[] = [];
  if (ecoTag.ecoTaskCode === "PE-04" || ecoTag.ecoTaskCode === "PE-08") {
    secondaryConcepts.push("communication-vs-engagement");
  }
  if (ecoTag.ecoTaskCode === "BE-05" || ecoTag.ecoTaskCode === "BE-04") {
    secondaryConcepts.push("risk-vs-issue");
  }

  return {
    externalKey: q.externalKey,
    ecoDomain: ecoTask.domainId,
    ecoTaskId,
    ecoTaskIdsSecondary: secondaryEcoIds,
    pmbokPerformanceDomain: pmbokPrimary,
    pmbokPerformanceDomainsSecondary: pmbokPrimary ? [] : [],
    crossCutting: [...crossCutting],
    primaryConceptId: conceptId,
    secondaryConceptIds: secondaryConcepts,
    primarySkillId: primarySkill?.id,
    secondarySkillIds: secondarySkills.map((s) => s.id),
    cognitiveLevel,
    difficulty: q.examDifficulty,
    approach: deliveryTag(q.deliveryApproach),
    misconceptionIds,
    mappingStatus: status,
    mappingConfidence: confidence,
    sourceType: "DERIVED_PEDAGOGICAL",
    sourceConfidence: confidence === "UNVERIFIED" ? "UNVERIFIED" : "MEDIUM",
  };
}

export function buildExamBankMasteryMetadata(
  bank: ExamBankQuestionSeed[]
): QuestionMasteryMetadata[] {
  return bank.map(buildQuestionMasteryMetadata);
}

export function metadataByExternalKey(
  bank: ExamBankQuestionSeed[]
): Map<string, QuestionMasteryMetadata> {
  return new Map(buildExamBankMasteryMetadata(bank).map((m) => [m.externalKey, m]));
}
