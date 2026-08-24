import { buildPfLesson, opt, q } from "./pf-factory";
import type { CompactLesson } from "./compact";

export const PF_INVESTING_LESSONS: CompactLesson[] = [
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
      "Expliquer pourquoi épargner et investir servent des objectifs différents, et dans quel ordre.",
    objectiveEn:
      "Explain why saving and investing serve different goals, and in what order.",
    explanationFr:
      "L'épargne protège contre les imprévus et finance des objectifs à court terme dans des comptes liquides. L'investissement vise la croissance du capital sur le long terme, avec des fluctuations possibles. Un fonds d'urgence (souvent 3 à 6 mois de dépenses essentielles) précède généralement les placements risqués. Sans épargne de sécurité, une chute de marché ou une perte d'emploi peut forcer des ventes au mauvais moment.",
    explanationEn:
      "Savings protect against shocks and fund short-term goals in liquid accounts. Investing targets long-term capital growth, with possible fluctuations. An emergency fund (often 3–6 months of essential expenses) typically precedes risky placements. Without a safety buffer, a market drop or job loss can force selling at the worst time.",
    exampleFr:
      "Dépenses essentielles 1 500 / mois → fonds d'urgence cible 4 500 à 9 000. Épargne liquide 5 000 : vous couvrez un choc sans vendre des actions en baisse.",
    exampleEn:
      "Essential expenses 1,500 / month → emergency target 4,500 to 9,000. Liquid savings 5,000: you cover a shock without selling stocks in a downturn.",
    practicalFr:
      "Calculez votre cible de fonds d'urgence (3 mois d'essentiels). Comparez à votre épargne liquide actuelle.",
    practicalEn:
      "Compute your emergency target (3 months of essentials). Compare to your current liquid savings.",
    mistakeFr:
      "Investir tout le capital disponible sans réserve liquide « pour ne pas rater le marché ».",
    mistakeEn:
      "Investing all available cash with no liquid reserve “so you don’t miss the market.”",
    takeawayFr:
      "Sécurité liquide d'abord, croissance ensuite — l'ordre compte.",
    takeawayEn:
      "Liquid safety first, growth second — order matters.",
    decisionFr:
      "Savoir si votre réserve liquide couvre au moins un objectif minimal avant d'augmenter le risque.",
    decisionEn:
      "Know whether your liquid reserve covers at least a minimal target before increasing risk.",
    flashcardFrontFr: "Fonds d'urgence",
    flashcardFrontEn: "Emergency fund",
    flashcardBackFr: "Réserve liquide pour chocs — souvent 3–6 mois d'essentiels.",
    flashcardBackEn: "Liquid reserve for shocks — often 3–6 months of essentials.",
    exercisePromptFr:
      "Essentiels 2 200 / mois, épargne liquide 4 000, objectif retraite dans 25 ans. Quelle priorité : compléter le fonds d'urgence ou investir le surplus ? Justifiez avec des chiffres.",
    exercisePromptEn:
      "Essentials 2,200 / month, liquid savings 4,000, retirement goal in 25 years. Priority: complete emergency fund or invest surplus? Justify with numbers.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Essentiels 1 800 / mois. Cible fonds d'urgence 3 mois ?",
      promptEn: "Essentials 1,800 / month. 3-month emergency target?",
      explanationCorrectFr: "1 800 × 3 = 5 400.",
      explanationCorrectEn: "1,800 × 3 = 5,400.",
      difficulty: 1,
      options: [
        opt("1 800", "1,800", false, "Un mois seul, pas trois.", "One month, not three."),
        opt("5 400", "5,400", true),
        opt("10 800", "10,800", false, "10 800 correspond plutôt à 6 mois.", "10,800 is closer to 6 months."),
      ],
    }),
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
      "Nommer les grandes classes d'actifs et leur rôle dans un portefeuille.",
    objectiveEn:
      "Name major asset classes and their role in a portfolio.",
    explanationFr:
      "Investir consiste à acheter des actifs dont la valeur peut évoluer : actions (parts d'entreprises), obligations (prêts à un émetteur), immobilier, et parfois matières premières ou liquidités. Chaque classe a un profil risque/rendement et une liquidité différente. Avant de choisir un produit, comprendre ces catégories évite les confusions (ex. « investir » dans une assurance-vie sans savoir ce qu'elle contient).",
    explanationEn:
      "Investing means buying assets whose value can change: stocks (company shares), bonds (loans to an issuer), real estate, and sometimes commodities or cash. Each class has a different risk/return profile and liquidity. Before choosing a product, understanding these categories avoids confusion (e.g. “investing” in an insurance wrapper without knowing what it holds).",
    exampleFr:
      "Portefeuille illustratif 10 000 : 5 000 actions (croissance), 3 000 obligations (stabilité relative), 2 000 liquidités (flexibilité). Trois classes, trois fonctions.",
    exampleEn:
      "Illustrative portfolio 10,000: 5,000 stocks (growth), 3,000 bonds (relative stability), 2,000 cash (flexibility). Three classes, three roles.",
    practicalFr:
      "Listez trois classes d'actifs que vous pourriez utiliser pour un objectif à 15 ans, et une pour un objectif à 2 ans.",
    practicalEn:
      "List three asset classes you might use for a 15-year goal, and one for a 2-year goal.",
    mistakeFr:
      "Traiter toute dépense « financière » comme un investissement (ex. assurance sans lien avec un actif identifiable).",
    mistakeEn:
      "Treating every “financial” expense as an investment (e.g. insurance with no identifiable asset).",
    takeawayFr:
      "Les classes d'actifs sont des briques — le portefeuille est l'assemblage.",
    takeawayEn:
      "Asset classes are building blocks — the portfolio is the assembly.",
    decisionFr:
      "Identifier la classe d'actif avant de comparer des produits ou des frais.",
    decisionEn:
      "Identify the asset class before comparing products or fees.",
    flashcardFrontFr: "Classe d'actifs",
    flashcardFrontEn: "Asset class",
    flashcardBackFr: "Catégorie d'investissements au profil risque/rendement similaire.",
    flashcardBackEn: "Category of investments with a similar risk/return profile.",
    exercisePromptFr:
      "Vous héritez de 8 000. Objectif : achat maison dans 4 ans. Nommez deux classes d'actifs potentielles et une à éviter — avec justification.",
    exercisePromptEn:
      "You inherit 8,000. Goal: home purchase in 4 years. Name two potential asset classes and one to avoid — with justification.",
    question: q({
      type: "MULTIPLE_CHOICE",
      promptFr: "Quels sont des exemples de classes d'actifs ? (Plusieurs réponses)",
      promptEn: "Which are examples of asset classes? (Multiple answers)",
      explanationCorrectFr: "Actions, obligations et immobilier sont des classes distinctes.",
      explanationCorrectEn: "Stocks, bonds, and real estate are distinct classes.",
      difficulty: 2,
      options: [
        opt("Actions", "Stocks", true),
        opt("Obligations", "Bonds", true),
        opt("Abonnement streaming", "Streaming subscription", false, "Un abonnement n'est pas une classe d'actif.", "A subscription is not an asset class."),
        opt("Immobilier", "Real estate", true),
      ],
    }),
  }),

  buildPfLesson({
    slug: "risk-and-return",
    titleFr: "Risque et rendement",
    titleEn: "Risk and Return",
    descriptionFr: "Comprenez la relation entre risque et rendement potentiel.",
    descriptionEn: "Understand the relationship between risk and potential return.",
    moduleSlug: "saving-investing",
    sortOrder: 2,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "pf-investing",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Relier un niveau de risque à une fourchette de rendement plausible — sans promesse de performance.",
    objectiveEn:
      "Link a risk level to a plausible return range — without performance promises.",
    explanationFr:
      "En finance, un rendement potentiel plus élevé s'accompagne généralement d'un risque plus élevé (volatilité, perte en capital). Les liquidités et obligations d'état offrent souvent plus de stabilité ; les actions offrent une croissance potentielle plus forte mais des baisses possibles. Un portefeuille de base combine souvent plusieurs classes selon l'horizon. Votre tolérance au risque dépend de l'horizon, des obligations financières et de votre capacité à tenir une baisse sans vendre.",
    explanationEn:
      "In finance, higher potential return generally comes with higher risk (volatility, capital loss). Cash and government bonds often offer more stability; stocks offer stronger potential growth but possible declines. A basic portfolio often combines several classes by horizon. Risk tolerance depends on horizon, financial obligations, and your ability to hold through a drop without selling.",
    exampleFr:
      "Illustration : compte liquide ~1 % / an, obligations ~3–5 %, actions historiquement plus volatiles avec des années à +20 % et d'autres à −15 %. Aucune année est garantie.",
    exampleEn:
      "Illustration: cash ~1%/year, bonds ~3–5%, stocks historically more volatile with years at +20% and others at −15%. No year is guaranteed.",
    practicalFr:
      "Sur une échelle 1–5, notez votre tolérance. Si le portefeuille baisse 20 %, vendriez-vous ou tiendriez-vous 12 mois ?",
    practicalEn:
      "On a 1–5 scale, rate your tolerance. If the portfolio fell 20%, would you sell or hold 12 months?",
    mistakeFr:
      "Chercher le rendement le plus élevé sans évaluer la baisse maximale acceptable.",
    mistakeEn:
      "Seeking the highest return without assessing the maximum acceptable decline.",
    takeawayFr:
      "Rendement et risque sont liés — ignorez l'un, vous sous-estimez l'autre.",
    takeawayEn:
      "Return and risk are linked — ignore one, you underestimate the other.",
    decisionFr:
      "Choisir un niveau de risque compatible avec l'horizon et la capacité à ne pas vendre en panique.",
    decisionEn:
      "Choose a risk level compatible with horizon and the ability not to panic-sell.",
    flashcardFrontFr: "Tolérance au risque",
    flashcardFrontEn: "Risk tolerance",
    flashcardBackFr: "Capacité et volonté d'accepter des fluctuations de valeur.",
    flashcardBackEn: "Ability and willingness to accept value fluctuations.",
    exercisePromptFr:
      "Horizon 30 ans vs horizon 2 ans. Pour chaque cas, classez trois placements du plus stable au plus risqué et expliquez en une phrase.",
    exercisePromptEn:
      "30-year vs 2-year horizon. For each, rank three placements from most stable to riskiest and explain in one sentence.",
    question: q({
      type: "TRUE_FALSE",
      promptFr: "Un rendement potentiel plus élevé est généralement associé à un risque plus élevé.",
      promptEn: "Higher potential return is generally associated with higher risk.",
      explanationCorrectFr: "Vrai. C'est un principe fondamental — sans garantie de résultat.",
      explanationCorrectEn: "True. It is a fundamental principle — without outcome guarantees.",
      difficulty: 1,
      options: [
        opt("Vrai", "True", true),
        opt("Faux", "False", false, "Les rendements élevés sans risque n'existent pas en pratique.", "High returns without risk do not exist in practice."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Objectif dans 6 mois (vacances). Quel profil est le plus cohérent ?",
        promptEn: "Goal in 6 months (vacation). Which profile is most coherent?",
        explanationCorrectFr: "Liquidités ou placement très peu volatil — horizon court.",
        explanationCorrectEn: "Cash or very low-volatility placement — short horizon.",
        difficulty: 2,
        options: [
          opt("100 % actions volatiles", "100% volatile stocks", false, "Six mois : une baisse peut effacer le budget.", "Six months: a drop can wipe the budget."),
          opt("Liquidités / très peu volatil", "Cash / very low volatility", true),
          opt("Crypto très volatile", "Highly volatile crypto", false, "Volatilité extrême incompatible avec 6 mois.", "Extreme volatility incompatible with 6 months."),
        ],
      }),
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Portefeuille 10 000 en actions baisse à 8 000 (−20 %). Vous n'avez pas besoin de l'argent pour 15 ans. Réaction la plus alignée avec un long horizon ?",
        promptEn: "10,000 stock portfolio falls to 8,000 (−20%). You don't need the money for 15 years. Most aligned reaction for a long horizon?",
        explanationCorrectFr: "Tenir ou réinvestir si le plan est intact — vente panique souvent coûteuse.",
        explanationCorrectEn: "Hold or continue plan if intact — panic selling is often costly.",
        difficulty: 2,
        options: [
          opt("Vendre tout immédiatement", "Sell everything immediately", false, "Vendre en baisse cristallise la perte.", "Selling in a downturn locks in the loss."),
          opt("Tenir selon le plan long terme", "Hold per long-term plan", true),
          opt("Doubler la mise sans plan", "Double up with no plan", false, "Augmenter sans règle peut amplifier le risque.", "Increasing without rules can amplify risk."),
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
      "Expliquer ce qu'est une action, comment le prix évolue, et les sources de rendement.",
    objectiveEn:
      "Explain what a stock is, how price moves, and sources of return.",
    explanationFr:
      "Une action représente une part de propriété dans une entreprise. Les actionnaires peuvent recevoir des dividendes (partage des profits) et bénéficier d'une hausse du prix (plus-value). Le marché permet l'achat et la vente entre investisseurs — le prix reflète l'offre et la demande, les résultats de l'entreprise et le sentiment du marché. Aucun rendement n'est garanti ; une action peut perdre une grande partie de sa valeur.",
    explanationEn:
      "A stock represents an ownership share in a company. Shareholders may receive dividends (profit sharing) and benefit from price rises (capital gains). The market enables buying and selling between investors — price reflects supply and demand, company results, and market sentiment. No return is guaranteed; a stock can lose much of its value.",
    exampleFr:
      "Vous achetez 10 actions à 50 → investissement 500. Dividende 2 / action = 20 de revenu. Prix monte à 55 → plus-value 50. Prix baisse à 40 → valeur 400.",
    exampleEn:
      "You buy 10 shares at 50 → investment 500. Dividend 2 / share = 20 income. Price rises to 55 → gain 50. Price falls to 40 → value 400.",
    practicalFr:
      "Pour une entreprise cotée que vous connaissez, trouvez : prix actuel, dividende annuel (si applicable), variation sur 1 an.",
    practicalEn:
      "For a listed company you know, find: current price, annual dividend (if any), 1-year change.",
    mistakeFr:
      "Croire qu'une action « bonne » ne peut pas baisser fortement.",
    mistakeEn:
      "Believing a “good” stock cannot fall sharply.",
    takeawayFr:
      "Actions = propriété + volatilité. Rendement = dividendes + prix, sans garantie.",
    takeawayEn:
      "Stocks = ownership + volatility. Return = dividends + price, with no guarantee.",
    decisionFr:
      "Savoir distinguer dividende et plus-value avant d'évaluer un rendement.",
    decisionEn:
      "Distinguish dividend and capital gain before evaluating a return.",
    flashcardFrontFr: "Dividende",
    flashcardFrontEn: "Dividend",
    flashcardBackFr: "Distribution de profits aux actionnaires.",
    flashcardBackEn: "Distribution of profits to shareholders.",
    exercisePromptFr:
      "10 actions à 40, dividende 1,50 / action. Calculez le rendement dividende (1,50 / 40) et la valeur si le prix passe à 35.",
    exercisePromptEn:
      "10 shares at 40, dividend 1.50 / share. Compute dividend yield (1.50 / 40) and value if price goes to 35.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Qu'est-ce qu'un dividende ?",
      promptEn: "What is a dividend?",
      explanationCorrectFr: "Une distribution de profits aux actionnaires.",
      explanationCorrectEn: "A distribution of profits to shareholders.",
      difficulty: 1,
      options: [
        opt("Distribution de profits", "Profit distribution", true),
        opt("Frais de courtage", "Brokerage fee", false, "Les frais sont un coût, pas un dividende.", "Fees are a cost, not a dividend."),
        opt("Taux d'intérêt d'un prêt", "Loan interest rate", false, "Un dividende n'est pas un intérêt de prêt.", "A dividend is not loan interest."),
      ],
    }),
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
      "Décrire une obligation : émetteur, coupon, échéance et risque de crédit.",
    objectiveEn:
      "Describe a bond: issuer, coupon, maturity, and credit risk.",
    explanationFr:
      "Une obligation est un prêt que vous faites à un émetteur (gouvernement ou entreprise). L'émetteur promet des paiements d'intérêts (coupon) et le remboursement du capital (nominal) à l'échéance. Les obligations sont généralement moins volatiles que les actions mais offrent un rendement potentiel plus limité. Le risque principal est la solvabilité de l'émetteur : un défaut peut entraîner une perte partielle ou totale.",
    explanationEn:
      "A bond is a loan you make to an issuer (government or company). The issuer promises interest payments (coupon) and principal repayment at maturity. Bonds are generally less volatile than stocks but offer more limited potential return. Main risk is issuer solvency: default can mean partial or total loss.",
    exampleFr:
      "Obligation nominal 1 000, coupon 4 % / an → 40 / an d'intérêts. Échéance 5 ans → 1 000 remboursés à la fin (si pas de défaut).",
    exampleEn:
      "Bond face value 1,000, coupon 4%/year → 40 / year interest. Maturity 5 years → 1,000 repaid at end (if no default).",
    practicalFr:
      "Comparez une obligation d'état et une obligation d'entreprise du même pays : quel émetteur offre typiquement plus de coupon, et pourquoi ?",
    practicalEn:
      "Compare a government bond and a corporate bond in the same country: which issuer typically offers more coupon, and why?",
    mistakeFr:
      "Supposer qu'une obligation ne peut jamais perdre de valeur avant l'échéance.",
    mistakeEn:
      "Assuming a bond can never lose value before maturity.",
    takeawayFr:
      "Obligation = prêt avec coupon. Le risque de crédit compte.",
    takeawayEn:
      "Bond = loan with coupon. Credit risk matters.",
    decisionFr:
      "Évaluer l'émetteur et le coupon avant d'acheter une obligation.",
    decisionEn:
      "Evaluate issuer and coupon before buying a bond.",
    flashcardFrontFr: "Coupon",
    flashcardFrontEn: "Coupon",
    flashcardBackFr: "Intérêts périodiques versés par l'émetteur.",
    flashcardBackEn: "Periodic interest paid by the issuer.",
    exercisePromptFr:
      "Nominal 2 000, coupon 3 % / an. Calculez les intérêts annuels et le total reçu sur 3 ans (sans réinvestissement).",
    exercisePromptEn:
      "Face value 2,000, coupon 3%/year. Compute annual interest and total received over 3 years (no reinvestment).",
    question: q({
      type: "TRUE_FALSE",
      promptFr: "Les obligations sont généralement moins volatiles que les actions.",
      promptEn: "Bonds are generally less volatile than stocks.",
      explanationCorrectFr: "Vrai. Fluctuations typiquement plus faibles — pas zéro risque.",
      explanationCorrectEn: "True. Typically lower fluctuations — not zero risk.",
      difficulty: 1,
      options: [
        opt("Vrai", "True", true),
        opt("Faux", "False", false, "Les obligations peuvent aussi fluctuer (taux, crédit).", "Bonds can also fluctuate (rates, credit)."),
      ],
    }),
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
      "Comparer fonds actifs, fonds indiciels et ETF sur diversification et frais.",
    objectiveEn:
      "Compare active funds, index funds, and ETFs on diversification and fees.",
    explanationFr:
      "Un fonds regroupe l'argent de nombreux investisseurs pour acheter un panier d'actifs géré par une société. Un fonds indiciel réplique un indice (ex. large marché) avec des frais souvent faibles. Un ETF est coté en bourse comme une action — prix en temps réel, achat/vente en journée. Les fonds actifs visent à battre le marché mais leurs frais plus élevés réduisent souvent l'avantage net. Vérifiez toujours les frais et ce que le fonds contient réellement.",
    explanationEn:
      "A fund pools many investors' money to buy a basket of assets managed by a company. An index fund tracks an index (e.g. broad market) with often low fees. An ETF trades on an exchange like a stock — real-time price, intraday buy/sell. Active funds aim to beat the market but higher fees often reduce net advantage. Always check fees and what the fund actually holds.",
    exampleFr:
      "ETF indiciel : frais 0,15 % / an sur 5 000 → ~7,50 / an de frais. Fonds actif : 1,2 % / an → 60 / an. Sur 20 ans, l'écart de frais compte.",
    exampleEn:
      "Index ETF: fees 0.15%/year on 5,000 → ~7.50 / year. Active fund: 1.2%/year → 60 / year. Over 20 years, the fee gap matters.",
    practicalFr:
      "Pour un fonds ou ETF que vous consultez, notez : frais annuels (%), indice suivi ou stratégie, et nombre d'actifs.",
    practicalEn:
      "For a fund or ETF you look up, note: annual fee (%), index or strategy, and number of holdings.",
    mistakeFr:
      "Choisir un fonds uniquement par son nom sans lire les frais et le contenu.",
    mistakeEn:
      "Choosing a fund by name only without reading fees and holdings.",
    takeawayFr:
      "Fonds et ETF = paniers. Frais et indice définissent le coût réel.",
    takeawayEn:
      "Funds and ETFs = baskets. Fees and index define real cost.",
    decisionFr:
      "Comparer frais et diversification avant de choisir entre fonds, ETF ou actions directes.",
    decisionEn:
      "Compare fees and diversification before choosing fund, ETF, or direct stocks.",
    flashcardFrontFr: "ETF",
    flashcardFrontEn: "ETF",
    flashcardBackFr: "Fonds coté en bourse, acheté/vendu comme une action.",
    flashcardBackEn: "Exchange-traded fund, bought/sold like a stock.",
    exercisePromptFr:
      "Deux fonds sur le même indice : frais 0,10 % vs 0,90 %. Sur 10 000 investis, calculez la différence de frais annuels.",
    exercisePromptEn:
      "Two funds on the same index: fees 0.10% vs 0.90%. On 10,000 invested, compute the annual fee difference.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Quelle caractéristique distingue typiquement un ETF d'un fonds classique non coté ?",
      promptEn: "Which feature typically distinguishes an ETF from a classic non-listed fund?",
      explanationCorrectFr: "Cotation en bourse — achat/vente en journée au prix du marché.",
      explanationCorrectEn: "Exchange listing — intraday buy/sell at market price.",
      difficulty: 2,
      options: [
        opt("Cotation en bourse intraday", "Exchange listing intraday", true),
        opt("Garantie de rendement fixe", "Fixed return guarantee", false, "Aucun placement standard garantit un rendement.", "No standard placement guarantees return."),
        opt("Absence totale de frais", "Totally zero fees", false, "Les ETF ont des frais, souvent faibles.", "ETFs have fees, often low."),
      ],
    }),
  }),

  buildPfLesson({
    slug: "diversification-basics",
    titleFr: "Bases de la diversification",
    titleEn: "Diversification Basics",
    descriptionFr: "Apprenez à répartir vos investissements pour réduire le risque.",
    descriptionEn: "Learn to spread investments to reduce risk.",
    moduleSlug: "saving-investing",
    sortOrder: 6,
    estimatedMinutes: 7,
    difficulty: "BEGINNER",
    skillSlug: "pf-investing",
    learningObjective: "APPLY",
    isShort: true,
    shortDurationSeconds: 150,
    objectiveFr:
      "Expliquer comment la diversification réduit le risque spécifique sans éliminer le risque de marché.",
    objectiveEn:
      "Explain how diversification reduces specific risk without eliminating market risk.",
    explanationFr:
      "La diversification répartit les investissements entre classes d'actifs, secteurs et régions. Un portefeuille concentré sur une seule action ou secteur est plus vulnérable à un événement local (faillite, régulation, catastrophe). Diversifier ne garantit pas un gain : en crise générale, plusieurs actifs peuvent baisser ensemble. Mais cela limite l'impact d'un seul mauvais choix. Les fonds indiciels larges offrent une diversification simple — illustration pédagogique, pas recommandation de produit.",
    explanationEn:
      "Diversification spreads investments across asset classes, sectors, and regions. A portfolio concentrated in one stock or sector is more vulnerable to a local event (bankruptcy, regulation, disaster). Diversifying does not guarantee gain: in a broad crisis, many assets may fall together. But it limits the impact of one bad pick. Broad index funds offer simple diversification — pedagogical illustration, not a product recommendation.",
    exampleFr:
      "10 000 en une action : baisse −50 % → 5 000. Même 10 000 en 200 positions via fonds indiciel : une faillite isolée pèse peu sur le total.",
    exampleEn:
      "10,000 in one stock: −50% drop → 5,000. Same 10,000 in 200 positions via index fund: one isolated bankruptcy weighs little on the total.",
    practicalFr:
      "Listez trois axes de diversification pour votre situation : classe d'actifs, géographie, secteur.",
    practicalEn:
      "List three diversification axes for your situation: asset class, geography, sector.",
    mistakeFr:
      "Croire que « beaucoup d'actions » = diversifié si elles sont du même secteur ou pays.",
    mistakeEn:
      "Believing “many stocks” = diversified if they are the same sector or country.",
    takeawayFr:
      "Diversifier = réduire la dépendance à un seul risque.",
    takeawayEn:
      "Diversify = reduce dependence on a single risk.",
    decisionFr:
      "Vérifier si le portefeuille dépend d'un seul actif, secteur ou région avant d'ajouter du risque.",
    decisionEn:
      "Check whether the portfolio depends on one asset, sector, or region before adding risk.",
    flashcardFrontFr: "Diversification",
    flashcardFrontEn: "Diversification",
    flashcardBackFr: "Répartir les investissements pour réduire le risque spécifique.",
    flashcardBackEn: "Spread investments to reduce specific risk.",
    exercisePromptFr:
      "Portefeuille : 80 % tech, 20 % cash. Proposez une réallocation illustrative pour réduire la concentration sectorielle.",
    exercisePromptEn:
      "Portfolio: 80% tech, 20% cash. Propose an illustrative reallocation to reduce sector concentration.",
    question: q({
      type: "MULTIPLE_CHOICE",
      promptFr: "Quels choix illustrent la diversification ? (Plusieurs réponses)",
      promptEn: "Which choices illustrate diversification? (Multiple answers)",
      explanationCorrectFr: "Mélanger classes d'actifs et régions réduit la concentration.",
      explanationCorrectEn: "Mixing asset classes and regions reduces concentration.",
      difficulty: 2,
      options: [
        opt("Actions + obligations + immobilier", "Stocks + bonds + real estate", true),
        opt("100 % une seule action", "100% one stock", false, "Concentration maximale, pas diversification.", "Maximum concentration, not diversification."),
        opt("Actions de plusieurs régions", "Stocks from multiple regions", true),
      ],
    }),
    questions: [
      q({
        type: "TRUE_FALSE",
        promptFr: "Diversifier élimine totalement le risque de baisse du marché.",
        promptEn: "Diversifying completely eliminates market downturn risk.",
        explanationCorrectFr: "Faux. Le risque systémique peut toucher plusieurs actifs en même temps.",
        explanationCorrectEn: "False. Systemic risk can hit many assets at once.",
        difficulty: 2,
        options: [
          opt("Vrai", "True", false, "Les crises larges affectent souvent plusieurs classes.", "Broad crises often affect several classes."),
          opt("Faux", "False", true),
        ],
      }),
      q({
        type: "SINGLE_CHOICE",
        promptFr: "10 000 : 9 500 dans une action, 500 en cash. Principal risque ?",
        promptEn: "10,000: 9,500 in one stock, 500 cash. Main risk?",
        explanationCorrectFr: "Risque spécifique à l'entreprise — concentration extrême.",
        explanationCorrectEn: "Company-specific risk — extreme concentration.",
        difficulty: 2,
        options: [
          opt("Risque de change uniquement", "Currency risk only", false, "La concentration sectorielle/entreprise domine.", "Company/sector concentration dominates."),
          opt("Risque spécifique / concentration", "Specific / concentration risk", true),
          opt("Absence de tout risque", "No risk at all", false, "Toute concentration porte un risque.", "Any concentration carries risk."),
        ],
      }),
    ],
  }),

  buildPfLesson({
    slug: "asset-allocation",
    titleFr: "Allocation d'actifs",
    titleEn: "Asset Allocation",
    descriptionFr: "Déterminez la répartition optimale entre classes d'actifs.",
    descriptionEn: "Determine optimal allocation across asset classes.",
    moduleSlug: "saving-investing",
    sortOrder: 7,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "pf-investing",
    learningObjective: "DECIDE",
    objectiveFr:
      "Définir une allocation cible (ex. % actions / obligations) selon horizon et tolérance.",
    objectiveEn:
      "Define a target allocation (e.g. % stocks / bonds) by horizon and tolerance.",
    explanationFr:
      "L'allocation d'actifs fixe le pourcentage de chaque classe dans le portefeuille (ex. 60 % actions, 40 % obligations). Elle dépend de l'horizon, la tolérance au risque et les objectifs. Après une hausse des actions, la part actions peut dépasser la cible — le rééquilibrage vend une partie des actifs qui ont monté pour racheter ceux qui ont moins monté, afin de maintenir le plan. C'est un cadre général — adaptez à votre situation sans promesse de performance.",
    explanationEn:
      "Asset allocation sets each class's percentage in the portfolio (e.g. 60% stocks, 40% bonds). It depends on horizon, risk tolerance, and goals. After a stock rally, the stock share may exceed target — rebalancing sells some of what rose to buy what rose less, to maintain the plan. This is a general framework — adapt to your situation without performance promises.",
    exampleFr:
      "Cible 60/40 sur 20 000 → 12 000 actions, 8 000 obligations. Actions montent à 14 000 (70 %). Rééquilibrage : vendre ~2 000 d'actions, acheter obligations pour retrouver 60/40.",
    exampleEn:
      "60/40 target on 20,000 → 12,000 stocks, 8,000 bonds. Stocks rise to 14,000 (70%). Rebalance: sell ~2,000 stocks, buy bonds to return to 60/40.",
    practicalFr:
      "Choisissez une allocation cible pour un objectif à 20 ans et une à 3 ans. Justifiez la différence.",
    practicalEn:
      "Pick a target allocation for a 20-year goal and one for 3 years. Justify the difference.",
    mistakeFr:
      "Ne jamais rééquilibrer — laisser la part la plus risquée dominer après une hausse.",
    mistakeEn:
      "Never rebalancing — letting the riskiest share dominate after a rally.",
    takeawayFr:
      "L'allocation est le plan ; le rééquilibrage le maintient.",
    takeawayEn:
      "Allocation is the plan; rebalancing maintains it.",
    decisionFr:
      "Fixer des pourcentages cibles et une règle de révision (ex. annuelle ou si écart > 5 %).",
    decisionEn:
      "Set target percentages and a review rule (e.g. yearly or if drift > 5%).",
    flashcardFrontFr: "Rééquilibrage",
    flashcardFrontEn: "Rebalancing",
    flashcardBackFr: "Ajuster le portefeuille pour retrouver l'allocation cible.",
    flashcardBackEn: "Adjust the portfolio to restore target allocation.",
    exercisePromptFr:
      "Portefeuille 15 000, cible 50/50. Actuel : 9 000 actions, 6 000 obligations. Quels montants déplacer pour rééquilibrer ?",
    exercisePromptEn:
      "Portfolio 15,000, target 50/50. Current: 9,000 stocks, 6,000 bonds. What amounts to move to rebalance?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "L'allocation d'actifs dépend principalement de…",
      promptEn: "Asset allocation mainly depends on…",
      explanationCorrectFr: "Horizon, tolérance au risque et objectifs.",
      explanationCorrectEn: "Horizon, risk tolerance, and goals.",
      difficulty: 2,
      options: [
        opt("Horizon, risque et objectifs", "Horizon, risk, and goals", true),
        opt("La météo", "The weather", false),
        opt("Le signe astrologique", "Astrological sign", false),
      ],
    }),
  }),

  buildPfLesson({
    slug: "volatility-basics",
    titleFr: "Bases de la volatilité",
    titleEn: "Volatility Basics",
    descriptionFr: "Comprendre les fluctuations de prix et leur impact émotionnel.",
    descriptionEn: "Understand price swings and their emotional impact.",
    moduleSlug: "saving-investing",
    sortOrder: 8,
    estimatedMinutes: 8,
    difficulty: "INTERMEDIATE",
    skillSlug: "pf-investing",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Définir la volatilité et anticiper des fluctuations sans paniquer.",
    objectiveEn:
      "Define volatility and anticipate swings without panicking.",
    explanationFr:
      "La volatilité mesure l'amplitude des variations de prix. Un actif volatile peut gagner ou perdre beaucoup en peu de temps. Les actions sont typiquement plus volatiles que les obligations ou les liquidités. Une baisse temporaire n'est pas toujours une « perte définitive » si vous n'avez pas besoin de vendre. Comprendre la volatilité aide à choisir une allocation compatible avec votre capacité à tenir une baisse.",
    explanationEn:
      "Volatility measures the size of price swings. A volatile asset can gain or lose a lot quickly. Stocks are typically more volatile than bonds or cash. A temporary drop is not always a “permanent loss” if you do not need to sell. Understanding volatility helps choose an allocation compatible with your ability to hold through a decline.",
    exampleFr:
      "Portefeuille actions 8 000. Mois 1 : +8 % → 8 640. Mois 2 : −12 % → ~7 603. La valeur change sans que l'entreprise ait « disparu ».",
    exampleEn:
      "Stock portfolio 8,000. Month 1: +8% → 8,640. Month 2: −12% → ~7,603. Value changes without the company “vanishing.”",
    practicalFr:
      "Regardez l'historique d'un indice large sur 10 ans : notez la plus forte baisse et la reprise suivante (illustration, pas prédiction).",
    practicalEn:
      "Look at a broad index over 10 years: note the largest drop and subsequent recovery (illustration, not prediction).",
    mistakeFr:
      "Confondre volatilité court terme et échec du plan long terme.",
    mistakeEn:
      "Confusing short-term volatility with long-term plan failure.",
    takeawayFr:
      "Volatilité = mouvement normal des prix — le plan définit si vous pouvez l'absorber.",
    takeawayEn:
      "Volatility = normal price movement — the plan defines whether you can absorb it.",
    decisionFr:
      "Choisir une allocation dont la baisse maximale plausible reste tenable pour vous.",
    decisionEn:
      "Choose an allocation whose plausible maximum drop remains tolerable for you.",
    flashcardFrontFr: "Volatilité",
    flashcardFrontEn: "Volatility",
    flashcardBackFr: "Amplitude des variations de prix d'un actif.",
    flashcardBackEn: "Size of an asset's price swings.",
    exercisePromptFr:
      "Investissement 6 000, baisse −25 %. Nouvelle valeur ? Si vous n'avez besoin de l'argent dans 20 ans, quelle question poser avant de vendre ?",
    exercisePromptEn:
      "Investment 6,000, −25% drop. New value? If you don't need the money for 20 years, what question to ask before selling?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "6 000 en actions, baisse −25 %. Valeur approximative ?",
      promptEn: "6,000 in stocks, −25% drop. Approximate value?",
      explanationCorrectFr: "6 000 × 0,75 = 4 500.",
      explanationCorrectEn: "6,000 × 0.75 = 4,500.",
      difficulty: 2,
      options: [
        opt("5 500", "5,500", false, "−25 % enlève 1 500, pas 500.", "−25% removes 1,500, not 500."),
        opt("4 500", "4,500", true),
        opt("6 000", "6,000", false, "La valeur baisse avec le marché.", "Value falls with the market."),
      ],
    }),
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
      "Associer un horizon (court, moyen, long) à un niveau de risque cohérent.",
    objectiveEn:
      "Match a horizon (short, medium, long) to a coherent risk level.",
    explanationFr:
      "L'horizon d'investissement est le temps avant que vous ayez besoin de l'argent. Court (0–2 ans) : priorité liquidité et stabilité. Moyen (3–7 ans) : mix prudent. Long (10+ ans) : plus de place pour la croissance et la volatilité temporaire. Un même portefeuille peut servir plusieurs horizons si vous segmentez par « poches » (ex. fonds vacances vs retraite).",
    explanationEn:
      "Investment horizon is time until you need the money. Short (0–2 years): liquidity and stability first. Medium (3–7 years): prudent mix. Long (10+ years): more room for growth and temporary volatility. One portfolio can serve multiple horizons if you segment by “buckets” (e.g. vacation fund vs retirement).",
    exampleFr:
      "Objectif A : voyage dans 8 mois → pochette liquide 2 000. Objectif B : retraite dans 25 ans → pochette croissance 15 000. Deux horizons, deux règles.",
    exampleEn:
      "Goal A: trip in 8 months → liquid bucket 2,000. Goal B: retirement in 25 years → growth bucket 15,000. Two horizons, two rules.",
    practicalFr:
      "Listez vos trois prochains objectifs financiers avec une date. Classez chaque horizon : court / moyen / long.",
    practicalEn:
      "List your next three financial goals with a date. Classify each horizon: short / medium / long.",
    mistakeFr:
      "Investir l'argent des frais de scolarité de l'an prochain en actions volatiles.",
    mistakeEn:
      "Investing next year's tuition money in volatile stocks.",
    takeawayFr:
      "L'horizon dicte le risque acceptable — pas l'émotion du jour.",
    takeawayEn:
      "Horizon dictates acceptable risk — not today's emotion.",
    decisionFr:
      "Définir la date de besoin avant de choisir la classe d'actif.",
    decisionEn:
      "Define the need date before choosing the asset class.",
    flashcardFrontFr: "Horizon d'investissement",
    flashcardFrontEn: "Investment horizon",
    flashcardBackFr: "Durée avant d'avoir besoin des fonds investis.",
    flashcardBackEn: "Time until you need the invested funds.",
    exercisePromptFr:
      "Besoin dans 18 mois : 5 000. Besoin dans 20 ans : 20 000. Proposez une logique de risque différente pour chaque poche.",
    exercisePromptEn:
      "Need in 18 months: 5,000. Need in 20 years: 20,000. Propose different risk logic for each bucket.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Achat immobilier dans 9 mois. Approche la plus cohérente pour les fonds accumulés ?",
      promptEn: "Home purchase in 9 months. Most coherent approach for accumulated funds?",
      explanationCorrectFr: "Liquidité et stabilité — horizon très court.",
      explanationCorrectEn: "Liquidity and stability — very short horizon.",
      difficulty: 2,
      options: [
        opt("100 % actions à haute volatilité", "100% high-volatility stocks", false, "Neuf mois : une baisse peut bloquer l'achat.", "Nine months: a drop can block the purchase."),
        opt("Liquidités / très peu volatil", "Cash / very low volatility", true),
        opt("Investissement sans date de besoin", "Investment with no need date", false, "La date fixe impose une contrainte de risque.", "The fixed date imposes a risk constraint."),
      ],
    }),
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
      "Classer des actifs selon leur liquidité et lier liquidité à l'horizon.",
    objectiveEn:
      "Rank assets by liquidity and link liquidity to horizon.",
    explanationFr:
      "La liquidité est la facilité de vendre un actif rapidement sans forte décote. Les liquidités et comptes courants sont très liquides. Les actions cotées sont généralement liquides en quelques jours. L'immobilier direct est peu liquide (vente longue, frais). Certains placements ont des blocages (délais de retrait). Pour un besoin imminent, la liquidité prime sur le rendement potentiel.",
    explanationEn:
      "Liquidity is how easily you sell an asset quickly without a large discount. Cash and current accounts are highly liquid. Listed stocks are generally liquid within days. Direct real estate is illiquid (long sale, fees). Some placements have lock-ups (withdrawal delays). For imminent needs, liquidity beats potential return.",
    exampleFr:
      "Urgence médicale 3 000 : compte courant → disponible aujourd'hui. Maison 300 000 → vente possible en mois, pas en heures.",
    exampleEn:
      "Medical emergency 3,000: current account → available today. House 300,000 → sale possible in months, not hours.",
    practicalFr:
      "Classez : cash, actions cotées, immobilier locatif, fonds avec blocage 90 jours — du plus au moins liquide.",
    practicalEn:
      "Rank: cash, listed stocks, rental property, fund with 90-day lock — from most to least liquid.",
    mistakeFr:
      "Compter sur la vente rapide d'un actif illiquide pour une urgence.",
    mistakeEn:
      "Relying on quick sale of an illiquid asset for an emergency.",
    takeawayFr:
      "Liquidité = accès rapide. Match l'actif au délai du besoin.",
    takeawayEn:
      "Liquidity = fast access. Match the asset to the need timeline.",
    decisionFr:
      "Garder les besoins à court terme dans des actifs liquides, même si le rendement est faible.",
    decisionEn:
      "Keep short-term needs in liquid assets, even if return is low.",
    flashcardFrontFr: "Liquidité",
    flashcardFrontEn: "Liquidity",
    flashcardBackFr: "Facilité de convertir un actif en cash rapidement.",
    flashcardBackEn: "Ease of converting an asset to cash quickly.",
    exercisePromptFr:
      "Vous avez 12 000 : 2 000 besoin dans 2 mois, 10 000 dans 15 ans. Comment séparer liquidité et investissement long terme ?",
    exercisePromptEn:
      "You have 12,000: 2,000 needed in 2 months, 10,000 in 15 years. How to separate liquidity and long-term investment?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Quel actif est typiquement le plus liquide ?",
      promptEn: "Which asset is typically most liquid?",
      explanationCorrectFr: "Cash / compte courant — disponible immédiatement.",
      explanationCorrectEn: "Cash / current account — available immediately.",
      difficulty: 1,
      options: [
        opt("Cash / compte courant", "Cash / current account", true),
        opt("Immeuble locatif", "Rental building", false, "L'immobilier direct se vend lentement.", "Direct real estate sells slowly."),
        opt("Placement bloqué 5 ans", "5-year locked placement", false, "Blocage = faible liquidité.", "Lock-up = low liquidity."),
      ],
    }),
  }),

  buildPfLesson({
    slug: "dollar-cost-averaging",
    titleFr: "Investissement programmé",
    titleEn: "Dollar-Cost Averaging",
    descriptionFr: "Investir régulièrement pour lisser le prix d'achat.",
    descriptionEn: "Invest regularly to smooth purchase price.",
    moduleSlug: "saving-investing",
    sortOrder: 11,
    estimatedMinutes: 8,
    difficulty: "INTERMEDIATE",
    skillSlug: "pf-investing",
    learningObjective: "APPLY",
    objectiveFr:
      "Expliquer l'investissement programmé (DCA) et ses limites.",
    objectiveEn:
      "Explain dollar-cost averaging (DCA) and its limits.",
    explanationFr:
      "L'investissement programmé consiste à investir un montant fixe à intervalles réguliers (ex. 200 / mois), peu importe si le marché monte ou baisse. Vous achetez plus de parts quand les prix sont bas, moins quand ils sont hauts — ce qui peut lisser le prix moyen d'achat. Cela renforce aussi la discipline. Limite : si le marché monte régulièrement, investir tout immédiatement aurait pu donner un résultat supérieur — mais personne connaît l'avenir. Le DCA réduit le risque de « tout miser au plus haut ».",
    explanationEn:
      "Dollar-cost averaging invests a fixed amount at regular intervals (e.g. 200 / month), whether the market rises or falls. You buy more units when prices are low, fewer when high — which can smooth average purchase price. It also builds discipline. Limit: if markets rise steadily, investing all at once might have done better — but nobody knows the future. DCA reduces the risk of “investing everything at the top.”",
    exampleFr:
      "200 / mois : mois 1 prix 50 → 4 parts. Mois 2 prix 40 → 5 parts. Mois 3 prix 60 → 3,33 parts. Prix moyen lissé vs un seul achat au pic.",
    exampleEn:
      "200 / month: month 1 price 50 → 4 units. Month 2 price 40 → 5 units. Month 3 price 60 → 3.33 units. Smoothed average vs one purchase at the peak.",
    practicalFr:
      "Choisissez un montant mensuel que vous pouvez tenir 12 mois sans interruption, même si le marché baisse.",
    practicalEn:
      "Pick a monthly amount you can sustain 12 months without stopping, even if the market falls.",
    mistakeFr:
      "Arrêter les versements quand le marché baisse — inverse de la logique du DCA.",
    mistakeEn:
      "Stopping contributions when the market falls — opposite of DCA logic.",
    takeawayFr:
      "Régularité + montant fixe = discipline et prix moyen potentiellement lissé.",
    takeawayEn:
      "Regularity + fixed amount = discipline and potentially smoothed average price.",
    decisionFr:
      "Automatiser un versement récurrent aligné avec l'horizon long terme.",
    decisionEn:
      "Automate a recurring contribution aligned with a long-term horizon.",
    flashcardFrontFr: "DCA",
    flashcardFrontEn: "DCA",
    flashcardBackFr: "Investir un montant fixe à intervalles réguliers.",
    flashcardBackEn: "Invest a fixed amount at regular intervals.",
    exercisePromptFr:
      "150 / mois, 3 mois. Prix unitaire : 30, 20, 40. Calculez les parts achetées chaque mois et le total de parts.",
    exercisePromptEn:
      "150 / month, 3 months. Unit price: 30, 20, 40. Compute units bought each month and total units.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "150 / mois, prix 30 → combien de parts achetées ?",
      promptEn: "150 / month, price 30 → how many units bought?",
      explanationCorrectFr: "150 ÷ 30 = 5 parts.",
      explanationCorrectEn: "150 ÷ 30 = 5 units.",
      difficulty: 1,
      options: [
        opt("3", "3", false, "150 / 30 = 5.", "150 / 30 = 5."),
        opt("5", "5", true),
        opt("30", "30", false, "Le prix n'est pas le nombre de parts.", "Price is not the number of units."),
      ],
    }),
    questions: [
      q({
        type: "TRUE_FALSE",
        promptFr: "Le DCA garantit un meilleur rendement que l'investissement unique.",
        promptEn: "DCA guarantees better return than lump-sum investing.",
        explanationCorrectFr: "Faux. Il lisse le timing, sans garantie de performance.",
        explanationCorrectEn: "False. It smooths timing, with no performance guarantee.",
        difficulty: 2,
        options: [
          opt("Vrai", "True", false, "Aucune stratégie garantit le rendement.", "No strategy guarantees return."),
          opt("Faux", "False", true),
        ],
      }),
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Marché en forte baisse, versement programmé de 200 / mois. Action la plus alignée avec le DCA ?",
        promptEn: "Market in sharp drop, 200 / month plan. Most DCA-aligned action?",
        explanationCorrectFr: "Continuer les versements — vous achetez plus de parts à bas prix.",
        explanationCorrectEn: "Continue contributions — you buy more units at low prices.",
        difficulty: 2,
        options: [
          opt("Arrêter jusqu'à la reprise", "Stop until recovery", false, "Arrêter en baisse abandonne l'avantage du DCA.", "Stopping in a drop abandons DCA advantage."),
          opt("Continuer les versements", "Continue contributions", true),
          opt("Tripler sans plan", "Triple with no plan", false, "Augmenter sans règle n'est pas du DCA structuré.", "Increasing without rules is not structured DCA."),
        ],
      }),
    ],
  }),

  buildPfLesson({
    slug: "investment-fees",
    titleFr: "Frais d'investissement",
    titleEn: "Investment Fees",
    descriptionFr: "Identifier les frais qui réduisent le rendement net.",
    descriptionEn: "Identify fees that reduce net return.",
    moduleSlug: "saving-investing",
    sortOrder: 12,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "pf-investing",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Calculer l'impact des frais annuels sur un investissement long terme.",
    objectiveEn:
      "Calculate the impact of annual fees on a long-term investment.",
    explanationFr:
      "Les frais d'investissement incluent les frais de gestion (TER / expense ratio), frais de transaction, frais de courtage et parfois frais d'entrée/sortie. Un frais annuel de 1 % sur 10 000 = 100 / an prélevés sur le capital. Sur 20–30 ans, la différence entre 0,2 % et 1,5 % peut représenter des milliers — même si le marché performe. Les frais sont connus ; les rendements futurs ne sont pas. Comparez toujours le coût total.",
    explanationEn:
      "Investment fees include management fees (TER / expense ratio), transaction fees, brokerage, and sometimes entry/exit fees. A 1% annual fee on 10,000 = 100 / year taken from capital. Over 20–30 years, the gap between 0.2% and 1.5% can mean thousands — even if markets perform. Fees are known; future returns are not. Always compare total cost.",
    exampleFr:
      "10 000 investis, rendement brut illustratif 6 % / an. Frais 1 % → net ~5 %. Frais 0,2 % → net ~5,8 %. Sur 20 ans, l'écart s'accumule fortement.",
    exampleEn:
      "10,000 invested, illustrative gross return 6%/year. Fees 1% → net ~5%. Fees 0.2% → net ~5.8%. Over 20 years, the gap compounds strongly.",
    practicalFr:
      "Pour un fonds que vous utilisez ou envisagez, notez le TER (%) et estimez le coût annuel sur votre capital investi.",
    practicalEn:
      "For a fund you use or consider, note the TER (%) and estimate annual cost on your invested capital.",
    mistakeFr:
      "Ignorer les frais car « 1 % c'est petit » — sur le long terme, c'est significatif.",
    mistakeEn:
      "Ignoring fees because “1% is small” — over the long term, it is significant.",
    takeawayFr:
      "Frais = rendement net en moins. Vérifiez avant chaque placement.",
    takeawayEn:
      "Fees = less net return. Check before every placement.",
    decisionFr:
      "Comparer le coût total (frais + transactions) entre deux options équivalentes.",
    decisionEn:
      "Compare total cost (fees + transactions) between two equivalent options.",
    flashcardFrontFr: "TER / frais de gestion",
    flashcardFrontEn: "TER / management fee",
    flashcardBackFr: "Pourcentage annuel prélevé sur le capital du fonds.",
    flashcardBackEn: "Annual percentage charged on fund capital.",
    exercisePromptFr:
      "Capital 8 000. Fonds A : TER 0,25 %. Fonds B : TER 1,10 %. Calculez la différence de frais annuels en euros.",
    exercisePromptEn:
      "Capital 8,000. Fund A: TER 0.25%. Fund B: TER 1.10%. Compute the annual fee difference in currency units.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "10 000 investis, frais de gestion 1 % / an. Coût annuel approximatif ?",
      promptEn: "10,000 invested, management fee 1%/year. Approximate annual cost?",
      explanationCorrectFr: "10 000 × 1 % = 100 / an.",
      explanationCorrectEn: "10,000 × 1% = 100 / year.",
      difficulty: 1,
      options: [
        opt("10", "10", false, "1 % de 10 000 = 100.", "1% of 10,000 = 100."),
        opt("100", "100", true),
        opt("1 000", "1,000", false, "10 % serait 1 000, pas 1 %.", "10% would be 1,000, not 1%."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "8 000 investis. TER 0,3 % vs TER 1,2 %. Différence de frais annuels ?",
        promptEn: "8,000 invested. TER 0.3% vs TER 1.2%. Annual fee difference?",
        explanationCorrectFr: "0,9 % × 8 000 = 72 / an.",
        explanationCorrectEn: "0.9% × 8,000 = 72 / year.",
        difficulty: 2,
        options: [
          opt("24", "24", false, "Écart 0,9 %, pas 0,3 %.", "Gap is 0.9%, not 0.3%."),
          opt("72", "72", true),
          opt("960", "960", false, "12 % serait 960 — l'écart est 0,9 %.", "12% would be 960 — gap is 0.9%."),
        ],
      }),
      q({
        type: "TRUE_FALSE",
        promptFr: "Des frais plus bas augmentent toujours le rendement net à long terme, sans autre changement.",
        promptEn: "Lower fees always increase long-term net return, with no other change.",
        explanationCorrectFr: "Vrai dans ce cadre : moins de frais = plus de capital qui reste investi.",
        explanationCorrectEn: "True in this frame: lower fees = more capital stays invested.",
        difficulty: 2,
        options: [
          opt("Vrai", "True", true),
          opt("Faux", "False", false, "Les frais réduisent directement le capital net.", "Fees directly reduce net capital."),
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
      "Comparer immobilier direct, REIT et résidence principale comme usages différents.",
    objectiveEn:
      "Compare direct real estate, REIT, and primary residence as different uses.",
    explanationFr:
      "L'immobilier peut générer des revenus (loyers) et une plus-value (hausse de valeur). L'immobilier direct nécessite capital initial, maintenance, vacance locative et offre une liquidité limitée. Les REIT (sociétés cotées immobilières) permettent d'investir en immobilier avec plus de liquidité mais suivent aussi le marché boursier. La résidence principale est un usage personnel — sa valeur peut croître, mais ce n'est pas le même calcul qu'un investissement locatif pur.",
    explanationEn:
      "Real estate can generate income (rent) and capital gains (value rise). Direct property needs initial capital, maintenance, vacancy, and has limited liquidity. REITs (listed real estate companies) allow real estate exposure with more liquidity but also follow the stock market. A primary residence is personal use — value may grow, but it is not the same math as pure rental investment.",
    exampleFr:
      "Bien locatif : achat 200 000, loyer net 800 / mois après charges → rendement brut illustratif ~4,8 % / an avant vacance et travaux. REIT : liquidité en journée, dividendes variables.",
    exampleEn:
      "Rental property: purchase 200,000, net rent 800 / month after costs → illustrative gross yield ~4.8%/year before vacancy and repairs. REIT: intraday liquidity, variable dividends.",
    practicalFr:
      "Comparez sur liquidité, effort de gestion et capital minimum : immobilier direct vs REIT.",
    practicalEn:
      "Compare on liquidity, management effort, and minimum capital: direct property vs REIT.",
    mistakeFr:
      "Supposer que « l'immobilier ne baisse jamais » — les marchés locaux varient.",
    mistakeEn:
      "Assuming “real estate never falls” — local markets vary.",
    takeawayFr:
      "Immobilier = revenus + valeur, mais liquidité et frais comptent.",
    takeawayEn:
      "Real estate = income + value, but liquidity and costs matter.",
    decisionFr:
      "Choisir la forme (direct, REIT, résidence) selon capital, temps et besoin de liquidité.",
    decisionEn:
      "Choose form (direct, REIT, residence) by capital, time, and liquidity need.",
    flashcardFrontFr: "REIT",
    flashcardFrontEn: "REIT",
    flashcardBackFr: "Société cotée qui investit dans l'immobilier.",
    flashcardBackEn: "Listed company that invests in real estate.",
    exercisePromptFr:
      "Loyer annuel net 9 600, valeur du bien 240 000. Calculez le rendement locatif brut illustratif (9 600 / 240 000).",
    exercisePromptEn:
      "Annual net rent 9,600, property value 240,000. Compute illustrative gross rental yield (9,600 / 240,000).",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Qu'est-ce qu'un REIT ?",
      promptEn: "What is a REIT?",
      explanationCorrectFr: "Une société cotée qui investit dans l'immobilier.",
      explanationCorrectEn: "A listed company that invests in real estate.",
      difficulty: 2,
      options: [
        opt("Société cotée immobilière", "Listed real estate company", true),
        opt("Type de prêt hypothécaire", "Type of mortgage loan", false, "Un REIT est une société, pas un prêt.", "A REIT is a company, not a loan."),
        opt("Taxe sur la propriété", "Property tax", false, "Un REIT n'est pas une taxe.", "A REIT is not a tax."),
      ],
    }),
  }),
];
