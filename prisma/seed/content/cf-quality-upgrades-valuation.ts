/**
 * Corporate Finance — Valuation quality upgrades (FR/EN).
 * Full replacements for selected valuation slugs: situational quizzes,
 * FCFA/EUR mini-cases, EV≠Equity chain, and simulator bridges.
 * Educational only — not a professional valuation or investment advice.
 */

import { buildCfLesson, opt, q } from "./cf-factory";
import type { CompactLesson } from "./compact";

export const CF_VALUATION_QUALITY_UPGRADES: CompactLesson[] = [
  // ── Progressive chain: EV → Equity → Bridge → Multiples → EV/EBITDA → FCF → WACC → TV → DCF → Ranges ──

  // ── B: enterprise-value ───────────────────────────────────────────────────
  buildCfLesson({
    slug: "enterprise-value",
    titleFr: "Enterprise Value",
    titleEn: "Enterprise Value",
    descriptionFr:
      "Définir l'Enterprise Value (EV) et la distinguer clairement de l'Equity Value dans un mini-cas chiffré.",
    descriptionEn:
      "Define Enterprise Value (EV) and clearly distinguish it from Equity Value in a numeric mini-case.",
    moduleSlug: "valuation",
    sortOrder: 0,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-valuation",
    learningObjective: "IDENTIFY",
    isShort: true,
    shortDurationSeconds: 160,
    objectiveFr:
      "Identifier ce que mesure l'EV (valeur pour tous les fournisseurs de capital) et la relier à Equity Value + dette nette — sans confondre avec la capitalisation boursière.",
    objectiveEn:
      "Identify what EV measures (value for all capital providers) and link it to Equity Value + net debt — without confusing it with market capitalization.",
    explanationFr:
      "L'Enterprise Value (EV) est la valeur de l'activité opérationnelle pour l'ensemble des fournisseurs de capital : actionnaires et créanciers. Formule pédagogique de départ : EV ≈ Equity Value + dette nette (dettes financières − cash). L'EV est le numérateur des multiples « entreprise » (EV/EBITDA, EV/Revenu) et la sortie d'un DCF entreprise avant le pont vers l'Equity. Elle n'est pas le cours de bourse, ni le résultat net, ni l'EBITDA. Le cash excédentaire est déjà capté dans la dette nette : plus de cash → dette nette plus basse → EV plus proche de l'Equity. Cette leçon ouvre la chaîne de valorisation : EV → Equity → pont → multiples → FCF → WACC → valeur terminale → DCF.",
    explanationEn:
      "Enterprise Value (EV) is the operating-business value for all capital providers: shareholders and creditors. Starting pedagogical formula: EV ≈ Equity Value + net debt (financial debt − cash). EV is the numerator of enterprise multiples (EV/EBITDA, EV/Revenue) and the output of an enterprise DCF before the bridge to Equity. It is not the share price, not net income, and not EBITDA. Excess cash is already reflected in net debt: more cash → lower net debt → EV closer to Equity. This lesson opens the valuation chain: EV → Equity → bridge → multiples → FCF → WACC → terminal value → DCF.",
    exampleFr:
      "Mini-cas NovaPack (Abidjan / Paris) : capitalisation (Equity Value) 480 M€, dettes financières 250 M€, cash 50 M€ → dette nette = 200 M€ → EV = 480 + 200 = 680 M€. Même logique en FCFA : Equity 288 Md FCFA, dettes 150 Md, cash 30 Md → dette nette 120 Md → EV = 408 Md FCFA. Si un analyste annonce « valeur 480 M€ » sans préciser EV ou Equity, le comité d'investissement ne sait pas s'il parle de la part actionnariale ou de l'activité entière.",
    exampleEn:
      "Mini-case NovaPack (Abidjan / Paris): market cap (Equity Value) €480M, financial debt €250M, cash €50M → net debt = €200M → EV = 480 + 200 = €680M. Same logic in FCFA: Equity 288bn FCFA, debt 150bn, cash 30bn → net debt 120bn → EV = 408bn FCFA. If an analyst says “value €480M” without stating EV or Equity, the investment committee cannot tell whether that is the equity slice or the whole business.",
    practicalFr:
      "Prenez capitalisation + bilan simplifié. (1) Dette nette = dettes − cash. (2) EV = Equity + dette nette. (3) Vérifiez : Equity = EV − dette nette. Notez explicitement « EV » ou « Equity » sur chaque slide. Reliez ensuite à la leçon Equity Value.",
    practicalEn:
      "Take market cap + a simplified balance sheet. (1) Net debt = debt − cash. (2) EV = Equity + net debt. (3) Check: Equity = EV − net debt. Label every slide explicitly “EV” or “Equity.” Then connect to the Equity Value lesson.",
    mistakeFr:
      "Confondre EV et capitalisation boursière, ou additionner Equity + dette brute (sans soustraire le cash) — cela surestime l'EV et fausse tous les multiples EV/EBITDA en aval.",
    mistakeEn:
      "Confusing EV with market cap, or adding Equity + gross debt (without subtracting cash) — that overstates EV and corrupts every downstream EV/EBITDA multiple.",
    takeawayFr:
      "EV = valeur pour actionnaires + créanciers ; Equity = part actionnariale seule. Toujours nommer laquelle.",
    takeawayEn:
      "EV = value for shareholders + creditors; Equity = equity slice only. Always name which one.",
    decisionFr:
      "Avant tout multiple ou DCF, écrivez en une ligne : « Je valorise l'EV (entreprise) ou l'Equity (actionnaires) ? » — puis calculez la dette nette de la même date.",
    decisionEn:
      "Before any multiple or DCF, write one line: “Am I valuing EV (firm) or Equity (shareholders)?” — then compute net debt on the same date.",
    flashcardFrontFr: "Enterprise Value",
    flashcardFrontEn: "Enterprise Value",
    flashcardBackFr: "Valeur de l'activité pour actionnaires + créanciers (EV ≈ Equity + dette nette).",
    flashcardBackEn: "Operating value for shareholders + creditors (EV ≈ Equity + net debt).",
    exercisePromptFr:
      "NovaPack : Equity 480 M€, dettes 250 M€, cash 50 M€. Dette nette et EV ? Reformulez en FCFA si Equity = 288 Md FCFA, dettes 150 Md, cash 30 Md.",
    exercisePromptEn:
      "NovaPack: Equity €480M, debt €250M, cash €50M. Net debt and EV? Restate in FCFA if Equity = 288bn FCFA, debt 150bn, cash 30bn.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : le comité reçoit une note « NovaPack vaut 480 M€ ». Equity Value cotée = 480 M€, dette nette = 200 M€. Que représente réellement 480 M€, et quelle est l'EV ?",
      promptEn:
        "Situation: the committee receives a note “NovaPack is worth €480M.” Listed Equity Value = €480M, net debt = €200M. What does €480M actually represent, and what is EV?",
      explanationCorrectFr:
        "480 M€ est l'Equity Value ; EV = 480 + 200 = 680 M€ (valeur pour tous les capital providers).",
      explanationCorrectEn:
        "€480M is Equity Value; EV = 480 + 200 = €680M (value for all capital providers).",
      difficulty: 2,
      options: [
        opt(
          "480 M€ = Equity ; EV = 680 M€",
          "€480M = Equity; EV = €680M",
          true
        ),
        opt(
          "480 M€ = EV ; Equity = 680 M€",
          "€480M = EV; Equity = €680M",
          false,
          "Inverser EV et Equity est l'erreur classique — on ajoute la dette nette pour passer d'Equity à EV.",
          "Swapping EV and Equity is the classic error — add net debt to go from Equity to EV."
        ),
        opt(
          "480 M€ = EBITDA ; EV = 280 M€",
          "€480M = EBITDA; EV = €280M",
          false,
          "480 M€ est une valeur de capital, pas un agrégat de résultat ; 280 = 480 − 200 serait un Equity dérivé d'une EV, pas l'inverse.",
          "€480M is a capital value, not an earnings aggregate; 280 = 480 − 200 would be Equity from EV, not the reverse."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : Equity 288 Md FCFA, dettes 150 Md, cash 30 Md. Quelle EV communiquez-vous au board ?",
        promptEn:
          "Situation: Equity 288bn FCFA, debt 150bn, cash 30bn. What EV do you report to the board?",
        explanationCorrectFr:
          "Dette nette = 120 Md ; EV = 288 + 120 = 408 Md FCFA.",
        explanationCorrectEn:
          "Net debt = 120bn; EV = 288 + 120 = 408bn FCFA.",
        difficulty: 2,
        options: [
          opt("408 Md FCFA", "408bn FCFA", true),
          opt("288 Md FCFA", "288bn FCFA", false, "288 Md est l'Equity seule.", "288bn is Equity alone."),
          opt("438 Md FCFA", "438bn FCFA", false, "438 = Equity + dette brute (sans cash) — surévaluation.", "438 = Equity + gross debt (no cash) — overstatement."),
        ],
      }),
      q({
        type: "TRUE_FALSE",
        promptFr:
          "Situation : une startup a beaucoup de cash et peu de dette. Affirmer « EV = capitalisation » est toujours exact.",
        promptEn:
          "Situation: a startup has lots of cash and little debt. Claiming “EV = market cap” is always exact.",
        explanationCorrectFr:
          "Faux. Même avec cash net, EV = Equity + dette nette (négative) → EV < Equity. Il faut toujours passer par la dette nette.",
        explanationCorrectEn:
          "False. Even with net cash, EV = Equity + net debt (negative) → EV < Equity. Always bridge through net debt.",
        difficulty: 2,
        options: [
          opt("Vrai", "True", false, "Cash net → dette nette négative → EV ≠ Equity.", "Net cash → negative net debt → EV ≠ Equity."),
          opt("Faux", "False", true),
        ],
      }),
    ],
  }),

  // ── B: equity-value ───────────────────────────────────────────────────────
  buildCfLesson({
    slug: "equity-value",
    titleFr: "Equity Value",
    titleEn: "Equity Value",
    descriptionFr:
      "Isoler la valeur pour les actionnaires et la dériver correctement depuis l'EV.",
    descriptionEn:
      "Isolate shareholder value and correctly derive it from EV.",
    moduleSlug: "valuation",
    sortOrder: 1,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-valuation",
    learningObjective: "APPLY",
    objectiveFr:
      "Calculer l'Equity Value = EV − dette nette et éviter de présenter une EV comme un prix par action.",
    objectiveEn:
      "Compute Equity Value = EV − net debt and avoid presenting EV as a per-share price.",
    explanationFr:
      "L'Equity Value est la valeur résiduelle pour les actionnaires après prise en compte de la dette nette. Formule clé : Equity Value = EV − dette nette. Pour une société cotée, la capitalisation boursière approxime l'Equity Value (sous réserve de dilution). Les multiples P/E ou P/B utilisent l'Equity au numérateur — jamais l'EV. Après un multiple EV/EBITDA ou un DCF entreprise, le pont vers l'Equity est obligatoire avant de parler de prix par action. Confondre Equity et EV fausse les discussions M&A : un vendeur qui « demande 500 M€ » doit préciser s'il parle d'EV (valeur d'entreprise) ou d'Equity (produit pour les actionnaires).",
    explanationEn:
      "Equity Value is the residual value for shareholders after net debt. Key formula: Equity Value = EV − net debt. For a listed company, market cap approximates Equity Value (subject to dilution). P/E or P/B multiples use Equity in the numerator — never EV. After an EV/EBITDA multiple or enterprise DCF, the bridge to Equity is mandatory before discussing price per share. Mixing Equity and EV corrupts M&A talks: a seller “asking €500M” must clarify EV (firm value) vs Equity (proceeds to shareholders).",
    exampleFr:
      "Mini-cas HelioSoft : EV estimée 900 M€, dette nette 150 M€ → Equity = 900 − 150 = 750 M€. Avec 75 M actions → ≈ 10 €/action. Variante FCFA : EV 540 Md FCFA, dette nette 90 Md → Equity 450 Md FCFA ; 90 M actions → 5 000 FCFA/action. Si quelqu'un divise 900 M€ d'EV par 75 M actions (= 12 €) sans pont, il surestime le prix actionnariale de 2 €.",
    exampleEn:
      "Mini-case HelioSoft: estimated EV €900M, net debt €150M → Equity = 900 − 150 = €750M. With 75M shares → ≈ €10/share. FCFA variant: EV 540bn FCFA, net debt 90bn → Equity 450bn FCFA; 90M shares → 5,000 FCFA/share. Dividing €900M EV by 75M shares (= €12) without the bridge overstates the equity price by €2.",
    practicalFr:
      "Partez d'un EV (multiple ou DCF). Soustrayez la dette nette de même date. Divisez par les actions diluées si besoin. Comparez au cours ou à l'ask vendeur — en libellant toujours « Equity ».",
    practicalEn:
      "Start from EV (multiple or DCF). Subtract same-date net debt. Divide by diluted shares if needed. Compare to the share price or seller ask — always labeling “Equity.”",
    mistakeFr:
      "Appliquer EV/EBITDA puis afficher le résultat comme prix par action sans soustraire la dette nette — confusion EV/Equity classique.",
    mistakeEn:
      "Applying EV/EBITDA then showing the result as price per share without subtracting net debt — classic EV/Equity confusion.",
    takeawayFr: "Equity = EV − dette nette ; c'est la seule base d'un prix par action.",
    takeawayEn: "Equity = EV − net debt; that alone is the base for a per-share price.",
    decisionFr:
      "Avant de communiquer un prix/action, vérifiez la chaîne : EV → (− dette nette) → Equity → (÷ actions).",
    decisionEn:
      "Before communicating a price/share, verify the chain: EV → (− net debt) → Equity → (÷ shares).",
    flashcardFrontFr: "Equity Value",
    flashcardFrontEn: "Equity Value",
    flashcardBackFr: "EV − dette nette = valeur pour les actionnaires.",
    flashcardBackEn: "EV − net debt = value for shareholders.",
    exercisePromptFr:
      "HelioSoft : EV 900 M€, dette nette 150 M€, 75 M actions. Equity et prix implicite ? Même logique : EV 540 Md FCFA, dette nette 90 Md, 90 M actions.",
    exercisePromptEn:
      "HelioSoft: EV €900M, net debt €150M, 75M shares. Equity and implied price? Same logic: EV 540bn FCFA, net debt 90bn, 90M shares.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : un banquier annonce « HelioSoft à 12 €/action » en divisant l'EV 900 M€ par 75 M actions, dette nette 150 M€. Quelle correction appliquer ?",
      promptEn:
        "Situation: a banker says “HelioSoft at €12/share” by dividing EV €900M by 75M shares; net debt is €150M. What correction applies?",
      explanationCorrectFr:
        "Equity = 750 M€ → 750 / 75 = 10 €/action. Les 12 € ignorent la dette nette (confusion EV/Equity).",
      explanationCorrectEn:
        "Equity = €750M → 750 / 75 = €10/share. €12 ignores net debt (EV/Equity confusion).",
      difficulty: 2,
      options: [
        opt("10 €/action après pont Equity", "€10/share after Equity bridge", true),
        opt("12 €/action est correct car EV = Equity", "€12/share is correct because EV = Equity", false, "EV ≠ Equity dès qu'il y a une dette nette non nulle.", "EV ≠ Equity whenever net debt is non-zero."),
        opt("8 €/action (900 − 150 − 150) / 75", "€8/share (900 − 150 − 150) / 75", false, "On ne soustrait la dette nette qu'une fois.", "Subtract net debt only once."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : EV 540 Md FCFA, dette nette 90 Md FCFA. Equity Value = ?",
        promptEn:
          "Situation: EV 540bn FCFA, net debt 90bn FCFA. Equity Value = ?",
        explanationCorrectFr: "540 − 90 = 450 Md FCFA.",
        explanationCorrectEn: "540 − 90 = 450bn FCFA.",
        difficulty: 2,
        options: [
          opt("450 Md FCFA", "450bn FCFA", true),
          opt("630 Md FCFA", "630bn FCFA", false, "630 = EV + dette nette ; on soustrait.", "630 = EV + net debt; you subtract."),
          opt("90 Md FCFA", "90bn FCFA", false, "90 Md est la dette nette seule.", "90bn is net debt alone."),
        ],
      }),
    ],
  }),

  // ── B: ev-equity-bridge ───────────────────────────────────────────────────
  buildCfLesson({
    slug: "ev-equity-bridge",
    titleFr: "Pont EV → Equity",
    titleEn: "EV to Equity Bridge",
    descriptionFr:
      "Enchaîner multiple → EV → dette nette → Equity Value → prix/action sans rupture de logique.",
    descriptionEn:
      "Chain multiple → EV → net debt → Equity Value → price/share without breaking the logic.",
    moduleSlug: "valuation",
    sortOrder: 3,
    estimatedMinutes: 11,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-valuation",
    learningObjective: "APPLY",
    objectiveFr:
      "Construire le pont complet EV → Equity sur un mini-cas et détecter les raccourcis dangereux (EBITDA × multiple ÷ actions).",
    objectiveEn:
      "Build the full EV → Equity bridge on a mini-case and spot dangerous shortcuts (EBITDA × multiple ÷ shares).",
    explanationFr:
      "Le pont EV → Equity est la séquence standard après un multiple ou un DCF : (1) estimer l'EV, (2) soustraire la dette nette, (3) obtenir l'Equity Value, (4) diviser par le nombre d'actions diluées. Chaque étape exige la même date et le même périmètre. Le raccourci « EBITDA × multiple ÷ actions » saute le pont et mélange une métrique d'entreprise avec un dénominateur actionnarial — erreur fréquente en pitch M&A. Le pont prépare aussi la suite : trading multiples, EV/EBITDA, puis FCF/DCF.",
    explanationEn:
      "The EV → Equity bridge is the standard sequence after a multiple or DCF: (1) estimate EV, (2) subtract net debt, (3) obtain Equity Value, (4) divide by diluted share count. Each step needs the same date and perimeter. The shortcut “EBITDA × multiple ÷ shares” skips the bridge and mixes an enterprise metric with an equity denominator — a common M&A pitch error. The bridge also prepares what follows: trading multiples, EV/EBITDA, then FCF/DCF.",
    exampleFr:
      "Mini-cas GreenLog : EBITDA 40 M€, multiple pair 8,0x → EV = 320 M€. Dette nette 70 M€ → Equity = 250 M€. 50 M actions → 5 €/action. En FCFA : EBITDA 24 Md, multiple 8x → EV 192 Md ; dette nette 42 Md → Equity 150 Md ; 30 M actions → 5 000 FCFA/action. Le raccourci 320 / 50 = 6,4 €/action surestime de 1,4 € car il ignore 70 M€ de dette nette.",
    exampleEn:
      "Mini-case GreenLog: EBITDA €40M, peer multiple 8.0x → EV = €320M. Net debt €70M → Equity = €250M. 50M shares → €5/share. In FCFA: EBITDA 24bn, multiple 8x → EV 192bn; net debt 42bn → Equity 150bn; 30M shares → 5,000 FCFA/share. The shortcut 320 / 50 = €6.4/share overstates by €1.4 because it ignores €70M of net debt.",
    practicalFr:
      "Sur une feuille : ligne 1 EBITDA × multiple = EV ; ligne 2 − dette nette = Equity ; ligne 3 ÷ actions = prix. Cochez chaque ligne avant de présenter.",
    practicalEn:
      "On one sheet: line 1 EBITDA × multiple = EV; line 2 − net debt = Equity; line 3 ÷ shares = price. Tick each line before presenting.",
    mistakeFr:
      "Multiplier l'EBITDA par un multiple puis diviser directement par les actions — confusion EV/Equity et multiple « entreprise » vs prix action.",
    mistakeEn:
      "Multiplying EBITDA by a multiple then dividing straight by shares — EV/Equity confusion and enterprise multiple vs share price mix-up.",
    takeawayFr:
      "Multiple → EV → (− dette nette) → Equity → (÷ actions). Aucun saut. Trade-off : multiple élevé vs dette nette élevée — le pont décide le prix/action.",
    takeawayEn:
      "Multiple → EV → (− net debt) → Equity → (÷ shares). No skips. Trade-off: high multiple vs high net debt — the bridge decides price/share.",
    decisionFr:
      "Refusez toute slide « prix/action » qui n'affiche pas explicitement le pont dette nette — interprétez l'écart EV/Equity comme risque de levier.",
    decisionEn:
      "Reject any “price/share” slide that does not explicitly show the net-debt bridge — interpret the EV/Equity gap as leverage risk.",
    flashcardFrontFr: "Pont EV → Equity",
    flashcardFrontEn: "EV to Equity bridge",
    flashcardBackFr: "EV − dette nette = Equity Value (− puis ÷ actions).",
    flashcardBackEn: "EV − net debt = Equity Value (then ÷ shares).",
    exercisePromptFr:
      "GreenLog : EBITDA 40 M€, 8x, dette nette 70 M€, 50 M actions. EV, Equity, prix ? Quel trade-off multiple vs levier ?",
    exercisePromptEn:
      "GreenLog: EBITDA €40M, 8x, net debt €70M, 50M shares. EV, Equity, price? What trade-off: multiple vs leverage?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : un analyste junior calcule « 40 M€ × 8 / 50 M = 6,4 €/action » pour GreenLog (dette nette 70 M€). Quelle est la conclusion correcte ?",
      promptEn:
        "Situation: a junior analyst computes “€40M × 8 / 50M = €6.4/share” for GreenLog (net debt €70M). What is the correct conclusion?",
      explanationCorrectFr:
        "Le raccourci ignore le pont : EV 320 − 70 = 250 → 5 €/action. 6,4 € confond EV et Equity.",
      explanationCorrectEn:
        "The shortcut skips the bridge: EV 320 − 70 = 250 → €5/share. €6.4 confuses EV and Equity.",
      difficulty: 3,
      options: [
        opt("Prix implicite correct ≈ 5 €/action après pont", "Correct implied price ≈ €5/share after bridge", true),
        opt("6,4 €/action est juste car le multiple est un multiple equity", "€6.4/share is right because the multiple is an equity multiple", false, "EV/EBITDA est un multiple d'entreprise, pas un P/E.", "EV/EBITDA is an enterprise multiple, not a P/E."),
        opt("Prix = 320 M€ / 50 M = 6,4 € car la dette nette s'annule en DCF", "Price = €320M / 50M = €6.4 because net debt cancels in DCF", false, "La dette nette ne « s'annule » pas : elle réduit l'Equity.", "Net debt does not “cancel”: it reduces Equity."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : Equity GreenLog 250 M€, 50 M actions. Prix implicite ≈ ?",
        promptEn:
          "Situation: GreenLog Equity €250M, 50M shares. Implied price ≈ ?",
        explanationCorrectFr: "250 ÷ 50 = 5 €/action.",
        explanationCorrectEn: "250 ÷ 50 = €5/share.",
        difficulty: 2,
        options: [
          opt("5 €/action", "€5/share", true),
          opt("6,4 €/action", "€6.4/share", false, "6,4 € vient du raccourci EV/actions.", "€6.4 comes from the EV/shares shortcut."),
          opt("70 €/action", "€70/share", false, "Confusion avec la dette nette en millions.", "Confused with net debt in millions."),
        ],
      }),
    ],
  }),

  // ── B: trading-multiples ──────────────────────────────────────────────────
  buildCfLesson({
    slug: "trading-multiples",
    titleFr: "Multiples de trading",
    titleEn: "Trading Multiples",
    descriptionFr:
      "Lire des multiples de comps cotés, choisir une médiane, et relier au simulateur VALUATION_MULTIPLES.",
    descriptionEn:
      "Read listed-comp multiples, pick a median, and link to the VALUATION_MULTIPLES simulator.",
    moduleSlug: "valuation",
    sortOrder: 4,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-valuation",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Analyser un set de comps, extraire une médiane EV/EBITDA pertinente, et produire une EV indicative — sans croire qu'un multiple unique « est » la valeur.",
    objectiveEn:
      "Analyze a comp set, extract a relevant EV/EBITDA median, and produce an indicative EV — without believing a single multiple “is” the value.",
    explanationFr:
      "Les multiples de trading viennent de sociétés cotées comparables (secteur, taille, croissance, marges, risque pays). EV/EBITDA et EV/Revenu sont des multiples d'entreprise ; P/E et P/B sont des multiples equity. On utilise souvent la médiane plutôt que la moyenne (moins sensible aux outliers). Un multiple n'est pas une vérité : il résume le prix que le marché paie aujourd'hui pour 1 unité d'EBITDA (ou de bénéfice) chez des pairs. Des pairs plus risqués ou moins croissants se traitent plus bas. Après l'EV indicative, le pont dette nette reste obligatoire. Entraînez-vous dans le simulateur VALUATION_MULTIPLES.",
    explanationEn:
      "Trading multiples come from comparable listed companies (sector, size, growth, margins, country risk). EV/EBITDA and EV/Revenue are enterprise multiples; P/E and P/B are equity multiples. Median is often preferred to mean (less outlier-sensitive). A multiple is not a truth: it summarizes what the market pays today for one unit of EBITDA (or earnings) at peers. Riskier or slower-growth peers trade lower. After indicative EV, the net-debt bridge remains mandatory. Practice in the VALUATION_MULTIPLES simulator.",
    exampleFr:
      "Mini-cas : trois comps EV/EBITDA 7,5x / 8,0x / 8,5x → médiane 8,0x. Cible EBITDA 25 M€ → EV indicative 200 M€. En FCFA : EBITDA cible 15 Md, médiane 8x → EV 120 Md FCFA. Si un quatrième « pair » à 14x est un pure-player hypercroissance hors marché, l'exclure ou le documenter — sinon la moyenne (9,5x) biaise la cible.",
    exampleEn:
      "Mini-case: three comps EV/EBITDA 7.5x / 8.0x / 8.5x → median 8.0x. Target EBITDA €25M → indicative EV €200M. In FCFA: target EBITDA 15bn, median 8x → EV 120bn FCFA. If a fourth “peer” at 14x is a hyper-growth pure-play outside the market, exclude or document it — otherwise the mean (9.5x) biases the target.",
    practicalFr:
      "Listez 3–5 comps, notez EV/EBITDA, calculez médiane, appliquez à l'EBITDA de la cible, puis ouvrez VALUATION_MULTIPLES pour tester sensibilité du multiple et de la dette nette.",
    practicalEn:
      "List 3–5 comps, note EV/EBITDA, compute median, apply to target EBITDA, then open VALUATION_MULTIPLES to test sensitivity of the multiple and net debt.",
    mistakeFr:
      "Prendre le multiple le plus haut du set pour « justifier » un prix vendeur, ou comparer une PME locale à des géants mondiaux sans ajustement.",
    mistakeEn:
      "Picking the highest multiple in the set to “justify” a seller price, or comparing a local SME to global giants without adjustment.",
    takeawayFr:
      "Trading multiples = lecture de marché via des pairs proches ; médiane + pont Equity, pas un chiffre magique.",
    takeawayEn:
      "Trading multiples = market reading via close peers; median + Equity bridge, not a magic number.",
    decisionFr:
      "Retenez médiane ou fourchette de comps — jamais le multiple le plus favorable sans justification écrite.",
    decisionEn:
      "Use median or a comp range — never the most favorable multiple without a written rationale.",
    simulatorFr:
      "Ouvrez le simulateur VALUATION_MULTIPLES (Multiples de valorisation) : saisissez un EBITDA (ex. 25 M€ ou 15 Md FCFA convertis), un multiple EV/EBITDA autour de la médiane des comps, puis une dette nette. Observez EV et Equity. Testez +1x / −1x de multiple : que devient la fourchette ?",
    simulatorEn:
      "Open the VALUATION_MULTIPLES simulator: enter EBITDA (e.g. €25M or a FCFA equivalent), an EV/EBITDA multiple near the peer median, then net debt. Observe EV and Equity. Test +1x / −1x on the multiple: how does the range move?",
    flashcardFrontFr: "Multiple de trading",
    flashcardFrontEn: "Trading multiple",
    flashcardBackFr: "Ratio issu de comps cotés (ex. médiane EV/EBITDA) — pas une vérité absolue.",
    flashcardBackEn: "Ratio from listed comps (e.g. median EV/EBITDA) — not an absolute truth.",
    exercisePromptFr:
      "Comps 7,5x / 8,0x / 8,5x. Médiane ? EV si EBITDA cible 25 M€ ? Relancer dans VALUATION_MULTIPLES avec dette nette 40 M€.",
    exercisePromptEn:
      "Comps 7.5x / 8.0x / 8.5x. Median? EV if target EBITDA €25M? Rerun in VALUATION_MULTIPLES with net debt €40M.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : comps 7,5x / 8,0x / 14x. Le 14x est un outlier hypercroissance US hors marché UEMOA. Quelle médiane retenir pour une cible régionale EBITDA 25 M€, et quelle EV indicative ?",
      promptEn:
        "Situation: comps 7.5x / 8.0x / 14x. The 14x is a US hyper-growth outlier outside the UEMOA market. Which median for a regional target with EBITDA €25M, and what indicative EV?",
      explanationCorrectFr:
        "Exclure 14x → médiane (7,5 et 8,0) ≈ 7,75x, souvent on retient 8,0x sur le set cohérent → EV ≈ 200 M€. Garder 14x biaiserait fortement.",
      explanationCorrectEn:
        "Drop 14x → coherent set median ≈ 8.0x → EV ≈ €200M. Keeping 14x would heavily bias the result.",
      difficulty: 3,
      options: [
        opt("Médiane ≈ 8,0x → EV ≈ 200 M€", "Median ≈ 8.0x → EV ≈ €200M", true),
        opt("Moyenne 9,8x → EV ≈ 245 M€ sans discuter l'outlier", "Mean 9.8x → EV ≈ €245M without discussing the outlier", false, "L'outlier 14x fausse la moyenne ; documentez ou excluez.", "The 14x outlier distorts the mean; document or exclude."),
        opt("14x → EV = 350 M€ car « le marché paie ça »", "14x → EV = €350M because “the market pays that”", false, "Un pair non comparable n'impose pas le multiple de la cible.", "A non-comparable peer does not set the target’s multiple."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : dans VALUATION_MULTIPLES, EBITDA 15 Md FCFA, multiple 8x, dette nette 30 Md. Equity indicative ≈ ?",
        promptEn:
          "Situation: in VALUATION_MULTIPLES, EBITDA 15bn FCFA, multiple 8x, net debt 30bn. Indicative Equity ≈ ?",
        explanationCorrectFr: "EV = 120 Md ; Equity = 120 − 30 = 90 Md FCFA.",
        explanationCorrectEn: "EV = 120bn; Equity = 120 − 30 = 90bn FCFA.",
        difficulty: 2,
        options: [
          opt("90 Md FCFA", "90bn FCFA", true),
          opt("120 Md FCFA", "120bn FCFA", false, "120 Md est l'EV avant pont.", "120bn is EV before the bridge."),
          opt("150 Md FCFA", "150bn FCFA", false, "150 = EV + dette nette ; on soustrait.", "150 = EV + net debt; you subtract."),
        ],
      }),
    ],
  }),

  // ── B: ev-ebitda ──────────────────────────────────────────────────────────
  buildCfLesson({
    slug: "ev-ebitda",
    titleFr: "Multiple EV/EBITDA",
    titleEn: "EV/EBITDA Multiple",
    descriptionFr:
      "Appliquer EV/EBITDA en expliquant pourquoi le multiple, pourquoi les pairs diffèrent, et le pont vers Equity.",
    descriptionEn:
      "Apply EV/EBITDA while explaining why the multiple, why peers differ, and the bridge to Equity.",
    moduleSlug: "valuation",
    sortOrder: 5,
    estimatedMinutes: 11,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-valuation",
    learningObjective: "APPLY",
    objectiveFr:
      "Calculer EV = EBITDA × multiple puis Equity = EV − dette nette, en justifiant le choix du multiple et en distinguant EBITDA du FCF.",
    objectiveEn:
      "Compute EV = EBITDA × multiple then Equity = EV − net debt, justifying the multiple choice and distinguishing EBITDA from FCF.",
    explanationFr:
      "EV/EBITDA compare la valeur d'entreprise à l'EBITDA — approximation du cash opérationnel avant structure de capital. On utilise un multiple parce que le marché (ou des transactions) « capitalise » déjà croissance, risque et qualité des pairs : ce n'est pas une constante physique. Des pairs avec croissance plus forte, marges plus stables ou risque pays plus bas se traitent souvent à un multiple plus élevé. Formule : EV = EBITDA × multiple ; puis Equity = EV − dette nette. Ne jamais enseigner « EBITDA × multiple = valeur » sans dire (1) pourquoi ce multiple, (2) que les pairs divergent, (3) que le résultat est une EV, pas une Equity, (4) que l'EBITDA ≠ FCF (CAPEX, BFR, impôts cash). Reliez ensuite au FCF et au DCF.",
    explanationEn:
      "EV/EBITDA compares firm value to EBITDA — an approximation of operating cash before capital structure. We use a multiple because the market (or deals) already “capitalizes” peer growth, risk, and quality: it is not a physical constant. Peers with stronger growth, stabler margins, or lower country risk often trade at higher multiples. Formula: EV = EBITDA × multiple; then Equity = EV − net debt. Never teach “EBITDA × multiple = value” without stating (1) why that multiple, (2) that peers differ, (3) that the result is EV, not Equity, (4) that EBITDA ≠ FCF (CAPEX, WC, cash taxes). Then link forward to FCF and DCF.",
    exampleFr:
      "Mini-cas ApexTools : EBITDA 50 M€. Pair A (mature, faible croissance) 7x ; pair B (croissance modérée) 8x ; pair C (forte croissance) 9x. Médiane 8x → EV = 400 M€. Dette nette 80 M€ → Equity = 320 M€. En FCFA : EBITDA 30 Md, médiane 8x → EV 240 Md ; dette nette 48 Md → Equity 192 Md. Si Apex a un CAPEX très lourd, un multiple « généreux » peut masquer un FCF faible — d'où le passage obligatoire au Free Cash Flow.",
    exampleEn:
      "Mini-case ApexTools: EBITDA €50M. Peer A (mature, low growth) 7x; peer B (moderate growth) 8x; peer C (high growth) 9x. Median 8x → EV = €400M. Net debt €80M → Equity = €320M. In FCFA: EBITDA 30bn, median 8x → EV 240bn; net debt 48bn → Equity 192bn. If Apex has heavy CAPEX, a “generous” multiple can hide weak FCF — hence the mandatory move to Free Cash Flow.",
    practicalFr:
      "Documentez en 3 lignes : (a) multiple retenu et pourquoi, (b) EV calculée, (c) Equity après dette nette. Puis comparez à un FCF / DCF dans les leçons suivantes ou via VALUATION_MULTIPLES.",
    practicalEn:
      "Document in 3 lines: (a) chosen multiple and why, (b) computed EV, (c) Equity after net debt. Then compare to FCF / DCF in following lessons or via VALUATION_MULTIPLES.",
    mistakeFr:
      "Afficher « valeur = EBITDA × multiple » comme Equity, ou ignorer que deux pairs du même secteur peuvent diverger de plusieurs tours de multiple.",
    mistakeEn:
      "Showing “value = EBITDA × multiple” as Equity, or ignoring that two same-sector peers can diverge by several turns of multiple.",
    takeawayFr:
      "EV = EBITDA × multiple justifié ; Equity = EV − dette nette ; EBITDA ≠ FCF.",
    takeawayEn:
      "EV = EBITDA × justified multiple; Equity = EV − net debt; EBITDA ≠ FCF.",
    decisionFr:
      "Si vous ne savez pas expliquer pourquoi 8x plutôt que 7x, ne figez pas un prix — présentez une fourchette.",
    decisionEn:
      "If you cannot explain why 8x rather than 7x, do not lock a price — present a range.",
    simulatorFr:
      "Dans VALUATION_MULTIPLES, partez d'EBITDA 50 M€ (ou 30 Md FCFA). Testez 7x / 8x / 9x et une dette nette 80 M€. Notez EV vs Equity à chaque multiple — le spread illustre pourquoi on ne publie pas un point unique.",
    simulatorEn:
      "In VALUATION_MULTIPLES, start from EBITDA €50M (or 30bn FCFA). Test 7x / 8x / 9x with net debt €80M. Note EV vs Equity at each multiple — the spread shows why you do not publish a single point.",
    flashcardFrontFr: "EV/EBITDA",
    flashcardFrontEn: "EV/EBITDA",
    flashcardBackFr: "EV = EBITDA × multiple (justifié) ; puis pont Equity. Pas un FCF.",
    flashcardBackEn: "EV = EBITDA × (justified) multiple; then Equity bridge. Not FCF.",
    exercisePromptFr:
      "ApexTools : EBITDA 50 M€, multiple médian 8x (pairs 7–9x), dette nette 80 M€. EV, Equity, et pourquoi pas 9x d'emblée ?",
    exercisePromptEn:
      "ApexTools: EBITDA €50M, median multiple 8x (peers 7–9x), net debt €80M. EV, Equity, and why not jump to 9x?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : un vendeur dit « Apex vaut 450 M€ car EBITDA 50 × 9 ». Les pairs médians sont à 8x, dette nette 80 M€, et Apex a un CAPEX élevé. Quelle lecture est la plus saine ?",
      promptEn:
        "Situation: a seller says “Apex is worth €450M because EBITDA 50 × 9.” Peer median is 8x, net debt €80M, and Apex has high CAPEX. What is the soundest reading?",
      explanationCorrectFr:
        "EV médiane ≈ 400 M€ → Equity ≈ 320 M€ ; 9x est le haut de fourchette et l'EBITDA ignore le CAPEX (≠ FCF). Présenter 320–370 M€ Equity selon multiple 8–9x, pas 450 M€ « valeur ».",
      explanationCorrectEn:
        "Median EV ≈ €400M → Equity ≈ €320M; 9x is the top of the range and EBITDA ignores CAPEX (≠ FCF). Show €320–370M Equity across 8–9x, not €450M as “the value.”",
      difficulty: 3,
      options: [
        opt(
          "Fourchette EV 400–450 M€ puis Equity après dette nette ; questionner le CAPEX/FCF",
          "EV range €400–450M then Equity after net debt; challenge CAPEX/FCF",
          true
        ),
        opt(
          "450 M€ = Equity Value définitive",
          "€450M = definitive Equity Value",
          false,
          "450 M€ serait une EV au multiple haut, pas l'Equity ; et le multiple n'est pas prouvé.",
          "€450M would be top-of-range EV, not Equity; and the multiple is unproven."
        ),
        opt(
          "Valeur = 50 × 9 − 80 = 370 M€ d'EBITDA",
          "Value = 50 × 9 − 80 = €370M of EBITDA",
          false,
          "370 M€ serait une Equity indicative, pas de l'« EBITDA » ; le vocabulaire compte.",
          "€370M would be indicative Equity, not “EBITDA”; vocabulary matters."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : pourquoi deux comps du même secteur peuvent-ils coter 7x et 9x EV/EBITDA ?",
        promptEn:
          "Situation: why might two same-sector comps trade at 7x and 9x EV/EBITDA?",
        explanationCorrectFr:
          "Croissance, risque, marges, gouvernance, liquidité — le multiple capitalise des différences de qualité/risque, ce n'est pas un défaut de formule.",
        explanationCorrectEn:
          "Growth, risk, margins, governance, liquidity — the multiple capitalizes quality/risk differences; it is not a formula bug.",
        difficulty: 2,
        options: [
          opt("Différences de croissance, risque ou qualité perçue", "Differences in growth, risk, or perceived quality", true),
          opt("Parce que EV = Equity toujours", "Because EV always equals Equity", false, "EV ≠ Equity ; cela n'explique pas l'écart de multiple.", "EV ≠ Equity; that does not explain the multiple gap."),
          opt("Parce que l'EBITDA égale le FCF", "Because EBITDA equals FCF", false, "EBITDA ≠ FCF ; ce n'est pas la cause de l'écart de multiple.", "EBITDA ≠ FCF; that is not why multiples diverge."),
        ],
      }),
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "ApexTools : EBITDA 50 M€, multiple 8x, dette nette 80 M€. Equity Value = ?",
        promptEn:
          "ApexTools: EBITDA €50M, multiple 8x, net debt €80M. Equity Value = ?",
        explanationCorrectFr: "EV = 400 ; Equity = 400 − 80 = 320 M€.",
        explanationCorrectEn: "EV = 400; Equity = 400 − 80 = €320M.",
        difficulty: 2,
        options: [
          opt("320 M€", "€320M", true),
          opt("400 M€", "€400M", false, "400 M€ est l'EV.", "€400M is EV."),
          opt("480 M€", "€480M", false, "480 = EV + dette nette.", "480 = EV + net debt."),
        ],
      }),
    ],
  }),

  // ── B: free-cash-flow ─────────────────────────────────────────────────────
  buildCfLesson({
    slug: "free-cash-flow",
    titleFr: "Free Cash Flow",
    titleEn: "Free Cash Flow",
    descriptionFr:
      "Estimer le FCF (CFO − CAPEX) et le positionner comme carburant du DCF — distinct de l'EBITDA.",
    descriptionEn:
      "Estimate FCF (CFO − CAPEX) and position it as DCF fuel — distinct from EBITDA.",
    moduleSlug: "valuation",
    sortOrder: 6,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-cash-flow",
    learningObjective: "APPLY",
    isShort: true,
    shortDurationSeconds: 165,
    objectiveFr:
      "Calculer un FCF simplifié et expliquer pourquoi il alimente le DCF mieux que l'EBITDA ou le résultat net.",
    objectiveEn:
      "Compute simplified FCF and explain why it feeds DCF better than EBITDA or net income.",
    explanationFr:
      "Le Free Cash Flow (FCF) approxime le cash disponible après investissements nécessaires. Version pédagogique : FCF ≈ cash flow d'exploitation (CFO) − CAPEX. C'est le carburant du DCF entreprise : on actualise des FCF, pas des EBITDA. Une hausse du résultat net ou de l'EBITDA avec CAPEX / BFR en hausse peut faire baisser le FCF. Après les multiples EV/EBITDA, le FCF corrige l'illusion « profit = cash ». La chaîne continue vers WACC, valeur terminale, puis DCF (simulateur DCF_BASICS).",
    explanationEn:
      "Free Cash Flow (FCF) approximates cash available after required investment. Pedagogical version: FCF ≈ operating cash flow (CFO) − CAPEX. It is the fuel of enterprise DCF: you discount FCF, not EBITDA. Rising net income or EBITDA with rising CAPEX / working capital can lower FCF. After EV/EBITDA multiples, FCF corrects the “profit = cash” illusion. The chain continues to WACC, terminal value, then DCF (DCF_BASICS simulator).",
    exampleFr:
      "Mini-cas FlowTech : CFO 100 M€, CAPEX 30 M€ → FCF = 70 M€. Si le BFR absorbe 10 M€ de plus (CFO tombe à 90), FCF = 60 M€ malgré un EBITDA stable. Variante FCFA : CFO 60 Md, CAPEX 18 Md → FCF 42 Md FCFA. Un multiple EV/EBITDA sur un EBITDA 80 M€ peut sembler « bon marché » alors que le FCF 40 M€ révèle un CAPEX structurel lourd — d'où le DCF.",
    exampleEn:
      "Mini-case FlowTech: CFO €100M, CAPEX €30M → FCF = €70M. If WC absorbs another €10M (CFO falls to 90), FCF = €60M despite stable EBITDA. FCFA variant: CFO 60bn, CAPEX 18bn → FCF 42bn FCFA. An EV/EBITDA multiple on €80M EBITDA can look “cheap” while €40M FCF reveals structurally heavy CAPEX — hence DCF.",
    practicalFr:
      "Sur 3 années : isolez CFO et CAPEX, calculez FCF, commentez l'écart vs EBITDA. Préparez ces FCF pour le WACC et le simulateur DCF_BASICS.",
    practicalEn:
      "Over 3 years: isolate CFO and CAPEX, compute FCF, comment the gap vs EBITDA. Prepare those FCF figures for WACC and the DCF_BASICS simulator.",
    mistakeFr:
      "Confondre EBITDA et FCF, ou actualiser le résultat net dans un DCF « entreprise » sans retraiter investissement et BFR.",
    mistakeEn:
      "Confusing EBITDA and FCF, or discounting net income in an “enterprise” DCF without adjusting for investment and working capital.",
    takeawayFr: "FCF ≈ CFO − CAPEX ; c'est le flux à actualiser — pas l'EBITDA.",
    takeawayEn: "FCF ≈ CFO − CAPEX; that is the cash flow to discount — not EBITDA.",
    decisionFr:
      "Avant un DCF, exigez une trajectoire de FCF (CAPEX + BFR) — refusez un modèle branché uniquement sur l'EBITDA.",
    decisionEn:
      "Before a DCF, demand an FCF path (CAPEX + WC) — reject a model wired only to EBITDA.",
    simulatorFr:
      "Préparez vos FCF annuels, puis ouvrez le simulateur DCF_BASICS : vous y actualiserez ces flux au WACC avec une valeur terminale. Le multiple VALUATION_MULTIPLES reste un contrôle croisé, pas un substitut au FCF.",
    simulatorEn:
      "Prepare annual FCF, then open the DCF_BASICS simulator: you will discount those cash flows at WACC with a terminal value. VALUATION_MULTIPLES remains a cross-check, not a substitute for FCF.",
    flashcardFrontFr: "FCF simplifié",
    flashcardFrontEn: "Simplified FCF",
    flashcardBackFr: "CFO − CAPEX — carburant du DCF (≠ EBITDA).",
    flashcardBackEn: "CFO − CAPEX — DCF fuel (≠ EBITDA).",
    exercisePromptFr:
      "FlowTech : CFO 100 M€, CAPEX 30 M€. FCF ? Si CAPEX → 45 M€, nouveau FCF ? Lien avec DCF_BASICS ?",
    exercisePromptEn:
      "FlowTech: CFO €100M, CAPEX €30M. FCF? If CAPEX → €45M, new FCF? Link to DCF_BASICS?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : EBITDA 80 M€ stable, mais CAPEX passe de 20 à 45 M€ et le BFR absorbe 10 M€ (CFO 100 → 90). Quel message pour le comité avant un DCF ?",
      promptEn:
        "Situation: EBITDA €80M stable, but CAPEX rises from 20 to 45 and WC absorbs €10M (CFO 100 → 90). What message for the committee before a DCF?",
      explanationCorrectFr:
        "Le FCF se détériore (ex. vers 90 − 45 = 45 M€) alors que l'EBITDA flatte. Le DCF doit partir du FCF, pas de l'EBITDA.",
      explanationCorrectEn:
        "FCF deteriorates (e.g. toward 90 − 45 = €45M) while EBITDA flatters. DCF must start from FCF, not EBITDA.",
      difficulty: 3,
      options: [
        opt("FCF en baisse malgré EBITDA stable — base DCF = FCF", "FCF falling despite stable EBITDA — DCF base = FCF", true),
        opt("EBITDA stable ⇒ valeur inchangée, ignorer le CAPEX", "Stable EBITDA ⇒ unchanged value, ignore CAPEX", false, "Le CAPEX réduit le cash disponible à actualiser.", "CAPEX reduces the cash available to discount."),
        opt("Résultat net = meilleur input DCF que le FCF", "Net income is a better DCF input than FCF", false, "Le résultat net n'est pas le cash libre après CAPEX/BFR.", "Net income is not free cash after CAPEX/WC."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Situation : CFO 60 Md FCFA, CAPEX 18 Md. FCF = ?",
        promptEn: "Situation: CFO 60bn FCFA, CAPEX 18bn. FCF = ?",
        explanationCorrectFr: "60 − 18 = 42 Md FCFA.",
        explanationCorrectEn: "60 − 18 = 42bn FCFA.",
        difficulty: 2,
        options: [
          opt("42 Md FCFA", "42bn FCFA", true),
          opt("78 Md FCFA", "78bn FCFA", false, "On soustrait le CAPEX.", "Subtract CAPEX."),
          opt("18 Md FCFA", "18bn FCFA", false, "18 Md est le CAPEX seul.", "18bn is CAPEX alone."),
        ],
      }),
    ],
  }),

  // ── B: wacc-basics ────────────────────────────────────────────────────────
  buildCfLesson({
    slug: "wacc-basics",
    titleFr: "Bases du WACC",
    titleEn: "WACC Basics",
    descriptionFr:
      "Comprendre le WACC comme taux d'actualisation et le confronter au ROIC pour des décisions de croissance.",
    descriptionEn:
      "Understand WACC as a discount rate and confront it with ROIC for growth decisions.",
    moduleSlug: "valuation",
    sortOrder: 7,
    estimatedMinutes: 11,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-valuation",
    learningObjective: "IDENTIFY",
    isShort: true,
    shortDurationSeconds: 155,
    objectiveFr:
      "Identifier le rôle du WACC dans le DCF et conclure quand ROIC < WACC sur une croissance financée par nouveau capital.",
    objectiveEn:
      "Identify WACC’s role in DCF and conclude when ROIC < WACC on growth funded by new capital.",
    explanationFr:
      "Le WACC (Weighted Average Cost of Capital) pondère le coût des fonds propres et le coût de la dette selon la structure de capital. Dans un DCF entreprise, les FCF sont actualisés au WACC pour obtenir l'EV. WACC ↑ → valeur actuelle ↓. Le ROIC (retour sur capital investi) mesure ce que l'activité gagne sur le capital ; le ROE mesure le retour pour les actionnaires — ne pas les confondre. Règle de décision pédagogique : si ROIC < WACC et que la croissance est financée par du nouveau capital, la croissance détruit de la valeur. Préparez la valeur terminale et le simulateur DCF_BASICS.",
    explanationEn:
      "WACC (Weighted Average Cost of Capital) weights equity cost and debt cost by capital structure. In an enterprise DCF, FCF is discounted at WACC to obtain EV. WACC ↑ → present value ↓. ROIC (return on invested capital) measures what the business earns on capital; ROE measures shareholder return — do not confuse them. Pedagogical decision rule: if ROIC < WACC and growth is funded with new capital, growth destroys value. Prepare terminal value and the DCF_BASICS simulator.",
    exampleFr:
      "Structure 60 % equity à 10 %, 40 % dette à 5 % (impôt ignoré) → WACC ≈ 8 %. Mini-cas décision : ROIC 8 %, WACC 11 %, plan de croissance financé par augmentations de capital et dettes nouvelles → chaque euro investi rapporte moins que son coût → destruction de valeur. Variante FCFA : projet usine 12 Md FCFA de capital nouveau, ROIC attendu 8 %, WACC 11 % → même conclusion. Si ROIC 14 % > WACC 11 %, la croissance financée crée de la valeur (toutes choses égales).",
    exampleEn:
      "Structure 60% equity at 10%, 40% debt at 5% (tax ignored) → WACC ≈ 8%. Decision mini-case: ROIC 8%, WACC 11%, growth plan funded by new equity and debt → each invested euro earns less than its cost → value destruction. FCFA variant: plant project 12bn FCFA new capital, expected ROIC 8%, WACC 11% → same conclusion. If ROIC 14% > WACC 11%, funded growth creates value (all else equal).",
    practicalFr:
      "Calculez un WACC simplifié, puis comparez-le au ROIC du projet/entreprise. Notez la décision croissance / pause. Sensibilisez ±1 pt de WACC dans DCF_BASICS.",
    practicalEn:
      "Compute a simplified WACC, then compare it to project/firm ROIC. Record grow / pause. Sensitize ±1 WACC point in DCF_BASICS.",
    mistakeFr:
      "Confondre ROIC et ROE, ou baisser le WACC « pour faire monter » l'EV sans justification de risque.",
    mistakeEn:
      "Confusing ROIC and ROE, or cutting WACC “to lift” EV without a risk rationale.",
    takeawayFr:
      "WACC actualise les FCF ; ROIC vs WACC décide si la croissance financée crée ou détruit de la valeur.",
    takeawayEn:
      "WACC discounts FCF; ROIC vs WACC decides whether funded growth creates or destroys value.",
    decisionFr:
      "Si ROIC < WACC sur un plan de croissance à capital nouveau : freiner, améliorer les retours, ou renoncer — ne pas « pousser le volume ».",
    decisionEn:
      "If ROIC < WACC on a new-capital growth plan: slow down, improve returns, or stop — do not “push volume.”",
    simulatorFr:
      "Dans DCF_BASICS, fixez une trajectoire de FCF et faites varier le WACC de 8 % à 11 %. Observez la chute d'EV. Reliez mentalement : un projet à ROIC 8 % financé au coût 11 % ne compensera pas cette exigence.",
    simulatorEn:
      "In DCF_BASICS, fix an FCF path and move WACC from 8% to 11%. Watch EV fall. Mentally link: a project earning ROIC 8% funded at 11% cost will not clear that hurdle.",
    flashcardFrontFr: "WACC vs ROIC",
    flashcardFrontEn: "WACC vs ROIC",
    flashcardBackFr: "ROIC < WACC + croissance à capital nouveau → destruction de valeur.",
    flashcardBackEn: "ROIC < WACC + new-capital growth → value destruction.",
    exercisePromptFr:
      "60/40, coûts 10 % / 5 %. WACC ≈ ? Puis : ROIC 8 %, WACC 11 %, croissance financée — conclusion ?",
    exercisePromptEn:
      "60/40, costs 10% / 5%. WACC ≈? Then: ROIC 8%, WACC 11%, funded growth — conclusion?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : ROIC 8 %, WACC 11 %. La direction veut accélérer la croissance via de nouvelles dettes et une augmentation de capital. Conclusion pédagogique ?",
      promptEn:
        "Situation: ROIC 8%, WACC 11%. Management wants to accelerate growth via new debt and an equity raise. Pedagogical conclusion?",
      explanationCorrectFr:
        "Croissance financée par du capital nouveau alors que ROIC < WACC → destruction de valeur. Améliorer le ROIC ou freiner.",
      explanationCorrectEn:
        "Growth funded with new capital while ROIC < WACC → value destruction. Improve ROIC or slow down.",
      difficulty: 3,
      options: [
        opt("Destruction de valeur probable — freiner ou hausser le ROIC", "Likely value destruction — slow down or raise ROIC", true),
        opt("Création de valeur car le ROE montera forcément", "Value creation because ROE will necessarily rise", false, "ROE ≠ ROIC ; un ROE en hausse peut masquer une mauvaise allocation du capital total.", "ROE ≠ ROIC; rising ROE can mask poor allocation of total capital."),
        opt("Accretion automatique car plus d'EBITDA", "Automatic accretion because more EBITDA", false, "Plus d'EBITDA avec ROIC sous le WACC n'implique pas de création de valeur.", "More EBITDA with ROIC below WACC does not imply value creation."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : 60 % equity à 10 %, 40 % dette à 5 %. WACC simplifié ≈ ?",
        promptEn:
          "Situation: 60% equity at 10%, 40% debt at 5%. Simplified WACC ≈ ?",
        explanationCorrectFr: "0,6×10 % + 0,4×5 % = 8 %.",
        explanationCorrectEn: "0.6×10% + 0.4×5% = 8%.",
        difficulty: 2,
        options: [
          opt("8 %", "8%", true),
          opt("15 %", "15%", false, "15 % additionne sans pondérer.", "15% adds without weighting."),
          opt("5 %", "5%", false, "5 % est le coût de la dette seule.", "5% is debt cost alone."),
        ],
      }),
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : projet 12 Md FCFA, ROIC 14 %, WACC 11 %. Croissance financée par ce capital — lecture ?",
        promptEn:
          "Situation: 12bn FCFA project, ROIC 14%, WACC 11%. Growth funded by this capital — reading?",
        explanationCorrectFr:
          "ROIC > WACC → la croissance financée crée de la valeur (cadre pédagogique, toutes choses égales).",
        explanationCorrectEn:
          "ROIC > WACC → funded growth creates value (pedagogical frame, all else equal).",
        difficulty: 2,
        options: [
          opt("Création de valeur (ROIC > WACC)", "Value creation (ROIC > WACC)", true),
          opt("Destruction de valeur (il faut ROE > WACC seulement)", "Value destruction (only ROE > WACC matters)", false, "Pour le capital total investi, c'est le ROIC qu'on compare au WACC.", "For total invested capital, compare ROIC to WACC."),
          opt("Neutre car EV = Equity", "Neutral because EV = Equity", false, "EV ≠ Equity ; hors sujet pour ROIC/WACC.", "EV ≠ Equity; irrelevant to ROIC/WACC."),
        ],
      }),
    ],
  }),

  // ── B: terminal-value ─────────────────────────────────────────────────────
  buildCfLesson({
    slug: "terminal-value",
    titleFr: "Valeur terminale",
    titleEn: "Terminal Value",
    descriptionFr:
      "Calculer la valeur terminale (Gordon Growth) et comprendre son poids dans l'EV DCF.",
    descriptionEn:
      "Compute terminal value (Gordon Growth) and understand its weight in DCF EV.",
    moduleSlug: "valuation",
    sortOrder: 8,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-valuation",
    learningObjective: "APPLY",
    objectiveFr:
      "Appliquer TV = FCFₙ×(1+g)/(WACC−g) avec g < WACC et mesurer le poids de la TV dans l'EV.",
    objectiveEn:
      "Apply TV = FCFₙ×(1+g)/(WACC−g) with g < WACC and measure TV’s weight in EV.",
    explanationFr:
      "La valeur terminale (TV) capture les flux au-delà de l'horizon explicite. Gordon Growth pédagogique : TV = FCFₙ × (1 + g) / (WACC − g), avec g strictement inférieur au WACC. La TV représente souvent 60–80 % de l'EV — d'où la sensibilité à g et au WACC. Une alternative est le multiple de sortie (ex. EV/EBITDA de sortie), à croiser avec Gordon. Ensuite on actualise la TV à la date d'évaluation. Enchaînement : FCF → WACC → TV → DCF_BASICS.",
    explanationEn:
      "Terminal value (TV) captures cash flows beyond the explicit horizon. Pedagogical Gordon Growth: TV = FCFₙ × (1 + g) / (WACC − g), with g strictly below WACC. TV often represents 60–80% of EV — hence sensitivity to g and WACC. An alternative is an exit multiple (e.g. exit EV/EBITDA), to cross-check with Gordon. Then discount TV to the valuation date. Sequence: FCF → WACC → TV → DCF_BASICS.",
    exampleFr:
      "Mini-cas : FCFₙ 50 M€, g 2 %, WACC 8 % → TV = 50 × 1,02 / 0,06 = 850 M€ (en fin d'année n, avant actualisation). Si VA des FCF explicites = 200 M€ et VA(TV) = 600 M€ → EV = 800 M€, TV ≈ 75 % de l'EV. En FCFA : FCFₙ 30 Md, g 2 %, WACC 8 % → TV = 30 × 1,02 / 0,06 = 510 Md FCFA.",
    exampleEn:
      "Mini-case: FCFₙ €50M, g 2%, WACC 8% → TV = 50 × 1.02 / 0.06 = €850M (at end of year n, before discounting). If PV of explicit FCF = €200M and PV(TV) = €600M → EV = €800M, TV ≈ 75% of EV. In FCFA: FCFₙ 30bn, g 2%, WACC 8% → TV = 30 × 1.02 / 0.06 = 510bn FCFA.",
    practicalFr:
      "Calculez TV Gordon, estimez sa part dans l'EV, testez g = 1,5 % / 2 % / 2,5 % dans DCF_BASICS. Si TV > 80 % de l'EV, documentez le risque d'hypothèse.",
    practicalEn:
      "Compute Gordon TV, estimate its share of EV, test g = 1.5% / 2% / 2.5% in DCF_BASICS. If TV > 80% of EV, document assumption risk.",
    mistakeFr:
      "Choisir g ≥ WACC (formule explosive) ou oublier d'actualiser la TV à aujourd'hui.",
    mistakeEn:
      "Choosing g ≥ WACC (explosive formula) or forgetting to discount TV to today.",
    takeawayFr:
      "TV = FCF×(1+g)/(WACC−g) ; souvent le cœur — et le risque — du DCF. Trade-off : g élevé vs crédibilité long terme.",
    takeawayEn:
      "TV = FCF×(1+g)/(WACC−g); often the core — and the risk — of DCF. Trade-off: high g vs long-term credibility.",
    decisionFr:
      "Bornez la TV : Gordon + multiple de sortie ; refusez g « confortable » sans benchmark — interprétez une TV > 80 % de l'EV comme risque d'hypothèse.",
    decisionEn:
      "Bound TV: Gordon + exit multiple; reject a “comfortable” g without a benchmark — interpret TV > 80% of EV as assumption risk.",
    simulatorFr:
      "Dans DCF_BASICS, isolez l'effet de la croissance terminale g à WACC constant. Notez EV et la part implicite de la TV. Croisez avec un multiple de sortie proche de VALUATION_MULTIPLES.",
    simulatorEn:
      "In DCF_BASICS, isolate terminal growth g at constant WACC. Note EV and TV’s implied share. Cross-check with an exit multiple near VALUATION_MULTIPLES.",
    flashcardFrontFr: "Valeur terminale (Gordon)",
    flashcardFrontEn: "Terminal value (Gordon)",
    flashcardBackFr: "FCF × (1+g) / (WACC − g), g < WACC — puis actualiser.",
    flashcardBackEn: "FCF × (1+g) / (WACC − g), g < WACC — then discount.",
    exercisePromptFr:
      "FCF 50 M€, g 2 %, WACC 8 %. TV ? Si VA FCF 200 et VA TV 600, part de la TV dans l'EV ? Quel trade-off g vs WACC ?",
    exercisePromptEn:
      "FCF €50M, g 2%, WACC 8%. TV? If PV FCF 200 and PV TV 600, TV share of EV? What trade-off: g vs WACC?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : FCFₙ 50 M€, g 2 %, WACC 8 %. Un stagiaire propose g = 8 % « comme le WACC » pour simplifier. Que faire ?",
      promptEn:
        "Situation: FCFₙ €50M, g 2%, WACC 8%. An intern proposes g = 8% “same as WACC” for simplicity. What should you do?",
      explanationCorrectFr:
        "g doit rester < WACC. Avec g = 8 % le dénominateur est nul / incohérent. Garder g prudent (ex. 2 %) → TV = 850 M€.",
      explanationCorrectEn:
        "g must stay < WACC. At g = 8% the denominator is zero / incoherent. Keep a prudent g (e.g. 2%) → TV = €850M.",
      difficulty: 3,
      options: [
        opt("Refuser g = WACC ; TV Gordon ≈ 850 M€ à g 2 %", "Reject g = WACC; Gordon TV ≈ €850M at g 2%", true),
        opt("Accepter g = 8 % car « croissance = coût du capital »", "Accept g = 8% because “growth = cost of capital”", false, "g = WACC casse Gordon Growth ; ce n'est pas une identité économique à imposer.", "g = WACC breaks Gordon Growth; it is not an identity to impose."),
        opt("TV = 50 / 0,08 = 625 M€ en ignorant g", "TV = 50 / 0.08 = €625M ignoring g", false, "Gordon utilise (1+g)/(WACC−g), pas FCF/WACC seul sauf cas limite g=0.", "Gordon uses (1+g)/(WACC−g), not FCF/WACC alone except the g=0 limit."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : VA FCF explicites 200 M€, VA(TV) 600 M€. Part de la TV dans l'EV ≈ ?",
        promptEn:
          "Situation: PV explicit FCF €200M, PV(TV) €600M. TV share of EV ≈ ?",
        explanationCorrectFr: "EV = 800 ; TV = 600 / 800 = 75 %.",
        explanationCorrectEn: "EV = 800; TV = 600 / 800 = 75%.",
        difficulty: 2,
        options: [
          opt("75 %", "75%", true),
          opt("25 %", "25%", false, "25 % serait la part des FCF explicites.", "25% would be the explicit FCF share."),
          opt("100 %", "100%", false, "Les FCF explicites comptent aussi.", "Explicit FCF counts too."),
        ],
      }),
    ],
  }),

  // ── C: dcf-enterprise-value ───────────────────────────────────────────────
  buildCfLesson({
    slug: "dcf-enterprise-value",
    titleFr: "DCF → Enterprise Value",
    titleEn: "DCF to Enterprise Value",
    descriptionFr:
      "Assembler FCF actualisés et TV pour obtenir l'EV — en rappelant EV ≠ Equity — via DCF_BASICS et VALUATION_MULTIPLES.",
    descriptionEn:
      "Assemble discounted FCF and TV into EV — stressing EV ≠ Equity — via DCF_BASICS and VALUATION_MULTIPLES.",
    moduleSlug: "valuation",
    sortOrder: 9,
    estimatedMinutes: 12,
    difficulty: "ADVANCED",
    skillSlug: "cf-valuation",
    learningObjective: "APPLY",
    objectiveFr:
      "Appliquer la chaîne FCF → WACC → TV → EV DCF, puis pont Equity, et croiser avec un multiple dans les simulateurs.",
    objectiveEn:
      "Apply the FCF → WACC → TV → DCF EV chain, then Equity bridge, and cross-check with a multiple in the simulators.",
    explanationFr:
      "Un DCF entreprise actualise les FCF au WACC et ajoute la valeur terminale actualisée : EV = Σ FCF actualisés + VA(TV). L'EV DCF n'est pas l'Equity Value : la dette nette se traite ensuite dans le pont. Chaîne complète vue dans le module : EV concept → Equity → pont → multiples → EV/EBITDA → FCF → WACC → TV → ce DCF. Hypothèses critiques : trajectoire FCF (pas EBITDA), WACC cohérent avec le risque, g < WACC. Un écart vs VALUATION_MULTIPLES invite à questionner comps, FCF ou WACC — pas à choisir automatiquement le chiffre le plus haut. Contenu pédagogique, pas une opinion de valorisation certifiée.",
    explanationEn:
      "An enterprise DCF discounts FCF at WACC and adds discounted terminal value: EV = Σ discounted FCF + PV(TV). DCF EV is not Equity Value: net debt is handled next in the bridge. Full module chain: EV concept → Equity → bridge → multiples → EV/EBITDA → FCF → WACC → TV → this DCF. Critical assumptions: FCF path (not EBITDA), WACC aligned with risk, g < WACC. A gap vs VALUATION_MULTIPLES invites questioning comps, FCF, or WACC — not automatically picking the higher number. Educational content, not a certified valuation opinion.",
    exampleFr:
      "Mini-cas SummitDCF : VA des FCF explicites 120 M€, VA(TV) 380 M€ → EV = 500 M€. Dette nette 90 M€ → Equity = 410 M€. Contrôle multiples : EBITDA 55 M€ × 8,5x ≈ EV 467,5 M€ → Equity ≈ 377,5 M€. Fourchette Equity indicative ≈ 380–410 M€. En FCFA : VA FCF 72 Md + VA TV 228 Md = EV 300 Md ; dette nette 54 Md → Equity 246 Md FCFA.",
    exampleEn:
      "Mini-case SummitDCF: PV of explicit FCF €120M, PV(TV) €380M → EV = €500M. Net debt €90M → Equity = €410M. Multiples check: EBITDA €55M × 8.5x ≈ EV €467.5M → Equity ≈ €377.5M. Indicative Equity range ≈ €380–410M. In FCFA: PV FCF 72bn + PV TV 228bn = EV 300bn; net debt 54bn → Equity 246bn FCFA.",
    practicalFr:
      "Listez les blocs sur une page : FCF par année, WACC, TV, EV, dette nette, Equity. Ouvrez DCF_BASICS pour l'EV, puis VALUATION_MULTIPLES pour le contrôle croisé. Expliquez tout écart > 10 %.",
    practicalEn:
      "List blocks on one page: FCF by year, WACC, TV, EV, net debt, Equity. Open DCF_BASICS for EV, then VALUATION_MULTIPLES for the cross-check. Explain any gap > 10%.",
    mistakeFr:
      "Présenter l'EV DCF comme prix payable aux actionnaires, ou brancher le DCF sur l'EBITDA sans passer par le FCF.",
    mistakeEn:
      "Presenting DCF EV as the price payable to shareholders, or wiring DCF to EBITDA without going through FCF.",
    takeawayFr:
      "EV DCF = FCF actualisés + TV actualisée ; Equity = EV − dette nette ; croiser avec multiples.",
    takeawayEn:
      "DCF EV = discounted FCF + discounted TV; Equity = EV − net debt; cross-check with multiples.",
    decisionFr:
      "Ne figez un prix qu'après (1) DCF_BASICS, (2) VALUATION_MULTIPLES, (3) pont Equity documenté.",
    decisionEn:
      "Lock a price only after (1) DCF_BASICS, (2) VALUATION_MULTIPLES, (3) a documented Equity bridge.",
    simulatorFr:
      "Obligatoire : ouvrez DCF_BASICS — saisissez FCF, WACC et croissance terminale, lisez l'Enterprise Value, puis soustrayez la dette nette pour l'Equity. Enchaînez sur VALUATION_MULTIPLES avec le même EBITDA/dette nette : construisez une fourchette EV/Equity et expliquez l'écart (FCF vs EBITDA, WACC vs multiple de marché).",
    simulatorEn:
      "Required: open DCF_BASICS — enter FCF, WACC, and terminal growth, read Enterprise Value, then subtract net debt for Equity. Continue in VALUATION_MULTIPLES with the same EBITDA/net debt: build an EV/Equity range and explain the gap (FCF vs EBITDA, WACC vs market multiple).",
    flashcardFrontFr: "DCF entreprise → EV",
    flashcardFrontEn: "Enterprise DCF → EV",
    flashcardBackFr: "EV = Σ FCF act. + VA(TV) ; ≠ Equity tant que la dette nette n'est pas bridgée.",
    flashcardBackEn: "EV = Σ disc. FCF + PV(TV); ≠ Equity until net debt is bridged.",
    exercisePromptFr:
      "VA FCF 120 M€, VA TV 380 M€, dette nette 90 M€. EV et Equity ? Contrôle : EBITDA 55 × 8,5x ?",
    exercisePromptEn:
      "PV FCF €120M, PV TV €380M, net debt €90M. EV and Equity? Check: EBITDA 55 × 8.5x?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : DCF_BASICS donne VA FCF 120 M€ + VA TV 380 M€. Un associé envoie « valorisation 500 M€ aux actionnaires ». Dette nette 90 M€. Quelle correction ?",
      promptEn:
        "Situation: DCF_BASICS shows PV FCF €120M + PV TV €380M. A partner emails “€500M valuation to shareholders.” Net debt €90M. What correction?",
      explanationCorrectFr:
        "500 M€ est l'EV. Equity = 500 − 90 = 410 M€. EV ≠ Equity Value.",
      explanationCorrectEn:
        "€500M is EV. Equity = 500 − 90 = €410M. EV ≠ Equity Value.",
      difficulty: 3,
      options: [
        opt("Equity ≈ 410 M€ (EV 500 − dette nette 90)", "Equity ≈ €410M (EV 500 − net debt 90)", true),
        opt("500 M€ est déjà l'Equity car le DCF actualise le résultat net", "€500M is already Equity because DCF discounts net income", false, "Un DCF entreprise actualise des FCF pour l'EV, pas le résultat net pour l'Equity.", "An enterprise DCF discounts FCF to EV, not net income to Equity."),
        opt("590 M€ aux actionnaires (500 + 90)", "€590M to shareholders (500 + 90)", false, "On soustrait la dette nette pour passer d'EV à Equity.", "Subtract net debt to go from EV to Equity."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : EV DCF 500 M€, EV multiples (55 × 8,5) ≈ 468 M€, dette nette 90 M€. Quelle fourchette Equity présenter ?",
        promptEn:
          "Situation: DCF EV €500M, multiples EV (55 × 8.5) ≈ €468M, net debt €90M. Which Equity range to present?",
        explanationCorrectFr:
          "Equity DCF 410 vs multiples ≈ 378 → fourchette ≈ 380–410 M€, pas un seul point.",
        explanationCorrectEn:
          "DCF Equity 410 vs multiples ≈ 378 → range ≈ €380–410M, not a single point.",
        difficulty: 3,
        options: [
          opt("≈ 380–410 M€ Equity", "≈ €380–410M Equity", true),
          opt("Un seul point : 500 M€", "Single point: €500M", false, "500 M€ est l'EV DCF, pas l'Equity, et ignore le contrôle multiples.", "€500M is DCF EV, not Equity, and ignores the multiples check."),
          opt("Uniquement 468 M€ car les multiples battent toujours le DCF", "Only €468M because multiples always beat DCF", false, "Les méthodes se croisent ; on ne couronne pas automatiquement les multiples.", "Methods cross-check; you do not automatically crown multiples."),
        ],
      }),
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "VA FCF 72 Md FCFA, VA TV 228 Md, dette nette 54 Md. Equity = ?",
        promptEn:
          "PV FCF 72bn FCFA, PV TV 228bn, net debt 54bn. Equity = ?",
        explanationCorrectFr: "EV = 300 Md ; Equity = 300 − 54 = 246 Md FCFA.",
        explanationCorrectEn: "EV = 300bn; Equity = 300 − 54 = 246bn FCFA.",
        difficulty: 2,
        options: [
          opt("246 Md FCFA", "246bn FCFA", true),
          opt("300 Md FCFA", "300bn FCFA", false, "300 Md est l'EV.", "300bn is EV."),
          opt("354 Md FCFA", "354bn FCFA", false, "354 = EV + dette nette.", "354 = EV + net debt."),
        ],
      }),
    ],
  }),

  // ── B: valuation-ranges-and-limits ────────────────────────────────────────
  buildCfLesson({
    slug: "valuation-ranges-and-limits",
    titleFr: "Fourchettes et limites",
    titleEn: "Valuation Ranges and Limits",
    descriptionFr:
      "Communiquer une fourchette Equity raisonnée et les limites des méthodes (multiples, DCF, données).",
    descriptionEn:
      "Communicate a reasoned Equity range and the limits of methods (multiples, DCF, data).",
    moduleSlug: "valuation",
    sortOrder: 12,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-valuation",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider d'une fourchette Equity (bas / central / haut) en explicitant hypothèses et limites — pas une pseudo-précision.",
    objectiveEn:
      "Decide an Equity range (low / mid / high) with explicit assumptions and limits — not pseudo-precision.",
    explanationFr:
      "Après toute la chaîne (EV, Equity, pont, multiples, EV/EBITDA, FCF, WACC, TV, DCF), une valorisation pédagogique se communique en fourchette. Limites récurrentes : comps imparfaits, EBITDA ≠ FCF, DCF très sensible à WACC/g, dette nette incomplète (leases, pensions), marchés volatils, risque pays. Les simulateurs DCF_BASICS et VALUATION_MULTIPLES aident à visualiser la sensibilité — ils ne produisent pas une « vraie » valeur unique. Ce contenu n'est pas un rapport de valorisation certifié ni un conseil en investissement.",
    explanationEn:
      "After the full chain (EV, Equity, bridge, multiples, EV/EBITDA, FCF, WACC, TV, DCF), a pedagogical valuation is communicated as a range. Recurring limits: imperfect comps, EBITDA ≠ FCF, DCF highly sensitive to WACC/g, incomplete net debt (leases, pensions), volatile markets, country risk. DCF_BASICS and VALUATION_MULTIPLES help visualize sensitivity — they do not produce a single “true” value. This content is not a certified valuation report or investment advice.",
    exampleFr:
      "Mini-cas : Equity DCF 410 M€, Equity multiples 378 M€, scénario prudent (WACC +1 pt) 360 M€ → fourchette communicable 360–410 M€ avec hypothèses listées. En FCFA : 216–246 Md FCFA. Afficher « 394,27 M€ » sans fourchette crée une fausse précision et masque EV≠Equity si le lecteur croit encore parler d'EV.",
    exampleEn:
      "Mini-case: DCF Equity €410M, multiples Equity €378M, prudent scenario (WACC +1 pt) €360M → communicable range €360–410M with listed assumptions. In FCFA: 216–246bn FCFA. Showing “€394.27M” without a range creates false precision and hides EV≠Equity if the reader still thinks in EV terms.",
    practicalFr:
      "Rédigez : (1) fourchette Equity, (2) hypothèse de chaque borne, (3) deux limites (comps / WACC / dette nette), (4) question « que doit bouger pour sortir de la fourchette ? ».",
    practicalEn:
      "Write: (1) Equity range, (2) assumption for each bound, (3) two limits (comps / WACC / net debt), (4) “what must move to leave the range?”",
    mistakeFr:
      "Publier un point unique issu du scénario le plus favorable, ou confondre fourchette d'EV avec fourchette d'Equity.",
    mistakeEn:
      "Publishing a single point from the most favorable scenario, or mixing an EV range with an Equity range.",
    takeawayFr:
      "Fourchette Equity + hypothèses + limites > pseudo-précision d'un point unique.",
    takeawayEn:
      "Equity range + assumptions + limits > pseudo-precision of a single point.",
    decisionFr:
      "Avant toute décision d'offre : fourchette Equity documentée, écart DCF vs multiples expliqué, et rappel EV ≠ Equity.",
    decisionEn:
      "Before any bid decision: documented Equity range, DCF vs multiples gap explained, and EV ≠ Equity restated.",
    flashcardFrontFr: "Fourchette de valorisation",
    flashcardFrontEn: "Valuation range",
    flashcardBackFr: "Bas / central / haut — hypothèses explicites ; EV ≠ Equity.",
    flashcardBackEn: "Low / mid / high — explicit assumptions; EV ≠ Equity.",
    exercisePromptFr:
      "Résumez une fourchette 360–410 M€ Equity et citez deux limites. Reformulez en Md FCFA (216–246).",
    exercisePromptEn:
      "Summarize a €360–410M Equity range and cite two limits. Restate in bn FCFA (216–246).",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : DCF Equity 410 M€, multiples Equity 378 M€, scénario WACC+1 → 360 M€. Le CEO veut publier « valeur exacte 400 M€ » pour rassurer le board. Que décidez-vous ?",
      promptEn:
        "Situation: DCF Equity €410M, multiples Equity €378M, WACC+1 scenario → €360M. The CEO wants to publish “exact value €400M” to reassure the board. What do you decide?",
      explanationCorrectFr:
        "Présenter 360–410 M€ avec hypothèses. Un point 400 M€ invente une précision et masque les limites.",
      explanationCorrectEn:
        "Present €360–410M with assumptions. A €400M point invents precision and hides limits.",
      difficulty: 3,
      options: [
        opt("Fourchette 360–410 M€ + hypothèses/limites", "Range €360–410M + assumptions/limits", true),
        opt("Publier 400 M€ car c'est la moyenne arrondie", "Publish €400M as a rounded average", false, "La moyenne seule efface l'incertitude et les scénarios.", "The mean alone erases uncertainty and scenarios."),
        opt("Publier 500 M€ d'EV pour paraître plus fort", "Publish €500M EV to look stronger", false, "Confusion EV/Equity et biais d'accrétion / présentation.", "EV/Equity confusion and accretion/presentation bias."),
      ],
    }),
    questions: [
      q({
        type: "MULTIPLE_CHOICE",
        promptFr:
          "Situation : quelles limites devez-vous rappeler au board ? (Plusieurs réponses)",
        promptEn:
          "Situation: which limits should you remind the board of? (Multiple answers)",
        explanationCorrectFr:
          "Comps imparfaits, sensibilité DCF, et préférence pour une fourchette sont des limites saines ; un multiple ne remplace pas toujours un DCF.",
        explanationCorrectEn:
          "Imperfect comps, DCF sensitivity, and preferring a range are healthy limits; a multiple does not always replace a DCF.",
        difficulty: 2,
        options: [
          opt("Les comps sont rarement parfaits", "Comps are rarely perfect", true),
          opt("Un DCF est sensible au WACC et à g", "DCF is sensitive to WACC and g", true),
          opt("Un multiple EV/EBITDA remplace toujours un DCF", "EV/EBITDA always replaces DCF", false, "Les méthodes se complètent.", "Methods complement each other."),
          opt("Une fourchette est plus honnête qu'un point unique", "A range is more honest than a single point", true),
        ],
      }),
    ],
  }),
];
