/**
 * Corporate Finance quality upgrades — enriched situational lessons (FR/EN).
 * Replaces selected slugs with richer FCFA/EUR scenarios and decision questions.
 * Educational only — not professional valuation or investment advice.
 */

import type { CompactLesson } from "./compact";
import { CF_FOUNDATIONS_QUALITY_UPGRADES } from "./cf-quality-upgrades-foundations";
import { CF_VALUATION_QUALITY_UPGRADES } from "./cf-quality-upgrades-valuation";
import { CF_REST_QUALITY_UPGRADES } from "./cf-quality-upgrades-rest";

const CF_QUALITY_UPGRADES: CompactLesson[] = [
  ...CF_FOUNDATIONS_QUALITY_UPGRADES,
  ...CF_VALUATION_QUALITY_UPGRADES,
  ...CF_REST_QUALITY_UPGRADES,
];

/** Replace lessons by slug when a quality upgrade exists. */
export function applyCfQualityUpgrades(lessons: CompactLesson[]): CompactLesson[] {
  const bySlug = new Map(CF_QUALITY_UPGRADES.map((lesson) => [lesson.slug, lesson]));
  return lessons.map((lesson) => bySlug.get(lesson.slug) ?? lesson);
}

export { CF_QUALITY_UPGRADES };
