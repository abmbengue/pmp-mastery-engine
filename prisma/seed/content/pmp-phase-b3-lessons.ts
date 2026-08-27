/**
 * Phase B.3 — new PLA lessons for ECO gaps (T01 vision, T07 knowledge transfer).
 * Instructor-condensed pedagogy — NOT PMI official wording / NOT exam bank items.
 */

import { buildPmpLesson, opt, q } from "./pmp-factory";
import type { PmpLesson } from "./pmp-types";

export const PMP_PHASE_B3_LESSONS: PmpLesson[] = [
  buildPmpLesson({
    slug: "shared-vision",
    titleFr: "Vision partagée",
    titleEn: "Shared Vision",
    descriptionFr:
      "Construire une image commune du succès avec les parties prenantes clés (ECO PEOPLE-T01).",
    descriptionEn:
      "Build a common picture of success with key stakeholders (ECO PEOPLE-T01).",
    moduleSlug: "people",
    sortOrder: 15,
    estimatedMinutes: 8,
    difficulty: "INTERMEDIATE",
    skillSlug: "leadership",
    learningObjective: "DECIDE",
    objectiveFr:
      "Décider quoi faire en premier quand sponsor et équipe n'ont pas la même vision du succès.",
    objectiveEn:
      "Decide what to do first when sponsor and team do not share the same success picture.",
    explanationFr:
      "PEOPLE-T01 : développer une vision commune. Une bonne vision résume le projet, décrit le meilleur résultat possible, crée une image partagée et inspire. Ne confondez pas livrable (ce qui est produit), résultat (ce qui change) et valeur (bénéfice perçu). La charte autorise le projet ; la vision aligne l'image du succès. Techniques : communication ouverte, leadership, product box, métaphore, discussion, négociation. Si mauvaise compréhension : impliquer les parties, approfondir, facteurs contributifs (5 Whys / Ishikawa), examiner les malentendus, soutenir le résultat convenu. Contenu pédagogique PLA — condensé instructeur Lesson 2 ; pas un texte officiel PMI.",
    explanationEn:
      "PEOPLE-T01: develop a common vision. A good vision summarizes the project, describes the best possible outcome, creates a shared picture, and inspires. Do not confuse deliverable (what is produced), outcome (what changes), and value (perceived benefit). The charter authorizes the project; vision aligns the success picture. Techniques: open communication, leadership, product box, metaphor, discussion, negotiation. If misunderstanding: involve parties, dig deeper, contributing factors (5 Whys / Ishikawa), examine misreadings, support the agreed outcome. PLA pedagogy — instructor Lesson 2 condensé; not official PMI text.",
    exampleFr:
      "Helios : le sponsor veut « moderniser le commerce » ; l'équipe entend « réécrire le POS ». Marie anime un atelier vision : image cible, non-buts, critères de réussite partagés.",
    exampleEn:
      "Helios: sponsor wants “modernize retail”; team hears “rewrite the POS.” Marie runs a vision workshop: target picture, non-goals, shared success criteria.",
    practicalFr:
      "En 4 lignes : vision (1), livrable (1), résultat (1), valeur (1) pour votre projet actuel.",
    practicalEn:
      "In 4 lines: vision (1), deliverable (1), outcome (1), value (1) for your current project.",
    mistakeFr:
      "Traiter la vision comme une liste de livrables ou confondre charte et vision.",
    mistakeEn:
      "Treating vision as a deliverable list or confusing charter with vision.",
    takeawayFr:
      "Vision partagée = image commune du succès avant d'accélérer l'exécution.",
    takeawayEn:
      "Shared vision = common success picture before accelerating execution.",
    decisionFr:
      "Attentes divergentes → atelier d'alignement avant d'ajouter du scope ou de la vitesse.",
    decisionEn:
      "Divergent expectations → alignment workshop before adding scope or speed.",
    flashcardFrontFr: "Livrable ≠ Résultat ≠ Valeur",
    flashcardFrontEn: "Deliverable ≠ Outcome ≠ Value",
    flashcardBackFr: "Produit / changement vécu / bénéfice perçu.",
    flashcardBackEn: "Produced / experienced change / perceived benefit.",
    exercisePromptFr:
      "Rédigez une vision Helios en une phrase qui inspire sans lister les écrans.",
    exercisePromptEn:
      "Write a one-sentence Helios vision that inspires without listing screens.",
    situation: {
      scenarioFr:
        "Sur Helios, le sponsor parle « expérience client unifiée » ; l'équipe livre des tickets POS. Les critères de réussite ne matchent pas.",
      scenarioEn:
        "On Helios, the sponsor says “unified customer experience”; the team ships POS tickets. Success criteria do not match.",
      problemFr: "Absence de vision partagée (PEOPLE-T01).",
      problemEn: "Missing shared vision (PEOPLE-T01).",
      bestActionFr:
        "Faciliter un atelier de vision avec parties clés : image cible, non-buts, critères de réussite.",
      bestActionEn:
        "Facilitate a vision workshop with key parties: target picture, non-goals, success criteria.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Sponsor et équipe Helios n'ont pas la même image du succès. Que faire EN PREMIER ?",
      promptEn:
        "Helios sponsor and team do not share the same success picture. What FIRST?",
      explanationCorrectFr:
        "Sans vision partagée, accélérer amplifie le désalignement — PEOPLE-T01 d'abord.",
      explanationCorrectEn:
        "Without shared vision, speeding up amplifies misalignment — PEOPLE-T01 first.",
      difficulty: 2,
      options: [
        opt(
          "Accélérer le backlog pour montrer du progrès",
          "Speed up the backlog to show progress",
          false,
          "Le progrès sur une mauvaise image aggrave le désalignement.",
          "Progress against the wrong picture worsens misalignment."
        ),
        opt(
          "Faciliter un atelier de vision partagée avec les parties clés",
          "Facilitate a shared-vision workshop with key parties",
          true
        ),
        opt(
          "Escalader immédiatement au comité sans clarification",
          "Escalate immediately to the steering committee without clarification",
          false,
          "Escalader sans image commune déplace le conflit, ne l'aligne pas.",
          "Escalating without a shared picture moves the conflict, does not align it."
        ),
        opt(
          "Geler tout le scope jusqu'à la fin du projet",
          "Freeze all scope until project end",
          false,
          "Le gel n'aligne pas la vision ; il bloque la valeur.",
          "Freeze does not align vision; it blocks value."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr:
          "Quelle distinction est la plus juste ?",
        promptEn: "Which distinction is most accurate?",
        explanationCorrectFr:
          "Livrable ≠ résultat ≠ valeur — critique pour PEOPLE-T01 et la valeur.",
        explanationCorrectEn:
          "Deliverable ≠ outcome ≠ value — critical for PEOPLE-T01 and value.",
        difficulty: 2,
        options: [
          opt(
            "Livrable = ce qui est produit ; résultat = ce qui change ; valeur = bénéfice perçu",
            "Deliverable = what is produced; outcome = what changes; value = perceived benefit",
            true
          ),
          opt(
            "Vision = liste détaillée des livrables WBS",
            "Vision = detailed WBS deliverable list",
            false,
            "La vision inspire ; le WBS décompose le travail.",
            "Vision inspires; WBS decomposes work."
          ),
          opt(
            "Charte et vision sont strictement synonymes",
            "Charter and vision are strict synonyms",
            false,
            "La charte autorise ; la vision aligne l'image du succès.",
            "Charter authorizes; vision aligns the success picture."
          ),
          opt(
            "La valeur se mesure uniquement au budget consommé",
            "Value is measured only by budget spent",
            false,
            "Le budget n'égale pas la valeur perçue.",
            "Budget spent is not perceived value."
          ),
        ],
      }),
    ],
  }),

  buildPmpLesson({
    slug: "knowledge-transfer",
    titleFr: "Transfert des connaissances",
    titleEn: "Knowledge Transfer",
    descriptionFr:
      "Préserver et faire circuler le savoir critique (ECO PEOPLE-T07) — distinct de la communication (T08).",
    descriptionEn:
      "Preserve and circulate critical know-how (ECO PEOPLE-T07) — distinct from communication (T08).",
    moduleSlug: "people",
    sortOrder: 16,
    estimatedMinutes: 9,
    difficulty: "INTERMEDIATE",
    skillSlug: "pmp-people",
    learningObjective: "DECIDE",
    objectiveFr:
      "Choisir une méthode de transfert adaptée au savoir tacite vs explicite avant le départ d'un expert.",
    objectiveEn:
      "Choose a transfer method fit for tacit vs explicit knowledge before an expert leaves.",
    explanationFr:
      "PEOPLE-T07 : assurer le transfert des connaissances. La connaissance est un actif. Explicite = codifiable (mots, images, chiffres). Tacite = expérience, savoir-faire, contexte — difficile à documenter seul. Niveaux : individu → projet → organisation. Collecter, analyser, partager, systématiser. Culture : formation, coaching, mentorat, communautés. Le tacite se transfère surtout par interaction, observation, coaching — pas uniquement par documentation. À la clôture : rétrospective, archive, lessons learned, repository, transfert client. DISTINCTION : T07 = faire circuler le SAVOIR pour la capacité ; T08 = faire circuler l'INFORMATION au bon moment/canal ; T04 = engagement. Contenu PLA — condensé instructeur Lesson 6 branche A.",
    explanationEn:
      "PEOPLE-T07: ensure knowledge transfer. Knowledge is an asset. Explicit = codifiable (words, images, numbers). Tacit = experience, know-how, context — hard to document alone. Levels: individual → project → organization. Collect, analyze, share, systematize. Culture: training, coaching, mentoring, communities. Tacit transfers mainly via interaction, observation, coaching — not documentation alone. At closure: retrospective, archive, lessons learned, repository, client handover. DISTINCTION: T07 = circulate KNOW-HOW for capability; T08 = circulate INFORMATION at right time/channel; T04 = engagement. PLA content — instructor Lesson 6 branch A condensé.",
    exampleFr:
      "Helios : expert GPS unique part dans 3 semaines. Marie organise pairing + capture des décisions critiques + atelier mentorat — pas seulement un wiki.",
    exampleEn:
      "Helios: sole GPS expert leaves in 3 weeks. Marie sets pairing + capture of critical decisions + mentoring workshop — not only a wiki.",
    practicalFr:
      "Listez 3 connaissances critiques de votre projet : tacite ou explicite ? Quelle méthode ?",
    practicalEn:
      "List 3 critical knowledge items on your project: tacit or explicit? Which method?",
    mistakeFr:
      "Croire que documenter = transfert, ou fusionner T07 avec T08/T04.",
    mistakeEn:
      "Believing documenting = transfer, or merging T07 with T08/T04.",
    takeawayFr:
      "T07 = capacité et savoir ; choisir la méthode selon tacite vs explicite.",
    takeawayEn:
      "T07 = capability and know-how; choose method by tacit vs explicit.",
    decisionFr:
      "Expert critique qui part → identifier le tacite, lancer pairing/coaching immédiatement.",
    decisionEn:
      "Critical expert leaving → identify tacit items, start pairing/coaching immediately.",
    flashcardFrontFr: "T07 vs T08",
    flashcardFrontEn: "T07 vs T08",
    flashcardBackFr: "Savoir/capacité vs information/canal.",
    flashcardBackEn: "Know-how/capability vs information/channel.",
    exercisePromptFr:
      "Proposez un plan 2 semaines de transfert pour un expert unique (tacite + explicite).",
    exercisePromptEn:
      "Propose a 2-week transfer plan for a sole expert (tacit + explicit).",
    situation: {
      scenarioFr:
        "L'expert unique Helios (intégration GPS) part dans 3 semaines. L'équipe demande « plus d'emails de statut ».",
      scenarioEn:
        "Helios sole GPS integration expert leaves in 3 weeks. The team asks for “more status emails.”",
      problemFr: "Risque de perte de capacité (T07) — plus de push info (T08) ne suffit pas.",
      problemEn: "Capability-loss risk (T07) — more info push (T08) is not enough.",
      bestActionFr:
        "Organiser pairing/coaching et capturer le savoir critique ; documenter l'explicite en soutien.",
      bestActionEn:
        "Set up pairing/coaching and capture critical know-how; document explicit knowledge as support.",
    },
    question: q({
      type: "SINGLE_CHOICE",
      promptFr:
        "Expert unique part bientôt. Quelle action sert le mieux PEOPLE-T07 ?",
      promptEn:
        "Sole expert leaving soon. Which action best serves PEOPLE-T07?",
      explanationCorrectFr:
        "T07 exige un transfert de capacité — pairing/coaching pour le tacite.",
      explanationCorrectEn:
        "T07 requires capability transfer — pairing/coaching for tacit knowledge.",
      difficulty: 2,
      options: [
        opt(
          "Augmenter la fréquence des emails de statut",
          "Increase status email frequency",
          false,
          "C'est plutôt T08 (information) — insuffisant pour le savoir tacite.",
          "That is closer to T08 (information) — insufficient for tacit know-how."
        ),
        opt(
          "Organiser pairing et capturer les connaissances critiques",
          "Organize pairing and capture critical knowledge",
          true
        ),
        opt(
          "Attendre la rétrospective de clôture uniquement",
          "Wait only for the closing retrospective",
          false,
          "Trop tard si l'expert est parti.",
          "Too late if the expert has left."
        ),
        opt(
          "Remplacer le transfert par plus de réunions d'engagement sponsor",
          "Replace transfer with more sponsor engagement meetings",
          false,
          "Engagement (T04) ≠ transfert de connaissances (T07).",
          "Engagement (T04) ≠ knowledge transfer (T07)."
        ),
      ],
    }),
    questions: [
      q({
        type: "SINGLE_CHOICE",
        promptFr: "Quelle affirmation distingue correctement T07 et T08 ?",
        promptEn: "Which statement correctly distinguishes T07 and T08?",
        explanationCorrectFr:
          "T07 = savoir/capacité ; T08 = information appropriée, canal, moment.",
        explanationCorrectEn:
          "T07 = know-how/capability; T08 = right information, channel, timing.",
        difficulty: 2,
        options: [
          opt(
            "T07 fait circuler le savoir pour la capacité ; T08 fait circuler l'information au bon canal/moment",
            "T07 circulates know-how for capability; T08 circulates information via the right channel/timing",
            true
          ),
          opt(
            "T07 et T08 sont la même tâche ECO sous deux noms",
            "T07 and T08 are the same ECO task under two names",
            false,
            "Ce sont deux tâches People distinctes (PE-07 / PE-08).",
            "They are two distinct People tasks (PE-07 / PE-08)."
          ),
          opt(
            "T08 remplace T07 dès qu'un wiki existe",
            "T08 replaces T07 once a wiki exists",
            false,
            "Un wiki aide l'explicite ; le tacite reste un enjeu T07.",
            "A wiki helps explicit knowledge; tacit remains a T07 concern."
          ),
          opt(
            "T07 = uniquement l'engagement des parties prenantes",
            "T07 = stakeholder engagement only",
            false,
            "L'engagement est T04, pas T07.",
            "Engagement is T04, not T07."
          ),
        ],
      }),
    ],
  }),
];

export const PMP_PHASE_B3_LESSON_SLUGS = PMP_PHASE_B3_LESSONS.map((l) => l.slug);
