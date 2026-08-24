/**
 * Personal Finance quality upgrades — enriched situational lessons (FR/EN).
 * Replaces selected slugs with richer FCFA/international scenarios.
 * Educational only — not personalized financial advice.
 */

import { buildPfLesson, opt, q } from "./pf-factory";
import type { CompactLesson } from "./compact";

const PF_QUALITY_UPGRADES: CompactLesson[] = [
  // ── C tier: saving-rate ───────────────────────────────────────────────────
  buildPfLesson({
    slug: "saving-rate",
    titleFr: "Taux d'épargne",
    titleEn: "Saving Rate",
    descriptionFr: "Mesurer la part du revenu net mise de côté.",
    descriptionEn: "Measure the share of net income set aside.",
    moduleSlug: "foundations",
    sortOrder: 9,
    estimatedMinutes: 6,
    difficulty: "BEGINNER",
    skillSlug: "pf-foundations",
    learningObjective: "APPLY",
    objectiveFr:
      "Calculer et interpréter un taux d'épargne mensuel, puis le relier au budget et aux habitudes d'épargne.",
    objectiveEn:
      "Compute and interpret a monthly savings rate, then link it to budgeting and saving habits.",
    explanationFr:
      "Le taux d'épargne = épargne ÷ revenu net. C'est l'indicateur le plus fiable de votre trajectoire patrimoniale : plus parlant qu'un solde isolé qui peut refléter un héritage ou une vente ponctuelle. Améliorer le taux de quelques points (ex. de 8 % à 12 %) change fortement le long terme grâce à la régularité — surtout quand il est suivi mois après mois, comme dans la leçon « Construire un budget » et « Habitudes d'épargne ». En zone UEMOA, pensez en FCFA nets après cotisations : un salaire de 650 000 FCFA avec 97 500 FCFA épargnés = 15 %.",
    explanationEn:
      "Savings rate = savings ÷ net income. It is the most reliable signal of your wealth trajectory — clearer than an isolated balance that may reflect a windfall or one-off sale. Improving the rate by a few points (e.g. from 8% to 12%) strongly changes the long run through consistency — especially when tracked month after month, as in “Building a Budget” and “Saving Habits.” In UEMOA, think in net FCFA after contributions: a 650,000 FCFA salary with 97,500 FCFA saved = 15%.",
    exampleFr:
      "Situation A (Abidjan) : net 650 000 FCFA, épargne 97 500 FCFA → taux 15 %. Situation B (Paris) : net 2 800 €, épargne 420 € → même taux 15 %. Situation C : net 450 000 FCFA, dépenses variables montent de 40 000 FCFA sans ajustement → épargne tombe à 27 500 FCFA, taux ≈ 6 % : le cash flow mensuel (leçon « Flux de trésorerie ») signale le problème avant que le solde ne s'effondre.",
    exampleEn:
      "Situation A (Abidjan): net 650,000 FCFA, savings 97,500 FCFA → 15% rate. Situation B (Paris): net €2,800, savings €420 → same 15% rate. Situation C: net 450,000 FCFA, variable spending rises 40,000 FCFA with no adjustment → savings fall to 27,500 FCFA, rate ≈ 6%: monthly cash flow (“Personal Cash Flow”) flags the problem before the balance collapses.",
    practicalFr:
      "Calculez votre taux sur les 2 derniers mois en FCFA ou en euros nets. Comparez au poste « épargne » de votre budget. Si l'écart dépasse 3 points, identifiez une dépense variable à ajuster (leçon « Dépenses fixes vs variables »).",
    practicalEn:
      "Compute your rate for the last 2 months in net FCFA or euros. Compare to your budget’s savings line. If the gap exceeds 3 points, identify one variable expense to adjust (“Fixed vs Variable Expenses”).",
    mistakeFr:
      "Compter comme « épargne » un virement vers un compte qui sert ensuite à payer des envies — ou confondre taux d'épargne élevé un mois (bonus) avec une discipline durable.",
    mistakeEn:
      "Counting as “savings” a transfer to an account that is then spent on wants — or confusing a high savings rate one month (bonus) with durable discipline.",
    takeawayFr:
      "Le taux d'épargne mesure la discipline du mois, pas la chance — suivez-le, ne le devinez pas.",
    takeawayEn:
      "Savings rate measures the month’s discipline, not luck — track it, don’t guess it.",
    decisionFr:
      "Fixer un taux cible minimal réaliste (ex. 10–15 % du net) et le comparer chaque fin de mois au simulateur Budget.",
    decisionEn:
      "Set a realistic minimum target rate (e.g. 10–15% of net) and compare it each month-end in the Budget simulator.",
    simulatorFr:
      "Ouvrez le simulateur Budget (leçon « Construire un budget ») : saisissez un revenu net en FCFA, ajustez les postes de dépenses, puis lisez le taux d'épargne obtenu. Testez +25 000 FCFA sur les envies : que devient le taux ?",
    simulatorEn:
      "Open the Budget simulator (“Building a Budget”): enter net income in FCFA, adjust expense lines, then read the resulting savings rate. Try +25,000 FCFA on wants: what happens to the rate?",
    flashcardFrontFr: "Taux d'épargne",
    flashcardFrontEn: "Savings rate",
    flashcardBackFr: "Épargne ÷ revenu net — indicateur de trajectoire mensuelle.",
    flashcardBackEn: "Savings ÷ net income — monthly trajectory indicator.",
    exercisePromptFr:
      "Net 520 000 FCFA, épargne 78 000 FCFA. Taux ? Si vous passez à 104 000 FCFA d'épargne sans changer le revenu, nouveau taux ? Lien avec « Habitudes d'épargne » ?",
    exercisePromptEn:
      "Net 520,000 FCFA, savings 78,000 FCFA. Rate? If savings rise to 104,000 FCFA with unchanged income, new rate? Link to “Saving Habits”?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : Aïcha touche 580 000 FCFA nets. Elle épargne 87 000 FCFA en automatisant un virement le jour de paie, mais dépense 35 000 FCFA de plus en sorties le même mois sans toucher aux fixes. Quel est son taux d'épargne réel ce mois-ci ?",
      promptEn:
        "Situation: Aïcha earns 580,000 FCFA net. She saves 87,000 FCFA via an automated payday transfer, but spends 35,000 FCFA more on outings that month without changing fixed costs. What is her actual savings rate this month?",
      explanationCorrectFr:
        "87 000 − 35 000 = 52 000 FCFA épargnés net → 52 000 / 580 000 ≈ 9 %.",
      explanationCorrectEn:
        "87,000 − 35,000 = 52,000 FCFA net saved → 52,000 / 580,000 ≈ 9%.",
      difficulty: 2,
      options: [
        opt("≈ 15 %", "≈ 15%", false, "15 % serait 87 000 / 580 000 sans la surconsommation.", "15% would be 87,000 / 580,000 without overspending."),
        opt("≈ 9 %", "≈ 9%", true),
        opt("≈ 21 %", "≈ 21%", false, "Il faut diviser l'épargne nette par le revenu net.", "Divide net savings by net income."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : net 720 000 FCFA, objectif taux 20 %. Quel montant minimum épargner ce mois ?",
        promptEn:
          "Situation: net 720,000 FCFA, target rate 20%. What minimum amount to save this month?",
        explanationCorrectFr: "720 000 × 0,20 = 144 000 FCFA.",
        explanationCorrectEn: "720,000 × 0.20 = 144,000 FCFA.",
        difficulty: 2,
        options: [
          opt("144 000 FCFA", "144,000 FCFA", true),
          opt("72 000 FCFA", "72,000 FCFA", false, "72 000 = 10 %, pas 20 %.", "72,000 = 10%, not 20%."),
          opt("360 000 FCFA", "360,000 FCFA", false, "360 000 = 50 % — au-delà de l'objectif.", "360,000 = 50% — beyond the target."),
        ],
      }),
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : le taux passe de 18 % à 9 % deux mois de suite alors que le revenu est stable. Quelle leçon liée diagnostiquer en premier ?",
        promptEn:
          "Situation: the rate falls from 18% to 9% two months in a row while income is stable. Which related lesson to diagnose first?",
        explanationCorrectFr:
          "Flux de trésorerie : entrées stables mais sorties qui montent — vérifier variables et envies.",
        explanationCorrectEn:
          "Personal cash flow: stable inflows but rising outflows — check variables and wants.",
        difficulty: 2,
        options: [
          opt("Flux de trésorerie / budget", "Cash flow / budget", true),
          opt("Bases des obligations", "Bonds basics", false, "Les obligations concernent l'investissement, pas la chute du taux d'épargne.", "Bonds concern investing, not a falling savings rate."),
          opt("Méthode avalanche", "Avalanche method", false, "L'avalanche concerne le remboursement de dettes.", "Avalanche concerns debt repayment."),
        ],
      }),
    ],
  }),

  // ── C tier: saving-habits ─────────────────────────────────────────────────
  buildPfLesson({
    slug: "saving-habits",
    titleFr: "Habitudes d'épargne",
    titleEn: "Saving Habits",
    descriptionFr: "Automatiser et rendre l'épargne régulière.",
    descriptionEn: "Automate and make saving consistent.",
    moduleSlug: "foundations",
    sortOrder: 10,
    estimatedMinutes: 6,
    difficulty: "BEGINNER",
    skillSlug: "pf-foundations",
    learningObjective: "APPLY",
    objectiveFr:
      "Mettre en place une habitude d'épargne automatique réaliste et la relier au taux d'épargne suivi.",
    objectiveEn:
      "Set up a realistic automatic saving habit and link it to a tracked savings rate.",
    explanationFr:
      "L'épargne régulière bat l'épargne « quand il reste quelque chose ». Automatiser un virement juste après le salaire (payer d'abord soi-même) réduit la dépendance à la volonté — principe central aussi des « Habitudes de patrimoine » en module wealth. Commencez petit (ex. 25 000 FCFA / mois), augmentez après 3 mois si le taux d'épargne (leçon « Taux d'épargne ») le confirme. En zone FCFA comme en euros, la mécanique est identique : date fixe, montant fixe, compte séparé.",
    explanationEn:
      "Regular saving beats saving “whatever is left.” Automating a transfer right after payday (pay yourself first) reduces reliance on willpower — a core principle in “Wealth Habits” too. Start small (e.g. 25,000 FCFA / month), increase after 3 months if the savings rate (“Saving Rate”) confirms it. In FCFA or euros, the mechanics are the same: fixed date, fixed amount, separate account.",
    exampleFr:
      "Kofi, net 480 000 FCFA : virement auto de 60 000 FCFA le 5 de chaque mois vers un compte épargne → 720 000 FCFA / an sans y penser, taux ≈ 12,5 %. Marie, net 2 200 € : 220 € auto → même logique. Si Kofi augmente à 75 000 FCFA après 3 mois réussis, son taux passe à ≈ 15,6 % — progrès mesurable, pas une résolution de janvier.",
    exampleEn:
      "Kofi, net 480,000 FCFA: auto-transfer 60,000 FCFA on the 5th to a savings account → 720,000 FCFA / year without thinking, rate ≈ 12.5%. Marie, net €2,200: €220 auto → same logic. If Kofi raises to 75,000 FCFA after 3 successful months, his rate rises to ≈ 15.6% — measurable progress, not a January resolution.",
    practicalFr:
      "Choisissez un montant tenable 3 mois (ex. 5–10 % du net), un jour de virement (J+1 après salaire), un compte destination. Notez le taux d'épargne cible et vérifiez-le via le simulateur Budget.",
    practicalEn:
      "Pick an amount you can sustain 3 months (e.g. 5–10% of net), a transfer day (day after payday), a destination account. Note the target savings rate and check it in the Budget simulator.",
    mistakeFr:
      "Viser 30 % d'épargne dès le premier mois et casser l'habitude — ou oublier de séparer compte courant et compte épargne.",
    mistakeEn:
      "Aiming for 30% savings from month one and breaking the habit — or forgetting to separate checking and savings accounts.",
    takeawayFr:
      "La régularité bat l'intensité ponctuelle — automatisez, puis augmentez par paliers.",
    takeawayEn:
      "Consistency beats occasional intensity — automate, then increase in steps.",
    decisionFr:
      "Décider d'un montant auto, d'une date et d'un compte — démarrer cette semaine, pas « le mois prochain ».",
    decisionEn:
      "Decide an auto amount, date, and account — start this week, not “next month.”",
    simulatorFr:
      "Dans le simulateur Budget, partez d'un revenu net en FCFA et ajoutez une ligne « épargne auto » fixe. Observez si le reste à vivre reste viable — ajustez le montant avant de programmer le virement réel.",
    simulatorEn:
      "In the Budget simulator, start from net FCFA income and add a fixed “auto savings” line. See if remaining spending stays viable — adjust the amount before scheduling the real transfer.",
    flashcardFrontFr: "Payer d'abord soi-même",
    flashcardFrontEn: "Pay yourself first",
    flashcardBackFr: "Épargner dès réception du revenu, avant les envies.",
    flashcardBackEn: "Save when income arrives, before discretionary spending.",
    exercisePromptFr:
      "Net 550 000 FCFA. Proposez un plan : montant auto, fréquence, compte destination, date. Quel taux cible sur 3 mois ? Lien avec « Taux d'épargne » ?",
    exercisePromptEn:
      "Net 550,000 FCFA. Propose a plan: auto amount, frequency, destination, date. Target rate over 3 months? Link to “Saving Rate”?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : Fatou reçoit 620 000 FCFA nets le 28. Elle programme un virement de 93 000 FCFA le 29 vers son compte épargne, mais attend souvent fin de mois pour « voir ce qui reste » pour le reste. Quelle pratique manque-t-il pour ancrer l'habitude ?",
      promptEn:
        "Situation: Fatou receives 620,000 FCFA net on the 28th. She schedules a 93,000 FCFA transfer on the 29th to savings, but often waits until month-end to “see what’s left” for everything else. Which practice is missing to anchor the habit?",
      explanationCorrectFr:
        "Payer d'abord soi-même : l'épargne part en premier ; le reste du budget s'ajuste aux envies, pas l'inverse.",
      explanationCorrectEn:
        "Pay yourself first: savings leave first; the rest of the budget adjusts to wants, not the reverse.",
      difficulty: 2,
      options: [
        opt("Payer d'abord soi-même (épargne avant envies)", "Pay yourself first (save before wants)", true),
        opt("Attendre le bonus annuel", "Wait for the annual bonus", false, "Reporter à un bonus casse la régularité.", "Waiting for a bonus breaks consistency."),
        opt("Épargner seulement les mois pairs", "Save only even months", false, "La régularité mensuelle construit l'habitude.", "Monthly consistency builds the habit."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : virement auto 45 000 FCFA / mois, net 450 000 FCFA. Après 6 mois sans interruption, quel taux d'épargne minimal cet automatisme garantit-il (hors dépenses extra) ?",
        promptEn:
          "Situation: auto transfer 45,000 FCFA / month, net 450,000 FCFA. After 6 uninterrupted months, what minimum savings rate does this automation guarantee (excluding extra spending)?",
        explanationCorrectFr: "45 000 / 450 000 = 10 % chaque mois.",
        explanationCorrectEn: "45,000 / 450,000 = 10% each month.",
        difficulty: 2,
        options: [
          opt("10 %", "10%", true),
          opt("4,5 %", "4.5%", false, "45 000 n'est pas 4,5 % de 450 000.", "45,000 is not 4.5% of 450,000."),
          opt("45 %", "45%", false, "Confusion entre montant et pourcentage.", "Confusing amount with percentage."),
        ],
      }),
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : l'habitude auto fonctionne mais le taux d'épargne global stagne à 8 % car les dépenses variables montent. Quelle leçon complémentaire consulter ?",
        promptEn:
          "Situation: the auto habit works but overall savings rate stays at 8% because variable spending rises. Which complementary lesson to review?",
        explanationCorrectFr:
          "Dépenses fixes vs variables — agir sur le variable avant d'augmenter le virement auto.",
        explanationCorrectEn:
          "Fixed vs variable expenses — act on variable before raising the auto transfer.",
        difficulty: 2,
        options: [
          opt("Dépenses fixes vs variables", "Fixed vs variable expenses", true),
          opt("Bases de l'immobilier", "Real estate basics", false, "L'immobilier ne résout pas une fuite budgétaire mensuelle.", "Real estate does not fix a monthly budget leak."),
          opt("Bases des actions", "Stocks basics", false, "Investir sans stabiliser l'épargne aggrave le risque.", "Investing before stabilizing saving increases risk."),
        ],
      }),
    ],
  }),

  // ── B foundations ─────────────────────────────────────────────────────────
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
    objectiveFr:
      "Classer vos dépenses en fixes et variables pour savoir où agir vite sous contrainte budgétaire.",
    objectiveEn:
      "Classify expenses as fixed vs variable to know where to act quickly under budget pressure.",
    explanationFr:
      "Les dépenses fixes sont prévisibles et contractuelles (loyer, assurance, abonnements essentiels). Les variables fluctuent (courses, transport, sorties, cadeaux). En cas de tension — cash flow négatif ou taux d'épargne en chute — on ajuste d'abord le variable, sauf si une fixe peut être renégociée (forfait téléphone, assurance). Cette carte mentale accélère les décisions et alimente directement le simulateur Budget de la leçon « Construire un budget ».",
    explanationEn:
      "Fixed expenses are predictable and contractual (rent, insurance, essential subscriptions). Variable ones fluctuate (groceries, transport, outings, gifts). Under pressure — negative cash flow or falling savings rate — adjust variable first unless a fixed cost can be renegotiated (phone plan, insurance). This mental map speeds decisions and feeds directly into the Budget simulator in “Building a Budget.”",
    exampleFr:
      "Net 550 000 FCFA : fixes 320 000 (loyer 250 000, transport abonnement 45 000, assurance 25 000), variables 180 000–240 000 (courses, sorties). Marge théorique : 90 000–150 000. Si variables montent à 280 000, marge ≈ −50 000 : priorité = couper 2 postes variables (ex. −30 000 sorties, −20 000 courses) avant de toucher à l'épargne auto.",
    exampleEn:
      "Net 550,000 FCFA: fixed 320,000 (rent 250,000, transport pass 45,000, insurance 25,000), variable 180,000–240,000 (groceries, outings). Theoretical margin: 90,000–150,000. If variables rise to 280,000, margin ≈ −50,000: priority = cut 2 variable lines (e.g. −30,000 outings, −20,000 groceries) before touching auto savings.",
    practicalFr:
      "Classez 8 dépenses récentes en F ou V. Entourez 2 V réductibles sans douleur majeure. Testez l'impact dans le simulateur Budget.",
    practicalEn:
      "Label 8 recent expenses F or V. Circle 2 reducible V without major pain. Test the impact in the Budget simulator.",
    mistakeFr:
      "Traiter restaurants et streaming premium comme « fixes » parce qu'ils sont récurrents — récurrent ≠ incompressible.",
    mistakeEn:
      "Treating restaurants and premium streaming as “fixed” because they recur — recurring ≠ immovable.",
    takeawayFr:
      "Agir d'abord sur le variable ; questionner le fixe ensuite.",
    takeawayEn:
      "Act on variable first; question fixed next.",
    decisionFr:
      "Savoir quelle part de votre budget est flexible ce mois-ci — chiffre en FCFA ou euros, pas en % vague.",
    decisionEn:
      "Know what share of your budget is flexible this month — in FCFA or euros, not vague percentages.",
    simulatorFr:
      "Ouvrez le simulateur Budget (leçon « Construire un budget ») : saisissez fixes et variables séparément. Augmentez les variables de 15 % — le taux d'épargne devient-il négatif ?",
    simulatorEn:
      "Open the Budget simulator (“Building a Budget”): enter fixed and variable separately. Raise variables 15% — does the savings rate turn negative?",
    flashcardFrontFr: "Dépense fixe",
    flashcardFrontEn: "Fixed expense",
    flashcardBackFr: "Montant récurrent et prévisible (loyer, assurance).",
    flashcardBackEn: "Recurring, predictable amount (rent, insurance).",
    exercisePromptFr:
      "Net 2 500 € (ou 600 000 FCFA). Fixes 1 400, variables 800. Marge ? Si variables montent à 1 100, quelle action prioritaire ?",
    exercisePromptEn:
      "Net €2,500 (or 600,000 FCFA). Fixed 1,400, variable 800. Margin? If variables rise to 1,100, priority action?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : budget serré à Dakar. Loyer 180 000 FCFA, courses 95 000 FCFA, abonnement streaming 8 500 FCFA, sorties 65 000 FCFA. Le revenu net baisse de 50 000 FCFA ce mois. Où agir en premier ?",
      promptEn:
        "Situation: tight budget in Dakar. Rent 180,000 FCFA, groceries 95,000 FCFA, streaming 8,500 FCFA, outings 65,000 FCFA. Net income falls 50,000 FCFA this month. Where to act first?",
      explanationCorrectFr:
        "Variables ajustables : sorties et streaming avant le loyer (fixe essentiel).",
      explanationCorrectEn:
        "Adjustable variables: outings and streaming before rent (essential fixed).",
      difficulty: 2,
      options: [
        opt("Réduire sorties et abonnement streaming", "Cut outings and streaming subscription", true),
        opt("Ne pas payer le loyer", "Skip rent", false, "Le loyer est un besoin fixe essentiel.", "Rent is an essential fixed need."),
        opt("Augmenter les sorties pour « se faire plaisir »", "Increase outings to treat yourself", false, "Aggrave le déficit.", "Worsens the deficit."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : fixes = 62 % du net, variables = 38 %. Le taux d'épargne cible est 15 % mais vous êtes à 0 %. Quelle catégorie cibler en priorité ?",
        promptEn:
          "Situation: fixed = 62% of net, variable = 38%. Target savings rate is 15% but you are at 0%. Which category to target first?",
        explanationCorrectFr:
          "Variables — plus de marge de manœuvre sans renégocier le loyer immédiatement.",
        explanationCorrectEn:
          "Variables — more room to maneuver without renegotiating rent immediately.",
        difficulty: 2,
        options: [
          opt("Variables (envies, courses, loisirs)", "Variables (wants, groceries, leisure)", true),
          opt("Uniquement les fixes", "Only fixed costs", false, "Les fixes sont plus rigides à court terme.", "Fixed costs are more rigid short term."),
          opt("Ignorer le budget", "Ignore the budget", false, "Sans action, le déficit persiste.", "Without action, the deficit persists."),
        ],
      }),
    ],
  }),

  buildPfLesson({
    slug: "cash-flow-basics",
    titleFr: "Flux de trésorerie personnel",
    titleEn: "Personal Cash Flow",
    descriptionFr: "Voir l'argent qui entre et sort sur une période.",
    descriptionEn: "See money in and out over a period.",
    moduleSlug: "foundations",
    sortOrder: 7,
    estimatedMinutes: 7,
    difficulty: "BEGINNER",
    skillSlug: "pf-budgeting",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Calculer un flux de trésorerie mensuel (entrées − sorties) et l'utiliser pour ajuster le budget.",
    objectiveEn:
      "Compute monthly cash flow (inflows − outflows) and use it to adjust the budget.",
    explanationFr:
      "Le cash flow personnel = entrées − sorties sur une période. Positif : vous renforcez votre coussin ou votre épargne. Négatif : vous piochez dans l'épargne ou la dette. C'est l'indicateur le plus concret du mois — plus parlant qu'un budget théorique non suivi. Reliez-le au simulateur Budget (« Construire un budget ») : un budget équilibré sur papier peut masquer un cash flow négatif si des dépenses oubliées ne sont pas saisies.",
    explanationEn:
      "Personal cash flow = inflows − outflows over a period. Positive: you strengthen your cushion or savings. Negative: you tap savings or debt. It is the most concrete monthly signal — clearer than an untracked theoretical budget. Link it to the Budget simulator (“Building a Budget”): a balanced paper budget can hide negative cash flow if forgotten expenses are not entered.",
    exampleFr:
      "Entrées 680 000 FCFA (salaire + petit freelance), sorties 715 000 FCFA → cash flow −35 000 FCFA. Trois mois consécutifs à −40 000 FCFA = −120 000 FCFA de « fuite » — signal urgent pour revoir variables et taux d'épargne. Équivalent international : entrées 3 100 €, sorties 3 400 € → −300 €.",
    exampleEn:
      "Inflows 680,000 FCFA (salary + small freelance), outflows 715,000 FCFA → cash flow −35,000 FCFA. Three months at −40,000 FCFA = −120,000 FCFA “leak” — urgent signal to review variables and savings rate. International equivalent: inflows €3,100, outflows €3,400 → −€300.",
    practicalFr:
      "Calculez votre cash flow du mois dernier avec relevés bancaires (FCFA ou euros). Si négatif, identifiez les 3 plus grosses sorties variables.",
    practicalEn:
      "Compute last month’s cash flow from bank statements (FCFA or euros). If negative, identify the 3 largest variable outflows.",
    mistakeFr:
      "Confondre un solde de compte élevé (héritage d'anciens mois) avec un cash flow positif ce mois-ci.",
    mistakeEn:
      "Confusing a high account balance (leftover from prior months) with positive cash flow this month.",
    takeawayFr:
      "Le solde montre le stock ; le cash flow montre la tendance.",
    takeawayEn:
      "Balance shows stock; cash flow shows the trend.",
    decisionFr:
      "Savoir si le mois a été positif ou négatif — et corriger dans le simulateur Budget avant le mois suivant.",
    decisionEn:
      "Know whether the month was positive or negative — and fix it in the Budget simulator before next month.",
    simulatorFr:
      "Dans le simulateur Budget (leçon « Construire un budget »), saisissez revenus et dépenses : le « reste » mensuel est votre cash flow. Testez −50 000 FCFA sur une dépense variable : repassez-vous en positif ?",
    simulatorEn:
      "In the Budget simulator (“Building a Budget”), enter income and expenses: the monthly “remaining” is your cash flow. Try −50,000 FCFA on one variable expense: do you turn positive?",
    flashcardFrontFr: "Cash flow",
    flashcardFrontEn: "Cash flow",
    flashcardBackFr: "Entrées − sorties sur une période.",
    flashcardBackEn: "Inflows − outflows over a period.",
    exercisePromptFr:
      "Entrées 3 100 €, sorties 3 400 €. Cash flow ? Si cela dure 4 mois, quelle perte cumulée ? Action prioritaire ?",
    exercisePromptEn:
      "Inflows €3,100, outflows €3,400. Cash flow? If this lasts 4 months, cumulative loss? Priority action?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : entrées 720 000 FCFA, sorties 780 000 FCFA en octobre ; solde compte courant encore positif grâce à un excédent de septembre. Quel diagnostic pour octobre ?",
      promptEn:
        "Situation: inflows 720,000 FCFA, outflows 780,000 FCFA in October; checking balance still positive thanks to September surplus. Diagnosis for October?",
      explanationCorrectFr:
        "Cash flow octobre = −60 000 FCFA — le solde positif masque une tendance négative.",
      explanationCorrectEn:
        "October cash flow = −60,000 FCFA — positive balance masks a negative trend.",
      difficulty: 2,
      options: [
        opt("Cash flow négatif (−60 000 FCFA) malgré solde positif", "Negative cash flow (−60,000 FCFA) despite positive balance", true),
        opt("Cash flow positif car le solde est positif", "Positive cash flow because balance is positive", false, "Stock ≠ flux du mois.", "Stock ≠ monthly flow."),
        opt("Aucun ajustement nécessaire", "No adjustment needed", false, "Trois mois négatifs épuiseraient l'excédent.", "Three negative months would drain the surplus."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : cash flow +85 000 FCFA / mois, objectif fonds d'urgence 510 000 FCFA (3 mois d'essentiels). En combien de mois minimum (sans investir ailleurs) ?",
        promptEn:
          "Situation: cash flow +85,000 FCFA / month, emergency target 510,000 FCFA (3 months essentials). Minimum months (without investing elsewhere)?",
        explanationCorrectFr: "510 000 / 85 000 = 6 mois.",
        explanationCorrectEn: "510,000 / 85,000 = 6 months.",
        difficulty: 2,
        options: [
          opt("6 mois", "6 months", true),
          opt("3 mois", "3 months", false, "3 mois ne couvrirait que 255 000 FCFA.", "3 months would cover only 255,000 FCFA."),
          opt("12 mois", "12 months", false, "Division simple donne 6, pas 12.", "Simple division gives 6, not 12."),
        ],
      }),
    ],
  }),

  buildPfLesson({
    slug: "opportunity-cost",
    titleFr: "Coût d'opportunité",
    titleEn: "Opportunity Cost",
    descriptionFr: "Voir ce que vous abandonnez quand vous choisissez une option.",
    descriptionEn: "See what you give up when you choose one option.",
    moduleSlug: "foundations",
    sortOrder: 11,
    estimatedMinutes: 7,
    difficulty: "INTERMEDIATE",
    skillSlug: "pf-foundations",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Identifier le coût d'opportunité d'une dépense ou d'un choix financier avec montants concrets.",
    objectiveEn:
      "Identify the opportunity cost of a spending or financial choice with concrete amounts.",
    explanationFr:
      "Le coût d'opportunité est la valeur de la meilleure alternative abandonnée. Acheter un smartphone à 350 000 FCFA, c'est aussi renoncer à 350 000 FCFA d'épargne, de remboursement de dette ou d'investissement. Rendre ce « au lieu de » visible améliore les décisions sans moraliser. Sur une dette à 18 % / an, 350 000 FCFA remboursés évitent des intérêts futurs — le coût d'opportunité inclut ces intérêts évités, pas seulement le prix affiché.",
    explanationEn:
      "Opportunity cost is the value of the best alternative you give up. Buying a smartphone for 350,000 FCFA also means giving up 350,000 FCFA of saving, debt repayment, or investing. Making the “instead of” visible improves decisions without moralizing. On 18%/year debt, repaying 350,000 FCFA avoids future interest — opportunity cost includes interest avoided, not just sticker price.",
    exampleFr:
      "Choix : week-end 240 000 FCFA vs remboursement anticipé d'une dette carte à 22 % (solde 240 000 FCFA). Coût d'opportunité du week-end ≈ intérêts futurs évités + liberté de cash flow. Équivalent € : 400 week-end vs 400 sur dette à 12 %.",
    exampleEn:
      "Choice: 240,000 FCFA weekend vs early repayment of 22% card debt (240,000 FCFA balance). Opportunity cost of weekend ≈ future interest avoided + cash-flow freedom. € equivalent: €400 weekend vs €400 on 12% debt.",
    practicalFr:
      "Pour un achat non essentiel > 100 000 FCFA (ou > 200 €), écrivez l'alternative que vous auriez pu financer.",
    practicalEn:
      "For a non-essential purchase > 100,000 FCFA (or > €200), write the alternative you could have funded.",
    mistakeFr:
      "Ne compter que le prix affiché et ignorer les intérêts ou le rendement potentiel de l'alternative.",
    mistakeEn:
      "Counting only sticker price and ignoring interest or potential return of the alternative.",
    takeawayFr:
      "Chaque choix a un « au lieu de » — rendez-le explicite en FCFA ou euros.",
    takeawayEn:
      "Every choice has an “instead of” — make it explicit in FCFA or euros.",
    decisionFr:
      "Avant un achat > 200 000 FCFA, nommer l'alternative abandonnée et son impact sur 12 mois.",
    decisionEn:
      "Before a purchase > 200,000 FCFA, name the alternative forgone and its 12-month impact.",
    flashcardFrontFr: "Coût d'opportunité",
    flashcardFrontEn: "Opportunity cost",
    flashcardBackFr: "Valeur de la meilleure option non choisie.",
    flashcardBackEn: "Value of the best option not chosen.",
    exercisePromptFr:
      "Choix : gadget 180 000 FCFA vs remboursement dette 18 %. Décrivez le coût d'opportunité qualitatif et chiffré sur 1 an.",
    exercisePromptEn:
      "Choice: 180,000 FCFA gadget vs 18% debt repayment. Describe qualitative and numeric opportunity cost over 1 year.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : Moussa a 500 000 FCFA disponibles. Option A : achat moto loisir. Option B : rembourser une dette consommation à 24 % (solde 500 000 FCFA). Quel coût d'opportunité de l'option A est le plus pertinent ?",
      promptEn:
        "Situation: Moussa has 500,000 FCFA available. Option A: leisure motorcycle purchase. Option B: repay 24% consumer debt (500,000 FCFA balance). What opportunity cost of A is most relevant?",
      explanationCorrectFr:
        "Intérêts futurs évités + réduction du stress de dette — la moto renonce à ces bénéfices.",
      explanationCorrectEn:
        "Future interest avoided + reduced debt stress — the motorcycle forgoes these benefits.",
      difficulty: 2,
      options: [
        opt("Intérêts évités et liberté financière reportés", "Interest avoided and delayed financial freedom", true),
        opt("Aucun coût — l'argent est déjà disponible", "No cost — money is already available", false, "Disponible ≠ sans alternative.", "Available ≠ without alternative."),
        opt("Garantie de rendement boursier", "Guaranteed stock return", false, "Aucun rendement n'est garanti.", "No return is guaranteed."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : achat impulsif 75 000 FCFA alors que le fonds d'urgence manque de 75 000 FCFA pour atteindre 3 mois d'essentiels. Coût d'opportunité principal ?",
        promptEn:
          "Situation: impulsive 75,000 FCFA purchase while emergency fund is 75,000 FCFA short of 3 months essentials. Main opportunity cost?",
        explanationCorrectFr:
          "Sécurité liquide non constituée — risque de dette ou vente forcée en cas de choc.",
        explanationCorrectEn:
          "Unbuilt liquid safety — risk of debt or forced sale if a shock hits.",
        difficulty: 2,
        options: [
          opt("Report du coussin d'urgence", "Delayed emergency cushion", true),
          opt("Augmentation automatique du salaire", "Automatic salary increase", false, "Un achat n'augmente pas le salaire.", "A purchase does not raise salary."),
          opt("Réduction des impôts", "Tax reduction", false, "Sans lien avec un achat consommation.", "Unrelated to a consumption purchase."),
        ],
      }),
    ],
  }),

  buildPfLesson({
    slug: "inflation-basics",
    titleFr: "Bases de l'inflation",
    titleEn: "Inflation Basics",
    descriptionFr: "Comprendre la perte de pouvoir d'achat dans le temps.",
    descriptionEn: "Understand purchasing-power loss over time.",
    moduleSlug: "foundations",
    sortOrder: 12,
    estimatedMinutes: 6,
    difficulty: "BEGINNER",
    skillSlug: "pf-foundations",
    learningObjective: "IDENTIFY",
    isShort: true,
    shortDurationSeconds: 150,
    objectiveFr:
      "Expliquer comment l'inflation réduit le pouvoir d'achat d'une épargne non rémunérée ou mal rémunérée.",
    objectiveEn:
      "Explain how inflation reduces purchasing power of unrewarded or poorly rewarded cash.",
    explanationFr:
      "L'inflation est la hausse générale des prix. À 4 % / an, un panier à 100 000 FCFA aujourd'hui coûte environ 148 000 FCFA dans 10 ans. Une épargne à 0 % perd en valeur réelle. Même un compte à 1,5 % avec inflation à 4 % donne un rendement réel négatif. Comprendre cela motive des placements adaptés à l'horizon — sans promesse de performance. Reliez à « Taux d'épargne » : épargner sans rendement réel positif ne construit pas le pouvoir d'achat.",
    explanationEn:
      "Inflation is a general rise in prices. At 4%/year, a basket at 100,000 FCFA today costs about 148,000 FCFA in 10 years. Cash at 0% loses real value. Even a 1.5% account with 4% inflation yields negative real return. Understanding this motivates horizon-appropriate placements — without performance promises. Link to “Saving Rate”: saving without positive real return does not build purchasing power.",
    exampleFr:
      "Panier courses 85 000 FCFA / mois en 2024 ; à +3,5 % / an ≈ 120 000 FCFA / mois en 2034 (ordre de grandeur). 500 000 FCFA sous le matelas en 2024 achètent moins de courses en 2034 qu'aujourd'hui.",
    exampleEn:
      "Grocery basket 85,000 FCFA / month in 2024; at +3.5%/year ≈ 120,000 FCFA / month in 2034 (order of magnitude). 500,000 FCFA under the mattress in 2024 buys fewer groceries in 2034 than today.",
    practicalFr:
      "Citez un bien dont le prix a monté en 5 ans (transport, loyer, riz). Estimez le rendement réel si votre épargne rapporte 2 % et l'inflation est 4 %.",
    practicalEn:
      "Name a good whose price rose over 5 years (transport, rent, rice). Estimate real return if savings yield 2% and inflation is 4%.",
    mistakeFr:
      "Croire que « garder cash » protège toujours le pouvoir d'achat — surtout sur 10+ ans.",
    mistakeEn:
      "Believing “keeping cash” always protects purchasing power — especially over 10+ years.",
    takeawayFr:
      "L'inflation taxe silencieusement l'épargne non rémunérée — le rendement nominal ne suffit pas.",
    takeawayEn:
      "Inflation silently taxes unrewarded cash — nominal yield is not enough.",
    decisionFr:
      "Savoir pourquoi un rendement nominal inférieur à l'inflation est insuffisant sur le long terme.",
    decisionEn:
      "Know why nominal return below inflation is insufficient long term.",
    flashcardFrontFr: "Pouvoir d'achat",
    flashcardFrontEn: "Purchasing power",
    flashcardBackFr: "Quantité de biens/services qu'une somme peut acheter.",
    flashcardBackEn: "Quantity of goods/services a sum can buy.",
    exercisePromptFr:
      "Inflation 4 %, compte 1 %. Rendement réel approx. ? Impact sur 1 000 000 FCFA de cash sur 5 ans ?",
    exercisePromptEn:
      "Inflation 4%, account 1%. Approx. real return? Impact on 1,000,000 FCFA cash over 5 years?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : Aminata place 800 000 FCFA sur un compte à 1 % / an. L'inflation locale est 4,5 % / an. Après 1 an, que se passe-t-il pour son pouvoir d'achat ?",
      promptEn:
        "Situation: Aminata holds 800,000 FCFA in a 1%/year account. Local inflation is 4.5%/year. After 1 year, what happens to her purchasing power?",
      explanationCorrectFr:
        "Rendement réel ≈ 1 % − 4,5 % = −3,5 % : pouvoir d'achat en baisse malgré solde légèrement plus élevé.",
      explanationCorrectEn:
        "Real return ≈ 1% − 4.5% = −3.5%: purchasing power falls despite a slightly higher balance.",
      difficulty: 2,
      options: [
        opt("Pouvoir d'achat en baisse (rendement réel négatif)", "Purchasing power falls (negative real return)", true),
        opt("Pouvoir d'achat inchangé", "Purchasing power unchanged", false, "L'inflation érode le réel.", "Inflation erodes real value."),
        opt("Pouvoir d'achat en hausse de 4,5 %", "Purchasing power rises 4.5%", false, "4,5 % est l'inflation, pas le rendement du compte.", "4.5% is inflation, not account yield."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : objectif achat maison dans 8 ans. 2 000 000 FCFA en cash sans rendement, inflation 3 % / an. Risque principal ?",
        promptEn:
          "Situation: home purchase goal in 8 years. 2,000,000 FCFA in zero-yield cash, 3%/year inflation. Main risk?",
        explanationCorrectFr:
          "Le montant nominal ne suivra pas la hausse des prix immobiliers et des coûts.",
        explanationCorrectEn:
          "The nominal amount will not keep up with rising property prices and costs.",
        difficulty: 2,
        options: [
          opt("Pouvoir d'achat insuffisant à l'échéance", "Insufficient purchasing power at deadline", true),
          opt("Trop de liquidité disponible", "Too much liquidity available", false, "La liquidité seule ne compense pas l'inflation.", "Liquidity alone does not offset inflation."),
          opt("Aucun risque sur 8 ans", "No risk over 8 years", false, "Huit ans d'inflation cumulée comptent.", "Eight years of cumulative inflation matter."),
        ],
      }),
    ],
  }),

  // ── B debt ──────────────────────────────────────────────────────────────────
  buildPfLesson({
    slug: "understanding-interest",
    titleFr: "Comprendre l'intérêt",
    titleEn: "Understanding Interest",
    descriptionFr: "Ce que l'intérêt représente sur un prêt ou un placement.",
    descriptionEn: "What interest represents on a loan or investment.",
    moduleSlug: "debt",
    sortOrder: 2,
    estimatedMinutes: 7,
    difficulty: "BEGINNER",
    skillSlug: "pf-interest",
    learningObjective: "IDENTIFY",
    objectiveFr:
      "Expliquer l'intérêt comme prix du temps et du risque, et estimer un coût concret sur un prêt.",
    objectiveEn:
      "Explain interest as the price of time and risk, and estimate a concrete cost on a loan.",
    explanationFr:
      "L'intérêt est ce que le prêteur demande pour céder de l'argent maintenant. Le taux (ex. 18 % / an sur une carte) s'applique au capital sur une période. Sur un prêt, c'est un coût pour vous ; sur un dépôt ou un investissement, un rendement potentiel. Les conventions (TAEG, taux mensuel) varient selon pays et produit — lisez toujours la fiche. Reliez au simulateur Intérêt composé : sur une dette revolving, les intérêts peuvent se capitaliser mois après mois.",
    explanationEn:
      "Interest is what the lender charges to hand over money now. The rate (e.g. 18%/year on a card) applies to principal over a period. On a loan it is a cost; on a deposit or investment, a potential return. Conventions (APR, monthly rate) vary by country and product — always read the terms. Link to the Compound Interest simulator: on revolving debt, interest can compound month after month.",
    exampleFr:
      "Prêt 1 500 000 FCFA à 8 % simple 1 an → intérêt 120 000 FCFA, total 1 620 000 FCFA. Carte : solde 400 000 FCFA à 20 % / an → ≈ 80 000 FCFA d'intérêts la première année si solde constant (illustration). Équivalent € : 3 500 à 6 % simple → intérêt 210 €.",
    exampleEn:
      "Loan 1,500,000 FCFA at 8% simple 1 year → interest 120,000 FCFA, total 1,620,000 FCFA. Card: 400,000 FCFA balance at 20%/year → ≈ 80,000 FCFA interest first year if balance constant (illustration). € equivalent: 3,500 at 6% simple → interest €210.",
    practicalFr:
      "Sur une dette réelle ou fictive, convertissez le taux en FCFA ou euros concrets sur 12 mois avant de juger si l'emprunt vaut la peine.",
    practicalEn:
      "On a real or fictional debt, convert the rate to concrete FCFA or euros over 12 months before judging if borrowing is worth it.",
    mistakeFr:
      "Comparer deux prêts uniquement sur le taux affiché sans durée, frais ou capitalisation.",
    mistakeEn:
      "Comparing two loans only on advertised rate without term, fees, or compounding.",
    takeawayFr:
      "Le taux traduit un coût en % du capital — convertissez-le en montant avant de décider.",
    takeawayEn:
      "The rate expresses cost as % of principal — convert to amount before deciding.",
    decisionFr:
      "Estimer les intérêts en FCFA / euros sur 1 an, puis tester un scénario de remboursement accéléré au simulateur.",
    decisionEn:
      "Estimate interest in FCFA / euros over 1 year, then test an accelerated repayment scenario in the simulator.",
    simulatorFr:
      "Ouvrez le simulateur Intérêt composé (leçon « Intérêt simple vs composé » / « Intérêt composé ») : saisissez un capital emprunté et un taux, observez la capitalisation — puis comparez avec remboursement mensuel fixe.",
    simulatorEn:
      "Open the Compound Interest simulator (“Simple vs Compound Interest” / “Compound Interest”): enter borrowed principal and rate, observe compounding — then compare with fixed monthly repayment.",
    flashcardFrontFr: "Intérêt simple (1 an)",
    flashcardFrontEn: "Simple interest (1 year)",
    flashcardBackFr: "Capital × taux (ex. 1 000 000 × 5 % = 50 000).",
    flashcardBackEn: "Principal × rate (e.g. 1,000,000 × 5% = 50,000).",
    exercisePromptFr:
      "3 500 000 FCFA à 6 % simple sur 1 an : intérêt ? Total ? Que change un remboursement anticipé de 500 000 FCFA ?",
    exercisePromptEn:
      "3,500,000 FCFA at 6% simple for 1 year: interest? Total? What changes with 500,000 FCFA early repayment?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : carte de crédit, solde 650 000 FCFA, taux 22 % / an. Intérêts approximatifs la première année si le solde reste constant et seulement le minimum est payé ?",
      promptEn:
        "Situation: credit card, balance 650,000 FCFA, rate 22%/year. Approximate interest first year if balance stays constant and only minimum is paid?",
      explanationCorrectFr:
        "650 000 × 0,22 ≈ 143 000 FCFA d'intérêts (illustration, solde constant).",
      explanationCorrectEn:
        "650,000 × 0.22 ≈ 143,000 FCFA interest (illustration, constant balance).",
      difficulty: 2,
      options: [
        opt("≈ 143 000 FCFA", "≈ 143,000 FCFA", true),
        opt("≈ 14 300 FCFA", "≈ 14,300 FCFA", false, "22 % de 650 000 ≈ 143 000, pas 14 300.", "22% of 650,000 ≈ 143,000, not 14,300."),
        opt("0 FCFA", "0 FCFA", false, "Un taux positif génère des intérêts sur le solde.", "A positive rate generates interest on balance."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : deux offres — prêt A 500 000 FCFA à 9 % / an sans frais ; prêt B 500 000 FCFA à 7 % + frais 40 000 FCFA. Quelle démarche avant de choisir ?",
        promptEn:
          "Situation: two offers — loan A 500,000 FCFA at 9%/year no fees; loan B 500,000 FCFA at 7% + 40,000 FCFA fees. What step before choosing?",
        explanationCorrectFr:
          "Comparer le coût total (intérêts + frais) sur la durée — pas le taux seul.",
        explanationCorrectEn:
          "Compare total cost (interest + fees) over the term — not rate alone.",
        difficulty: 2,
        options: [
          opt("Calculer le coût total sur la durée", "Compute total cost over the term", true),
          opt("Choisir toujours le taux le plus bas", "Always pick the lowest rate", false, "Les frais peuvent inverser le classement.", "Fees can reverse the ranking."),
          opt("Ignorer les frais", "Ignore fees", false, "Les frais font partie du coût du crédit.", "Fees are part of credit cost."),
        ],
      }),
    ],
  }),

  buildPfLesson({
    slug: "minimum-payments",
    titleFr: "Paiements minimums",
    titleEn: "Minimum Payments",
    descriptionFr: "Ce que le minimum paie vraiment — et ce qu'il laisse en arrière.",
    descriptionEn: "What the minimum really pays — and what it leaves behind.",
    moduleSlug: "debt",
    sortOrder: 7,
    estimatedMinutes: 7,
    difficulty: "BEGINNER",
    skillSlug: "pf-debt",
    learningObjective: "APPLY",
    objectiveFr:
      "Calculer l'effet d'un paiement minimum sur capital et intérêts d'une dette carte.",
    objectiveEn:
      "Calculate minimum payment effect on principal and interest on card debt.",
    explanationFr:
      "Le paiement minimum est le seuil pour éviter un défaut formel — pas un plan de remboursement. Sur une carte à taux élevé, les intérêts mensuels absorbent souvent la majeure partie du minimum : peu ou pas de capital est remboursé. Règles de calcul (%, plancher fixe) varient par émetteur. Payer seulement le minimum prolonge la dette et augmente les intérêts totaux — testez deux mensualités au simulateur Remboursement de dette.",
    explanationEn:
      "The minimum payment is the threshold to avoid formal default — not a repayment plan. On high-rate cards, monthly interest often absorbs most of the minimum: little or no principal is repaid. Calculation rules (%, flat floor) vary by issuer. Paying only minimum extends debt and raises total interest — test two monthly payments in the Debt Repayment simulator.",
    exampleFr:
      "Solde 850 000 FCFA, taux 20 % / an → intérêts ≈ 14 000 FCFA / mois. Minimum 25 000 FCFA : seulement ≈ 11 000 FCFA au capital. À 45 000 FCFA / mois, le capital fond beaucoup plus vite — durée et intérêts totaux chutent (illustration simulateur).",
    exampleEn:
      "Balance 850,000 FCFA, rate 20%/year → interest ≈ 14,000 FCFA / month. Minimum 25,000 FCFA: only ≈ 11,000 FCFA to principal. At 45,000 FCFA / month, principal shrinks much faster — term and total interest drop (simulator illustration).",
    practicalFr:
      "Sur une dette fictive, comparez minimum vs +20 000 FCFA / mois : capital réduit ce mois et durée estimée.",
    practicalEn:
      "On fictional debt, compare minimum vs +20,000 FCFA / month: principal reduced this month and estimated term.",
    mistakeFr:
      "Voir le minimum comme un objectif « normal » de remboursement.",
    mistakeEn:
      "Seeing the minimum as a “normal” repayment goal.",
    takeawayFr:
      "Le minimum maintient souvent la dette — fixez un paiement cible au-dessus.",
    takeawayEn:
      "The minimum often keeps debt alive — set a target payment above it.",
    decisionFr:
      "Choisir un paiement cible (minimum + X) et le tester au simulateur Remboursement de dette.",
    decisionEn:
      "Choose a target payment (minimum + X) and test it in the Debt Repayment simulator.",
    simulatorFr:
      "Simulateur Remboursement de dette : solde 750 000 FCFA, taux 18 %. Comparez minimum 22 000 FCFA vs 55 000 FCFA / mois — durée et intérêts totaux.",
    simulatorEn:
      "Debt Repayment simulator: balance 750,000 FCFA, rate 18%. Compare minimum 22,000 FCFA vs 55,000 FCFA / month — term and total interest.",
    flashcardFrontFr: "Paiement minimum",
    flashcardFrontEn: "Minimum payment",
    flashcardBackFr: "Seuil contractuel — souvent insuffisant pour effacer la dette vite.",
    flashcardBackEn: "Contractual floor — often insufficient to clear debt quickly.",
    exercisePromptFr:
      "Solde 1 200 000 FCFA, intérêts ~18 000 FCFA / mois, minimum 28 000 FCFA. Capital réduit ce mois ? Paiement cible recommandé ?",
    exercisePromptEn:
      "Balance 1,200,000 FCFA, interest ~18,000 FCFA / month, minimum 28,000 FCFA. Principal reduced this month? Recommended target payment?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : solde 920 000 FCFA, intérêts mensuels ≈ 15 300 FCFA, minimum 22 000 FCFA. Combien va réellement au capital ce mois ?",
      promptEn:
        "Situation: balance 920,000 FCFA, monthly interest ≈ 15,300 FCFA, minimum 22,000 FCFA. How much actually goes to principal this month?",
      explanationCorrectFr: "22 000 − 15 300 ≈ 6 700 FCFA au capital.",
      explanationCorrectEn: "22,000 − 15,300 ≈ 6,700 FCFA to principal.",
      difficulty: 2,
      options: [
        opt("≈ 6 700 FCFA", "≈ 6,700 FCFA", true),
        opt("22 000 FCFA", "22,000 FCFA", false, "22 000 inclut les intérêts.", "22,000 includes interest."),
        opt("0 FCFA", "0 FCFA", false, "Une petite part réduit quand même le capital.", "A small portion still reduces principal."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : même dette, vous pouvez payer 22 000 ou 60 000 FCFA / mois. Quel effet attendre avec 60 000 FCFA ?",
        promptEn:
          "Situation: same debt, you can pay 22,000 or 60,000 FCFA / month. Expected effect with 60,000 FCFA?",
        explanationCorrectFr:
          "Durée plus courte et intérêts totaux nettement plus bas.",
        explanationCorrectEn:
          "Shorter term and significantly lower total interest.",
        difficulty: 2,
        options: [
          opt("Remboursement plus rapide, moins d'intérêts totaux", "Faster payoff, less total interest", true),
          opt("Même durée, mêmes intérêts", "Same term, same interest", false, "Plus de capital remboursé accélère le plan.", "More principal repaid accelerates the plan."),
          opt("Augmentation du solde", "Balance increases", false, "Payer plus réduit le solde plus vite.", "Paying more reduces balance faster."),
        ],
      }),
    ],
  }),

  buildPfLesson({
    slug: "debt-snowball",
    titleFr: "Méthode boule de neige",
    titleEn: "Debt Snowball Method",
    descriptionFr: "Rembourser du plus petit solde au plus grand pour créer du momentum.",
    descriptionEn: "Repay from smallest balance to largest to build momentum.",
    moduleSlug: "debt",
    sortOrder: 10,
    estimatedMinutes: 7,
    difficulty: "INTERMEDIATE",
    skillSlug: "pf-debt",
    learningObjective: "APPLY",
    objectiveFr:
      "Appliquer la boule de neige : ordre par solde, rollover et suivi des victoires.",
    objectiveEn:
      "Apply snowball: order by balance, rollover, and tracking wins.",
    explanationFr:
      "Boule de neige : minimums sur toutes les dettes, extra vers le plus petit solde. Une fois effacée, son paiement « roule » vers la suivante plus petite. L'effet psychologique (dettes qui disparaissent) motive certains emprunteurs. Peut coûter plus d'intérêts qu'une avalanche si le petit solde n'a pas le taux le plus élevé. Testez deux stratégies au simulateur Remboursement de dette avec plusieurs dettes fictives.",
    explanationEn:
      "Snowball: minimums on all debts, extra to smallest balance. Once cleared, its payment “rolls” to the next smallest. Psychological wins motivate some borrowers. May cost more interest than avalanche if the small balance is not the highest rate. Test two strategies in the Debt Repayment simulator with multiple fictional debts.",
    exampleFr:
      "Dettes : 185 000 FCFA (carte), 1 450 000 FCFA (auto), 420 000 FCFA (perso). Ordre : 185 000 → 420 000 → 1 450 000. Extra 75 000 FCFA / mois sur 185 000 ; quand soldée, 75 000 + minimum de 185 000 roule vers 420 000.",
    exampleEn:
      "Debts: 185,000 FCFA (card), 1,450,000 FCFA (auto), 420,000 FCFA (personal). Order: 185,000 → 420,000 → 1,450,000. Extra 75,000 FCFA / month on 185,000; when cleared, 75,000 + 185,000 minimum rolls to 420,000.",
    practicalFr:
      "Classez trois dettes par solde croissant. Simulez le rollover quand la première est payée — au simulateur ou sur papier.",
    practicalEn:
      "Rank three debts by ascending balance. Simulate rollover when the first is paid — in simulator or on paper.",
    mistakeFr:
      "Arrêter les minimums sur les autres dettes pendant que vous ciblez la petite.",
    mistakeEn:
      "Stopping minimums on other debts while targeting the small one.",
    takeawayFr:
      "Boule de neige = momentum par victoires rapides, pas optimisation mathématique pure.",
    takeawayEn:
      "Snowball = momentum through quick wins, not pure math optimization.",
    decisionFr:
      "Choisir boule de neige si les victoires rapides vous aident à tenir le plan — validez au simulateur.",
    decisionEn:
      "Choose snowball if quick wins help you stick to the plan — validate in the simulator.",
    simulatorFr:
      "Simulateur Remboursement de dette : modélisez deux dettes (petit solde vs gros solde). Comparez cibler le petit solde (boule de neige) vs le taux le plus élevé (avalanche).",
    simulatorEn:
      "Debt Repayment simulator: model two debts (small balance vs large balance). Compare targeting smallest balance (snowball) vs highest rate (avalanche).",
    flashcardFrontFr: "Boule de neige",
    flashcardFrontEn: "Snowball",
    flashcardBackFr: "Extra vers le plus petit solde ; paiement roule ensuite.",
    flashcardBackEn: "Extra to smallest balance; payment then rolls forward.",
    exercisePromptFr:
      "Soldes 320 000, 2 100 000, 580 000 FCFA. Ordre boule de neige ? Que roule après la première dette (minimum 28 000 FCFA) ?",
    exercisePromptEn:
      "Balances 320,000, 2,100,000, 580,000 FCFA. Snowball order? What rolls after first debt (minimum 28,000 FCFA)?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : dettes 275 000 FCFA (24 %), 1 800 000 FCFA (8 %), 510 000 FCFA (14 %). Extra 90 000 FCFA disponible. Première cible boule de neige ?",
      promptEn:
        "Situation: debts 275,000 FCFA (24%), 1,800,000 FCFA (8%), 510,000 FCFA (14%). Extra 90,000 FCFA available. First snowball target?",
      explanationCorrectFr:
        "275 000 FCFA — le plus petit solde, indépendamment du taux.",
      explanationCorrectEn:
        "275,000 FCFA — smallest balance, regardless of rate.",
      difficulty: 2,
      options: [
        opt("275 000 FCFA", "275,000 FCFA", true),
        opt("1 800 000 FCFA", "1,800,000 FCFA", false, "Plus grand solde — pas la boule de neige.", "Largest balance — not snowball."),
        opt("510 000 FCFA car taux 14 %", "510,000 FCFA because 14% rate", false, "La boule de neige trie par solde, pas par taux.", "Snowball sorts by balance, not rate."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : dette de 275 000 FCFA soldée (minimum 32 000 FCFA / mois). Extra 90 000 FCFA / mois disponible. Que fait la boule de neige ?",
        promptEn:
          "Situation: 275,000 FCFA debt cleared (minimum 32,000 FCFA / month). Extra 90,000 FCFA / month available. What does snowball do?",
        explanationCorrectFr:
          "32 000 + 90 000 = 122 000 FCFA / mois vers la prochaine plus petite dette.",
        explanationCorrectEn:
          "32,000 + 90,000 = 122,000 FCFA / month toward next smallest debt.",
        difficulty: 2,
        options: [
          opt("122 000 FCFA / mois vers la prochaine petite dette", "122,000 FCFA / month to next smallest debt", true),
          opt("Arrêter tous les paiements", "Stop all payments", false, "Minimums continuent sur les autres dettes.", "Minimums continue on other debts."),
          opt("Investir en actions immédiatement", "Invest in stocks immediately", false, "Le rollover va vers la dette suivante.", "Rollover goes to next debt."),
        ],
      }),
    ],
  }),

  buildPfLesson({
    slug: "debt-avalanche",
    titleFr: "Méthode avalanche",
    titleEn: "Debt Avalanche Method",
    descriptionFr: "Prioriser le taux le plus élevé pour réduire les intérêts totaux.",
    descriptionEn: "Prioritize highest rate to reduce total interest.",
    moduleSlug: "debt",
    sortOrder: 11,
    estimatedMinutes: 7,
    difficulty: "INTERMEDIATE",
    skillSlug: "pf-debt",
    learningObjective: "APPLY",
    objectiveFr:
      "Appliquer l'avalanche : classer par taux, extra ciblé, rollover par taux décroissant.",
    objectiveEn:
      "Apply avalanche: rank by rate, targeted extra, rollover by descending rate.",
    explanationFr:
      "Avalanche : minimums partout, extra vers le taux le plus élevé. Quand cette dette est soldée, l'extra (et souvent son paiement) va vers le prochain taux le plus élevé. Tend à minimiser les intérêts totaux à paiement constant. Demande patience si la dette à taux élevé est aussi la plus grosse. Comparez avalanche vs boule de neige au simulateur Remboursement de dette.",
    explanationEn:
      "Avalanche: minimums everywhere, extra to highest rate. When that debt is cleared, extra (and often its payment) goes to the next highest rate. Tends to minimize total interest at constant payment. Requires patience if high-rate debt is also the largest. Compare avalanche vs snowball in the Debt Repayment simulator.",
    exampleFr:
      "Taux : carte 26 % (680 000 FCFA), auto 6 % (3 200 000 FCFA), étudiant 9 % (950 000 FCFA). Ordre avalanche : carte → étudiant → auto. Extra 100 000 FCFA / mois sur la carte d'abord.",
    exampleEn:
      "Rates: card 26% (680,000 FCFA), auto 6% (3,200,000 FCFA), student 9% (950,000 FCFA). Avalanche order: card → student → auto. Extra 100,000 FCFA / month on card first.",
    practicalFr:
      "Classez trois dettes par taux décroissant. Où va un extra 80 000 FCFA en avalanche ? Vérifiez au simulateur.",
    practicalEn:
      "Rank three debts by descending rate. Where does extra 80,000 FCFA go in avalanche? Verify in simulator.",
    mistakeFr:
      "Cibler la plus grande dette par frustration, sans regarder le taux.",
    mistakeEn:
      "Targeting the largest debt out of frustration without checking rate.",
    takeawayFr:
      "Avalanche optimise le coût — pas toujours le confort psychologique.",
    takeawayEn:
      "Avalanche optimizes cost — not always psychological comfort.",
    decisionFr:
      "Utiliser avalanche si vous privilégiez le coût total et pouvez tenir le plan — simulez d'abord.",
    decisionEn:
      "Use avalanche if you prioritize total cost and can stick to the plan — simulate first.",
    simulatorFr:
      "Simulateur Remboursement de dette : deux dettes, taux 24 % vs 9 %. Comparez extra sur le taux élevé (avalanche) vs petit solde (boule de neige) — intérêts totaux.",
    simulatorEn:
      "Debt Repayment simulator: two debts, 24% vs 9%. Compare extra on high rate (avalanche) vs small balance (snowball) — total interest.",
    flashcardFrontFr: "Avalanche",
    flashcardFrontEn: "Avalanche",
    flashcardBackFr: "Extra vers le taux le plus élevé ; rollover par taux décroissant.",
    flashcardBackEn: "Extra to highest rate; rollover by descending rate.",
    exercisePromptFr:
      "Taux 22 %, 11 %, 7 %. Ordre avalanche ? Première cible avec extra 65 000 FCFA ?",
    exercisePromptEn:
      "Rates 22%, 11%, 7%. Avalanche order? First target with extra 65,000 FCFA?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : carte 28 % (solde 290 000 FCFA), prêt auto 7 % (solde 2 400 000 FCFA). Extra 110 000 FCFA / mois. Cible avalanche ?",
      promptEn:
        "Situation: card 28% (balance 290,000 FCFA), auto loan 7% (balance 2,400,000 FCFA). Extra 110,000 FCFA / month. Avalanche target?",
      explanationCorrectFr:
        "Carte à 28 % — le taux prime, pas le solde.",
      explanationCorrectEn:
        "28% card — rate trumps balance.",
      difficulty: 2,
      options: [
        opt("Carte 28 %", "28% card", true),
        opt("Prêt auto 7 %", "7% auto loan", false, "7 % < 28 % — avalanche cible le taux le plus élevé.", "7% < 28% — avalanche targets highest rate."),
        opt("Diviser 55 000 / 55 000 sans règle", "Split 55,000 / 55,000 with no rule", false, "L'avalanche suit un ordre de taux.", "Avalanche follows rate order."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : carte 26 % soldée. Prochaines dettes : perso 15 %, auto 5 %. Où va l'extra en avalanche ?",
        promptEn:
          "Situation: 26% card cleared. Next debts: personal 15%, auto 5%. Where does extra go in avalanche?",
        explanationCorrectFr: "Dette perso à 15 % — prochain taux le plus élevé.",
        explanationCorrectEn: "15% personal debt — next highest rate.",
        difficulty: 2,
        options: [
          opt("Dette perso 15 %", "15% personal debt", true),
          opt("Prêt auto 5 %", "5% auto loan", false, "5 % est inférieur à 15 %.", "5% is lower than 15%."),
          opt("Épargne actions", "Stock savings", false, "L'avalanche continue sur dettes restantes.", "Avalanche continues on remaining debts."),
        ],
      }),
    ],
  }),

  // ── B investing ─────────────────────────────────────────────────────────────
  buildPfLesson({
    slug: "why-save",
    titleFr: "Pourquoi investir",
    titleEn: "Why Invest",
    descriptionFr: "Comprenez pourquoi l'épargne et l'investissement sont essentiels.",
    descriptionEn: "Understand why saving and investing are essential.",
    moduleSlug: "saving-investing",
    sortOrder: 0,
    estimatedMinutes: 7,
    difficulty: "BEGINNER",
    skillSlug: "pf-investing",
    learningObjective: "IDENTIFY",
    objectiveFr:
      "Expliquer pourquoi épargner et investir servent des objectifs différents, et dans quel ordre les aborder.",
    objectiveEn:
      "Explain why saving and investing serve different goals, and in what order to approach them.",
    explanationFr:
      "L'épargne liquide protège contre les imprévus (fonds d'urgence, objectifs < 2 ans). L'investissement vise la croissance du capital sur le long terme, avec fluctuations possibles. Sans coussin liquide (souvent 3–6 mois d'essentiels), une perte d'emploi ou une baisse de marché peut forcer une vente au pire moment — liens directs avec « Fonds d'urgence », « Taux d'épargne » et « Bases de l'inflation ».",
    explanationEn:
      "Liquid savings protect against shocks (emergency fund, goals < 2 years). Investing targets long-term capital growth with possible fluctuations. Without a liquid cushion (often 3–6 months of essentials), job loss or a market drop can force selling at the worst time — direct links to “Emergency Fund,” “Saving Rate,” and “Inflation Basics.”",
    exampleFr:
      "Essentiels 420 000 FCFA / mois → cible urgence 3 mois = 1 260 000 FCFA. Épargne liquide 1 400 000 FCFA : choc couvert sans vendre des actions en baisse. Surplus 50 000 FCFA / mois peut ensuite alimenter un placement long terme. Équivalent € : essentiels 1 800 € → cible 5 400 €.",
    exampleEn:
      "Essentials 420,000 FCFA / month → 3-month emergency target = 1,260,000 FCFA. Liquid savings 1,400,000 FCFA: shock covered without selling stocks in a downturn. Surplus 50,000 FCFA / month can then feed long-term placement. € equivalent: essentials €1,800 → target €5,400.",
    practicalFr:
      "Calculez cible urgence (3 mois essentiels en FCFA ou euros). Comparez à épargne liquide. Investissez seulement le surplus après cette cible.",
    practicalEn:
      "Compute emergency target (3 months essentials in FCFA or euros). Compare to liquid savings. Invest only surplus after that target.",
    mistakeFr:
      "Investir tout le capital disponible sans réserve liquide « pour ne pas rater le marché ».",
    mistakeEn:
      "Investing all available cash with no liquid reserve “so you don’t miss the market.”",
    takeawayFr:
      "Sécurité liquide d'abord, croissance ensuite — l'ordre compte.",
    takeawayEn:
      "Liquid safety first, growth second — order matters.",
    decisionFr:
      "Vérifier si la réserve liquide couvre au moins 3 mois d'essentiels avant d'augmenter le risque.",
    decisionEn:
      "Verify liquid reserve covers at least 3 months of essentials before increasing risk.",
    flashcardFrontFr: "Fonds d'urgence",
    flashcardFrontEn: "Emergency fund",
    flashcardBackFr: "Réserve liquide pour chocs — souvent 3–6 mois d'essentiels.",
    flashcardBackEn: "Liquid reserve for shocks — often 3–6 months of essentials.",
    exercisePromptFr:
      "Essentiels 380 000 FCFA / mois, liquide 900 000 FCFA, objectif retraite 20 ans. Priorité : compléter urgence ou investir ? Chiffrez.",
    exercisePromptEn:
      "Essentials 380,000 FCFA / month, liquid 900,000 FCFA, retirement goal 20 years. Priority: complete emergency or invest? Quantify.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : essentiels 350 000 FCFA / mois, épargne liquide 720 000 FCFA, opportunité d'investir 200 000 FCFA maintenant. Quelle décision la plus prudente ?",
      promptEn:
        "Situation: essentials 350,000 FCFA / month, liquid savings 720,000 FCFA, opportunity to invest 200,000 FCFA now. Most prudent decision?",
      explanationCorrectFr:
        "Compléter d'abord le fonds d'urgence (cible 3 mois = 1 050 000 FCFA) avant d'investir le surplus.",
      explanationCorrectEn:
        "Complete emergency fund first (3-month target = 1,050,000 FCFA) before investing surplus.",
      difficulty: 2,
      options: [
        opt("Renforcer le fonds d'urgence avant d'investir", "Strengthen emergency fund before investing", true),
        opt("Investir les 200 000 FCFA immédiatement", "Invest 200,000 FCFA immediately", false, "720 000 < 1 050 000 — coussin incomplet.", "720,000 < 1,050,000 — cushion incomplete."),
        opt("Vider le compte liquide pour maximiser le rendement", "Empty liquid account to maximize return", false, "Expose aux ventes forcées en cas de choc.", "Exposes you to forced sales if shocked."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : marché en hausse de 15 %, pas de fonds d'urgence, risque de licenciement dans le secteur. Quel risque principal si vous investissez tout ?",
        promptEn:
          "Situation: market up 15%, no emergency fund, layoff risk in sector. Main risk if you invest everything?",
        explanationCorrectFr:
          "Vente forcée en baisse future si le choc arrive en même temps qu'une correction.",
        explanationCorrectEn:
          "Forced sale in a future downturn if shock coincides with a correction.",
        difficulty: 2,
        options: [
          opt("Vente forcée au mauvais moment", "Forced sale at the wrong time", true),
          opt("Trop de liquidité", "Too much liquidity", false, "Le problème est l'absence de liquidité.", "The problem is lack of liquidity."),
          opt("Dividendes trop faibles", "Dividends too low", false, "Les dividendes ne sont pas le risque central ici.", "Dividends are not the central risk here."),
        ],
      }),
    ],
  }),

  buildPfLesson({
    slug: "introduction-to-investing",
    titleFr: "Introduction à l'investissement",
    titleEn: "Introduction to Investing",
    descriptionFr: "Découvrez les bases de l'investissement et les classes d'actifs.",
    descriptionEn: "Discover investing basics and asset classes.",
    moduleSlug: "saving-investing",
    sortOrder: 1,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: "pf-investing",
    learningObjective: "IDENTIFY",
    objectiveFr:
      "Nommer les grandes classes d'actifs et choisir une classe cohérente avec un objectif chiffré.",
    objectiveEn:
      "Name major asset classes and pick a class coherent with a quantified goal.",
    explanationFr:
      "Investir = acheter des actifs dont la valeur peut évoluer : actions (parts d'entreprises), obligations (prêts à un émetteur), immobilier, liquidités, parfois matières premières. Chaque classe a un profil risque/rendement et une liquidité différente. Avant de comparer des produits ou des frais, identifiez la classe — puis l'horizon (leçon « Horizon d'investissement »). Confondre assurance-vie et classe d'actif sous-jacent est une erreur fréquente.",
    explanationEn:
      "Investing = buying assets whose value can change: stocks, bonds, real estate, cash, sometimes commodities. Each class has different risk/return and liquidity. Before comparing products or fees, identify the class — then the horizon (“Investment Horizon”). Confusing an insurance wrapper with the underlying asset class is a common mistake.",
    exampleFr:
      "Portefeuille illustratif 2 500 000 FCFA : 1 250 000 actions (croissance), 750 000 obligations (stabilité relative), 500 000 liquidités (flexibilité). Objectif maison dans 4 ans : la poche 500 000 + partie obligations, pas 100 % actions.",
    exampleEn:
      "Illustrative portfolio 2,500,000 FCFA: 1,250,000 stocks (growth), 750,000 bonds (relative stability), 500,000 cash (flexibility). Home goal in 4 years: the 500,000 + bond slice, not 100% stocks.",
    practicalFr:
      "Listez trois classes pour un objectif à 15 ans et une pour 18 mois — avec montants indicatifs en FCFA ou euros.",
    practicalEn:
      "List three classes for a 15-year goal and one for 18 months — with indicative FCFA or euro amounts.",
    mistakeFr:
      "Traiter toute dépense « financière » comme un investissement sans actif identifiable.",
    mistakeEn:
      "Treating every “financial” expense as an investment without an identifiable asset.",
    takeawayFr:
      "Les classes d'actifs sont des briques — le portefeuille est l'assemblage selon l'horizon.",
    takeawayEn:
      "Asset classes are building blocks — the portfolio is assembly by horizon.",
    decisionFr:
      "Identifier la classe d'actif avant de comparer produits, frais ou performances passées.",
    decisionEn:
      "Identify asset class before comparing products, fees, or past performance.",
    flashcardFrontFr: "Classe d'actifs",
    flashcardFrontEn: "Asset class",
    flashcardBackFr: "Catégorie d'investissements au profil risque/rendement similaire.",
    flashcardBackEn: "Category of investments with similar risk/return profile.",
    exercisePromptFr:
      "Héritage 1 800 000 FCFA. Objectif : apport logement dans 4 ans. Deux classes pertinentes et une à éviter — justifiez.",
    exercisePromptEn:
      "Inheritance 1,800,000 FCFA. Goal: home down payment in 4 years. Two relevant classes and one to avoid — justify.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : vous recevez 950 000 FCFA pour les études de votre enfant dans 14 mois. Quelle allocation la plus cohérente ?",
      promptEn:
        "Situation: you receive 950,000 FCFA for your child's tuition in 14 months. Most coherent allocation?",
      explanationCorrectFr:
        "Liquidités ou placement très peu volatil — horizon court, pas 100 % actions.",
      explanationCorrectEn:
        "Cash or very low-volatility placement — short horizon, not 100% stocks.",
      difficulty: 2,
      options: [
        opt("Principalement liquidités / faible volatilité", "Mostly cash / low volatility", true),
        opt("100 % actions individuelles volatiles", "100% volatile individual stocks", false, "14 mois : une baisse peut manquer l'échéance.", "14 months: a drop can miss the deadline."),
        opt("Immobilier locatif direct", "Direct rental property", false, "Peu liquide pour un besoin en 14 mois.", "Illiquid for a need in 14 months."),
      ],
    }),
    questions: [
      q({
        type: "MULTIPLE_CHOICE",
        promptFr:
          "Situation : vous construisez un portefeuille long terme. Quelles classes diversifient réellement ? (Plusieurs réponses)",
        promptEn:
          "Situation: you build a long-term portfolio. Which classes truly diversify? (Multiple answers)",
        explanationCorrectFr:
          "Actions, obligations et immobilier (ou REIT) sont des classes distinctes.",
        explanationCorrectEn:
          "Stocks, bonds, and real estate (or REIT) are distinct classes.",
        difficulty: 2,
        options: [
          opt("Actions", "Stocks", true),
          opt("Obligations", "Bonds", true),
          opt("Trois fonds actions sur le même indice", "Three stock funds on the same index", false, "Même classe — fausse diversification.", "Same class — false diversification."),
          opt("Immobilier / REIT", "Real estate / REIT", true),
        ],
      }),
    ],
  }),

  buildPfLesson({
    slug: "stocks-basics",
    titleFr: "Bases des actions",
    titleEn: "Stocks Basics",
    descriptionFr: "Découvrez comment fonctionnent les actions et le marché boursier.",
    descriptionEn: "Discover how stocks and the stock market work.",
    moduleSlug: "saving-investing",
    sortOrder: 3,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: "pf-investing",
    learningObjective: "IDENTIFY",
    objectiveFr:
      "Interpréter une situation d'action (prix, dividende, variation) et estimer un rendement indicatif.",
    objectiveEn:
      "Interpret a stock situation (price, dividend, change) and estimate an indicative return.",
    explanationFr:
      "Une action = part de propriété dans une entreprise. Rendement potentiel : dividendes (profits distribués) + variation de prix (plus ou moins-value). Le marché fixe le prix via offre et demande — aucun rendement garanti. Une action « connue » peut perdre 30 % en un an. Reliez aux leçons « Risque et rendement » et « Volatilité » : les actions sont une classe de croissance, pas de stabilité court terme.",
    explanationEn:
      "A stock = ownership share in a company. Potential return: dividends (distributed profits) + price change (gain or loss). The market sets price via supply and demand — no guaranteed return. A “well-known” stock can lose 30% in a year. Link to “Risk and Return” and “Volatility”: stocks are a growth class, not short-term stability.",
    exampleFr:
      "Vous achetez 20 actions à 25 000 FCFA → 500 000 FCFA investis. Dividende 1 500 FCFA / action / an = 30 000 FCFA de revenu. Prix monte à 28 000 FCFA → valeur 560 000 FCFA (+60 000 plus-value). Prix baisse à 20 000 FCFA → valeur 400 000 FCFA.",
    exampleEn:
      "You buy 20 shares at 25,000 FCFA → 500,000 FCFA invested. Dividend 1,500 FCFA / share / year = 30,000 FCFA income. Price rises to 28,000 FCFA → value 560,000 FCFA (+60,000 gain). Price falls to 20,000 FCFA → value 400,000 FCFA.",
    practicalFr:
      "Pour une action cotée, notez prix, dividende annuel (si applicable), variation 1 an — calculez rendement dividende = dividende / prix.",
    practicalEn:
      "For a listed stock, note price, annual dividend (if any), 1-year change — compute dividend yield = dividend / price.",
    mistakeFr:
      "Croire qu'une entreprise rentable ne peut pas voir son action chuter fortement.",
    mistakeEn:
      "Believing a profitable company’s stock cannot fall sharply.",
    takeawayFr:
      "Actions = propriété + volatilité. Rendement = dividendes + prix, sans garantie.",
    takeawayEn:
      "Stocks = ownership + volatility. Return = dividends + price, with no guarantee.",
    decisionFr:
      "Distinguer dividende et plus-value avant d'évaluer si une action correspond à votre horizon.",
    decisionEn:
      "Distinguish dividend and capital gain before judging if a stock fits your horizon.",
    flashcardFrontFr: "Dividende",
    flashcardFrontEn: "Dividend",
    flashcardBackFr: "Distribution de profits aux actionnaires.",
    flashcardBackEn: "Distribution of profits to shareholders.",
    exercisePromptFr:
      "15 actions à 32 000 FCFA, dividende 1 200 FCFA / action. Rendement dividende ? Valeur si prix passe à 27 000 FCFA ?",
    exercisePromptEn:
      "15 shares at 32,000 FCFA, dividend 1,200 FCFA / share. Dividend yield? Value if price goes to 27,000 FCFA?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : vous détenez 12 actions achetées 18 000 FCFA l'une. Dividende annoncé : 900 FCFA / action. Le cours tombe à 15 000 FCFA le même jour. Quel revenu dividende recevez-vous cette année (avant impôts) ?",
      promptEn:
        "Situation: you hold 12 shares bought at 18,000 FCFA each. Dividend announced: 900 FCFA / share. Price falls to 15,000 FCFA same day. What dividend income do you receive this year (before tax)?",
      explanationCorrectFr:
        "12 × 900 = 10 800 FCFA — le dividende se calcule par action détenue, pas sur la plus-value.",
      explanationCorrectEn:
        "12 × 900 = 10,800 FCFA — dividend is per share held, not on capital gain.",
      difficulty: 2,
      options: [
        opt("10 800 FCFA", "10,800 FCFA", true),
        opt("36 000 FCFA", "36,000 FCFA", false, "Ce serait 12 × (18 000 − 15 000) — confond plus-value et dividende.", "That would be 12 × (18,000 − 15,000) — confuses gain and dividend."),
        opt("0 FCFA car le cours a baissé", "0 FCFA because price fell", false, "Une baisse de cours n'annule pas un dividende déclaré.", "A price drop does not cancel a declared dividend."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : objectif achat voiture dans 8 mois, 600 000 FCFA disponibles. Collègue recommande une action « qui va doubler ». Réponse la plus prudente ?",
        promptEn:
          "Situation: car purchase goal in 8 months, 600,000 FCFA available. Colleague recommends a stock “that will double.” Most prudent response?",
        explanationCorrectFr:
          "Horizon trop court pour une action volatile — garder liquidité ou faible risque.",
        explanationCorrectEn:
          "Horizon too short for volatile stock — keep cash or low risk.",
        difficulty: 2,
        options: [
          opt("Garder en liquidité / faible volatilité", "Keep in cash / low volatility", true),
          opt("Investir 100 % dans l'action recommandée", "Invest 100% in recommended stock", false, "8 mois + volatilité = risque de manquer l'objectif.", "8 months + volatility = risk of missing goal."),
          opt("Emprunter pour acheter plus d'actions", "Borrow to buy more shares", false, "Effet de levier aggrave le risque court terme.", "Leverage worsens short-term risk."),
        ],
      }),
    ],
  }),

  buildPfLesson({
    slug: "bonds-basics",
    titleFr: "Bases des obligations",
    titleEn: "Bonds Basics",
    descriptionFr: "Comprenez les obligations comme outil d'investissement.",
    descriptionEn: "Understand bonds as an investment tool.",
    moduleSlug: "saving-investing",
    sortOrder: 4,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: "pf-investing",
    learningObjective: "IDENTIFY",
    objectiveFr:
      "Interpréter une obligation en situation : émetteur, coupon, échéance et risque de crédit.",
    objectiveEn:
      "Interpret a bond in context: issuer, coupon, maturity, and credit risk.",
    explanationFr:
      "Obligation = prêt à un émetteur (État ou entreprise). Coupon = intérêts périodiques ; nominal remboursé à l'échéance si pas de défaut. Généralement moins volatiles que les actions, rendement potentiel plus limité. Risque principal : solvabilité de l'émetteur. Obligation d'entreprise offre souvent plus de coupon qu'obligations d'État comparable — compensation du risque de crédit.",
    explanationEn:
      "Bond = loan to an issuer (government or company). Coupon = periodic interest; face value repaid at maturity if no default. Generally less volatile than stocks, more limited potential return. Main risk: issuer solvency. Corporate bonds often offer more coupon than comparable government bonds — compensation for credit risk.",
    exampleFr:
      "Obligation nominal 1 000 000 FCFA, coupon 5 % / an → 50 000 FCFA / an. Échéance 7 ans → 1 000 000 FCFA remboursés à la fin (si pas de défaut). Entreprise à 7 % vs État à 4 % : +3 points pour risque crédit supplémentaire.",
    exampleEn:
      "Bond face value 1,000,000 FCFA, coupon 5%/year → 50,000 FCFA / year. Maturity 7 years → 1,000,000 FCFA repaid at end (if no default). Corporate at 7% vs government at 4%: +3 points for extra credit risk.",
    practicalFr:
      "Comparez obligation d'État et d'entreprise même pays : quel coupon plus élevé et pourquoi ? Calculez intérêts annuels sur 2 000 000 FCFA nominal.",
    practicalEn:
      "Compare government and corporate bond same country: which higher coupon and why? Compute annual interest on 2,000,000 FCFA face value.",
    mistakeFr:
      "Supposer qu'une obligation ne peut jamais perdre de valeur avant l'échéance (taux et crédit fluctuent).",
    mistakeEn:
      "Assuming a bond can never lose value before maturity (rates and credit fluctuate).",
    takeawayFr:
      "Obligation = prêt avec coupon. Le risque de crédit et les taux comptent.",
    takeawayEn:
      "Bond = loan with coupon. Credit risk and rates matter.",
    decisionFr:
      "Évaluer émetteur, coupon et échéance avant d'acheter — surtout si l'horizon est moyen terme.",
    decisionEn:
      "Evaluate issuer, coupon, and maturity before buying — especially for medium-term horizon.",
    flashcardFrontFr: "Coupon",
    flashcardFrontEn: "Coupon",
    flashcardBackFr: "Intérêts périodiques versés par l'émetteur.",
    flashcardBackEn: "Periodic interest paid by the issuer.",
    exercisePromptFr:
      "Nominal 1 500 000 FCFA, coupon 4 % / an. Intérêts annuels et total sur 4 ans (sans réinvestissement) ?",
    exercisePromptEn:
      "Face value 1,500,000 FCFA, coupon 4%/year. Annual interest and total over 4 years (no reinvestment)?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : vous voulez 80 000 FCFA / an de revenus fixes. Obligation A : nominal 2 000 000 FCFA, coupon 4 %. Obligation B : nominal 1 000 000 FCFA, coupon 7 %. Laquelle atteint 80 000 FCFA / an ?",
      promptEn:
        "Situation: you want 80,000 FCFA / year fixed income. Bond A: face 2,000,000 FCFA, coupon 4%. Bond B: face 1,000,000 FCFA, coupon 7%. Which reaches 80,000 FCFA / year?",
      explanationCorrectFr:
        "A : 2 000 000 × 4 % = 80 000 FCFA / an exactement.",
      explanationCorrectEn:
        "A: 2,000,000 × 4% = 80,000 FCFA / year exactly.",
      difficulty: 2,
      options: [
        opt("Obligation A (4 % sur 2 000 000)", "Bond A (4% on 2,000,000)", true),
        opt("Obligation B (7 % sur 1 000 000)", "Bond B (7% on 1,000,000)", false, "7 % × 1 000 000 = 70 000 FCFA.", "7% × 1,000,000 = 70,000 FCFA."),
        opt("Aucune des deux", "Neither", false, "A atteint exactement 80 000.", "A reaches exactly 80,000."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : portefeuille 100 % actions, marché volatile. Vous voulez réduire les fluctuations sans tout vendre. Quelle classe ajouter en priorité ?",
        promptEn:
          "Situation: 100% stock portfolio, volatile market. You want to reduce swings without selling everything. Which class to add first?",
        explanationCorrectFr:
          "Obligations — corrélation historiquement plus faible avec actions (diversification).",
        explanationCorrectEn:
          "Bonds — historically lower correlation with stocks (diversification).",
        difficulty: 2,
        options: [
          opt("Obligations", "Bonds", true),
          opt("Plus d'actions du même secteur", "More stocks same sector", false, "Augmente la concentration.", "Increases concentration."),
          opt("Crypto très volatile", "Highly volatile crypto", false, "Augmente la volatilité.", "Increases volatility."),
        ],
      }),
    ],
  }),

  buildPfLesson({
    slug: "funds-and-etfs",
    titleFr: "Fonds et ETF",
    titleEn: "Funds and ETFs",
    descriptionFr: "Comprendre les fonds communs et les fonds indiciels cotés (ETF).",
    descriptionEn: "Understand mutual funds and exchange-traded funds (ETFs).",
    moduleSlug: "saving-investing",
    sortOrder: 5,
    estimatedMinutes: 9,
    difficulty: "BEGINNER",
    skillSlug: "pf-investing",
    learningObjective: "IDENTIFY",
    objectiveFr:
      "Comparer fonds actifs, indiciels et ETF en situation — diversification et frais chiffrés.",
    objectiveEn:
      "Compare active, index funds and ETFs in context — diversification and quantified fees.",
    explanationFr:
      "Un fonds regroupe l'argent de nombreux investisseurs pour acheter un panier d'actifs. Fonds indiciel / ETF : réplique un indice, frais souvent bas. ETF coté en bourse — achat/vente en journée. Fonds actif : vise à battre le marché, frais souvent plus élevés. Sur 20 ans, 0,8 point de frais en plus sur 3 000 000 FCFA peut représenter des centaines de milliers de FCFA — vérifiez toujours le TER et le contenu réel.",
    explanationEn:
      "A fund pools investors' money to buy a basket of assets. Index fund / ETF: tracks an index, often low fees. ETF is exchange-traded — intraday buy/sell. Active fund: aims to beat market, often higher fees. Over 20 years, 0.8% extra fees on 3,000,000 FCFA can mean hundreds of thousands of FCFA — always check TER and actual holdings.",
    exampleFr:
      "ETF indiciel : TER 0,18 % sur 2 000 000 FCFA → ≈ 3 600 FCFA / an. Fonds actif : TER 1,10 % → 22 000 FCFA / an. Écart 18 400 FCFA / an — sur 15 ans, l'écart cumulé compte (illustration pédagogique).",
    exampleEn:
      "Index ETF: TER 0.18% on 2,000,000 FCFA → ≈ 3,600 FCFA / year. Active fund: TER 1.10% → 22,000 FCFA / year. Gap 18,400 FCFA / year — over 15 years cumulative gap matters (pedagogical illustration).",
    practicalFr:
      "Pour un fonds consulté, notez TER (%), indice suivi, nombre de lignes. Calculez frais annuels sur votre montant en FCFA ou euros.",
    practicalEn:
      "For a fund you look up, note TER (%), tracked index, number of holdings. Compute annual fees on your FCFA or euro amount.",
    mistakeFr:
      "Choisir un fonds par le nom marketing sans lire frais et contenu.",
    mistakeEn:
      "Choosing a fund by marketing name without reading fees and holdings.",
    takeawayFr:
      "Fonds et ETF = paniers. Frais et indice définissent le coût réel.",
    takeawayEn:
      "Funds and ETFs = baskets. Fees and index define real cost.",
    decisionFr:
      "Comparer frais et diversification avant fonds actif, ETF ou actions directes.",
    decisionEn:
      "Compare fees and diversification before active fund, ETF, or direct stocks.",
    flashcardFrontFr: "ETF",
    flashcardFrontEn: "ETF",
    flashcardBackFr: "Fonds coté en bourse, acheté/vendu comme une action.",
    flashcardBackEn: "Exchange-traded fund, bought/sold like a stock.",
    exercisePromptFr:
      "Deux ETF même indice : TER 0,12 % vs 0,85 % sur 1 200 000 FCFA. Différence de frais annuels ?",
    exercisePromptEn:
      "Two ETFs same index: TER 0.12% vs 0.85% on 1,200,000 FCFA. Annual fee difference?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : débutant, 800 000 FCFA, horizon 12 ans, peu de temps pour suivre 20 actions. Quelle option la plus cohérente ?",
      promptEn:
        "Situation: beginner, 800,000 FCFA, 12-year horizon, little time to track 20 stocks. Most coherent option?",
      explanationCorrectFr:
        "ETF ou fonds indiciel diversifié — panier large, frais bas, moins de suivi ligne à ligne.",
      explanationCorrectEn:
        "ETF or diversified index fund — broad basket, low fees, less line-by-line tracking.",
      difficulty: 2,
      options: [
        opt("ETF / fonds indiciel large", "Broad ETF / index fund", true),
        opt("5 actions d'un seul secteur", "5 stocks in one sector", false, "Concentration sectorielle élevée.", "High sector concentration."),
        opt("15 fonds actifs aux frais élevés", "15 high-fee active funds", false, "Frais cumulés et chevauchement.", "Cumulative fees and overlap."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : 5 000 000 FCFA investis. Fonds A TER 0,25 %, Fonds B TER 1,05 %. Différence de frais annuels ?",
        promptEn:
          "Situation: 5,000,000 FCFA invested. Fund A TER 0.25%, Fund B TER 1.05%. Annual fee difference?",
        explanationCorrectFr: "0,80 % × 5 000 000 = 40 000 FCFA / an.",
        explanationCorrectEn: "0.80% × 5,000,000 = 40,000 FCFA / year.",
        difficulty: 2,
        options: [
          opt("40 000 FCFA / an", "40,000 FCFA / year", true),
          opt("12 500 FCFA / an", "12,500 FCFA / year", false, "Écart 0,80 %, pas 0,25 %.", "Gap is 0.80%, not 0.25%."),
          opt("525 000 FCFA / an", "525,000 FCFA / year", false, "Confusion de calcul.", "Calculation error."),
        ],
      }),
    ],
  }),

  buildPfLesson({
    slug: "investment-horizon",
    titleFr: "Horizon d'investissement",
    titleEn: "Investment Horizon",
    descriptionFr: "Relier la durée de vos objectifs au choix des placements.",
    descriptionEn: "Link goal duration to placement choices.",
    moduleSlug: "saving-investing",
    sortOrder: 9,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: "pf-investing",
    learningObjective: "APPLY",
    objectiveFr:
      "Associer un horizon chiffré (mois/années) à un niveau de risque cohérent par poche.",
    objectiveEn:
      "Match a quantified horizon (months/years) to a coherent risk level per bucket.",
    explanationFr:
      "Horizon = temps avant d'avoir besoin de l'argent. Court (0–2 ans) : liquidité et stabilité. Moyen (3–7 ans) : mix prudent. Long (10+ ans) : plus de place pour croissance et volatilité temporaire. Segmentez par poches : vacances 10 mois ≠ retraite 25 ans. Reliez à « Liquidité » et « Bases des actions » : une action peut être pertinente sur 15 ans, pas sur 10 mois.",
    explanationEn:
      "Horizon = time until you need the money. Short (0–2 years): liquidity and stability. Medium (3–7 years): prudent mix. Long (10+ years): more room for growth and temporary volatility. Segment by buckets: vacation in 10 months ≠ retirement in 25 years. Link to “Liquidity” and “Stocks Basics”: a stock may fit 15 years, not 10 months.",
    exampleFr:
      "Poche A : voyage dans 10 mois, 450 000 FCFA → liquidités. Poche B : retraite dans 22 ans, 3 500 000 FCFA → croissance diversifiée. Même personne, deux règles — ne mélangez pas les poches.",
    exampleEn:
      "Bucket A: trip in 10 months, 450,000 FCFA → cash. Bucket B: retirement in 22 years, 3,500,000 FCFA → diversified growth. Same person, two rules — do not mix buckets.",
    practicalFr:
      "Listez 3 objectifs avec date et montant (FCFA ou euros). Classez court / moyen / long et proposez une classe d'actif par poche.",
    practicalEn:
      "List 3 goals with date and amount (FCFA or euros). Classify short / medium / long and propose asset class per bucket.",
    mistakeFr:
      "Investir les frais de scolarité de l'an prochain en actions volatiles.",
    mistakeEn:
      "Investing next year's tuition in volatile stocks.",
    takeawayFr:
      "L'horizon dicte le risque acceptable — pas l'émotion du jour.",
    takeawayEn:
      "Horizon dictates acceptable risk — not today's emotion.",
    decisionFr:
      "Définir la date de besoin en mois/années avant de choisir la classe d'actif.",
    decisionEn:
      "Define need date in months/years before choosing asset class.",
    flashcardFrontFr: "Horizon d'investissement",
    flashcardFrontEn: "Investment horizon",
    flashcardBackFr: "Durée avant d'avoir besoin des fonds investis.",
    flashcardBackEn: "Time until you need the invested funds.",
    exercisePromptFr:
      "Besoin 600 000 FCFA dans 16 mois ; besoin 2 000 000 FCFA dans 18 ans. Logique de risque différente pour chaque poche ?",
    exercisePromptEn:
      "Need 600,000 FCFA in 16 months; need 2,000,000 FCFA in 18 years. Different risk logic per bucket?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : apport immobilier 1 200 000 FCFA nécessaire dans 11 mois. Vous avez exactement 1 200 000 FCFA en actions qui ont progressé de 12 % cette année. Décision la plus cohérente ?",
      promptEn:
        "Situation: home down payment 1,200,000 FCFA needed in 11 months. You have exactly 1,200,000 FCFA in stocks up 12% this year. Most coherent decision?",
      explanationCorrectFr:
        "Réduire le risque / sécuriser en liquidité ou faible volatilité — horizon trop court pour compter sur les actions.",
      explanationCorrectEn:
        "Reduce risk / secure in cash or low volatility — horizon too short to rely on stocks.",
      difficulty: 2,
      options: [
        opt("Sécuriser progressivement en liquidité / faible volatilité", "Gradually secure in cash / low volatility", true),
        opt("Acheter plus d'actions pour « maximiser »", "Buy more stocks to “maximize”", false, "11 mois : une correction peut manquer l'apport.", "11 months: a correction can miss the down payment."),
        opt("Reporter l'achat sans plan", "Postpone purchase with no plan", false, "Sans plan, le risque horaire reste.", "Without a plan, timing risk remains."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : même capital, objectif A dans 6 mois, objectif B dans 20 ans. Quelle poche peut tolérer une baisse temporaire de 25 % ?",
        promptEn:
          "Situation: same capital, goal A in 6 months, goal B in 20 years. Which bucket can tolerate a temporary 25% drop?",
        explanationCorrectFr:
          "Objectif B (20 ans) — le temps permet de traverser la volatilité.",
        explanationCorrectEn:
          "Goal B (20 years) — time allows riding volatility.",
        difficulty: 2,
        options: [
          opt("Objectif B (20 ans)", "Goal B (20 years)", true),
          opt("Objectif A (6 mois)", "Goal A (6 months)", false, "Six mois : −25 % peut empêcher le retrait prévu.", "Six months: −25% can block planned withdrawal."),
          opt("Les deux également", "Both equally", false, "L'horizon diffère — le risque acceptable aussi.", "Horizons differ — acceptable risk differs too."),
        ],
      }),
    ],
  }),

  buildPfLesson({
    slug: "liquidity-basics",
    titleFr: "Bases de la liquidité",
    titleEn: "Liquidity Basics",
    descriptionFr: "Comprendre la facilité de convertir un actif en cash.",
    descriptionEn: "Understand how easily an asset converts to cash.",
    moduleSlug: "saving-investing",
    sortOrder: 10,
    estimatedMinutes: 7,
    difficulty: "BEGINNER",
    skillSlug: "pf-investing",
    learningObjective: "IDENTIFY",
    objectiveFr:
      "Classer des actifs par liquidité en situation d'urgence et lier au délai du besoin.",
    objectiveEn:
      "Rank assets by liquidity in an emergency and link to need timeline.",
    explanationFr:
      "Liquidité = vendre rapidement sans forte décote. Cash et comptes courants : immédiat. Actions cotées : quelques jours. Immobilier direct : mois + frais. Placements bloqués : faible liquidité. Pour un besoin dans 60 jours, la liquidité prime sur le rendement potentiel — lien direct avec « Fonds d'urgence » et « Horizon d'investissement ».",
    explanationEn:
      "Liquidity = sell quickly without large discount. Cash and current accounts: immediate. Listed stocks: a few days. Direct real estate: months + fees. Locked placements: low liquidity. For a need in 60 days, liquidity beats potential return — direct link to “Emergency Fund” and “Investment Horizon.”",
    exampleFr:
      "Urgence médicale 350 000 FCFA : compte courant → disponible aujourd'hui. Appartement 45 000 000 FCFA → vente en mois, pas en heures. Actions 800 000 FCFA → vendables en ~3 jours ouvrés (illustration).",
    exampleEn:
      "Medical emergency 350,000 FCFA: current account → available today. Apartment 45,000,000 FCFA → sale in months, not hours. Stocks 800,000 FCFA → sellable in ~3 business days (illustration).",
    practicalFr:
      "Classez : cash, actions cotées, immobilier locatif, fonds bloqué 90 jours — du plus au moins liquide. Associez à un besoin dans 2 mois vs 15 ans.",
    practicalEn:
      "Rank: cash, listed stocks, rental property, 90-day locked fund — most to least liquid. Match to need in 2 months vs 15 years.",
    mistakeFr:
      "Compter sur la vente rapide d'un bien immobilier pour une urgence de 48 h.",
    mistakeEn:
      "Relying on quick property sale for a 48-hour emergency.",
    takeawayFr:
      "Liquidité = accès rapide. Match l'actif au délai du besoin.",
    takeawayEn:
      "Liquidity = fast access. Match the asset to the need timeline.",
    decisionFr:
      "Garder les besoins < 2 ans dans des actifs liquides, même si le rendement est faible.",
    decisionEn:
      "Keep needs < 2 years in liquid assets, even if return is low.",
    flashcardFrontFr: "Liquidité",
    flashcardFrontEn: "Liquidity",
    flashcardBackFr: "Facilité de convertir un actif en cash rapidement.",
    flashcardBackEn: "Ease of converting an asset to cash quickly.",
    exercisePromptFr:
      "12 000 000 FCFA total : 1 500 000 besoin dans 6 semaines, 10 500 000 horizon 12 ans. Comment séparer ?",
    exercisePromptEn:
      "12,000,000 FCFA total: 1,500,000 needed in 6 weeks, 10,500,000 horizon 12 years. How to separate?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : panne de voiture professionnelle, réparation 280 000 FCFA demain. Vous avez : 50 000 FCFA cash, 320 000 FCFA en actions cotées, part sociale coopérative illiquide 400 000 FCFA. Quelle source utiliser en premier ?",
      promptEn:
        "Situation: work car breakdown, 280,000 FCFA repair tomorrow. You have: 50,000 FCFA cash, 320,000 FCFA in listed stocks, illiquid cooperative share 400,000 FCFA. Which source to use first?",
      explanationCorrectFr:
        "Cash d'abord, puis actions cotées si nécessaire — coopérative trop lente pour demain.",
      explanationCorrectEn:
        "Cash first, then listed stocks if needed — cooperative too slow for tomorrow.",
      difficulty: 2,
      options: [
        opt("Cash puis actions cotées si besoin", "Cash then listed stocks if needed", true),
        opt("Vendre la part coopérative immédiatement", "Sell cooperative share immediately", false, "Illiquide — délai incompatible avec demain.", "Illiquid — timeline incompatible with tomorrow."),
        opt("Emprunter sans utiliser le cash", "Borrow without using cash", false, "Le cash et les actions liquides sont les sources rapides.", "Cash and liquid stocks are fast sources."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : fonds d'urgence cible 900 000 FCFA (3 mois essentiels). Vous placez ces 900 000 FCFA en actions volatiles « pour faire fructifier ». Quel risque principal ?",
        promptEn:
          "Situation: emergency target 900,000 FCFA (3 months essentials). You put this 900,000 FCFA in volatile stocks “to grow it.” Main risk?",
        explanationCorrectFr:
          "Liquidité et stabilité insuffisantes en cas de choc simultané à une baisse de marché.",
        explanationCorrectEn:
          "Insufficient liquidity and stability if shock coincides with market drop.",
        difficulty: 2,
        options: [
          opt("Fonds d'urgence indisponible ou amputé en crise", "Emergency fund unavailable or cut in crisis", true),
          opt("Trop de liquidité", "Too much liquidity", false, "Les actions volatiles réduisent la liquidité utile.", "Volatile stocks reduce usable liquidity."),
          opt("Dividendes garantis", "Guaranteed dividends", false, "Aucun dividende n'est garanti.", "No dividend is guaranteed."),
        ],
      }),
    ],
  }),

  buildPfLesson({
    slug: "real-estate-basics",
    titleFr: "Bases de l'immobilier",
    titleEn: "Real Estate Basics",
    descriptionFr: "Découvrez l'immobilier comme classe d'actif d'investissement.",
    descriptionEn: "Discover real estate as an investment asset class.",
    moduleSlug: "saving-investing",
    sortOrder: 13,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "pf-investing",
    learningObjective: "IDENTIFY",
    objectiveFr:
      "Comparer immobilier direct, REIT et résidence principale dans une situation chiffrée.",
    objectiveEn:
      "Compare direct real estate, REIT, and primary residence in a quantified situation.",
    explanationFr:
      "Immobilier : revenus locatifs + plus-value possible. Direct : capital initial élevé, gestion, vacance, faible liquidité. REIT : exposition immobilière plus liquide (cotation boursière) mais corrélé au marché actions. Résidence principale : usage personnel — valeur peut croître, mais ce n'est pas le même calcul qu'un investissement locatif pur. Reliez à « Liquidité » et « Horizon ».",
    explanationEn:
      "Real estate: rental income + possible capital gain. Direct: high initial capital, management, vacancy, low liquidity. REIT: more liquid real estate exposure (listed) but correlated to stock market. Primary residence: personal use — value may grow, but not same math as pure rental investment. Link to “Liquidity” and “Horizon.”",
    exampleFr:
      "Bien locatif : achat 28 000 000 FCFA, loyer net 110 000 FCFA / mois après charges → rendement brut illustratif ≈ 4,7 % / an avant vacance et travaux. REIT : liquidité intrajournalière, dividendes variables. Résidence principale 22 000 000 FCFA : plus-value possible, mais vous payez le loyer implicite de l'occuper.",
    exampleEn:
      "Rental property: purchase 28,000,000 FCFA, net rent 110,000 FCFA / month after costs → illustrative gross yield ≈ 4.7%/year before vacancy and repairs. REIT: intraday liquidity, variable dividends. Primary residence 22,000,000 FCFA: possible gain, but you pay implicit rent by occupying it.",
    practicalFr:
      "Comparez liquidité, effort de gestion, capital minimum : immobilier direct vs REIT pour 2 000 000 FCFA disponibles.",
    practicalEn:
      "Compare liquidity, management effort, minimum capital: direct property vs REIT for 2,000,000 FCFA available.",
    mistakeFr:
      "Supposer que « l'immobilier ne baisse jamais » — les marchés locaux varient.",
    mistakeEn:
      "Assuming “real estate never falls” — local markets vary.",
    takeawayFr:
      "Immobilier = revenus + valeur, mais liquidité et frais comptent.",
    takeawayEn:
      "Real estate = income + value, but liquidity and costs matter.",
    decisionFr:
      "Choisir direct, REIT ou résidence selon capital, temps disponible et besoin de liquidité.",
    decisionEn:
      "Choose direct, REIT, or residence by capital, available time, and liquidity need.",
    flashcardFrontFr: "REIT",
    flashcardFrontEn: "REIT",
    flashcardBackFr: "Société cotée qui investit dans l'immobilier.",
    flashcardBackEn: "Listed company that invests in real estate.",
    exercisePromptFr:
      "Loyer annuel net 1 320 000 FCFA, valeur 30 000 000 FCFA. Rendement locatif brut illustratif ?",
    exercisePromptEn:
      "Annual net rent 1,320,000 FCFA, value 30,000,000 FCFA. Illustrative gross rental yield?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : 1 800 000 FCFA disponibles, horizon 7 ans, peu de temps pour gérer des locataires, besoin de pouvoir vendre en quelques jours si situation change. Quelle forme d'exposition immobilière la plus cohérente ?",
      promptEn:
        "Situation: 1,800,000 FCFA available, 7-year horizon, little time for tenants, need to sell within days if situation changes. Most coherent real estate exposure?",
      explanationCorrectFr:
        "REIT ou fonds immobilier coté — liquidité supérieure à l'immobilier direct.",
      explanationCorrectEn:
        "REIT or listed real estate fund — higher liquidity than direct property.",
      difficulty: 2,
      options: [
        opt("REIT / fonds immobilier coté", "REIT / listed real estate fund", true),
        opt("Achat d'un studio locatif direct", "Direct rental studio purchase", false, "Capital et gestion souvent incompatibles avec 1,8 M et peu de temps.", "Capital and management often incompatible with 1.8M and little time."),
        opt("Immobilier direct sans réserve de maintenance", "Direct property with no maintenance reserve", false, "Vacance et travaux exigent réserve et temps.", "Vacancy and repairs require reserve and time."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : vous habitez votre appartement (résidence principale). Sa valeur monte de 8 %. Quelle affirmation la plus juste ?",
        promptEn:
          "Situation: you live in your apartment (primary residence). Its value rises 8%. Which statement is most accurate?",
        explanationCorrectFr:
          "Plus-value patrimoniale possible, mais ce n'est pas un revenu locatif tant que vous l'occupez.",
        explanationCorrectEn:
          "Possible wealth gain, but it is not rental income while you occupy it.",
        difficulty: 2,
        options: [
          opt("Plus-value patrimoniale, pas loyer locatif", "Wealth gain, not rental income", true),
          opt("Revenu locatif de 8 % / an garanti", "8%/year guaranteed rental income", false, "La hausse de valeur ≠ loyer.", "Value rise ≠ rent."),
          opt("Liquidité immédiate de la plus-value", "Immediate liquidity of the gain", false, "La plus-value n'est pas cash tant que non vendu.", "Gain is not cash until sold."),
        ],
      }),
    ],
  }),

  // ── B wealth ────────────────────────────────────────────────────────────────
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
    objectiveFr:
      "Estimer un besoin de retraite simplifié en FCFA/euros réels et identifier les leviers.",
    objectiveEn:
      "Estimate simplified retirement need in real FCFA/euros and identify levers.",
    explanationFr:
      "Retraite = horizon long : épargne régulière, diversification, capitalisation. Régimes publics complètent mais rarement suffisent seuls. Estimez besoins futurs en montants réels (inflation incluse). Commencer tôt réduit le versement mensuel nécessaire — cadre pédagogique, pas plan personnalisé. Reliez à « Intérêt composé » et « Taux d'épargne ».",
    explanationEn:
      "Retirement = long horizon: regular saving, diversification, compounding. Public systems supplement but rarely suffice alone. Estimate future needs in real amounts (inflation included). Starting early reduces required monthly contribution — pedagogical framework, not personalized plan. Link to “Compound Interest” and “Saving Rate.”",
    exampleFr:
      "Besoin estimé 650 000 FCFA / mois à la retraite × 25 ans ≈ capital cible indicatif 195 000 000 FCFA (règle 4 % simplifiée). Versement 75 000 FCFA / mois pendant 30 ans change fortement le capital final (simulateur Intérêt composé). Reporter 10 ans peut doubler l'effort mensuel.",
    exampleEn:
      "Estimated need 650,000 FCFA / month in retirement × 25 years ≈ indicative target capital 195,000,000 FCFA (simplified 4% rule). Contributing 75,000 FCFA / month for 30 years strongly changes final capital (Compound Interest simulator). Delaying 10 years can roughly double monthly effort.",
    practicalFr:
      "Estimez dépenses essentielles retraite en FCFA d'aujourd'hui × 12 × horizon. Fixez un versement mensuel réaliste que vous démarrez ce trimestre.",
    practicalEn:
      "Estimate essential retirement expenses in today’s FCFA × 12 × horizon. Set a realistic monthly contribution you start this quarter.",
    mistakeFr:
      "Compter uniquement sur la pension publique sans estimer l'écart avec vos besoins réels.",
    mistakeEn:
      "Relying only on public pension without estimating gap vs real needs.",
    takeawayFr:
      "Retraite = horizon long + épargne régulière + estimation en montants réels.",
    takeawayEn:
      "Retirement = long horizon + regular saving + estimates in real amounts.",
    decisionFr:
      "Fixer un versement mensuel retraite réaliste et l'automatiser — tester l'effet au simulateur Intérêt composé.",
    decisionEn:
      "Set a realistic monthly retirement contribution and automate it — test effect in Compound Interest simulator.",
    simulatorFr:
      "Simulateur Intérêt composé : capital initial 500 000 FCFA, versement 60 000 FCFA / mois, horizon 25 ans. Comparez si vous commencez maintenant vs dans 8 ans.",
    simulatorEn:
      "Compound Interest simulator: initial 500,000 FCFA, contribution 60,000 FCFA / month, 25-year horizon. Compare starting now vs in 8 years.",
    flashcardFrontFr: "Horizon de retraite",
    flashcardFrontEn: "Retirement horizon",
    flashcardBackFr: "Durée entre maintenant et le début de la retraite.",
    flashcardBackEn: "Time between now and retirement start.",
    exercisePromptFr:
      "Besoin 520 000 FCFA / mois, 22 ans de retraite visés. Ordre de grandeur capital cible ? Versement mensuel pour commencer ?",
    exercisePromptEn:
      "Need 520,000 FCFA / month, 22 years of retirement targeted. Order of magnitude target capital? Monthly contribution to start?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : Aïcha 28 ans, essentiels retraite estimés 480 000 FCFA / mois (euros d'aujourd'hui). Pension publique estimée 220 000 FCFA / mois. Écart mensuel à combler ?",
      promptEn:
        "Situation: Aïcha age 28, estimated retirement essentials 480,000 FCFA / month (today’s money). Estimated public pension 220,000 FCFA / month. Monthly gap to fill?",
      explanationCorrectFr: "480 000 − 220 000 = 260 000 FCFA / mois à financer par l'épargne.",
      explanationCorrectEn: "480,000 − 220,000 = 260,000 FCFA / month to fund through saving.",
      difficulty: 2,
      options: [
        opt("260 000 FCFA / mois", "260,000 FCFA / month", true),
        opt("480 000 FCFA / mois", "480,000 FCFA / month", false, "220 000 FCFA sont déjà couverts par la pension estimée.", "220,000 FCFA already covered by estimated pension."),
        opt("220 000 FCFA / mois", "220,000 FCFA / month", false, "220 000 est la pension, pas l'écart.", "220,000 is pension, not the gap."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : même objectif retraite, commencer à 30 ans vs 45 ans avec même versement mensuel. Quel effet attendu ?",
        promptEn:
          "Situation: same retirement goal, starting at 30 vs 45 with same monthly contribution. Expected effect?",
        explanationCorrectFr:
          "Commencer à 30 ans laisse plus d'années de capitalisation — capital final plus élevé.",
        explanationCorrectEn:
          "Starting at 30 allows more compounding years — higher final capital.",
        difficulty: 2,
        options: [
          opt("Capital final plus élevé en commençant à 30 ans", "Higher final capital starting at 30", true),
          opt("Aucune différence", "No difference", false, "Le temps amplifie la capitalisation.", "Time amplifies compounding."),
          opt("Capital final plus élevé en commençant à 45 ans", "Higher final capital starting at 45", false, "Moins d'années = moins de capitalisation.", "Fewer years = less compounding."),
        ],
      }),
    ],
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
    objectiveFr:
      "Définir l'indépendance financière et repérer la prochaine étape réaliste dans une situation chiffrée.",
    objectiveEn:
      "Define financial independence and spot the next realistic stage in a quantified situation.",
    explanationFr:
      "FI = vos actifs couvrent vos dépenses sans revenu actif obligatoire. Ce n'est pas forcément « ne plus jamais travailler » — c'est la liberté de choisir. Étapes : 1) fonds d'urgence, 2) dettes coûteuses éliminées, 3) taux d'épargne élevé, 4) capital investi couvrant les essentiels. Règle indicative 4 % : capital ≈ essentiels annuels × 25. Cadre éducatif — pas promesse de date.",
    explanationEn:
      "FI = assets cover expenses without mandatory active income. Not necessarily “never working again” — freedom to choose. Stages: 1) emergency fund, 2) costly debt cleared, 3) high savings rate, 4) invested capital covering essentials. Indicative 4% rule: capital ≈ annual essentials × 25. Educational framework — not a date promise.",
    exampleFr:
      "Essentiels 380 000 FCFA / mois → 4 560 000 FCFA / an → capital FI indicatif ≈ 114 000 000 FCFA (× 25). Taux d'épargne 35 % accélère la trajectoire. « Lean FI » = minimum vital ; « Fat FI » = marge confort.",
    exampleEn:
      "Essentials 380,000 FCFA / month → 4,560,000 FCFA / year → indicative FI capital ≈ 114,000,000 FCFA (× 25). 35% savings rate accelerates trajectory. “Lean FI” = bare minimum; “Fat FI” = comfort margin.",
    practicalFr:
      "Calculez essentiels mensuels × 300 (règle 4 % indicative) pour ordre de grandeur FI. Identifiez votre prochaine étape (urgence, dette, épargne).",
    practicalEn:
      "Compute monthly essentials × 300 (indicative 4% rule) for FI order of magnitude. Identify your next stage (emergency, debt, saving).",
    mistakeFr:
      "Viser un chiffre FI sans tenir compte de l'inflation réelle ou des dettes restantes.",
    mistakeEn:
      "Targeting an FI number without real inflation or remaining debts.",
    takeawayFr:
      "FI = couvrir ses besoins par le capital — un chemin par étapes, pas un saut unique.",
    takeawayEn:
      "FI = covering needs with capital — a staged path, not a single leap.",
    decisionFr:
      "Identifier la prochaine étape FI réaliste ce trimestre (ex. solder dette 22 %).",
    decisionEn:
      "Identify next realistic FI stage this quarter (e.g. clear 22% debt).",
    flashcardFrontFr: "Indépendance financière",
    flashcardFrontEn: "Financial independence",
    flashcardBackFr: "Actifs couvrant les dépenses sans revenu actif obligatoire.",
    flashcardBackEn: "Assets covering expenses without mandatory active income.",
    exercisePromptFr:
      "Essentiels 290 000 FCFA / mois, épargne 95 000 FCFA / mois, dette carte 850 000 FCFA à 24 %. Quelle étape FI prioriser ?",
    exercisePromptEn:
      "Essentials 290,000 FCFA / month, savings 95,000 FCFA / month, card debt 850,000 FCFA at 24%. Which FI stage to prioritize?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : essentiels 320 000 FCFA / mois, fonds d'urgence 400 000 FCFA (cible 960 000 FCFA), dette consommation 1 200 000 FCFA à 21 %. Prochaine étape FI la plus logique ?",
      promptEn:
        "Situation: essentials 320,000 FCFA / month, emergency fund 400,000 FCFA (target 960,000 FCFA), consumer debt 1,200,000 FCFA at 21%. Most logical next FI step?",
      explanationCorrectFr:
        "Compléter le fonds d'urgence (400 000 < 960 000) avant d'accélérer l'investissement long terme.",
      explanationCorrectEn:
        "Complete emergency fund (400,000 < 960,000) before accelerating long-term investing.",
      difficulty: 2,
      options: [
        opt("Compléter le fonds d'urgence", "Complete emergency fund", true),
        opt("Investir tout en actions immédiatement", "Invest everything in stocks immediately", false, "Coussin incomplet + dette = risque élevé.", "Incomplete cushion + debt = high risk."),
        opt("Ignorer la dette à 21 %", "Ignore 21% debt", false, "Dette coûteuse retarde la FI.", "Costly debt delays FI."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : essentiels 400 000 FCFA / mois. Capital FI indicatif (règle 4 % simplifiée) ?",
        promptEn:
          "Situation: essentials 400,000 FCFA / month. Indicative FI capital (simplified 4% rule)?",
        explanationCorrectFr:
          "400 000 × 12 × 25 = 120 000 000 FCFA (ordre de grandeur).",
        explanationCorrectEn:
          "400,000 × 12 × 25 = 120,000,000 FCFA (order of magnitude).",
        difficulty: 2,
        options: [
          opt("≈ 120 000 000 FCFA", "≈ 120,000,000 FCFA", true),
          opt("≈ 4 800 000 FCFA", "≈ 4,800,000 FCFA", false, "4,8 M = un an d'essentiels, pas le capital FI.", "4.8M = one year essentials, not FI capital."),
          opt("≈ 400 000 FCFA", "≈ 400,000 FCFA", false, "400 000 = un mois, pas le capital.", "400,000 = one month, not capital."),
        ],
      }),
    ],
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
    objectiveFr:
      "Définir une allocation cible chiffrée et décider si un rééquilibrage est nécessaire en situation.",
    objectiveEn:
      "Define a quantified target allocation and decide if rebalancing is needed in context.",
    explanationFr:
      "Portefeuille = placements regroupés selon allocation cible (ex. 60 % actions / 40 % obligations — indicatif). Suivez la performance globale, pas chaque ligne quotidiennement. Rééquilibrez quand l'allocation dérive (ex. actions montent à 72 %). Trois fonds larges peuvent suffire. Reliez à « Fonds et ETF » et « Risque et rendement ».",
    explanationEn:
      "Portfolio = holdings grouped by target allocation (e.g. 60% stocks / 40% bonds — indicative). Track overall performance, not each line daily. Rebalance when allocation drifts (e.g. stocks rise to 72%). Three broad funds can suffice. Link to “Funds and ETFs” and “Risk and Return.”",
    exampleFr:
      "Portefeuille 4 000 000 FCFA, cible 60/40. Après hausse actions : 2 880 000 actions (72 %), 1 120 000 obligations (28 %). Rééquilibrer = vendre une partie des actions pour revenir à 2 400 000 / 1 600 000 FCFA.",
    exampleEn:
      "Portfolio 4,000,000 FCFA, target 60/40. After stock rally: 2,880,000 stocks (72%), 1,120,000 bonds (28%). Rebalance = sell some stocks to return to 2,400,000 / 1,600,000 FCFA.",
    practicalFr:
      "Écrivez allocation cible en % et montants sur votre capital actuel (FCFA ou euros). Règle : rééquilibrer si écart > 5 points.",
    practicalEn:
      "Write target allocation in % and amounts on your current capital (FCFA or euros). Rule: rebalance if drift > 5 points.",
    mistakeFr:
      "Acheter 15 produits corrélés sans comprendre la fausse diversification.",
    mistakeEn:
      "Buying 15 correlated products without understanding false diversification.",
    takeawayFr:
      "Allocation cible + rééquilibrage discipliné > micro-gestion quotidienne.",
    takeawayEn:
      "Target allocation + disciplined rebalancing > daily micro-management.",
    decisionFr:
      "Fixer allocation cible écrite et fréquence de révision (ex. semestrielle).",
    decisionEn:
      "Set written target allocation and review frequency (e.g. semi-annual).",
    flashcardFrontFr: "Rééquilibrage",
    flashcardFrontEn: "Rebalancing",
    flashcardBackFr: "Ajuster le portefeuille pour retrouver l'allocation cible.",
    flashcardBackEn: "Adjust portfolio to restore target allocation.",
    exercisePromptFr:
      "Cible 50/50, capital 3 600 000 FCFA, actions montent à 58 %. Rééquilibrer ? Sens de l'ajustement ?",
    exercisePromptEn:
      "Target 50/50, capital 3,600,000 FCFA, stocks rise to 58%. Rebalance? Direction of adjustment?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : cible 70 % actions / 30 % obligations, capital 5 000 000 FCFA. Après bull market, actions = 3 850 000 FCFA (77 %). Que faire en rééquilibrage ?",
      promptEn:
        "Situation: target 70% stocks / 30% bonds, capital 5,000,000 FCFA. After bull market, stocks = 3,850,000 FCFA (77%). What to do when rebalancing?",
      explanationCorrectFr:
        "Vendre une partie des actions pour revenir à 3 500 000 FCFA actions (70 %) et 1 500 000 obligations (30 %).",
      explanationCorrectEn:
        "Sell some stocks to return to 3,500,000 FCFA stocks (70%) and 1,500,000 bonds (30%).",
      difficulty: 2,
      options: [
        opt("Réduire la part actions vers 70 %", "Reduce stock share toward 70%", true),
        opt("Acheter encore plus d'actions", "Buy even more stocks", false, "77 % > 70 % — on réduit, pas augmente.", "77% > 70% — reduce, not increase."),
        opt("Tout convertir en cash par panique", "Convert everything to cash in panic", false, "Rééquilibrer ≠ tout vendre.", "Rebalancing ≠ selling everything."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : portefeuille simple 2 ETF (actions monde + obligations) vs 12 fonds actifs chevauchants. Quel avantage principal du portefeuille simple ?",
        promptEn:
          "Situation: simple portfolio 2 ETFs (world stocks + bonds) vs 12 overlapping active funds. Main advantage of simple portfolio?",
        explanationCorrectFr:
          "Frais plus bas et diversification claire — moins de chevauchement.",
        explanationCorrectEn:
          "Lower fees and clear diversification — less overlap.",
        difficulty: 2,
        options: [
          opt("Frais plus bas et diversification claire", "Lower fees and clear diversification", true),
          opt("Garantie de battre le marché", "Guarantee to beat the market", false, "Aucune garantie de surperformance.", "No outperformance guarantee."),
          opt("Suivi quotidien obligatoire de 12 lignes", "Mandatory daily tracking of 12 lines", false, "La simplicité réduit la micro-gestion.", "Simplicity reduces micro-management."),
        ],
      }),
    ],
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
    objectiveFr:
      "Installer trois habitudes patrimoniales concrètes et mesurables en FCFA ou euros.",
    objectiveEn:
      "Install three concrete, measurable wealth habits in FCFA or euros.",
    explanationFr:
      "Habitudes patrimoniales : épargne automatique, investissement régulier (DCA), revue budgétaire mensuelle, revue patrimoniale trimestrielle, éducation financière continue. La constance surpasse l'intensité ponctuelle — même logique que « Habitudes d'épargne » en fondations. Automatiser réduit la dépendance à la motivation. Principes généraux, pas promesse de richesse.",
    explanationEn:
      "Wealth habits: automatic saving, regular investing (DCA), monthly budget review, quarterly wealth review, ongoing financial education. Consistency beats occasional intensity — same logic as “Saving Habits” in foundations. Automation reduces reliance on motivation. General principles, not a wealth promise.",
    exampleFr:
      "1) Virement auto 85 000 FCFA le jour de paie vers épargne/investissement. 2) Revue patrimoniale trimestrielle (30 min) : patrimoine net, taux d'épargne, allocation. 3) Une leçon finance / mois. Sur 5 ans, 85 000 FCFA / mois = 5 100 000 FCFA versés — sans compter la capitalisation.",
    exampleEn:
      "1) Auto-transfer 85,000 FCFA on payday to savings/investment. 2) Quarterly wealth review (30 min): net worth, savings rate, allocation. 3) One finance lesson / month. Over 5 years, 85,000 FCFA / month = 5,100,000 FCFA contributed — excluding compounding.",
    practicalFr:
      "Choisissez une habitude à démarrer cette semaine (montant, jour, compte). Écrivez-la et programmez-la — mesurez le taux d'épargne après 90 jours.",
    practicalEn:
      "Pick one habit to start this week (amount, day, account). Write and schedule it — measure savings rate after 90 days.",
    mistakeFr:
      "Reset financier radical chaque janvier puis abandon en février — ou changer de stratégie chaque mois.",
    mistakeEn:
      "Radical financial reset every January then quit in February — or change strategy every month.",
    takeawayFr:
      "Petites actions répétées > grands élans oubliés.",
    takeawayEn:
      "Small repeated actions > big forgotten bursts.",
    decisionFr:
      "Programmer un virement automatique tenable 6 mois minimum — suivre le taux d'épargne mensuellement.",
    decisionEn:
      "Schedule an automatic transfer sustainable at least 6 months — track savings rate monthly.",
    flashcardFrontFr: "Épargne automatique",
    flashcardFrontEn: "Automatic saving",
    flashcardBackFr: "Virement programmé vers investissement ou épargne.",
    flashcardBackEn: "Scheduled transfer to investment or savings.",
    exercisePromptFr:
      "Listez trois habitudes patrimoniales réalistes pour 90 jours (montants FCFA). Laquelle automatisez-vous ?",
    exercisePromptEn:
      "List three realistic wealth habits for 90 days (FCFA amounts). Which do you automate?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : Omar programme 70 000 FCFA / mois auto vers un ETF, revue patrimoniale le 1er de chaque trimestre, et une leçon / mois. En mars, le marché baisse 18 % et il veut arrêter le virement. Quelle habitude préserver en priorité ?",
      promptEn:
        "Situation: Omar schedules 70,000 FCFA / month auto to an ETF, quarterly review on the 1st, one lesson / month. In March, market falls 18% and he wants to stop the transfer. Which habit to preserve first?",
      explanationCorrectFr:
        "Maintenir le virement automatique (DCA) — arrêter en baisse inverse la discipline long terme.",
      explanationCorrectEn:
        "Keep the automatic transfer (DCA) — stopping in a downturn reverses long-term discipline.",
      difficulty: 2,
      options: [
        opt("Continuer le virement automatique", "Continue automatic transfer", true),
        opt("Arrêter tous les versements jusqu'au rebond", "Stop all contributions until rebound", false, "Arrêter en baisse est l'erreur classique du DCA.", "Stopping in downturn is classic DCA mistake."),
        opt("Abandonner aussi la revue trimestrielle", "Also abandon quarterly review", false, "La revue aide à tenir le plan écrit.", "Review helps stick to written plan."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : net 600 000 FCFA, vous hésitez entre épargne auto 90 000 FCFA (15 %) ou 180 000 FCFA (30 %). Historique : les plans > 20 % échouent en 2 mois. Quelle habitude choisir ?",
        promptEn:
          "Situation: net 600,000 FCFA, you hesitate between auto save 90,000 FCFA (15%) or 180,000 FCFA (30%). History: plans > 20% fail in 2 months. Which habit to choose?",
        explanationCorrectFr:
          "90 000 FCFA (15 %) — habitude tenable bat objectif ambitieux abandonné.",
        explanationCorrectEn:
          "90,000 FCFA (15%) — sustainable habit beats ambitious goal abandoned.",
        difficulty: 2,
        options: [
          opt("90 000 FCFA / mois (15 %)", "90,000 FCFA / month (15%)", true),
          opt("180 000 FCFA / mois (30 %)", "180,000 FCFA / month (30%)", false, "Historique d'échec — viser trop haut casse l'habitude.", "History of failure — aiming too high breaks habit."),
          opt("0 FCFA — attendre une augmentation", "0 FCFA — wait for a raise", false, "Reporter indéfiniment empêche la constance.", "Indefinite delay prevents consistency."),
        ],
      }),
    ],
  }),
];

const UPGRADE_BY_SLUG = new Map(PF_QUALITY_UPGRADES.map((lesson) => [lesson.slug, lesson]));

export function applyPfQualityUpgrades(lessons: CompactLesson[]): CompactLesson[] {
  return lessons.map((lesson) => UPGRADE_BY_SLUG.get(lesson.slug) ?? lesson);
}
