import { buildCfLesson, opt, q } from "./cf-factory";
import type { CompactLesson } from "./compact";

/** Working capital lessons — module cf-foundations, sortOrder 12–16 */
export const CF_WORKING_CAPITAL_LESSONS: CompactLesson[] = [
  buildCfLesson({
    slug: "working-capital",
    titleFr: "Besoin en fonds de roulement",
    titleEn: "Working Capital",
    descriptionFr: "Calculez et interprétez le BFR opérationnel et son impact sur la trésorerie.",
    descriptionEn: "Calculate and interpret operating working capital and its cash impact.",
    moduleSlug: "cf-foundations",
    sortOrder: 12,
    estimatedMinutes: 9,
    difficulty: "BEGINNER",
    skillSlug: "cf-working-capital",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Calculer le BFR opérationnel (stocks + créances − dettes fournisseurs) et expliquer pourquoi une hausse consomme du cash.",
    objectiveEn:
      "Calculate operating working capital (inventory + receivables − payables) and explain why an increase consumes cash.",
    explanationFr:
      "NovaPack, fabricant d'emballages, immobilise du cash dans son cycle d'exploitation : matières en stock, factures clients non encaissées, dettes fournisseurs non payées. Le BFR opérationnel = stocks + créances clients − dettes fournisseurs. Au 31/12 : stocks 120 k€, créances 200 k€, dettes fournisseurs 80 k€ → BFR = 240 k€. Si l'année suivante le BFR passe à 300 k€ (+60 k€), NovaPack a « consommé » 60 k€ de trésorerie même si son résultat comptable est positif — c'est l'effet de croissance ou de délais allongés.",
    explanationEn:
      "NovaPack, a packaging maker, ties cash in its operating cycle: raw materials in inventory, unpaid customer invoices, unpaid supplier bills. Operating WC = inventory + receivables − payables. At 12/31: inventory €120k, receivables €200k, payables €80k → WC = €240k. If WC rises to €300k (+€60k) the next year, NovaPack “consumed” €60k of cash even with positive accounting profit — the growth or longer cycle effect.",
    exampleFr:
      "NovaPack : CA 2 M€, résultat net +80 k€, mais BFR +60 k€. Trésorerie opérationnelle réelle ≈ 80 − 60 = +20 k€ seulement. Le comité de direction doit lire le BFR avant de déclarer « bonne année ».",
    exampleEn:
      "NovaPack: sales €2M, net income +€80k, but WC +€60k. Real operating cash ≈ 80 − 60 = +€20k only. Management should read WC before calling it a “good year.”",
    practicalFr:
      "Avec stocks 50, créances 80, dettes fournisseurs 40 : calculez le BFR. Si les créances passent à 100 sans autre changement, de combien le BFR augmente-t-il ?",
    practicalEn:
      "With inventory 50, receivables 80, payables 40: compute WC. If receivables rise to 100 with no other change, by how much does WC increase?",
    mistakeFr:
      "Confondre BFR opérationnel et fonds de roulement net (actif circulant − passif circulant du bilan) — deux lectures différentes.",
    mistakeEn:
      "Confusing operating WC with net working capital (current assets − current liabilities on the balance sheet) — two different views.",
    takeawayFr: "BFR ↑ = cash consommé ; BFR ↓ = cash libéré — même avec un résultat positif.",
    takeawayEn: "WC ↑ = cash consumed; WC ↓ = cash released — even with positive earnings.",
    decisionFr:
      "Avant d'approuver une croissance commerciale agressive, estimer l'effet BFR sur la trésorerie du trimestre.",
    decisionEn:
      "Before approving aggressive sales growth, estimate the WC effect on quarterly cash.",
    flashcardFrontFr: "BFR opérationnel",
    flashcardFrontEn: "Operating working capital",
    flashcardBackFr: "Stocks + créances − dettes fournisseurs.",
    flashcardBackEn: "Inventory + receivables − payables.",
    exercisePromptFr:
      "NovaPack : stocks 120, créances 200, dettes fournisseurs 80. Calculez le BFR. Les créances passent à 230 — nouvel effet trésorerie si le reste est stable ?",
    exercisePromptEn:
      "NovaPack: inventory 120, receivables 200, payables 80. Compute WC. Receivables rise to 230 — new cash effect if the rest is stable?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "NovaPack : stocks 120 k€, créances 200 k€, dettes fournisseurs 80 k€. Quel est le BFR ?",
      promptEn:
        "NovaPack: inventory €120k, receivables €200k, payables €80k. What is working capital?",
      explanationCorrectFr: "120 + 200 − 80 = 240 k€.",
      explanationCorrectEn: "120 + 200 − 80 = €240k.",
      difficulty: 2,
      options: [
        opt("400 k€", "€400k", false, "400 = stocks + créances sans soustraire les dettes fournisseurs.", "400 = inventory + receivables without subtracting payables."),
        opt("240 k€", "€240k", true),
        opt("80 k€", "€80k", false, "80 correspond aux seules dettes fournisseurs.", "80 is payables only."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "NovaPack affiche +80 k€ de résultat net mais le BFR augmente de 60 k€. Quel est l'effet trésorerie approximatif lié au BFR ?",
        promptEn:
          "NovaPack shows +€80k net income but WC rises by €60k. What is the approximate cash effect from WC?",
        explanationCorrectFr: "Une hausse de BFR consomme du cash : −60 k€ sur la trésorerie.",
        explanationCorrectEn: "Rising WC consumes cash: −€60k on cash.",
        difficulty: 2,
        options: [
          opt("+60 k€ de cash libéré", "+€60k cash released", false, "Une hausse du BFR immobilise du cash, elle ne le libère pas.", "Rising WC ties up cash; it does not release it."),
          opt("−60 k€ de cash consommé", "−€60k cash consumed", true),
          opt("Aucun effet", "No effect", false, "Le BFR a un effet direct sur la trésorerie opérationnelle.", "WC has a direct effect on operating cash."),
        ],
      }),
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Stocks 50, créances 80, dettes fournisseurs 40. Les créances passent à 100. Nouveau BFR ?",
        promptEn: "Inventory 50, receivables 80, payables 40. Receivables rise to 100. New WC?",
        explanationCorrectFr: "BFR initial = 90. Nouveau = 50 + 100 − 40 = 110.",
        explanationCorrectEn: "Initial WC = 90. New = 50 + 100 − 40 = 110.",
        difficulty: 2,
        options: [
          opt("90", "90", false, "90 était le BFR avant la hausse des créances.", "90 was WC before the receivables increase."),
          opt("110", "110", true),
          opt("140", "140", false, "140 additionne stocks et nouvelles créances sans soustraire les dettes.", "140 adds inventory and new receivables without subtracting payables."),
        ],
      }),
    ],
  }),

  buildCfLesson({
    slug: "accounts-receivable",
    titleFr: "Créances clients",
    titleEn: "Accounts Receivable",
    descriptionFr: "Lire les créances clients et leur effet sur le cash quand les délais s'allongent.",
    descriptionEn: "Read receivables and their cash effect when collection slows.",
    moduleSlug: "cf-foundations",
    sortOrder: 13,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: "cf-working-capital",
    learningObjective: "APPLY",
    objectiveFr:
      "Interpréter une hausse des créances clients et estimer l'effet trésorerie d'un allongement du délai de paiement.",
    objectiveEn:
      "Interpret rising receivables and estimate the cash effect of longer customer payment terms.",
    explanationFr:
      "NovaPack facture 500 k€ de ventes à crédit en janvier. Si les clients paient en moyenne à 45 jours (DSO ≈ 45), une partie du CA reste en créances en fin de mois. Créances passent de 180 k€ à 220 k€ (+40 k€) : NovaPack a enregistré le revenu mais n'a pas encore reçu 40 k€ de cash supplémentaire. Allonger les délais clients (ex. passer de 30 à 60 jours) peut booster les ventes à court terme mais consomme de la trésorerie.",
    explanationEn:
      "NovaPack invoices €500k of credit sales in January. If customers pay on average in 45 days (DSO ≈ 45), part of sales stays in receivables at month-end. Receivables rise from €180k to €220k (+€40k): NovaPack booked revenue but has not yet received an extra €40k of cash. Extending customer terms (e.g. 30 to 60 days) may boost short-term sales but consumes cash.",
    exampleFr:
      "Créances +40 k€ sur un trimestre sans baisse des ventes → DSO qui s'allonge. Trésorerie −40 k€ vs scénario stable, même si le compte de résultat est inchangé.",
    exampleEn:
      "Receivables +€40k in a quarter with flat sales → DSO lengthening. Cash −€40k vs stable scenario, even if the income statement is unchanged.",
    practicalFr:
      "Si le CA trimestriel est 600 k€ et les créances fin de trimestre 150 k€, estimez le DSO approximatif (jours).",
    practicalEn:
      "If quarterly sales are €600k and quarter-end receivables are €150k, estimate approximate DSO (days).",
    mistakeFr:
      "Célébrer une hausse du CA sans vérifier si les créances augmentent plus vite — signe de clients qui paient plus tard.",
    mistakeEn:
      "Celebrating sales growth without checking if receivables grow faster — a sign customers pay later.",
    takeawayFr: "Créances ↑ = ventes facturées mais cash pas encore encaissé.",
    takeawayEn: "Receivables ↑ = sales invoiced but cash not yet collected.",
    decisionFr:
      "Avant d'accorder 60 jours de crédit à un gros client, simuler l'impact sur créances et trésorerie.",
    decisionEn:
      "Before granting 60-day credit to a large customer, simulate the impact on receivables and cash.",
    flashcardFrontFr: "Créances clients",
    flashcardFrontEn: "Accounts receivable",
    flashcardBackFr: "Montants dus par les clients — hausse = cash consommé.",
    flashcardBackEn: "Amounts owed by customers — increase = cash consumed.",
    exercisePromptFr:
      "Créances passent de 180 à 220 k€. Quel est l'effet trésorerie ? Proposez une action de recouvrement concrète.",
    exercisePromptEn:
      "Receivables rise from 180 to 220. What is the cash effect? Propose one concrete collection action.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "NovaPack : créances passent de 180 k€ à 220 k€ sans autre changement. Effet trésorerie ?",
      promptEn:
        "NovaPack: receivables rise from €180k to €220k with no other change. Cash effect?",
      explanationCorrectFr: "Hausse des créances = +40 k€ immobilisés → −40 k€ de cash.",
      explanationCorrectEn: "Rising receivables = +€40k tied up → −€40k cash.",
      difficulty: 2,
      options: [
        opt("+40 k€", "+€40k", false, "Les créances qui augmentent consomment du cash, ne l'augmentent pas.", "Rising receivables consume cash; they do not increase it."),
        opt("−40 k€", "−€40k", true),
        opt("0 k€", "€0", false, "La variation de 40 k€ a un effet direct sur la trésorerie.", "The €40k change has a direct cash effect."),
      ],
    }),
  }),

  buildCfLesson({
    slug: "accounts-payable",
    titleFr: "Dettes fournisseurs",
    titleEn: "Accounts Payable",
    descriptionFr: "Utiliser les dettes fournisseurs comme levier de trésorerie — avec limites.",
    descriptionEn: "Use payables as a cash lever — within limits.",
    moduleSlug: "cf-foundations",
    sortOrder: 14,
    estimatedMinutes: 7,
    difficulty: "BEGINNER",
    skillSlug: "cf-working-capital",
    learningObjective: "APPLY",
    objectiveFr:
      "Expliquer pourquoi une hausse des dettes fournisseurs libère du cash et identifier les risques associés.",
    objectiveEn:
      "Explain why rising payables release cash and identify the associated risks.",
    explanationFr:
      "NovaPack achète 300 k€ de matières premières par trimestre. Dettes fournisseurs : 70 k€ → 95 k€ (+25 k€). L'entreprise a reçu les marchandises (charge au compte de résultat ou en stock) mais n'a pas encore payé 25 k€ — ce retard de paiement libère temporairement du cash. Le DPO (délai de paiement fournisseurs) mesure ce comportement. Attention : retarder trop longtemps peut dégrader les relations fournisseurs ou entraîner des pénalités — c'est un outil de gestion, pas une recommandation de non-paiement.",
    explanationEn:
      "NovaPack buys €300k of raw materials per quarter. Payables: €70k → €95k (+€25k). The company received goods (expensed or inventoried) but has not yet paid €25k — that payment delay temporarily releases cash. DPO measures this behavior. Caution: delaying too long can hurt supplier relationships or trigger penalties — a management tool, not a non-payment recommendation.",
    exampleFr:
      "Dettes fournisseurs +25 k€ → trésorerie +25 k€ vs payer immédiatement. Mais si DPO passe de 30 à 90 jours, un fournisseur stratégique peut réduire les délais de livraison.",
    exampleEn:
      "Payables +€25k → cash +€25k vs paying immediately. But if DPO moves from 30 to 90 days, a strategic supplier may shorten delivery lead times.",
    practicalFr:
      "Dettes fournisseurs passent de 70 à 95 k€. Quel est l'effet trésorerie ? Citez un risque relationnel.",
    practicalEn:
      "Payables rise from 70 to 95. What is the cash effect? Name one relationship risk.",
    mistakeFr:
      "Traiter l'allongement des délais fournisseurs comme un « gain gratuit » sans plan de paiement.",
    mistakeEn:
      "Treating longer supplier terms as “free money” without a payment plan.",
    takeawayFr: "Dettes fournisseurs ↑ = cash libéré temporairement — à gérer avec discipline.",
    takeawayEn: "Payables ↑ = cash released temporarily — manage with discipline.",
    decisionFr:
      "Négocier des délais fournisseurs seulement si le plan de trésorerie montre quand les factures seront réglées.",
    decisionEn:
      "Negotiate supplier terms only if the cash plan shows when invoices will be settled.",
    flashcardFrontFr: "Dettes fournisseurs",
    flashcardFrontEn: "Accounts payable",
    flashcardBackFr: "Montants dus aux fournisseurs — hausse = cash libéré.",
    flashcardBackEn: "Amounts owed to suppliers — increase = cash released.",
    exercisePromptFr:
      "NovaPack : dettes fournisseurs +25 k€ sur le trimestre. Effet trésorerie et limite éthique à respecter ?",
    exercisePromptEn:
      "NovaPack: payables +€25k in the quarter. Cash effect and one ethical limit to respect?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "NovaPack : dettes fournisseurs passent de 70 k€ à 95 k€. Effet trésorerie (tout égal par ailleurs) ?",
      promptEn:
        "NovaPack: payables rise from €70k to €95k. Cash effect (all else equal)?",
      explanationCorrectFr: "Hausse des dettes fournisseurs = +25 k€ de cash non encore sorti.",
      explanationCorrectEn: "Rising payables = +€25k of cash not yet paid out.",
      difficulty: 2,
      options: [
        opt("+25 k€", "+€25k", true),
        opt("−25 k€", "−€25k", false, "Payer moins vite libère du cash ; −25 k€ serait une sortie.", "Paying slower releases cash; −€25k would be an outflow."),
        opt("0 k€", "€0", false, "La variation de 25 k€ affecte la trésorerie.", "The €25k change affects cash."),
      ],
    }),
  }),

  buildCfLesson({
    slug: "inventory-basics",
    titleFr: "Bases des stocks",
    titleEn: "Inventory Basics",
    descriptionFr: "Lire les stocks et l'effet trésorerie d'une surstockage ou d'une accélération des ventes.",
    descriptionEn: "Read inventory and the cash effect of overstocking or faster sales.",
    moduleSlug: "cf-foundations",
    sortOrder: 15,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: "cf-working-capital",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Relier une hausse des stocks à une consommation de cash et estimer le DIO sur un mini-cas.",
    objectiveEn:
      "Link rising inventory to cash consumption and estimate DIO on a mini-case.",
    explanationFr:
      "NovaPack détient des stocks de cartons et d'encres. Stocks : 120 k€ → 155 k€ (+35 k€) alors que les ventes sont stables. L'entreprise a dépensé du cash pour produire ou acheter des articles non encore vendus — surstockage possible. Le DIO (days inventory outstanding) estime combien de jours de ventes sont immobilisés en stock. Si le coût des ventes trimestriel est 400 k€ et le stock moyen 150 k€, DIO ≈ (150 / 400) × 90 ≈ 34 jours.",
    explanationEn:
      "NovaPack holds cardboard and ink inventory. Inventory: €120k → €155k (+€35k) while sales are flat. The company spent cash to make or buy items not yet sold — possible overstocking. DIO estimates how many days of sales sit in inventory. If quarterly COGS is €400k and average inventory €150k, DIO ≈ (150 / 400) × 90 ≈ 34 days.",
    exampleFr:
      "Stocks +35 k€ avec ventes plates → cash −35 k€. Action : revoir les prévisions et le minimum de commande fournisseur.",
    exampleEn:
      "Inventory +€35k with flat sales → cash −€35k. Action: review forecasts and supplier minimum order quantities.",
    practicalFr:
      "COGS trimestriel 400 k€, stock moyen 150 k€, trimestre = 90 jours. Estimez le DIO.",
    practicalEn:
      "Quarterly COGS €400k, average inventory €150k, quarter = 90 days. Estimate DIO.",
    mistakeFr:
      "Augmenter les stocks « pour ne jamais manquer » sans mesurer le coût de trésorerie immobilisé.",
    mistakeEn:
      "Raising inventory “so we never run out” without measuring tied-up cash cost.",
    takeawayFr: "Stocks ↑ = cash investi dans des produits non encore vendus.",
    takeawayEn: "Inventory ↑ = cash invested in products not yet sold.",
    decisionFr:
      "Fixer un plafond de stock en jours de ventes (DIO cible) avant d'augmenter les commandes.",
    decisionEn:
      "Set an inventory ceiling in days of sales (target DIO) before increasing orders.",
    flashcardFrontFr: "Stocks",
    flashcardFrontEn: "Inventory",
    flashcardBackFr: "Produits non vendus — hausse = cash consommé.",
    flashcardBackEn: "Unsold products — increase = cash consumed.",
    exercisePromptFr:
      "Stocks +35 k€, ventes stables. Effet trésorerie ? Proposez une cause opérationnelle plausible.",
    exercisePromptEn:
      "Inventory +€35k, flat sales. Cash effect? Propose one plausible operational cause.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "NovaPack : stocks passent de 120 k€ à 155 k€, ventes stables. Effet trésorerie ?",
      promptEn:
        "NovaPack: inventory rises from €120k to €155k, sales flat. Cash effect?",
      explanationCorrectFr: "Stocks +35 k€ = 35 k€ de cash immobilisé en plus.",
      explanationCorrectEn: "Inventory +€35k = €35k more cash tied up.",
      difficulty: 2,
      options: [
        opt("−35 k€", "−€35k", true),
        opt("+35 k€", "+€35k", false, "Plus de stock signifie plus de cash déjà dépensé, pas libéré.", "More inventory means more cash already spent, not released."),
        opt("0 k€", "€0", false, "La hausse de stock a un coût de trésorerie.", "Rising inventory has a cash cost."),
      ],
    }),
  }),

  buildCfLesson({
    slug: "cash-conversion-cycle",
    titleFr: "Cycle de conversion du cash",
    titleEn: "Cash Conversion Cycle",
    descriptionFr: "Combiner DIO, DSO et DPO pour mesurer le délai de récupération du cash.",
    descriptionEn: "Combine DIO, DSO, and DPO to measure cash recovery time.",
    moduleSlug: "cf-foundations",
    sortOrder: 16,
    estimatedMinutes: 9,
    difficulty: "BEGINNER",
    skillSlug: "cf-working-capital",
    learningObjective: "APPLY",
    objectiveFr:
      "Calculer le cycle de conversion du cash (CCC = DIO + DSO − DPO) et interpréter une amélioration.",
    objectiveEn:
      "Calculate the cash conversion cycle (CCC = DIO + DSO − DPO) and interpret an improvement.",
    explanationFr:
      "NovaPack : DIO 34 jours (stock), DSO 48 jours (clients), DPO 30 jours (fournisseurs). CCC = 34 + 48 − 30 = 52 jours. L'entreprise finance en moyenne 52 jours entre le paiement des matières et l'encaissement client. Si NovaPack réduit le DSO de 48 à 40 jours (−8), le CCC passe à 44 jours — 8 jours de cash récupérés sur chaque cycle. Sur un CA annuel de 8 M€, chaque jour de CCC vaut environ 8 M / 365 ≈ 22 k€ de cash immobilisé.",
    explanationEn:
      "NovaPack: DIO 34 days (inventory), DSO 48 days (customers), DPO 30 days (suppliers). CCC = 34 + 48 − 30 = 52 days. The company funds on average 52 days between paying for materials and collecting from customers. If NovaPack cuts DSO from 48 to 40 days (−8), CCC falls to 44 days — 8 days of cash recovered per cycle. On €8M annual sales, each CCC day is roughly 8M / 365 ≈ €22k of tied-up cash.",
    exampleFr:
      "CCC passe de 52 à 44 jours → ~8 × 22 k€ ≈ 176 k€ de cash potentiellement libéré (ordre de grandeur pédagogique).",
    exampleEn:
      "CCC falls from 52 to 44 days → ~8 × €22k ≈ €176k of potentially freed cash (pedagogical order of magnitude).",
    practicalFr:
      "Calculez le CCC avec DIO 30, DSO 45, DPO 20. Si DPO passe à 25, quel est le nouveau CCC ?",
    practicalEn:
      "Compute CCC with DIO 30, DSO 45, DPO 20. If DPO rises to 25, what is the new CCC?",
    mistakeFr:
      "Améliorer le DSO en retardant les paiements fournisseurs au-delà des contrats — gain court terme, risque long terme.",
    mistakeEn:
      "Improving DSO by delaying supplier payments beyond contracts — short-term gain, long-term risk.",
    takeawayFr: "CCC court = moins de cash bloqué dans le cycle d'exploitation.",
    takeawayEn: "Short CCC = less cash locked in the operating cycle.",
    decisionFr:
      "Prioriser l'action (DIO, DSO ou DPO) qui réduit le CCC le plus sans fragiliser les fournisseurs clés.",
    decisionEn:
      "Prioritize the lever (DIO, DSO, or DPO) that cuts CCC most without weakening key suppliers.",
    flashcardFrontFr: "Cycle de conversion du cash",
    flashcardFrontEn: "Cash conversion cycle",
    flashcardBackFr: "CCC = DIO + DSO − DPO (en jours).",
    flashcardBackEn: "CCC = DIO + DSO − DPO (days).",
    exercisePromptFr:
      "NovaPack : DIO 34, DSO 48, DPO 30. Calculez le CCC. DSO −8 jours : nouveau CCC et sens de l'effet trésorerie ?",
    exercisePromptEn:
      "NovaPack: DIO 34, DSO 48, DPO 30. Compute CCC. DSO −8 days: new CCC and cash effect direction?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "NovaPack : DIO 34, DSO 48, DPO 30. Quel est le CCC ?",
      promptEn: "NovaPack: DIO 34, DSO 48, DPO 30. What is CCC?",
      explanationCorrectFr: "34 + 48 − 30 = 52 jours.",
      explanationCorrectEn: "34 + 48 − 30 = 52 days.",
      difficulty: 2,
      options: [
        opt("52 jours", "52 days", true),
        opt("82 jours", "82 days", false, "82 additionne les trois délais sans soustraire le DPO.", "82 adds all three delays without subtracting DPO."),
        opt("22 jours", "22 days", false, "22 ne correspond pas à DIO + DSO − DPO.", "22 does not match DIO + DSO − DPO."),
      ],
    }),
  }),
];
