/**
 * PMP study navigation helpers (Phase B.3.2).
 * Composes ECO taxonomy + lessonEcoMap + distinctions + thin catalog.
 * Does not duplicate pedagogy or exam content.
 */

import { buildLessonPath } from "@/modules/learning-engine/next-lesson-service";
import {
  ECO_TASKS,
  getEcoTaskById,
  listEcoTasksByDomain,
} from "./eco-taxonomy";
import {
  distinctionsForEcoTask,
  type CriticalDistinctionCard,
} from "./critical-distinctions";
import {
  entriesForEcoTask,
  type LessonEcoCoverageType,
} from "./lesson-eco-map";
import {
  getPmpLessonCatalogEntry,
  PMP_ACADEMY_SLUG,
  PMP_COURSE_SLUG,
} from "./pmp-lesson-catalog";
import type { EcoDomainStableId, EcoTaskRecord, EcoTaskStableId } from "./types";

export const ECO_DOMAINS: readonly {
  id: EcoDomainStableId;
  titleFr: string;
  titleEn: string;
  taskCount: number;
  weight: number;
}[] = [
  {
    id: "PEOPLE",
    titleFr: "People",
    titleEn: "People",
    taskCount: 8,
    weight: 0.33,
  },
  {
    id: "PROCESS",
    titleFr: "Process",
    titleEn: "Process",
    taskCount: 10,
    weight: 0.41,
  },
  {
    id: "BUSINESS",
    titleFr: "Environnement business",
    titleEn: "Business Environment",
    taskCount: 8,
    weight: 0.26,
  },
] as const;

export function isEcoDomainId(value: string): value is EcoDomainStableId {
  return value === "PEOPLE" || value === "PROCESS" || value === "BUSINESS";
}

export function isEcoTaskId(value: string): value is EcoTaskStableId {
  return ECO_TASKS.some((t) => t.id === value);
}

export function getEcoDomainMeta(domainId: EcoDomainStableId) {
  return ECO_DOMAINS.find((d) => d.id === domainId)!;
}

export function buildPmpLessonHref(lessonSlug: string): string | null {
  const entry = getPmpLessonCatalogEntry(lessonSlug);
  if (!entry) return null;
  return buildLessonPath({
    academySlug: PMP_ACADEMY_SLUG,
    courseSlug: PMP_COURSE_SLUG,
    moduleSlug: entry.moduleSlug,
    lessonSlug: entry.slug,
  });
}

export type StudyLessonRef = {
  slug: string;
  titleFr: string;
  titleEn: string;
  moduleSlug: string;
  coverageType: LessonEcoCoverageType;
  coverageStrength: number;
  href: string;
  hasPedagogyPack: boolean;
};

export type StudyTaskView = {
  task: EcoTaskRecord;
  domain: (typeof ECO_DOMAINS)[number];
  purposeFr: string;
  purposeEn: string;
  lessons: StudyLessonRef[];
  distinctions: CriticalDistinctionCard[];
  primaryHref: string | null;
};

function purposeFromTask(task: EcoTaskRecord): { fr: string; en: string } {
  const keywords = task.focusKeywords.join(", ");
  return {
    fr: `${task.titleFr}. Focus : ${keywords}.`,
    en: `${task.titleEn}. Focus: ${keywords}.`,
  };
}

export function buildStudyTaskView(taskId: EcoTaskStableId): StudyTaskView {
  const task = getEcoTaskById(taskId);
  const domain = getEcoDomainMeta(task.domainId);
  const purpose = purposeFromTask(task);
  const entries = entriesForEcoTask(taskId).slice().sort((a, b) => {
    const order: Record<LessonEcoCoverageType, number> = {
      PRIMARY: 0,
      SECONDARY: 1,
      SUPPORTING: 2,
    };
    const byType = order[a.coverageType] - order[b.coverageType];
    if (byType !== 0) return byType;
    return b.coverageStrength - a.coverageStrength;
  });

  const lessons: StudyLessonRef[] = [];
  for (const entry of entries) {
    const catalog = getPmpLessonCatalogEntry(entry.lessonId);
    const href = buildPmpLessonHref(entry.lessonId);
    if (!catalog || !href) continue;
    lessons.push({
      slug: catalog.slug,
      titleFr: catalog.titleFr,
      titleEn: catalog.titleEn,
      moduleSlug: catalog.moduleSlug,
      coverageType: entry.coverageType,
      coverageStrength: entry.coverageStrength,
      href,
      hasPedagogyPack: false, // filled by caller via getLessonPedagogy to avoid cycles in tests if needed
    });
  }

  return {
    task,
    domain,
    purposeFr: purpose.fr,
    purposeEn: purpose.en,
    lessons,
    distinctions: distinctionsForEcoTask(taskId),
    primaryHref: lessons.find((l) => l.coverageType === "PRIMARY")?.href ?? lessons[0]?.href ?? null,
  };
}

export function listTasksForDomain(domainId: EcoDomainStableId): EcoTaskRecord[] {
  return listEcoTasksByDomain(domainId);
}

export function enrichLessonPedagogyFlags(
  lessons: StudyLessonRef[],
  hasPack: (slug: string) => boolean
): StudyLessonRef[] {
  return lessons.map((l) => ({ ...l, hasPedagogyPack: hasPack(l.slug) }));
}
