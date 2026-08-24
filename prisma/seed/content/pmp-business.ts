import { buildPmpLesson, opt, q } from "./pmp-factory";
import type { PmpLesson } from "./pmp-types";

const MOD = "business-environment";

export const PMP_BUSINESS_LESSONS: PmpLesson[] = [
  buildPmpLesson({
    slug: "governance",
    titleFr: "Gouvernance de projet",
    titleEn: "Project Governance",
    descriptionFr:
      "Structures de décision, escalade et alignement avec l'organisation.",
    descriptionEn:
      "Decision structures, escalation, and organizational alignment.",
    moduleSlug: MOD,
    sortOrder: 0,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "governance",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Décrire qui décide quoi (comité, sponsor, PM) et comment l'escalade fonctionne dans un programme multi-projets.",
    objectiveEn:
      "Describe who decides what (committee, sponsor, PM) and how escalation works in a multi-project program.",
    explanationFr:
      "La gouvernance définit les règles du jeu : qui approuve le budget, qui valide un changement majeur, qui arbitre un conflit de priorités entre projets. Un comité de pilotage (steering) se réunit périodiquement avec des informations synthétiques — statut, risques top, demandes de décision. Le chef de projet exécute dans le cadre approuvé et escalade quand une décision dépasse son mandat. Les politiques organisationnelles (achats, sécurité, RH) contraignent les choix sans être négociables au niveau projet. Une gouvernance claire évite les « décisions par corridor » qui contournent le processus.",
    explanationEn:
      "Governance defines the rules: who approves budget, who validates a major change, who arbitrates priority conflicts between projects. A steering committee meets periodically with synthesized information — status, top risks, decision requests. The project manager executes within the approved frame and escalates when a decision exceeds their mandate. Organizational policies (procurement, security, HR) constrain choices without being negotiable at project level. Clear governance avoids 'corridor decisions' that bypass the process.",
    exampleFr:
      "Programme Helios Cloud : le comité trimestriel valide les priorités portfolio et les budgets > 50 k€. Le PM du projet migration escalade un conflit calendrier avec le projet sécurité — le comité tranche en une session. Sans gouvernance, les deux PM négocient seuls et la date globale glisse.",
    exampleEn:
      "Helios Cloud program: the quarterly committee validates portfolio priorities and budgets > €50k. The migration project PM escalates a schedule conflict with the security project — the committee decides in one session. Without governance, both PMs negotiate alone and the overall date slips.",
    practicalFr:
      "Dessinez la chaîne d'escalade de votre projet : PM → ? → comité → sponsor. Où manque-t-il une règle claire ?",
    practicalEn:
      "Draw your project's escalation chain: PM → ? → committee → sponsor. Where is a rule missing?",
    mistakeFr:
      "Confondre gouvernance et micro-management — le comité décide les arbitrages, pas les tâches quotidiennes.",
    mistakeEn:
      "Confusing governance with micromanagement — the committee decides trade-offs, not daily tasks.",
    takeawayFr:
      "Gouvernance = cadre de décision et escalade, pas exécution opérationnelle.",
    takeawayEn:
      "Governance = decision framework and escalation, not operational execution.",
    decisionFr:
      "Documenter qui approuve quoi avant le premier conflit de priorités — pas après.",
    decisionEn:
      "Document who approves what before the first priority conflict — not after.",
    flashcardFrontFr: "Gouvernance",
    flashcardFrontEn: "Governance",
    flashcardBackFr: "Cadre de décision, escalade et alignement organisationnel.",
    flashcardBackEn: "Decision framework, escalation, and organizational alignment.",
    exercisePromptFr:
      "Décrivez le rôle d'un comité de pilotage sur le programme Helios Cloud. Une erreur fréquente à éviter ?",
    exercisePromptEn:
      "Describe a steering committee's role on the Helios Cloud program. One common mistake to avoid?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Quel objectif principal de la gouvernance de projet ?",
      promptEn: "What is the main goal of project governance?",
      explanationCorrectFr: "Assurer décisions claires et alignement avec l'organisation.",
      explanationCorrectEn: "Ensure clear decisions and alignment with the organization.",
      difficulty: 2,
      options: [
        opt("Éliminer le sponsor", "Eliminate the sponsor", false, "Le sponsor est central à la gouvernance.", "The sponsor is central to governance."),
        opt("Décisions claires et alignement organisationnel", "Clear decisions and organizational alignment", true),
        opt("Supprimer toute documentation", "Remove all documentation", false, "La gouvernance repose sur traçabilité et information.", "Governance relies on traceability and information."),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "compliance",
    titleFr: "Conformité et contraintes",
    titleEn: "Compliance and Constraints",
    descriptionFr:
      "Respecter réglementations, politiques et contraintes externes.",
    descriptionEn:
      "Respect regulations, policies, and external constraints.",
    moduleSlug: MOD,
    sortOrder: 1,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "compliance",
    learningObjective: "IDENTIFY",
    objectiveFr:
      "Distinguer contrainte (non négociable) et risque (incertain) sur un projet réglementé.",
    objectiveEn:
      "Distinguish constraint (non-negotiable) from risk (uncertain) on a regulated project.",
    explanationFr:
      "Les projets opèrent dans un cadre réglementaire et politique : protection des données (RGPD), sécurité, environnement, secteurs bancaire ou santé. Une contrainte limite les options de façon fixe : deadline légale, technologie imposée, budget plafonné par la direction. Un risque, lui, peut ou non se matérialiser. Identifier les contraintes en amont évite des redesigns coûteux en milieu de projet. La conformité est souvent non négociable — la traiter comme un risque « gérable » est une erreur fréquente en examen et en pratique.",
    explanationEn:
      "Projects operate within regulatory and policy frames: data protection (GDPR), security, environment, banking or healthcare sectors. A constraint limits options in a fixed way: legal deadline, imposed technology, budget capped by leadership. A risk may or may not materialize. Identifying constraints early avoids costly mid-project redesigns. Compliance is often non-negotiable — treating it as a 'manageable' risk is a common exam and practice mistake.",
    exampleFr:
      "Helios Health lance une app patient : contrainte = hébergement certifié HDS et consentement explicite (non négociable). Risque = retard d'un fournisseur d'authentification (incertain). Confondre les deux mène à choisir un cloud non certifié « pour gagner du temps ».",
    exampleEn:
      "Helios Health launches a patient app: constraint = certified HDS hosting and explicit consent (non-negotiable). Risk = delay from an authentication vendor (uncertain). Confusing the two leads to choosing uncertified cloud 'to save time.'",
    practicalFr:
      "Listez deux contraintes légales ou politiques et un risque pour un projet IT que vous connaissez.",
    practicalEn:
      "List two legal or policy constraints and one risk for an IT project you know.",
    mistakeFr:
      "Reporter la conformité « à la fin du projet » — les audits découvrent alors des refontes massives.",
    mistakeEn:
      "Deferring compliance 'to the end of the project' — audits then reveal massive rework.",
    takeawayFr:
      "Contrainte = limite fixe ; risque = événement incertain — ne pas les confondre.",
    takeawayEn:
      "Constraint = fixed limit; risk = uncertain event — do not confuse them.",
    decisionFr:
      "Cartographier contraintes réglementaires dès le cadrage — avant le choix d'architecture.",
    decisionEn:
      "Map regulatory constraints at framing — before architecture choices.",
    flashcardFrontFr: "Contrainte",
    flashcardFrontEn: "Constraint",
    flashcardBackFr: "Limite fixe imposée au projet (ex. réglementation).",
    flashcardBackEn: "Fixed limit imposed on the project (e.g. regulation).",
    exercisePromptFr:
      "Helios Health : le marketing veut stocker des données hors UE. Contrainte ou risque ? Action ?",
    exercisePromptEn:
      "Helios Health: marketing wants to store data outside the EU. Constraint or risk? Action?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Helios Health : stockage hors UE demandé par le marketing. Première action ?",
      promptEn: "Helios Health: marketing requests storage outside the EU. First action?",
      explanationCorrectFr: "Traiter la conformité RGPD/HDS comme contrainte non négociable — analyser avant toute décision.",
      explanationCorrectEn: "Treat GDPR/HDS compliance as a non-negotiable constraint — analyze before any decision.",
      difficulty: 2,
      options: [
        opt("Accepter pour accélérer la mise sur le marché", "Accept to speed time to market", false, "Ignorer une contrainte légale crée un risque majeur de refonte.", "Ignoring a legal constraint creates major rework risk."),
        opt("Analyser l'impact conformité et escalader si nécessaire", "Analyze compliance impact and escalate if needed", true),
        opt("Reporter à la fin du projet", "Defer to end of project", false, "Reporter la conformité multiplie le coût de correction.", "Deferring compliance multiplies correction cost."),
        opt("Classer comme risque faible sans analyse", "Classify as low risk without analysis", false, "Une contrainte légale n'est pas un risque incertain.", "A legal constraint is not an uncertain risk."),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "organizational-strategy",
    titleFr: "Stratégie organisationnelle",
    titleEn: "Organizational Strategy",
    descriptionFr:
      "Relier objectifs stratégiques, OKR et initiatives projet pour éviter le travail hors cap.",
    descriptionEn:
      "Link strategic objectives, OKRs, and project initiatives to avoid off-strategy work.",
    moduleSlug: MOD,
    sortOrder: 2,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-business-environment",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Vérifier qu'un projet proposé soutient un objectif stratégique mesurable de l'organisation.",
    objectiveEn:
      "Verify that a proposed project supports a measurable organizational strategic objective.",
    explanationFr:
      "La stratégie organisationnelle définit où l'entreprise investit son attention sur 1 à 3 ans : croissance, efficacité, conformité, innovation. Les projets sont des leviers d'exécution de cette stratégie — pas des îlots. Un projet peut être bien géré et pourtant hors stratégie si personne ne l'a relié aux OKR ou au plan directeur. Le chef de projet doit comprendre le « pourquoi stratégique » pour prioriser, refuser du scope hors cap et communiquer la valeur au comité.",
    explanationEn:
      "Organizational strategy defines where the company invests attention over 1–3 years: growth, efficiency, compliance, innovation. Projects are execution levers for that strategy — not isolated islands. A project can be well managed yet off-strategy if no one linked it to OKRs or the master plan. The project manager must understand the 'strategic why' to prioritize, refuse off-strategy scope, and communicate value to the committee.",
    exampleFr:
      "Helios Retail stratégie 2026 : « omnicanal + marge ». Projet refonte checkout en ligne : aligné (OKR conversion +2 pt). Projet refonte intranet RH : utile mais secondaire — ne doit pas voler les ressources du checkout sans arbitrage comité.",
    exampleEn:
      "Helios Retail 2026 strategy: 'omnichannel + margin.' Online checkout redesign: aligned (OKR conversion +2 pts). HR intranet redesign: useful but secondary — must not steal checkout resources without committee arbitration.",
    practicalFr:
      "Formulez en une phrase la stratégie de votre org. Quel projet actuel la sert le plus directement ?",
    practicalEn:
      "State your org's strategy in one sentence. Which current project serves it most directly?",
    mistakeFr:
      "Accepter tout projet demandé par un directeur sans lien stratégique — le portfolio se dilue.",
    mistakeEn:
      "Accepting every director-requested project without strategic link — the portfolio dilutes.",
    takeawayFr:
      "Projet aligné stratégie = levier mesurable ; sinon = bruit organisationnel.",
    takeawayEn:
      "Strategy-aligned project = measurable lever; otherwise = organizational noise.",
    decisionFr:
      "Demander « Quel OKR ou objectif stratégique ce projet sert-il ? » avant d'engager des ressources.",
    decisionEn:
      "Ask 'Which OKR or strategic objective does this project serve?' before committing resources.",
    flashcardFrontFr: "Alignement stratégique",
    flashcardFrontEn: "Strategic alignment",
    flashcardBackFr: "Projet = exécution d'un objectif organisationnel mesurable.",
    flashcardBackEn: "Project = execution of a measurable organizational objective.",
    exercisePromptFr:
      "Deux projets concurrents pour les mêmes développeurs : checkout vs intranet. Comment trancher avec la stratégie Helios ?",
    exercisePromptEn:
      "Two projects compete for the same developers: checkout vs intranet. How to decide using Helios strategy?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Pourquoi relier un projet à la stratégie organisationnelle ?",
      promptEn: "Why link a project to organizational strategy?",
      explanationCorrectFr: "Prioriser les ressources sur ce qui crée de la valeur stratégique mesurable.",
      explanationCorrectEn: "Prioritize resources on what creates measurable strategic value.",
      difficulty: 2,
      options: [
        opt("Pour copier un template externe", "To copy an external template", false),
        opt("Pour prioriser ressources et refuser le scope hors cap", "To prioritize resources and refuse off-strategy scope", true),
        opt("Pour éliminer la gouvernance", "To eliminate governance", false),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "business-value",
    titleFr: "Valeur business",
    titleEn: "Business Value",
    descriptionFr:
      "Prioriser le travail selon la valeur pour l'organisation.",
    descriptionEn:
      "Prioritize work according to organizational value.",
    moduleSlug: MOD,
    sortOrder: 3,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "business-value",
    learningObjective: "DECIDE",
    objectiveFr:
      "Comparer trois initiatives par valeur business (financière et non financière) et recommander un ordre.",
    objectiveEn:
      "Compare three initiatives by business value (financial and non-financial) and recommend an order.",
    explanationFr:
      "La valeur business combine bénéfices financiers (revenus, coûts évités) et non financiers (satisfaction client, conformité, image, rétention talents). Prioriser par valeur évite de livrer beaucoup de faible impact. Le MVP concentre l'effort sur le minimum qui valide la valeur. Chaque décision de périmètre devrait répondre : « Quelle valeur pour l'organisation si on livre ceci maintenant ? » — pas « Qui crie le plus fort ? »",
    explanationEn:
      "Business value combines financial benefits (revenue, avoided costs) and non-financial ones (customer satisfaction, compliance, brand, talent retention). Value-based prioritization avoids delivering lots of low impact. MVP focuses effort on the minimum that validates value. Every scope decision should answer: 'What value for the organization if we deliver this now?' — not 'Who shouts loudest?'",
    exampleFr:
      "Backlog Helios B2B : (A) export PDF factures — faible valeur ; (B) paiement en 1 clic — +8 % conversion estimée ; (C) conformité facturation électronique — deadline légale. Ordre : C (contrainte + valeur), B (revenu), A (nice-to-have).",
    exampleEn:
      "Helios B2B backlog: (A) PDF invoice export — low value; (B) one-click payment — +8% conversion estimated; (C) e-invoicing compliance — legal deadline. Order: C (constraint + value), B (revenue), A (nice-to-have).",
    practicalFr:
      "Classez trois fonctionnalités de votre backlog par valeur business estimée. Justifiez en une phrase chacune.",
    practicalEn:
      "Rank three features in your backlog by estimated business value. Justify each in one sentence.",
    mistakeFr:
      "Prioriser par facilité technique ou par ancienneté de la demande — pas par valeur.",
    mistakeEn:
      "Prioritizing by technical ease or request age — not by value.",
    takeawayFr:
      "Valeur = bénéfices nets pour l'org, financiers et non financiers.",
    takeawayEn:
      "Value = net benefits for the org, financial and non-financial.",
    decisionFr:
      "Avant d'ajouter du scope : « Quelle valeur mesurable apporte-t-il vs ce qu'on retire ? »",
    decisionEn:
      "Before adding scope: 'What measurable value does it bring vs what we defer?'",
    flashcardFrontFr: "Valeur business",
    flashcardFrontEn: "Business value",
    flashcardBackFr: "Bénéfices nets pour l'organisation, financiers et non financiers.",
    flashcardBackEn: "Net benefits for the organization, financial and non-financial.",
    exercisePromptFr:
      "Trois items backlog Helios B2B : classez par valeur. Quelle erreur si on priorise par « qui a demandé en premier » ?",
    exercisePromptEn:
      "Three Helios B2B backlog items: rank by value. What mistake if prioritizing by 'who asked first'?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Pour prioriser le backlog, quelle question est centrale ?",
      promptEn: "To prioritize the backlog, which question is central?",
      explanationCorrectFr: "Quelle valeur business cette item apporte à l'organisation ?",
      explanationCorrectEn: "What business value does this item bring to the organization?",
      difficulty: 2,
      options: [
        opt("Qui a demandé en premier ?", "Who asked first?", false),
        opt("Quelle valeur business pour l'organisation ?", "What business value for the organization?", true),
        opt("Quelle tâche est la plus facile ?", "Which task is easiest?", false),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "benefits",
    titleFr: "Bénéfices attendus",
    titleEn: "Expected Benefits",
    descriptionFr:
      "Formuler outputs, outcomes et bénéfices mesurables dès le business case.",
    descriptionEn:
      "Formulate outputs, outcomes, and measurable benefits from the business case onward.",
    moduleSlug: MOD,
    sortOrder: 4,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "benefits",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Transformer un livrable technique en bénéfice business avec indicateur et cible.",
    objectiveEn:
      "Turn a technical deliverable into a business benefit with indicator and target.",
    explanationFr:
      "Un output est le livrable du projet (nouveau CRM déployé). Un outcome est le changement observable chez les utilisateurs ou le marché (temps de traitement lead ÷2). Un bénéfice est la valeur business de cet outcome ( +15 % conversion, −200 k€ coût annuel). Le business case doit lier les trois avec des indicateurs et des hypothèses. Sans cette chaîne, le comité approuve un « projet IT » sans savoir comment mesurer le succès post-livraison.",
    explanationEn:
      "An output is the project deliverable (new CRM deployed). An outcome is observable change for users or market (lead processing time ÷2). A benefit is the business value of that outcome (+15% conversion, −€200k annual cost). The business case must link all three with indicators and assumptions. Without this chain, the committee approves an 'IT project' without knowing how to measure post-delivery success.",
    exampleFr:
      "Helios CRM : output = CRM v2 live ; outcome = commerciaux saisissent 40 % moins de temps admin ; bénéfice = +10 % leads qualifiés / trimestre (cible business case). Livrer le CRM sans mesurer les leads qualifiés = output sans bénéfice prouvé.",
    exampleEn:
      "Helios CRM: output = CRM v2 live; outcome = sales reps spend 40% less admin time; benefit = +10% qualified leads / quarter (business case target). Delivering CRM without measuring qualified leads = output without proven benefit.",
    practicalFr:
      "Choisissez un livrable récent. Écrivez output → outcome → bénéfice → indicateur.",
    practicalEn:
      "Pick a recent deliverable. Write output → outcome → benefit → indicator.",
    mistakeFr:
      "Confondre livraison à temps (output) avec succès business (bénéfice réalisé).",
    mistakeEn:
      "Confusing on-time delivery (output) with business success (realized benefit).",
    takeawayFr:
      "Output = livrable ; outcome = changement ; bénéfice = valeur mesurable pour l'org.",
    takeawayEn:
      "Output = deliverable; outcome = change; benefit = measurable value for the org.",
    decisionFr:
      "Exiger au moins un indicateur de bénéfice dans le business case avant approbation.",
    decisionEn:
      "Require at least one benefit indicator in the business case before approval.",
    flashcardFrontFr: "Output vs outcome",
    flashcardFrontEn: "Output vs outcome",
    flashcardBackFr: "Output = livrable ; outcome = bénéfice business résultant.",
    flashcardBackEn: "Output = deliverable; outcome = resulting business benefit.",
    exercisePromptFr:
      "Helios CRM : transformez « CRM v2 déployé » en bénéfice mesurable avec indicateur.",
    exercisePromptEn:
      "Helios CRM: turn 'CRM v2 deployed' into a measurable benefit with an indicator.",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Quelle différence entre output et outcome ?",
      promptEn: "What is the difference between output and outcome?",
      explanationCorrectFr: "L'output est le livrable ; l'outcome est le bénéfice business résultant.",
      explanationCorrectEn: "Output is the deliverable; outcome is the resulting business benefit.",
      difficulty: 2,
      options: [
        opt("Ils sont identiques", "They are identical", false),
        opt("Output = livrable ; outcome = bénéfice business", "Output = deliverable; outcome = business benefit", true),
        opt("Outcome précède toujours le projet", "Outcome always precedes the project", false),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "benefits-realization",
    titleFr: "Réalisation des bénéfices",
    titleEn: "Benefits Realization",
    descriptionFr:
      "Assurer le suivi post-projet avec un owner des bénéfices distinct du chef de projet.",
    descriptionEn:
      "Ensure post-project tracking with a benefits owner distinct from the project manager.",
    moduleSlug: MOD,
    sortOrder: 5,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-business-environment",
    learningObjective: "APPLY",
    objectiveFr:
      "Définir qui mesure les bénéfices après clôture et à quelle fréquence.",
    objectiveEn:
      "Define who measures benefits after closing and at what frequency.",
    explanationFr:
      "La réalisation des bénéfices commence avant la fin du projet : owner des bénéfices nommé, baseline des indicateurs, plan de transition vers les opérations. À la clôture, le PM transfère le livrable — l'owner des bénéfices (souvent métier) mesure si les outcomes se matérialisent sur 6–18 mois. Sans ce handoff, l'organisation célèbre la go-live puis découvre que personne ne suit la conversion ou les économies promises.",
    explanationEn:
      "Benefits realization starts before project end: named benefits owner, indicator baseline, transition plan to operations. At closing, the PM hands over the deliverable — the benefits owner (often business) measures whether outcomes materialize over 6–18 months. Without this handoff, the org celebrates go-live then discovers no one tracks promised conversion or savings.",
    exampleFr:
      "Helios CRM clôture : PM transfère au support IT. La directrice commerciale (benefits owner) mesure leads qualifiés / trimestre vs baseline pendant 4 trimestres. Si −5 % vs cible à T+2, plan d'adoption — pas blame du PM déjà parti.",
    exampleEn:
      "Helios CRM closing: PM hands over to IT support. Sales director (benefits owner) tracks qualified leads / quarter vs baseline for 4 quarters. If −5% vs target at T+2, adoption plan — not blame for the PM already gone.",
    practicalFr:
      "Pour un projet terminé : qui mesure encore les bénéfices ? À quelle fréquence ?",
    practicalEn:
      "For a finished project: who still measures benefits? How often?",
    mistakeFr:
      "Clôturer sans benefits owner — le succès reste une opinion, pas une mesure.",
    mistakeEn:
      "Closing without a benefits owner — success stays opinion, not measurement.",
    takeawayFr:
      "Réalisation des bénéfices = suivi post-projet par un owner métier, pas le PM seul.",
    takeawayEn:
      "Benefits realization = post-project tracking by a business owner, not the PM alone.",
    decisionFr:
      "Nommer l'owner des bénéfices et la fréquence de mesure avant la clôture formelle.",
    decisionEn:
      "Name the benefits owner and measurement frequency before formal closing.",
    flashcardFrontFr: "Benefits owner",
    flashcardFrontEn: "Benefits owner",
    flashcardBackFr: "Rôle métier qui mesure les outcomes après clôture projet.",
    flashcardBackEn: "Business role measuring outcomes after project closing.",
    exercisePromptFr:
      "Helios CRM vient de clôturer. Qui suit les leads qualifiés ? Que faire si T+1 est sous la cible ?",
    exercisePromptEn:
      "Helios CRM just closed. Who tracks qualified leads? What if T+1 is below target?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Qui doit typiquement mesurer les bénéfices 6 mois après go-live ?",
      promptEn: "Who should typically measure benefits 6 months after go-live?",
      explanationCorrectFr: "Un owner des bénéfices côté métier, pas uniquement le PM.",
      explanationCorrectEn: "A business-side benefits owner, not only the PM.",
      difficulty: 2,
      options: [
        opt("Uniquement le chef de projet", "Only the project manager", false),
        opt("L'owner des bénéfices métier", "The business benefits owner", true),
        opt("Personne — le projet est fini", "No one — the project is done", false),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "organizational-context",
    titleFr: "Contexte organisationnel",
    titleEn: "Organizational Context",
    descriptionFr:
      "Comprendre structure, culture et facteurs environnementaux du projet.",
    descriptionEn:
      "Understand structure, culture, and environmental factors of the project.",
    moduleSlug: MOD,
    sortOrder: 6,
    estimatedMinutes: 9,
    difficulty: "BEGINNER",
    skillSlug: "pmp-business-environment",
    learningObjective: "IDENTIFY",
    objectiveFr:
      "Identifier comment structure (matrice, fonctionnelle) et culture influencent vitesse et risque du projet.",
    objectiveEn:
      "Identify how structure (matrix, functional) and culture influence project speed and risk.",
    explanationFr:
      "Chaque projet s'inscrit dans une organisation : structure matricielle (double reporting), fonctionnelle (PM faible autorité) ou projetisée (équipe dédiée). La culture — innovation vs conformité, tolérance à l'échec, vitesse de décision — façonne ce qui est « acceptable ». Les facteurs environnementaux (marché, systèmes legacy, compétences disponibles) contraignent sans être sous contrôle direct du PM. Adapter l'approche au contexte bat copier un template d'une autre entreprise.",
    explanationEn:
      "Every project sits in an organization: matrix structure (dual reporting), functional (weak PM authority), or projectized (dedicated team). Culture — innovation vs compliance, failure tolerance, decision speed — shapes what is 'acceptable.' Environmental factors (market, legacy systems, available skills) constrain without direct PM control. Adapting approach to context beats copying another company's template.",
    exampleFr:
      "Helios (matrice) : devs rapportent au manager fonctionnel ET au PM — négocier capacité est clé. Startup projetisée voisine : décisions en 24 h mais peu de process. Importer le process Helios chez la startup sans adapter = friction ; copier la vitesse startup chez Helios sans gouvernance = chaos.",
    exampleEn:
      "Helios (matrix): devs report to functional manager AND PM — negotiating capacity is key. Neighbor projectized startup: decisions in 24h but little process. Importing Helios process to startup unadapted = friction; copying startup speed at Helios without governance = chaos.",
    practicalFr:
      "Décrivez la structure et une norme culturelle de votre org qui impacte vos projets.",
    practicalEn:
      "Describe your org's structure and one cultural norm that impacts your projects.",
    mistakeFr:
      "Ignorer le manager fonctionnel en structure matricielle — le PM n'a pas toujours les ressources.",
    mistakeEn:
      "Ignoring the functional manager in a matrix — the PM does not always own resources.",
    takeawayFr:
      "Contexte org (structure + culture + EEF) = contraintes à intégrer, pas à combattre.",
    takeawayEn:
      "Org context (structure + culture + EEF) = constraints to integrate, not fight.",
    decisionFr:
      "Cartographier parties prenantes et structure de reporting dès le démarrage.",
    decisionEn:
      "Map stakeholders and reporting structure at initiating.",
    flashcardFrontFr: "Structure matricielle",
    flashcardFrontEn: "Matrix structure",
    flashcardBackFr: "Double reporting : manager fonctionnel + chef de projet.",
    flashcardBackEn: "Dual reporting: functional manager + project manager.",
    exercisePromptFr:
      "Helios matrice : le manager fonctionnel refuse un dev pour votre projet. Première action ?",
    exercisePromptEn:
      "Helios matrix: functional manager refuses a dev for your project. First action?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Quels sont des facteurs environnementaux d'entreprise (EEF) ?",
      promptEn: "What are Enterprise Environmental Factors (EEFs)?",
      explanationCorrectFr: "Conditions externes et internes influençant le projet (marché, systèmes).",
      explanationCorrectEn: "External and internal conditions influencing the project (market, systems).",
      difficulty: 2,
      options: [
        opt("Uniquement le budget du projet", "Only the project budget", false),
        opt("Conditions org et marché influençant le projet", "Org and market conditions influencing the project", true),
        opt("Les préférences personnelles du PM", "The PM's personal preferences", false),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "project-selection",
    titleFr: "Sélection de projets",
    titleEn: "Project Selection",
    descriptionFr:
      "Comparer initiatives par valeur, faisabilité et risque avant engagement.",
    descriptionEn:
      "Compare initiatives by value, feasibility, and risk before commitment.",
    moduleSlug: MOD,
    sortOrder: 7,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-business-environment",
    learningObjective: "DECIDE",
    objectiveFr:
      "Recommander un projet parmi trois candidats avec critères explicites (valeur, coût, risque, alignement).",
    objectiveEn:
      "Recommend one project among three candidates with explicit criteria (value, cost, risk, alignment).",
    explanationFr:
      "La sélection de projets arbitre des ressources limitées. Critères courants : valeur business (NPV, ROI, strategic fit), faisabilité technique, risque, dépendances. Un scorecard multicritère évite de choisir le projet « le plus visible » ou le plus récent. Le sponsor et le comité valident — le PM peut faciliter l'analyse mais ne décide pas seul du portfolio. Documenter les projets non retenus et pourquoi préserve la transparence.",
    explanationEn:
      "Project selection arbitrates limited resources. Common criteria: business value (NPV, ROI, strategic fit), technical feasibility, risk, dependencies. A multi-criteria scorecard avoids picking the 'most visible' or newest project. Sponsor and committee validate — the PM can facilitate analysis but does not alone decide the portfolio. Documenting rejected projects and why preserves transparency.",
    exampleFr:
      "Helios : (1) chatbot support — ROI rapide, faible risque ; (2) ERP global — ROI élevé, risque majeur ; (3) app mobile — stratégique, ROI incertain. Scorecard : (1) gagne court terme ; (2) reporté après stabilisation ERP legacy ; (3) pilote 3 mois avant scale.",
    exampleEn:
      "Helios: (1) support chatbot — fast ROI, low risk; (2) global ERP — high ROI, major risk; (3) mobile app — strategic, uncertain ROI. Scorecard: (1) wins short term; (2) deferred after legacy ERP stabilization; (3) 3-month pilot before scale.",
    practicalFr:
      "Trois idées projet : notez valeur, risque, alignement stratégique sur 1–5. Recommandation ?",
    practicalEn:
      "Three project ideas: score value, risk, strategic alignment 1–5. Recommendation?",
    mistakeFr:
      "Sélectionner par sponsor le plus senior — pas par valeur et faisabilité documentées.",
    mistakeEn:
      "Selecting by most senior sponsor — not by documented value and feasibility.",
    takeawayFr:
      "Sélection = arbitrage explicite valeur / risque / alignement, pas politique invisible.",
    takeawayEn:
      "Selection = explicit value / risk / alignment trade-off, not invisible politics.",
    decisionFr:
      "Utiliser une scorecard partagée avant d'engager budget et équipe sur 12 mois.",
    decisionEn:
      "Use a shared scorecard before committing budget and team for 12 months.",
    flashcardFrontFr: "Sélection projet",
    flashcardFrontEn: "Project selection",
    flashcardBackFr: "Arbitrage ressources limitées par valeur, risque, alignement.",
    flashcardBackEn: "Arbitrate limited resources by value, risk, alignment.",
    exercisePromptFr:
      "Helios : chatbot vs ERP vs app mobile — quels critères pour recommander au comité ?",
    exercisePromptEn:
      "Helios: chatbot vs ERP vs mobile app — which criteria to recommend to the committee?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Quel outil aide à comparer plusieurs projets candidats de façon transparente ?",
      promptEn: "Which tool helps compare multiple candidate projects transparently?",
      explanationCorrectFr: "Une scorecard multicritère (valeur, risque, alignement).",
      explanationCorrectEn: "A multi-criteria scorecard (value, risk, alignment).",
      difficulty: 2,
      options: [
        opt("Choisir le projet le plus récent", "Pick the newest project", false),
        opt("Scorecard multicritère documentée", "Documented multi-criteria scorecard", true),
        opt("Vote à main levée sans critères", "Hand vote without criteria", false),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "portfolio-context",
    titleFr: "Contexte portfolio",
    titleEn: "Portfolio Context",
    descriptionFr:
      "Situer le projet dans un ensemble d'initiatives partageant ressources et priorités.",
    descriptionEn:
      "Place the project within initiatives sharing resources and priorities.",
    moduleSlug: MOD,
    sortOrder: 8,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-business-environment",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Identifier dépendances et conflits de ressources entre projets d'un même portfolio.",
    objectiveEn:
      "Identify dependencies and resource conflicts between projects in the same portfolio.",
    explanationFr:
      "Un portfolio regroupe projets et programmes alignés stratégie, gérés pour équilibrer valeur, risque et ressources. Votre projet n'existe pas seul : il partage architectes, budget, fenêtres de release avec d'autres. Un retard sur le projet A peut bloquer le projet B (dépendance technique). Le PM doit connaître le calendrier portfolio et escalader les conflits au niveau approprié — pas optimiser localement au détriment global.",
    explanationEn:
      "A portfolio groups projects and programs aligned to strategy, managed to balance value, risk, and resources. Your project does not exist alone: it shares architects, budget, release windows with others. Delay on project A may block project B (technical dependency). The PM must know the portfolio calendar and escalate conflicts at the right level — not optimize locally at global expense.",
    exampleFr:
      "Portfolio Helios Digital : migration cloud (A) doit finir API v3 avant refonte mobile (B). PM mobile planifie sans A — go-live B impossible. Comité portfolio décale B ou accélère A avec budget partagé.",
    exampleEn:
      "Helios Digital portfolio: cloud migration (A) must finish API v3 before mobile redesign (B). Mobile PM plans without A — B go-live impossible. Portfolio committee defers B or accelerates A with shared budget.",
    practicalFr:
      "Listez deux projets voisins qui partagent une ressource ou une dépendance technique avec le vôtre.",
    practicalEn:
      "List two neighbor projects sharing a resource or technical dependency with yours.",
    mistakeFr:
      "Optimiser son projet sans regarder le calendrier portfolio — créer un goulot global.",
    mistakeEn:
      "Optimizing your project without the portfolio calendar — creating a global bottleneck.",
    takeawayFr:
      "Portfolio = vue d'ensemble ; projet = pièce qui interagit avec les autres.",
    takeawayEn:
      "Portfolio = big picture; project = piece interacting with others.",
    decisionFr:
      "Vérifier dépendances portfolio avant de promettre une date au sponsor.",
    decisionEn:
      "Check portfolio dependencies before promising a date to the sponsor.",
    flashcardFrontFr: "Portfolio",
    flashcardFrontEn: "Portfolio",
    flashcardBackFr: "Ensemble d'initiatives partageant stratégie, ressources, priorités.",
    flashcardBackEn: "Set of initiatives sharing strategy, resources, priorities.",
    exercisePromptFr:
      "Projet B dépend de l'API v3 du projet A. A slip de 6 semaines. Options pour le comité portfolio ?",
    exercisePromptEn:
      "Project B depends on project A's API v3. A slips 6 weeks. Options for the portfolio committee?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Pourquoi le PM doit-il connaître le contexte portfolio ?",
      promptEn: "Why must the PM know portfolio context?",
      explanationCorrectFr: "Anticiper dépendances et conflits de ressources entre initiatives.",
      explanationCorrectEn: "Anticipate dependencies and resource conflicts between initiatives.",
      difficulty: 2,
      options: [
        opt("Pour ignorer les autres projets", "To ignore other projects", false),
        opt("Anticiper dépendances et conflits de ressources", "Anticipate dependencies and resource conflicts", true),
        opt("Pour supprimer la gouvernance", "To eliminate governance", false),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "organizational-change",
    titleFr: "Changement organisationnel",
    titleEn: "Organizational Change",
    descriptionFr:
      "Préparer adoption et conduite du changement au-delà du livrable technique.",
    descriptionEn:
      "Prepare adoption and change management beyond the technical deliverable.",
    moduleSlug: MOD,
    sortOrder: 9,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "change-management",
    learningObjective: "APPLY",
    objectiveFr:
      "Distinguer changement produit (feature) et changement organisationnel (adoption, processus, comportements).",
    objectiveEn:
      "Distinguish product change (feature) from organizational change (adoption, processes, behaviors).",
    explanationFr:
      "Livrer un nouveau processus ou outil ne suffit pas : les utilisateurs doivent adopter, les managers renforcer, la formation et la communication accompagner. Le changement organisationnel couvre résistance, sponsors métier, réseaux d'ambassadeurs, métriques d'adoption. Le chef de projet coordonne souvent avec un change lead. Confondre « go-live technique » et « changement réussi » explique beaucoup d'échecs « projet vert / bénéfices rouges ».",
    explanationEn:
      "Delivering a new process or tool is not enough: users must adopt, managers reinforce, training and communication must accompany. Organizational change covers resistance, business sponsors, ambassador networks, adoption metrics. The project manager often coordinates with a change lead. Confusing 'technical go-live' and 'successful change' explains many 'green project / red benefits' failures.",
    exampleFr:
      "Helios déploie nouvel ERP : go-live OK, mais 40 % des magasins utilisent encore Excel parallèle. Plan change : sponsors régionaux, formation ciblée, KPI adoption / magasin, suppression Excel au mois 3 — pas seulement formation initiale.",
    exampleEn:
      "Helios deploys new ERP: go-live OK, but 40% of stores still use parallel Excel. Change plan: regional sponsors, targeted training, adoption KPI / store, Excel retired at month 3 — not only initial training.",
    practicalFr:
      "Un déploiement récent : adoption réelle vs prévue ? Qu'aurait dû couvrir le plan de changement ?",
    practicalEn:
      "A recent deployment: actual vs planned adoption? What should the change plan have covered?",
    mistakeFr:
      "Réduire le change management à un email J-1 et une FAQ — pas de sponsors métier ni métriques.",
    mistakeEn:
      "Reducing change management to a day-before email and FAQ — no business sponsors or metrics.",
    takeawayFr:
      "Changement org = adoption et comportements, pas seulement livrable technique.",
    takeawayEn:
      "Org change = adoption and behaviors, not only technical deliverable.",
    decisionFr:
      "Intégrer plan d'adoption et owner métier dès la planification — pas en clôture.",
    decisionEn:
      "Integrate adoption plan and business owner from planning — not at closing.",
    flashcardFrontFr: "Change management",
    flashcardFrontEn: "Change management",
    flashcardBackFr: "Adoption, formation, sponsors métier — au-delà du go-live.",
    flashcardBackEn: "Adoption, training, business sponsors — beyond go-live.",
    exercisePromptFr:
      "Helios ERP : go-live réussi mais adoption faible. Trois actions change management pour les 90 prochains jours ?",
    exercisePromptEn:
      "Helios ERP: successful go-live but low adoption. Three change management actions for the next 90 days?",
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Qu'est-ce qui distingue changement produit et changement organisationnel ?",
      promptEn: "What distinguishes product change from organizational change?",
      explanationCorrectFr: "Le changement org inclut adoption, comportements et processus côté utilisateurs.",
      explanationCorrectEn: "Org change includes adoption, behaviors, and user-side processes.",
      difficulty: 2,
      options: [
        opt("Ils sont identiques", "They are identical", false),
        opt("Change org = adoption et comportements, pas seulement la feature", "Org change = adoption and behaviors, not only the feature", true),
        opt("Le change org n'a pas besoin de sponsor", "Org change needs no sponsor", false),
      ],
    }),
  }),
];
