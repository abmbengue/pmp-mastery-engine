import { buildCfLesson, opt, q } from "./cf-factory";
import type { CompactLesson } from "./compact";
import { CF_WORKING_CAPITAL_LESSONS } from "./cf-working-capital";

const CF_FOUNDATIONS_CORE_LESSONS: CompactLesson[] = [
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
      "Expliquer comment la finance d'entreprise relie les décisions opérationnelles, d'investissement et de financement.",
    objectiveEn:
      "Explain how corporate finance links operating, investing, and financing decisions.",
    explanationFr:
      "NovaPack fabrique des emballages. La direction opérationnelle choisit les volumes et les prix ; la finance traduit ces choix en cash, rentabilité et risque. Investir dans une nouvelle presse (5 M€) relève de la décision d'investissement : faut-il financer par dette, fonds propres ou cash existant ? Remonter les prix de 3 % pour protéger la marge est une décision opérationnelle avec impact finance. La finance d'entreprise ne remplace pas les opérations — elle fournit le langage (résultat, cash, BFR) pour décider où créer de la valeur.",
    explanationEn:
      "NovaPack makes packaging. Operations chooses volumes and prices; finance translates those choices into cash, profitability, and risk. Investing in a new press (€5M) is an investment decision: fund with debt, equity, or existing cash? Raising prices 3% to protect margin is an operating decision with finance impact. Corporate finance does not replace operations — it provides the language (earnings, cash, WC) to decide where value is created.",
    exampleFr:
      "NovaPack prévoit +15 % de volumes mais le BFR consommerait 400 k€ de cash. La finance alerte : croissance rentable en comptabilité, mais trésorerie tendue sans ligne de crédit.",
    exampleEn:
      "NovaPack plans +15% volume but WC would consume €400k cash. Finance flags: accounting-profit growth, but tight cash without a credit line.",
    practicalFr:
      "Listez une décision opérationnelle, une d'investissement et une de financement chez NovaPack.",
    practicalEn:
      "List one operating, one investing, and one financing decision at NovaPack.",
    mistakeFr:
      "Réduire la finance d'entreprise à de la comptabilité passive — elle éclaire les arbitrages futurs.",
    mistakeEn:
      "Reducing corporate finance to passive bookkeeping — it illuminates future trade-offs.",
    takeawayFr:
      "Finance d'entreprise = traduire les choix business en cash, risque et création de valeur.",
    takeawayEn:
      "Corporate finance = translate business choices into cash, risk, and value creation.",
    decisionFr:
      "Avant un projet capex, demander : impact résultat, impact cash, et source de financement.",
    decisionEn:
      "Before a capex project, ask: earnings impact, cash impact, and funding source.",
    flashcardFrontFr: "Finance d'entreprise",
    flashcardFrontEn: "Corporate finance",
    flashcardBackFr: "Relie opérations, investissement et financement via cash et valeur.",
    flashcardBackEn: "Links operations, investment, and financing via cash and value.",
    exercisePromptFr:
      "NovaPack veut une presse à 5 M€. Nommez l'impact opérationnel attendu et une question de financement à trancher.",
    exercisePromptEn:
      "NovaPack wants a €5M press. Name the expected operating impact and one financing question to resolve.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "NovaPack achète une presse 5 M€ financée par emprunt bancaire. Quel type de décision domine ?",
      promptEn:
        "NovaPack buys a €5M press funded by a bank loan. Which decision type dominates?",
      explanationCorrectFr:
        "Investissement (actif long terme) avec dimension financement (dette).",
      explanationCorrectEn:
        "Investment (long-term asset) with a financing dimension (debt).",
      difficulty: 1,
      options: [
        opt("Décision d'investissement", "Investment decision", true),
        opt("Décision de marketing uniquement", "Marketing decision only", false, "Une presse est un actif productif, pas une campagne marketing.", "A press is a productive asset, not a marketing campaign."),
        opt("Décision RH", "HR decision", false, "Le recrutement serait RH ; l'achat d'équipement est investissement.", "Hiring would be HR; equipment purchase is investment."),
      ],
    }),
  }),

  buildCfLesson({
    slug: "value-creation-basics",
    titleFr: "Bases de la création de valeur",
    titleEn: "Value Creation Basics",
    descriptionFr:
      "Distinguer croissance du CA, profit comptable et création de valeur pour les actionnaires.",
    descriptionEn:
      "Separate revenue growth, accounting profit, and shareholder value creation.",
    moduleSlug: "cf-foundations",
    sortOrder: 1,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: "cf-foundations",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Comparer croissance, marge et retour sur capital investi sur un mini-cas chiffré.",
    objectiveEn:
      "Compare growth, margin, and return on invested capital on a numbered mini-case.",
    explanationFr:
      "NovaPack : CA 10 M€ → 12 M€ (+20 %), EBIT 800 k€ → 900 k€ (+12,5 %). La croissance est forte mais la marge EBIT passe de 8 % à 7,5 % — chaque euro de vente rapporte moins. Le capital investi (usine + BFR) est 6 M€ : ROIC ≈ 900 / 6 000 = 15 %. Si le coût du capital est 10 %, NovaPack crée de la valeur (spread positif). Si le projet d'expansion exige 2 M€ de capital supplémentaire pour seulement +100 k€ d'EBIT, le ROIC du projet est 5 % — destruction de valeur possible même avec plus de CA.",
    explanationEn:
      "NovaPack: sales €10M → €12M (+20%), EBIT €800k → €900k (+12.5%). Growth is strong but EBIT margin falls from 8% to 7.5% — each sales euro earns less. Invested capital (plant + WC) is €6M: ROIC ≈ 900 / 6,000 = 15%. If cost of capital is 10%, NovaPack creates value (positive spread). If expansion needs €2M more capital for only +€100k EBIT, project ROIC is 5% — possible value destruction despite higher sales.",
    exampleFr:
      "CA +20 % mais marge ↓ et ROIC projet 5 % < coût du capital 10 % → alerte valeur, pas succès automatique.",
    exampleEn:
      "Sales +20% but margin ↓ and project ROIC 5% < 10% cost of capital → value alert, not automatic success.",
    practicalFr:
      "EBIT 900 k€, capital investi 6 M€. Calculez le ROIC. Comparez à un coût du capital de 10 %.",
    practicalEn:
      "EBIT €900k, invested capital €6M. Compute ROIC. Compare to a 10% cost of capital.",
    mistakeFr:
      "Confondre « plus gros » (CA) avec « plus rentable » (ROIC au-dessus du coût du capital).",
    mistakeEn:
      "Confusing “bigger” (sales) with “more profitable” (ROIC above cost of capital).",
    takeawayFr:
      "Création de valeur = performance économique au-delà du coût du capital, pas seulement croissance.",
    takeawayEn:
      "Value creation = economic performance above cost of capital, not just growth.",
    decisionFr:
      "Refuser ou repenser un projet dont le ROIC attendu est inférieur au coût du capital.",
    decisionEn:
      "Reject or rethink a project whose expected ROIC is below cost of capital.",
    flashcardFrontFr: "Création de valeur",
    flashcardFrontEn: "Value creation",
    flashcardBackFr: "ROIC > coût du capital → valeur ; l'inverse → destruction.",
    flashcardBackEn: "ROIC > cost of capital → value; the reverse → destruction.",
    exercisePromptFr:
      "Projet : +2 M€ capital, +100 k€ EBIT. ROIC projet ? Crée-t-il de la valeur si WACC = 10 % ?",
    exercisePromptEn:
      "Project: +€2M capital, +€100k EBIT. Project ROIC? Does it create value if WACC = 10%?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "NovaPack : EBIT 900 k€, capital investi 6 M€. ROIC ?",
      promptEn: "NovaPack: EBIT €900k, invested capital €6M. ROIC?",
      explanationCorrectFr: "900 / 6 000 = 15 %.",
      explanationCorrectEn: "900 / 6,000 = 15%.",
      difficulty: 2,
      options: [
        opt("15 %", "15%", true),
        opt("7,5 %", "7.5%", false, "7,5 % est la marge EBIT sur CA, pas le ROIC.", "7.5% is EBIT margin on sales, not ROIC."),
        opt("20 %", "20%", false, "20 % était la croissance du CA, pas le ROIC.", "20% was sales growth, not ROIC."),
      ],
    }),
  }),

  buildCfLesson({
    slug: "income-statement",
    titleFr: "Compte de résultat",
    titleEn: "Income Statement",
    descriptionFr:
      "Lire la cascade revenus → marge → résultat sur une période avec un mini-cas NovaPack.",
    descriptionEn:
      "Read the revenue → margin → earnings cascade over a period with a NovaPack mini-case.",
    moduleSlug: "cf-foundations",
    sortOrder: 2,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: "cf-foundations",
    learningObjective: "APPLY",
    objectiveFr:
      "Construire un compte de résultat simplifié et calculer la marge brute et le résultat d'exploitation.",
    objectiveEn:
      "Build a simplified income statement and compute gross margin and operating profit.",
    explanationFr:
      "Le compte de résultat mesure la performance sur une période (ici l'année 2025 de NovaPack). CA 2 000 k€, coût des ventes 1 200 k€ → marge brute 800 k€ (40 %). Charges opérationnelles (salaires, loyer, marketing) 520 k€ → EBIT 280 k€. Intérêts 30 k€, impôts 62 k€ → résultat net 188 k€. Contrairement au bilan (photo à une date), ce document raconte l'histoire de l'année : combien vendu, combien dépensé, quel profit comptable.",
    explanationEn:
      "The income statement measures performance over a period (NovaPack fiscal 2025). Sales €2,000k, COGS €1,200k → gross profit €800k (40%). Operating expenses (payroll, rent, marketing) €520k → EBIT €280k. Interest €30k, taxes €62k → net income €188k. Unlike the balance sheet (snapshot), this tells the year's story: how much sold, spent, and earned in accounting profit.",
    exampleFr:
      "NovaPack 2025 : CA 2 000, COGS 1 200, Opex 520 → EBIT 280, résultat net 188. Marge brute 40 %.",
    exampleEn:
      "NovaPack 2025: sales 2,000, COGS 1,200, opex 520 → EBIT 280, net income 188. Gross margin 40%.",
    practicalFr:
      "Avec CA 2 000, COGS 1 200, Opex 520 : calculez marge brute, EBIT et marge EBIT.",
    practicalEn:
      "With sales 2,000, COGS 1,200, opex 520: compute gross profit, EBIT, and EBIT margin.",
    mistakeFr:
      "Confondre compte de résultat (période) et bilan (date unique) — deux questions différentes.",
    mistakeEn:
      "Confusing income statement (period) and balance sheet (single date) — two different questions.",
    takeawayFr:
      "Compte de résultat = performance sur une période, de la vente au résultat net.",
    takeawayEn:
      "Income statement = performance over a period, from sales to net income.",
    decisionFr:
      "Identifier quelle ligne (marge brute, EBIT, net) correspond à la question posée par le comité.",
    decisionEn:
      "Identify which line (gross profit, EBIT, net) matches the question the committee asks.",
    flashcardFrontFr: "Compte de résultat",
    flashcardFrontEn: "Income statement",
    flashcardBackFr: "Performance sur une période : revenus − charges = résultat.",
    flashcardBackEn: "Performance over a period: revenue − expenses = earnings.",
    exercisePromptFr:
      "NovaPack : CA 2 000, COGS 1 200, Opex 520, intérêts 30, impôts 62. Reconstituez la cascade jusqu'au résultat net.",
    exercisePromptEn:
      "NovaPack: sales 2,000, COGS 1,200, opex 520, interest 30, taxes 62. Rebuild the cascade to net income.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "NovaPack : CA 2 000 k€, COGS 1 200 k€, charges opérationnelles 520 k€. EBIT ?",
      promptEn:
        "NovaPack: sales €2,000k, COGS €1,200k, operating expenses €520k. EBIT?",
      explanationCorrectFr: "Marge brute 800 − Opex 520 = EBIT 280 k€.",
      explanationCorrectEn: "Gross profit 800 − opex 520 = EBIT €280k.",
      difficulty: 2,
      options: [
        opt("280 k€", "€280k", true),
        opt("800 k€", "€800k", false, "800 k€ est la marge brute, avant les charges opérationnelles.", "€800k is gross profit, before operating expenses."),
        opt("520 k€", "€520k", false, "520 k€ sont les charges opérationnelles, pas l'EBIT.", "€520k is operating expense, not EBIT."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "NovaPack : EBIT 280 k€, intérêts 30 k€, impôts 62 k€. Résultat net ?",
        promptEn:
          "NovaPack: EBIT €280k, interest €30k, taxes €62k. Net income?",
        explanationCorrectFr: "280 − 30 − 62 = 188 k€.",
        explanationCorrectEn: "280 − 30 − 62 = €188k.",
        difficulty: 2,
        options: [
          opt("188 k€", "€188k", true),
          opt("250 k€", "€250k", false, "250 oublie les impôts (280 − 30 seulement).", "250 forgets taxes (280 − 30 only)."),
          opt("218 k€", "€218k", false, "218 soustrait seulement les intérêts, pas les impôts.", "218 subtracts only interest, not taxes."),
        ],
      }),
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Le directeur demande la rentabilité commerciale avant frais de structure. Quelle ligne regarder en priorité ?",
        promptEn:
          "The director asks for commercial profitability before overhead. Which line to check first?",
        explanationCorrectFr: "La marge brute (CA − COGS) mesure la performance produit avant Opex.",
        explanationCorrectEn: "Gross profit (sales − COGS) measures product performance before opex.",
        difficulty: 2,
        options: [
          opt("Marge brute", "Gross profit", true),
          opt("Résultat net", "Net income", false, "Le net inclut intérêts et impôts, pas seulement le commercial.", "Net includes interest and taxes, not just commercial."),
          opt("Total du bilan", "Balance sheet total", false, "Le bilan est une photo patrimoniale, pas la cascade P&L.", "The balance sheet is a position snapshot, not the P&L cascade."),
        ],
      }),
    ],
  }),

  buildCfLesson({
    slug: "balance-sheet",
    titleFr: "Bilan",
    titleEn: "Balance Sheet",
    descriptionFr:
      "Lire l'équation Actif = Passif + Capitaux propres avec les chiffres de NovaPack.",
    descriptionEn:
      "Read Assets = Liabilities + Equity with NovaPack's numbers.",
    moduleSlug: "cf-foundations",
    sortOrder: 3,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: "cf-foundations",
    learningObjective: "APPLY",
    objectiveFr:
      "Vérifier l'équation du bilan et identifier ce que financent dettes vs capitaux propres.",
    objectiveEn:
      "Verify the balance sheet equation and identify what debt vs equity funds.",
    explanationFr:
      "Au 31/12/2025, NovaPack : actifs 4 500 k€ (usine 2 800, stocks 120, créances 200, cash 380, autres 1 000). Passifs 2 700 k€ (dettes fournisseurs 80, emprunts 2 200, autres 420). Capitaux propres 1 800 k€. Vérification : 4 500 = 2 700 + 1 800. Le bilan est une photo à une date : combien l'entreprise possède (actifs) et comment c'est financé (dettes + equity). Le résultat net de l'année (+188 k€) augmente les capitaux propres l'année suivante.",
    explanationEn:
      "At 12/31/2025, NovaPack: assets €4,500k (plant 2,800, inventory 120, receivables 200, cash 380, other 1,000). Liabilities €2,700k (payables 80, loans 2,200, other 420). Equity €1,800k. Check: 4,500 = 2,700 + 1,800. The balance sheet is a snapshot: what the company owns (assets) and how it is funded (debt + equity). Annual net income (+€188k) raises equity next year.",
    exampleFr:
      "Usine 2 800 financée surtout par emprunt 2 200 — levier financier élevé ; une hausse de taux pèse sur les intérêts.",
    exampleEn:
      "Plant 2,800 funded mainly by €2,200 debt — high leverage; rate rises weigh on interest.",
    practicalFr:
      "Actifs 4 500, passifs 2 700. Calculez les capitaux propres. Que se passe-t-il si le résultat net est +188 ?",
    practicalEn:
      "Assets 4,500, liabilities 2,700. Compute equity. What happens if net income is +188?",
    mistakeFr:
      "Lire le bilan comme une performance annuelle — c'est une position à une date.",
    mistakeEn:
      "Reading the balance sheet as annual performance — it is a position at a date.",
    takeawayFr: "Bilan : Actifs = Passif + Capitaux propres — photo du financement.",
    takeawayEn: "Balance sheet: Assets = Liabilities + Equity — funding snapshot.",
    decisionFr:
      "Avant un nouvel emprunt, vérifier si les actifs génèrent assez de cash pour servir la dette.",
    decisionEn:
      "Before new debt, check whether assets generate enough cash to service it.",
    flashcardFrontFr: "Équation du bilan",
    flashcardFrontEn: "Balance sheet equation",
    flashcardBackFr: "Actifs = Passif + Capitaux propres.",
    flashcardBackEn: "Assets = Liabilities + Equity.",
    exercisePromptFr:
      "NovaPack : actifs 4 500, passifs 2 700. Capitaux propres ? Si résultat net +188, nouveaux CP ?",
    exercisePromptEn:
      "NovaPack: assets 4,500, liabilities 2,700. Equity? If net income +188, new equity?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "NovaPack : actifs 4 500 k€, passifs 2 700 k€. Capitaux propres ?",
      promptEn: "NovaPack: assets €4,500k, liabilities €2,700k. Equity?",
      explanationCorrectFr: "4 500 − 2 700 = 1 800 k€.",
      explanationCorrectEn: "4,500 − 2,700 = €1,800k.",
      difficulty: 2,
      options: [
        opt("1 800 k€", "€1,800k", true),
        opt("2 700 k€", "€2,700k", false, "2 700 k€ sont les passifs, pas les capitaux propres.", "€2,700k is liabilities, not equity."),
        opt("7 200 k€", "€7,200k", false, "On ne additionne pas actifs et passifs.", "Do not add assets and liabilities."),
      ],
    }),
  }),

  buildCfLesson({
    slug: "cash-flow-statement",
    titleFr: "Tableau de flux de trésorerie",
    titleEn: "Cash Flow Statement",
    descriptionFr:
      "Classer les flux en exploitation, investissement et financement sur un cas NovaPack.",
    descriptionEn:
      "Classify flows as operating, investing, and financing on a NovaPack case.",
    moduleSlug: "cf-foundations",
    sortOrder: 4,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: "cf-foundations",
    learningObjective: "APPLY",
    objectiveFr:
      "Classer des mouvements de cash et expliquer pourquoi le résultat net diffère du flux d'exploitation.",
    objectiveEn:
      "Classify cash movements and explain why net income differs from operating cash flow.",
    explanationFr:
      "NovaPack 2025 : résultat net 188 k€, flux d'exploitation 173 k€ (net + D&A 45 − BFR 60). Flux investissement : achat presse −400 k€. Flux financement : nouvel emprunt +272 k€, dividendes −50 k€ (= +222 k€). Variation de cash = 173 − 400 + 222 = −5 k€ (cash 385 → 380 k€). Le tableau réconcilie le compte de résultat (accrual) avec la trésorerie réelle.",
    explanationEn:
      "NovaPack 2025: net income €188k, operating cash flow €173k (net + D&A 45 − WC 60). Investing: press purchase −€400k. Financing: new loan +€272k, dividends −€50k (= +€222k). Cash change = 173 − 400 + 222 = −€5k (cash 385 → 380). The statement reconciles accrual P&L with real cash.",
    exampleFr:
      "Résultat net 188 vs flux exploitation 173 → ne pas conclure « trésorerie confortable » sans lire le tableau complet.",
    exampleEn:
      "Net income 188 vs operating cash 173 → do not assume “comfortable cash” without reading the full statement.",
    practicalFr:
      "Classez : paiement fournisseurs, achat machine, remboursement emprunt.",
    practicalEn:
      "Classify: supplier payment, machine purchase, loan repayment.",
    mistakeFr:
      "Utiliser le résultat net comme proxy du cash — le BFR et les amortissements créent des écarts.",
    mistakeEn:
      "Using net income as a cash proxy — WC and depreciation create gaps.",
    takeawayFr:
      "Trois blocs : exploitation, investissement, financement — seul le total explique la variation de cash.",
    takeawayEn:
      "Three blocks: operating, investing, financing — only the total explains cash change.",
    decisionFr:
      "Si le flux d'exploitation est faible malgré un bon résultat net, investiguer le BFR avant d'investir.",
    decisionEn:
      "If operating cash is weak despite good net income, investigate WC before investing.",
    flashcardFrontFr: "Trois flux de trésorerie",
    flashcardFrontEn: "Three cash flows",
    flashcardBackFr: "Exploitation, investissement, financement.",
    flashcardBackEn: "Operating, investing, financing.",
    exercisePromptFr:
      "NovaPack : résultat net 188, flux exploitation 173, investissement −400, financement +222. Variation de cash ?",
    exercisePromptEn:
      "NovaPack: net income 188, operating 173, investing −400, financing +222. Cash change?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "NovaPack achète une presse 400 k€. Dans quel flux apparaît cet achat ?",
      promptEn:
        "NovaPack buys a €400k press. In which cash flow does this appear?",
      explanationCorrectFr: "Achat d'actif long terme = flux d'investissement.",
      explanationCorrectEn: "Long-term asset purchase = investing cash flow.",
      difficulty: 2,
      options: [
        opt("Investissement", "Investing", true),
        opt("Exploitation", "Operating", false, "L'exploitation couvre l'activité courante, pas les capex majeurs.", "Operating covers core activity, not major capex."),
        opt("Financement", "Financing", false, "Le financement concerne dette et equity, pas l'achat d'usine.", "Financing is debt and equity, not plant purchase."),
      ],
    }),
  }),

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
      "Calculer le CA reconnu et l'écart avec les encaissements quand les délais clients changent.",
    objectiveEn:
      "Compute recognized revenue and the gap vs collections when customer terms change.",
    explanationFr:
      "NovaPack livre 500 k€ de cartons en décembre, facturés à 45 jours. CA décembre = 500 k€ (revenu reconnu à la livraison selon les règles usuelles). Encaissements décembre des ventes du mois ≈ 0 k€ — le cash arrive en janvier-février. Si un client commande 100 k€ supplémentaires livrés le 28/12 mais payés en mars, le CA 2025 inclut 600 k€ tandis que le cash encaissé sur ces ventes reste faible en décembre. Croissance du CA ≠ croissance immédiate du cash.",
    explanationEn:
      "NovaPack delivers €500k of cartons in December, invoiced at 45 days. December revenue = €500k (recognized on delivery under usual rules). December cash collections on those sales ≈ €0 — cash arrives in January–February. If a customer orders an extra €100k delivered 12/28 but paid in March, 2025 revenue includes €600k while cash collected on those sales stays low in December. Revenue growth ≠ immediate cash growth.",
    exampleFr:
      "CA décembre 600 k€, encaissements liés 80 k€ → écart 520 k€ expliqué par les créances.",
    exampleEn:
      "December revenue €600k, related collections €80k → €520k gap explained by receivables.",
    practicalFr:
      "Livraisons 500 k€, encaissements 80 k€. Quel écart revenu vs cash ? Pourquoi ?",
    practicalEn:
      "Deliveries €500k, collections €80k. What revenue vs cash gap? Why?",
    mistakeFr:
      "Piloter la trésorerie uniquement avec le CA — ignorer les délais de paiement clients.",
    mistakeEn:
      "Managing cash using revenue only — ignoring customer payment terms.",
    takeawayFr: "Revenu = vente reconnue ; cash = encaissement — le délai crée l'écart.",
    takeawayEn: "Revenue = recognized sale; cash = collection — timing creates the gap.",
    decisionFr:
      "Avant de fixer un objectif CA, modéliser les encaissements attendus selon les délais clients.",
    decisionEn:
      "Before setting a revenue target, model expected collections from customer terms.",
    flashcardFrontFr: "Chiffre d'affaires",
    flashcardFrontEn: "Revenue",
    flashcardBackFr: "Ventes reconnues sur la période — pas forcément encaissées.",
    flashcardBackEn: "Sales recognized in the period — not necessarily collected.",
    exercisePromptFr:
      "NovaPack : livraisons 500 k€ en décembre, encaissements 80 k€. Expliquez l'écart en une phrase.",
    exercisePromptEn:
      "NovaPack: €500k deliveries in December, €80k collections. Explain the gap in one sentence.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "NovaPack livre 500 k€ en décembre, encaisse 80 k€ le même mois. Écart revenu vs cash sur ces ventes ?",
      promptEn:
        "NovaPack delivers €500k in December, collects €80k the same month. Revenue vs cash gap on those sales?",
      explanationCorrectFr: "500 − 80 = 420 k€ non encore encaissés (créances).",
      explanationCorrectEn: "500 − 80 = €420k not yet collected (receivables).",
      difficulty: 2,
      options: [
        opt("420 k€", "€420k", true),
        opt("80 k€", "€80k", false, "80 k€ est l'encaissement, pas l'écart.", "€80k is collections, not the gap."),
        opt("580 k€", "€580k", false, "On ne additionne pas revenu et encaissement.", "Do not add revenue and collections."),
      ],
    }),
  }),

  buildCfLesson({
    slug: "ebitda-basics",
    titleFr: "Bases de l'EBITDA",
    titleEn: "EBITDA Basics",
    descriptionFr:
      "Calculer l'EBITDA et le comparer à l'EBIT sur les chiffres NovaPack.",
    descriptionEn:
      "Compute EBITDA and compare it to EBIT on NovaPack's numbers.",
    moduleSlug: "cf-foundations",
    sortOrder: 6,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: "cf-foundations",
    learningObjective: "APPLY",
    objectiveFr:
      "Calculer l'EBITDA à partir de l'EBIT et interpréter l'écart D&A sur un cas chiffré.",
    objectiveEn:
      "Compute EBITDA from EBIT and interpret the D&A gap on a numbered case.",
    explanationFr:
      "NovaPack : EBIT 280 k€, amortissements et dépréciations (D&A) 45 k€. EBITDA = EBIT + D&A = 325 k€. L'EBITDA approxime la performance opérationnelle avant intérêts, impôts et charges non cash de D&A — utile pour comparer des entreprises avec des actifs différents. Ce n'est pas le cash : NovaPack peut afficher EBITDA 325 k€ tout en consommant du cash via BFR (+60 k€). EBITDA exclut la structure de capital (intérêts) et les impôts, pas les variations de BFR.",
    explanationEn:
      "NovaPack: EBIT €280k, depreciation and amortization (D&A) €45k. EBITDA = EBIT + D&A = €325k. EBITDA approximates operating performance before interest, taxes, and non-cash D&A — useful to compare companies with different assets. It is not cash: NovaPack can show €325k EBITDA while consuming cash via WC (+€60k). EBITDA excludes capital structure (interest) and taxes, not WC changes.",
    exampleFr:
      "EBITDA 325 vs flux exploitation 173 → l'écart montre que l'EBITDA ne remplace pas le tableau de flux.",
    exampleEn:
      "EBITDA 325 vs operating cash 173 → the gap shows EBITDA does not replace the cash flow statement.",
    practicalFr:
      "EBIT 280, D&A 45. Calculez EBITDA. Si D&A double l'année prochaine, EBIT baisse de combien (tout égal) ?",
    practicalEn:
      "EBIT 280, D&A 45. Compute EBITDA. If D&A doubles next year, by how much does EBIT fall (all else equal)?",
    mistakeFr:
      "Traiter l'EBITDA comme « cash disponible » — ignorer capex, BFR et intérêts.",
    mistakeEn:
      "Treating EBITDA as “available cash” — ignoring capex, WC, and interest.",
    takeawayFr: "EBITDA = EBIT + D&A — indicateur opérationnel, pas trésorerie.",
    takeawayEn: "EBITDA = EBIT + D&A — operating indicator, not cash.",
    decisionFr:
      "Utiliser l'EBITDA pour comparer des pairs, puis vérifier le cash réel avant d'endetter.",
    decisionEn:
      "Use EBITDA to compare peers, then verify real cash before borrowing.",
    flashcardFrontFr: "EBITDA",
    flashcardFrontEn: "EBITDA",
    flashcardBackFr: "EBIT + D&A — avant intérêts et impôts.",
    flashcardBackEn: "EBIT + D&A — before interest and taxes.",
    exercisePromptFr:
      "NovaPack : EBIT 280, D&A 45. EBITDA ? Expliquez pourquoi ce n'est pas le flux de trésorerie.",
    exercisePromptEn:
      "NovaPack: EBIT 280, D&A 45. EBITDA? Explain why it is not cash flow.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "NovaPack : EBIT 280 k€, D&A 45 k€. EBITDA ?",
      promptEn: "NovaPack: EBIT €280k, D&A €45k. EBITDA?",
      explanationCorrectFr: "280 + 45 = 325 k€.",
      explanationCorrectEn: "280 + 45 = €325k.",
      difficulty: 2,
      options: [
        opt("325 k€", "€325k", true),
        opt("235 k€", "€235k", false, "On additionne D&A à l'EBIT, on ne le soustrait pas.", "Add D&A to EBIT; do not subtract it."),
        opt("280 k€", "€280k", false, "280 k€ est l'EBIT, pas l'EBITDA.", "€280k is EBIT, not EBITDA."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "NovaPack : EBITDA 325 k€, flux d'exploitation 173 k€. Quelle explication principale de l'écart ?",
        promptEn:
          "NovaPack: EBITDA €325k, operating cash flow €173k. Main explanation for the gap?",
        explanationCorrectFr:
          "Hausse du BFR et autres éléments hors EBITDA (intérêts, impôts, capex) — l'EBITDA ignore le BFR.",
        explanationCorrectEn:
          "WC increase and items outside EBITDA (interest, taxes, capex) — EBITDA ignores WC.",
        difficulty: 2,
        options: [
          opt("BFR et éléments hors EBITDA", "WC and items outside EBITDA", true),
          opt("L'EBITDA inclut toujours le cash", "EBITDA always equals cash", false, "L'EBITDA n'inclut pas les variations de BFR ni le capex.", "EBITDA does not include WC changes or capex."),
          opt("Erreur de calcul du résultat net", "Net income calculation error", false, "L'écart EBITDA/cash est fréquent même avec des comptes corrects.", "EBITDA/cash gaps are common even with correct accounts."),
        ],
      }),
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "D&A passe de 45 à 90 k€, CA et charges cash inchangés. Nouvel EBIT (EBIT initial 280) ?",
        promptEn:
          "D&A rises from 45 to 90, sales and cash charges unchanged. New EBIT (initial EBIT 280)?",
        explanationCorrectFr: "EBIT baisse de 45 k€ → 235 k€ (charge D&A non cash en plus).",
        explanationCorrectEn: "EBIT falls €45k → €235k (extra non-cash D&A charge).",
        difficulty: 2,
        options: [
          opt("235 k€", "€235k", true),
          opt("325 k€", "€325k", false, "325 serait l'EBITDA, pas l'EBIT après hausse de D&A.", "325 would be EBITDA, not EBIT after higher D&A."),
          opt("280 k€", "€280k", false, "L'EBIT baisse quand la D&A augmente.", "EBIT falls when D&A rises."),
        ],
      }),
    ],
  }),

  buildCfLesson({
    slug: "ebit-basics",
    titleFr: "Bases de l'EBIT",
    titleEn: "EBIT Basics",
    descriptionFr:
      "Situer l'EBIT entre EBITDA et résultat net sur la cascade NovaPack.",
    descriptionEn:
      "Place EBIT between EBITDA and net income on NovaPack's cascade.",
    moduleSlug: "cf-foundations",
    sortOrder: 7,
    estimatedMinutes: 7,
    difficulty: "BEGINNER",
    skillSlug: "cf-foundations",
    learningObjective: "APPLY",
    objectiveFr:
      "Passer de l'EBITDA à l'EBIT en soustrayant la D&A et interpréter la marge EBIT.",
    objectiveEn:
      "Move from EBITDA to EBIT by subtracting D&A and interpret EBIT margin.",
    explanationFr:
      "NovaPack : EBITDA 325 k€, D&A 45 k€ → EBIT 280 k€. Marge EBIT = 280 / 2 000 = 14 %. L'EBIT intègre l'usure des actifs (amortissement de la presse) — plus réaliste que l'EBITDA pour juger la profitabilité opérationnelle sur le long terme. Ensuite : intérêts 30 k€ → EBT 250 k€, impôts 62 k€ → résultat net 188 k€. L'EBIT isole la performance opérationnelle avant structure financière et fiscalité.",
    explanationEn:
      "NovaPack: EBITDA €325k, D&A €45k → EBIT €280k. EBIT margin = 280 / 2,000 = 14%. EBIT includes asset wear (press depreciation) — more realistic than EBITDA for long-run operating profitability. Then: interest €30k → EBT €250k, taxes €62k → net income €188k. EBIT isolates operating performance before capital structure and taxes.",
    exampleFr:
      "Marge EBIT 14 % vs EBITDA 16,25 % — la différence vient de la D&A sur actifs lourds.",
    exampleEn:
      "EBIT margin 14% vs EBITDA 16.25% — the gap comes from D&A on heavy assets.",
    practicalFr:
      "EBITDA 325, D&A 45, CA 2 000. Calculez EBIT et marge EBIT.",
    practicalEn:
      "EBITDA 325, D&A 45, sales 2,000. Compute EBIT and EBIT margin.",
    mistakeFr:
      "Comparer l'EBIT de NovaPack (usine lourde) à une SaaS sans retraiter la D&A structurelle.",
    mistakeEn:
      "Comparing NovaPack EBIT (heavy plant) to a SaaS firm without adjusting for structural D&A.",
    takeawayFr: "EBIT = performance opérationnelle après D&A, avant intérêts et impôts.",
    takeawayEn: "EBIT = operating performance after D&A, before interest and taxes.",
    decisionFr:
      "Utiliser la marge EBIT pour juger l'exploitation, pas le résultat net (influencé par la dette).",
    decisionEn:
      "Use EBIT margin to judge operations, not net income (shaped by debt).",
    flashcardFrontFr: "EBIT",
    flashcardFrontEn: "EBIT",
    flashcardBackFr: "EBITDA − D&A — résultat opérationnel.",
    flashcardBackEn: "EBITDA − D&A — operating profit.",
    exercisePromptFr:
      "NovaPack : EBITDA 325, D&A 45, CA 2 000. EBIT et marge EBIT ?",
    exercisePromptEn:
      "NovaPack: EBITDA 325, D&A 45, sales 2,000. EBIT and EBIT margin?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "NovaPack : EBITDA 325 k€, D&A 45 k€. EBIT ?",
      promptEn: "NovaPack: EBITDA €325k, D&A €45k. EBIT?",
      explanationCorrectFr: "325 − 45 = 280 k€.",
      explanationCorrectEn: "325 − 45 = €280k.",
      difficulty: 2,
      options: [
        opt("280 k€", "€280k", true),
        opt("370 k€", "€370k", false, "On soustrait la D&A, on ne l'additionne pas.", "Subtract D&A; do not add it."),
        opt("325 k€", "€325k", false, "325 k€ est l'EBITDA avant D&A.", "€325k is EBITDA before D&A."),
      ],
    }),
  }),

  buildCfLesson({
    slug: "net-income",
    titleFr: "Résultat net",
    titleEn: "Net Income",
    descriptionFr:
      "Calculer le résultat net et le BPA sur les chiffres NovaPack.",
    descriptionEn:
      "Compute net income and EPS on NovaPack's numbers.",
    moduleSlug: "cf-foundations",
    sortOrder: 8,
    estimatedMinutes: 7,
    difficulty: "BEGINNER",
    skillSlug: "cf-foundations",
    learningObjective: "APPLY",
    objectiveFr:
      "Calculer le résultat net et le BPA, et expliquer pourquoi le net diffère du cash.",
    objectiveEn:
      "Compute net income and EPS, and explain why net differs from cash.",
    explanationFr:
      "NovaPack : EBIT 280 k€, intérêts 30 k€ → EBT 250 k€, impôts 62 k€ (taux effectif ~25 %) → résultat net 188 k€. Actions en circulation : 1 M → BPA = 0,188 €. Le résultat net est le profit comptable pour les actionnaires après financement (intérêts) et fiscalité. Pourtant le flux d'exploitation n'est que 173 k€ — amortissements non cash et BFR expliquent l'écart. Le BPA aide les investisseurs à comparer la profitabilité par action.",
    explanationEn:
      "NovaPack: EBIT €280k, interest €30k → EBT €250k, taxes €62k (~25% effective rate) → net income €188k. Shares outstanding: 1M → EPS = €0.188. Net income is accounting profit for shareholders after financing (interest) and taxes. Yet operating cash flow is only €173k — non-cash depreciation and WC explain the gap. EPS helps investors compare per-share profitability.",
    exampleFr:
      "Résultat net 188 k€, BPA 0,188 €, mais flux exploitation 173 k€ — deux lectures complémentaires.",
    exampleEn:
      "Net income €188k, EPS €0.188, but operating cash €173k — two complementary views.",
    practicalFr:
      "EBT 250 k€, impôts 62 k€. Résultat net ? BPA avec 1 M d'actions ?",
    practicalEn:
      "EBT €250k, taxes €62k. Net income? EPS with 1M shares?",
    mistakeFr:
      "Distribuer un dividende égal au résultat net sans vérifier le cash disponible.",
    mistakeEn:
      "Paying a dividend equal to net income without checking available cash.",
    takeawayFr: "Résultat net = profit comptable actionnaires ; BPA = net ÷ actions.",
    takeawayEn: "Net income = shareholders' accounting profit; EPS = net ÷ shares.",
    decisionFr:
      "Fixer les dividendes en fonction du cash, pas seulement du résultat net.",
    decisionEn:
      "Set dividends based on cash, not net income alone.",
    flashcardFrontFr: "Résultat net / BPA",
    flashcardFrontEn: "Net income / EPS",
    flashcardBackFr: "Net ÷ nombre d'actions = BPA.",
    flashcardBackEn: "Net ÷ shares = EPS.",
    exercisePromptFr:
      "NovaPack : EBT 250, impôts 62, 1 M actions. Résultat net et BPA ?",
    exercisePromptEn:
      "NovaPack: EBT 250, taxes 62, 1M shares. Net income and EPS?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "NovaPack : résultat net 188 k€, 1 M d'actions. BPA ?",
      promptEn:
        "NovaPack: net income €188k, 1M shares. EPS?",
      explanationCorrectFr: "188 / 1 000 = 0,188 € par action.",
      explanationCorrectEn: "188 / 1,000 = €0.188 per share.",
      difficulty: 2,
      options: [
        opt("0,188 €", "€0.188", true),
        opt("1,88 €", "€1.88", false, "Divisez le net par le nombre d'actions (1 M).", "Divide net by share count (1M)."),
        opt("0,0188 €", "€0.0188", false, "Vérifiez la division : 188 k / 1 M.", "Check the division: 188k / 1M."),
      ],
    }),
  }),

  buildCfLesson({
    slug: "operating-cash-flow",
    titleFr: "Flux de trésorerie d'exploitation",
    titleEn: "Operating Cash Flow",
    descriptionFr:
      "Reconcilier le résultat net avec le flux d'exploitation sur le cas NovaPack.",
    descriptionEn:
      "Reconcile net income to operating cash flow on the NovaPack case.",
    moduleSlug: "cf-foundations",
    sortOrder: 9,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: "cf-foundations",
    learningObjective: "APPLY",
    objectiveFr:
      "Calculer un flux d'exploitation simplifié : résultat net + éléments non cash − variation BFR.",
    objectiveEn:
      "Compute simplified operating cash flow: net income + non-cash items − WC change.",
    explanationFr:
      "Méthode indirecte NovaPack : résultat net 188 k€ + amortissements 45 k€ (non cash) − hausse BFR 60 k€ = flux d'exploitation 173 k€. Le net est le point de départ ; on rajoute ce qui n'a pas consommé de cash (D&A) et on retire ce qui l'a immobilisé (BFR ↑). Résultat : 173 k€ < 188 k€ de net — NovaPack convertit moins de profit en cash à cause du cycle client/fournisseur.",
    explanationEn:
      "NovaPack indirect method: net income €188k + depreciation €45k (non-cash) − WC increase €60k = operating cash €173k. Start from net; add what did not use cash (D&A) and subtract what tied cash up (WC ↑). Result: €173k < €188k net — NovaPack converts less profit to cash because of the customer/supplier cycle.",
    exampleFr:
      "Net 188 + D&A 45 − BFR 60 = 173 k€. Sans la hausse de BFR, le flux aurait été 233 k€.",
    exampleEn:
      "Net 188 + D&A 45 − WC 60 = €173k. Without the WC increase, cash flow would have been €233k.",
    practicalFr:
      "Net 188, D&A 45, BFR +60. Flux d'exploitation simplifié ?",
    practicalEn:
      "Net 188, D&A 45, WC +60. Simplified operating cash flow?",
    mistakeFr:
      "Ignorer la variation de BFR dans le passage net → flux d'exploitation.",
    mistakeEn:
      "Ignoring WC change in the net → operating cash bridge.",
    takeawayFr: "Flux exploitation ≈ net + non cash − consommation BFR.",
    takeawayEn: "Operating cash ≈ net + non-cash − WC consumption.",
    decisionFr:
      "Si le flux d'exploitation < 50 % du net deux années de suite, auditer créances et stocks.",
    decisionEn:
      "If operating cash < 50% of net two years running, audit receivables and inventory.",
    flashcardFrontFr: "Flux d'exploitation",
    flashcardFrontEn: "Operating cash flow",
    flashcardBackFr: "Cash généré par l'activité — pas le résultat net.",
    flashcardBackEn: "Cash from core activity — not net income.",
    exercisePromptFr:
      "NovaPack : net 188, D&A 45, BFR +60. Pont simplifié vers flux d'exploitation ?",
    exercisePromptEn:
      "NovaPack: net 188, D&A 45, WC +60. Simplified bridge to operating cash?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "NovaPack : résultat net 188 k€, D&A 45 k€, BFR +60 k€. Flux d'exploitation simplifié ?",
      promptEn:
        "NovaPack: net income €188k, D&A €45k, WC +€60k. Simplified operating cash flow?",
      explanationCorrectFr: "188 + 45 − 60 = 173 k€ (pont pédagogique simplifié).",
      explanationCorrectEn: "188 + 45 − 60 = €173k (simplified pedagogical bridge).",
      difficulty: 2,
      options: [
        opt("173 k€", "€173k", true),
        opt("293 k€", "€293k", false, "Il faut soustraire la hausse du BFR, pas l'ajouter.", "Subtract WC increase; do not add it."),
        opt("83 k€", "€83k", false, "83 oublie d'ajouter la D&A non cash.", "83 forgets to add non-cash D&A."),
      ],
    }),
  }),

  buildCfLesson({
    slug: "financial-ratios-basics",
    titleFr: "Bases des ratios financiers",
    titleEn: "Financial Ratios Basics",
    descriptionFr:
      "Calculer liquidité, levier et rentabilité sur le bilan et le compte de résultat NovaPack.",
    descriptionEn:
      "Compute liquidity, leverage, and profitability ratios on NovaPack's statements.",
    moduleSlug: "cf-foundations",
    sortOrder: 10,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "cf-foundations",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Calculer ratio de liquidité courante, dette/capitaux propres et marge EBIT ; interpréter les signaux.",
    objectiveEn:
      "Compute current ratio, debt/equity, and EBIT margin; interpret the signals.",
    explanationFr:
      "NovaPack fin 2025 : actif circulant 700 k€ (stocks 120, créances 200, cash 380), passif circulant 500 k€ (dettes fournisseurs 80 + portion court terme dette 420) → liquidité courante = 700 / 500 = 1,4. Dette financière totale 2 200 k€, capitaux propres 1 800 k€ → levier = 2 200 / 1 800 ≈ 1,22. Marge EBIT = 280 / 2 000 = 14 %. Un ratio < 1 de liquidité alerterait ; levier > 1 signale dépendance à la dette ; marge EBIT permet de comparer dans le temps.",
    explanationEn:
      "NovaPack end 2025: current assets €700k (inventory 120, receivables 200, cash 380), current liabilities €500k (payables 80 + €420 short-term debt portion) → current ratio = 700 / 500 = 1.4. Total financial debt €2,200k, equity €1,800k → leverage = 2,200 / 1,800 ≈ 1.22. EBIT margin = 280 / 2,000 = 14%. A liquidity ratio < 1 would warn; leverage > 1 signals debt reliance; EBIT margin enables time comparison.",
    exampleFr:
      "Liquidité 1,4 (correcte), levier 1,22 (élevé), marge EBIT 14 % — lecture combinée avant nouvel emprunt.",
    exampleEn:
      "Liquidity 1.4 (ok), leverage 1.22 (high), EBIT margin 14% — combined read before new debt.",
    practicalFr:
      "Actif circulant 700, passif circulant 500. Ratio de liquidité ? Interprétation si < 1 ?",
    practicalEn:
      "Current assets 700, current liabilities 500. Current ratio? Interpretation if < 1?",
    mistakeFr:
      "Analyser un seul ratio isolément — la liquidité peut être bonne avec un levier dangereux.",
    mistakeEn:
      "Analyzing one ratio in isolation — liquidity can look fine with dangerous leverage.",
    takeawayFr:
      "Ratios = questions ciblées (payer les dettes CT ? trop endetté ? rentable ?).",
    takeawayEn:
      "Ratios = targeted questions (pay ST debt? too levered? profitable?).",
    decisionFr:
      "Avant d'augmenter la dette, vérifier liquidité courante > 1 et capacité d'intérêts (EBIT / intérêts).",
    decisionEn:
      "Before adding debt, check current ratio > 1 and interest coverage (EBIT / interest).",
    flashcardFrontFr: "Ratio de liquidité courante",
    flashcardFrontEn: "Current ratio",
    flashcardBackFr: "Actif circulant ÷ passif circulant.",
    flashcardBackEn: "Current assets ÷ current liabilities.",
    exercisePromptFr:
      "NovaPack : actif circulant 700, passif circulant 500, dette 2 200, CP 1 800. Calculez liquidité et levier.",
    exercisePromptEn:
      "NovaPack: current assets 700, current liabilities 500, debt 2,200, equity 1,800. Compute liquidity and leverage.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "NovaPack : actif circulant 700 k€, passif circulant 500 k€. Ratio de liquidité courante ?",
      promptEn:
        "NovaPack: current assets €700k, current liabilities €500k. Current ratio?",
      explanationCorrectFr: "700 / 500 = 1,4.",
      explanationCorrectEn: "700 / 500 = 1.4.",
      difficulty: 2,
      options: [
        opt("1,4", "1.4", true),
        opt("0,71", "0.71", false, "0,71 inverse numérateur et dénominateur (500/700).", "0.71 inverts numerator and denominator (500/700)."),
        opt("1,2", "1.2", false, "1,2 ne correspond pas à 700/500.", "1.2 does not match 700/500."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "NovaPack : dette financière 2 200 k€, capitaux propres 1 800 k€. Ratio dette/CP ?",
        promptEn:
          "NovaPack: financial debt €2,200k, equity €1,800k. Debt/equity ratio?",
        explanationCorrectFr: "2 200 / 1 800 ≈ 1,22.",
        explanationCorrectEn: "2,200 / 1,800 ≈ 1.22.",
        difficulty: 2,
        options: [
          opt("≈ 1,22", "≈ 1.22", true),
          opt("≈ 0,82", "≈ 0.82", false, "0,82 = CP/dette — l'inverse du levier demandé.", "0.82 = equity/debt — inverse of requested leverage."),
          opt("≈ 2,22", "≈ 2.22", false, "2,22 additionne dette et CP au lieu de les diviser.", "2.22 adds debt and equity instead of dividing."),
        ],
      }),
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "NovaPack : EBIT 280 k€, intérêts 30 k€. Couverture des intérêts (EBIT / intérêts) ?",
        promptEn:
          "NovaPack: EBIT €280k, interest €30k. Interest coverage (EBIT / interest)?",
        explanationCorrectFr: "280 / 30 ≈ 9,3× — confortable pour servir la dette.",
        explanationCorrectEn: "280 / 30 ≈ 9.3× — comfortable to service debt.",
        difficulty: 2,
        options: [
          opt("≈ 9,3×", "≈ 9.3×", true),
          opt("≈ 0,11×", "≈ 0.11×", false, "0,11 inverse la division (30/280).", "0.11 inverts the division (30/280)."),
          opt("≈ 3,0×", "≈ 3.0×", false, "3,0 ne correspond pas à 280/30.", "3.0 does not match 280/30."),
        ],
      }),
    ],
  }),

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
      "Distinguer capex (sortie de cash) et amortissement (charge non cash) sur un investissement presse.",
    objectiveEn:
      "Separate capex (cash out) and depreciation (non-cash charge) on a press investment.",
    explanationFr:
      "NovaPack achète une presse 400 k€ (capex) — cash sort immédiatement en flux d'investissement. Comptablement, l'actif est amorti sur 10 ans → charge D&A ≈ 40 k€/an dans le compte de résultat sans sortie de cash chaque année. Année d'achat : EBIT réduit de 40 k€ (si mise en service mi-année, prorata) mais cash investissement −400 k€. C'est pourquoi le résultat net peut être positif pendant que la trésorerie baisse fortement après un gros capex.",
    explanationEn:
      "NovaPack buys a €400k press (capex) — cash leaves immediately in investing cash flow. Accounting: asset depreciated over 10 years → D&A charge ≈ €40k/year in the income statement with no annual cash out. Purchase year: EBIT down €40k (prorated if mid-year) but investing cash −€400k. That is why net income can stay positive while cash drops sharply after major capex.",
    exampleFr:
      "Capex 400 k€ jour 1, D&A 40 k€/an pendant 10 ans — timing cash ≠ timing comptable.",
    exampleEn:
      "Capex €400k day 1, D&A €40k/year for 10 years — cash timing ≠ accounting timing.",
    practicalFr:
      "Presse 400 k€, durée 10 ans, amortissement linéaire. D&A annuelle ? Cash année 1 vs année 2 ?",
    practicalEn:
      "Press €400k, 10-year life, straight-line. Annual D&A? Year 1 vs year 2 cash?",
    mistakeFr:
      "Oublier le capex futur en ne regardant que l'EBITDA — maintenance et renouvellement d'actifs.",
    mistakeEn:
      "Ignoring future capex by looking only at EBITDA — maintenance and asset renewal.",
    takeawayFr: "Capex = cash maintenant ; amortissement = charge étalée sans cash.",
    takeawayEn: "Capex = cash now; depreciation = spread charge without cash.",
    decisionFr:
      "Budgéter le capex de maintenance séparément de l'EBITDA pour éviter les surprises de cash.",
    decisionEn:
      "Budget maintenance capex separately from EBITDA to avoid cash surprises.",
    flashcardFrontFr: "Capex vs amortissement",
    flashcardFrontEn: "Capex vs depreciation",
    flashcardBackFr: "Capex = sortie cash ; D&A = charge non cash.",
    flashcardBackEn: "Capex = cash out; D&A = non-cash charge.",
    exercisePromptFr:
      "NovaPack : presse 400 k€, 10 ans linéaire. D&A annuelle ? Impact cash année d'achat ?",
    exercisePromptEn:
      "NovaPack: press €400k, 10-year straight line. Annual D&A? Cash impact in purchase year?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "NovaPack achète une presse 400 k€, amortissement linéaire 10 ans. D&A annuelle ?",
      promptEn:
        "NovaPack buys a €400k press, 10-year straight-line depreciation. Annual D&A?",
      explanationCorrectFr: "400 / 10 = 40 k€ par an.",
      explanationCorrectEn: "400 / 10 = €40k per year.",
      difficulty: 2,
      options: [
        opt("40 k€", "€40k", true),
        opt("400 k€", "€400k", false, "400 k€ est le capex total, étalé sur 10 ans.", "€400k is total capex, spread over 10 years."),
        opt("4 k€", "€4k", false, "4 k€ sous-estime fortement (400/100).", "€4k severely understates (400/100)."),
      ],
    }),
  }),
];

/** 17 lessons — module cf-foundations (sortOrder 0–16) */
export const CF_FOUNDATIONS_LESSONS: CompactLesson[] = [
  ...CF_FOUNDATIONS_CORE_LESSONS,
  ...CF_WORKING_CAPITAL_LESSONS,
];
