import { buildCfLesson, opt, q } from "./cf-factory";
import type { CompactLesson } from "./compact";

const MOD = "financing-capital-structure";
const SKILL = "cf-capital-structure";

export const CF_FINANCING_LESSONS: CompactLesson[] = [
  buildCfLesson({
    slug: "debt-vs-equity-financing",
    titleFr: "Dette vs fonds propres",
    titleEn: "Debt vs Equity Financing",
    descriptionFr:
      "Comparer dette et capitaux propres : coût, contrôle, risque et calendrier de remboursement.",
    descriptionEn:
      "Compare debt and equity: cost, control, risk, and repayment schedule.",
    moduleSlug: MOD,
    sortOrder: 0,
    estimatedMinutes: 9,
    difficulty: "BEGINNER",
    skillSlug: SKILL,
    learningObjective: "IDENTIFY",
    objectiveFr:
      "Distinguer dette et fonds propres selon leurs obligations, le coût et l'impact sur le contrôle.",
    objectiveEn:
      "Distinguish debt and equity by obligations, cost, and impact on control.",
    explanationFr:
      "La dette est un emprunt à rembourser avec intérêts — les créanciers n'ont pas de droit de vote mais exigent des paiements contractuels. Les fonds propres (actions) n'imposent pas de remboursement obligatoire : les actionnaires supportent le risque résiduel et attendent un rendement via dividendes et plus-value. La dette peut être moins chère après impôt (intérêts souvent déductibles) mais augmente le risque de défaut. Les fonds propres diluent moins la trésorerie à court terme mais partagent le contrôle et les profits futurs. Les règles fiscales et juridiques varient selon les pays.",
    explanationEn:
      "Debt is borrowed money repaid with interest — lenders have no voting rights but require contractual payments. Equity (shares) has no mandatory repayment: shareholders bear residual risk and expect return via dividends and capital gains. Debt may be cheaper after tax (interest often deductible) but raises default risk. Equity dilutes cash less short term but shares control and future profits. Tax and legal rules vary by country.",
    exampleFr:
      "1) Lumina Retail (distribution) : 2 M€ d'usine financés par obligation à 5 % — intérêts fixes, remboursement programmé. 2) NovaTech (SaaS) : 1,5 M€ levés en actions — pas de remboursement obligatoire, mais 20 % du capital cédé aux investisseurs. 3) Même besoin de 2 M€ : la dette préserve le contrôle mais crée une charge fixe ; l'equity préserve la liquidité mais partage les gains futurs.",
    exampleEn:
      "1) Lumina Retail (distribution): 2M€ plant funded by 5% bonds — fixed interest, scheduled repayment. 2) NovaTech (SaaS): 1.5M€ raised in equity — no mandatory repayment, but 20% of capital sold to investors. 3) Same 2M€ need: debt preserves control but creates fixed charges; equity preserves liquidity but shares future gains.",
    practicalFr:
      "Pour un projet de 800 k€, listez trois critères qui orienteraient vers la dette et trois vers l'equity (trésorerie, marge, contrôle, maturité du marché).",
    practicalEn:
      "For an 800k€ project, list three criteria favoring debt and three favoring equity (cash, margin, control, market maturity).",
    mistakeFr:
      "Choisir la dette uniquement parce que le taux affiché est inférieur au « coût des fonds propres » sans intégrer le risque de défaut et les covenants.",
    mistakeEn:
      "Choosing debt only because the stated rate is below “cost of equity” without factoring default risk and covenants.",
    takeawayFr:
      "Dette = obligation contractuelle et levier ; equity = partage du risque et du contrôle — pas de « meilleur » choix universel.",
    takeawayEn:
      "Debt = contractual obligation and leverage; equity = sharing risk and control — no universally “better” choice.",
    decisionFr:
      "Avant de financer : capacité de remboursement, tolérance au partage du contrôle, et coût total (cash + risque).",
    decisionEn:
      "Before financing: repayment capacity, tolerance for sharing control, and total cost (cash + risk).",
    flashcardFrontFr: "Dette vs equity",
    flashcardFrontEn: "Debt vs equity",
    flashcardBackFr: "Dette = remboursement + intérêts ; equity = risque résiduel + partage des gains.",
    flashcardBackEn: "Debt = repayment + interest; equity = residual risk + sharing gains.",
    exercisePromptFr:
      "Helios Logistics doit financer 3 M€. Option A : prêt 6 % sur 7 ans. Option B : levée 25 % du capital. Quels critères comparez-vous au-delà du taux ?",
    exercisePromptEn:
      "Helios Logistics must fund 3M€. Option A: 6% loan over 7 years. Option B: 25% equity raise. What criteria do you compare beyond the rate?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Quelle affirmation décrit le mieux les fonds propres ?",
      promptEn: "Which statement best describes equity?",
      explanationCorrectFr:
        "Les actionnaires supportent le risque résiduel sans remboursement obligatoire du capital.",
      explanationCorrectEn:
        "Shareholders bear residual risk with no mandatory capital repayment.",
      difficulty: 1,
      options: [
        opt(
          "Remboursement obligatoire à date fixe",
          "Mandatory repayment on a fixed date",
          false,
          "C'est la dette, pas l'equity.",
          "That is debt, not equity."
        ),
        opt(
          "Risque résiduel sans remboursement obligatoire",
          "Residual risk with no mandatory repayment",
          true
        ),
        opt(
          "Intérêts contractuels prioritaires",
          "Priority contractual interest",
          false,
          "Les intérêts prioritaires caractérisent la dette.",
          "Priority interest characterizes debt."
        ),
      ],
    }),
    questions: [
      q({
        type: "TRUE_FALSE",
        promptFr: "La dette dilue généralement moins le contrôle que l'émission d'actions.",
        promptEn: "Debt generally dilutes control less than issuing shares.",
        explanationCorrectFr:
          "Vrai : les créanciers n'obtiennent pas de droits de vote comme les actionnaires.",
        explanationCorrectEn:
          "True: lenders do not get voting rights like shareholders.",
        difficulty: 1,
        options: [
          opt("Vrai", "True", true),
          opt("Faux", "False", false),
        ],
      }),
    ],
  }),

  buildCfLesson({
    slug: "sources-of-financing",
    titleFr: "Sources de financement",
    titleEn: "Sources of Financing",
    descriptionFr:
      "Cartographier les sources internes et externes : autofinancement, banques, marchés, capital-risque.",
    descriptionEn:
      "Map internal and external sources: retained earnings, banks, markets, venture capital.",
    moduleSlug: MOD,
    sortOrder: 1,
    estimatedMinutes: 9,
    difficulty: "BEGINNER",
    skillSlug: SKILL,
    learningObjective: "IDENTIFY",
    objectiveFr:
      "Classer les principales sources de financement selon leur nature, leur coût et leur disponibilité.",
    objectiveEn:
      "Classify major financing sources by nature, cost, and availability.",
    explanationFr:
      "Les sources internes (autofinancement, cession d'actifs, réduction du BFR) ne diluent pas et évitent les frais de marché, mais dépendent de la rentabilité. Les sources externes incluent : dette bancaire (prêts, crédits syndiqués), dette de marché (obligations), equity (capital social, levée privée ou publique), et financements hybrides (obligations convertibles, préférences). Chaque source a des conditions d'accès (taille, historique, collatéral), un coût et un délai de mise en place différents.",
    explanationEn:
      "Internal sources (retained earnings, asset sales, working-capital reduction) do not dilute and avoid market fees, but depend on profitability. External sources include: bank debt (loans, syndicated credit), market debt (bonds), equity (share capital, private or public raise), and hybrids (convertibles, preferred shares). Each source has different access conditions (size, track record, collateral), cost, and setup time.",
    exampleFr:
      "1) Boreal Foods (PME mature) : 400 k€ d'autofinancement + 600 k€ de crédit bancaire pour une ligne de production. 2) Apex Robotics (startup) : tour de table equity 2 M€ — pas encore éligible au marché obligataire. 3) Meridian Industries (mid-cap) : émission obligataire 15 M€ à 4,2 % pour refinancer une dette bancaire plus chère.",
    exampleEn:
      "1) Boreal Foods (mature SME): 400k€ retained earnings + 600k€ bank loan for a production line. 2) Apex Robotics (startup): 2M€ equity round — not yet eligible for bond market. 3) Meridian Industries (mid-cap): 15M€ bond issue at 4.2% to refinance costlier bank debt.",
    practicalFr:
      "Classez ces besoins : (a) machine 200 k€, (b) R&D 3 ans sans revenus, (c) refinancement 10 M€ — quelle source pour chaque ?",
    practicalEn:
      "Classify these needs: (a) 200k€ machine, (b) 3-year R&D with no revenue, (c) 10M€ refinancing — which source for each?",
    mistakeFr:
      "Ignorer l'autofinancement et recourir systématiquement à l'externe, augmentant le coût et la dépendance aux créanciers.",
    mistakeEn:
      "Ignoring internal funding and always using external sources, raising cost and creditor dependence.",
    takeawayFr:
      "La source dépend du stade, du montant, du collatéral et du délai — pas d'une liste unique « meilleure ».",
    takeawayEn:
      "The source depends on stage, amount, collateral, and timing — not a single “best” list.",
    decisionFr:
      "Construire une matrice : montant, urgence, dilution acceptable, coût estimé — puis shortlister 2–3 sources.",
    decisionEn:
      "Build a matrix: amount, urgency, acceptable dilution, estimated cost — then shortlist 2–3 sources.",
    flashcardFrontFr: "Autofinancement",
    flashcardFrontEn: "Retained earnings / self-funding",
    flashcardBackFr: "Source interne : bénéfices non distribués — pas de dilution ni de nouveau créancier.",
    flashcardBackEn: "Internal source: undistributed profits — no dilution or new lender.",
    exercisePromptFr:
      "Citez une source interne et une externe adaptées à une PME industrielle rentable qui veut une extension modérée (1 M€).",
    exercisePromptEn:
      "Name one internal and one external source suited to a profitable industrial SME seeking moderate expansion (1M€).",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Quelle source est typiquement la plus adaptée à une startup sans revenus récurrents ?",
      promptEn: "Which source is typically best suited to a startup with no recurring revenue?",
      explanationCorrectFr:
        "L'equity (capital-risque) accepte le risque élevé sans remboursement immédiat.",
      explanationCorrectEn:
        "Equity (venture capital) accepts high risk without immediate repayment.",
      difficulty: 2,
      options: [
        opt("Crédit bancaire senior", "Senior bank loan", false, "Les banques exigent souvent des flux stables.", "Banks often require stable cash flows."),
        opt("Levée de fonds propres", "Equity raise", true),
        opt("Autofinancement", "Retained earnings", false, "Sans bénéfices, l'autofinancement est limité.", "Without profits, self-funding is limited."),
      ],
    }),
    questions: [
      q({
        type: "MULTIPLE_CHOICE",
        promptFr: "Quelles sources sont externes ? (Plusieurs réponses)",
        promptEn: "Which sources are external? (Multiple answers)",
        explanationCorrectFr:
          "Emprunt bancaire, émission obligataire et levée d'actions sont des financements externes.",
        explanationCorrectEn:
          "Bank loan, bond issue, and share issuance are external financing.",
        difficulty: 2,
        options: [
          opt("Emprunt bancaire", "Bank loan", true),
          opt("Réduction du BFR", "Working-capital reduction", false, "C'est une source interne.", "That is an internal source."),
          opt("Émission obligataire", "Bond issue", true),
          opt("Levée d'actions", "Share issuance", true),
        ],
      }),
    ],
  }),

  buildCfLesson({
    slug: "capital-structure-basics",
    titleFr: "Bases de la structure du capital",
    titleEn: "Capital Structure Basics",
    descriptionFr:
      "Comprendre le mix dette / capitaux propres et son impact sur le coût et le risque.",
    descriptionEn:
      "Understand the debt/equity mix and its impact on cost and risk.",
    moduleSlug: MOD,
    sortOrder: 2,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: SKILL,
    learningObjective: "ANALYZE",
    objectiveFr:
      "Analyser la structure du capital : pondérations, levier et arbitrage risque / coût du capital.",
    objectiveEn:
      "Analyze capital structure: weights, leverage, and the risk / cost of capital trade-off.",
    explanationFr:
      "La structure du capital décrit comment l'actif est financé : dette financière + capitaux propres (parfois instruments hybrides). On mesure souvent le levier par Dette / Capitaux propres ou Dette / (Dette + Equity). Plus de dette peut amplifier le ROE si le rendement des actifs excède le coût de la dette — mais augmente le risque de détresse financière. Le WACC combine ces sources : WACC = (E/V)×Re + (D/V)×Rd×(1−T). Une structure « optimale » pédagogique équilibre coût marginal et risque — pas une formule unique applicable partout.",
    explanationEn:
      "Capital structure describes how assets are funded: financial debt + equity (sometimes hybrids). Leverage is often measured as Debt / Equity or Debt / (Debt + Equity). More debt can amplify ROE if asset returns exceed debt cost — but raises financial distress risk. WACC combines these sources: WACC = (E/V)×Re + (D/V)×Rd×(1−T). A pedagogical “optimal” structure balances marginal cost and risk — not one formula for all firms.",
    exampleFr:
      "1) Atlas Manufacturing : actif 10 M€, dette 4 M€, equity 6 M€ → levier D/E = 0,67 ; poids dette 40 %, equity 60 %. 2) Si ROA = 9 % et coût dette après impôt = 4 %, le levier peut améliorer le ROE — mais une baisse de marge réduit la marge de sécurité. 3) WACC illustratif : Re = 12 %, Rd = 6 %, T = 25 % → Rd(1−T) = 4,5 % ; WACC = 0,6×12 % + 0,4×4,5 % = 9 %.",
    exampleEn:
      "1) Atlas Manufacturing: assets 10M€, debt 4M€, equity 6M€ → D/E = 0.67; debt weight 40%, equity 60%. 2) If ROA = 9% and after-tax debt cost = 4%, leverage can lift ROE — but a margin drop shrinks the safety buffer. 3) Illustrative WACC: Re = 12%, Rd = 6%, T = 25% → Rd(1−T) = 4.5%; WACC = 0.6×12% + 0.4×4.5% = 9%.",
    practicalFr:
      "Calculez D/E et les poids D/V et E/V pour : dette 3 M€, equity 7 M€. Puis estimez le WACC si Re = 11 % et Rd(1−T) = 4 %.",
    practicalEn:
      "Compute D/E and weights D/V and E/V for: debt 3M€, equity 7M€. Then estimate WACC if Re = 11% and Rd(1−T) = 4%.",
    mistakeFr:
      "Maximiser le levier sans vérifier la couverture des intérêts et la volatilité du cash opérationnel.",
    mistakeEn:
      "Maximizing leverage without checking interest coverage and operating cash volatility.",
    takeawayFr:
      "Structure du capital = mix qui fixe le WACC et le profil de risque — à calibrer au secteur et au cycle.",
    takeawayEn:
      "Capital structure = mix that sets WACC and risk profile — calibrate to sector and cycle.",
    decisionFr:
      "Comparer le rendement marginal des projets au WACC marginal avant d'ajouter de la dette.",
    decisionEn:
      "Compare marginal project return to marginal WACC before adding debt.",
    simulatorFr:
      "Faites varier la part de dette de 0 % à 60 % et observez l'effet sur WACC et ROE dans un scénario à ROA constant.",
    simulatorEn:
      "Vary debt share from 0% to 60% and observe WACC and ROE effects in a constant-ROA scenario.",
    flashcardFrontFr: "WACC (formule)",
    flashcardFrontEn: "WACC (formula)",
    flashcardBackFr: "(E/V)×Re + (D/V)×Rd×(1−T) — pondération dette et equity.",
    flashcardBackEn: "(E/V)×Re + (D/V)×Rd×(1−T) — debt and equity weights.",
    exercisePromptFr:
      "Voltex SA : dette 5 M€, equity 5 M€, Re = 13 %, Rd = 7 %, T = 25 %. Calculez Rd(1−T) puis le WACC.",
    exercisePromptEn:
      "Voltex SA: debt 5M€, equity 5M€, Re = 13%, Rd = 7%, T = 25%. Compute Rd(1−T) then WACC.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Augmenter la dette dans la structure du capital…",
      promptEn: "Increasing debt in the capital structure…",
      explanationCorrectFr:
        "Peut amplifier le rendement des fonds propres mais augmente le risque financier.",
      explanationCorrectEn:
        "Can amplify equity returns but increases financial risk.",
      difficulty: 2,
      options: [
        opt("Supprime tout risque", "Removes all risk", false),
        opt("Peut amplifier rendement et risque", "Can amplify return and risk", true),
        opt("N'a aucun effet", "Has no effect", false),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Dette 4 M€, equity 6 M€. Quel est le poids de la dette (D/V) ?",
        promptEn: "Debt 4M€, equity 6M€. What is the debt weight (D/V)?",
        explanationCorrectFr: "V = 10 M€ → D/V = 4/10 = 40 %.",
        explanationCorrectEn: "V = 10M€ → D/V = 4/10 = 40%.",
        difficulty: 2,
        options: [
          opt("40 %", "40%", true),
          opt("60 %", "60%", false, "60 % est le poids de l'equity (E/V).", "60% is the equity weight (E/V)."),
          opt("150 %", "150%", false, "4/6 ≈ 67 % serait D/E, pas D/V.", "4/6 ≈ 67% would be D/E, not D/V."),
        ],
      }),
      q({
        type: "SINGLE_CHOICE",
        promptFr: "WACC : E/V = 70 %, Re = 10 %, D/V = 30 %, Rd(1−T) = 5 %. WACC ?",
        promptEn: "WACC: E/V = 70%, Re = 10%, D/V = 30%, Rd(1−T) = 5%. WACC?",
        explanationCorrectFr: "0,7×10 % + 0,3×5 % = 7 % + 1,5 % = 8,5 %.",
        explanationCorrectEn: "0.7×10% + 0.3×5% = 7% + 1.5% = 8.5%.",
        difficulty: 3,
        options: [
          opt("8,5 %", "8.5%", true),
          opt("7,5 %", "7.5%", false, "Vérifiez la pondération 70/30.", "Check the 70/30 weighting."),
          opt("15 %", "15%", false, "Ne additionnez pas Re et Rd sans pondération.", "Do not add Re and Rd without weights."),
        ],
      }),
      q({
        type: "TRUE_FALSE",
        promptFr: "Si le coût de la dette après impôt est inférieur au coût des fonds propres, augmenter modérément la dette tend à baisser le WACC (toutes choses égales).",
        promptEn: "If after-tax debt cost is below cost of equity, moderately increasing debt tends to lower WACC (all else equal).",
        explanationCorrectFr:
          "Vrai en illustration pédagogique : on remplace une source plus chère (equity) par une moins chère (dette après impôt), jusqu'à un point où le risque augmente les deux coûts.",
        explanationCorrectEn:
          "True pedagogically: cheaper after-tax debt replaces costlier equity — until risk raises both costs.",
        difficulty: 3,
        options: [
          opt("Vrai", "True", true),
          opt("Faux", "False", false),
        ],
      }),
    ],
  }),

  buildCfLesson({
    slug: "cost-of-debt",
    titleFr: "Coût de la dette",
    titleEn: "Cost of Debt",
    descriptionFr:
      "Estimer le coût effectif de la dette et son entrée dans le WACC (après impôt).",
    descriptionEn:
      "Estimate effective debt cost and its role in WACC (after tax).",
    moduleSlug: MOD,
    sortOrder: 3,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: SKILL,
    learningObjective: "APPLY",
    objectiveFr:
      "Calculer le coût de la dette avant et après impôt et l'intégrer dans une estimation de WACC simplifiée.",
    objectiveEn:
      "Compute pre- and after-tax cost of debt and integrate it into a simplified WACC estimate.",
    explanationFr:
      "Le coût de la dette (Rd) est le taux effectif que l'entreprise paie sur ses emprunts — taux contractuel, rendement à l'émission, ou coût marginal sur nouvelle dette. Pour le WACC, on utilise souvent le coût après impôt : Rd×(1−T), car les intérêts sont généralement déductibles (selon la juridiction). Si une société a plusieurs tranches de dette, on pondère par les montants : Rd = Σ(tauxᵢ × montantᵢ) / dette totale. Un coût de dette plus élevé augmente le WACC et réduit la valeur actualisée dans un DCF pédagogique.",
    explanationEn:
      "Cost of debt (Rd) is the effective rate the firm pays on borrowings — contractual rate, yield at issuance, or marginal cost on new debt. For WACC, after-tax cost is often used: Rd×(1−T), as interest is generally deductible (jurisdiction-dependent). With multiple debt tranches, weight by amounts: Rd = Σ(rateᵢ × amountᵢ) / total debt. Higher debt cost raises WACC and lowers present value in a pedagogical DCF.",
    exampleFr:
      "1) Solara Energy : obligation 8 M€ à 5,5 % + crédit bancaire 2 M€ à 7 % → Rd = (8×5,5 % + 2×7 %) / 10 = 5,8 %. 2) Avec T = 25 % : Rd(1−T) = 5,8 % × 0,75 = 4,35 %. 3) Dans un WACC avec E/V = 60 %, Re = 11 %, D/V = 40 % : contribution dette = 0,4 × 4,35 % = 1,74 %.",
    exampleEn:
      "1) Solara Energy: 8M€ bond at 5.5% + 2M€ bank loan at 7% → Rd = (8×5.5% + 2×7%) / 10 = 5.8%. 2) With T = 25%: Rd(1−T) = 5.8% × 0.75 = 4.35%. 3) In WACC with E/V = 60%, Re = 11%, D/V = 40%: debt contribution = 0.4 × 4.35% = 1.74%.",
    practicalFr:
      "Calculez Rd pondéré puis Rd(1−T) : tranche A 3 M€ à 6 %, tranche B 1 M€ à 8 %, T = 30 %.",
    practicalEn:
      "Compute weighted Rd then Rd(1−T): tranche A 3M€ at 6%, tranche B 1M€ at 8%, T = 30%.",
    mistakeFr:
      "Utiliser le taux nominal du prêt sans intégrer les frais d'émission ou la dette existante à taux différents.",
    mistakeEn:
      "Using the loan's nominal rate without issuance fees or existing debt at different rates.",
    takeawayFr:
      "Coût de la dette = taux effectif pondéré ; pour le WACC, l'effet fiscal réduit le coût marginal (selon les règles locales).",
    takeawayEn:
      "Cost of debt = weighted effective rate; for WACC, tax effect lowers marginal cost (per local rules).",
    decisionFr:
      "Utiliser le coût marginal (nouvelle dette) pour financer de nouveaux projets, pas uniquement le coût historique moyen.",
    decisionEn:
      "Use marginal (new debt) cost for new projects, not only historical average cost.",
    flashcardFrontFr: "Rd après impôt",
    flashcardFrontEn: "After-tax Rd",
    flashcardBackFr: "Rd × (1 − T) — utilisé dans le WACC.",
    flashcardBackEn: "Rd × (1 − T) — used in WACC.",
    exercisePromptFr:
      "Prêt 5 M€ à 6 %, taux d'imposition 25 %. Quel Rd(1−T) entre dans le WACC ?",
    exercisePromptEn:
      "Loan 5M€ at 6%, tax rate 25%. What Rd(1−T) enters WACC?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Prêt à 8 %, impôt 25 %. Coût de la dette après impôt ?",
      promptEn: "Loan at 8%, tax 25%. After-tax cost of debt?",
      explanationCorrectFr: "8 % × (1 − 0,25) = 6 %.",
      explanationCorrectEn: "8% × (1 − 0.25) = 6%.",
      difficulty: 2,
      options: [
        opt("6 %", "6%", true),
        opt("8 %", "8%", false, "8 % est le coût avant impôt.", "8% is the pre-tax cost."),
        opt("2 %", "2%", false, "2 % = 8 % × 25 % (économie d'impôt), pas le coût net.", "2% = 8% × 25% (tax savings), not net cost."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Dette A 6 M€ à 5 %, dette B 4 M€ à 9 %. Rd pondéré ?",
        promptEn: "Debt A 6M€ at 5%, debt B 4M€ at 9%. Weighted Rd?",
        explanationCorrectFr: "(6×5 % + 4×9 %) / 10 = (30 + 36) / 10 = 6,6 %.",
        explanationCorrectEn: "(6×5% + 4×9%) / 10 = (30 + 36) / 10 = 6.6%.",
        difficulty: 3,
        options: [
          opt("6,6 %", "6.6%", true),
          opt("7 %", "7%", false, "Moyenne simple (5+9)/2 = 7 % ignore les montants.", "Simple average (5+9)/2 = 7% ignores amounts."),
          opt("5 %", "5%", false, "5 % est seulement la tranche A.", "5% is only tranche A."),
        ],
      }),
      q({
        type: "TRUE_FALSE",
        promptFr: "Le coût de la dette influence le WACC.",
        promptEn: "Cost of debt influences WACC.",
        explanationCorrectFr: "Vrai. Le WACC pondère Rd(1−T) et Re selon D/V et E/V.",
        explanationCorrectEn: "True. WACC weights Rd(1−T) and Re by D/V and E/V.",
        difficulty: 2,
        options: [
          opt("Vrai", "True", true),
          opt("Faux", "False", false),
        ],
      }),
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Si Rd(1−T) monte de 4 % à 6 % avec D/V = 50 % (Re inchangé à 10 %), le WACC…",
        promptEn: "If Rd(1−T) rises from 4% to 6% with D/V = 50% (Re unchanged at 10%), WACC…",
        explanationCorrectFr:
          "Augmente de 0,5×2 % = 1 point : ancien 7 % → nouveau 8 %.",
        explanationCorrectEn:
          "Rises by 0.5×2% = 1 point: old 7% → new 8%.",
        difficulty: 3,
        options: [
          opt("Augmente d'environ 1 point", "Rises by about 1 point", true),
          opt("Baisse", "Falls", false, "Un coût de dette plus élevé augmente le WACC.", "Higher debt cost raises WACC."),
          opt("Reste identique", "Stays the same", false, "La composante dette du WACC change.", "The debt component of WACC changes."),
        ],
      }),
    ],
  }),

  buildCfLesson({
    slug: "cost-of-equity",
    titleFr: "Coût des fonds propres",
    titleEn: "Cost of Equity",
    descriptionFr:
      "Comprendre le rendement exigé par les actionnaires et son rôle dans le WACC.",
    descriptionEn:
      "Understand the return shareholders require and its role in WACC.",
    moduleSlug: MOD,
    sortOrder: 4,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: SKILL,
    learningObjective: "ANALYZE",
    objectiveFr:
      "Relier risque perçu, rendement exigé et pondération equity dans le WACC.",
    objectiveEn:
      "Link perceived risk, required return, and equity weight in WACC.",
    explanationFr:
      "Le coût des fonds propres (Re) est le rendement que les actionnaires exigent pour supporter le risque résiduel — il n'apparaît pas en charge comptable comme les intérêts. En pratique pédagogique, on l'estime via le CAPM simplifié : Re = Rf + β×(Rm − Rf), ou par comparables / exigences d'investisseurs. Plus le levier et le risque opérationnel montent, plus β et Re tendent à augmenter. Re est souvent plus élevé que Rd(1−T) car les actionnaires sont payés après les créanciers. Dans le WACC, la composante equity = (E/V)×Re pèse souvent lourdement dans les entreprises peu endettées.",
    explanationEn:
      "Cost of equity (Re) is the return shareholders require for residual risk — unlike interest, it is not an accounting charge. Pedagogically, estimate via simplified CAPM: Re = Rf + β×(Rm − Rf), or comparables / investor requirements. As leverage and operating risk rise, β and Re tend to increase. Re is often above Rd(1−T) because shareholders are paid after lenders. In WACC, the equity component = (E/V)×Re often weighs heavily in low-debt firms.",
    exampleFr:
      "1) Rf = 3 %, β = 1,2, prime de risque = 5 % → Re = 3 % + 1,2×5 % = 9 %. 2) Si le levier augmente, β peut passer à 1,5 → Re = 10,5 %. 3) WACC : E/V = 80 %, Re = 10 %, D/V = 20 %, Rd(1−T) = 4 % → WACC = 0,8×10 % + 0,2×4 % = 8,8 %.",
    exampleEn:
      "1) Rf = 3%, β = 1.2, risk premium = 5% → Re = 3% + 1.2×5% = 9%. 2) If leverage rises, β may move to 1.5 → Re = 10.5%. 3) WACC: E/V = 80%, Re = 10%, D/V = 20%, Rd(1−T) = 4% → WACC = 0.8×10% + 0.2×4% = 8.8%.",
    practicalFr:
      "Estimez Re avec Rf = 2,5 %, β = 1,1, prime = 5,5 %. Quelle part du WACC vient de l'equity si E/V = 75 % ?",
    practicalEn:
      "Estimate Re with Rf = 2.5%, β = 1.1, premium = 5.5%. What share of WACC comes from equity if E/V = 75%?",
    mistakeFr:
      "Confondre le coût des fonds propres avec le dividende versé — un faible dividende ne signifie pas un Re faible.",
    mistakeEn:
      "Confusing cost of equity with dividend paid — a low dividend does not mean low Re.",
    takeawayFr:
      "Re rémunère le risque résiduel ; il ancre la composante equity du WACC.",
    takeawayEn:
      "Re compensates residual risk; it anchors the equity component of WACC.",
    decisionFr:
      "Si le rendement attendu d'un projet < Re (à structure constante), questionner la création de valeur pour l'actionnaire.",
    decisionEn:
      "If expected project return < Re (at constant structure), question shareholder value creation.",
    flashcardFrontFr: "CAPM (pédagogique)",
    flashcardFrontEn: "CAPM (pedagogical)",
    flashcardBackFr: "Re = Rf + β × (Rm − Rf).",
    flashcardBackEn: "Re = Rf + β × (Rm − Rf).",
    exercisePromptFr:
      "Rf = 3 %, β = 0,9, prime = 6 %. Calculez Re. Comparez à Rd(1−T) = 5 % : quelle source semble plus chère ?",
    exercisePromptEn:
      "Rf = 3%, β = 0.9, premium = 6%. Compute Re. Compare to Rd(1−T) = 5%: which source seems costlier?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Si le risque perçu augmente, le coût des fonds propres…",
      promptEn: "If perceived risk rises, cost of equity…",
      explanationCorrectFr: "Tend à augmenter, ce qui peut hausser le WACC.",
      explanationCorrectEn: "Tends to increase, which can raise WACC.",
      difficulty: 2,
      options: [
        opt("Baisse toujours", "Always falls", false),
        opt("Tend à augmenter", "Tends to increase", true),
        opt("Devient nul", "Becomes zero", false),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Rf = 4 %, β = 1, prime = 5 %. Re ?",
        promptEn: "Rf = 4%, β = 1, premium = 5%. Re?",
        explanationCorrectFr: "4 % + 1×5 % = 9 %.",
        explanationCorrectEn: "4% + 1×5% = 9%.",
        difficulty: 2,
        options: [
          opt("9 %", "9%", true),
          opt("5 %", "5%", false, "5 % est la prime seule, pas Re.", "5% is the premium alone, not Re."),
          opt("14 %", "14%", false, "Ne additionnez pas Rf et prime deux fois.", "Do not add Rf and premium twice."),
        ],
      }),
    ],
  }),

  buildCfLesson({
    slug: "leverage-and-financial-risk",
    titleFr: "Levier et risque financier",
    titleEn: "Leverage and Financial Risk",
    descriptionFr:
      "Comprendre comment le levier amplifie les résultats et le risque de détresse.",
    descriptionEn:
      "Understand how leverage amplifies results and distress risk.",
    moduleSlug: MOD,
    sortOrder: 5,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: SKILL,
    learningObjective: "ANALYZE",
    objectiveFr:
      "Expliquer l'effet de levier sur le ROE et identifier les signaux de risque financier.",
    objectiveEn:
      "Explain leverage effect on ROE and identify financial risk signals.",
    explanationFr:
      "Le levier financier utilise la dette pour financer les actifs : si le ROA (rendement des actifs) excède le coût de la dette, le ROE augmente — et inversement en cas de sous-performance. C'est l'effet de levier positif ou négatif. Le risque financier inclut : difficulté à payer les intérêts, violation de covenants, refinancement au pire moment, et coût du capital qui monte. Le levier opérationnel (coûts fixes) et le levier financier se combinent — une baisse de marge peut dégrader rapidement la couverture des intérêts.",
    explanationEn:
      "Financial leverage uses debt to fund assets: if ROA exceeds debt cost, ROE rises — and vice versa on underperformance. That is positive or negative leverage. Financial risk includes: difficulty paying interest, covenant breach, refinancing at the worst time, and rising cost of capital. Operating leverage (fixed costs) and financial leverage combine — a margin drop can quickly weaken interest coverage.",
    exampleFr:
      "1) PixelSoft : actifs 8 M€, dette 5 M€ à 6 %, EBIT 1,2 M€, equity 3 M€. Intérêts = 0,3 M€ ; résultat net illustratif ≈ 0,68 M€ après impôt 25 % → ROE ≈ 22,7 %. 2) Si EBIT chute à 0,5 M€, intérêts toujours 0,3 M€ → marge nette très compressée, ROE effondré. 3) Covenant : dette nette / EBITDA < 3× — au-delà, risque de renégociation.",
    exampleEn:
      "1) PixelSoft: assets 8M€, debt 5M€ at 6%, EBIT 1.2M€, equity 3M€. Interest = 0.3M€; illustrative net ≈ 0.68M€ after 25% tax → ROE ≈ 22.7%. 2) If EBIT falls to 0.5M€, interest still 0.3M€ → net margin crushed, ROE collapses. 3) Covenant: net debt / EBITDA < 3× — beyond that, renegotiation risk.",
    practicalFr:
      "Calculez les intérêts annuels et le ROE illustratif si EBIT = 900 k€, dette 4 M€ à 5 %, equity 2 M€, T = 25 %.",
    practicalEn:
      "Compute annual interest and illustrative ROE if EBIT = 900k€, debt 4M€ at 5%, equity 2M€, T = 25%.",
    mistakeFr:
      "Supposer que le levier est « gratuit » parce que le ROE était supérieur au ROA l'an dernier — sans stress-test.",
    mistakeEn:
      "Assuming leverage is “free” because ROE exceeded ROA last year — without stress testing.",
    takeawayFr:
      "Le levier amplifie les gains et les pertes — le risque financier monte avec la part de dette et la rigidité des charges.",
    takeawayEn:
      "Leverage amplifies gains and losses — financial risk rises with debt share and fixed-charge rigidity.",
    decisionFr:
      "Tester un scénario de baisse d'EBIT de 30 % avant d'augmenter le levier.",
    decisionEn:
      "Stress-test a 30% EBIT drop before increasing leverage.",
    flashcardFrontFr: "Effet de levier",
    flashcardFrontEn: "Leverage effect",
    flashcardBackFr: "Si ROA > coût dette → ROE amplifié ; sinon → ROE pénalisé.",
    flashcardBackEn: "If ROA > debt cost → amplified ROE; else → penalized ROE.",
    exercisePromptFr:
      "Quand ROA = 7 % et coût dette après impôt = 8 %, l'effet de levier sur le ROE est-il positif ou négatif ?",
    exercisePromptEn:
      "When ROA = 7% and after-tax debt cost = 8%, is leverage effect on ROE positive or negative?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "ROA = 10 %, coût dette après impôt = 6 %. Effet de levier sur le ROE ?",
      promptEn: "ROA = 10%, after-tax debt cost = 6%. Leverage effect on ROE?",
      explanationCorrectFr: "Positif : le rendement des actifs excède le coût de la dette.",
      explanationCorrectEn: "Positive: asset return exceeds debt cost.",
      difficulty: 2,
      options: [
        opt("Positif (ROE amplifié)", "Positive (amplified ROE)", true),
        opt("Négatif", "Negative", false, "10 % > 6 % → levier positif.", "10% > 6% → positive leverage."),
        opt("Neutre", "Neutral", false),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Dette 6 M€ à 5 %, EBIT 0,4 M€. Les intérêts représentent quelle part de l'EBIT ?",
        promptEn: "Debt 6M€ at 5%, EBIT 0.4M€. Interest is what share of EBIT?",
        explanationCorrectFr: "Intérêts = 0,3 M€ ; 0,3 / 0,4 = 75 % — marge de sécurité faible.",
        explanationCorrectEn: "Interest = 0.3M€; 0.3 / 0.4 = 75% — thin safety margin.",
        difficulty: 3,
        options: [
          opt("75 %", "75%", true),
          opt("5 %", "5%", false, "5 % est le taux, pas le ratio intérêts/EBIT.", "5% is the rate, not interest/EBIT ratio."),
          opt("30 %", "30%", false, "Recalculez 6 M€ × 5 % = 0,3 M€.", "Recalculate 6M€ × 5% = 0.3M€."),
        ],
      }),
    ],
  }),

  buildCfLesson({
    slug: "interest-coverage-ratio",
    titleFr: "Ratio de couverture des intérêts",
    titleEn: "Interest Coverage Ratio",
    descriptionFr:
      "Mesurer la capacité à couvrir les charges d'intérêts avec l'EBIT (ou EBITDA).",
    descriptionEn:
      "Measure ability to cover interest expense with EBIT (or EBITDA).",
    moduleSlug: MOD,
    sortOrder: 6,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: SKILL,
    learningObjective: "APPLY",
    objectiveFr:
      "Calculer et interpréter le ratio de couverture des intérêts dans un mini-cas.",
    objectiveEn:
      "Compute and interpret the interest coverage ratio in a mini-case.",
    explanationFr:
      "Le ratio de couverture des intérêts (Interest Coverage) = EBIT / Charges d'intérêts (parfois EBITDA / intérêts pour les secteurs capital-intensifs). Il indique combien de fois l'EBIT peut payer les intérêts. Un ratio bas (ex. < 2×) signale un risque accru ; un ratio élevé offre une marge de sécurité. Les banques et agences de notation surveillent ce ratio via les covenants. Ce n'est pas un seuil universel : secteur cyclique vs stable, qualité du cash, et calendrier de remboursements comptent.",
    explanationEn:
      "Interest coverage ratio = EBIT / Interest expense (sometimes EBITDA / interest for capital-intensive sectors). It shows how many times EBIT can pay interest. A low ratio (e.g. < 2×) signals higher risk; a high ratio offers a safety buffer. Banks and rating agencies watch this via covenants. No universal threshold: cyclical vs stable sector, cash quality, and repayment schedule matter.",
    exampleFr:
      "1) GreenRail : EBIT 12 M€, intérêts 3 M€ → couverture = 4×. 2) Si EBIT tombe à 6 M€, couverture = 2× — zone de vigilance selon les covenants. 3) Covenant typique : couverture ≥ 3× ; en dessous, déclenchement de négociation ou restriction de dividendes.",
    exampleEn:
      "1) GreenRail: EBIT 12M€, interest 3M€ → coverage = 4×. 2) If EBIT falls to 6M€, coverage = 2× — watch zone per covenants. 3) Typical covenant: coverage ≥ 3×; below that, negotiation or dividend restriction.",
    practicalFr:
      "EBIT 2,5 M€, intérêts 0,8 M€. Calculez la couverture. Que se passe-t-il si EBIT baisse de 20 % ?",
    practicalEn:
      "EBIT 2.5M€, interest 0.8M€. Compute coverage. What if EBIT drops 20%?",
    mistakeFr:
      "Utiliser le résultat net au lieu de l'EBIT — les impôts et éléments non opérationnels brouillent la mesure.",
    mistakeEn:
      "Using net income instead of EBIT — taxes and non-operating items blur the measure.",
    takeawayFr:
      "Couverture des intérêts = test de solidité du levier — à suivre dans le temps et vs covenants.",
    takeawayEn:
      "Interest coverage = leverage strength test — track over time and vs covenants.",
    decisionFr:
      "Avant d'emprunter : simuler la couverture au niveau d'EBIT prudent (pas seulement le budget central).",
    decisionEn:
      "Before borrowing: simulate coverage at a prudent EBIT level (not only the base budget).",
    flashcardFrontFr: "Couverture intérêts",
    flashcardFrontEn: "Interest coverage",
    flashcardBackFr: "EBIT / Charges d'intérêts.",
    flashcardBackEn: "EBIT / Interest expense.",
    exercisePromptFr:
      "NordPack : EBIT 8 M€, intérêts 2,5 M€, covenant minimum 2,5×. La société est-elle conforme ? Marge si EBIT −15 % ?",
    exercisePromptEn:
      "NordPack: EBIT 8M€, interest 2.5M€, covenant minimum 2.5×. Compliant? Margin if EBIT −15%?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "EBIT 5 M€, intérêts 1,25 M€. Ratio de couverture ?",
      promptEn: "EBIT 5M€, interest 1.25M€. Coverage ratio?",
      explanationCorrectFr: "5 / 1,25 = 4×.",
      explanationCorrectEn: "5 / 1.25 = 4×.",
      difficulty: 2,
      options: [
        opt("4×", "4×", true),
        opt("3×", "3×", false, "5 / 1,25 = 4, pas 3.", "5 / 1.25 = 4, not 3."),
        opt("0,25×", "0.25×", false, "Inversé : intérêts/EBIT.", "Inverted: interest/EBIT."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Couverture actuelle 3,5×, covenant 3×. EBIT baisse de 25 %. Nouvelle couverture (intérêts constants) ?",
        promptEn: "Current coverage 3.5×, covenant 3×. EBIT drops 25%. New coverage (interest constant)?",
        explanationCorrectFr: "3,5 × 0,75 = 2,625× — sous le covenant 3×.",
        explanationCorrectEn: "3.5 × 0.75 = 2.625× — below 3× covenant.",
        difficulty: 3,
        options: [
          opt("≈ 2,6× (risque covenant)", "≈ 2.6× (covenant risk)", true),
          opt("3,5×", "3.5×", false, "La couverture baisse avec l'EBIT.", "Coverage falls with EBIT."),
          opt("4,4×", "4.4×", false),
        ],
      }),
    ],
  }),

  buildCfLesson({
    slug: "debt-capacity-basics",
    titleFr: "Bases de la capacité d'endettement",
    titleEn: "Debt Capacity Basics",
    descriptionFr:
      "Estimer combien de dette une entreprise peut supporter de façon soutenable.",
    descriptionEn:
      "Estimate how much debt a firm can sustainably support.",
    moduleSlug: MOD,
    sortOrder: 7,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: SKILL,
    learningObjective: "DECIDE",
    objectiveFr:
      "Identifier les indicateurs clés de capacité d'endettement et leurs limites.",
    objectiveEn:
      "Identify key debt capacity indicators and their limits.",
    explanationFr:
      "La capacité d'endettement est le niveau de dette qu'une entreprise peut assumer sans compromettre sa solvabilité ni violer ses covenants. Indicateurs courants : Dette nette / EBITDA (souvent 2×–4× selon secteur), couverture des intérêts, et ratios de liquidité. Les banques projettent le cash disponible pour le service de la dette (DSCR). La capacité dépend du cyclicité, des investissements futurs (CAPEX), et du besoin en fonds de roulement. Une capacité n'est pas un objectif à maximiser — c'est une borne prudente.",
    explanationEn:
      "Debt capacity is the debt level a firm can bear without impairing solvency or breaching covenants. Common metrics: Net debt / EBITDA (often 2×–4× by sector), interest coverage, and liquidity ratios. Banks project cash available for debt service (DSCR). Capacity depends on cyclicality, future CAPEX, and working-capital needs. Capacity is not a target to maximize — it is a prudent bound.",
    exampleFr:
      "1) SteelCo : EBITDA 20 M€, dette nette 50 M€ → 2,5× — dans une fourchette industrielle typique. 2) Capacité résiduelle : si cible banque = 3×, marge ≈ 10 M€ d'EBITDA équivalent en dette additionnelle (illustration). 3) CloudServe (récurrent) peut supporter un multiple plus élevé qu'un constructeur naval cyclique.",
    exampleEn:
      "1) SteelCo: EBITDA 20M€, net debt 50M€ → 2.5× — within a typical industrial range. 2) Residual capacity: if bank target = 3×, headroom ≈ 10M€ EBITDA-equivalent in additional debt (illustration). 3) CloudServe (recurring) may support a higher multiple than a cyclical shipbuilder.",
    practicalFr:
      "EBITDA 15 M€, dette nette 45 M€, plafond cible 3×. Dette nette maximale ? Marge actuelle ?",
    practicalEn:
      "EBITDA 15M€, net debt 45M€, target ceiling 3×. Max net debt? Current headroom?",
    mistakeFr:
      "Appliquer un multiple sectoriel sans ajuster à la volatilité propre de l'entreprise.",
    mistakeEn:
      "Applying a sector multiple without adjusting for the firm's own volatility.",
    takeawayFr:
      "Capacité d'endettement = combinaison de multiples, couverture et qualité du cash — pas un chiffre fixe.",
    takeawayEn:
      "Debt capacity = combination of multiples, coverage, and cash quality — not a fixed number.",
    decisionFr:
      "Confronter la capacité théorique au plan de CAPEX et au scénario de récession avant d'emprunter.",
    decisionEn:
      "Match theoretical capacity to CAPEX plan and recession scenario before borrowing.",
    flashcardFrontFr: "Dette nette / EBITDA",
    flashcardFrontEn: "Net debt / EBITDA",
    flashcardBackFr: "Indicateur courant de levier et capacité d'endettement.",
    flashcardBackEn: "Common leverage and debt capacity metric.",
    exercisePromptFr:
      "EBITDA 10 M€, dette nette 28 M€, covenant 3,5×. Respecté ? Combien de dette « en excès » si dépassement ?",
    exercisePromptEn:
      "EBITDA 10M€, net debt 28M€, covenant 3.5×. Compliant? How much debt “over” if breached?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "EBITDA 12 M€, dette nette 30 M€. Ratio Dette nette / EBITDA ?",
      promptEn: "EBITDA 12M€, net debt 30M€. Net debt / EBITDA?",
      explanationCorrectFr: "30 / 12 = 2,5×.",
      explanationCorrectEn: "30 / 12 = 2.5×.",
      difficulty: 2,
      options: [
        opt("2,5×", "2.5×", true),
        opt("0,4×", "0.4×", false, "12/30 inverse le ratio.", "12/30 inverts the ratio."),
        opt("3,5×", "3.5×", false),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "EBITDA 8 M€, plafond 3×. Dette nette maximale (illustration) ?",
        promptEn: "EBITDA 8M€, ceiling 3×. Maximum net debt (illustration)?",
        explanationCorrectFr: "8 × 3 = 24 M€.",
        explanationCorrectEn: "8 × 3 = 24M€.",
        difficulty: 2,
        options: [
          opt("24 M€", "24M€", true),
          opt("8 M€", "8M€", false),
          opt("11 M€", "11M€", false),
        ],
      }),
    ],
  }),

  buildCfLesson({
    slug: "refinancing-corporate",
    titleFr: "Refinancement corporate",
    titleEn: "Corporate Refinancing",
    descriptionFr:
      "Comprendre quand et comment refinancer la dette : opportunité, risque et calendrier.",
    descriptionEn:
      "Understand when and how to refinance debt: opportunity, risk, and timing.",
    moduleSlug: MOD,
    sortOrder: 8,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: SKILL,
    learningObjective: "DECIDE",
    objectiveFr:
      "Évaluer une décision de refinancement : économie, frais, covenants et risque de marché.",
    objectiveEn:
      "Evaluate a refinancing decision: savings, fees, covenants, and market risk.",
    explanationFr:
      "Le refinancement consiste à remplacer une dette existante par une nouvelle (taux, durée, devise, structure). Motivations : baisser le coût, étaler les échéances, lever des covenants contraignants, ou financer une acquisition. Coûts à intégrer : frais de sortie, frais d'émission, spreads, et risque que les conditions de marché se dégradent avant le closing. Un refinancement trop tardif en période de stress peut échouer ou se faire à des conditions pénalisantes. Anticiper les échéances (« maturity wall ») est une discipline de trésorerie clé.",
    explanationEn:
      "Refinancing replaces existing debt with new debt (rate, maturity, currency, structure). Motives: lower cost, extend maturities, loosen tight covenants, or fund an acquisition. Costs to include: prepayment fees, issuance fees, spreads, and risk that market conditions worsen before closing. Late refinancing in stress may fail or price punitively. Anticipating maturities (“maturity wall”) is key treasury discipline.",
    exampleFr:
      "1) EuroLog : 20 M€ d'obligations à 6,5 % échéance N+1 ; marché permet 5 % sur 7 ans → économie d'intérêts mais frais de sortie 0,8 M€ à amortir. 2) Analyse : économie annuelle 0,3 M€ → payback des frais ≈ 2,7 ans. 3) Si le rating se dégrade, le spread peut annuler l'avantage — d'où l'importance du timing.",
    exampleEn:
      "1) EuroLog: 20M€ bonds at 6.5% maturing Y+1; market allows 5% over 7 years → interest savings but 0.8M€ call premium. 2) Analysis: annual savings 0.3M€ → fee payback ≈ 2.7 years. 3) If rating downgrades, spread may erase the benefit — timing matters.",
    practicalFr:
      "Listez trois déclencheurs de refinancement et deux risques si vous attendez 6 mois de plus.",
    practicalEn:
      "List three refinancing triggers and two risks if you wait 6 more months.",
    mistakeFr:
      "Refinancer uniquement pour allonger la durée sans calculer le coût total (frais + taux + flexibilité des covenants).",
    mistakeEn:
      "Refinancing only to extend maturity without total cost (fees + rate + covenant flexibility).",
    takeawayFr:
      "Refinancement = arbitrage coût actuel vs conditions de marché, avec horizon de payback des frais.",
    takeawayEn:
      "Refinancing = trade-off current cost vs market conditions, with fee payback horizon.",
    decisionFr:
      "Lancer la préparation 12–18 mois avant une grosse échéance si les marchés sont volatils.",
    decisionEn:
      "Start preparation 12–18 months before a large maturity if markets are volatile.",
    flashcardFrontFr: "Maturity wall",
    flashcardFrontEn: "Maturity wall",
    flashcardBackFr: "Concentration d'échéances de dette — risque de refinancement.",
    flashcardBackEn: "Cluster of debt maturities — refinancing risk.",
    exercisePromptFr:
      "Dette 10 M€ à 7 %, refinancement possible à 5,5 %, frais 200 k€, économie annuelle 150 k€. Payback des frais ?",
    exercisePromptEn:
      "Debt 10M€ at 7%, refinance at 5.5%, fees 200k€, annual savings 150k€. Fee payback?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Économie annuelle 150 k€, frais de refinancement 200 k€. Payback approximatif ?",
      promptEn: "Annual savings 150k€, refinancing fees 200k€. Approximate payback?",
      explanationCorrectFr: "200 / 150 ≈ 1,3 an.",
      explanationCorrectEn: "200 / 150 ≈ 1.3 years.",
      difficulty: 2,
      options: [
        opt("≈ 1,3 an", "≈ 1.3 years", true),
        opt("≈ 5 ans", "≈ 5 years", false),
        opt("Immédiat sans coût", "Immediate at no cost", false),
      ],
    }),
    questions: [
      q({
        type: "MULTIPLE_CHOICE",
        promptFr: "Motivations courantes de refinancement ? (Plusieurs réponses)",
        promptEn: "Common refinancing motives? (Multiple answers)",
        explanationCorrectFr:
          "Réduire le coût, étaler les échéances et assouplir les covenants sont des motivations fréquentes.",
        explanationCorrectEn:
          "Cutting cost, extending maturities, and loosening covenants are frequent motives.",
        difficulty: 2,
        options: [
          opt("Réduire le coût de la dette", "Reduce debt cost", true),
          opt("Étaler les échéances", "Extend maturities", true),
          opt("Supprimer tout besoin de cash", "Eliminate all cash needs", false, "Le refinancement restructure la dette, pas le BFR.", "Refinancing restructures debt, not working capital."),
          opt("Assouplir des covenants", "Loosen covenants", true),
        ],
      }),
    ],
  }),

  buildCfLesson({
    slug: "dilution-basics",
    titleFr: "Bases de la dilution",
    titleEn: "Dilution Basics",
    descriptionFr:
      "Comprendre la dilution du capital lors d'émissions d'actions et son impact par action.",
    descriptionEn:
      "Understand equity dilution on share issuance and per-share impact.",
    moduleSlug: MOD,
    sortOrder: 9,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: SKILL,
    learningObjective: "APPLY",
    objectiveFr:
      "Calculer la dilution en pourcentage et l'effet sur le BPA dans un scénario simple.",
    objectiveEn:
      "Compute dilution percentage and EPS effect in a simple scenario.",
    explanationFr:
      "La dilution survient quand de nouvelles actions sont émises : chaque action existante représente une part plus petite de l'entreprise. Dilution % = nouvelles actions / (anciennes + nouvelles). Le BPA (bénéfice par action) = résultat net / nombre d'actions. Si le produit de la levée est investi à un rendement inférieur au BPA actuel, le BPA baisse — dilution économique. Si les fonds déploient des projets rentables, le BPA peut augmenter malgré plus d'actions. Les options et convertibles créent une dilution potentielle (dilution diluée).",
    explanationEn:
      "Dilution occurs when new shares are issued: each existing share represents a smaller slice. Dilution % = new shares / (old + new). EPS = net income / share count. If proceeds are invested below current EPS yield, EPS falls — economic dilution. If funds deploy profitable projects, EPS can rise despite more shares. Options and convertibles create potential (fully diluted) dilution.",
    exampleFr:
      "1) Finova : 10 M actions, résultat net 5 M€ → BPA = 0,50 €. Émission de 2,5 M actions → total 12,5 M ; dilution = 2,5/12,5 = 20 %. 2) Si le résultat net reste 5 M€, nouveau BPA = 0,40 € (−20 %). 3) Si la levée finance un projet ajoutant 1,5 M€ de résultat, net 6,5 M€ → BPA = 0,52 € (accrétion malgré dilution nominale).",
    exampleEn:
      "1) Finova: 10M shares, net income 5M€ → EPS = 0.50€. Issue 2.5M shares → total 12.5M; dilution = 2.5/12.5 = 20%. 2) If net income stays 5M€, new EPS = 0.40€ (−20%). 3) If raise funds a project adding 1.5M€ income, net 6.5M€ → EPS = 0.52€ (accretion despite nominal dilution).",
    practicalFr:
      "8 M actions, émission 2 M. Dilution ? BPA avant 0,60 €, résultat inchangé — BPA après ?",
    practicalEn:
      "8M shares, issue 2M. Dilution? EPS before 0.60€, income unchanged — EPS after?",
    mistakeFr:
      "Confondre dilution en pourcentage du capital et dilution économique du BPA.",
    mistakeEn:
      "Confusing ownership dilution percentage with economic EPS dilution.",
    takeawayFr:
      "Dilution nominale ≠ toujours mauvaise : tout dépend de l'usage des fonds levés.",
    takeawayEn:
      "Nominal dilution ≠ always bad: it depends on use of proceeds.",
    decisionFr:
      "Comparer le rendement attendu des fonds levés au coût implicite de la dilution (BPA actuel).",
    decisionEn:
      "Compare expected return on raised funds to implicit dilution cost (current EPS).",
    flashcardFrontFr: "Dilution %",
    flashcardFrontEn: "Dilution %",
    flashcardBackFr: "Nouvelles actions / (anciennes + nouvelles).",
    flashcardBackEn: "New shares / (old + new).",
    exercisePromptFr:
      "12 M actions, +3 M émises, résultat net passe de 6 M€ à 7,2 M€. BPA avant / après ?",
    exercisePromptEn:
      "12M shares, +3M issued, net income rises from 6M€ to 7.2M€. EPS before / after?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "10 M actions + émission 2,5 M. Dilution en % du capital ?",
      promptEn: "10M shares + issue 2.5M. Dilution as % of capital?",
      explanationCorrectFr: "2,5 / 12,5 = 20 %.",
      explanationCorrectEn: "2.5 / 12.5 = 20%.",
      difficulty: 2,
      options: [
        opt("20 %", "20%", true),
        opt("25 %", "25%", false, "2,5/10 = 25 % est la hausse relative, pas la part du total.", "2.5/10 = 25% is relative increase, not share of total."),
        opt("2,5 %", "2.5%", false),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "BPA 0,80 €, 5 M actions, résultat inchangé après +1 M actions. Nouveau BPA ?",
        promptEn: "EPS 0.80€, 5M shares, income unchanged after +1M shares. New EPS?",
        explanationCorrectFr: "Résultat = 4 M€ ; 6 M actions → BPA ≈ 0,67 €.",
        explanationCorrectEn: "Income = 4M€; 6M shares → EPS ≈ 0.67€.",
        difficulty: 3,
        options: [
          opt("≈ 0,67 €", "≈ 0.67€", true),
          opt("0,80 €", "0.80€", false, "Plus d'actions à résultat constant → BPA baisse.", "More shares at constant income → EPS falls."),
          opt("0,96 €", "0.96€", false),
        ],
      }),
    ],
  }),

  buildCfLesson({
    slug: "dividend-policy-basics",
    titleFr: "Bases de la politique de dividende",
    titleEn: "Dividend Policy Basics",
    descriptionFr:
      "Comprendre payout, dividendes et arbitrage avec réinvestissement et dette.",
    descriptionEn:
      "Understand payout, dividends, and trade-offs with reinvestment and debt.",
    moduleSlug: MOD,
    sortOrder: 10,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: SKILL,
    learningObjective: "ANALYZE",
    objectiveFr:
      "Interpréter le taux de distribution et ses implications pour la trésorerie et la structure du capital.",
    objectiveEn:
      "Interpret payout ratio and implications for cash and capital structure.",
    explanationFr:
      "La politique de dividende définit comment les bénéfices sont partagés entre actionnaires (dividendes) et entreprise (bénéfices non distribués / autofinancement). Taux de distribution (payout) = dividendes / résultat net. Un payout élevé satisfait les actionnaires mais réduit le cash disponible pour investir ou désendetter. Les entreprises matures à cash stable versent souvent plus ; les entreprises en croissance retiennent davantage. Les dividendes ne sont pas obligatoires — le conseil peut les ajuster. Les règles légales (tests de solvabilité, imposition) varient selon les pays.",
    explanationEn:
      "Dividend policy defines how profits are split between shareholders (dividends) and the firm (retained earnings / self-funding). Payout ratio = dividends / net income. High payout pleases shareholders but reduces cash to invest or deleverage. Mature stable-cash firms often pay more; growth firms retain more. Dividends are not mandatory — the board can adjust them. Legal rules (solvency tests, taxation) vary by country.",
    exampleFr:
      "1) StableGrid : résultat net 20 M€, dividendes 12 M€ → payout 60 %. 2) GrowFast (tech) : résultat 8 M€, dividendes 0 → réinvestissement R&D. 3) Si StableGrid veut financer un CAPEX de 15 M€ sans emprunter, réduire temporairement le payout libère du cash interne.",
    exampleEn:
      "1) StableGrid: net income 20M€, dividends 12M€ → payout 60%. 2) GrowFast (tech): income 8M€, dividends 0 → R&D reinvestment. 3) If StableGrid wants 15M€ CAPEX without borrowing, temporarily cutting payout frees internal cash.",
    practicalFr:
      "Résultat net 4 M€, dividendes 1,2 M€. Calculez le payout et les bénéfices non distribués.",
    practicalEn:
      "Net income 4M€, dividends 1.2M€. Compute payout and retained earnings.",
    mistakeFr:
      "Supposer qu'un dividende élevé signifie toujours une entreprise « saine » — cela peut aussi limiter la flexibilité.",
    mistakeEn:
      "Assuming a high dividend always means a “healthy” firm — it can also limit flexibility.",
    takeawayFr:
      "Politique de dividende = équilibre entre rendement actionnaire et cash pour croissance / dette.",
    takeawayEn:
      "Dividend policy = balance between shareholder yield and cash for growth / debt.",
    decisionFr:
      "Vérifier que le dividende est couvert par le free cash flow, pas seulement par le résultat comptable.",
    decisionEn:
      "Check dividends are covered by free cash flow, not only accounting profit.",
    flashcardFrontFr: "Payout ratio",
    flashcardFrontEn: "Payout ratio",
    flashcardBackFr: "Dividendes / Résultat net.",
    flashcardBackEn: "Dividends / Net income.",
    exercisePromptFr:
      "Résultat 10 M€, payout cible 40 %, dette à refinancer 6 M€. Dividendes vs rétention — quel arbitrage ?",
    exercisePromptEn:
      "Income 10M€, target payout 40%, debt to refinance 6M€. Dividends vs retention — what trade-off?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Résultat net 10 M€, dividendes 4 M€. Payout ratio ?",
      promptEn: "Net income 10M€, dividends 4M€. Payout ratio?",
      explanationCorrectFr: "4 / 10 = 40 %.",
      explanationCorrectEn: "4 / 10 = 40%.",
      difficulty: 2,
      options: [
        opt("40 %", "40%", true),
        opt("60 %", "60%", false, "60 % serait la part retenue, pas distribuée.", "60% would be retained, not paid out."),
        opt("4 %", "4%", false),
      ],
    }),
    questions: [
      q({
        type: "TRUE_FALSE",
        promptFr: "Une entreprise en forte croissance retient souvent une plus grande part de ses bénéfices.",
        promptEn: "A high-growth firm often retains a larger share of earnings.",
        explanationCorrectFr: "Vrai : le cash finance souvent R&D, CAPEX et expansion.",
        explanationCorrectEn: "True: cash often funds R&D, CAPEX, and expansion.",
        difficulty: 1,
        options: [
          opt("Vrai", "True", true),
          opt("Faux", "False", false),
        ],
      }),
    ],
  }),

  buildCfLesson({
    slug: "retained-earnings-basics",
    titleFr: "Bases des bénéfices non distribués",
    titleEn: "Retained Earnings Basics",
    descriptionFr:
      "Comprendre le rôle des bénéfices non distribués dans le financement interne.",
    descriptionEn:
      "Understand retained earnings as internal financing.",
    moduleSlug: MOD,
    sortOrder: 11,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: SKILL,
    learningObjective: "IDENTIFY",
    objectiveFr:
      "Relier bénéfices non distribués, capitaux propres et capacité d'investissement sans dilution.",
    objectiveEn:
      "Link retained earnings, equity, and investment capacity without dilution.",
    explanationFr:
      "Les bénéfices non distribués (retained earnings) sont la part du résultat net non versée en dividendes — ils s'accumulent dans les capitaux propres au bilan. C'est une source de financement interne : pas de nouveaux actionnaires ni de nouveaux créanciers (si non endettement). Ils financent CAPEX, R&D, acquisitions ou réduction de dette. Limite : dépendent de la rentabilité et du payout ; un exercice déficitaire les réduit. Ils ne sont pas du « cash » disponible immédiatement — le cash réel se lit au bilan et au tableau de flux.",
    explanationEn:
      "Retained earnings are the portion of net income not paid as dividends — they accumulate in balance-sheet equity. This is internal financing: no new shareholders or lenders (unless paired with debt). They fund CAPEX, R&D, acquisitions, or debt reduction. Limit: depend on profitability and payout; a loss year reduces them. They are not immediately available “cash” — real cash is on the balance sheet and cash flow statement.",
    exampleFr:
      "1) AgriPlus : résultat net 3 M€, dividendes 1 M€ → rétention 2 M€ augmentent les capitaux propres. 2) Sur 5 ans, rétention cumulée 9 M€ finance une nouvelle ligne sans levée. 3) Erreur fréquente : afficher 9 M€ de rétention mais seulement 1 M€ de cash — le BFR et les investissements absorbent le reste.",
    exampleEn:
      "1) AgriPlus: net income 3M€, dividends 1M€ → retention 2M€ raises equity. 2) Over 5 years, 9M€ cumulative retention funds a new line without a raise. 3) Common error: 9M€ retained on paper but only 1M€ cash — working capital and investments absorb the rest.",
    practicalFr:
      "Résultat 5 M€, payout 30 %. Quelle rétention ? Comment cela affecte-t-il le besoin de financement externe pour un CAPEX de 4 M€ ?",
    practicalEn:
      "Income 5M€, payout 30%. What retention? How does it affect external funding need for 4M€ CAPEX?",
    mistakeFr:
      "Confondre bénéfices non distribués et trésorerie disponible.",
    mistakeEn:
      "Confusing retained earnings with available cash.",
    takeawayFr:
      "Rétention = financement interne flexible sans dilution — conditionné par profit et cash réel.",
    takeawayEn:
      "Retention = flexible internal funding without dilution — conditioned on profit and real cash.",
    decisionFr:
      "Croiser rétention planifiée avec le cash flow libre avant de promettre un CAPEX autofinancé.",
    decisionEn:
      "Cross-check planned retention with free cash flow before promising self-funded CAPEX.",
    flashcardFrontFr: "Bénéfices non distribués",
    flashcardFrontEn: "Retained earnings",
    flashcardBackFr: "Résultat net − dividendes ; s'accumule dans les capitaux propres.",
    flashcardBackEn: "Net income − dividends; accumulates in equity.",
    exercisePromptFr:
      "Trois ans : rétention annuelle 2 M€, 3 M€, 2,5 M€. Total ? CAPEX 6 M€ — reste-t-il un besoin externe (hors cash initial) ?",
    exercisePromptEn:
      "Three years: annual retention 2M€, 3M€, 2.5M€. Total? CAPEX 6M€ — external need left (excl. opening cash)?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Résultat net 6 M€, dividendes 2 M€. Bénéfices non distribués de l'exercice ?",
      promptEn: "Net income 6M€, dividends 2M€. Retained earnings for the year?",
      explanationCorrectFr: "6 − 2 = 4 M€.",
      explanationCorrectEn: "6 − 2 = 4M€.",
      difficulty: 1,
      options: [
        opt("4 M€", "4M€", true),
        opt("2 M€", "2M€", false, "2 M€ sont les dividendes distribués.", "2M€ are dividends paid."),
        opt("8 M€", "8M€", false),
      ],
    }),
    questions: [
      q({
        type: "TRUE_FALSE",
        promptFr: "Les bénéfices non distribués augmentent les capitaux propres au bilan.",
        promptEn: "Retained earnings increase balance-sheet equity.",
        explanationCorrectFr: "Vrai : la rétention s'accumule dans les capitaux propres.",
        explanationCorrectEn: "True: retention accumulates in equity.",
        difficulty: 1,
        options: [
          opt("Vrai", "True", true),
          opt("Faux", "False", false),
        ],
      }),
    ],
  }),
];
