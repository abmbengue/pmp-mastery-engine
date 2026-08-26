/**
 * Knowledge Pack loader — canonical export for Cursor / Phase B+.
 *
 * NOTE: Full source PDFs were not in workspace at build time.
 * ECO tasks: PMI_ECO_2026 (HIGH). PMBOK PD names: MEDIUM until pack import.
 */

import { ECO_TASKS, ECO_DOMAIN_WEIGHTS, ECO_DELIVERY_SPLIT } from "./eco-taxonomy";
import {
  PMBOK8_PERFORMANCE_DOMAINS,
  CROSS_CUTTING_QUALITY,
} from "./pmbok8-domains";
import { CONCEPTS, CONCEPT_COUNT } from "./concept-graph";
import { MASTERY_SKILLS, MASTERY_SKILL_COUNT } from "./mastery-skills";
import { MISCONCEPTIONS, MISCONCEPTION_COUNT } from "./misconceptions";

export const KNOWLEDGE_PACK_VERSION = "1.0.0-phase-b" as const;

export type KnowledgePack = {
  version: typeof KNOWLEDGE_PACK_VERSION;
  generatedAt: string;
  sourceNotice: string;
  eco: {
    domainWeights: typeof ECO_DOMAIN_WEIGHTS;
    deliverySplit: typeof ECO_DELIVERY_SPLIT;
    tasks: typeof ECO_TASKS;
  };
  pmbok8: {
    performanceDomains: typeof PMBOK8_PERFORMANCE_DOMAINS;
    crossCutting: typeof CROSS_CUTTING_QUALITY;
  };
  concepts: typeof CONCEPTS;
  skills: typeof MASTERY_SKILLS;
  misconceptions: typeof MISCONCEPTIONS;
  counts: {
    ecoTasks: number;
    pmbokDomains: number;
    concepts: number;
    skills: number;
    misconceptions: number;
  };
};

export function buildKnowledgePack(): KnowledgePack {
  return {
    version: KNOWLEDGE_PACK_VERSION,
    generatedAt: new Date().toISOString(),
    sourceNotice:
      "PLA mastery knowledge pack. ECO structure from PMI ECO July 2026 (FR PDF in uploads). " +
      "PMBOK 8 PD paraphrases from mission spec — verify when full PMBOK pack is imported. " +
      "NOT official PMI certification content.",
    eco: {
      domainWeights: ECO_DOMAIN_WEIGHTS,
      deliverySplit: ECO_DELIVERY_SPLIT,
      tasks: ECO_TASKS,
    },
    pmbok8: {
      performanceDomains: PMBOK8_PERFORMANCE_DOMAINS,
      crossCutting: CROSS_CUTTING_QUALITY,
    },
    concepts: CONCEPTS,
    skills: MASTERY_SKILLS,
    misconceptions: MISCONCEPTIONS,
    counts: {
      ecoTasks: ECO_TASKS.length,
      pmbokDomains: PMBOK8_PERFORMANCE_DOMAINS.length,
      concepts: CONCEPT_COUNT,
      skills: MASTERY_SKILL_COUNT,
      misconceptions: MISCONCEPTION_COUNT,
    },
  };
}

export function knowledgePackJson(): string {
  return JSON.stringify(buildKnowledgePack(), null, 2);
}
