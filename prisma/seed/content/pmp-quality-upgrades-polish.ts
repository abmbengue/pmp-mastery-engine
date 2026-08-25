/**
 * PMP polish quality upgrades — Mission 4 enriched situational lessons (FR/EN).
 * Replaces 10 thin B-tier slugs with richer PLA fiction scenarios.
 * ORIGINAL pedagogical content — NOT PMI / PMBOK reproduction.
 */

import { buildPmpLesson, opt, q } from "./pmp-factory";
import type { PmpLesson } from "./pmp-types";

export const PMP_POLISH_UPGRADE_SLUGS = [
  "schedule",
  "business-value",
  "risk-management-hybrid",
  "governance-hybrid",
  "distributed-teams",
  "project-controls-metrics",
  "backlog",
  "product-ownership",
  "planning",
  "compliance",
] as const;

export const PMP_POLISH_QUALITY_UPGRADES: PmpLesson[] = [
  buildPmpLesson({
    slug: "schedule",
    titleFr: "Gestion du planning",
    titleEn: "Schedule Management",
    descriptionFr:
      "Construire et suivre un planning réaliste avec dépendances, jalons et chemin critique.",
    descriptionEn:
      "Build and track a realistic schedule with dependencies, milestones, and critical path.",
    moduleSlug: "process",
    sortOrder: 4,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "schedule",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider la meilleure option de compression quand GreenGrid subit un retard fournisseur sur le chemin critique du raccordement réseau.",
    objectiveEn:
      "Decide the best compression option when GreenGrid faces a vendor delay on the grid-upgrade critical path.",
    explanationFr:
      "Le planning séquence activités, estime durées et identifie le chemin critique — la chaîne sans marge totale qui fixe la date de fin. Les jalons marquent des points de contrôle (ex. « sous-station Nord opérationnelle »). Compresser par fast-tracking (chevaucher tests et mise en service) accélère mais augmente le risque ; le crashing (heures sup, ressources additionnelles) coûte cher. GreenGrid modernise 12 sous-stations : câblage → tests charge → raccordement réseau est sur le chemin critique ; la formation opérateurs a de la marge. Avant de promettre une date au régulateur, valider le chemin critique et documenter les hypothèses de durée. La méthode PLA : OBSERVE la dérive, IDENTIFY le chemin critique, COLLABORATE sur options chiffrées, ACT avec traçabilité.",
    explanationEn:
      "The schedule sequences activities, estimates durations, and identifies the critical path — the chain with zero total float setting the finish date. Milestones mark control points (e.g. “North substation operational”). Compressing via fast-tracking (overlap tests and commissioning) speeds up but raises risk; crashing (overtime, extra resources) is costly. GreenGrid modernizes 12 substations: cabling → load tests → grid tie-in is on the critical path; operator training has float. Before committing a date to the regulator, validate critical path and document duration assumptions. PLA method: OBSERVE drift, IDENTIFY critical path, COLLABORATE on quantified options, ACT with traceability.",
    exampleFr:
      "GreenGrid : retard transformateur 2 semaines sur chemin critique → fast-tracking tests/raccordement partiel ou crashing équipe câblage — pas buffer sur formation.",
    exampleEn:
      "GreenGrid: 2-week transformer delay on critical path → fast-track tests/partial tie-in or crash cabling crew — not buffer on training.",
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
    flashcardFrontFr: "Chemin critique GreenGrid",
    flashcardFrontEn: "GreenGrid critical path",
    flashcardBackFr: "Séquence sans marge totale — fixe la date de fin minimale.",
    flashcardBackEn: "Chain with zero total float — sets minimum finish date.",
    exercisePromptFr:
      "GreenGrid veut gagner 1 semaine. Comparez fast-tracking tests/raccordement vs crashing sur câblage.",
    exercisePromptEn:
      "GreenGrid wants to save 1 week. Compare fast-tracking tests/tie-in vs crashing cabling.",
    situation: {
      scenarioFr:
        "GreenGrid modernise la sous-station Nord : le fournisseur de transformateurs confirme 2 semaines de retard sur le câblage HT, activité sur le chemin critique. Le régulateur attend le raccordement au 30 septembre. Tests charge et raccordement réseau suivent en séquence — aucune marge totale.",
      scenarioEn:
        "GreenGrid modernizes the North substation: the transformer vendor confirms a 2-week delay on HV cabling, a critical-path activity. The regulator expects grid tie-in by September 30. Load tests and grid tie-in follow in sequence — zero total float.",
      problemFr:
        "Retard fournisseur sur chemin critique sans marge — date régulateur menacée.",
      problemEn:
        "Vendor delay on critical path with no float — regulator date at risk.",
      bestActionFr:
        "Analyser fast-tracking (chevaucher tests partiels et préparation raccordement) vs crashing (équipe câblage renforcée) avec risques chiffrés avant engagement sponsor.",
      bestActionEn:
        "Analyze fast-tracking (overlap partial tests and tie-in prep) vs crashing (reinforced cabling crew) with quantified risks before sponsor commitment.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "GreenGrid : retard câblage HT 2 semaines sur chemin critique, date régulateur 30 septembre. Quelle première action du chef de projet ?",
      promptEn:
        "GreenGrid: 2-week HV cabling delay on critical path, regulator date September 30. What is the project manager's first action?",
      explanationCorrectFr:
        "Recalculer le chemin critique et comparer options de compression chiffrées avant toute promesse au régulateur.",
      explanationCorrectEn:
        "Recalculate critical path and compare quantified compression options before any regulator promise.",
      difficulty: 3,
      options: [
        opt(
          "Promettre la date au régulateur sans analyse",
          "Promise the date to the regulator without analysis",
          false,
          "Engage l'organisation sur une date non validée — risque pénalité contractuelle.",
          "Commits the organization to an unvalidated date — contractual penalty risk."
        ),
        opt(
          "Recalculer le chemin critique et modéliser fast-tracking vs crashing",
          "Recalculate critical path and model fast-tracking vs crashing",
          true
        ),
        opt(
          "Ajouter 2 semaines de buffer sur la formation opérateurs",
          "Add 2 weeks buffer on operator training",
          false,
          "La formation n'est pas sur le chemin critique — n'accélère pas le raccordement.",
          "Training is not on critical path — does not accelerate tie-in."
        ),
        opt(
          "Annuler les tests charge pour tenir la date",
          "Cancel load tests to meet the date",
          false,
          "Supprime une activité de sécurité sans analyse de risque — inacceptable sur réseau HT.",
          "Removes a safety activity without risk analysis — unacceptable on HV grid."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "GreenGrid : le sponsor propose de chevaucher tests charge et raccordement réseau pour gagner 5 jours. Quel trade-off principal ?",
        promptEn:
          "GreenGrid: sponsor proposes overlapping load tests and grid tie-in to save 5 days. What is the main trade-off?",
        explanationCorrectFr:
          "Fast-tracking accélère mais augmente le risque de défaut non détecté avant mise en service.",
        explanationCorrectEn:
          "Fast-tracking speeds up but raises risk of undetected defects before commissioning.",
        difficulty: 3,
        options: [
          opt(
            "Risque accru de défauts non détectés avant mise en service",
            "Increased risk of undetected defects before commissioning",
            true
          ),
          opt(
            "Réduction automatique du coût projet",
            "Automatic project cost reduction",
            false,
            "Fast-tracking ne réduit pas les coûts — il transfère souvent le risque vers l'exploitation.",
            "Fast-tracking does not reduce costs — it often shifts risk to operations."
          ),
          opt(
            "Élimination du chemin critique",
            "Elimination of critical path",
            false,
          "Le chemin critique existe toujours — seule sa durée change.",
            "Critical path always exists — only its duration changes."
          ),
          opt(
            "Plus de marge sur les activités non critiques",
            "More float on non-critical activities",
            false,
            "Fast-tracking sur le critique n'ajoute pas de marge aux autres tâches.",
            "Fast-tracking on critical path does not add float to other tasks."
          ),
        ],
      }),
    ],
  }),

  buildPmpLesson({
    slug: "business-value",
    titleFr: "Valeur business",
    titleEn: "Business Value",
    descriptionFr:
      "Prioriser le travail selon la valeur pour l'organisation.",
    descriptionEn:
      "Prioritize work according to organizational value.",
    moduleSlug: "business-environment",
    sortOrder: 3,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "business-value",
    learningObjective: "DECIDE",
    objectiveFr:
      "Recommander un ordre de priorisation quand Meridian Bank doit choisir entre conformité, revenu et confort utilisateur.",
    objectiveEn:
      "Recommend a prioritization order when Meridian Bank must choose between compliance, revenue, and user comfort.",
    explanationFr:
      "La valeur business combine bénéfices financiers (revenus, coûts évités) et non financiers (satisfaction client, conformité, image, rétention talents). Prioriser par valeur évite de livrer beaucoup de faible impact. Meridian Bank digitalise ses services : chaque décision de périmètre répond à « Quelle valeur pour la banque si on livre ceci maintenant ? » — pas « Qui crie le plus fort ? ». Une deadline réglementaire (facturation électronique) est contrainte + valeur ; une feature conversion (+virements instantanés) génère du revenu ; un export PDF est nice-to-have. Le MVP concentre l'effort sur le minimum qui valide la valeur mesurable.",
    explanationEn:
      "Business value combines financial benefits (revenue, avoided costs) and non-financial ones (customer satisfaction, compliance, brand, talent retention). Value-based prioritization avoids delivering lots of low impact. Meridian Bank digitizes services: every scope decision answers “What value for the bank if we deliver this now?” — not “Who shouts loudest?” A regulatory deadline (e-invoicing) is constraint + value; a conversion feature (instant transfers) generates revenue; PDF export is nice-to-have. MVP focuses effort on the minimum that validates measurable value.",
    exampleFr:
      "Meridian Bank backlog : (A) export PDF relevés — faible valeur ; (B) virement instantané — +12 % adoption mobile ; (C) conformité facturation électronique — deadline légale Q3.",
    exampleEn:
      "Meridian Bank backlog: (A) PDF statement export — low value; (B) instant transfer — +12% mobile adoption; (C) e-invoicing compliance — legal Q3 deadline.",
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
      "Before adding scope: “What measurable value does it bring vs what we defer?”",
    flashcardFrontFr: "Valeur business Meridian",
    flashcardFrontEn: "Meridian business value",
    flashcardBackFr: "Bénéfices nets financiers et non financiers — pas volume de livrables.",
    flashcardBackEn: "Net financial and non-financial benefits — not deliverable volume.",
    exercisePromptFr:
      "Trois items backlog Meridian : classez par valeur. Quelle erreur si on priorise par « qui a demandé en premier » ?",
    exercisePromptEn:
      "Three Meridian backlog items: rank by value. What mistake if prioritizing by “who asked first”?",
    situation: {
      scenarioFr:
        "Meridian Bank prépare sa roadmap mobile Q3. Le directeur retail exige le virement instantané (revenu estimé +12 %). Compliance rappelle la deadline facturation électronique dans 8 semaines. Le support veut l'export PDF relevés — 200 tickets/mois mais faible impact revenu.",
      scenarioEn:
        "Meridian Bank prepares Q3 mobile roadmap. Retail director demands instant transfer (+12% revenue estimated). Compliance reminds of e-invoicing deadline in 8 weeks. Support wants PDF statement export — 200 tickets/month but low revenue impact.",
      problemFr:
        "Trois demandes concurrentes — capacité équipe insuffisante pour tout livrer au Q3.",
      problemEn:
        "Three competing requests — team capacity insufficient to deliver all in Q3.",
      bestActionFr:
        "Prioriser conformité facturation (contrainte + valeur), puis virement instantané (revenu), reporter export PDF — avec justification sponsor.",
      bestActionEn:
        "Prioritize e-invoicing compliance (constraint + value), then instant transfer (revenue), defer PDF export — with sponsor justification.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Meridian Bank : capacité Q3 limitée — conformité facturation (8 sem), virement instantané (+12 % revenu), export PDF (200 tickets). Quel ordre de priorité ?",
      promptEn:
        "Meridian Bank: limited Q3 capacity — e-invoicing compliance (8 wk), instant transfer (+12% revenue), PDF export (200 tickets). What priority order?",
      explanationCorrectFr:
        "Contrainte réglementaire + valeur évite pénalité ; revenu ensuite ; nice-to-have en dernier.",
      explanationCorrectEn:
        "Regulatory constraint + value avoids penalty; revenue next; nice-to-have last.",
      difficulty: 3,
      options: [
        opt(
          "Export PDF → virement → conformité",
          "PDF export → transfer → compliance",
          false,
          "Inverse la contrainte légale — risque pénalité et image.",
          "Reverses legal constraint — penalty and brand risk."
        ),
        opt(
          "Conformité facturation → virement instantané → export PDF",
          "E-invoicing compliance → instant transfer → PDF export",
          true
        ),
        opt(
          "Virement instantané seul — reporter conformité",
          "Instant transfer only — defer compliance",
          false,
          "La deadline légale est non négociable — risque régulateur.",
          "Legal deadline is non-negotiable — regulator risk."
        ),
        opt(
          "Traiter par ordre d'arrivée des demandes",
          "Handle in order requests arrived",
          false,
          "L'ancienneté ne mesure pas la valeur business.",
          "Age does not measure business value."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Meridian : le sponsor veut ajouter « thème sombre app » au sprint en cours. L'équipe est à 95 % capacité sur conformité. Meilleure réponse ?",
        promptEn:
          "Meridian: sponsor wants “dark theme app” in current sprint. Team at 95% capacity on compliance. Best response?",
        explanationCorrectFr:
          "Évaluer valeur mesurable vs ce qu'on retire — thème sombre est confort, pas contrainte ni revenu majeur.",
        explanationCorrectEn:
          "Evaluate measurable value vs what we defer — dark theme is comfort, not constraint or major revenue.",
        difficulty: 2,
        options: [
          opt(
            "Accepter sans discussion — demande sponsor",
            "Accept without discussion — sponsor request",
            false,
            "Sponsor request ≠ valeur business automatique.",
            "Sponsor request ≠ automatic business value."
          ),
          opt(
            "Quantifier valeur thème sombre vs retard conformité et proposer report Q4",
            "Quantify dark theme value vs compliance delay and propose Q4 deferral",
            true
          ),
          opt(
            "Refuser catégoriquement toute nouvelle demande",
            "Categorically refuse any new request",
            false,
            "Refus sans analyse ferme le dialogue sponsor.",
            "Refusal without analysis shuts down sponsor dialogue."
          ),
          opt(
            "Doubler la vélocité sans ajuster le scope",
            "Double velocity without adjusting scope",
            false,
          "Compresser qualité en silence — dette et burnout.",
            "Silently compress quality — debt and burnout."
          ),
        ],
      }),
    ],
  }),

  buildPmpLesson({
    slug: "risk-management-hybrid",
    titleFr: "Gestion des risques hybride",
    titleEn: "Hybrid Risk Management",
    descriptionFr:
      "Fusionner registre risques programme et risques sprint — sans double comptabilité.",
    descriptionEn:
      "Merge program risk register and sprint risks — without double counting.",
    moduleSlug: "hybrid",
    sortOrder: 8,
    estimatedMinutes: 10,
    difficulty: "ADVANCED",
    skillSlug: "pmp-hybrid",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider comment classer et escalader un risque AtlasFiber quand retard fibre optique programme impacte le portail client agile.",
    objectiveEn:
      "Decide how to classify and escalate an AtlasFiber risk when program fiber delay impacts the agile customer portal.",
    explanationFr:
      "Risques hybrides à deux vitesses. Programme/prédictif : retard permis municipal, dépassement budget tranchée, défaillance sous-traitant — probabilité/impact, plans mitigation, revue mensuelle comité. Produit/agile : faible adoption self-service, dette API, dépendance environnement test — visibles en retro, traités par backlog. AtlasFiber déploie la fibre en zone rurale (stream prédictif) et un portail client self-service (stream agile). Registre unifié avec tags [PROGRAM] / [PRODUCT] ; risque « environnement test indisponible » = PROGRAM (infra owner) + impact PRODUCT (portail). Éviter double entrée. Risques agile remontés au programme si impact gate (ex. sécurité API bloque conformité).",
    explanationEn:
      "Hybrid risks at two speeds. Program/predictive: municipal permit delay, trenching budget overrun, subcontractor failure — probability/impact, mitigation, monthly committee review. Product/agile: low self-service adoption, API debt, test environment dependency — visible in retro, handled via backlog. AtlasFiber deploys rural fiber (predictive stream) and self-service customer portal (agile stream). Unified register with [PROGRAM] / [PRODUCT] tags; “test environment unavailable” = PROGRAM (infra owner) + PRODUCT impact (portal). Avoid double entry. Agile risks escalate to program if gate impact (e.g., API security blocks compliance).",
    exampleFr:
      "AtlasFiber risque R-22 : retard permis [PROGRAM] → plan B tranchée alternative ; impact portail self-service documenté.",
    exampleEn:
      "AtlasFiber risk R-22: permit delay [PROGRAM] → alternate trenching plan B; self-service portal impact documented.",
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
    flashcardFrontFr: "Risque hybride AtlasFiber",
    flashcardFrontEn: "AtlasFiber hybrid risk",
    flashcardBackFr: "Tag PROGRAM vs PRODUCT — owner et lien gate.",
    flashcardBackEn: "Tag PROGRAM vs PRODUCT — owner and gate link.",
    exercisePromptFr:
      "Environnement test retard 3 semaines : risque PROGRAM, PRODUCT ou les deux ? Plan mitigation ?",
    exercisePromptEn:
      "Test environment late 3 weeks: PROGRAM, PRODUCT, or both? Mitigation plan?",
    situation: {
      scenarioFr:
        "AtlasFiber : le stream fibre prédictif signale un retard permis municipal de 4 semaines sur la tranchée principale. Le PO portail self-service a planifié une démo API au sprint 5 sur l'environnement de test lié à cette tranchée. Deux registres risques existent — programme et produit — sans lien.",
      scenarioEn:
        "AtlasFiber: predictive fiber stream flags a 4-week municipal permit delay on main trenching. Self-service portal PO planned an API demo at sprint 5 on the test environment tied to that trench. Two risk registers exist — program and product — unlinked.",
      problemFr:
        "Risque programme non visible côté agile — démo sprint 5 menacée sans owner unifié.",
      problemEn:
        "Program risk invisible to agile side — sprint 5 demo threatened without unified owner.",
      bestActionFr:
        "Créer entrée registre unifié R-22 [PROGRAM+PRODUCT], owner infra, impact portail documenté, revue mensuelle comité.",
      bestActionEn:
        "Create unified register entry R-22 [PROGRAM+PRODUCT], infra owner, portal impact documented, monthly committee review.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "AtlasFiber : retard permis 4 sem (programme) menace démo portail sprint 5. Deux registres non liés. Première action ?",
      promptEn:
        "AtlasFiber: 4-week permit delay (program) threatens portal sprint 5 demo. Two unlinked registers. First action?",
      explanationCorrectFr:
        "Unifier le risque avec tags [PROGRAM+PRODUCT] et owner unique évite double comptabilité et surprises gate.",
      explanationCorrectEn:
        "Unifying risk with [PROGRAM+PRODUCT] tags and single owner avoids double counting and gate surprises.",
      difficulty: 3,
      options: [
        opt(
          "Dupliquer le risque dans les deux registres sans lien",
          "Duplicate risk in both registers without link",
          false,
          "Double comptabilité — réconciliations impossibles au gate.",
          "Double counting — impossible reconciliation at gate."
        ),
        opt(
          "Entrée registre unifié [PROGRAM+PRODUCT] avec owner infra et impact portail",
          "Unified register entry [PROGRAM+PRODUCT] with infra owner and portal impact",
          true
        ),
        opt(
          "Reporter la démo portail sans informer le programme",
          "Defer portal demo without informing program",
          false,
          "Masque la dépendance cross-stream — conflit au prochain gate.",
          "Hides cross-stream dependency — conflict at next gate."
        ),
        opt(
          "Supprimer le risque produit — c'est un problème infra",
          "Delete product risk — it is an infra problem",
          false,
          "Le portail subit l'impact — tag PRODUCT requis pour visibilité PO.",
          "Portal suffers impact — PRODUCT tag required for PO visibility."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "AtlasFiber : un risque sprint « dette API » devient bloquant pour le gate sécurité programme. Que faire ?",
        promptEn:
          "AtlasFiber: a sprint risk “API debt” becomes blocking for program security gate. What to do?",
        explanationCorrectFr:
          "Escalade explicite PRODUCT → PROGRAM quand impact gate — revue mensuelle formalise le passage.",
        explanationCorrectEn:
          "Explicit PRODUCT → PROGRAM escalation when gate impact — monthly review formalizes the transition.",
        difficulty: 3,
        options: [
          opt(
            "Escalader au registre programme avec tag gate et owner programme",
            "Escalate to program register with gate tag and program owner",
            true
          ),
          opt(
            "Garder uniquement côté produit — l'équipe agile gère",
            "Keep product-side only — agile team handles",
            false,
            "Impact gate = périmètre programme — risque sous-estimé.",
            "Gate impact = program scope — risk underestimated."
          ),
          opt(
            "Créer une deuxième entrée identique sans référence croisée",
            "Create a second identical entry without cross-reference",
            false,
            "Double entrée sans lien — même erreur qu'avant.",
            "Double entry without link — same error as before."
          ),
          opt(
            "Ignorer jusqu'au prochain sprint review",
            "Ignore until next sprint review",
            false,
            "Le gate sécurité ne attend pas le sprint review.",
            "Security gate does not wait for sprint review."
          ),
        ],
      }),
    ],
  }),

  buildPmpLesson({
    slug: "governance-hybrid",
    titleFr: "Gouvernance hybride",
    titleEn: "Hybrid Governance",
    descriptionFr:
      "Aligner comités, gates et autonomie agile sans micro-manager les sprints.",
    descriptionEn:
      "Align committees, gates, and agile autonomy without micromanaging sprints.",
    moduleSlug: "hybrid",
    sortOrder: 6,
    estimatedMinutes: 10,
    difficulty: "ADVANCED",
    skillSlug: "pmp-hybrid",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider la réponse gouvernance quand un élu exige une feature mid-sprint sur le portail citoyen CivicWorks.",
    objectiveEn:
      "Decide the governance response when an elected official demands a mid-sprint feature on the CivicWorks citizen portal.",
    explanationFr:
      "Gouvernance hybride : décisions stratégiques centralisées (budget majeur, scope programme, conformité publique) + autonomie d'exécution agile (backlog sprint, technique, retro). Gates vérifient outcomes et risques — pas chaque story. Comité pilotage CivicWorks voit : jalons infrastructure voirie, délai portail citoyen, satisfaction usagers, burn rate budget — pas la liste des tâches daily. Matrice simplifiée : gate décide go/no-go phase ; PO décide priorité sprint ; équipe décide implémentation. Conflit classique : élu veut feature au sprint en cours — réponse hybride : escalade valeur au PO + visibilité comité au prochain gate, pas override direct du sprint.",
    explanationEn:
      "Hybrid governance: centralized strategic decisions (major budget, program scope, public compliance) + agile execution autonomy (sprint backlog, tech, retro). Gates verify outcomes and risks — not every story. CivicWorks steering sees: road infrastructure milestones, citizen portal lead time, user satisfaction, budget burn — not daily task lists. Simplified matrix: gate decides phase go/no-go; PO decides sprint priority; team decides implementation. Classic conflict: elected official wants feature in current sprint — hybrid response: value escalation to PO + committee visibility at next gate, not direct sprint override.",
    exampleFr:
      "CivicWorks gate Q2 : go si voirie OK + budget ±5 % ; pas de review des 32 stories portail citoyen.",
    exampleEn:
      "CivicWorks Q2 gate: go if roadwork OK + budget ±5%; no review of 32 citizen portal stories.",
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
    flashcardFrontFr: "Gate CivicWorks",
    flashcardFrontEn: "CivicWorks gate",
    flashcardBackFr: "Valide outcomes, risques, budget — pas chaque story.",
    flashcardBackEn: "Validates outcomes, risks, budget — not each story.",
    exercisePromptFr:
      "Élu exige feature mid-sprint portail citoyen. Réponse gouvernance hybride en 3 étapes ?",
    exercisePromptEn:
      "Elected official demands mid-sprint citizen portal feature. Hybrid governance response in 3 steps?",
    situation: {
      scenarioFr:
        "CivicWorks modernise voirie (stream prédictif) et portail citoyen (agile). Un élu municipal exige l'ajout « signalement nid-de-poule géolocalisé » au sprint 4 en cours — non planifié. Le PO portail a un goal sprint fixé : paiement taxe en ligne. Le comité infrastructure attend le gate Q2 dans 3 semaines.",
      scenarioEn:
        "CivicWorks modernizes roadwork (predictive stream) and citizen portal (agile). A municipal elected official demands “geolocated pothole reporting” added to current sprint 4 — unplanned. Portal PO has a fixed sprint goal: online tax payment. Infrastructure committee expects Q2 gate in 3 weeks.",
      problemFr:
        "Pression politique mid-sprint vs autonomie agile et goal sprint engagé.",
      problemEn:
        "Mid-sprint political pressure vs agile autonomy and committed sprint goal.",
      bestActionFr:
        "Orienter l'élu vers le PO pour évaluation valeur/effort, visibilité comité au gate Q2 — pas override sprint direct.",
      bestActionEn:
        "Direct elected official to PO for value/effort evaluation, committee visibility at Q2 gate — not direct sprint override.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "CivicWorks : élu exige feature géolocalisation mid-sprint 4, goal = paiement taxe. Quelle réponse gouvernance hybride ?",
      promptEn:
        "CivicWorks: elected official demands geolocation feature mid-sprint 4, goal = tax payment. Hybrid governance response?",
      explanationCorrectFr:
        "Escalade valeur au PO + visibilité gate — pas override direct qui casse l'autonomie sprint.",
      explanationCorrectEn:
        "Value escalation to PO + gate visibility — not direct override that breaks sprint autonomy.",
      difficulty: 3,
      options: [
        opt(
          "Ajouter immédiatement la feature — demande élu",
          "Add feature immediately — elected official request",
          false,
          "Override sprint sans PO — micro-gouvernance et goal compromis.",
          "Sprint override without PO — micro-governance and compromised goal."
        ),
        opt(
          "Orienter vers PO pour évaluation valeur + visibilité comité gate Q2",
          "Direct to PO for value evaluation + Q2 gate committee visibility",
          true
        ),
        opt(
          "Inviter l'élu au daily standup pour suivre l'avancement",
          "Invite elected official to daily standup to track progress",
          false,
          "Micro-gouvernance — mauvais format pour décision stratégique.",
          "Micro-governance — wrong format for strategic decision."
        ),
        opt(
          "Annuler le sprint 4 et tout replanifier",
          "Cancel sprint 4 and replan everything",
          false,
          "Disproportionné — une demande ne justifie pas l'arrêt du sprint.",
          "Disproportionate — one request does not justify stopping the sprint."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "CivicWorks : le comité veut assister aux sprint reviews portail chaque semaine. Quel risque principal ?",
        promptEn:
          "CivicWorks: committee wants to attend portal sprint reviews weekly. What is the main risk?",
        explanationCorrectFr:
          "Micro-gouvernance — le comité doit voir outcomes et jalons gate, pas chaque story.",
        explanationCorrectEn:
          "Micro-governance — committee should see outcomes and gate milestones, not each story.",
        difficulty: 2,
        options: [
          opt(
            "Micro-gouvernance et perte d'autonomie équipe agile",
            "Micro-governance and loss of agile team autonomy",
            true
          ),
          opt(
            "Accélération automatique des livraisons",
            "Automatic delivery acceleration",
            false,
            "Présence comité n'accélère pas — peut ralentir par interruptions.",
            "Committee presence does not accelerate — may slow via interruptions."
          ),
          opt(
            "Réduction du budget infrastructure",
            "Infrastructure budget reduction",
            false,
            "Les sprint reviews n'impactent pas directement le budget voirie.",
            "Sprint reviews do not directly impact roadwork budget."
          ),
          opt(
            "Élimination des gates programme",
            "Elimination of program gates",
            false,
            "Assister aux reviews ne supprime pas les gates — les contourne.",
            "Attending reviews does not remove gates — bypasses them."
          ),
        ],
      }),
    ],
  }),

  buildPmpLesson({
    slug: "distributed-teams",
    titleFr: "Équipes distribuées et remote",
    titleEn: "Distributed and Remote Teams",
    descriptionFr:
      "Piloter des équipes multi-fuseaux avec clarté asynchrone, rituels et inclusion.",
    descriptionEn:
      "Lead multi-timezone teams with async clarity, rituals, and inclusion.",
    moduleSlug: "people",
    sortOrder: 13,
    estimatedMinutes: 10,
    difficulty: "ADVANCED",
    skillSlug: "pmp-people",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider le mode de travail quand MedLink doit coordonner développeurs à Lyon, cliniciens à Montréal et support à Dakar.",
    objectiveEn:
      "Decide the work mode when MedLink must coordinate developers in Lyon, clinicians in Montreal, and support in Dakar.",
    explanationFr:
      "Les équipes distribuées combinent défis de fuseaux horaires, communication asynchrone et sentiment d'exclusion. Documenter décisions, enregistrer démos, comptes-rendus actionnables et plages de chevauchement limitées réduisent la fatigue. MedLink développe une plateforme télémédecine : devs Lyon (CET), cliniciens pilotes Montréal (EST), support patient Dakar (GMT). Les réunions synchrones coûteuses doivent avoir un objectif clair ; le reste vit dans tickets et documents versionnés. L'inclusion exige de tourner les horaires pénibles. Un chef de projet avancé choisit explicitement async vs sync pour chaque type de décision.",
    explanationEn:
      "Distributed teams combine timezone, async communication, and exclusion challenges. Documenting decisions, recording demos, actionable summaries, and limited overlap windows reduce fatigue. MedLink develops a telemedicine platform: devs Lyon (CET), pilot clinicians Montreal (EST), patient support Dakar (GMT). Costly synchronous meetings need clear purpose; the rest lives in tickets and versioned docs. Inclusion requires rotating painful hours. An advanced project manager explicitly chooses async vs sync for each decision type.",
    exampleFr:
      "MedLink : overlap 90 min (14h–15h30 Paris), standup async Slack template, décisions log Notion horodaté, démo enregistrée.",
    exampleEn:
      "MedLink: 90-min overlap (2–3:30 p.m. Paris), async Slack standup template, timestamped Notion decision log, recorded demo.",
    practicalFr:
      "Cartographiez fuseaux de votre équipe et proposez une fenêtre overlap + un rituel async.",
    practicalEn:
      "Map your team timezones and propose one overlap window + one async ritual.",
    mistakeFr:
      "Planifier toutes les réunions à l'heure du bureau principal — épuise les sites distants.",
    mistakeEn:
      "Scheduling all meetings at head office hours — exhausts remote sites.",
    takeawayFr:
      "Distribué = overlap limité + async documenté + rotation des horaires pénibles.",
    takeawayEn:
      "Distributed = limited overlap + documented async + rotation of painful hours.",
    decisionFr:
      "Avant d'ajouter une réunion sync multi-sites, demandez si une décision async documentée suffit.",
    decisionEn:
      "Before adding a multi-site sync meeting, ask if a documented async decision suffices.",
    flashcardFrontFr: "Overlap MedLink",
    flashcardFrontEn: "MedLink overlap",
    flashcardBackFr: "Plage courte où sync a du sens — le reste en async traçable.",
    flashcardBackEn: "Short window where sync makes sense — rest in traceable async.",
    exercisePromptFr:
      "Proposez un template standup async en quatre lignes pour MedLink distribué.",
    exercisePromptEn:
      "Propose a four-line async standup template for distributed MedLink.",
    situation: {
      scenarioFr:
        "MedLink : l'équipe Lyon, Montréal et Dakar subit 6 réunions sync/semaine à 9h heure Paris — 4h du matin à Dakar. Turnover support Dakar +30 %. Les cliniciens Montréal se plaignent de décisions prises sans eux. Aucun log de décision centralisé.",
      scenarioEn:
        "MedLink: Lyon, Montreal, and Dakar team has 6 sync meetings/week at 9 a.m. Paris — 4 a.m. in Dakar. Dakar support turnover +30%. Montreal clinicians complain decisions made without them. No centralized decision log.",
      problemFr:
        "Fatigue fuseau + exclusion + décisions non traçables.",
      problemEn:
        "Timezone fatigue + exclusion + untraceable decisions.",
      bestActionFr:
        "Réduire sync à overlap 90 min + standup async + log décisions horodaté + rotation horaires pénibles.",
      bestActionEn:
        "Reduce sync to 90-min overlap + async standup + timestamped decision log + rotate painful hours.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "MedLink : 6 sync/semaine à 9h Paris, turnover Dakar +30 %, décisions sans trace. Première action ?",
      promptEn:
        "MedLink: 6 sync/week at 9 a.m. Paris, Dakar turnover +30%, untraced decisions. First action?",
      explanationCorrectFr:
        "Réduire sync, documenter async et tourner horaires — inclusion et traçabilité avant d'ajouter des réunions.",
      explanationCorrectEn:
        "Reduce sync, document async, rotate hours — inclusion and traceability before adding meetings.",
      difficulty: 3,
      options: [
        opt(
          "Ajouter une 7e réunion pour aligner tout le monde",
          "Add a 7th meeting to align everyone",
          false,
          "Aggrave la fatigue — le problème est l'excès de sync.",
          "Worsens fatigue — problem is excess sync."
        ),
        opt(
          "Overlap 90 min + standup async + log décisions + rotation horaires",
          "90-min overlap + async standup + decision log + rotate hours",
          true
        ),
        opt(
          "Forcer tout le monde sur le fuseau Paris",
          "Force everyone onto Paris timezone",
          false,
          "Crée une classe B à Dakar et Montréal — turnover persiste.",
          "Creates B-team in Dakar and Montreal — turnover persists."
        ),
        opt(
          "Supprimer toute communication synchrone",
          "Remove all synchronous communication",
          false,
          "Overlap limité reste utile pour décisions complexes — pas zéro sync.",
          "Limited overlap still useful for complex decisions — not zero sync."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "MedLink : décision architecture urgente — clinicien Montréal absent du call Lyon. Meilleure pratique ?",
        promptEn:
          "MedLink: urgent architecture decision — Montreal clinician absent from Lyon call. Best practice?",
        explanationCorrectFr:
          "Décision async documentée avec délai de réponse — pas décision unilatérale en sync partiel.",
        explanationCorrectEn:
          "Documented async decision with response deadline — not unilateral decision in partial sync.",
        difficulty: 3,
        options: [
          opt(
            "Décider en call Lyon et informer Montréal après",
            "Decide on Lyon call and inform Montreal after",
            false,
            "Exclusion clinicien — décision santé sans input métier.",
            "Clinician exclusion — health decision without domain input."
          ),
          opt(
            "Publier options async avec délai réponse 24h avant décision finale",
            "Publish options async with 24h response deadline before final decision",
            true
          ),
          opt(
            "Reporter indéfiniment jusqu'à présence complète",
            "Defer indefinitely until full attendance",
            false,
            "Urgence architecture peut bloquer sprint — async avec délai est le compromis.",
            "Architecture urgency may block sprint — async with deadline is the compromise."
          ),
          opt(
            "Déléguer la décision au dev le plus senior",
            "Delegate decision to most senior dev",
            false,
            "Décision technique ≠ décision clinique — mauvais owner.",
            "Technical decision ≠ clinical decision — wrong owner."
          ),
        ],
      }),
    ],
  }),

  buildPmpLesson({
    slug: "project-controls-metrics",
    titleFr: "Contrôles et métriques projet",
    titleEn: "Project Controls and Metrics",
    descriptionFr:
      "Piloter avec SPI, CPI, burn-down et tableaux de bord orientés décision.",
    descriptionEn:
      "Steer with SPI, CPI, burn-down, and decision-oriented dashboards.",
    moduleSlug: "process",
    sortOrder: 13,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-process",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider les actions correctives quand ForgeAllia affiche SPI 0,86 et CPI 0,81 sur la modernisation ligne d'assemblage.",
    objectiveEn:
      "Decide corrective actions when ForgeAllia shows SPI 0.86 and CPI 0.81 on assembly line modernization.",
    explanationFr:
      "Les contrôles projet comparent performance réelle vs baseline. SPI (schedule performance index) = EV/PV : < 1 = retard. CPI (cost performance index) = EV/AC : < 1 = dépassement. Un burn-down montre le travail restant vs le temps. ForgeAllia semaine 18 : SPI 0,86, CPI 0,81 → alerte double sur modernisation ligne 3. Actions : revue scope (changements en attente ?), ressources automates, renégociation fournisseur convoyeurs. Éviter vanity metrics (nombre de réunions) ; privilégier indicateurs liés aux objectifs (% tests qualité passants, délais mise en service). Métrique utile = déclenche une décision.",
    explanationEn:
      "Project controls compare actual vs baseline performance. SPI = EV/PV: < 1 = behind. CPI = EV/AC: < 1 = over budget. Burn-down shows remaining work vs time. ForgeAllia week 18: SPI 0.86, CPI 0.81 → double alert on line 3 modernization. Actions: scope review (pending changes?), automation resources, conveyor vendor renegotiation. Avoid vanity metrics (meeting count); favor indicators tied to objectives (% quality tests passing, commissioning delays). Useful metric = triggers a decision.",
    exampleFr:
      "ForgeAllia SPI 0,86 + CPI 0,81 → comité : options scope swap, budget +80 k€, ou date +4 sem.",
    exampleEn:
      "ForgeAllia SPI 0.86 + CPI 0.81 → committee: scope swap, budget +€80k, or date +4 wk options.",
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
    flashcardFrontFr: "SPI / CPI ForgeAllia",
    flashcardFrontEn: "ForgeAllia SPI / CPI",
    flashcardBackFr: "SPI = EV/PV (délai) ; CPI = EV/AC (coût). < 1 = dérive.",
    flashcardBackEn: "SPI = EV/PV (schedule); CPI = EV/AC (cost). < 1 = variance.",
    exercisePromptFr:
      "ForgeAllia : SPI 0,86, CPI 0,81. Proposez deux actions correctives et une métrique de succès.",
    exercisePromptEn:
      "ForgeAllia: SPI 0.86, CPI 0.81. Propose two corrective actions and one success metric.",
    situation: {
      scenarioFr:
        "ForgeAllia modernise la ligne d'assemblage 3. Semaine 18 : SPI 0,86 (retard planning), CPI 0,81 (dépassement coût). Le directeur usine affiche un tableau « vert » basé sur le nombre de réunions tenues. Trois changements scope sont en attente d'approbation depuis 3 semaines.",
      scenarioEn:
        "ForgeAllia modernizes assembly line 3. Week 18: SPI 0.86 (schedule behind), CPI 0.81 (cost overrun). Plant director displays a “green” dashboard based on meetings held. Three scope changes pending approval for 3 weeks.",
      problemFr:
        "Double dérive chiffrée masquée par métrique vanity — changements scope bloqués.",
      problemEn:
        "Numeric double drift masked by vanity metric — scope changes blocked.",
      bestActionFr:
        "Convoquer revue corrective : traiter CR en attente, options scope/budget/date chiffrées, remplacer vanity metrics par SPI/CPI.",
      bestActionEn:
        "Convene corrective review: process pending CRs, quantified scope/budget/date options, replace vanity metrics with SPI/CPI.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "ForgeAllia : SPI 0,86, CPI 0,81, dashboard « vert » sur nb réunions, 3 CR en attente. Première action ?",
      promptEn:
        "ForgeAllia: SPI 0.86, CPI 0.81, “green” dashboard on meeting count, 3 pending CRs. First action?",
      explanationCorrectFr:
        "Revue corrective avec CR traités et options chiffrées — les métriques EV déclenchent la décision.",
      explanationCorrectEn:
        "Corrective review with CRs processed and quantified options — EV metrics trigger the decision.",
      difficulty: 3,
      options: [
        opt(
          "Maintenir le statut vert — beaucoup de réunions tenues",
          "Keep green status — many meetings held",
          false,
          "Vanity metric — masque retard et dépassement réels.",
          "Vanity metric — masks real delay and overrun."
        ),
        opt(
          "Revue corrective : traiter CR + options scope/budget/date chiffrées",
          "Corrective review: process CRs + quantified scope/budget/date options",
          true
        ),
        opt(
          "Ajouter 2 réunions hebdomadaires de suivi",
          "Add 2 weekly follow-up meetings",
          false,
          "Plus de réunions ≠ meilleure performance — augmente le coût.",
          "More meetings ≠ better performance — increases cost."
        ),
        opt(
          "Ignorer CPI — seul le délai compte en usine",
          "Ignore CPI — only schedule matters in plant",
          false,
          "CPI 0,81 = dépassement 19 % — non ignorable pour le sponsor.",
          "CPI 0.81 = 19% overrun — not ignorable for sponsor."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "ForgeAllia : SPI remonte à 0,94 mais CPI reste à 0,84. Quelle conclusion et action ?",
        promptEn:
          "ForgeAllia: SPI recovers to 0.94 but CPI stays at 0.84. What conclusion and action?",
        explanationCorrectFr:
          "Rattrapage délai mais coût toujours en dérive — revue fournisseurs et scope swap.",
        explanationCorrectEn:
          "Schedule recovery but cost still drifting — vendor review and scope swap.",
        difficulty: 3,
        options: [
          opt(
            "Tout va bien — SPI vert suffit",
            "All good — green SPI is enough",
            false,
            "CPI < 0,9 = dépassement persistant — alerte coût active.",
            "CPI < 0.9 = persistent overrun — cost alert active."
          ),
          opt(
            "Revue coût : fournisseurs, scope swap, renégociation contrats",
            "Cost review: vendors, scope swap, contract renegotiation",
            true
          ),
          opt(
            "Accélérer encore le planning pour compenser le coût",
            "Accelerate schedule further to offset cost",
            false,
            "Crashing accélère souvent les coûts — aggrave CPI.",
            "Crashing often accelerates costs — worsens CPI."
          ),
          opt(
            "Supprimer le burn-down — SPI suffit",
            "Remove burn-down — SPI is enough",
            false,
            "Burn-down montre travail restant — complément utile au SPI.",
            "Burn-down shows remaining work — useful SPI complement."
          ),
        ],
      }),
    ],
  }),

  buildPmpLesson({
    slug: "backlog",
    titleFr: "Backlog produit",
    titleEn: "Product Backlog",
    descriptionFr:
      "Maintenir la source unique de travail priorisé et vivant pour l'équipe.",
    descriptionEn:
      "Maintain the single, living, prioritized source of work for the team.",
    moduleSlug: "agile",
    sortOrder: 2,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "backlog",
    learningObjective: "APPLY",
    objectiveFr:
      "Appliquer les règles de backlog quand ParcelHub reçoit trois demandes urgentes le même jour sans casser l'ordre de valeur.",
    objectiveEn:
      "Apply backlog rules when ParcelHub receives three urgent requests the same day without breaking value order.",
    explanationFr:
      "Le backlog produit est la liste unique et ordonnée de tout ce qui pourrait apporter de la valeur. Le haut est le plus détaillé (prêt pour la prochaine itération) ; le bas reste grossier. ParcelHub optimise la logistique dernier-km : en tête « suivi colis temps réel » (story détaillée, critères d'acceptation) ; au milieu « optimisation tournées » (epic à découper) ; en bas « marketplace transporteurs tiers » (idée). Le PO gère contenu et ordre ; l'équipe estime. Un backlog figé est un anti-pattern : chaque incident support peut le réordonner — mais pas aveuglément. Le refinement évite que le sprint planning devienne une clarification marathon.",
    explanationEn:
      "The product backlog is the single ordered list of everything that could deliver value. The top is most detailed (ready for next iteration); the bottom stays coarse. ParcelHub optimizes last-mile logistics: top “real-time parcel tracking” (detailed story, acceptance criteria); middle “route optimization” (epic to split); bottom “third-party carrier marketplace” (idea). PO manages content and order; team estimates. A frozen backlog is an anti-pattern: every support incident may reorder — but not blindly. Refinement keeps sprint planning from becoming a clarification marathon.",
    exampleFr:
      "ParcelHub backlog : 52 items — top 14 « ready », 6 epics en découpage, 32 idées futures.",
    exampleEn:
      "ParcelHub backlog: 52 items — top 14 “ready”, 6 epics being split, 32 future ideas.",
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
    flashcardFrontFr: "Backlog ParcelHub",
    flashcardFrontEn: "ParcelHub backlog",
    flashcardBackFr: "Liste ordonnée, vivante, priorisée par valeur.",
    flashcardBackEn: "Ordered, living list prioritized by value.",
    exercisePromptFr:
      "Trois demandes urgentes arrivent le même jour. Décrivez comment les intégrer au backlog sans casser l'ordre aveuglément.",
    exercisePromptEn:
      "Three urgent requests arrive the same day. Describe how to integrate them without blindly breaking order.",
    situation: {
      scenarioFr:
        "ParcelHub : le même jour arrivent (1) un gros client B2B exigeant alerte retard livraison, (2) support signalant 400 tickets « statut colis bloqué », (3) le CTO demandant refonte API interne. Le sprint 6 est engagé sur optimisation tournées. Le PO a 2 h pour décider l'intégration backlog.",
      scenarioEn:
        "ParcelHub: same day brings (1) major B2B client demanding delivery delay alerts, (2) support flagging 400 tickets “parcel status stuck”, (3) CTO requesting internal API rewrite. Sprint 6 committed to route optimization. PO has 2 hours to decide backlog integration.",
      problemFr:
        "Trois urgences concurrentes — risque de casser l'ordre de valeur ou le sprint engagé.",
      problemEn:
        "Three competing urgencies — risk of breaking value order or committed sprint.",
      bestActionFr:
        "Évaluer valeur/impact de chaque demande, intégrer en tête si supérieur au sprint goal, sinon backlog ordonné post-sprint — pas insertion aveugle en tête.",
      bestActionEn:
        "Evaluate value/impact of each request, integrate at top if above sprint goal, else ordered backlog post-sprint — not blind top insertion.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "ParcelHub : 3 urgences même jour, sprint 6 engagé sur tournées. Comment intégrer au backlog ?",
      promptEn:
        "ParcelHub: 3 urgencies same day, sprint 6 committed to routes. How to integrate into backlog?",
      explanationCorrectFr:
        "Évaluer valeur vs sprint goal — statut bloqué (400 tickets) peut dépasser tournées ; API refonte reste epic bas.",
      explanationCorrectEn:
        "Evaluate value vs sprint goal — stuck status (400 tickets) may exceed routes; API rewrite stays low epic.",
      difficulty: 3,
      options: [
        opt(
          "Tout mettre en tête — ce sont des urgences",
          "Put everything at top — they are urgent",
          false,
          "Urgent ≠ haute valeur — casse l'ordre et le sprint goal.",
          "Urgent ≠ high value — breaks order and sprint goal."
        ),
        opt(
          "Évaluer valeur/impact : statut bloqué en tête si > goal, autres ordonnés post-sprint",
          "Evaluate value/impact: stuck status at top if > goal, others ordered post-sprint",
          true
        ),
        opt(
          "Ignorer les urgences jusqu'à fin sprint 6",
          "Ignore urgencies until end of sprint 6",
          false,
          "400 tickets et client B2B — risque churn et image.",
          "400 tickets and B2B client — churn and brand risk."
        ),
        opt(
          "Ajouter des dates fixes sur chaque story",
          "Add fixed dates on each story",
          false,
          "Backlog ≠ Gantt — dates fixes sur chaque story est anti-pattern.",
          "Backlog ≠ Gantt — fixed dates on every story is anti-pattern."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "ParcelHub : le CTO insiste pour prioriser refonte API « car technique ». Meilleure réponse PO ?",
        promptEn:
          "ParcelHub: CTO insists on prioritizing API rewrite “because technical.” Best PO response?",
        explanationCorrectFr:
          "Demander valeur business mesurable — refonte technique sans impact client reste epic bas.",
        explanationCorrectEn:
          "Ask for measurable business value — technical rewrite without client impact stays low epic.",
        difficulty: 2,
        options: [
          opt(
            "Accepter — le CTO a autorité technique",
            "Accept — CTO has technical authority",
            false,
            "Autorité technique ≠ priorité backlog — le PO arbitre valeur.",
            "Technical authority ≠ backlog priority — PO arbitrates value."
          ),
          opt(
            "Demander impact client/revenu mesurable avant de remonter dans l'ordre",
            "Ask for measurable client/revenue impact before moving up in order",
            true
          ),
          opt(
            "Supprimer l'epic tournées pour faire place à l'API",
            "Remove routes epic to make room for API",
            false,
            "Sprint engagé — swap scope nécessite décision formelle, pas override CTO.",
            "Committed sprint — scope swap needs formal decision, not CTO override."
          ),
          opt(
            "Geler le backlog — plus aucun changement",
            "Freeze backlog — no more changes",
            false,
            "Backlog figé est anti-pattern — vivant mais ordonné par valeur.",
            "Frozen backlog is anti-pattern — living but value-ordered."
          ),
        ],
      }),
    ],
  }),

  buildPmpLesson({
    slug: "product-ownership",
    titleFr: "Product ownership",
    titleEn: "Product Ownership",
    descriptionFr:
      "Maximiser la valeur produit : prioriser, clarifier, accepter — sans micro-manager le « comment ».",
    descriptionEn:
      "Maximize product value: prioritize, clarify, accept — without micromanaging the “how”.",
    moduleSlug: "agile",
    sortOrder: 4,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "product-ownership",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider la frontière PO/équipe quand un directeur CareFlow exige une feature non priorisée au sprint en cours.",
    objectiveEn:
      "Decide the PO/team boundary when a CareFlow director demands an unprioritized feature in the current sprint.",
    explanationFr:
      "Le Product Owner maximise la valeur produit en représentant les parties prenantes, priorisant le backlog et acceptant les incréments. Il clarifie critères d'acceptation et arbitre trade-offs valeur/effort. Il ne prescrit pas l'architecture ni les tâches techniques — c'est le « comment » de l'équipe. CareFlow développe un portail patient : le PO refuse une story « refonte complète dossier médical » au sprint 3 (valeur différée) mais valide « rappel rendez-vous SMS » (impact no-show -15 %). Un PO absent crée priorités floues ; un PO disponible 2 h/jour avec mandat de priorisation suffit souvent mieux qu'un PO nominal sans autorité.",
    explanationEn:
      "The Product Owner maximizes product value by representing stakeholders, prioritizing backlog, and accepting increments. They clarify acceptance criteria and arbitrate value/effort trade-offs. They do not prescribe architecture or technical tasks — that is the team's “how.” CareFlow develops a patient portal: PO rejects “full medical record rewrite” in sprint 3 (deferred value) but validates “SMS appointment reminder” (-15% no-show impact). An absent PO creates fuzzy priorities; a PO available 2 h/day with prioritization mandate often works better than a nominal PO without authority.",
    exampleFr:
      "PO CareFlow : « Pourquoi rappel SMS ? » → -15 % no-show. « Comment ? » → laissé à l'équipe.",
    exampleEn:
      "CareFlow PO: “Why SMS reminder?” → -15% no-show. “How?” → left to the team.",
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
    flashcardFrontFr: "Product Owner CareFlow",
    flashcardFrontEn: "CareFlow Product Owner",
    flashcardBackFr: "Maximise valeur ; quoi/pourquoi — l'équipe décide comment.",
    flashcardBackEn: "Maximizes value; what/why — team decides how.",
    exercisePromptFr:
      "Un directeur demande une feature non priorisée. Rédigez la réponse du PO en 3 points (valeur, ordre, alternative).",
    exercisePromptEn:
      "A director requests an unprioritized feature. Draft the PO response in 3 points (value, order, alternative).",
    situation: {
      scenarioFr:
        "CareFlow sprint 5 : goal = téléconsultation vidéo stable. Le directeur médical exige l'ajout « export PDF ordonnances » mid-sprint — non estimé, non priorisé. L'équipe a déjà engagé 80 % capacité sur le goal vidéo. Le PO Sophie est disponible 2 h/jour.",
      scenarioEn:
        "CareFlow sprint 5: goal = stable video teleconsultation. Medical director demands “PDF prescription export” mid-sprint — unestimated, unprioritized. Team already committed 80% capacity to video goal. PO Sophie available 2 h/day.",
      problemFr:
        "Pression stakeholder mid-sprint vs goal engagé et frontière PO/équipe.",
      problemEn:
        "Mid-sprint stakeholder pressure vs committed goal and PO/team boundary.",
      bestActionFr:
        "Sophie évalue valeur export PDF vs goal vidéo, propose report sprint 6 ou swap formel — ne prescrit pas l'implémentation technique.",
      bestActionEn:
        "Sophie evaluates PDF export value vs video goal, proposes sprint 6 deferral or formal swap — does not prescribe technical implementation.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "CareFlow : directeur médical exige export PDF mid-sprint 5, goal = vidéo stable. Réponse PO ?",
      promptEn:
        "CareFlow: medical director demands PDF export mid-sprint 5, goal = stable video. PO response?",
      explanationCorrectFr:
        "PO évalue valeur, propose report ou swap formel — pas override sprint ni prescription technique.",
      explanationCorrectEn:
        "PO evaluates value, proposes deferral or formal swap — not sprint override or technical prescription.",
      difficulty: 3,
      options: [
        opt(
          "Ajouter export PDF et assigner la tâche au dev senior",
          "Add PDF export and assign task to senior dev",
          false,
          "PO prescrit le comment et override sprint — double erreur.",
          "PO prescribes how and overrides sprint — double mistake."
        ),
        opt(
          "Évaluer valeur vs goal vidéo, proposer sprint 6 ou swap formel avec le directeur",
          "Evaluate value vs video goal, propose sprint 6 or formal swap with director",
          true
        ),
        opt(
          "Refuser sans explication — le PO décide seul",
          "Refuse without explanation — PO decides alone",
          false,
          "Refus sans dialogue valeur — perte confiance stakeholder.",
          "Refusal without value dialogue — loses stakeholder trust."
        ),
        opt(
          "Laisser l'équipe décider si elle a le temps",
          "Let team decide if they have time",
          false,
          "Priorisation backlog = rôle PO — pas délégation ad hoc.",
          "Backlog prioritization = PO role — not ad hoc delegation."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "CareFlow : le lead dev propose l'architecture microservices pour le rappel SMS. Qui décide ?",
        promptEn:
          "CareFlow: dev lead proposes microservices architecture for SMS reminder. Who decides?",
        explanationCorrectFr:
          "PO décide quoi/pourquoi (story, critères) ; équipe décide comment (architecture).",
        explanationCorrectEn:
          "PO decides what/why (story, criteria); team decides how (architecture).",
        difficulty: 2,
        options: [
          opt(
            "Le PO impose l'architecture microservices",
            "PO imposes microservices architecture",
            false,
            "Architecture = comment — rôle équipe, pas PO.",
            "Architecture = how — team role, not PO."
          ),
          opt(
            "L'équipe choisit l'architecture ; le PO valide critères d'acceptation",
            "Team chooses architecture; PO validates acceptance criteria",
            true
          ),
          opt(
            "Le directeur médical choisit la stack technique",
            "Medical director chooses tech stack",
            false,
            "Stakeholder métier ne prescrit pas le comment.",
            "Business stakeholder does not prescribe how."
          ),
          opt(
            "Le chef de projet assigne la solution technique",
            "Project manager assigns technical solution",
            false,
            "PM ne micro-manage pas l'implémentation agile.",
            "PM does not micromanage agile implementation."
          ),
        ],
      }),
    ],
  }),

  buildPmpLesson({
    slug: "planning",
    titleFr: "Planification de projet",
    titleEn: "Project Planning",
    descriptionFr:
      "Élaborer un plan intégré couvrant périmètre, délais, coûts, risques et communication.",
    descriptionEn:
      "Develop an integrated plan covering scope, schedule, cost, risk, and communication.",
    moduleSlug: "process",
    sortOrder: 1,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "planning",
    learningObjective: "APPLY",
    objectiveFr:
      "Appliquer la planification itérative quand HarborLink découvre un fournisseur grue obligatoire non prévu en vague 1.",
    objectiveEn:
      "Apply iterative planning when HarborLink discovers a mandatory crane vendor not planned in wave 1.",
    explanationFr:
      "La planification traduit la charte en livrables, activités, ressources, jalons et hypothèses mesurables. Le plan de management de projet intègre sous-plans : périmètre, planning, coûts, qualité, risques, ressources, communication, approvisionnement et changements. HarborLink modernise le terminal conteneurs : vague 1 révèle que le quai Est nécessite une grue 400t non prévue — le plan se met à jour, pas seulement le Gantt. Un plan réaliste documente hypothèses (ex. « marée haute max 4,2 m »), buffers (3 semaines sur dragage) et critères d'acceptation par livrable. Geler le plan après v1 est une erreur — la planification est itérative.",
    explanationEn:
      "Planning translates the charter into deliverables, activities, resources, milestones, and measurable assumptions. The project management plan integrates sub-plans: scope, schedule, cost, quality, risk, resources, communication, procurement, and change. HarborLink modernizes the container terminal: wave 1 reveals East quay needs an unplanned 400t crane — the plan updates, not just the Gantt. A realistic plan documents assumptions (e.g. “high tide max 4.2 m”), buffers (3 weeks on dredging), and acceptance criteria per deliverable. Freezing the plan after v1 is a mistake — planning is iterative.",
    exampleFr:
      "HarborLink : PMP v1.3 ajoute sous-plan approvisionnement grue après découverte technique vague 1.",
    exampleEn:
      "HarborLink: PMP v1.3 adds crane procurement sub-plan after wave 1 technical discovery.",
    practicalFr:
      "Nommez cinq sous-plans que vous incluriez dans le PMP d'un projet infrastructure de 18 mois.",
    practicalEn:
      "Name five sub-plans you would include in the PMP of an 18-month infrastructure project.",
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
    flashcardFrontFr: "PMP HarborLink",
    flashcardFrontEn: "HarborLink PMP",
    flashcardBackFr: "Document intégrant sous-plans pour piloter le projet de bout en bout.",
    flashcardBackEn: "Document integrating sub-plans to steer the project end to end.",
    exercisePromptFr:
      "HarborLink découvre grue 400t obligatoire. Quels sous-plans du PMP touchez-vous en priorité ?",
    exercisePromptEn:
      "HarborLink discovers mandatory 400t crane. Which PMP sub-plans do you touch first?",
    situation: {
      scenarioFr:
        "HarborLink modernise le terminal conteneurs — vague 1 dragage quai Est. L'ingénieur structure révèle qu'une grue 400t est obligatoire, non budgétée, délai fournisseur 14 semaines. Le PMP v1.0 ne prévoyait qu'une grue 200t. Le sponsor attend le jalon « quai Est prêt » au T2.",
      scenarioEn:
        "HarborLink modernizes container terminal — wave 1 East quay dredging. Structural engineer reveals mandatory 400t crane, not budgeted, 14-week vendor lead time. PMP v1.0 only planned 200t crane. Sponsor expects “East quay ready” milestone in Q2.",
      problemFr:
        "Hypothèse technique invalidée — PMP et baselines obsolètes.",
      problemEn:
        "Technical assumption invalidated — PMP and baselines obsolete.",
      bestActionFr:
        "Mettre à jour PMP v1.3 : sous-plans approvisionnement, coûts, planning, risques — puis revue baseline avec sponsor.",
      bestActionEn:
        "Update PMP v1.3: procurement, cost, schedule, risk sub-plans — then baseline review with sponsor.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "HarborLink : grue 400t obligatoire non prévue, PMP v1.0 obsolète, jalon T2 menacé. Première action ?",
      promptEn:
        "HarborLink: mandatory 400t crane unplanned, PMP v1.0 obsolete, Q2 milestone threatened. First action?",
      explanationCorrectFr:
        "Mettre à jour le PMP intégré (approvisionnement, coûts, planning, risques) — pas seulement le Gantt.",
      explanationCorrectEn:
        "Update integrated PMP (procurement, cost, schedule, risk) — not just the Gantt.",
      difficulty: 3,
      options: [
        opt(
          "Ajuster uniquement la date sur le Gantt",
          "Adjust only the date on the Gantt",
          false,
          "Gantt seul ignore coûts, risques et approvisionnement — plan incomplet.",
          "Gantt alone ignores cost, risk, and procurement — incomplete plan."
        ),
        opt(
          "Mettre à jour PMP : sous-plans approvisionnement, coûts, planning, risques",
          "Update PMP: procurement, cost, schedule, risk sub-plans",
          true
        ),
        opt(
          "Geler le PMP v1.0 — le sponsor a validé",
          "Freeze PMP v1.0 — sponsor approved",
          false,
          "Hypothèse majeure invalidée — planification itérative requise.",
          "Major assumption invalidated — iterative planning required."
        ),
        opt(
          "Commander la grue sans mise à jour plan",
          "Order crane without plan update",
          false,
          "Achat sans baseline = dépassement non traçable.",
          "Purchase without baseline = untraceable overrun."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "HarborLink : après mise à jour PMP, le sponsor demande de ne changer que le planning. Quel risque ?",
        promptEn:
          "HarborLink: after PMP update, sponsor asks to change only schedule. What risk?",
        explanationCorrectFr:
          "Sous-plans isolés — coût grue 400t et risques fournisseur non intégrés = échec global.",
        explanationCorrectEn:
          "Isolated sub-plans — 400t crane cost and vendor risks not integrated = global failure.",
        difficulty: 3,
        options: [
          opt(
            "Optimisation locale — coût et risques grue non reflétés dans le plan intégré",
            "Local optimization — crane cost and risks not reflected in integrated plan",
            true
          ),
          opt(
            "Accélération automatique du dragage",
            "Automatic dredging acceleration",
            false,
            "Changer planning seul n'accélère pas le dragage.",
            "Changing schedule alone does not accelerate dredging."
          ),
          opt(
            "Réduction du périmètre communication",
            "Communication scope reduction",
            false,
            "Communication n'est pas le risque principal ici.",
            "Communication is not the main risk here."
          ),
          opt(
            "Élimination du besoin de grue",
            "Elimination of crane need",
            false,
            "L'ingénieur a confirmé la grue 400t obligatoire.",
            "Engineer confirmed mandatory 400t crane."
          ),
        ],
      }),
    ],
  }),

  buildPmpLesson({
    slug: "compliance",
    titleFr: "Conformité et contraintes",
    titleEn: "Compliance and Constraints",
    descriptionFr:
      "Respecter réglementations, politiques et contraintes externes.",
    descriptionEn:
      "Respect regulations, policies, and external constraints.",
    moduleSlug: "business-environment",
    sortOrder: 1,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "compliance",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider l'action quand VoltGrid doit choisir entre accélérer le déploiement et respecter la certification réseau obligatoire.",
    objectiveEn:
      "Decide the action when VoltGrid must choose between accelerating deployment and mandatory grid certification.",
    explanationFr:
      "Les projets opèrent dans un cadre réglementaire : sécurité réseau, environnement, énergie. Une contrainte limite les options de façon fixe : certification obligatoire, technologie imposée, deadline légale. Un risque peut ou non se matérialiser. VoltGrid déploie des smart meters : certification réseau est contrainte non négociable ; retard fournisseur composants est risque incertain. Identifier contraintes en amont évite redesigns coûteux. La conformité est souvent non négociable — la traiter comme risque « gérable » est une erreur fréquente. Cartographier contraintes dès le cadrage — avant choix d'architecture.",
    explanationEn:
      "Projects operate within regulatory frames: grid security, environment, energy. A constraint limits options in a fixed way: mandatory certification, imposed technology, legal deadline. A risk may or may not materialize. VoltGrid deploys smart meters: grid certification is non-negotiable constraint; component vendor delay is uncertain risk. Identifying constraints early avoids costly redesigns. Compliance is often non-negotiable — treating it as a “manageable” risk is a common mistake. Map constraints at framing — before architecture choices.",
    exampleFr:
      "VoltGrid : contrainte = certification réseau obligatoire avant mise en service ; risque = retard fournisseur capteurs.",
    exampleEn:
      "VoltGrid: constraint = mandatory grid certification before commissioning; risk = sensor vendor delay.",
    practicalFr:
      "Listez deux contraintes légales ou politiques et un risque pour un projet énergie que vous connaissez.",
    practicalEn:
      "List two legal or policy constraints and one risk for an energy project you know.",
    mistakeFr:
      "Reporter la conformité « à la fin du projet » — les audits découvrent alors des refontes massives.",
    mistakeEn:
      "Deferring compliance “to the end of the project” — audits then reveal massive rework.",
    takeawayFr:
      "Contrainte = limite fixe ; risque = événement incertain — ne pas les confondre.",
    takeawayEn:
      "Constraint = fixed limit; risk = uncertain event — do not confuse them.",
    decisionFr:
      "Cartographier contraintes réglementaires dès le cadrage — avant le choix d'architecture.",
    decisionEn:
      "Map regulatory constraints at framing — before architecture choices.",
    flashcardFrontFr: "Contrainte VoltGrid",
    flashcardFrontEn: "VoltGrid constraint",
    flashcardBackFr: "Limite fixe imposée (ex. certification réseau).",
    flashcardBackEn: "Fixed imposed limit (e.g. grid certification).",
    exercisePromptFr:
      "VoltGrid : le marketing veut déployer sans certification « pour gagner du marché ». Contrainte ou risque ? Action ?",
    exercisePromptEn:
      "VoltGrid: marketing wants to deploy without certification “to win market.” Constraint or risk? Action?",
    situation: {
      scenarioFr:
        "VoltGrid déploie 50 000 compteurs intelligents. Le marketing propose un pilote 5 000 unités sans certification réseau « pour gagner 3 mois sur le concurrent ». L'ingénieur conformité rappelle que la mise en service sans certification viole le cahier des charges régulateur et expose à une amende.",
      scenarioEn:
        "VoltGrid deploys 50,000 smart meters. Marketing proposes a 5,000-unit pilot without grid certification “to beat competitor by 3 months.” Compliance engineer reminds that commissioning without certification violates regulator spec and exposes to fines.",
      problemFr:
        "Pression marché vs contrainte réglementaire non négociable.",
      problemEn:
        "Market pressure vs non-negotiable regulatory constraint.",
      bestActionFr:
        "Refuser le pilote non certifié, traiter certification comme contrainte d'architecture dès le cadrage — risque fournisseur géré séparément.",
      bestActionEn:
        "Refuse uncertified pilot, treat certification as architecture constraint at framing — vendor risk managed separately.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "VoltGrid : marketing veut pilote 5 000 compteurs sans certification réseau. Comment classifier et agir ?",
      promptEn:
        "VoltGrid: marketing wants 5,000-meter pilot without grid certification. How to classify and act?",
      explanationCorrectFr:
        "Certification = contrainte non négociable — pas risque gérable ; refuser pilote et intégrer au cadrage.",
      explanationCorrectEn:
        "Certification = non-negotiable constraint — not manageable risk; refuse pilot and integrate at framing.",
      difficulty: 3,
      options: [
        opt(
          "Traiter comme risque acceptable — probabilité amende faible",
          "Treat as acceptable risk — low fine probability",
          false,
          "Conformité réglementaire = contrainte, pas risque « gérable ».",
          "Regulatory compliance = constraint, not “manageable” risk."
        ),
        opt(
          "Classifier certification comme contrainte et refuser pilote non conforme",
          "Classify certification as constraint and refuse non-compliant pilot",
          true
        ),
        opt(
          "Accepter le pilote et certifier après coup",
          "Accept pilot and certify retroactively",
          false,
          "Certification après mise en service = refonte et amende — erreur classique.",
          "Certification after commissioning = rework and fine — classic mistake."
        ),
        opt(
          "Reporter la décision au prochain sprint",
          "Defer decision to next sprint",
          false,
          "Contrainte architecture — décision avant déploiement, pas en rétro.",
          "Architecture constraint — decision before deployment, not retroactively."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "VoltGrid : retard fournisseur capteurs 6 semaines (incertain). Certification réseau (obligatoire). Comment différencier ?",
        promptEn:
          "VoltGrid: 6-week sensor vendor delay (uncertain). Grid certification (mandatory). How to differentiate?",
        explanationCorrectFr:
          "Retard fournisseur = risque (mitigation plan B) ; certification = contrainte (non négociable).",
        explanationCorrectEn:
          "Vendor delay = risk (plan B mitigation); certification = constraint (non-negotiable).",
        difficulty: 2,
        options: [
          opt(
            "Retard fournisseur = risque ; certification = contrainte",
            "Vendor delay = risk; certification = constraint",
            true
          ),
          opt(
            "Les deux sont des risques gérables",
            "Both are manageable risks",
            false,
            "Certification n'est pas incertaine — c'est une limite fixe.",
            "Certification is not uncertain — it is a fixed limit."
          ),
          opt(
            "Les deux sont des contraintes",
            "Both are constraints",
            false,
            "Retard fournisseur peut ne pas arriver — c'est incertain.",
            "Vendor delay may not happen — it is uncertain."
          ),
          opt(
            "Reporter les deux « à la fin du projet »",
            "Defer both “to end of project”",
            false,
            "Reporter conformité = refontes massives en audit.",
            "Deferring compliance = massive audit rework."
          ),
        ],
      }),
    ],
  }),
];
