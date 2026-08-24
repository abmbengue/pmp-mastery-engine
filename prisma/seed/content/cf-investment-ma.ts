/**
 * Corporate Finance — Investment decisions & M&A expansion module.
 * Module slug: investment-ma
 * Educational only — not professional valuation or investment advice.
 */

import { buildCfLesson, opt, q } from "./cf-factory";
import type { CompactLesson } from "./compact";

export const CF_INVESTMENT_MA_LESSONS: CompactLesson[] = [
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
      "Décrire le cycle du budget d'investissement et distinguer flux de trésorerie pertinents des montants comptables.",
    objectiveEn:
      "Describe the capital budgeting cycle and distinguish relevant cash flows from accounting amounts.",
    explanationFr:
      "Le budget d'investissement (capital budgeting) est le processus par lequel une entreprise choisit des projets qui mobilisent du capital sur plusieurs années : nouvelle usine, logiciel, acquisition d'actifs, R&D. L'objectif pédagogique est de maximiser la valeur pour les actionnaires en acceptant les projets dont le rendement ajusté du risque excède le coût du capital. Les décisions reposent sur des flux de trésorerie incrementaux (cash in/out), pas sur le résultat comptable seul : amortissements, charges non cash et effets de change doivent être traités avec discernement. Le cycle typique : idée → estimation des flux → analyse (NPV, IRR, payback) → approbation → suivi post-investissement.",
    explanationEn:
      "Capital budgeting is how a firm chooses multi-year capital projects: plants, software, asset purchases, R&D. The pedagogical goal is maximizing shareholder value by accepting projects whose risk-adjusted return exceeds the cost of capital. Decisions rely on incremental cash flows (cash in/out), not accounting profit alone: depreciation, non-cash charges, and FX effects must be handled carefully. Typical cycle: idea → cash-flow estimate → analysis (NPV, IRR, payback) → approval → post-investment tracking.",
    exampleFr:
      "Mini-cas usine : investissement initial 500 (CAPEX + mise en service). Flux d'exploitation attendus +120 / an sur 5 ans. Amortissement comptable 100 / an n'est pas un flux de trésorerie — on utilise +120 cash opérationnel net d'impôts simplifié. Valeur résiduelle estimée 80 en année 5 (vente d'équipements).",
    exampleEn:
      "Plant mini-case: initial investment 500 (CAPEX + commissioning). Expected operating cash flows +120 / year for 5 years. Accounting depreciation 100 / year is not a cash flow — we use +120 operating cash net of taxes (simplified). Estimated residual value 80 in year 5 (equipment sale).",
    practicalFr:
      "Pour un projet que vous observez (ou inventez), listez : (1) investissement initial, (2) trois flux annuels estimés, (3) un flux non pertinent comptable à exclure.",
    practicalEn:
      "For a project you observe (or invent), list: (1) initial investment, (2) three annual estimated flows, (3) one accounting item to exclude.",
    mistakeFr:
      "Décider sur la base du résultat net comptable sans retraduire en flux de trésorerie incrementaux.",
    mistakeEn:
      "Deciding on net accounting profit without translating to incremental cash flows.",
    takeawayFr:
      "Budget d'investissement = flux de trésorerie incrementaux comparés au coût du capital.",
    takeawayEn:
      "Capital budgeting = incremental cash flows compared to the cost of capital.",
    decisionFr:
      "Avant d'ouvrir un modèle NPV : confirmer que chaque ligne est un vrai flux de cash, pas une charge comptable.",
    decisionEn:
      "Before opening an NPV model: confirm each line is real cash, not an accounting charge.",
    flashcardFrontFr: "Budget d'investissement",
    flashcardFrontEn: "Capital budgeting",
    flashcardBackFr: "Processus de sélection des projets d'investissement à long terme.",
    flashcardBackEn: "Process of selecting long-term investment projects.",
    exercisePromptFr:
      "Projet logiciel : licence 40, mise en service 10, gains annuels estimés 25 (cash) sur 4 ans. Quel montant est l'investissement initial ? Quel poste comptable exclureiez-vous du flux ?",
    exercisePromptEn:
      "Software project: license 40, implementation 10, estimated annual gains 25 (cash) over 4 years. What is initial investment? Which accounting item would you exclude from the flow?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "En budget d'investissement, on privilégie typiquement :",
      promptEn: "In capital budgeting, we typically prioritize:",
      explanationCorrectFr:
        "Les flux de trésorerie incrementaux reflètent l'impact économique réel du projet.",
      explanationCorrectEn:
        "Incremental cash flows reflect the project's true economic impact.",
      difficulty: 1,
      options: [
        opt("Les flux de trésorerie incrementaux", "Incremental cash flows", true),
        opt("Le résultat net comptable seul", "Net accounting profit alone", false, "Le résultat inclut des éléments non cash.", "Profit includes non-cash items."),
        opt("Le chiffre d'affaires total de l'entreprise", "Total company revenue", false, "Le CA global ne mesure pas un projet spécifique.", "Total revenue does not measure one project."),
      ],
    }),
  }),

  buildCfLesson({
    slug: "npv-basics",
    titleFr: "Bases de la VAN (NPV)",
    titleEn: "NPV Basics",
    descriptionFr:
      "Calculer et interpréter la valeur actuelle nette (VAN / NPV) avec un exemple chiffré simple.",
    descriptionEn:
      "Compute and interpret net present value (NPV) with a simple numeric example.",
    moduleSlug: "investment-ma",
    sortOrder: 1,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-investment",
    learningObjective: "APPLY",
    objectiveFr:
      "Calculer une VAN simple sur deux périodes et décider si un projet crée de la valeur au taux d'actualisation donné.",
    objectiveEn:
      "Compute a simple two-period NPV and decide whether a project creates value at the given discount rate.",
    explanationFr:
      "La VAN (NPV) actualise tous les flux futurs au coût du capital (ou taux d'actualisation) et soustrait l'investissement initial. Formule : NPV = −I₀ + Σ CFₜ / (1+r)ᵗ. Si NPV > 0, le projet ajoute de la valeur (rendement espéré > taux d'actualisation, en simplification pédagogique). Si NPV < 0, il détruit de la valeur au taux choisi. Le taux d'actualisation doit refléter le risque du projet — pas un taux arbitraire.",
    explanationEn:
      "NPV discounts all future flows at the cost of capital (discount rate) and subtracts initial investment. Formula: NPV = −I₀ + Σ CFₜ / (1+r)ᵗ. If NPV > 0, the project adds value (expected return > discount rate, pedagogical simplification). If NPV < 0, it destroys value at the chosen rate. The discount rate must reflect project risk — not an arbitrary rate.",
    exampleFr:
      "Investissement 100. Flux année 1 : 60, année 2 : 60. Taux d'actualisation 10 %.\nPV année 1 = 60 / 1,10 = 54,55\nPV année 2 = 60 / 1,21 = 49,59\nTotal PV = 104,14\nNPV = −100 + 104,14 = +4,14 → projet acceptable au taux 10 %.",
    exampleEn:
      "Investment 100. Year 1 flow: 60, year 2: 60. Discount rate 10%.\nPV year 1 = 60 / 1.10 = 54.55\nPV year 2 = 60 / 1.21 = 49.59\nTotal PV = 104.14\nNPV = −100 + 104.14 = +4.14 → project acceptable at 10%.",
    practicalFr:
      "Recalculez la VAN avec investissement 100, flux 55 et 55 sur 2 ans à 10 %. Comparez au cas 60/60.",
    practicalEn:
      "Recompute NPV with investment 100, flows 55 and 55 over 2 years at 10%. Compare to the 60/60 case.",
    mistakeFr:
      "Actualiser les flux au taux d'intérêt d'un dépôt bancaire sans lien avec le risque du projet.",
    mistakeEn:
      "Discounting flows at a bank deposit rate unrelated to project risk.",
    takeawayFr:
      "VAN positive = valeur créée au taux d'actualisation utilisé (cadre pédagogique).",
    takeawayEn:
      "Positive NPV = value created at the discount rate used (pedagogical framework).",
    decisionFr:
      "Comparer la VAN à zéro après avoir validé le taux d'actualisation — pas seulement le signe du flux brut.",
    decisionEn:
      "Compare NPV to zero after validating the discount rate — not just the raw flow sign.",
    flashcardFrontFr: "VAN (NPV)",
    flashcardFrontEn: "NPV",
    flashcardBackFr: "Somme des flux actualisés moins investissement initial.",
    flashcardBackEn: "Sum of discounted flows minus initial investment.",
    exercisePromptFr:
      "Investissement 200, flux +90, +90, +90 sur 3 ans, taux 10 %. Estimez la VAN (approximation acceptée) et recommandez accepter ou rejeter.",
    exercisePromptEn:
      "Investment 200, flows +90, +90, +90 over 3 years, rate 10%. Estimate NPV (approximation OK) and recommend accept or reject.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Investissement 100, flux 60 en année 1 et 60 en année 2, taux 10 %. VAN ?",
      promptEn: "Investment 100, flows 60 in year 1 and 60 in year 2, rate 10%. NPV?",
      explanationCorrectFr: "NPV = −100 + 54,55 + 49,59 ≈ +4,14.",
      explanationCorrectEn: "NPV = −100 + 54.55 + 49.59 ≈ +4.14.",
      difficulty: 2,
      options: [
        opt("+4,14 (approx.)", "+4.14 (approx.)", true),
        opt("+20,00", "+20.00", false, "20 = 120 − 100 sans actualisation.", "20 = 120 − 100 without discounting."),
        opt("−4,14", "−4.14", false, "Les flux actualisés excèdent 100.", "Discounted flows exceed 100."),
      ],
    }),
    questions: [
      q({
        type: "TRUE_FALSE",
        promptFr: "Une VAN positive suggère que le projet crée de la valeur au taux d'actualisation utilisé.",
        promptEn: "A positive NPV suggests the project creates value at the discount rate used.",
        explanationCorrectFr:
          "Vrai — dans le cadre standard : rendement espéré > coût du capital implicite.",
        explanationCorrectEn:
          "True — in the standard framework: expected return > implicit cost of capital.",
        difficulty: 1,
        options: [
          opt("Vrai", "True", true),
          opt("Faux", "False", false, "Une VAN > 0 est la règle d'acceptation classique.", "NPV > 0 is the classic acceptance rule."),
        ],
      }),
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Investissement 100, flux 50 en année 1 et 50 en année 2, taux 10 %. VAN ?",
        promptEn: "Investment 100, flows 50 in year 1 and 50 in year 2, rate 10%. NPV?",
        explanationCorrectFr: "PV ≈ 45,45 + 41,32 = 86,77 → NPV ≈ −13,23.",
        explanationCorrectEn: "PV ≈ 45.45 + 41.32 = 86.77 → NPV ≈ −13.23.",
        difficulty: 2,
        options: [
          opt("Négative (≈ −13)", "Negative (≈ −13)", true),
          opt("Nulle", "Zero", false, "Les flux actualisés sont bien inférieurs à 100.", "Discounted flows are well below 100."),
          opt("Positive (+13)", "Positive (+13)", false, "Sans actualisation 100−100=0 ; avec 10 % la VAN est négative.", "Without discounting 100−100=0; at 10% NPV is negative."),
        ],
      }),
    ],
  }),

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
      "Définir le TRI comme le taux qui annule la VAN et interpréter TRI vs coût du capital sur un mini-cas.",
    objectiveEn:
      "Define IRR as the rate that zeroes NPV and interpret IRR vs cost of capital on a mini-case.",
    explanationFr:
      "Le TRI (IRR) est le taux d'actualisation r tel que NPV = 0. Règle pédagogique : si IRR > coût du capital (WACC simplifié), le projet est acceptable ; si IRR < coût du capital, il est rejeté. Le TRI est intuitif (% de rendement) mais peut être trompeur avec des flux non conventionnels (changements de signe multiples) ou des projets de tailles différentes — la VAN reste souvent le critère principal en pratique.",
    explanationEn:
      "IRR is the discount rate r where NPV = 0. Pedagogical rule: if IRR > cost of capital (simplified WACC), accept; if IRR < cost of capital, reject. IRR is intuitive (% return) but can mislead with non-conventional flows (multiple sign changes) or different project scales — NPV often remains the primary criterion in practice.",
    exampleFr:
      "Même projet : investissement 100, flux 60 + 60.\nÀ 10 % : NPV ≈ +4,14 (positive).\nÀ 15 % : NPV ≈ −100 + 52,17 + 45,35 = −2,48 (négative).\nLe TRI est entre 10 % et 15 % — approx. 12,5 % (taux où NPV = 0).\nSi coût du capital = 10 % → TRI > WACC → acceptation pédagogique.",
    exampleEn:
      "Same project: investment 100, flows 60 + 60.\nAt 10%: NPV ≈ +4.14 (positive).\nAt 15%: NPV ≈ −100 + 52.17 + 45.35 = −2.48 (negative).\nIRR is between 10% and 15% — approx. 12.5% (rate where NPV = 0).\nIf cost of capital = 10% → IRR > WACC → pedagogical acceptance.",
    practicalFr:
      "Pour le projet 100 / 60 / 60, estimez si le TRI est supérieur à 8 % et à 14 % sans calculatrice précise.",
    practicalEn:
      "For project 100 / 60 / 60, estimate whether IRR is above 8% and above 14% without a precise calculator.",
    mistakeFr:
      "Choisir le projet au TRI le plus élevé sans regarder la VAN ou l'échelle d'investissement.",
    mistakeEn:
      "Picking the highest IRR project without checking NPV or investment scale.",
    takeawayFr:
      "TRI = taux d'équilibre VAN ; comparez au coût du capital, pas à un seuil arbitraire.",
    takeawayEn:
      "IRR = NPV breakeven rate; compare to cost of capital, not an arbitrary hurdle.",
    decisionFr:
      "Si TRI > WACC et VAN > 0 sur le même projet, cohérence ; en cas de divergence entre projets, privilégier la VAN.",
    decisionEn:
      "If IRR > WACC and NPV > 0 on the same project, consistent; when projects diverge, favor NPV.",
    flashcardFrontFr: "TRI (IRR)",
    flashcardFrontEn: "IRR",
    flashcardBackFr: "Taux d'actualisation qui rend la VAN égale à zéro.",
    flashcardBackEn: "Discount rate that makes NPV equal to zero.",
    exercisePromptFr:
      "Projet A : investissement 50, flux 30 + 30. Projet B : investissement 200, flux 110 + 110. Sans calcul exact, quel projet a probablement le TRI le plus élevé ? La VAN la plus élevée à 10 % ?",
    exercisePromptEn:
      "Project A: investment 50, flows 30 + 30. Project B: investment 200, flows 110 + 110. Without exact math, which likely has higher IRR? Higher NPV at 10%?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Investissement 100, flux 60 + 60. Coût du capital 10 %. Décision pédagogique ?",
      promptEn: "Investment 100, flows 60 + 60. Cost of capital 10%. Pedagogical decision?",
      explanationCorrectFr: "TRI ≈ 12,5 % > 10 % → acceptation ; VAN ≈ +4,14 confirme.",
      explanationCorrectEn: "IRR ≈ 12.5% > 10% → accept; NPV ≈ +4.14 confirms.",
      difficulty: 2,
      options: [
        opt("Accepter (TRI > coût du capital)", "Accept (IRR > cost of capital)", true),
        opt("Rejeter (TRI < coût du capital)", "Reject (IRR < cost of capital)", false, "Le TRI est supérieur à 10 % sur ce mini-cas.", "IRR is above 10% on this mini-case."),
        opt("Indéterminé sans VAN", "Undetermined without NPV", false, "TRI et VAN convergent ici.", "IRR and NPV align here."),
      ],
    }),
  }),

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
      "Le délai de récupération (payback) mesure le temps pour que les flux cumulés couvrent l'investissement initial. Exemple : investissement 100, flux 40 / an → après 2 ans cumul = 80, année 3 atteint 120 → payback entre 2 et 3 ans (2,5 ans si flux linéaires). C'est simple et intuitif pour la liquidité, mais il ignore : (1) la valeur temps de l'argent, (2) les flux après le payback, (3) le risque. Un projet avec payback court peut avoir une VAN faible si les flux tardifs sont importants.",
    explanationEn:
      "Payback period measures how long until cumulative flows cover initial investment. Example: investment 100, flows 40 / year → after 2 years cumulative = 80, year 3 reaches 120 → payback between 2 and 3 years (2.5 years if linear flows). It is simple and intuitive for liquidity, but ignores: (1) time value of money, (2) flows after payback, (3) risk. A short payback project may have weak NPV if late flows matter.",
    exampleFr:
      "Investissement 120. Flux : 50 année 1, 50 année 2, 50 année 3.\nCumul : 50 → 100 → 150.\nPayback entre année 2 et 3 : il manque 20 après année 2 ; 50 en année 3 → 120/50 = 2,4 ans.",
    exampleEn:
      "Investment 120. Flows: 50 year 1, 50 year 2, 50 year 3.\nCumulative: 50 → 100 → 150.\nPayback between year 2 and 3: 20 short after year 2; 50 in year 3 → 120/50 = 2.4 years.",
    practicalFr:
      "Calculez le payback pour investissement 80, flux 25 / an sur 5 ans. Comparez à un projet 80 avec 60 en année 1 puis 5 / an.",
    practicalEn:
      "Compute payback for investment 80, flows 25 / year for 5 years. Compare to project 80 with 60 in year 1 then 5 / year.",
    mistakeFr:
      "Rejeter un projet au payback long alors que sa VAN est forte (flux tardifs importants).",
    mistakeEn:
      "Rejecting a long payback project when its NPV is strong (material late flows).",
    takeawayFr:
      "Payback = outil de liquidité rapide, pas un substitut de VAN.",
    takeawayEn:
      "Payback = quick liquidity tool, not an NPV substitute.",
    decisionFr:
      "Utiliser le payback pour contraintes de trésorerie ; utiliser la VAN pour création de valeur.",
    decisionEn:
      "Use payback for cash constraints; use NPV for value creation.",
    flashcardFrontFr: "Délai de récupération",
    flashcardFrontEn: "Payback period",
    flashcardBackFr: "Temps pour que les flux cumulés couvrent l'investissement initial.",
    flashcardBackEn: "Time until cumulative flows cover initial investment.",
    exercisePromptFr:
      "Investissement 100, flux 30, 40, 50 sur 3 ans. Calculez le payback exact (année fractionnaire).",
    exercisePromptEn:
      "Investment 100, flows 30, 40, 50 over 3 years. Compute exact payback (fractional year).",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Investissement 100, flux 40 / an sur 3 ans. Payback approximatif ?",
      promptEn: "Investment 100, flows 40 / year over 3 years. Approximate payback?",
      explanationCorrectFr: "Cumul 40, 80, 120 → payback entre 2 et 3 ans (≈ 2,5 ans).",
      explanationCorrectEn: "Cumulative 40, 80, 120 → payback between 2 and 3 years (≈ 2.5 years).",
      difficulty: 1,
      options: [
        opt("Entre 2 et 3 ans", "Between 2 and 3 years", true),
        opt("1 an exact", "Exactly 1 year", false, "40 en année 1 ne couvre pas 100.", "40 in year 1 does not cover 100."),
        opt("Plus de 3 ans", "More than 3 years", false, "120 cumulé en année 3 couvre 100.", "120 cumulative in year 3 covers 100."),
      ],
    }),
  }),

  buildCfLesson({
    slug: "project-comparison",
    titleFr: "Comparaison de projets",
    titleEn: "Project Comparison",
    descriptionFr:
      "Comparer des projets mutuellement exclusifs avec VAN, TRI et logique d'échelle.",
    descriptionEn:
      "Compare mutually exclusive projects using NPV, IRR, and scale logic.",
    moduleSlug: "investment-ma",
    sortOrder: 4,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-investment",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Comparer deux projets exclusifs : prioriser la VAN, comprendre les conflits TRI et l'effet d'échelle.",
    objectiveEn:
      "Compare two exclusive projects: prioritize NPV, understand IRR conflicts and scale effects.",
    explanationFr:
      "Quand un seul projet peut être choisi (mutuellement exclusif), la règle pédagogique standard est : choisir le projet à la VAN la plus élevée au même taux d'actualisation. Le TRI peut donner un classement différent — projet petit avec TRI élevé mais VAN faible vs grand projet. Exemple chiffré à 10 % : Projet A (investissement 100, flux 60+60) VAN ≈ +4,14. Projet B (investissement 400, flux 230+230) : PV ≈ 209,09+190,08 = 399,17 → VAN ≈ −0,83. A gagne en VAN malgré une échelle plus petite. En capital contraint, on peut introduire un indice de profitabilité (VAN / investissement) — hors scope minimal ici.",
    explanationEn:
      "When only one project can be chosen (mutually exclusive), the standard pedagogical rule is: pick the highest NPV at the same discount rate. IRR may rank differently — small project with high IRR but low NPV vs large project. Numeric example at 10%: Project A (investment 100, flows 60+60) NPV ≈ +4.14. Project B (investment 400, flows 230+230): PV ≈ 209.09+190.08 = 399.17 → NPV ≈ −0.83. A wins on NPV despite smaller scale. Under capital rationing, a profitability index (NPV / investment) may apply — beyond minimal scope here.",
    exampleFr:
      "Mini-cas exclusif : usine compacte (A) vs usine grande (B). A : −100, +60, +60 → VAN +4,14. B : −400, +230, +230 → VAN ≈ −0,83. TRI de A ≈ 12,5 % ; TRI de B plus bas. Décision VAN : choisir A. Si les deux étaient indépendants et capital illimité, on pourrait envisager les deux — ici exclusif → A.",
    exampleEn:
      "Exclusive mini-case: compact plant (A) vs large plant (B). A: −100, +60, +60 → NPV +4.14. B: −400, +230, +230 → NPV ≈ −0.83. A IRR ≈ 12.5%; B IRR lower. NPV decision: choose A. If independent with unlimited capital, both might run — here exclusive → A.",
    practicalFr:
      "Deux projets exclusifs : calculez VAN à 10 % pour chacun. Notez si le TRI donnerait un classement différent.",
    practicalEn:
      "Two exclusive projects: compute NPV at 10% for each. Note if IRR would rank differently.",
    mistakeFr:
      "Sélectionner le TRI maximal sans vérifier la VAN sur projets de tailles différentes.",
    mistakeEn:
      "Selecting maximum IRR without checking NPV on different-sized projects.",
    takeawayFr:
      "Projets exclusifs → VAN maximale au même taux ; TRI = indicateur secondaire.",
    takeawayEn:
      "Exclusive projects → maximum NPV at same rate; IRR = secondary indicator.",
    decisionFr:
      "Documenter taux, horizon et exclusivité avant de comparer — un TRI sans contexte est trompeur.",
    decisionEn:
      "Document rate, horizon, and exclusivity before comparing — IRR without context misleads.",
    flashcardFrontFr: "Projets mutuellement exclusifs",
    flashcardFrontEn: "Mutually exclusive projects",
    flashcardBackFr: "Un seul peut être choisi — comparer les VAN au même taux.",
    flashcardBackEn: "Only one can be chosen — compare NPVs at the same rate.",
    exercisePromptFr:
      "Projet X : −50, +32, +32. Projet Y : −50, +30, +35. À 10 %, quel projet a la VAN la plus élevée ?",
    exercisePromptEn:
      "Project X: −50, +32, +32. Project Y: −50, +30, +35. At 10%, which has higher NPV?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Projets exclusifs A (VAN +4) et B (VAN −1) au même taux. Choix ?",
      promptEn: "Exclusive projects A (NPV +4) and B (NPV −1) at same rate. Choice?",
      explanationCorrectFr: "Choisir A — VAN maximale parmi exclusifs.",
      explanationCorrectEn: "Choose A — highest NPV among exclusive set.",
      difficulty: 1,
      options: [
        opt("Projet A", "Project A", true),
        opt("Projet B", "Project B", false, "B détruit de la valeur au taux utilisé.", "B destroys value at the rate used."),
        opt("Les deux", "Both", false, "Exclusifs : un seul choix possible.", "Exclusive: only one choice possible."),
      ],
    }),
  }),

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
      "Identifier les composantes du prix d'acquisition et le lien avec la valorisation standalone et la prime.",
    objectiveEn:
      "Identify purchase price components and the link to standalone valuation and premium.",
    explanationFr:
      "Le prix d'acquisition (purchase price) est le montant total transféré pour obtenir le contrôle de la cible. Il peut inclure : cash au sortant, actions nouvelles ou existantes de l'acquéreur, assumption ou refinancement de dette, earn-outs et compléments de prix. Le prix n'est pas arbitraire : il se compare à la valeur standalone de la cible (DCF, comparables) et à la prime versée pour le contrôle et les synergies attendues. Mini-cas : cible valorisée standalone 200 M€. Offre 240 M€ → prime 40 M€ (20 %). Structure : 150 M€ cash + 90 M€ actions acquéreur.",
    explanationEn:
      "Purchase price is the total consideration to gain control of the target. It may include: cash to sellers, new or existing acquirer shares, debt assumption or refinancing, earn-outs and price adjustments. Price is not arbitrary: it compares to target standalone value (DCF, comps) and premium paid for control and expected synergies. Mini-case: target standalone value 200 M€. Offer 240 M€ → premium 40 M€ (20%). Structure: 150 M€ cash + 90 M€ acquirer shares.",
    exampleFr:
      "Mini-cas TechScale : EV standalone 80 M€ (DCF pédagogique). Acquéreur Industria offre 95 M€ EV → prime 15 M€ pour synergies coûts (doublons back-office). Prix payé : 60 M€ cash + 35 M€ en actions (0,35 M actions à 100 €). Dette nette cible 10 M€ → equity cheque 85 M€.",
    exampleEn:
      "Mini-case TechScale: standalone EV 80 M€ (pedagogical DCF). Acquirer Industria offers 95 M€ EV → 15 M€ premium for cost synergies (back-office overlap). Price paid: 60 M€ cash + 35 M€ in shares (0.35 M shares at 100 €). Target net debt 10 M€ → equity cheque 85 M€.",
    practicalFr:
      "Pour une acquisition fictive, décomposez le prix en cash / actions / dette et calculez la prime vs standalone.",
    practicalEn:
      "For a fictional deal, break price into cash / shares / debt and compute premium vs standalone.",
    mistakeFr:
      "Confondre enterprise value offerte et cheque equity sans ajuster la dette nette.",
    mistakeEn:
      "Confusing offered enterprise value and equity cheque without net debt adjustment.",
    takeawayFr:
      "Prix = transfert de valeur ; prime = ce qui excède la valeur standalone.",
    takeawayEn:
      "Price = value transfer; premium = what exceeds standalone value.",
    decisionFr:
      "Toujours préciser EV vs equity price et la structure cash/actions avant sources & emplois.",
    decisionEn:
      "Always specify EV vs equity price and cash/share mix before sources & uses.",
    flashcardFrontFr: "Prime d'acquisition",
    flashcardFrontEn: "Acquisition premium",
    flashcardBackFr: "Prix payé au-delà de la valorisation standalone de la cible.",
    flashcardBackEn: "Price paid above target standalone valuation.",
    exercisePromptFr:
      "Standalone 500 M€, offre 575 M€, dette nette 80 M€. Calculez prime % et equity cheque.",
    exercisePromptEn:
      "Standalone 500 M€, offer 575 M€, net debt 80 M€. Compute premium % and equity cheque.",
    question: q({
      type: "MULTIPLE_CHOICE",
      promptFr: "Le prix d'acquisition peut inclure… (Plusieurs réponses)",
      promptEn: "Purchase price may include… (Multiple answers)",
      explanationCorrectFr: "Cash, actions et assumption de dettes sont des composantes courantes.",
      explanationCorrectEn: "Cash, shares, and debt assumption are common components.",
      difficulty: 2,
      options: [
        opt("Cash", "Cash", true),
        opt("Actions de l'acquéreur", "Acquirer shares", true),
        opt("Assumption de dettes", "Debt assumption", true),
        opt("TVA uniquement", "VAT only", false, "La TVA n'est pas une composante du prix M&A.", "VAT is not an M&A price component."),
      ],
    }),
  }),

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
      "Remplir un tableau sources & emplois et vérifier l'équilibre total sources = total emplois.",
    objectiveEn:
      "Fill a sources & uses table and verify total sources = total uses.",
    explanationFr:
      "Le tableau sources & emplois est la « photo » du financement d'une transaction. Emplois (uses) : prix equity, refinancement dette existante, frais de transaction, cash minimum au bilan. Sources : cash acquéreur, nouvelle dette (senior, mezzanine), equity émis, rollover equity management. Règle fondamentale : total sources = total emplois. C'est un outil de structuration pédagogique — les montants réels dépendent du marché et des négociations.",
    explanationEn:
      "The sources & uses table is the financing “snapshot” of a deal. Uses: equity price, refinancing existing debt, transaction fees, minimum balance-sheet cash. Sources: acquirer cash, new debt (senior, mezzanine), issued equity, management rollover equity. Fundamental rule: total sources = total uses. It is a pedagogical structuring tool — real amounts depend on market and negotiation.",
    exampleFr:
      "Mini-cas PharmaBuy : Emplois — equity cheque 420, refinancement dette 60, frais 25, cash cible 15 → total 480.\nSources — cash acquéreur 120, dette senior 250, dette mezz 50, actions nouvelles 100 → total 480.\nÉquilibre vérifié. Si une ligne change (frais +5), une source doit augmenter de 5.",
    exampleEn:
      "Mini-case PharmaBuy: Uses — equity cheque 420, debt refinancing 60, fees 25, target cash 15 → total 480.\nSources — acquirer cash 120, senior debt 250, mezz debt 50, new shares 100 → total 480.\nBalance verified. If one line changes (fees +5), a source must rise by 5.",
    practicalFr:
      "Complétez un tableau avec emplois 300 (prix 250, frais 20, dette 30) — proposez trois sources qui équilibrent.",
    practicalEn:
      "Complete a table with uses 300 (price 250, fees 20, debt 30) — propose three balancing sources.",
    mistakeFr:
      "Oublier les frais ou le cash minimum — le tableau ne reflète pas le besoin de financement réel.",
    mistakeEn:
      "Forgetting fees or minimum cash — the table does not reflect true funding need.",
    takeawayFr:
      "Sources = emplois — chaque euro de besoin a une source identifiée.",
    takeawayEn:
      "Sources = uses — every euro of need has an identified source.",
    decisionFr:
      "Avant closing : re-vérifier l'équilibre après chaque ajustement de prix ou de dette.",
    decisionEn:
      "Before closing: re-check balance after every price or debt adjustment.",
    flashcardFrontFr: "Sources et emplois",
    flashcardFrontEn: "Sources and uses",
    flashcardBackFr: "Tableau équilibrant fonds nécessaires et fonds disponibles.",
    flashcardBackEn: "Table balancing required and available funds.",
    exercisePromptFr:
      "Emplois : prix 180, frais 12, refinancement 25. Sources : cash 50, dette 100. Quelle source manque ?",
    exercisePromptEn:
      "Uses: price 180, fees 12, refinancing 25. Sources: cash 50, debt 100. Which source is missing?",
    question: q({
      type: "TRUE_FALSE",
      promptFr: "Total sources doit égaler total emplois.",
      promptEn: "Total sources must equal total uses.",
      explanationCorrectFr: "Vrai. C'est le principe fondamental du tableau.",
      explanationCorrectEn: "True. That is the table's fundamental principle.",
      difficulty: 1,
      options: [
        opt("Vrai", "True", true),
        opt("Faux", "False", false, "Sans équilibre, le financement est incomplet.", "Without balance, financing is incomplete."),
      ],
    }),
  }),

  buildCfLesson({
    slug: "synergies-basics",
    titleFr: "Bases des synergies",
    titleEn: "Synergies Basics",
    descriptionFr:
      "Synergies de coûts et de revenus : estimation et réalisation en M&A.",
    descriptionEn:
      "Cost and revenue synergies: estimation and realization in M&A.",
    moduleSlug: "investment-ma",
    sortOrder: 7,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-ma",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Distinguer synergies de coûts et de revenus et estimer leur impact sur la justification du prix.",
    objectiveEn:
      "Distinguish cost and revenue synergies and estimate their impact on price justification.",
    explanationFr:
      "Les synergies sont les gains attendus de la combinaison : réduction de coûts (doublons, achats, IT) ou hausse de revenus (cross-sell, pricing, nouveaux marchés). Elles justifient partiellement la prime d'acquisition — l'acquéreur partage le gain avec le vendeur via le prix. En pratique, les synergies réalisées sont souvent inférieures aux synergies « annoncées » (coûts d'intégration, turnover, délais). Mini-cas : fusion retail — synergies coûts 30 M€ / an (fermetures magasins, logistique), synergies revenus 10 M€ / an (cross-sell) ; réalisation attendue 70 % sur 3 ans.",
    explanationEn:
      "Synergies are expected combination gains: cost cuts (overlap, procurement, IT) or revenue lifts (cross-sell, pricing, new markets). They partially justify acquisition premium — acquirer shares gain with seller via price. In practice, realized synergies often fall short of “announced” synergies (integration cost, turnover, delays). Mini-case: retail merger — cost synergies 30 M€ / year (store closures, logistics), revenue synergies 10 M€ / year (cross-sell); expected realization 70% over 3 years.",
    exampleFr:
      "Mini-cas SoftMerge : cible et acquéreur SaaS. Coûts : −8 M€ / an (support et infra consolidés). Revenus : +5 M€ / an (bundle produits). Prime payée 40 M€. Si synergies PV ≈ 50 M€ à 10 % sur 5 ans, la prime est partiellement couverte — analyse pédagogique, pas garantie.",
    exampleEn:
      "Mini-case SoftMerge: target and acquirer SaaS. Costs: −8 M€ / year (consolidated support and infra). Revenue: +5 M€ / year (product bundle). Premium paid 40 M€. If synergy PV ≈ 50 M€ at 10% over 5 years, premium is partially covered — pedagogical analysis, not a guarantee.",
    practicalFr:
      "Listez deux synergies de coûts et une de revenus pour une fusion fictive dans votre secteur.",
    practicalEn:
      "List two cost synergies and one revenue synergy for a fictional merger in your sector.",
    mistakeFr:
      "Budgéter 100 % des synergies annoncées sans haircut ni coûts d'intégration.",
    mistakeEn:
      "Budgeting 100% of announced synergies without haircut or integration costs.",
    takeawayFr:
      "Synergies = justification de prime — réalisation souvent partielle.",
    takeawayEn:
      "Synergies = premium justification — realization often partial.",
    decisionFr:
      "Modéliser synergies nettes d'intégration et scénario downside avant d'augmenter le prix.",
    decisionEn:
      "Model net synergies after integration and downside scenario before raising price.",
    flashcardFrontFr: "Synergies de coûts",
    flashcardFrontEn: "Cost synergies",
    flashcardBackFr: "Réductions de coûts après combinaison (doublons, échelle).",
    flashcardBackEn: "Cost reductions after combination (overlap, scale).",
    exercisePromptFr:
      "Synergies annoncées 40 M€ / an, coûts d'intégration 15 M€ one-off, réalisation 60 %. Estimez le gain annuel net réalisable en année 2.",
    exercisePromptEn:
      "Announced synergies 40 M€ / year, integration costs 15 M€ one-off, realization 60%. Estimate net annual gain realizable in year 2.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Les synergies de coûts impliquent typiquement…",
      promptEn: "Cost synergies typically involve…",
      explanationCorrectFr: "Des réductions de coûts après la combinaison.",
      explanationCorrectEn: "Cost reductions after combination.",
      difficulty: 2,
      options: [
        opt("Réductions de coûts", "Cost reductions", true),
        opt("Hausse des prix clients", "Client price increases", false, "Hausse de prix = plutôt synergie de revenus ou pricing power.", "Price hikes = revenue synergy or pricing power."),
        opt("Augmentation des dettes", "Debt increases", false, "La dette n'est pas une synergie opérationnelle.", "Debt is not an operating synergy."),
      ],
    }),
  }),

  buildCfLesson({
    slug: "accretion-dilution",
    titleFr: "Accrétion / dilution",
    titleEn: "Accretion / Dilution",
    descriptionFr:
      "Analyser l'accrétion ou dilution du BPA après une acquisition.",
    descriptionEn:
      "Analyze EPS accretion or dilution after an acquisition.",
    moduleSlug: "investment-ma",
    sortOrder: 8,
    estimatedMinutes: 11,
    difficulty: "ADVANCED",
    skillSlug: "cf-ma",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Calculer le BPA pro forma, déterminer accrétion vs dilution et interpréter les limites du test BPA.",
    objectiveEn:
      "Compute pro forma EPS, determine accretion vs dilution, and interpret EPS test limits.",
    explanationFr:
      "L'analyse accrétion / dilution compare le BPA (EPS) standalone de l'acquéreur au BPA pro forma après acquisition. Pro forma NI = NI acquéreur + NI cible − adjustments (intérêts dette deal, amort goodwill simplifié, synergies nettes). Pro forma shares = actions acquéreur + nouvelles actions émises. Accretive si BPA pro forma > BPA standalone ; dilutive si <. C'est un test de structure comptable court terme — un deal dilutif peut créer de la valeur économique (VAN positive) ; un deal accretif peut détruire de la valeur.",
    explanationEn:
      "Accretion / dilution analysis compares acquirer standalone EPS to pro forma EPS after the deal. Pro forma NI = acquirer NI + target NI − adjustments (deal debt interest, simplified goodwill amort, net synergies). Pro forma shares = acquirer shares + new shares issued. Accretive if pro forma EPS > standalone EPS; dilutive if <. It is a short-term accounting structure test — a dilutive deal can create economic value (positive NPV); an accretive deal can destroy value.",
    exampleFr:
      "Mini-cas accretif : Acquéreur NI 80 M€, 40 M actions → BPA 2,00.\nCible NI 20 M€. Acquisition payée en 5 M nouvelles actions (pas de cash).\nPro forma NI = 80 + 20 = 100 M€. Actions = 40 + 5 = 45 M.\nBPA pro forma = 100 / 45 ≈ 2,22 → accrétif (+11 %).\nMini-cas dilutif : même acquéreur, cible NI 10 M€, 8 M nouvelles actions.\nPro forma NI = 90 M€, actions 48 M → BPA 1,875 → dilutif (−6,25 %).",
    exampleEn:
      "Accretive mini-case: Acquirer NI 80 M€, 40 M shares → EPS 2.00.\nTarget NI 20 M€. Acquisition paid with 5 M new shares (no cash).\nPro forma NI = 80 + 20 = 100 M€. Shares = 40 + 5 = 45 M.\nPro forma EPS = 100 / 45 ≈ 2.22 → accretive (+11%).\nDilutive mini-case: same acquirer, target NI 10 M€, 8 M new shares.\nPro forma NI = 90 M€, shares 48 M → EPS 1.875 → dilutive (−6.25%).",
    practicalFr:
      "Calculez BPA pro forma : acquéreur NI 50, 25 M actions ; cible NI 8 ; 4 M nouvelles actions.",
    practicalEn:
      "Compute pro forma EPS: acquirer NI 50, 25 M shares; target NI 8; 4 M new shares.",
    mistakeFr:
      "Rejeter un deal dilutif au BPA sans analyse VAN / stratégique.",
    mistakeEn:
      "Rejecting a dilutive EPS deal without NPV / strategic analysis.",
    takeawayFr:
      "Accrétion BPA ≠ création de valeur ; dilution BPA ≠ destruction automatique.",
    takeawayEn:
      "EPS accretion ≠ value creation; EPS dilution ≠ automatic destruction.",
    decisionFr:
      "Utiliser le test BPA pour communication marché et structure ; croiser avec VAN et synergies.",
    decisionEn:
      "Use EPS test for market communication and structure; cross-check with NPV and synergies.",
    flashcardFrontFr: "Accretive (BPA)",
    flashcardFrontEn: "Accretive (EPS)",
    flashcardBackFr: "BPA pro forma supérieur au BPA standalone.",
    flashcardBackEn: "Pro forma EPS above standalone EPS.",
    exercisePromptFr:
      "Standalone BPA 3,00. Pro forma BPA 2,85. Deal accretif ou dilutif ? Quel autre critère vérifier avant décision finale ?",
    exercisePromptEn:
      "Standalone EPS 3.00. Pro forma EPS 2.85. Accretive or dilutive? What other criterion to check before final decision?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "NI acquéreur 80, 40 M actions, cible NI 20, 5 M nouvelles actions. BPA pro forma ?",
      promptEn: "Acquirer NI 80, 40 M shares, target NI 20, 5 M new shares. Pro forma EPS?",
      explanationCorrectFr: "Pro forma NI 100 / 45 actions ≈ 2,22.",
      explanationCorrectEn: "Pro forma NI 100 / 45 shares ≈ 2.22.",
      difficulty: 3,
      options: [
        opt("≈ 2,22 (accrétif)", "≈ 2.22 (accretive)", true),
        opt("2,00 (neutre)", "2.00 (neutral)", false, "Les actions augmentent plus que proportionnellement au NI.", "Shares rise more than proportionally to NI."),
        opt("≈ 1,80 (dilutif)", "≈ 1.80 (dilutive)", false, "Le NI pro forma augmente de 25 %, actions de 12,5 %.", "Pro forma NI rises 25%, shares 12.5%."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Une opération dilutive signifie typiquement que…",
        promptEn: "A dilutive deal typically means that…",
        explanationCorrectFr: "Le BPA pro forma diminue vs standalone.",
        explanationCorrectEn: "Pro forma EPS decreases vs standalone.",
        difficulty: 2,
        options: [
          opt("Le BPA pro forma diminue", "Pro forma EPS decreases", true),
          opt("Le cash disparaît toujours", "Cash always disappears", false, "La dilution BPA n'implique pas une perte de cash automatique.", "EPS dilution does not imply automatic cash loss."),
          opt("Le WACC devient nul", "WACC becomes zero", false, "Le WACC n'est pas défini par le test BPA.", "WACC is not defined by the EPS test."),
        ],
      }),
      q({
        type: "TRUE_FALSE",
        promptFr: "Un deal accretif au BPA garantit la création de valeur économique.",
        promptEn: "An EPS-accretive deal guarantees economic value creation.",
        explanationCorrectFr:
          "Faux — le BPA est un test comptable court terme ; la VAN peut être négative.",
        explanationCorrectEn:
          "False — EPS is a short-term accounting test; NPV can be negative.",
        difficulty: 2,
        options: [
          opt("Vrai", "True", false, "Accrétion BPA et VAN positive ne sont pas équivalentes.", "EPS accretion and positive NPV are not equivalent."),
          opt("Faux", "False", true),
        ],
      }),
    ],
  }),

  buildCfLesson({
    slug: "strategic-rationale",
    titleFr: "Rationale stratégique",
    titleEn: "Strategic Rationale",
    descriptionFr:
      "Évaluer la logique stratégique d'une acquisition au-delà des synergies financières.",
    descriptionEn:
      "Evaluate strategic rationale for an acquisition beyond financial synergies.",
    moduleSlug: "investment-ma",
    sortOrder: 9,
    estimatedMinutes: 8,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-ma",
    learningObjective: "DECIDE",
    objectiveFr:
      "Formuler et critiquer une rationale stratégique distincte de la justification financière.",
    objectiveEn:
      "Formulate and critique strategic rationale distinct from financial justification.",
    explanationFr:
      "La rationale stratégique explique pourquoi l'acquisition renforce la position de l'acquéreur : expansion géographique, consolidation de marché (scale), acquisition de technologie ou talents, diversification, accès à la distribution, défense du territoire. Elle doit être testable (KPI, délais, risques) et distincte du dossier financier (synergies, multiples). Mini-cas : acquéreur européen retail achète une plateforme e-commerce locale — rationale = accélération omnicanal + données clients, pas seulement synergies coûts back-office.",
    explanationEn:
      "Strategic rationale explains why the deal strengthens the acquirer: geographic expansion, market consolidation (scale), technology or talent acquisition, diversification, distribution access, territorial defense. It must be testable (KPIs, timelines, risks) and distinct from the financial case (synergies, multiples). Mini-case: European retail acquirer buys local e-commerce platform — rationale = omnichannel acceleration + customer data, not only back-office cost synergies.",
    exampleFr:
      "Mini-cas defense tech : acquéreur défense legacy rachete startup IA drone. Rationale : capacité technologique critique sous 24 mois (interne trop lent), qualification réglementaire partagée. Risque : intégration culturelle. KPI : contrats publics signés à 36 mois. Financier seul : P/E élevé → rationale stratégique justifie l'attention, pas le prix automatiquement.",
    exampleEn:
      "Defense tech mini-case: legacy defense acquirer buys AI drone startup. Rationale: critical tech capability within 24 months (internal too slow), shared regulatory qualification. Risk: cultural integration. KPI: public contracts signed by 36 months. Financials alone: high P/E → strategic rationale justifies attention, not price automatically.",
    practicalFr:
      "Pour une acquisition réelle ou fictive, écrivez rationale stratégique en 2 phrases + 1 risque + 1 KPI.",
    practicalEn:
      "For a real or fictional deal, write strategic rationale in 2 sentences + 1 risk + 1 KPI.",
    mistakeFr:
      "Confondre « rationale » avec une liste de synergies sans lien stratégique clair.",
    mistakeEn:
      "Confusing “rationale” with a synergy list without clear strategic link.",
    takeawayFr:
      "Stratégie = pourquoi maintenant ; finance = est-ce que le prix est supportable.",
    takeawayEn:
      "Strategy = why now; finance = whether price is supportable.",
    decisionFr:
      "Refuser une deal « financièrement accretive » sans rationale stratégique testable.",
    decisionEn:
      "Reject a “financially accretive” deal without testable strategic rationale.",
    flashcardFrontFr: "Rationale stratégique",
    flashcardFrontEn: "Strategic rationale",
    flashcardBackFr: "Logique stratégique justifiant l'acquisition — distincte du dossier financier.",
    flashcardBackEn: "Strategic logic justifying acquisition — distinct from financial case.",
    exercisePromptFr:
      "Acquisition géographique vs acquisition technologique : citez une rationale et un risque spécifique pour chaque.",
    exercisePromptEn:
      "Geographic vs technology acquisition: cite one rationale and one specific risk for each.",
    question: q({
      type: "MULTIPLE_CHOICE",
      promptFr: "Quelles sont des rationales stratégiques ? (Plusieurs réponses)",
      promptEn: "Which are strategic rationales? (Multiple answers)",
      explanationCorrectFr:
        "Expansion géographique, consolidation et technologie sont des rationales courantes.",
      explanationCorrectEn:
        "Geographic expansion, consolidation, and technology are common rationales.",
      difficulty: 2,
      options: [
        opt("Expansion géographique", "Geographic expansion", true),
        opt("Consolidation de marché", "Market consolidation", true),
        opt("Acquisition de technologies", "Technology acquisition", true),
        opt("Réduire le salaire du CEO", "Reduce CEO salary", false, "Réduction salaire CEO n'est pas une rationale stratégique typique.", "CEO salary cut is not a typical strategic rationale."),
      ],
    }),
  }),

  buildCfLesson({
    slug: "value-creation-vs-destruction",
    titleFr: "Création vs destruction de valeur",
    titleEn: "Value Creation vs Destruction",
    descriptionFr:
      "Synthèse : relier VAN, synergies, BPA et rationale à la création de valeur actionnaire.",
    descriptionEn:
      "Synthesis: link NPV, synergies, EPS, and rationale to shareholder value creation.",
    moduleSlug: "investment-ma",
    sortOrder: 10,
    estimatedMinutes: 10,
    difficulty: "ADVANCED",
    skillSlug: "cf-investment",
    learningObjective: "DECIDE",
    objectiveFr:
      "Diagnostiquer création ou destruction de valeur en croisant VAN, prix, synergies et tests BPA.",
    objectiveEn:
      "Diagnose value creation or destruction by cross-checking NPV, price, synergies, and EPS tests.",
    explanationFr:
      "La création de valeur actionnaire (cadre pédagogique) survient quand les investissements et acquisitions génèrent des flux actualisés supérieurs au capital investi au taux du coût du capital. Destruction = inverse. En M&A : payer une prime sans synergies réalistes ou rationale stratégique solide détruit souvent de la valeur même si le BPA est accretif. En investissement interne : projet VAN positive crée de la valeur ; rejeter des projets VAN+ par payback court détruit des opportunités. Synthèse des critères : VAN (valeur économique), TRI vs WACC (sanity check), synergies nettes (M&A), BPA (signal marché), rationale (stratégie).",
    explanationEn:
      "Shareholder value creation (pedagogical framework) occurs when investments and acquisitions generate discounted flows above invested capital at the cost of capital. Destruction = opposite. In M&A: paying premium without realistic synergies or solid strategic rationale often destroys value even if EPS is accretive. In internal investment: NPV-positive project creates value; rejecting NPV+ projects for short payback destroys opportunities. Criteria synthesis: NPV (economic value), IRR vs WACC (sanity check), net synergies (M&A), EPS (market signal), rationale (strategy).",
    exampleFr:
      "Mini-cas synthèse DestructCo : prime 50 M€, synergies réalisées 10 M€ PV, deal accretif BPA +5 % → valeur probablement détruite (prime > synergies). Mini-cas CreateCo : projet usine VAN +12 M€ à 10 %, payback 4 ans, TRI 14 %, WACC 10 % → création de valeur économique même si payback « long » pour des directeurs focalisés sur 2 ans.",
    exampleEn:
      "Synthesis mini-case DestructCo: premium 50 M€, realized synergies 10 M€ PV, deal EPS accretive +5% → value likely destroyed (premium > synergies). Mini-case CreateCo: plant project NPV +12 M€ at 10%, payback 4 years, IRR 14%, WACC 10% → economic value creation even if payback “long” for managers focused on 2 years.",
    practicalFr:
      "Choisissez un deal ou projet réel : classez création / destruction / incertain avec trois critères (VAN, synergies ou BPA, rationale).",
    practicalEn:
      "Pick a real deal or project: classify create / destroy / uncertain with three criteria (NPV, synergies or EPS, rationale).",
    mistakeFr:
      "Utiliser un seul indicateur (BPA accretif ou TRI élevé) comme preuve de création de valeur.",
    mistakeEn:
      "Using a single metric (accretive EPS or high IRR) as proof of value creation.",
    takeawayFr:
      "Création de valeur = cohérence VAN + prix + exécution — pas un ratio isolé.",
    takeawayEn:
      "Value creation = NPV + price + execution alignment — not an isolated ratio.",
    decisionFr:
      "Checklist finale : VAN / synergies nettes / BPA / rationale — au moins trois doivent converger.",
    decisionEn:
      "Final checklist: NPV / net synergies / EPS / rationale — at least three must align.",
    flashcardFrontFr: "Création de valeur",
    flashcardFrontEn: "Value creation",
    flashcardBackFr: "Flux actualisés > capital investi au coût du capital (cadre pédagogique).",
    flashcardBackEn: "Discounted flows > invested capital at cost of capital (pedagogical framework).",
    exercisePromptFr:
      "Deal : prime 30 M€, synergies PV 25 M€, accretif BPA, rationale faible. Création ou destruction ? Argumentez.",
    exercisePromptEn:
      "Deal: premium 30 M€, synergies PV 25 M€, EPS accretive, weak rationale. Creation or destruction? Argue.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Quel signal est le plus fiable pour la valeur économique d'un projet interne ?",
      promptEn: "Which signal is most reliable for economic value of an internal project?",
      explanationCorrectFr: "La VAN au coût du capital mesure directement la création de valeur économique.",
      explanationCorrectEn: "NPV at cost of capital directly measures economic value creation.",
      difficulty: 2,
      options: [
        opt("VAN au coût du capital", "NPV at cost of capital", true),
        opt("Payback seul", "Payback alone", false, "Le payback ignore valeur temps et flux tardifs.", "Payback ignores time value and late flows."),
        opt("Résultat net comptable année 1", "Year 1 net accounting profit", false, "Le résultat comptable inclut des éléments non cash.", "Accounting profit includes non-cash items."),
      ],
    }),
  }),
];
