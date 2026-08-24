/**
 * PLA PMP Learning Blueprint — proprietary pedagogical model.
 * NOT an official PMI exam blueprint.
 */

import type {
  ExamDifficultyCode,
  ExamTypeCode,
  PmpDeliveryApproachCode,
  PmpDomainCode,
} from "@/modules/assessment-engine/exam-types";

export type PmpScenarioTypeCode =
  | "FIRST_ACTION"
  | "NEXT_ACTION"
  | "BEST_ACTION"
  | "PREVENTION"
  | "ROOT_CAUSE"
  | "STAKEHOLDER"
  | "RISK"
  | "CHANGE"
  | "CONFLICT"
  | "AGILE"
  | "HYBRID"
  | "GOVERNANCE";

export type LearningObjectiveCode =
  | "IDENTIFY"
  | "APPLY"
  | "ANALYZE"
  | "DECIDE";

export type DistributionSpec<T extends string> = Partial<Record<T, number>>;

export interface ExamBlueprintSpec {
  examType: ExamTypeCode;
  totalQuestions: number;
  domainFilter?: PmpDomainCode;
  domainDistribution: DistributionSpec<PmpDomainCode>;
  difficultyDistribution: DistributionSpec<ExamDifficultyCode>;
  deliveryDistribution: DistributionSpec<PmpDeliveryApproachCode>;
  scenarioDistribution: DistributionSpec<PmpScenarioTypeCode>;
  /** Soft cap: max questions sharing the same primary skill */
  maxPerSkill: number;
  /** Soft cap: max questions sharing the same scenarioType */
  maxPerScenarioType: number;
}

export interface BlueprintQuestionCandidate {
  id: string;
  domain: PmpDomainCode;
  deliveryApproach: PmpDeliveryApproachCode;
  difficulty: ExamDifficultyCode;
  scenarioType: PmpScenarioTypeCode;
  skillSlugs: string[];
  learningObjective?: LearningObjectiveCode;
}

export interface BuiltExamSlot {
  questionId: string;
  domain: PmpDomainCode;
  deliveryApproach: PmpDeliveryApproachCode;
  difficulty: ExamDifficultyCode;
  scenarioType: PmpScenarioTypeCode;
  skillSlugs: string[];
}

/** Mulberry32 — deterministic PRNG for testable randomization */
export function createSeededRng(seed: string): () => number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < seed.length; i += 1) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  let t = h >>> 0;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

export function seededShuffle<T>(items: T[], rng: () => number): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function distributeCounts(
  total: number,
  weights: Record<string, number>
): Record<string, number> {
  const keys = Object.keys(weights);
  if (keys.length === 0 || total <= 0) return {};
  const weightSum = keys.reduce((s, k) => s + Math.max(0, weights[k] ?? 0), 0);
  if (weightSum <= 0) {
    const even = Math.floor(total / keys.length);
    const out: Record<string, number> = {};
    let left = total;
    keys.forEach((k, i) => {
      const n = i === keys.length - 1 ? left : even;
      out[k] = n;
      left -= n;
    });
    return out;
  }
  const raw = keys.map((k) => ({
    k,
    n: (Math.max(0, weights[k] ?? 0) / weightSum) * total,
  }));
  const floors = raw.map((r) => ({ k: r.k, n: Math.floor(r.n), frac: r.n - Math.floor(r.n) }));
  let used = floors.reduce((s, f) => s + f.n, 0);
  floors.sort((a, b) => b.frac - a.frac);
  let i = 0;
  while (used < total) {
    floors[i % floors.length].n += 1;
    used += 1;
    i += 1;
  }
  return Object.fromEntries(floors.map((f) => [f.k, f.n]));
}

/**
 * Builds the PLA PMP Learning Blueprint for an exam type.
 * Pedagogical / proprietary — not an official PMI blueprint.
 */
export function buildExamBlueprint(
  examType: ExamTypeCode,
  options?: { domainFilter?: PmpDomainCode; totalOverride?: number }
): ExamBlueprintSpec {
  const domainFilter = options?.domainFilter;

  if (examType === "QUICK_PRACTICE") {
    return {
      examType,
      totalQuestions: options?.totalOverride ?? 10,
      domainFilter,
      domainDistribution: domainFilter
        ? { [domainFilter]: 10 }
        : { PEOPLE: 3, PROCESS: 5, BUSINESS_ENVIRONMENT: 2 },
      difficultyDistribution: { EASY: 3, MEDIUM: 5, HARD: 2 },
      deliveryDistribution: { AGILE: 3, HYBRID: 3, PREDICTIVE: 4 },
      scenarioDistribution: {
        FIRST_ACTION: 2,
        NEXT_ACTION: 2,
        BEST_ACTION: 3,
        RISK: 1,
        STAKEHOLDER: 1,
        CONFLICT: 1,
      },
      maxPerSkill: 3,
      maxPerScenarioType: 3,
    };
  }

  if (examType === "DOMAIN_PRACTICE") {
    const domain = domainFilter ?? "PROCESS";
    return {
      examType,
      totalQuestions: options?.totalOverride ?? 25,
      domainFilter: domain,
      domainDistribution: { [domain]: 25 },
      difficultyDistribution: { EASY: 7, MEDIUM: 12, HARD: 6 },
      deliveryDistribution: { AGILE: 8, HYBRID: 8, PREDICTIVE: 9 },
      scenarioDistribution: {
        FIRST_ACTION: 4,
        NEXT_ACTION: 4,
        BEST_ACTION: 5,
        RISK: 3,
        CHANGE: 3,
        STAKEHOLDER: 3,
        GOVERNANCE: 3,
      },
      maxPerSkill: 6,
      maxPerScenarioType: 6,
    };
  }

  if (examType === "MOCK_EXAM") {
    return {
      examType,
      totalQuestions: options?.totalOverride ?? 60,
      domainDistribution: {
        PEOPLE: 18,
        PROCESS: 30,
        BUSINESS_ENVIRONMENT: 12,
      },
      difficultyDistribution: { EASY: 15, MEDIUM: 30, HARD: 15 },
      deliveryDistribution: { AGILE: 20, HYBRID: 20, PREDICTIVE: 20 },
      scenarioDistribution: {
        FIRST_ACTION: 8,
        NEXT_ACTION: 8,
        BEST_ACTION: 10,
        RISK: 6,
        STAKEHOLDER: 6,
        CONFLICT: 4,
        CHANGE: 5,
        AGILE: 5,
        HYBRID: 4,
        GOVERNANCE: 4,
      },
      maxPerSkill: 8,
      maxPerScenarioType: 12,
    };
  }

  // FULL_PMP — architecture for 180
  return {
    examType: "FULL_PMP",
    totalQuestions: options?.totalOverride ?? 180,
    domainDistribution: {
      PEOPLE: 54,
      PROCESS: 90,
      BUSINESS_ENVIRONMENT: 36,
    },
    difficultyDistribution: { EASY: 45, MEDIUM: 90, HARD: 45 },
    deliveryDistribution: { AGILE: 60, HYBRID: 60, PREDICTIVE: 60 },
    scenarioDistribution: {
      FIRST_ACTION: 20,
      NEXT_ACTION: 20,
      BEST_ACTION: 25,
      RISK: 18,
      STAKEHOLDER: 18,
      CONFLICT: 12,
      CHANGE: 15,
      AGILE: 15,
      HYBRID: 12,
      GOVERNANCE: 12,
      PREVENTION: 7,
      ROOT_CAUSE: 6,
    },
    maxPerSkill: 20,
    maxPerScenarioType: 30,
  };
}

function countBy<T extends string>(
  items: BuiltExamSlot[],
  key: (i: BuiltExamSlot) => T
): Record<string, number> {
  const out: Record<string, number> = {};
  for (const item of items) {
    const k = key(item);
    out[k] = (out[k] ?? 0) + 1;
  }
  return out;
}

/**
 * Selects questions respecting the blueprint as closely as possible.
 * Same blueprint + same seed + same candidate pool ⇒ same selection.
 * Throws if the bank cannot satisfy the requested total (no silent shortfall).
 */
export function buildExamFromBlueprint(
  blueprint: ExamBlueprintSpec,
  candidates: BlueprintQuestionCandidate[],
  seed: string,
  excludeIds: Set<string> = new Set()
): BuiltExamSlot[] {
  const available = candidates.filter((c) => !excludeIds.has(c.id));
  if (available.length < blueprint.totalQuestions) {
    throw new Error(
      `INSUFFICIENT_QUESTION_BANK: need ${blueprint.totalQuestions}, available ${available.length}`
    );
  }

  const rng = createSeededRng(seed);
  const pool = seededShuffle(available, rng);
  const selected: BuiltExamSlot[] = [];
  const used = new Set<string>();

  const domainNeed = distributeCounts(
    blueprint.totalQuestions,
    blueprint.domainDistribution as Record<string, number>
  );
  const diffNeed = distributeCounts(
    blueprint.totalQuestions,
    blueprint.difficultyDistribution as Record<string, number>
  );
  const deliveryNeed = distributeCounts(
    blueprint.totalQuestions,
    blueprint.deliveryDistribution as Record<string, number>
  );

  const skillCounts: Record<string, number> = {};
  const scenarioCounts: Record<string, number> = {};

  const domainHave: Record<string, number> = {};
  const diffHave: Record<string, number> = {};
  const deliveryHave: Record<string, number> = {};

  function tryPick(
    predicate: (c: BlueprintQuestionCandidate) => boolean,
    relaxCaps = false
  ): boolean {
    for (const c of pool) {
      if (used.has(c.id)) continue;
      if (!predicate(c)) continue;
      const primary = c.skillSlugs[0] ?? "unknown";
      if (!relaxCaps && (skillCounts[primary] ?? 0) >= blueprint.maxPerSkill) {
        continue;
      }
      if (
        !relaxCaps &&
        (scenarioCounts[c.scenarioType] ?? 0) >= blueprint.maxPerScenarioType
      ) {
        continue;
      }

      used.add(c.id);
      skillCounts[primary] = (skillCounts[primary] ?? 0) + 1;
      scenarioCounts[c.scenarioType] = (scenarioCounts[c.scenarioType] ?? 0) + 1;
      domainHave[c.domain] = (domainHave[c.domain] ?? 0) + 1;
      diffHave[c.difficulty] = (diffHave[c.difficulty] ?? 0) + 1;
      deliveryHave[c.deliveryApproach] =
        (deliveryHave[c.deliveryApproach] ?? 0) + 1;

      selected.push({
        questionId: c.id,
        domain: c.domain,
        deliveryApproach: c.deliveryApproach,
        difficulty: c.difficulty,
        scenarioType: c.scenarioType,
        skillSlugs: c.skillSlugs,
      });
      return true;
    }
    return false;
  }

  // Pass 1: fill domain quotas with difficulty preference
  for (const [domain, need] of Object.entries(domainNeed)) {
    while ((domainHave[domain] ?? 0) < need && selected.length < blueprint.totalQuestions) {
      const preferredDiff = Object.entries(diffNeed).find(
        ([d, n]) => (diffHave[d] ?? 0) < n
      )?.[0];
      const preferredDelivery = Object.entries(deliveryNeed).find(
        ([d, n]) => (deliveryHave[d] ?? 0) < n
      )?.[0];

      const ok =
        tryPick(
          (c) =>
            c.domain === domain &&
            (!preferredDiff || c.difficulty === preferredDiff) &&
            (!preferredDelivery || c.deliveryApproach === preferredDelivery)
        ) ||
        tryPick(
          (c) =>
            c.domain === domain &&
            (!preferredDiff || c.difficulty === preferredDiff)
        ) ||
        tryPick((c) => c.domain === domain);

      if (!ok) break;
    }
  }

  // Pass 2: fill remaining slots (relax soft caps if necessary)
  while (selected.length < blueprint.totalQuestions) {
    const preferredDiff = Object.entries(diffNeed).find(
      ([d, n]) => (diffHave[d] ?? 0) < n
    )?.[0];
    const preferredDelivery = Object.entries(deliveryNeed).find(
      ([d, n]) => (deliveryHave[d] ?? 0) < n
    )?.[0];

    const ok =
      tryPick(
        (c) =>
          (!preferredDiff || c.difficulty === preferredDiff) &&
          (!preferredDelivery || c.deliveryApproach === preferredDelivery)
      ) ||
      tryPick((c) => !preferredDiff || c.difficulty === preferredDiff) ||
      tryPick(() => true) ||
      tryPick(() => true, true);

    if (!ok) {
      throw new Error(
        `INSUFFICIENT_QUESTION_BANK: could not fill ${blueprint.totalQuestions} after soft constraints (got ${selected.length})`
      );
    }
  }

  return seededShuffle(selected, rng);
}

/**
 * Prefer questions not seen recently.
 * Rule: exclude IDs from recentSessions unless bank would fall below needed count.
 */
export function avoidRecentQuestions(
  allIds: string[],
  recentIds: string[],
  needed: number
): { available: string[]; excluded: string[]; fellBack: boolean } {
  const recent = new Set(recentIds);
  const fresh = allIds.filter((id) => !recent.has(id));
  if (fresh.length >= needed) {
    return { available: fresh, excluded: [...recent], fellBack: false };
  }
  return {
    available: allIds,
    excluded: [],
    fellBack: true,
  };
}

export function summarizeBlueprintSelection(slots: BuiltExamSlot[]) {
  return {
    total: slots.length,
    byDomain: countBy(slots, (s) => s.domain),
    byDifficulty: countBy(slots, (s) => s.difficulty),
    byDelivery: countBy(slots, (s) => s.deliveryApproach),
    byScenario: countBy(slots, (s) => s.scenarioType),
  };
}
