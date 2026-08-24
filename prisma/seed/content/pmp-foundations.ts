import { buildPmpLesson, opt, q } from "./pmp-factory";
import type { PmpLesson } from "./pmp-types";

export const PMP_FOUNDATIONS_LESSONS: PmpLesson[] = [
  buildPmpLesson({
    slug: "what-is-project-management",
    titleFr: "Qu'est-ce que la gestion de projet ?",
    titleEn: "What is Project Management?",
    descriptionFr:
      "Distinguer projet et opérations, et situer la gestion de projet comme coordination temporaire vers un résultat unique.",
    descriptionEn:
      "Distinguish projects from operations, and place project management as temporary coordination toward a unique result.",
    moduleSlug: "foundations",
    sortOrder: 0,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: "pmp-foundations",
    learningObjective: "IDENTIFY",
    isShort: true,
    shortDurationSeconds: 155,
    objectiveFr:
      "Reconnaître un projet par ses traits temporaires et uniques, et le différencier des opérations courantes.",
    objectiveEn:
      "Recognize a project by its temporary and unique traits, and differentiate it from ongoing operations.",
    explanationFr:
      "Un projet est une initiative temporaire menée pour créer un résultat unique : produit, service ou changement mesurable. Il a un début et une fin, un objectif défini et des contraintes (temps, coût, périmètre). La gestion de projet coordonne ressources, parties prenantes et risques pour atteindre cet objectif, puis se termine. Les opérations courantes, elles, sont répétitives et permanentes : elles maintiennent l'activité (support client, paie, production standard). Confondre les deux mène à appliquer le mauvais niveau de formalisme — un correctif urgent en production n'est pas forcément un « mini-projet » si c'est une tâche récurrente.",
    explanationEn:
      "A project is a temporary initiative undertaken to create a unique result: product, service, or measurable change. It has a start and end, a defined objective, and constraints (time, cost, scope). Project management coordinates resources, stakeholders, and risks to reach that objective, then ends. Ongoing operations are repetitive and permanent: they sustain the business (customer support, payroll, standard production). Confusing the two leads to the wrong level of formality — an urgent production fix is not necessarily a 'mini-project' if it is a recurring task.",
    exampleFr:
      "Helios Retail lance une refonte e-commerce (6 mois, équipe dédiée, budget fixe) : projet. Traiter les commandes du jour et répondre au SAV : opérations. Migrer 200 magasins vers un nouveau POS en 18 mois : projet ; encaisser les ventes quotidiennes : opérations.",
    exampleEn:
      "Helios Retail launches an e-commerce redesign (6 months, dedicated team, fixed budget): project. Processing daily orders and handling support: operations. Migrating 200 stores to a new POS over 18 months: project; recording daily sales: operations.",
    practicalFr:
      "Listez trois initiatives dans votre organisation. Pour chacune, notez : temporaire ou permanent ? Résultat unique ou répétitif ?",
    practicalEn:
      "List three initiatives in your organization. For each, note: temporary or permanent? Unique or repetitive result?",
    mistakeFr:
      "Appeler « projet » toute tâche urgente — l'urgence ne définit pas un projet ; la temporalité et l'unicité du résultat le font.",
    mistakeEn:
      "Calling every urgent task a 'project' — urgency does not define a project; temporariness and uniqueness of the result do.",
    takeawayFr:
      "Projet = temporaire + résultat unique ; opérations = répétitif + permanent.",
    takeawayEn:
      "Project = temporary + unique result; operations = repetitive + permanent.",
    decisionFr:
      "Avant de lancer une initiative, demander : « Est-ce temporaire avec un livrable unique, ou une activité récurrente ? »",
    decisionEn:
      "Before launching an initiative, ask: 'Is this temporary with a unique deliverable, or a recurring activity?'",
    flashcardFrontFr: "Projet",
    flashcardFrontEn: "Project",
    flashcardBackFr: "Initiative temporaire créant un résultat unique.",
    flashcardBackEn: "Temporary initiative creating a unique result.",
    exercisePromptFr:
      "Identifiez un projet et une opération courante chez Helios Retail. Quelle erreur éviteriez-vous en les confondant ?",
    exercisePromptEn:
      "Identify one project and one ongoing operation at Helios Retail. What mistake would you avoid by confusing them?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Quelle caractéristique distingue un projet d'une opération courante ?",
      promptEn: "Which characteristic distinguishes a project from ongoing operations?",
      explanationCorrectFr: "Un projet est temporaire et produit un résultat unique.",
      explanationCorrectEn: "A project is temporary and produces a unique result.",
      difficulty: 1,
      options: [
        opt("Il est permanent", "It is permanent", false, "La permanence caractérise les opérations, pas les projets.", "Permanence characterizes operations, not projects."),
        opt("Il est temporaire et unique", "It is temporary and unique", true),
        opt("Il n'a pas d'objectif", "It has no objective", false, "Projets et opérations ont tous deux des objectifs — la nature du résultat diffère.", "Both projects and operations have objectives — the nature of the result differs."),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "project-roles",
    titleFr: "Rôles et responsabilités",
    titleEn: "Project Roles and Responsibilities",
    descriptionFr:
      "Clarifier sponsor, chef de projet, équipe et parties prenantes pour accélérer les décisions.",
    descriptionEn:
      "Clarify sponsor, project manager, team, and stakeholders to speed decisions.",
    moduleSlug: "foundations",
    sortOrder: 1,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: "pmp-foundations",
    learningObjective: "IDENTIFY",
    objectiveFr:
      "Attribuer les responsabilités clés (sponsor, PM, équipe, parties prenantes) dans un mini-cas.",
    objectiveEn:
      "Assign key responsibilities (sponsor, PM, team, stakeholders) in a mini-case.",
    explanationFr:
      "Le sponsor apporte autorité, financement et levée d'obstacles au niveau organisationnel — il valide le business case et arbitre au-delà du pouvoir du chef de projet. Le chef de projet coordonne la planification, l'intégration des domaines et la communication ; il ne doit pas micro-gérer chaque tâche technique. L'équipe projet exécute les livrables dans son domaine d'expertise. Les parties prenantes influencent ou sont impactées sans toujours exécuter : utilisateurs, juridique, sécurité. Des rôles flous créent des décisions parallèles et des retards d'escalade.",
    explanationEn:
      "The sponsor brings authority, funding, and organizational escalation — they validate the business case and arbitrate beyond the project manager's power. The project manager coordinates planning, domain integration, and communication; they should not micromanage every technical task. The project team executes deliverables in their expertise area. Stakeholders influence or are impacted without always executing: users, legal, security. Unclear roles create parallel decisions and delayed escalation.",
    exampleFr:
      "Projet CRM Helios : le sponsor (directrice digitale) débloque le budget et tranche un conflit priorités avec les ventes. Le PM planifie, tient le registre des risques et facilite les comités. Deux développeurs et une UX designer livrent le backlog. Le responsable conformité (partie prenante) valide le traitement des données sans coder.",
    exampleEn:
      "Helios CRM project: the sponsor (digital director) unlocks budget and resolves a priority conflict with sales. The PM plans, maintains the risk register, and facilitates committees. Two developers and a UX designer deliver the backlog. The compliance lead (stakeholder) validates data handling without coding.",
    practicalFr:
      "Pour un projet que vous connaissez, qui est sponsor ? Qui exécute ? Qui influence sans exécuter ?",
    practicalEn:
      "For a project you know, who is sponsor? Who executes? Who influences without executing?",
    mistakeFr:
      "Demander au sponsor de coordonner le planning quotidien — ou au PM de financer le projet sans autorité sponsor.",
    mistakeEn:
      "Asking the sponsor to coordinate daily scheduling — or the PM to fund the project without sponsor authority.",
    takeawayFr:
      "Sponsor = autorité et financement ; PM = intégration et coordination ; équipe = livrables.",
    takeawayEn:
      "Sponsor = authority and funding; PM = integration and coordination; team = deliverables.",
    decisionFr:
      "En cas de blocage hors pouvoir du PM, escalader au sponsor avec options — ne pas improviser seul.",
    decisionEn:
      "When blocked beyond PM authority, escalate to the sponsor with options — do not improvise alone.",
    flashcardFrontFr: "Sponsor",
    flashcardFrontEn: "Sponsor",
    flashcardBackFr: "Autorité, financement et levée d'obstacles organisationnels.",
    flashcardBackEn: "Authority, funding, and organizational obstacle removal.",
    exercisePromptFr:
      "Décrivez le rôle du chef de projet vs le sponsor sur le projet CRM Helios. Une erreur à éviter ?",
    exercisePromptEn:
      "Describe the project manager vs sponsor roles on the Helios CRM project. One mistake to avoid?",
    question: q({
      type: "TRUE_FALSE",
      promptFr: "Le sponsor est responsable de la coordination quotidienne du projet.",
      promptEn: "The sponsor is responsible for day-to-day project coordination.",
      explanationCorrectFr: "Faux. La coordination quotidienne relève du chef de projet.",
      explanationCorrectEn: "False. Day-to-day coordination is the project manager's responsibility.",
      difficulty: 1,
      options: [
        opt("Vrai", "True", false, "Le sponsor arbitre et débloque ; le PM coordonne au quotidien.", "The sponsor arbitrates and unblocks; the PM coordinates daily."),
        opt("Faux", "False", true),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "project-lifecycle-basics",
    titleFr: "Cycle de vie projet — bases",
    titleEn: "Project Lifecycle Basics",
    descriptionFr:
      "Parcourir démarrage, planification, exécution, suivi et clôture — et savoir où agir.",
    descriptionEn:
      "Walk through initiating, planning, executing, monitoring, and closing — and know where to act.",
    moduleSlug: "foundations",
    sortOrder: 2,
    estimatedMinutes: 9,
    difficulty: "BEGINNER",
    skillSlug: "pmp-foundations",
    learningObjective: "APPLY",
    objectiveFr:
      "Placer une décision projet (charte, baseline, livraison, leçons apprises) dans la bonne phase du cycle de vie.",
    objectiveEn:
      "Place a project decision (charter, baseline, delivery, lessons learned) in the correct lifecycle phase.",
    explanationFr:
      "Le cycle de vie projet décrit les grandes phases : démarrage (charte, parties prenantes clés), planification (périmètre, planning, budget, risques — baseline), exécution (production des livrables), suivi et contrôle (écarts, changements, reporting), clôture (acceptation, transfert, leçons apprises). En agile, les phases se superposent par itérations, mais la logique reste : on ne baselines pas après la livraison, et on ne skip pas la clôture. Chaque phase produit des décisions distinctes — confondre planification et exécution crée de la dette de gouvernance.",
    explanationEn:
      "The project lifecycle describes major phases: initiating (charter, key stakeholders), planning (scope, schedule, budget, risks — baseline), executing (producing deliverables), monitoring and controlling (variances, changes, reporting), closing (acceptance, handover, lessons learned). In agile, phases overlap by iteration, but the logic remains: you do not baseline after delivery, and you do not skip closing. Each phase produces distinct decisions — confusing planning and execution creates governance debt.",
    exampleFr:
      "Helios ERP : charte signée en démarrage ; WBS et planning baseline en planification ; développement des modules en exécution ; analyse d'écart mensuelle en suivi ; transfert au support et rétro en clôture. Ajouter une intégration majeure sans repasser par analyse d'impact = mélange exécution et contrôle.",
    exampleEn:
      "Helios ERP: charter signed at initiating; WBS and schedule baseline at planning; module development at executing; monthly variance analysis at monitoring; handover to support and retro at closing. Adding a major integration without impact analysis = mixing execution and control.",
    practicalFr:
      "Sur un projet passé : où avez-vous validé la charte ? Où avez-vous gelé le planning ? Où avez-vous capturé les leçons apprises ?",
    practicalEn:
      "On a past project: where did you validate the charter? Where did you freeze the schedule? Where did you capture lessons learned?",
    mistakeFr:
      "Passer directement à l'exécution sans baseline ni critères d'acceptation — puis « planifier en cours de route » sous pression.",
    mistakeEn:
      "Jumping straight to execution without baseline or acceptance criteria — then 'planning on the fly' under pressure.",
    takeawayFr:
      "Chaque phase a un but : démarrer, planifier, livrer, contrôler, clôturer — ne pas les fusionner par défaut.",
    takeawayEn:
      "Each phase has a purpose: initiate, plan, deliver, control, close — do not merge them by default.",
    decisionFr:
      "Avant une action majeure, demander : « Suis-je en planification, exécution ou contrôle ? » et utiliser l'artefact adapté.",
    decisionEn:
      "Before a major action, ask: 'Am I in planning, executing, or controlling?' and use the right artifact.",
    flashcardFrontFr: "Cycle de vie",
    flashcardFrontEn: "Lifecycle",
    flashcardBackFr: "Démarrage → planification → exécution → suivi → clôture.",
    flashcardBackEn: "Initiating → planning → executing → monitoring → closing.",
    exercisePromptFr:
      "Helios ERP : le sponsor demande une date ferme avant toute planification détaillée. Quelle phase est sautée ? Risque ?",
    exercisePromptEn:
      "Helios ERP: the sponsor demands a firm date before detailed planning. Which phase is skipped? Risk?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Où capture-t-on typiquement les leçons apprises pour un projet ?",
      promptEn: "Where are lessons learned typically captured for a project?",
      explanationCorrectFr: "En clôture — avec transfert formel des livrables.",
      explanationCorrectEn: "At closing — with formal handover of deliverables.",
      difficulty: 2,
      options: [
        opt("En démarrage, avant la charte", "At initiating, before the charter", false, "Le démarrage pose le cadre ; les leçons viennent après l'expérience du projet.", "Initiating sets the frame; lessons come after project experience."),
        opt("En clôture", "At closing", true),
        opt("Uniquement en planification", "Only in planning", false, "La planification anticipe ; les leçons apprises documentent ce qui s'est réellement passé.", "Planning anticipates; lessons learned document what actually happened."),
      ],
    }),
  }),
];
