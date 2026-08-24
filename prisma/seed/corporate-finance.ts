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
  {
    slug: "working-capital-and-fcf",
    titleFr: "Besoin en fonds de roulement et Free Cash Flow",
    titleEn: "Working capital and Free Cash Flow",
    descriptionFr: "Relier BFR, CAPEX et cash disponible pour les investisseurs.",
    descriptionEn: "Connect working capital, CAPEX, and cash available to investors.",
    sortOrder: 3,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    learnMinutes: 3,
    practiceMinutes: 2,
    testMinutes: 2,
    reviewMinutes: 1,
    masterMinutes: 1,
    isShort: true,
    shortTopic: "free-cash-flow",
    shortDurationSeconds: 165,
    textBodyFr:
      "Le besoin en fonds de roulement (BFR) mesure le cash immobilisé dans le cycle d'exploitation (stocks, créances, dettes fournisseurs). Le Free Cash Flow (FCF) approxime le cash après investissements nécessaires : souvent CFO − CAPEX (simplifié pédagogiquement). Une hausse du BFR consomme du cash même si le résultat comptable est positif.",
    textBodyEn:
      "Working capital measures cash tied in the operating cycle (inventory, receivables, payables). Free Cash Flow (FCF) approximates cash after required investment: often CFO − CAPEX (pedagogical simplification). Rising working capital consumes cash even when accounting profit looks strong.",
    videoTitleFr: "BFR et FCF",
    videoTitleEn: "Working capital and FCF",
    flashcardFrontFr: "Free Cash Flow (simplifié)",
    flashcardFrontEn: "Free Cash Flow (simplified)",
    flashcardBackFr: "Cash d'exploitation moins CAPEX nécessaires.",
    flashcardBackEn: "Operating cash minus required CAPEX.",
    exercisePromptFr: "Expliquez pourquoi une hausse des stocks réduit le FCF.",
    exercisePromptEn: "Explain why rising inventory reduces FCF.",
    question: {
      type: "TRUE_FALSE",
      promptFr: "Une hausse du besoin en fonds de roulement consomme généralement du cash.",
      promptEn: "An increase in working capital typically consumes cash.",
      explanationCorrectFr: "Vrai. Plus de cash est immobilisé dans le cycle d'exploitation.",
      explanationCorrectEn: "True. More cash is tied up in the operating cycle.",
      difficulty: 2,
      options: [
        { labelFr: "Vrai", labelEn: "True", isCorrect: true },
        { labelFr: "Faux", labelEn: "False", isCorrect: false },
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
      "Les multiples (ex. EV/EBITDA) comparent des entreprises similaires. Le DCF actualise les flux futurs pour estimer une valeur intrinsèque. Les deux approches sont complémentaires. Utilisez le simulateur pédagogique pour observer l'impact du taux d'actualisation et de la croissance — sans confondre avec une valorisation professionnelle.",
    textBodyEn:
      "Multiples (e.g. EV/EBITDA) compare similar companies. DCF discounts future cash flows to estimate intrinsic value. Both approaches are complementary. Use the pedagogical simulator to observe discount-rate and growth effects — without confusing this with a professional valuation.",
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
  {
    slug: "capital-structure-and-wacc",
    titleFr: "Structure du capital et WACC",
    titleEn: "Capital structure and WACC",
    descriptionFr: "Dette, equity et coût moyen pondéré du capital (pédagogique).",
    descriptionEn: "Debt, equity, and weighted average cost of capital (educational).",
    sortOrder: 2,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    learnMinutes: 3,
    practiceMinutes: 3,
    testMinutes: 2,
    reviewMinutes: 1,
    masterMinutes: 1,
    textBodyFr:
      "La structure du capital décrit le mix dette / equity. Le WACC (Weighted Average Cost of Capital) est un taux d'actualisation pédagogique qui pondère le coût de la dette et le coût des fonds propres. Plus le risque perçu monte, plus le coût du capital tend à monter — ce qui baisse la valeur actualisée dans un DCF simplifié.",
    textBodyEn:
      "Capital structure describes the debt / equity mix. WACC (Weighted Average Cost of Capital) is an educational discount rate weighting debt cost and equity cost. As perceived risk rises, the cost of capital tends to rise — lowering present value in a simplified DCF.",
    videoTitleFr: "WACC en bref",
    videoTitleEn: "WACC in brief",
    flashcardFrontFr: "WACC",
    flashcardFrontEn: "WACC",
    flashcardBackFr: "Coût moyen pondéré du capital (dette + equity).",
    flashcardBackEn: "Weighted average cost of capital (debt + equity).",
    exercisePromptFr: "Citez deux composantes du WACC.",
    exercisePromptEn: "Name two components of WACC.",
    question: {
      type: "SINGLE_CHOICE",
      promptFr: "Le WACC sert typiquement à…",
      promptEn: "WACC is typically used to…",
      explanationCorrectFr: "Actualiser des flux dans une approche DCF pédagogique.",
      explanationCorrectEn: "Discount cash flows in an educational DCF approach.",
      difficulty: 2,
      options: [
        { labelFr: "Remplacer le bilan", labelEn: "Replace the balance sheet", isCorrect: false },
        { labelFr: "Actualiser des flux (approche DCF)", labelEn: "Discount cash flows (DCF approach)", isCorrect: true },
        { labelFr: "Mesurer uniquement le dividende", labelEn: "Measure dividends only", isCorrect: false },
      ],
    },
  },
  {
    slug: "trading-vs-transaction-multiples",
    titleFr: "Multiples de trading vs transaction",
    titleEn: "Trading vs transaction multiples",
    descriptionFr: "Comparer cotation et transactions M&A de façon pédagogique.",
    descriptionEn: "Compare listed comps and M&A deals in an educational way.",
    sortOrder: 3,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    learnMinutes: 3,
    practiceMinutes: 2,
    testMinutes: 2,
    reviewMinutes: 1,
    masterMinutes: 1,
    textBodyFr:
      "Les multiples de trading (sociétés cotées comparables) reflètent le marché public. Les multiples de transaction (deals M&A) incluent souvent une prime de contrôle. Les deux sont des outils de triangulation — jamais une vérité unique. Vérifiez toujours la cohérence EV vs Equity et la qualité des pairs.",
    textBodyEn:
      "Trading multiples (listed comps) reflect the public market. Transaction multiples (M&A deals) often include a control premium. Both are triangulation tools — never a single truth. Always check EV vs Equity consistency and peer quality.",
    videoTitleFr: "Trading vs transaction",
    videoTitleEn: "Trading vs transaction",
    flashcardFrontFr: "Prime de contrôle",
    flashcardFrontEn: "Control premium",
    flashcardBackFr: "Surcote fréquente dans les multiples de transaction M&A.",
    flashcardBackEn: "Uplift often seen in M&A transaction multiples.",
    exercisePromptFr: "Donnez un exemple de multiple trading et un de transaction.",
    exercisePromptEn: "Give one trading multiple example and one transaction example.",
    question: {
      type: "TRUE_FALSE",
      promptFr: "Les multiples de transaction incluent souvent une prime de contrôle.",
      promptEn: "Transaction multiples often include a control premium.",
      explanationCorrectFr: "Vrai. Les deals M&A paient souvent pour le contrôle.",
      explanationCorrectEn: "True. M&A deals often pay for control.",
      difficulty: 2,
      options: [
        { labelFr: "Vrai", labelEn: "True", isCorrect: true },
        { labelFr: "Faux", labelEn: "False", isCorrect: false },
      ],
    },
  },
  {
    slug: "accretion-dilution-basics",
    titleFr: "Bases accretion / dilution",
    titleEn: "Accretion / dilution basics",
    descriptionFr: "Comprendre l'effet d'une acquisition sur le BPA (pédagogique).",
    descriptionEn: "Understand an acquisition’s effect on EPS (educational).",
    sortOrder: 4,
    estimatedMinutes: 9,
    difficulty: "ADVANCED",
    learnMinutes: 3,
    practiceMinutes: 3,
    testMinutes: 1,
    reviewMinutes: 1,
    masterMinutes: 1,
    textBodyFr:
      "L'accrétion / dilution compare le BPA (bénéfice par action) pro forma après acquisition au BPA standalone. Une acquisition est dite accretive si le BPA augmente, dilutive s'il baisse. C'est un test pédagogique de structure (cash / dette / actions), pas une garantie de création de valeur économique.",
    textBodyEn:
      "Accretion / dilution compares pro forma EPS after an acquisition to standalone EPS. A deal is called accretive if EPS rises, dilutive if it falls. It is an educational structure test (cash / debt / shares), not a guarantee of economic value creation.",
    videoTitleFr: "Accretion / dilution",
    videoTitleEn: "Accretion / dilution",
    flashcardFrontFr: "Accretive",
    flashcardFrontEn: "Accretive",
    flashcardBackFr: "Le BPA pro forma augmente après l'opération.",
    flashcardBackEn: "Pro forma EPS increases after the deal.",
    exercisePromptFr: "Citez un facteur qui peut rendre une acquisition dilutive.",
    exercisePromptEn: "Name one factor that can make an acquisition dilutive.",
    question: {
      type: "SINGLE_CHOICE",
      promptFr: "Une opération dilutive signifie typiquement que…",
      promptEn: "A dilutive deal typically means that…",
      explanationCorrectFr: "Le BPA pro forma diminue.",
      explanationCorrectEn: "Pro forma EPS decreases.",
      difficulty: 2,
      options: [
        { labelFr: "Le BPA pro forma diminue", labelEn: "Pro forma EPS decreases", isCorrect: true },
        { labelFr: "Le cash disparaît toujours", labelEn: "Cash always disappears", isCorrect: false },
        { labelFr: "Le WACC devient nul", labelEn: "WACC becomes zero", isCorrect: false },
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
      estimatedMinutes: 74,
    },
    update: {
      titleFr: "Essentiels de la finance d'entreprise",
      titleEn: "Corporate Finance Essentials",
      descriptionFr: "Parcours introductif : fondations financières et bases de valorisation.",
      descriptionEn: "Introductory path: financial foundations and valuation basics.",
      estimatedMinutes: 74,
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

  const skillCapital = await upsertSkill(prisma, {
    slug: "cf-capital-structure",
    titleFr: "Structure du capital",
    titleEn: "Capital structure",
  });

  const module1 = await prisma.module.create({
    data: {
      courseId: course.id,
      slug: "foundations",
      titleFr: "Fondamentaux",
      titleEn: "Foundations",
      descriptionFr: "États financiers, revenu, EBITDA, EBIT, cash flow, BFR et FCF.",
      descriptionEn: "Financial statements, revenue, EBITDA, EBIT, cash flow, WC and FCF.",
      category: "FOUNDATIONS",
      sortOrder: 0,
      estimatedMinutes: 35,
    },
  });

  for (const lessonConfig of FOUNDATIONS_LESSONS) {
    const extra =
      lessonConfig.slug === "cash-flow-basics" ||
      lessonConfig.slug === "working-capital-and-fcf"
        ? [skillCashFlow.id]
        : [];
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
      descriptionFr: "EV, equity, multiples, DCF, WACC et bases accretion/dilution.",
      descriptionEn: "EV, equity, multiples, DCF, WACC, and accretion/dilution basics.",
      category: "VALUATION",
      sortOrder: 1,
      estimatedMinutes: 39,
    },
  });

  for (const lessonConfig of VALUATION_LESSONS) {
    const extra =
      lessonConfig.slug === "capital-structure-and-wacc"
        ? [skillCapital.id]
        : [];
    await seedLessonWithContent(prisma, module2.id, skillValuation.id, lessonConfig, {
      academySlug: "corporate-finance",
      extraSkillIds: extra,
    });
  }

  return { academy, course };
}
