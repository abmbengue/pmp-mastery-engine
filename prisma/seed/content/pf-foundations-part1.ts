import { buildPfLesson, opt, q } from "./pf-factory";
import type { CompactLesson } from "./compact";

/** Foundations module — Personal Finance */
export const PF_FOUNDATIONS_PART1: CompactLesson[] = [
  buildPfLesson({
    slug: "understanding-money",
    titleFr: "Comprendre l'argent",
    titleEn: "Understanding Money",
    descriptionFr: "À quoi sert l'argent et comment il circule dans votre vie quotidienne.",
    descriptionEn: "What money is for and how it moves through everyday life.",
    moduleSlug: "foundations",
    sortOrder: 0,
    estimatedMinutes: 6,
    difficulty: "BEGINNER",
    skillSlug: "pf-foundations",
    learningObjective: "IDENTIFY",
    objectiveFr: "Expliquer le rôle de l'argent comme outil d'échange, de réserve et de mesure.",
    objectiveEn: "Explain money’s role as a medium of exchange, store of value, and unit of account.",
    explanationFr:
      "L'argent n'est pas une fin en soi : c'est un outil. Il sert à échanger des biens et services, à stocker de la valeur dans le temps, et à comparer des prix. Dans la vie réelle, chaque décision (dépenser, épargner, emprunter) déplace cet outil. Comprendre cela évite de traiter l'argent comme un sujet mystérieux réservé aux experts.",
    explanationEn:
      "Money is not an end in itself — it is a tool. It lets you exchange goods and services, store value over time, and compare prices. In real life, every decision (spend, save, borrow) moves that tool. Understanding this keeps money from feeling like a mysterious topic reserved for experts.",
    exampleFr:
      "Vous gagnez 2 000, payez 1 600 de dépenses, et placez 400 en épargne. L'argent a servi d'échange (dépenses), de mesure (montants), et de réserve (400).",
    exampleEn:
      "You earn 2,000, pay 1,600 in expenses, and set aside 400. Money acted as exchange (spending), measurement (amounts), and store of value (400).",
    practicalFr:
      "Listez trois usages de votre argent ce mois-ci : un échange, une réserve (épargne), et une comparaison de prix que vous avez faite.",
    practicalEn:
      "List three uses of your money this month: one exchange, one store of value (saving), and one price comparison you made.",
    mistakeFr:
      "Croire que « bien gérer son argent » signifie seulement gagner plus — sans regarder les flux et les choix.",
    mistakeEn:
      "Believing “managing money well” only means earning more — without looking at cash flows and choices.",
    takeawayFr: "L'argent est un outil de décision : chaque flux révèle une priorité.",
    takeawayEn: "Money is a decision tool: every cash flow reveals a priority.",
    decisionFr: "Savoir distinguer échange, réserve et mesure avant de juger une dépense.",
    decisionEn: "Be able to separate exchange, store of value, and measurement before judging a purchase.",
    flashcardFrontFr: "Rôle de l'argent",
    flashcardFrontEn: "Role of money",
    flashcardBackFr: "Échange, réserve de valeur, mesure des prix.",
    flashcardBackEn: "Exchange, store of value, and unit of account.",
    exercisePromptFr:
      "Situation : un ami dit « l'argent ne sert qu'à acheter ». Reformulez en une phrase les trois rôles, puis citez un exemple personnel pour chacun.",
    exercisePromptEn:
      "Situation: a friend says “money is only for buying.” Restate the three roles in one sentence, then give a personal example for each.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Mettre 200 de côté pour une réparation future illustre surtout :",
      promptEn: "Setting aside 200 for a future repair mainly illustrates:",
      explanationCorrectFr: "C'est une réserve de valeur : l'argent est gardé pour un besoin futur.",
      explanationCorrectEn: "It is a store of value: money is kept for a future need.",
      difficulty: 1,
      options: [
        opt("Un échange immédiat", "An immediate exchange", false, "L'échange serait payer la réparation maintenant.", "Exchange would be paying for the repair now."),
        opt("Une réserve de valeur", "A store of value", true),
        opt("Un investissement en actions", "A stock investment", false, "Mettre de côté n'est pas automatiquement investir en actions.", "Setting cash aside is not automatically investing in stocks."),
      ],
    }),
    questions: [
      q({
        type: "TRUE_FALSE",
        promptFr: "Comparer le prix de deux paniers illustre le rôle de mesure de l'argent.",
        promptEn: "Comparing the price of two baskets illustrates money’s measurement role.",
        explanationCorrectFr: "Vrai : les prix exprimés en monnaie permettent de comparer.",
        explanationCorrectEn: "True: prices expressed in money allow comparison.",
        difficulty: 1,
        options: [
          opt("Vrai", "True", true),
          opt("Faux", "False", false, "La comparaison de prix est bien une fonction de mesure.", "Price comparison is indeed a measurement function."),
        ],
      }),
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Quelle décision montre le mieux que l'argent est un outil, pas une fin ?",
        promptEn: "Which decision best shows that money is a tool, not an end?",
        explanationCorrectFr: "Choisir une allocation entre besoins, envies et épargne selon des priorités.",
        explanationCorrectEn: "Choosing an allocation across needs, wants, and savings based on priorities.",
        difficulty: 2,
        options: [
          opt("Accumuler le maximum sans objectif", "Accumulate as much as possible with no goal", false, "Accumuler sans objectif traite l'argent comme une fin.", "Accumulating with no goal treats money as an end."),
          opt("Allouer consciemment revenu → priorités", "Consciously allocate income → priorities", true),
          opt("Ignorer les flux tant que le compte n'est pas à zéro", "Ignore cash flows until the account hits zero", false, "Ignorer les flux empêche toute décision éclairée.", "Ignoring flows blocks informed decisions."),
        ],
      }),
    ],
  }),

  buildPfLesson({
    slug: "understanding-income",
    titleFr: "Comprendre les revenus",
    titleEn: "Understanding Income",
    descriptionFr: "Sources de revenus, récurrents vs ponctuels, et diagnostic de base.",
    descriptionEn: "Income sources, recurring vs one-off, and a basic diagnostic.",
    moduleSlug: "foundations",
    sortOrder: 1,
    estimatedMinutes: 7,
    difficulty: "BEGINNER",
    skillSlug: "pf-income",
    learningObjective: "IDENTIFY",
    objectiveFr: "Identifier vos sources de revenus et séparer flux récurrents et ponctuels.",
    objectiveEn: "Identify your income sources and separate recurring from one-off flows.",
    explanationFr:
      "Les revenus viennent d'échanges actifs (salaire, freelance) ou de sources plus passives (loyers, dividendes, intérêts). Distinguez ce qui arrive chaque mois de ce qui est exceptionnel. Sans ce diagnostic, un budget repose sur des hypothèses fragiles.",
    explanationEn:
      "Income comes from active exchange (salary, freelance) or more passive sources (rent, dividends, interest). Separate what arrives every month from what is exceptional. Without that diagnostic, a budget rests on fragile assumptions.",
    exampleFr:
      "Salaire net 2 400 / mois + 300 de freelance un mois sur deux. Revenu récurrent sûr ≈ 2 400 ; le freelance est semi-irrégulier.",
    exampleEn:
      "Net salary 2,400 / month + 300 freelance every other month. Reliable recurring income ≈ 2,400; freelance is semi-irregular.",
    practicalFr:
      "Écrivez trois lignes : (1) revenu le plus stable, (2) revenu irrégulier, (3) revenu que vous ne devez pas traiter comme garanti.",
    practicalEn:
      "Write three lines: (1) most stable income, (2) irregular income, (3) income you should not treat as guaranteed.",
    mistakeFr: "Budgéter comme si un bonus annuel était un revenu mensuel.",
    mistakeEn: "Budgeting as if an annual bonus were monthly income.",
    takeawayFr: "Basez le plan de dépenses sur le revenu fiable, pas sur le pic.",
    takeawayEn: "Base spending plans on reliable income, not on peaks.",
    decisionFr: "Savoir quel montant mensuel est réellement récurrent avant de fixer des charges fixes.",
    decisionEn: "Know which monthly amount is truly recurring before locking fixed costs.",
    flashcardFrontFr: "Revenu actif",
    flashcardFrontEn: "Active income",
    flashcardBackFr: "Revenu gagné en échangeant temps ou compétences (ex. salaire).",
    flashcardBackEn: "Income earned by trading time or skills (e.g. salary).",
    exercisePromptFr:
      "Situation réelle : listez vos sources sur 3 mois. Calculez le minimum mensuel observé. Utilisez ce minimum comme base de budget.",
    exercisePromptEn:
      "Real situation: list your sources over 3 months. Compute the lowest monthly total observed. Use that minimum as your budget base.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Lequel est typiquement un revenu passif ?",
      promptEn: "Which is typically passive income?",
      explanationCorrectFr: "Les dividendes n'exigent pas un échange direct de temps chaque mois.",
      explanationCorrectEn: "Dividends do not require a direct monthly exchange of time.",
      difficulty: 1,
      options: [
        opt("Salaire mensuel", "Monthly salary", false, "Le salaire est un revenu actif.", "Salary is active income."),
        opt("Dividendes d'actions", "Stock dividends", true),
        opt("Honoraires freelance", "Freelance fees", false, "Le freelance est un revenu actif.", "Freelance fees are active income."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Revenu : 2 500 + bonus unique 1 200. Pour un budget mensuel prudent, quelle base choisir ?",
        promptEn: "Income: 2,500 + one-off bonus 1,200. For a prudent monthly budget, which base?",
        explanationCorrectFr: "2 500 — le bonus n'est pas récurrent.",
        explanationCorrectEn: "2,500 — the bonus is not recurring.",
        difficulty: 2,
        options: [
          opt("3 700", "3,700", false, "Additionner le bonus surestime le mois type.", "Adding the bonus overstates a typical month."),
          opt("2 500", "2,500", true),
          opt("1 200", "1,200", false, "Le bonus seul n'est pas le revenu de base.", "The bonus alone is not base income."),
        ],
      }),
      q({
        type: "TRUE_FALSE",
        promptFr: "Un revenu irrégulier peut exister, mais les charges fixes doivent rester compatibles avec le plancher.",
        promptEn: "Irregular income can exist, but fixed costs should stay compatible with the floor.",
        explanationCorrectFr: "Vrai : les charges fixes doivent tenir sur le revenu minimal fiable.",
        explanationCorrectEn: "True: fixed costs should fit within the reliable income floor.",
        difficulty: 1,
        options: [
          opt("Vrai", "True", true),
          opt("Faux", "False", false),
        ],
      }),
    ],
  }),

  buildPfLesson({
    slug: "net-vs-gross-income",
    titleFr: "Revenu brut vs revenu net",
    titleEn: "Gross vs Net Income",
    descriptionFr: "Comprendre la différence entre ce qui est affiché et ce qui arrive sur le compte.",
    descriptionEn: "Understand the difference between the headline figure and what hits your account.",
    moduleSlug: "foundations",
    sortOrder: 2,
    estimatedMinutes: 6,
    difficulty: "BEGINNER",
    skillSlug: "pf-income",
    learningObjective: "APPLY",
    objectiveFr: "Utiliser le revenu net (pas brut) pour budgéter.",
    objectiveEn: "Use net income (not gross) for budgeting.",
    explanationFr:
      "Le revenu brut est le montant avant prélèvements. Le revenu net est ce qui reste après impôts et cotisations (selon le pays). Budgéter sur le brut crée des trous artificiels. Le montant utile pour les décisions quotidiennes est presque toujours le net crédité.",
    explanationEn:
      "Gross income is the amount before deductions. Net income is what remains after taxes and contributions (rules vary by country). Budgeting on gross creates artificial shortfalls. The useful figure for daily decisions is almost always net deposited.",
    exampleFr:
      "Brut 3 000 → net 2 350. Si vous planifiez 2 800 de dépenses sur le brut, vous êtes déjà en déficit sur le net.",
    exampleEn:
      "Gross 3,000 → net 2,350. If you plan 2,800 of spending on gross, you are already in deficit on net.",
    practicalFr: "Retrouvez votre dernier bulletin ou relevé : notez brut, net, et l'écart en %.",
    practicalEn: "Find your latest payslip or statement: note gross, net, and the gap in %.",
    mistakeFr: "Comparer un salaire « 60 000 brut » à des dépenses mensuelles sans convertir en net.",
    mistakeEn: "Comparing a “60,000 gross” salary to monthly expenses without converting to net.",
    takeawayFr: "Budget = revenu net. Toujours.",
    takeawayEn: "Budget = net income. Always.",
    decisionFr: "Avant d'accepter une charge fixe, vérifier qu'elle tient sur le net mensuel.",
    decisionEn: "Before accepting a fixed cost, check it fits monthly net.",
    flashcardFrontFr: "Revenu net",
    flashcardFrontEn: "Net income",
    flashcardBackFr: "Montant disponible après prélèvements — base du budget.",
    flashcardBackEn: "Amount available after deductions — the budget base.",
    exercisePromptFr:
      "Calcul : brut 2 800, prélèvements 22 %. Quel est le net approximatif ? Puis proposez une règle 50/30/20 sur ce net.",
    exercisePromptEn:
      "Calc: gross 2,800, deductions 22%. What is approximate net? Then propose a 50/30/20 split on that net.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Brut 2 000, prélèvements 20 %. Net ≈ ?",
      promptEn: "Gross 2,000, deductions 20%. Net ≈ ?",
      explanationCorrectFr: "2 000 × 0,80 = 1 600.",
      explanationCorrectEn: "2,000 × 0.80 = 1,600.",
      difficulty: 1,
      options: [
        opt("2 000", "2,000", false, "C'est le brut.", "That is gross."),
        opt("1 600", "1,600", true),
        opt("400", "400", false, "400 est le montant prélevé, pas le net.", "400 is the deduction, not net."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Pourquoi le revenu net est-il la bonne base de budget ?",
        promptEn: "Why is net income the right budget base?",
        explanationCorrectFr: "Parce que seules les sommes créditées sont réellement disponibles.",
        explanationCorrectEn: "Because only deposited amounts are actually available.",
        difficulty: 1,
        options: [
          opt("Parce que le brut est toujours plus bas", "Because gross is always lower", false, "Le brut est plus élevé, pas plus bas.", "Gross is higher, not lower."),
          opt("Parce que seul le net est disponible à dépenser", "Because only net is available to spend", true),
          opt("Parce que le net ignore les impôts", "Because net ignores taxes", false, "Le net reflète déjà les prélèvements.", "Net already reflects deductions."),
        ],
      }),
    ],
  }),

  buildPfLesson({
    slug: "tracking-expenses",
    titleFr: "Comprendre les dépenses",
    titleEn: "Understanding Expenses",
    descriptionFr: "Suivre et catégoriser les sorties d'argent pour voir la réalité des flux.",
    descriptionEn: "Track and categorize outflows to see real cash movement.",
    moduleSlug: "foundations",
    sortOrder: 3,
    estimatedMinutes: 7,
    difficulty: "BEGINNER",
    skillSlug: "pf-budgeting",
    learningObjective: "IDENTIFY",
    objectiveFr: "Catégoriser 30 jours de dépenses et repérer les fuites.",
    objectiveEn: "Categorize 30 days of spending and spot leaks.",
    explanationFr:
      "Suivre les dépenses révèle où part l'argent : besoins, envies, et fuites (abonnements oubliés, frais). Sans mesure, on budgète des intentions, pas la réalité. Un mois de suivi suffit souvent à changer une décision.",
    explanationEn:
      "Tracking expenses reveals where money goes: needs, wants, and leaks (forgotten subscriptions, fees). Without measurement, you budget intentions, not reality. One month of tracking often changes a decision.",
    exampleFr:
      "Sur 30 jours : logement 900, alimentation 350, transport 120, abonnements 85, resto 210. Les abonnements + resto = 295 — souvent la zone flexible.",
    exampleEn:
      "Over 30 days: housing 900, food 350, transport 120, subscriptions 85, dining out 210. Subscriptions + dining = 295 — often the flexible zone.",
    practicalFr: "Pendant 7 jours, notez chaque dépense > 5. Classez : besoin / envie / fuite.",
    practicalEn: "For 7 days, note every expense > 5. Label: need / want / leak.",
    mistakeFr: "Ne suivre que les gros montants et ignorer les petites sorties quotidiennes.",
    mistakeEn: "Tracking only large amounts and ignoring small daily outflows.",
    takeawayFr: "Ce qui n'est pas mesuré reste invisible — et souvent trop élevé.",
    takeawayEn: "What isn’t measured stays invisible — and often too high.",
    decisionFr: "Identifier une catégorie à réduire de 10 % le mois prochain sans toucher aux besoins essentiels.",
    decisionEn: "Pick one category to cut by 10% next month without touching essentials.",
    flashcardFrontFr: "Fuite de dépenses",
    flashcardFrontEn: "Spending leak",
    flashcardBackFr: "Petite sortie récurrente peu utile (abonnement oublié, frais).",
    flashcardBackEn: "Small recurring outflow with little value (forgotten sub, fees).",
    exercisePromptFr:
      "Situation : total dépenses 1 800, revenu net 2 200. Calculez le taux d'épargne. Puis citez 2 fuites possibles à vérifier.",
    exercisePromptEn:
      "Situation: total expenses 1,800, net income 2,200. Compute savings rate. Then name 2 possible leaks to check.",
    question: q({
      type: "TRUE_FALSE",
      promptFr: "Les dépenses variables changent typiquement d'un mois à l'autre.",
      promptEn: "Variable expenses typically change from month to month.",
      explanationCorrectFr: "Vrai : alimentation hors domicile, loisirs, etc. fluctuent.",
      explanationCorrectEn: "True: dining out, leisure, etc. fluctuate.",
      difficulty: 1,
      options: [
        opt("Vrai", "True", true),
        opt("Faux", "False", false),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Revenu net 2 200, dépenses 1 800. Taux d'épargne ?",
        promptEn: "Net income 2,200, expenses 1,800. Savings rate?",
        explanationCorrectFr: "(2 200 − 1 800) / 2 200 ≈ 18 %.",
        explanationCorrectEn: "(2,200 − 1,800) / 2,200 ≈ 18%.",
        difficulty: 2,
        options: [
          opt("≈ 8 %", "≈ 8%", false, "400/2 200 ≈ 18 %, pas 8 %.", "400/2,200 ≈ 18%, not 8%."),
          opt("≈ 18 %", "≈ 18%", true),
          opt("≈ 45 %", "≈ 45%", false),
        ],
      }),
    ],
  }),

  buildPfLesson({
    slug: "fixed-vs-variable-expenses",
    titleFr: "Dépenses fixes vs variables",
    titleEn: "Fixed vs Variable Expenses",
    descriptionFr: "Séparer ce qui est rigide de ce qui est ajustable.",
    descriptionEn: "Separate what is rigid from what is adjustable.",
    moduleSlug: "foundations",
    sortOrder: 4,
    estimatedMinutes: 6,
    difficulty: "BEGINNER",
    skillSlug: "pf-budgeting",
    learningObjective: "APPLY",
    objectiveFr: "Classer vos dépenses en fixes et variables pour savoir où agir vite.",
    objectiveEn: "Classify expenses as fixed vs variable to know where you can act quickly.",
    explanationFr:
      "Les dépenses fixes sont prévisibles (loyer, assurance). Les variables fluctuent (courses, sorties). En cas de tension, on ajuste d'abord le variable — sauf si une fixe peut être renégociée. Cette carte mentale accélère les décisions.",
    explanationEn:
      "Fixed expenses are predictable (rent, insurance). Variable ones fluctuate (groceries, nights out). Under pressure, adjust variable first — unless a fixed cost can be renegotiated. This mental map speeds decisions.",
    exampleFr: "Fixe : loyer 850, téléphone 40. Variable : courses 280–420, lois 50–180.",
    exampleEn: "Fixed: rent 850, insurance 40. Variable: groceries 280–420, leisure 50–180.",
    practicalFr: "Classez 8 dépenses récentes en F ou V. Entourez 2 V que vous pourriez réduire sans douleur majeure.",
    practicalEn: "Label 8 recent expenses F or V. Circle 2 V you could cut without major pain.",
    mistakeFr: "Traiter toutes les dépenses comme incompressibles.",
    mistakeEn: "Treating every expense as immovable.",
    takeawayFr: "Agir d'abord sur le variable ; questionner le fixe ensuite.",
    takeawayEn: "Act on variable first; question fixed next.",
    decisionFr: "Savoir quelle part de votre budget est réellement flexible ce mois-ci.",
    decisionEn: "Know what share of your budget is truly flexible this month.",
    flashcardFrontFr: "Dépense fixe",
    flashcardFrontEn: "Fixed expense",
    flashcardBackFr: "Montant récurrent et prévisible (loyer, assurance).",
    flashcardBackEn: "Recurring, predictable amount (rent, insurance).",
    exercisePromptFr:
      "Revenu net 2 500. Fixes 1 400, variables 800. Quelle marge reste ? Que se passe-t-il si les variables montent à 1 100 ?",
    exercisePromptEn:
      "Net income 2,500. Fixed 1,400, variable 800. What margin remains? What if variables rise to 1,100?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Quelle dépense est le plus souvent fixe ?",
      promptEn: "Which expense is most often fixed?",
      explanationCorrectFr: "Le loyer est typiquement contractuel et stable à court terme.",
      explanationCorrectEn: "Rent is typically contractual and stable short term.",
      difficulty: 1,
      options: [
        opt("Restaurants", "Restaurants", false),
        opt("Loyer", "Rent", true),
        opt("Cadeaux", "Gifts", false),
      ],
    }),
  }),

  buildPfLesson({
    slug: "needs-vs-wants",
    titleFr: "Besoins vs envies",
    titleEn: "Needs vs Wants",
    descriptionFr: "Prioriser sans culpabiliser : distinguer essentiel et confort.",
    descriptionEn: "Prioritize without guilt: separate essentials from comfort.",
    moduleSlug: "foundations",
    sortOrder: 5,
    estimatedMinutes: 6,
    difficulty: "BEGINNER",
    skillSlug: "pf-budgeting",
    learningObjective: "DECIDE",
    objectiveFr: "Classer une dépense en besoin ou envie pour arbitrer sous contrainte.",
    objectiveEn: "Classify a purchase as need or want to decide under constraint.",
    explanationFr:
      "Un besoin soutient le fonctionnement quotidien (logement, alimentation de base, transport essentiel). Une envie améliore le confort mais peut être reportée. Les frontières varient selon les situations — l'outil sert à prioriser, pas à juger.",
    explanationEn:
      "A need supports daily functioning (housing, basic food, essential transport). A want improves comfort but can wait. Boundaries vary by situation — the tool prioritizes; it does not judge.",
    exampleFr:
      "Internet pour le télétravail peut être un besoin professionnel ; le forfait cinéma premium est une envie.",
    exampleEn:
      "Internet for remote work may be a work need; a premium cinema package is a want.",
    practicalFr: "Prenez 5 dépenses de la semaine : B ou E ? Pour chaque E, proposez un report de 30 jours.",
    practicalEn: "Take 5 expenses from this week: N or W? For each W, propose a 30-day delay.",
    mistakeFr: "Transformer chaque envie en « besoin » pour éviter l'arbitrage.",
    mistakeEn: "Turning every want into a “need” to avoid trade-offs.",
    takeawayFr: "Sous contrainte, payez d'abord les besoins, puis choisissez les envies consciemment.",
    takeawayEn: "Under constraint, fund needs first, then choose wants consciously.",
    decisionFr: "Savoir reporter une envie sans saboter un besoin essentiel.",
    decisionEn: "Be able to delay a want without undermining an essential need.",
    flashcardFrontFr: "Besoin",
    flashcardFrontEn: "Need",
    flashcardBackFr: "Essentiel au fonctionnement quotidien ou à la sécurité de base.",
    flashcardBackEn: "Essential to daily functioning or basic security.",
    exercisePromptFr:
      "Situation : budget serré. Classez : loyer, café quotidien en terrasse, assurance habitation, nouveau téléphone haut de gamme.",
    exercisePromptEn:
      "Situation: tight budget. Classify: rent, daily café terrace coffee, home insurance, new premium phone.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Sous forte contrainte, quelle dépense trancher en premier ?",
      promptEn: "Under strong constraint, which expense should you cut first?",
      explanationCorrectFr: "Les envies flexibles avant les besoins essentiels.",
      explanationCorrectEn: "Flexible wants before essential needs.",
      difficulty: 1,
      options: [
        opt("Loyer", "Rent", false, "Le logement est typiquement un besoin.", "Housing is typically a need."),
        opt("Abonnement divertissement premium", "Premium entertainment subscription", true),
        opt("Alimentation de base", "Basic groceries", false),
      ],
    }),
  }),

  buildPfLesson({
    slug: "building-a-budget",
    titleFr: "Construire un budget",
    titleEn: "Building a Budget",
    descriptionFr: "Allouer le revenu net entre besoins, envies et épargne.",
    descriptionEn: "Allocate net income across needs, wants, and savings.",
    moduleSlug: "foundations",
    sortOrder: 6,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: "pf-budgeting",
    learningObjective: "APPLY",
    objectiveFr: "Construire un budget simple sur le revenu net et suivre un taux d'épargne.",
    objectiveEn: "Build a simple budget on net income and track a savings rate.",
    explanationFr:
      "Un budget alloue consciemment le revenu net : besoins, envies, épargne. Les grilles 50/30/20 ou enveloppes fonctionnent si elles sont suivies. Incluez une ligne pour le fonds d'urgence avant d'augmenter les placements risqués. Adaptez les % à votre réalité.",
    explanationEn:
      "A budget consciously allocates net income: needs, wants, savings. 50/30/20 or envelopes work when followed. Include an emergency-fund line before increasing risky investments. Adapt percentages to your reality.",
    exampleFr:
      "Net 2 400 → besoins 1 200 (50 %), envies 720 (30 %), épargne 480 (20 %). Si les besoins réels sont 1 400, réduisez les envies, pas l'épargne d'urgence.",
    exampleEn:
      "Net 2,400 → needs 1,200 (50%), wants 720 (30%), savings 480 (20%). If real needs are 1,400, cut wants — not emergency saving.",
    practicalFr: "Remplissez trois cases pour le mois prochain : besoins, envies, épargne (en montants).",
    practicalEn: "Fill three boxes for next month: needs, wants, savings (amounts).",
    mistakeFr: "Créer un budget parfait une fois, puis ne jamais le comparer aux dépenses réelles.",
    mistakeEn: "Creating a perfect budget once, then never comparing it to actual spending.",
    takeawayFr: "Un budget utile se met à jour ; un budget figé devient décoratif.",
    takeawayEn: "A useful budget is updated; a static budget becomes decoration.",
    decisionFr: "Fixer un taux d'épargne cible réaliste pour le mois et le suivre.",
    decisionEn: "Set a realistic savings-rate target for the month and track it.",
    simulatorFr:
      "Ouvrez le simulateur Budget de cette leçon : testez un revenu et des postes de dépenses, puis interprétez le taux d'épargne obtenu.",
    simulatorEn:
      "Open this lesson’s Budget simulator: try an income and expense lines, then interpret the resulting savings rate.",
    flashcardFrontFr: "Règle 50/30/20",
    flashcardFrontEn: "50/30/20 rule",
    flashcardBackFr: "Guide indicatif : 50 % besoins, 30 % envies, 20 % épargne — à adapter.",
    flashcardBackEn: "Indicative guide: 50% needs, 30% wants, 20% savings — adapt it.",
    exercisePromptFr:
      "Net 3 000. Besoins 1 600, envies 900. Combien reste pour l'épargne ? Quel taux d'épargne ?",
    exercisePromptEn:
      "Net 3,000. Needs 1,600, wants 900. How much left for savings? What savings rate?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Net 3 000, besoins 1 600, envies 900. Épargne restante et taux ?",
      promptEn: "Net 3,000, needs 1,600, wants 900. Remaining savings and rate?",
      explanationCorrectFr: "Reste 500 → 500/3 000 ≈ 17 %.",
      explanationCorrectEn: "500 left → 500/3,000 ≈ 17%.",
      difficulty: 2,
      options: [
        opt("500 ≈ 17 %", "500 ≈ 17%", true),
        opt("900 ≈ 30 %", "900 ≈ 30%", false, "900 est le poste envies, pas l'épargne.", "900 is the wants line, not savings."),
        opt("1 600 ≈ 53 %", "1,600 ≈ 53%", false),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Si les besoins dépassent 50 %, que faire en premier ?",
        promptEn: "If needs exceed 50%, what should you do first?",
        explanationCorrectFr: "Réduire les envies et vérifier les fuites avant de supprimer l'épargne d'urgence.",
        explanationCorrectEn: "Cut wants and check leaks before removing emergency saving.",
        difficulty: 2,
        options: [
          opt("Supprimer toute épargne d'urgence", "Remove all emergency saving", false),
          opt("Réduire les envies et fuites d'abord", "Cut wants and leaks first", true),
          opt("Ignorer le dépassement", "Ignore the overrun", false),
        ],
      }),
      q({
        type: "TRUE_FALSE",
        promptFr: "Un budget doit être basé sur le revenu net.",
        promptEn: "A budget should be based on net income.",
        explanationCorrectFr: "Vrai.",
        explanationCorrectEn: "True.",
        difficulty: 1,
        options: [opt("Vrai", "True", true), opt("Faux", "False", false)],
      }),
    ],
  }),
];
