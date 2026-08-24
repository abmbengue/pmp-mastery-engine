/**
 * Corporate Finance foundations quality upgrades — enriched situational lessons (FR/EN).
 * Replaces selected foundation / working-capital slugs with richer FCFA industrial & EUR services scenarios.
 * Educational only — not a professional valuation or investment advice.
 */

import { buildCfLesson, opt, q } from "./cf-factory";
import type { CompactLesson } from "./compact";

export const CF_FOUNDATIONS_QUALITY_UPGRADES: CompactLesson[] = [
  // ── C tier: operating-cash-flow ───────────────────────────────────────────
  buildCfLesson({
    slug: "operating-cash-flow",
    titleFr: "Flux de trésorerie d'exploitation",
    titleEn: "Operating Cash Flow",
    descriptionFr:
      "Reconcilier résultat net, BFR et flux d'exploitation sur un cas industriel en FCFA.",
    descriptionEn:
      "Reconcile net income, working capital, and operating cash flow on an industrial FCFA case.",
    moduleSlug: "cf-foundations",
    sortOrder: 9,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: "cf-foundations",
    learningObjective: "APPLY",
    objectiveFr:
      "Calculer un flux d'exploitation simplifié (net + non cash − ΔBFR) et le relier au CCC puis au FCF.",
    objectiveEn:
      "Compute simplified operating cash flow (net + non-cash − ΔWC) and link it to CCC then FCF.",
    explanationFr:
      "SahelPack, emballeur industriel en zone UEMOA, publie un résultat net de 900 M FCFA. Ce chiffre ne dit pas encore combien de cash l'exploitation a vraiment généré. Méthode indirecte pédagogique : OCF ≈ résultat net + D&A − hausse du BFR. Avec D&A = 400 M et BFR qui passe de 1,05 Md à 1,20 Md (+150 M), OCF = 900 + 400 − 150 = 1 150 M FCFA. Le BFR (stocks + créances − dettes fournisseurs) remonte souvent quand le CCC s'allonge : clients qui paient plus tard, stocks plus lourds. L'OCF alimente ensuite le FCF : FCF ≈ OCF − CAPEX. Avec CAPEX 700 M, FCF ≈ 1 150 − 700 = 450 M FCFA — encore positif, mais bien plus bas que le net 900 M. Interprétation : le profit comptable est solide ; la conversion en cash libre dépend du cycle (CCC) et des investissements.",
    explanationEn:
      "SahelPack, an industrial packager in the UEMOA zone, reports net income of 900M FCFA. That figure alone does not say how much cash operations truly generated. Pedagogical indirect method: OCF ≈ net income + D&A − WC increase. With D&A = 400M and WC rising from 1.05bn to 1.20bn (+150M), OCF = 900 + 400 − 150 = 1,150M FCFA. WC (inventory + receivables − payables) often rises when the CCC lengthens: slower customer collections, heavier inventory. OCF then feeds FCF: FCF ≈ OCF − CAPEX. With CAPEX 700M, FCF ≈ 1,150 − 700 = 450M FCFA — still positive, but far below the 900M net. Interpretation: accounting profit is solid; conversion into free cash depends on the cycle (CCC) and investment.",
    exampleFr:
      "CA 10 Md, EBITDA 1,8 Md, net 900 M, ΔBFR +150 M, D&A 400 M → OCF 1 150 M. CAPEX 700 M → FCF 450 M. Si le CCC se détériore et le ΔBFR passe à +400 M, OCF tombe à 900 M et FCF à 200 M — même EBITDA, cash libre divisé.",
    exampleEn:
      "Sales 10bn, EBITDA 1.8bn, net 900M, ΔWC +150M, D&A 400M → OCF 1,150M. CAPEX 700M → FCF 450M. If CCC worsens and ΔWC hits +400M, OCF falls to 900M and FCF to 200M — same EBITDA, free cash halved.",
    practicalFr:
      "Calculez OCF puis FCF : net 900, D&A 400, ΔBFR +150, CAPEX 700 (M FCFA). Puis testez ΔBFR +400 : que devient le FCF ?",
    practicalEn:
      "Compute OCF then FCF: net 900, D&A 400, ΔWC +150, CAPEX 700 (M FCFA). Then test ΔWC +400: what happens to FCF?",
    mistakeFr:
      "Égaliser résultat net et OCF — ou traiter l'EBITDA comme cash disponible sans BFR ni CAPEX (chemin BFR → CCC → OCF → FCF oublié).",
    mistakeEn:
      "Equating net income with OCF — or treating EBITDA as available cash without WC or CAPEX (the WC → CCC → OCF → FCF path forgotten).",
    takeawayFr:
      "OCF = pont entre profit comptable et cash d'activité ; le FCF soustrait encore le CAPEX.",
    takeawayEn:
      "OCF bridges accounting profit to operating cash; FCF still subtracts CAPEX.",
    decisionFr:
      "Si OCF < 70 % du résultat net deux ans de suite, auditer DSO/DIO (CCC) avant d'augmenter le CAPEX ou les dividendes.",
    decisionEn:
      "If OCF < 70% of net income two years running, audit DSO/DIO (CCC) before raising CAPEX or dividends.",
    flashcardFrontFr: "Flux d'exploitation (OCF)",
    flashcardFrontEn: "Operating cash flow (OCF)",
    flashcardBackFr: "≈ net + non cash − consommation BFR — pas le résultat net.",
    flashcardBackEn: "≈ net + non-cash − WC consumption — not net income.",
    exercisePromptFr:
      "SahelPack : net 900 M, D&A 400 M, BFR +150 M, CAPEX 700 M. OCF ? FCF ? Lien avec un CCC qui s'allonge ?",
    exercisePromptEn:
      "SahelPack: net 900M, D&A 400M, WC +150M, CAPEX 700M. OCF? FCF? Link to a lengthening CCC?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : SahelPack (CA 10 Md FCFA) affiche un résultat net de 900 M. D&A = 400 M. Le BFR passe de 1,05 Md à 1,20 Md. Le comité veut savoir le cash d'exploitation avant CAPEX. Quel OCF simplifié ?",
      promptEn:
        "Situation: SahelPack (sales 10bn FCFA) shows net income of 900M. D&A = 400M. WC rises from 1.05bn to 1.20bn. The board wants operating cash before CAPEX. What simplified OCF?",
      explanationCorrectFr:
        "ΔBFR = +150 M. OCF = 900 + 400 − 150 = 1 150 M FCFA.",
      explanationCorrectEn:
        "ΔWC = +150M. OCF = 900 + 400 − 150 = 1,150M FCFA.",
      difficulty: 2,
      options: [
        opt("1 150 M FCFA", "1,150M FCFA", true),
        opt(
          "1 450 M FCFA",
          "1,450M FCFA",
          false,
          "1 450 ignore la hausse du BFR (+150) — le BFR consomme du cash.",
          "1,450 ignores the WC increase (+150) — WC consumes cash."
        ),
        opt(
          "900 M FCFA",
          "900M FCFA",
          false,
          "900 M est le résultat net, pas l'OCF après D&A et BFR.",
          "900M is net income, not OCF after D&A and WC."
        ),
        opt(
          "450 M FCFA",
          "450M FCFA",
          false,
          "450 M serait le FCF après CAPEX 700 M, pas l'OCF.",
          "450M would be FCF after CAPEX 700M, not OCF."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : même SahelPack, OCF = 1 150 M, CAPEX = 700 M. Un allongement du CCC pousse le ΔBFR à +400 M l'année suivante (net et D&A inchangés). Quel FCF approximatif ?",
        promptEn:
          "Situation: same SahelPack, OCF was 1,150M, CAPEX = 700M. A longer CCC pushes ΔWC to +400M next year (net and D&A unchanged). Approximate FCF?",
        explanationCorrectFr:
          "Nouvel OCF = 900 + 400 − 400 = 900 M ; FCF = 900 − 700 = 200 M FCFA.",
        explanationCorrectEn:
          "New OCF = 900 + 400 − 400 = 900M; FCF = 900 − 700 = 200M FCFA.",
        difficulty: 2,
        options: [
          opt("200 M FCFA", "200M FCFA", true),
          opt(
            "450 M FCFA",
            "450M FCFA",
            false,
            "450 M correspondait à ΔBFR +150, pas +400.",
            "450M matched ΔWC +150, not +400."
          ),
          opt(
            "1 150 M FCFA",
            "1,150M FCFA",
            false,
            "1 150 M est l'ancien OCF, avant le choc BFR et avant CAPEX.",
            "1,150M is the old OCF, before the WC shock and before CAPEX."
          ),
        ],
      }),
    ],
  }),

  // ── B tier: role-of-corporate-finance ─────────────────────────────────────
  buildCfLesson({
    slug: "role-of-corporate-finance",
    titleFr: "Rôle de la finance d'entreprise",
    titleEn: "Role of Corporate Finance",
    descriptionFr:
      "Situer la finance d'entreprise entre opérations, investissement et financement.",
    descriptionEn:
      "Place corporate finance between operations, investment, and financing decisions.",
    moduleSlug: "cf-foundations",
    sortOrder: 0,
    estimatedMinutes: 7,
    difficulty: "BEGINNER",
    skillSlug: "cf-foundations",
    learningObjective: "IDENTIFY",
    objectiveFr:
      "Identifier si une décision est opérationnelle, d'investissement ou de financement, et expliquer son impact cash / BFR.",
    objectiveEn:
      "Identify whether a decision is operating, investing, or financing, and explain its cash / WC impact.",
    explanationFr:
      "La finance d'entreprise ne remplace pas les opérations : elle traduit les choix business en cash, risque et valeur. Trois familles de décisions. (1) Opérations : volumes, prix, délais clients — touchent le BFR et donc l'OCF via le CCC. (2) Investissement : usine, presse, logiciel — CAPEX qui sort du FCF. (3) Financement : dette, equity, dividendes — flux de financement. Chez SahelPack (CA 10 Md FCFA, EBITDA 1,8 Md, BFR 1,2 Md), pousser les ventes de +15 % sans revoir les délais clients peut gonfler le BFR de plusieurs centaines de M FCFA : croissance « rentable » en P&L mais cash tendu. Chez Contineo Services (CA 50 M€, EBITDA 8 M€, dette nette 20 M€), embaucher des consultants avant d'encaisser les missions allonge le CCC services. Interprétation : la finance pose les questions de conversion cash avant de valider le plan.",
    explanationEn:
      "Corporate finance does not replace operations: it translates business choices into cash, risk, and value. Three decision families. (1) Operations: volumes, prices, customer terms — hit WC and thus OCF via the CCC. (2) Investing: plant, press, software — CAPEX that leaves FCF. (3) Financing: debt, equity, dividends — financing cash flows. At SahelPack (sales 10bn FCFA, EBITDA 1.8bn, WC 1.2bn), pushing sales +15% without revisiting customer terms can swell WC by hundreds of millions of FCFA: “profitable” P&L growth but tight cash. At Contineo Services (revenue €50m, EBITDA €8m, net debt €20m), hiring consultants before collecting on engagements lengthens the services CCC. Interpretation: finance asks cash-conversion questions before signing off the plan.",
    exampleFr:
      "SahelPack : presse 700 M FCFA financée par dette = investissement + financement. Contineo : allonger le délai client de 30 à 60 jours = décision opérationnelle avec effet BFR → OCF.",
    exampleEn:
      "SahelPack: 700M FCFA press funded by debt = investing + financing. Contineo: extending customer terms from 30 to 60 days = operating decision with WC → OCF effect.",
    practicalFr:
      "Classez : (a) négocier DPO +10 jours, (b) acheter une ligne d'emballage 700 M FCFA, (c) émettre une obligation. Puis citez l'effet cash principal de chacun.",
    practicalEn:
      "Classify: (a) negotiate DPO +10 days, (b) buy a 700M FCFA packaging line, (c) issue a bond. Then name each one’s main cash effect.",
    mistakeFr:
      "Réduire la finance d'entreprise à la comptabilité de clôture — ou croire qu'une hausse de CA suffit sans lire BFR / CCC / OCF.",
    mistakeEn:
      "Reducing corporate finance to year-end bookkeeping — or believing revenue growth alone is enough without reading WC / CCC / OCF.",
    takeawayFr:
      "Finance d'entreprise = relier opérations, investissement et financement via cash et valeur.",
    takeawayEn:
      "Corporate finance = link operations, investment, and financing via cash and value.",
    decisionFr:
      "Avant tout projet, demander : impact P&L, impact BFR/CCC, CAPEX, et source de financement.",
    decisionEn:
      "Before any project, ask: P&L impact, WC/CCC impact, CAPEX, and funding source.",
    flashcardFrontFr: "Trois décisions finance d'entreprise",
    flashcardFrontEn: "Three corporate finance decisions",
    flashcardBackFr: "Opérations · Investissement · Financement — toujours lire le cash.",
    flashcardBackEn: "Operations · Investing · Financing — always read the cash.",
    exercisePromptFr:
      "SahelPack veut +15 % de CA avec BFR déjà à 1,2 Md. Quelle question finance posez-vous avant d'approuver ?",
    exercisePromptEn:
      "SahelPack wants +15% sales with WC already at 1.2bn. What finance question do you ask before approving?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : SahelPack (EBITDA 1,8 Md FCFA) veut une presse 700 M FCFA financée à 100 % par emprunt bancaire. Quelle lecture dominante pour le comité finance ?",
      promptEn:
        "Situation: SahelPack (EBITDA 1.8bn FCFA) wants a 700M FCFA press funded 100% by a bank loan. What is the dominant reading for the finance committee?",
      explanationCorrectFr:
        "Décision d'investissement (actif long terme) avec dimension financement (dette) — les deux doivent être validées.",
      explanationCorrectEn:
        "Investment decision (long-term asset) with a financing dimension (debt) — both must be validated.",
      difficulty: 1,
      options: [
        opt(
          "Investissement + financement à trancher ensemble",
          "Investing + financing to decide together",
          true
        ),
        opt(
          "Marketing uniquement — la presse sert les ventes",
          "Marketing only — the press serves sales",
          false,
          "Une presse est un actif productif (CAPEX), pas une campagne marketing.",
          "A press is a productive asset (CAPEX), not a marketing campaign."
        ),
        opt(
          "RH uniquement — il faudra former les opérateurs",
          "HR only — operators will need training",
          false,
          "La formation est secondaire ; le cœur est CAPEX + dette.",
          "Training is secondary; the core is CAPEX + debt."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : Contineo Services (CA 50 M€) accorde 60 jours de crédit à un client stratégique pour gagner le contrat. Quel type de décision et quel premier risque cash ?",
        promptEn:
          "Situation: Contineo Services (€50m revenue) grants 60-day credit to a strategic client to win the deal. Decision type and first cash risk?",
        explanationCorrectFr:
          "Décision opérationnelle : créances ↑ → BFR ↑ → OCF ↓ (CCC plus long), même si le CA monte.",
        explanationCorrectEn:
          "Operating decision: receivables ↑ → WC ↑ → OCF ↓ (longer CCC), even if revenue rises.",
        difficulty: 2,
        options: [
          opt(
            "Opérationnelle — risque BFR / OCF",
            "Operating — WC / OCF risk",
            true
          ),
          opt(
            "Financement — risque de dilution",
            "Financing — dilution risk",
            false,
            "Aucun equity n'est émis ; le crédit client touche le BFR.",
            "No equity is issued; customer credit hits WC."
          ),
          opt(
            "Investissement — risque de CAPEX",
            "Investing — CAPEX risk",
            false,
            "Pas d'achat d'actif long terme ici — c'est du crédit commercial.",
            "No long-term asset purchase here — it is trade credit."
          ),
        ],
      }),
    ],
  }),

  // ── B tier: balance-sheet ─────────────────────────────────────────────────
  buildCfLesson({
    slug: "balance-sheet",
    titleFr: "Bilan",
    titleEn: "Balance Sheet",
    descriptionFr:
      "Lire l'équation Actif = Passif + Capitaux propres avec un bilan industriel en FCFA.",
    descriptionEn:
      "Read Assets = Liabilities + Equity on an industrial FCFA balance sheet.",
    moduleSlug: "cf-foundations",
    sortOrder: 3,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: "cf-foundations",
    learningObjective: "APPLY",
    objectiveFr:
      "Vérifier l'équation du bilan, situer le BFR dans l'actif/passif circulant, et relier levier et cash.",
    objectiveEn:
      "Verify the balance sheet equation, place WC in current assets/liabilities, and link leverage to cash.",
    explanationFr:
      "Le bilan est une photo à une date : ce que l'entreprise possède (actifs) et comment c'est financé (dettes + capitaux propres). Équation : Actifs = Passifs + Capitaux propres. SahelPack au 31/12 : actifs 6,0 Md FCFA (immobilisations 4,2 Md ; stocks 0,5 Md ; créances 0,9 Md ; cash 0,4 Md). Passifs 3,6 Md (dettes fournisseurs 0,2 Md ; emprunts 3,0 Md ; autres 0,4 Md). Capitaux propres 2,4 Md. Vérification : 6,0 = 3,6 + 2,4. Le BFR opérationnel ≈ stocks + créances − dettes fournisseurs = 0,5 + 0,9 − 0,2 = 1,2 Md — cash immobilisé dans le cycle, visible au bilan. Contineo Services (CA 50 M€) : actifs plus légers, dette nette 20 M€ — le bilan lit le levier, le P&L lit la marge. Interprétation : un bilan « équilibré » n'implique pas un OCF confortable si le BFR est lourd.",
    explanationEn:
      "The balance sheet is a snapshot at a date: what the firm owns (assets) and how it is funded (liabilities + equity). Equation: Assets = Liabilities + Equity. SahelPack at year-end: assets 6.0bn FCFA (fixed assets 4.2bn; inventory 0.5bn; receivables 0.9bn; cash 0.4bn). Liabilities 3.6bn (payables 0.2bn; loans 3.0bn; other 0.4bn). Equity 2.4bn. Check: 6.0 = 3.6 + 2.4. Operating WC ≈ inventory + receivables − payables = 0.5 + 0.9 − 0.2 = 1.2bn — cash tied in the cycle, visible on the balance sheet. Contineo Services (€50m revenue): lighter assets, net debt €20m — the balance sheet reads leverage; the P&L reads margin. Interpretation: a “balanced” sheet does not imply comfortable OCF if WC is heavy.",
    exampleFr:
      "Levier dette / CP = 3,0 / 2,4 = 1,25. BFR 1,2 Md pour CA 10 Md ≈ 12 % du CA — chaque jour de CCC compte pour l'OCF.",
    exampleEn:
      "Debt / equity leverage = 3.0 / 2.4 = 1.25. WC 1.2bn on 10bn sales ≈ 12% of sales — each CCC day matters for OCF.",
    practicalFr:
      "Actifs 6,0 Md, passifs 3,6 Md. Capitaux propres ? BFR avec stocks 0,5, créances 0,9, dettes four. 0,2 ?",
    practicalEn:
      "Assets 6.0bn, liabilities 3.6bn. Equity? WC with inventory 0.5, receivables 0.9, payables 0.2?",
    mistakeFr:
      "Lire le bilan comme une performance annuelle — ou oublier que le BFR au bilan explique souvent l'écart net → OCF.",
    mistakeEn:
      "Reading the balance sheet as annual performance — or forgetting that WC on the sheet often explains the net → OCF gap.",
    takeawayFr: "Bilan : Actifs = Passifs + CP — photo du financement et du BFR.",
    takeawayEn: "Balance sheet: Assets = Liabilities + Equity — funding and WC snapshot.",
    decisionFr:
      "Avant un nouvel emprunt, vérifier actifs générateurs de cash, BFR et couverture des intérêts — pas seulement le total bilan.",
    decisionEn:
      "Before new debt, check cash-generative assets, WC, and interest coverage — not only the balance sheet total.",
    flashcardFrontFr: "Équation du bilan",
    flashcardFrontEn: "Balance sheet equation",
    flashcardBackFr: "Actifs = Passifs + Capitaux propres.",
    flashcardBackEn: "Assets = Liabilities + Equity.",
    exercisePromptFr:
      "SahelPack : actifs 6,0 Md, passifs 3,6 Md. CP ? Si résultat net +0,9 Md non distribué, nouveaux CP ?",
    exercisePromptEn:
      "SahelPack: assets 6.0bn, liabilities 3.6bn. Equity? If +0.9bn net retained, new equity?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : SahelPack clôture avec actifs 6,0 Md FCFA et passifs 3,6 Md. Le directeur financier présente les capitaux propres au conseil. Quel montant ?",
      promptEn:
        "Situation: SahelPack closes with assets 6.0bn FCFA and liabilities 3.6bn. The CFO presents equity to the board. What amount?",
      explanationCorrectFr: "CP = 6,0 − 3,6 = 2,4 Md FCFA.",
      explanationCorrectEn: "Equity = 6.0 − 3.6 = 2.4bn FCFA.",
      difficulty: 2,
      options: [
        opt("2,4 Md FCFA", "2.4bn FCFA", true),
        opt(
          "3,6 Md FCFA",
          "3.6bn FCFA",
          false,
          "3,6 Md sont les passifs, pas les capitaux propres.",
          "3.6bn is liabilities, not equity."
        ),
        opt(
          "9,6 Md FCFA",
          "9.6bn FCFA",
          false,
          "On ne additionne pas actifs et passifs pour obtenir les CP.",
          "Do not add assets and liabilities to get equity."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : stocks 0,5 Md, créances 0,9 Md, dettes fournisseurs 0,2 Md. Quel BFR opérationnel lit-on sur le bilan SahelPack, et pourquoi pèse-t-il sur l'OCF ?",
        promptEn:
          "Situation: inventory 0.5bn, receivables 0.9bn, payables 0.2bn. What operating WC do we read on SahelPack’s sheet, and why does it weigh on OCF?",
        explanationCorrectFr:
          "BFR = 0,5 + 0,9 − 0,2 = 1,2 Md : cash immobilisé dans le CCC tant qu'il n'est pas réduit.",
        explanationCorrectEn:
          "WC = 0.5 + 0.9 − 0.2 = 1.2bn: cash locked in the CCC until it is reduced.",
        difficulty: 2,
        options: [
          opt("1,2 Md — cash immobilisé dans le cycle", "1.2bn — cash locked in the cycle", true),
          opt(
            "1,4 Md — stocks + créances sans dettes",
            "1.4bn — inventory + receivables without payables",
            false,
            "Il faut soustraire les dettes fournisseurs (0,2).",
            "You must subtract payables (0.2)."
          ),
          opt(
            "0,2 Md — seules les dettes fournisseurs",
            "0.2bn — payables only",
            false,
            "0,2 Md est une composante, pas le BFR.",
            "0.2bn is one component, not WC."
          ),
        ],
      }),
    ],
  }),

  // ── B tier: cash-flow-statement ───────────────────────────────────────────
  buildCfLesson({
    slug: "cash-flow-statement",
    titleFr: "Tableau de flux de trésorerie",
    titleEn: "Cash Flow Statement",
    descriptionFr:
      "Classer les flux en exploitation, investissement et financement sur un cas chiffré.",
    descriptionEn:
      "Classify flows as operating, investing, and financing on a numbered case.",
    moduleSlug: "cf-foundations",
    sortOrder: 4,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: "cf-foundations",
    learningObjective: "APPLY",
    objectiveFr:
      "Classer les mouvements de cash et expliquer pourquoi le résultat net diffère de la variation de trésorerie.",
    objectiveEn:
      "Classify cash movements and explain why net income differs from the change in cash.",
    explanationFr:
      "Le tableau de flux explique la variation de cash en trois blocs : exploitation (OCF), investissement (CAPEX, cessions), financement (dette, equity, dividendes). SahelPack année N : résultat net 900 M FCFA ; OCF 1 150 M (net + D&A 400 − ΔBFR 150) ; investissement −700 M (CAPEX presse) ; financement +300 M (nouvel emprunt) −200 M (dividendes) = +100 M. Variation de cash = 1 150 − 700 + 100 = +550 M FCFA. Contineo Services (CA 50 M€, EBITDA 8 M€) : un gros CAPEX logiciel peut faire baisser le cash malgré un EBITDA solide. Lien pédagogique : BFR/CCC → OCF ; OCF − CAPEX → FCF ; le financement comble ou distribue. Interprétation : un net positif avec FCF faible signale investissement ou cycle lourd — pas automatiquement une « bonne année cash ».",
    explanationEn:
      "The cash flow statement explains the cash change in three blocks: operating (OCF), investing (CAPEX, disposals), financing (debt, equity, dividends). SahelPack year N: net income 900M FCFA; OCF 1,150M (net + D&A 400 − ΔWC 150); investing −700M (press CAPEX); financing +300M (new loan) −200M (dividends) = +100M. Cash change = 1,150 − 700 + 100 = +550M FCFA. Contineo Services (€50m revenue, €8m EBITDA): heavy software CAPEX can cut cash despite solid EBITDA. Pedagogical link: WC/CCC → OCF; OCF − CAPEX → FCF; financing fills or distributes. Interpretation: positive net with weak FCF signals investment or a heavy cycle — not automatically a “good cash year.”",
    exampleFr:
      "Net 900 vs OCF 1 150 vs FCF 450 (après CAPEX 700) : trois lectures. Le tableau seul réconcilie le cash de clôture.",
    exampleEn:
      "Net 900 vs OCF 1,150 vs FCF 450 (after CAPEX 700): three readings. Only the statement reconciles closing cash.",
    practicalFr:
      "Classez : paiement fournisseurs, achat presse 700 M, remboursement d'emprunt, encaissement client.",
    practicalEn:
      "Classify: supplier payment, 700M press purchase, loan repayment, customer collection.",
    mistakeFr:
      "Utiliser le résultat net comme proxy du cash — sans lire OCF, CAPEX et financement.",
    mistakeEn:
      "Using net income as a cash proxy — without reading OCF, CAPEX, and financing.",
    takeawayFr:
      "Trois blocs : exploitation, investissement, financement — seul le total explique Δcash. Trade-off : dividendes vs CAPEX vs désendettement.",
    takeawayEn:
      "Three blocks: operating, investing, financing — only the total explains Δcash. Trade-off: dividends vs CAPEX vs deleveraging.",
    decisionFr:
      "Si OCF faible malgré un bon net, freiner CAPEX et dividendes jusqu'à comprendre le CCC / BFR — arbitrer cash vs croissance.",
    decisionEn:
      "If OCF is weak despite good net income, pause CAPEX and dividends until CCC / WC is understood — trade off cash vs growth.",
    flashcardFrontFr: "Trois flux de trésorerie",
    flashcardFrontEn: "Three cash flows",
    flashcardBackFr: "Exploitation · Investissement · Financement.",
    flashcardBackEn: "Operating · Investing · Financing.",
    exercisePromptFr:
      "OCF 1 150, CAPEX −700, financement +100. Variation de cash ? Où apparaît le BFR ? Quel trade-off dividendes vs CAPEX ?",
    exercisePromptEn:
      "OCF 1,150, CAPEX −700, financing +100. Cash change? Where does WC appear? What trade-off: dividends vs CAPEX?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : SahelPack achète une presse 700 M FCFA comptant. Dans quel flux du tableau apparaît cet achat, et quel impact sur le FCF si OCF = 1 150 M ?",
      promptEn:
        "Situation: SahelPack buys a 700M FCFA press for cash. In which statement flow does this appear, and what is the FCF impact if OCF = 1,150M?",
      explanationCorrectFr:
        "Flux d'investissement ; FCF ≈ 1 150 − 700 = 450 M FCFA.",
      explanationCorrectEn:
        "Investing flow; FCF ≈ 1,150 − 700 = 450M FCFA.",
      difficulty: 2,
      options: [
        opt(
          "Investissement — FCF ≈ 450 M",
          "Investing — FCF ≈ 450M",
          true
        ),
        opt(
          "Exploitation — FCF inchangé",
          "Operating — FCF unchanged",
          false,
          "Le CAPEX majeur n'est pas de l'exploitation ; il réduit le FCF.",
          "Major CAPEX is not operating; it reduces FCF."
        ),
        opt(
          "Financement — FCF ≈ 1 150 M",
          "Financing — FCF ≈ 1,150M",
          false,
          "Financer la presse par dette serait un flux de financement ; l'achat reste de l'investissement.",
          "Funding the press with debt would be financing; the purchase remains investing."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : Contineo (EBITDA 8 M€) affiche un résultat net positif mais le cash baisse après un gros CAPEX et une hausse des créances. Quelle lecture prioritaire ?",
        promptEn:
          "Situation: Contineo (€8m EBITDA) shows positive net income but cash falls after heavy CAPEX and rising receivables. Priority reading?",
        explanationCorrectFr:
          "Lire le tableau complet : OCF (BFR/CCC) puis investissement — le net seul masque le cash.",
        explanationCorrectEn:
          "Read the full statement: OCF (WC/CCC) then investing — net alone hides cash.",
        difficulty: 2,
        options: [
          opt(
            "Tableau de flux : OCF puis investissement",
            "Cash flow statement: OCF then investing",
            true
          ),
          opt(
            "Seulement le résultat net — il est positif",
            "Net income only — it is positive",
            false,
            "Un net positif peut coexister avec une baisse de cash.",
            "Positive net can coexist with falling cash."
          ),
          opt(
            "Ignorer les créances — hors sujet",
            "Ignore receivables — irrelevant",
            false,
            "Les créances alimentent le BFR et l'OCF.",
            "Receivables feed WC and OCF."
          ),
        ],
      }),
    ],
  }),

  // ── B tier: revenue-basics ────────────────────────────────────────────────
  buildCfLesson({
    slug: "revenue-basics",
    titleFr: "Bases du revenu",
    titleEn: "Revenue Basics",
    descriptionFr:
      "Distinguer chiffre d'affaires comptable et encaissements sur un cas de ventes à crédit.",
    descriptionEn:
      "Separate accounting revenue and cash collections on a credit-sales case.",
    moduleSlug: "cf-foundations",
    sortOrder: 5,
    estimatedMinutes: 7,
    difficulty: "BEGINNER",
    skillSlug: "cf-foundations",
    learningObjective: "APPLY",
    objectiveFr:
      "Calculer le CA reconnu, l'écart vs encaissements, et relier cet écart aux créances / CCC / OCF.",
    objectiveEn:
      "Compute recognized revenue, the gap vs collections, and link that gap to receivables / CCC / OCF.",
    explanationFr:
      "Le chiffre d'affaires est reconnu quand la vente est réalisée selon les règles comptables — souvent à la livraison — pas quand le client paie. SahelPack livre pour 800 M FCFA en décembre à 45 jours : CA décembre = 800 M, mais encaissements liés ≈ 0 à 100 M selon les acomptes. L'écart gonfle les créances et le BFR, allonge le CCC (DSO), et pèse sur l'OCF même si le CA annuel vise 10 Md FCFA. Contineo Services facture 4 M€ de missions en décembre encaissées en février : même mécanique en euros. Interprétation : croître le CA sans piloter le DSO, c'est souvent croître le BFR. Trade-off : délais clients généreux peuvent gagner des parts de marché mais retardent l'OCF et le FCF disponible pour CAPEX ou désendettement (dette nette Contineo 20 M€).",
    explanationEn:
      "Revenue is recognized when the sale is earned under accounting rules — often on delivery — not when the customer pays. SahelPack delivers 800M FCFA in December at 45 days: December revenue = 800M, but related collections ≈ 0 to 100M depending on advances. The gap inflates receivables and WC, lengthens the CCC (DSO), and weighs on OCF even if annual sales target 10bn FCFA. Contineo Services invoices €4m of December work collected in February: same mechanics in euros. Interpretation: growing revenue without managing DSO often grows WC. Trade-off: generous customer terms may win share but delay OCF and FCF available for CAPEX or deleveraging (Contineo net debt €20m).",
    exampleFr:
      "Livraisons décembre 800 M, encaissements 100 M → écart 700 M en créances. Sur un trimestre, DSO qui monte = alerte CCC avant même de lire l'OCF.",
    exampleEn:
      "December deliveries 800M, collections 100M → 700M gap in receivables. In a quarter, rising DSO = CCC alert before even reading OCF.",
    practicalFr:
      "CA mois 800 M FCFA, encaissements 100 M. Écart ? Si le même schéma se répète 3 mois, effet BFR approximatif ?",
    practicalEn:
      "Monthly revenue 800M FCFA, collections 100M. Gap? If the pattern repeats 3 months, approximate WC effect?",
    mistakeFr:
      "Piloter la trésorerie uniquement avec le CA — ignorer délais clients, créances et conversion OCF.",
    mistakeEn:
      "Managing cash with revenue alone — ignoring customer terms, receivables, and OCF conversion.",
    takeawayFr: "Revenu = vente reconnue ; cash = encaissement — le DSO crée l'écart.",
    takeawayEn: "Revenue = recognized sale; cash = collection — DSO creates the gap.",
    decisionFr:
      "Avant un objectif CA agressif, modéliser encaissements, BFR et OCF sous le délai client réel.",
    decisionEn:
      "Before an aggressive revenue target, model collections, WC, and OCF under real customer terms.",
    flashcardFrontFr: "Chiffre d'affaires vs cash",
    flashcardFrontEn: "Revenue vs cash",
    flashcardBackFr: "CA reconnu ≠ encaissement — l'écart passe par les créances.",
    flashcardBackEn: "Recognized revenue ≠ collection — the gap runs through receivables.",
    exercisePromptFr:
      "SahelPack : livraisons 800 M, encaissements 100 M. Écart ? Lien avec BFR et OCF ?",
    exercisePromptEn:
      "SahelPack: deliveries 800M, collections 100M. Gap? Link to WC and OCF?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : SahelPack livre 800 M FCFA en décembre (délai 45 jours) et n'encaisse que 100 M le même mois sur ces ventes. Quel écart revenu vs cash, et où se loge-t-il ?",
      promptEn:
        "Situation: SahelPack delivers 800M FCFA in December (45-day terms) and collects only 100M that month on those sales. Revenue vs cash gap, and where does it sit?",
      explanationCorrectFr:
        "800 − 100 = 700 M FCFA non encaissés → créances / BFR (DSO).",
      explanationCorrectEn:
        "800 − 100 = 700M FCFA not collected → receivables / WC (DSO).",
      difficulty: 2,
      options: [
        opt(
          "700 M — créances / BFR",
          "700M — receivables / WC",
          true
        ),
        opt(
          "100 M — c'est l'écart",
          "100M — that is the gap",
          false,
          "100 M est l'encaissement, pas l'écart.",
          "100M is collections, not the gap."
        ),
        opt(
          "900 M — CA + encaissement",
          "900M — revenue + collections",
          false,
          "On ne additionne pas CA et encaissements.",
          "Do not add revenue and collections."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : Contineo (CA 50 M€) gagne un contrat en allongeant le DSO de 30 à 60 jours. Quel effet attendu sur la chaîne BFR → OCF si le CA monte de 2 M€ ?",
        promptEn:
          "Situation: Contineo (€50m revenue) wins a contract by stretching DSO from 30 to 60 days. Expected effect on the WC → OCF chain if revenue rises €2m?",
        explanationCorrectFr:
          "Créances et BFR montent ; l'OCF peut stagner ou baisser malgré la hausse de CA — trade-off commercial vs cash.",
        explanationCorrectEn:
          "Receivables and WC rise; OCF may stall or fall despite higher revenue — commercial vs cash trade-off.",
        difficulty: 2,
        options: [
          opt(
            "BFR ↑ — OCF sous pression malgré CA ↑",
            "WC ↑ — OCF under pressure despite revenue ↑",
            true
          ),
          opt(
            "OCF ↑ automatiquement avec le CA",
            "OCF rises automatically with revenue",
            false,
            "Sans encaissement, le CA ne devient pas de l'OCF.",
            "Without collection, revenue does not become OCF."
          ),
          opt(
            "CAPEX ↓ automatiquement",
            "CAPEX falls automatically",
            false,
            "Le délai client ne réduit pas le CAPEX.",
            "Customer terms do not reduce CAPEX."
          ),
        ],
      }),
    ],
  }),

  // ── B tier: ebit-basics ───────────────────────────────────────────────────
  buildCfLesson({
    slug: "ebit-basics",
    titleFr: "Bases de l'EBIT",
    titleEn: "EBIT Basics",
    descriptionFr:
      "Situer l'EBIT entre EBITDA et résultat net sur une cascade industrielle.",
    descriptionEn:
      "Place EBIT between EBITDA and net income on an industrial cascade.",
    moduleSlug: "cf-foundations",
    sortOrder: 7,
    estimatedMinutes: 7,
    difficulty: "BEGINNER",
    skillSlug: "cf-foundations",
    learningObjective: "APPLY",
    objectiveFr:
      "Passer de l'EBITDA à l'EBIT via la D&A, calculer la marge EBIT, et la distinguer de l'OCF.",
    objectiveEn:
      "Move from EBITDA to EBIT via D&A, compute EBIT margin, and distinguish it from OCF.",
    explanationFr:
      "L'EBIT (résultat opérationnel) = EBITDA − D&A. Il intègre l'usure des actifs — plus exigeant que l'EBITDA pour un industriel capex-intensif. SahelPack : CA 10 Md FCFA, EBITDA 1,8 Md, D&A 400 M → EBIT = 1,4 Md ; marge EBIT = 1,4 / 10 = 14 %. Ensuite intérêts et impôts mènent au résultat net (~900 M dans notre cas pédagogique). Contineo Services : CA 50 M€, EBITDA 8 M€, D&A faible (ex. 1 M€) → EBIT 7 M€, marge 14 % — même marge, intensité capitalistique différente. Interprétation : l'EBIT juge l'exploitation après amortissement, mais n'est pas du cash : BFR/CCC et CAPEX manquent encore pour l'OCF et le FCF. Trade-off : un EBIT solide avec BFR 1,2 Md peut quand même livrer un OCF décevant.",
    explanationEn:
      "EBIT (operating profit) = EBITDA − D&A. It includes asset wear — stricter than EBITDA for a capex-heavy industrial. SahelPack: sales 10bn FCFA, EBITDA 1.8bn, D&A 400M → EBIT = 1.4bn; EBIT margin = 1.4 / 10 = 14%. Interest and tax then lead to net income (~900M in our pedagogical case). Contineo Services: revenue €50m, EBITDA €8m, low D&A (e.g. €1m) → EBIT €7m, margin 14% — same margin, different capital intensity. Interpretation: EBIT judges operations after depreciation, but is not cash: WC/CCC and CAPEX are still needed for OCF and FCF. Trade-off: solid EBIT with WC at 1.2bn can still deliver disappointing OCF.",
    exampleFr:
      "EBITDA 1,8 Md − D&A 400 M = EBIT 1,4 Md. Marge 14 %. Si D&A double à 800 M (nouvelle usine), EBIT tombe à 1,0 Md — même EBITDA « cash-ish », profit opérationnel comptable en baisse.",
    exampleEn:
      "EBITDA 1.8bn − D&A 400M = EBIT 1.4bn. Margin 14%. If D&A doubles to 800M (new plant), EBIT falls to 1.0bn — same “cash-ish” EBITDA, lower accounting operating profit.",
    practicalFr:
      "EBITDA 1 800 M, D&A 400 M, CA 10 000 M. EBIT et marge EBIT ? Pourquoi ≠ OCF ?",
    practicalEn:
      "EBITDA 1,800M, D&A 400M, sales 10,000M. EBIT and EBIT margin? Why ≠ OCF?",
    mistakeFr:
      "Comparer l'EBIT d'un industriel lourd à une société de services sans regarder D&A, BFR et CAPEX.",
    mistakeEn:
      "Comparing a heavy industrial’s EBIT to a services firm without looking at D&A, WC, and CAPEX.",
    takeawayFr: "EBIT = EBITDA − D&A — performance opérationnelle, pas trésorerie.",
    takeawayEn: "EBIT = EBITDA − D&A — operating performance, not cash.",
    decisionFr:
      "Utiliser la marge EBIT pour juger l'exploitation ; exiger OCF/FCF avant d'endetter ou distribuer.",
    decisionEn:
      "Use EBIT margin to judge operations; require OCF/FCF before borrowing or distributing.",
    flashcardFrontFr: "EBIT",
    flashcardFrontEn: "EBIT",
    flashcardBackFr: "EBITDA − D&A — avant intérêts et impôts.",
    flashcardBackEn: "EBITDA − D&A — before interest and taxes.",
    exercisePromptFr:
      "SahelPack : EBITDA 1,8 Md, D&A 400 M, CA 10 Md. EBIT, marge, et pourquoi ce n'est pas l'OCF ?",
    exercisePromptEn:
      "SahelPack: EBITDA 1.8bn, D&A 400M, sales 10bn. EBIT, margin, and why it is not OCF?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : le board de SahelPack lit EBITDA 1,8 Md FCFA et D&A 400 M. Quelle est l'EBIT et la marge sur CA 10 Md ?",
      promptEn:
        "Situation: SahelPack’s board reads EBITDA 1.8bn FCFA and D&A 400M. What is EBIT and the margin on 10bn sales?",
      explanationCorrectFr: "EBIT = 1,8 − 0,4 = 1,4 Md ; marge = 14 %.",
      explanationCorrectEn: "EBIT = 1.8 − 0.4 = 1.4bn; margin = 14%.",
      difficulty: 2,
      options: [
        opt("1,4 Md — marge 14 %", "1.4bn — 14% margin", true),
        opt(
          "2,2 Md — marge 22 %",
          "2.2bn — 22% margin",
          false,
          "On soustrait la D&A à l'EBITDA, on ne l'ajoute pas.",
          "Subtract D&A from EBITDA; do not add it."
        ),
        opt(
          "1,8 Md — marge 18 %",
          "1.8bn — 18% margin",
          false,
          "1,8 Md est l'EBITDA avant D&A.",
          "1.8bn is EBITDA before D&A."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : Contineo (EBIT 7 M€) et SahelPack (EBIT 1,4 Md FCFA) ont une marge EBIT ~14 %. Pourquoi SahelPack peut-il avoir un OCF plus fragile ?",
        promptEn:
          "Situation: Contineo (EBIT €7m) and SahelPack (EBIT 1.4bn FCFA) both have ~14% EBIT margin. Why might SahelPack’s OCF be more fragile?",
        explanationCorrectFr:
          "BFR / CCC / CAPEX industriels plus lourds — l'EBIT ignore encore la conversion cash.",
        explanationCorrectEn:
          "Heavier industrial WC / CCC / CAPEX — EBIT still ignores cash conversion.",
        difficulty: 2,
        options: [
          opt(
            "BFR, CCC et CAPEX plus lourds",
            "Heavier WC, CCC, and CAPEX",
            true
          ),
          opt(
            "L'EBIT inclut déjà tout le cash",
            "EBIT already includes all cash",
            false,
            "L'EBIT est un solde comptable, pas l'OCF.",
            "EBIT is an accounting balance, not OCF."
          ),
          opt(
            "Les services n'ont jamais de créances",
            "Services never have receivables",
            false,
            "Contineo a aussi un DSO — mais souvent un BFR plus léger.",
            "Contineo also has DSO — but often lighter WC."
          ),
        ],
      }),
    ],
  }),

  // ── B tier: net-income ────────────────────────────────────────────────────
  buildCfLesson({
    slug: "net-income",
    titleFr: "Résultat net",
    titleEn: "Net Income",
    descriptionFr:
      "Calculer le résultat net et le BPA, et les distinguer du cash d'exploitation.",
    descriptionEn:
      "Compute net income and EPS, and separate them from operating cash.",
    moduleSlug: "cf-foundations",
    sortOrder: 8,
    estimatedMinutes: 7,
    difficulty: "BEGINNER",
    skillSlug: "cf-foundations",
    learningObjective: "APPLY",
    objectiveFr:
      "Enchaîner EBIT → intérêts → impôts → résultat net / BPA, puis expliquer l'écart avec l'OCF.",
    objectiveEn:
      "Walk EBIT → interest → tax → net income / EPS, then explain the gap vs OCF.",
    explanationFr:
      "Le résultat net est le profit comptable des actionnaires après financement et fiscalité. Cascade SahelPack (ordres de grandeur pédagogiques) : EBIT 1 400 M FCFA − intérêts 200 M = EBT 1 200 M − impôts 300 M ≈ résultat net 900 M. Avec 100 M d'actions, BPA = 9 FCFA. Pourtant OCF = 1 150 M (net + D&A − ΔBFR) puis FCF = 450 M après CAPEX 700 M : le net ne dit pas combien on peut investir ou distribuer. Contineo : EBIT 7 M€, intérêts liés à une dette nette 20 M€, impôts, net plus bas — le levier pèse sur le net sans toucher l'EBITDA. Interprétation : BPA utile pour les actionnaires ; décision de dividende ou CAPEX = lire OCF/FCF. Erreur fréquente : promettre un dividende égal au net alors que le FCF est de 450 M seulement.",
    explanationEn:
      "Net income is shareholders’ accounting profit after financing and tax. SahelPack cascade (pedagogical orders of magnitude): EBIT 1,400M FCFA − interest 200M = EBT 1,200M − tax 300M ≈ net income 900M. With 100M shares, EPS = 9 FCFA. Yet OCF = 1,150M (net + D&A − ΔWC) then FCF = 450M after CAPEX 700M: net does not say how much you can invest or distribute. Contineo: EBIT €7m, interest tied to €20m net debt, tax, lower net — leverage hits net without touching EBITDA. Interpretation: EPS is useful for shareholders; dividend or CAPEX decisions = read OCF/FCF. Common mistake: promising a dividend equal to net when FCF is only 450M.",
    exampleFr:
      "Net 900 M, BPA 9 FCFA, OCF 1 150 M, FCF 450 M — quatre indicateurs, une seule réalité cash contrainte par BFR et CAPEX.",
    exampleEn:
      "Net 900M, EPS 9 FCFA, OCF 1,150M, FCF 450M — four indicators, one cash reality constrained by WC and CAPEX.",
    practicalFr:
      "EBIT 1 400, intérêts 200, impôts 300. Net ? BPA avec 100 M d'actions ? Dividende max prudent si FCF = 450 ?",
    practicalEn:
      "EBIT 1,400, interest 200, tax 300. Net? EPS with 100M shares? Prudent max dividend if FCF = 450?",
    mistakeFr:
      "Distribuer 100 % du résultat net sans vérifier FCF — ou confondre BPA et cash par action.",
    mistakeEn:
      "Distributing 100% of net income without checking FCF — or confusing EPS with cash per share.",
    takeawayFr:
      "Résultat net / BPA = lecture actionnaire ; OCF/FCF = lecture cash. Trade-off : BPA élevé vs cash disponible.",
    takeawayEn:
      "Net income / EPS = shareholder view; OCF/FCF = cash view. Trade-off: high EPS vs available cash.",
    decisionFr:
      "Plafonner dividendes et rachats au FCF récurrent, pas au résultat net d'une année — arbitrer signal BPA vs liquidité.",
    decisionEn:
      "Cap dividends and buybacks at recurring FCF, not one year’s net income — trade off EPS signal vs liquidity.",
    flashcardFrontFr: "Résultat net / BPA",
    flashcardFrontEn: "Net income / EPS",
    flashcardBackFr: "Net après intérêts et impôts ; BPA = net ÷ actions.",
    flashcardBackEn: "Net after interest and tax; EPS = net ÷ shares.",
    exercisePromptFr:
      "EBT 1 200 M, impôts 300 M, 100 M actions. Net et BPA ? Pourquoi ne pas distribuer 900 M (trade-off cash vs signal) ?",
    exercisePromptEn:
      "EBT 1,200M, tax 300M, 100M shares. Net and EPS? Why not distribute 900M (cash vs signal trade-off)?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : SahelPack — EBIT 1 400 M FCFA, intérêts 200 M, impôts 300 M, 100 M d'actions. Quel BPA présenter au marché ?",
      promptEn:
        "Situation: SahelPack — EBIT 1,400M FCFA, interest 200M, tax 300M, 100M shares. What EPS to present to the market?",
      explanationCorrectFr:
        "Net = 1 400 − 200 − 300 = 900 M ; BPA = 900 / 100 = 9 FCFA.",
      explanationCorrectEn:
        "Net = 1,400 − 200 − 300 = 900M; EPS = 900 / 100 = 9 FCFA.",
      difficulty: 2,
      options: [
        opt("9 FCFA", "9 FCFA", true),
        opt(
          "14 FCFA",
          "14 FCFA",
          false,
          "14 serait EBIT / actions, avant intérêts et impôts.",
          "14 would be EBIT / shares, before interest and tax."
        ),
        opt(
          "12 FCFA",
          "12 FCFA",
          false,
          "12 serait EBT / actions (1 200 / 100), avant impôts.",
          "12 would be EBT / shares (1,200 / 100), before tax."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : net 900 M FCFA, FCF 450 M après CAPEX 700 M et ΔBFR. Le conseil veut un dividende de 800 M. Quelle objection finance ?",
        promptEn:
          "Situation: net 900M FCFA, FCF 450M after CAPEX 700M and ΔWC. The board wants an 800M dividend. What is finance’s objection?",
        explanationCorrectFr:
          "Le dividende dépasse le FCF : il faudrait s'endetter ou consommer le cash — le net n'est pas distribuable tel quel.",
        explanationCorrectEn:
          "The dividend exceeds FCF: you would need to borrow or burn cash — net is not distributable as-is.",
        difficulty: 2,
        options: [
          opt(
            "Dividende > FCF — risque cash / dette",
            "Dividend > FCF — cash / debt risk",
            true
          ),
          opt(
            "Aucun problème — le net couvre 800 M",
            "No issue — net covers 800M",
            false,
            "Le net n'est pas du cash libre après CAPEX et BFR.",
            "Net is not free cash after CAPEX and WC."
          ),
          opt(
            "Augmenter le BFR pour financer le dividende",
            "Raise WC to fund the dividend",
            false,
            "Hausse de BFR consomme du cash, elle n'en crée pas.",
            "Rising WC consumes cash; it does not create it."
          ),
        ],
      }),
    ],
  }),

  // ── B tier: capex-and-depreciation ────────────────────────────────────────
  buildCfLesson({
    slug: "capex-and-depreciation",
    titleFr: "Capex et amortissement",
    titleEn: "Capex and Depreciation",
    descriptionFr:
      "Relier investissement capex, charge d'amortissement et flux de trésorerie.",
    descriptionEn:
      "Link capex investment, depreciation expense, and cash flow.",
    moduleSlug: "cf-foundations",
    sortOrder: 11,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: "cf-foundations",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Distinguer CAPEX (cash immédiat) et D&A (charge non cash), puis impact sur OCF et FCF.",
    objectiveEn:
      "Separate CAPEX (immediate cash) and D&A (non-cash charge), then impact on OCF and FCF.",
    explanationFr:
      "Le CAPEX est une sortie de cash d'investissement le jour de l'achat. L'amortissement (D&A) étale le coût de l'actif dans le P&L sans nouvelle sortie de cash. SahelPack achète une ligne 700 M FCFA, durée 10 ans linéaire → D&A ≈ 70 M / an. Année 1 : cash investissement −700 M ; charge D&A 70 M réduit l'EBIT mais l'OCF rajoute la D&A (non cash). FCF ≈ OCF − CAPEX : avec OCF 1 150 M, FCF = 450 M l'année du gros CAPEX. Les années suivantes, si CAPEX de maintenance = 200 M seulement, le FCF remonte — sauf si le BFR/CCC se dégrade. Contineo (CA 50 M€) : CAPEX logiciel 3 M€ amorti sur 3 ans → même logique euros. Trade-off : sous-investir préserve le FCF court terme mais use l'outil industriel ; sur-investir sans OCF solide force la dette (Contineo dette nette 20 M€).",
    explanationEn:
      "CAPEX is an investing cash outflow on purchase day. Depreciation (D&A) spreads the asset’s cost through the P&L without a new cash out. SahelPack buys a 700M FCFA line, 10-year straight line → D&A ≈ 70M / year. Year 1: investing cash −700M; D&A charge 70M reduces EBIT but OCF adds back D&A (non-cash). FCF ≈ OCF − CAPEX: with OCF 1,150M, FCF = 450M in the heavy CAPEX year. Later years, if maintenance CAPEX is only 200M, FCF rises — unless WC/CCC worsens. Contineo (€50m revenue): €3m software CAPEX amortized over 3 years → same euro logic. Trade-off: under-investing preserves short-term FCF but wears the industrial tool; over-investing without solid OCF forces debt (Contineo net debt €20m).",
    exampleFr:
      "CAPEX 700 M jour 1, D&A 70 M/an pendant 10 ans. EBITDA 1,8 Md inchangé à court terme ; EBIT baisse de la D&A ; cash −700 M immédiat.",
    exampleEn:
      "CAPEX 700M day 1, D&A 70M/year for 10 years. EBITDA 1.8bn unchanged short term; EBIT falls by D&A; cash −700M immediately.",
    practicalFr:
      "Ligne 700 M, 10 ans linéaire. D&A annuelle ? FCF si OCF = 1 150 M l'année d'achat ?",
    practicalEn:
      "Line 700M, 10-year straight line. Annual D&A? FCF if OCF = 1,150M in the purchase year?",
    mistakeFr:
      "Traiter l'EBITDA comme cash disponible sans budgéter le CAPEX de maintenance et de croissance.",
    mistakeEn:
      "Treating EBITDA as available cash without budgeting maintenance and growth CAPEX.",
    takeawayFr: "CAPEX = cash maintenant ; D&A = charge étalée — le FCF relie les deux.",
    takeawayEn: "CAPEX = cash now; D&A = spread charge — FCF connects both.",
    decisionFr:
      "Séparer CAPEX maintenance vs croissance dans le budget ; valider chaque projet sur FCF et dette.",
    decisionEn:
      "Split maintenance vs growth CAPEX in the budget; validate each project on FCF and debt.",
    flashcardFrontFr: "Capex vs amortissement",
    flashcardFrontEn: "Capex vs depreciation",
    flashcardBackFr: "Capex = sortie cash ; D&A = charge non cash rajoutée à l'OCF.",
    flashcardBackEn: "Capex = cash out; D&A = non-cash charge added back in OCF.",
    exercisePromptFr:
      "SahelPack : CAPEX 700 M, 10 ans. D&A ? Lien OCF (add-back) vs FCF (soustraction CAPEX) ?",
    exercisePromptEn:
      "SahelPack: CAPEX 700M, 10 years. D&A? Link OCF (add-back) vs FCF (subtract CAPEX)?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : SahelPack investit 700 M FCFA dans une ligne amortie linéairement sur 10 ans. OCF de l'année = 1 150 M. Quel FCF simplifié l'année d'achat ?",
      promptEn:
        "Situation: SahelPack invests 700M FCFA in a line depreciated straight-line over 10 years. Year’s OCF = 1,150M. Simplified FCF in the purchase year?",
      explanationCorrectFr:
        "FCF ≈ OCF − CAPEX = 1 150 − 700 = 450 M FCFA (D&A annuelle 70 M, déjà dans le pont OCF).",
      explanationCorrectEn:
        "FCF ≈ OCF − CAPEX = 1,150 − 700 = 450M FCFA (annual D&A 70M, already in the OCF bridge).",
      difficulty: 2,
      options: [
        opt("450 M FCFA", "450M FCFA", true),
        opt(
          "1 150 M FCFA",
          "1,150M FCFA",
          false,
          "1 150 M est l'OCF avant CAPEX.",
          "1,150M is OCF before CAPEX."
        ),
        opt(
          "70 M FCFA",
          "70M FCFA",
          false,
          "70 M est la D&A annuelle, pas le FCF.",
          "70M is annual D&A, not FCF."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : même presse 700 M / 10 ans. Pourquoi l'OCF ajoute-t-il la D&A alors que le FCF soustrait le CAPEX ?",
        promptEn:
          "Situation: same 700M / 10-year press. Why does OCF add back D&A while FCF subtracts CAPEX?",
        explanationCorrectFr:
          "D&A a réduit le net sans cash ; le CAPEX est la vraie sortie cash d'investissement — moments et natures différents.",
        explanationCorrectEn:
          "D&A reduced net without cash; CAPEX is the real investing cash out — different timing and nature.",
        difficulty: 2,
        options: [
          opt(
            "D&A non cash vs CAPEX cash d'investissement",
            "Non-cash D&A vs investing cash CAPEX",
            true
          ),
          opt(
            "D&A et CAPEX sont toujours identiques",
            "D&A and CAPEX are always identical",
            false,
            "Ils coïncident rarement une année donnée (700 vs 70).",
            "They rarely match in a given year (700 vs 70)."
          ),
          opt(
            "Le FCF ignore totalement le CAPEX",
            "FCF ignores CAPEX entirely",
            false,
            "Le FCF se définit justement après CAPEX.",
            "FCF is defined precisely after CAPEX."
          ),
        ],
      }),
    ],
  }),

  // ── B tier: accounts-receivable ───────────────────────────────────────────
  buildCfLesson({
    slug: "accounts-receivable",
    titleFr: "Créances clients",
    titleEn: "Accounts Receivable",
    descriptionFr:
      "Lire les créances clients et leur effet sur le cash quand les délais s'allongent.",
    descriptionEn:
      "Read receivables and their cash effect when collection slows.",
    moduleSlug: "cf-foundations",
    sortOrder: 13,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: "cf-working-capital",
    learningObjective: "APPLY",
    objectiveFr:
      "Estimer l'effet trésorerie d'une hausse des créances et le relier au DSO, CCC et OCF.",
    objectiveEn:
      "Estimate the cash effect of rising receivables and link it to DSO, CCC, and OCF.",
    explanationFr:
      "Les créances clients sont du CA facturé non encore encaissé. Hausse des créances = cash immobilisé = BFR ↑ = CCC (via DSO) plus long = OCF sous pression. SahelPack : créances 0,75 Md → 0,90 Md (+150 M FCFA) alors que le CA annuel reste ~10 Md : environ 150 M de cash en moins vs un DSO stable. Sur 10 Md / 365 ≈ 27 M FCFA de CA par jour, +150 M ≈ +5–6 jours de DSO. Contineo Services (CA 50 M€) : factures 6 M€ → 8 M€ (+2 M€) après allongement à 60 jours — même logique. Interprétation : une « belle » croissance de CA peut masquer une détérioration du recouvrement. Trade-off : crédit client généreux vs liquidité pour CAPEX (700 M) ou désendettement.",
    explanationEn:
      "Receivables are invoiced revenue not yet collected. Rising receivables = cash tied up = WC ↑ = longer CCC (via DSO) = OCF under pressure. SahelPack: receivables 0.75bn → 0.90bn (+150M FCFA) while annual sales stay ~10bn: about 150M less cash vs stable DSO. On 10bn / 365 ≈ 27M FCFA sales per day, +150M ≈ +5–6 DSO days. Contineo Services (€50m revenue): invoices €6m → €8m (+€2m) after stretching to 60 days — same logic. Interpretation: “nice” revenue growth can hide weaker collections. Trade-off: generous customer credit vs liquidity for CAPEX (700M) or deleveraging.",
    exampleFr:
      "Créances +150 M, ventes plates → cash −150 M, BFR vers 1,2 Md, OCF amputé du même ordre dans le pont net → OCF.",
    exampleEn:
      "Receivables +150M, flat sales → cash −150M, WC toward 1.2bn, OCF cut by a similar amount in the net → OCF bridge.",
    practicalFr:
      "Créances 750 → 900 M FCFA. Effet cash ? Ordre de grandeur de jours de CA (CA 10 Md) ?",
    practicalEn:
      "Receivables 750 → 900M FCFA. Cash effect? Rough days of sales (sales 10bn)?",
    mistakeFr:
      "Célébrer le CA sans suivre le DSO — ou croire que les créances « se paieront toujours à temps ».",
    mistakeEn:
      "Celebrating revenue without tracking DSO — or assuming receivables “will always pay on time.”",
    takeawayFr: "Créances ↑ = ventes facturées, cash pas encore là — DSO / CCC / OCF.",
    takeawayEn: "Receivables ↑ = sales invoiced, cash not yet here — DSO / CCC / OCF.",
    decisionFr:
      "Avant d'accorder 60 jours à un grand compte, simuler créances, BFR et OCF sur un trimestre.",
    decisionEn:
      "Before granting 60 days to a key account, simulate receivables, WC, and OCF over a quarter.",
    flashcardFrontFr: "Créances clients",
    flashcardFrontEn: "Accounts receivable",
    flashcardBackFr: "CA non encaissé — hausse = cash consommé (DSO).",
    flashcardBackEn: "Uncollected revenue — increase = cash consumed (DSO).",
    exercisePromptFr:
      "Créances +150 M FCFA. Effet cash ? Lien avec CCC et OCF de SahelPack ?",
    exercisePromptEn:
      "Receivables +150M FCFA. Cash effect? Link to SahelPack’s CCC and OCF?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : SahelPack (CA ~10 Md) voit ses créances passer de 750 M à 900 M FCFA sans autre changement. Quel effet trésorerie immédiat ?",
      promptEn:
        "Situation: SahelPack (~10bn sales) sees receivables rise from 750M to 900M FCFA with no other change. Immediate cash effect?",
      explanationCorrectFr: "Hausse +150 M → −150 M de cash immobilisé en créances.",
      explanationCorrectEn: "Increase +150M → −150M cash tied in receivables.",
      difficulty: 2,
      options: [
        opt("−150 M FCFA", "−150M FCFA", true),
        opt(
          "+150 M FCFA",
          "+150M FCFA",
          false,
          "Des créances plus élevées consomment du cash, ne l'augmentent pas.",
          "Higher receivables consume cash; they do not increase it."
        ),
        opt(
          "0 — le CA est déjà comptabilisé",
          "0 — revenue is already booked",
          false,
          "Le CA comptable n'est pas l'encaissement ; le bilan cash bouge.",
          "Booked revenue is not collection; cash on the balance sheet moves."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : Contineo allonge le DSO pour gagner 2 M€ de CA. Les créances montent de 2 M€. Quel maillon de la chaîne est touché en premier ?",
        promptEn:
          "Situation: Contineo stretches DSO to win €2m revenue. Receivables rise €2m. Which link in the chain is hit first?",
        explanationCorrectFr:
          "BFR ↑ puis CCC ↑ puis OCF sous pression — avant même le FCF / CAPEX.",
        explanationCorrectEn:
          "WC ↑ then CCC ↑ then OCF under pressure — even before FCF / CAPEX.",
        difficulty: 2,
        options: [
          opt("BFR → CCC → OCF", "WC → CCC → OCF", true),
          opt(
            "CAPEX → D&A uniquement",
            "CAPEX → D&A only",
            false,
            "Le crédit client ne crée pas de CAPEX ; il touche le BFR.",
            "Customer credit does not create CAPEX; it hits WC."
          ),
          opt(
            "Aucun — le CA suffit à créer le cash",
            "None — revenue alone creates cash",
            false,
            "Sans encaissement, pas d'OCF supplémentaire.",
            "Without collection, no extra OCF."
          ),
        ],
      }),
    ],
  }),

  // ── B tier: accounts-payable ──────────────────────────────────────────────
  buildCfLesson({
    slug: "accounts-payable",
    titleFr: "Dettes fournisseurs",
    titleEn: "Accounts Payable",
    descriptionFr:
      "Utiliser les dettes fournisseurs comme levier de trésorerie — avec limites.",
    descriptionEn:
      "Use payables as a cash lever — within limits.",
    moduleSlug: "cf-foundations",
    sortOrder: 14,
    estimatedMinutes: 7,
    difficulty: "BEGINNER",
    skillSlug: "cf-working-capital",
    learningObjective: "APPLY",
    objectiveFr:
      "Quantifier l'effet cash d'une hausse des dettes fournisseurs et peser le trade-off DPO vs relation fournisseur.",
    objectiveEn:
      "Quantify the cash effect of rising payables and weigh the DPO vs supplier-relationship trade-off.",
    explanationFr:
      "Les dettes fournisseurs sont des achats reçus non encore payés. Les augmenter (DPO ↑) réduit le BFR et raccourcit le CCC, ce qui soutient l'OCF — temporairement. SahelPack : dettes fournisseurs 150 M → 250 M FCFA (+100 M) : +100 M de cash non encore sorti, BFR qui se rapproche de 1,2 Md si le reste est stable. Contineo (CA 50 M€) : retarder 1 M€ de prestataires libère 1 M€ de cash court terme. Interprétation : c'est un financement opérationnel, pas un profit. Trade-off : DPO trop long → ristournes perdues, délais de livraison, rupture d'appro — risque opérationnel qui peut coûter plus que le gain d'OCF. Décision saine : négocier des délais alignés sur le cycle d'encaissement client (DSO), pas « retarder jusqu'à la plainte ».",
    explanationEn:
      "Payables are purchases received but not yet paid. Raising them (DPO ↑) reduces WC and shortens the CCC, supporting OCF — temporarily. SahelPack: payables 150M → 250M FCFA (+100M): +100M cash not yet paid out, WC moving toward 1.2bn if the rest is stable. Contineo (€50m revenue): delaying €1m of vendors frees €1m short-term cash. Interpretation: this is operating financing, not profit. Trade-off: DPO too long → lost discounts, delivery delays, supply breaks — operational risk that can cost more than the OCF gain. Sound decision: negotiate terms aligned with customer collection (DSO), not “delay until complaint.”",
    exampleFr:
      "Dettes +100 M → cash +100 M vs payer cash. Si DPO passe de 30 à 75 jours, un fournisseur stratégique peut exiger paiement d'avance — CCC empiré.",
    exampleEn:
      "Payables +100M → cash +100M vs paying cash. If DPO moves from 30 to 75 days, a strategic supplier may demand prepayment — CCC worsened.",
    practicalFr:
      "Dettes 150 → 250 M FCFA. Effet cash ? Citez un risque si le DPO double sans accord.",
    practicalEn:
      "Payables 150 → 250M FCFA. Cash effect? Name one risk if DPO doubles without agreement.",
    mistakeFr:
      "Traiter l'allongement du DPO comme un gain gratuit sans plan de paiement ni dialogue fournisseur.",
    mistakeEn:
      "Treating longer DPO as free money without a payment plan or supplier dialogue.",
    takeawayFr: "Dettes fournisseurs ↑ = cash libéré temporairement — discipline et plafonds.",
    takeawayEn: "Payables ↑ = cash released temporarily — discipline and caps.",
    decisionFr:
      "Négocier le DPO seulement si le plan de trésorerie montre la date de règlement et l'impact CCC.",
    decisionEn:
      "Negotiate DPO only if the cash plan shows settlement date and CCC impact.",
    flashcardFrontFr: "Dettes fournisseurs",
    flashcardFrontEn: "Accounts payable",
    flashcardBackFr: "Achats non payés — hausse = cash libéré (DPO).",
    flashcardBackEn: "Unpaid purchases — increase = cash released (DPO).",
    exercisePromptFr:
      "Dettes +100 M FCFA. Effet sur BFR, CCC et OCF ? Limite relationnelle ?",
    exercisePromptEn:
      "Payables +100M FCFA. Effect on WC, CCC, and OCF? Relationship limit?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : SahelPack fait passer les dettes fournisseurs de 150 M à 250 M FCFA, stocks et créances inchangés. Quel effet trésorerie, tout égal par ailleurs ?",
      promptEn:
        "Situation: SahelPack lifts payables from 150M to 250M FCFA, inventory and receivables unchanged. Cash effect, all else equal?",
      explanationCorrectFr: "+100 M FCFA de cash non encore décaissé — BFR en baisse.",
      explanationCorrectEn: "+100M FCFA of cash not yet paid out — WC down.",
      difficulty: 2,
      options: [
        opt("+100 M FCFA", "+100M FCFA", true),
        opt(
          "−100 M FCFA",
          "−100M FCFA",
          false,
          "Payer plus tard libère du cash ; −100 M serait une sortie nette.",
          "Paying later releases cash; −100M would be a net outflow."
        ),
        opt(
          "0 — hors bilan cash",
          "0 — outside cash",
          false,
          "La variation de dettes fournisseurs affecte directement la trésorerie.",
          "The payables change directly affects cash."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : pour « améliorer » le CCC, SahelPack double le DPO sans prévenir un fournisseur critique d'encres. Quel trade-off principal ?",
        promptEn:
          "Situation: to “improve” CCC, SahelPack doubles DPO without warning a critical ink supplier. Main trade-off?",
        explanationCorrectFr:
          "Gain d'OCF court terme vs risque d'approvisionnement / pénalités — le CCC comptable peut masquer une rupture opérationnelle.",
        explanationCorrectEn:
          "Short-term OCF gain vs supply / penalty risk — accounting CCC can hide an operational break.",
        difficulty: 2,
        options: [
          opt(
            "OCF ↑ court terme vs risque fournisseur",
            "Short-term OCF ↑ vs supplier risk",
            true
          ),
          opt(
            "Aucun risque — le DPO n'a pas de limite",
            "No risk — DPO has no limit",
            false,
            "Les fournisseurs peuvent restreindre les délais ou exiger le comptant.",
            "Suppliers can tighten terms or demand cash on delivery."
          ),
          opt(
            "Le CAPEX baisse automatiquement",
            "CAPEX falls automatically",
            false,
            "Le DPO ne remplace pas une décision d'investissement.",
            "DPO does not replace an investment decision."
          ),
        ],
      }),
    ],
  }),

  // ── B tier: cash-conversion-cycle ─────────────────────────────────────────
  buildCfLesson({
    slug: "cash-conversion-cycle",
    titleFr: "Cycle de conversion du cash",
    titleEn: "Cash Conversion Cycle",
    descriptionFr:
      "Combiner DIO, DSO et DPO pour mesurer le délai de récupération du cash.",
    descriptionEn:
      "Combine DIO, DSO, and DPO to measure cash recovery time.",
    moduleSlug: "cf-foundations",
    sortOrder: 16,
    estimatedMinutes: 9,
    difficulty: "BEGINNER",
    skillSlug: "cf-working-capital",
    learningObjective: "APPLY",
    objectiveFr:
      "Calculer le CCC = DIO + DSO − DPO, estimer le cash immobilisé, et le relier à BFR → OCF → FCF.",
    objectiveEn:
      "Compute CCC = DIO + DSO − DPO, estimate tied-up cash, and link it to WC → OCF → FCF.",
    explanationFr:
      "Le CCC mesure combien de jours l'entreprise finance son cycle d'exploitation. Formule : CCC = DIO + DSO − DPO. SahelPack : DIO 35 j, DSO 45 j, DPO 25 j → CCC = 55 jours. Avec CA 10 Md FCFA, 1 jour de CA ≈ 10 000 / 365 ≈ 27 M FCFA ; 55 jours ≈ 1,5 Md d'ordre de grandeur — cohérent avec un BFR ~1,2 Md (stocks + créances − dettes). Réduire le DSO de 45 à 37 (−8 j) ramène le CCC à 47 j et libère ~8 × 27 ≈ 220 M FCFA de cash : OCF soutenu, FCF plus confortable après CAPEX 700 M. Contineo Services (CA 50 M€) : DIO faible, DSO 50, DPO 20 → CCC 30 j ; chaque jour ≈ 50/365 ≈ 0,14 M€. Interprétation : le CCC est le chronomètre du BFR ; l'OCF en est le compteur cash.",
    explanationEn:
      "CCC measures how many days the firm funds its operating cycle. Formula: CCC = DIO + DSO − DPO. SahelPack: DIO 35d, DSO 45d, DPO 25d → CCC = 55 days. With sales 10bn FCFA, 1 day of sales ≈ 10,000 / 365 ≈ 27M FCFA; 55 days ≈ 1.5bn order of magnitude — consistent with WC ~1.2bn (inventory + receivables − payables). Cutting DSO from 45 to 37 (−8d) brings CCC to 47d and frees ~8 × 27 ≈ 220M FCFA of cash: OCF supported, FCF more comfortable after CAPEX 700M. Contineo Services (€50m revenue): low DIO, DSO 50, DPO 20 → CCC 30d; each day ≈ 50/365 ≈ €0.14m. Interpretation: CCC is WC’s stopwatch; OCF is the cash meter.",
    exampleFr:
      "CCC 55 → 47 jours (−8) ≈ 220 M FCFA libérés. Si ces 220 M évitent un tirage de dette, le FCF « économique » s'améliore sans toucher l'EBITDA 1,8 Md.",
    exampleEn:
      "CCC 55 → 47 days (−8) ≈ 220M FCFA freed. If that 220M avoids a debt draw, “economic” FCF improves without touching EBITDA 1.8bn.",
    practicalFr:
      "Calculez CCC avec DIO 35, DSO 45, DPO 25. Puis DSO 37 : nouveau CCC et sens de l'effet OCF ?",
    practicalEn:
      "Compute CCC with DIO 35, DSO 45, DPO 25. Then DSO 37: new CCC and OCF effect direction?",
    mistakeFr:
      "Raccourcir le CCC uniquement en explosant le DPO au détriment des fournisseurs critiques.",
    mistakeEn:
      "Shortening CCC only by exploding DPO at the expense of critical suppliers.",
    takeawayFr: "CCC court = moins de cash bloqué — levier sur BFR, OCF et FCF.",
    takeawayEn: "Short CCC = less cash locked — lever on WC, OCF, and FCF.",
    decisionFr:
      "Prioriser le levier (DIO, DSO ou DPO) qui réduit le CCC le plus sans casser la chaîne d'approvisionnement.",
    decisionEn:
      "Prioritize the lever (DIO, DSO, or DPO) that cuts CCC most without breaking the supply chain.",
    flashcardFrontFr: "Cycle de conversion du cash",
    flashcardFrontEn: "Cash conversion cycle",
    flashcardBackFr: "CCC = DIO + DSO − DPO (jours) — chronomètre du BFR.",
    flashcardBackEn: "CCC = DIO + DSO − DPO (days) — WC stopwatch.",
    exercisePromptFr:
      "DIO 35, DSO 45, DPO 25. CCC ? Si CA 10 Md, valeur approx. d'un jour ? Effet d'un −8 j sur DSO ?",
    exercisePromptEn:
      "DIO 35, DSO 45, DPO 25. CCC? If sales 10bn, approx. value of one day? Effect of −8 DSO days?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Situation : SahelPack affiche DIO 35, DSO 45, DPO 25. Le trésorier prépare le comité cash. Quel CCC présenter ?",
      promptEn:
        "Situation: SahelPack shows DIO 35, DSO 45, DPO 25. The treasurer prepares the cash committee. What CCC to present?",
      explanationCorrectFr: "35 + 45 − 25 = 55 jours.",
      explanationCorrectEn: "35 + 45 − 25 = 55 days.",
      difficulty: 2,
      options: [
        opt("55 jours", "55 days", true),
        opt(
          "105 jours",
          "105 days",
          false,
          "105 additionne les trois délais sans soustraire le DPO.",
          "105 adds all three delays without subtracting DPO."
        ),
        opt(
          "25 jours",
          "25 days",
          false,
          "25 est le seul DPO, pas le CCC.",
          "25 is DPO alone, not CCC."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : CA 10 Md FCFA (~27 M / jour). Le DSO baisse de 8 jours, DIO/DPO inchangés. Quel ordre de grandeur de cash libéré, et quel effet sur OCF / FCF ?",
        promptEn:
          "Situation: sales 10bn FCFA (~27M / day). DSO falls 8 days, DIO/DPO unchanged. Approximate cash freed, and effect on OCF / FCF?",
        explanationCorrectFr:
          "~8 × 27 ≈ 220 M FCFA libérés → BFR ↓, OCF soutenu, FCF plus à l'aise après CAPEX.",
        explanationCorrectEn:
          "~8 × 27 ≈ 220M FCFA freed → WC ↓, OCF supported, FCF more comfortable after CAPEX.",
        difficulty: 2,
        options: [
          opt(
            "~220 M FCFA — OCF / FCF soutenus",
            "~220M FCFA — OCF / FCF supported",
            true
          ),
          opt(
            "~27 M FCFA seulement",
            "~27M FCFA only",
            false,
            "27 M est la valeur d'un jour, pas de huit jours.",
            "27M is one day’s value, not eight days."
          ),
          opt(
            "Aucun effet — l'EBITDA 1,8 Md suffit",
            "No effect — EBITDA 1.8bn is enough",
            false,
            "Le CCC agit sur le cash via le BFR, indépendamment de l'EBITDA.",
            "CCC acts on cash via WC, independent of EBITDA."
          ),
        ],
      }),
    ],
  }),
];
