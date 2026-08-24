/**
 * Corporate Finance lesson catalog — content expansion.
 * Assembles foundations / financing / valuation / investment-ma / advanced modules.
 * Educational only — not a professional valuation or investment advice.
 */

import type { CompactLesson } from "./compact";
import { applyCfQualityUpgrades } from "./cf-quality-upgrades";
import { CF_FOUNDATIONS_LESSONS } from "./cf-foundations";
import { CF_FINANCING_LESSONS } from "./cf-financing";
import { CF_VALUATION_LESSONS } from "./cf-valuation";
import { CF_INVESTMENT_MA_LESSONS } from "./cf-investment-ma";
import { CF_ADVANCED_LESSONS } from "./cf-advanced";

export const CF_MODULES = [
  {
    slug: "cf-foundations",
    titleFr: "Fondements de la finance d'entreprise",
    titleEn: "Corporate Finance Foundations",
    category: "FINANCIAL_STATEMENTS",
    sortOrder: 0,
  },
  {
    slug: "financing-capital-structure",
    titleFr: "Financement et structure du capital",
    titleEn: "Financing & Capital Structure",
    category: "CAPITAL_STRUCTURE",
    sortOrder: 1,
  },
  {
    slug: "valuation",
    titleFr: "Valorisation",
    titleEn: "Valuation",
    category: "VALUATION",
    sortOrder: 2,
  },
  {
    slug: "investment-ma",
    titleFr: "Décisions d'investissement et M&A",
    titleEn: "Investment Decisions & M&A",
    category: "MA_BASICS",
    sortOrder: 3,
  },
  {
    slug: "advanced-cf",
    titleFr: "Finance d'entreprise avancée — bases",
    titleEn: "Advanced Corporate Finance Basics",
    category: "PERFORMANCE_ANALYTICS",
    sortOrder: 4,
  },
] as const;

export const CF_LESSONS: CompactLesson[] = applyCfQualityUpgrades([
  ...CF_FOUNDATIONS_LESSONS,
  ...CF_FINANCING_LESSONS,
  ...CF_VALUATION_LESSONS,
  ...CF_INVESTMENT_MA_LESSONS,
  ...CF_ADVANCED_LESSONS,
]);
