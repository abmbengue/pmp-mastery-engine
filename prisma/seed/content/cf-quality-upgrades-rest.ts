/**
 * Corporate Finance quality upgrades (rest / B-tier) — enriched situational lessons (FR/EN).
 * Replaces selected financing, investment-M&A, and advanced slugs with richer FCFA/EUR scenarios.
 * Educational only — not a professional valuation or investment advice.
 */

import { buildCfLesson, opt, q } from "./cf-factory";
import type { CompactLesson } from "./compact";

export const CF_REST_QUALITY_UPGRADES: CompactLesson[] = [
  // ── Financing: cost-of-debt ───────────────────────────────────────────────
  buildCfLesson({
    slug: "cost-of-debt",
    titleFr: "Coût de la dette",
    titleEn: "Cost of Debt",
    descriptionFr:
      "Estimer le coût effectif de la dette et son entrée dans le WACC (après impôt).",
    descriptionEn:
      "Estimate effective debt cost and its role in WACC (after tax).",
    moduleSlug: "financing-capital-structure",
    sortOrder: 3,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-capital-structure",
    learningObjective: "APPLY",
    objectiveFr:
      "Calculer le coût de la dette pondéré avant/après impôt et le relier à la chaîne Dette → Levier → Rd → WACC.",
    objectiveEn:
      "Compute weighted pre-/after-tax cost of debt and link it to the Debt → Leverage → Rd → WACC chain.",
    explanationFr:
      "Le coût de la dette (Rd) est le taux effectif payé sur les emprunts — taux contractuel, rendement à l'émission, ou coût marginal sur nouvelle dette. Chaîne conceptuelle : plus de dette → levier plus élevé → prêteurs exigent souvent un Rd plus élevé → Rd après impôt Rd×(1−T) entre dans le WACC et relève (ou abaisse) le taux d'actualisation des FCF. Avec plusieurs tranches : Rd = Σ(tauxᵢ × montantᵢ) / dette totale. Interprétation : un Rd marginal qui monte de 1 point avec D/V = 40 % augmente le WACC d'environ 0,4×(1−T) points — assez pour faire basculer une VAN proche de zéro. Les règles fiscales (déductibilité des intérêts) varient selon les pays.",
    explanationEn:
      "Cost of debt (Rd) is the effective rate paid on borrowings — contractual rate, yield at issuance, or marginal cost on new debt. Concept chain: more debt → higher leverage → lenders often demand higher Rd → after-tax Rd×(1−T) enters WACC and raises (or lowers) the discount rate on FCF. With multiple tranches: Rd = Σ(rateᵢ × amountᵢ) / total debt. Interpretation: a 1-point rise in marginal Rd with D/V = 40% lifts WACC by about 0.4×(1−T) points — enough to flip an NPV near zero. Tax rules (interest deductibility) vary by country.",
    exampleFr:
      "Cas Abidjan AgroPack : obligation 600 M FCFA à 7 % + crédit bancaire 200 M FCFA à 10 % → Rd = (600×7 % + 200×10 %) / 800 = (42 + 20) / 800 = 7,75 %. Avec T = 25 % : Rd(1−T) = 7,75 % × 0,75 = 5,8125 % ≈ 5,81 %. Structure cible E/V = 60 %, Re = 12 %, D/V = 40 % → WACC = 0,6×12 % + 0,4×5,81 % = 7,2 % + 2,324 % ≈ 9,52 %. Variante EUR : même pondération sur 8 M€ + 2 M€ donne le même Rd 7,75 % — la devise change, pas la formule.",
    exampleEn:
      "Abidjan AgroPack case: 600M FCFA bond at 7% + 200M FCFA bank loan at 10% → Rd = (600×7% + 200×10%) / 800 = (42 + 20) / 800 = 7.75%. With T = 25%: Rd(1−T) = 7.75% × 0.75 = 5.8125% ≈ 5.81%. Target structure E/V = 60%, Re = 12%, D/V = 40% → WACC = 0.6×12% + 0.4×5.81% = 7.2% + 2.324% ≈ 9.52%. EUR variant: same weights on €8M + €2M yield the same 7.75% Rd — currency changes, formula does not.",
    practicalFr:
      "Calculez Rd pondéré puis Rd(1−T) : tranche A 3 000 M FCFA à 6 %, tranche B 1 000 M FCFA à 9 %, T = 30 %. Puis estimez l'effet sur le WACC si D/V = 35 % et Re = 11 % reste fixe. Arbitrage : dette « bon marché » vs risque de levier qui renchérit Rd.",
    practicalEn:
      "Compute weighted Rd then Rd(1−T): tranche A 3,000M FCFA at 6%, tranche B 1,000M FCFA at 9%, T = 30%. Then estimate the WACC effect if D/V = 35% and Re = 11% stays fixed. Trade-off: “cheap” debt vs leverage risk that reprices Rd upward.",
    mistakeFr:
      "Utiliser le taux nominal historique d'un vieux prêt alors que le projet se finance au taux marginal du marché — ou oublier (1−T) dans le WACC.",
    mistakeEn:
      "Using the historical nominal rate on an old loan when the project funds at the market’s marginal rate — or forgetting (1−T) in WACC.",
    takeawayFr:
      "Rd pondéré après impôt alimente le WACC ; la chaîne Dette → Levier → Rd → WACC lie structure et valeur.",
    takeawayEn:
      "Weighted after-tax Rd feeds WACC; the Debt → Leverage → Rd → WACC chain links structure to value.",
    decisionFr:
      "Pour un nouveau projet, utiliser le coût marginal de la dette (pas seulement la moyenne historique). Arbitrage : accepter un Rd un peu plus élevé pour préserver de la capacité d'emprunt vs pousser le levier au maximum et voir Rd (et WACC) monter.",
    decisionEn:
      "For a new project, use marginal debt cost (not only the historical average). Trade-off: accept a slightly higher Rd to preserve borrowing capacity vs maxing leverage and watching Rd (and WACC) rise.",
    flashcardFrontFr: "Rd après impôt",
    flashcardFrontEn: "After-tax Rd",
    flashcardBackFr: "Rd × (1 − T) — entrée dette du WACC (selon règles fiscales).",
    flashcardBackEn: "Rd × (1 − T) — debt input to WACC (per tax rules).",
    exercisePromptFr:
      "Dette 400 M FCFA à 8 %, T = 25 %, D/V = 50 %, Re = 10 %. Calculez Rd(1−T) et le WACC. Si Rd passe à 10 %, nouveau WACC ?",
    exercisePromptEn:
      "Debt 400M FCFA at 8%, T = 25%, D/V = 50%, Re = 10%. Compute Rd(1−T) and WACC. If Rd rises to 10%, new WACC?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : Dakar Logistics a 500 M FCFA de dette à 6 % et 300 M FCFA à 9 %. Impôt 25 %. Quel Rd après impôt entre dans le WACC ?",
      promptEn:
        "Situation: Dakar Logistics has 500M FCFA debt at 6% and 300M FCFA at 9%. Tax 25%. What after-tax Rd enters WACC?",
      explanationCorrectFr:
        "Rd = (500×6 % + 300×9 %) / 800 = (30 + 27) / 800 = 7,125 %. Après impôt : 7,125 % × 0,75 = 5,34375 % ≈ 5,34 %.",
      explanationCorrectEn:
        "Rd = (500×6% + 300×9%) / 800 = (30 + 27) / 800 = 7.125%. After tax: 7.125% × 0.75 = 5.34375% ≈ 5.34%.",
      difficulty: 3,
      options: [
        opt(
          "≈ 5,34 %",
          "≈ 5.34%",
          true
        ),
        opt(
          "≈ 7,13 %",
          "≈ 7.13%",
          false,
          "7,13 % est le Rd avant impôt — il faut encore × (1−T).",
          "7.13% is pre-tax Rd — still multiply by (1−T)."
        ),
        opt(
          "≈ 7,5 %",
          "≈ 7.5%",
          false,
          "Moyenne simple (6+9)/2 = 7,5 % ignore les montants.",
          "Simple average (6+9)/2 = 7.5% ignores amounts."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : Rd(1−T) passe de 4 % à 6 %, D/V = 40 %, Re fixe à 11 %. Que devient le WACC ?",
        promptEn:
          "Situation: Rd(1−T) rises from 4% to 6%, D/V = 40%, Re fixed at 11%. What happens to WACC?",
        explanationCorrectFr:
          "Hausse de 0,4 × 2 % = 0,8 point. Ancien WACC = 0,6×11 + 0,4×4 = 8,2 % ; nouveau = 9,0 %.",
        explanationCorrectEn:
          "Rise of 0.4 × 2% = 0.8 points. Old WACC = 0.6×11 + 0.4×4 = 8.2%; new = 9.0%.",
        difficulty: 3,
        options: [
          opt("Augmente d'environ 0,8 point", "Rises by about 0.8 points", true),
          opt(
            "Baisse car plus de dette « bon marché »",
            "Falls because more “cheap” debt",
            false,
            "Ici Rd monte — la composante dette du WACC augmente.",
            "Here Rd rises — the debt component of WACC increases."
          ),
          opt(
            "Reste identique car Re est fixe",
            "Stays the same because Re is fixed",
            false,
            "Re fixe n'annule pas le changement de Rd.",
            "Fixed Re does not cancel the Rd change."
          ),
        ],
      }),
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : la direction veut « baisser le WACC » en doublant la dette alors que les banques viennent de remonter le spread de +150 pb. Quelle lecture est la plus juste ?",
        promptEn:
          "Situation: management wants to “cut WACC” by doubling debt just after banks raised the spread +150 bps. Which reading is fairest?",
        explanationCorrectFr:
          "Le levier supplémentaire peut faire monter Rd assez pour compenser (voire dépasser) le poids plus élevé de la dette « moins chère » que les fonds propres — chaîne Levier → Rd → WACC.",
        explanationCorrectEn:
          "Extra leverage can lift Rd enough to offset (or exceed) the heavier weight of debt “cheaper” than equity — Leverage → Rd → WACC chain.",
        difficulty: 2,
        options: [
          opt(
            "Recalculer Rd marginal et WACC avant d'augmenter le levier",
            "Recalculate marginal Rd and WACC before raising leverage",
            true
          ),
          opt(
            "Doubler la dette sans recalcul — le WACC baisse toujours",
            "Double debt without recalc — WACC always falls",
            false,
            "Faux : Rd et risque financier peuvent remonter le WACC.",
            "False: Rd and financial risk can push WACC up."
          ),
          opt(
            "Ignorer l'impôt car T est « trop complexe »",
            "Ignore tax because T is “too complex”",
            false,
            "Rd(1−T) est la convention pédagogique standard du WACC.",
            "Rd(1−T) is the standard pedagogical WACC convention."
          ),
        ],
      }),
    ],
  }),

  // ── Financing: dilution-basics ────────────────────────────────────────────
  buildCfLesson({
    slug: "dilution-basics",
    titleFr: "Bases de la dilution",
    titleEn: "Dilution Basics",
    descriptionFr:
      "Comprendre la dilution du capital lors d'émissions d'actions et son impact par action.",
    descriptionEn:
      "Understand equity dilution on share issuance and per-share impact.",
    moduleSlug: "financing-capital-structure",
    sortOrder: 9,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-capital-structure",
    learningObjective: "APPLY",
    objectiveFr:
      "Calculer la dilution nominale et l'effet BPA, puis juger si la levée crée ou détruit de la valeur par action.",
    objectiveEn:
      "Compute nominal dilution and EPS effect, then judge whether the raise creates or destroys per-share value.",
    explanationFr:
      "La dilution survient quand de nouvelles actions sont émises : chaque action existante représente une part plus petite. Dilution % = nouvelles / (anciennes + nouvelles). BPA = résultat net / nombre d'actions. Interprétation : dilution nominale ≠ nécessairement mauvaise. Si les fonds sont investis dans des projets à rendement suffisant, le BPA (et la valeur) peut monter malgré plus d'actions — accrétion économique. Si le résultat reste plat, le BPA baisse — dilution économique. Chaîne liée au financement : dette vs equity → levier et Rd vs dilution → coût du capital (WACC) et valeur. En M&A, émettre des actions pour payer une cible relie dilution, accretion/dilution du BPA et création de valeur — trois notions distinctes.",
    explanationEn:
      "Dilution occurs when new shares are issued: each existing share is a smaller slice. Dilution % = new / (old + new). EPS = net income / share count. Interpretation: nominal dilution ≠ necessarily bad. If proceeds fund projects with adequate return, EPS (and value) can rise despite more shares — economic accretion. If income stays flat, EPS falls — economic dilution. Financing chain: debt vs equity → leverage and Rd vs dilution → cost of capital (WACC) and value. In M&A, issuing shares to pay a target links dilution, EPS accretion/dilution, and value creation — three distinct ideas.",
    exampleFr:
      "Cas Finova Abidjan : 10 M actions, résultat net 5 000 M FCFA → BPA = 500 FCFA. Émission de 2,5 M actions → total 12,5 M ; dilution = 2,5/12,5 = 20 %. (1) Résultat inchangé → BPA = 400 FCFA (−20 %). (2) Levée 1 250 M FCFA investie dans un projet ajoutant 800 M FCFA de résultat → net 5 800 M → BPA = 464 FCFA (encore dilutif vs 500). (3) Si le projet ajoute 1 500 M → net 6 500 M → BPA = 520 FCFA (accrétion malgré dilution nominale 20 %). Équivalent EUR : BPA 0,50 € → 0,40 € ou 0,52 € selon l'usage des fonds.",
    exampleEn:
      "Finova Abidjan case: 10M shares, net income 5,000M FCFA → EPS = 500 FCFA. Issue 2.5M shares → total 12.5M; dilution = 2.5/12.5 = 20%. (1) Income unchanged → EPS = 400 FCFA (−20%). (2) Raise 1,250M FCFA invested in a project adding 800M FCFA income → net 5,800M → EPS = 464 FCFA (still dilutive vs 500). (3) If the project adds 1,500M → net 6,500M → EPS = 520 FCFA (accretion despite 20% nominal dilution). EUR equivalent: EPS €0.50 → €0.40 or €0.52 depending on use of proceeds.",
    practicalFr:
      "8 M actions, émission 2 M (dilution = 2/10 = 20 %). BPA avant 600 FCFA, résultat inchangé — BPA après ? Puis supposez +20 % de résultat grâce aux fonds : nouveau BPA ? Arbitrage : éviter la dilution via dette (mais Rd et levier montent) vs accepter la dilution equity.",
    practicalEn:
      "8M shares, issue 2M (dilution = 2/10 = 20%). EPS before 600 FCFA, income unchanged — EPS after? Then assume +20% income from proceeds: new EPS? Trade-off: avoid dilution via debt (but Rd and leverage rise) vs accept equity dilution.",
    mistakeFr:
      "Confondre dilution en % du capital, baisse du BPA, et destruction de valeur — ou croire qu'une émission est toujours « mauvaise » sans regarder l'usage des fonds.",
    mistakeEn:
      "Confusing ownership dilution %, EPS decline, and value destruction — or assuming any issuance is always “bad” without checking use of proceeds.",
    takeawayFr:
      "Dilution nominale ≠ verdict : le BPA et la valeur dépendent du rendement des fonds levés.",
    takeawayEn:
      "Nominal dilution ≠ verdict: EPS and value depend on the return earned on raised funds.",
    decisionFr:
      "Comparer le rendement attendu des fonds au coût implicite de la dilution (BPA / valeur actuelle). Arbitrage : equity (dilution, pas d'intérêts) vs dette (pas de dilution, mais Rd et risque de levier).",
    decisionEn:
      "Compare expected return on funds to the implicit cost of dilution (current EPS / value). Trade-off: equity (dilution, no interest) vs debt (no dilution, but Rd and leverage risk).",
    flashcardFrontFr: "Dilution %",
    flashcardFrontEn: "Dilution %",
    flashcardBackFr: "Nouvelles actions / (anciennes + nouvelles).",
    flashcardBackEn: "New shares / (old + new).",
    exercisePromptFr:
      "12 M actions, +3 M émises, résultat net de 6 000 M à 7 200 M FCFA. Dilution % ? BPA avant / après ?",
    exercisePromptEn:
      "12M shares, +3M issued, net income from 6,000M to 7,200M FCFA. Dilution %? EPS before / after?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : SoftSahel a 20 M actions et un BPA de 250 FCFA. Elle émet 5 M actions pour financer une usine. Si le résultat net reste constant, quel est le nouveau BPA ?",
      promptEn:
        "Situation: SoftSahel has 20M shares and EPS of 250 FCFA. It issues 5M shares to fund a plant. If net income stays constant, what is the new EPS?",
      explanationCorrectFr:
        "Résultat = 20 M × 250 = 5 000 M FCFA. Après : 25 M actions → BPA = 200 FCFA. Dilution = 5/25 = 20 %.",
      explanationCorrectEn:
        "Income = 20M × 250 = 5,000M FCFA. After: 25M shares → EPS = 200 FCFA. Dilution = 5/25 = 20%.",
      difficulty: 2,
      options: [
        opt("200 FCFA", "200 FCFA", true),
        opt(
          "250 FCFA",
          "250 FCFA",
          false,
          "Plus d'actions à résultat constant → BPA baisse.",
          "More shares at constant income → EPS falls."
        ),
        opt(
          "312,5 FCFA",
          "312.5 FCFA",
          false,
          "Ce serait une hausse, pas une dilution économique.",
          "That would be an increase, not economic dilution."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : dilution nominale 20 %, mais le projet financé fait passer le résultat net de 4 000 M à 5 500 M FCFA (actions 10 M → 12,5 M). Que conclure sur le BPA ?",
        promptEn:
          "Situation: 20% nominal dilution, but the funded project lifts net income from 4,000M to 5,500M FCFA (shares 10M → 12.5M). What about EPS?",
        explanationCorrectFr:
          "BPA avant = 400 FCFA ; après = 5 500 / 12,5 = 440 FCFA → accrétion malgré dilution nominale.",
        explanationCorrectEn:
          "EPS before = 400 FCFA; after = 5,500 / 12.5 = 440 FCFA → accretion despite nominal dilution.",
        difficulty: 3,
        options: [
          opt(
            "BPA en hausse (accrétion économique)",
            "EPS up (economic accretion)",
            true
          ),
          opt(
            "BPA forcément en baisse car dilution 20 %",
            "EPS must fall because dilution is 20%",
            false,
            "La dilution nominale ne dicte pas le BPA si le résultat augmente assez.",
            "Nominal dilution does not dictate EPS if income rises enough."
          ),
          opt(
            "BPA inchangé",
            "EPS unchanged",
            false,
            "400 → 440 FCFA : le BPA change.",
            "400 → 440 FCFA: EPS changes."
          ),
        ],
      }),
    ],
  }),

  // ── Investment: capital-budgeting-basics ──────────────────────────────────
  buildCfLesson({
    slug: "capital-budgeting-basics",
    titleFr: "Bases du budget d'investissement",
    titleEn: "Capital Budgeting Basics",
    descriptionFr:
      "Comprendre le processus de décision d'investissement en entreprise : objectifs, flux et critères.",
    descriptionEn:
      "Understand corporate investment decision-making: goals, cash flows, and criteria.",
    moduleSlug: "investment-ma",
    sortOrder: 0,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: "cf-investment",
    learningObjective: "IDENTIFY",
    objectiveFr:
      "Identifier le cycle du budget d'investissement et séparer flux de trésorerie pertinents des montants comptables.",
    objectiveEn:
      "Identify the capital budgeting cycle and separate relevant cash flows from accounting amounts.",
    explanationFr:
      "Le budget d'investissement (capital budgeting) est le processus qui choisit les projets multi-années : usine, logiciel, CAPEX, R&D. Objectif pédagogique : maximiser la valeur en acceptant les projets dont le rendement ajusté du risque excède le coût du capital (lien avec WACC et, plus loin, ROIC). Cycle : idée → estimation des flux incrementaux → analyse (NPV, IRR, payback) → décision → suivi. Interprétation : on décide sur du cash, pas sur le résultat comptable seul — amortissements et charges non cash ne sont pas des sorties. Les coûts irrécupérables (déjà dépensés) sont exclus ; les effets de BFR (investissement en fonds de roulement) sont inclus.",
    explanationEn:
      "Capital budgeting chooses multi-year projects: plants, software, CAPEX, R&D. Pedagogical goal: maximize value by accepting projects whose risk-adjusted return exceeds the cost of capital (link to WACC and, later, ROIC). Cycle: idea → incremental cash-flow estimate → analysis (NPV, IRR, payback) → decision → tracking. Interpretation: decide on cash, not accounting profit alone — depreciation and non-cash charges are not outflows. Sunk costs (already spent) are excluded; working-capital effects (investment in WC) are included.",
    exampleFr:
      "Mini-cas usine Cotonou : CAPEX initial 250 M FCFA + BFR 50 M FCFA → investissement t₀ = 300 M FCFA. Flux d'exploitation cash +80 M FCFA / an sur 5 ans (après impôts simplifiés). Amortissement comptable 50 M / an — exclu du flux (non cash). Valeur résiduelle équipements 40 M FCFA en année 5 + récupération BFR 50 M → flux terminal +90 M en plus du cash d'exploitation. Variante EUR : CAPEX 250 k€ + BFR 50 k€, mêmes ratios.",
    exampleEn:
      "Cotonou plant mini-case: initial CAPEX 250M FCFA + WC 50M FCFA → t₀ investment = 300M FCFA. Operating cash +80M FCFA / year for 5 years (simplified after tax). Accounting depreciation 50M / year — excluded from the flow (non-cash). Equipment residual 40M FCFA in year 5 + WC recovery 50M → terminal +90M on top of operating cash. EUR variant: CAPEX €250k + WC €50k, same ratios.",
    practicalFr:
      "Pour un projet logiciel : licence 40 M FCFA, mise en service 10 M, gains cash 25 M / an sur 4 ans. Listez (1) investissement initial, (2) un poste comptable à exclure, (3) un effet BFR éventuel. Arbitrage : projet rapide à payback court vs projet long à VAN forte.",
    practicalEn:
      "For a software project: license 40M FCFA, implementation 10M, cash gains 25M / year over 4 years. List (1) initial investment, (2) one accounting item to exclude, (3) a possible WC effect. Trade-off: fast short-payback project vs long high-NPV project.",
    mistakeFr:
      "Décider sur le résultat net comptable, compter un coût irrécupérable, ou oublier le BFR initial — trois erreurs qui faussent NPV/IRR.",
    mistakeEn:
      "Deciding on accounting net income, counting a sunk cost, or forgetting initial WC — three errors that distort NPV/IRR.",
    takeawayFr:
      "Budget d'investissement = flux de trésorerie incrementaux vs coût du capital, pas le seul compte de résultat.",
    takeawayEn:
      "Capital budgeting = incremental cash flows vs cost of capital, not the income statement alone.",
    decisionFr:
      "Avant d'ouvrir un modèle NPV/IRR : valider chaque ligne comme vrai cash incremental. Arbitrage : liquidité (payback) vs création de valeur (VAN) — les deux critères ne classent pas toujours pareil.",
    decisionEn:
      "Before opening an NPV/IRR model: validate each line as true incremental cash. Trade-off: liquidity (payback) vs value creation (NPV) — the two criteria do not always rank alike.",
    flashcardFrontFr: "Budget d'investissement",
    flashcardFrontEn: "Capital budgeting",
    flashcardBackFr: "Sélection de projets long terme via flux incrementaux et coût du capital.",
    flashcardBackEn: "Selecting long-term projects via incremental flows and cost of capital.",
    exercisePromptFr:
      "Projet : CAPEX 180 M FCFA, BFR +20 M, amortissement 30 M / an, cash d'exploitation 55 M / an. Quel est l'investissement initial pertinent ?",
    exercisePromptEn:
      "Project: CAPEX 180M FCFA, WC +20M, depreciation 30M / year, operating cash 55M / year. What is the relevant initial investment?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : le comité d'investissement d'une cimenterie à Lomé discute un four à 400 M FCFA. Le contrôleur insiste pour « amortir 80 M / an donc le projet coûte 80 M par an ». Quelle correction apporter ?",
      promptEn:
        "Situation: a Lomé cement plant’s investment committee discusses a 400M FCFA kiln. The controller insists “we depreciate 80M / year so the project costs 80M per year.” What correction?",
      explanationCorrectFr:
        "L'amortissement n'est pas un flux de trésorerie ; l'investissement cash est surtout le CAPEX (et le BFR) en t₀, puis les flux d'exploitation.",
      explanationCorrectEn:
        "Depreciation is not a cash flow; the cash investment is mainly CAPEX (and WC) at t₀, then operating cash flows.",
      difficulty: 2,
      options: [
        opt(
          "Remplacer l'amortissement par les flux de trésorerie incrementaux",
          "Replace depreciation with incremental cash flows",
          true
        ),
        opt(
          "Utiliser uniquement l'amortissement comme coût du projet",
          "Use only depreciation as the project cost",
          false,
          "L'amortissement est non cash — il ne mesure pas la sortie d'investissement.",
          "Depreciation is non-cash — it does not measure the investment outflow."
        ),
        opt(
          "Ignorer le CAPEX car il sera amorti",
          "Ignore CAPEX because it will be depreciated",
          false,
          "Le CAPEX est la sortie cash initiale — central au budget d'investissement.",
          "CAPEX is the initial cash outflow — central to capital budgeting."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : 15 M FCFA d'études de sol déjà payées l'an dernier. Le projet usine demande encore 200 M de CAPEX. Quel montant retenir en t₀ pour la décision ?",
        promptEn:
          "Situation: 15M FCFA of soil studies already paid last year. The plant project still needs 200M CAPEX. What amount to use at t₀ for the decision?",
        explanationCorrectFr:
          "Les 15 M sont irrécupérables (sunk). Seuls les 200 M (plus BFR éventuel) sont des flux futurs décisionnels.",
        explanationCorrectEn:
          "The 15M is sunk. Only the 200M (plus any WC) are forward-looking decision cash flows.",
        difficulty: 2,
        options: [
          opt("200 M FCFA (hors études déjà payées)", "200M FCFA (excluding sunk studies)", true),
          opt(
            "215 M FCFA (tout inclure)",
            "215M FCFA (include everything)",
            false,
            "Inclure un coût irrécupérable biaise la décision.",
            "Including a sunk cost biases the decision."
          ),
          opt(
            "15 M FCFA seulement",
            "15M FCFA only",
            false,
            "Les études sont déjà payées ; le CAPEX restant est le vrai engagement.",
            "Studies are already paid; remaining CAPEX is the real commitment."
          ),
        ],
      }),
    ],
  }),

  // ── Investment: irr-basics ────────────────────────────────────────────────
  buildCfLesson({
    slug: "irr-basics",
    titleFr: "Bases du TRI (IRR)",
    titleEn: "IRR Basics",
    descriptionFr:
      "Comprendre le taux de rendement interne (TRI / IRR) et le comparer au coût du capital.",
    descriptionEn:
      "Understand internal rate of return (IRR) and compare it to the cost of capital.",
    moduleSlug: "investment-ma",
    sortOrder: 2,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-investment",
    learningObjective: "APPLY",
    objectiveFr:
      "Définir le TRI comme le taux qui annule la VAN et décider accepter/rejeter vs WACC sur un mini-cas.",
    objectiveEn:
      "Define IRR as the rate that zeroes NPV and decide accept/reject vs WACC on a mini-case.",
    explanationFr:
      "Le TRI (IRR) est le taux d'actualisation r tel que NPV = 0. Règle pédagogique : si IRR > coût du capital (WACC simplifié), projet acceptable ; si IRR < WACC, rejet. Interprétation : le TRI est un % de rendement intuitif, mais il peut tromper avec des flux non conventionnels (plusieurs changements de signe) ou des projets d'échelles différentes — la VAN reste souvent le critère principal. Lien chaîne investissement : flux → VAN/TRI → comparaison au WACC (lui-même lié à Rd et structure). En M&A, un TRI interne élevé sur synergies « optimistes » n'équivaut pas à une création de valeur si le prix payé est excessif.",
    explanationEn:
      "IRR is the discount rate r where NPV = 0. Pedagogical rule: if IRR > cost of capital (simplified WACC), accept; if IRR < WACC, reject. Interpretation: IRR is an intuitive % return, but it can mislead with non-conventional flows (multiple sign changes) or different project scales — NPV often remains primary. Investment chain: flows → NPV/IRR → compare to WACC (itself linked to Rd and structure). In M&A, a high internal IRR on “optimistic” synergies is not value creation if the price paid is excessive.",
    exampleFr:
      "Projet SahelSolar : investissement 100 M FCFA, flux 60 M + 60 M.\nÀ 10 % : PV = 54,55 + 49,59 = 104,14 → NPV ≈ +4,14.\nÀ 13 % : PV = 53,10 + 47,00 = 100,10 → NPV ≈ +0,10.\nÀ 15 % : PV = 52,17 + 45,35 = 97,52 → NPV ≈ −2,48.\nTRI ≈ 13 % (taux où NPV ≈ 0). Si WACC = 10 % → TRI > WACC → acceptation pédagogique. Variante EUR : −100 k€, +60, +60 → mêmes %. ",
    exampleEn:
      "SahelSolar project: investment 100M FCFA, flows 60M + 60M.\nAt 10%: PV = 54.55 + 49.59 = 104.14 → NPV ≈ +4.14.\nAt 13%: PV = 53.10 + 47.00 = 100.10 → NPV ≈ +0.10.\nAt 15%: PV = 52.17 + 45.35 = 97.52 → NPV ≈ −2.48.\nIRR ≈ 13% (rate where NPV ≈ 0). If WACC = 10% → IRR > WACC → pedagogical acceptance. EUR variant: −€100k, +60, +60 → same percentages.",
    practicalFr:
      "Pour 100 / 60 / 60, confirmez sans calculatrice précise que TRI > 8 % et TRI < 15 %. Puis comparez à un WACC de 12 % : accepter ou rejeter ? Arbitrage : projet petit à TRI élevé vs projet large à VAN plus forte.",
    practicalEn:
      "For 100 / 60 / 60, confirm without a precise calculator that IRR > 8% and IRR < 15%. Then compare to a 12% WACC: accept or reject? Trade-off: small high-IRR project vs large higher-NPV project.",
    mistakeFr:
      "Choisir le TRI maximal entre projets exclusifs sans regarder la VAN, ou comparer le TRI à un seuil arbitraire sans lien avec le WACC.",
    mistakeEn:
      "Picking maximum IRR among exclusive projects without checking NPV, or comparing IRR to an arbitrary hurdle unrelated to WACC.",
    takeawayFr:
      "TRI = taux d'équilibre de la VAN ; comparez-le au WACC, et départagez les conflits avec la VAN.",
    takeawayEn:
      "IRR = NPV breakeven rate; compare it to WACC, and break conflicts with NPV.",
    decisionFr:
      "Si TRI > WACC et VAN > 0 sur le même projet → cohérent. Si deux projets exclusifs divergent (TRI vs VAN), privilégier la VAN. Arbitrage : rendement % (TRI) vs création de valeur absolue (VAN).",
    decisionEn:
      "If IRR > WACC and NPV > 0 on the same project → consistent. If two exclusive projects diverge (IRR vs NPV), favor NPV. Trade-off: % return (IRR) vs absolute value creation (NPV).",
    flashcardFrontFr: "TRI (IRR)",
    flashcardFrontEn: "IRR",
    flashcardBackFr: "Taux d'actualisation qui annule la VAN.",
    flashcardBackEn: "Discount rate that makes NPV equal zero.",
    exercisePromptFr:
      "Projet A : −50, +30, +30. Projet B : −200, +110, +110. À 10 %, lequel a probablement le TRI le plus élevé ? La VAN la plus élevée ?",
    exercisePromptEn:
      "Project A: −50, +30, +30. Project B: −200, +110, +110. At 10%, which likely has higher IRR? Higher NPV?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : investissement 100 M FCFA, flux 60 + 60. WACC = 10 %. Quelle décision pédagogique ?",
      promptEn:
        "Situation: investment 100M FCFA, flows 60 + 60. WACC = 10%. Pedagogical decision?",
      explanationCorrectFr:
        "TRI ≈ 13 % > 10 % et VAN ≈ +4,14 → accepter.",
      explanationCorrectEn:
        "IRR ≈ 13% > 10% and NPV ≈ +4.14 → accept.",
      difficulty: 2,
      options: [
        opt("Accepter (TRI > WACC, VAN > 0)", "Accept (IRR > WACC, NPV > 0)", true),
        opt(
          "Rejeter car TRI < WACC",
          "Reject because IRR < WACC",
          false,
          "Le TRI est environ 13 %, au-dessus de 10 %.",
          "IRR is about 13%, above 10%."
        ),
        opt(
          "Indécis sans connaître le Rd",
          "Undecided without knowing Rd",
          false,
          "Le WACC est déjà donné comme seuil ; Rd est en amont du WACC.",
          "WACC is already the hurdle; Rd sits upstream of WACC."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : Projet P TRI = 22 % (investissement 40 M FCFA), Projet Q TRI = 14 % (investissement 400 M FCFA). Exclusifs, WACC = 10 %. Que vérifier en priorité ?",
        promptEn:
          "Situation: Project P IRR = 22% (investment 40M FCFA), Project Q IRR = 14% (investment 400M FCFA). Exclusive, WACC = 10%. What to check first?",
        explanationCorrectFr:
          "La VAN au même WACC — un petit projet à TRI élevé peut créer moins de valeur absolue qu'un grand projet.",
        explanationCorrectEn:
          "NPV at the same WACC — a small high-IRR project may create less absolute value than a large one.",
        difficulty: 2,
        options: [
          opt(
            "Comparer les VAN au WACC de 10 %",
            "Compare NPVs at the 10% WACC",
            true
          ),
          opt(
            "Choisir automatiquement le TRI 22 %",
            "Automatically pick the 22% IRR",
            false,
            "Entre exclusifs, la VAN prime souvent sur le TRI.",
            "Among exclusives, NPV often outranks IRR."
          ),
          opt(
            "Rejeter les deux car le TRI n'est jamais fiable",
            "Reject both because IRR is never reliable",
            false,
            "Le TRI reste utile vs WACC ; le piège est le classement exclusif.",
            "IRR remains useful vs WACC; the trap is exclusive ranking."
          ),
        ],
      }),
    ],
  }),

  // ── Investment: payback-period ────────────────────────────────────────────
  buildCfLesson({
    slug: "payback-period",
    titleFr: "Délai de récupération",
    titleEn: "Payback Period",
    descriptionFr:
      "Calculer le délai de récupération simple et comprendre ses limites.",
    descriptionEn:
      "Compute simple payback period and understand its limitations.",
    moduleSlug: "investment-ma",
    sortOrder: 3,
    estimatedMinutes: 7,
    difficulty: "BEGINNER",
    skillSlug: "cf-investment",
    learningObjective: "APPLY",
    objectiveFr:
      "Calculer un payback simple et expliquer pourquoi il ignore la valeur temps et les flux après récupération.",
    objectiveEn:
      "Compute simple payback and explain why it ignores time value and post-payback flows.",
    explanationFr:
      "Le délai de récupération (payback) mesure le temps pour que les flux cumulés couvrent l'investissement initial. Interprétation : c'est un outil de liquidité et de risque « cash bloqué », pas un substitut de VAN. Il ignore (1) la valeur temps de l'argent, (2) les flux après le payback, (3) le profil de risque. Un projet à payback court peut avoir une VAN faible ; un projet à payback long peut créer beaucoup de valeur via des flux tardifs. Utilisez-le comme filtre de trésorerie, puis confirmez avec NPV/IRR et le WACC.",
    explanationEn:
      "Payback period measures how long until cumulative flows cover initial investment. Interpretation: it is a liquidity and “cash tied up” risk tool, not an NPV substitute. It ignores (1) time value of money, (2) post-payback flows, (3) risk profile. A short-payback project may have weak NPV; a long-payback project may create substantial value via late flows. Use it as a cash filter, then confirm with NPV/IRR and WACC.",
    exampleFr:
      "Investissement 240 M FCFA. Flux : 80 (an 1), 80 (an 2), 100 (an 3).\nCumul : 80 → 160 → 260.\nAprès 2 ans il manque 80 ; année 3 apporte 100 → payback = 2 + 80/100 = 2,8 ans.\nMême logique en euros : investissement 240 k€, flux 80/80/100 → 2,8 ans. Si le comité impose un plafond de 3 ans, le projet passe le filtre liquidité — il reste à vérifier la VAN à 10 %.",
    exampleEn:
      "Investment 240M FCFA. Flows: 80 (y1), 80 (y2), 100 (y3).\nCumulative: 80 → 160 → 260.\nAfter 2 years, 80 short; year 3 brings 100 → payback = 2 + 80/100 = 2.8 years.\nSame in euros: investment €240k, flows 80/80/100 → 2.8 years. If the committee caps payback at 3 years, it passes the liquidity filter — still verify NPV at 10%.",
    practicalFr:
      "Calculez le payback pour 80 M FCFA d'investissement et 25 M / an. Comparez à 80 M avec 60 M en année 1 puis 5 M / an. Arbitrage : récupérer vite le cash vs maximiser la VAN.",
    practicalEn:
      "Compute payback for 80M FCFA investment and 25M / year. Compare to 80M with 60M in year 1 then 5M / year. Trade-off: recover cash quickly vs maximize NPV.",
    mistakeFr:
      "Rejeter un projet au payback long alors que sa VAN est forte — ou accepter un payback court sans regarder les flux après récupération.",
    mistakeEn:
      "Rejecting a long-payback project when its NPV is strong — or accepting a short payback without looking at post-recovery flows.",
    takeawayFr:
      "Payback = boussole de liquidité ; VAN = boussole de création de valeur.",
    takeawayEn:
      "Payback = liquidity compass; NPV = value-creation compass.",
    decisionFr:
      "Utiliser le payback pour contraintes de trésorerie ; décider in fine sur la VAN au WACC. Arbitrage : sécurité de récupération rapide vs projets stratégiques à flux lointains.",
    decisionEn:
      "Use payback for cash constraints; decide ultimately on NPV at WACC. Trade-off: safety of fast recovery vs strategic projects with distant flows.",
    flashcardFrontFr: "Délai de récupération",
    flashcardFrontEn: "Payback period",
    flashcardBackFr: "Temps pour que les flux cumulés couvrent l'investissement initial.",
    flashcardBackEn: "Time until cumulative flows cover initial investment.",
    exercisePromptFr:
      "Investissement 100 M FCFA, flux 30, 40, 50. Payback exact (année fractionnaire) ?",
    exercisePromptEn:
      "Investment 100M FCFA, flows 30, 40, 50. Exact payback (fractional year)?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : investissement 100 M FCFA, flux 40 M / an pendant 3 ans. Payback approximatif ?",
      promptEn:
        "Situation: investment 100M FCFA, flows 40M / year for 3 years. Approximate payback?",
      explanationCorrectFr:
        "Cumul 40, 80, 120 → entre 2 et 3 ans (≈ 2,5 ans).",
      explanationCorrectEn:
        "Cumulative 40, 80, 120 → between 2 and 3 years (≈ 2.5 years).",
      difficulty: 1,
      options: [
        opt("Entre 2 et 3 ans (≈ 2,5)", "Between 2 and 3 years (≈ 2.5)", true),
        opt(
          "1 an exact",
          "Exactly 1 year",
          false,
          "40 en année 1 ne couvre pas 100.",
          "40 in year 1 does not cover 100."
        ),
        opt(
          "Plus de 3 ans",
          "More than 3 years",
          false,
          "120 cumulé en année 3 couvre 100.",
          "120 cumulative in year 3 covers 100."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : Projet A payback 2,0 ans mais VAN ≈ 0 au WACC ; Projet B payback 4,5 ans mais VAN très positive. Capital non contraint. Que privilégier pédagogiquement ?",
        promptEn:
          "Situation: Project A payback 2.0 years but NPV ≈ 0 at WACC; Project B payback 4.5 years but strongly positive NPV. Capital unconstrained. Pedagogical priority?",
        explanationCorrectFr:
          "La VAN mesure la création de valeur ; le payback seul sous-estime B.",
        explanationCorrectEn:
          "NPV measures value creation; payback alone underrates B.",
        difficulty: 2,
        options: [
          opt("Projet B (VAN)", "Project B (NPV)", true),
          opt(
            "Projet A car payback plus court",
            "Project A because shorter payback",
            false,
            "Payback court avec VAN nulle n'ajoute pas de valeur.",
            "Short payback with zero NPV adds no value."
          ),
          opt(
            "Les deux à parts égales sans regarder la VAN",
            "Both equally without looking at NPV",
            false,
            "Sans contrainte de capital, la VAN guide le choix.",
            "Without capital rationing, NPV guides the choice."
          ),
        ],
      }),
    ],
  }),

  // ── M&A: purchase-price ───────────────────────────────────────────────────
  buildCfLesson({
    slug: "purchase-price",
    titleFr: "Prix d'acquisition",
    titleEn: "Purchase Price",
    descriptionFr:
      "Structurer le prix d'acquisition en M&A : cash, actions, dette et prime.",
    descriptionEn:
      "Structure M&A purchase price: cash, shares, debt, and premium.",
    moduleSlug: "investment-ma",
    sortOrder: 5,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-ma",
    learningObjective: "IDENTIFY",
    objectiveFr:
      "Identifier les composantes du prix (cash, actions, dette) et relier prime, synergies et création de valeur — au-delà du BPA.",
    objectiveEn:
      "Identify price components (cash, shares, debt) and link premium, synergies, and value creation — beyond EPS.",
    explanationFr:
      "Le prix d'acquisition est le transfert total pour le contrôle : cash, actions de l'acquéreur, assumption/refinancement de dette, earn-outs. Il se compare à la valeur standalone (DCF, multiples) ; la prime = prix − standalone. Chaîne M&A : Acquisition → Synergies → Financement → Accretion/Dilution BPA → Création de valeur. Point clé : une hausse de BPA (accrétion) ≠ création de valeur économique. On peut acheter trop cher, financer à bas coût, et voir le BPA monter tout en détruisant de la VAN si la prime dépasse la valeur actuelle des synergies. Interprétation : toujours croiser prix, synergies nettes, et structure de financement.",
    explanationEn:
      "Purchase price is the total transfer for control: cash, acquirer shares, debt assumption/refinancing, earn-outs. It compares to standalone value (DCF, multiples); premium = price − standalone. M&A chain: Acquisition → Synergies → Financing → EPS Accretion/Dilution → Value Creation. Key point: an EPS rise (accretion) ≠ economic value creation. You can overpay, finance cheaply, and watch EPS rise while destroying NPV if the premium exceeds the present value of synergies. Interpretation: always cross-check price, net synergies, and financing structure.",
    exampleFr:
      "Mini-cas TechScale (UEMOA) : EV standalone 80 Md FCFA. Industria offre 100 Md FCFA EV → prime 20 Md (25 %). Synergies coûts PV ≈ 12 Md seulement → surpaiement économique ≈ 8 Md malgré un BPA en hausse attendue (financement dette bon marché). Structure : 60 Md cash + 40 Md en actions. Dette nette cible 10 Md → equity cheque ≈ 90 Md. Variante EUR : standalone 80 M€, offre 100 M€, synergies PV 12 M€ — même logique.",
    exampleEn:
      "TechScale mini-case (UEMOA): standalone EV 80bn FCFA. Industria offers 100bn FCFA EV → premium 20bn (25%). Cost synergies PV ≈ 12bn only → economic overpay ≈ 8bn despite expected EPS accretion (cheap debt financing). Structure: 60bn cash + 40bn in shares. Target net debt 10bn → equity cheque ≈ 90bn. EUR variant: standalone €80M, offer €100M, synergies PV €12M — same logic.",
    practicalFr:
      "Décomposez une offre fictive en cash / actions / dette et calculez la prime vs standalone. Puis demandez : les synergies couvrent-elles la prime ? Arbitrage : payer plus cher en cash (certitude vendeur) vs plus d'actions (partage du risque, dilution).",
    practicalEn:
      "Break a fictional offer into cash / shares / debt and compute premium vs standalone. Then ask: do synergies cover the premium? Trade-off: pay more in cash (seller certainty) vs more shares (risk sharing, dilution).",
    mistakeFr:
      "Confondre EV offerte et cheque equity sans dette nette — ou célébrer l'accrétion de BPA sans tester si la prime est couverte par les synergies.",
    mistakeEn:
      "Confusing offered EV and equity cheque without net debt — or celebrating EPS accretion without testing whether synergies cover the premium.",
    takeawayFr:
      "Prix = transfert ; prime = excès vs standalone ; accrétion BPA ≠ preuve de valeur.",
    takeawayEn:
      "Price = transfer; premium = excess vs standalone; EPS accretion ≠ proof of value.",
    decisionFr:
      "Ne pas signer si la prime > PV des synergies prudentes, même si le modèle BPA est accrétif. Arbitrage : gagner le deal (prime haute) vs préserver la VAN (discipline de prix).",
    decisionEn:
      "Do not sign if premium > PV of prudent synergies, even if the EPS model is accretive. Trade-off: win the deal (high premium) vs preserve NPV (price discipline).",
    flashcardFrontFr: "Prime d'acquisition",
    flashcardFrontEn: "Acquisition premium",
    flashcardBackFr: "Prix − valeur standalone ; à couvrir par synergies (PV).",
    flashcardBackEn: "Price − standalone value; to be covered by synergies (PV).",
    exercisePromptFr:
      "Standalone 500 Md FCFA, offre 575 Md, dette nette 80 Md. Prime % ? Equity cheque ?",
    exercisePromptEn:
      "Standalone 500bn FCFA, offer 575bn, net debt 80bn. Premium %? Equity cheque?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : une acquisition relève le BPA de +8 % dès l'an 1, mais la prime payée (25 Md FCFA) dépasse la PV des synergies (15 Md). Que faut-il examiner en priorité ?",
      promptEn:
        "Situation: an acquisition lifts EPS +8% from year 1, but the premium paid (25bn FCFA) exceeds synergy PV (15bn). What should you examine first?",
      explanationCorrectFr:
        "Création / destruction de valeur économique (prime vs synergies) — l'accrétion de BPA peut masquer une surpaye financée à bas coût.",
      explanationCorrectEn:
        "Economic value creation/destruction (premium vs synergies) — EPS accretion can mask overpayment financed cheaply.",
      difficulty: 3,
      options: [
        opt(
          "Si la prime est couverte par la PV des synergies (valeur ≠ BPA)",
          "Whether premium is covered by synergy PV (value ≠ EPS)",
          true
        ),
        opt(
          "Uniquement le % d'accrétion de BPA",
          "Only the EPS accretion %",
          false,
          "Accrétion BPA ≠ création de valeur économique.",
          "EPS accretion ≠ economic value creation."
        ),
        opt(
          "Le seul fait que le cours a monté le jour de l'annonce",
          "Only that the share price rose on announcement day",
          false,
          "La réaction de marché courte n'équivaut pas à une analyse de valeur.",
          "A short market reaction is not a value analysis."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : EV offerte 95 M€, dette nette cible 10 M€, cash 60 M€ + actions 25 M€. Quel equity cheque ?",
        promptEn:
          "Situation: offered EV €95M, target net debt €10M, cash €60M + shares €25M. What equity cheque?",
        explanationCorrectFr:
          "Equity cheque = EV − dette nette = 95 − 10 = 85 M€ (égal à 60 + 25).",
        explanationCorrectEn:
          "Equity cheque = EV − net debt = 95 − 10 = €85M (equals 60 + 25).",
        difficulty: 2,
        options: [
          opt("85 M€", "€85M", true),
          opt(
            "95 M€",
            "€95M",
            false,
            "95 M€ est l'EV, pas le cheque equity.",
            "€95M is EV, not the equity cheque."
          ),
          opt(
            "60 M€",
            "€60M",
            false,
            "60 M€ n'est que la part cash.",
            "€60M is only the cash portion."
          ),
        ],
      }),
    ],
  }),

  // ── M&A: sources-uses ─────────────────────────────────────────────────────
  buildCfLesson({
    slug: "sources-uses",
    titleFr: "Sources et emplois",
    titleEn: "Sources and Uses",
    descriptionFr:
      "Construire et équilibrer un tableau sources & emplois en M&A.",
    descriptionEn:
      "Build and balance a sources and uses table in M&A.",
    moduleSlug: "investment-ma",
    sortOrder: 6,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-ma",
    learningObjective: "APPLY",
    objectiveFr:
      "Équilibrer sources = emplois et relier le financement à l'accrétion BPA et à la création de valeur.",
    objectiveEn:
      "Balance sources = uses and link financing to EPS accretion and value creation.",
    explanationFr:
      "Le tableau sources & emplois est la photo du financement d'une transaction. Emplois : equity cheque, refinancement de dette, frais, cash minimum. Sources : cash acquéreur, nouvelle dette, equity émis, rollover. Règle : total sources = total emplois. Chaîne : Acquisition (prix) → Synergies (justification) → Financement (sources) → Accretion/Dilution BPA → Création de valeur. Interprétation : une structure très endettée peut rendre le deal accrétif au BPA (intérêts vs bénéfice cible) tout en augmentant le risque et en détruisant de la valeur si le prix est excessif. Équilibrer le tableau ne valide pas la qualité économique du prix.",
    explanationEn:
      "The sources & uses table is the financing snapshot of a deal. Uses: equity cheque, debt refinancing, fees, minimum cash. Sources: acquirer cash, new debt, issued equity, rollover. Rule: total sources = total uses. Chain: Acquisition (price) → Synergies (justification) → Financing (sources) → EPS Accretion/Dilution → Value Creation. Interpretation: a highly leveraged structure can make the deal EPS-accretive (interest vs target earnings) while raising risk and destroying value if the price is excessive. Balancing the table does not validate the economic quality of the price.",
    exampleFr:
      "Mini-cas PharmaBuy (FCFA Md) : Emplois — equity cheque 420, refinancement 60, frais 25, cash cible 15 → total 520.\nSources — cash acquéreur 120, dette senior 250, mezz 50, actions nouvelles 100 → total 520.\nÉquilibre OK. Si frais +5, une source doit +5. Lecture valeur : même tableau équilibré, si prime > synergies PV, le BPA peut monter grâce à la dette senior à 6 % alors que la VAN du deal est négative — accrétion ≠ valeur.",
    exampleEn:
      "PharmaBuy mini-case (bn FCFA): Uses — equity cheque 420, refinancing 60, fees 25, target cash 15 → total 520.\nSources — acquirer cash 120, senior debt 250, mezz 50, new shares 100 → total 520.\nBalance OK. If fees +5, a source must +5. Value reading: even with a balanced table, if premium > synergy PV, EPS may rise via 6% senior debt while deal NPV is negative — accretion ≠ value.",
    practicalFr:
      "Emplois 300 (prix 250, frais 20, refinancement 30) — proposez trois sources qui équilibrent. Puis notez l'effet BPA si vous remplacez 50 d'equity par 50 de dette. Arbitrage : plus de dette (accrétion BPA, levier) vs plus d'equity (dilution, résilience).",
    practicalEn:
      "Uses 300 (price 250, fees 20, refinancing 30) — propose three balancing sources. Then note the EPS effect if you replace 50 of equity with 50 of debt. Trade-off: more debt (EPS accretion, leverage) vs more equity (dilution, resilience).",
    mistakeFr:
      "Oublier frais ou cash minimum — ou croire qu'un tableau équilibré prouve que le deal crée de la valeur.",
    mistakeEn:
      "Forgetting fees or minimum cash — or believing a balanced table proves the deal creates value.",
    takeawayFr:
      "Sources = emplois est nécessaire ; la création de valeur se joue sur prix, synergies et risque — pas sur le seul BPA.",
    takeawayEn:
      "Sources = uses is necessary; value creation turns on price, synergies, and risk — not EPS alone.",
    decisionFr:
      "Re-vérifier l'équilibre après chaque ajustement de prix/dette, puis stress-tester synergies et levier. Arbitrage : maximiser l'accrétion BPA via dette vs protéger la couverture des intérêts.",
    decisionEn:
      "Re-check balance after every price/debt tweak, then stress-test synergies and leverage. Trade-off: maximize EPS accretion via debt vs protect interest coverage.",
    flashcardFrontFr: "Sources et emplois",
    flashcardFrontEn: "Sources and uses",
    flashcardBackFr: "Tableau équilibré : fonds nécessaires = fonds disponibles.",
    flashcardBackEn: "Balanced table: required funds = available funds.",
    exercisePromptFr:
      "Emplois : prix 180, frais 12, refinancement 25. Sources : cash 50, dette 100. Quelle source manque (montant) ?",
    exercisePromptEn:
      "Uses: price 180, fees 12, refinancing 25. Sources: cash 50, debt 100. Which source is missing (amount)?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : le deal est 100 % équilibré en sources & emplois, le BPA monte de 6 %, mais la prime (18 M€) dépasse la PV des synergies (10 M€). Quelle conclusion pédagogique ?",
      promptEn:
        "Situation: the deal is 100% balanced in sources & uses, EPS rises 6%, but the premium (€18M) exceeds synergy PV (€10M). Pedagogical conclusion?",
      explanationCorrectFr:
        "Financement cohérent et BPA accrétif n'empêchent pas une destruction de valeur économique — examiner prime vs synergies.",
      explanationCorrectEn:
        "Coherent financing and accretive EPS do not prevent economic value destruction — examine premium vs synergies.",
      difficulty: 3,
      options: [
        opt(
          "Possible destruction de valeur malgré accrétion BPA",
          "Possible value destruction despite EPS accretion",
          true
        ),
        opt(
          "Le deal crée forcément de la valeur car sources = emplois",
          "The deal must create value because sources = uses",
          false,
          "L'équilibre du tableau ne juge pas le prix économique.",
          "Table balance does not judge economic price quality."
        ),
        opt(
          "Le BPA suffit comme preuve de création de valeur",
          "EPS alone proves value creation",
          false,
          "Accrétion BPA ≠ création de valeur.",
          "EPS accretion ≠ value creation."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : emplois totaux 480 Md FCFA. Sources actuelles : cash 100 + dette 280. Combien d'equity (actions) faut-il émettre pour équilibrer ?",
        promptEn:
          "Situation: total uses 480bn FCFA. Current sources: cash 100 + debt 280. How much equity (shares) to issue to balance?",
        explanationCorrectFr: "480 − 100 − 280 = 100 Md FCFA d'actions nouvelles.",
        explanationCorrectEn: "480 − 100 − 280 = 100bn FCFA of new shares.",
        difficulty: 2,
        options: [
          opt("100 Md FCFA", "100bn FCFA", true),
          opt(
            "480 Md FCFA",
            "480bn FCFA",
            false,
            "480 est le total emplois, pas le trou de financement.",
            "480 is total uses, not the funding gap."
          ),
          opt(
            "180 Md FCFA",
            "180bn FCFA",
            false,
            "100+280=380 ; il manque 100, pas 180.",
            "100+280=380; the gap is 100, not 180."
          ),
        ],
      }),
    ],
  }),

  // ── Advanced: roe-and-roa ─────────────────────────────────────────────────
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
      "Calculer ROA et ROE, expliquer l'effet de levier, et distinguer clairement ROE/ROA de ROIC.",
    objectiveEn:
      "Compute ROA and ROE, explain leverage, and clearly distinguish ROE/ROA from ROIC.",
    explanationFr:
      "ROA = Résultat net ÷ Actif total — efficacité globale des actifs. ROE = Résultat net ÷ Capitaux propres — rendement actionnaire. Avec de la dette, le ROE peut dépasser le ROA si le coût de la dette est inférieur au rendement des actifs (levier positif). Attention confusion fréquente : ROIC = NOPAT ÷ capital investi mesure la performance opérationnelle avant structure financière ; ROE mélange opérationnel et levier. Un ROE élevé avec ROIC < WACC peut détruire de la valeur économique tout en « flattant » les actionnaires sur le papier. Interprétation : lire ROA, ROE et ROIC ensemble.",
    explanationEn:
      "ROA = Net income ÷ Total assets — overall asset efficiency. ROE = Net income ÷ Equity — shareholder return. With debt, ROE can exceed ROA if debt cost is below asset return (positive leverage). Common confusion: ROIC = NOPAT ÷ invested capital measures operating performance before financing structure; ROE mixes operations and leverage. High ROE with ROIC < WACC can destroy economic value while “flattering” shareholders on paper. Interpretation: read ROA, ROE, and ROIC together.",
    exampleFr:
      "Cas RetailSahel : résultat net 12 Md FCFA, actifs 150 Md → ROA = 8 %. Capitaux propres 50 Md → ROE = 24 %. Dette nette 100 Md à coût 6 % : le levier amplifie le ROE. Mais NOPAT 14 Md / capital investi 120 Md → ROIC ≈ 11,7 %. Si WACC = 12 %, spread ≈ −0,3 pt → valeur économique fragile malgré un ROE « beau ». Variante EUR : NI 12 M€, actifs 150 M€, equity 50 M€ — mêmes ratios.",
    exampleEn:
      "RetailSahel case: net income 12bn FCFA, assets 150bn → ROA = 8%. Equity 50bn → ROE = 24%. Net debt 100bn at 6% cost: leverage amplifies ROE. But NOPAT 14bn / invested capital 120bn → ROIC ≈ 11.7%. If WACC = 12%, spread ≈ −0.3 pt → fragile economic value despite a “pretty” ROE. EUR variant: NI €12M, assets €150M, equity €50M — same ratios.",
    practicalFr:
      "Résultat net 6 Md FCFA, actifs 120 Md, equity 40 Md. ROA ? ROE ? Le ROE > ROA signale-t-il forcément un ROIC > WACC ? Arbitrage : booster le ROE via dette vs protéger ROIC et solvabilité.",
    practicalEn:
      "Net income 6bn FCFA, assets 120bn, equity 40bn. ROA? ROE? Does ROE > ROA necessarily mean ROIC > WACC? Trade-off: boost ROE via debt vs protect ROIC and solvency.",
    mistakeFr:
      "Célébrer un ROE élevé en le confondant avec le ROIC — ou ignorer qu'un levier excessif peut masquer une faible performance opérationnelle (ROA/ROIC).",
    mistakeEn:
      "Celebrating high ROE while confusing it with ROIC — or ignoring that excess leverage can mask weak operating performance (ROA/ROIC).",
    takeawayFr:
      "ROA = efficacité actifs ; ROE = rendement actionnaire (levier) ; ROIC = boussole opérationnelle vs WACC.",
    takeawayEn:
      "ROA = asset efficiency; ROE = shareholder return (leverage); ROIC = operating compass vs WACC.",
    decisionFr:
      "Si ROE monte seulement parce que la dette double, vérifier ROIC vs WACC et la couverture des intérêts avant de applaudir. Arbitrage : ROE cosmétique vs création de valeur économique.",
    decisionEn:
      "If ROE rises only because debt doubles, check ROIC vs WACC and interest coverage before celebrating. Trade-off: cosmetic ROE vs economic value creation.",
    flashcardFrontFr: "ROE vs ROA vs ROIC",
    flashcardFrontEn: "ROE vs ROA vs ROIC",
    flashcardBackFr: "ROE/ROA sur résultat net ; ROIC sur NOPAT / capital investi.",
    flashcardBackEn: "ROE/ROA on net income; ROIC on NOPAT / invested capital.",
    exercisePromptFr:
      "NI 10 Md, actifs 200 Md, equity 50 Md. ROA ? ROE ? Pourquoi l'écart n'équivaut pas à un jugement ROIC ?",
    exercisePromptEn:
      "NI 10bn, assets 200bn, equity 50bn. ROA? ROE? Why is the gap not a ROIC judgment?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : ROE 22 %, ROA 7 %, ROIC 9 %, WACC 11 %. Quelle lecture est la plus juste ?",
      promptEn:
        "Situation: ROE 22%, ROA 7%, ROIC 9%, WACC 11%. Fairest reading?",
      explanationCorrectFr:
        "ROE élevé porté par le levier ; ROIC < WACC → destruction économique possible malgré un ROE attractif.",
      explanationCorrectEn:
        "High ROE driven by leverage; ROIC < WACC → possible economic destruction despite attractive ROE.",
      difficulty: 3,
      options: [
        opt(
          "Méfiance : ROE flatté par le levier, ROIC < WACC",
          "Caution: ROE flattered by leverage, ROIC < WACC",
          true
        ),
        opt(
          "Excellent : ROE 22 % prouve la création de valeur",
          "Excellent: 22% ROE proves value creation",
          false,
          "Le ROE n'est pas le ROIC et ignore le coût du capital investi.",
          "ROE is not ROIC and ignores the cost of invested capital."
        ),
        opt(
          "ROA 7 % = ROIC, donc tout va bien",
          "ROA 7% = ROIC, so all is fine",
          false,
          "ROA ≠ ROIC : numérateurs et dénominateurs diffèrent.",
          "ROA ≠ ROIC: numerators and denominators differ."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : NI 9 Md FCFA, actifs 150 Md, equity 45 Md. Quel est le ROE ?",
        promptEn:
          "Situation: NI 9bn FCFA, assets 150bn, equity 45bn. What is ROE?",
        explanationCorrectFr: "ROE = 9 ÷ 45 = 20 %. (ROA = 9 ÷ 150 = 6 %.)",
        explanationCorrectEn: "ROE = 9 ÷ 45 = 20%. (ROA = 9 ÷ 150 = 6%.)",
        difficulty: 2,
        options: [
          opt("20 %", "20%", true),
          opt(
            "6 %",
            "6%",
            false,
            "6 % est le ROA (9 ÷ 150).",
            "6% is ROA (9 ÷ 150)."
          ),
          opt(
            "15 %",
            "15%",
            false,
            "Mauvais dénominateur — utilisez les capitaux propres.",
            "Wrong denominator — use equity."
          ),
        ],
      }),
    ],
  }),

  // ── Advanced: economic-profit-basics ──────────────────────────────────────
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
      "Calculer le profit économique et relier croissance → investissement → capital employé → ROIC → valeur.",
    objectiveEn:
      "Compute economic profit and link growth → investment → capital employed → ROIC → value.",
    explanationFr:
      "Le profit économique (EVA pédagogique) répond : après avoir rémunéré tout le capital au coût du marché, reste-t-il quelque chose ? EP = NOPAT − (Capital investi × WACC) = Capital investi × (ROIC − WACC). Chaîne critique : la croissance exige souvent plus d'investissement → le capital employé monte → si le ROIC marginal < WACC, l'EP baisse même si le CA et le bénéfice comptable montent. Interprétation : un bénéfice comptable positif peut coexister avec un EP négatif. C'est un outil de pilotage, pas une norme comptable universelle.",
    explanationEn:
      "Economic profit (pedagogical EVA) asks: after paying all capital at market cost, is anything left? EP = NOPAT − (Invested capital × WACC) = Invested capital × (ROIC − WACC). Critical chain: growth often requires more investment → capital employed rises → if marginal ROIC < WACC, EP falls even as revenue and accounting profit rise. Interpretation: positive accounting profit can coexist with negative EP. It is a management tool, not a universal accounting standard.",
    exampleFr:
      "Base : NOPAT 18 Md FCFA, capital investi 150 Md, WACC 10 % → charge = 15 Md → EP = 3 Md. Vérif : ROIC = 12 %, spread 2 pts → 150 × 2 % = 3 Md.\nCroissance : +20 Md d'investissement pour +1,2 Md de NOPAT → ROIC marginal = 6 % < WACC 10 % → Δ EP = 1,2 − 20×10 % = −0,8 Md. Le CA monte, l'EP total passe à 2,2 Md — croissance qui détruit du profit économique. Variante EUR : mêmes chiffres en M€.",
    exampleEn:
      "Base: NOPAT 18bn FCFA, invested capital 150bn, WACC 10% → charge = 15bn → EP = 3bn. Check: ROIC = 12%, spread 2 pts → 150 × 2% = 3bn.\nGrowth: +20bn investment for +1.2bn NOPAT → marginal ROIC = 6% < WACC 10% → Δ EP = 1.2 − 20×10% = −0.8bn. Revenue rises, total EP falls to 2.2bn — growth that destroys economic profit. EUR variant: same figures in €M.",
    practicalFr:
      "NOPAT 11 Md, capital 100 Md, WACC 12 %. EP par les deux formules. Puis testez +30 Md de capital pour +2 Md de NOPAT : Δ EP ? Arbitrage : croître vite vs protéger le spread ROIC − WACC.",
    practicalEn:
      "NOPAT 11bn, capital 100bn, WACC 12%. EP with both formulas. Then test +30bn capital for +2bn NOPAT: Δ EP? Trade-off: grow fast vs protect the ROIC − WACC spread.",
    mistakeFr:
      "Confondre bénéfice comptable et profit économique — ou financer toute croissance sans vérifier le ROIC marginal.",
    mistakeEn:
      "Confusing accounting profit and economic profit — or funding all growth without checking marginal ROIC.",
    takeawayFr:
      "Croissance → investissement → capital → ROIC vs WACC → EP : seule la croissance à ROIC > WACC crée du profit économique.",
    takeawayEn:
      "Growth → investment → capital → ROIC vs WACC → EP: only growth with ROIC > WACC creates economic profit.",
    decisionFr:
      "Allouer le capital aux projets dont l'EP attendu est positif. Arbitrage : parts de marché (croissance) vs EP (discipline de rendement).",
    decisionEn:
      "Allocate capital to projects with expected positive EP. Trade-off: market share (growth) vs EP (return discipline).",
    flashcardFrontFr: "Profit économique",
    flashcardFrontEn: "Economic profit",
    flashcardBackFr: "NOPAT − (Capital investi × WACC) = IC × (ROIC − WACC).",
    flashcardBackEn: "NOPAT − (Invested capital × WACC) = IC × (ROIC − WACC).",
    exercisePromptFr:
      "NOPAT 7 Md, capital 70 Md, WACC 9 %. EP ? ROIC implicite ? Si +10 Md de capital à ROIC 7 %, Δ EP ?",
    exercisePromptEn:
      "NOPAT 7bn, capital 70bn, WACC 9%. EP? Implicit ROIC? If +10bn capital at 7% ROIC, Δ EP?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : une division croît de 15 %/an. NOPAT passe de 20 à 23 Md FCFA, mais le capital investi passe de 200 à 250 Md. WACC = 10 %. L'EP…",
      promptEn:
        "Situation: a division grows 15%/year. NOPAT rises from 20 to 23bn FCFA, but invested capital rises from 200 to 250bn. WACC = 10%. EP…",
      explanationCorrectFr:
        "EP avant = 20 − 20 = 0. EP après = 23 − 25 = −2 Md. La croissance a détruit de l'EP (ROIC 9,2 % < WACC).",
      explanationCorrectEn:
        "EP before = 20 − 20 = 0. EP after = 23 − 25 = −2bn. Growth destroyed EP (ROIC 9.2% < WACC).",
      difficulty: 3,
      options: [
        opt("Baisse (destruction malgré la croissance)", "Falls (destruction despite growth)", true),
        opt(
          "Hausse forcément car le NOPAT monte",
          "Must rise because NOPAT rises",
          false,
          "Le capital employé a monté plus vite que le NOPAT.",
          "Capital employed rose faster than NOPAT."
        ),
        opt(
          "Inchangé car WACC fixe",
          "Unchanged because WACC is fixed",
          false,
          "WACC fixe n'empêche pas l'EP de bouger avec NOPAT et IC.",
          "Fixed WACC does not stop EP moving with NOPAT and IC."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "NOPAT 20 Md, capital 200 Md, WACC 8 %. Profit économique ?",
        promptEn:
          "NOPAT 20bn, capital 200bn, WACC 8%. Economic profit?",
        explanationCorrectFr: "Charge = 16 Md ; EP = 20 − 16 = 4 Md.",
        explanationCorrectEn: "Charge = 16bn; EP = 20 − 16 = 4bn.",
        difficulty: 2,
        options: [
          opt("4 Md", "4bn", true),
          opt(
            "20 Md",
            "20bn",
            false,
            "20 Md est le NOPAT avant coût du capital.",
            "20bn is NOPAT before capital cost."
          ),
          opt(
            "−4 Md",
            "−4bn",
            false,
            "ROIC 10 % > WACC 8 % → EP positif.",
            "ROIC 10% > WACC 8% → positive EP."
          ),
        ],
      }),
    ],
  }),

  // ── Advanced: working-capital-optimization ────────────────────────────────
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
      "Quantifier le cash libéré par une baisse du CCC et prioriser DSO/DIO/DPO sans casser l'opérationnel.",
    objectiveEn:
      "Quantify cash released by cutting CCC and prioritize DSO/DIO/DPO without breaking operations.",
    explanationFr:
      "BFR = Stocks + Créances − Dettes fournisseurs. Optimiser = réduire le cash immobilisé : baisser DSO (encaisser plus vite), baisser DIO (moins de stocks), monter prudemment DPO (payer un peu plus tard). Cash libéré ≈ Δ jours × CA quotidien (approximation pédagogique). Interprétation : chaque jour de CCC a un prix en liquidité et peut financer du désendettement ou du CAPEX à ROIC élevé. Mais pousser trop loin crée ruptures, tensions fournisseurs et perte de CA — l'optimisation durable bat le one-shot agressif.",
    explanationEn:
      "Working capital = Inventory + Receivables − Payables. Optimize = reduce tied-up cash: lower DSO (collect faster), lower DIO (less inventory), prudently raise DPO (pay a bit later). Cash released ≈ Δ days × daily revenue (pedagogical approximation). Interpretation: each CCC day has a liquidity price and can fund deleveraging or high-ROIC CAPEX. But pushing too far creates stockouts, supplier strain, and lost sales — durable optimization beats aggressive one-shots.",
    exampleFr:
      "CA annuel 365 Md FCFA → 1 jour ≈ 1 Md FCFA. DSO 55 → 47 (−8 j) → cash ≈ 8 Md. DIO 40 → 36 (−4 j) sur coût des ventes 219 Md (0,6 Md/j) → ≈ 2,4 Md. DPO 30 → 34 (+4 j) sur achats 219 Md → ≈ 2,4 Md. Total libéré ≈ 12,8 Md — de quoi rembourser de la dette ou financer un projet. Variante EUR : CA 365 M€ → 1 jour ≈ 1 M€, mêmes jours.",
    exampleEn:
      "Annual revenue 365bn FCFA → 1 day ≈ 1bn FCFA. DSO 55 → 47 (−8 days) → cash ≈ 8bn. DIO 40 → 36 (−4 days) on 219bn COGS (0.6bn/day) → ≈ 2.4bn. DPO 30 → 34 (+4 days) on 219bn purchases → ≈ 2.4bn. Total released ≈ 12.8bn — enough to repay debt or fund a project. EUR variant: revenue €365M → 1 day ≈ €1M, same days.",
    practicalFr:
      "CA 200 Md FCFA, CCC 75 j, objectif −10 j. Cash libéré approx. ? Quel levier (DSO/DIO/DPO) en premier si les clients stratégiques sont sensibles ? Arbitrage : cash libéré vs risque commercial / supply chain.",
    practicalEn:
      "Revenue 200bn FCFA, CCC 75 days, target −10 days. Approx. cash released? Which lever (DSO/DIO/DPO) first if strategic clients are sensitive? Trade-off: cash released vs commercial / supply-chain risk.",
    mistakeFr:
      "Couper les stocks jusqu'aux ruptures qui font perdre plus de marge que le cash gagné — ou allonger DPO au point de perdre les meilleurs fournisseurs.",
    mistakeEn:
      "Cutting inventory to stockouts that lose more margin than cash gained — or stretching DPO until the best suppliers leave.",
    takeawayFr:
      "Chaque jour de CCC a un prix en cash ; optimisez avec discipline opérationnelle.",
    takeawayEn:
      "Each CCC day has a cash price; optimize with operational discipline.",
    decisionFr:
      "Prioriser le levier au meilleur ratio cash libéré / risque. Arbitrage : accélérer le DSO (relation client) vs étendre le DPO (relation fournisseur) vs réduire DIO (service niveau).",
    decisionEn:
      "Prioritize the lever with the best released-cash / risk ratio. Trade-off: speed DSO (client relationship) vs extend DPO (supplier relationship) vs cut DIO (service level).",
    flashcardFrontFr: "Cash libéré (BFR)",
    flashcardFrontEn: "Cash released (WC)",
    flashcardBackFr: "≈ jours gagnés × flux quotidien pertinent (CA ou COGS).",
    flashcardBackEn: "≈ days gained × relevant daily flow (revenue or COGS).",
    exercisePromptFr:
      "CA 150 Md FCFA, DSO 55 → 48 j. Cash libéré ? Quels risques clients ?",
    exercisePromptEn:
      "Revenue 150bn FCFA, DSO 55 → 48 days. Cash released? What client-side risks?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : CA annuel 146 Md FCFA. Réduire le DSO de 7 jours libère environ combien de cash ?",
      promptEn:
        "Situation: annual revenue 146bn FCFA. Cutting DSO by 7 days releases roughly how much cash?",
      explanationCorrectFr: "146 ÷ 365 × 7 ≈ 2,8 Md FCFA.",
      explanationCorrectEn: "146 ÷ 365 × 7 ≈ 2.8bn FCFA.",
      difficulty: 2,
      options: [
        opt("≈ 2,8 Md FCFA", "≈ 2.8bn FCFA", true),
        opt(
          "≈ 14,6 Md FCFA",
          "≈ 14.6bn FCFA",
          false,
          "14,6 Md ≈ 10 % du CA, pas 7 jours.",
          "14.6bn ≈ 10% of revenue, not 7 days."
        ),
        opt(
          "≈ 0,4 Md FCFA",
          "≈ 0.4bn FCFA",
          false,
          "Recalculez : CA quotidien × 7.",
          "Recalculate: daily revenue × 7."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : le CFO veut +10 j de DPO pour libérer 5 Md FCFA, mais le fournisseur critique menace de passer en paiement d'avance. Que faire ?",
        promptEn:
          "Situation: the CFO wants +10 days DPO to release 5bn FCFA, but a critical supplier threatens to switch to advance payment. What to do?",
        explanationCorrectFr:
          "Arbitrer : risque supply > cash one-shot — préférer DSO/DIO ou négocier un DPO plus modeste.",
        explanationCorrectEn:
          "Trade off: supply risk > one-shot cash — prefer DSO/DIO or negotiate a smaller DPO stretch.",
        difficulty: 2,
        options: [
          opt(
            "Réduire l'ambition DPO et cibler DSO/DIO d'abord",
            "Scale back DPO ambition and target DSO/DIO first",
            true
          ),
          opt(
            "Imposer +10 j quoi qu'il arrive",
            "Impose +10 days no matter what",
            false,
            "Perdre le fournisseur peut coûter plus que 5 Md.",
            "Losing the supplier can cost more than 5bn."
          ),
          opt(
            "Ignorer le BFR et lever de la dette chère",
            "Ignore WC and raise expensive debt",
            false,
            "Le BFR est souvent la source de cash la moins chère.",
            "WC is often the cheapest cash source."
          ),
        ],
      }),
    ],
  }),

  // ── Advanced: fcf-conversion ──────────────────────────────────────────────
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
      "Calculer le FCF et le ratio de conversion, puis diagnostiquer BFR/CAPEX quand le net « ment ».",
    objectiveEn:
      "Compute FCF and conversion ratio, then diagnose WC/CAPEX when net income “lies.”",
    explanationFr:
      "FCF pédagogique ≈ CFO − CAPEX, ou pont : Résultat net + amortissements ± Δ BFR − CAPEX. Le taux de conversion FCF / résultat net mesure combien de bénéfice devient cash disponible pour dette, dividendes ou rachats. Interprétation : un ratio durablement < 70–80 % sans plan d'investissement clair signale hausse de BFR, CAPEX lourd, ou qualité de résultat douteuse. Lien valeur : les multiples et DCF reposent sur du cash, pas sur le seul résultat net. Une accrétion de BPA post-acquisition avec FCF qui s'effondre est un signal d'alerte (BFR d'intégration, CAPEX, intérêts).",
    explanationEn:
      "Pedagogical FCF ≈ CFO − CAPEX, or bridge: Net income + depreciation ± Δ WC − CAPEX. FCF / net income conversion measures how much profit becomes cash available for debt, dividends, or buybacks. Interpretation: a durably < 70–80% ratio without a clear investment plan signals rising WC, heavy CAPEX, or dubious earnings quality. Value link: multiples and DCF rest on cash, not net income alone. Post-deal EPS accretion with collapsing FCF is a warning (integration WC, CAPEX, interest).",
    exampleFr:
      "Résultat net 40 Md FCFA, amortissements 12 Md, Δ BFR +8 Md (consomme du cash), CAPEX 20 Md.\nFCF ≈ 40 + 12 − 8 − 20 = 24 Md. Conversion = 24 / 40 = 60 %.\nSi l'an suivant le net monte à 45 Md mais Δ BFR +15 et CAPEX 25 → FCF = 45 + 12 − 15 − 25 = 17 Md (conversion 38 %) — bénéfice en hausse, cash en baisse. Variante EUR : 40/12/8/20 M€ → FCF 24 M€.",
    exampleEn:
      "Net income 40bn FCFA, depreciation 12bn, Δ WC +8bn (consumes cash), CAPEX 20bn.\nFCF ≈ 40 + 12 − 8 − 20 = 24bn. Conversion = 24 / 40 = 60%.\nIf next year net rises to 45bn but Δ WC +15 and CAPEX 25 → FCF = 45 + 12 − 15 − 25 = 17bn (conversion 38%) — earnings up, cash down. EUR variant: 40/12/8/20 €M → FCF €24M.",
    practicalFr:
      "NI 22 Md, amort. 6, Δ BFR −3 (libère), CAPEX 12. FCF et conversion ? Arbitrage : investir (CAPEX, conversion basse temporaire) vs maximiser le FCF court terme.",
    practicalEn:
      "NI 22bn, dep. 6, Δ WC −3 (releases), CAPEX 12. FCF and conversion? Trade-off: invest (CAPEX, temporarily low conversion) vs maximize short-term FCF.",
    mistakeFr:
      "Valoriser sur le résultat net (ou le BPA post-deal) sans vérifier si le FCF suit — le cash paie dette et actionnaires.",
    mistakeEn:
      "Valuing on net income (or post-deal EPS) without checking whether FCF follows — cash pays debt and shareholders.",
    takeawayFr:
      "Conversion FCF = test de qualité des bénéfices ; investiguer BFR et CAPEX si l'écart persiste.",
    takeawayEn:
      "FCF conversion = earnings-quality test; investigate WC and CAPEX if the gap persists.",
    decisionFr:
      "Exiger un plan d'action si la conversion reste < 70 % sans justification d'investissement créateur de valeur (ROIC > WACC). Arbitrage : croissance CAPEX vs cash disponible pour désendetter.",
    decisionEn:
      "Require an action plan if conversion stays < 70% without a value-creating investment case (ROIC > WACC). Trade-off: CAPEX growth vs cash available to delever.",
    flashcardFrontFr: "FCF (pont pédagogique)",
    flashcardFrontEn: "FCF (pedagogical bridge)",
    flashcardBackFr: "NI + amort. − Δ BFR − CAPEX (signe BFR : hausse = cash out).",
    flashcardBackEn: "NI + dep. − Δ WC − CAPEX (WC sign: rise = cash out).",
    exercisePromptFr:
      "NI 40, amort. 12, Δ BFR +5, CAPEX 20 (Md FCFA). FCF ? Conversion ?",
    exercisePromptEn:
      "NI 40, dep. 12, Δ WC +5, CAPEX 20 (bn FCFA). FCF? Conversion?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : NI 25 Md FCFA, amortissements 8, Δ BFR −2, CAPEX 10. FCF approximatif ?",
      promptEn:
        "Situation: NI 25bn FCFA, depreciation 8, Δ WC −2, CAPEX 10. Approximate FCF?",
      explanationCorrectFr:
        "FCF ≈ 25 + 8 + 2 − 10 = 25 Md (Δ BFR négatif libère du cash).",
      explanationCorrectEn:
        "FCF ≈ 25 + 8 + 2 − 10 = 25bn (negative Δ WC releases cash).",
      difficulty: 2,
      options: [
        opt("25 Md FCFA", "25bn FCFA", true),
        opt(
          "21 Md FCFA",
          "21bn FCFA",
          false,
          "N'oubliez pas que Δ BFR négatif ajoute du cash.",
          "Remember negative Δ WC adds cash."
        ),
        opt(
          "15 Md FCFA",
          "15bn FCFA",
          false,
          "15 omet amortissement et/ou BFR.",
          "15 omits depreciation and/or WC."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : après une acquisition, le BPA monte de 10 % mais la conversion FCF tombe de 85 % à 40 % à cause du BFR d'intégration. Que conclure ?",
        promptEn:
          "Situation: after an acquisition, EPS rises 10% but FCF conversion falls from 85% to 40% due to integration WC. Conclusion?",
        explanationCorrectFr:
          "Qualité de cash dégradée — l'accrétion BPA ne suffit pas ; analyser BFR, CAPEX et valeur du deal.",
        explanationCorrectEn:
          "Cash quality worsened — EPS accretion is not enough; analyze WC, CAPEX, and deal value.",
        difficulty: 3,
        options: [
          opt(
            "Alerte qualité de cash : BPA ≠ FCF",
            "Cash-quality alert: EPS ≠ FCF",
            true
          ),
          opt(
            "Succès total car le BPA est accrétif",
            "Total success because EPS is accretive",
            false,
            "Accrétion BPA avec FCF faible est un signal d'alerte.",
            "EPS accretion with weak FCF is a warning signal."
          ),
          opt(
            "Ignorer le FCF pendant 5 ans",
            "Ignore FCF for 5 years",
            false,
            "Le FCF finance dette et intégration — à surveiller tôt.",
            "FCF funds debt and integration — monitor early."
          ),
        ],
      }),
    ],
  }),

  // ── Advanced: deleveraging-basics ─────────────────────────────────────────
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
      "Décider quand désendetter via levier, couverture des intérêts et FCF disponible — en reliant dette, Rd et WACC.",
    objectiveEn:
      "Decide when to delever via leverage, interest coverage, and available FCF — linking debt, Rd, and WACC.",
    explanationFr:
      "Désendetter = réduire la dette nette pour améliorer solvabilité et parfois le WACC (moins de risque → Rd potentiellement plus bas). Ratios : Dette nette / EBITDA (levier), couverture = EBIT ÷ intérêts. Cash : FCF, cessions, ou equity (dilution). Chaîne : Dette → Levier → Cost of Debt → WACC. Interprétation : en taux élevés ou cash volatil, désendetter peut primer même si le ROE baisse court terme. À l'inverse, rembourser trop vite au détriment du BFR ou d'un CAPEX à ROIC élevé détruit de la valeur. Décision = allouer le FCF excédentaire selon levier vs opportunités.",
    explanationEn:
      "Deleveraging = reduce net debt to improve solvency and sometimes WACC (less risk → potentially lower Rd). Ratios: Net debt / EBITDA (leverage), coverage = EBIT ÷ interest. Cash: FCF, disposals, or equity (dilution). Chain: Debt → Leverage → Cost of Debt → WACC. Interpretation: in high rates or volatile cash, delevering may come first even if ROE falls short term. Conversely, repaying too fast at the expense of WC or high-ROIC CAPEX destroys value. Decision = allocate excess FCF by leverage vs opportunities.",
    exampleFr:
      "Dette nette 200 Md FCFA, EBITDA 50 Md → levier 4,0×. Cible 3,0× → dette 150 Md → rembourser 50 Md sur 2 ans via FCF 30 Md/an + cession 20 Md. Couverture : EBIT 45, intérêts 15 → 3,0×. Si le spread bancaire baisse de 100 pb après désendettement, Rd diminue et le WACC peut s'améliorer — boucle vertueuse Dette → Rd → WACC. Variante EUR : 200/50 M€ → même 4,0×.",
    exampleEn:
      "Net debt 200bn FCFA, EBITDA 50bn → leverage 4.0×. Target 3.0× → debt 150bn → repay 50bn over 2 years via FCF 30bn/year + disposal 20bn. Coverage: EBIT 45, interest 15 → 3.0×. If the bank spread falls 100 bps after delevering, Rd drops and WACC may improve — virtuous Debt → Rd → WACC loop. EUR variant: 200/50 €M → same 4.0×.",
    practicalFr:
      "Dette nette 120 Md, EBITDA 40, intérêts 8, EBIT 35. Levier ? Couverture ? Faut-il désendetter avant un CAPEX ROIC 18 % ? Arbitrage : résilience (levier) vs croissance rentable.",
    practicalEn:
      "Net debt 120bn, EBITDA 40, interest 8, EBIT 35. Leverage? Coverage? Delever before an 18% ROIC CAPEX? Trade-off: resilience (leverage) vs profitable growth.",
    mistakeFr:
      "Rembourser la dette en asséchant le BFR et les investissements critiques — levier en baisse, liquidité opérationnelle en danger.",
    mistakeEn:
      "Repaying debt by draining WC and critical investment — leverage down, operating liquidity at risk.",
    takeawayFr:
      "Désendetter renforce la résilience ; ciblez un levier compatible avec la volatilité du FCF et le Rd.",
    takeawayEn:
      "Deleveraging strengthens resilience; target leverage compatible with FCF volatility and Rd.",
    decisionFr:
      "Allouer le FCF excédentaire au remboursement si levier > cible et couverture tendue ; sinon financer d'abord les projets ROIC > WACC. Arbitrage : ROE/levier vs sécurité et coût de la dette.",
    decisionEn:
      "Allocate excess FCF to repayment if leverage > target and coverage is tight; otherwise fund ROIC > WACC projects first. Trade-off: ROE/leverage vs safety and cost of debt.",
    flashcardFrontFr: "Dette nette / EBITDA",
    flashcardFrontEn: "Net debt / EBITDA",
    flashcardBackFr: "Ratio de levier — plus bas = moins de risque financier (souvent Rd ↓).",
    flashcardBackEn: "Leverage ratio — lower = less financial risk (often Rd ↓).",
    exercisePromptFr:
      "Levier 3,5×, EBITDA 60 Md, cible 2,5×. Dette à rembourser ?",
    exercisePromptEn:
      "Leverage 3.5×, EBITDA 60bn, target 2.5×. Debt to repay?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : EBIT 28 Md FCFA, intérêts 7 Md. Couverture des intérêts ?",
      promptEn:
        "Situation: EBIT 28bn FCFA, interest 7bn. Interest coverage?",
      explanationCorrectFr: "28 ÷ 7 = 4,0×.",
      explanationCorrectEn: "28 ÷ 7 = 4.0×.",
      difficulty: 2,
      options: [
        opt("4,0×", "4.0×", true),
        opt(
          "3,0×",
          "3.0×",
          false,
          "28 ÷ 7 = 4, pas 3.",
          "28 ÷ 7 = 4, not 3."
        ),
        opt(
          "0,25×",
          "0.25×",
          false,
          "C'est l'inverse (intérêts ÷ EBIT).",
          "That is the inverse (interest ÷ EBIT)."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : levier 4,2× (cible 3,0×), couverture 1,6×, mais un projet CAPEX offre ROIC 16 % pour WACC 10 %. FCF limité. Priorité pédagogique ?",
        promptEn:
          "Situation: leverage 4.2× (target 3.0×), coverage 1.6×, but a CAPEX project offers 16% ROIC vs 10% WACC. Limited FCF. Pedagogical priority?",
        explanationCorrectFr:
          "Couverture tendue et levier hors cible → désendetter / sécuriser d'abord, puis financer le CAPEX (ou le phaser).",
        explanationCorrectEn:
          "Tight coverage and off-target leverage → delever / secure first, then fund CAPEX (or phase it).",
        difficulty: 3,
        options: [
          opt(
            "Sécuriser levier/couverture avant d'engager tout le FCF en CAPEX",
            "Secure leverage/coverage before committing all FCF to CAPEX",
            true
          ),
          opt(
            "Tout le FCF au CAPEX car ROIC > WACC, ignorer le levier",
            "All FCF to CAPEX because ROIC > WACC, ignore leverage",
            false,
            "Un ROIC attractif ne protège pas d'une crise de couverture.",
            "Attractive ROIC does not protect from a coverage crisis."
          ),
          opt(
            "Distribuer un dividende exceptionnel",
            "Pay a special dividend",
            false,
            "Hors cible de levier : le cash doit renforcer le bilan.",
            "Off leverage target: cash should strengthen the balance sheet."
          ),
        ],
      }),
    ],
  }),
];
