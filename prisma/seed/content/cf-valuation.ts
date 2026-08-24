/**
 * Corporate Finance — Valuation module expansion (FR/EN).
 * Educational only — not professional valuation or investment advice.
 */

import { buildCfLesson, opt, q } from "./cf-factory";
import type { CompactLesson } from "./compact";

export const CF_VALUATION_LESSONS: CompactLesson[] = [
  buildCfLesson({
    slug: "enterprise-value",
    titleFr: "Enterprise Value",
    titleEn: "Enterprise Value",
    descriptionFr:
      "Définir l'Enterprise Value (EV) et son rôle dans les multiples et le DCF.",
    descriptionEn: "Define Enterprise Value (EV) and its role in multiples and DCF.",
    moduleSlug: "valuation",
    sortOrder: 0,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-valuation",
    learningObjective: "IDENTIFY",
    isShort: true,
    shortDurationSeconds: 160,
    objectiveFr:
      "Reconnaître ce que mesure l'EV et la relier à Equity Value et dette nette.",
    objectiveEn: "Recognize what EV measures and link it to Equity Value and net debt.",
    explanationFr:
      "L'Enterprise Value (EV) est la valeur de l'activité opérationnelle pour tous les fournisseurs de capital : actionnaires et créanciers. En simplification pédagogique : EV = Equity Value + dette nette. L'EV sert de numérateur aux multiples EV/EBITDA ou EV/Revenu, et comme sortie d'un DCF « entreprise ». Elle ignore le cash excédentaire déjà capté dans la dette nette.",
    explanationEn:
      "Enterprise Value (EV) is the operating business value for all capital providers: shareholders and creditors. Pedagogical simplification: EV = Equity Value + net debt. EV is the numerator in EV/EBITDA or EV/Revenue multiples, and the output of an enterprise DCF. Excess cash is already reflected in net debt.",
    exampleFr:
      "Mini-cas NovaPack : Equity Value cotée 480 M€, dettes financières 250 M€, cash 50 M€ → dette nette = 200 M€ → EV = 480 + 200 = 680 M€. L'EV représente la valeur totale de l'activité, pas seulement la part actionnariale.",
    exampleEn:
      "Mini-case NovaPack: listed Equity Value €480M, financial debt €250M, cash €50M → net debt = €200M → EV = 480 + 200 = €680M. EV represents total business value, not only the equity slice.",
    practicalFr:
      "À partir d'une capitalisation boursière et d'un bilan simplifié, calculez la dette nette puis l'EV. Vérifiez que vous additionnez bien equity + dette nette, pas equity + dette brute.",
    practicalEn:
      "From market cap and a simplified balance sheet, compute net debt then EV. Check you add equity + net debt, not equity + gross debt.",
    mistakeFr:
      "Confondre EV et capitalisation boursière : la capi ignore la dette nette et surestime ou sous-estime la valeur de l'entreprise.",
    mistakeEn:
      "Confusing EV with market cap: cap ignores net debt and over- or understates firm value.",
    takeawayFr: "EV = valeur pour tous les investisseurs ; la capi ne couvre que les actionnaires.",
    takeawayEn: "EV = value for all investors; market cap covers shareholders only.",
    decisionFr:
      "Avant un multiple EV/EBITDA, confirmer que vous valorisez bien l'entreprise (EV), pas uniquement l'action.",
    decisionEn:
      "Before an EV/EBITDA multiple, confirm you value the firm (EV), not only the share.",
    flashcardFrontFr: "Enterprise Value",
    flashcardFrontEn: "Enterprise Value",
    flashcardBackFr: "Valeur de l'activité pour actionnaires + créanciers (EV ≈ Equity + dette nette).",
    flashcardBackEn: "Operating value for shareholders + creditors (EV ≈ Equity + net debt).",
    exercisePromptFr:
      "NovaPack : Equity 480 M€, dettes 250 M€, cash 50 M€. Calculez dette nette et EV.",
    exercisePromptEn:
      "NovaPack: Equity €480M, debt €250M, cash €50M. Compute net debt and EV.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "NovaPack : Equity Value 480 M€, dette nette 200 M€. EV = ?",
      promptEn: "NovaPack: Equity Value €480M, net debt €200M. EV = ?",
      explanationCorrectFr: "EV = 480 + 200 = 680 M€.",
      explanationCorrectEn: "EV = 480 + 200 = €680M.",
      difficulty: 2,
      options: [
        opt("680 M€", "€680M", true),
        opt("280 M€", "€280M", false, "480 − 200 serait Equity, pas EV.", "480 − 200 would be Equity, not EV."),
        opt("480 M€", "€480M", false, "480 M€ est l'Equity Value seule.", "€480M is Equity Value only."),
      ],
    }),
    questions: [
      q({
        type: "TRUE_FALSE",
        promptFr: "L'EV inclut la valeur pour les créanciers et les actionnaires.",
        promptEn: "EV includes value for creditors and shareholders.",
        explanationCorrectFr: "Vrai. C'est la définition pédagogique de l'EV.",
        explanationCorrectEn: "True. That is the pedagogical definition of EV.",
        difficulty: 1,
        options: [
          opt("Vrai", "True", true),
          opt("Faux", "False", false, "L'EV couvre toute la structure de capital.", "EV covers the full capital structure."),
        ],
      }),
    ],
  }),

  buildCfLesson({
    slug: "equity-value",
    titleFr: "Equity Value",
    titleEn: "Equity Value",
    descriptionFr:
      "Isoler la valeur pour les actionnaires et la distinguer de l'Enterprise Value.",
    descriptionEn: "Isolate shareholder value and distinguish it from Enterprise Value.",
    moduleSlug: "valuation",
    sortOrder: 1,
    estimatedMinutes: 8,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-valuation",
    learningObjective: "APPLY",
    objectiveFr: "Calculer l'Equity Value à partir de l'EV et de la dette nette.",
    objectiveEn: "Calculate Equity Value from EV and net debt.",
    explanationFr:
      "L'Equity Value est la valeur résiduelle pour les actionnaires après dette nette. Formule clé : Equity Value = EV − dette nette. Pour une société cotée, la capitalisation boursière est une approximation de l'Equity Value (sous réserve du flottant et des instruments dilutifs). Les multiples P/E ou P/B utilisent l'Equity Value au numérateur.",
    explanationEn:
      "Equity Value is the residual value for shareholders after net debt. Key formula: Equity Value = EV − net debt. For a listed company, market cap approximates Equity Value (subject to float and dilutive instruments). P/E or P/B multiples use Equity Value in the numerator.",
    exampleFr:
      "Mini-cas HelioSoft : EV estimée 900 M€, dette nette 150 M€ → Equity Value = 900 − 150 = 750 M€. Si 75 M actions, valeur implicite ≈ 10 €/action (750 ÷ 75).",
    exampleEn:
      "Mini-case HelioSoft: estimated EV €900M, net debt €150M → Equity Value = 900 − 150 = €750M. With 75M shares, implied value ≈ €10/share (750 ÷ 75).",
    practicalFr:
      "Partez d'un EV issu d'un multiple ou d'un DCF, soustrayez la dette nette, puis comparez au cours de bourse ou à la demande des vendeurs en M&A.",
    practicalEn:
      "Start from EV from a multiple or DCF, subtract net debt, then compare to share price or seller ask in M&A.",
    mistakeFr:
      "Appliquer un multiple EV/EBITDA puis présenter le résultat comme prix par action sans passer par la dette nette.",
    mistakeEn:
      "Applying an EV/EBITDA multiple then presenting the result as price per share without bridging net debt.",
    takeawayFr: "Equity Value = EV − dette nette ; c'est la part actionnariale.",
    takeawayEn: "Equity Value = EV − net debt; that is the equity slice.",
    decisionFr:
      "Toujours préciser si un chiffre est EV ou Equity avant de communiquer une valorisation.",
    decisionEn: "Always state whether a figure is EV or Equity before communicating a valuation.",
    flashcardFrontFr: "Equity Value",
    flashcardFrontEn: "Equity Value",
    flashcardBackFr: "EV − dette nette = valeur pour les actionnaires.",
    flashcardBackEn: "EV − net debt = value for shareholders.",
    exercisePromptFr:
      "HelioSoft : EV 900 M€, dette nette 150 M€, 75 M actions. Equity Value et prix implicite ?",
    exercisePromptEn:
      "HelioSoft: EV €900M, net debt €150M, 75M shares. Equity Value and implied price?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "EV 700 M€, dette nette 120 M€. Equity Value = ?",
      promptEn: "EV €700M, net debt €120M. Equity Value = ?",
      explanationCorrectFr: "700 − 120 = 580 M€.",
      explanationCorrectEn: "700 − 120 = €580M.",
      difficulty: 2,
      options: [
        opt("580 M€", "€580M", true),
        opt("820 M€", "€820M", false, "820 = 700 + 120 ; on soustrait la dette nette.", "820 = 700 + 120; you subtract net debt."),
        opt("120 M€", "€120M", false, "120 M€ est la dette nette seule.", "€120M is net debt only."),
      ],
    }),
  }),

  buildCfLesson({
    slug: "net-debt",
    titleFr: "Dette nette",
    titleEn: "Net Debt",
    descriptionFr:
      "Calculer la dette nette et l'utiliser dans le pont EV ↔ Equity.",
    descriptionEn: "Calculate net debt and use it in the EV ↔ Equity bridge.",
    moduleSlug: "valuation",
    sortOrder: 2,
    estimatedMinutes: 8,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-valuation",
    learningObjective: "APPLY",
    objectiveFr: "Calculer la dette nette et interpréter un cash net (dette nette négative).",
    objectiveEn: "Compute net debt and interpret net cash (negative net debt).",
    explanationFr:
      "Dette nette (pédagogique) = dettes financières − cash et équivalents de trésorerie. Elle fait le lien entre EV et Equity Value. Si le cash dépasse la dette, la dette nette est négative (position de cash net) : EV < Equity Value. En pratique professionnelle, d'autres postes (pensions, leases) peuvent entrer dans l'ajustement — ici on reste sur la version simplifiée.",
    explanationEn:
      "Net debt (pedagogical) = financial debt − cash and cash equivalents. It links EV and Equity Value. If cash exceeds debt, net debt is negative (net cash position): EV < Equity Value. In professional practice, other items (pensions, leases) may enter the adjustment — here we keep the simplified version.",
    exampleFr:
      "Mini-cas BlueRiver : dettes bancaires 180 M€, obligations 40 M€, cash 90 M€, équivalents 10 M€ → dette nette = 220 − 100 = 120 M€.",
    exampleEn:
      "Mini-case BlueRiver: bank debt €180M, bonds €40M, cash €90M, equivalents €10M → net debt = 220 − 100 = €120M.",
    practicalFr:
      "Listez dettes financières et cash du dernier bilan ; soustrayez. Vérifiez la cohérence : EV − dette nette = Equity.",
    practicalEn:
      "List financial debt and cash from the latest balance sheet; subtract. Check consistency: EV − net debt = Equity.",
    mistakeFr:
      "Oublier le cash : surestimer la dette nette et sous-estimer l'Equity Value dérivée de l'EV.",
    mistakeEn:
      "Forgetting cash: overstates net debt and understates Equity Value derived from EV.",
    takeawayFr: "Dette nette = dettes − cash ; elle ajuste l'EV vers l'Equity.",
    takeawayEn: "Net debt = debt − cash; it adjusts EV down to Equity.",
    decisionFr:
      "Avant tout pont de valorisation, recalculez la dette nette sur la même date de référence que l'EV.",
    decisionEn:
      "Before any valuation bridge, recalculate net debt on the same reference date as EV.",
    flashcardFrontFr: "Dette nette",
    flashcardFrontEn: "Net debt",
    flashcardBackFr: "Dettes financières − cash (et équivalents).",
    flashcardBackEn: "Financial debt − cash (and equivalents).",
    exercisePromptFr:
      "BlueRiver : dettes 220 M€, cash + équivalents 100 M€. Dette nette ? Si EV = 520 M€, Equity ?",
    exercisePromptEn:
      "BlueRiver: debt €220M, cash + equivalents €100M. Net debt? If EV = €520M, Equity?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Dettes 300 M€, cash 80 M€. Dette nette = ?",
      promptEn: "Debt €300M, cash €80M. Net debt = ?",
      explanationCorrectFr: "300 − 80 = 220 M€.",
      explanationCorrectEn: "300 − 80 = €220M.",
      difficulty: 2,
      options: [
        opt("220 M€", "€220M", true),
        opt("380 M€", "€380M", false, "On soustrait le cash, on ne l'additionne pas.", "You subtract cash, not add it."),
        opt("80 M€", "€80M", false, "80 M€ est le cash seul.", "€80M is cash only."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "EV 520 M€, dette nette 120 M€ (BlueRiver). Equity Value = ?",
        promptEn: "EV €520M, net debt €120M (BlueRiver). Equity Value = ?",
        explanationCorrectFr: "520 − 120 = 400 M€.",
        explanationCorrectEn: "520 − 120 = €400M.",
        difficulty: 2,
        options: [
          opt("400 M€", "€400M", true),
          opt("640 M€", "€640M", false, "640 = 520 + 120 ; la dette nette se soustrait.", "640 = 520 + 120; net debt is subtracted."),
          opt("120 M€", "€120M", false, "120 M€ est la dette nette.", "€120M is net debt."),
        ],
      }),
    ],
  }),

  buildCfLesson({
    slug: "ev-equity-bridge",
    titleFr: "Pont EV → Equity",
    titleEn: "EV to Equity Bridge",
    descriptionFr:
      "Construire le pont entre Enterprise Value et Equity Value avec un mini-cas chiffré.",
    descriptionEn:
      "Build the bridge between Enterprise Value and Equity Value with a numeric mini-case.",
    moduleSlug: "valuation",
    sortOrder: 3,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-valuation",
    learningObjective: "APPLY",
    objectiveFr:
      "Enchaîner multiple → EV → dette nette → Equity Value sans erreur de logique.",
    objectiveEn:
      "Chain multiple → EV → net debt → Equity Value without logic errors.",
    explanationFr:
      "Le pont EV → Equity est la séquence standard après une valorisation par multiple ou DCF : (1) estimer l'EV, (2) soustraire la dette nette, (3) obtenir l'Equity Value, (4) éventuellement diviser par le nombre d'actions. Chaque étape doit utiliser des données cohérentes (même date, même périmètre).",
    explanationEn:
      "The EV → Equity bridge is the standard sequence after a multiple or DCF valuation: (1) estimate EV, (2) subtract net debt, (3) obtain Equity Value, (4) optionally divide by share count. Each step must use consistent data (same date, same perimeter).",
    exampleFr:
      "Mini-cas GreenLog : EBITDA 40 M€, multiple pair 8,0x → EV = 40 × 8 = 320 M€. Dette nette 70 M€ → Equity = 320 − 70 = 250 M€. 50 M actions → ≈ 5 €/action.",
    exampleEn:
      "Mini-case GreenLog: EBITDA €40M, peer multiple 8.0x → EV = 40 × 8 = €320M. Net debt €70M → Equity = 320 − 70 = €250M. 50M shares → ≈ €5/share.",
    practicalFr:
      "Reproduisez le pont sur papier : notez EV, dette nette, Equity, puis prix par action. Vérifiez chaque soustraction.",
    practicalEn:
      "Reproduce the bridge on paper: note EV, net debt, Equity, then price per share. Verify each subtraction.",
    mistakeFr:
      "Multiplier l'EBITDA par un multiple puis diviser directement par les actions sans passer par la dette nette.",
    mistakeEn:
      "Multiplying EBITDA by a multiple then dividing directly by shares without bridging net debt.",
    takeawayFr: "Multiple → EV → (− dette nette) → Equity → (÷ actions) → prix implicite.",
    takeawayEn: "Multiple → EV → (− net debt) → Equity → (÷ shares) → implied price.",
    decisionFr:
      "Présentez toujours le pont complet quand vous communiquez une valorisation par action.",
    decisionEn: "Always present the full bridge when communicating a per-share valuation.",
    flashcardFrontFr: "Pont EV → Equity",
    flashcardFrontEn: "EV to Equity bridge",
    flashcardBackFr: "EV − dette nette = Equity Value.",
    flashcardBackEn: "EV − net debt = Equity Value.",
    exercisePromptFr:
      "GreenLog : EBITDA 40 M€, multiple 8x, dette nette 70 M€, 50 M actions. EV, Equity, prix ?",
    exercisePromptEn:
      "GreenLog: EBITDA €40M, multiple 8x, net debt €70M, 50M shares. EV, Equity, price?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "GreenLog : EBITDA 40 M€, multiple 8x, dette nette 70 M€. Equity Value = ?",
      promptEn: "GreenLog: EBITDA €40M, multiple 8x, net debt €70M. Equity Value = ?",
      explanationCorrectFr: "EV = 320 M€ ; Equity = 320 − 70 = 250 M€.",
      explanationCorrectEn: "EV = €320M; Equity = 320 − 70 = €250M.",
      difficulty: 2,
      options: [
        opt("250 M€", "€250M", true),
        opt("320 M€", "€320M", false, "320 M€ est l'EV avant pont.", "€320M is EV before the bridge."),
        opt("390 M€", "€390M", false, "390 = 320 + 70 ; on soustrait la dette nette.", "390 = 320 + 70; you subtract net debt."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "GreenLog : Equity 250 M€, 50 M actions. Prix implicite ≈ ?",
        promptEn: "GreenLog: Equity €250M, 50M shares. Implied price ≈ ?",
        explanationCorrectFr: "250 ÷ 50 = 5 €/action.",
        explanationCorrectEn: "250 ÷ 50 = €5/share.",
        difficulty: 2,
        options: [
          opt("5 €/action", "€5/share", true),
          opt("10 €/action", "€10/share", false, "10 € impliquerait Equity 500 M€.", "€10 would imply €500M Equity."),
          opt("0,5 €/action", "€0.5/share", false, "0,5 € sous-estime fortement (250 ÷ 50 = 5).", "€0.5 severely understates (250 ÷ 50 = 5)."),
        ],
      }),
    ],
  }),

  buildCfLesson({
    slug: "trading-multiples",
    titleFr: "Multiples de trading",
    titleEn: "Trading Multiples",
    descriptionFr:
      "Utiliser les multiples de sociétés cotées comparables pour trianguler une valeur.",
    descriptionEn:
      "Use multiples from comparable listed companies to triangulate value.",
    moduleSlug: "valuation",
    sortOrder: 4,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-valuation",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Choisir des comparables pertinents et lire un multiple de marché (EV/EBITDA, P/E).",
    objectiveEn:
      "Select relevant comparables and read a market multiple (EV/EBITDA, P/E).",
    explanationFr:
      "Les multiples de trading proviennent de sociétés cotées similaires (comps) : même secteur, taille, croissance, marges. Ils se mettent à jour avec le marché. EV/EBITDA et EV/Revenu sont des multiples « entreprise » ; P/E et P/B sont des multiples « equity ». La qualité des comps prime sur la précision apparente d'un chiffre unique.",
    explanationEn:
      "Trading multiples come from similar listed companies (comps): same sector, size, growth, margins. They update with the market. EV/EBITDA and EV/Revenue are enterprise multiples; P/E and P/B are equity multiples. Comparable quality matters more than the apparent precision of a single number.",
    exampleFr:
      "Mini-cas : trois comps affichent EV/EBITDA 7,5x / 8,0x / 8,5x (médiane 8,0x). Pour la cible (EBITDA 25 M€), EV indicative ≈ 25 × 8 = 200 M€ avant pont equity.",
    exampleEn:
      "Mini-case: three comps show EV/EBITDA 7.5x / 8.0x / 8.5x (median 8.0x). For the target (EBITDA €25M), indicative EV ≈ 25 × 8 = €200M before equity bridge.",
    practicalFr:
      "Listez 3–5 comps, notez leur multiple EV/EBITDA, calculez médiane et appliquez à l'EBITDA de la cible.",
    practicalEn:
      "List 3–5 comps, note their EV/EBITDA, compute median, and apply to target EBITDA.",
    mistakeFr:
      "Comparer une startup en forte croissance à des géants matures sans ajuster les attentes.",
    mistakeEn:
      "Comparing a high-growth startup to mature giants without adjusting expectations.",
    takeawayFr: "Trading multiples = lecture du marché coté ; les comps doivent être proches.",
    takeawayEn: "Trading multiples = reading the listed market; comps must be close peers.",
    decisionFr:
      "Retenez médiane ou fourchette de comps — pas le multiple le plus favorable.",
    decisionEn: "Use median or comp range — not the most favorable multiple.",
    flashcardFrontFr: "Multiple de trading",
    flashcardFrontEn: "Trading multiple",
    flashcardBackFr: "Ratio de valorisation issu de sociétés cotées comparables.",
    flashcardBackEn: "Valuation ratio from comparable listed companies.",
    exercisePromptFr:
      "Comps médiane EV/EBITDA 8x. Cible EBITDA 25 M€. EV indicative ?",
    exercisePromptEn:
      "Comp median EV/EBITDA 8x. Target EBITDA €25M. Indicative EV?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "EBITDA cible 25 M€, médiane comps 8,0x. EV indicative ≈ ?",
      promptEn: "Target EBITDA €25M, comp median 8.0x. Indicative EV ≈ ?",
      explanationCorrectFr: "25 × 8 = 200 M€.",
      explanationCorrectEn: "25 × 8 = €200M.",
      difficulty: 2,
      options: [
        opt("200 M€", "€200M", true),
        opt("25 M€", "€25M", false, "25 M€ est l'EBITDA, pas l'EV.", "€25M is EBITDA, not EV."),
        opt("3,125 M€", "€3,125M", false, "25 ÷ 8 ≠ EV ; on multiplie EBITDA × multiple.", "25 ÷ 8 ≠ EV; you multiply EBITDA × multiple."),
      ],
    }),
  }),

  buildCfLesson({
    slug: "ev-ebitda",
    titleFr: "Multiple EV/EBITDA",
    titleEn: "EV/EBITDA Multiple",
    descriptionFr:
      "Appliquer le multiple EV/EBITDA et dériver Equity Value via la dette nette.",
    descriptionEn:
      "Apply the EV/EBITDA multiple and derive Equity Value via net debt.",
    moduleSlug: "valuation",
    sortOrder: 5,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-valuation",
    learningObjective: "APPLY",
    objectiveFr:
      "Calculer EV = EBITDA × multiple, puis Equity = EV − dette nette.",
    objectiveEn:
      "Calculate EV = EBITDA × multiple, then Equity = EV − net debt.",
    explanationFr:
      "EV/EBITDA est le multiple d'entreprise le plus répandu. Il compare l'EV à l'EBITDA, une approximation du cash opérationnel avant structure de capital. Formule : EV = EBITDA × multiple EV/EBITDA. Ensuite : Equity Value = EV − dette nette. Un multiple plus élevé reflète croissance, risque plus faible ou qualité perçue — jamais une vérité absolue.",
    explanationEn:
      "EV/EBITDA is the most common enterprise multiple. It compares EV to EBITDA, an approximation of operating cash before capital structure. Formula: EV = EBITDA × EV/EBITDA multiple. Then: Equity Value = EV − net debt. A higher multiple reflects growth, lower risk, or perceived quality — never an absolute truth.",
    exampleFr:
      "Mini-cas ApexTools : EBITDA 50 M€, multiple 8x → EV = 50 × 8 = 400 M€. Dette nette 80 M€ → Equity = 400 − 80 = 320 M€.",
    exampleEn:
      "Mini-case ApexTools: EBITDA €50M, multiple 8x → EV = 50 × 8 = €400M. Net debt €80M → Equity = 400 − 80 = €320M.",
    practicalFr:
      "Calculez EV puis soustrayez la dette nette. Vérifiez : si le multiple monte de 1x, l'EV augmente d'exactement 1 × EBITDA.",
    practicalEn:
      "Compute EV then subtract net debt. Check: if the multiple rises by 1x, EV increases by exactly 1 × EBITDA.",
    mistakeFr:
      "Oublier que l'EBITDA n'est pas le FCF : un multiple élevé peut masquer un BFR ou CAPEX lourd.",
    mistakeEn:
      "Forgetting EBITDA is not FCF: a high multiple may hide heavy working capital or CAPEX.",
    takeawayFr: "EV = EBITDA × multiple ; Equity = EV − dette nette.",
    takeawayEn: "EV = EBITDA × multiple; Equity = EV − net debt.",
    decisionFr:
      "Croisez EV/EBITDA avec d'autres méthodes (DCF, autres multiples) avant de conclure.",
    decisionEn: "Cross-check EV/EBITDA with other methods (DCF, other multiples) before concluding.",
    flashcardFrontFr: "EV/EBITDA",
    flashcardFrontEn: "EV/EBITDA",
    flashcardBackFr: "EV = EBITDA × multiple EV/EBITDA.",
    flashcardBackEn: "EV = EBITDA × EV/EBITDA multiple.",
    exercisePromptFr:
      "ApexTools : EBITDA 50 M€, multiple 8x, dette nette 80 M€. EV et Equity ?",
    exercisePromptEn:
      "ApexTools: EBITDA €50M, multiple 8x, net debt €80M. EV and Equity?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "ApexTools : EBITDA 50 M€, multiple 8x, dette nette 80 M€. Equity Value = ?",
      promptEn: "ApexTools: EBITDA €50M, multiple 8x, net debt €80M. Equity Value = ?",
      explanationCorrectFr: "EV = 400 M€ ; Equity = 400 − 80 = 320 M€.",
      explanationCorrectEn: "EV = €400M; Equity = 400 − 80 = €320M.",
      difficulty: 2,
      options: [
        opt("320 M€", "€320M", true),
        opt("400 M€", "€400M", false, "400 M€ est l'EV avant pont.", "€400M is EV before the bridge."),
        opt("480 M€", "€480M", false, "480 = 400 + 80 ; on soustrait la dette nette.", "480 = 400 + 80; you subtract net debt."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "ApexTools : EBITDA 50 M€, multiple passe de 8x à 9x. Nouvelle EV = ?",
        promptEn: "ApexTools: EBITDA €50M, multiple rises from 8x to 9x. New EV = ?",
        explanationCorrectFr: "50 × 9 = 450 M€ (+50 M€ vs 400 M€).",
        explanationCorrectEn: "50 × 9 = €450M (+€50M vs €400M).",
        difficulty: 2,
        options: [
          opt("450 M€", "€450M", true),
          opt("400 M€", "€400M", false, "400 M€ correspond au multiple 8x.", "€400M corresponds to the 8x multiple."),
          opt("50 M€", "€50M", false, "50 M€ est l'EBITDA, pas l'EV.", "€50M is EBITDA, not EV."),
        ],
      }),
    ],
  }),

  buildCfLesson({
    slug: "free-cash-flow",
    titleFr: "Free Cash Flow",
    titleEn: "Free Cash Flow",
    descriptionFr:
      "Estimer le Free Cash Flow (FCF) comme base d'un DCF simplifié.",
    descriptionEn: "Estimate Free Cash Flow (FCF) as the basis of a simplified DCF.",
    moduleSlug: "valuation",
    sortOrder: 6,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-cash-flow",
    learningObjective: "APPLY",
    isShort: true,
    shortDurationSeconds: 165,
    objectiveFr:
      "Calculer un FCF simplifié (CFO − CAPEX) et expliquer son lien avec le DCF.",
    objectiveEn:
      "Compute simplified FCF (CFO − CAPEX) and explain its link to DCF.",
    explanationFr:
      "Le Free Cash Flow (FCF) approxime le cash disponible après investissements nécessaires. Version pédagogique : FCF ≈ cash flow d'exploitation (CFO) − CAPEX. C'est la base des modèles DCF car il représente le cash distribuable à tous les investisseurs. Une hausse du BFR peut réduire le FCF même si le résultat net augmente.",
    explanationEn:
      "Free Cash Flow (FCF) approximates cash available after required investment. Pedagogical version: FCF ≈ operating cash flow (CFO) − CAPEX. It is the basis of DCF models because it represents cash available to all investors. Rising working capital can reduce FCF even when net income rises.",
    exampleFr:
      "Mini-cas FlowTech : CFO 100 M€, CAPEX 30 M€ → FCF = 100 − 30 = 70 M€. Si le BFR absorbe 10 M€ supplémentaires, le cash réellement disponible baisse encore.",
    exampleEn:
      "Mini-case FlowTech: CFO €100M, CAPEX €30M → FCF = 100 − 30 = €70M. If working capital absorbs an extra €10M, truly available cash drops further.",
    practicalFr:
      "À partir d'un tableau de flux simplifié, isolez CFO et CAPEX. Calculez FCF année par année pour alimenter un DCF.",
    practicalEn:
      "From a simplified cash flow statement, isolate CFO and CAPEX. Compute FCF year by year to feed a DCF.",
    mistakeFr:
      "Confondre EBITDA et FCF : l'EBITDA ignore CAPEX, BFR et impôts cash.",
    mistakeEn:
      "Confusing EBITDA and FCF: EBITDA ignores CAPEX, working capital, and cash taxes.",
    takeawayFr: "FCF simplifié = CFO − CAPEX ; c'est le carburant du DCF.",
    takeawayEn: "Simplified FCF = CFO − CAPEX; it fuels the DCF.",
    decisionFr:
      "Avant un DCF, vérifiez que vos FCF projetés reflètent CAPEX et BFR, pas seulement l'EBITDA.",
    decisionEn:
      "Before a DCF, ensure projected FCF reflects CAPEX and working capital, not only EBITDA.",
    flashcardFrontFr: "FCF simplifié",
    flashcardFrontEn: "Simplified FCF",
    flashcardBackFr: "CFO − CAPEX (approximation pédagogique).",
    flashcardBackEn: "CFO − CAPEX (pedagogical approximation).",
    exercisePromptFr:
      "FlowTech : CFO 100 M€, CAPEX 30 M€. FCF ? Si CAPEX monte à 45 M€, nouveau FCF ?",
    exercisePromptEn:
      "FlowTech: CFO €100M, CAPEX €30M. FCF? If CAPEX rises to €45M, new FCF?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "CFO 100 M€, CAPEX 30 M€. FCF = ?",
      promptEn: "CFO €100M, CAPEX €30M. FCF = ?",
      explanationCorrectFr: "100 − 30 = 70 M€.",
      explanationCorrectEn: "100 − 30 = €70M.",
      difficulty: 2,
      options: [
        opt("70 M€", "€70M", true),
        opt("130 M€", "€130M", false, "On soustrait le CAPEX, pas l'additionner.", "You subtract CAPEX, not add it."),
        opt("30 M€", "€30M", false, "30 M€ est le CAPEX seul.", "€30M is CAPEX only."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "FlowTech : CFO 100 M€, CAPEX passe à 45 M€. Nouveau FCF = ?",
        promptEn: "FlowTech: CFO €100M, CAPEX rises to €45M. New FCF = ?",
        explanationCorrectFr: "100 − 45 = 55 M€.",
        explanationCorrectEn: "100 − 45 = €55M.",
        difficulty: 2,
        options: [
          opt("55 M€", "€55M", true),
          opt("70 M€", "€70M", false, "70 M€ correspond au CAPEX 30 M€.", "€70M corresponds to €30M CAPEX."),
          opt("145 M€", "€145M", false, "145 = 100 + 45 ; le CAPEX se soustrait.", "145 = 100 + 45; CAPEX is subtracted."),
        ],
      }),
    ],
  }),

  buildCfLesson({
    slug: "wacc-basics",
    titleFr: "Bases du WACC",
    titleEn: "WACC Basics",
    descriptionFr:
      "Comprendre le WACC comme taux d'actualisation dans un DCF entreprise.",
    descriptionEn:
      "Understand WACC as the discount rate in an enterprise DCF.",
    moduleSlug: "valuation",
    sortOrder: 7,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-valuation",
    learningObjective: "IDENTIFY",
    isShort: true,
    shortDurationSeconds: 155,
    objectiveFr:
      "Expliquer le rôle du WACC et l'effet d'un taux plus élevé sur la valeur actualisée.",
    objectiveEn:
      "Explain WACC's role and the effect of a higher rate on present value.",
    explanationFr:
      "Le WACC (Weighted Average Cost of Capital) est un taux d'actualisation pédagogique qui pondère le coût de la dette et le coût des fonds propres selon leur poids dans la structure de capital. Dans un DCF entreprise, on actualise les FCF au WACC pour obtenir l'EV. Plus le risque perçu monte, plus le WACC tend à monter — et plus la valeur actualisée baisse.",
    explanationEn:
      "WACC (Weighted Average Cost of Capital) is a pedagogical discount rate weighting debt cost and equity cost by their weights in the capital structure. In an enterprise DCF, FCF is discounted at WACC to obtain EV. As perceived risk rises, WACC tends to rise — and present value falls.",
    exampleFr:
      "Mini-cas simplifié : structure 60 % equity (coût 10 %), 40 % dette (coût 5 %, impôt 25 % ignoré ici) → WACC ≈ 0,6×10 % + 0,4×5 % = 8 %. Si le risque augmente et le WACC passe à 10 %, la même série de FCF vaut moins aujourd'hui.",
    exampleEn:
      "Simplified mini-case: structure 60% equity (cost 10%), 40% debt (cost 5%, tax 25% ignored here) → WACC ≈ 0.6×10% + 0.4×5% = 8%. If risk rises and WACC moves to 10%, the same FCF stream is worth less today.",
    practicalFr:
      "Notez deux WACC (bas / haut) et observez l'effet sur une valeur actualisée simple — préparation au simulateur DCF.",
    practicalEn:
      "Note two WACCs (low / high) and observe the effect on a simple present value — preparation for the DCF simulator.",
    mistakeFr:
      "Utiliser un WACC très bas sans justification : gonfle artificiellement l'EV.",
    mistakeEn:
      "Using a very low WACC without justification: artificially inflates EV.",
    takeawayFr: "WACC actualise les FCF ; plus il est élevé, plus l'EV baisse.",
    takeawayEn: "WACC discounts FCF; the higher it is, the lower EV.",
    decisionFr:
      "Testez la sensibilité de votre DCF à ±1 point de WACC avant de figer une fourchette.",
    decisionEn:
      "Test DCF sensitivity to ±1 WACC point before fixing a range.",
    flashcardFrontFr: "WACC",
    flashcardFrontEn: "WACC",
    flashcardBackFr: "Taux d'actualisation moyen pondéré (dette + equity).",
    flashcardBackEn: "Weighted average discount rate (debt + equity).",
    exercisePromptFr:
      "Structure 60 % / 40 %, coût equity 10 %, coût dette 5 %. WACC simplifié ≈ ?",
    exercisePromptEn:
      "Structure 60% / 40%, equity cost 10%, debt cost 5%. Simplified WACC ≈ ?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "60 % equity à 10 %, 40 % dette à 5 %. WACC simplifié ≈ ?",
      promptEn: "60% equity at 10%, 40% debt at 5%. Simplified WACC ≈ ?",
      explanationCorrectFr: "0,6×10 % + 0,4×5 % = 8 %.",
      explanationCorrectEn: "0.6×10% + 0.4×5% = 8%.",
      difficulty: 2,
      options: [
        opt("8 %", "8%", true),
        opt("7,5 %", "7.5%", false, "Recalculez : 6 % + 2 % = 8 %.", "Recalculate: 6% + 2% = 8%."),
        opt("15 %", "15%", false, "15 % additionne les taux bruts sans pondération.", "15% adds raw rates without weighting."),
      ],
    }),
  }),

  buildCfLesson({
    slug: "terminal-value",
    titleFr: "Valeur terminale",
    titleEn: "Terminal Value",
    descriptionFr:
      "Estimer la valeur terminale (Gordon Growth) dans un DCF simplifié.",
    descriptionEn:
      "Estimate terminal value (Gordon Growth) in a simplified DCF.",
    moduleSlug: "valuation",
    sortOrder: 8,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-valuation",
    learningObjective: "APPLY",
    objectiveFr:
      "Calculer une valeur terminale par Gordon Growth et comprendre son poids dans l'EV.",
    objectiveEn:
      "Compute terminal value via Gordon Growth and understand its weight in EV.",
    explanationFr:
      "La valeur terminale capture les flux au-delà de la période de projection explicite. Formule Gordon Growth (pédagogique) : TV = FCFₙ × (1 + g) / (WACC − g), avec g < WACC. Elle représente souvent une part majeure de l'EV — d'où l'importance des hypothèses de croissance et de WACC.",
    explanationEn:
      "Terminal value captures cash flows beyond the explicit forecast. Gordon Growth formula (pedagogical): TV = FCFₙ × (1 + g) / (WACC − g), with g < WACC. It often represents a large share of EV — hence the importance of growth and WACC assumptions.",
    exampleFr:
      "Mini-cas : dernier FCF projeté 50 M€, g = 2 %, WACC = 8 % → TV = 50 × 1,02 / (0,08 − 0,02) = 51 / 0,06 = 850 M€ (avant actualisation à la date d'évaluation).",
    exampleEn:
      "Mini-case: last projected FCF €50M, g = 2%, WACC = 8% → TV = 50 × 1.02 / (0.08 − 0.02) = 51 / 0.06 = €850M (before discounting to valuation date).",
    practicalFr:
      "Calculez TV avec Gordon Growth, puis estimez sa part dans l'EV totale. Si elle dépasse 70 %, testez des g plus prudents.",
    practicalEn:
      "Compute TV with Gordon Growth, then estimate its share of total EV. If it exceeds 70%, test more conservative g.",
    mistakeFr:
      "Choisir un g proche ou supérieur au WACC : la formule devient incohérente ou explosive.",
    mistakeEn:
      "Choosing g close to or above WACC: the formula becomes inconsistent or explosive.",
    takeawayFr: "TV = FCF × (1+g) / (WACC−g) ; souvent le cœur du DCF.",
    takeawayEn: "TV = FCF × (1+g) / (WACC−g); often the core of DCF.",
    decisionFr:
      "Croisez Gordon Growth avec un multiple de sortie pour borner la TV.",
    decisionEn: "Cross-check Gordon Growth with an exit multiple to bound TV.",
    flashcardFrontFr: "Valeur terminale (Gordon)",
    flashcardFrontEn: "Terminal value (Gordon)",
    flashcardBackFr: "FCF × (1+g) / (WACC − g), avec g < WACC.",
    flashcardBackEn: "FCF × (1+g) / (WACC − g), with g < WACC.",
    exercisePromptFr:
      "FCF 50 M€, g 2 %, WACC 8 %. TV Gordon ≈ ?",
    exercisePromptEn:
      "FCF €50M, g 2%, WACC 8%. Gordon TV ≈ ?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "FCF 50 M€, g 2 %, WACC 8 %. Valeur terminale Gordon ≈ ?",
      promptEn: "FCF €50M, g 2%, WACC 8%. Gordon terminal value ≈ ?",
      explanationCorrectFr: "51 / 0,06 = 850 M€.",
      explanationCorrectEn: "51 / 0.06 = €850M.",
      difficulty: 3,
      options: [
        opt("850 M€", "€850M", true),
        opt("625 M€", "€625M", false, "625 = 50 / 0,08 ; il faut diviser par (WACC − g).", "625 = 50 / 0.08; divide by (WACC − g)."),
        opt("51 M€", "€51M", false, "51 M€ est FCF × (1+g), pas la TV finale.", "€51M is FCF × (1+g), not final TV."),
      ],
    }),
  }),

  buildCfLesson({
    slug: "dcf-enterprise-value",
    titleFr: "DCF → Enterprise Value",
    titleEn: "DCF to Enterprise Value",
    descriptionFr:
      "Assembler FCF actualisés et valeur terminale pour obtenir l'EV.",
    descriptionEn:
      "Assemble discounted FCF and terminal value to obtain EV.",
    moduleSlug: "valuation",
    sortOrder: 9,
    estimatedMinutes: 10,
    difficulty: "ADVANCED",
    skillSlug: "cf-valuation",
    learningObjective: "APPLY",
    objectiveFr:
      "Décrire les étapes d'un DCF entreprise : FCF, WACC, TV, EV.",
    objectiveEn:
      "Describe enterprise DCF steps: FCF, WACC, TV, EV.",
    explanationFr:
      "Un DCF entreprise actualise les FCF futurs au WACC et ajoute la valeur terminale actualisée : EV = Σ FCF actualisés + VA(TV). Cette approche est indépendante de la structure de capital (la dette est traitée via le pont EV → Equity). Les hypothèses clés : trajectoire des FCF, WACC, croissance terminale.",
    explanationEn:
      "An enterprise DCF discounts future FCF at WACC and adds discounted terminal value: EV = Σ discounted FCF + PV(TV). This approach is independent of capital structure (debt is handled via the EV → Equity bridge). Key assumptions: FCF path, WACC, terminal growth.",
    exampleFr:
      "Mini-cas simplifié : VA des FCF explicites 120 M€, VA de la TV 380 M€ → EV = 120 + 380 = 500 M€. Dette nette 90 M€ → Equity = 500 − 90 = 410 M€.",
    exampleEn:
      "Simplified mini-case: PV of explicit FCF €120M, PV of TV €380M → EV = 120 + 380 = €500M. Net debt €90M → Equity = 500 − 90 = €410M.",
    practicalFr:
      "Listez les blocs : FCF par année, WACC, TV, EV, puis pont equity. Vérifiez que chaque FCF est bien actualisé.",
    practicalEn:
      "List the blocks: FCF by year, WACC, TV, EV, then equity bridge. Verify each FCF is discounted.",
    mistakeFr:
      "Oublier d'actualiser la valeur terminale à la date d'évaluation.",
    mistakeEn:
      "Forgetting to discount terminal value to the valuation date.",
    takeawayFr: "EV DCF = FCF actualisés + TV actualisée ; puis pont equity.",
    takeawayEn: "DCF EV = discounted FCF + discounted TV; then equity bridge.",
    decisionFr:
      "Comparez l'EV DCF à une valorisation par multiples : un écart large mérite une explication.",
    decisionEn:
      "Compare DCF EV to a multiples valuation: a wide gap deserves explanation.",
    flashcardFrontFr: "DCF entreprise",
    flashcardFrontEn: "Enterprise DCF",
    flashcardBackFr: "EV = Σ FCF actualisés + VA(TV).",
    flashcardBackEn: "EV = Σ discounted FCF + PV(TV).",
    exercisePromptFr:
      "VA FCF 120 M€, VA TV 380 M€, dette nette 90 M€. EV et Equity ?",
    exercisePromptEn:
      "PV FCF €120M, PV TV €380M, net debt €90M. EV and Equity?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "VA FCF 120 M€, VA TV 380 M€, dette nette 90 M€. Equity Value = ?",
      promptEn: "PV FCF €120M, PV TV €380M, net debt €90M. Equity Value = ?",
      explanationCorrectFr: "EV = 500 M€ ; Equity = 500 − 90 = 410 M€.",
      explanationCorrectEn: "EV = €500M; Equity = 500 − 90 = €410M.",
      difficulty: 3,
      options: [
        opt("410 M€", "€410M", true),
        opt("500 M€", "€500M", false, "500 M€ est l'EV, pas l'Equity.", "€500M is EV, not Equity."),
        opt("590 M€", "€590M", false, "590 = 500 + 90 ; on soustrait la dette nette.", "590 = 500 + 90; you subtract net debt."),
      ],
    }),
  }),

  buildCfLesson({
    slug: "dcf-sensitivity-basics",
    titleFr: "Sensibilité DCF",
    titleEn: "DCF Sensitivity Basics",
    descriptionFr:
      "Tester la sensibilité de l'EV aux hypothèses WACC et croissance terminale.",
    descriptionEn:
      "Test EV sensitivity to WACC and terminal growth assumptions.",
    moduleSlug: "valuation",
    sortOrder: 10,
    estimatedMinutes: 10,
    difficulty: "ADVANCED",
    skillSlug: "cf-valuation",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Interpréter comment WACC et croissance terminale déplacent l'EV dans un DCF.",
    objectiveEn:
      "Interpret how WACC and terminal growth shift EV in a DCF.",
    explanationFr:
      "Un DCF est très sensible aux hypothèses, surtout WACC et croissance terminale (g). WACC ↑ → EV ↓. g ↑ (tout en restant < WACC) → EV ↑. En pratique, on présente une matrice ou une fourchette plutôt qu'un point unique. C'est un outil de réflexion, pas une fourchette officielle de prix.",
    explanationEn:
      "A DCF is highly sensitive to assumptions, especially WACC and terminal growth (g). WACC ↑ → EV ↓. g ↑ (while remaining < WACC) → EV ↑. In practice, present a matrix or range rather than a single point. It is a thinking tool, not an official price range.",
    exampleFr:
      "Mini-cas : EV base 500 M€ à WACC 8 % et g 2 %. Si WACC monte à 9 % (g inchangé), l'EV peut descendre vers ≈ 430 M€. Si g monte à 2,5 % (WACC 8 %), l'EV peut monter vers ≈ 540 M€ — ordres de grandeur pédagogiques.",
    exampleEn:
      "Mini-case: base EV €500M at WACC 8% and g 2%. If WACC rises to 9% (g unchanged), EV may fall toward ≈ €430M. If g rises to 2.5% (WACC 8%), EV may rise toward ≈ €540M — pedagogical orders of magnitude.",
    practicalFr:
      "Dans le simulateur DCF, faites varier WACC de ±1 point et g de ±0,5 point. Notez la direction de l'EV.",
    practicalEn:
      "In the DCF simulator, vary WACC by ±1 point and g by ±0.5 point. Note EV direction.",
    mistakeFr:
      "Publier un DCF unique sans test de sensibilité : faux sentiment de précision.",
    mistakeEn:
      "Publishing a single DCF without sensitivity testing: false sense of precision.",
    takeawayFr: "WACC ↑ baisse l'EV ; g ↑ ( < WACC) l'augmente — toujours tester une fourchette.",
    takeawayEn: "WACC ↑ lowers EV; g ↑ (< WACC) raises it — always test a range.",
    decisionFr:
      "Communiquez une fourchette d'EV issue de 2–3 scénarios WACC/g, pas un seul chiffre.",
    decisionEn:
      "Communicate an EV range from 2–3 WACC/g scenarios, not a single figure.",
    simulatorFr:
      "Ouvrez le simulateur DCF de cette leçon : faites varier le WACC et la croissance terminale pour observer la sensibilité de l'Enterprise Value. Comparez un scénario de base, un scénario prudent (WACC plus élevé) et un scénario optimiste (croissance terminale légèrement plus haute).",
    simulatorEn:
      "Open the DCF simulator in this lesson: vary WACC and terminal growth to observe Enterprise Value sensitivity. Compare a base case, a conservative case (higher WACC), and an optimistic case (slightly higher terminal growth).",
    flashcardFrontFr: "Sensibilité WACC",
    flashcardFrontEn: "WACC sensitivity",
    flashcardBackFr: "WACC plus élevé → EV plus basse (tout égal par ailleurs).",
    flashcardBackEn: "Higher WACC → lower EV (all else equal).",
    exercisePromptFr:
      "EV baisse quand le WACC monte. Vrai ou faux ? Testez deux WACC dans le simulateur.",
    exercisePromptEn:
      "EV falls when WACC rises. True or false? Test two WACCs in the simulator.",
    question: q({
      type: "TRUE_FALSE",
      promptFr: "Tout égal par ailleurs, un WACC plus élevé réduit l'EV d'un DCF.",
      promptEn: "All else equal, a higher WACC reduces DCF EV.",
      explanationCorrectFr: "Vrai. Un taux d'actualisation plus élevé diminue la valeur présente des flux.",
      explanationCorrectEn: "True. A higher discount rate lowers the present value of cash flows.",
      difficulty: 2,
      options: [
        opt("Vrai", "True", true),
        opt("Faux", "False", false, "C'est un principe fondamental de l'actualisation.", "That is a fundamental discounting principle."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Tout égal par ailleurs, une croissance terminale g plus élevée (toujours < WACC) tend à…",
        promptEn: "All else equal, a higher terminal growth g (still < WACC) tends to…",
        explanationCorrectFr: "Augmenter l'EV, car la valeur terminale est plus élevée.",
        explanationCorrectEn: "Raise EV, because terminal value is higher.",
        difficulty: 2,
        options: [
          opt("Augmenter l'EV", "Raise EV", true),
          opt("Baisser l'EV", "Lower EV", false, "Une g plus haute augmente la TV (si g < WACC).", "Higher g raises TV (if g < WACC)."),
          opt("Ne pas changer l'EV", "Leave EV unchanged", false, "La TV est très sensible à g.", "TV is highly sensitive to g."),
        ],
      }),
    ],
  }),

  buildCfLesson({
    slug: "multiples-and-dcf-basics",
    titleFr: "Multiples et DCF — bases",
    titleEn: "Multiples and DCF Basics",
    descriptionFr:
      "Croiser valorisation par multiples et DCF avec les simulateurs pédagogiques.",
    descriptionEn:
      "Cross-check multiples and DCF valuation using pedagogical simulators.",
    moduleSlug: "valuation",
    sortOrder: 11,
    estimatedMinutes: 12,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-valuation",
    learningObjective: "DECIDE",
    objectiveFr:
      "Comparer une EV par multiple EV/EBITDA et une EV par DCF, puis en déduire une fourchette.",
    objectiveEn:
      "Compare EV from EV/EBITDA multiple and DCF EV, then derive a range.",
    explanationFr:
      "Les multiples et le DCF sont deux familles de méthodes qui doivent se trianguler. Multiples : rapide, ancré marché, dépend des comps. DCF : fondé sur les flux, très sensible aux hypothèses. Un écart entre les deux invite à questionner comps, FCF, WACC ou dette nette — pas à choisir automatiquement la méthode la plus favorable.",
    explanationEn:
      "Multiples and DCF are two method families that should triangulate. Multiples: fast, market-anchored, comp-dependent. DCF: cash-flow-based, highly assumption-sensitive. A gap between them invites questioning comps, FCF, WACC, or net debt — not automatically picking the most favorable method.",
    exampleFr:
      "Mini-cas SummitCo : EBITDA 20 M€, multiple 8x → EV multiples = 160 M€. DCF pédagogique → EV ≈ 145 M€. Dette nette 30 M€ → Equity multiples 130 M€ vs DCF 115 M€. Fourchette indicative Equity ≈ 115–130 M€.",
    exampleEn:
      "Mini-case SummitCo: EBITDA €20M, multiple 8x → multiples EV = €160M. Pedagogical DCF → EV ≈ €145M. Net debt €30M → multiples Equity €130M vs DCF €115M. Indicative Equity range ≈ €115–130M.",
    practicalFr:
      "Calculez EV/multiple et EV/DCF, puis Equity pour chaque. Notez l'écart en % et listez deux hypothèses à vérifier.",
    practicalEn:
      "Compute multiples EV and DCF EV, then Equity for each. Note the % gap and list two assumptions to verify.",
    mistakeFr:
      "Retenir uniquement la méthode donnant la valeur la plus haute sans analyse critique.",
    mistakeEn:
      "Keeping only the method that gives the highest value without critical analysis.",
    takeawayFr: "Multiples + DCF = triangulation ; la vérité est une fourchette raisonnée.",
    takeawayEn: "Multiples + DCF = triangulation; truth is a reasoned range.",
    decisionFr:
      "Présentez une fourchette Equity issue des deux méthodes et expliquez l'écart.",
    decisionEn:
      "Present an Equity range from both methods and explain the gap.",
    simulatorFr:
      "Ouvrez le simulateur Multiples de valorisation de cette leçon : testez EBITDA, multiple EV/EBITDA et dette nette, puis observez l'impact sur l'EV et l'Equity Value. Poursuivez avec le simulateur DCF pour comparer une approche par flux actualisés et construire une fourchette de valorisation.",
    simulatorEn:
      "Open the Valuation Multiples simulator in this lesson: try EBITDA, EV/EBITDA multiple, and net debt, then observe the impact on EV and Equity Value. Continue with the DCF simulator to compare a discounted cash flow approach and build a valuation range.",
    flashcardFrontFr: "Triangulation",
    flashcardFrontEn: "Triangulation",
    flashcardBackFr: "Croiser multiples et DCF pour une fourchette, pas un point unique.",
    flashcardBackEn: "Cross multiples and DCF for a range, not a single point.",
    exercisePromptFr:
      "SummitCo : EBITDA 20 M€, 8x → EV ? DCF EV 145 M€, dette nette 30 M€. Fourchette Equity ?",
    exercisePromptEn:
      "SummitCo: EBITDA €20M, 8x → EV? DCF EV €145M, net debt €30M. Equity range?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "SummitCo : EBITDA 20 M€, multiple 8x, dette nette 30 M€. Equity (multiples) = ?",
      promptEn: "SummitCo: EBITDA €20M, multiple 8x, net debt €30M. Equity (multiples) = ?",
      explanationCorrectFr: "EV = 160 M€ ; Equity = 160 − 30 = 130 M€.",
      explanationCorrectEn: "EV = €160M; Equity = 160 − 30 = €130M.",
      difficulty: 2,
      options: [
        opt("130 M€", "€130M", true),
        opt("160 M€", "€160M", false, "160 M€ est l'EV, pas l'Equity.", "€160M is EV, not Equity."),
        opt("100 M€", "€100M", false, "100 = 130 − 30 inversé ; on soustrait la dette nette de l'EV.", "100 reverses 130 − 30; subtract net debt from EV."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "SummitCo : DCF EV 145 M€, dette nette 30 M€. Equity (DCF) = ?",
        promptEn: "SummitCo: DCF EV €145M, net debt €30M. Equity (DCF) = ?",
        explanationCorrectFr: "145 − 30 = 115 M€.",
        explanationCorrectEn: "145 − 30 = €115M.",
        difficulty: 2,
        options: [
          opt("115 M€", "€115M", true),
          opt("145 M€", "€145M", false, "145 M€ est l'EV DCF.", "€145M is DCF EV."),
          opt("175 M€", "€175M", false, "175 = 145 + 30 ; on soustrait la dette nette.", "175 = 145 + 30; you subtract net debt."),
        ],
      }),
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Fourchette Equity SummitCo (DCF 115 M€, multiples 130 M€) ≈ ?",
        promptEn: "SummitCo Equity range (DCF €115M, multiples €130M) ≈ ?",
        explanationCorrectFr: "115–130 M€ — triangulation entre les deux méthodes.",
        explanationCorrectEn: "€115–130M — triangulation between both methods.",
        difficulty: 2,
        options: [
          opt("115–130 M€", "€115–130M", true),
          opt("Un seul point : 122,5 M€ obligatoire", "Single point: €122.5M required", false, "La moyenne seule masque l'incertitude ; présentez une fourchette.", "The mean alone hides uncertainty; present a range."),
          opt("0 M€", "€0M", false, "Les deux méthodes donnent des Equity positives.", "Both methods give positive Equity."),
        ],
      }),
    ],
  }),

  buildCfLesson({
    slug: "valuation-ranges-and-limits",
    titleFr: "Fourchettes et limites",
    titleEn: "Valuation Ranges and Limits",
    descriptionFr:
      "Présenter une fourchette de valorisation et connaître les limites des méthodes.",
    descriptionEn:
      "Present a valuation range and know the limits of each method.",
    moduleSlug: "valuation",
    sortOrder: 12,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-valuation",
    learningObjective: "DECIDE",
    objectiveFr:
      "Formuler une fourchette Equity raisonnée et lister les limites pédagogiques des outils.",
    objectiveEn:
      "State a reasoned Equity range and list pedagogical limits of the tools.",
    explanationFr:
      "Une valorisation professionnelle combine méthodes et jugement — ici, version pédagogique : présentez une fourchette (bas / central / haut) plutôt qu'un point précis. Limites à garder en tête : comps imparfaits, EBITDA ≠ FCF, DCF très sensible, données de marché volatiles, périmètre (dette nette, hors-bilan). Ce contenu n'est pas un rapport de valorisation certifié.",
    explanationEn:
      "A professional valuation combines methods and judgment — here, pedagogical version: present a range (low / mid / high) rather than a precise point. Limits to remember: imperfect comps, EBITDA ≠ FCF, DCF highly sensitive, volatile market data, perimeter (net debt, off-balance sheet). This content is not a certified valuation report.",
    exampleFr:
      "Mini-cas : Equity DCF 115 M€, Equity multiples 130 M€, scénario prudent 105 M€ → fourchette communicable 105–130 M€ avec hypothèses explicites (WACC, multiple comps, dette nette 30 M€).",
    exampleEn:
      "Mini-case: DCF Equity €115M, multiples Equity €130M, conservative scenario €105M → communicable range €105–130M with explicit assumptions (WACC, comp multiple, net debt €30M).",
    practicalFr:
      "Rédigez trois lignes : fourchette Equity, hypothèse clé de chaque borne, limite principale de votre analyse.",
    practicalEn:
      "Write three lines: Equity range, key assumption for each bound, main limit of your analysis.",
    mistakeFr:
      "Afficher une précision fictive (ex. 127,384 M€) sans fourchette ni hypothèses.",
    mistakeEn:
      "Displaying false precision (e.g. €127.384M) without a range or assumptions.",
    takeawayFr: "Communiquez une fourchette et ses limites — pas une pseudo-précision.",
    takeawayEn: "Communicate a range and its limits — not pseudo-precision.",
    decisionFr:
      "Avant toute décision, demandez : « Que doit changer une hypothèse pour sortir de la fourchette ? »",
    decisionEn:
      "Before any decision, ask: “What assumption must change to leave the range?”",
    flashcardFrontFr: "Fourchette de valorisation",
    flashcardFrontEn: "Valuation range",
    flashcardBackFr: "Bas / central / haut — avec hypothèses explicites.",
    flashcardBackEn: "Low / mid / high — with explicit assumptions.",
    exercisePromptFr:
      "Résumez une fourchette 105–130 M€ et citez deux limites de vos données.",
    exercisePromptEn:
      "Summarize a €105–130M range and cite two limits of your data.",
    question: q({
      type: "MULTIPLE_CHOICE",
      promptFr: "Quelles affirmations sur les limites sont correctes ? (Plusieurs réponses)",
      promptEn: "Which statements about limits are correct? (Multiple answers)",
      explanationCorrectFr:
        "Comps imparfaits et sensibilité DCF sont des limites réelles ; une fourchette est préférable à un point unique.",
      explanationCorrectEn:
        "Imperfect comps and DCF sensitivity are real limits; a range is preferable to a single point.",
      difficulty: 2,
      options: [
        opt("Les comps sont rarement parfaits", "Comps are rarely perfect", true),
        opt("Un DCF est sensible au WACC et à g", "DCF is sensitive to WACC and g", true),
        opt("Un multiple EV/EBITDA remplace toujours un DCF", "EV/EBITDA always replaces DCF", false, "Les méthodes se complètent, ne se remplacent pas.", "Methods complement each other, they do not replace."),
        opt("Une fourchette est plus honnête qu'un point unique", "A range is more honest than a single point", true),
      ],
    }),
  }),
];
