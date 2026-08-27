/**
 * PMP quality upgrades — enriched situational lessons (FR/EN).
 * Replaces selected slugs with richer PLA decision scenarios.
 * ORIGINAL pedagogical content — NOT PMI / PMBOK reproduction.
 */

import type { PmpLesson } from "./pmp-types";
import {
  PMP_PRIORITY_QUALITY_UPGRADES,
  PMP_PRIORITY_UPGRADE_SLUGS,
} from "./pmp-quality-upgrades-priority";
import {
  PMP_ROI_QUALITY_UPGRADES,
  PMP_ROI_UPGRADE_SLUGS,
} from "./pmp-quality-upgrades-roi";
import {
  PMP_POLISH_QUALITY_UPGRADES,
  PMP_POLISH_UPGRADE_SLUGS,
} from "./pmp-quality-upgrades-polish";
import {
  PMP_B3_QUALITY_UPGRADES,
  PMP_B3_UPGRADE_SLUGS,
} from "./pmp-quality-upgrades-b3";

const PMP_QUALITY_UPGRADES: PmpLesson[] = [
  ...PMP_PRIORITY_QUALITY_UPGRADES,
  ...PMP_ROI_QUALITY_UPGRADES,
  ...PMP_POLISH_QUALITY_UPGRADES,
  ...PMP_B3_QUALITY_UPGRADES,
];

export const PMP_QUALITY_UPGRADE_SLUGS = [
  ...PMP_PRIORITY_UPGRADE_SLUGS,
  ...PMP_ROI_UPGRADE_SLUGS,
  ...PMP_POLISH_UPGRADE_SLUGS,
  ...PMP_B3_UPGRADE_SLUGS,
] as const;

/** Replace lessons by slug when a quality upgrade exists. Later entries win. */
export function applyPmpQualityUpgrades(lessons: PmpLesson[]): PmpLesson[] {
  const bySlug = new Map(PMP_QUALITY_UPGRADES.map((lesson) => [lesson.slug, lesson]));
  return lessons.map((lesson) => bySlug.get(lesson.slug) ?? lesson);
}

export {
  PMP_QUALITY_UPGRADES,
  PMP_PRIORITY_UPGRADE_SLUGS,
  PMP_ROI_UPGRADE_SLUGS,
  PMP_POLISH_UPGRADE_SLUGS,
  PMP_B3_UPGRADE_SLUGS,
};
