import { buildPmpLesson, opt, q } from "./pmp-factory";
import type { PmpLesson } from "./pmp-types";

const MOD = "process";

export const PMP_PROCESS_LESSONS: PmpLesson[] = [
  buildPmpLesson({
    slug: "project-initiation",
    titleFr: "Initiation de projet",
    titleEn: "Project Initiation",
    descriptionFr:
      "Lancer un projet avec une charte claire, un sponsor identifié et un périmètre initial validé.",
    descriptionEn:
      "Launch a project with a clear charter, identified sponsor, and validated initial scope.",
    moduleSlug: MOD,
    sortOrder: 0,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: "pmp-process",
    learningObjective: "IDENTIFY",
    objectiveFr:
      "Distinguer initiation et planification, et identifier les éléments minimaux d'une charte de projet.",
    objectiveEn:
      "Distinguish initiation from planning and identify minimum charter elements.",
    explanationFr:
      "L'initiation autorise officiellement le projet : elle répond à « pourquoi ce projet existe » et « qui en est responsable au niveau exécutif ». La charte de projet fixe l'objectif business, le sponsor, les contraintes majeures et les critères de succès de haut niveau — sans détailler chaque tâche. HelioRoute, une PME logistique, veut remplacer son TMS legacy. Avant d'estimer 400 user stories, le sponsor valide : objectif = réduire les retards de livraison de 15 % en 12 mois, budget plafond 1,2 M€, date cible fin T3. Sans cette base, l'équipe planifie dans le vide et les parties prenantes contestent les priorités en cours de route.",
    explanationEn:
      "Initiation officially authorizes the project: it answers why this project exists and who owns it at executive level. The charter sets the business objective, sponsor, major constraints, and high-level success criteria — without detailing every task. HelioRoute, a logistics SME, wants to replace its legacy TMS. Before estimating 400 user stories, the sponsor validates: goal = cut delivery delays 15% within 12 months, budget cap €1.2M, target date end Q3. Without this base, the team plans in a vacuum and stakeholders challenge priorities mid-flight.",
    exampleFr:
      "HelioRoute : charte signée avec sponsor (directrice ops), objectif chiffré, exclusions explicites (« pas de refonte entrepôt physique »), autorisation à mobiliser 6 FTE.",
    exampleEn:
      "HelioRoute: signed charter with sponsor (ops director), numeric goal, explicit exclusions ('no physical warehouse redesign'), authorization to mobilize 6 FTE.",
    practicalFr:
      "Listez trois éléments que vous exigeriez dans une charte avant de lancer un projet connu chez vous.",
    practicalEn:
      "List three elements you would require in a charter before launching a known project at your organization.",
    mistakeFr:
      "Confondre une présentation commerciale ou un cahier des charges détaillé avec une charte — l'initiation autorise, elle ne planifie pas.",
    mistakeEn:
      "Confusing a sales deck or detailed spec with a charter — initiation authorizes, it does not plan.",
    takeawayFr:
      "Pas de charte claire = pas de projet légitime ; l'initiation protège l'équipe des objectifs mouvants.",
    takeawayEn:
      "No clear charter = no legitimate project; initiation protects the team from shifting goals.",
    decisionFr:
      "Refuser de démarrer la planification détaillée tant que sponsor, objectif et contraintes ne sont pas documentés.",
    decisionEn:
      "Refuse detailed planning until sponsor, objective, and constraints are documented.",
    flashcardFrontFr: "Charte de projet",
    flashcardFrontEn: "Project charter",
    flashcardBackFr: "Document d'autorisation : objectif, sponsor, contraintes, critères de succès.",
    flashcardBackEn: "Authorization document: objective, sponsor, constraints, success criteria.",
    exercisePromptFr:
      "HelioRoute : rédigez en une phrase l'objectif business et une exclusion explicite pour la charte TMS.",
    exercisePromptEn:
      "HelioRoute: write one-sentence business objective and one explicit exclusion for the TMS charter.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Quel artefact typique formalise l'autorisation d'un projet ?",
      promptEn: "Which artifact typically formalizes project authorization?",
      explanationCorrectFr: "La charte autorise le projet et nomme le sponsor.",
      explanationCorrectEn: "The charter authorizes the project and names the sponsor.",
      difficulty: 1,
      options: [
        opt("Charte de projet", "Project charter", true),
        opt("WBS détaillée", "Detailed WBS", false, "La WBS appartient à la planification du périmètre.", "The WBS belongs to scope planning."),
        opt("Registre des risques", "Risk register", false, "Le registre des risques suit les risques identifiés, il n'autorise pas le projet.", "The risk register tracks identified risks; it does not authorize the project."),
        opt("Planning détaillé Gantt", "Detailed Gantt schedule", false, "Un Gantt détaillé est un outil d'exécution, pas d'autorisation.", "A detailed Gantt is an execution tool, not authorization."),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "planning",
    titleFr: "Planification de projet",
    titleEn: "Project Planning",
    descriptionFr:
      "Élaborer un plan intégré couvrant périmètre, délais, coûts, risques et communication.",
    descriptionEn:
      "Develop an integrated plan covering scope, schedule, cost, risk, and communication.",
    moduleSlug: MOD,
    sortOrder: 1,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "planning",
    learningObjective: "APPLY",
    objectiveFr:
      "Identifier les sous-plans d'un plan de management de projet et expliquer pourquoi la planification est itérative.",
    objectiveEn:
      "Identify sub-plans in a project management plan and explain why planning is iterative.",
    explanationFr:
      "La planification traduit la charte en livrables, activités, ressources, jalons et hypothèses mesurables. Le plan de management de projet (PMP) intègre les sous-plans : périmètre, planning, coûts, qualité, risques, ressources, communication, approvisionnement et changements. HelioRoute planifie le TMS en trois vagues : la vague 1 révèle que l'intégration GPS nécessite un fournisseur non prévu — le plan se met à jour, pas seulement le Gantt. Un plan réaliste documente les hypothèses (ex. « API legacy disponible 99,5 % »), les buffers (2 semaines sur le chemin critique) et les critères d'acceptation par livrable.",
    explanationEn:
      "Planning translates the charter into deliverables, activities, resources, milestones, and measurable assumptions. The project management plan (PMP) integrates sub-plans: scope, schedule, cost, quality, risk, resources, communication, procurement, and change. HelioRoute plans the TMS in three waves: wave 1 reveals GPS integration needs an unplanned vendor — the plan updates, not just the Gantt. A realistic plan documents assumptions (e.g. 'legacy API available 99.5%'), buffers (2 weeks on critical path), and acceptance criteria per deliverable.",
    exampleFr:
      "HelioRoute : PMP v1.2 ajoute un sous-plan approvisionnement GPS après découverte technique en sprint 0.",
    exampleEn:
      "HelioRoute: PMP v1.2 adds a GPS procurement sub-plan after technical discovery in sprint 0.",
    practicalFr:
      "Nommez cinq sous-plans que vous incluriez dans le PMP d'un projet digital de 9 mois.",
    practicalEn:
      "Name five sub-plans you would include in the PMP of a 9-month digital project.",
    mistakeFr:
      "Geler le plan après la première version — la planification est itérative quand l'information émerge.",
    mistakeEn:
      "Freezing the plan after v1 — planning is iterative as information emerges.",
    takeawayFr:
      "Un plan intégré relie les domaines ; un sous-plan isolé optimise localement mais échoue globalement.",
    takeawayEn:
      "An integrated plan connects domains; an isolated sub-plan optimizes locally but fails globally.",
    decisionFr:
      "Mettre à jour le PMP et les baselines quand une hypothèse majeure est invalidée.",
    decisionEn:
      "Update the PMP and baselines when a major assumption is invalidated.",
    flashcardFrontFr: "Plan de management de projet",
    flashcardFrontEn: "Project management plan",
    flashcardBackFr: "Document intégrant sous-plans pour piloter le projet de bout en bout.",
    flashcardBackEn: "Document integrating sub-plans to steer the project end to end.",
    exercisePromptFr:
      "HelioRoute découvre un fournisseur GPS obligatoire. Quels sous-plans du PMP touchez-vous en priorité ?",
    exercisePromptEn:
      "HelioRoute discovers a mandatory GPS vendor. Which PMP sub-plans do you touch first?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Quels éléments font typiquement partie d'un plan intégré ?",
      promptEn: "Which elements typically belong in an integrated plan?",
      explanationCorrectFr: "Périmètre, planning, coûts et risques sont des sous-plans classiques.",
      explanationCorrectEn: "Scope, schedule, cost, and risk are classic sub-plans.",
      difficulty: 2,
      options: [
        opt("Plan de périmètre et plan de planning", "Scope plan and schedule plan", true),
        opt("Liste de courses personnelles", "Personal grocery list", false, "Hors périmètre projet.", "Out of project scope."),
        opt("Planning des vacances de l'équipe", "Team vacation schedule", false, "La disponibilité ressource peut être une entrée, pas un sous-plan projet.", "Resource availability may be an input, not a project sub-plan."),
        opt("Politique RH générale de l'entreprise", "Company-wide HR policy", false, "Contrainte organisationnelle, pas un sous-plan du PMP.", "Organizational constraint, not a PMP sub-plan."),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "scope",
    titleFr: "Gestion du périmètre",
    titleEn: "Scope Management",
    descriptionFr:
      "Définir, valider et contrôler ce qui est inclus — et explicitement exclu — du projet.",
    descriptionEn:
      "Define, validate, and control what is included — and explicitly excluded — from the project.",
    moduleSlug: MOD,
    sortOrder: 2,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "scope",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Utiliser la WBS pour structurer le travail et détecter le scope creep.",
    objectiveEn:
      "Use the WBS to structure work and detect scope creep.",
    explanationFr:
      "Le périmètre décrit les livrables et le travail pour les produire, plus les exclusions explicites. La WBS décompose le projet en packages mesurables assignables. Le contrôle du périmètre compare le travail réalisé au baseline et traite les demandes de changement via le processus formel. Chez HelioRoute, « module TMS mobile pour chauffeurs » est in-scope ; « refonte site web marketing » est out-of-scope documenté. Quand le sponsor demande un tableau de bord exécutif « en passant », sans changement formel, c'est du scope creep — il menace délais et budget.",
    explanationEn:
      "Scope describes deliverables and work to produce them, plus explicit exclusions. The WBS decomposes the project into measurable, assignable packages. Scope control compares performed work to baseline and handles change requests through formal process. At HelioRoute, 'mobile TMS module for drivers' is in-scope; 'marketing website redesign' is documented out-of-scope. When the sponsor asks for an executive dashboard 'on the side' without formal change, that's scope creep — it threatens schedule and budget.",
    exampleFr:
      "WBS HelioRoute : 1.0 TMS Core → 1.1 Routing, 1.2 Tracking, 1.3 Reporting — chaque package a un responsable et critères d'acceptation.",
    exampleEn:
      "HelioRoute WBS: 1.0 TMS Core → 1.1 Routing, 1.2 Tracking, 1.3 Reporting — each package has an owner and acceptance criteria.",
    practicalFr:
      "Décomposez un livrable majeur en trois packages WBS avec critères d'acceptation.",
    practicalEn:
      "Decompose one major deliverable into three WBS packages with acceptance criteria.",
    mistakeFr:
      "Accepter des ajouts non documentés pour « faire plaisir » — chaque ajout non contrôlé dilue le baseline.",
    mistakeEn:
      "Accepting undocumented add-ons to 'please' stakeholders — every uncontrolled add dilutes the baseline.",
    takeawayFr:
      "Périmètre = livrables + exclusions ; la WBS rend le travail mesurable et assignable.",
    takeawayEn:
      "Scope = deliverables + exclusions; the WBS makes work measurable and assignable.",
    decisionFr:
      "Traiter toute demande hors baseline comme une demande de changement, pas comme du travail gratuit.",
    decisionEn:
      "Treat every out-of-baseline request as a change request, not free work.",
    flashcardFrontFr: "WBS",
    flashcardFrontEn: "WBS",
    flashcardBackFr: "Décomposition hiérarchique du travail en packages mesurables.",
    flashcardBackEn: "Hierarchical decomposition of work into measurable packages.",
    exercisePromptFr:
      "HelioRoute : le sponsor veut un dashboard exécutif non prévu. Quelle action de gestion du périmètre ?",
    exercisePromptEn:
      "HelioRoute: sponsor wants an unplanned executive dashboard. What scope management action?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Quel outil structure le travail en packages mesurables ?",
      promptEn: "Which tool structures work into measurable packages?",
      explanationCorrectFr: "La WBS décompose le périmètre en éléments de travail.",
      explanationCorrectEn: "The WBS decomposes scope into work elements.",
      difficulty: 2,
      options: [
        opt("WBS (structure de décomposition)", "WBS (work breakdown structure)", true),
        opt("Organigramme des tâches (Gantt)", "Gantt chart", false, "Le Gantt séquence dans le temps ; la WBS structure le quoi.", "Gantt sequences in time; WBS structures the what."),
        opt("Matrice RACI seule", "RACI matrix alone", false, "RACI clarifie les rôles, pas la décomposition du travail.", "RACI clarifies roles, not work decomposition."),
        opt("Registre des parties prenantes", "Stakeholder register", false, "Le registre liste les parties prenantes, pas les packages de travail.", "The register lists stakeholders, not work packages."),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "requirements-basics",
    titleFr: "Bases des exigences",
    titleEn: "Requirements Basics",
    descriptionFr:
      "Capturer, prioriser et tracer les exigences business et produit avant de construire.",
    descriptionEn:
      "Capture, prioritize, and trace business and product requirements before building.",
    moduleSlug: MOD,
    sortOrder: 3,
    estimatedMinutes: 9,
    difficulty: "BEGINNER",
    skillSlug: "pmp-process",
    learningObjective: "IDENTIFY",
    objectiveFr:
      "Distinguer exigence business, exigence fonctionnelle et critère d'acceptation.",
    objectiveEn:
      "Distinguish business requirement, functional requirement, and acceptance criterion.",
    explanationFr:
      "Une exigence business exprime le besoin ou la valeur (ex. « réduire les retards de 15 % »). Une exigence fonctionnelle décrit le comportement attendu du produit (ex. « alerter le dispatcher si ETA > +30 min »). Un critère d'acceptation est testable et binaire (ex. « notification reçue en < 60 s dans 95 % des cas test »). HelioRoute trace chaque user story à une exigence business pour éviter les features « sympas » sans ROI. La matrice de traçabilité relie exigences → design → tests → livrables.",
    explanationEn:
      "A business requirement states need or value (e.g. 'cut delays 15%'). A functional requirement describes expected product behavior (e.g. 'alert dispatcher if ETA > +30 min'). An acceptance criterion is testable and binary (e.g. 'notification received in < 60 s in 95% of test cases'). HelioRoute traces each user story to a business requirement to avoid 'nice' features without ROI. A traceability matrix links requirements → design → tests → deliverables.",
    exampleFr:
      "Business : réduire retards. Fonctionnel : alerte ETA. Acceptation : 95 % des alertes < 60 s en test de charge simulé.",
    exampleEn:
      "Business: cut delays. Functional: ETA alert. Acceptance: 95% of alerts < 60 s in simulated load test.",
    practicalFr:
      "Pour un projet connu, écrivez une exigence business et une critère d'acceptation testable.",
    practicalEn:
      "For a known project, write one business requirement and one testable acceptance criterion.",
    mistakeFr:
      "Confondre une solution technique (« utiliser Kafka ») avec une exigence (« alerter en temps réel »).",
    mistakeEn:
      "Confusing a technical solution ('use Kafka') with a requirement ('alert in real time').",
    takeawayFr:
      "Exigence = besoin ou comportement ; critère d'acceptation = preuve mesurable de satisfaction.",
    takeawayEn:
      "Requirement = need or behavior; acceptance criterion = measurable proof of satisfaction.",
    decisionFr:
      "Prioriser les exigences par valeur business et refuser celles sans lien traçable à l'objectif projet.",
    decisionEn:
      "Prioritize requirements by business value and reject those with no traceable link to project objective.",
    flashcardFrontFr: "Critère d'acceptation",
    flashcardFrontEn: "Acceptance criterion",
    flashcardBackFr: "Condition testable et binaire pour valider une exigence.",
    flashcardBackEn: "Testable, binary condition to validate a requirement.",
    exercisePromptFr:
      "HelioRoute : transformez « les chauffeurs doivent être content » en critère d'acceptation testable.",
    exercisePromptEn:
      "HelioRoute: turn 'drivers must be happy' into a testable acceptance criterion.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "« Alerter le dispatcher si ETA dépasse +30 minutes » est plutôt :",
      promptEn: "'Alert the dispatcher if ETA exceeds +30 minutes' is best classified as:",
      explanationCorrectFr: "Comportement attendu du produit = exigence fonctionnelle.",
      explanationCorrectEn: "Expected product behavior = functional requirement.",
      difficulty: 1,
      options: [
        opt("Exigence fonctionnelle", "Functional requirement", true),
        opt("Exigence business", "Business requirement", false, "L'exigence business serait plutôt la valeur (ex. réduire les retards).", "Business requirement would be the value (e.g. cut delays)."),
        opt("Hypothèse de planning", "Schedule assumption", false, "Ce n'est pas une hypothèse temporelle mais un comportement attendu.", "This is expected behavior, not a time assumption."),
        opt("Critère d'acceptation", "Acceptance criterion", false, "Il manque le seuil testable précis (ex. délai de notification).", "Missing precise testable threshold (e.g. notification delay)."),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "schedule",
    titleFr: "Gestion du planning",
    titleEn: "Schedule Management",
    descriptionFr:
      "Construire et suivre un planning réaliste avec dépendances, jalons et chemin critique.",
    descriptionEn:
      "Build and track a realistic schedule with dependencies, milestones, and critical path.",
    moduleSlug: MOD,
    sortOrder: 4,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "schedule",
    learningObjective: "APPLY",
    objectiveFr:
      "Expliquer le chemin critique, les jalons et les options de compression (fast-tracking, crashing).",
    objectiveEn:
      "Explain critical path, milestones, and compression options (fast-tracking, crashing).",
    explanationFr:
      "Le planning séquence les activités, estime durées et ressources, et identifie le chemin critique — la chaîne d'activités sans marge totale qui fixe la date de fin la plus courte. Les jalons marquent des points de contrôle sans durée (ex. « go-live TMS v1 »). Le suivi compare avancement réel vs planifié (SPI, dérives). HelioRoute : intégration GPS → tests UAT → formation est sur le chemin critique ; la documentation utilisateur a de la marge. Compresser par fast-tracking (chevaucher UAT et formation) accélère mais augmente le risque de défauts.",
    explanationEn:
      "The schedule sequences activities, estimates durations and resources, and identifies the critical path — the chain with zero total float setting the shortest finish. Milestones mark zero-duration control points (e.g. 'TMS v1 go-live'). Tracking compares actual vs planned progress (SPI, variances). HelioRoute: GPS integration → UAT → training is on critical path; user documentation has float. Compressing via fast-tracking (overlap UAT and training) speeds up but raises defect risk.",
    exampleFr:
      "HelioRoute : retard GPS de 2 semaines sur chemin critique → date go-live glisse sauf crashing (heures sup) ou scope swap.",
    exampleEn:
      "HelioRoute: 2-week GPS delay on critical path → go-live slips unless crashing (overtime) or scope swap.",
    practicalFr:
      "Identifiez une activité sur le chemin critique d'un projet connu et une avec de la marge.",
    practicalEn:
      "Identify one critical-path activity and one with float on a known project.",
    mistakeFr:
      "Ajouter du buffer uniquement sur les tâches non critiques — seul le chemin critique fixe la date de fin.",
    mistakeEn:
      "Adding buffer only on non-critical tasks — only the critical path sets the finish date.",
    takeawayFr:
      "Chemin critique = zéro marge totale ; compresser a toujours un coût ou un risque.",
    takeawayEn:
      "Critical path = zero total float; compression always has a cost or risk.",
    decisionFr:
      "Avant de promettre une date, valider le chemin critique et documenter les hypothèses de durée.",
    decisionEn:
      "Before committing to a date, validate critical path and document duration assumptions.",
    flashcardFrontFr: "Chemin critique",
    flashcardFrontEn: "Critical path",
    flashcardBackFr: "Séquence d'activités déterminant la durée minimale du projet.",
    flashcardBackEn: "Sequence of activities determining minimum project duration.",
    exercisePromptFr:
      "HelioRoute veut gagner 1 semaine. Comparez fast-tracking UAT/formation vs crashing sur intégration GPS.",
    exercisePromptEn:
      "HelioRoute wants to save 1 week. Compare fast-tracking UAT/training vs crashing GPS integration.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Le chemin critique détermine principalement :",
      promptEn: "The critical path mainly determines:",
      explanationCorrectFr: "Sans marge totale sur cette chaîne, la date de fin minimale du projet.",
      explanationCorrectEn: "With zero total float on this chain, the project's minimum finish date.",
      difficulty: 2,
      options: [
        opt("La durée minimale du projet", "Minimum project duration", true),
        opt("Le budget total du projet", "Total project budget", false, "Le budget relève de la gestion des coûts, pas du chemin critique.", "Budget belongs to cost management, not critical path."),
        opt("La qualité des livrables", "Deliverable quality", false, "La qualité se planifie et se contrôle séparément.", "Quality is planned and controlled separately."),
        opt("Le nombre de parties prenantes", "Number of stakeholders", false, "Les parties prenantes influencent le projet mais ne définissent pas le chemin critique.", "Stakeholders influence the project but do not define critical path."),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "estimation-techniques",
    titleFr: "Techniques d'estimation",
    titleEn: "Estimation Techniques",
    descriptionFr:
      "Choisir la bonne technique d'estimation selon l'incertitude et la maturité de l'information.",
    descriptionEn:
      "Choose the right estimation technique based on uncertainty and information maturity.",
    moduleSlug: MOD,
    sortOrder: 5,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-process",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Comparer estimation analogique, paramétrique, three-point et bottom-up sur un mini-cas.",
    objectiveEn:
      "Compare analogous, parametric, three-point, and bottom-up estimation on a mini-case.",
    explanationFr:
      "Analogique : comparer à un projet passé similaire (rapide, imprécis en début de projet). Paramétrique : formule basée sur une unité (ex. 3 points-story × vélocité). Three-point (PERT) : (optimiste + 4×probable + pessimiste) / 6 pour intégrer l'incertitude. Bottom-up : estimer chaque package WBS puis agréger (précis, coûteux). HelioRoute estime l'intégration GPS : analogique = 4 semaines (projet 2023), bottom-up = 6 semaines (API 2 sem. + tests 2 sem. + déploiement 2 sem.), three-point = (3+5+9)/6 ≈ 5,3 semaines. En phase précoce, une fourchette + hypothèses documentées vaut mieux qu'un chiffre unique faux.",
    explanationEn:
      "Analogous: compare to a similar past project (fast, imprecise early). Parametric: formula on a unit (e.g. 3 story points × velocity). Three-point (PERT): (optimistic + 4×most likely + pessimistic) / 6 to integrate uncertainty. Bottom-up: estimate each WBS package then roll up (precise, costly). HelioRoute estimates GPS integration: analogous = 4 weeks (2023 project), bottom-up = 6 weeks (API 2 wk + tests 2 wk + deploy 2 wk), three-point = (3+5+9)/6 ≈ 5.3 weeks. Early phase, a range + documented assumptions beats a single false number.",
    exampleFr:
      "GPS HelioRoute : O=3, M=5, P=9 semaines → PERT ≈ 5,3 sem. ; bottom-up confirme 6 sem. → planifier 6 avec buffer.",
    exampleEn:
      "HelioRoute GPS: O=3, M=5, P=9 weeks → PERT ≈ 5.3 wk; bottom-up confirms 6 wk → plan for 6 with buffer.",
    practicalFr:
      "Estimez une tâche connue en three-point (O, M, P) puis calculez la durée PERT.",
    practicalEn:
      "Estimate a known task three-point (O, M, P) then compute PERT duration.",
    mistakeFr:
      "Utiliser bottom-up avant d'avoir une WBS stable — gaspillage de précision sur du flou.",
    mistakeEn:
      "Using bottom-up before a stable WBS — wasted precision on ambiguity.",
    takeawayFr:
      "Technique d'estimation = fonction de l'incertitude ; documenter hypothèses et fourchette.",
    takeawayEn:
      "Estimation technique = function of uncertainty; document assumptions and range.",
    decisionFr:
      "En phase précoce, communiquer une fourchette ; en exécution, affiner avec bottom-up sur packages stables.",
    decisionEn:
      "Early phase, communicate a range; in execution, refine with bottom-up on stable packages.",
    flashcardFrontFr: "Estimation three-point",
    flashcardFrontEn: "Three-point estimate",
    flashcardBackFr: "(O + 4M + P) / 6 — intègre l'incertitude.",
    flashcardBackEn: "(O + 4M + P) / 6 — integrates uncertainty.",
    exercisePromptFr:
      "HelioRoute : O=2, M=4, P=8 semaines pour migration données. Calculez PERT et comparez au bottom-up si WBS = 5 sem.",
    exercisePromptEn:
      "HelioRoute: O=2, M=4, P=8 weeks for data migration. Compute PERT and compare to bottom-up if WBS = 5 wk.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "O=3, M=5, P=9 semaines. Durée PERT ?",
      promptEn: "O=3, M=5, P=9 weeks. PERT duration?",
      explanationCorrectFr: "(3 + 4×5 + 9) / 6 = 32/6 ≈ 5,3 semaines.",
      explanationCorrectEn: "(3 + 4×5 + 9) / 6 = 32/6 ≈ 5.3 weeks.",
      difficulty: 2,
      options: [
        opt("≈ 5,3 semaines", "≈ 5.3 weeks", true),
        opt("5 semaines (moyenne simple)", "5 weeks (simple average)", false, "La moyenne simple (3+5+9)/3 = 5,7 ; PERT pondère le probable.", "Simple average (3+5+9)/3 = 5.7; PERT weights most likely."),
        opt("9 semaines (pessimiste)", "9 weeks (pessimistic)", false, "Le pessimiste seul ignore le scénario probable.", "Pessimistic alone ignores most likely scenario."),
        opt("3 semaines (optimiste)", "3 weeks (optimistic)", false, "L'optimiste seul sous-estime systématiquement.", "Optimistic alone systematically underestimates."),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "cost",
    titleFr: "Gestion des coûts",
    titleEn: "Cost Management",
    descriptionFr:
      "Estimer, budgéter et contrôler les coûts du projet avec EAC et contingence.",
    descriptionEn:
      "Estimate, budget, and control project costs with EAC and contingency.",
    moduleSlug: MOD,
    sortOrder: 6,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "cost",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Distinguer coûts directs/indirects, baseline budget et EAC sur un mini-cas chiffré.",
    objectiveEn:
      "Distinguish direct/indirect costs, budget baseline, and EAC on a numbered mini-case.",
    explanationFr:
      "La gestion des coûts couvre estimation (analogique, paramétrique, bottom-up), constitution du budget baseline et suivi des dérives. Coûts directs : équipe projet, licences, matériel dédié. Coûts indirects : overhead, locaux, services partagés. L'EAC (estimate at completion) projette le coût total selon la performance actuelle. HelioRoute : budget baseline 1,2 M€ (dont contingence 80 k€). À mi-parcours, 650 k€ dépensés pour 45 % d'avancement → CPI ≈ 0,83 → EAC ≈ 1,45 M€ si tendance continue. Un budget sans contingence ignore les risques financiers connus.",
    explanationEn:
      "Cost management covers estimation (analogous, parametric, bottom-up), budget baseline creation, and variance tracking. Direct costs: project team, licenses, dedicated hardware. Indirect costs: overhead, facilities, shared services. EAC (estimate at completion) projects total cost from current performance. HelioRoute: budget baseline €1.2M (including €80k contingency). Mid-flight, €650k spent for 45% progress → CPI ≈ 0.83 → EAC ≈ €1.45M if trend continues. A budget without contingency ignores known financial risks.",
    exampleFr:
      "HelioRoute : BAC 1 200 k€, EV 540 k€, AC 650 k€ → CPI 0,83 → alerte sponsor sur EAC.",
    exampleEn:
      "HelioRoute: BAC €1,200k, EV €540k, AC €650k → CPI 0.83 → sponsor alert on EAC.",
    practicalFr:
      "Comparez estimation analogique et bottom-up pour un achat logiciel de 200 k€.",
    practicalEn:
      "Compare analogous and bottom-up estimation for a €200k software purchase.",
    mistakeFr:
      "Confondre budget approuvé et EAC — l'EAC projette la réalité, pas le souhait initial.",
    mistakeEn:
      "Confusing approved budget and EAC — EAC projects reality, not initial wish.",
    takeawayFr:
      "Baseline + contingence + suivi CPI/SPI → décisions de correction avant la crise.",
    takeawayEn:
      "Baseline + contingency + CPI/SPI tracking → corrective decisions before crisis.",
    decisionFr:
      "Présenter EAC et options (scope swap, budget additionnel) dès CPI < 0,9 en phase critique.",
    decisionEn:
      "Present EAC and options (scope swap, additional budget) once CPI < 0.9 in critical phase.",
    flashcardFrontFr: "EAC",
    flashcardFrontEn: "EAC",
    flashcardBackFr: "Estimation du coût total à la fin du projet selon performance actuelle.",
    flashcardBackEn: "Estimate of total cost at project end based on current performance.",
    exercisePromptFr:
      "HelioRoute : BAC 1 200 k€, 45 % avancement, 650 k€ dépensés. Estimez CPI et discutez l'EAC.",
    exercisePromptEn:
      "HelioRoute: BAC €1,200k, 45% progress, €650k spent. Estimate CPI and discuss EAC.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Qu'est-ce que l'EAC ?",
      promptEn: "What is EAC?",
      explanationCorrectFr: "Projection du coût total attendu à la fin du projet.",
      explanationCorrectEn: "Projection of expected total cost at project end.",
      difficulty: 2,
      options: [
        opt("Estimation du coût à la fin du projet", "Estimate at completion", true),
        opt("Coût initial planifié seulement", "Initial planned cost only", false, "Le coût initial planifié est le BAC, pas l'EAC.", "Initial planned cost is BAC, not EAC."),
        opt("Budget de contingence uniquement", "Contingency budget only", false, "La contingence est une réserve, pas une projection totale.", "Contingency is a reserve, not total projection."),
        opt("Coût des ressources internes uniquement", "Internal resource cost only", false, "L'EAC couvre typiquement tous les coûts projet.", "EAC typically covers all project costs."),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "risk-vs-issue",
    titleFr: "Risque vs problème",
    titleEn: "Risk vs Issue",
    descriptionFr:
      "Distinguer risque futur et problème actuel pour réagir correctement.",
    descriptionEn:
      "Distinguish future risk from current issue to respond correctly.",
    moduleSlug: MOD,
    sortOrder: 7,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: "risk-management",
    learningObjective: "IDENTIFY",
    isShort: true,
    shortDurationSeconds: 160,
    objectiveFr:
      "Classifier risques et problèmes et choisir la bonne réponse (registre risques vs registre issues).",
    objectiveEn:
      "Classify risks and issues and choose the right response (risk register vs issue log).",
    explanationFr:
      "Un risque est un événement futur incertain qui pourrait affecter le projet (positif = opportunité, négatif = menace). On le gère par identification, analyse (probabilité × impact) et réponses planifiées (éviter, atténuer, transférer, accepter). Un problème (issue) est un événement qui s'est déjà produit et nécessite une action immédiate dans le registre des issues. HelioRoute : « le fournisseur GPS pourrait être en retard » = risque ; « le fournisseur GPS a manqué sa livraison hier » = problème. Confondre les deux retarde la réponse : un risque matérialisé devient un problème à traiter, pas à re-analyser comme hypothetique.",
    explanationEn:
      "A risk is a future uncertain event that could affect the project (positive = opportunity, negative = threat). Manage via identification, analysis (probability × impact), and planned responses (avoid, mitigate, transfer, accept). An issue is an event that already occurred and needs immediate action in the issue log. HelioRoute: 'GPS vendor might be late' = risk; 'GPS vendor missed delivery yesterday' = issue. Confusing the two delays response: a materialized risk becomes an issue to resolve, not re-analyze as hypothetical.",
    exampleFr:
      "Risque : pénurie composants Q4. Problème : composant manquant bloque l'intégration aujourd'hui.",
    exampleEn:
      "Risk: Q4 component shortage. Issue: missing component blocks integration today.",
    practicalFr:
      "Classez trois situations de votre contexte en risque ou problème.",
    practicalEn:
      "Classify three situations from your context as risk or issue.",
    mistakeFr:
      "Laisser un problème actif dans le registre des risques sans owner ni échéance.",
    mistakeEn:
      "Leaving an active problem in the risk register with no owner or due date.",
    takeawayFr:
      "Risque = futur incertain ; problème = présent avéré → registres et actions différents.",
    takeawayEn:
      "Risk = uncertain future; issue = proven present → different registers and actions.",
    decisionFr:
      "Dès qu'un risque se matérialise, le fermer dans le registre risques et ouvrir une issue avec owner.",
    decisionEn:
      "Once a risk materializes, close it in the risk register and open an issue with owner.",
    flashcardFrontFr: "Risque vs problème",
    flashcardFrontEn: "Risk vs issue",
    flashcardBackFr: "Risque = futur incertain ; problème = déjà arrivé, action immédiate.",
    flashcardBackEn: "Risk = uncertain future; issue = already happened, immediate action.",
    exercisePromptFr:
      "HelioRoute : le fournisseur GPS annonce 3 semaines de retard confirmées. Risque ou problème ? Quelle action ?",
    exercisePromptEn:
      "HelioRoute: GPS vendor confirms 3-week delay. Risk or issue? What action?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Un fournisseur clé a déjà manqué sa date de livraison. C'est :",
      promptEn: "A key supplier has already missed its delivery date. This is:",
      explanationCorrectFr: "Événement survenu → problème à traiter dans le registre des issues.",
      explanationCorrectEn: "Event occurred → issue to handle in the issue log.",
      difficulty: 1,
      options: [
        opt("Un problème actuel", "A current issue", true),
        opt("Un risque futur", "A future risk", false, "Le retard est déjà constaté, ce n'est plus incertain.", "Delay is already confirmed, no longer uncertain."),
        opt("Une opportunité", "An opportunity", false, "Un retard fournisseur n'est pas une opportunité sans contexte positif.", "Supplier delay is not an opportunity without positive context."),
        opt("Ni l'un ni l'autre", "Neither", false, "Un événement survenu impactant le projet est un problème.", "An occurred event impacting the project is an issue."),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : l'équipe craint qu'une nouvelle réglementation transport entre en vigueur dans 6 mois et impacte l'API. Meilleure action ?",
        promptEn:
          "Situation: the team fears new transport regulation effective in 6 months may impact the API. Best action?",
        explanationCorrectFr:
          "Événement futur incertain → enregistrer comme risque, analyser impact, planifier réponse.",
        explanationCorrectEn:
          "Future uncertain event → log as risk, analyze impact, plan response.",
        difficulty: 2,
        options: [
          opt(
            "Enregistrer comme risque et planifier une réponse",
            "Log as risk and plan a response",
            true
          ),
          opt(
            "Ouvrir une issue avec action immédiate",
            "Open an issue with immediate action",
            false,
            "La réglementation n'est pas encore effective — c'est encore un risque.",
            "Regulation is not yet effective — still a risk."
          ),
          opt(
            "Ignorer jusqu'à ce que ça arrive",
            "Ignore until it happens",
            false,
            "Attendre la matérialisation sans plan = mauvaise gestion proactive.",
            "Waiting without plan = poor proactive management."
          ),
          opt(
            "Modifier le baseline sans analyse",
            "Change baseline without analysis",
            false,
            "Toute modification baseline passe par analyse d'impact formelle.",
            "Any baseline change requires formal impact analysis."
          ),
        ],
      }),
    ],
    situation: {
      scenarioFr:
        "HelioRoute : le fournisseur GPS confirme un retard de 3 semaines sur un composant indispensable. Le chemin critique n'a plus de marge.",
      scenarioEn:
        "HelioRoute: GPS vendor confirms a 3-week delay on essential hardware. Critical path has no float left.",
      problemFr: "Un risque matérialisé bloque le chemin critique.",
      problemEn: "A materialized risk blocks the critical path.",
      bestActionFr:
        "Fermer le risque matérialisé, ouvrir une issue, analyser options (fournisseur alternatif, fast-track, scope swap) et présenter trade-offs au sponsor.",
      bestActionEn:
        "Close materialized risk, open issue, analyze options (alternate vendor, fast-track, scope swap) and present trade-offs to sponsor.",
    },
  }),

  buildPmpLesson({
    slug: "issue-management",
    titleFr: "Gestion des problèmes",
    titleEn: "Issue Management",
    descriptionFr:
      "Traquer, prioriser et résoudre les problèmes actifs avec owner et échéance.",
    descriptionEn:
      "Track, prioritize, and resolve active issues with owner and due date.",
    moduleSlug: MOD,
    sortOrder: 8,
    estimatedMinutes: 9,
    difficulty: "BEGINNER",
    skillSlug: "pmp-process",
    learningObjective: "APPLY",
    objectiveFr:
      "Structurer un registre des issues et appliquer escalade quand un problème dépasse l'autorité du PM.",
    objectiveEn:
      "Structure an issue log and escalate when an issue exceeds PM authority.",
    explanationFr:
      "Le registre des issues capture : description, date d'ouverture, impact (planning, coût, qualité), owner, échéance cible, statut et résolution. Chaque problème actif a un owner unique — pas « l'équipe ». HelioRoute ouvre ISS-014 : retard GPS, impact = +3 semaines chemin critique, owner = lead intégration, échéance analyse options = J+3. Si la solution exige budget non approuvé ou changement de scope majeur, escalade au sponsor via le processus de changement. Revue hebdomadaire des issues ouvertes > 5 jours sans progrès.",
    explanationEn:
      "The issue log captures: description, open date, impact (schedule, cost, quality), owner, target due date, status, and resolution. Every active issue has one owner — not 'the team'. HelioRoute opens ISS-014: GPS delay, impact = +3 weeks critical path, owner = integration lead, options analysis due = D+3. If solution needs unapproved budget or major scope change, escalate to sponsor via change process. Weekly review of open issues > 5 days without progress.",
    exampleFr:
      "ISS-014 HelioRoute : owner nommé, 3 options documentées, décision sponsor en comité J+5.",
    exampleEn:
      "HelioRoute ISS-014: named owner, 3 options documented, sponsor decision in committee D+5.",
    practicalFr:
      "Rédigez une entrée de registre issues pour un problème récent avec owner et échéance.",
    practicalEn:
      "Write one issue log entry for a recent problem with owner and due date.",
    mistakeFr:
      "Discuter le même problème en réunion sans l'enregistrer — il ressurgit sans traçabilité.",
    mistakeEn:
      "Discussing the same problem in meetings without logging — it resurfaces without traceability.",
    takeawayFr:
      "Problème = owner + échéance + impact documenté ; pas de owner = pas de résolution.",
    takeawayEn:
      "Issue = owner + due date + documented impact; no owner = no resolution.",
    decisionFr:
      "Escalader si impact dépasse votre autorité (budget, scope, date) ou si blocage > 5 jours ouvrés.",
    decisionEn:
      "Escalate if impact exceeds your authority (budget, scope, date) or blockage > 5 business days.",
    flashcardFrontFr: "Registre des issues",
    flashcardFrontEn: "Issue log",
    flashcardBackFr: "Problèmes actifs : owner, impact, échéance, statut.",
    flashcardBackEn: "Active problems: owner, impact, due date, status.",
    exercisePromptFr:
      "HelioRoute ISS-014 : listez impact, owner et critère d'escalade vers le sponsor.",
    exercisePromptEn:
      "HelioRoute ISS-014: list impact, owner, and escalation criterion to sponsor.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Quel élément est indispensable pour chaque issue ouverte ?",
      promptEn: "Which element is mandatory for every open issue?",
      explanationCorrectFr: "Un owner unique responsable de la résolution.",
      explanationCorrectEn: "A single owner responsible for resolution.",
      difficulty: 1,
      options: [
        opt("Un owner unique", "A single owner", true),
        opt("Un budget supplémentaire approuvé", "Approved additional budget", false, "Le budget peut être une conséquence, pas une condition d'ouverture.", "Budget may be a consequence, not an opening condition."),
        opt("Une demande de changement signée", "A signed change request", false, "Certaines issues se résolvent sans changement de baseline.", "Some issues resolve without baseline change."),
        opt("Un risque associé fermé", "A closed associated risk", false, "Fermer le risque matérialisé est bonne pratique mais pas toujours préalable.", "Closing materialized risk is good practice but not always prerequisite."),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "quality",
    titleFr: "Gestion de la qualité",
    titleEn: "Quality Management",
    descriptionFr:
      "Planifier la qualité, assurer les processus et contrôler les livrables.",
    descriptionEn:
      "Plan quality, assure processes, and control deliverables.",
    moduleSlug: MOD,
    sortOrder: 9,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "quality",
    learningObjective: "APPLY",
    objectiveFr:
      "Distinguer assurance qualité (processus) et contrôle qualité (résultats) sur un exemple concret.",
    objectiveEn:
      "Distinguish quality assurance (process) from quality control (results) on a concrete example.",
    explanationFr:
      "Qualité projet = livrables conformes aux exigences et adaptés à l'usage, pas seulement absence de bugs. Le plan de qualité définit standards, métriques et activités d'assurance (revues de processus, formations, checklists). Le contrôle qualité vérifie les résultats : tests, inspections, audits de livrables. HelioRoute : assurance = revue de code obligatoire + definition of done ; contrôle = tests UAT avec 98 % de scénarios passants avant go-live. L'amélioration continue via rétrospectives alimente les leçons apprises.",
    explanationEn:
      "Project quality = deliverables meet requirements and fit for use, not only zero bugs. The quality plan defines standards, metrics, and assurance activities (process reviews, training, checklists). Quality control verifies results: tests, inspections, deliverable audits. HelioRoute: assurance = mandatory code review + definition of done; control = UAT with 98% scenarios passing before go-live. Continuous improvement via retrospectives feeds lessons learned.",
    exampleFr:
      "HelioRoute : DoD inclut tests automatisés (assurance) ; gate go-live exige rapport UAT 98 % (contrôle).",
    exampleEn:
      "HelioRoute: DoD includes automated tests (assurance); go-live gate requires 98% UAT report (control).",
    practicalFr:
      "Donnez un exemple d'assurance qualité et un de contrôle qualité sur votre projet.",
    practicalEn:
      "Give one quality assurance and one quality control example on your project.",
    mistakeFr:
      "Tester uniquement en fin de projet — le contrôle qualité doit être continu sur les livrables.",
    mistakeEn:
      "Testing only at project end — quality control must be continuous on deliverables.",
    takeawayFr:
      "Assurance = prévenir par processus ; contrôle = vérifier les résultats.",
    takeawayEn:
      "Assurance = prevent via process; control = verify results.",
    decisionFr:
      "Bloquer un jalon si les critères de contrôle qualité ne sont pas satisfaits.",
    decisionEn:
      "Block a milestone if quality control criteria are not met.",
    flashcardFrontFr: "Assurance vs contrôle qualité",
    flashcardFrontEn: "QA vs QC",
    flashcardBackFr: "Assurance = processus ; contrôle = vérification des livrables.",
    flashcardBackEn: "Assurance = process; control = deliverable verification.",
    exercisePromptFr:
      "HelioRoute : le sponsor veut go-live sans UAT complet. Quel argument qualité et quelle alternative ?",
    exercisePromptEn:
      "HelioRoute: sponsor wants go-live without full UAT. What quality argument and alternative?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Quel exemple illustre le contrôle qualité ?",
      promptEn: "Which example illustrates quality control?",
      explanationCorrectFr: "Tester un livrable avant release = vérification du résultat.",
      explanationCorrectEn: "Testing a deliverable before release = result verification.",
      difficulty: 2,
      options: [
        opt("Exécuter des tests UAT avant livraison", "Run UAT before delivery", true),
        opt("Définir un standard de code", "Define a code standard", false, "Standard = assurance (prévention), pas contrôle du livrable.", "Standard = assurance (prevention), not deliverable control."),
        opt("Former l'équipe aux bonnes pratiques", "Train the team on good practices", false, "Formation = assurance qualité.", "Training = quality assurance."),
        opt("Documenter le processus de revue", "Document the review process", false, "Processus documenté = assurance, pas vérification du résultat.", "Documented process = assurance, not result verification."),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "change-management-basics",
    titleFr: "Bases du change management",
    titleEn: "Change Management Basics",
    descriptionFr:
      "Gérer les demandes de changement avec traçabilité, analyse d'impact et décision.",
    descriptionEn:
      "Manage change requests with traceability, impact analysis, and decision.",
    moduleSlug: MOD,
    sortOrder: 10,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: "change-management",
    learningObjective: "DECIDE",
    isShort: true,
    shortDurationSeconds: 140,
    objectiveFr:
      "Appliquer le flux demande → analyse d'impact → décision → mise à jour baseline.",
    objectiveEn:
      "Apply the flow request → impact analysis → decision → baseline update.",
    explanationFr:
      "Le change management projet traite les modifications au baseline (périmètre, planning, coût) via un processus formel : demande documentée, analyse d'impact multidomaine, recommandation, décision du comité ou sponsor, mise à jour des baselines si approuvé. Les changements non documentés créent de la dette de gouvernance. Distinguer changement de produit (nouvelle fonctionnalité TMS) et changement organisationnel (adoption par les chauffeurs) évite les confusions. HelioRoute : CR-007 « intégration réglementaire » touche chemin critique + 80 k€ → analyse obligatoire avant exécution.",
    explanationEn:
      "Project change management handles baseline modifications (scope, schedule, cost) through formal process: documented request, cross-domain impact analysis, recommendation, committee or sponsor decision, baseline update if approved. Undocumented changes create governance debt. Distinguish product change (new TMS feature) from organizational change (driver adoption). HelioRoute: CR-007 'regulatory integration' hits critical path + €80k → mandatory analysis before execution.",
    exampleFr:
      "CR-007 HelioRoute : impact +4 sem., +80 k€, risque qualité → options présentées au comité avant approbation.",
    exampleEn:
      "HelioRoute CR-007: impact +4 wk, +€80k, quality risk → options presented to committee before approval.",
    practicalFr:
      "Décrivez les étapes d'une demande de changement typique sur un projet connu.",
    practicalEn:
      "Describe the steps of a typical change request on a known project.",
    mistakeFr:
      "Exécuter un changement « urgent » du sponsor sans analyse d'impact — dette invisible sur baseline.",
    mistakeEn:
      "Executing an 'urgent' sponsor change without impact analysis — invisible baseline debt.",
    takeawayFr:
      "Pas de changement baseline sans traçabilité : demande, impact, décision, mise à jour.",
    takeawayEn:
      "No baseline change without traceability: request, impact, decision, update.",
    decisionFr:
      "Refuser l'exécution d'un changement majeur non passé par le processus formel.",
    decisionEn:
      "Refuse execution of a major change not processed through formal flow.",
    flashcardFrontFr: "Demande de changement",
    flashcardFrontEn: "Change request",
    flashcardBackFr: "Proposition formelle de modifier le baseline avec analyse d'impact.",
    flashcardBackEn: "Formal proposal to modify baseline with impact analysis.",
    exercisePromptFr:
      "HelioRoute CR-007 : listez trois domaines d'impact à analyser avant décision.",
    exercisePromptEn:
      "HelioRoute CR-007: list three impact domains to analyze before decision.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Toute modification majeure au baseline devrait :",
      promptEn: "Every major baseline modification should:",
      explanationCorrectFr: "Passer par un processus documenté avec analyse d'impact.",
      explanationCorrectEn: "Go through a documented process with impact analysis.",
      difficulty: 1,
      options: [
        opt(
          "Passer par un processus documenté avec analyse d'impact",
          "Go through documented process with impact analysis",
          true
        ),
        opt(
          "Être implémentée immédiatement si le sponsor insiste",
          "Be implemented immediately if sponsor insists",
          false,
          "L'urgence n'annule pas la gouvernance — accélérer le processus, pas le contourner.",
          "Urgency does not cancel governance — speed the process, don't bypass it."
        ),
        opt(
          "Être gérée uniquement par l'équipe technique",
          "Be handled by technical team only",
          false,
          "Les changements baseline touchent souvent coût, planning et parties prenantes.",
          "Baseline changes often touch cost, schedule, and stakeholders."
        ),
        opt(
          "Ne jamais être documentée pour gagner du temps",
          "Never be documented to save time",
          false,
          "Sans documentation, traçabilité et budget deviennent incohérents.",
          "Without documentation, traceability and budget become inconsistent."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Situation : le sponsor demande une intégration réglementaire non prévue (+4 sem., chemin critique). Première action ?",
        promptEn:
          "Situation: sponsor requests unplanned regulatory integration (+4 wk, critical path). First action?",
        explanationCorrectFr:
          "Ouvrir une demande de changement formelle et lancer l'analyse d'impact.",
        explanationCorrectEn:
          "Open formal change request and launch impact analysis.",
        difficulty: 2,
        options: [
          opt(
            "Ouvrir une demande de changement et analyser l'impact",
            "Open change request and analyze impact",
            true
          ),
          opt(
            "Démarrer le développement immédiatement",
            "Start development immediately",
            false,
            "Exécution sans analyse = dérive baseline non maîtrisée.",
            "Execution without analysis = uncontrolled baseline drift."
          ),
          opt(
            "Refuser sans discussion",
            "Refuse without discussion",
            false,
            "Refuser sans analyse ni options n'est pas une gestion professionnelle.",
            "Refusing without analysis or options is not professional management."
          ),
          opt(
            "Modifier le Gantt sans informer le sponsor",
            "Update Gantt without informing sponsor",
            false,
            "Changement non communiqué = rupture de confiance et gouvernance.",
            "Undisclosed change = broken trust and governance."
          ),
        ],
      }),
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Quelle différence clé entre changement de produit et changement organisationnel ?",
        promptEn:
          "What key difference between product change and organizational change?",
        explanationCorrectFr:
          "Produit = modifier le livrable ; organisationnel = adoption et comportements des utilisateurs.",
        explanationCorrectEn:
          "Product = modify deliverable; organizational = user adoption and behaviors.",
        difficulty: 2,
        options: [
          opt(
            "Produit = livrable ; organisationnel = adoption utilisateurs",
            "Product = deliverable; organizational = user adoption",
            true
          ),
          opt(
            "Ils sont identiques en pratique",
            "They are identical in practice",
            false,
            "Confondre les deux mène à livrer sans adoption.",
            "Confusing them leads to delivery without adoption."
          ),
          opt(
            "Organisationnel ne concerne que le budget",
            "Organizational only concerns budget",
            false,
            "L'adoption touche formation, communication, résistance au changement.",
            "Adoption touches training, communication, change resistance."
          ),
          opt(
            "Changement produit ne touche jamais le planning",
            "Product change never affects schedule",
            false,
            "Un changement produit peut fortement impacter planning et coût.",
            "Product change can strongly impact schedule and cost."
          ),
        ],
      }),
    ],
  }),

  buildPmpLesson({
    slug: "procurement-basics",
    titleFr: "Bases de l'approvisionnement",
    titleEn: "Procurement Basics",
    descriptionFr:
      "Acheter biens et services externes avec critères, contrats et suivi fournisseur.",
    descriptionEn:
      "Acquire external goods and services with criteria, contracts, and vendor tracking.",
    moduleSlug: MOD,
    sortOrder: 11,
    estimatedMinutes: 9,
    difficulty: "BEGINNER",
    skillSlug: "pmp-process",
    learningObjective: "APPLY",
    objectiveFr:
      "Définir critères de sélection fournisseur et distinguer achat vs make-or-buy.",
    objectiveEn:
      "Define vendor selection criteria and distinguish purchase vs make-or-buy.",
    explanationFr:
      "L'approvisionnement couvre : besoin identifié, make-or-buy (fabriquer ou acheter), critères de sélection (prix, délai, qualité, support), appel d'offres ou négociation, contrat (SLA, pénalités, conditions de paiement) et suivi performance fournisseur. HelioRoute doit intégrer un module GPS : make-or-buy → acheter (expertise externe, délai court). Critères : API compatible, déploiement < 8 sem., support 24/7, références secteur transport. Le contrat inclut pénalités retard et clause de sortie si non-performance.",
    explanationEn:
      "Procurement covers: identified need, make-or-buy, selection criteria (price, lead time, quality, support), RFP or negotiation, contract (SLA, penalties, payment terms), and vendor performance tracking. HelioRoute must integrate GPS module: make-or-buy → buy (external expertise, short timeline). Criteria: compatible API, deployment < 8 wk, 24/7 support, transport sector references. Contract includes delay penalties and exit clause for non-performance.",
    exampleFr:
      "HelioRoute GPS : RFP à 3 fournisseurs, grille pondérée (délai 40 %, prix 30 %, qualité 30 %).",
    exampleEn:
      "HelioRoute GPS: RFP to 3 vendors, weighted grid (lead time 40%, price 30%, quality 30%).",
    practicalFr:
      "Listez trois critères de sélection pour un fournisseur logiciel critique.",
    practicalEn:
      "List three selection criteria for a critical software vendor.",
    mistakeFr:
      "Choisir le moins cher sans SLA ni pénalités — économie initiale, coût total plus élevé.",
    mistakeEn:
      "Choosing cheapest without SLA or penalties — initial savings, higher total cost.",
    takeawayFr:
      "Approvisionnement = critères clairs + contrat + suivi ; pas seulement signature.",
    takeawayEn:
      "Procurement = clear criteria + contract + tracking; not just signing.",
    decisionFr:
      "Inclure SLA, pénalités et critères d'acceptation dans tout contrat fournisseur critique.",
    decisionEn:
      "Include SLA, penalties, and acceptance criteria in every critical vendor contract.",
    flashcardFrontFr: "Make-or-buy",
    flashcardFrontEn: "Make-or-buy",
    flashcardBackFr: "Décision : produire en interne ou acheter à un fournisseur externe.",
    flashcardBackEn: "Decision: build in-house or buy from external vendor.",
    exercisePromptFr:
      "HelioRoute GPS : justifiez make-or-buy et proposez deux clauses contractuelles essentielles.",
    exercisePromptEn:
      "HelioRoute GPS: justify make-or-buy and propose two essential contract clauses.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "HelioRoute manque d'expertise GPS et le délai est serré. Make-or-buy ?",
      promptEn: "HelioRoute lacks GPS expertise and timeline is tight. Make-or-buy?",
      explanationCorrectFr: "Acheter (buy) : expertise externe et délai plus court que développement interne.",
      explanationCorrectEn: "Buy: external expertise and shorter timeline than internal build.",
      difficulty: 1,
      options: [
        opt("Acheter (buy) auprès d'un spécialiste", "Buy from a specialist vendor", true),
        opt("Fabriquer (make) en interne sans expérience", "Make in-house without experience", false, "Sans expertise, le risque délai et qualité explose.", "Without expertise, schedule and quality risk explode."),
        opt("Reporter indéfiniment la décision", "Postpone decision indefinitely", false, "Reporter bloque le chemin critique.", "Postponing blocks critical path."),
        opt("Abandonner le module GPS", "Drop GPS module", false, "Sans analyse d'impact, abandonner peut violer l'objectif business.", "Without impact analysis, dropping may violate business objective."),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "resource-management",
    titleFr: "Gestion des ressources",
    titleEn: "Resource Management",
    descriptionFr:
      "Planifier, allouer et communiquer autour des ressources humaines et matérielles.",
    descriptionEn:
      "Plan, allocate, and communicate around human and material resources.",
    moduleSlug: MOD,
    sortOrder: 12,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-process",
    learningObjective: "APPLY",
    objectiveFr:
      "Construire un plan de ressources incluant disponibilités et plan de communication associé.",
    objectiveEn:
      "Build a resource plan including availability and associated communication plan.",
    explanationFr:
      "La gestion des ressources identifie qui fait quoi, quand, avec quelles compétences et à quel taux d'allocation. Le plan de ressources anticipe congés, partage entre projets et compétences manquantes. La communication est indissociable : RACI clarifie rôles ; calendrier de comités (hebdo équipe, bi-mensuel sponsor) ; canaux (Slack ops, email comité) ; messages clés par audience. HelioRoute : 2 devs à 50 % sur un autre projet Q2 → conflit sur intégration GPS ; PM escalade et ajuste planning + communique impact au sponsor.",
    explanationEn:
      "Resource management identifies who does what, when, with which skills and allocation rate. The resource plan anticipates leave, cross-project sharing, and skill gaps. Communication is inseparable: RACI clarifies roles; meeting cadence (weekly team, bi-monthly sponsor); channels (ops Slack, committee email); key messages per audience. HelioRoute: 2 devs at 50% on another project Q2 → conflict on GPS integration; PM escalates, adjusts schedule + communicates impact to sponsor.",
    exampleFr:
      "HelioRoute : matrice RACI pour go-live + plan com : chauffeurs (formation), ops (runbook), sponsor (décision budget).",
    exampleEn:
      "HelioRoute: RACI for go-live + comm plan: drivers (training), ops (runbook), sponsor (budget decision).",
    practicalFr:
      "Esquissez un RACI pour trois rôles sur un jalon critique et le canal de communication par audience.",
    practicalEn:
      "Sketch a RACI for three roles on a critical milestone and communication channel per audience.",
    mistakeFr:
      "Planifier des ressources à 100 % sur plusieurs projets simultanés — sur-allocation garantie.",
    mistakeEn:
      "Planning resources at 100% on multiple simultaneous projects — guaranteed over-allocation.",
    takeawayFr:
      "Ressources + communication = même plan : qui, quoi, quand, et qui est informé.",
    takeawayEn:
      "Resources + communication = same plan: who, what, when, and who is informed.",
    decisionFr:
      "Escalader les conflits de ressources dès qu'ils touchent le chemin critique.",
    decisionEn:
      "Escalate resource conflicts as soon as they hit the critical path.",
    flashcardFrontFr: "Plan de ressources",
    flashcardFrontEn: "Resource plan",
    flashcardBackFr: "Qui, compétences, allocation, disponibilité — lié au planning.",
    flashcardBackEn: "Who, skills, allocation, availability — linked to schedule.",
    exercisePromptFr:
      "HelioRoute : 2 devs sur-alloués Q2. Proposez ajustement ressource + message sponsor en 3 lignes.",
    exercisePromptEn:
      "HelioRoute: 2 devs over-allocated Q2. Propose resource adjustment + 3-line sponsor message.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Un conflit de ressources touche le chemin critique. Première action ?",
      promptEn: "A resource conflict hits the critical path. First action?",
      explanationCorrectFr: "Escalader et ajuster allocation ou planning, puis communiquer l'impact.",
      explanationCorrectEn: "Escalate and adjust allocation or schedule, then communicate impact.",
      difficulty: 2,
      options: [
        opt(
          "Escalader, ajuster allocation/planning, communiquer",
          "Escalate, adjust allocation/schedule, communicate",
          true
        ),
        opt("Ignorer jusqu'à la prochaine rétrospective", "Ignore until next retrospective", false, "Le chemin critique ne tolère pas l'inaction.", "Critical path does not tolerate inaction."),
        opt("Ajouter des tâches sans changer les ressources", "Add tasks without changing resources", false, "Plus de travail sans capacité = échec prévisible.", "More work without capacity = predictable failure."),
        opt("Communiquer sans proposer d'options", "Communicate without proposing options", false, "Escalade efficace = impact + options, pas seulement alerte.", "Effective escalation = impact + options, not alert alone."),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "project-controls-metrics",
    titleFr: "Contrôles et métriques projet",
    titleEn: "Project Controls and Metrics",
    descriptionFr:
      "Piloter avec SPI, CPI, burn-down et tableaux de bord orientés décision.",
    descriptionEn:
      "Steer with SPI, CPI, burn-down, and decision-oriented dashboards.",
    moduleSlug: MOD,
    sortOrder: 13,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-process",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Interpréter SPI et CPI et relier métriques à actions correctives.",
    objectiveEn:
      "Interpret SPI and CPI and link metrics to corrective actions.",
    explanationFr:
      "Les contrôles projet comparent performance réelle vs baseline. SPI (schedule performance index) = EV/PV : < 1 = retard. CPI (cost performance index) = EV/AC : < 1 = dépassement. Un burn-down montre le travail restant vs le temps. HelioRoute semaine 20 : SPI 0,88, CPI 0,83 → alerte double. Actions : revue scope (CR en attente ?), ressources GPS, renégociation fournisseur. Éviter vanity metrics (nombre de réunions) ; privilégier indicateurs liés aux objectifs (retards livraison, % UAT passants).",
    explanationEn:
      "Project controls compare actual vs baseline performance. SPI (schedule performance index) = EV/PV: < 1 = behind. CPI (cost performance index) = EV/AC: < 1 = over budget. Burn-down shows remaining work vs time. HelioRoute week 20: SPI 0.88, CPI 0.83 → double alert. Actions: scope review (pending CR?), GPS resources, vendor renegotiation. Avoid vanity metrics (meeting count); favor indicators tied to objectives (delivery delays, % UAT passing).",
    exampleFr:
      "HelioRoute SPI 0,88 + CPI 0,83 → comité : options scope swap, budget +60 k€, ou date +3 sem.",
    exampleEn:
      "HelioRoute SPI 0.88 + CPI 0.83 → committee: scope swap, budget +€60k, or date +3 wk options.",
    practicalFr:
      "Si SPI = 0,9 et CPI = 1,05, que concluez-vous et quelle action prioritaire ?",
    practicalEn:
      "If SPI = 0.9 and CPI = 1.05, what do you conclude and what priority action?",
    mistakeFr:
      "Piloter au statut RAG sans EV/AC — le vert subjectif masque les dérives chiffrées.",
    mistakeEn:
      "Steering on subjective RAG without EV/AC — green status hides numeric drift.",
    takeawayFr:
      "Métrique utile = déclenche une décision ; sinon c'est du bruit.",
    takeawayEn:
      "Useful metric = triggers a decision; otherwise it's noise.",
    decisionFr:
      "Déclencher revue corrective quand SPI ou CPI < 0,9 deux périodes consécutives.",
    decisionEn:
      "Trigger corrective review when SPI or CPI < 0.9 for two consecutive periods.",
    flashcardFrontFr: "SPI / CPI",
    flashcardFrontEn: "SPI / CPI",
    flashcardBackFr: "SPI = EV/PV (délai) ; CPI = EV/AC (coût). < 1 = dérive.",
    flashcardBackEn: "SPI = EV/PV (schedule); CPI = EV/AC (cost). < 1 = variance.",
    exercisePromptFr:
      "HelioRoute : SPI 0,88, CPI 0,83. Proposez deux actions correctives et une métrique de succès.",
    exercisePromptEn:
      "HelioRoute: SPI 0.88, CPI 0.83. Propose two corrective actions and one success metric.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "SPI = 0,88 signifie principalement :",
      promptEn: "SPI = 0.88 mainly means:",
      explanationCorrectFr: "On avance moins vite que prévu (EV < PV) — retard planning.",
      explanationCorrectEn: "Progressing slower than planned (EV < PV) — schedule delay.",
      difficulty: 2,
      options: [
        opt("Retard par rapport au planning", "Behind schedule", true),
        opt("Dépassement budgétaire", "Over budget", false, "Le dépassement budgétaire se lit via CPI, pas SPI.", "Over budget is read via CPI, not SPI."),
        opt("Projet terminé en avance", "Project finished early", false, "SPI > 1 indiquerait avance ; 0,88 = retard.", "SPI > 1 would mean ahead; 0.88 = behind."),
        opt("Qualité insuffisante", "Insufficient quality", false, "SPI mesure avancement planning, pas qualité directement.", "SPI measures schedule progress, not quality directly."),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "integration",
    titleFr: "Intégration de projet",
    titleEn: "Project Integration",
    descriptionFr:
      "Coordonner tous les domaines pour une livraison cohérente et des trade-offs explicites.",
    descriptionEn:
      "Coordinate all domains for coherent delivery and explicit trade-offs.",
    moduleSlug: MOD,
    sortOrder: 15,
    estimatedMinutes: 10,
    difficulty: "ADVANCED",
    skillSlug: "integration",
    learningObjective: "DECIDE",
    objectiveFr:
      "Arbitrer un conflit multi-domaines (planning vs qualité vs coût) avec recommandation documentée.",
    objectiveEn:
      "Arbitrate a multi-domain conflict (schedule vs quality vs cost) with documented recommendation.",
    explanationFr:
      "L'intégration relie périmètre, planning, coûts, qualité, risques, ressources, communication, approvisionnement et changements. Le chef de projet arbitre les trade-offs quand les objectifs entrent en conflit — pas en optimisant un seul domaine. HelioRoute : sponsor exige go-live dans 2 semaines (planning) mais UAT à 78 % (qualité) et budget épuisé (coût). Intégration = présenter options : go-live partiel scope réduit, report 3 sem. avec UAT complet, ou budget +40 k€ pour crashing tests. Charte autorise ; PMP guide ; clôture formalise livrables et leçons.",
    explanationEn:
      "Integration connects scope, schedule, cost, quality, risk, resources, communication, procurement, and change. The PM arbitrates trade-offs when objectives conflict — not by optimizing one domain alone. HelioRoute: sponsor demands go-live in 2 weeks (schedule) but UAT at 78% (quality) and budget exhausted (cost). Integration = present options: partial go-live reduced scope, 3-week delay with full UAT, or budget +€40k for test crashing. Charter authorizes; PMP guides; closing formalizes deliverables and lessons.",
    exampleFr:
      "HelioRoute comité : 3 options chiffrées (date, coût, qualité) → sponsor choisit report 3 sem. + scope reporté v2.",
    exampleEn:
      "HelioRoute committee: 3 quantified options (date, cost, quality) → sponsor chooses 3-week delay + v2 scope deferred.",
    practicalFr:
      "Donnez un trade-off planning vs qualité sur un projet connu et comment vous le présenteriez.",
    practicalEn:
      "Give a schedule vs quality trade-off on a known project and how you would present it.",
    mistakeFr:
      "Laisser chaque domaine optimiser localement sans arbitrage global — succès partiel, échec projet.",
    mistakeEn:
      "Letting each domain optimize locally without global arbitration — partial success, project failure.",
    takeawayFr:
      "Intégration = coordonner et arbitrer ; le PM porte la vue système.",
    takeawayEn:
      "Integration = coordinate and arbitrate; the PM holds the system view.",
    decisionFr:
      "Présenter toujours options chiffrées avec impact multi-domaines avant décision sponsor.",
    decisionEn:
      "Always present quantified options with cross-domain impact before sponsor decision.",
    flashcardFrontFr: "Intégration projet",
    flashcardFrontEn: "Project integration",
    flashcardBackFr: "Coordonner domaines et arbitrer trade-offs globaux.",
    flashcardBackEn: "Coordinate domains and arbitrate global trade-offs.",
    exercisePromptFr:
      "HelioRoute : go-live 2 sem. vs UAT 78 %. Rédigez trois options avec impact date/coût/qualité.",
    exercisePromptEn:
      "HelioRoute: go-live 2 wk vs UAT 78%. Write three options with date/cost/quality impact.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Quel rôle central joue l'intégration en projet ?",
      promptEn: "What central role does integration play in projects?",
      explanationCorrectFr: "Coordonner les domaines et arbitrer les trade-offs globaux.",
      explanationCorrectEn: "Coordinate domains and arbitrate global trade-offs.",
      difficulty: 3,
      options: [
        opt(
          "Coordonner domaines et arbitrer trade-offs",
          "Coordinate domains and arbitrate trade-offs",
          true
        ),
        opt("Remplacer tous les sous-plans", "Replace all sub-plans", false, "L'intégration coordonne les sous-plans, ne les remplace pas.", "Integration coordinates sub-plans, does not replace them."),
        opt("Éliminer la gestion des risques", "Eliminate risk management", false, "Les risques restent un domaine clé coordonné par l'intégration.", "Risk remains a key domain coordinated by integration."),
        opt("Déléguer toutes décisions à l'équipe technique", "Delegate all decisions to technical team", false, "L'arbitrage multi-domaines relève du PM / comité.", "Cross-domain arbitration belongs to PM / committee."),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "lessons-learned",
    titleFr: "Leçons apprises",
    titleEn: "Lessons Learned",
    descriptionFr:
      "Capturer et réutiliser les enseignements tout au long du projet, pas seulement à la clôture.",
    descriptionEn:
      "Capture and reuse learnings throughout the project, not only at closing.",
    moduleSlug: MOD,
    sortOrder: 14,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: "pmp-process",
    learningObjective: "APPLY",
    objectiveFr:
      "Rédiger une leçon apprise actionnable (contexte, leçon, recommandation) et planifier sa diffusion.",
    objectiveEn:
      "Write an actionable lesson learned (context, lesson, recommendation) and plan its dissemination.",
    explanationFr:
      "Les leçons apprises documentent ce qui a fonctionné, ce qui a échoué et ce qu'une future équipe devrait faire différemment. Format efficace : contexte, leçon, recommandation actionnable, owner de diffusion. HelioRoute post-mortem partiel (vague 1) : « Estimation fournisseur GPS en analogique seule → retard 3 sem. » → recommandation : « bottom-up + clause pénalité contrat pour intégrations critiques ». Capturer en continu (rétrospectives, fin de phase) évite l'amnésie organisationnelle. Stocker dans un référentiel accessible, pas dans un email oublié.",
    explanationEn:
      "Lessons learned document what worked, what failed, and what a future team should do differently. Effective format: context, lesson, actionable recommendation, dissemination owner. HelioRoute partial post-mortem (wave 1): 'GPS vendor estimate using analogous only → 3-week delay' → recommendation: 'bottom-up + penalty clause for critical integrations'. Capture continuously (retrospectives, phase end) to avoid organizational amnesia. Store in an accessible repository, not a forgotten email.",
    exampleFr:
      "HelioRoute LL-003 : contexte GPS, leçon estimation, reco bottom-up + pénalités → partagé PMO avant vague 2.",
    exampleEn:
      "HelioRoute LL-003: GPS context, estimation lesson, bottom-up + penalties reco → shared with PMO before wave 2.",
    practicalFr:
      "Rédigez une leçon apprise en trois lignes (contexte, leçon, recommandation) sur un projet passé.",
    practicalEn:
      "Write a three-line lesson learned (context, lesson, recommendation) from a past project.",
    mistakeFr:
      "Attendre la clôture pour documenter — les équipes oublient et changent entre-temps.",
    mistakeEn:
      "Waiting until closing to document — teams forget and turnover happens.",
    takeawayFr:
      "Leçon apprise = action future, pas blame ; capturer tôt et diffuser largement.",
    takeawayEn:
      "Lesson learned = future action, not blame; capture early and disseminate widely.",
    decisionFr:
      "Après chaque phase ou incident majeur, consigner au moins une leçon dans le référentiel PMO.",
    decisionEn:
      "After each phase or major incident, log at least one lesson in the PMO repository.",
    flashcardFrontFr: "Leçon apprise",
    flashcardFrontEn: "Lesson learned",
    flashcardBackFr: "Contexte + enseignement + recommandation actionnable.",
    flashcardBackEn: "Context + insight + actionable recommendation.",
    exercisePromptFr:
      "HelioRoute retard GPS : rédigez LL-003 (contexte, leçon, recommandation) en format PMO.",
    exercisePromptEn:
      "HelioRoute GPS delay: write LL-003 (context, lesson, recommendation) in PMO format.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Quand capturer les leçons apprises est le plus efficace ?",
      promptEn: "When is capturing lessons learned most effective?",
      explanationCorrectFr: "En continu (rétrospectives, fin de phase), pas seulement à la clôture.",
      explanationCorrectEn: "Continuously (retrospectives, phase end), not only at closing.",
      difficulty: 1,
      options: [
        opt(
          "En continu tout au long du projet",
          "Continuously throughout the project",
          true
        ),
        opt("Uniquement le dernier jour du projet", "Only on the project's last day", false, "Trop tard : détails oubliés, équipe dispersée.", "Too late: details forgotten, team dispersed."),
        opt("Jamais — cela ralentit la livraison", "Never — it slows delivery", false, "Sans leçons, les erreurs se répètent et coûtent plus cher.", "Without lessons, mistakes repeat and cost more."),
        opt("Seulement si le projet a échoué", "Only if the project failed", false, "Les succès aussi contiennent des pratiques à répliquer.", "Successes also contain practices to replicate."),
      ],
    }),
  }),
];
