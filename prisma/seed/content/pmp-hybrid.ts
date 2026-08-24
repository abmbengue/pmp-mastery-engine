import { buildPmpLesson, opt, q } from "./pmp-factory";
import type { PmpLesson } from "./pmp-types";

const MOD = "hybrid";

export const PMP_HYBRID_LESSONS: PmpLesson[] = [
  buildPmpLesson({
    slug: "hybrid-project-basics",
    titleFr: "Bases du projet hybride",
    titleEn: "Hybrid Project Basics",
    descriptionFr:
      "Combiner planification structurée et exécution agile selon les composantes du projet.",
    descriptionEn:
      "Combine structured planning and agile execution by project component.",
    moduleSlug: MOD,
    sortOrder: 0,
    estimatedMinutes: 7,
    difficulty: "BEGINNER",
    skillSlug: "hybrid-delivery",
    learningObjective: "IDENTIFY",
    isShort: true,
    shortDurationSeconds: 140,
    objectiveFr:
      "Expliquer pourquoi le hybride est un tailoring conscient, pas un échec de méthode.",
    objectiveEn:
      "Explain why hybrid is conscious tailoring, not method failure.",
    explanationFr:
      "Un projet hybride applique des approches différentes à des parties différentes. Helios Connect modernise une plateforme d'intégration B2B : le socle infrastructure (serveurs, sécurité, conformité PCI) suit un planning prédictif avec jalons et budget verrouillé ; les parcours API et le portail développeur s'exécutent en sprints avec backlog. Le hybride n'est pas « moitié agile raté » — c'est reconnaître que l'incertitude n'est pas uniforme. Le PM trace les frontières : quoi est figé (contrats, régulation), quoi est exploratoire (UX API, documentation interactive). Sans frontières claires, les équipes prédictives et agiles se contredisent en réunion.",
    explanationEn:
      "A hybrid project applies different approaches to different parts. Helios Connect modernizes a B2B integration platform: infrastructure core (servers, security, PCI compliance) follows predictive planning with locked milestones and budget; API journeys and the developer portal run in sprints with a backlog. Hybrid is not “half-failed agile” — it recognizes uncertainty is not uniform. The PM maps boundaries: what is fixed (contracts, regulation), what is exploratory (API UX, interactive docs). Without clear boundaries, predictive and agile teams contradict each other in meetings.",
    exampleFr:
      "Helios : jalon « infra prod ready » (prédictif Q2) + sprints portail API (agile, releases bi-hebdo).",
    exampleEn:
      "Helios: “infra prod ready” milestone (predictive Q2) + API portal sprints (agile, biweekly releases).",
    practicalFr:
      "Sur un projet connu, identifiez une partie stable (prédictif) et une partie incertaine (agile).",
    practicalEn:
      "On a known project, identify one stable part (predictive) and one uncertain part (agile).",
    mistakeFr:
      "Imposer 100 % agile ou 100 % waterfall par dogme — ignorer le contexte réglementaire ou technique.",
    mistakeEn:
      "Imposing 100% agile or 100% waterfall by dogma — ignoring regulatory or technical context.",
    takeawayFr:
      "Hybride = bon outil par composante — pas compromis par défaut.",
    takeawayEn:
      "Hybrid = right tool per component — not default compromise.",
    decisionFr:
      "Cartographier les zones prédictives vs adaptatives avant le kick-off.",
    decisionEn:
      "Map predictive vs adaptive zones before kick-off.",
    flashcardFrontFr: "Projet hybride",
    flashcardFrontEn: "Hybrid project",
    flashcardBackFr: "Prédictif où stable ; agile où l'incertitude domine.",
    flashcardBackEn: "Predictive where stable; agile where uncertainty dominates.",
    exercisePromptFr:
      "Helios : le legal exige un jalon conformité PCI. Quelle zone reste prédictive ? Quelle zone agile ?",
    exercisePromptEn:
      "Helios: legal requires a PCI compliance milestone. Which zone stays predictive? Which agile?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Helios Connect : infra PCI en prédictif, portail API en agile. Pourquoi hybride ?",
      promptEn: "Helios Connect: PCI infra predictive, API portal agile. Why hybrid?",
      explanationCorrectFr: "L'incertitude n'est pas uniforme — tailoring mature par composante.",
      explanationCorrectEn: "Uncertainty is not uniform — mature tailoring per component.",
      difficulty: 2,
      options: [
        opt("Parce que l'équipe ne maîtrise pas Scrum", "Because the team cannot do Scrum", false, "Hybride n'est pas un échec agile.", "Hybrid is not failed agile."),
        opt("Parce que contraintes réglementaires et exploration UX coexistent", "Because regulatory constraints and UX exploration coexist", true),
        opt("Pour éviter toute documentation", "To avoid all documentation", false, "Le hybride conserve souvent des artefacts PMO là où requis.", "Hybrid often keeps PMO artifacts where required."),
        opt("Pour supprimer les jalons", "To remove all milestones", false, "L'infra prédictive garde des jalons — le portail des sprints.", "Predictive infra keeps milestones — portal keeps sprints."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Pourquoi Helios garde l'infra en mode prédictif ?",
        promptEn: "Why does Helios keep infra in predictive mode?",
        explanationCorrectFr:
          "Contraintes réglementaires et faible tolérance au rework sur le socle.",
        explanationCorrectEn:
          "Regulatory constraints and low tolerance for core rework.",
        difficulty: 2,
        options: [
          opt("Parce que l'agile est interdit", "Because agile is forbidden", false),
          opt(
            "Contraintes réglementaires et socle stable",
            "Regulatory constraints and stable core",
            true
          ),
          opt("Parce que l'équipe infra refuse Scrum", "Because infra team rejects Scrum", false),
        ],
      }),
      q({
        type: "TRUE_FALSE",
        promptFr:
          "Le hybride est toujours signe d'une organisation immature.",
        promptEn: "Hybrid is always a sign of an immature organization.",
        explanationCorrectFr:
          "Faux — c'est souvent un tailoring mature face à des contraintes mixtes.",
        explanationCorrectEn:
          "False — it is often mature tailoring facing mixed constraints.",
        difficulty: 1,
        options: [opt("Vrai", "True", false), opt("Faux", "False", true)],
      }),
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Quel risque si les frontières hybrides ne sont pas définies ?",
        promptEn: "What risk if hybrid boundaries are not defined?",
        explanationCorrectFr:
          "Conflits d'autorité et planification incompatible entre équipes.",
        explanationCorrectEn:
          "Authority conflicts and incompatible planning between teams.",
        difficulty: 2,
        options: [
          opt("Plus de vélocité automatique", "Automatic more velocity", false),
          opt(
            "Conflits et planification incompatible",
            "Conflicts and incompatible planning",
            true
          ),
          opt("Suppression des jalons", "Removal of all milestones", false),
        ],
      }),
    ],
  }),

  buildPmpLesson({
    slug: "when-to-use-hybrid",
    titleFr: "Quand utiliser le hybride",
    titleEn: "When to Use Hybrid",
    descriptionFr:
      "Critères de choix : incertitude mixte, régulation, dépendances et maturité organisationnelle.",
    descriptionEn:
      "Selection criteria: mixed uncertainty, regulation, dependencies, and org maturity.",
    moduleSlug: MOD,
    sortOrder: 1,
    estimatedMinutes: 9,
    difficulty: "BEGINNER",
    skillSlug: "hybrid-delivery",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider hybride vs prédictif vs agile pur sur 3 scénarios Helios.",
    objectiveEn:
      "Decide hybrid vs predictive vs pure agile on 3 Helios scenarios.",
    explanationFr:
      "Le hybride convient quand : (1) certaines parties ont exigences stables et auditables (infra, sécurité) ; (2) d'autres parties ont forte incertitude utilisateur (portail, UX) ; (3) des dépendances lient les deux (l'API ne peut pas aller en prod sans infra). Prédictif pur : scope, technologie et régulation figés (migration datacenter certifié). Agile pur : produit digital greenfield sans contrainte lourde. Helios = hybride. Anti-pattern : hybride par défaut pour éviter de choisir — cela double la gouvernance sans raison. Transition : une org 100 % waterfall peut introduire l'agile sur un stream produit tout en gardant PMO prédictif sur le programme — le hybride est aussi un chemin de transformation, pas seulement un état final.",
    explanationEn:
      "Hybrid fits when: (1) some parts have stable, auditable requirements (infra, security); (2) other parts have high user uncertainty (portal, UX); (3) dependencies link both (API cannot go prod without infra). Pure predictive: fixed scope, tech, and regulation (certified datacenter migration). Pure agile: greenfield digital product without heavy constraint. Helios = hybrid. Anti-pattern: hybrid by default to avoid choosing — doubles governance for no reason. Transition: a 100% waterfall org may introduce agile on a product stream while keeping predictive PMO on the program — hybrid is also a transformation path, not only a final state.",
    exampleFr:
      "1) App mobile interne sans compliance → agile pur. 2) Helios B2B PCI → hybride. 3) Remplacement ERP régulé → prédictif.",
    exampleEn:
      "1) Internal mobile app without compliance → pure agile. 2) Helios B2B PCI → hybrid. 3) Regulated ERP replacement → predictive.",
    practicalFr:
      "Évaluez votre projet actuel : % scope stable vs incertain — cela oriente-t-il vers hybride ?",
    practicalEn:
      "Assess your current project: % stable vs uncertain scope — does it point to hybrid?",
    mistakeFr:
      "Choisir hybride pour satisfaire deux sponsors qui veulent des méthodes opposées sans arbitrage.",
    mistakeEn:
      "Choosing hybrid to satisfy two sponsors wanting opposite methods without arbitration.",
    takeawayFr:
      "Hybride quand l'incertitude et la stabilité coexistent — pas pour éviter de décider.",
    takeawayEn:
      "Hybrid when uncertainty and stability coexist — not to avoid deciding.",
    decisionFr:
      "Documenter le « pourquoi hybride » en une page — critères et frontières.",
    decisionEn:
      "Document “why hybrid” in one page — criteria and boundaries.",
    flashcardFrontFr: "Quand hybride ?",
    flashcardFrontEn: "When hybrid?",
    flashcardBackFr: "Incertitude mixte + dépendances + contraintes réglementaires.",
    flashcardBackEn: "Mixed uncertainty + dependencies + regulatory constraints.",
    exercisePromptFr:
      "Projet A : refonte site marketing. Projet B : plateforme paiement. Prédictif, agile ou hybride ? Justifiez.",
    exercisePromptEn:
      "Project A: marketing site redesign. Project B: payment platform. Predictive, agile, or hybrid? Justify.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Quel contexte oriente le plus vers une approche hybride ?",
      promptEn: "Which context most points to a hybrid approach?",
      explanationCorrectFr:
        "Socle réglementaire stable + parcours utilisateur incertain.",
      explanationCorrectEn:
        "Stable regulatory core + uncertain user journeys.",
      difficulty: 2,
      options: [
        opt("Scope 100 % figé dès J1", "Scope 100% fixed from day 1", false),
        opt(
          "Socle stable + UX incertaine liés par dépendances",
          "Stable core + uncertain UX linked by dependencies",
          true
        ),
        opt("Équipe junior sans sponsor", "Junior team without sponsor", false),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "combining-predictive-and-agile",
    titleFr: "Combiner prédictif et agile",
    titleEn: "Combining Predictive and Agile",
    descriptionFr:
      "Pratiques d'intégration : roadmap, WBS programme, backlog produit, interfaces explicites.",
    descriptionEn:
      "Integration practices: roadmap, program WBS, product backlog, explicit interfaces.",
    moduleSlug: MOD,
    sortOrder: 2,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "hybrid-delivery",
    learningObjective: "APPLY",
    objectiveFr:
      "Définir les interfaces entre stream prédictif infra et stream agile portail Helios.",
    objectiveEn:
      "Define interfaces between Helios predictive infra stream and agile portal stream.",
    explanationFr:
      "Combiner les modes exige des « contrats » entre équipes. Pratiques : roadmap avec jalons programme (prédictif) et release trains agiles entre les gates ; WBS ou structure programme pour l'enveloppe budget/temps ; backlog produit pour le stream agile ; budget envelope avec burn rate suivi en agile. Helios : le stream infra livre « environnement prod certifié PCI » au jalon Q2 avec critères d'acceptation documentés ; le stream portail consomme cette capacité via API sandbox disponible au sprint 3. Interface explicite : qui livre quoi, quand, avec quels critères. La communication est le point de rupture n°1 : rituels partagés (sync bi-hebdo PM programme + PO + lead infra) et langage commun (features vs work packages).",
    explanationEn:
      "Combining modes requires “contracts” between teams. Practices: roadmap with program milestones (predictive) and agile release trains between gates; WBS or program structure for budget/time envelope; product backlog for agile stream; budget envelope with agile burn rate tracking. Helios: infra stream delivers “PCI-certified prod environment” at Q2 milestone with documented acceptance criteria; portal stream consumes that capability via sandbox API available sprint 3. Explicit interface: who delivers what, when, with which criteria. Communication is the #1 break point: shared rituals (biweekly sync program PM + PO + infra lead) and common language (features vs work packages).",
    exampleFr:
      "Helios interface : infra → certificat PCI + URL sandbox ; portail → consommation API + feedback sprint review.",
    exampleEn:
      "Helios interface: infra → PCI cert + sandbox URL; portal → API consumption + sprint review feedback.",
    practicalFr:
      "Dessinez une interface livrable entre deux équipes (prédictif ↔ agile) sur un projet réel.",
    practicalEn:
      "Sketch a deliverable interface between two teams (predictive ↔ agile) on a real project.",
    mistakeFr:
      "Un seul outil sans adaptation — forcer Jira agile sur un WBS réglementé ou l'inverse.",
    mistakeEn:
      "One tool without adaptation — forcing agile Jira on a regulated WBS or the reverse.",
    takeawayFr:
      "Intégration hybride = interfaces explicites + rituels de communication partagés.",
    takeawayEn:
      "Hybrid integration = explicit interfaces + shared communication rituals.",
    decisionFr:
      "Chaque dépendance inter-stream : owner, date, critères d'acceptation écrits.",
    decisionEn:
      "Each inter-stream dependency: owner, date, written acceptance criteria.",
    flashcardFrontFr: "Interface hybride",
    flashcardFrontEn: "Hybrid interface",
    flashcardBackFr: "Qui livre quoi, quand, avec quels critères — documenté.",
    flashcardBackEn: "Who delivers what, when, with which criteria — documented.",
    exercisePromptFr:
      "Helios : le portail a besoin du sandbox au sprint 3, infra prévoit Q2. Comment aligner ?",
    exercisePromptEn:
      "Helios: portal needs sandbox sprint 3, infra plans Q2. How to align?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Quel élément est critique en combinant prédictif et agile ?",
      promptEn: "What is critical when combining predictive and agile?",
      explanationCorrectFr: "Interfaces explicites entre modes et équipes.",
      explanationCorrectEn: "Explicit interfaces between modes and teams.",
      difficulty: 2,
      options: [
        opt("Un seul outil sans adaptation", "One tool without adaptation", false),
        opt(
          "Interfaces explicites entre modes et équipes",
          "Explicit interfaces between modes and teams",
          true
        ),
        opt("Interdire toute planification", "Ban all planning", false),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "planning-boundaries-hybrid",
    titleFr: "Frontières de planification hybride",
    titleEn: "Hybrid Planning Boundaries",
    descriptionFr:
      "Délimiter ce qui est planifié en détail (prédictif) vs adaptatif (agile) dans le temps.",
    descriptionEn:
      "Delimit what is detailed-plan (predictive) vs adaptive (agile) over time.",
    moduleSlug: MOD,
    sortOrder: 3,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "hybrid-delivery",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Tracer une boundary chart Helios : horizon prédictif vs rolling agile.",
    objectiveEn:
      "Draw a Helios boundary chart: predictive horizon vs rolling agile.",
    explanationFr:
      "Les frontières de planification définissent jusqu'où le détail est figé. Horizon prédictif : jalons programme, budget phase, contrats fournisseurs — typiquement 6–18 mois avec détail décroissant. Horizon agile : backlog priorisé sur 1–3 sprints visibles, détail fin sur le sprint en cours. Helios : Q1–Q2 infra verrouillé (serveurs, firewalls, audit PCI) ; portail API planifié en rolling 6 semaines avec replanification chaque sprint. Zone grise à gérer : dépendances cross-horizon (sandbox infra requis sprint 3 portail) — traiter comme contrat avec date commitment infra, pas comme « on verra ». Erreur : planifier le portail UX en Gantt 12 mois — faux sentiment de certitude.",
    explanationEn:
      "Planning boundaries define how far detail is fixed. Predictive horizon: program milestones, phase budget, vendor contracts — typically 6–18 months with decreasing detail. Agile horizon: backlog prioritized for 1–3 visible sprints, fine detail on current sprint. Helios: Q1–Q2 infra locked (servers, firewalls, PCI audit); API portal planned in rolling 6 weeks with replanning each sprint. Gray zone to manage: cross-horizon dependencies (infra sandbox needed portal sprint 3) — treat as contract with infra date commitment, not “we'll see.” Mistake: planning portal UX on a 12-month Gantt — false certainty.",
    exampleFr:
      "Helios boundary : infra Gantt Q1–Q2 ; portail backlog rolling ; sync dependency sandbox sprint 3.",
    exampleEn:
      "Helios boundary: infra Gantt Q1–Q2; portal rolling backlog; sandbox dependency sync sprint 3.",
    practicalFr:
      "Sur votre programme : quelle partie mérite un horizon > 6 mois détaillé ? Laquelle ≤ 6 semaines ?",
    practicalEn:
      "On your program: which part deserves > 6 month detailed horizon? Which ≤ 6 weeks?",
    mistakeFr:
      "Appliquer le même niveau de détail planning à l'infra PCI et à l'UX portail.",
    mistakeEn:
      "Applying the same planning detail level to PCI infra and portal UX.",
    takeawayFr:
      "Frontières = horizon prédictif long + rolling agile court — dépendances contractuelles.",
    takeawayEn:
      "Boundaries = long predictive horizon + short agile rolling — contractual dependencies.",
    decisionFr:
      "Toute dépendance cross-boundary : date, owner, plan B si retard.",
    decisionEn:
      "Every cross-boundary dependency: date, owner, plan B if late.",
    flashcardFrontFr: "Rolling planning",
    flashcardFrontEn: "Rolling planning",
    flashcardBackFr: "Détail fin sur horizon court — replanifier chaque cycle.",
    flashcardBackEn: "Fine detail on short horizon — replan each cycle.",
    exercisePromptFr:
      "Dessinez les horizons Helios (infra vs portail) sur une frise 12 mois.",
    exercisePromptEn:
      "Draw Helios horizons (infra vs portal) on a 12-month timeline.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Quelle zone Helios convient au rolling planning agile ?",
      promptEn: "Which Helios zone fits agile rolling planning?",
      explanationCorrectFr:
        "Portail API et UX — forte incertitude utilisateur.",
      explanationCorrectEn:
        "API portal and UX — high user uncertainty.",
      difficulty: 2,
      options: [
        opt("Audit PCI infrastructure", "PCI infrastructure audit", false),
        opt("Portail développeur et parcours API", "Developer portal and API journeys", true),
        opt("Contrat fournisseur serveurs", "Server vendor contract", false),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "mixed-delivery-models",
    titleFr: "Modèles de livraison mixtes",
    titleEn: "Mixed Delivery Models",
    descriptionFr:
      "Orchestrer releases programme, trains agiles et livraisons ponctuelles prédictives.",
    descriptionEn:
      "Orchestrate program releases, agile trains, and predictive one-off deliveries.",
    moduleSlug: MOD,
    sortOrder: 4,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "hybrid-delivery",
    learningObjective: "APPLY",
    objectiveFr:
      "Aligner release train portail et jalon infra Helios sur une cadence commune.",
    objectiveEn:
      "Align portal release train and Helios infra milestone on a common cadence.",
    explanationFr:
      "Modèles mixtes coexistent : livraison prédictive phase-gate (infra Q2) ; release train agile (portail toutes les 4 semaines) ; hotfix ponctuel (patch sécurité). Helios cadence : infra « big gate » Q2 ; entre les gates, le portail ship des incréments API v1.1, v1.2 avec changelog ; patch sécurité infra peut interrompre le train portail 48 h — communiqué via comité de changement allégé. L'artefact « integration point » synchronise : tag Git infra + manifest API compatible. Sans modèle de livraison mixte documenté, le support ne sait pas quelle version est en prod. Le PM publie un calendrier unifié visible : gates, trains, freeze windows.",
    explanationEn:
      "Mixed models coexist: predictive phase-gate delivery (infra Q2); agile release train (portal every 4 weeks); one-off hotfix (security patch). Helios cadence: infra “big gate” Q2; between gates, portal ships API v1.1, v1.2 increments with changelog; infra security patch may pause portal train 48 h — communicated via lightweight change committee. “Integration point” artifact synchronizes: infra Git tag + compatible API manifest. Without documented mixed delivery model, support does not know which version is in prod. PM publishes visible unified calendar: gates, trains, freeze windows.",
    exampleFr:
      "Helios calendrier : gate PCI 15 juin ; trains portail 1er et 15 du mois ; freeze −5 jours gate.",
    exampleEn:
      "Helios calendar: PCI gate June 15; portal trains 1st and 15th; freeze −5 days before gate.",
    practicalFr:
      "Listez vos types de livraison (gate, sprint release, hotfix) et leur fréquence.",
    practicalEn:
      "List your delivery types (gate, sprint release, hotfix) and their frequency.",
    mistakeFr:
      "Cacher les releases portail agiles au comité programme — surprise au gate.",
    mistakeEn:
      "Hiding agile portal releases from program committee — gate surprise.",
    takeawayFr:
      "Modèles mixtes = calendrier unifié + points d'intégration versionnés.",
    takeawayEn:
      "Mixed models = unified calendar + versioned integration points.",
    decisionFr:
      "Avant chaque gate : quelles versions portail sont compatibles infra ?",
    decisionEn:
      "Before each gate: which portal versions are infra-compatible?",
    flashcardFrontFr: "Release train",
    flashcardFrontEn: "Release train",
    flashcardBackFr: "Cadence agile régulière entre les gates programme.",
    flashcardBackEn: "Regular agile cadence between program gates.",
    exercisePromptFr:
      "Helios gate Q2 + train bi-mensuel : où placez-vous une freeze window ? Pourquoi ?",
    exercisePromptEn:
      "Helios Q2 gate + biweekly train: where do you place a freeze window? Why?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Quel artefact synchronise infra prédictif et portail agile ?",
      promptEn: "Which artifact synchronizes predictive infra and agile portal?",
      explanationCorrectFr:
        "Point d'intégration versionné (tag + manifest compatibilité).",
      explanationCorrectEn:
        "Versioned integration point (tag + compatibility manifest).",
      difficulty: 2,
      options: [
        opt("Un Gantt unique 500 lignes", "One 500-line Gantt", false),
        opt(
          "Point d'intégration versionné",
          "Versioned integration point",
          true
        ),
        opt("Absence de calendrier", "No calendar", false),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "tailoring",
    titleFr: "Tailoring",
    titleEn: "Tailoring",
    descriptionFr:
      "Adapter processus, artefacts et cérémonies au contexte Helios — documenté et évolutif.",
    descriptionEn:
      "Adapt processes, artifacts, and ceremonies to Helios context — documented and evolving.",
    moduleSlug: MOD,
    sortOrder: 5,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "hybrid-delivery",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider quels artefacts PMO garder, simplifier ou remplacer en hybride.",
    objectiveEn:
      "Decide which PMO artifacts to keep, simplify, or replace in hybrid.",
    explanationFr:
      "Le tailoring sélectionne et adapte processus selon taille, risque, culture et régulation. Helios tailoring : garder registre risques programme et budget envelope (PMO) ; simplifier PV réunion → compte-rendu async pour équipes agile ; remplacer WBS 4 niveaux portail par backlog + roadmap thématique ; daily 15 min portail, weekly status infra. Documenter les choix (« nous utilisons X, nous simplifions Y ») évite les audits surprises et les débats sans fin. Le tailoring est continu : après le gate Q2, Helios réduit la fréquence des comités infra et augmente l'autonomie portail. Anti-pattern : copier le PMO d'un programme régulé sur une équipe produit de 5 personnes.",
    explanationEn:
      "Tailoring selects and adapts processes by size, risk, culture, and regulation. Helios tailoring: keep program risk register and budget envelope (PMO); simplify meeting minutes → async notes for agile teams; replace 4-level portal WBS with backlog + thematic roadmap; 15 min daily portal, weekly infra status. Document choices (“we use X, we simplify Y”) avoids audit surprises and endless debate. Tailoring is continuous: after Q2 gate, Helios reduces infra committee frequency and increases portal autonomy. Anti-pattern: copying a regulated program PMO onto a 5-person product team.",
    exampleFr:
      "Helios tailoring doc : 1 page — artefacts conservés, simplifiés, abandonnés, revus chaque trimestre.",
    exampleEn:
      "Helios tailoring doc: 1 page — kept, simplified, dropped artifacts, reviewed quarterly.",
    practicalFr:
      "Listez 3 cérémonies de votre org : lesquelles simplifieriez-vous en hybride ?",
    practicalEn:
      "List 3 ceremonies from your org: which would you simplify in hybrid?",
    mistakeFr:
      "Tailoring implicite — chaque équipe invente sa méthode sans alignement programme.",
    mistakeEn:
      "Implicit tailoring — each team invents its method without program alignment.",
    takeawayFr:
      "Tailoring explicite, documenté, révisé — pas one-size-fits-all.",
    takeawayEn:
      "Explicit, documented, reviewed tailoring — not one-size-fits-all.",
    decisionFr:
      "Chaque artefact : valeur vs coût — garder, simplifier ou supprimer.",
    decisionEn:
      "Each artifact: value vs cost — keep, simplify, or drop.",
    flashcardFrontFr: "Tailoring",
    flashcardFrontEn: "Tailoring",
    flashcardBackFr: "Adapter processus au contexte — documenter les choix.",
    flashcardBackEn: "Adapt processes to context — document choices.",
    exercisePromptFr:
      "Helios veut supprimer les PV formels côté portail. Quel artefact PMO garder pour l'audit PCI ?",
    exercisePromptEn:
      "Helios wants to drop formal minutes on portal side. Which PMO artifact to keep for PCI audit?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Helios veut supprimer les PV formels côté portail agile. Bonne pratique tailoring ?",
      promptEn: "Helios wants to drop formal minutes on the agile portal side. Good tailoring practice?",
      explanationCorrectFr: "Documenter explicitement ce qui est simplifié et ce qui reste pour l'audit PCI.",
      explanationCorrectEn: "Explicitly document what is simplified and what remains for PCI audit.",
      difficulty: 2,
      options: [
        opt("Supprimer sans trace pour aller plus vite", "Remove without trace to go faster", false, "Tailoring implicite crée des surprises d'audit.", "Implicit tailoring creates audit surprises."),
        opt("Documenter artefacts conservés vs simplifiés", "Document kept vs simplified artifacts", true),
        opt("Copier le PMO d'un programme régulé à l'identique", "Copy a regulated program PMO exactly", false, "One-size-fits-all ignore le contexte équipe produit.", "One-size-fits-all ignores product team context."),
        opt("Abandonner toute gouvernance", "Abandon all governance", false, "Tailoring adapte — ne supprime pas la gouvernance nécessaire.", "Tailoring adapts — does not remove needed governance."),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "governance-hybrid",
    titleFr: "Gouvernance hybride",
    titleEn: "Hybrid Governance",
    descriptionFr:
      "Aligner comités, gates et autonomie agile sans micro-manager les sprints.",
    descriptionEn:
      "Align committees, gates, and agile autonomy without micromanaging sprints.",
    moduleSlug: MOD,
    sortOrder: 6,
    estimatedMinutes: 10,
    difficulty: "ADVANCED",
    skillSlug: "hybrid-delivery",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Définir ce qui est décidé au gate programme vs en sprint planning Helios.",
    objectiveEn:
      "Define what is decided at Helios program gate vs sprint planning.",
    explanationFr:
      "Gouvernance hybride : décisions stratégiques centralisées (budget majeur, scope programme, conformité) + autonomie d'exécution agile (backlog sprint, technique, retro). Gates vérifient outcomes et risques — pas chaque story. Comité pilotage Helios voit : jalons infra, lead time portail, satisfaction développeurs API, burn rate budget — pas la liste des tâches daily. Matrice RACI simplifiée : gate décide go/no-go phase ; PO décide priorité sprint ; équipe décide implémentation. Conflit classique : sponsor veut une feature au sprint en cours — réponse hybride : escalade valeur au PO + visibilité comité au prochain gate, pas override direct du sprint.",
    explanationEn:
      "Hybrid governance: centralized strategic decisions (major budget, program scope, compliance) + agile execution autonomy (sprint backlog, tech, retro). Gates verify outcomes and risks — not every story. Helios steering sees: infra milestones, portal lead time, API developer satisfaction, budget burn — not daily task lists. Simplified RACI: gate decides phase go/no-go; PO decides sprint priority; team decides implementation. Classic conflict: sponsor wants feature in current sprint — hybrid response: value escalation to PO + committee visibility at next gate, not direct sprint override.",
    exampleFr:
      "Helios gate Q2 : go si PCI OK + budget ±5 % ; pas de review des 47 stories portail.",
    exampleEn:
      "Helios Q2 gate: go if PCI OK + budget ±5%; no review of 47 portal stories.",
    practicalFr:
      "Listez 3 décisions gate vs 3 décisions sprint pour votre contexte.",
    practicalEn:
      "List 3 gate decisions vs 3 sprint decisions for your context.",
    mistakeFr:
      "Comité pilotage qui assiste aux daily standups portail — micro-gouvernance.",
    mistakeEn:
      "Steering committee attending portal daily standups — micro-governance.",
    takeawayFr:
      "Gouvernance hybride = gates sur outcomes + autonomie sur l'exécution.",
    takeawayEn:
      "Hybrid governance = gates on outcomes + autonomy on execution.",
    decisionFr:
      "Documenter gate vs sprint decision rights — une page, partagée au kick-off.",
    decisionEn:
      "Document gate vs sprint decision rights — one page, shared at kick-off.",
    flashcardFrontFr: "Gate de gouvernance",
    flashcardFrontEn: "Governance gate",
    flashcardBackFr: "Valide outcomes, risques, budget — pas chaque tâche.",
    flashcardBackEn: "Validates outcomes, risks, budget — not each task.",
    exercisePromptFr:
      "Sponsor exige feature mid-sprint portail. Quelle réponse gouvernance hybride en 3 étapes ?",
    exercisePromptEn:
      "Sponsor demands mid-sprint portal feature. Hybrid governance response in 3 steps?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "En gouvernance hybride, que vérifie typiquement un gate ?",
      promptEn: "In hybrid governance, what does a gate typically verify?",
      explanationCorrectFr:
        "Outcomes, risques majeurs et alignement budget.",
      explanationCorrectEn:
        "Outcomes, major risks, and budget alignment.",
      difficulty: 3,
      options: [
        opt("Chaque tâche du daily standup", "Each daily standup task", false),
        opt(
          "Outcomes, risques majeurs et budget",
          "Outcomes, major risks, and budget",
          true
        ),
        opt("Rien — les gates sont obsolètes", "Nothing — gates are obsolete", false),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "stakeholder-management-hybrid",
    titleFr: "Parties prenantes en hybride",
    titleEn: "Hybrid Stakeholder Management",
    descriptionFr:
      "Adapter communication et engagement : jalons programme vs feedback sprint.",
    descriptionEn:
      "Adapt communication and engagement: program milestones vs sprint feedback.",
    moduleSlug: MOD,
    sortOrder: 7,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "hybrid-delivery",
    learningObjective: "APPLY",
    objectiveFr:
      "Construire une matrice stakeholders Helios (infra vs portail) avec cadence adaptée.",
    objectiveEn:
      "Build a Helios stakeholder matrix (infra vs portal) with adapted cadence.",
    explanationFr:
      "Les parties prenantes hybrides ont des attentes différentes. Infra : CISO et audit veulent preuves conformité, dates gate, registre risques — communication formelle mensuelle. Portail : développeurs clients veulent démos fréquentes, changelog, sandbox stable — sprint review bi-hebdo + Slack. Erreur : même newsletter pour les deux — le CISO ignore les vélocités, les devs ignorent les PV gate. Helios plan : (1) mapping pouvoir/intérêt ; (2) canal par persona ; (3) messages adaptés (risque/compliance vs valeur/feature). Le PM orchestrateur évite que le PO portail soit seul face au CISO sur PCI — le PM fait le lien programme. Gestion des conflits : arbitrage valeur business au comité, pas en daily.",
    explanationEn:
      "Hybrid stakeholders have different expectations. Infra: CISO and audit want compliance evidence, gate dates, risk register — formal monthly communication. Portal: client developers want frequent demos, changelog, stable sandbox — biweekly sprint review + Slack. Mistake: same newsletter for both — CISO ignores velocities, devs ignore gate minutes. Helios plan: (1) power/interest mapping; (2) channel per persona; (3) adapted messages (risk/compliance vs value/feature). Orchestrator PM prevents portal PO facing CISO alone on PCI — PM links program. Conflict handling: business value arbitration at committee, not in daily.",
    exampleFr:
      "Helios : CISO → dashboard conformité mensuel ; devs API → review + changelog sprint.",
    exampleEn:
      "Helios: CISO → monthly compliance dashboard; API devs → review + sprint changelog.",
    practicalFr:
      "Identifiez 2 stakeholders : quel message et quelle fréquence pour chacun en hybride ?",
    practicalEn:
      "Identify 2 stakeholders: what message and frequency for each in hybrid?",
    mistakeFr:
      "Inviter toutes les parties prenantes à chaque sprint review — bruit et fatigue.",
    mistakeEn:
      "Inviting all stakeholders to every sprint review — noise and fatigue.",
    takeawayFr:
      "Stakeholders hybrides = messages et rituels différenciés, orchestrés par le PM.",
    takeawayEn:
      "Hybrid stakeholders = differentiated messages and rituals, orchestrated by PM.",
    decisionFr:
      "Avant chaque com ou review : quel stakeholder, quel besoin, quel format ?",
    decisionEn:
      "Before each comm or review: which stakeholder, which need, which format?",
    flashcardFrontFr: "Engagement hybride",
    flashcardFrontEn: "Hybrid engagement",
    flashcardBackFr: "Jalons formels (infra) + feedback rapide (portail).",
    flashcardBackEn: "Formal milestones (infra) + fast feedback (portal).",
    exercisePromptFr:
      "Le CISO demande une réunion hebdo sur le portail agile. Que proposez-vous à la place ?",
    exercisePromptEn:
      "CISO wants weekly meeting on agile portal. What do you propose instead?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Comment adapter la communication au CISO vs aux devs API Helios ?",
      promptEn: "How to adapt communication to CISO vs Helios API devs?",
      explanationCorrectFr:
        "Conformité et risques pour CISO ; démos et changelog pour devs.",
      explanationCorrectEn:
        "Compliance and risks for CISO; demos and changelog for devs.",
      difficulty: 2,
      options: [
        opt("Même newsletter vélocité pour tous", "Same velocity newsletter for all", false),
        opt(
          "Conformité/risques vs démos/changelog",
          "Compliance/risks vs demos/changelog",
          true
        ),
        opt("Aucune communication portail", "No portal communication", false),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "risk-management-hybrid",
    titleFr: "Gestion des risques hybride",
    titleEn: "Hybrid Risk Management",
    descriptionFr:
      "Fusionner registre risques programme et risques sprint — sans double comptabilité.",
    descriptionEn:
      "Merge program risk register and sprint risks — without double counting.",
    moduleSlug: MOD,
    sortOrder: 8,
    estimatedMinutes: 10,
    difficulty: "ADVANCED",
    skillSlug: "hybrid-delivery",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Classer risques Helios : programme (prédictif) vs produit (agile) avec propriétaires.",
    objectiveEn:
      "Classify Helios risks: program (predictive) vs product (agile) with owners.",
    explanationFr:
      "Risques hybrides à deux vitesses. Programme/prédictif : retard audit PCI, dépassement budget infra, défaillance fournisseur — probabilité/impact, plans de mitigation, revue mensuelle comité. Produit/agile : faible adoption API, dette technique portail, dépendance sandbox — visibles en retro et sprint review, traités par backlog (spikes, refacto). Helios registre unifié avec tags [PROGRAM] / [PRODUCT] ; risque « sandbox indisponible » = PROGRAM (infra owner) + impact PRODUCT (portail). Éviter double entrée du même risque sous deux noms. Risques émergents agile remontés au programme si impact gate (ex. sécurité API bloque PCI). Réserve management : buffer budget infra prédictif ; capacity buffer sprint portail.",
    explanationEn:
      "Hybrid risks at two speeds. Program/predictive: PCI audit delay, infra budget overrun, vendor failure — probability/impact, mitigation plans, monthly committee review. Product/agile: low API adoption, portal tech debt, sandbox dependency — visible in retro and sprint review, handled via backlog (spikes, refactor). Helios unified register with [PROGRAM] / [PRODUCT] tags; “sandbox unavailable” = PROGRAM (infra owner) + PRODUCT impact (portal). Avoid double entry of same risk under two names. Agile emergent risks escalate to program if gate impact (e.g., API security blocks PCI). Reserve management: predictive infra budget buffer; portal sprint capacity buffer.",
    exampleFr:
      "Helios risque R-14 : retard certificat PCI [PROGRAM] → plan B audit partiel ; impact portail documenté.",
    exampleEn:
      "Helios risk R-14: PCI cert delay [PROGRAM] → partial audit plan B; portal impact documented.",
    practicalFr:
      "Prenez 3 risques : programme ou produit ? Même registre ou sync ?",
    practicalEn:
      "Take 3 risks: program or product? Same register or sync?",
    mistakeFr:
      "Deux registres risques jamais reconciliés — surprises au gate.",
    mistakeEn:
      "Two risk registers never reconciled — gate surprises.",
    takeawayFr:
      "Risques hybrides = registre unifié tagué + escalade si impact gate.",
    takeawayEn:
      "Hybrid risks = tagged unified register + escalation if gate impact.",
    decisionFr:
      "Revue mensuelle : risques PRODUCT devenus PROGRAM — escalade explicite.",
    decisionEn:
      "Monthly review: PRODUCT risks becoming PROGRAM — explicit escalation.",
    flashcardFrontFr: "Risque hybride",
    flashcardFrontEn: "Hybrid risk",
    flashcardBackFr: "Tag PROGRAM vs PRODUCT — owner et lien gate.",
    flashcardBackEn: "Tag PROGRAM vs PRODUCT — owner and gate link.",
    exercisePromptFr:
      "Sandbox retard 3 semaines : risque PROGRAM, PRODUCT ou les deux ? Plan mitigation ?",
    exercisePromptEn:
      "Sandbox late 3 weeks: PROGRAM, PRODUCT, or both? Mitigation plan?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Comment éviter la double comptabilité des risques hybrides ?",
      promptEn: "How to avoid double counting hybrid risks?",
      explanationCorrectFr:
        "Registre unifié avec tags et owner unique par risque.",
      explanationCorrectEn:
        "Unified register with tags and single owner per risk.",
      difficulty: 3,
      options: [
        opt("Deux registres séparés sans sync", "Two separate registers without sync", false),
        opt(
          "Registre unifié tagué PROGRAM/PRODUCT",
          "Unified register tagged PROGRAM/PRODUCT",
          true
        ),
        opt("Ignorer les risques agile", "Ignore agile risks", false),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "delivery-strategy",
    titleFr: "Stratégie de livraison",
    titleEn: "Delivery Strategy",
    descriptionFr:
      "Définir cadence, critères de succès et assemblage des incréments en valeur business.",
    descriptionEn:
      "Define cadence, success criteria, and how increments assemble into business value.",
    moduleSlug: MOD,
    sortOrder: 9,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "hybrid-delivery",
    learningObjective: "DECIDE",
    objectiveFr:
      "Rédiger une stratégie de livraison Helios : gates majeurs + incréments continus.",
    objectiveEn:
      "Draft a Helios delivery strategy: major gates + continuous increments.",
    explanationFr:
      "La stratégie de livraison hybride articule comment la valeur atteint les utilisateurs. Helios : releases majeures alignées gates (infra prod PCI Q2, portail v2.0 au gate) ; incréments mineurs portail toutes les 2 semaines entre gates ; critères de succès mixtes — conformité (0 finding audit critique) + adoption API (500 devs actifs 90 jours post-gate). Done partagé : infra DoD réglementaire ≠ portail DoD produit, mais « integration point » commun avant mise en prod client. Changer de stratégie sans communication (ex. passer de trains mensuels à hebdo) casse les dépendances support et marketing. Le PM publie la stratégie en une page : cadence, critères, freeze, rollback.",
    explanationEn:
      "Hybrid delivery strategy articulates how value reaches users. Helios: major releases aligned to gates (PCI prod infra Q2, portal v2.0 at gate); minor portal increments every 2 weeks between gates; mixed success criteria — compliance (0 critical audit findings) + API adoption (500 active devs 90 days post-gate). Shared done: regulatory infra DoD ≠ product portal DoD, but common “integration point” before client prod. Changing strategy without communication (e.g., monthly to weekly trains) breaks support and marketing dependencies. PM publishes strategy in one page: cadence, criteria, freeze, rollback.",
    exampleFr:
      "Helios stratégie : gate Q2 + trains portail 1/15 + KPI conformité + KPI adoption API.",
    exampleEn:
      "Helios strategy: Q2 gate + portal trains 1st/15th + compliance KPI + API adoption KPI.",
    practicalFr:
      "Définissez 1 critère de succès prédictif et 1 agile pour votre programme.",
    practicalEn:
      "Define 1 predictive and 1 agile success criterion for your program.",
    mistakeFr:
      "Stratégie de livraison implicite — chaque équipe ship quand elle peut.",
    mistakeEn:
      "Implicit delivery strategy — each team ships when they can.",
    takeawayFr:
      "Stratégie hybride = cadence visible + critères Done + points d'intégration.",
    takeawayEn:
      "Hybrid strategy = visible cadence + Done criteria + integration points.",
    decisionFr:
      "Avant tout changement de cadence : qui est impacté ? Plan de communication ?",
    decisionEn:
      "Before any cadence change: who is impacted? Communication plan?",
    flashcardFrontFr: "Stratégie de livraison",
    flashcardFrontEn: "Delivery strategy",
    flashcardBackFr: "Gates majeurs + incréments continus + critères partagés.",
    flashcardBackEn: "Major gates + continuous increments + shared criteria.",
    exercisePromptFr:
      "Helios veut accélérer les trains portail hebdo avant gate Q2. Listez 3 impacts à anticiper.",
    exercisePromptEn:
      "Helios wants weekly portal trains before Q2 gate. List 3 impacts to anticipate.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Quel élément central d'une stratégie de livraison hybride ?",
      promptEn: "What is central to a hybrid delivery strategy?",
      explanationCorrectFr:
        "Cadence partagée et critères de done/intégration entre streams.",
      explanationCorrectEn:
        "Shared cadence and done/integration criteria across streams.",
      difficulty: 2,
      options: [
        opt(
          "Chaque équipe choisit sa cadence seule",
          "Each team picks cadence alone",
          false
        ),
        opt(
          "Cadence et critères partagés",
          "Shared cadence and criteria",
          true
        ),
        opt(
          "Une seule release finale sans incréments",
          "One final release without increments",
          false
        ),
      ],
    }),
  }),
];
