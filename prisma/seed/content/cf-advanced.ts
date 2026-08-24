import { buildCfLesson, opt, q } from "./cf-factory";
import type { CompactLesson } from "./compact";

export const CF_ADVANCED_LESSONS: CompactLesson[] = [
  buildCfLesson({
    slug: "roic-basics",
    titleFr: "Bases du ROIC",
    titleEn: "ROIC Basics",
    descriptionFr:
      "Calculer et interpréter le Return on Invested Capital (ROIC) comme mesure de création de valeur.",
    descriptionEn:
      "Calculate and interpret Return on Invested Capital (ROIC) as a value-creation measure.",
    moduleSlug: "advanced-cf",
    sortOrder: 0,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-advanced",
    learningObjective: "APPLY",
    objectiveFr:
      "Définir le ROIC, le calculer sur un mini-cas et le comparer au coût du capital.",
    objectiveEn:
      "Define ROIC, compute it on a mini-case, and compare it to the cost of capital.",
    explanationFr:
      "Le ROIC (Return on Invested Capital) mesure le rendement généré par le capital investi dans l'exploitation. Formule pédagogique simplifiée : ROIC = NOPAT ÷ Capital investi, où NOPAT ≈ EBIT × (1 − taux d'impôt) et le capital investi ≈ capitaux propres + dette nette (ou actifs d'exploitation − passifs d'exploitation non rémunérés). Si ROIC > WACC, l'entreprise crée de la valeur économique ; si ROIC < WACC, elle en détruit. Les définitions exactes varient selon les normes et les analystes — ici nous utilisons une version pédagogique cohérente.",
    explanationEn:
      "ROIC (Return on Invested Capital) measures return generated on capital invested in operations. Simplified pedagogical formula: ROIC = NOPAT ÷ Invested capital, where NOPAT ≈ EBIT × (1 − tax rate) and invested capital ≈ equity + net debt (or operating assets − non-interest-bearing operating liabilities). If ROIC > WACC, the firm creates economic value; if ROIC < WACC, it destroys value. Exact definitions vary by standard and analyst — here we use a consistent pedagogical version.",
    exampleFr:
      "Mini-cas : EBIT 20 M, taux d'impôt 25 % → NOPAT = 20 × (1 − 0,25) = 15 M. Capital investi = 100 M (capitaux propres 60 M + dette nette 40 M). ROIC = 15 ÷ 100 = 15 %. Si WACC = 10 %, l'écart (spread) = +5 points → création de valeur. Si WACC = 18 %, spread = −3 points → destruction de valeur.",
    exampleEn:
      "Mini-case: EBIT 20M, tax rate 25% → NOPAT = 20 × (1 − 0.25) = 15M. Invested capital = 100M (equity 60M + net debt 40M). ROIC = 15 ÷ 100 = 15%. If WACC = 10%, spread = +5 points → value creation. If WACC = 18%, spread = −3 points → value destruction.",
    practicalFr:
      "Situation : EBIT 12 M, impôt 30 %, capital investi 80 M. Calculez NOPAT, puis ROIC. Comparez à un WACC de 9 %.",
    practicalEn:
      "Situation: EBIT 12M, tax 30%, invested capital 80M. Compute NOPAT, then ROIC. Compare to a 9% WACC.",
    mistakeFr:
      "Utiliser le résultat net ou le ROE à la place du NOPAT et du capital investi — cela mélange effet de levier et activité opérationnelle.",
    mistakeEn:
      "Using net income or ROE instead of NOPAT and invested capital — this mixes leverage effect and operating performance.",
    takeawayFr:
      "ROIC mesure la performance opérationnelle du capital investi ; comparez-le au WACC pour juger la création de valeur.",
    takeawayEn:
      "ROIC measures operating performance on invested capital; compare it to WACC to judge value creation.",
    decisionFr:
      "Prioriser les initiatives qui élèvent durablement le ROIC au-dessus du coût du capital.",
    decisionEn:
      "Prioritize initiatives that durably raise ROIC above the cost of capital.",
    flashcardFrontFr: "ROIC (formule pédagogique)",
    flashcardFrontEn: "ROIC (pedagogical formula)",
    flashcardBackFr: "NOPAT ÷ Capital investi — comparer au WACC.",
    flashcardBackEn: "NOPAT ÷ Invested capital — compare to WACC.",
    exercisePromptFr:
      "Situation : NOPAT 9 M, capital investi 60 M, WACC 11 %. ROIC ? Spread ? Création ou destruction de valeur ?",
    exercisePromptEn:
      "Situation: NOPAT 9M, invested capital 60M, WACC 11%. ROIC? Spread? Value creation or destruction?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "EBIT 16 M, impôt 25 %, capital investi 80 M. Quel est le ROIC ?",
      promptEn: "EBIT 16M, tax 25%, invested capital 80M. What is ROIC?",
      explanationCorrectFr: "NOPAT = 16 × 0,75 = 12 M. ROIC = 12 ÷ 80 = 15 %.",
      explanationCorrectEn: "NOPAT = 16 × 0.75 = 12M. ROIC = 12 ÷ 80 = 15%.",
      difficulty: 2,
      options: [
        opt("20 %", "20%", false, "20 % = EBIT ÷ capital, sans impôt.", "20% = EBIT ÷ capital, without tax."),
        opt("15 %", "15%", true),
        opt("12 %", "12%", false, "12 % est le NOPAT, pas le ROIC.", "12% is NOPAT, not ROIC."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "ROIC 14 %, WACC 10 %. Que peut-on conclure (pédagogiquement) ?",
        promptEn: "ROIC 14%, WACC 10%. What can we conclude (pedagogically)?",
        explanationCorrectFr: "Spread positif de 4 points → création de valeur économique.",
        explanationCorrectEn: "Positive spread of 4 points → economic value creation.",
        difficulty: 2,
        options: [
          opt("Création de valeur", "Value creation", true),
          opt("Destruction de valeur", "Value destruction", false, "ROIC > WACC indique création, pas destruction.", "ROIC > WACC indicates creation, not destruction."),
          opt("Aucune conclusion possible", "No conclusion possible", false, "Le spread ROIC − WACC est un signal pédagogique clé.", "The ROIC − WACC spread is a key pedagogical signal."),
        ],
      }),
      q({
        type: "TRUE_FALSE",
        promptFr: "Le ROIC utilise typiquement le NOPAT plutôt que le résultat net.",
        promptEn: "ROIC typically uses NOPAT rather than net income.",
        explanationCorrectFr: "Vrai. NOPAT isole la performance opérationnelle avant effet de structure financière.",
        explanationCorrectEn: "True. NOPAT isolates operating performance before financing structure effects.",
        difficulty: 1,
        options: [
          opt("Vrai", "True", true),
          opt("Faux", "False", false, "Le résultat net inclut intérêts et effets non opérationnels.", "Net income includes interest and non-operating effects."),
        ],
      }),
    ],
  }),

  buildCfLesson({
    slug: "roe-and-roa",
    titleFr: "ROE et ROA",
    titleEn: "ROE and ROA",
    descriptionFr:
      "Distinguer rendement des actifs (ROA) et rendement des fonds propres (ROE), et l'effet de levier.",
    descriptionEn:
      "Distinguish return on assets (ROA) and return on equity (ROE), and the leverage effect.",
    moduleSlug: "advanced-cf",
    sortOrder: 1,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-advanced",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Calculer ROA et ROE, et expliquer comment le levier financier peut écarter le ROE du ROA.",
    objectiveEn:
      "Compute ROA and ROE, and explain how financial leverage can separate ROE from ROA.",
    explanationFr:
      "ROA = Résultat net ÷ Actif total — mesure l'efficacité globale des actifs. ROE = Résultat net ÷ Capitaux propres — mesure le rendement pour l'actionnaire. Avec de la dette, ROE peut dépasser ROA si le coût de la dette est inférieur au ROA (effet de levier positif). Formule pédagogique : ROE ≈ ROA + (ROA − coût de la dette) × (Dette ÷ Capitaux propres). Un ROE élevé peut refléter une bonne performance ou un levier risqué — il faut toujours croiser les ratios.",
    explanationEn:
      "ROA = Net income ÷ Total assets — measures overall asset efficiency. ROE = Net income ÷ Equity — measures return to shareholders. With debt, ROE can exceed ROA if debt cost is below ROA (positive leverage). Pedagogical formula: ROE ≈ ROA + (ROA − cost of debt) × (Debt ÷ Equity). High ROE may reflect good performance or risky leverage — always cross-check ratios.",
    exampleFr:
      "1) Résultat net 8 M, actifs 100 M → ROA = 8 %. Capitaux propres 50 M → ROE = 16 %. 2) Même ROA mais dette doublée : si le coût de la dette est 5 % et ROA 8 %, le levier peut pousser le ROE vers 20 %+ — mais le risque financier monte.",
    exampleEn:
      "1) Net income 8M, assets 100M → ROA = 8%. Equity 50M → ROE = 16%. 2) Same ROA but doubled debt: if debt cost is 5% and ROA 8%, leverage can push ROE toward 20%+ — but financial risk rises.",
    practicalFr:
      "Situation : résultat net 6 M, actifs 120 M, capitaux propres 40 M. Calculez ROA et ROE. Le ROE est-il supérieur au ROA ? Pourquoi ?",
    practicalEn:
      "Situation: net income 6M, assets 120M, equity 40M. Compute ROA and ROE. Is ROE above ROA? Why?",
    mistakeFr:
      "Célébrer un ROE élevé sans vérifier si le ROA est faible et compensé par un levier excessif.",
    mistakeEn:
      "Celebrating high ROE without checking whether ROA is weak and offset by excessive leverage.",
    takeawayFr:
      "ROA mesure l'efficacité opérationnelle ; ROE ajoute l'effet de levier — lisez les deux ensemble.",
    takeawayEn:
      "ROA measures operating efficiency; ROE adds leverage effect — read both together.",
    decisionFr:
      "Évaluer si un ROE attractif repose sur une vraie performance (ROA) ou sur un levier qui augmente le risque.",
    decisionEn:
      "Assess whether attractive ROE rests on real performance (ROA) or leverage that raises risk.",
    flashcardFrontFr: "ROE vs ROA",
    flashcardFrontEn: "ROE vs ROA",
    flashcardBackFr: "ROA = efficacité actifs ; ROE = rendement actionnaire (avec levier).",
    flashcardBackEn: "ROA = asset efficiency; ROE = shareholder return (with leverage).",
    exercisePromptFr:
      "Résultat net 10 M, actifs 200 M, capitaux propres 50 M. ROA ? ROE ? Interprétez l'écart.",
    exercisePromptEn:
      "Net income 10M, assets 200M, equity 50M. ROA? ROE? Interpret the gap.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Résultat net 9 M, actifs 150 M, capitaux propres 45 M. ROE ?",
      promptEn: "Net income 9M, assets 150M, equity 45M. ROE?",
      explanationCorrectFr: "ROE = 9 ÷ 45 = 20 %.",
      explanationCorrectEn: "ROE = 9 ÷ 45 = 20%.",
      difficulty: 2,
      options: [
        opt("6 %", "6%", false, "6 % est le ROA (9 ÷ 150).", "6% is ROA (9 ÷ 150)."),
        opt("20 %", "20%", true),
        opt("15 %", "15%", false, "Vérifiez le dénominateur : capitaux propres, pas actifs.", "Check the denominator: equity, not assets."),
      ],
    }),
  }),

  buildCfLesson({
    slug: "economic-profit-basics",
    titleFr: "Bases du profit économique",
    titleEn: "Economic Profit Basics",
    descriptionFr:
      "Comprendre le profit économique (EVA simplifié) : NOPAT moins le coût du capital investi.",
    descriptionEn:
      "Understand economic profit (simplified EVA): NOPAT minus the cost of invested capital.",
    moduleSlug: "advanced-cf",
    sortOrder: 2,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-advanced",
    learningObjective: "APPLY",
    objectiveFr:
      "Calculer un profit économique simple et le relier au spread ROIC − WACC.",
    objectiveEn:
      "Compute simple economic profit and link it to the ROIC − WACC spread.",
    explanationFr:
      "Le profit économique (ou EVA pédagogique) répond à la question : « Après avoir rémunéré tout le capital au coût du marché, reste-t-il quelque chose ? » Formule : Profit économique = NOPAT − (Capital investi × WACC). Équivalent : Capital investi × (ROIC − WACC). Un profit comptable positif peut coexister avec un profit économique négatif si le ROIC est inférieur au WACC. C'est un outil de pilotage, pas une norme comptable universelle.",
    explanationEn:
      "Economic profit (pedagogical EVA) answers: “After paying all capital at market cost, is anything left?” Formula: Economic profit = NOPAT − (Invested capital × WACC). Equivalent: Invested capital × (ROIC − WACC). Positive accounting profit can coexist with negative economic profit if ROIC is below WACC. It is a management tool, not a universal accounting standard.",
    exampleFr:
      "NOPAT 18 M, capital investi 150 M, WACC 10 %. Charge du capital = 150 × 10 % = 15 M. Profit économique = 18 − 15 = 3 M. Vérification : ROIC = 12 %, spread = 2 points → 150 × 2 % = 3 M.",
    exampleEn:
      "NOPAT 18M, invested capital 150M, WACC 10%. Capital charge = 150 × 10% = 15M. Economic profit = 18 − 15 = 3M. Check: ROIC = 12%, spread = 2 points → 150 × 2% = 3M.",
    practicalFr:
      "Situation : NOPAT 11 M, capital investi 100 M, WACC 12 %. Calculez le profit économique par les deux méthodes.",
    practicalEn:
      "Situation: NOPAT 11M, invested capital 100M, WACC 12%. Compute economic profit using both methods.",
    mistakeFr:
      "Confondre bénéfice comptable et profit économique — le comptable ignore le coût d'opportunité du capital.",
    mistakeEn:
      "Confusing accounting profit and economic profit — accounting ignores the opportunity cost of capital.",
    takeawayFr:
      "Le profit économique intègre le coût du capital ; il peut être négatif malgré un résultat net positif.",
    takeawayEn:
      "Economic profit includes capital cost; it can be negative despite positive net income.",
    decisionFr:
      "Allouer le capital aux projets dont le profit économique attendu est positif sur l'horizon pertinent.",
    decisionEn:
      "Allocate capital to projects with expected positive economic profit over the relevant horizon.",
    flashcardFrontFr: "Profit économique",
    flashcardFrontEn: "Economic profit",
    flashcardBackFr: "NOPAT − (Capital investi × WACC).",
    flashcardBackEn: "NOPAT − (Invested capital × WACC).",
    exercisePromptFr:
      "NOPAT 7 M, capital investi 70 M, WACC 9 %. Profit économique ? ROIC implicite ?",
    exercisePromptEn:
      "NOPAT 7M, invested capital 70M, WACC 9%. Economic profit? Implicit ROIC?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "NOPAT 20 M, capital investi 200 M, WACC 8 %. Profit économique ?",
      promptEn: "NOPAT 20M, invested capital 200M, WACC 8%. Economic profit?",
      explanationCorrectFr: "Charge = 200 × 8 % = 16 M. Profit économique = 20 − 16 = 4 M.",
      explanationCorrectEn: "Charge = 200 × 8% = 16M. Economic profit = 20 − 16 = 4M.",
      difficulty: 2,
      options: [
        opt("4 M", "4M", true),
        opt("20 M", "20M", false, "20 M est le NOPAT brut, avant coût du capital.", "20M is gross NOPAT, before capital cost."),
        opt("−4 M", "−4M", false, "ROIC (10 %) > WACC (8 %) → profit économique positif.", "ROIC (10%) > WACC (8%) → positive economic profit."),
      ],
    }),
  }),

  buildCfLesson({
    slug: "value-drivers",
    titleFr: "Leviers de création de valeur",
    titleEn: "Value Drivers",
    descriptionFr:
      "Identifier les leviers opérationnels et financiers qui font croître la valeur d'entreprise.",
    descriptionEn:
      "Identify operating and financial levers that grow enterprise value.",
    moduleSlug: "advanced-cf",
    sortOrder: 3,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-advanced",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Cartographier les principaux value drivers et leur impact sur FCF et valorisation.",
    objectiveEn:
      "Map key value drivers and their impact on FCF and valuation.",
    explanationFr:
      "Les value drivers sont les variables qui déplacent la valeur : croissance des ventes, marge opérationnelle, efficacité du capital (BFR, CAPEX), structure du capital et coût du capital. En DCF simplifié, la valeur ≈ FCF actualisés ; le FCF dépend du revenu, de la marge, des investissements et du BFR. Un plan de création de valeur combine souvent : améliorer la marge, accélérer la croissance rentable, libérer du cash (BFR), et investir dans des actifs à ROIC élevé. Chaque levier a un trade-off : croissance agressive peut diluer la marge ou gonfler le BFR.",
    explanationEn:
      "Value drivers are variables that move value: sales growth, operating margin, capital efficiency (working capital, CAPEX), capital structure, and cost of capital. In simplified DCF, value ≈ discounted FCF; FCF depends on revenue, margin, investment, and working capital. A value-creation plan often combines: improve margin, accelerate profitable growth, release cash (working capital), and invest in high-ROIC assets. Each lever has trade-offs: aggressive growth can dilute margin or inflate working capital.",
    exampleFr:
      "Société A : +2 points de marge → NOPAT +4 M/an. Société B : BFR ÷ 10 jours de CA → cash libéré 6 M (one-off). Société C : croissance 8 % mais ROIC 6 % < WACC 9 % → croissance qui détruit de la valeur malgré un CA en hausse.",
    exampleEn:
      "Company A: +2 margin points → NOPAT +4M/year. Company B: working capital ÷ 10 days of sales → 6M cash released (one-off). Company C: 8% growth but ROIC 6% < WACC 9% → growth that destroys value despite rising revenue.",
    practicalFr:
      "Situation : CA 100 M, marge EBIT 10 %, BFR 15 % du CA. Listez trois leviers pour augmenter le FCF sans changer le WACC.",
    practicalEn:
      "Situation: revenue 100M, EBIT margin 10%, working capital 15% of revenue. List three levers to raise FCF without changing WACC.",
    mistakeFr:
      "Optimiser un seul ratio (ex. marge) sans voir l'impact sur BFR, CAPEX ou risque opérationnel.",
    mistakeEn:
      "Optimizing a single ratio (e.g. margin) without seeing impact on working capital, CAPEX, or operational risk.",
    takeawayFr:
      "La valeur vient d'un portefeuille de leviers — marge, croissance, capital — alignés sur ROIC > WACC.",
    takeawayEn:
      "Value comes from a portfolio of levers — margin, growth, capital — aligned on ROIC > WACC.",
    decisionFr:
      "Prioriser les leviers avec le meilleur impact FCF / ROIC net du risque et de l'investissement requis.",
    decisionEn:
      "Prioritize levers with the best FCF / ROIC impact net of risk and required investment.",
    flashcardFrontFr: "Value drivers",
    flashcardFrontEn: "Value drivers",
    flashcardBackFr: "Croissance, marge, efficacité du capital, coût du capital.",
    flashcardBackEn: "Growth, margin, capital efficiency, cost of capital.",
    exercisePromptFr:
      "Un projet augmente le CA de 10 % mais le BFR passe de 12 % à 18 % du CA. Quel effet sur le FCF court terme ?",
    exercisePromptEn:
      "A project raises revenue 10% but working capital goes from 12% to 18% of revenue. Effect on short-term FCF?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Quel levier libère typiquement du cash sans changer la marge ?",
      promptEn: "Which lever typically releases cash without changing margin?",
      explanationCorrectFr: "Réduire le BFR (ex. accélérer les encaissements) libère du cash.",
      explanationCorrectEn: "Reducing working capital (e.g. faster collections) releases cash.",
      difficulty: 2,
      options: [
        opt("Réduction du BFR", "Working capital reduction", true),
        opt("Hausse du CAPEX", "Higher CAPEX", false, "Plus de CAPEX consomme du cash.", "More CAPEX consumes cash."),
        opt("Baisse des prix", "Price cuts", false, "Baisser les prix peut réduire marge et cash.", "Cutting prices can reduce margin and cash."),
      ],
    }),
  }),

  buildCfLesson({
    slug: "growth-vs-return",
    titleFr: "Croissance vs rendement",
    titleEn: "Growth vs Return",
    descriptionFr:
      "Arbitrer entre investir pour croître et exiger un rendement sur capital suffisant.",
    descriptionEn:
      "Balance investing for growth against requiring sufficient return on capital.",
    moduleSlug: "advanced-cf",
    sortOrder: 4,
    estimatedMinutes: 10,
    difficulty: "ADVANCED",
    skillSlug: "cf-advanced",
    learningObjective: "DECIDE",
    objectiveFr:
      "Déterminer quand la croissance crée ou détruit de la valeur selon le ROIC et le WACC.",
    objectiveEn:
      "Determine when growth creates or destroys value based on ROIC and WACC.",
    explanationFr:
      "Toute croissance n'est pas bonne : si le ROIC marginal est inférieur au WACC, chaque euro investi détruit de la valeur même si le chiffre d'affaires monte. Règle pédagogique : croissance rentable quand ROIC > WACC ; croissance destructrice dans le cas inverse. Les entreprises matures à ROIC élevé peuvent préférer racheter des actions ou réduire la dette plutôt que réinvestir à faible rendement. Les entreprises en phase d'investissement peuvent accepter un ROIC temporairement bas si le chemin vers ROIC > WACC est crédible — mais c'est un pari à surveiller.",
    explanationEn:
      "Not all growth is good: if marginal ROIC is below WACC, each euro invested destroys value even as revenue rises. Pedagogical rule: profitable growth when ROIC > WACC; destructive growth otherwise. Mature high-ROIC firms may prefer buybacks or deleveraging over reinvesting at low returns. Investment-phase firms may accept temporarily low ROIC if the path to ROIC > WACC is credible — but it is a bet to monitor.",
    exampleFr:
      "Division X : croissance 15 %/an, ROIC 7 %, WACC 10 % → chaque investissement détruit ~3 points de valeur. Division Y : croissance 5 %, ROIC 18 %, WACC 10 % → croissance très créatrice de valeur. Décision : réallouer le capital de X vers Y ou exiger un plan de remontée du ROIC avant d'investir.",
    exampleEn:
      "Division X: 15%/year growth, ROIC 7%, WACC 10% → each investment destroys ~3 points of value. Division Y: 5% growth, ROIC 18%, WACC 10% → highly value-creating growth. Decision: reallocate capital from X to Y or require a ROIC improvement plan before investing.",
    practicalFr:
      "Situation : deux projets — A : investissement 20 M, NOPAT annuel +2 M. B : investissement 20 M, NOPAT +3,5 M. WACC 12 %. Lequel crée de la valeur ?",
    practicalEn:
      "Situation: two projects — A: investment 20M, annual NOPAT +2M. B: investment 20M, NOPAT +3.5M. WACC 12%. Which creates value?",
    mistakeFr:
      "Récompenser la croissance du CA ou des parts de marché sans exiger un ROIC au-dessus du WACC.",
    mistakeEn:
      "Rewarding revenue or market share growth without requiring ROIC above WACC.",
    takeawayFr:
      "Croissance + ROIC > WACC = création ; croissance + ROIC < WACC = destruction déguisée.",
    takeawayEn:
      "Growth + ROIC > WACC = creation; growth + ROIC < WACC = disguised destruction.",
    decisionFr:
      "Financer la croissance seulement là où le ROIC marginal dépasse durablement le WACC.",
    decisionEn:
      "Fund growth only where marginal ROIC durably exceeds WACC.",
    flashcardFrontFr: "Croissance rentable",
    flashcardFrontEn: "Profitable growth",
    flashcardBackFr: "ROIC > WACC — sinon la croissance détruit de la valeur.",
    flashcardBackEn: "ROIC > WACC — otherwise growth destroys value.",
    exercisePromptFr:
      "Projet : +5 M de CA, marge NOPAT 8 %, investissement 10 M, WACC 11 %. ROIC du projet ? Créateur ou destructeur ?",
    exercisePromptEn:
      "Project: +5M revenue, NOPAT margin 8%, investment 10M, WACC 11%. Project ROIC? Creator or destroyer?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Investissement 25 M génère un NOPAT annuel de 2 M. WACC 10 %. Création ou destruction ?",
      promptEn: "Investment 25M generates annual NOPAT of 2M. WACC 10%. Creation or destruction?",
      explanationCorrectFr: "ROIC = 2 ÷ 25 = 8 % < WACC 10 % → destruction de valeur.",
      explanationCorrectEn: "ROIC = 2 ÷ 25 = 8% < WACC 10% → value destruction.",
      difficulty: 2,
      options: [
        opt("Destruction de valeur", "Value destruction", true),
        opt("Création de valeur", "Value creation", false, "ROIC 8 % est inférieur au WACC 10 %.", "ROIC 8% is below WACC 10%."),
        opt("Neutre", "Neutral", false, "Le spread est négatif (−2 points).", "The spread is negative (−2 points)."),
      ],
    }),
  }),

  buildCfLesson({
    slug: "working-capital-optimization",
    titleFr: "Optimisation du BFR",
    titleEn: "Working Capital Optimization",
    descriptionFr:
      "Libérer du cash en optimisant stocks, créances et dettes fournisseurs — sans nuire à l'activité.",
    descriptionEn:
      "Release cash by optimizing inventory, receivables, and payables — without harming operations.",
    moduleSlug: "advanced-cf",
    sortOrder: 5,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-working-capital",
    learningObjective: "APPLY",
    objectiveFr:
      "Quantifier le cash libéré par une amélioration du cycle de conversion et prioriser les actions.",
    objectiveEn:
      "Quantify cash released by improving the cash conversion cycle and prioritize actions.",
    explanationFr:
      "Le BFR = Stocks + Créances − Dettes fournisseurs. L'optimisation vise à réduire le cash immobilisé : accélérer les encaissements (DSO), ralentir prudemment les décaissements fournisseurs (DPO), et réduire les stocks (DIO). Cash libéré ≈ Δ BFR. Exemple : CA annuel 120 M → 1 jour de BFR ≈ 120 ÷ 365 ≈ 0,33 M. Réduire le CCC de 15 jours libère ~5 M de cash. Attention : pousser les fournisseurs ou sous-stocker peut fragiliser la supply chain — l'optimisation doit rester durable.",
    explanationEn:
      "Working capital = Inventory + Receivables − Payables. Optimization aims to reduce tied-up cash: speed collections (DSO), prudently slow supplier payments (DPO), and cut inventory (DIO). Cash released ≈ Δ working capital. Example: annual revenue 120M → 1 day of working capital ≈ 120 ÷ 365 ≈ 0.33M. Cutting CCC by 15 days releases ~5M cash. Caution: pushing suppliers or understocking can weaken the supply chain — optimization must stay sustainable.",
    exampleFr:
      "1) DSO 60 → 50 jours : sur CA 90 M, cash libéré ≈ 90 × 10 ÷ 365 ≈ 2,5 M. 2) DIO 45 → 40 jours : stocks moyens baissent, cash libéré selon coût des ventes. 3) DPO 30 → 35 jours : +5 jours de financement fournisseur — effet cash positif mais relation fournisseur à gérer.",
    exampleEn:
      "1) DSO 60 → 50 days: on 90M revenue, cash released ≈ 90 × 10 ÷ 365 ≈ 2.5M. 2) DIO 45 → 40 days: average inventory falls, cash released per cost of sales. 3) DPO 30 → 35 days: +5 days supplier financing — positive cash effect but supplier relationship to manage.",
    practicalFr:
      "Situation : CA 200 M, CCC 75 jours. Objectif −10 jours. Cash libéré approximatif ? Quel levier ciblez-vous en premier ?",
    practicalEn:
      "Situation: revenue 200M, CCC 75 days. Target −10 days. Approximate cash released? Which lever do you target first?",
    mistakeFr:
      "Réduire les stocks au point de ruptures qui font perdre des ventes — le cash gagné est annulé par le CA perdu.",
    mistakeEn:
      "Cutting inventory to stockouts that lose sales — cash saved is wiped out by lost revenue.",
    takeawayFr:
      "Chaque jour de CCC a un prix en cash ; optimisez avec discipline opérationnelle, pas au détriment du client.",
    takeawayEn:
      "Each CCC day has a cash price; optimize with operational discipline, not at the customer's expense.",
    decisionFr:
      "Choisir les leviers BFR au meilleur ratio cash libéré / risque opérationnel.",
    decisionEn:
      "Choose working capital levers with the best released cash / operational risk ratio.",
    flashcardFrontFr: "Cash libéré (BFR)",
    flashcardFrontEn: "Cash released (WC)",
    flashcardBackFr: "≈ jours gagnés × CA quotidien (approximation pédagogique).",
    flashcardBackEn: "≈ days gained × daily revenue (pedagogical approximation).",
    exercisePromptFr:
      "CA 150 M, DSO passe de 55 à 48 jours. Estimez le cash libéré. Quels risques côté clients ?",
    exercisePromptEn:
      "Revenue 150M, DSO drops from 55 to 48 days. Estimate cash released. What customer-side risks?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "CA annuel 146 M. Réduire le DSO de 7 jours libère environ combien de cash ?",
      promptEn: "Annual revenue 146M. Cutting DSO by 7 days releases roughly how much cash?",
      explanationCorrectFr: "146 ÷ 365 × 7 ≈ 2,8 M.",
      explanationCorrectEn: "146 ÷ 365 × 7 ≈ 2.8M.",
      difficulty: 2,
      options: [
        opt("≈ 2,8 M", "≈ 2.8M", true),
        opt("≈ 14,6 M", "≈ 14.6M", false, "14,6 M serait 10 % du CA, pas 7 jours.", "14.6M would be 10% of revenue, not 7 days."),
        opt("≈ 0,7 M", "≈ 0.7M", false, "Recalculez : CA quotidien × 7 jours.", "Recalculate: daily revenue × 7 days."),
      ],
    }),
  }),

  buildCfLesson({
    slug: "fcf-conversion",
    titleFr: "Conversion en free cash flow",
    titleEn: "FCF Conversion",
    descriptionFr:
      "Mesurer la qualité des bénéfices via le taux de conversion du résultat en free cash flow.",
    descriptionEn:
      "Measure earnings quality via the rate of profit conversion into free cash flow.",
    moduleSlug: "advanced-cf",
    sortOrder: 6,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-cash-flow",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Calculer le FCF, le ratio de conversion FCF / résultat net et diagnostiquer les écarts.",
    objectiveEn:
      "Compute FCF, the FCF / net income conversion ratio, and diagnose gaps.",
    explanationFr:
      "Le Free Cash Flow (FCF) pédagogique ≈ Flux de trésorerie d'exploitation (CFO) − CAPEX. Le taux de conversion FCF / résultat net indique combien de bénéfice comptable devient cash disponible. Un ratio < 100 % peut signaler : hausse du BFR, CAPEX élevé, ou écarts comptables. Formule de pont : Résultat net → + amortissements → ± Δ BFR → − CAPEX ≈ FCF (simplifié). Une entreprise peut afficher un résultat net en hausse mais un FCF en baisse — signal d'alerte pour la valorisation.",
    explanationEn:
      "Pedagogical Free Cash Flow (FCF) ≈ Operating cash flow (CFO) − CAPEX. FCF / net income conversion shows how much accounting profit becomes available cash. A ratio < 100% may signal: rising working capital, high CAPEX, or accounting gaps. Bridge formula: Net income → + depreciation → ± Δ working capital → − CAPEX ≈ FCF (simplified). A firm can show rising net income but falling FCF — a valuation warning signal.",
    exampleFr:
      "Résultat net 30 M, amortissements 10 M, Δ BFR +8 M (consomme du cash), CAPEX 15 M. FCF ≈ 30 + 10 − 8 − 15 = 17 M. Conversion = 17 ÷ 30 ≈ 57 % — qualité de cash moyenne, BFR pèse lourdement.",
    exampleEn:
      "Net income 30M, depreciation 10M, Δ working capital +8M (consumes cash), CAPEX 15M. FCF ≈ 30 + 10 − 8 − 15 = 17M. Conversion = 17 ÷ 30 ≈ 57% — moderate cash quality, working capital weighs heavily.",
    practicalFr:
      "Situation : résultat net 22 M, amortissements 6 M, Δ BFR −3 M, CAPEX 12 M. Calculez le FCF et le taux de conversion.",
    practicalEn:
      "Situation: net income 22M, depreciation 6M, Δ working capital −3M, CAPEX 12M. Compute FCF and conversion rate.",
    mistakeFr:
      "Valoriser sur le résultat net sans vérifier si le FCF suit — le cash paie la dette et les actionnaires, pas le net comptable.",
    mistakeEn:
      "Valuing on net income without checking whether FCF follows — cash pays debt and shareholders, not accounting net.",
    takeawayFr:
      "Un FCF durablement inférieur au résultat net mérite une enquête sur BFR et CAPEX.",
    takeawayEn:
      "FCF durably below net income deserves investigation into working capital and CAPEX.",
    decisionFr:
      "Exiger un plan d'action si la conversion FCF reste sous 70 % sans justification d'investissement.",
    decisionEn:
      "Require an action plan if FCF conversion stays below 70% without investment justification.",
    flashcardFrontFr: "FCF (pédagogique)",
    flashcardFrontEn: "FCF (pedagogical)",
    flashcardBackFr: "CFO − CAPEX ; pont via résultat + amort. − Δ BFR − CAPEX.",
    flashcardBackEn: "CFO − CAPEX; bridge via net income + D&A − Δ WC − CAPEX.",
    exercisePromptFr:
      "Résultat net 40 M, amortissements 12 M, Δ BFR +5 M, CAPEX 20 M. FCF ? Conversion ?",
    exercisePromptEn:
      "Net income 40M, depreciation 12M, Δ working capital +5M, CAPEX 20M. FCF? Conversion?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Résultat net 25 M, amortissements 8 M, Δ BFR −2 M, CAPEX 10 M. FCF approximatif ?",
      promptEn: "Net income 25M, depreciation 8M, Δ working capital −2M, CAPEX 10M. Approximate FCF?",
      explanationCorrectFr: "FCF ≈ 25 + 8 + 2 − 10 = 25 M (Δ BFR négatif libère du cash).",
      explanationCorrectEn: "FCF ≈ 25 + 8 + 2 − 10 = 25M (negative Δ WC releases cash).",
      difficulty: 2,
      options: [
        opt("25 M", "25M", true),
        opt("23 M", "23M", false, "N'oubliez pas que Δ BFR négatif ajoute du cash.", "Remember negative Δ WC adds cash."),
        opt("15 M", "15M", false, "15 M omet l'amortissement et le BFR.", "15M omits depreciation and working capital."),
      ],
    }),
  }),

  buildCfLesson({
    slug: "deleveraging-basics",
    titleFr: "Bases du désendettement",
    titleEn: "Deleveraging Basics",
    descriptionFr:
      "Comprendre quand et comment réduire l'endettement pour renforcer la solidité financière.",
    descriptionEn:
      "Understand when and how to reduce debt to strengthen financial resilience.",
    moduleSlug: "advanced-cf",
    sortOrder: 7,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-capital-structure",
    learningObjective: "DECIDE",
    objectiveFr:
      "Évaluer les bénéfices et coûts du désendettement via ratios de levier et couverture des intérêts.",
    objectiveEn:
      "Assess deleveraging benefits and costs via leverage and interest coverage ratios.",
    explanationFr:
      "Le désendettement réduit la dette nette pour améliorer la solvabilité et parfois le WACC (moins de risque financier). Ratios clés : Dette nette / EBITDA (levier), et couverture des intérêts = EBIT ÷ Charges d'intérêts. Le cash pour désendetter vient du FCF, de cessions d'actifs, ou de levées de capitaux. Trade-off : moins de dette = moins de risque mais moins d'effet de levier sur le ROE ; en période de taux élevés, désendetter peut être prioritaire même si le ROE baisse court terme.",
    explanationEn:
      "Deleveraging reduces net debt to improve solvency and sometimes WACC (less financial risk). Key ratios: Net debt / EBITDA (leverage), and interest coverage = EBIT ÷ Interest expense. Cash to delever comes from FCF, asset sales, or equity raises. Trade-off: less debt = less risk but less leverage on ROE; in high-rate periods, deleveraging may be priority even if ROE falls short term.",
    exampleFr:
      "Dette nette 200 M, EBITDA 50 M → levier 4,0×. Objectif 3,0× → dette cible 150 M → remboursement 50 M sur 2 ans via FCF 30 M/an + cession 20 M. Couverture intérêts : EBIT 45 M, intérêts 15 M → 3,0× (confortable au-dessus de 2,0× pédagogique).",
    exampleEn:
      "Net debt 200M, EBITDA 50M → leverage 4.0×. Target 3.0× → debt target 150M → repay 50M over 2 years via FCF 30M/year + disposal 20M. Interest coverage: EBIT 45M, interest 15M → 3.0× (comfortable above 2.0× pedagogical threshold).",
    practicalFr:
      "Situation : dette nette 120 M, EBITDA 40 M, intérêts 8 M, EBIT 35 M. Levier ? Couverture ? Faut-il désendetter ?",
    practicalEn:
      "Situation: net debt 120M, EBITDA 40M, interest 8M, EBIT 35M. Leverage? Coverage? Should you delever?",
    mistakeFr:
      "Rembourser la dette au détriment du BFR et des investissements critiques — le levier baisse mais la liquidité opérationnelle se dégrade.",
    mistakeEn:
      "Repaying debt at the expense of working capital and critical investment — leverage falls but operational liquidity worsens.",
    takeawayFr:
      "Désendetter améliore la résilience ; ciblez un levier compatible avec la volatilité du cash.",
    takeawayEn:
      "Deleveraging improves resilience; target leverage compatible with cash volatility.",
    decisionFr:
      "Allouer le FCF excédentaire au remboursement si le levier dépasse la cible et la couverture est tendue.",
    decisionEn:
      "Allocate excess FCF to repayment if leverage exceeds target and coverage is tight.",
    flashcardFrontFr: "Dette nette / EBITDA",
    flashcardFrontEn: "Net debt / EBITDA",
    flashcardBackFr: "Ratio de levier — plus bas = moins de risque financier.",
    flashcardBackEn: "Leverage ratio — lower = less financial risk.",
    exercisePromptFr:
      "Levier actuel 3,5×, EBITDA 60 M, cible 2,5×. Combien de dette à rembourser ?",
    exercisePromptEn:
      "Current leverage 3.5×, EBITDA 60M, target 2.5×. How much debt to repay?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "EBIT 28 M, charges d'intérêts 7 M. Couverture des intérêts ?",
      promptEn: "EBIT 28M, interest expense 7M. Interest coverage?",
      explanationCorrectFr: "28 ÷ 7 = 4,0×.",
      explanationCorrectEn: "28 ÷ 7 = 4.0×.",
      difficulty: 2,
      options: [
        opt("4,0×", "4.0×", true),
        opt("3,0×", "3.0×", false, "28 ÷ 7 = 4, pas 3.", "28 ÷ 7 = 4, not 3."),
        opt("0,25×", "0.25×", false, "C'est l'inverse (intérêts ÷ EBIT).", "That is the inverse (interest ÷ EBIT)."),
      ],
    }),
  }),

  buildCfLesson({
    slug: "scenario-analysis-cf",
    titleFr: "Analyse de scénarios (CF)",
    titleEn: "Scenario Analysis (CF)",
    descriptionFr:
      "Construire des scénarios base, haussier et baissier pour tester la robustesse financière.",
    descriptionEn:
      "Build base, upside, and downside scenarios to test financial robustness.",
    moduleSlug: "advanced-cf",
    sortOrder: 8,
    estimatedMinutes: 11,
    difficulty: "ADVANCED",
    skillSlug: "cf-advanced",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Construire trois scénarios cohérents et calculer FCF, levier et couverture sous chacun.",
    objectiveEn:
      "Build three coherent scenarios and compute FCF, leverage, and coverage under each.",
    explanationFr:
      "L'analyse de scénarios explore des futurs plausibles sans prétendre prédire. Scénario de base : hypothèses centrales (croissance, marge, CAPEX, BFR). Scénario haussier : demande forte, marge en expansion, BFR stable. Scénario baissier : recul du CA, compression de marge, BFR qui gonfle (clients paient plus lentement). Pour chaque scénario, recalculez : EBIT → NOPAT → FCF → dette nette / EBITDA → couverture des intérêts. L'écart entre scénarios révèle la sensibilité et les seuils de stress. C'est un outil de réflexion, pas une prévision certifiée.",
    explanationEn:
      "Scenario analysis explores plausible futures without claiming to predict. Base case: central assumptions (growth, margin, CAPEX, working capital). Upside: strong demand, expanding margin, stable working capital. Downside: revenue decline, margin compression, working capital swelling (slower customer payments). For each scenario, recalculate: EBIT → NOPAT → FCF → net debt / EBITDA → interest coverage. The gap between scenarios reveals sensitivity and stress thresholds. It is a thinking tool, not a certified forecast.",
    exampleFr:
      "Base : CA 100 M (+5 %), marge EBIT 12 %, FCF 8 M, levier 3,0×. Haussier : CA +10 %, marge 14 % → FCF 14 M, levier 2,5×. Baissier : CA −8 %, marge 9 %, Δ BFR +3 M → FCF 2 M, levier 3,8×, couverture 1,8× (zone de vigilance). Décision : identifier les triggers du scénario baissier (perte du client A, hausse matières premières).",
    exampleEn:
      "Base: revenue 100M (+5%), EBIT margin 12%, FCF 8M, leverage 3.0×. Upside: revenue +10%, margin 14% → FCF 14M, leverage 2.5×. Downside: revenue −8%, margin 9%, Δ working capital +3M → FCF 2M, leverage 3.8×, coverage 1.8× (watch zone). Decision: identify downside triggers (loss of client A, raw material spike).",
    practicalFr:
      "Situation : modélisez un scénario baissier (−10 % CA, −2 points de marge, +2 M de BFR) à partir du cas de base FCF 12 M. Quel FCF en stress ?",
    practicalEn:
      "Situation: model a downside scenario (−10% revenue, −2 margin points, +2M working capital) from a base FCF of 12M. Stressed FCF?",
    mistakeFr:
      "Construire un scénario baissier « cosmétique » (−1 % de CA) qui ne teste pas vraiment la résilience.",
    mistakeEn:
      "Building a cosmetic downside scenario (−1% revenue) that does not truly test resilience.",
    takeawayFr:
      "Trois scénarios cohérents valent mieux qu'une seule prévision ponctuelle — testez les ratios de stress.",
    takeawayEn:
      "Three coherent scenarios beat a single point forecast — test stress ratios.",
    decisionFr:
      "Préparer des actions (coûts, BFR, refinancement) déclenchées si le scénario baissier se matérialise.",
    decisionEn:
      "Prepare actions (costs, working capital, refinancing) triggered if the downside scenario materializes.",
    flashcardFrontFr: "Scénario baissier",
    flashcardFrontEn: "Downside scenario",
    flashcardBackFr: "CA ↓, marge ↓, BFR ↑ → FCF et couverture sous pression.",
    flashcardBackEn: "Revenue ↓, margin ↓, working capital ↑ → FCF and coverage under pressure.",
    exercisePromptFr:
      "Base : levier 2,8×, couverture 3,5×. Baissier : FCF −40 %, dette stable. Quel impact sur levier et couverture ?",
    exercisePromptEn:
      "Base: leverage 2.8×, coverage 3.5×. Downside: FCF −40%, debt stable. Impact on leverage and coverage?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Scénario baissier : CA −10 %, marge EBIT passe de 15 % à 11 % (base CA 80 M). EBIT baissier ?",
      promptEn:
        "Downside scenario: revenue −10%, EBIT margin falls from 15% to 11% (base revenue 80M). Downside EBIT?",
      explanationCorrectFr: "CA baissier = 80 × 0,9 = 72 M. EBIT = 72 × 11 % = 7,92 M.",
      explanationCorrectEn: "Downside revenue = 80 × 0.9 = 72M. EBIT = 72 × 11% = 7.92M.",
      difficulty: 3,
      options: [
        opt("7,92 M", "7.92M", true),
        opt("12 M", "12M", false, "12 M est l'EBIT de base (80 × 15 %).", "12M is base EBIT (80 × 15%)."),
        opt("8,8 M", "8.8M", false, "8,8 M applique 11 % au CA de base, pas au CA stressé.", "8.8M applies 11% to base revenue, not stressed revenue."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Quel élément aggrave typiquement le FCF dans un scénario baissier ?",
        promptEn: "Which item typically worsens FCF in a downside scenario?",
        explanationCorrectFr: "Un BFR qui monte consomme du cash en plus de la marge qui compresse.",
        explanationCorrectEn: "Rising working capital consumes cash on top of margin compression.",
        difficulty: 2,
        options: [
          opt("Hausse du BFR", "Rising working capital", true),
          opt("Baisse du CAPEX", "Lower CAPEX", false, "Moins de CAPEX libère du cash, pas l'inverse.", "Less CAPEX releases cash, not the opposite."),
          opt("Amortissements plus bas", "Lower depreciation", false, "L'amortissement est non cash — effet limité sur FCF direct.", "Depreciation is non-cash — limited direct FCF effect."),
        ],
      }),
      q({
        type: "TRUE_FALSE",
        promptFr: "Un scénario haussier devrait typiquement montrer un levier plus bas si la dette est stable.",
        promptEn: "An upside scenario should typically show lower leverage if debt is stable.",
        explanationCorrectFr: "Vrai. EBITDA plus élevé avec dette stable → levier plus bas.",
        explanationCorrectEn: "True. Higher EBITDA with stable debt → lower leverage.",
        difficulty: 2,
        options: [
          opt("Vrai", "True", true),
          opt("Faux", "False", false, "Le ratio dette / EBITDA baisse quand l'EBITDA monte.", "Net debt / EBITDA falls when EBITDA rises."),
        ],
      }),
    ],
  }),

  buildCfLesson({
    slug: "downside-analysis-cf",
    titleFr: "Analyse downside (CF)",
    titleEn: "Downside Analysis (CF)",
    descriptionFr:
      "Quantifier les pertes potentielles et les seuils de rupture en période de stress.",
    descriptionEn:
      "Quantify potential losses and break points under stress conditions.",
    moduleSlug: "advanced-cf",
    sortOrder: 9,
    estimatedMinutes: 10,
    difficulty: "ADVANCED",
    skillSlug: "cf-advanced",
    learningObjective: "DECIDE",
    objectiveFr:
      "Identifier les seuils critiques (couverture, levier, liquidité) et les actions de mitigation.",
    objectiveEn:
      "Identify critical thresholds (coverage, leverage, liquidity) and mitigation actions.",
    explanationFr:
      "L'analyse downside se concentre sur le scénario défavorable pour estimer l'ampleur des dégâts et les points de rupture. Questions clés : à quel recul du CA la couverture des intérêts passe-t-elle sous 1,5× ? Combien de mois de FCF négatif la trésorerie supporte-t-elle ? Quels covenants (levier max, couverture min) seraient violés ? Mesures de mitigation : réduction de coûts fixes, report de CAPEX, cession d'actifs, renégociation de dette, injection de capitaux. L'objectif n'est pas le pessimisme mais la préparation — savoir quand agir avant la crise de liquidité.",
    explanationEn:
      "Downside analysis focuses on the adverse scenario to estimate damage magnitude and break points. Key questions: at what revenue decline does interest coverage fall below 1.5×? How many months of negative FCF can cash reserves support? Which covenants (max leverage, min coverage) would be breached? Mitigation: fixed cost cuts, CAPEX deferral, asset sales, debt renegotiation, equity injection. The goal is not pessimism but preparation — knowing when to act before a liquidity crisis.",
    exampleFr:
      "EBIT actuel 50 M, intérêts 20 M → couverture 2,5×. Seuil 1,5× atteint si EBIT < 30 M (−40 %). Trésorerie 15 M, burn mensuel 3 M en stress → runway ~5 mois. Plan : couper 8 M de coûts fixes, reporter 5 M de CAPEX, libérer 4 M de BFR → runway étendu à ~10 mois.",
    exampleEn:
      "Current EBIT 50M, interest 20M → coverage 2.5×. 1.5× threshold hit if EBIT < 30M (−40%). Cash 15M, monthly burn 3M under stress → runway ~5 months. Plan: cut 8M fixed costs, defer 5M CAPEX, release 4M working capital → runway extended to ~10 months.",
    practicalFr:
      "Situation : couverture 2,0×, intérêts 10 M. Quel EBIT minimum pour rester à 1,5× ? Si EBIT actuel 18 M, quelle baisse maximale tolérée ?",
    practicalEn:
      "Situation: coverage 2.0×, interest 10M. Minimum EBIT to stay at 1.5×? If current EBIT 18M, what maximum decline is tolerable?",
    mistakeFr:
      "Attendre que les covenants soient violés avant de négocier — la position de force est meilleure en amont.",
    mistakeEn:
      "Waiting until covenants are breached before negotiating — bargaining power is better upstream.",
    takeawayFr:
      "Calculez les seuils de rupture avant qu'ils ne se produisent ; préparez un plan de mitigation chiffré.",
    takeawayEn:
      "Compute break points before they happen; prepare a quantified mitigation plan.",
    decisionFr:
      "Déclencher les mesures de stress dès qu'un indicateur avancé (bookings, marge, DSO) franchit un trigger défini.",
    decisionEn:
      "Trigger stress measures once a leading indicator (bookings, margin, DSO) crosses a defined trigger.",
    flashcardFrontFr: "Seuil de couverture",
    flashcardFrontEn: "Coverage threshold",
    flashcardBackFr: "EBIT minimum = intérêts × couverture cible.",
    flashcardBackEn: "Minimum EBIT = interest × target coverage.",
    exercisePromptFr:
      "Intérêts 12 M, couverture cible 2,0×, EBIT actuel 30 M. Marge de sécurité en % sur l'EBIT ?",
    exercisePromptEn:
      "Interest 12M, target coverage 2.0×, current EBIT 30M. Safety margin as % on EBIT?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Intérêts 15 M, couverture minimale requise 2,0×. EBIT minimum ?",
      promptEn: "Interest 15M, minimum required coverage 2.0×. Minimum EBIT?",
      explanationCorrectFr: "EBIT min = 15 × 2,0 = 30 M.",
      explanationCorrectEn: "Min EBIT = 15 × 2.0 = 30M.",
      difficulty: 2,
      options: [
        opt("30 M", "30M", true),
        opt("15 M", "15M", false, "15 M donnerait une couverture de 1,0×.", "15M would give 1.0× coverage."),
        opt("7,5 M", "7.5M", false, "C'est intérêts ÷ 2, pas intérêts × 2.", "That is interest ÷ 2, not interest × 2."),
      ],
    }),
  }),

  buildCfLesson({
    slug: "financial-trade-offs",
    titleFr: "Arbitrages financiers",
    titleEn: "Financial Trade-offs",
    descriptionFr:
      "Naviguer les tensions entre croissance, marge, risque, liquidité et création de valeur.",
    descriptionEn:
      "Navigate tensions between growth, margin, risk, liquidity, and value creation.",
    moduleSlug: "advanced-cf",
    sortOrder: 10,
    estimatedMinutes: 10,
    difficulty: "ADVANCED",
    skillSlug: "cf-advanced",
    learningObjective: "DECIDE",
    objectiveFr:
      "Comparer des options stratégiques financières en explicitant les trade-offs chiffrés.",
    objectiveEn:
      "Compare financial strategic options by spelling out quantified trade-offs.",
    explanationFr:
      "Chaque décision financière implique un arbitrage. Exemples : 1) Croissance vs marge — baisser les prix pour gagner des parts peut diluer le ROIC. 2) Levier vs sécurité — plus de dette booste le ROE mais réduit la marge de manœuvre en stress. 3) Dividendes vs réinvestissement — le cash retourné aux actionnaires n'alimente plus les projets à ROIC élevé. 4) BFR vs service client — allonger les délais de paiement client améliore le DSO côté client mais aggrave le vôtre. La bonne décision dépend du contexte : phase de croissance, maturité, coût du capital, et tolérance au risque. L'outil : comparer chaque option sur FCF, ROIC, levier et scénario baissier.",
    explanationEn:
      "Every financial decision involves a trade-off. Examples: 1) Growth vs margin — cutting prices to gain share may dilute ROIC. 2) Leverage vs safety — more debt boosts ROE but shrinks stress headroom. 3) Dividends vs reinvestment — cash returned to shareholders no longer funds high-ROIC projects. 4) Working capital vs customer service — extending customer payment terms helps their DSO but worsens yours. The right call depends on context: growth phase, maturity, cost of capital, and risk tolerance. The tool: compare each option on FCF, ROIC, leverage, and downside scenario.",
    exampleFr:
      "Choix : investir 30 M (ROIC projeté 14 %, WACC 10 %) vs racheter des actions (rendement implicite incertain) vs rembourser dette (levier 3,5× → 3,0×). En scénario baissier, le remboursement protège la couverture ; le rachat amplifie le risque. En scénario haussier, l'investissement crée le plus de valeur si le ROIC tient.",
    exampleEn:
      "Choice: invest 30M (projected ROIC 14%, WACC 10%) vs buy back shares (uncertain implicit return) vs repay debt (leverage 3.5× → 3.0×). In downside, repayment protects coverage; buyback amplifies risk. In upside, investment creates most value if ROIC holds.",
    practicalFr:
      "Situation : FCF disponible 20 M. Trois options : A) CAPEX ROIC 13 %, B) remboursement dette (levier 3,2×), C) dividende. WACC 10 %. Argumentez en 3 lignes.",
    practicalEn:
      "Situation: available FCF 20M. Three options: A) CAPEX ROIC 13%, B) debt repayment (leverage 3.2×), C) dividend. WACC 10%. Argue in 3 lines.",
    mistakeFr:
      "Choisir une option par défaut (ex. toujours distribuer) sans recalculer les trade-offs à chaque cycle.",
    mistakeEn:
      "Choosing a default option (e.g. always distribute) without recalculating trade-offs each cycle.",
    takeawayFr:
      "Il n'y a pas de bonne réponse universelle — seulement des arbitrages chiffrés alignés sur la stratégie et le risque.",
    takeawayEn:
      "There is no universal right answer — only quantified trade-offs aligned with strategy and risk.",
    decisionFr:
      "Documenter pour chaque option : impact FCF, ROIC, levier et résultat en scénario baissier.",
    decisionEn:
      "Document for each option: FCF impact, ROIC, leverage, and outcome in downside scenario.",
    flashcardFrontFr: "Trade-off financier",
    flashcardFrontEn: "Financial trade-off",
    flashcardBackFr: "Gagner sur un levier en perdant sur un autre — chiffrer les deux côtés.",
    flashcardBackEn: "Gain on one lever, lose on another — quantify both sides.",
    exercisePromptFr:
      "Projet ROIC 11 %, WACC 10 %, mais levier passerait de 2,5× à 3,5×. Acceptez-vous ? Justifiez.",
    exercisePromptEn:
      "Project ROIC 11%, WACC 10%, but leverage would rise from 2.5× to 3.5×. Do you accept? Justify.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Quel critère distingue le mieux deux projets de croissance similaires ?",
      promptEn: "Which criterion best distinguishes two similar growth projects?",
      explanationCorrectFr: "Le ROIC marginal vs WACC — seul il dit si la croissance crée de la valeur.",
      explanationCorrectEn: "Marginal ROIC vs WACC — only it says whether growth creates value.",
      difficulty: 2,
      options: [
        opt("ROIC marginal vs WACC", "Marginal ROIC vs WACC", true),
        opt("Croissance du CA seule", "Revenue growth alone", false, "Le CA peut croître tout en détruisant de la valeur.", "Revenue can grow while destroying value."),
        opt("Taille de l'investissement", "Investment size", false, "La taille ne dit rien sur le rendement.", "Size says nothing about return."),
      ],
    }),
  }),
];
