import { buildPmpLesson, opt, q } from "./pmp-factory";
import type { PmpLesson } from "./pmp-types";

const MOD = "agile";

export const PMP_AGILE_LESSONS: PmpLesson[] = [
  buildPmpLesson({
    slug: "agile-mindset",
    titleFr: "Mindset agile",
    titleEn: "Agile Mindset",
    descriptionFr:
      "Adopter collaboration, adaptation et livraison fréquente de valeur — au-delà des rituels.",
    descriptionEn:
      "Adopt collaboration, adaptation, and frequent value delivery — beyond rituals.",
    moduleSlug: MOD,
    sortOrder: 0,
    estimatedMinutes: 7,
    difficulty: "BEGINNER",
    skillSlug: "agile-mindset",
    learningObjective: "IDENTIFY",
    isShort: true,
    shortDurationSeconds: 145,
    objectiveFr:
      "Distinguer mindset agile (valeurs, empirisme) et mécanismes Scrum/Kanban.",
    objectiveEn:
      "Distinguish agile mindset (values, empiricism) from Scrum/Kanban mechanics.",
    explanationFr:
      "Le mindset agile place les personnes et la collaboration avant les processus figés. L'empirisme repose sur trois piliers : transparence (état visible du travail), inspection (revues régulières) et adaptation (ajustements rapides). Ce n'est pas « zéro plan » : c'est planifier suffisamment pour apprendre vite. FlowMart relance son checkout : au lieu d'un cahier des charges de 80 pages, l'équipe livre un parcours minimal en 3 semaines pour observer le taux d'abandon réel. Le changement de priorités n'est pas un échec de planification — c'est une réponse à de nouvelles connaissances.",
    explanationEn:
      "The agile mindset puts people and collaboration ahead of rigid processes. Empiricism rests on three pillars: transparency (visible work state), inspection (regular reviews), and adaptation (fast adjustments). It is not “zero planning” — it is planning enough to learn quickly. FlowMart relaunches checkout: instead of an 80-page spec, the team ships a minimal flow in 3 weeks to observe real abandonment rates. Shifting priorities is not planning failure — it is a response to new knowledge.",
    exampleFr:
      "FlowMart : après la première démo, les utilisateurs abandonnent au champ « adresse de facturation ». L'équipe adapte le backlog (pré-remplissage) plutôt que de défendre le plan initial.",
    exampleEn:
      "FlowMart: after the first demo, users drop off at the “billing address” field. The team adapts the backlog (prefill) rather than defending the original plan.",
    practicalFr:
      "Listez une décision récente où vous avez privilégié un plan figé plutôt qu'une adaptation — et ce que vous auriez inspecté plus tôt.",
    practicalEn:
      "List a recent decision where you favored a fixed plan over adaptation — and what you would have inspected earlier.",
    mistakeFr:
      "Confondre agilité et absence de discipline : « agile » ne signifie pas accepter tout changement sans priorisation.",
    mistakeEn:
      "Confusing agility with lack of discipline: “agile” does not mean accepting every change without prioritization.",
    takeawayFr:
      "Mindset agile = transparence, inspection, adaptation — pas seulement des sprints.",
    takeawayEn:
      "Agile mindset = transparency, inspection, adaptation — not just sprints.",
    decisionFr:
      "Face à une surprise, demander : que savons-nous de plus ? Que devons-nous adapter ?",
    decisionEn:
      "When surprised, ask: what do we know now? What must we adapt?",
    flashcardFrontFr: "Empirisme agile",
    flashcardFrontEn: "Agile empiricism",
    flashcardBackFr: "Transparence → inspection → adaptation.",
    flashcardBackEn: "Transparency → inspection → adaptation.",
    exercisePromptFr:
      "FlowMart veut figer le checkout 6 mois. Reformulez l'argument agile en 3 phrases (valeur, risque, feedback).",
    exercisePromptEn:
      "FlowMart wants to freeze checkout for 6 months. Restate the agile argument in 3 sentences (value, risk, feedback).",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Quel comportement illustre le mieux le mindset agile ?",
      promptEn: "Which behavior best illustrates the agile mindset?",
      explanationCorrectFr:
        "Adapter le plan après inspection plutôt que défendre un document figé.",
      explanationCorrectEn:
        "Adapt the plan after inspection rather than defending a fixed document.",
      difficulty: 1,
      options: [
        opt(
          "Refuser tout changement après le kick-off",
          "Reject all change after kick-off",
          false,
          "Un plan figé ignore l'empirisme.",
          "A fixed plan ignores empiricism."
        ),
        opt(
          "Inspecter les résultats et adapter les priorités",
          "Inspect results and adapt priorities",
          true
        ),
        opt(
          "Supprimer toute planification",
          "Remove all planning",
          false,
          "L'agilité planifie pour apprendre, pas pour tout figer.",
          "Agility plans to learn, not to freeze everything."
        ),
      ],
    }),
    questions: [
      q({
        type: "TRUE_FALSE",
        promptFr:
          "L'agilité valorise la réponse au changement plutôt qu'un plan rigide.",
        promptEn:
          "Agility values responding to change over following a rigid plan.",
        explanationCorrectFr:
          "Vrai : l'adaptation face à l'incertitude est centrale.",
        explanationCorrectEn:
          "True: adapting to uncertainty is central.",
        difficulty: 1,
        options: [opt("Vrai", "True", true), opt("Faux", "False", false)],
      }),
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Quel pilier de l'empirisme rend possible l'adaptation ?",
        promptEn: "Which empiricism pillar makes adaptation possible?",
        explanationCorrectFr:
          "L'inspection régulière révèle ce qui fonctionne ou non.",
        explanationCorrectEn:
          "Regular inspection reveals what works or not.",
        difficulty: 2,
        options: [
          opt("Transparence seule", "Transparency alone", false),
          opt("Inspection", "Inspection", true),
          opt("Documentation exhaustive", "Exhaustive documentation", false),
        ],
      }),
      q({
        type: "TRUE_FALSE",
        promptFr:
          "Mindset agile et mécanismes Scrum sont la même chose.",
        promptEn: "Agile mindset and Scrum mechanics are the same thing.",
        explanationCorrectFr:
          "Faux : Scrum est un cadre ; le mindset est la philosophie sous-jacente.",
        explanationCorrectEn:
          "False: Scrum is a framework; mindset is the underlying philosophy.",
        difficulty: 1,
        options: [opt("Vrai", "True", false), opt("Faux", "False", true)],
      }),
    ],
  }),

  buildPmpLesson({
    slug: "iterative-delivery",
    titleFr: "Livraison itérative",
    titleEn: "Iterative Delivery",
    descriptionFr:
      "Produire des incréments fonctionnels à intervalles réguliers pour réduire le risque produit.",
    descriptionEn:
      "Produce functional increments at regular intervals to reduce product risk.",
    moduleSlug: MOD,
    sortOrder: 1,
    estimatedMinutes: 9,
    difficulty: "BEGINNER",
    skillSlug: "pmp-agile",
    learningObjective: "APPLY",
    objectiveFr:
      "Concevoir une première itération avec un incrément testable, pas un prototype non livrable.",
    objectiveEn:
      "Design a first iteration with a testable increment, not a non-shippable prototype.",
    explanationFr:
      "La livraison itérative combine deux idées : itérative (affiner par cycles) et incrémentale (ajouter de la valeur cumulée). Chaque itération a une durée fixe (timebox) ; le périmètre s'ajuste pour tenir la date. FlowMart itération 1 : parcours « invité → panier → paiement CB » sur 10 % du trafic — fonctionnel, mesurable, pas une maquette Figma. Itération 2 : adresses enregistrées + codes promo. Le feedback de l'itération 1 (abandon à 34 % au paiement) oriente l'itération 2. Livrer tôt réduit le coût du changement : corriger après 3 semaines coûte moins qu'après 6 mois de développement silencieux.",
    explanationEn:
      "Iterative delivery combines two ideas: iterative (refine through cycles) and incremental (add cumulative value). Each iteration has fixed duration (timebox); scope adjusts to hit the date. FlowMart iteration 1: “guest → cart → card payment” flow on 10% traffic — functional, measurable, not a Figma mockup. Iteration 2: saved addresses + promo codes. Iteration 1 feedback (34% drop at payment) guides iteration 2. Shipping early reduces change cost: fixing after 3 weeks costs less than after 6 months of silent development.",
    exampleFr:
      "Itération 1 FlowMart : 12 user stories, 18 jours, incrément déployé — taux de conversion mesuré dès J+2.",
    exampleEn:
      "FlowMart iteration 1: 12 user stories, 18 days, increment deployed — conversion rate measured from day 2.",
    practicalFr:
      "Pour une app interne, définissez l'incrément minimal de la première itération (2 semaines) et un indicateur de succès.",
    practicalEn:
      "For an internal app, define the first iteration's minimal increment (2 weeks) and one success metric.",
    mistakeFr:
      "Appeler « itération » une phase de développement sans livraison ni feedback utilisateur.",
    mistakeEn:
      "Calling a development phase an “iteration” with no shipment or user feedback.",
    takeawayFr:
      "Itération = timebox + incrément fonctionnel + feedback — pas seulement un sprint interne.",
    takeawayEn:
      "Iteration = timebox + functional increment + feedback — not just an internal sprint.",
    decisionFr:
      "Couper le périmètre avant de couper la qualité ou la date de l'itération.",
    decisionEn:
      "Cut scope before cutting quality or the iteration date.",
    flashcardFrontFr: "Incrément",
    flashcardFrontEn: "Increment",
    flashcardBackFr: "Version fonctionnelle ajoutée à chaque itération.",
    flashcardBackEn: "Functional version added each iteration.",
    exercisePromptFr:
      "FlowMart veut livrer 40 features en itération 1. Proposez un incrément réaliste et justifiez-le.",
    exercisePromptEn:
      "FlowMart wants 40 features in iteration 1. Propose a realistic increment and justify it.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Quel avantage principal de la livraison itérative ?",
      promptEn: "What is the main advantage of iterative delivery?",
      explanationCorrectFr:
        "Feedback early réduit le risque de construire le mauvais produit.",
      explanationCorrectEn:
        "Early feedback reduces the risk of building the wrong product.",
      difficulty: 2,
      options: [
        opt("Éliminer tout planning", "Eliminate all planning", false),
        opt(
          "Feedback early et réduction du risque produit",
          "Early feedback and reduced product risk",
          true
        ),
        opt("Supprimer les tests", "Remove testing", false),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "backlog",
    titleFr: "Backlog produit",
    titleEn: "Product Backlog",
    descriptionFr:
      "Maintenir la source unique de travail priorisé et vivant pour l'équipe.",
    descriptionEn:
      "Maintain the single, living, prioritized source of work for the team.",
    moduleSlug: MOD,
    sortOrder: 2,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "backlog",
    learningObjective: "APPLY",
    objectiveFr:
      "Structurer un backlog ordonné avec niveaux de détail adaptés (epics → stories).",
    objectiveEn:
      "Structure an ordered backlog with appropriate detail levels (epics → stories).",
    explanationFr:
      "Le backlog produit est la liste unique et ordonnée de tout ce qui pourrait apporter de la valeur. Le haut est le plus détaillé (prêt pour la prochaine itération) ; le bas reste grossier. FlowMart : en tête « paiement en 1 clic » (story détaillée, critères d'acceptation) ; au milieu « programme fidélité » (epic à découper) ; en bas « marketplace vendeurs tiers » (idée). Le Product Owner gère contenu et ordre ; l'équipe estime. Un backlog figé est un anti-pattern : chaque review ou incident support peut le réordonner. Le refinement (backlog grooming) évite que le sprint planning devienne une séance de clarification marathon.",
    explanationEn:
      "The product backlog is the single ordered list of everything that could deliver value. The top is most detailed (ready for the next iteration); the bottom stays coarse. FlowMart: top “1-click payment” (detailed story, acceptance criteria); middle “loyalty program” (epic to split); bottom “third-party seller marketplace” (idea). The Product Owner manages content and order; the team estimates. A frozen backlog is an anti-pattern: every review or support incident may reorder it. Refinement (backlog grooming) keeps sprint planning from becoming a marathon clarification session.",
    exampleFr:
      "FlowMart backlog : 47 items — top 12 « ready », 8 epics en cours de découpage, 27 idées futures.",
    exampleEn:
      "FlowMart backlog: 47 items — top 12 “ready”, 8 epics being split, 27 future ideas.",
    practicalFr:
      "Prenez 5 besoins d'un projet connu : ordonnez-les par valeur et indiquez lequel est « ready ».",
    practicalEn:
      "Take 5 needs from a known project: order by value and mark which is “ready”.",
    mistakeFr:
      "Traiter le backlog comme un Gantt déguisé avec des dates fixes sur chaque story.",
    mistakeEn:
      "Treating the backlog as a disguised Gantt with fixed dates on every story.",
    takeawayFr:
      "Backlog = ordre de valeur + détail progressif — une seule source de vérité.",
    takeawayEn:
      "Backlog = value order + progressive detail — one source of truth.",
    decisionFr:
      "Avant d'ajouter un item : quelle valeur ? Où dans l'ordre ? Qui le détaille ?",
    decisionEn:
      "Before adding an item: what value? Where in order? Who refines it?",
    flashcardFrontFr: "Backlog produit",
    flashcardFrontEn: "Product backlog",
    flashcardBackFr: "Liste ordonnée, vivante, priorisée par valeur.",
    flashcardBackEn: "Ordered, living list prioritized by value.",
    exercisePromptFr:
      "Trois demandes urgentes arrivent le même jour. Décrivez comment les intégrer au backlog sans casser l'ordre aveuglément.",
    exercisePromptEn:
      "Three urgent requests arrive the same day. Describe how to integrate them without blindly breaking order.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Qui gère typiquement le contenu et l'ordre du backlog produit ?",
      promptEn: "Who typically manages product backlog content and order?",
      explanationCorrectFr: "Le Product Owner.",
      explanationCorrectEn: "The Product Owner.",
      difficulty: 2,
      options: [
        opt("Le Scrum Master seul", "The Scrum Master alone", false),
        opt("Le Product Owner", "The Product Owner", true),
        opt("Le sponsor uniquement", "The sponsor only", false),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "prioritization-techniques",
    titleFr: "Techniques de priorisation",
    titleEn: "Prioritization Techniques",
    descriptionFr:
      "Arbitrer valeur, risque et effort avec des cadres reproductibles (WSJF, MoSCoW, etc.).",
    descriptionEn:
      "Arbitrate value, risk, and effort with repeatable frameworks (WSJF, MoSCoW, etc.).",
    moduleSlug: MOD,
    sortOrder: 3,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "backlog",
    learningObjective: "DECIDE",
    objectiveFr:
      "Appliquer MoSCoW et une logique WSJF simplifiée sur un mini-backlog FlowMart.",
    objectiveEn:
      "Apply MoSCoW and simplified WSJF logic on a mini FlowMart backlog.",
    explanationFr:
      "Prioriser sans méthode mène aux « urgences » du dernier demandeur. MoSCoW classe : Must (indispensable), Should (important), Could (si capacité), Won't (hors scope actuel). WSJF (Weighted Shortest Job First) compare valeur / taille / risque : prioriser ce qui apporte le plus de valeur pour le plus petit effort et le risque le plus urgent. FlowMart sprint suivant : (A) fix bug paiement −2 % conversion [Must, WSJF élevé] ; (B) animation promo Noël [Should] ; (C) thème sombre [Could]. Matrice valeur/effort : quadrant « quick wins » en premier, « projets majeurs » planifiés, « remplissage » en dernier. La priorisation est un dialogue avec les parties prenantes — pas une formule magique exécutée en secret.",
    explanationEn:
      "Prioritizing without method leads to the last requester's “urgencies.” MoSCoW classifies: Must (essential), Should (important), Could (if capacity), Won't (out of current scope). WSJF compares value / size / risk: prioritize what delivers most value for smallest effort and most urgent risk. FlowMart next sprint: (A) payment bug fix −2% conversion [Must, high WSJF]; (B) Christmas promo animation [Should]; (C) dark theme [Could]. Value/effort matrix: “quick wins” quadrant first, “major projects” planned, “fill-ins” last. Prioritization is stakeholder dialogue — not a secret magic formula.",
    exampleFr:
      "FlowMart WSJF simplifié : bug paiement (valeur 10, effort 2, risque 9) bat thème sombre (valeur 3, effort 5, risque 1).",
    exampleEn:
      "FlowMart simplified WSJF: payment bug (value 10, effort 2, risk 9) beats dark theme (value 3, effort 5, risk 1).",
    practicalFr:
      "Classez 4 items de votre backlog réel en MoSCoW — un seul Must.",
    practicalEn:
      "Classify 4 items from your real backlog in MoSCoW — only one Must.",
    mistakeFr:
      "Prioriser par volume de plaintes sans quantifier l'impact business.",
    mistakeEn:
      "Prioritizing by complaint volume without quantifying business impact.",
    takeawayFr:
      "Priorisation = valeur + risque + effort, rendue visible et discutée.",
    takeawayEn:
      "Prioritization = value + risk + effort, made visible and discussed.",
    decisionFr:
      "Documenter le « pourquoi » du top 3 du backlog pour résister aux pressions ad hoc.",
    decisionEn:
      "Document the “why” of the backlog top 3 to resist ad hoc pressure.",
    flashcardFrontFr: "MoSCoW",
    flashcardFrontEn: "MoSCoW",
    flashcardBackFr: "Must / Should / Could / Won't — clarifier le scope minimum.",
    flashcardBackEn: "Must / Should / Could / Won't — clarify minimum scope.",
    exercisePromptFr:
      "FlowMart : 3 Must identifiés pour un sprint de 2 semaines. Que faites-vous ? (couper, négocier, étaler)",
    exercisePromptEn:
      "FlowMart: 3 Must items for a 2-week sprint. What do you do? (cut, negotiate, spread)",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "En MoSCoW, combien de catégories « Must » un sprint réaliste devrait-il viser ?",
      promptEn: "In MoSCoW, how many “Must” categories should a realistic sprint target?",
      explanationCorrectFr:
        "Peu — un Must est indispensable ; plusieurs Must signalent un scope irréaliste.",
      explanationCorrectEn:
        "Few — one Must is essential; many Musts signal unrealistic scope.",
      difficulty: 2,
      options: [
        opt("Autant que possible", "As many as possible", false),
        opt("Le minimum vital — typiquement 1 objectif clair", "The vital minimum — typically one clear goal", true),
        opt("Aucun — tout est Could", "None — everything is Could", false),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "product-ownership",
    titleFr: "Product ownership",
    titleEn: "Product Ownership",
    descriptionFr:
      "Maximiser la valeur produit : prioriser, clarifier, accepter — sans micro-manager le « comment ».",
    descriptionEn:
      "Maximize product value: prioritize, clarify, accept — without micromanaging the “how”.",
    moduleSlug: MOD,
    sortOrder: 4,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "product-ownership",
    learningObjective: "DECIDE",
    objectiveFr:
      "Délimiter les décisions PO (quoi/pourquoi) vs équipe (comment) sur un cas FlowMart.",
    objectiveEn:
      "Separate PO decisions (what/why) vs team (how) on a FlowMart case.",
    explanationFr:
      "Le Product Owner (PO) maximise la valeur du produit en représentant les parties prenantes, en priorisant le backlog et en acceptant ou rejetant les incréments. Il clarifie les critères d'acceptation et arbitre les trade-offs valeur/effort. Il ne prescrit pas l'architecture ni les tâches techniques — c'est le « comment » de l'équipe. FlowMart : le PO refuse une story « refonte complète du moteur de recherche » au sprint 3 (valeur différée) mais valide « filtres catégorie » (impact conversion mesurable). Un PO absent (50 % sur d'autres projets) crée des priorités floues et du rework : l'équipe devine. Un PO disponible 2 h/jour avec autorité de priorisation suffit souvent mieux qu'un PO nominal sans mandat.",
    explanationEn:
      "The Product Owner (PO) maximizes product value by representing stakeholders, prioritizing the backlog, and accepting or rejecting increments. They clarify acceptance criteria and arbitrate value/effort trade-offs. They do not prescribe architecture or technical tasks — that is the team's “how.” FlowMart: the PO rejects a “full search engine rewrite” story in sprint 3 (deferred value) but validates “category filters” (measurable conversion impact). An absent PO (50% on other projects) creates fuzzy priorities and rework: the team guesses. A PO available 2 h/day with prioritization authority often works better than a nominal PO without mandate.",
    exampleFr:
      "PO FlowMart : « Pourquoi filtres catégorie ? » → +8 % clics produit. « Comment ? » → laissé à l'équipe.",
    exampleEn:
      "FlowMart PO: “Why category filters?” → +8% product clicks. “How?” → left to the team.",
    practicalFr:
      "Identifiez une décision récente : était-ce du quoi, pourquoi, ou comment ? Qui devait la prendre ?",
    practicalEn:
      "Identify a recent decision: was it what, why, or how? Who should have owned it?",
    mistakeFr:
      "PO qui assigne des tâches techniques individuelles — il devient chef de projet déguisé.",
    mistakeEn:
      "PO assigning individual technical tasks — becoming a disguised project manager.",
    takeawayFr:
      "PO = valeur + priorisation + acceptation — pas micro-management technique.",
    takeawayEn:
      "PO = value + prioritization + acceptance — not technical micromanagement.",
    decisionFr:
      "Chaque story : le PO peut-il expliquer la valeur business en une phrase ?",
    decisionEn:
      "For each story: can the PO explain business value in one sentence?",
    flashcardFrontFr: "Product Owner",
    flashcardFrontEn: "Product Owner",
    flashcardBackFr: "Maximise valeur ; quoi/pourquoi — l'équipe décide comment.",
    flashcardBackEn: "Maximizes value; what/why — team decides how.",
    exercisePromptFr:
      "Un directeur demande une feature non priorisée. Rédigez la réponse du PO en 3 points (valeur, ordre, alternative).",
    exercisePromptEn:
      "A director requests an unprioritized feature. Draft the PO response in 3 points (value, order, alternative).",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Un directeur demande une refonte complète du moteur de recherche au sprint 3. Réponse PO appropriée ?",
      promptEn: "A director requests a full search engine rewrite in sprint 3. Appropriate PO response?",
      explanationCorrectFr: "Refuser ou reporter avec justification valeur — le PO définit quoi/pourquoi, pas le comment technique.",
      explanationCorrectEn: "Reject or defer with value rationale — PO defines what/why, not technical how.",
      difficulty: 2,
      options: [
        opt("Assigner immédiatement la tâche au dev senior", "Immediately assign the task to the senior dev", false, "Assigner des tâches techniques = micro-management du PO.", "Assigning technical tasks = PO micromanagement."),
        opt("Reporter avec justification valeur et proposer alternative plus petite", "Defer with value rationale and propose smaller alternative", true),
        opt("Accepter sans discussion pour satisfaire le directeur", "Accept without discussion to satisfy the director", false, "Céder sans priorisation dégrade le sprint goal.", "Yielding without prioritization harms the sprint goal."),
        opt("Définir l'architecture technique du moteur", "Define the search engine technical architecture", false, "Le « comment » appartient à l'équipe.", "The “how” belongs to the team."),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "iteration-planning",
    titleFr: "Planification d'itération",
    titleEn: "Iteration Planning",
    descriptionFr:
      "Engager l'équipe sur un objectif d'itération réaliste à partir du backlog prêt.",
    descriptionEn:
      "Commit the team to a realistic iteration goal from ready backlog items.",
    moduleSlug: MOD,
    sortOrder: 5,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-agile",
    learningObjective: "APPLY",
    objectiveFr:
      "Faciliter un sprint/iteration planning : goal, capacité, sélection backlog.",
    objectiveEn:
      "Facilitate sprint/iteration planning: goal, capacity, backlog selection.",
    explanationFr:
      "La planification d'itération transforme le backlog priorisé en engagement de l'équipe pour la durée fixe. Étapes clés : (1) rappeler la vélocité/capacité récente ; (2) définir un iteration goal (objectif cohérent, pas une liste de tickets) ; (3) sélectionner les stories « ready » jusqu'à saturation réaliste ; (4) découper ou reporter si le scope dépasse. FlowMart sprint 4 : goal « réduire abandon paiement de 34 % à 25 % » — stories : pré-remplissage adresse, retry CB, message d'erreur clair. Capacité : 60 points, vélocité moyenne 55 — l'équipe prend 52 points et garde une story buffer. Le planning ne micro-planifie pas chaque heure : il fixe l'objectif et le périmètre ; l'équipe s'auto-organise au daily.",
    explanationEn:
      "Iteration planning turns the prioritized backlog into team commitment for a fixed duration. Key steps: (1) recall recent velocity/capacity; (2) define an iteration goal (coherent objective, not a ticket list); (3) select “ready” stories until realistically full; (4) split or defer if scope exceeds. FlowMart sprint 4: goal “reduce payment abandonment from 34% to 25%” — stories: address prefill, card retry, clear error message. Capacity: 60 points, average velocity 55 — team takes 52 points and keeps one buffer story. Planning does not micro-schedule every hour: it sets goal and scope; the team self-organizes in daily sync.",
    exampleFr:
      "FlowMart : goal mesurable + 3 stories liées — pas 15 stories sans fil rouge.",
    exampleEn:
      "FlowMart: measurable goal + 3 linked stories — not 15 unrelated stories.",
    practicalFr:
      "Rédigez un iteration goal en une phrase pour votre prochain cycle — avec un indicateur.",
    practicalEn:
      "Write a one-sentence iteration goal for your next cycle — with one metric.",
    mistakeFr:
      "Planifier 100 % de la capacité sans marge — tout imprévu devient un échec de sprint.",
    mistakeEn:
      "Planning 100% capacity with no margin — every surprise becomes sprint failure.",
    takeawayFr:
      "Planning d'itération = goal + capacité + stories ready — engagement réaliste.",
    takeawayEn:
      "Iteration planning = goal + capacity + ready stories — realistic commitment.",
    decisionFr:
      "Si le backlog dépasse la capacité : couper scope ou repousser — jamais compresser la qualité en silence.",
    decisionEn:
      "If backlog exceeds capacity: cut scope or defer — never silently compress quality.",
    flashcardFrontFr: "Iteration goal",
    flashcardFrontEn: "Iteration goal",
    flashcardBackFr: "Objectif cohérent de l'itération — pas une simple liste de tâches.",
    flashcardBackEn: "Coherent iteration objective — not just a task list.",
    exercisePromptFr:
      "Capacité 50 pts, demandes 70 pts. Listez votre processus de coupe (critères + ordre).",
    exercisePromptEn:
      "Capacity 50 pts, requests 70 pts. List your cut process (criteria + order).",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Quel élément distingue un bon iteration goal ?",
      promptEn: "What distinguishes a good iteration goal?",
      explanationCorrectFr:
        "Un objectif cohérent et mesurable, pas une accumulation de tickets.",
      explanationCorrectEn:
        "A coherent, measurable objective, not a pile of tickets.",
      difficulty: 2,
      options: [
        opt("Contenir le maximum de stories", "Contain maximum stories", false),
        opt(
          "Objectif cohérent avec indicateur de succès",
          "Coherent objective with success indicator",
          true
        ),
        opt("Reprendre tout le backlog", "Take entire backlog", false),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "sprint-concepts",
    titleFr: "Concepts de sprint",
    titleEn: "Sprint Concepts",
    descriptionFr:
      "Timebox, sprint goal, événements Scrum et protection du scope en cours de sprint.",
    descriptionEn:
      "Timebox, sprint goal, Scrum events, and protecting scope during the sprint.",
    moduleSlug: MOD,
    sortOrder: 6,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "sprint-concepts",
    learningObjective: "APPLY",
    objectiveFr:
      "Nommer le rôle de chaque événement Scrum et ce qui est protégé pendant le sprint.",
    objectiveEn:
      "Name each Scrum event's role and what is protected during the sprint.",
    explanationFr:
      "Un sprint est un timebox (souvent 2 semaines) pour produire un incrément « Done » vers le sprint goal. Événements : Sprint Planning (quoi + comment initial) ; Daily Scrum (sync 15 min, plan des 24 h) ; Sprint Review (démo + feedback parties prenantes) ; Retrospective (amélioration processus). Le scope engagé est protégé : les changements majeurs passent par le backlog pour le sprint suivant, sauf annulation du sprint si le goal devient obsolète. FlowMart sprint 5 : le commercial exige une promo flash mid-sprint — réponse : documenter, quantifier valeur, planifier sprint 6 ou négocier un swap explicite. Confondre daily (sync équipe) et review (feedback externe) est une erreur fréquente en examen et en pratique.",
    explanationEn:
      "A sprint is a timebox (often 2 weeks) to produce a “Done” increment toward the sprint goal. Events: Sprint Planning (what + initial how); Daily Scrum (15 min sync, next 24 h plan); Sprint Review (demo + stakeholder feedback); Retrospective (process improvement). Committed scope is protected: major changes go through the backlog for the next sprint, unless the sprint is cancelled if the goal becomes obsolete. FlowMart sprint 5: sales demands a flash promo mid-sprint — response: document, quantify value, plan sprint 6 or negotiate explicit swap. Confusing daily (team sync) and review (external feedback) is a common exam and practice mistake.",
    exampleFr:
      "FlowMart : review sprint 5 montre +12 % conversion — feedback alimente le backlog sprint 6.",
    exampleEn:
      "FlowMart: sprint 5 review shows +12% conversion — feedback feeds sprint 6 backlog.",
    practicalFr:
      "Associez chaque événement Scrum à sa question centrale (planifier / sync / inspecter produit / améliorer).",
    practicalEn:
      "Match each Scrum event to its central question (plan / sync / inspect product / improve).",
    mistakeFr:
      "Annuler la review « faute de temps » — c'est là que le feedback utilisateur arrive.",
    mistakeEn:
      "Skipping review “for lack of time” — that is where user feedback arrives.",
    takeawayFr:
      "Sprint = timebox + goal + incrément Done ; scope protégé, feedback en review.",
    takeawayEn:
      "Sprint = timebox + goal + Done increment; protected scope, feedback in review.",
    decisionFr:
      "Demande mid-sprint : protéger le goal ou annuler le sprint — pas insertion silencieuse.",
    decisionEn:
      "Mid-sprint request: protect goal or cancel sprint — not silent insertion.",
    flashcardFrontFr: "Sprint review",
    flashcardFrontEn: "Sprint review",
    flashcardBackFr: "Démo de l'incrément + feedback parties prenantes.",
    flashcardBackEn: "Increment demo + stakeholder feedback.",
    exercisePromptFr:
      "Définissez un sprint goal et les 4 événements pour un sprint FlowMart de 2 semaines.",
    exercisePromptEn:
      "Define a sprint goal and the 4 events for a 2-week FlowMart sprint.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Quel événement Scrum démontre l'incrément aux parties prenantes ?",
      promptEn: "Which Scrum event demos the increment to stakeholders?",
      explanationCorrectFr: "La sprint review.",
      explanationCorrectEn: "The sprint review.",
      difficulty: 2,
      options: [
        opt("Daily standup", "Daily standup", false),
        opt("Sprint review", "Sprint review", true),
        opt("Sprint retrospective", "Sprint retrospective", false),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "definition-of-done",
    titleFr: "Definition of Done",
    titleEn: "Definition of Done",
    descriptionFr:
      "Critères partagés pour qu'un incrément soit réellement terminé et livrable.",
    descriptionEn:
      "Shared criteria for when an increment is truly finished and shippable.",
    moduleSlug: MOD,
    sortOrder: 7,
    estimatedMinutes: 7,
    difficulty: "BEGINNER",
    skillSlug: "pmp-agile",
    learningObjective: "IDENTIFY",
    isShort: true,
    shortDurationSeconds: 170,
    objectiveFr:
      "Rédiger une Definition of Done (DoD) minimale mais vérifiable pour FlowMart.",
    objectiveEn:
      "Draft a minimal but verifiable Definition of Done (DoD) for FlowMart.",
    explanationFr:
      "La Definition of Done (DoD) est l'accord de l'équipe sur ce que « terminé » signifie — au-delà du code écrit. FlowMart DoD exemple : code revu, tests automatisés passants, pas de bug critique, déployé en staging, critères d'acceptation validés par le PO, documentation release note. Sans DoD, « c'est fini » signifie des choses différentes pour dev, PO et support — dette technique et rework. La DoD peut évoluer (ajouter perf, accessibilité) mais s'applique à chaque story de l'incrément. Attention : DoD (qualité produit) ≠ critères d'acceptation d'une story (besoin spécifique).",
    explanationEn:
      "The Definition of Done (DoD) is the team's agreement on what “done” means — beyond code written. FlowMart DoD example: code reviewed, automated tests passing, no critical bugs, deployed to staging, acceptance criteria validated by PO, release note doc. Without DoD, “it's done” means different things for dev, PO, and support — tech debt and rework. DoD can evolve (add perf, accessibility) but applies to every increment story. Note: DoD (product quality) ≠ a story's acceptance criteria (specific need).",
    exampleFr:
      "Story « paiement CB » : critères = retry 3 fois ; DoD = tests + staging + PO OK.",
    exampleEn:
      "Story “card payment”: criteria = retry 3 times; DoD = tests + staging + PO OK.",
    practicalFr:
      "Listez 5 items pour une DoD d'équipe — vérifiables objectivement.",
    practicalEn:
      "List 5 items for a team DoD — objectively verifiable.",
    mistakeFr:
      "Confondre « dev terminé » et « incrément Done » — sans tests ni déploiement.",
    mistakeEn:
      "Confusing “dev complete” and “Done increment” — without tests or deployment.",
    takeawayFr:
      "DoD = barre de qualité commune — chaque story de l'incrément la respecte.",
    takeawayEn:
      "DoD = shared quality bar — every increment story meets it.",
    decisionFr:
      "Avant la review : l'incrément satisfait-il toute la DoD ? Sinon, pas « Done ».",
    decisionEn:
      "Before review: does the increment meet full DoD? If not, not “Done”.",
    flashcardFrontFr: "Definition of Done",
    flashcardFrontEn: "Definition of Done",
    flashcardBackFr: "Critères partagés « terminé » — qualité livrable.",
    flashcardBackEn: "Shared “done” criteria — shippable quality.",
    exercisePromptFr:
      "Une story est « code OK » mais pas testée. Est-elle Done ? Justifiez avec DoD vs critères d'acceptation.",
    exercisePromptEn:
      "A story is “code OK” but untested. Is it Done? Justify using DoD vs acceptance criteria.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Story FlowMart « code OK » mais sans tests ni staging. Statut Done ?",
      promptEn: "FlowMart story “code OK” but no tests or staging. Done status?",
      explanationCorrectFr: "Non — la DoD exige tests, staging et validation PO pour chaque item de l'incrément.",
      explanationCorrectEn: "No — DoD requires tests, staging, and PO validation for each increment item.",
      difficulty: 2,
      options: [
        opt("Oui, le dev a terminé", "Yes, dev is finished", false, "« Dev terminé » ≠ Done selon la DoD.", "“Dev finished” ≠ Done per DoD."),
        opt("Non, la DoD n'est pas satisfaite", "No, DoD is not met", true),
        opt("Oui, si le PO est pressé", "Yes, if the PO is rushed", false, "La DoD ne se négocie pas story par story sous pression.", "DoD is not negotiated per story under pressure."),
        opt("Oui, les tests viendront plus tard", "Yes, tests will come later", false, "Reporter les tests crée de la dette et viole la DoD.", "Deferring tests creates debt and violates DoD."),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "feedback",
    titleFr: "Feedback et adaptation",
    titleEn: "Feedback and Adaptation",
    descriptionFr:
      "Transformer assumptions en connaissances via feedback utilisateur et métriques.",
    descriptionEn:
      "Turn assumptions into knowledge through user feedback and metrics.",
    moduleSlug: MOD,
    sortOrder: 8,
    estimatedMinutes: 9,
    difficulty: "BEGINNER",
    skillSlug: "pmp-agile",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Identifier sources de feedback et boucles d'adaptation sur FlowMart.",
    objectiveEn:
      "Identify feedback sources and adaptation loops on FlowMart.",
    explanationFr:
      "Le feedback convertit les hypothèses en faits. Sources : utilisateurs (interviews, review sprint), analytics (conversion, temps de tâche), support (tickets récurrents), équipe (rétrospective). L'adaptation répond en ajustant backlog, design ou processus — pas en ignorant le signal. FlowMart : analytics montrent 60 % d'abandon mobile au champ CVV — hypothèse « les users comprennent » invalidée. Adaptation : autofill + aide visuelle + test A/B. Retarder le feedback (releases trimestrielles sans démo) multiplie le coût du changement. Un bon PM agile installe des boucles courtes : démo bi-hebdo, métriques visibles, seuils d'alerte.",
    explanationEn:
      "Feedback converts hypotheses into facts. Sources: users (interviews, sprint review), analytics (conversion, task time), support (recurring tickets), team (retrospective). Adaptation responds by adjusting backlog, design, or process — not ignoring the signal. FlowMart: analytics show 60% mobile drop at CVV field — “users understand” hypothesis invalidated. Adaptation: autofill + visual help + A/B test. Delaying feedback (quarterly releases without demo) multiplies change cost. A good agile PM installs short loops: biweekly demo, visible metrics, alert thresholds.",
    exampleFr:
      "FlowMart : ticket support « paiement refusé sans message » × 40/semaine → story prioritaire sprint 6.",
    exampleEn:
      "FlowMart: support ticket “payment refused with no message” × 40/week → priority story sprint 6.",
    practicalFr:
      "Listez 3 sources de feedback pour votre produit et la fréquence idéale de chacune.",
    practicalEn:
      "List 3 feedback sources for your product and ideal frequency for each.",
    mistakeFr:
      "Collecter des metrics sans boucle de décision — « on regarde le dashboard parfois ».",
    mistakeEn:
      "Collecting metrics without a decision loop — “we sometimes look at the dashboard.”",
    takeawayFr:
      "Feedback → décision → adaptation — boucles courtes, coût de changement bas.",
    takeawayEn:
      "Feedback → decision → adaptation — short loops, lower change cost.",
    decisionFr:
      "Chaque assumption critique : quelle preuve avant le prochain sprint ?",
    decisionEn:
      "For each critical assumption: what evidence before the next sprint?",
    flashcardFrontFr: "Boucle de feedback",
    flashcardFrontEn: "Feedback loop",
    flashcardBackFr: "Hypothèse → mesure → adaptation du backlog ou produit.",
    flashcardBackEn: "Hypothesis → measure → adapt backlog or product.",
    exercisePromptFr:
      "Une métrique chute de 15 %. Décrivez les 3 premières actions (inspecter, confirmer, adapter).",
    exercisePromptEn:
      "A metric drops 15%. Describe the first 3 actions (inspect, confirm, adapt).",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Pourquoi le feedback early réduit le coût du changement ?",
      promptEn: "Why does early feedback reduce the cost of change?",
      explanationCorrectFr:
        "Corriger tôt limite le travail basé sur de mauvaises assumptions.",
      explanationCorrectEn:
        "Correcting early limits work built on wrong assumptions.",
      difficulty: 2,
      options: [
        opt("Parce que le changement est interdit après", "Because change is forbidden after", false),
        opt(
          "Corriger tôt limite le travail basé sur de mauvaises assumptions",
          "Early correction limits work based on wrong assumptions",
          true
        ),
        opt("Parce que les users ne changent jamais d'avis", "Because users never change their minds", false),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "retrospective",
    titleFr: "Rétrospective",
    titleEn: "Retrospective",
    descriptionFr:
      "Améliorer processus et collaboration avec des actions concrètes et suivies.",
    descriptionEn:
      "Improve process and collaboration with concrete, tracked actions.",
    moduleSlug: MOD,
    sortOrder: 9,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: "pmp-agile",
    learningObjective: "APPLY",
    objectiveFr:
      "Animer une rétrospective produisant 1–2 actions SMART assignées.",
    objectiveEn:
      "Facilitate a retrospective producing 1–2 assigned SMART actions.",
    explanationFr:
      "La rétrospective inspecte comment l'équipe a travaillé — pas seulement le produit. Formats : Start/Stop/Continue, 4L (Liked, Learned, Lacked, Longed for), timeline des événements. FlowMart retro sprint 5 : « Stop » — PR sans relecture ; « Start » — pair review obligatoire ; « Continue » — daily à 9h30. Actions : (1) template PR checklist — owner Dev A, due sprint 6 mid ; (2) rappel daily dans Slack — owner Scrum Master. Sans suivi, la retro devient un rituel vide — les mêmes problèmes reviennent. La retro est un espace sécurisé : critiquer le processus, pas les personnes. Le PM facilite ou délègue au Scrum Master ; le sponsor n'impose pas ses solutions.",
    explanationEn:
      "The retrospective inspects how the team worked — not only the product. Formats: Start/Stop/Continue, 4L (Liked, Learned, Lacked, Longed for), event timeline. FlowMart sprint 5 retro: “Stop” — PRs without review; “Start” — mandatory pair review; “Continue” — daily at 9:30. Actions: (1) PR checklist template — owner Dev A, due sprint 6 mid; (2) daily reminder in Slack — owner Scrum Master. Without follow-up, retro becomes empty ritual — same problems return. Retro is a safe space: critique process, not people. PM facilitates or delegates to Scrum Master; sponsor does not impose solutions.",
    exampleFr:
      "FlowMart : action retro sprint 4 « limiter WIP » — WIP réduit de 8 à 5 stories, cycle time −20 %.",
    exampleEn:
      "FlowMart: sprint 4 retro action “limit WIP” — WIP cut from 8 to 5 stories, cycle time −20%.",
    practicalFr:
      "Proposez 2 actions Start/Stop/Continue pour une équipe que vous connaissez.",
    practicalEn:
      "Propose 2 Start/Stop/Continue actions for a team you know.",
    mistakeFr:
      "Retro sans actions assignées — discussion sympathique, zéro changement.",
    mistakeEn:
      "Retro without assigned actions — friendly talk, zero change.",
    takeawayFr:
      "Rétrospective = actions petites, assignées, revues au sprint suivant.",
    takeawayEn:
      "Retrospective = small, assigned actions reviewed next sprint.",
    decisionFr:
      "Ouvrir la retro suivante par le statut des actions — fait ou pas fait.",
    decisionEn:
      "Open the next retro with action status — done or not done.",
    flashcardFrontFr: "Rétrospective",
    flashcardFrontEn: "Retrospective",
    flashcardBackFr: "Améliorer le processus — actions concrètes et suivies.",
    flashcardBackEn: "Improve process — concrete, tracked actions.",
    exercisePromptFr:
      "Rédigez une action SMART issue d'une retro FlowMart (pair review).",
    exercisePromptEn:
      "Write a SMART action from a FlowMart retro (pair review).",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Retro FlowMart : action « pair review obligatoire » sans owner ni date. Problème ?",
      promptEn: "FlowMart retro: “mandatory pair review” action with no owner or date. Problem?",
      explanationCorrectFr: "Sans owner et suivi, l'action ne changera pas le comportement.",
      explanationCorrectEn: "Without owner and follow-up, the action will not change behavior.",
      difficulty: 2,
      options: [
        opt("Aucun — l'intention suffit", "None — intent is enough", false, "Les bonnes intentions sans suivi ne changent pas les habitudes.", "Good intentions without follow-up do not change habits."),
        opt("L'action n'est pas concrète ni suivie", "The action is not concrete or tracked", true),
        opt("Il faut attendre le prochain trimestre", "Wait until next quarter", false, "Reporter le suivi reproduit le même problème au sprint suivant.", "Deferring follow-up repeats the problem next sprint."),
        opt("Le sponsor doit imposer la solution", "The sponsor must impose the solution", false, "La retro est un espace d'équipe — pas command-and-control.", "Retro is a team space — not command-and-control."),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "velocity-and-flow",
    titleFr: "Vélocité et flux",
    titleEn: "Velocity and Flow",
    descriptionFr:
      "Mesurer le débit de l'équipe sans weaponizer la vélocité — focus flux et cycle time.",
    descriptionEn:
      "Measure team throughput without weaponizing velocity — focus flow and cycle time.",
    moduleSlug: MOD,
    sortOrder: 10,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-agile",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Interpréter vélocité, cycle time et WIP pour améliorer le flux FlowMart.",
    objectiveEn:
      "Interpret velocity, cycle time, and WIP to improve FlowMart flow.",
    explanationFr:
      "La vélocité (story points livrés « Done » par sprint) aide à la planification — c'est une métrique d'équipe, pas un KPI de performance individuelle. La weaponiser (comparer équipes, lier aux bonus) fausse les estimations. Le flux (Kanban) regarde cycle time (début → Done), WIP (work in progress) et throughput. FlowMart : vélocité stable ~55 pts mais cycle time monte de 4 à 9 jours — diagnostic : WIP trop élevé (8 stories parallèles). Action retro : WIP limit 5, cycle time redescend. Little's Law (simplifié) : cycle time ≈ WIP / throughput — réduire WIP accélère le flux. Utilisez vélocité pour capacity planning ; cycle time pour diagnostiquer les goulots.",
    explanationEn:
      "Velocity (story points delivered “Done” per sprint) helps planning — it is a team metric, not an individual performance KPI. Weaponizing it (comparing teams, tying to bonuses) distorts estimates. Flow (Kanban) looks at cycle time (start → Done), WIP, and throughput. FlowMart: stable velocity ~55 pts but cycle time rises from 4 to 9 days — diagnosis: WIP too high (8 parallel stories). Retro action: WIP limit 5, cycle time drops. Little's Law (simplified): cycle time ≈ WIP / throughput — reducing WIP speeds flow. Use velocity for capacity planning; cycle time to diagnose bottlenecks.",
    exampleFr:
      "FlowMart : vélocité inchangée, cycle time ×2 → goulot WIP, pas manque d'effort.",
    exampleEn:
      "FlowMart: unchanged velocity, cycle time ×2 → WIP bottleneck, not lack of effort.",
    practicalFr:
      "Si cycle time monte et vélocité stable : quelle hypothèse testez-vous en premier (WIP, blocages, DoD) ?",
    practicalEn:
      "If cycle time rises and velocity is stable: which hypothesis do you test first (WIP, blockers, DoD)?",
    mistakeFr:
      "Comparer la vélocité de deux équipes différentes — les points ne sont pas normalisés.",
    mistakeEn:
      "Comparing velocity across two different teams — points are not normalized.",
    takeawayFr:
      "Vélocité = planification ; cycle time + WIP = diagnostic de flux.",
    takeawayEn:
      "Velocity = planning; cycle time + WIP = flow diagnosis.",
    decisionFr:
      "Avant d'exiger « plus de vélocité » : inspecter WIP, blocages et qualité de Done.",
    decisionEn:
      "Before demanding “more velocity”: inspect WIP, blockers, and Done quality.",
    flashcardFrontFr: "Cycle time",
    flashcardFrontEn: "Cycle time",
    flashcardBackFr: "Durée début → Done — indicateur de flux.",
    flashcardBackEn: "Start → Done duration — flow indicator.",
    exercisePromptFr:
      "WIP 10, throughput 2 stories/jour. Cycle time approximatif ? Quelle action ?",
    exercisePromptEn:
      "WIP 10, throughput 2 stories/day. Approximate cycle time? What action?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Pourquoi éviter de comparer la vélocité entre équipes ?",
      promptEn: "Why avoid comparing velocity across teams?",
      explanationCorrectFr:
        "Les story points ne sont pas calibrés entre équipes — comparaison trompeuse.",
      explanationCorrectEn:
        "Story points are not calibrated across teams — misleading comparison.",
      difficulty: 2,
      options: [
        opt("Parce que la vélocité est secrète", "Because velocity is secret", false),
        opt(
          "Points non calibrés entre équipes",
          "Points not calibrated across teams",
          true
        ),
        opt("Parce que Kanban n'utilise pas de points", "Because Kanban never uses points", false),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "impediments-management",
    titleFr: "Gestion des impediments",
    titleEn: "Impediments Management",
    descriptionFr:
      "Identifier, escalader et lever les blocages qui ralentissent l'équipe agile.",
    descriptionEn:
      "Identify, escalate, and remove blockers slowing the agile team.",
    moduleSlug: MOD,
    sortOrder: 11,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-agile",
    learningObjective: "DECIDE",
    objectiveFr:
      "Classifier impediments (équipe vs organisation) et choisir la bonne escalade.",
    objectiveEn:
      "Classify impediments (team vs organization) and choose the right escalation.",
    explanationFr:
      "Un impediment bloque ou ralentit l'équipe sans qu'elle puisse le résoudre seule. Exemples FlowMart : accès sandbox paiement refusé 5 jours (externe — escalade PM → IT security) ; manque de compétence React (interne — formation ou pair) ; PO injoignable (rôle — escalade sponsor). Le daily expose les blocages ; le Scrum Master/PM facilite la résolution mais ne fait pas tout le travail à la place de l'équipe. Tracker les impediments (board visible, âge du blocage) évite l'acceptation passive. Impediment > 48 h sans plan = signal de gouvernance. Distinction examen : le PM lève les obstacles organisationnels ; l'équipe résout les problèmes techniques qu'elle maîtrise.",
    explanationEn:
      "An impediment blocks or slows the team without them being able to resolve it alone. FlowMart examples: payment sandbox access denied 5 days (external — PM escalates to IT security); missing React skill (internal — training or pairing); unreachable PO (role — sponsor escalation). Daily exposes blockers; Scrum Master/PM facilitates resolution but does not do all the work for the team. Tracking impediments (visible board, blocker age) avoids passive acceptance. Impediment > 48 h with no plan = governance signal. Exam distinction: PM removes organizational obstacles; team solves technical problems they own.",
    exampleFr:
      "FlowMart : sandbox bloquée J+3 — PM escalade, accès J+5 ; coût : 2 stories reportées.",
    exampleEn:
      "FlowMart: sandbox blocked day 3 — PM escalates, access day 5; cost: 2 stories deferred.",
    practicalFr:
      "Listez 2 impediments récents : équipe pouvait-elle les lever seule ? Qui escalader ?",
    practicalEn:
      "List 2 recent impediments: could the team remove them alone? Who to escalate?",
    mistakeFr:
      "Noter les blocages en retro seulement — trop tard, le sprint est déjà impacté.",
    mistakeEn:
      "Only noting blockers in retro — too late, sprint already impacted.",
    takeawayFr:
      "Impediments visibles, âge tracké, escalade rapide — responsabilité PM/SM.",
    takeawayEn:
      "Visible impediments, tracked age, fast escalation — PM/SM responsibility.",
    decisionFr:
      "Blocage > 2 jours : qui est owner de la levée ? Quelle deadline ?",
    decisionEn:
      "Blocker > 2 days: who owns removal? What deadline?",
    flashcardFrontFr: "Impediment",
    flashcardFrontEn: "Impediment",
    flashcardBackFr: "Blocage que l'équipe ne peut pas lever seule.",
    flashcardBackEn: "Blocker the team cannot remove alone.",
    exercisePromptFr:
      "Sandbox paiement bloquée 5 jours. Rédigez l'escalade (qui, quoi, quand, impact).",
    exercisePromptEn:
      "Payment sandbox blocked 5 days. Draft escalation (who, what, when, impact).",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Qui facilite typiquement la levée des impediments organisationnels ?",
      promptEn: "Who typically facilitates removal of organizational impediments?",
      explanationCorrectFr:
        "Le chef de projet / Scrum Master escalade vers les bonnes autorités.",
      explanationCorrectEn:
        "The project manager / Scrum Master escalates to the right authorities.",
      difficulty: 2,
      options: [
        opt("Uniquement le développeur junior", "Only the junior developer", false),
        opt("Le PM ou Scrum Master", "The PM or Scrum Master", true),
        opt("Personne — l'équipe attend", "Nobody — the team waits", false),
      ],
    }),
  }),
];
