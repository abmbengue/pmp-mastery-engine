import { buildPfLesson, opt, q } from "./pf-factory";
import type { CompactLesson } from "./compact";

export const PF_WEALTH_LESSONS: CompactLesson[] = [
  buildPfLesson({
    slug: "net-worth",
    titleFr: "Patrimoine net",
    titleEn: "Net Worth",
    descriptionFr: "Mesurer votre patrimoine net : actifs moins passifs.",
    descriptionEn: "Measure your net worth: assets minus liabilities.",
    moduleSlug: "wealth-building",
    sortOrder: 0,
    estimatedMinutes: 7,
    difficulty: "BEGINNER",
    skillSlug: "pf-wealth-building",
    learningObjective: "ANALYZE",
    objectiveFr: "Calculer un patrimoine net simple et interpréter sa tendance.",
    objectiveEn: "Compute a simple net worth and interpret its trend.",
    explanationFr:
      "Le patrimoine net (net worth) = actifs − passifs. Les actifs incluent épargne, investissements, valeur d'un logement (net d'hypothèque), etc. Les passifs incluent dettes consommation, prêts étudiants, solde hypothécaire. Ce n'est pas un jugement moral : c'est une photo chiffrée de votre situation à un instant T. La tendance sur 6–12 mois compte plus qu'un chiffre isolé.",
    explanationEn:
      "Net worth = assets − liabilities. Assets include savings, investments, home equity (net of mortgage), etc. Liabilities include consumer debt, student loans, mortgage balance. It is not a moral score — it is a numeric snapshot at a point in time. The trend over 6–12 months matters more than a single number.",
    exampleFr:
      "1) Compte courant 3 200 + PEA 12 000 + logement valeur 180 000 = actifs 195 200. 2) Prêt auto 4 500 + hypothèque 120 000 = passifs 124 500. 3) Patrimoine net = 195 200 − 124 500 = 70 700.",
    exampleEn:
      "1) Checking 3,200 + brokerage 12,000 + home value 180,000 = assets 195,200. 2) Car loan 4,500 + mortgage 120,000 = liabilities 124,500. 3) Net worth = 195,200 − 124,500 = 70,700.",
    practicalFr:
      "Situation : listez vos actifs et passifs sur une feuille. Calculez le patrimoine net. Refaites l'exercice dans 3 mois pour voir la tendance.",
    practicalEn:
      "Situation: list your assets and liabilities on one sheet. Compute net worth. Repeat in 3 months to see the trend.",
    mistakeFr:
      "Compter la valeur marchande d'une voiture comme actif sans soustraire le prêt associé — ou ignorer les dettes « petites » qui s'accumulent.",
    mistakeEn:
      "Counting a car’s market value as an asset without subtracting the linked loan — or ignoring “small” debts that pile up.",
    takeawayFr: "Le patrimoine net mesure la position globale ; suivez la tendance, pas seulement le chiffre du jour.",
    takeawayEn: "Net worth measures overall position; track the trend, not just today’s number.",
    decisionFr: "Décider si votre trajectoire patrimoniale s'améliore ou se dégrade sur les prochains trimestres.",
    decisionEn: "Decide whether your wealth trajectory is improving or deteriorating over coming quarters.",
    flashcardFrontFr: "Patrimoine net",
    flashcardFrontEn: "Net worth",
    flashcardBackFr: "Actifs − passifs à un instant donné.",
    flashcardBackEn: "Assets − liabilities at a point in time.",
    exercisePromptFr:
      "Situation : actifs 45 000, passifs 18 000. Patrimoine net ? Si les passifs passent à 22 000 sans changement d'actifs, quel impact ?",
    exercisePromptEn:
      "Situation: assets 45,000, liabilities 18,000. Net worth? If liabilities rise to 22,000 with no asset change, what is the impact?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Actifs 45 000, passifs 18 000. Patrimoine net ?",
      promptEn: "Assets 45,000, liabilities 18,000. Net worth?",
      explanationCorrectFr: "45 000 − 18 000 = 27 000.",
      explanationCorrectEn: "45,000 − 18,000 = 27,000.",
      difficulty: 1,
      options: [
        opt("63 000", "63,000", false, "C'est la somme, pas la différence.", "That is the sum, not the difference."),
        opt("27 000", "27,000", true),
        opt("18 000", "18,000", false, "18 000 correspond aux passifs seuls.", "18,000 is liabilities only."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : logement 200 000, hypothèque 150 000, épargne 8 000. Patrimoine net lié au logement + épargne ?",
        promptEn:
          "Situation: home 200,000, mortgage 150,000, savings 8,000. Net worth from home + savings?",
        explanationCorrectFr: "Équité logement 50 000 + épargne 8 000 = 58 000.",
        explanationCorrectEn: "Home equity 50,000 + savings 8,000 = 58,000.",
        difficulty: 2,
        options: [
          opt("58 000", "58,000", true),
          opt("208 000", "208,000", false, "Il faut soustraire l'hypothèque.", "You must subtract the mortgage."),
          opt("150 000", "150,000", false, "150 000 est le passif hypothécaire.", "150,000 is the mortgage liability."),
        ],
      }),
      q({
        type: "TRUE_FALSE",
        promptFr: "Un patrimoine net négatif signifie que les passifs dépassent les actifs.",
        promptEn: "Negative net worth means liabilities exceed assets.",
        explanationCorrectFr: "Vrai. Actifs < passifs.",
        explanationCorrectEn: "True. Assets < liabilities.",
        difficulty: 1,
        options: [
          opt("Vrai", "True", true),
          opt("Faux", "False", false, "La définition est actifs − passifs.", "The definition is assets − liabilities."),
        ],
      }),
    ],
  }),

  buildPfLesson({
    slug: "compound-interest",
    titleFr: "Intérêt composé",
    titleEn: "Compound Interest",
    descriptionFr: "Comprenez comment l'intérêt composé accélère la croissance du capital.",
    descriptionEn: "Understand how compound interest accelerates capital growth.",
    moduleSlug: "wealth-building",
    sortOrder: 1,
    estimatedMinutes: 8,
    difficulty: "INTERMEDIATE",
    skillSlug: "pf-compounding",
    learningObjective: "ANALYZE",
    isShort: true,
    shortDurationSeconds: 150,
    objectiveFr: "Expliquer la capitalisation et estimer son effet sur un horizon long.",
    objectiveEn: "Explain compounding and estimate its effect over a long horizon.",
    explanationFr:
      "L'intérêt composé réinvestit les intérêts déjà gagnés : chaque période, la base de calcul grossit. Sur un horizon long, la courbe s'accélère — c'est le « moteur » mathématique de la construction patrimoniale. Trois leviers : le taux, le temps, et les versements réguliers. Illustration pédagogique, pas une projection garantie.",
    explanationEn:
      "Compound interest reinvests interest already earned: each period, the calculation base grows. Over a long horizon the curve accelerates — the mathematical engine of wealth building. Three levers: rate, time, and regular contributions. Pedagogical illustration, not a guaranteed projection.",
    exampleFr:
      "1) Capital 5 000 à 6 %/an composé annuellement → après 10 ans ≈ 8 954 (intérêts ≈ 3 954). 2) Même capital avec versement 100/mois → après 10 ans ≈ 22 000+. 3) Commencer 5 ans plus tôt peut valoir plus qu'augmenter le taux de 1 point.",
    exampleEn:
      "1) Principal 5,000 at 6%/year compounded annually → after 10 years ≈ 8,954 (interest ≈ 3,954). 2) Same principal with 100/month contributions → after 10 years ≈ 22,000+. 3) Starting 5 years earlier can matter more than raising the rate by 1 point.",
    practicalFr:
      "Situation : estimez mentalement un doublement à ~7 %/an (règle des 72 : 72 ÷ 7 ≈ 10 ans). Puis testez vos hypothèses dans le simulateur.",
    practicalEn:
      "Situation: mentally estimate doubling at ~7%/year (rule of 72: 72 ÷ 7 ≈ 10 years). Then test your assumptions in the simulator.",
    mistakeFr:
      "Comparer un rendement composé long terme à un rendement simple court terme sans ajuster l'horizon.",
    mistakeEn:
      "Comparing long-term compounded returns to short-term simple returns without aligning the horizon.",
    takeawayFr: "Le temps et la régularité amplifient la capitalisation — commencez tôt, versez souvent.",
    takeawayEn: "Time and consistency amplify compounding — start early, contribute often.",
    decisionFr: "Choisir un rythme de versement réaliste que vous pouvez tenir 5+ ans.",
    decisionEn: "Choose a realistic contribution pace you can sustain for 5+ years.",
    simulatorFr:
      "Ouvrez le simulateur Intérêt composé de cette leçon : testez un capital initial, un taux et un horizon, puis comparez l'effet des versements mensuels et de la fréquence de capitalisation.",
    simulatorEn:
      "Open this lesson's Compound Interest simulator: try an initial amount, rate, and horizon, then compare the effect of monthly contributions and compounding frequency.",
    flashcardFrontFr: "Intérêt composé",
    flashcardFrontEn: "Compound interest",
    flashcardBackFr: "Intérêts calculés sur le capital et les intérêts antérieurs.",
    flashcardBackEn: "Interest calculated on principal and previously earned interest.",
    exercisePromptFr:
      "Situation : 3 000 à 5 %/an pendant 20 ans sans versement. Estimez l'ordre de grandeur final, puis vérifiez au simulateur.",
    exercisePromptEn:
      "Situation: 3,000 at 5%/year for 20 years with no contributions. Estimate the final order of magnitude, then verify in the simulator.",
    question: q({
      type: "TRUE_FALSE",
      promptFr: "L'intérêt composé croît plus vite que l'intérêt simple sur le long terme.",
      promptEn: "Compound interest grows faster than simple interest over the long term.",
      explanationCorrectFr: "Vrai. La capitalisation accélère la croissance avec le temps.",
      explanationCorrectEn: "True. Compounding accelerates growth over time.",
      difficulty: 1,
      options: [
        opt("Vrai", "True", true),
        opt("Faux", "False", false, "La réinvestissement des intérêts crée l'écart.", "Reinvesting interest creates the gap."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : 1 000 à 8 %/an composé annuellement, sans versement. Valeur approximative après 3 ans ?",
        promptEn:
          "Situation: 1,000 at 8%/year compounded annually, no contributions. Approximate value after 3 years?",
        explanationCorrectFr: "1 000 × 1,08³ ≈ 1 260.",
        explanationCorrectEn: "1,000 × 1.08³ ≈ 1,260.",
        difficulty: 2,
        options: [
          opt("≈ 1 240", "≈ 1,240", false, "L'intérêt composé dépasse l'intérêt simple ici.", "Compound interest exceeds simple interest here."),
          opt("≈ 1 260", "≈ 1,260", true),
          opt("≈ 1 080", "≈ 1,080", false, "1 080 serait après 1 seule année.", "1,080 would be after only 1 year."),
        ],
      }),
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Quel levier amplifie le plus la capitalisation sur 25 ans ?",
        promptEn: "Which lever most amplifies compounding over 25 years?",
        explanationCorrectFr: "Le temps : chaque année supplémentaire multiplie l'effet.",
        explanationCorrectEn: "Time: each extra year multiplies the effect.",
        difficulty: 2,
        options: [
          opt("Commencer plus tôt", "Starting earlier", true),
          opt("Changer de banque chaque mois", "Switching banks every month", false, "La fréquence de changement n'aide pas la capitalisation.", "Frequent switching does not help compounding."),
          opt("Retirer les intérêts chaque année", "Withdrawing interest each year", false, "Retirer les intérêts revient à de l'intérêt simple.", "Withdrawing interest reverts to simple interest."),
        ],
      }),
    ],
  }),

  buildPfLesson({
    slug: "inflation-and-wealth",
    titleFr: "Inflation et patrimoine",
    titleEn: "Inflation and Wealth",
    descriptionFr: "Protégez votre patrimoine contre l'érosion inflationniste.",
    descriptionEn: "Protect your wealth against inflation erosion.",
    moduleSlug: "wealth-building",
    sortOrder: 2,
    estimatedMinutes: 8,
    difficulty: "INTERMEDIATE",
    skillSlug: "pf-wealth-building",
    learningObjective: "ANALYZE",
    objectiveFr: "Quantifier l'effet de l'inflation sur une épargne non investie.",
    objectiveEn: "Quantify inflation’s effect on uninvested savings.",
    explanationFr:
      "L'inflation réduit le pouvoir d'achat : 1 000 € aujourd'hui n'achètent pas le même panier dans 15 ans. L'argent non investi (ou rémunéré en dessous de l'inflation) perd en valeur réelle. Les actifs qui croissent au-delà de l'inflation (actions diversifiées, immobilier locatif, etc.) peuvent aider à protéger le patrimoine — sans garantie de performance future.",
    explanationEn:
      "Inflation reduces purchasing power: €1,000 today does not buy the same basket in 15 years. Uninvested cash (or cash earning below inflation) loses real value. Assets growing beyond inflation (diversified stocks, rental real estate, etc.) can help protect wealth — without guarantee of future performance.",
    exampleFr:
      "1) Inflation 3 %/an : 10 000 € en cash perdent environ 40 % de pouvoir d'achat en 20 ans. 2) Placement nominal 5 %/an → rendement réel ≈ 2 % (5 − 3). 3) Si vos dépenses essentielles montent plus vite que votre épargne, votre marge réelle se réduit.",
    exampleEn:
      "1) 3%/year inflation: €10,000 in cash loses roughly 40% purchasing power in 20 years. 2) Nominal 5%/year return → real return ≈ 2% (5 − 3). 3) If essential expenses rise faster than your savings, your real margin shrinks.",
    practicalFr:
      "Situation : calculez l'impact de 3 % d'inflation sur 1 000 € sur 10 ans (valeur réelle ≈ 1 000 ÷ 1,03¹⁰). Comparez à un placement nominal 4 %.",
    practicalEn:
      "Situation: compute the impact of 3% inflation on €1,000 over 10 years (real value ≈ 1,000 ÷ 1.03¹⁰). Compare to a 4% nominal placement.",
    mistakeFr:
      "Se réjouir d'un solde d'épargne stable sans vérifier si le pouvoir d'achat a baissé.",
    mistakeEn:
      "Celebrating a stable savings balance without checking whether purchasing power fell.",
    takeawayFr: "Pensez en euros réels : le nominal ment si l'inflation n'est pas soustraite.",
    takeawayEn: "Think in real euros: nominal numbers mislead if inflation is not subtracted.",
    decisionFr: "Évaluer si votre épargne et vos placements visent un rendement réel positif.",
    decisionEn: "Assess whether your savings and investments target a positive real return.",
    flashcardFrontFr: "Érosion inflationniste",
    flashcardFrontEn: "Inflation erosion",
    flashcardBackFr: "Réduction du pouvoir d'achat par la hausse des prix.",
    flashcardBackEn: "Reduction of purchasing power through price rises.",
    exercisePromptFr:
      "Situation : inflation 4 %, placement nominal 6 %. Rendement réel approximatif ? Que se passe-t-il si l'inflation passe à 7 % ?",
    exercisePromptEn:
      "Situation: 4% inflation, 6% nominal return. Approximate real return? What if inflation rises to 7%?",
    question: q({
      type: "TRUE_FALSE",
      promptFr: "L'inflation réduit la valeur réelle d'une épargne non investie.",
      promptEn: "Inflation reduces the real value of uninvested savings.",
      explanationCorrectFr: "Vrai. Le même montant achète moins de biens et services.",
      explanationCorrectEn: "True. The same amount buys fewer goods and services.",
      difficulty: 1,
      options: [
        opt("Vrai", "True", true),
        opt("Faux", "False", false, "L'épargne cash perd en pouvoir d'achat.", "Cash savings lose purchasing power."),
      ],
    }),
  }),

  buildPfLesson({
    slug: "real-vs-nominal-return",
    titleFr: "Rendement réel vs nominal",
    titleEn: "Real vs Nominal Return",
    descriptionFr: "Distinguer rendement affiché et gain de pouvoir d'achat.",
    descriptionEn: "Separate stated return from purchasing-power gain.",
    moduleSlug: "wealth-building",
    sortOrder: 3,
    estimatedMinutes: 8,
    difficulty: "INTERMEDIATE",
    skillSlug: "pf-wealth-building",
    learningObjective: "ANALYZE",
    objectiveFr: "Calculer un rendement réel approximatif à partir d'un rendement nominal et de l'inflation.",
    objectiveEn: "Compute an approximate real return from nominal return and inflation.",
    explanationFr:
      "Le rendement nominal est ce que votre relevé affiche (ex. +7 %). Le rendement réel ajuste l'inflation : il mesure l'enrichissement en pouvoir d'achat. Formule simplifiée : rendement réel ≈ nominal − inflation (approximation courante). Un placement à +2 % nominal avec inflation 4 % enrichit en réalité en pouvoir d'achat négatif.",
    explanationEn:
      "Nominal return is what your statement shows (e.g. +7%). Real return adjusts for inflation: it measures purchasing-power gain. Simplified formula: real return ≈ nominal − inflation (common approximation). A +2% nominal placement with 4% inflation actually reduces purchasing power.",
    exampleFr:
      "1) Placement +6 % nominal, inflation 3 % → réel ≈ 3 %. 2) Livret +2 % nominal, inflation 5 % → réel ≈ −3 % (appauvrissement). 3) Sur 20 ans, ignorer l'inflation surestime la richesse future d'environ 40–50 % à 3 %/an.",
    exampleEn:
      "1) Investment +6% nominal, 3% inflation → real ≈ 3%. 2) Savings account +2% nominal, 5% inflation → real ≈ −3% (purchasing-power loss). 3) Over 20 years, ignoring inflation overstates future wealth by roughly 40–50% at 3%/year.",
    practicalFr:
      "Situation : votre portefeuille a gagné 8 % cette année et l'inflation était 3 %. Estimez le gain réel. Votre pouvoir d'achat a-t-il vraiment augmenté de 8 % ?",
    practicalEn:
      "Situation: your portfolio gained 8% this year and inflation was 3%. Estimate the real gain. Did your purchasing power really rise 8%?",
    mistakeFr:
      "Comparer des performances de placements sans soustraire l'inflation de la période.",
    mistakeEn:
      "Comparing investment performance without subtracting the period’s inflation.",
    takeawayFr: "Le nominal flatte ; le réel dit si vous vous enrichissez vraiment.",
    takeawayEn: "Nominal flatters; real tells whether you truly got richer.",
    decisionFr: "Juger un placement sur son rendement réel, pas seulement sur le chiffre affiché.",
    decisionEn: "Judge a placement on real return, not only the displayed figure.",
    flashcardFrontFr: "Rendement réel",
    flashcardFrontEn: "Real return",
    flashcardBackFr: "Rendement nominal ajusté de l'inflation.",
    flashcardBackEn: "Nominal return adjusted for inflation.",
    exercisePromptFr:
      "Situation : +5 % nominal, inflation 2,5 %. Rendement réel approximatif ? Et si l'inflation monte à 6 % ?",
    exercisePromptEn:
      "Situation: +5% nominal, 2.5% inflation. Approximate real return? What if inflation rises to 6%?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Rendement nominal 7 %, inflation 3 %. Rendement réel approximatif ?",
      promptEn: "Nominal return 7%, inflation 3%. Approximate real return?",
      explanationCorrectFr: "7 − 3 = 4 % (approximation courante).",
      explanationCorrectEn: "7 − 3 = 4% (common approximation).",
      difficulty: 2,
      options: [
        opt("≈ 4 %", "≈ 4%", true),
        opt("≈ 10 %", "≈ 10%", false, "On soustrait l'inflation, on ne l'additionne pas.", "You subtract inflation, not add it."),
        opt("≈ 7 %", "≈ 7%", false, "7 % est le nominal non ajusté.", "7% is unadjusted nominal."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : placement +2 % nominal, inflation 5 %. Que se passe-t-il en pouvoir d'achat ?",
        promptEn:
          "Situation: investment +2% nominal, 5% inflation. What happens to purchasing power?",
        explanationCorrectFr: "Rendement réel ≈ −3 % : pouvoir d'achat en baisse.",
        explanationCorrectEn: "Real return ≈ −3%: purchasing power falls.",
        difficulty: 2,
        options: [
          opt("Pouvoir d'achat en hausse", "Purchasing power rises", false, "L'inflation dépasse le nominal.", "Inflation exceeds nominal."),
          opt("Pouvoir d'achat en baisse", "Purchasing power falls", true),
          opt("Aucun effet", "No effect", false, "L'inflation affecte toujours le réel.", "Inflation always affects real outcomes."),
        ],
      }),
      q({
        type: "TRUE_FALSE",
        promptFr: "Deux placements avec le même rendement nominal ont toujours le même rendement réel.",
        promptEn: "Two placements with the same nominal return always have the same real return.",
        explanationCorrectFr: "Faux. L'inflation de la période peut différer selon le contexte.",
        explanationCorrectEn: "False. Period inflation can differ by context.",
        difficulty: 2,
        options: [
          opt("Vrai", "True", false, "Le réel dépend aussi de l'inflation.", "Real return also depends on inflation."),
          opt("Faux", "False", true),
        ],
      }),
    ],
  }),

  buildPfLesson({
    slug: "retirement-basics",
    titleFr: "Bases de la retraite",
    titleEn: "Retirement Basics",
    descriptionFr: "Planifiez votre retraite avec des principes simples.",
    descriptionEn: "Plan your retirement with simple principles.",
    moduleSlug: "wealth-building",
    sortOrder: 4,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "pf-wealth-building",
    learningObjective: "APPLY",
    objectiveFr: "Estimer un besoin de retraite simplifié et identifier les leviers d'action.",
    objectiveEn: "Estimate a simplified retirement need and identify action levers.",
    explanationFr:
      "La retraite se prépare sur un horizon long : taux d'épargne régulier, diversification, et capitalisation. Les régimes publics complètent mais rarement suffisent seuls. Estimez vos besoins futurs en euros réels (inclure l'inflation). Commencer tôt réduit le montant mensuel nécessaire — cadre pédagogique, pas un plan de retraite personnalisé.",
    explanationEn:
      "Retirement is prepared over a long horizon: regular savings rate, diversification, and compounding. Public systems supplement but rarely suffice alone. Estimate future needs in real euros (include inflation). Starting early reduces the monthly amount needed — pedagogical framework, not a personalized retirement plan.",
    exampleFr:
      "1) Besoin estimé 2 000 €/mois à la retraite × 25 ans ≈ 600 000 € de capital cible (règle indicative 4 %). 2) Épargner 300 €/mois pendant 30 ans à 5 % nominal change fortement le capital final. 3) Reporter de 10 ans peut doubler l'effort mensuel requis.",
    exampleEn:
      "1) Estimated need €2,000/month in retirement × 25 years ≈ €600,000 target capital (indicative 4% rule). 2) Saving €300/month for 30 years at 5% nominal strongly changes final capital. 3) Delaying 10 years can roughly double the required monthly effort.",
    practicalFr:
      "Situation : estimez vos dépenses essentielles à la retraite (en euros d'aujourd'hui). Multipliez par 12, puis par l'horizon espéré. C'est un ordre de grandeur, pas un conseil.",
    practicalEn:
      "Situation: estimate your essential retirement expenses (in today’s euros). Multiply by 12, then by expected horizon. This is an order of magnitude, not advice.",
    mistakeFr:
      "Compter uniquement sur la pension publique sans estimer l'écart avec vos besoins réels.",
    mistakeEn:
      "Relying only on public pension without estimating the gap versus real needs.",
    takeawayFr: "Retraite = horizon long + épargne régulière + estimation en euros réels.",
    takeawayEn: "Retirement = long horizon + regular saving + estimates in real euros.",
    decisionFr: "Fixer un versement mensuel de retraite réaliste que vous démarrez maintenant.",
    decisionEn: "Set a realistic monthly retirement contribution you start now.",
    flashcardFrontFr: "Horizon de retraite",
    flashcardFrontEn: "Retirement horizon",
    flashcardBackFr: "Durée entre maintenant et le début de la retraite.",
    flashcardBackEn: "Time between now and retirement start.",
    exercisePromptFr:
      "Situation : besoin 1 800 €/mois, 20 ans de retraite visés. Ordre de grandeur du capital cible ? Quel versement mensuel pour commencer ?",
    exercisePromptEn:
      "Situation: need €1,800/month, 20 years of retirement targeted. Order of magnitude of target capital? What monthly contribution to start?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Quel levier réduit le plus l'effort mensuel nécessaire pour la retraite ?",
      promptEn: "Which lever most reduces the monthly effort needed for retirement?",
      explanationCorrectFr: "Commencer tôt maximise la capitalisation sur l'horizon long.",
      explanationCorrectEn: "Starting early maximizes compounding over the long horizon.",
      difficulty: 2,
      options: [
        opt("Commencer tôt", "Start early", true),
        opt("Attendre d'avoir 55 ans", "Wait until age 55", false, "Reporter augmente l'effort mensuel.", "Delaying increases monthly effort."),
        opt("Ne pas estimer les besoins", "Skip estimating needs", false, "Sans estimation, impossible de planifier.", "Without estimates, planning is impossible."),
      ],
    }),
  }),

  buildPfLesson({
    slug: "long-term-investing",
    titleFr: "Investissement long terme",
    titleEn: "Long-Term Investing",
    descriptionFr: "Adoptez une perspective long terme pour vos investissements.",
    descriptionEn: "Adopt a long-term perspective for your investments.",
    moduleSlug: "wealth-building",
    sortOrder: 5,
    estimatedMinutes: 8,
    difficulty: "INTERMEDIATE",
    skillSlug: "pf-investing",
    learningObjective: "DECIDE",
    objectiveFr: "Expliquer pourquoi l'horizon long change la gestion du risque et des émotions.",
    objectiveEn: "Explain why a long horizon changes risk management and emotions.",
    explanationFr:
      "L'investissement long terme (souvent 10+ ans) permet de traverser les cycles de marché sans vendre au pire moment. Les contributions régulières (DCA) lissent le prix d'achat moyen. La patience et la discipline battent souvent les tentatives de timing — principes généraux, pas une garantie de résultat.",
    explanationEn:
      "Long-term investing (often 10+ years) lets you ride market cycles without selling at the worst time. Regular contributions (DCA) smooth average purchase price. Patience and discipline often beat market-timing attempts — general principles, not a result guarantee.",
    exampleFr:
      "1) Horizon 15 ans : une baisse de 20 % peut être un bruit de fond, pas une catastrophe. 2) Versements 200 €/mois pendant une baisse achètent plus d'unités (effet mécanique du DCA). 3) Vendre en panique après −30 % cristallise une perte que le temps aurait pu atténuer.",
    exampleEn:
      "1) 15-year horizon: a 20% drop may be background noise, not catastrophe. 2) €200/month during a downturn buys more units (mechanical DCA effect). 3) Panic selling after −30% crystallizes a loss that time might have softened.",
    practicalFr:
      "Situation : définissez un horizon d'investissement (ex. 12 ans pour les études des enfants). Écrivez une règle : « Je ne vends pas avant cette date sauf urgence vitale. »",
    practicalEn:
      "Situation: define an investment horizon (e.g. 12 years for children’s education). Write a rule: “I do not sell before this date except life emergency.”",
    mistakeFr:
      "Surveiller le portefeuille chaque jour et réagir à chaque fluctuation comme si l'horizon était demain.",
    mistakeEn:
      "Checking the portfolio daily and reacting to every fluctuation as if the horizon were tomorrow.",
    takeawayFr: "L'horizon long transforme la volatilité en risque gérable — si vous tenez le cap.",
    takeawayEn: "A long horizon turns volatility into manageable risk — if you stay the course.",
    decisionFr: "Choisir un horizon minimum avant d'investir et s'y tenir par écrit.",
    decisionEn: "Choose a minimum horizon before investing and commit to it in writing.",
    flashcardFrontFr: "Investissement long terme",
    flashcardFrontEn: "Long-term investing",
    flashcardBackFr: "Horizon de placement typiquement supérieur à 10 ans.",
    flashcardBackEn: "Investment horizon typically over 10 years.",
    exercisePromptFr:
      "Situation : marché −25 %, horizon 20 ans, fonds d'urgence intact. Quelle réaction alignée long terme ?",
    exercisePromptEn:
      "Situation: market −25%, 20-year horizon, emergency fund intact. What long-term-aligned reaction?",
    question: q({
      type: "TRUE_FALSE",
      promptFr: "Un horizon long permet de lisser les fluctuations de marché.",
      promptEn: "A long horizon helps smooth market fluctuations.",
      explanationCorrectFr: "Vrai. Le temps réduit l'impact des variations court terme.",
      explanationCorrectEn: "True. Time reduces the impact of short-term variations.",
      difficulty: 1,
      options: [
        opt("Vrai", "True", true),
        opt("Faux", "False", false, "La volatilité court terme compte moins sur 10+ ans.", "Short-term volatility matters less over 10+ years."),
      ],
    }),
  }),

  buildPfLesson({
    slug: "financial-independence",
    titleFr: "Indépendance financière",
    titleEn: "Financial Independence",
    descriptionFr: "Comprendre le concept d'indépendance financière et ses étapes.",
    descriptionEn: "Understand financial independence and its stages.",
    moduleSlug: "wealth-building",
    sortOrder: 6,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "pf-wealth-building",
    learningObjective: "IDENTIFY",
    objectiveFr: "Définir l'indépendance financière et repérer les étapes intermédiaires.",
    objectiveEn: "Define financial independence and spot intermediate stages.",
    explanationFr:
      "L'indépendance financière (FI) signifie que vos actifs couvrent vos dépenses sans revenu actif obligatoire. Ce n'est pas nécessairement la retraite immédiate : c'est la liberté de choisir. Étapes courantes : 1) fonds d'urgence, 2) dettes à taux élevé éliminées, 3) taux d'épargne élevé, 4) capital investi générant un flux couvrant les besoins essentiels. Cadre éducatif — pas une promesse de date ni de montant.",
    explanationEn:
      "Financial independence (FI) means your assets cover expenses without mandatory active income. It is not necessarily immediate retirement — it is freedom to choose. Common stages: 1) emergency fund, 2) high-rate debt eliminated, 3) high savings rate, 4) invested capital generating flow covering essential needs. Educational framework — not a promise of date or amount.",
    exampleFr:
      "1) Dépenses essentielles 2 000 €/mois → capital indicatif 600 000 € (règle 4 % simplifiée). 2) Taux d'épargne 40 % accélère fortement la trajectoire. 3) « Lean FI » = couvrir le minimum vital ; « Fat FI » = marge de confort plus large.",
    exampleEn:
      "1) Essential expenses €2,000/month → indicative capital €600,000 (simplified 4% rule). 2) 40% savings rate strongly accelerates the trajectory. 3) “Lean FI” = cover bare minimum; “Fat FI” = wider comfort margin.",
    practicalFr:
      "Situation : calculez vos dépenses essentielles mensuelles. Multipliez par 300 (règle 4 % indicative) pour un ordre de grandeur de capital FI.",
    practicalEn:
      "Situation: compute your monthly essential expenses. Multiply by 300 (indicative 4% rule) for an FI capital order of magnitude.",
    mistakeFr:
      "Confondre FI avec « ne plus jamais travailler » — ou viser un chiffre sans tenir compte de l'inflation réelle.",
    mistakeEn:
      "Confusing FI with “never working again” — or targeting a number without real inflation.",
    takeawayFr: "FI = couvrir ses besoins par le capital — un chemin par étapes, pas un saut unique.",
    takeawayEn: "FI = covering needs with capital — a staged path, not a single leap.",
    decisionFr: "Identifier votre prochaine étape FI réaliste (ex. éliminer dette à 8 %+).",
    decisionEn: "Identify your next realistic FI stage (e.g. eliminate 8%+ debt).",
    flashcardFrontFr: "Indépendance financière",
    flashcardFrontEn: "Financial independence",
    flashcardBackFr: "Actifs couvrant les dépenses sans revenu actif obligatoire.",
    flashcardBackEn: "Assets covering expenses without mandatory active income.",
    exercisePromptFr:
      "Situation : essentiels 1 500 €/mois, épargne 600 €/mois, dette consommation 3 000 €. Quelle étape FI prioriser ?",
    exercisePromptEn:
      "Situation: essentials €1,500/month, savings €600/month, consumer debt €3,000. Which FI stage to prioritize?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Quelle étape précède logiquement la recherche d'un capital FI complet ?",
      promptEn: "Which step logically precedes pursuing full FI capital?",
      explanationCorrectFr: "Fonds d'urgence et dettes coûteuses maîtrisées d'abord.",
      explanationCorrectEn: "Emergency fund and costly debt controlled first.",
      difficulty: 2,
      options: [
        opt("Fonds d'urgence + dettes coûteuses réglées", "Emergency fund + costly debt cleared", true),
        opt("Acheter un actif très risqué sans réserve", "Buy a very risky asset with no reserve", false, "Sans coussin, un choc force la vente.", "Without a cushion, shocks force selling."),
        opt("Ignorer les dépenses essentielles", "Ignore essential expenses", false, "FI se base sur les besoins réels.", "FI is based on real needs."),
      ],
    }),
  }),

  buildPfLesson({
    slug: "portfolio-basics",
    titleFr: "Bases du portefeuille",
    titleEn: "Portfolio Basics",
    descriptionFr: "Construisez et gérez un portefeuille d'investissement simple.",
    descriptionEn: "Build and manage a simple investment portfolio.",
    moduleSlug: "wealth-building",
    sortOrder: 7,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "pf-investing",
    learningObjective: "APPLY",
    objectiveFr: "Définir une allocation cible simple et expliquer le rééquilibrage.",
    objectiveEn: "Define a simple target allocation and explain rebalancing.",
    explanationFr:
      "Un portefeuille regroupe vos placements selon une allocation cible (ex. 70 % actions / 30 % obligations — exemple indicatif). Suivez la performance globale, pas chaque ligne au quotidien. Rééquilibrez quand l'allocation dérive (ex. actions montent à 80 %). Un portefeuille simple et diversifié surpasse souvent une gestion complexe — cadre général, pas un conseil personnalisé.",
    explanationEn:
      "A portfolio groups placements by target allocation (e.g. 70% stocks / 30% bonds — indicative example). Track overall performance, not each line daily. Rebalance when allocation drifts (e.g. stocks rise to 80%). A simple diversified portfolio often beats complex management — general framework, not personalized advice.",
    exampleFr:
      "1) Cible 60/40, marché haussier → actions passent à 70 % : vendre une partie pour revenir à 60/40. 2) Trois fonds larges (actions monde, obligations, cash) peuvent suffire pour débuter. 3) Rééquilibrer 1–2 fois/an limite les décisions impulsives.",
    exampleEn:
      "1) Target 60/40, bull market → stocks rise to 70%: sell some to return to 60/40. 2) Three broad funds (world stocks, bonds, cash) can suffice to start. 3) Rebalancing 1–2 times/year limits impulsive decisions.",
    practicalFr:
      "Situation : écrivez une allocation cible en % (actions, obligations, cash). Notez la date et la règle de rééquilibrage (ex. si écart > 5 points).",
    practicalEn:
      "Situation: write a target allocation in % (stocks, bonds, cash). Note the date and rebalancing rule (e.g. if drift > 5 points).",
    mistakeFr:
      "Acheter 15 produits différents sans comprendre la corrélation — fausse diversification.",
    mistakeEn:
      "Buying 15 different products without understanding correlation — false diversification.",
    takeawayFr: "Allocation cible + rééquilibrage discipliné > micro-gestion quotidienne.",
    takeawayEn: "Target allocation + disciplined rebalancing > daily micro-management.",
    decisionFr: "Fixer une allocation cible écrite et une fréquence de révision (ex. semestrielle).",
    decisionEn: "Set a written target allocation and review frequency (e.g. semi-annual).",
    flashcardFrontFr: "Rééquilibrage",
    flashcardFrontEn: "Rebalancing",
    flashcardBackFr: "Ajuster le portefeuille pour retrouver l'allocation cible.",
    flashcardBackEn: "Adjust portfolio to restore target allocation.",
    exercisePromptFr:
      "Situation : cible 50/50, actions montent à 62 %. Faut-il rééquilibrer ? Dans quel sens ?",
    exercisePromptEn:
      "Situation: target 50/50, stocks rise to 62%. Should you rebalance? In which direction?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Pourquoi rééquilibrer un portefeuille ?",
      promptEn: "Why rebalance a portfolio?",
      explanationCorrectFr: "Pour retrouver l'allocation cible après des mouvements de marché.",
      explanationCorrectEn: "To restore target allocation after market moves.",
      difficulty: 2,
      options: [
        opt("Retrouver l'allocation cible", "Restore target allocation", true),
        opt("Augmenter les frais délibérément", "Deliberately increase fees", false, "Le rééquilibrage n'a pas pour but d'augmenter les frais.", "Rebalancing is not meant to increase fees."),
        opt("Vendre tout en panique", "Panic-sell everything", false, "Rééquilibrer ≠ tout vendre.", "Rebalancing ≠ selling everything."),
      ],
    }),
  }),

  buildPfLesson({
    slug: "risk-management-pf",
    titleFr: "Gestion du risque (finance perso)",
    titleEn: "Risk Management (Personal Finance)",
    descriptionFr: "Identifier et réduire les risques qui menacent votre patrimoine.",
    descriptionEn: "Identify and reduce risks that threaten your wealth.",
    moduleSlug: "wealth-building",
    sortOrder: 8,
    estimatedMinutes: 8,
    difficulty: "INTERMEDIATE",
    skillSlug: "pf-investing",
    learningObjective: "ANALYZE",
    objectiveFr: "Cartographier les risques patrimoniaux majeurs et les parades de base.",
    objectiveEn: "Map major wealth risks and basic countermeasures.",
    explanationFr:
      "Risques patrimoniaux courants : marché (volatilité), liquidité (pas de cash en urgence), concentration (tout sur un actif/employeur), inflation, et comportement (panique). Parades : fonds d'urgence, diversification, horizon adapté, assurance de base selon contexte, et règles écrites avant le stress. Contenu éducatif — pas un audit personnalisé.",
    explanationEn:
      "Common wealth risks: market (volatility), liquidity (no emergency cash), concentration (all on one asset/employer), inflation, and behavior (panic). Countermeasures: emergency fund, diversification, suitable horizon, basic insurance as context requires, and written rules before stress. Educational content — not a personalized audit.",
    exampleFr:
      "1) 90 % du patrimoine en actions d'un seul employeur → risque de concentration extrême. 2) Pas de fonds d'urgence + marché −30 % → risque de vente forcée. 3) Règle écrite : « Pas de vente d'actions si chômage < 3 mois de couverture. »",
    exampleEn:
      "1) 90% of wealth in one employer’s stock → extreme concentration risk. 2) No emergency fund + market −30% → forced-sale risk. 3) Written rule: “No stock sales if unemployment < 3 months covered.”",
    practicalFr:
      "Situation : listez vos 3 plus gros risques patrimoniaux aujourd'hui. Pour chacun, notez une parade concrète (même petite).",
    practicalEn:
      "Situation: list your 3 biggest wealth risks today. For each, note one concrete countermeasure (even small).",
    mistakeFr:
      "Confondre « tolérance au risque » déclarée avec la capacité réelle à tenir une baisse sans vendre.",
    mistakeEn:
      "Confusing stated “risk tolerance” with real ability to hold through a downturn without selling.",
    takeawayFr: "Gérer le risque, c'est protéger le plan — pas éliminer toute volatilité.",
    takeawayEn: "Managing risk means protecting the plan — not eliminating all volatility.",
    decisionFr: "Écrire une règle de conduite avant la prochaine crise de marché.",
    decisionEn: "Write a conduct rule before the next market crisis.",
    flashcardFrontFr: "Risque de concentration",
    flashcardFrontEn: "Concentration risk",
    flashcardBackFr: "Trop de patrimoine sur un seul actif, secteur ou employeur.",
    flashcardBackEn: "Too much wealth on one asset, sector, or employer.",
    exercisePromptFr:
      "Situation : 80 % actions tech, pas de cash, horizon 8 ans. Quel risque prioriser ? Quelle parade ?",
    exercisePromptEn:
      "Situation: 80% tech stocks, no cash, 8-year horizon. Which risk to prioritize? What countermeasure?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Quelle parade réduit le risque de vente forcée en crise ?",
      promptEn: "Which countermeasure reduces forced-sale risk in a crisis?",
      explanationCorrectFr: "Un fonds d'urgence liquide couvre les chocs sans vendre les placements.",
      explanationCorrectEn: "A liquid emergency fund covers shocks without selling investments.",
      difficulty: 2,
      options: [
        opt("Fonds d'urgence liquide", "Liquid emergency fund", true),
        opt("Augmenter l'effet de levier", "Increase leverage", false, "Le levier amplifie le risque de vente forcée.", "Leverage amplifies forced-sale risk."),
        opt("Mettre 100 % en un seul actif", "Put 100% in one asset", false, "La concentration augmente le risque.", "Concentration increases risk."),
      ],
    }),
  }),

  buildPfLesson({
    slug: "behavioral-finance-basics",
    titleFr: "Finance comportementale — bases",
    titleEn: "Behavioral Finance Basics",
    descriptionFr: "Repérer les biais qui sabotent vos décisions patrimoniales.",
    descriptionEn: "Spot biases that sabotage your wealth decisions.",
    moduleSlug: "wealth-building",
    sortOrder: 9,
    estimatedMinutes: 8,
    difficulty: "INTERMEDIATE",
    skillSlug: "pf-wealth-building",
    learningObjective: "IDENTIFY",
    objectiveFr: "Nommer trois biais courants et proposer une parade comportementale.",
    objectiveEn: "Name three common biases and propose a behavioral countermeasure.",
    explanationFr:
      "La finance comportementale étudie comment les émotions et biais déforment les décisions. Biais fréquents : aversion aux pertes (vendre trop tôt), FOMO (acheter au sommet), ancrage (s'accrocher à un prix d'achat), surconfiance. Parades : règles écrites, automatisation, délai de réflexion (24–48 h), et éviter les réseaux sociaux pendant les krachs.",
    explanationEn:
      "Behavioral finance studies how emotions and biases distort decisions. Frequent biases: loss aversion (selling too early), FOMO (buying at the top), anchoring (clinging to purchase price), overconfidence. Countermeasures: written rules, automation, cooling-off period (24–48 h), and avoiding social media during crashes.",
    exampleFr:
      "1) Krach −20 % : aversion aux pertes pousse à vendre ; parade = relire l'horizon écrit. 2) Buzz sur une crypto +300 % : FOMO pousse à acheter haut ; parade = délai 48 h. 3) Action achetée 50 €, tombe à 30 € : ancrage pousse à « attendre 50 » ; parade = réévaluer les fondamentaux ou l'allocation.",
    exampleEn:
      "1) Crash −20%: loss aversion pushes selling; countermeasure = re-read written horizon. 2) Buzz on crypto +300%: FOMO pushes buying high; countermeasure = 48 h delay. 3) Stock bought at €50, falls to €30: anchoring pushes “waiting for 50”; countermeasure = reassess fundamentals or allocation.",
    practicalFr:
      "Situation : notez une décision financière récente guidée par l'émotion. Quel biais ? Quelle règle l'aurait évitée ?",
    practicalEn:
      "Situation: note a recent financial decision driven by emotion. Which bias? What rule would have prevented it?",
    mistakeFr:
      "Croire qu'on est immunisé contre les biais parce qu'on a lu un article — sans système.",
    mistakeEn:
      "Believing you are immune to biases because you read an article — without a system.",
    takeawayFr: "Les règles écrites et l'automatisation protègent contre vous-même.",
    takeawayEn: "Written rules and automation protect you from yourself.",
    decisionFr: "Adopter une règle anti-FOMO (ex. délai 48 h avant tout achat impulsif).",
    decisionEn: "Adopt an anti-FOMO rule (e.g. 48 h delay before any impulsive purchase).",
    flashcardFrontFr: "Aversion aux pertes",
    flashcardFrontEn: "Loss aversion",
    flashcardBackFr: "La douleur d'une perte pèse plus qu'un gain équivalent.",
    flashcardBackEn: "The pain of a loss weighs more than an equivalent gain.",
    exercisePromptFr:
      "Situation : un ami vous presse d'acheter « avant qu'il soit trop tard ». Quel biais ? Quelle parade ?",
    exercisePromptEn:
      "Situation: a friend pressures you to buy “before it’s too late.” Which bias? What countermeasure?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Vendre en panique après une baisse de marché illustre surtout :",
      promptEn: "Panic selling after a market drop mainly illustrates:",
      explanationCorrectFr: "L'aversion aux pertes : la douleur immédiate domine l'horizon long.",
      explanationCorrectEn: "Loss aversion: immediate pain dominates the long horizon.",
      difficulty: 2,
      options: [
        opt("Aversion aux pertes", "Loss aversion", true),
        opt("Diversification", "Diversification", false, "La diversification réduit le risque, pas la panique.", "Diversification reduces risk, not panic."),
        opt("Intérêt composé", "Compound interest", false, "La capitalisation est un mécanisme mathématique.", "Compounding is a mathematical mechanism."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : tout le monde parle d'un actif qui a doublé ce mois-ci. Vous voulez acheter immédiatement. Quel biais ?",
        promptEn:
          "Situation: everyone talks about an asset that doubled this month. You want to buy immediately. Which bias?",
        explanationCorrectFr: "FOMO (peur de rater) — acheter par mimétisme social.",
        explanationCorrectEn: "FOMO (fear of missing out) — buying through social mimicry.",
        difficulty: 2,
        options: [
          opt("FOMO", "FOMO", true),
          opt("Ancrage sur le prix d'achat passé", "Anchoring on past purchase price", false, "L'ancrage concerne un prix de référence déjà détenu.", "Anchoring concerns a reference price already held."),
          opt("Rééquilibrage", "Rebalancing", false, "Le rééquilibrage est une discipline planifiée.", "Rebalancing is planned discipline."),
        ],
      }),
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Quelle parade comportementale est la plus robuste sur le long terme ?",
        promptEn: "Which behavioral countermeasure is most robust long term?",
        explanationCorrectFr: "Automatiser épargne et investissement réduit les décisions impulsives.",
        explanationCorrectEn: "Automating saving and investing reduces impulsive decisions.",
        difficulty: 2,
        options: [
          opt("Automatiser les versements", "Automate contributions", true),
          opt("Suivre les conseils anonymes en ligne", "Follow anonymous online tips", false, "Les conseils anonymes amplifient FOMO et surconfiance.", "Anonymous tips amplify FOMO and overconfidence."),
          opt("Vérifier le portefeuille 10 fois par jour", "Check portfolio 10 times daily", false, "La sur-surveillance amplifie le stress.", "Over-monitoring amplifies stress."),
        ],
      }),
    ],
  }),

  buildPfLesson({
    slug: "financial-goals",
    titleFr: "Objectifs financiers",
    titleEn: "Financial Goals",
    descriptionFr: "Définissez et priorisez vos objectifs financiers.",
    descriptionEn: "Define and prioritize your financial goals.",
    moduleSlug: "wealth-building",
    sortOrder: 10,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: "pf-wealth-building",
    learningObjective: "DECIDE",
    objectiveFr: "Formuler des objectifs SMART patrimoniaux et les prioriser.",
    objectiveEn: "Formulate SMART wealth goals and prioritize them.",
    explanationFr:
      "Des objectifs clairs (court, moyen, long terme) guident vos décisions. Chaque objectif a un horizon, un montant cible et une priorité. Le fonds d'urgence précède généralement les objectifs d'investissement risqué. Formalisez par écrit — exercice personnel, pas un plan financier certifié.",
    explanationEn:
      "Clear goals (short, medium, long term) guide decisions. Each goal has a horizon, target amount, and priority. Emergency fund typically precedes risky investment goals. Write them down — personal exercise, not a certified financial plan.",
    exampleFr:
      "1) Court terme (12 mois) : fonds d'urgence 6 000 €. 2) Moyen terme (5 ans) : apport logement 25 000 €. 3) Long terme (20 ans) : retraite complémentaire. Priorité : 1 avant 2, 2 avant 3 si ressources limitées.",
    exampleEn:
      "1) Short term (12 months): emergency fund €6,000. 2) Medium term (5 years): home down payment €25,000. 3) Long term (20 years): supplemental retirement. Priority: 1 before 2, 2 before 3 if resources are limited.",
    practicalFr:
      "Situation : listez trois objectifs avec montant, date et priorité (1–3). Lequel commencez-vous ce mois-ci ?",
    practicalEn:
      "Situation: list three goals with amount, date, and priority (1–3). Which do you start this month?",
    mistakeFr:
      "Poursuivre simultanément cinq objectifs majeurs avec un revenu limité — tout avance lentement.",
    mistakeEn:
      "Pursuing five major goals simultaneously on limited income — everything moves slowly.",
    takeawayFr: "Objectifs écrits + priorisation = moins de décisions contradictoires.",
    takeawayEn: "Written goals + prioritization = fewer contradictory decisions.",
    decisionFr: "Choisir un objectif prioritaire et un versement mensuel associé.",
    decisionEn: "Choose one priority goal and an associated monthly contribution.",
    flashcardFrontFr: "Objectif financier",
    flashcardFrontEn: "Financial goal",
    flashcardBackFr: "Cible monétaire avec horizon et priorité définis.",
    flashcardBackEn: "Monetary target with defined horizon and priority.",
    exercisePromptFr:
      "Situation : 400 €/mois disponibles. Fonds d'urgence incomplet ET envie d'investir en actions. Comment prioriser ?",
    exercisePromptEn:
      "Situation: €400/month available. Incomplete emergency fund AND desire to invest in stocks. How to prioritize?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Quel objectif précède généralement les investissements risqués ?",
      promptEn: "Which goal typically precedes risky investments?",
      explanationCorrectFr: "Le fonds d'urgence précède généralement les investissements risqués.",
      explanationCorrectEn: "Emergency fund typically precedes risky investments.",
      difficulty: 1,
      options: [
        opt("Fonds d'urgence", "Emergency fund", true),
        opt("Voiture de luxe", "Luxury car", false, "Un objectif de consommation n'est pas une base patrimoniale.", "A consumption goal is not a wealth foundation."),
        opt("Vacances exotiques", "Exotic vacation", false, "Les vacances sont un objectif secondaire face à la sécurité.", "Vacations are secondary to security."),
      ],
    }),
  }),

  buildPfLesson({
    slug: "wealth-habits",
    titleFr: "Habitudes de patrimoine",
    titleEn: "Wealth Habits",
    descriptionFr: "Adoptez des habitudes qui construisent le patrimoine sur le long terme.",
    descriptionEn: "Adopt habits that build wealth over the long term.",
    moduleSlug: "wealth-building",
    sortOrder: 11,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: "pf-wealth-building",
    learningObjective: "APPLY",
    objectiveFr: "Installer trois habitudes patrimoniales concrètes et mesurables.",
    objectiveEn: "Install three concrete, measurable wealth habits.",
    explanationFr:
      "Les habitudes de patrimoine incluent l'épargne automatique, l'investissement régulier, la révision budgétaire mensuelle et l'éducation financière continue. La constance surpasse l'intensité ponctuelle. Automatiser réduit la dépendance à la motivation — principes généraux pour tous, pas une promesse de richesse.",
    explanationEn:
      "Wealth habits include automatic saving, regular investing, monthly budget review, and ongoing financial education. Consistency beats occasional intensity. Automation reduces reliance on motivation — general principles for everyone, not a wealth promise.",
    exampleFr:
      "1) Virement auto 200 € le jour de paie vers épargne/investissement. 2) Revue patrimoniale trimestrielle (30 min) : patrimoine net, taux d'épargne, allocation. 3) Une leçon finance / mois pour progresser sans surcharge.",
    exampleEn:
      "1) Auto-transfer €200 on payday to savings/investment. 2) Quarterly wealth review (30 min): net worth, savings rate, allocation. 3) One finance lesson/month to progress without overload.",
    practicalFr:
      "Situation : choisissez une habitude à démarrer cette semaine (montant, jour, compte). Écrivez-la et programmez-la.",
    practicalEn:
      "Situation: pick one habit to start this week (amount, day, account). Write it and schedule it.",
    mistakeFr:
      "Tenter un « reset financier » radical chaque janvier puis abandonner en février.",
    mistakeEn:
      "Attempting a radical financial “reset” every January then quitting in February.",
    takeawayFr: "Petites actions répétées > grands élans oubliés.",
    takeawayEn: "Small repeated actions > big forgotten bursts.",
    decisionFr: "Programmer un virement automatique que vous pouvez tenir 6 mois minimum.",
    decisionEn: "Schedule an automatic transfer you can sustain at least 6 months.",
    flashcardFrontFr: "Épargne automatique",
    flashcardFrontEn: "Automatic saving",
    flashcardBackFr: "Virement programmé vers investissement ou épargne.",
    flashcardBackEn: "Scheduled transfer to investment or savings.",
    exercisePromptFr:
      "Situation : listez trois habitudes patrimoniales réalistes pour les 90 prochains jours. Laquelle automatisez-vous ?",
    exercisePromptEn:
      "Situation: list three realistic wealth habits for the next 90 days. Which one will you automate?",
    question: q({
      type: "TRUE_FALSE",
      promptFr: "La constance surpasse l'intensité ponctuelle en finance personnelle.",
      promptEn: "Consistency beats occasional intensity in personal finance.",
      explanationCorrectFr: "Vrai. Les petites actions régulières créent de grands résultats.",
      explanationCorrectEn: "True. Small regular actions create large results.",
      difficulty: 1,
      options: [
        opt("Vrai", "True", true),
        opt("Faux", "False", false, "Les grands élans sans régularité échouent souvent.", "Big bursts without consistency often fail."),
      ],
    }),
  }),
];
