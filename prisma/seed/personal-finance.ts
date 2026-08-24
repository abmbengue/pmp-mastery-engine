import type { PrismaClient } from "../../src/generated/prisma/client";
import { seedLessonWithContent, upsertSkill, type LessonSeedConfig } from "./helpers";

const MODULE_1_LESSONS: LessonSeedConfig[] = [
  {
    slug: "understanding-income",
    titleFr: "Comprendre les revenus",
    titleEn: "Understanding Income",
    descriptionFr: "Découvrez les différentes sources de revenus et comment les identifier.",
    descriptionEn: "Discover different income sources and how to identify them.",
    sortOrder: 0,
    estimatedMinutes: 8,
    learnMinutes: 3,
    practiceMinutes: 2,
    testMinutes: 2,
    reviewMinutes: 1,
    masterMinutes: 1,
    textBodyFr:
      "Les revenus proviennent de sources actives (salaire, freelance) ou passives (loyers, dividendes). Comprendre la nature de vos revenus est la première étape d'une gestion financière saine.",
    textBodyEn:
      "Income comes from active sources (salary, freelance) or passive sources (rent, dividends). Understanding the nature of your income is the first step toward healthy financial management.",
    videoTitleFr: "Introduction aux revenus",
    videoTitleEn: "Introduction to Income",
    flashcardFrontFr: "Revenu actif",
    flashcardFrontEn: "Active income",
    flashcardBackFr: "Revenu gagné en échangeant temps ou compétences (ex. salaire).",
    flashcardBackEn: "Income earned by trading time or skills (e.g. salary).",
    exercisePromptFr: "Listez vos trois principales sources de revenus.",
    exercisePromptEn: "List your three main sources of income.",
    question: {
      type: "SINGLE_CHOICE",
      promptFr: "Lequel est un exemple de revenu passif ?",
      promptEn: "Which is an example of passive income?",
      explanationCorrectFr: "Les dividendes sont un revenu passif car ils ne nécessitent pas un échange direct de temps.",
      explanationCorrectEn: "Dividends are passive income because they do not require a direct exchange of time.",
      difficulty: 1,
      options: [
        { labelFr: "Salaire mensuel", labelEn: "Monthly salary", isCorrect: false, explanationWrongFr: "Le salaire est un revenu actif.", explanationWrongEn: "Salary is active income." },
        { labelFr: "Dividendes d'actions", labelEn: "Stock dividends", isCorrect: true },
        { labelFr: "Honoraires freelance", labelEn: "Freelance fees", isCorrect: false, explanationWrongFr: "Le freelance est un revenu actif.", explanationWrongEn: "Freelance work is active income." },
      ],
    },
  },
  {
    slug: "tracking-expenses",
    titleFr: "Suivre ses dépenses",
    titleEn: "Tracking Expenses",
    descriptionFr: "Apprenez à catégoriser et suivre vos dépenses quotidiennes.",
    descriptionEn: "Learn to categorize and track your daily expenses.",
    sortOrder: 1,
    estimatedMinutes: 8,
    learnMinutes: 3,
    practiceMinutes: 2,
    testMinutes: 2,
    reviewMinutes: 1,
    masterMinutes: 1,
    textBodyFr:
      "Le suivi des dépenses permet de visualiser où va votre argent. Catégorisez vos dépenses en fixes (loyer) et variables (loisirs) pour mieux contrôler votre budget.",
    textBodyEn:
      "Tracking expenses helps you see where your money goes. Categorize spending into fixed (rent) and variable (entertainment) to better control your budget.",
    videoTitleFr: "Suivi des dépenses",
    videoTitleEn: "Expense Tracking",
    flashcardFrontFr: "Dépense fixe",
    flashcardFrontEn: "Fixed expense",
    flashcardBackFr: "Dépense récurrente et prévisible (ex. loyer, assurance).",
    flashcardBackEn: "Recurring and predictable expense (e.g. rent, insurance).",
    exercisePromptFr: "Classez 5 dépenses récentes en fixes ou variables.",
    exercisePromptEn: "Classify 5 recent expenses as fixed or variable.",
    question: {
      type: "TRUE_FALSE",
      promptFr: "Les dépenses variables changent d'un mois à l'autre.",
      promptEn: "Variable expenses change from month to month.",
      explanationCorrectFr: "Vrai. Les dépenses variables fluctuent selon vos habitudes de consommation.",
      explanationCorrectEn: "True. Variable expenses fluctuate based on your consumption habits.",
      difficulty: 1,
      options: [
        { labelFr: "Vrai", labelEn: "True", isCorrect: true },
        { labelFr: "Faux", labelEn: "False", isCorrect: false, explanationWrongFr: "Les dépenses variables varient effectivement.", explanationWrongEn: "Variable expenses do vary." },
      ],
    },
  },
  {
    slug: "building-a-budget",
    titleFr: "Construire un budget",
    titleEn: "Building a Budget",
    descriptionFr: "Créez un budget simple basé sur vos revenus et dépenses.",
    descriptionEn: "Create a simple budget based on your income and expenses.",
    sortOrder: 2,
    estimatedMinutes: 10,
    learnMinutes: 3,
    practiceMinutes: 3,
    testMinutes: 2,
    reviewMinutes: 1,
    masterMinutes: 1,
    textBodyFr:
      "Un budget est un plan qui alloue vos revenus à différentes catégories. La règle 50/30/20 suggère 50 % pour les besoins, 30 % pour les envies et 20 % pour l'épargne.",
    textBodyEn:
      "A budget is a plan that allocates your income across categories. The 50/30/20 rule suggests 50% for needs, 30% for wants, and 20% for savings.",
    videoTitleFr: "Créer votre premier budget",
    videoTitleEn: "Creating Your First Budget",
    flashcardFrontFr: "Règle 50/30/20",
    flashcardFrontEn: "50/30/20 rule",
    flashcardBackFr: "50 % besoins, 30 % envies, 20 % épargne.",
    flashcardBackEn: "50% needs, 30% wants, 20% savings.",
    exercisePromptFr: "Appliquez la règle 50/30/20 à un revenu mensuel de 3 000 €.",
    exercisePromptEn: "Apply the 50/30/20 rule to a monthly income of €3,000.",
    question: {
      type: "SINGLE_CHOICE",
      promptFr: "Dans la règle 50/30/20, que représente le 20 % ?",
      promptEn: "In the 50/30/20 rule, what does the 20% represent?",
      explanationCorrectFr: "Les 20 % sont dédiés à l'épargne et au remboursement de dettes.",
      explanationCorrectEn: "The 20% is dedicated to savings and debt repayment.",
      difficulty: 2,
      options: [
        { labelFr: "Les besoins essentiels", labelEn: "Essential needs", isCorrect: false },
        { labelFr: "Les envies et loisirs", labelEn: "Wants and leisure", isCorrect: false },
        { labelFr: "L'épargne et remboursement de dettes", labelEn: "Savings and debt repayment", isCorrect: true },
      ],
    },
  },
];

const MODULE_2_LESSONS: LessonSeedConfig[] = [
  {
    slug: "why-save",
    titleFr: "Pourquoi épargner",
    titleEn: "Why Save",
    descriptionFr: "Comprenez l'importance de l'épargne et les fonds d'urgence.",
    descriptionEn: "Understand the importance of saving and emergency funds.",
    sortOrder: 0,
    estimatedMinutes: 8,
    learnMinutes: 3,
    practiceMinutes: 2,
    testMinutes: 2,
    reviewMinutes: 1,
    masterMinutes: 1,
    textBodyFr:
      "L'épargne protège contre les imprévus et permet d'atteindre vos objectifs financiers. Un fonds d'urgence couvre 3 à 6 mois de dépenses essentielles.",
    textBodyEn:
      "Savings protect against unexpected events and help you reach financial goals. An emergency fund covers 3 to 6 months of essential expenses.",
    videoTitleFr: "L'importance de l'épargne",
    videoTitleEn: "The Importance of Saving",
    flashcardFrontFr: "Fonds d'urgence",
    flashcardFrontEn: "Emergency fund",
    flashcardBackFr: "Réserve couvrant 3 à 6 mois de dépenses essentielles.",
    flashcardBackEn: "Reserve covering 3 to 6 months of essential expenses.",
    exercisePromptFr: "Calculez le montant de votre fonds d'urgence idéal.",
    exercisePromptEn: "Calculate your ideal emergency fund amount.",
    question: {
      type: "SINGLE_CHOICE",
      promptFr: "Combien de mois de dépenses un fonds d'urgence devrait-il couvrir ?",
      promptEn: "How many months of expenses should an emergency fund cover?",
      explanationCorrectFr: "La recommandation standard est de 3 à 6 mois de dépenses essentielles.",
      explanationCorrectEn: "The standard recommendation is 3 to 6 months of essential expenses.",
      difficulty: 1,
      options: [
        { labelFr: "1 mois", labelEn: "1 month", isCorrect: false },
        { labelFr: "3 à 6 mois", labelEn: "3 to 6 months", isCorrect: true },
        { labelFr: "12 mois", labelEn: "12 months", isCorrect: false },
      ],
    },
  },
  {
    slug: "introduction-to-investing",
    titleFr: "Introduction à l'investissement",
    titleEn: "Introduction to Investing",
    descriptionFr: "Découvrez les bases de l'investissement et la diversification.",
    descriptionEn: "Discover investing basics and diversification.",
    sortOrder: 1,
    estimatedMinutes: 10,
    learnMinutes: 3,
    practiceMinutes: 3,
    testMinutes: 2,
    reviewMinutes: 1,
    masterMinutes: 1,
    textBodyFr:
      "Investir consiste à faire fructifier votre argent via des actifs (actions, obligations, immobilier). La diversification réduit le risque en répartissant les investissements.",
    textBodyEn:
      "Investing means growing your money through assets (stocks, bonds, real estate). Diversification reduces risk by spreading investments.",
    videoTitleFr: "Les bases de l'investissement",
    videoTitleEn: "Investing Basics",
    flashcardFrontFr: "Diversification",
    flashcardFrontEn: "Diversification",
    flashcardBackFr: "Répartir les investissements pour réduire le risque global.",
    flashcardBackEn: "Spreading investments to reduce overall risk.",
    exercisePromptFr: "Nommez trois classes d'actifs différentes.",
    exercisePromptEn: "Name three different asset classes.",
    question: {
      type: "MULTIPLE_CHOICE",
      promptFr: "Quels sont des exemples de diversification ? (Plusieurs réponses)",
      promptEn: "Which are examples of diversification? (Multiple answers)",
      explanationCorrectFr: "Investir dans différentes classes d'actifs et régions est de la diversification.",
      explanationCorrectEn: "Investing in different asset classes and regions is diversification.",
      difficulty: 2,
      options: [
        { labelFr: "Actions + obligations + immobilier", labelEn: "Stocks + bonds + real estate", isCorrect: true },
        { labelFr: "Tout investir dans une seule action", labelEn: "Investing everything in one stock", isCorrect: false },
        { labelFr: "Investir dans plusieurs pays", labelEn: "Investing in multiple countries", isCorrect: true },
        { labelFr: "Garder tout en cash", labelEn: "Keeping everything in cash", isCorrect: false },
      ],
    },
  },
  {
    slug: "risk-and-return",
    titleFr: "Risque et rendement",
    titleEn: "Risk and Return",
    descriptionFr: "Comprenez la relation entre risque et rendement potentiel.",
    descriptionEn: "Understand the relationship between risk and potential return.",
    sortOrder: 2,
    estimatedMinutes: 8,
    learnMinutes: 3,
    practiceMinutes: 2,
    testMinutes: 2,
    reviewMinutes: 1,
    masterMinutes: 1,
    textBodyFr:
      "En finance, un rendement plus élevé implique généralement un risque plus élevé. Votre tolérance au risque dépend de votre horizon de placement et de votre situation personnelle.",
    textBodyEn:
      "In finance, higher returns generally imply higher risk. Your risk tolerance depends on your investment horizon and personal situation.",
    videoTitleFr: "Risque vs rendement",
    videoTitleEn: "Risk vs Return",
    flashcardFrontFr: "Tolérance au risque",
    flashcardFrontEn: "Risk tolerance",
    flashcardBackFr: "Capacité et volonté d'accepter des fluctuations de valeur.",
    flashcardBackEn: "Ability and willingness to accept value fluctuations.",
    exercisePromptFr: "Évaluez votre propre tolérance au risque sur une échelle de 1 à 5.",
    exercisePromptEn: "Rate your own risk tolerance on a scale of 1 to 5.",
    question: {
      type: "TRUE_FALSE",
      promptFr: "Un rendement plus élevé est généralement associé à un risque plus élevé.",
      promptEn: "Higher returns are generally associated with higher risk.",
      explanationCorrectFr: "Vrai. C'est un principe fondamental de la finance.",
      explanationCorrectEn: "True. This is a fundamental principle of finance.",
      difficulty: 1,
      options: [
        { labelFr: "Vrai", labelEn: "True", isCorrect: true },
        { labelFr: "Faux", labelEn: "False", isCorrect: false },
      ],
    },
  },
];

export async function seedPersonalFinance(prisma: PrismaClient) {
  const academy = await prisma.academy.upsert({
    where: { slug: "personal-finance" },
    create: {
      slug: "personal-finance",
      titleFr: "Finance Personnelle",
      titleEn: "Personal Finance",
      descriptionFr: "Apprenez à gérer vos finances personnelles : budget, épargne, investissement.",
      descriptionEn: "Learn to manage your personal finances: budgeting, saving, investing.",
      status: "ACTIVE",
      sortOrder: 0,
    },
    update: { status: "ACTIVE" },
  });

  const course = await prisma.course.upsert({
    where: { academyId_slug: { academyId: academy.id, slug: "essentials" } },
    create: {
      academyId: academy.id,
      slug: "essentials",
      titleFr: "Les essentiels de la finance personnelle",
      titleEn: "Personal Finance Essentials",
      descriptionFr: "Parcours complet pour maîtriser les bases de la finance personnelle.",
      descriptionEn: "Complete path to master personal finance basics.",
      sortOrder: 0,
      estimatedMinutes: 50,
    },
    update: {},
  });

  const skillFoundations = await upsertSkill(prisma, {
    slug: "pf-foundations",
    titleFr: "Fondamentaux finance personnelle",
    titleEn: "Personal finance foundations",
  });

  const skillIncome = await upsertSkill(prisma, {
    slug: "pf-income",
    titleFr: "Revenus",
    titleEn: "Income",
  });

  const skillBudgeting = await upsertSkill(prisma, {
    slug: "pf-budgeting",
    titleFr: "Budget",
    titleEn: "Budgeting",
  });

  const skillInvesting = await upsertSkill(prisma, {
    slug: "pf-investing",
    titleFr: "Bases de l'investissement",
    titleEn: "Investing basics",
  });

  const skillInterest = await upsertSkill(prisma, {
    slug: "pf-interest",
    titleFr: "Intérêt",
    titleEn: "Interest",
  });

  const skillCompounding = await upsertSkill(prisma, {
    slug: "pf-compounding",
    titleFr: "Capitalisation",
    titleEn: "Compounding",
  });

  const skillWealth = await upsertSkill(prisma, {
    slug: "pf-wealth-building",
    titleFr: "Construction de patrimoine",
    titleEn: "Wealth Building",
  });

  const module1 = await prisma.module.create({
    data: {
      courseId: course.id,
      slug: "foundations",
      titleFr: "Fondamentaux",
      titleEn: "Foundations",
      descriptionFr: "Revenus, dépenses, budget, épargne et fonds d'urgence.",
      descriptionEn: "Income, expenses, budgeting, saving, and emergency fund.",
      category: "FOUNDATIONS",
      sortOrder: 0,
      estimatedMinutes: 26,
    },
  });

  for (const lessonConfig of MODULE_1_LESSONS) {
    const extras =
      lessonConfig.slug === "understanding-income"
        ? [skillIncome.id]
        : lessonConfig.slug === "building-a-budget"
          ? [skillBudgeting.id]
          : [];
    await seedLessonWithContent(prisma, module1.id, skillFoundations.id, {
      ...lessonConfig,
      difficulty: "BEGINNER",
      isShort: lessonConfig.slug === "understanding-income",
      shortTopic: "income",
      shortDurationSeconds: 140,
    }, {
      academySlug: "personal-finance",
      extraSkillIds: extras,
    });
  }

  const module2 = await prisma.module.create({
    data: {
      courseId: course.id,
      slug: "saving-investing",
      titleFr: "Épargne et investissement",
      titleEn: "Saving & Investing",
      descriptionFr: "Épargne, fonds d'urgence, actions, obligations et diversification.",
      descriptionEn: "Saving, emergency funds, stocks, bonds, and diversification.",
      category: "INVESTING",
      sortOrder: 1,
      estimatedMinutes: 26,
    },
  });

  for (const lessonConfig of MODULE_2_LESSONS) {
    await seedLessonWithContent(prisma, module2.id, skillInvesting.id, {
      ...lessonConfig,
      difficulty: lessonConfig.slug === "risk-and-return" ? "INTERMEDIATE" : "BEGINNER",
    }, {
      academySlug: "personal-finance",
    });
  }

  const module3 = await prisma.module.create({
    data: {
      courseId: course.id,
      slug: "wealth-building",
      titleFr: "Construction de patrimoine",
      titleEn: "Wealth Building",
      descriptionFr: "Intérêt composé, inflation et objectifs financiers.",
      descriptionEn: "Compound interest, inflation, and financial goals.",
      category: "WEALTH_BUILDING",
      sortOrder: 2,
      estimatedMinutes: 10,
    },
  });

  await seedLessonWithContent(
    prisma,
    module3.id,
    skillWealth.id,
    {
      slug: "compound-interest",
      titleFr: "Intérêt composé",
      titleEn: "Compound Interest",
      descriptionFr: "Comprenez comment l'intérêt composé accélère la croissance du capital.",
      descriptionEn: "Understand how compound interest accelerates capital growth.",
      sortOrder: 0,
      estimatedMinutes: 10,
      difficulty: "INTERMEDIATE",
      learnMinutes: 3,
      practiceMinutes: 3,
      testMinutes: 2,
      reviewMinutes: 1,
      masterMinutes: 1,
      isShort: true,
      shortTopic: "compound-interest",
      shortDurationSeconds: 165,
      textBodyFr:
        "L'intérêt composé réinvestit les intérêts déjà gagnés. Plus l'horizon est long, plus l'effet de capitalisation devient puissant pour construire un patrimoine.",
      textBodyEn:
        "Compound interest reinvests interest already earned. The longer the horizon, the more powerful compounding becomes for building wealth.",
      videoTitleFr: "L'intérêt composé en 3 minutes",
      videoTitleEn: "Compound Interest in 3 Minutes",
      flashcardFrontFr: "Intérêt composé",
      flashcardFrontEn: "Compound interest",
      flashcardBackFr: "Intérêts calculés sur le capital et les intérêts antérieurs.",
      flashcardBackEn: "Interest calculated on principal and previously earned interest.",
      exercisePromptFr: "Calculez mentalement l'effet approximatif d'un doublement sur 10 ans à ~7 %/an.",
      exercisePromptEn: "Mentally estimate the effect of doubling over ~10 years at ~7%/year.",
      question: {
        type: "TRUE_FALSE",
        promptFr: "L'intérêt composé croît plus vite que l'intérêt simple sur le long terme.",
        promptEn: "Compound interest grows faster than simple interest over the long term.",
        explanationCorrectFr: "Vrai. La capitalisation accélère la croissance avec le temps.",
        explanationCorrectEn: "True. Compounding accelerates growth over time.",
        difficulty: 1,
        options: [
          { labelFr: "Vrai", labelEn: "True", isCorrect: true },
          { labelFr: "Faux", labelEn: "False", isCorrect: false },
        ],
      },
    },
    {
      academySlug: "personal-finance",
      extraSkillIds: [skillInterest.id, skillCompounding.id],
    }
  );

  return { academy, course };
}
