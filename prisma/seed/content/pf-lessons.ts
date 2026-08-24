/**
 * Personal Finance lesson catalog — content expansion.
 * Assembles foundations / debt / investing / wealth modules.
 * Educational only — not personalized financial advice.
 */

import type { CompactLesson } from "./compact";
import { PF_FOUNDATIONS_LESSONS } from "./pf-foundations";
import { PF_DEBT_LESSONS } from "./pf-debt";
import { PF_INVESTING_LESSONS } from "./pf-investing";
import { PF_WEALTH_LESSONS } from "./pf-wealth";

export const PF_MODULES = [
  {
    slug: "foundations",
    titleFr: "Fondamentaux",
    titleEn: "Foundations",
    category: "FOUNDATIONS",
    sortOrder: 0,
  },
  {
    slug: "debt",
    titleFr: "Dette et remboursement",
    titleEn: "Debt & Repayment",
    category: "DEBT",
    sortOrder: 1,
  },
  {
    slug: "saving-investing",
    titleFr: "Épargne et investissement",
    titleEn: "Saving & Investing",
    category: "INVESTING",
    sortOrder: 2,
  },
  {
    slug: "wealth-building",
    titleFr: "Construction de patrimoine",
    titleEn: "Wealth Building",
    category: "WEALTH_BUILDING",
    sortOrder: 3,
  },
] as const;

export const PF_LESSONS: CompactLesson[] = [
  ...PF_FOUNDATIONS_LESSONS,
  ...PF_DEBT_LESSONS,
  ...PF_INVESTING_LESSONS,
  ...PF_WEALTH_LESSONS,
];
