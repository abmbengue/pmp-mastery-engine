import { buildPmpLesson, opt, q } from "./pmp-factory";
import type { PmpLesson } from "./pmp-types";

const MOD = "situational-thinking";

export const PMP_SITUATIONAL_LESSONS: PmpLesson[] = [
  buildPmpLesson({
    slug: "pla-situational-method",
    titleFr: "Méthode situationnelle PLA",
    titleEn: "PLA Situational Method",
    descriptionFr:
      "Maîtriser la boucle OBSERVE → UNDERSTAND → IDENTIFY → COLLABORATE → ACT → VERIFY → ADAPT (méthode PLA, pas PMI officielle).",
    descriptionEn:
      "Master the OBSERVE → UNDERSTAND → IDENTIFY → COLLABORATE → ACT → VERIFY → ADAPT loop (PLA method, not official PMI).",
    moduleSlug: MOD,
    sortOrder: 0,
    estimatedMinutes: 12,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-situational-thinking",
    learningObjective: "APPLY",
    objectiveFr:
      "Appliquer la boucle PLA à une vignette d'examen avant de choisir la « meilleure première action ».",
    objectiveEn:
      "Apply the PLA loop to an exam vignette before choosing the 'best first action.'",
    explanationFr:
      "PLA enseigne une boucle propriétaire — pas une reproduction PMBOK® : OBSERVE (lire le mini-cas, repérer contraintes et parties prenantes) ; UNDERSTAND (reformuler le problème réel vs le bruit) ; IDENTIFY (options plausibles et critères : valeur, risque, relation) ; COLLABORATE (impliquer les bonnes personnes avant d'agir seul ou d'escalader) ; ACT (première action proportionnée) ; VERIFY (vérifier que l'action adresse la cause) ; ADAPT (ajuster si le contexte change). Sur l'examen, la bonne réponse est souvent celle qui observe et collabore avant d'agir brutalement ou d'escalader trop tôt.",
    explanationEn:
      "PLA teaches a proprietary loop — not PMBOK® reproduction: OBSERVE (read the mini-case, spot constraints and stakeholders); UNDERSTAND (reframe the real problem vs noise); IDENTIFY (plausible options and criteria: value, risk, relationship); COLLABORATE (involve the right people before acting alone or escalating); ACT (proportional first action); VERIFY (check the action addresses the cause); ADAPT (adjust if context shifts). On the exam, the right answer often observes and collaborates before acting bluntly or escalating too early.",
    exampleFr:
      "Vignette : PO hésite sur une demande urgente mid-sprint. OBSERVE : sprint goal engagé, démo dans 10 jours. UNDERSTAND : conflit valeur vs engagement, pas « refuser le commercial ». IDENTIFY : backlog, scope swap, replanification. COLLABORATE : PO + équipe. ACT : documenter et prioriser — pas insertion silencieuse. VERIFY : sprint goal intact ? ADAPT si le sponsor change la priorité portfolio.",
    exampleEn:
      "Vignette: PO hesitates on urgent mid-sprint request. OBSERVE: sprint goal committed, demo in 10 days. UNDERSTAND: value vs commitment conflict, not 'refuse sales.' IDENTIFY: backlog, scope swap, replanning. COLLABORATE: PO + team. ACT: document and prioritize — not silent insertion. VERIFY: sprint goal intact? ADAPT if sponsor shifts portfolio priority.",
    practicalFr:
      "Sur une question d'examen, parcourez mentalement O-U-I-C-A-V-A avant de cliquer une option.",
    practicalEn:
      "On an exam question, mentally walk O-U-I-C-A-V-A before clicking an option.",
    mistakeFr:
      "Sauter directement à ACT (réponse impulsive) ou escalader sans UNDERSTAND/COLLABORATE.",
    mistakeEn:
      "Jumping straight to ACT (impulsive answer) or escalating without UNDERSTAND/COLLABORATE.",
    takeawayFr:
      "PLA : observer et collaborer avant d'agir — méthode propriétaire, pas score PMI officiel.",
    takeawayEn:
      "PLA: observe and collaborate before acting — proprietary method, not official PMI score.",
    decisionFr:
      "En cas de doute entre deux options, choisir celle qui observe, comprend et collabore en premier.",
    decisionEn:
      "When torn between two options, pick the one that observes, understands, and collaborates first.",
    flashcardFrontFr: "Boucle PLA",
    flashcardFrontEn: "PLA loop",
    flashcardBackFr: "Observe → Understand → Identify → Collaborate → Act → Verify → Adapt.",
    flashcardBackEn: "Observe → Understand → Identify → Collaborate → Act → Verify → Adapt.",
    exercisePromptFr:
      "Appliquez O-U-I-C-A-V-A à une vignette scope creep de votre entraînement. Quelle étape sautez-vous le plus souvent ?",
    exercisePromptEn:
      "Apply O-U-I-C-A-V-A to a scope creep vignette from your practice. Which step do you skip most often?",
    situation: {
      scenarioFr:
        "Vous lisez une question d'examen : un directeur commercial exige une feature mid-sprint alors que l'équipe est engagée sur le sprint goal. Quatre options proposent d'agir immédiatement, d'escalader, ou de collaborer.",
      scenarioEn:
        "You read an exam question: a sales director demands a feature mid-sprint while the team is committed to the sprint goal. Four options suggest acting immediately, escalating, or collaborating.",
      bestActionFr:
        "Parcourir OBSERVE → UNDERSTAND → IDENTIFY → COLLABORATE avant de choisir ACT — méthode PLA propriétaire.",
      bestActionEn:
        "Walk OBSERVE → UNDERSTAND → IDENTIFY → COLLABORATE before choosing ACT — proprietary PLA method.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Quelle étape PLA précède typiquement la « meilleure première action » ?",
      promptEn: "Which PLA step typically precedes the 'best first action'?",
      explanationCorrectFr: "COLLABORATE — impliquer les bonnes parties avant d'agir seul.",
      explanationCorrectEn: "COLLABORATE — involve the right parties before acting alone.",
      difficulty: 2,
      options: [
        opt("ACT immédiatement", "ACT immediately", false, "ACT vient après observe, understand, identify, collaborate.", "ACT comes after observe, understand, identify, collaborate."),
        opt("COLLABORATE après avoir identifié les options", "COLLABORATE after identifying options", true),
        opt("ADAPT avant toute analyse", "ADAPT before any analysis", false, "ADAPT ferme la boucle après verify.", "ADAPT closes the loop after verify."),
      ],
    }),
    questions: [
      q({
        type: "TRUE_FALSE",
        promptFr: "La boucle PLA est une reproduction officielle du PMBOK® Guide.",
        promptEn: "The PLA loop is an official reproduction of the PMBOK® Guide.",
        explanationCorrectFr: "Faux. C'est une méthode pédagogique PLA originale.",
        explanationCorrectEn: "False. It is original PLA educational method.",
        difficulty: 1,
        options: [
          opt("Vrai", "True", false),
          opt("Faux", "False", true),
        ],
      }),
      q({
        type: "SINGLE_CHOICE",
        promptFr: "VERIFY sert surtout à…",
        promptEn: "VERIFY mainly serves to…",
        explanationCorrectFr: "Confirmer que l'action adresse la cause — pas seulement le symptôme.",
        explanationCorrectEn: "Confirm the action addresses the cause — not only the symptom.",
        difficulty: 2,
        options: [
          opt("Ignorer le feedback de l'équipe", "Ignore team feedback", false),
          opt("Confirmer que l'action traite la cause", "Confirm the action treats the cause", true),
          opt("Escalader systématiquement au sponsor", "Always escalate to the sponsor", false),
        ],
      }),
    ],
  }),

  buildPmpLesson({
    slug: "identify-before-acting",
    titleFr: "Identifier avant d'agir",
    titleEn: "Identify Before Acting",
    descriptionFr:
      "Nommer le vrai enjeu (valeur, risque, relation) avant la première action visible.",
    descriptionEn:
      "Name the real stake (value, risk, relationship) before the first visible action.",
    moduleSlug: MOD,
    sortOrder: 1,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-situational-thinking",
    learningObjective: "DECIDE",
    objectiveFr:
      "Reformuler un mini-cas en une phrase problème avant de choisir une action.",
    objectiveEn:
      "Reframe a mini-case in one problem sentence before choosing an action.",
    explanationFr:
      "Les questions situationnelles piègent ceux qui reconnaissent un mot-clé (« risque », « conflit ») et choisissent une action générique. IDENTIFY (étape PLA) force à nommer : s'agit-il d'un problème de valeur, de processus, de relation ou de contrainte ? La première action doit correspondre au type de problème — analyser l'impact avant de promettre une date, faciliter avant d'imposer, documenter avant d'exécuter un changement majeur.",
    explanationEn:
      "Situational questions trap those who recognize a keyword ('risk,' 'conflict') and pick a generic action. IDENTIFY (PLA step) forces naming: is this a value, process, relationship, or constraint problem? The first action must match the problem type — analyze impact before promising a date, facilitate before imposing, document before executing a major change.",
    exampleFr:
      "Le sponsor dit « trouve une solution » après retard fournisseur. IDENTIFY : problème de trade-off date/coût/périmètre — pas de motivation. Mauvaise action : promettre la date. Bonne : analyser options quantifiées.",
    exampleEn:
      "Sponsor says 'find a solution' after supplier delay. IDENTIFY: date/cost/scope trade-off problem — not motivation. Wrong action: promise the date. Right: analyze quantified options.",
    practicalFr:
      "Avant de répondre à une vignette, écrivez : « Le vrai problème est ___ » en 12 mots max.",
    practicalEn:
      "Before answering a vignette, write: 'The real problem is ___' in 12 words max.",
    mistakeFr:
      "Confondre urgence perçue et priorité d'action — répondre vite ≠ répondre bien.",
    mistakeEn:
      "Confusing perceived urgency and action priority — answering fast ≠ answering well.",
    takeawayFr:
      "Identifier le type de problème avant toute action visible.",
    takeawayEn:
      "Identify the problem type before any visible action.",
    decisionFr:
      "Reformuler le problème à voix haute (ou par écrit) — puis choisir l'option.",
    decisionEn:
      "Reframe the problem aloud (or in writing) — then choose the option.",
    flashcardFrontFr: "Identify (PLA)",
    flashcardFrontEn: "Identify (PLA)",
    flashcardBackFr: "Nommer valeur / risque / relation / contrainte avant d'agir.",
    flashcardBackEn: "Name value / risk / relationship / constraint before acting.",
    exercisePromptFr:
      "Vignette retard fournisseur : écrivez la phrase problème. Quelle action devient évidente ?",
    exercisePromptEn:
      "Supplier delay vignette: write the problem sentence. Which action becomes obvious?",
    situation: {
      scenarioFr:
        "Le sponsor vous interpelle dans le couloir : « Le client menace de résilier si on ne livre pas vendredi. » Vous n'avez pas encore vérifié l'état réel du backlog ni parlé à l'équipe.",
      scenarioEn:
        "The sponsor stops you in the hallway: 'The client threatens to cancel if we don't deliver Friday.' You have not yet checked actual backlog status or talked to the team.",
      problemFr: "Décision sous pression sans faits — risque de promesse impossible.",
      problemEn: "Decision under pressure without facts — risk of impossible promise.",
      bestActionFr:
        "OBSERVE/IDENTIFY : vérifier faits avec l'équipe et le PO, quantifier l'écart, puis proposer options au sponsor — ne pas promettre vendredi immédiatement.",
      bestActionEn:
        "OBSERVE/IDENTIFY: verify facts with team and PO, quantify gap, then propose options to sponsor — do not promise Friday immediately.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Meilleure première action face au sponsor dans le couloir ?",
      promptEn: "Best first action facing the sponsor in the hallway?",
      explanationCorrectFr: "Clarifier les faits et l'écart avant toute promesse de date.",
      explanationCorrectEn: "Clarify facts and gap before any date promise.",
      difficulty: 3,
      options: [
        opt("Promettre vendredi pour calmer le sponsor", "Promise Friday to calm the sponsor", false),
        opt("Vérifier faits avec l'équipe puis proposer options", "Verify facts with team then propose options", true),
        opt("Ignorer le sponsor jusqu'à la prochaine réunion", "Ignore the sponsor until the next meeting", false),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "root-cause-vs-symptom",
    titleFr: "Cause racine vs symptôme",
    titleEn: "Root Cause vs Symptom",
    descriptionFr:
      "Traiter la cause (processus, contrainte) — pas seulement le symptôme visible (retard, conflit).",
    descriptionEn:
      "Treat the cause (process, constraint) — not only the visible symptom (delay, conflict).",
    moduleSlug: MOD,
    sortOrder: 2,
    estimatedMinutes: 8,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-situational-thinking",
    learningObjective: "ANALYZE",
    isShort: true,
    shortDurationSeconds: 175,
    objectiveFr:
      "Distinguer symptôme (retard sprint) et cause (priorisation, capacité, définition du done).",
    objectiveEn:
      "Distinguish symptom (sprint delay) from cause (prioritization, capacity, definition of done).",
    explanationFr:
      "Un symptôme est ce qu'on voit : sprint en retard, taux de bugs élevé, conflit récurrent. La cause racine est ce qui produit le symptôme : WIP excessif, critères d'acceptation flous, dette technique non planifiée. Sur l'examen, l'option qui « ajoute des heures sup » traite le symptôme ; celle qui « clarifie le done et replanifie avec le PO » traite souvent la cause. VERIFY (PLA) demande : cette action empêchera-t-elle la récidive ?",
    explanationEn:
      "A symptom is what you see: late sprint, high bug rate, recurring conflict. Root cause is what produces it: excess WIP, vague acceptance criteria, unplanned tech debt. On the exam, the option to 'add overtime' treats the symptom; 'clarify done and replan with PO' often treats the cause. VERIFY (PLA) asks: will this action prevent recurrence?",
    exampleFr:
      "Symptôme : 3 sprints consécutifs incomplets. Cause probable : trop de stories « presque done » — DoD flou. Action symptôme : prolonger le sprint. Action cause : atelier DoD + WIP limit.",
    exampleEn:
      "Symptom: 3 consecutive incomplete sprints. Likely cause: too many 'almost done' stories — vague DoD. Symptom action: extend sprint. Cause action: DoD workshop + WIP limit.",
    practicalFr:
      "Un problème récurrent : listez le symptôme visible, puis trois causes possibles.",
    practicalEn:
      "A recurring problem: list the visible symptom, then three possible causes.",
    mistakeFr:
      "Confondre correction immédiate (symptôme) et mesure durable (cause) — les deux peuvent coexister mais l'examen teste la priorité.",
    mistakeEn:
      "Confusing immediate fix (symptom) and durable measure (cause) — both may coexist but the exam tests priority.",
    takeawayFr:
      "Symptôme = visible ; cause = ce qui le reproduit — traiter la cause en priorité situationnelle.",
    takeawayEn:
      "Symptom = visible; cause = what repeats it — treat cause as situational priority.",
    decisionFr:
      "Demander « Qu'est-ce qui fait que ça revient ? » avant de choisir l'action rapide.",
    decisionEn:
      "Ask 'What makes this come back?' before choosing the quick action.",
    flashcardFrontFr: "Cause vs symptôme",
    flashcardFrontEn: "Cause vs symptom",
    flashcardBackFr: "Symptôme = visible ; cause = mécanisme qui le reproduit.",
    flashcardBackEn: "Symptom = visible; cause = mechanism that repeats it.",
    exercisePromptFr:
      "Trois sprints incomplets : symptôme ? Deux causes possibles ? Action sur la cause ?",
    exercisePromptEn:
      "Three incomplete sprints: symptom? Two possible causes? Action on the cause?",
    situation: {
      scenarioFr:
        "L'équipe agile livre en moyenne 60 % du sprint commitment depuis 4 sprints. Le PO blame la « lenteur des devs » et demande des heures supplémentaires.",
      scenarioEn:
        "The agile team delivers on average 60% of sprint commitment for 4 sprints. The PO blames 'slow devs' and requests overtime.",
      problemFr: "Symptôme (commitment non tenu) — cause probable non diagnostiquée (DoD, sur-commit, interruptions).",
      problemEn: "Symptom (missed commitment) — likely undiagnosed cause (DoD, over-commit, interruptions).",
      bestActionFr:
        "UNDERSTAND/VERIFY : analyser cause (retro ciblée, flux, DoD) avec l'équipe — pas heures sup par défaut.",
      bestActionEn:
        "UNDERSTAND/VERIFY: analyze cause (focused retro, flow, DoD) with team — not default overtime.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Meilleure première action face aux 60 % de commitment ?",
      promptEn: "Best first action facing 60% commitment?",
      explanationCorrectFr: "Diagnostiquer la cause avec l'équipe avant d'ajouter des heures.",
      explanationCorrectEn: "Diagnose cause with team before adding hours.",
      difficulty: 3,
      options: [
        opt("Imposer des heures supplémentaires", "Mandate overtime", false),
        opt("Retro ciblée pour identifier la cause racine", "Focused retro to find root cause", true),
        opt("Augmenter le commitment du prochain sprint", "Increase next sprint commitment", false),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "collaborate-before-escalating",
    titleFr: "Collaborer avant d'escalader",
    titleEn: "Collaborate Before Escalating",
    descriptionFr:
      "Tenter résolution au bon niveau avec les parties concernées — escalader avec options, pas avec conflit brut.",
    descriptionEn:
      "Try resolution at the right level with concerned parties — escalate with options, not raw conflict.",
    moduleSlug: MOD,
    sortOrder: 3,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-situational-thinking",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider quand collaborer localement suffit vs quand escalader avec analyse documentée.",
    objectiveEn:
      "Decide when local collaboration suffices vs when to escalate with documented analysis.",
    explanationFr:
      "COLLABORATE (PLA) ne signifie pas « ne jamais escalader » — cela signifie impliquer les bonnes personnes au bon moment. Conflit technique entre experts : faciliter d'abord. Blocage hors mandat du PM (budget, priorités portfolio) : escalader — mais avec options analysées, pas « ils ne s'entendent pas ». Escalader sans collaboration préalable gaspille la crédibilité du PM ; collaborer sans limite retarde des décisions que seul le sponsor peut prendre.",
    explanationEn:
      "COLLABORATE (PLA) does not mean 'never escalate' — it means involve the right people at the right time. Technical conflict between experts: facilitate first. Blockage beyond PM mandate (budget, portfolio priorities): escalate — but with analyzed options, not 'they don't agree.' Escalating without prior collaboration wastes PM credibility; collaborating without limit delays decisions only the sponsor can make.",
    exampleFr:
      "Deux experts bloqués sur architecture : collaborer (session timeboxée) avant escalade tech lead. Retard fournisseur 3 semaines sur chemin critique : collaborer avec achats et ingénierie pour options — puis escalader au sponsor avec trade-offs chiffrés.",
    exampleEn:
      "Two experts blocked on architecture: collaborate (timeboxed session) before tech lead escalation. Supplier 3-week delay on critical path: collaborate with procurement and engineering for options — then escalate to sponsor with quantified trade-offs.",
    practicalFr:
      "Dernière escalade : aviez-vous documenté options ? Quelles parties aviez-vous consultées avant ?",
    practicalEn:
      "Last escalation: had you documented options? Which parties had you consulted first?",
    mistakeFr:
      "Escalader immédiatement au CEO pour un conflit technique résolvable entre experts.",
    mistakeEn:
      "Immediately escalating to the CEO for a technical conflict solvable between experts.",
    takeawayFr:
      "Collaborer au niveau le plus bas efficace — escalader avec options, pas avec chaos.",
    takeawayEn:
      "Collaborate at the lowest effective level — escalate with options, not chaos.",
    decisionFr:
      "Checklist : parties consultées ? Options documentées ? Décision hors mandat PM ? → alors escalader.",
    decisionEn:
      "Checklist: parties consulted? Options documented? Decision beyond PM mandate? → then escalate.",
    flashcardFrontFr: "Collaborate (PLA)",
    flashcardFrontEn: "Collaborate (PLA)",
    flashcardBackFr: "Impliquer les bonnes parties ; escalader avec analyse, pas brut.",
    flashcardBackEn: "Involve the right parties; escalate with analysis, not raw conflict.",
    exercisePromptFr:
      "Conflit architecture vs retard fournisseur : où collaborer d'abord ? Quand escalader ?",
    exercisePromptEn:
      "Architecture conflict vs supplier delay: where collaborate first? When escalate?",
    situation: {
      scenarioFr:
        "Le responsable marketing exige une feature non planifiée et menace d'escalader au directeur général si le PO refuse. Le PO vous demande d'« aller directement au DG ».",
      scenarioEn:
        "Marketing lead demands an unplanned feature and threatens to escalate to the CEO if the PO refuses. The PO asks you to 'go straight to the CEO.'",
      problemFr: "Pression relationnelle — décision de valeur/priorisation pas encore analysée.",
      problemEn: "Relationship pressure — value/prioritization decision not yet analyzed.",
      bestActionFr:
        "COLLABORATE : réunion courte PO + marketing pour cadrer valeur, impact sprint et options — escalader au DG seulement si blocage persiste avec synthèse.",
      bestActionEn:
        "COLLABORATE: short PO + marketing meeting to frame value, sprint impact, and options — escalate to CEO only if blockage persists with summary.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Meilleure première action ?",
      promptEn: "Best first action?",
      explanationCorrectFr: "Faciliter PO + marketing avec cadrage valeur avant escalade DG.",
      explanationCorrectEn: "Facilitate PO + marketing with value framing before CEO escalation.",
      difficulty: 3,
      options: [
        opt("Escalader immédiatement au DG", "Escalate immediately to CEO", false),
        opt("Réunion PO + marketing pour cadrer valeur et options", "PO + marketing meeting to frame value and options", true),
        opt("Accepter la feature sans discussion", "Accept the feature without discussion", false),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "scope-creep-mid-sprint",
    titleFr: "Élargissement du périmètre en sprint",
    titleEn: "Scope Creep Mid-Sprint",
    descriptionFr:
      "Protéger le sprint goal tout en respectant la partie prenante urgente.",
    descriptionEn:
      "Protect the sprint goal while respecting the urgent stakeholder.",
    moduleSlug: MOD,
    sortOrder: 4,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-situational-thinking",
    learningObjective: "DECIDE",
    objectiveFr:
      "Répondre à une demande urgente mid-sprint sans insertion silencieuse ni refus sec.",
    objectiveEn:
      "Respond to an urgent mid-sprint request without silent insertion or flat refusal.",
    explanationFr:
      "Face à une demande urgente mid-sprint, la meilleure action protège le sprint goal et la vélocité tout en respectant la partie prenante. Insérer du travail sans replanifier déstabilise l'équipe et masque la vraie capacité. Documenter la demande, quantifier la valeur business et planifier pour le prochain sprint (ou négocier un scope swap explicite avec le PO et l'équipe) est plus durable que céder à la pression immédiate. Refuser sans explication dégrade la relation.",
    explanationEn:
      "Facing an urgent mid-sprint request, the best action protects the sprint goal and velocity while respecting the stakeholder. Inserting work without replanning destabilizes the team and hides true capacity. Documenting the request, quantifying business value, and planning for the next sprint (or negotiating an explicit scope swap with PO and team) is more sustainable than yielding to immediate pressure. Refusing without explanation damages the relationship.",
    exampleFr:
      "Directeur commercial + démo 10 jours : accueillir, quantifier valeur avec PO, backlog priorisé — si vraiment critique, scope swap explicite en replanification sprint, jamais insertion « discrète ».",
    exampleEn:
      "Sales director + demo in 10 days: acknowledge, quantify value with PO, prioritized backlog — if truly critical, explicit scope swap via sprint replanning, never 'discrete' insertion.",
    practicalFr:
      "Rédigez la réponse que vous enverriez au directeur commercial dans la vignette.",
    practicalEn:
      "Write the response you would send the sales director in the vignette.",
    mistakeFr:
      "Ajouter la feature au sprint sans replanification — ou refuser sans alternative.",
    mistakeEn:
      "Adding the feature to the sprint without replanning — or refusing without alternative.",
    takeawayFr:
      "Backlog + priorisation (+ scope swap explicite si besoin) — pas insertion silencieuse.",
    takeawayEn:
      "Backlog + prioritization (+ explicit scope swap if needed) — not silent insertion.",
    decisionFr:
      "Protéger le sprint goal ; canaliser la demande vers backlog ou replanification transparente.",
    decisionEn:
      "Protect sprint goal; channel request to backlog or transparent replanning.",
    flashcardFrontFr: "Demande urgente mid-sprint",
    flashcardFrontEn: "Urgent mid-sprint request",
    flashcardBackFr: "Backlog + priorisation, pas insertion silencieuse dans le sprint.",
    flashcardBackEn: "Backlog + prioritization, not silent insertion into the sprint.",
    exercisePromptFr:
      "Rédigez la réponse au directeur commercial. Quelle erreur éviter ?",
    exercisePromptEn:
      "Write the response to the sales director. What mistake to avoid?",
    situation: {
      scenarioFr:
        "En milieu de sprint, un directeur commercial demande une nouvelle fonctionnalité de reporting « urgente » pour une démo client dans 10 jours. L'équipe est déjà engagée sur le sprint goal actuel. Le Product Owner hésite.",
      scenarioEn:
        "Mid-sprint, a sales director requests a new reporting feature as 'urgent' for a client demo in 10 days. The team is already committed to the current sprint goal. The Product Owner hesitates.",
      bestActionFr:
        "Accueillir la demande, évaluer la valeur et l'impact avec le PO, puis ajouter au backlog priorisé — pas insérer dans le sprint courant sans replanifier avec l'équipe.",
      bestActionEn:
        "Acknowledge the request, assess value and impact with the PO, then add to the prioritized backlog — do not insert into the current sprint without replanning with the team.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Meilleure première action face à cette demande ?",
      promptEn: "Best first action facing this request?",
      explanationCorrectFr: "Documenter, évaluer valeur avec le PO et prioriser au backlog — protège le sprint.",
      explanationCorrectEn: "Document, assess value with PO, and prioritize in backlog — protects the sprint.",
      difficulty: 3,
      options: [
        opt("Ajouter immédiatement la feature au sprint sans discussion", "Immediately add the feature to the sprint without discussion", false),
        opt("Documenter, évaluer valeur et prioriser au backlog", "Document, assess value, and prioritize in backlog", true),
        opt("Refuser sèchement sans explication", "Flatly refuse without explanation", false),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "team-conflict-architecture",
    titleFr: "Conflit technique entre experts",
    titleEn: "Technical Conflict Between Experts",
    descriptionFr:
      "Faciliter un débat d'architecture sans imposer la solution technique.",
    descriptionEn:
      "Facilitate an architecture debate without imposing the technical solution.",
    moduleSlug: MOD,
    sortOrder: 5,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-situational-thinking",
    learningObjective: "DECIDE",
    objectiveFr:
      "Débloquer un conflit technique entre seniors par facilitation structurée, pas par choix arbitraire du PM.",
    objectiveEn:
      "Unblock technical conflict between seniors through structured facilitation, not PM arbitrary choice.",
    explanationFr:
      "Un conflit technique entre experts n'est pas résolu par le chef de projet qui choisit la technologie. La facilitation structurée : critères de décision partagés (délai, risque, maintenabilité), timebox, prototypage léger si utile, documentation de la décision. Si le blocage persiste, escalader au tech lead ou architecte avec les options analysées — pas avec le conflit non traité. Imposer « microservices parce que c'est moderne » détruit l'engagement expert.",
    explanationEn:
      "Technical conflict between experts is not resolved by the project manager picking the technology. Structured facilitation: shared decision criteria (deadline, risk, maintainability), timebox, light prototyping if useful, decision documentation. If blockage persists, escalate to tech lead or architect with analyzed options — not with untreated conflict. Imposing 'microservices because it's modern' destroys expert engagement.",
    exampleFr:
      "Microservices vs monolithe modulaire : session 90 min, critères écrits, recommandation conjointe — PM timebox et documente, ne tranche pas seul.",
    exampleEn:
      "Microservices vs modular monolith: 90-min session, written criteria, joint recommendation — PM timeboxes and documents, does not decide alone.",
    practicalFr:
      "Listez trois critères de décision pour un débat d'architecture bloquant.",
    practicalEn:
      "List three decision criteria for a blocking architecture debate.",
    mistakeFr:
      "Choisir la stack soi-même pour « débloquer vite » — ou reporter indéfiniment.",
    mistakeEn:
      "Picking the stack yourself to 'unblock fast' — or postponing indefinitely.",
    takeawayFr:
      "Faciliter avec critères explicites ; escalader avec options si blocage persiste.",
    takeawayEn:
      "Facilitate with explicit criteria; escalate with options if blockage persists.",
    decisionFr:
      "Timebox + critères + recommandation experts — PM facilitateur, pas architecte décideur.",
    decisionEn:
      "Timebox + criteria + expert recommendation — PM as facilitator, not deciding architect.",
    flashcardFrontFr: "Conflit technique",
    flashcardFrontEn: "Technical conflict",
    flashcardBackFr: "Faciliter avec critères explicites ; ne pas imposer la solution technique.",
    flashcardBackEn: "Facilitate with explicit criteria; do not impose the technical solution.",
    exercisePromptFr:
      "Trois critères pour microservices vs monolithe modulaire ? Erreur du PM à éviter ?",
    exercisePromptEn:
      "Three criteria for microservices vs modular monolith? PM mistake to avoid?",
    situation: {
      scenarioFr:
        "Deux développeurs seniors s'opposent sur l'architecture d'une API : microservices vs monolithe modulaire. Le débat bloque la story critique du sprint. Chacun a des arguments valables liés à la scalabilité et au délai.",
      scenarioEn:
        "Two senior developers disagree on API architecture: microservices vs modular monolith. The debate blocks the sprint's critical story. Each has valid arguments related to scalability and deadline.",
      bestActionFr:
        "Faciliter une session timeboxée avec critères explicites (délai, risque, maintenabilité), faire produire une recommandation par les experts, puis décider ou escalader si nécessaire.",
      bestActionEn:
        "Facilitate a timeboxed session with explicit criteria (deadline, risk, maintainability), have experts produce a recommendation, then decide or escalate if needed.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Quelle approche est la plus appropriée pour le chef de projet ?",
      promptEn: "Which approach is most appropriate for the project manager?",
      explanationCorrectFr: "Faciliter une session timeboxée avec critères et recommandation des experts.",
      explanationCorrectEn: "Facilitate a timeboxed session with criteria and expert recommendation.",
      difficulty: 3,
      options: [
        opt("Choisir microservices car c'est moderne", "Choose microservices because it is modern", false),
        opt("Faciliter session timeboxée avec critères explicites", "Facilitate timeboxed session with explicit criteria", true),
        opt("Reporter indéfiniment la décision", "Postpone the decision indefinitely", false),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "vendor-delay-risk",
    titleFr: "Retard fournisseur critique",
    titleEn: "Critical Vendor Delay",
    descriptionFr:
      "Réagir quand un risque matérialisé menace le chemin critique.",
    descriptionEn:
      "React when a materialized risk threatens the critical path.",
    moduleSlug: MOD,
    sortOrder: 6,
    estimatedMinutes: 10,
    difficulty: "ADVANCED",
    skillSlug: "pmp-situational-thinking",
    learningObjective: "DECIDE",
    objectiveFr:
      "Première action quand un retard fournisseur érode le float du chemin critique sans budget supplémentaire.",
    objectiveEn:
      "First action when supplier delay erodes critical path float with no additional budget.",
    explanationFr:
      "Quand un risque devient un issue sur le chemin critique, l'action immédiate est l'analyse d'impact et la transparence — pas l'optimisme silencieux. Options typiques : fournisseur alternatif (coût/délai), fast-tracking d'autres activités, réduction de scope, négociation avec le fournisseur. Le sponsor doit voir les trade-offs quantifiés (EAC, date de fin) pour autoriser budget ou scope. Promettre la date originale au client sans analyse est une faute situationnelle classique.",
    explanationEn:
      "When a risk becomes an issue on the critical path, immediate action is impact analysis and transparency — not silent optimism. Typical options: alternate supplier (cost/time), fast-tracking other activities, scope reduction, supplier negotiation. The sponsor must see quantified trade-offs (EAC, finish date) to authorize budget or scope. Promising the original client date without analysis is a classic situational fault.",
    exampleFr:
      "Retard 3 semaines hardware + float faible : issue log, 3 options chiffrées, présentation sponsor — pas « on rattrapera ».",
    exampleEn:
      "3-week hardware delay + low float: issue log, 3 quantified options, sponsor presentation — not 'we'll catch up.'",
    practicalFr:
      "Listez trois options face à un retard fournisseur sur le chemin critique.",
    practicalEn:
      "List three options facing a supplier delay on the critical path.",
    mistakeFr:
      "Promettre la date initiale ou ignorer le retard — pas de registre des issues.",
    mistakeEn:
      "Promising the initial date or ignoring the delay — no issue log.",
    takeawayFr:
      "Issue log + options quantifiées + trade-offs au sponsor avant promesse.",
    takeawayEn:
      "Issue log + quantified options + trade-offs to sponsor before promising.",
    decisionFr:
      "Transparence et chiffres avant engagement externe ou interne sur la date.",
    decisionEn:
      "Transparency and numbers before external or internal date commitment.",
    flashcardFrontFr: "Risque matérialisé",
    flashcardFrontEn: "Materialized risk",
    flashcardBackFr: "Analyser impact, options et trade-offs avant promettre une date.",
    flashcardBackEn: "Analyze impact, options, and trade-offs before promising a date.",
    exercisePromptFr:
      "Retard 3 semaines, pas de budget : trois options ? Erreur à éviter ?",
    exercisePromptEn:
      "3-week delay, no budget: three options? Mistake to avoid?",
    situation: {
      scenarioFr:
        "Un fournisseur clé annonce un retard de 3 semaines sur un composant hardware indispensable. Le chemin critique absorbe déjà peu de marge. Le sponsor demande « trouver une solution » sans budget supplémentaire.",
      scenarioEn:
        "A key supplier announces a 3-week delay on essential hardware. The critical path already has little float. The sponsor asks to 'find a solution' without additional budget.",
      bestActionFr:
        "Mettre à jour le registre des issues, analyser options (fournisseur alternatif, fast-track parallèle, scope swap), quantifier impact sur EAC et date, puis présenter trade-offs au sponsor pour décision.",
      bestActionEn:
        "Update the issue log, analyze options (alternate supplier, parallel fast-track, scope swap), quantify impact on EAC and date, then present trade-offs to the sponsor for decision.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Meilleure première action du chef de projet ?",
      promptEn: "Best first action for the project manager?",
      explanationCorrectFr: "Documenter l'issue, analyser options et quantifier impact pour le sponsor.",
      explanationCorrectEn: "Document the issue, analyze options, and quantify impact for the sponsor.",
      difficulty: 3,
      options: [
        opt("Promettre la date originale au client", "Promise the original date to the client", false),
        opt("Analyser options et présenter trade-offs quantifiés", "Analyze options and present quantified trade-offs", true),
        opt("Ignorer le retard et continuer comme prévu", "Ignore the delay and continue as planned", false),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "change-request-critical-path",
    titleFr: "Changement sur le chemin critique",
    titleEn: "Change on the Critical Path",
    descriptionFr:
      "Traiter une demande de changement majeure du sponsor sans exécution immédiate.",
    descriptionEn:
      "Handle a major sponsor change request without immediate execution.",
    moduleSlug: MOD,
    sortOrder: 7,
    estimatedMinutes: 10,
    difficulty: "ADVANCED",
    skillSlug: "pmp-situational-thinking",
    learningObjective: "DECIDE",
    objectiveFr:
      "Appliquer le processus de changement formel même quand le demandeur est le sponsor.",
    objectiveEn:
      "Apply formal change process even when the requester is the sponsor.",
    explanationFr:
      "Une demande de changement majeure du sponsor ne doit pas être exécutée sans analyse — même si le demandeur est le sponsor. Le processus protège l'équipe et clarifie les trade-offs : date, budget, autres livrables. Phasing (livrer l'essentiel réglementaire en premier) ou scope swap sont souvent des options à présenter. Exécuter sans baseline update crée de la dette de gouvernance. Refuser sans analyse n'est pas professionnel — analyser puis recommander.",
    explanationEn:
      "A major change request from the sponsor should not be executed without analysis — even when the requester is the sponsor. The process protects the team and clarifies trade-offs: date, budget, other deliverables. Phasing (deliver essential regulatory part first) or scope swap are often options to present. Executing without baseline update creates governance debt. Refusing without analysis is unprofessional — analyze then recommend.",
    exampleFr:
      "Intégration réglementaire +4 semaines, pas de contingence : change log, impact planning/coût/risque, options phasing ou scope swap, décision comité avant dev.",
    exampleEn:
      "Regulatory integration +4 weeks, no contingency: change log, schedule/cost/risk impact, phasing or scope swap options, committee decision before dev.",
    practicalFr:
      "Proposez deux options de trade-off pour le changement réglementaire de la vignette.",
    practicalEn:
      "Propose two trade-off options for the regulatory change in the vignette.",
    mistakeFr:
      "Commencer immédiatement parce que « le sponsor a demandé » — ou refuser sans analyse.",
    mistakeEn:
      "Starting immediately because 'the sponsor asked' — or refusing without analysis.",
    takeawayFr:
      "Processus formel + analyse d'impact + décision avant exécution — même pour le sponsor.",
    takeawayEn:
      "Formal process + impact analysis + decision before execution — even for the sponsor.",
    decisionFr:
      "Aucun changement majeur sur chemin critique sans change log et approbation documentée.",
    decisionEn:
      "No major critical-path change without change log and documented approval.",
    flashcardFrontFr: "Changement majeur",
    flashcardFrontEn: "Major change",
    flashcardBackFr: "Processus formel + analyse d'impact avant exécution.",
    flashcardBackEn: "Formal process + impact analysis before execution.",
    exercisePromptFr:
      "Deux trade-offs pour l'intégration réglementaire ? Erreur si exécution immédiate ?",
    exercisePromptEn:
      "Two trade-offs for regulatory integration? Mistake if immediate execution?",
    situation: {
      scenarioFr:
        "Le sponsor soumet une demande de changement majeure : ajouter une intégration réglementaire non prévue. Elle touche le chemin critique et nécessite 4 semaines de travail. Le budget baseline n'a pas de contingence restante.",
      scenarioEn:
        "The sponsor submits a major change request: add an unforeseen regulatory integration. It touches the critical path and requires 4 weeks of work. The budget baseline has no remaining contingency.",
      bestActionFr:
        "Traiter via le processus de changement formel : analyse d'impact (planning, coût, risque, qualité), options (scope swap, budget supplémentaire, phasing), recommandation documentée, puis décision du comité ou sponsor avant exécution.",
      bestActionEn:
        "Process through formal change: impact analysis (schedule, cost, risk, quality), options (scope swap, additional budget, phasing), documented recommendation, then committee or sponsor decision before execution.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Face à ce changement du sponsor, quelle action est correcte ?",
      promptEn: "Facing this sponsor change, which action is correct?",
      explanationCorrectFr: "Processus formel avec analyse d'impact et décision avant exécution.",
      explanationCorrectEn: "Formal process with impact analysis and decision before execution.",
      difficulty: 3,
      options: [
        opt("Commencer immédiatement car le sponsor a demandé", "Start immediately because the sponsor asked", false),
        opt("Processus de changement avec analyse d'impact", "Change process with impact analysis", true),
        opt("Refuser sans analyse ni discussion", "Refuse without analysis or discussion", false),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "protect-value-decisions",
    titleFr: "Protéger la valeur dans les décisions",
    titleEn: "Protect Value in Decisions",
    descriptionFr:
      "Refuser ou replanifier ce qui menace la valeur livrée — pas seulement le calendrier.",
    descriptionEn:
      "Refuse or replan what threatens delivered value — not only the schedule.",
    moduleSlug: MOD,
    sortOrder: 8,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-situational-thinking",
    learningObjective: "DECIDE",
    objectiveFr:
      "Choisir l'action qui préserve la valeur business quand calendrier et qualité entrent en conflit.",
    objectiveEn:
      "Choose the action that preserves business value when schedule and quality conflict.",
    explanationFr:
      "Protéger la valeur signifie ne pas sacrifier l'outcome pour une date ou un output superficiel. Livrer à temps une feature non testée qui casse la conformité détruit plus de valeur que un retard de 2 semaines. En agile : MVP et Definition of Done protègent la valeur. En prédictif : quality gates et acceptation formelle. Les questions d'examen testent souvent l'option « livrer quand même » vs « replanifier pour préserver valeur/conformité ».",
    explanationEn:
      "Protecting value means not sacrificing outcome for a date or superficial output. On-time delivery of an untested feature that breaks compliance destroys more value than a 2-week delay. In agile: MVP and Definition of Done protect value. In predictive: quality gates and formal acceptance. Exam questions often test 'ship anyway' vs 'replan to preserve value/compliance.'",
    exampleFr:
      "Release vendredi vs audit sécurité non passé : protéger valeur = retarder ou scope réduit conforme — pas livrer et corriger en prod.",
    exampleEn:
      "Friday release vs failed security audit: protect value = delay or reduced compliant scope — not ship and fix in prod.",
    practicalFr:
      "Cas où une date a été tenue mais la valeur business non — que aurait-on dû protéger ?",
    practicalEn:
      "Case where date was met but business value was not — what should we have protected?",
    mistakeFr:
      "Optimiser la date au détriment de la conformité ou de l'adoption — faux succès.",
    mistakeEn:
      "Optimizing date at the expense of compliance or adoption — false success.",
    takeawayFr:
      "Valeur > date affichée — replanifier ou réduire scope avant compromettre l'outcome.",
    takeawayEn:
      "Value > displayed date — replan or reduce scope before compromising outcome.",
    decisionFr:
      "Avant « livrer coûte que coûte » : quel dommage valeur/conformité/adoption ?",
    decisionEn:
      "Before 'ship at all costs': what value/compliance/adoption damage?",
    flashcardFrontFr: "Protéger la valeur",
    flashcardFrontEn: "Protect value",
    flashcardBackFr: "Ne pas sacrifier outcome/conformité pour une date seule.",
    flashcardBackEn: "Do not sacrifice outcome/compliance for date alone.",
    exercisePromptFr:
      "Release vendredi vs audit sécurité échoué : meilleure action ? Justification valeur ?",
    exercisePromptEn:
      "Friday release vs failed security audit: best action? Value justification?",
    situation: {
      scenarioFr:
        "Le marketing exige le go-live vendredi d'une place de marché B2B. Les tests de paiement PCI ne sont pas terminés ; livrer vendredi signifie contourner temporairement le contrôle.",
      scenarioEn:
        "Marketing demands Friday go-live of a B2B marketplace. PCI payment tests are incomplete; shipping Friday means temporarily bypassing the control.",
      problemFr: "Conflit date vs conformité — risque valeur long terme (amende, confiance client).",
      problemEn: "Date vs compliance conflict — long-term value risk (fines, client trust).",
      bestActionFr:
        "Protéger la valeur : escalader trade-off documenté (date vs conformité PCI), proposer phasing ou retard minimal — ne pas contourner le contrôle.",
      bestActionEn:
        "Protect value: escalate documented trade-off (date vs PCI compliance), propose phasing or minimal delay — do not bypass control.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Meilleure action pour protéger la valeur business ?",
      promptEn: "Best action to protect business value?",
      explanationCorrectFr: "Documenter trade-off conformité vs date — ne pas contourner PCI.",
      explanationCorrectEn: "Document compliance vs date trade-off — do not bypass PCI.",
      difficulty: 3,
      options: [
        opt("Livrer vendredi en contournant le contrôle PCI", "Ship Friday bypassing PCI control", false),
        opt("Escalader trade-off conformité vs date avec options", "Escalate compliance vs date trade-off with options", true),
        opt("Livrer sans informer le sponsor", "Ship without informing sponsor", false),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "risk-vs-issue-situational",
    titleFr: "Risque vs issue — situationnel",
    titleEn: "Risk vs Issue — Situational",
    descriptionFr:
      "Réagir différemment selon qu'un événement est incertain (risque) ou déjà arrivé (issue).",
    descriptionEn:
      "React differently depending on whether an event is uncertain (risk) or already occurred (issue).",
    moduleSlug: MOD,
    sortOrder: 9,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "risk-management",
    learningObjective: "IDENTIFY",
    objectiveFr:
      "Classer un événement vignette comme risque ou issue et choisir la première action adaptée.",
    objectiveEn:
      "Classify a vignette event as risk or issue and choose the fitting first action.",
    explanationFr:
      "Un risque peut arriver — on planifie réponse, probabilité, impact, owner. Une issue est arrivée — on documente dans le registre des issues et on exécute la réponse immédiate (containment, analyse, options). Confondre les deux mène à « planifier une réponse » quand il faut « agir maintenant », ou paniquer sur un risque théorique sans priorisation. Retard fournisseur annoncé = issue sur chemin critique, pas risque futur.",
    explanationEn:
      "A risk may happen — we plan response, probability, impact, owner. An issue has happened — we log in the issue register and execute immediate response (containment, analysis, options). Confusing the two leads to 'plan a response' when we must 'act now,' or panicking over a theoretical risk without prioritization. Announced supplier delay = issue on critical path, not future risk.",
    exampleFr:
      "Risque : « le fournisseur pourrait retarder » → plan mitigation. Issue : « retard confirmé 3 semaines » → issue log + options + sponsor.",
    exampleEn:
      "Risk: 'supplier might delay' → mitigation plan. Issue: 'confirmed 3-week delay' → issue log + options + sponsor.",
    practicalFr:
      "Deux événements de votre projet : classez risque vs issue. Première action pour chaque ?",
    practicalEn:
      "Two events from your project: classify risk vs issue. First action for each?",
    mistakeFr:
      "Mettre à jour le registre des risques seulement quand l'événement est déjà materialisé.",
    mistakeEn:
      "Updating only the risk register when the event has already materialized.",
    takeawayFr:
      "Risque = peut arriver (plan) ; issue = arrivé (agir + registre issues).",
    takeawayEn:
      "Risk = may happen (plan); issue = happened (act + issue log).",
    decisionFr:
      "Demander « Est-ce déjà arrivé ? » — oui → issue ; non → risque.",
    decisionEn:
      "Ask 'Has it already happened?' — yes → issue; no → risk.",
    flashcardFrontFr: "Risque vs issue",
    flashcardFrontEn: "Risk vs issue",
    flashcardBackFr: "Risque = futur incertain ; issue = événement materialisé.",
    flashcardBackEn: "Risk = uncertain future; issue = materialized event.",
    exercisePromptFr:
      "Retard fournisseur confirmé vs crainte de retard : risque ou issue ? Action ?",
    exercisePromptEn:
      "Confirmed supplier delay vs fear of delay: risk or issue? Action?",
    situation: {
      scenarioFr:
        "Hier, l'intégrateur API a confirmé un bug bloquant en production chez un client pilote — pas une hypothèse. Votre registre des risques listait déjà « qualité API » comme risque moyen.",
      scenarioEn:
        "Yesterday, the API integrator confirmed a blocking production bug at a pilot client — not a hypothesis. Your risk register already listed 'API quality' as medium risk.",
      problemFr: "Événement materialisé — traiter comme issue, pas seulement mise à jour risque.",
      problemEn: "Materialized event — treat as issue, not only risk update.",
      bestActionFr:
        "Ouvrir/mettre à jour le registre des issues, containment avec client pilote, analyse cause — puis ajuster plan risque/réponse.",
      bestActionEn:
        "Open/update issue log, containment with pilot client, cause analysis — then adjust risk plan/response.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Meilleure première action face au bug confirmé en prod ?",
      promptEn: "Best first action facing confirmed prod bug?",
      explanationCorrectFr: "Registre des issues + containment — l'événement est materialisé.",
      explanationCorrectEn: "Issue log + containment — event is materialized.",
      difficulty: 3,
      options: [
        opt("Uniquement mettre à jour le registre des risques", "Only update the risk register", false),
        opt("Registre des issues + containment client pilote", "Issue log + pilot client containment", true),
        opt("Attendre la prochaine revue des risques", "Wait for next risk review", false),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "agile-vs-predictive-choice",
    titleFr: "Agile vs prédictif — choix situationnel",
    titleEn: "Agile vs Predictive — Situational Choice",
    descriptionFr:
      "Adapter l'approche au degré d'incertitude et aux contraintes — pas appliquer une mode.",
    descriptionEn:
      "Adapt approach to uncertainty level and constraints — do not apply a fad.",
    moduleSlug: MOD,
    sortOrder: 10,
    estimatedMinutes: 10,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-situational-thinking",
    learningObjective: "DECIDE",
    objectiveFr:
      "Recommander agile, prédictif ou hybride sur une vignette avec contraintes explicites.",
    objectiveEn:
      "Recommend agile, predictive, or hybrid on a vignette with explicit constraints.",
    explanationFr:
      "Le choix n'est pas idéologique : prédictif convient quand le périmètre est stable, la réglementation exige traçabilité séquentielle, ou les contrats fixent livrables détaillés. Agile convient quand les exigences évoluent, la valeur se valide par incréments, et le feedback utilisateur est critique. Hybride : infrastructure prédictive + produit agile. Erreur d'examen : imposer Scrum à un projet réglementaire séquentiel — ou un Gantt rigide à une startup exploratoire.",
    explanationEn:
      "The choice is not ideological: predictive fits when scope is stable, regulation requires sequential traceability, or contracts fix detailed deliverables. Agile fits when requirements evolve, value is validated by increments, and user feedback is critical. Hybrid: predictive infrastructure + agile product. Exam mistake: imposing Scrum on a sequential regulated project — or rigid Gantt on an exploratory startup.",
    exampleFr:
      "Migration datacenter (peu de changement scope, fenêtre fixe) → prédictif/hybride planifié. App mobile découverte marché → agile. Programme : core ERP waterfall, module UX agile.",
    exampleEn:
      "Datacenter migration (little scope change, fixed window) → predictive/planned hybrid. Market-discovery mobile app → agile. Program: core ERP waterfall, UX module agile.",
    practicalFr:
      "Votre projet : incertitude requirements ? Contraintes réglementaires ? → agile, prédictif ou hybride ?",
    practicalEn:
      "Your project: requirements uncertainty? Regulatory constraints? → agile, predictive, or hybrid?",
    mistakeFr:
      "Choisir l'approche par préférence personnelle — pas par contexte et contraintes.",
    mistakeEn:
      "Choosing approach by personal preference — not context and constraints.",
    takeawayFr:
      "Tailoring situationnel : incertitude + contraintes → agile, prédictif ou hybride.",
    takeawayEn:
      "Situational tailoring: uncertainty + constraints → agile, predictive, or hybrid.",
    decisionFr:
      "Lister incertitude, réglementation, type de contrat — puis recommander l'approche.",
    decisionEn:
      "List uncertainty, regulation, contract type — then recommend approach.",
    flashcardFrontFr: "Tailoring agile/prédictif",
    flashcardFrontEn: "Agile/predictive tailoring",
    flashcardBackFr: "Stable + réglementé → plus prédictif ; incertain → plus agile.",
    flashcardBackEn: "Stable + regulated → more predictive; uncertain → more agile.",
    exercisePromptFr:
      "Migration datacenter vs app exploration marché : approche ? Justification en une phrase chacune.",
    exercisePromptEn:
      "Datacenter migration vs market exploration app: approach? One-sentence justification each.",
    situation: {
      scenarioFr:
        "Le sponsor impose Scrum sur un projet d'infrastructure avec périmètre figé par contrat EPC, audits séquentiels obligatoires et pénalités de retard journalières.",
      scenarioEn:
        "The sponsor mandates Scrum on an infrastructure project with scope fixed by EPC contract, mandatory sequential audits, and daily delay penalties.",
      problemFr: "Décalage approche vs contraintes — risque contractuel et audit.",
      problemEn: "Approach vs constraints mismatch — contractual and audit risk.",
      bestActionFr:
        "COLLABORATE avec sponsor : expliquer tailoring — plan prédictif/hybride pour infra auditée, agile possible sur sous-composants exploratoires si contrat le permet.",
      bestActionEn:
        "COLLABORATE with sponsor: explain tailoring — predictive/hybrid plan for audited infra, agile possible on exploratory sub-components if contract allows.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Meilleure réponse du chef de projet ?",
      promptEn: "Best project manager response?",
      explanationCorrectFr: "Proposer tailoring aligné contrat/audits — pas Scrum pur imposé.",
      explanationCorrectEn: "Propose tailoring aligned to contract/audits — not imposed pure Scrum.",
      difficulty: 3,
      options: [
        opt("Appliquer Scrum pure comme demandé sans discussion", "Apply pure Scrum as requested without discussion", false),
        opt("Expliquer tailoring prédictif/hybride vs contraintes EPC", "Explain predictive/hybrid tailoring vs EPC constraints", true),
        opt("Abandonner toute planification séquentielle", "Abandon all sequential planning", false),
      ],
    }),
  }),

  buildPmpLesson({
    slug: "exam-reasoning-integration",
    titleFr: "Intégration du raisonnement examen",
    titleEn: "Exam Reasoning Integration",
    descriptionFr:
      "Assembler people, process, business et pensée situationnelle sur des vignettes longues — niveau avancé.",
    descriptionEn:
      "Assemble people, process, business, and situational thinking on long vignettes — advanced level.",
    moduleSlug: MOD,
    sortOrder: 11,
    estimatedMinutes: 12,
    difficulty: "ADVANCED",
    skillSlug: "pmp-situational-thinking",
    learningObjective: "DECIDE",
    objectiveFr:
      "Résoudre une vignette multi-domaines avec la boucle PLA sans tomber dans les pièges classiques.",
    objectiveEn:
      "Solve a multi-domain vignette with the PLA loop without falling into classic traps.",
    explanationFr:
      "Les vignettes avancées mélangent people (conflit, motivation), process (changements, risques), business (valeur, conformité) et delivery (agile/prédictif). Méthode PLA intégrée : OBSERVE toutes les contraintes (sponsor, légal, sprint) ; UNDERSTAND le conflit central ; IDENTIFY options qui préservent valeur et relation ; COLLABORATE avant escalade ; ACT proportionné ; VERIFY cause ; ADAPT si nouvelle info. Pièges : action trop extrême, ignorance conformité, oubli collaboration, confiance en un mot-clé mémorisé.",
    explanationEn:
      "Advanced vignettes blend people (conflict, motivation), process (changes, risks), business (value, compliance), and delivery (agile/predictive). Integrated PLA method: OBSERVE all constraints (sponsor, legal, sprint); UNDERSTAND central conflict; IDENTIFY options preserving value and relationship; COLLABORATE before escalation; ACT proportionately; VERIFY cause; ADAPT if new info. Traps: overly extreme action, ignoring compliance, skipping collaboration, trusting one memorized keyword.",
    exampleFr:
      "Vignette combo : demande scope mid-sprint + exigence conformité + sponsor pressé. Mauvais : insertion sprint ou refus sec. Bon : OBSERVE contraintes, COLLABORATE PO/compliance/sponsor, ACT backlog ou scope swap documenté, VERIFY sprint goal et conformité.",
    exampleEn:
      "Combo vignette: mid-sprint scope request + compliance requirement + pressured sponsor. Wrong: sprint insertion or flat refusal. Right: OBSERVE constraints, COLLABORATE PO/compliance/sponsor, ACT documented backlog or scope swap, VERIFY sprint goal and compliance.",
    practicalFr:
      "Sur une vignette 4 lignes, tagguez : people / process / business / delivery. Puis parcourez O-U-I-C-A-V-A.",
    practicalEn:
      "On a 4-line vignette, tag: people / process / business / delivery. Then walk O-U-I-C-A-V-A.",
    mistakeFr:
      "Répondre depuis un seul domaine mémorisé (« toujours escalader » / « toujours agile »).",
    mistakeEn:
      "Answering from one memorized domain ('always escalate' / 'always agile').",
    takeawayFr:
      "Examen avancé = intégration multi-domaines + boucle PLA — pas formule magique.",
    takeawayEn:
      "Advanced exam = multi-domain integration + PLA loop — not magic formula.",
    decisionFr:
      "Éliminer les options extrêmes ou non collaboratives — puis appliquer PLA sur le reste.",
    decisionEn:
      "Eliminate extreme or non-collaborative options — then apply PLA to the remainder.",
    flashcardFrontFr: "Vignette avancée",
    flashcardFrontEn: "Advanced vignette",
    flashcardBackFr: "Tag domaines + boucle PLA — éviter extrêmes et mots-clés seuls.",
    flashcardBackEn: "Tag domains + PLA loop — avoid extremes and keywords alone.",
    exercisePromptFr:
      "Vignette combo scope + conformité + sponsor : parcours O-U-I-C-A-V-A et option éliminée en premier ?",
    exercisePromptEn:
      "Combo scope + compliance + sponsor vignette: walk O-U-I-C-A-V-A and first eliminated option?",
    situation: {
      scenarioFr:
        "Mid-sprint, le directeur juridique exige une fonctionnalité de consentement cookies non planifiée avant une inspection mardi. Le PO refuse d'ajouter au sprint. Le sponsor demande au PM de « trancher vite ». L'équipe est à 80 % capacity sur le sprint goal.",
      scenarioEn:
        "Mid-sprint, legal director requires unplanned cookie consent feature before Tuesday inspection. PO refuses to add to sprint. Sponsor asks PM to 'decide fast.' Team is at 80% capacity on sprint goal.",
      problemFr: "Contrainte conformité + pression sprint + conflit PO/sponsor — décision intégrée requise.",
      problemEn: "Compliance constraint + sprint pressure + PO/sponsor conflict — integrated decision required.",
      bestActionFr:
        "OBSERVE/UNDERSTAND : conformité = contrainte ; COLLABORATE PO + juridique + sponsor ; ACT : scope swap ou replanification explicite priorisant consentement + protection sprint goal documentée — pas insertion silencieuse ni refus juridique.",
      bestActionEn:
        "OBSERVE/UNDERSTAND: compliance = constraint; COLLABORATE PO + legal + sponsor; ACT: scope swap or explicit replanning prioritizing consent + documented sprint goal protection — not silent insertion nor legal refusal.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr: "Meilleure action intégrée pour le PM ?",
      promptEn: "Best integrated action for the PM?",
      explanationCorrectFr: "Collaborer PO/juridique/sponsor et replanifier ou scope swap — conformité + sprint.",
      explanationCorrectEn: "Collaborate PO/legal/sponsor and replan or scope swap — compliance + sprint.",
      difficulty: 4,
      options: [
        opt("Ajouter silencieusement au sprint pour l'inspection", "Silently add to sprint for inspection", false),
        opt("Ignorer l'exigence juridique pour protéger le sprint goal", "Ignore legal requirement to protect sprint goal", false),
        opt("Faciliter replanification/scope swap avec PO, juridique et sponsor", "Facilitate replanning/scope swap with PO, legal, and sponsor", true),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Quel piège éliminer en premier sur cette vignette ?",
        promptEn: "Which trap to eliminate first on this vignette?",
        explanationCorrectFr: "Les options extrêmes (ignorer conformité ou sprint) — non professionnelles.",
        explanationCorrectEn: "Extreme options (ignore compliance or sprint) — unprofessional.",
        difficulty: 4,
        options: [
          opt("Options qui ignorent conformité ou sprint goal", "Options ignoring compliance or sprint goal", true),
          opt("Toute option impliquant le PO", "Any option involving the PO", false),
          opt("Toute option documentée", "Any documented option", false),
        ],
      }),
    ],
  }),
];
