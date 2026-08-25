/**
 * PMP priority quality upgrades — enriched situational lessons (FR/EN).
 * Replaces 14 selected slugs with richer PLA fiction scenarios.
 * ORIGINAL pedagogical content — NOT PMI / PMBOK reproduction.
 */

import { buildPmpLesson, opt, q } from "./pmp-factory";
import type { PmpLesson } from "./pmp-types";

export const PMP_PRIORITY_UPGRADE_SLUGS = [
  "combining-predictive-and-agile",
  "coaching-and-mentoring",
  "motivation",
  "collaboration",
  "issue-management",
  "lessons-learned",
  "benefits",
  "organizational-context",
  "organizational-change",
  "iterative-delivery",
  "iteration-planning",
  "retrospective",
  "mixed-delivery-models",
  "stakeholder-management-hybrid",
] as const;

export const PMP_PRIORITY_QUALITY_UPGRADES: PmpLesson[] = [
  buildPmpLesson({
    slug: "combining-predictive-and-agile",
    titleFr: "Combiner prédictif et agile",
    titleEn: "Combining Predictive and Agile",
    descriptionFr:
      "Pratiques d'intégration : roadmap, WBS programme, backlog produit, interfaces explicites.",
    descriptionEn:
      "Integration practices: roadmap, program WBS, product backlog, explicit interfaces.",
    moduleSlug: "hybrid",
    sortOrder: 2,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "hybrid-delivery",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider la première action d'intégration quand le stream PCI Helios (prédictif) et le portail développeur (agile) entrent en conflit de gouvernance.",
    objectiveEn:
      "Decide the first integration action when Helios PCI stream (predictive) and developer portal (agile) hit a governance conflict.",
    explanationFr:
      "Combiner prédictif et agile sur Helios Connect, ce n'est pas empiler deux méthodes : c'est négocier des contrats d'interface entre mondes qui ne planifient pas pareil. Le stream infrastructure PCI suit un chemin critique verrouillé — serveurs, firewalls, audit Q2, budget phase figé. Le stream portail développeur tourne en sprints : backlog priorisé, releases bi-hebdo, sandbox API attendue dès le sprint 3. Sans interface écrite (qui livre quoi, quand, avec quels critères d'acceptation), le PO portail promet des features sur un environnement qui n'existe pas encore ; le lead infra refuse tout « scope creep » réglementaire. La tension gouvernance typique : le comité programme exige un jalon PCI immuable tandis que le PO veut replanifier après chaque sprint review. La méthode PLA (OBSERVE → UNDERSTAND → IDENTIFY → COLLABORATE → ACT → VERIFY → ADAPT) aide ici : observer le conflit sandbox sprint 3 vs certificat Q2, identifier l'interface manquante, collaborer sur un contrat inter-stream avant d'activer quoi que ce soit en prod. Conséquence si on ignore : le portail ship en prod sans PCI → audit bloqué ; ou l'infra retarde le portail de six semaines sans visibilité sponsor.",
    explanationEn:
      "Combining predictive and agile on Helios Connect is not stacking two methods: it is negotiating interface contracts between worlds that do not plan the same way. The PCI infrastructure stream follows a locked critical path — servers, firewalls, Q2 audit, fixed phase budget. The developer portal stream runs in sprints: prioritized backlog, biweekly releases, sandbox API expected from sprint 3. Without a written interface (who delivers what, when, with which acceptance criteria), the portal PO promises features on an environment that does not exist yet; the infra lead rejects any regulatory “scope creep.” Typical governance tension: the program committee demands an immutable PCI milestone while the PO wants to replan after every sprint review. The PLA method (OBSERVE → UNDERSTAND → IDENTIFY → COLLABORATE → ACT → VERIFY → ADAPT) helps here: observe the sprint 3 sandbox vs Q2 certificate conflict, identify the missing interface, collaborate on an inter-stream contract before activating anything in prod. Consequence if ignored: portal ships to prod without PCI → audit blocked; or infra delays the portal six weeks with no sponsor visibility.",
    exampleFr:
      "Helios : contrat inter-stream signé — infra livre sandbox PCI partiel au sprint 3 (URL + certificat test) ; portail consomme via manifest versionné ; gate Q2 valide prod complète. Sync bi-hebdo PM programme + PO + lead infra.",
    exampleEn:
      "Helios: signed inter-stream contract — infra delivers partial PCI sandbox at sprint 3 (URL + test certificate); portal consumes via versioned manifest; Q2 gate validates full prod. Biweekly sync program PM + PO + infra lead.",
    practicalFr:
      "Sur un programme hybride réel, listez une dépendance cross-stream : owner, date, critères d'acceptation, plan B si retard.",
    practicalEn:
      "On a real hybrid program, list one cross-stream dependency: owner, date, acceptance criteria, plan B if late.",
    mistakeFr:
      "Forcer un seul outil ou calendrier — Jira agile sur un WBS réglementé, ou Gantt 12 mois sur l'UX portail.",
    mistakeEn:
      "Forcing one tool or calendar — agile Jira on a regulated WBS, or a 12-month Gantt on portal UX.",
    takeawayFr:
      "Intégration hybride = interfaces contractuelles + rituels de communication — pas fusion des méthodes.",
    takeawayEn:
      "Hybrid integration = contractual interfaces + communication rituals — not method fusion.",
    decisionFr:
      "Avant tout engagement sprint portail dépendant de l'infra : documenter l'interface livrable avec date, owner et critères — puis synchroniser gouvernance gate vs backlog.",
    decisionEn:
      "Before any portal sprint commitment depending on infra: document the deliverable interface with date, owner, and criteria — then sync gate vs backlog governance.",
    flashcardFrontFr: "Interface hybride Helios",
    flashcardFrontEn: "Helios hybrid interface",
    flashcardBackFr: "Qui livre quoi, quand, critères écrits — avant promesse au PO.",
    flashcardBackEn: "Who delivers what, when, written criteria — before PO promise.",
    exercisePromptFr:
      "Helios : portail a besoin du sandbox sprint 3, infra vise Q2. Rédigez le contrat inter-stream (3 lignes : livrable, date, critères).",
    exercisePromptEn:
      "Helios: portal needs sandbox sprint 3, infra targets Q2. Draft the inter-stream contract (3 lines: deliverable, date, criteria).",
    situation: {
      scenarioFr:
        "Helios Connect : le PO portail a promis une démo sandbox au sprint 3 devant 40 intégrateurs API. Le lead infra PCI rappelle que le certificat production n'est validé qu'au gate Q2 et refuse d'ouvrir un environnement « non conforme ». Le comité programme exige le jalon PCI inchangé.",
      scenarioEn:
        "Helios Connect: the portal PO promised a sandbox demo at sprint 3 before 40 API integrators. The PCI infra lead reminds that the production certificate is validated only at the Q2 gate and refuses to open a “non-compliant” environment. The program committee demands the PCI milestone unchanged.",
      problemFr:
        "Promesse agile vs contrainte réglementaire prédictive — aucune interface écrite entre les deux streams.",
      problemEn:
        "Agile promise vs predictive regulatory constraint — no written interface between the two streams.",
      bestActionFr:
        "Convoquer PM programme, PO et lead infra pour rédiger un contrat inter-stream (sandbox partiel sprint 3 + critères + plan B) avant de confirmer la démo.",
      bestActionEn:
        "Convene program PM, PO, and infra lead to draft an inter-stream contract (partial sandbox sprint 3 + criteria + plan B) before confirming the demo.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Helios : conflit sandbox sprint 3 (portail agile) vs gate PCI Q2 (infra prédictif), aucune interface documentée. Que devrait faire le chef de projet en premier ?",
      promptEn:
        "Helios: sprint 3 sandbox conflict (agile portal) vs Q2 PCI gate (predictive infra), no documented interface. What should the project manager do first?",
      explanationCorrectFr:
        "Sans contrat inter-stream écrit, toute promesse ou refus creuse le fossé gouvernance — la première action est de formaliser l'interface.",
      explanationCorrectEn:
        "Without a written inter-stream contract, every promise or refusal deepens the governance gap — the first action is to formalize the interface.",
      difficulty: 3,
      options: [
        opt(
          "Imposer 100 % agile sur l'infra pour accélérer",
          "Force 100% agile on infra to speed up",
          false,
          "L'infra PCI a des contraintes réglementaires non négociables en sprint.",
          "PCI infra has regulatory constraints not negotiable in a sprint."
        ),
        opt(
          "Rédiger un contrat inter-stream (livrable, date, critères) avec PO et lead infra",
          "Draft an inter-stream contract (deliverable, date, criteria) with PO and infra lead",
          true
        ),
        opt(
          "Annuler le portail agile jusqu'à Q2",
          "Cancel agile portal until Q2",
          false,
          "Gèle la valeur métier sans résoudre la dépendance — le portail peut consommer un sandbox partiel.",
          "Freezes business value without resolving the dependency — portal can consume a partial sandbox."
        ),
        opt(
          "Laisser le PO et le lead infra se débrouiller seuls",
          "Let PO and infra lead figure it out alone",
          false,
          "Sans orchestration PM, le conflit remonte au comité en crise.",
          "Without PM orchestration, conflict escalates to the committee in crisis."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Helios : le sponsor veut accélérer le portail en retirant la sync bi-hebdo programme. Quel trade-off risque-t-on ?",
        promptEn:
          "Helios: sponsor wants to speed the portal by dropping biweekly program sync. What trade-off do we risk?",
        explanationCorrectFr:
          "Sans sync, les retards infra deviennent des surprises au gate — le portail ship sur une base instable.",
        explanationCorrectEn:
          "Without sync, infra delays become gate surprises — portal ships on an unstable base.",
        difficulty: 3,
        options: [
          opt(
            "Surprises au gate et incompatibilité version portail/infra",
            "Gate surprises and portal/infra version mismatch",
            true
          ),
          opt(
            "Suppression automatique de toute dette technique",
            "Automatic elimination of all tech debt",
            false,
            "Moins de sync n'élimine pas la dette — elle la masque.",
            "Less sync does not eliminate debt — it hides it."
          ),
          opt(
            "Conformité PCI accélérée",
            "Accelerated PCI compliance",
            false,
            "La conformité PCI ne s'accélère pas en réduisant la gouvernance.",
            "PCI compliance does not accelerate by reducing governance."
          ),
          opt(
            "Plus de vélocité sans coût",
            "More velocity at no cost",
            false,
            "Le trade-off est visibilité et alignement, pas vélocité gratuite.",
            "The trade-off is visibility and alignment, not free velocity."
          ),
        ],
      }),
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Après signature du contrat inter-stream Helios, quelle vérification PLA (VERIFY) est la plus pertinente avant la démo sprint 3 ?",
        promptEn:
          "After signing the Helios inter-stream contract, which PLA VERIFY step is most relevant before the sprint 3 demo?",
        explanationCorrectFr:
          "Vérifier que le sandbox partiel satisfait les critères écrits — pas seulement « quelque chose de up ».",
        explanationCorrectEn:
          "Verify the partial sandbox meets written criteria — not just “something is up.”",
        difficulty: 2,
        options: [
          opt(
            "Valider critères d'acceptation sandbox vs contrat signé",
            "Validate sandbox acceptance criteria vs signed contract",
            true
          ),
          opt(
            "Compter les story points du sprint portail",
            "Count portal sprint story points",
            false,
            "Les points ne prouvent pas la conformité PCI partielle.",
            "Points do not prove partial PCI compliance."
          ),
          opt(
            "Reporter le gate Q2 de six mois",
            "Defer Q2 gate six months",
            false,
            "Le contrat vise l'alignement, pas le report réglementaire.",
            "The contract targets alignment, not regulatory deferral."
          ),
        ],
      }),
    ],
  }),

  buildPmpLesson({
    slug: "coaching-and-mentoring",
    titleFr: "Coaching et mentoring en projet",
    titleEn: "Coaching and Mentoring in Projects",
    descriptionFr:
      "Distinguer accompagnement court terme (coaching) et transmission long terme (mentoring).",
    descriptionEn:
      "Distinguish short-term support (coaching) from long-term transmission (mentoring).",
    moduleSlug: "people",
    sortOrder: 9,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-people",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider entre question de coaching, conseil direct ou parrainage mentoring selon l'urgence et la maturité de Léa sur Helios.",
    objectiveEn:
      "Decide between coaching question, direct advice, or mentoring sponsorship based on urgency and Léa's maturity on Helios.",
    explanationFr:
      "Sur Helios chez Nordia Retail, Marie pilote une équipe où les modes d'accompagnement ne sont pas interchangeables. Le coaching fait émerger la solution via questions ouvertes — utile quand la compétence existe mais la confiance ou la méthode manque. Léa (QA junior) hésite à escalader un bug paiement bloquant les ventes Contineo : ce n'est pas le moment d'un mentoring trimestriel, c'est un coaching court. Le mentoring transmet réseau et trajectoire sur la durée — Marie présente Léa à une QA senior Nordia pour des échanges carrière, hors incident. Le conseil direct (« envoie cet e-mail maintenant ») se réserve à la crise ou aux lacunes de base. Confondre les trois modes crée dépendance (trop de conseil) ou immobilisme (trop de questions en prod down).",
    explanationEn:
      "On Helios at Nordia Retail, Marie leads a team where support modes are not interchangeable. Coaching elicits the solution through open questions — useful when skill exists but confidence or method is missing. Léa (junior QA) hesitates to escalate a payment bug blocking Contineo sales: this is not time for quarterly mentoring, it is short coaching. Mentoring transmits network and trajectory over time — Marie introduces Léa to a senior Nordia QA for career talks, outside the incident. Direct advice (“send that email now”) is for crisis or missing fundamentals. Confusing the three modes creates dependency (too much advice) or paralysis (too many questions during prod down).",
    exampleFr:
      "Incident Helios : Marie demande à Léa « quelle preuve as-tu ? qui est impacté ? » — Léa rédige l'escalade. Hors incident : mentor QA Nordia trimestriel pour progression carrière.",
    exampleEn:
      "Helios incident: Marie asks Léa “what proof do you have? who is impacted?” — Léa drafts escalation. Outside incident: quarterly Nordia QA mentor for career progression.",
    practicalFr:
      "Pour un collègue bloqué, écrivez trois questions de coaching ouvertes avant votre prochaine réunion.",
    practicalEn:
      "For a stuck colleague, write three open coaching questions before your next meeting.",
    mistakeFr:
      "Coacher en incident production critique — ou mentoriser en standup 15 minutes sans profondeur.",
    mistakeEn:
      "Coaching during critical production incident — or mentoring in a 15-minute standup with no depth.",
    takeawayFr:
      "Coaching = autonomie court terme ; mentoring = transmission long terme ; conseil = urgence ou lacune de base.",
    takeawayEn:
      "Coaching = short-term autonomy; mentoring = long-term transmission; advice = urgency or missing basics.",
    decisionFr:
      "En situation non urgente, posez une question avant de proposer votre solution ; réservez le mentoring aux objectifs de développement, pas aux urgences opérationnelles.",
    decisionEn:
      "In non-urgent situations, ask a question before proposing your solution; reserve mentoring for development goals, not operational urgencies.",
    flashcardFrontFr: "Coaching vs mentoring",
    flashcardFrontEn: "Coaching vs mentoring",
    flashcardBackFr: "Coaching : faire émerger ; mentoring : transmettre sur la durée.",
    flashcardBackEn: "Coaching: elicit; mentoring: transmit over time.",
    exercisePromptFr:
      "Rédigez deux questions de coaching pour Léa sur l'escalade du bug paiement Contineo.",
    exercisePromptEn:
      "Draft two coaching questions for Léa on escalating the Contineo payment bug.",
    situation: {
      scenarioFr:
        "Helios, vendredi 16 h : bug paiement en préprod, ventes Contineo bloquées lundi. Léa a les logs mais n'ose pas escalader au lead dev Thomas, qu'elle trouve « impatient ».",
      scenarioEn:
        "Helios, Friday 4 p.m.: payment bug in preprod, Contineo sales blocked Monday. Léa has logs but dares not escalate to dev lead Thomas, whom she finds “impatient.”",
      problemFr:
        "Urgence métier + blocage relationnel — un conseil direct ou un coaching ?",
      problemEn:
        "Business urgency + relational block — direct advice or coaching?",
      bestActionFr:
        "Coaching rapide (2–3 questions sur preuve et impact) puis revue du brouillon d'escalade — pas envoi à sa place sauf si deadline imminente.",
      bestActionEn:
        "Quick coaching (2–3 questions on proof and impact) then review escalation draft — do not send for her unless deadline is imminent.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Léa hésite à escalader un bug critique bloquant Contineo — non urgent pour elle mais bloquant ventes lundi. Quelle approche initiale pour Marie ?",
      promptEn:
        "Léa hesitates to escalate a critical bug blocking Contineo — not urgent to her but blocking sales Monday. Marie's initial approach?",
      explanationCorrectFr:
        "Questions de coaching développent compétence d'escalade sans créer de dépendance.",
      explanationCorrectEn:
        "Coaching questions build escalation skill without creating dependency.",
      difficulty: 2,
      options: [
        opt(
          "Envoyer l'e-mail à sa place sans la consulter",
          "Send the email for her without consulting",
          false,
          "Crée dépendance et réduit l'apprentissage.",
          "Creates dependency and reduces learning."
        ),
        opt(
          "Poser des questions ouvertes puis revoir son brouillon d'escalade",
          "Ask open questions then review her escalation draft",
          true
        ),
        opt(
          "Planifier un mentoring dans six mois",
          "Schedule mentoring in six months",
          false,
          "Ne résout pas le blocage opérationnel de lundi.",
          "Does not solve Monday's operational block."
        ),
        opt(
          "Ignorer car non urgent pour QA",
          "Ignore because not urgent for QA",
          false,
          "Ignore l'impact ventes Contineo.",
          "Ignores Contineo sales impact."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Marie veut aider Léa à progresser sur sa carrière QA sur 12 mois. Quel mode privilégier ?",
        promptEn:
          "Marie wants to help Léa progress in her QA career over 12 months. Which mode to prioritize?",
        explanationCorrectFr:
          "Le mentoring transmet réseau et trajectoire — hors urgence opérationnelle.",
        explanationCorrectEn:
          "Mentoring transmits network and trajectory — outside operational urgency.",
        difficulty: 2,
        options: [
          opt(
            "Mentoring avec une QA senior Nordia",
            "Mentoring with a senior Nordia QA",
            true
          ),
          opt(
            "Conseil direct à chaque standup",
            "Direct advice at every standup",
            false,
            "Le standup n'est pas l'espace mentoring profond.",
            "Standup is not deep mentoring space."
          ),
          opt(
            "Coaching uniquement en incident prod",
            "Coaching only during prod incidents",
            false,
            "Limite le développement carrière au contexte crise.",
            "Limits career development to crisis context."
          ),
        ],
      }),
    ],
  }),

  buildPmpLesson({
    slug: "motivation",
    titleFr: "Motivation de l'équipe",
    titleEn: "Team Motivation",
    descriptionFr:
      "Activer leviers intrinsèques et extrinsèques sans supposer que tout le monde est motivé pareil.",
    descriptionEn:
      "Activate intrinsic and extrinsic levers without assuming everyone is motivated the same way.",
    moduleSlug: "people",
    sortOrder: 10,
    estimatedMinutes: 8,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-people",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider quelle reconnaissance ciblée appliquer à Thomas, Amira et Léa après un sprint Helios difficile.",
    objectiveEn:
      "Decide which targeted recognition to apply to Thomas, Amira, and Léa after a difficult Helios sprint.",
    explanationFr:
      "La motivation sur Helios n'est pas un « bravo équipe » générique. Thomas (dev) valorise maîtrise technique et déteste les livraisons bâclées — une reconnaissance sur la qualité des tests paiement parle à son levier intrinsèque. Amira (UX) est motivée par l'impact utilisateur visible : une capture FlowMart montrant un checkout simplifié renforce le sens de son travail. Léa (QA) cherche progression : lui proposer de présenter son scénario de test au guild QA Nordia combine visibilité et développement. Les leviers extrinsèques (bonus, promotion) sans lien avec le profil produisent des effets inégaux. La démotivation survient quand l'effort invisible — tests, documentation — n'est jamais vu. Avant un sprint, demander « qu'est-ce qui rendrait ce sprint satisfaisant pour toi ? » personnalise l'engagement.",
    explanationEn:
      "Motivation on Helios is not a generic “great team.” Thomas (dev) values technical mastery and hates rushed delivery — recognition for payment test quality speaks to his intrinsic lever. Amira (UX) is driven by visible user impact: a FlowMart screenshot showing a simplified checkout reinforces purpose. Léa (QA) seeks progression: offering her a slot to present her test scenario at the Nordia QA guild combines visibility and development. Extrinsic levers (bonus, promotion) without profile fit yield uneven effects. Demotivation hits when invisible effort — tests, documentation — is never seen. Before a sprint, asking “what would make this sprint satisfying for you?” personalizes engagement.",
    exampleFr:
      "Après sprint difficile Helios : Marie remercie Thomas pour tests paiement évitant régression, montre à Amira feedback utilisateur positif, propose à Léa le guild QA — trois reconnaissances distinctes.",
    exampleEn:
      "After hard Helios sprint: Marie thanks Thomas for payment tests preventing regression, shows Amira positive user feedback, offers Léa the QA guild — three distinct recognitions.",
    practicalFr:
      "Pour chaque membre clé, notez un levier intrinsèque probable et une reconnaissance concrète cette semaine.",
    practicalEn:
      "For each key member, note one likely intrinsic lever and one concrete recognition this week.",
    mistakeFr:
      "Supposer que tout le monde est motivé par la visibilité managériale — ou promettre un bonus sans corriger un processus bâclé.",
    mistakeEn:
      "Assuming everyone is motivated by management visibility — or promising a bonus without fixing a rushed process.",
    takeawayFr:
      "Motivation personnalisée : connecter le travail au sens, calibrer le défi, voir l'invisible.",
    takeawayEn:
      "Personalized motivation: connect work to purpose, calibrate challenge, see the invisible.",
    decisionFr:
      "Avant un sprint, interroger chacun sur ce qui le rendrait satisfait — adapter reconnaissance et défi, pas la même recette pour tous.",
    decisionEn:
      "Before a sprint, ask each person what would satisfy them — adapt recognition and challenge, not the same recipe for all.",
    flashcardFrontFr: "Motivation intrinsèque",
    flashcardFrontEn: "Intrinsic motivation",
    flashcardBackFr: "Autonomie, maîtrise, sens — au-delà des récompenses externes.",
    flashcardBackEn: "Autonomy, mastery, purpose — beyond external rewards.",
    exercisePromptFr:
      "Proposez une reconnaissance distincte pour Thomas, Amira et Léa après le sprint Helios.",
    exercisePromptEn:
      "Propose distinct recognition for Thomas, Amira, and Léa after the Helios sprint.",
    situation: {
      scenarioFr:
        "Helios sprint 7 : livraison paiement imposée en urgence par le sponsor. Thomas livre mais qualité tests réduite. Il se retire silencieusement des rétros.",
      scenarioEn:
        "Helios sprint 7: payment delivery rushed by sponsor. Thomas delivers but test quality reduced. He quietly withdraws from retros.",
      problemFr:
        "Démotivation maîtrise/sens — risque dette qualité sur le module critique Contineo.",
      problemEn:
        "Mastery/purpose demotivation — quality debt risk on critical Contineo module.",
      bestActionFr:
        "Reconnaître publiquement son travail qualité passé, replanifier la dette tests avec critères DoD — pas bonus sans changement process.",
      bestActionEn:
        "Publicly recognize past quality work, replan test debt with DoD criteria — not bonus without process change.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Thomas semble démotivé après une livraison bâclée imposée sur Helios. Quelle action le chef de projet devrait-il prioriser ?",
      promptEn:
        "Thomas seems demotivated after an imposed rushed delivery on Helios. Which action should the project manager prioritize?",
      explanationCorrectFr:
        "Reconnaître la qualité technique et replanifier la dette parle à sa motivation maîtrise/sens.",
      explanationCorrectEn:
        "Recognizing technical quality and replanning debt speaks to mastery/purpose motivation.",
      difficulty: 2,
      options: [
        opt(
          "Ignorer — il est payé pour livrer",
          "Ignore — he is paid to deliver",
          false,
          "Ignore le levier intrinsèque et aggrave la dette.",
          "Ignores intrinsic lever and worsens debt."
        ),
        opt(
          "Reconnaître son travail qualité et planifier la dette avec critères",
          "Recognize quality work and plan debt with criteria",
          true
        ),
        opt(
          "Promettre un bonus sans changer le process",
          "Promise bonus without changing process",
          false,
          "Extrinsèque seul, problème structurel intact.",
          "Extrinsic only, structural issue intact."
        ),
        opt(
          "Le retirer du module paiement",
          "Remove him from payment module",
          false,
          "Punit sans adresser la cause.",
          "Punishes without addressing cause."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Amira demande plus de visibilité sur l'impact utilisateur. Quelle reconnaissance est la plus adaptée ?",
        promptEn:
          "Amira asks for more visibility on user impact. Which recognition fits best?",
        explanationCorrectFr:
          "Montrer un feedback utilisateur concret renforce le levier sens/impact.",
        explanationCorrectEn:
          "Showing concrete user feedback reinforces purpose/impact lever.",
        difficulty: 2,
        options: [
          opt(
            "Partager une capture utilisateur positive sur le checkout",
            "Share positive user screenshot on checkout",
            true
          ),
          opt(
            "Augmenter ses story points objectif",
            "Raise her story point target",
            false,
          "Les points ne mesurent pas l'impact utilisateur.",
            "Points do not measure user impact."
          ),
          opt(
            "La nommer lead infra PCI",
            "Name her PCI infra lead",
            false,
            "Hors compétence et motivation UX.",
            "Outside UX skill and motivation."
          ),
        ],
      }),
    ],
  }),

  buildPmpLesson({
    slug: "collaboration",
    titleFr: "Collaboration et travail d'équipe",
    titleEn: "Collaboration and Teamwork",
    descriptionFr:
      "Structurer la co-création transverse avec objectifs partagés, rituels et outils communs.",
    descriptionEn:
      "Structure cross-functional co-creation with shared goals, rituals, and common tools.",
    moduleSlug: "people",
    sortOrder: 12,
    estimatedMinutes: 8,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-people",
    learningObjective: "APPLY",
    objectiveFr:
      "Appliquer une Definition of Ready et un rituel de démo pour réduire le rework UX/dev/QA sur Helios.",
    objectiveEn:
      "Apply a Definition of Ready and demo ritual to reduce UX/dev/QA rework on Helios.",
    explanationFr:
      "Sur Helios, le rework entre Amira (UX), Thomas (dev) et Léa (QA) coûte près de 25 % du sprint quand les handoffs restent flous. La collaboration efficace repose sur un objectif commun visible, des règles explicites (qui décide, délais de réponse, definition of done) et une source de vérité unique — pas Slack + mail + Jira sans accord. Marie installe une Definition of Ready : aucun ticket sans critères d'acceptation UX+QA signés. Chaque mercredi, démo 30 minutes ouverte au support Contineo : feedback capturé dans le backlog commun. Le PM facilite sans devenir goulot : il arbitre quand les règles ne suffisent plus.",
    explanationEn:
      "On Helios, rework between Amira (UX), Thomas (dev), and Léa (QA) costs nearly 25% of the sprint when handoffs stay fuzzy. Effective collaboration rests on a visible shared goal, explicit rules (who decides, response times, definition of done), and one source of truth — not Slack + email + Jira without agreement. Marie installs a Definition of Ready: no ticket without signed UX+QA acceptance criteria. Every Wednesday, 30-minute demo open to Contineo support: feedback captured in the shared backlog. The PM facilitates without becoming the bottleneck: they arbitrate when rules are insufficient.",
    exampleFr:
      "Helios DoR : critères UX+QA signés avant dev. Démo mercredi : Amira parcours, Thomas limites techniques, tickets créés dans Jira commun.",
    exampleEn:
      "Helios DoR: UX+QA criteria signed before dev. Wednesday demo: Amira journey, Thomas technical limits, tickets created in shared Jira.",
    practicalFr:
      "Rédigez une Definition of Ready en cinq bullet points pour votre équipe transverse.",
    practicalEn:
      "Draft a five-bullet Definition of Ready for your cross-functional team.",
    mistakeFr:
      "Multiplier les outils sans règle « source de vérité » — ou embaucher des devs avant d'auditer les handoffs.",
    mistakeEn:
      "Multiplying tools without a “source of truth” rule — or hiring devs before auditing handoffs.",
    takeawayFr:
      "Collaboration = objectif commun + règles de handoff + démos tôt avec parties prenantes.",
    takeawayEn:
      "Collaboration = shared goal + handoff rules + early demos with stakeholders.",
    decisionFr:
      "Si rework > 20 % du sprint, auditer handoffs UX/dev/QA avant d'ajouter des ressources.",
    decisionEn:
      "If rework > 20% of sprint, audit UX/dev/QA handoffs before adding resources.",
    flashcardFrontFr: "Definition of Ready",
    flashcardFrontEn: "Definition of Ready",
    flashcardBackFr: "Critères minimums avant qu'un ticket entre en développement.",
    flashcardBackEn: "Minimum criteria before a ticket enters development.",
    exercisePromptFr:
      "Listez deux règles de handoff entre Amira (UX) et Thomas (dev) sur Helios.",
    exercisePromptEn:
      "List two handoff rules between Amira (UX) and Thomas (dev) on Helios.",
    situation: {
      scenarioFr:
        "Helios sprint 4 : Thomas développe un parcours paiement sans critères QA signés. Léa découvre des cas limites en fin de sprint — 3 jours de rework.",
      scenarioEn:
        "Helios sprint 4: Thomas builds a payment journey without signed QA criteria. Léa finds edge cases at sprint end — 3 days rework.",
      problemFr:
        "Handoff UX/dev/QA flou — ticket pris sans Definition of Ready.",
      problemEn:
        "Fuzzy UX/dev/QA handoff — ticket taken without Definition of Ready.",
      bestActionFr:
        "Instaurer DoR obligatoire (critères UX+QA signés) et bloquer les tickets non conformes au prochain planning.",
      bestActionEn:
        "Institute mandatory DoR (signed UX+QA criteria) and block non-compliant tickets at next planning.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Rework élevé entre maquettes et développement sur Helios. Que devrait faire le chef de projet en premier ?",
      promptEn:
        "High rework between mockups and development on Helios. What should the project manager do first?",
      explanationCorrectFr:
        "Definition of Ready et critères d'acceptation clarifient les handoffs avant d'ajouter des ressources.",
      explanationCorrectEn:
        "Definition of Ready and acceptance criteria clarify handoffs before adding resources.",
      difficulty: 2,
      options: [
        opt(
          "Embaucher deux développeurs supplémentaires",
          "Hire two more developers",
          false,
          "Sans règles, le rework persiste.",
          "Without rules, rework persists."
        ),
        opt(
          "Definition of Ready avec critères UX/QA signés",
          "Definition of Ready with signed UX/QA criteria",
          true
        ),
        opt(
          "Supprimer la phase UX",
          "Remove UX phase",
          false,
          "Aggrave qualité et acceptation Contineo.",
          "Worsens quality and Contineo acceptance."
        ),
        opt(
          "Interdire toute démo intermédiaire",
          "Ban all intermediate demos",
          false,
          "Réduit feedback tôt.",
          "Reduces early feedback."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "L'équipe Helios utilise Slack, mail et Jira sans accord sur la source de vérité. Quelle règle de collaboration clarifier en premier ?",
        promptEn:
          "Helios team uses Slack, email, and Jira with no source-of-truth agreement. Which collaboration rule to clarify first?",
        explanationCorrectFr:
          "Désigner où vit l'état officiel du travail (ex. Jira) — une source de vérité.",
        explanationCorrectEn:
          "Designate where official work state lives (e.g. Jira) — one source of truth.",
        difficulty: 2,
        options: [
          opt(
            "Source de vérité unique pour l'état des tickets",
            "Single source of truth for ticket state",
            true
          ),
          opt(
            "Supprimer Slack immédiatement",
            "Remove Slack immediately",
            false,
            "L'outil n'est pas le problème — l'absence de règle l'est.",
            "The tool is not the problem — missing rule is."
          ),
          opt(
            "Centraliser toutes décisions chez le PM",
            "Centralize all decisions with PM",
            false,
            "Crée un goulot — pas une collaboration saine.",
            "Creates bottleneck — not healthy collaboration."
          ),
        ],
      }),
    ],
  }),

  buildPmpLesson({
    slug: "issue-management",
    titleFr: "Gestion des problèmes",
    titleEn: "Issue Management",
    descriptionFr:
      "Traquer, prioriser et résoudre les problèmes actifs avec owner et échéance.",
    descriptionEn:
      "Track, prioritize, and resolve active issues with owner and due date.",
    moduleSlug: "process",
    sortOrder: 8,
    estimatedMinutes: 9,
    difficulty: "BEGINNER",
    skillSlug: "pmp-process",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider quand escalader une issue HelioRoute au sponsor et quelles informations minimum documenter.",
    objectiveEn:
      "Decide when to escalate a HelioRoute issue to the sponsor and what minimum information to document.",
    explanationFr:
      "Un risque matérialisé devient un problème actif — il faut le traiter différemment. Sur HelioRoute (flotte GPS Contineo), le fournisseur confirme un retard matériel de 3 semaines sur le chemin critique sans marge. ISS-014 s'ouvre : impact +3 semaines, owner = lead intégration, échéance analyse options J+3. Le registre capture description, date, impact (planning/coût/qualité), owner unique, statut et résolution — pas « l'équipe ». Si la solution exige budget non approuvé ou changement de scope majeur, escalade sponsor via changement. Revue hebdo des issues ouvertes > 5 jours sans progrès. La méthode PLA : OBSERVE le blocage, IDENTIFY l'owner, ACT avec options chiffrées, VERIFY la décision sponsor.",
    explanationEn:
      "A materialized risk becomes an active problem — it must be handled differently. On HelioRoute (Contineo GPS fleet), the vendor confirms a 3-week hardware delay on the critical path with no float. ISS-014 opens: impact +3 weeks, owner = integration lead, options analysis due D+3. The log captures description, date, impact (schedule/cost/quality), single owner, status, and resolution — not “the team.” If the solution needs unapproved budget or major scope change, escalate to sponsor via change. Weekly review of open issues > 5 days without progress. PLA method: OBSERVE the block, IDENTIFY the owner, ACT with quantified options, VERIFY sponsor decision.",
    exampleFr:
      "HelioRoute ISS-014 : owner nommé, 3 options (fournisseur alternatif, fast-track, scope swap), décision sponsor comité J+5.",
    exampleEn:
      "HelioRoute ISS-014: named owner, 3 options (alternate vendor, fast-track, scope swap), sponsor decision committee D+5.",
    practicalFr:
      "Rédigez une entrée registre issues pour un problème récent : impact, owner, échéance, critère d'escalade.",
    practicalEn:
      "Write one issue log entry for a recent problem: impact, owner, due date, escalation criterion.",
    mistakeFr:
      "Discuter le même problème en réunion sans l'enregistrer — ou escalader sans options chiffrées.",
    mistakeEn:
      "Discussing the same problem in meetings without logging — or escalating without quantified options.",
    takeawayFr:
      "Issue = owner + échéance + impact documenté ; escalader si autorité ou délai dépassés.",
    takeawayEn:
      "Issue = owner + due date + documented impact; escalate if authority or timeline exceeded.",
    decisionFr:
      "Escalader si impact dépasse autorité PM (budget, scope, date) ou blocage > 5 jours ouvrés sans progrès.",
    decisionEn:
      "Escalate if impact exceeds PM authority (budget, scope, date) or blockage > 5 business days without progress.",
    flashcardFrontFr: "Registre des issues",
    flashcardFrontEn: "Issue log",
    flashcardBackFr: "Problèmes actifs : owner unique, impact, échéance, statut.",
    flashcardBackEn: "Active problems: single owner, impact, due date, status.",
    exercisePromptFr:
      "HelioRoute ISS-014 : listez impact, owner et critère d'escalade vers le sponsor.",
    exercisePromptEn:
      "HelioRoute ISS-014: list impact, owner, and escalation criterion to sponsor.",
    situation: {
      scenarioFr:
        "HelioRoute : retard GPS 3 semaines, chemin critique sans marge. L'équipe débat depuis 8 jours en réunion sans entrée registre. Le sponsor demande un statut.",
      scenarioEn:
        "HelioRoute: 3-week GPS delay, critical path with no float. Team has debated 8 days in meetings with no log entry. Sponsor asks for status.",
      problemFr:
        "Problème actif non tracé — pas d'owner ni d'options documentées.",
      problemEn:
        "Active problem untracked — no owner or documented options.",
      bestActionFr:
        "Ouvrir ISS-014 immédiatement, nommer owner intégration, documenter 3 options chiffrées, présenter trade-offs sponsor sous 48 h.",
      bestActionEn:
        "Open ISS-014 immediately, name integration owner, document 3 quantified options, present trade-offs to sponsor within 48 h.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "HelioRoute : retard GPS bloque le chemin critique depuis 8 jours, pas d'entrée registre. Que devrait faire le chef de projet en premier ?",
      promptEn:
        "HelioRoute: GPS delay blocks critical path 8 days, no log entry. What should the project manager do first?",
      explanationCorrectFr:
        "Formaliser l'issue avec owner et impact — arrêter les débats sans traçabilité.",
      explanationCorrectEn:
        "Formalize the issue with owner and impact — stop debates without traceability.",
      difficulty: 2,
      options: [
        opt(
          "Ouvrir ISS-014 avec owner, impact et échéance analyse",
          "Open ISS-014 with owner, impact, and analysis due date",
          true
        ),
        opt(
          "Attendre la prochaine revue risques",
          "Wait for next risk review",
          false,
          "8 jours sans progrès — trop tard pour attendre.",
          "8 days without progress — too late to wait."
        ),
        opt(
          "Fermer le projet GPS",
          "Close GPS project",
          false,
          "Escalade prématurée sans options analysées.",
          "Premature escalation without analyzed options."
        ),
        opt(
          "Assigner l'issue à « l'équipe »",
          "Assign issue to “the team”",
          false,
          "Pas d'owner unique = pas de responsabilité.",
          "No single owner = no accountability."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "ISS-014 HelioRoute : la solution recommandée coûte 400 k€ non budgétés. Quelle action pour le chef de projet ?",
        promptEn:
          "HelioRoute ISS-014: recommended solution costs €400k unbudgeted. What action for the project manager?",
        explanationCorrectFr:
          "Escalader au sponsor avec options chiffrées — dépasse l'autorité PM.",
        explanationCorrectEn:
          "Escalate to sponsor with quantified options — exceeds PM authority.",
        difficulty: 2,
        options: [
          opt(
            "Escalader au sponsor avec trade-offs chiffrés",
            "Escalate to sponsor with quantified trade-offs",
            true
          ),
          opt(
            "Engager le budget sans approbation",
            "Commit budget without approval",
            false,
            "Dépasse l'autorité du PM.",
            "Exceeds PM authority."
          ),
          opt(
            "Ignorer l'issue jusqu'au prochain gate",
            "Ignore issue until next gate",
            false,
            "Le chemin critique n'a pas de marge.",
            "Critical path has no float."
          ),
        ],
      }),
    ],
  }),

  buildPmpLesson({
    slug: "lessons-learned",
    titleFr: "Leçons apprises",
    titleEn: "Lessons Learned",
    descriptionFr:
      "Capturer et réutiliser les enseignements tout au long du projet, pas seulement à la clôture.",
    descriptionEn:
      "Capture and reuse learnings throughout the project, not only at closing.",
    moduleSlug: "process",
    sortOrder: 15,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: "pmp-process",
    learningObjective: "APPLY",
    objectiveFr:
      "Appliquer le format contexte/leçon/recommandation pour capturer LL-003 HelioRoute avant la vague 2.",
    objectiveEn:
      "Apply context/lesson/recommendation format to capture HelioRoute LL-003 before wave 2.",
    explanationFr:
      "Les leçons apprises ne sont pas un rituel de clôture optionnel — sur HelioRoute, la vague 1 révèle un retard GPS de 3 semaines causé par une estimation fournisseur en analogique seule. LL-003 documente : contexte (intégration GPS critique), leçon (analogique insuffisant pour fournisseur nouveau), recommandation (bottom-up + clause pénalité contrats critiques). Capturer en continu — rétrospectives, fin de phase — évite l'amnésie organisationnelle Contineo. Stocker dans un référentiel PMO accessible, pas un email oublié. Une leçon actionnable a un owner de diffusion : avant vague 2, le PMO partage LL-003 aux équipes d'intégration.",
    explanationEn:
      "Lessons learned are not an optional closing ritual — on HelioRoute, wave 1 reveals a 3-week GPS delay caused by vendor estimate using analogous only. LL-003 documents: context (critical GPS integration), lesson (analogous insufficient for new vendor), recommendation (bottom-up + penalty clause for critical contracts). Capture continuously — retrospectives, phase end — to avoid Contineo organizational amnesia. Store in an accessible PMO repository, not a forgotten email. An actionable lesson has a dissemination owner: before wave 2, PMO shares LL-003 with integration teams.",
    exampleFr:
      "HelioRoute LL-003 : contexte GPS, leçon estimation, reco bottom-up + pénalités → partagé PMO avant vague 2.",
    exampleEn:
      "HelioRoute LL-003: GPS context, estimation lesson, bottom-up + penalties reco → shared with PMO before wave 2.",
    practicalFr:
      "Rédigez une leçon apprise en trois lignes (contexte, leçon, recommandation) sur un projet passé.",
    practicalEn:
      "Write a three-line lesson learned (context, lesson, recommendation) from a past project.",
    mistakeFr:
      "Attendre la clôture pour documenter — ou rédiger des leçons blâmantes sans recommandation actionnable.",
    mistakeEn:
      "Waiting until closing to document — or writing blame lessons without actionable recommendation.",
    takeawayFr:
      "Leçon apprise = action future, pas blame ; capturer tôt et diffuser largement.",
    takeawayEn:
      "Lesson learned = future action, not blame; capture early and disseminate widely.",
    decisionFr:
      "Après chaque phase ou incident majeur, consigner au moins une leçon dans le référentiel PMO avec owner de diffusion.",
    decisionEn:
      "After each phase or major incident, log at least one lesson in the PMO repository with dissemination owner.",
    flashcardFrontFr: "Leçon apprise",
    flashcardFrontEn: "Lesson learned",
    flashcardBackFr: "Contexte + enseignement + recommandation actionnable.",
    flashcardBackEn: "Context + insight + actionable recommendation.",
    exercisePromptFr:
      "HelioRoute retard GPS : rédigez LL-003 (contexte, leçon, recommandation) en format PMO.",
    exercisePromptEn:
      "HelioRoute GPS delay: write LL-003 (context, lesson, recommendation) in PMO format.",
    situation: {
      scenarioFr:
        "HelioRoute vague 1 clôturée avec retard GPS documenté oralement. Vague 2 démarre dans 3 semaines — même fournisseur, même type d'intégration.",
      scenarioEn:
        "HelioRoute wave 1 closed with GPS delay documented orally. Wave 2 starts in 3 weeks — same vendor, same integration type.",
      problemFr:
        "Risque de répéter l'erreur d'estimation — pas de leçon formalisée ni diffusée.",
      problemEn:
        "Risk of repeating estimation error — no formalized or disseminated lesson.",
      bestActionFr:
        "Rédiger LL-003 (contexte, leçon, recommandation bottom-up + pénalités) et diffuser au PMO avant kick-off vague 2.",
      bestActionEn:
        "Write LL-003 (context, lesson, bottom-up + penalties recommendation) and disseminate via PMO before wave 2 kickoff.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "HelioRoute vague 2 démarre bientôt — la vague 1 a révélé un retard GPS par mauvaise estimation. Que devrait faire le chef de projet en premier ?",
      promptEn:
        "HelioRoute wave 2 starts soon — wave 1 revealed GPS delay from bad estimation. What should the project manager do first?",
      explanationCorrectFr:
        "Capturer et diffuser LL-003 avant vague 2 — leçon actionnable, pas blame.",
      explanationCorrectEn:
        "Capture and disseminate LL-003 before wave 2 — actionable lesson, not blame.",
      difficulty: 2,
      options: [
        opt(
          "Rédiger et diffuser LL-003 au PMO avant kick-off vague 2",
          "Write and disseminate LL-003 to PMO before wave 2 kickoff",
          true
        ),
        opt(
          "Attendre la clôture finale du programme",
          "Wait for final program closing",
          false,
          "Trop tard — vague 2 répétera l'erreur.",
          "Too late — wave 2 will repeat the error."
        ),
        opt(
          "Blâmer le fournisseur en comité",
          "Blame vendor in committee",
          false,
          "Leçon = action future, pas blame.",
          "Lesson = future action, not blame."
        ),
        opt(
          "Ignorer — l'équipe s'en souviendra",
          "Ignore — team will remember",
          false,
          "Turnover et charge effacent la mémoire orale.",
          "Turnover and workload erase oral memory."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Quel élément manque à une « leçon apprise » pour être actionnable au PMO Contineo ?",
        promptEn:
          "Which element is missing from a “lesson learned” to be actionable at Contineo PMO?",
        explanationCorrectFr:
          "Recommandation actionnable + owner de diffusion — pas seulement constat.",
        explanationCorrectEn:
          "Actionable recommendation + dissemination owner — not only observation.",
        difficulty: 2,
        options: [
          opt(
            "Recommandation concrète et owner de diffusion",
            "Concrete recommendation and dissemination owner",
            true
          ),
          opt(
            "Nom du coupable",
            "Name of person at fault",
            false,
            "Blame n'est pas une leçon actionnable.",
            "Blame is not an actionable lesson."
          ),
          opt(
            "Budget total du projet",
            "Total project budget",
            false,
            "Hors format leçon apprise.",
            "Outside lesson learned format."
          ),
        ],
      }),
    ],
  }),

  buildPmpLesson({
    slug: "benefits",
    titleFr: "Bénéfices attendus",
    titleEn: "Expected Benefits",
    descriptionFr:
      "Formuler outputs, outcomes et bénéfices mesurables dès le business case.",
    descriptionEn:
      "Formulate outputs, outcomes, and measurable benefits from the business case onward.",
    moduleSlug: "business-environment",
    sortOrder: 4,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "benefits",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Analyser si un livrable Helios CRM produit un bénéfice mesurable ou seulement un output.",
    objectiveEn:
      "Analyze whether a Helios CRM deliverable produces measurable benefit or only an output.",
    explanationFr:
      "Contineo approuve le CRM Helios v2 sur une promesse de valeur — pas sur « livrer à temps ». Output = CRM déployé. Outcome = commerciaux passent 40 % moins de temps admin. Bénéfice = +10 % leads qualifiés / trimestre (cible business case). Sans cette chaîne output → outcome → bénéfice avec indicateur, le comité célèbre la go-live puis découvre que personne ne mesure la conversion. Nordia Retail exige au moins un indicateur de bénéfice avant approbation. Livrer le CRM sans mesurer les leads qualifiés = output sans bénéfice prouvé — projet vert, bénéfices rouges.",
    explanationEn:
      "Contineo approves Helios CRM v2 on a value promise — not on “deliver on time.” Output = CRM deployed. Outcome = sales reps spend 40% less admin time. Benefit = +10% qualified leads / quarter (business case target). Without this output → outcome → benefit chain with indicator, the committee celebrates go-live then discovers no one measures conversion. Nordia Retail requires at least one benefit indicator before approval. Delivering CRM without measuring qualified leads = output without proven benefit — green project, red benefits.",
    exampleFr:
      "Helios CRM : output CRM v2 live ; outcome −40 % temps admin ; bénéfice +10 % leads qualifiés / trimestre — indicateur suivi par directrice commerciale.",
    exampleEn:
      "Helios CRM: output CRM v2 live; outcome −40% admin time; benefit +10% qualified leads / quarter — indicator tracked by sales director.",
    practicalFr:
      "Choisissez un livrable récent : écrivez output → outcome → bénéfice → indicateur.",
    practicalEn:
      "Pick a recent deliverable: write output → outcome → benefit → indicator.",
    mistakeFr:
      "Confondre livraison à temps (output) avec succès business (bénéfice réalisé).",
    mistakeEn:
      "Confusing on-time delivery (output) with business success (realized benefit).",
    takeawayFr:
      "Output = livrable ; outcome = changement ; bénéfice = valeur mesurable pour l'org.",
    takeawayEn:
      "Output = deliverable; outcome = change; benefit = measurable value for the org.",
    decisionFr:
      "Exiger au moins un indicateur de bénéfice dans le business case avant approbation Contineo.",
    decisionEn:
      "Require at least one benefit indicator in the business case before Contineo approval.",
    flashcardFrontFr: "Output vs outcome",
    flashcardFrontEn: "Output vs outcome",
    flashcardBackFr: "Output = livrable ; outcome = changement observable ; bénéfice = valeur.",
    flashcardBackEn: "Output = deliverable; outcome = observable change; benefit = value.",
    exercisePromptFr:
      "Helios CRM : transformez « CRM v2 déployé » en bénéfice mesurable avec indicateur.",
    exercisePromptEn:
      "Helios CRM: turn 'CRM v2 deployed' into a measurable benefit with an indicator.",
    situation: {
      scenarioFr:
        "Helios CRM v2 go-live réussi chez Nordia. Trois mois après, leads qualifiés stables — le sponsor Contineo demande où est le ROI promis.",
      scenarioEn:
        "Helios CRM v2 successful go-live at Nordia. Three months later, qualified leads flat — Contineo sponsor asks where the promised ROI is.",
      problemFr:
        "Output livré sans mesure d'outcome/bénéfice — pas d'indicateur suivi post go-live.",
      problemEn:
        "Output delivered without outcome/benefit measurement — no post go-live indicator tracked.",
      bestActionFr:
        "Activer le suivi leads qualifiés / trimestre vs baseline avec owner métier (directrice commerciale) — pas attendre clôture PM.",
      bestActionEn:
        "Activate qualified leads / quarter tracking vs baseline with business owner (sales director) — do not wait for PM closing.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Helios CRM v2 est en prod depuis 3 mois, leads qualifiés plats. Que devrait clarifier le chef de projet en premier ?",
      promptEn:
        "Helios CRM v2 has been in prod 3 months, qualified leads flat. What should the project manager clarify first?",
      explanationCorrectFr:
        "Quel indicateur de bénéfice du business case est suivi et par qui — output ≠ bénéfice.",
      explanationCorrectEn:
        "Which business case benefit indicator is tracked and by whom — output ≠ benefit.",
      difficulty: 2,
      options: [
        opt(
          "Indicateur de bénéfice, baseline et owner métier de mesure",
          "Benefit indicator, baseline, and business measurement owner",
          true
        ),
        opt(
          "Date de fin de garantie technique",
          "Technical warranty end date",
          false,
          "Hors lien avec bénéfice business.",
          "Unrelated to business benefit."
        ),
        opt(
          "Nombre de tickets Jira fermés",
          "Number of closed Jira tickets",
          false,
          "Mesure activité, pas bénéfice.",
          "Measures activity, not benefit."
        ),
        opt(
          "Vélocité de l'équipe projet",
          "Project team velocity",
          false,
          "Vélocité ≠ leads qualifiés.",
          "Velocity ≠ qualified leads."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Le comité Contineo approuve Helios CRM. Quelle information manquante rendrait le business case incomplet ?",
        promptEn:
          "Contineo committee approves Helios CRM. Which missing information would make the business case incomplete?",
        explanationCorrectFr:
          "Indicateur de bénéfice mesurable lié à l'outcome — pas seulement date de livraison.",
        explanationCorrectEn:
          "Measurable benefit indicator linked to outcome — not only delivery date.",
        difficulty: 2,
        options: [
          opt(
            "Indicateur de bénéfice (ex. leads qualifiés / trimestre)",
            "Benefit indicator (e.g. qualified leads / quarter)",
            true
          ),
          opt(
            "Couleur du logo CRM",
            "CRM logo color",
            false,
            "Sans lien avec valeur business.",
            "Unrelated to business value."
          ),
          opt(
            "Nombre de développeurs",
            "Number of developers",
            false,
            "Ressource, pas bénéfice.",
            "Resource, not benefit."
          ),
        ],
      }),
    ],
  }),

  buildPmpLesson({
    slug: "organizational-context",
    titleFr: "Contexte organisationnel",
    titleEn: "Organizational Context",
    descriptionFr:
      "Comprendre structure, culture et facteurs environnementaux du projet.",
    descriptionEn:
      "Understand structure, culture, and environmental factors of the project.",
    moduleSlug: "business-environment",
    sortOrder: 6,
    estimatedMinutes: 9,
    difficulty: "BEGINNER",
    skillSlug: "pmp-business-environment",
    learningObjective: "ANALYZE",
    objectiveFr:
      "Analyser comment structure matricielle, culture conformité et contraintes externes influencent les décisions Helios.",
    objectiveEn:
      "Analyze how matrix structure, compliance culture, and external constraints influence Helios decisions.",
    explanationFr:
      "Chaque projet s'inscrit dans un contexte organisationnel — pas un template universel. Helios chez Nordia Retail : structure matricielle (devs rapportent au manager fonctionnel ET au PM), culture conformité PCI (tolérance faible à l'échec sur l'infra), politique interne (priorité programmes réglementés vs portail agile). Contraintes organisationnelles : systèmes legacy, compétences rares sécurité, marché B2B exigeant audits. Contraintes externes : régulation PCI, délais certification, fournisseurs imposés. Le PM ne contrôle pas ces facteurs — il les intègre. Importer le process d'une startup projetisée voisine chez Helios sans gouvernance = chaos ; copier la lourdeur Helios chez FlowMart sans contraintes = friction inutile.",
    explanationEn:
      "Every project sits in organizational context — not a universal template. Helios at Nordia Retail: matrix structure (devs report to functional manager AND PM), compliance culture (low failure tolerance on infra), internal politics (regulated programs prioritized vs agile portal). Organizational constraints: legacy systems, scarce security skills, demanding B2B market requiring audits. External constraints: PCI regulation, certification timelines, imposed vendors. The PM does not control these factors — they integrate them. Importing a neighbor projectized startup process to Helios without governance = chaos; copying Helios heaviness at FlowMart without constraints = useless friction.",
    exampleFr:
      "Helios matrice : manager fonctionnel refuse un dev — PM négocie capacité via sponsor, pas ordre direct. FlowMart projetisé : décisions 24 h mais peu de process audit.",
    exampleEn:
      "Helios matrix: functional manager refuses a dev — PM negotiates capacity via sponsor, not direct order. FlowMart projectized: 24 h decisions but little audit process.",
    practicalFr:
      "Décrivez structure, une norme culturelle et une contrainte externe impactant vos projets.",
    practicalEn:
      "Describe structure, one cultural norm, and one external constraint impacting your projects.",
    mistakeFr:
      "Ignorer le manager fonctionnel en matrice — ou utiliser le terme « facteurs d'entreprise » sans traduire en contraintes concrètes.",
    mistakeEn:
      "Ignoring the functional manager in a matrix — or using jargon without translating to concrete constraints.",
    takeawayFr:
      "Contexte org = structure + culture + contraintes — à intégrer, pas combattre.",
    takeawayEn:
      "Org context = structure + culture + constraints — integrate, do not fight.",
    decisionFr:
      "Cartographier reporting, culture décisionnelle et contraintes réglementaires dès le démarrage Helios.",
    decisionEn:
      "Map reporting, decision culture, and regulatory constraints at Helios initiating.",
    flashcardFrontFr: "Structure matricielle",
    flashcardFrontEn: "Matrix structure",
    flashcardBackFr: "Double reporting : manager fonctionnel + chef de projet.",
    flashcardBackEn: "Dual reporting: functional manager + project manager.",
    exercisePromptFr:
      "Helios matrice : le manager fonctionnel refuse un dev. Quelle première action pour le PM ?",
    exercisePromptEn:
      "Helios matrix: functional manager refuses a dev. What first action for the PM?",
    situation: {
      scenarioFr:
        "Helios : le PM demande Thomas (dev paiement) à 50 % pour le sprint critique. Son manager fonctionnel Nordia alloue Thomas à 100 % sur un ticket legacy « urgent » hors Helios.",
      scenarioEn:
        "Helios: PM requests Thomas (payment dev) at 50% for critical sprint. His Nordia functional manager allocates Thomas 100% to an “urgent” legacy ticket outside Helios.",
      problemFr:
        "Structure matricielle — PM sans autorité directe sur les ressources.",
      problemEn:
        "Matrix structure — PM without direct resource authority.",
      bestActionFr:
        "Escalader via sponsor avec impact sprint chiffré et négocier allocation explicite — pas contourner le manager fonctionnel.",
      bestActionEn:
        "Escalate via sponsor with quantified sprint impact and negotiate explicit allocation — do not bypass functional manager.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Helios matrice : manager fonctionnel retire Thomas du sprint critique. Que devrait faire le chef de projet en premier ?",
      promptEn:
        "Helios matrix: functional manager pulls Thomas from critical sprint. What should the project manager do first?",
      explanationCorrectFr:
        "Négocier via sponsor avec impact chiffré — le PM n'a pas autorité directe en matrice.",
      explanationCorrectEn:
        "Negotiate via sponsor with quantified impact — PM has no direct authority in matrix.",
      difficulty: 2,
      options: [
        opt(
          "Escalader au sponsor avec impact sprint et demander allocation négociée",
          "Escalate to sponsor with sprint impact and request negotiated allocation",
          true
        ),
        opt(
          "Ordonner au manager fonctionnel de libérer Thomas",
          "Order functional manager to release Thomas",
          false,
          "Le PM n'a pas autorité hiérarchique sur Thomas.",
          "PM has no line authority over Thomas."
        ),
        opt(
          "Remplacer Thomas sans informer le manager",
          "Replace Thomas without informing manager",
          false,
          "Aggrave conflit politique interne.",
          "Worsens internal political conflict."
        ),
        opt(
          "Abandonner le sprint critique",
          "Abandon critical sprint",
          false,
          "Escalade prématurée sans négociation.",
          "Premature escalation without negotiation."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Helios doit passer un audit PCI externe imposé par le marché B2B. Quel type de contrainte le PM doit-il intégrer en priorité ?",
        promptEn:
          "Helios must pass external PCI audit imposed by B2B market. Which constraint type must the PM integrate first?",
        explanationCorrectFr:
          "Contrainte externe réglementaire — calendrier certification non négociable par le PM seul.",
        explanationCorrectEn:
          "External regulatory constraint — certification calendar not negotiable by PM alone.",
        difficulty: 2,
        options: [
          opt(
            "Contrainte externe réglementaire (audit PCI)",
            "External regulatory constraint (PCI audit)",
            true
          ),
          opt(
            "Préférence personnelle du PM pour Scrum",
            "PM personal preference for Scrum",
            false,
            "Préférence, pas contrainte organisationnelle.",
            "Preference, not organizational constraint."
          ),
          opt(
            "Couleur des bureaux Nordia",
            "Nordia office color",
            false,
            "Sans impact projet.",
            "No project impact."
          ),
        ],
      }),
    ],
  }),

  buildPmpLesson({
    slug: "organizational-change",
    titleFr: "Changement organisationnel",
    titleEn: "Organizational Change",
    descriptionFr:
      "Préparer adoption et conduite du changement au-delà du livrable technique.",
    descriptionEn:
      "Prepare adoption and change management beyond the technical deliverable.",
    moduleSlug: "business-environment",
    sortOrder: 9,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "change-management",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider les trois actions change management prioritaires quand Helios ERP go-live réussit mais l'adoption magasins Nordia stagne à 40 %.",
    objectiveEn:
      "Decide the three priority change management actions when Helios ERP go-live succeeds but Nordia store adoption stalls at 40%.",
    explanationFr:
      "Livrer Helios ERP chez Nordia Retail n'est pas réussir le changement. Go-live technique OK — mais 40 % des magasins utilisent encore Excel parallèle trois mois après. Le changement organisationnel couvre adoption, comportements, sponsors métier régionaux, ambassadeurs magasin, métriques d'usage. Le PM coordonne avec le change lead Contineo — pas un email J-1 et une FAQ. Confondre go-live et changement réussi = projet vert, bénéfices rouges. Plan efficace : sponsors régionaux nommés, formation ciblée par rôle, KPI adoption / magasin, retrait Excel au mois 3 avec conséquence visible.",
    explanationEn:
      "Delivering Helios ERP at Nordia Retail is not successful change. Technical go-live OK — but 40% of stores still use parallel Excel three months later. Organizational change covers adoption, behaviors, regional business sponsors, store ambassadors, usage metrics. PM coordinates with Contineo change lead — not a day-before email and FAQ. Confusing go-live and successful change = green project, red benefits. Effective plan: named regional sponsors, role-targeted training, adoption KPI / store, Excel retired at month 3 with visible consequence.",
    exampleFr:
      "Helios ERP Nordia : sponsors régionaux, KPI adoption / magasin, suppression Excel mois 3 — pas seulement formation initiale.",
    exampleEn:
      "Helios ERP Nordia: regional sponsors, adoption KPI / store, Excel retired month 3 — not only initial training.",
    practicalFr:
      "Un déploiement récent : adoption réelle vs prévue ? Qu'aurait dû couvrir le plan de changement ?",
    practicalEn:
      "A recent deployment: actual vs planned adoption? What should the change plan have covered?",
    mistakeFr:
      "Réduire le change à communication J-1 — ou clôturer le projet PM avant stabilisation adoption.",
    mistakeEn:
      "Reducing change to day-before communication — or closing PM project before adoption stabilizes.",
    takeawayFr:
      "Changement org = adoption et comportements, pas seulement livrable technique.",
    takeawayEn:
      "Org change = adoption and behaviors, not only technical deliverable.",
    decisionFr:
      "Intégrer plan d'adoption et owner métier dès la planification — mesurer adoption 90 jours post go-live.",
    decisionEn:
      "Integrate adoption plan and business owner from planning — measure adoption 90 days post go-live.",
    flashcardFrontFr: "Change management",
    flashcardFrontEn: "Change management",
    flashcardBackFr: "Adoption, sponsors métier, métriques — au-delà du go-live.",
    flashcardBackEn: "Adoption, business sponsors, metrics — beyond go-live.",
    exercisePromptFr:
      "Helios ERP : go-live OK, adoption 40 %. Trois actions change pour les 90 prochains jours ?",
    exercisePromptEn:
      "Helios ERP: go-live OK, 40% adoption. Three change actions for next 90 days?",
    situation: {
      scenarioFr:
        "Helios ERP Nordia : go-live sans incident. À T+90, 40 % magasins sur Excel parallèle. Sponsor Contineo menace de gel phase 2.",
      scenarioEn:
        "Helios ERP Nordia: incident-free go-live. At T+90, 40% stores on parallel Excel. Contineo sponsor threatens to freeze phase 2.",
      problemFr:
        "Adoption insuffisante — pas de sponsors régionaux ni KPI usage actifs.",
      problemEn:
        "Insufficient adoption — no active regional sponsors or usage KPIs.",
      bestActionFr:
        "Activer sponsors régionaux, KPI adoption / magasin hebdo, plan retrait Excel avec formation ciblée — coordonner change lead.",
      bestActionEn:
        "Activate regional sponsors, weekly adoption KPI / store, Excel retirement plan with targeted training — coordinate change lead.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Helios ERP go-live réussi, adoption magasins Nordia à 40 % à T+90. Que devrait prioriser le chef de projet ?",
      promptEn:
        "Helios ERP successful go-live, Nordia store adoption at 40% at T+90. What should the project manager prioritize?",
      explanationCorrectFr:
        "Sponsors régionaux + KPI adoption + retrait Excel — changement org, pas plus de dev.",
      explanationCorrectEn:
        "Regional sponsors + adoption KPI + Excel retirement — org change, not more dev.",
      difficulty: 2,
      options: [
        opt(
          "Sponsors régionaux, KPI adoption / magasin et plan retrait Excel",
          "Regional sponsors, adoption KPI / store, and Excel retirement plan",
          true
        ),
        opt(
          "Ajouter 10 développeurs ERP",
          "Add 10 ERP developers",
          false,
          "Le go-live technique est OK — le problème est adoption.",
          "Technical go-live is OK — problem is adoption."
        ),
        opt(
          "Clôturer immédiatement le projet PM",
          "Close PM project immediately",
          false,
          "Adoption non stabilisée — bénéfices non réalisés.",
          "Adoption not stabilized — benefits unrealized."
        ),
        opt(
          "Envoyer une FAQ par e-mail",
          "Send FAQ by email",
          false,
          "Communication seule sans sponsors ni métriques.",
          "Communication alone without sponsors or metrics."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Le sponsor Contineo confond « ERP live » et « changement réussi ». Quel argument le PM devrait-il clarifier en premier ?",
        promptEn:
          "Contineo sponsor confuses “ERP live” and “successful change.” Which argument should the PM clarify first?",
        explanationCorrectFr:
          "Go-live = output technique ; changement réussi = adoption mesurable et comportements.",
        explanationCorrectEn:
          "Go-live = technical output; successful change = measurable adoption and behaviors.",
        difficulty: 2,
        options: [
          opt(
            "Adoption mesurable vs simple mise en production",
            "Measurable adoption vs simple production rollout",
            true
          ),
          opt(
            "Nombre de lignes de code livrées",
            "Number of lines of code delivered",
            false,
            "Output technique, pas changement org.",
            "Technical output, not org change."
          ),
          opt(
            "Vélocité sprint de l'équipe IT",
            "IT team sprint velocity",
            false,
            "Agile IT ≠ adoption magasins.",
            "Agile IT ≠ store adoption."
          ),
        ],
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
    moduleSlug: "agile",
    sortOrder: 1,
    estimatedMinutes: 9,
    difficulty: "BEGINNER",
    skillSlug: "pmp-agile",
    learningObjective: "APPLY",
    objectiveFr:
      "Appliquer le découpage itératif FlowMart : premier incrément testable sur 10 % trafic, pas maquette.",
    objectiveEn:
      "Apply FlowMart iterative slicing: first testable increment on 10% traffic, not mockup.",
    explanationFr:
      "FlowMart e-commerce veut refondre le checkout. Livraison itérative = timebox fixe + incrément fonctionnel + feedback — pas phase de dev silencieuse six mois. Itération 1 (18 jours) : parcours invité → panier → paiement CB sur 10 % trafic — mesurable dès J+2 (conversion, abandon). Itération 2 : adresses enregistrées + codes promo, informée par feedback itération 1 (34 % abandon au paiement). Couper le périmètre avant de couper qualité ou date. Une « itération » sans livraison ni feedback utilisateur n'est qu'un sprint interne — anti-pattern fréquent chez les équipes passant du prédictif à l'agile.",
    explanationEn:
      "FlowMart e-commerce wants checkout redesign. Iterative delivery = fixed timebox + functional increment + feedback — not six months silent dev. Iteration 1 (18 days): guest → cart → card payment on 10% traffic — measurable from day 2 (conversion, drop-off). Iteration 2: saved addresses + promo codes, informed by iteration 1 feedback (34% drop at payment). Cut scope before cutting quality or date. An “iteration” with no shipment or user feedback is only an internal sprint — frequent anti-pattern for teams moving from predictive to agile.",
    exampleFr:
      "FlowMart itération 1 : 12 stories, incrément déployé 10 % trafic — conversion mesurée J+2. Itération 2 cible abandon paiement.",
    exampleEn:
      "FlowMart iteration 1: 12 stories, increment deployed 10% traffic — conversion measured day 2. Iteration 2 targets payment drop-off.",
    practicalFr:
      "Définissez l'incrément minimal de la première itération (2 semaines) et un indicateur de succès.",
    practicalEn:
      "Define the first iteration's minimal increment (2 weeks) and one success metric.",
    mistakeFr:
      "Appeler itération une phase sans livraison — ou viser 40 features en itération 1.",
    mistakeEn:
      "Calling a phase without shipment an iteration — or targeting 40 features in iteration 1.",
    takeawayFr:
      "Itération = timebox + incrément fonctionnel + feedback mesurable.",
    takeawayEn:
      "Iteration = timebox + functional increment + measurable feedback.",
    decisionFr:
      "Couper le périmètre avant la qualité ou la date — livrer tôt réduit coût du changement.",
    decisionEn:
      "Cut scope before quality or date — shipping early reduces change cost.",
    flashcardFrontFr: "Incrément FlowMart",
    flashcardFrontEn: "FlowMart increment",
    flashcardBackFr: "Version fonctionnelle déployée — pas maquette Figma.",
    flashcardBackEn: "Deployed functional version — not Figma mockup.",
    exercisePromptFr:
      "FlowMart veut 40 features en itération 1. Proposez un incrément réaliste et justifiez-le.",
    exercisePromptEn:
      "FlowMart wants 40 features in iteration 1. Propose a realistic increment and justify it.",
    situation: {
      scenarioFr:
        "FlowMart : le PO veut livrer tout le checkout refondu en itération 1 (40 stories). L'équipe estime 120 points pour 55 de capacité.",
      scenarioEn:
        "FlowMart: PO wants entire redesigned checkout in iteration 1 (40 stories). Team estimates 120 points for 55 capacity.",
      problemFr:
        "Périmètre itération 1 irréaliste — pas d'incrément testable découpé.",
      problemEn:
        "Unrealistic iteration 1 scope — no sliced testable increment.",
      bestActionFr:
        "Proposer incrément minimal invité→panier→paiement CB sur 10 % trafic avec indicateur conversion — reporter le reste itération 2.",
      bestActionEn:
        "Propose minimal guest→cart→card increment on 10% traffic with conversion metric — defer rest to iteration 2.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "FlowMart : PO exige 40 features en itération 1, capacité 55 points, estimation 120. Que devrait faire le chef de projet / PO en premier ?",
      promptEn:
        "FlowMart: PO demands 40 features in iteration 1, capacity 55 points, estimate 120. What should PM / PO do first?",
      explanationCorrectFr:
        "Découper un incrément minimal testable — couper périmètre, pas qualité ni date.",
      explanationCorrectEn:
        "Slice a minimal testable increment — cut scope, not quality or date.",
      difficulty: 2,
      options: [
        opt(
          "Découper incrément minimal (invité→panier→paiement) sur 10 % trafic",
          "Slice minimal increment (guest→cart→payment) on 10% traffic",
          true
        ),
        opt(
          "Compresser les tests pour tout livrer",
          "Compress testing to deliver everything",
          false,
          "Couper qualité avant périmètre — anti-pattern.",
          "Cut quality before scope — anti-pattern."
        ),
        opt(
          "Reporter la date sans couper le scope",
          "Defer date without cutting scope",
          false,
          "Timebox fixe — scope s'ajuste.",
          "Fixed timebox — scope adjusts."
        ),
        opt(
          "Livrer une maquette Figma comme incrément",
          "Ship Figma mockup as increment",
          false,
          "Pas fonctionnel ni mesurable.",
          "Not functional or measurable."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "FlowMart itération 1 montre 34 % abandon au paiement. Quelle décision pour itération 2 ?",
        promptEn:
          "FlowMart iteration 1 shows 34% drop at payment. What decision for iteration 2?",
        explanationCorrectFr:
          "Prioriser stories réduisant abandon paiement — feedback guide itération 2.",
        explanationCorrectEn:
          "Prioritize stories reducing payment drop-off — feedback guides iteration 2.",
        difficulty: 2,
        options: [
          opt(
            "Prioriser pré-remplissage adresse, retry CB, messages d'erreur",
            "Prioritize address prefill, card retry, error messages",
            true
          ),
          opt(
            "Ignorer le feedback et livrer le programme fidélité",
            "Ignore feedback and ship loyalty program",
            false,
          "Feedback early est l'avantage itératif.",
            "Early feedback is the iterative advantage."
          ),
          opt(
            "Arrêter les itérations et passer en waterfall",
            "Stop iterations and switch to waterfall",
            false,
            "Le feedback valide l'approche itérative.",
            "Feedback validates iterative approach."
          ),
        ],
      }),
    ],
  }),

  buildPmpLesson({
    slug: "iteration-planning",
    titleFr: "Planification d'itération",
    titleEn: "Iteration Planning",
    descriptionFr:
      "Engager l'équipe sur un objectif d'itération réaliste à partir du backlog prêt.",
    descriptionEn:
      "Commit the team to a realistic iteration goal from ready backlog items.",
    moduleSlug: "agile",
    sortOrder: 5,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-agile",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider le goal, la capacité et le scope de l'itération FlowMart sprint 4 quand demandes dépassent vélocité.",
    objectiveEn:
      "Decide goal, capacity, and iteration scope for FlowMart sprint 4 when requests exceed velocity.",
    explanationFr:
      "Planification d'itération FlowMart sprint 4 : objectif mesurable « réduire abandon paiement 34 % → 25 % » — pas liste de 15 tickets sans fil. Étapes : rappeler vélocité (~55 pts), capacité (60 pts max), sélectionner stories ready liées au goal, garder buffer (52 pts pris, 1 story buffer). Demandes 70 pts : couper ou reporter — jamais compresser qualité en silence. Le planning fixe goal et périmètre ; l'équipe s'auto-organise au daily. Anti-pattern : planifier 100 % capacité — tout imprévu = échec sprint.",
    explanationEn:
      "FlowMart sprint 4 iteration planning: measurable goal “reduce payment abandonment 34% → 25%” — not a list of 15 unrelated tickets. Steps: recall velocity (~55 pts), capacity (60 pts max), select ready stories tied to goal, keep buffer (52 pts taken, 1 buffer story). Requests 70 pts: cut or defer — never silently compress quality. Planning sets goal and scope; team self-organizes in daily. Anti-pattern: plan 100% capacity — every surprise = sprint failure.",
    exampleFr:
      "FlowMart sprint 4 : goal abandon paiement + 3 stories liées, 52/60 pts, buffer 1 story — pas 15 stories dispersées.",
    exampleEn:
      "FlowMart sprint 4: payment drop goal + 3 linked stories, 52/60 pts, 1 buffer story — not 15 scattered stories.",
    practicalFr:
      "Rédigez un iteration goal en une phrase avec indicateur pour votre prochain cycle.",
    practicalEn:
      "Write a one-sentence iteration goal with indicator for your next cycle.",
    mistakeFr:
      "Planifier 100 % capacité sans marge — ou goal = « finir le backlog ».",
    mistakeEn:
      "Planning 100% capacity with no margin — or goal = “finish backlog.”",
    takeawayFr:
      "Planning = goal mesurable + capacité + stories ready — engagement réaliste.",
    takeawayEn:
      "Planning = measurable goal + capacity + ready stories — realistic commitment.",
    decisionFr:
      "Si backlog > capacité : couper scope ou repousser — jamais qualité en silence.",
    decisionEn:
      "If backlog > capacity: cut scope or defer — never silent quality cut.",
    flashcardFrontFr: "Iteration goal",
    flashcardFrontEn: "Iteration goal",
    flashcardBackFr: "Objectif cohérent mesurable — pas pile de tickets.",
    flashcardBackEn: "Coherent measurable objective — not ticket pile.",
    exercisePromptFr:
      "Capacité 50 pts, demandes 70 pts FlowMart. Listez processus de coupe (critères + ordre).",
    exercisePromptEn:
      "Capacity 50 pts, requests 70 pts FlowMart. List cut process (criteria + order).",
    situation: {
      scenarioFr:
        "FlowMart sprint 4 planning : 70 pts demandés, capacité 55, vélocité moyenne 55. Directeur veut thème sombre + fix paiement + promo Noël — tous « Must ».",
      scenarioEn:
        "FlowMart sprint 4 planning: 70 pts requested, capacity 55, average velocity 55. Director wants dark theme + payment fix + Christmas promo — all “Must.”",
      problemFr:
        "Trop de Must — pas de goal cohérent ni marge buffer.",
      problemEn:
        "Too many Must items — no coherent goal or buffer margin.",
      bestActionFr:
        "Fixer goal « abandon paiement 34→25 % », sélectionner stories liées (~52 pts), reporter thème sombre et négocier promo — garder buffer.",
      bestActionEn:
        "Set goal “payment drop 34→25%,” select linked stories (~52 pts), defer dark theme and negotiate promo — keep buffer.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "FlowMart sprint 4 : 70 pts demandés, capacité 55. Que devrait faire le PO en premier ?",
      promptEn:
        "FlowMart sprint 4: 70 pts requested, capacity 55. What should the PO do first?",
      explanationCorrectFr:
        "Définir goal mesurable et couper scope — capacité fixe, périmètre s'ajuste.",
      explanationCorrectEn:
        "Define measurable goal and cut scope — fixed capacity, scope adjusts.",
      difficulty: 2,
      options: [
        opt(
          "Fixer goal abandon paiement et sélectionner stories liées (~52 pts + buffer)",
          "Set payment drop goal and select linked stories (~52 pts + buffer)",
          true
        ),
        opt(
          "Accepter les 70 pts et compresser les tests",
          "Accept 70 pts and compress testing",
          false,
          "Couper qualité = dette et échec sprint.",
          "Cut quality = debt and sprint failure."
        ),
        opt(
          "Augmenter capacité en ajoutant des heures sup",
          "Raise capacity by adding overtime",
          false,
          "Masque problème de priorisation — non durable.",
          "Masks prioritization problem — not sustainable."
        ),
        opt(
          "Planifier sans iteration goal",
          "Plan without iteration goal",
          false,
          "Goal distingue bon planning d'une liste tickets.",
          "Goal distinguishes good planning from ticket list."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Quel élément distingue le goal FlowMart sprint 4 « abandon 34→25 % » d'une mauvaise planification ?",
        promptEn:
          "What distinguishes FlowMart sprint 4 goal “drop 34→25%” from bad planning?",
        explanationCorrectFr:
          "Objectif cohérent avec indicateur — stories sélectionnées pour ce goal.",
        explanationCorrectEn:
          "Coherent objective with indicator — stories selected for this goal.",
        difficulty: 2,
        options: [
          opt(
            "Goal mesurable liant les stories sélectionnées",
            "Measurable goal linking selected stories",
            true
          ),
          opt(
            "Maximum de stories possibles",
            "Maximum possible stories",
            false,
            "Volume ≠ goal cohérent.",
            "Volume ≠ coherent goal."
          ),
          opt(
            "Reprise de tout le backlog",
            "Take entire backlog",
            false,
            "Dépasse capacité et dilue focus.",
            "Exceeds capacity and dilutes focus."
          ),
        ],
      }),
    ],
  }),

  buildPmpLesson({
    slug: "retrospective",
    titleFr: "Rétrospective",
    titleEn: "Retrospective",
    descriptionFr:
      "Améliorer processus et collaboration avec des actions concrètes et suivies.",
    descriptionEn:
      "Improve process and collaboration with concrete, tracked actions.",
    moduleSlug: "agile",
    sortOrder: 9,
    estimatedMinutes: 8,
    difficulty: "BEGINNER",
    skillSlug: "pmp-agile",
    learningObjective: "APPLY",
    objectiveFr:
      "Appliquer une rétrospective FlowMart produisant 1–2 actions SMART assignées et revues au sprint suivant.",
    objectiveEn:
      "Apply a FlowMart retrospective producing 1–2 assigned SMART actions reviewed next sprint.",
    explanationFr:
      "La rétrospective FlowMart sprint 5 inspecte comment l'équipe a travaillé — pas le produit seul. Format Start/Stop/Continue : Stop PR sans relecture ; Start pair review obligatoire ; Continue daily 9h30. Actions SMART : (1) template checklist PR — owner Dev A, due mi-sprint 6 ; (2) rappel daily Slack — owner Scrum Master. Ouvrir la retro suivante par statut actions — fait ou pas fait. Sans suivi, rituel vide — mêmes problèmes sprint 7. Espace sécurisé : critiquer processus, pas personnes. Sponsor n'impose pas ses solutions.",
    explanationEn:
      "FlowMart sprint 5 retrospective inspects how the team worked — not product alone. Start/Stop/Continue format: Stop PRs without review; Start mandatory pair review; Continue daily 9:30. SMART actions: (1) PR checklist template — owner Dev A, due sprint 6 mid; (2) daily Slack reminder — owner Scrum Master. Open next retro with action status — done or not done. Without follow-up, empty ritual — same problems sprint 7. Safe space: critique process, not people. Sponsor does not impose solutions.",
    exampleFr:
      "FlowMart sprint 4 action « limiter WIP 8→5 » : cycle time −20 %. Sprint 5 retro ouvre par statut de cette action.",
    exampleEn:
      "FlowMart sprint 4 action “limit WIP 8→5”: cycle time −20%. Sprint 5 retro opens with that action's status.",
    practicalFr:
      "Proposez 2 actions Start/Stop/Continue pour une équipe que vous connaissez.",
    practicalEn:
      "Propose 2 Start/Stop/Continue actions for a team you know.",
    mistakeFr:
      "Retro sans owner ni date — ou sauter la retro « faute de temps ».",
    mistakeEn:
      "Retro without owner or date — or skipping retro “for lack of time.”",
    takeawayFr:
      "Rétrospective = actions petites, assignées, revues au sprint suivant.",
    takeawayEn:
      "Retrospective = small, assigned actions reviewed next sprint.",
    decisionFr:
      "Ouvrir chaque retro par le statut des actions précédentes — adapter ou abandonner explicitement.",
    decisionEn:
      "Open each retro with prior action status — adapt or explicitly drop.",
    flashcardFrontFr: "Rétrospective",
    flashcardFrontEn: "Retrospective",
    flashcardBackFr: "Améliorer processus — actions SMART assignées et suivies.",
    flashcardBackEn: "Improve process — assigned, tracked SMART actions.",
    exercisePromptFr:
      "Rédigez une action SMART (pair review) issue d'une retro FlowMart.",
    exercisePromptEn:
      "Write a SMART action (pair review) from a FlowMart retro.",
    situation: {
      scenarioFr:
        "FlowMart sprint 5 retro : action « pair review obligatoire » notée sans owner ni date. Sprint 6 : mêmes PR sans relecture, bug prod.",
      scenarioEn:
        "FlowMart sprint 5 retro: “mandatory pair review” noted with no owner or date. Sprint 6: same unreviewed PRs, prod bug.",
      problemFr:
        "Action non SMART — pas de suivi ni responsable.",
      problemEn:
        "Non-SMART action — no follow-up or owner.",
      bestActionFr:
        "Assigner owner Dev A, date mi-sprint 6, template checklist PR — ouvrir sprint 7 retro par statut.",
      bestActionEn:
        "Assign owner Dev A, sprint 6 mid date, PR checklist template — open sprint 7 retro with status.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "FlowMart retro : action « pair review obligatoire » sans owner ni date. Que devrait faire le facilitateur en premier ?",
      promptEn:
        "FlowMart retro: “mandatory pair review” action with no owner or date. What should facilitator do first?",
      explanationCorrectFr:
        "Assigner owner et échéance SMART — sinon l'action ne changera rien.",
      explanationCorrectEn:
        "Assign owner and SMART deadline — otherwise action changes nothing.",
      difficulty: 2,
      options: [
        opt(
          "Assigner owner Dev A et échéance mi-sprint 6 avec checklist",
          "Assign owner Dev A and sprint 6 mid deadline with checklist",
          true
        ),
        opt(
          "Considérer l'intention suffisante",
          "Consider intent sufficient",
          false,
          "Bonnes intentions sans suivi ne changent pas les habitudes.",
          "Good intentions without follow-up do not change habits."
        ),
        opt(
          "Reporter au prochain trimestre",
          "Defer to next quarter",
          false,
          "Reproduit le problème au sprint suivant.",
          "Repeats problem next sprint."
        ),
        opt(
          "Demander au sponsor d'imposer la solution",
          "Ask sponsor to impose solution",
          false,
          "Retro = espace équipe, pas command-and-control.",
          "Retro = team space, not command-and-control."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "FlowMart sprint 6 retro démarre. Quelle ouverture renforce le mieux l'amélioration continue ?",
        promptEn:
          "FlowMart sprint 6 retro starts. Which opening best reinforces continuous improvement?",
        explanationCorrectFr:
          "Revoir statut actions sprint 5 — fait ou pas fait — avant nouveaux sujets.",
        explanationCorrectEn:
          "Review sprint 5 action status — done or not — before new topics.",
        difficulty: 2,
        options: [
          opt(
            "Statut des actions du sprint précédent",
            "Status of prior sprint actions",
            true
          ),
          opt(
            "Blâmer l'auteur du bug prod",
            "Blame prod bug author",
            false,
          "Retro critique processus, pas personnes.",
            "Retro critiques process, not people."
          ),
          opt(
            "Présentation slides du sponsor",
            "Sponsor slide presentation",
            false,
            "Hors espace d'amélioration équipe.",
            "Outside team improvement space."
          ),
        ],
      }),
    ],
  }),

  buildPmpLesson({
    slug: "mixed-delivery-models",
    titleFr: "Modèles de livraison mixtes",
    titleEn: "Mixed Delivery Models",
    descriptionFr:
      "Orchestrer releases programme, trains agiles et livraisons ponctuelles prédictives.",
    descriptionEn:
      "Orchestrate program releases, agile trains, and predictive one-off deliveries.",
    moduleSlug: "hybrid",
    sortOrder: 4,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "hybrid-delivery",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider quel workstream Helios reçoit quel modèle de livraison (prédictif, agile, hotfix) selon incertitude et régulation.",
    objectiveEn:
      "Decide which delivery model each Helios workstream gets (predictive, agile, hotfix) based on uncertainty and regulation.",
    explanationFr:
      "Différent de « combiner prédictif et agile » (interfaces entre streams), les modèles mixtes répondent à : quel flux reçoit quel modèle ? Helios : infra PCI = prédictif phase-gate (Q2, contraintes réglementaires, faible incertitude technique) ; portail API = release train agile bi-hebdo (forte incertitude UX) ; patch sécurité infra = hotfix ponctuel (interrompt train portail 48 h, comité changement allégé). Erreur : appliquer agile au contrat fournisseur serveurs ou Gantt 12 mois au portail. Le PM publie calendrier unifié : gates, trains, freeze windows. Point d'intégration versionné (tag infra + manifest API) synchronise les modèles.",
    explanationEn:
      "Different from “combining predictive and agile” (interfaces between streams), mixed delivery models answer: which flow gets which model? Helios: PCI infra = predictive phase-gate (Q2, regulatory constraints, low technical uncertainty); API portal = biweekly agile release train (high UX uncertainty); infra security patch = one-off hotfix (pauses portal train 48 h, lightweight change committee). Mistake: applying agile to server vendor contract or 12-month Gantt to portal. PM publishes unified calendar: gates, trains, freeze windows. Versioned integration point (infra tag + API manifest) synchronizes models.",
    exampleFr:
      "Helios : infra gate PCI 15 juin (prédictif) ; portail trains 1er/15 (agile) ; freeze −5 jours gate ; hotfix sécurité = exception documentée.",
    exampleEn:
      "Helios: PCI gate June 15 (predictive); portal trains 1st/15th (agile); freeze −5 days before gate; security hotfix = documented exception.",
    practicalFr:
      "Listez vos types de livraison (gate, sprint release, hotfix) et assignez un modèle par workstream.",
    practicalEn:
      "List your delivery types (gate, sprint release, hotfix) and assign one model per workstream.",
    mistakeFr:
      "Choisir le même modèle pour infra PCI et portail UX — ou cacher releases portail au comité programme.",
    mistakeEn:
      "Choosing same model for PCI infra and portal UX — or hiding portal releases from program committee.",
    takeawayFr:
      "Modèle par workstream selon incertitude/régulation — calendrier unifié visible.",
    takeawayEn:
      "Model per workstream by uncertainty/regulation — visible unified calendar.",
    decisionFr:
      "Pour chaque workstream Helios : prédictif, agile ou hotfix ? Documenter pourquoi en une ligne.",
    decisionEn:
      "For each Helios workstream: predictive, agile, or hotfix? Document why in one line.",
    flashcardFrontFr: "Modèle par workstream",
    flashcardFrontEn: "Model per workstream",
    flashcardBackFr: "PCI prédictif ; portail agile ; hotfix ponctuel — pas one-size-fits-all.",
    flashcardBackEn: "PCI predictive; portal agile; one-off hotfix — not one-size-fits-all.",
    exercisePromptFr:
      "Helios : classez infra PCI, portail API et patch sécurité en prédictif/agile/hotfix. Justifiez.",
    exercisePromptEn:
      "Helios: classify PCI infra, API portal, and security patch as predictive/agile/hotfix. Justify.",
    situation: {
      scenarioFr:
        "Helios kick-off : le sponsor veut « 100 % agile partout » y compris contrat fournisseur serveurs PCI et portail. Le CISO exige gate Q2 infra.",
      scenarioEn:
        "Helios kickoff: sponsor wants “100% agile everywhere” including PCI server vendor contract and portal. CISO demands Q2 infra gate.",
      problemFr:
        "Modèle unique inadapté — incertitude et régulation différentes par workstream.",
      problemEn:
        "Unfit single model — uncertainty and regulation differ per workstream.",
      bestActionFr:
        "Cartographier workstreams et assigner modèle par critère (régulation, incertitude) — publier calendrier unifié gates + trains.",
      bestActionEn:
        "Map workstreams and assign model by criterion (regulation, uncertainty) — publish unified gates + trains calendar.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Helios : sponsor exige 100 % agile sur infra PCI et portail. Que devrait proposer le chef de projet en premier ?",
      promptEn:
        "Helios: sponsor demands 100% agile on PCI infra and portal. What should the project manager propose first?",
      explanationCorrectFr:
        "Modèle par workstream : PCI prédictif (régulation), portail agile (incertitude UX) — pas dogme uniforme.",
      explanationCorrectEn:
        "Model per workstream: PCI predictive (regulation), portal agile (UX uncertainty) — not uniform dogma.",
      difficulty: 2,
      options: [
        opt(
          "Cartographier workstreams : infra PCI prédictif, portail agile, calendrier unifié",
          "Map workstreams: PCI infra predictive, portal agile, unified calendar",
          true
        ),
        opt(
          "Accepter 100 % agile y compris contrat fournisseur PCI",
          "Accept 100% agile including PCI vendor contract",
          false,
          "Contrat réglementé ≠ incertitude exploratoire agile.",
          "Regulated contract ≠ exploratory agile uncertainty."
        ),
        opt(
          "100 % waterfall sur tout le programme",
          "100% waterfall on entire program",
          false,
          "Ignore valeur agile du portail.",
          "Ignores portal agile value."
        ),
        opt(
          "Laisser chaque équipe choisir sans cadre",
          "Let each team choose without framework",
          false,
          "Double gouvernance et surprises au gate.",
          "Double governance and gate surprises."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Patch sécurité infra Helios doit interrompre le train portail 48 h. Quel modèle de livraison applique-t-on ?",
        promptEn:
          "Helios infra security patch must pause portal train 48 h. Which delivery model applies?",
        explanationCorrectFr:
          "Hotfix ponctuel prédictif — exception documentée au calendrier unifié.",
        explanationCorrectEn:
          "One-off predictive hotfix — documented exception on unified calendar.",
        difficulty: 2,
        options: [
          opt(
            "Hotfix ponctuel avec communication comité changement",
            "One-off hotfix with change committee communication",
            true
          ),
          opt(
            "Release train agile standard",
            "Standard agile release train",
            false,
            "Patch sécurité infra ≠ cadence train portail.",
            "Infra security patch ≠ portal train cadence."
          ),
          opt(
            "Ignorer et attendre prochain gate Q2",
            "Ignore and wait for next Q2 gate",
            false,
            "Risque sécurité non compatible avec attente gate.",
            "Security risk incompatible with waiting for gate."
          ),
        ],
      }),
    ],
  }),

  buildPmpLesson({
    slug: "stakeholder-management-hybrid",
    titleFr: "Parties prenantes en hybride",
    titleEn: "Hybrid Stakeholder Management",
    descriptionFr:
      "Adapter communication et engagement : jalons programme vs feedback sprint.",
    descriptionEn:
      "Adapt communication and engagement: program milestones vs sprint feedback.",
    moduleSlug: "hybrid",
    sortOrder: 7,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "hybrid-delivery",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider l'alignement entre comité stage-gate Helios et attentes du Product Owner portail sur rythme et messages.",
    objectiveEn:
      "Decide alignment between Helios stage-gate committee and portal Product Owner expectations on rhythm and messages.",
    explanationFr:
      "Stakeholders hybrides Helios ont des attentes opposées. Comité stage-gate (CISO, audit, sponsor Contineo) : preuves conformité PCI, dates gate, registre risques — communication formelle mensuelle, pas vélocité sprint. PO portail : replanification agile, sprint reviews bi-hebdo, changelog développeurs API. Erreur : inviter CISO à chaque sprint review ou envoyer vélocité au comité gate. Le PM orchestre : mapping pouvoir/intérêt, canal par persona, messages adaptés (risque/compliance vs valeur/feature). Conflit classique : comité exige date gate immuable, PO promet feature mid-sprint — PM aligne attentes via matrice et cadence différenciée, pas newsletter unique.",
    explanationEn:
      "Helios hybrid stakeholders have opposing expectations. Stage-gate committee (CISO, audit, Contineo sponsor): PCI compliance evidence, gate dates, risk register — formal monthly communication, not sprint velocity. Portal PO: agile replanning, biweekly sprint reviews, API developer changelog. Mistake: inviting CISO to every sprint review or sending velocity to gate committee. PM orchestrates: power/interest mapping, channel per persona, adapted messages (risk/compliance vs value/feature). Classic conflict: committee demands immutable gate date, PO promises mid-sprint feature — PM aligns expectations via matrix and differentiated cadence, not one newsletter.",
    exampleFr:
      "Helios : CISO → dashboard conformité mensuel gate ; devs API → review bi-hebdo + changelog ; PO ↔ PM sync avant comité — pas override sprint direct.",
    exampleEn:
      "Helios: CISO → monthly gate compliance dashboard; API devs → biweekly review + changelog; PO ↔ PM sync before committee — no direct sprint override.",
    practicalFr:
      "Identifiez 2 stakeholders hybrides : message et fréquence adaptés pour chacun.",
    practicalEn:
      "Identify 2 hybrid stakeholders: adapted message and frequency for each.",
    mistakeFr:
      "Même communication pour CISO et développeurs API — ou laisser PO seul face au comité PCI.",
    mistakeEn:
      "Same communication for CISO and API developers — or leaving PO alone before PCI committee.",
    takeawayFr:
      "Stakeholders hybrides = messages et rituels différenciés, orchestrés par le PM.",
    takeawayEn:
      "Hybrid stakeholders = differentiated messages and rituals, orchestrated by PM.",
    decisionFr:
      "Avant com ou review : quel stakeholder, quel besoin, quel format — aligner PO et comité gate explicitement.",
    decisionEn:
      "Before comm or review: which stakeholder, which need, which format — explicitly align PO and gate committee.",
    flashcardFrontFr: "Engagement hybride",
    flashcardFrontEn: "Hybrid engagement",
    flashcardBackFr: "Gate formel (infra) + feedback rapide (portail) — pas même canal.",
    flashcardBackEn: "Formal gate (infra) + fast feedback (portal) — not same channel.",
    exercisePromptFr:
      "CISO demande réunion hebdo sur portail agile. Que proposez-vous à la place ?",
    exercisePromptEn:
      "CISO wants weekly meeting on agile portal. What do you propose instead?",
    situation: {
      scenarioFr:
        "Helios : comité stage-gate exige date PCI Q2 immuable. PO portail promet aux devs API une feature sandbox sprint 3 non validée infra. Tension en réunion conjointe.",
      scenarioEn:
        "Helios: stage-gate committee demands immutable Q2 PCI date. Portal PO promises API devs sandbox feature sprint 3 not infra-validated. Tension in joint meeting.",
      problemFr:
        "Attentes non alignées comité gate vs PO — pas de cadence ni message différencié.",
      problemEn:
        "Unaligned gate committee vs PO expectations — no differentiated cadence or message.",
      bestActionFr:
        "PM facilite sync PO + comité : dashboard conformité mensuel pour CISO, sprint review pour devs, escalade feature via backlog pas override gate.",
      bestActionEn:
        "PM facilitates PO + committee sync: monthly compliance dashboard for CISO, sprint review for devs, feature escalation via backlog not gate override.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Helios : comité stage-gate et PO portail en conflit sur date sandbox sprint 3 vs gate PCI Q2. Que devrait faire le chef de projet en premier ?",
      promptEn:
        "Helios: stage-gate committee and portal PO conflict on sandbox sprint 3 date vs Q2 PCI gate. What should the project manager do first?",
      explanationCorrectFr:
        "Aligner attentes via cadences différenciées et sync PO-comité — pas même rituel pour tous.",
      explanationCorrectEn:
        "Align expectations via differentiated cadences and PO-committee sync — not same ritual for all.",
      difficulty: 2,
      options: [
        opt(
          "Faciliter alignement PO/comité : messages et cadences différenciés + contrat inter-stream",
          "Facilitate PO/committee alignment: differentiated messages/cadences + inter-stream contract",
          true
        ),
        opt(
          "Inviter le CISO à chaque daily portail",
          "Invite CISO to every portal daily",
          false,
          "Micro-gouvernance et bruit — mauvais canal.",
          "Micro-governance and noise — wrong channel."
        ),
        opt(
          "Laisser le PO promettre seul aux devs API",
          "Let PO promise alone to API devs",
          false,
          "Aggrave écart gate vs agile sans orchestration PM.",
          "Worsens gate vs agile gap without PM orchestration."
        ),
        opt(
          "Envoyer la vélocité sprint au comité gate",
          "Send sprint velocity to gate committee",
          false,
          "CISO ignore vélocité — veut conformité et dates gate.",
          "CISO ignores velocity — wants compliance and gate dates."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "CISO Helios demande une réunion hebdo sur le portail agile. Quelle alternative le PM devrait-il proposer ?",
        promptEn:
          "Helios CISO wants weekly meeting on agile portal. Which alternative should the PM propose?",
        explanationCorrectFr:
          "Dashboard conformité mensuel + point gate — pas sprint review hebdo.",
        explanationCorrectEn:
          "Monthly compliance dashboard + gate checkpoint — not weekly sprint review.",
        difficulty: 2,
        options: [
          opt(
            "Dashboard conformité mensuel et sync gate programmé",
            "Monthly compliance dashboard and scheduled gate sync",
            true
          ),
          opt(
            "Inviter CISO à toutes les sprint reviews",
            "Invite CISO to all sprint reviews",
            false,
            "Bruit et fatigue — mauvais format pour CISO.",
            "Noise and fatigue — wrong format for CISO."
          ),
          opt(
            "Supprimer les sprint reviews portail",
            "Remove portal sprint reviews",
            false,
            "Prive les devs API de feedback — aggrave autre stakeholder.",
            "Deprives API devs of feedback — worsens other stakeholder."
          ),
        ],
      }),
    ],
  }),
];
