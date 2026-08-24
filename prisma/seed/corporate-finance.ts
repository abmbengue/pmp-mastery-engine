import type { PrismaClient } from "../../src/generated/prisma/client";
import { seedLessonWithContent, upsertSkill, type LessonSeedConfig } from "./helpers";

const FOUNDATIONS_LESSONS: LessonSeedConfig[] = [
  {
    slug: "financial-statements-overview",
    titleFr: "Vue d'ensemble des états financiers",
    titleEn: "Financial Statements Overview",
    descriptionFr: "Comprenez le bilan, le compte de résultat et le tableau de flux de trésorerie.",
    descriptionEn: "Understand the balance sheet, income statement, and cash flow statement.",
    sortOrder: 0,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    learnMinutes: 3,
    practiceMinutes: 2,
    testMinutes: 2,
    reviewMinutes: 1,
    masterMinutes: 1,
    isShort: true,
    shortTopic: "financial-statements",
    shortDurationSeconds: 160,
    textBodyFr:
      "Les trois états financiers principaux sont le bilan (situation à une date), le compte de résultat (performance sur une période) et le tableau de flux de trésorerie (mouvements de cash).",
    textBodyEn:
      "The three main financial statements are the balance sheet (position at a date), the income statement (performance over a period), and the cash flow statement (cash movements).",
    videoTitleFr: "Les états financiers en 3 minutes",
    videoTitleEn: "Financial Statements in 3 Minutes",
    flashcardFrontFr: "Bilan",
    flashcardFrontEn: "Balance sheet",
    flashcardBackFr: "Actifs = Passifs + Capitaux propres à une date donnée.",
    flashcardBackEn: "Assets = Liabilities + Equity at a point in time.",
    exercisePromptFr: "Nommez les trois états financiers principaux.",
    exercisePromptEn: "Name the three main financial statements.",
    question: {
      type: "SINGLE_CHOICE",
      promptFr: "Quel état montre la performance sur une période ?",
      promptEn: "Which statement shows performance over a period?",
      explanationCorrectFr: "Le compte de résultat mesure le résultat sur une période.",
      explanationCorrectEn: "The income statement measures results over a period.",
      difficulty: 1,
      options: [
        { labelFr: "Le bilan", labelEn: "Balance sheet", isCorrect: false },
        { labelFr: "Le compte de résultat", labelEn: "Income statement", isCorrect: true },
        { labelFr: "Le budget", labelEn: "Budget", isCorrect: false },
      ],
    },
  },
  {
    slug: "revenue-ebitda-ebit",
    titleFr: "Revenu, EBITDA et EBIT",
    titleEn: "Revenue, EBITDA and EBIT",
    descriptionFr: "Distinguez revenu, EBITDA et EBIT dans l'analyse de performance.",
    descriptionEn: "Distinguish revenue, EBITDA, and EBIT in performance analysis.",
    sortOrder: 1,
    estimatedMinutes: 10,
    difficulty: "BEGINNER",
    learnMinutes: 3,
    practiceMinutes: 3,
    testMinutes: 2,
    reviewMinutes: 1,
    masterMinutes: 1,
    textBodyFr:
      "Le revenu est le chiffre d'affaires. L'EBITDA approxime le résultat opérationnel avant intérêts, impôts, dépréciation et amortissement. L'EBIT est le résultat opérationnel après D&A.",
    textBodyEn:
      "Revenue is top-line sales. EBITDA approximates operating performance before interest, taxes, depreciation, and amortization. EBIT is operating profit after D&A.",
    videoTitleFr: "Revenu vs EBITDA vs EBIT",
    videoTitleEn: "Revenue vs EBITDA vs EBIT",
    flashcardFrontFr: "EBITDA",
    flashcardFrontEn: "EBITDA",
    flashcardBackFr: "Earnings Before Interest, Taxes, Depreciation and Amortization.",
    flashcardBackEn: "Earnings Before Interest, Taxes, Depreciation and Amortization.",
    exercisePromptFr: "Classez revenu, EBITDA et EBIT du plus haut au plus bas dans une structure typique.",
    exercisePromptEn: "Rank revenue, EBITDA, and EBIT from highest to lowest in a typical structure.",
    question: {
      type: "TRUE_FALSE",
      promptFr: "L'EBIT est calculé après dépréciation et amortissement.",
      promptEn: "EBIT is calculated after depreciation and amortization.",
      explanationCorrectFr: "Vrai. L'EBIT vient après D&A, contrairement à l'EBITDA.",
      explanationCorrectEn: "True. EBIT comes after D&A, unlike EBITDA.",
      difficulty: 1,
      options: [
        { labelFr: "Vrai", labelEn: "True", isCorrect: true },
        { labelFr: "Faux", labelEn: "False", isCorrect: false },
      ],
    },
  },
  {
    slug: "cash-flow-basics",
    titleFr: "Bases du cash flow",
    titleEn: "Cash Flow Basics",
    descriptionFr: "Comprenez les flux d'exploitation, d'investissement et de financement.",
    descriptionEn: "Understand operating, investing, and financing cash flows.",
    sortOrder: 2,
    estimatedMinutes: 8,
    difficulty: "INTERMEDIATE",
    learnMinutes: 3,
    practiceMinutes: 2,
    testMinutes: 2,
    reviewMinutes: 1,
    masterMinutes: 1,
    textBodyFr:
      "Le cash flow d'exploitation reflète l'activité courante. L'investissement couvre CAPEX et acquisitions. Le financement couvre dettes, dividendes et rachats d'actions.",
    textBodyEn:
      "Operating cash flow reflects core activity. Investing covers CAPEX and acquisitions. Financing covers debt, dividends, and share buybacks.",
    videoTitleFr: "Les trois flux de trésorerie",
    videoTitleEn: "The Three Cash Flows",
    flashcardFrontFr: "CAPEX",
    flashcardFrontEn: "CAPEX",
    flashcardBackFr: "Dépenses d'investissement en immobilisations.",
    flashcardBackEn: "Capital expenditures on fixed assets.",
    exercisePromptFr: "Classez ces flux : paiement fournisseurs, achat d'usine, émission d'obligations.",
    exercisePromptEn: "Classify these flows: supplier payment, plant purchase, bond issuance.",
    question: {
      type: "SINGLE_CHOICE",
      promptFr: "L'achat d'une usine apparaît typiquement dans quel flux ?",
      promptEn: "Buying a plant typically appears in which cash flow?",
      explanationCorrectFr: "L'achat d'actifs productifs est un flux d'investissement.",
      explanationCorrectEn: "Buying productive assets is an investing cash flow.",
      difficulty: 2,
      options: [
        { labelFr: "Exploitation", labelEn: "Operating", isCorrect: false },
        { labelFr: "Investissement", labelEn: "Investing", isCorrect: true },
        { labelFr: "Financement", labelEn: "Financing", isCorrect: false },
      ],
    },
  },
];

const VALUATION_LESSONS: LessonSeedConfig[] = [
  {
    slug: "enterprise-vs-equity-value",
    titleFr: "Enterprise Value vs Equity Value",
    titleEn: "Enterprise Value vs Equity Value",
    descriptionFr: "Distinguez la valeur d'entreprise et la valeur des capitaux propres.",
    descriptionEn: "Distinguish enterprise value and equity value.",
    sortOrder: 0,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    learnMinutes: 3,
    practiceMinutes: 3,
    testMinutes: 2,
    reviewMinutes: 1,
    masterMinutes: 1,
    textBodyFr:
      "L'Enterprise Value (EV) représente la valeur de l'activité opérationnelle pour tous les fournisseurs de capital. L'Equity Value est la valeur pour les actionnaires uniquement.",
    textBodyEn:
      "Enterprise Value (EV) represents the value of operating business for all capital providers. Equity Value is value for shareholders only.",
    videoTitleFr: "EV et Equity Value",
    videoTitleEn: "EV and Equity Value",
    flashcardFrontFr: "Enterprise Value",
    flashcardFrontEn: "Enterprise Value",
    flashcardBackFr: "Valeur de l'entreprise pour dette + equity (approche opérationnelle).",
    flashcardBackEn: "Firm value for debt + equity (operating approach).",
    exercisePromptFr: "Expliquez en une phrase la différence entre EV et Equity Value.",
    exercisePromptEn: "Explain in one sentence the difference between EV and Equity Value.",
    question: {
      type: "SINGLE_CHOICE",
      promptFr: "Quelle mesure inclut typiquement la dette nette ?",
      promptEn: "Which measure typically includes net debt?",
      explanationCorrectFr: "L'EV s'obtient souvent via Equity Value + dette nette.",
      explanationCorrectEn: "EV is often Equity Value + net debt.",
      difficulty: 2,
      options: [
        { labelFr: "Equity Value seule", labelEn: "Equity Value alone", isCorrect: false },
        { labelFr: "Enterprise Value", labelEn: "Enterprise Value", isCorrect: true },
        { labelFr: "Dividende", labelEn: "Dividend", isCorrect: false },
      ],
    },
  },
  {
    slug: "multiples-and-dcf-basics",
    titleFr: "Multiples et bases du DCF",
    titleEn: "Multiples and DCF Basics",
    descriptionFr: "Introduction aux multiples de valorisation et à l'idée du DCF.",
    descriptionEn: "Introduction to valuation multiples and the DCF idea.",
    sortOrder: 1,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    learnMinutes: 3,
    practiceMinutes: 3,
    testMinutes: 2,
    reviewMinutes: 1,
    masterMinutes: 1,
    isShort: true,
    shortTopic: "valuation",
    shortDurationSeconds: 170,
    textBodyFr:
      "Les multiples (ex. EV/EBITDA) comparent des entreprises similaires. Le DCF actualise les flux futurs pour estimer une valeur intrinsèque. Les deux approches sont complémentaires.",
    textBodyEn:
      "Multiples (e.g. EV/EBITDA) compare similar companies. DCF discounts future cash flows to estimate intrinsic value. Both approaches are complementary.",
    videoTitleFr: "Multiples et DCF en bref",
    videoTitleEn: "Multiples and DCF in Brief",
    flashcardFrontFr: "DCF",
    flashcardFrontEn: "DCF",
    flashcardBackFr: "Discounted Cash Flow — actualisation des flux futurs.",
    flashcardBackEn: "Discounted Cash Flow — discounting future cash flows.",
    exercisePromptFr: "Citez un multiple EV et un multiple Equity.",
    exercisePromptEn: "Name one EV multiple and one Equity multiple.",
    question: {
      type: "TRUE_FALSE",
      promptFr: "Un DCF repose sur l'actualisation de flux de trésorerie futurs.",
      promptEn: "A DCF relies on discounting future cash flows.",
      explanationCorrectFr: "Vrai. C'est le principe central du DCF.",
      explanationCorrectEn: "True. That is the core DCF principle.",
      difficulty: 1,
      options: [
        { labelFr: "Vrai", labelEn: "True", isCorrect: true },
        { labelFr: "Faux", labelEn: "False", isCorrect: false },
      ],
    },
  },
];

export async function seedCorporateFinance(prisma: PrismaClient) {
  const academy = await prisma.academy.upsert({
    where: { slug: "corporate-finance" },
    create: {
      slug: "corporate-finance",
      titleFr: "Finance d'entreprise",
      titleEn: "Corporate Finance",
      descriptionFr:
        "Apprenez les bases de la finance d'entreprise : états financiers, valorisation et structure du capital.",
      descriptionEn:
        "Learn corporate finance basics: financial statements, valuation, and capital structure.",
      status: "ACTIVE",
      sortOrder: 2,
    },
    update: {
      status: "ACTIVE",
      titleFr: "Finance d'entreprise",
      titleEn: "Corporate Finance",
      descriptionFr:
        "Apprenez les bases de la finance d'entreprise : états financiers, valorisation et structure du capital.",
      descriptionEn:
        "Learn corporate finance basics: financial statements, valuation, and capital structure.",
      sortOrder: 2,
    },
  });

  const course = await prisma.course.upsert({
    where: { academyId_slug: { academyId: academy.id, slug: "cf-essentials" } },
    create: {
      academyId: academy.id,
      slug: "cf-essentials",
      titleFr: "Essentiels de la finance d'entreprise",
      titleEn: "Corporate Finance Essentials",
      descriptionFr: "Parcours introductif : fondations financières et bases de valorisation.",
      descriptionEn: "Introductory path: financial foundations and valuation basics.",
      sortOrder: 0,
      estimatedMinutes: 46,
    },
    update: {
      titleFr: "Essentiels de la finance d'entreprise",
      titleEn: "Corporate Finance Essentials",
      descriptionFr: "Parcours introductif : fondations financières et bases de valorisation.",
      descriptionEn: "Introductory path: financial foundations and valuation basics.",
      estimatedMinutes: 46,
    },
  });

  const skillFoundations = await upsertSkill(prisma, {
    slug: "cf-foundations",
    titleFr: "Fondamentaux finance d'entreprise",
    titleEn: "Corporate finance foundations",
  });

  const skillValuation = await upsertSkill(prisma, {
    slug: "cf-valuation",
    titleFr: "Bases de valorisation",
    titleEn: "Valuation basics",
  });

  const skillCashFlow = await upsertSkill(prisma, {
    slug: "cf-cash-flow",
    titleFr: "Cash flow",
    titleEn: "Cash flow",
  });

  const module1 = await prisma.module.create({
    data: {
      courseId: course.id,
      slug: "foundations",
      titleFr: "Fondamentaux",
      titleEn: "Foundations",
      descriptionFr: "États financiers, revenu, EBITDA, EBIT et cash flow.",
      descriptionEn: "Financial statements, revenue, EBITDA, EBIT, and cash flow.",
      category: "FOUNDATIONS",
      sortOrder: 0,
      estimatedMinutes: 26,
    },
  });

  for (const lessonConfig of FOUNDATIONS_LESSONS) {
    const extra =
      lessonConfig.slug === "cash-flow-basics" ? [skillCashFlow.id] : [];
    await seedLessonWithContent(prisma, module1.id, skillFoundations.id, lessonConfig, {
      academySlug: "corporate-finance",
      extraSkillIds: extra,
    });
  }

  const module2 = await prisma.module.create({
    data: {
      courseId: course.id,
      slug: "valuation",
      titleFr: "Valorisation",
      titleEn: "Valuation",
      descriptionFr: "Enterprise value, equity value, multiples et bases du DCF.",
      descriptionEn: "Enterprise value, equity value, multiples, and DCF basics.",
      category: "VALUATION",
      sortOrder: 1,
      estimatedMinutes: 20,
    },
  });

  for (const lessonConfig of VALUATION_LESSONS) {
    await seedLessonWithContent(prisma, module2.id, skillValuation.id, lessonConfig, {
      academySlug: "corporate-finance",
    });
  }

  return { academy, course };
}
