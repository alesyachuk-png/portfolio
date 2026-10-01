import type { Dictionary } from "./types";

export const fr: Dictionary = {
  meta: {
    siteTitle: "Alesia Korenchuk, Product Designer & Design Lead",
    siteDescription:
      "Product Designer et Design Lead basée à Bordeaux, spécialisée en SaaS B2B, analytics, produits IA, interfaces riches en données et design systems évolutifs.",
    ogAlt: "Alesia Korenchuk, Product Designer & Design Lead",
  },
  nav: {
    work: "Projets",
    about: "À propos",
    resume: "CV",
    linkedin: "LinkedIn",
    skipToContent: "Aller au contenu",
  },
  footer: {
    role: "Product Designer & Design Lead",
    location: "Bordeaux, France",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    closingLine: "Conçu avec clarté. Construit avec curiosité.",
  },
  common: {
    opensInNewTab: "(ouvre un nouvel onglet)",
    viewCaseStudy: "Voir l'étude de cas",
    backToWork: "Retour aux projets",
    nextProject: "Projet suivant",
    roleLabel: "Rôle",
    productLabel: "Produit",
    platformLabel: "Plateforme",
    focusLabel: "Focus",
    collaborationLabel: "Collaboration",
    contributionLabel: "Contribution",
    confidentialityNote:
      "Certains éléments de travail ont été simplifiés ou recréés pour cette étude de cas afin de protéger des informations produit confidentielles.",
    addScreenshot: "[Ajouter une capture d'écran]",
    addMetric: "[Ajouter une métrique]",
    finalExperienceHeading: "Expérience finale",
    finalExperienceIntro:
      "De vraies captures d'écran, une fois validées, remplaceront ces espaces réservés. En attendant, chaque emplacement indique précisément ce qui est attendu.",
  },
  home: {
    hero: {
      eyebrow: "Product Designer & Design Lead",
      name: "Alesia Korenchuk",
      role: "Product Designer & Design Lead",
      headline: "Je conçois des produits complexes qui rendent les workflows difficiles simples.",
      supporting:
        "Product Designer et Design Lead, spécialisée en SaaS B2B, analytics, produits propulsés par l'IA, interfaces riches en données et design systems évolutifs.",
      ctaPrimary: "Voir mes projets",
      ctaSecondary: "À propos de moi",
      imageAlt: "Portrait d'Alesia Korenchuk",
    },
    work: {
      heading: "Projets sélectionnés",
      intro:
        "Un aperçu de ma façon d'aborder des problèmes produit complexes et riches en données, du cadrage jusqu'à l'expérience livrée.",
      viewCaseStudy: "Voir l'étude de cas →",
      featuredLabel: "Étude de cas phare",
      projects: [
        {
          slug: "sprint-performance",
          featured: true,
          title: "Sprint Performance Report",
          category: "SaaS B2B · Analytics · Jira",
          description:
            "Aider les équipes de delivery à transformer des données de sprint fragmentées en une vue claire de la performance, de la charge, du taux de complétion et des changements de périmètre.",
          image: "/images/case-studies/sprint-performance-report.png",
          imageAlt: "Tableau de bord Sprint Performance Report montrant le burndown, la répartition de la charge et le taux de complétion",
        },
        {
          slug: "sla-management",
          title: "Gestion et reporting des SLA",
          category: "SaaS B2B · Workflows complexes · Reporting",
          description:
            "Simplifier une logique SLA complexe à travers la configuration, les états du cycle de vie et le reporting historique.",
          image: "/images/case-studies/sla-management.png",
          imageAlt: "Interface de gestion des SLA montrant des tickets filtrés avec les délais de réponse et de résolution",
        },
        {
          slug: "replicoo",
          title: "Replicoo",
          category: "IA · Santé · Produit 0→1",
          description:
            "Concevoir un produit de santé propulsé par l'IA qui réunit dossiers médicaux, données de santé et accompagnement par l'IA dans une expérience claire.",
          image: "/images/case-studies/replicoo-hero.png",
          imageAlt: "Carte de dossier médical Replicoo montrant l'historique d'activité, les documents, les indicateurs de santé et les médicaments",
        },
        {
          slug: "twish",
          title: "Twish",
          category: "Produit personnel · B2C · Zero to One",
          description:
            "J'ai conçu et développé Twish de A à Z, en portant l'intégralité du parcours produit : recherche utilisateur, stratégie produit, UX/UI, développement assisté par IA, lancement, analytics et itération.",
          image: "/images/case-studies/twish-home-hero.png",
          imageAlt: "Page d'accueil Twish avec le titre « Wish it. Twish it. » et une liste de souhaits universelle réunissant des produits de différentes boutiques",
        },
      ],
    },
    howIWork: {
      heading: "De l'ambiguïté à des résultats produit mesurables.",
      intro:
        "Le design produit avance rarement en ligne droite. Voici les étapes que je traverse sur des problèmes complexes, souvent plusieurs fois.",
      loopNote:
        "En pratique, ces étapes se chevauchent et reviennent en arrière. Une information découverte à l'étape six peut renvoyer un projet à l'étape deux. C'est normal quand on conçoit pour la complexité, pas un échec de process.",
      stages: [
        {
          number: "01",
          title: "Comprendre",
          items: [
            "Problème produit",
            "Contexte business",
            "Comportement existant",
            "Données produit disponibles",
            "Besoins utilisateurs",
            "Contraintes",
          ],
        },
        {
          number: "02",
          title: "Cadrer",
          items: [
            "Jobs to be Done",
            "Questions clés",
            "Hypothèse produit",
            "Critères de succès",
            "Limites techniques",
          ],
        },
        {
          number: "03",
          title: "Définir",
          items: ["Périmètre", "MVP", "Architecture de l'information", "Parcours utilisateur", "Priorités"],
        },
        {
          number: "04",
          title: "Explorer",
          items: [
            "Approches possibles",
            "Structure UX",
            "Présentation des données",
            "Patterns d'interaction",
            "Directions de design",
          ],
        },
        {
          number: "05",
          title: "Aligner & valider",
          items: [
            "Revue produit",
            "Faisabilité technique",
            "Alignement des parties prenantes",
            "Arbitrages",
            "Itération",
          ],
        },
        {
          number: "06",
          title: "Concevoir & livrer",
          items: [
            "UX/UI final",
            "Design system",
            "États",
            "Cas limites",
            "Collaboration avec les développeurs",
          ],
        },
        {
          number: "07",
          title: "Déployer & vérifier",
          items: ["Développement", "Design QA", "Environnement de test", "Validation en production"],
        },
        {
          number: "08",
          title: "Mesurer & itérer",
          items: ["Analytics produit", "Adoption", "Comportement utilisateur", "Friction", "Nouvelles opportunités"],
        },
      ],
    },
    leadership: {
      heading: "Concevoir des produits. Construire le système qui les entoure.",
      supporting:
        "En parallèle du design produit opérationnel, j'aide à définir comment le design fonctionne, évolue et délivre des expériences cohérentes à travers un portefeuille de produits.",
      areas: [
        {
          title: "Design system & scalabilité",
          description:
            "Je pilote l'évolution d'un design system partagé entre plusieurs produits, pas seulement en maintenant une librairie, mais en identifiant activement les besoins produit et en initiant la création et l'évolution de composants réutilisables.",
          points: [
            "Identifier les patterns produit récurrents",
            "Repérer les besoins UX/UI répétés entre applications",
            "Initier de nouveaux composants partagés",
            "Définir le comportement, les états et la logique d'interaction des composants",
            "Définir les principes d'usage et maintenir la cohérence",
            "Collaborer avec les développeurs sur l'implémentation",
            "Réduire les efforts de design et de développement dupliqués",
            "S'assurer que les composants s'adaptent à différents contextes produit",
          ],
        },
        {
          title: "Qualité & cohérence du design",
          description:
            "J'aide à définir et maintenir un haut niveau d'exigence de design à travers les produits.",
          points: [
            "Revues UX",
            "Cohérence UI",
            "Patterns d'interaction",
            "Cohérence des composants",
            "Accessibilité",
            "États et cas limites",
            "Design QA",
            "Cohérence inter-produits",
          ],
        },
        {
          title: "Direction produit & design",
          description:
            "J'aide les designers et les équipes produit à structurer des problèmes complexes avant de passer à l'UI.",
          points: [
            "Cadrage du problème",
            "Remise en question des hypothèses",
            "Identification des besoins utilisateurs",
            "Évaluation des solutions possibles",
            "Définition des parcours et clarification du périmètre",
            "Lien entre décisions UX et objectifs produit/business",
            "Aide aux arbitrages d'équipe",
          ],
        },
        {
          title: "Développement de l'équipe",
          description:
            "J'accompagne la montée en compétence des designers en les aidant à prendre des décisions produit plus fortes de façon autonome, pas en supervisant chaque détail de leur travail.",
          points: [
            "Revues de design",
            "Feedback constructif",
            "Mentorat",
            "Partage de connaissances",
            "Discussions UX et product thinking",
            "Aide à la prise de décision",
            "Revues de qualité",
          ],
        },
        {
          title: "Design operations",
          description: "Je travaille à améliorer le fonctionnement de la fonction design.",
          points: [
            "Processus et documentation de design",
            "Workflows produit-design",
            "Accords d'équipe et templates",
            "Processus de handoff",
            "Pratiques de revue de design",
            "Collaboration entre Produit, Design et Engineering",
            "Une ownership plus claire, moins de travail superflu",
          ],
        },
        {
          title: "KPIs & impact du design",
          description:
            "Je contribue à définir des façons de mesurer l'impact produit et design en construisant des cadres de mesure et en utilisant les analytics produit disponibles pour évaluer les décisions, plutôt qu'en inventant des chiffres.",
          points: [
            "Adoption produit",
            "Usage des fonctionnalités",
            "Friction",
            "Comportement utilisateur",
            "Qualité UX",
            "Efficacité du design",
            "Efficacité de l'équipe",
            "Qualité de livraison",
          ],
        },
      ],
    },
    beyond: {
      heading: "Au-delà de l'écran",
      intro:
        "Le design produit n'est qu'une partie de mon rôle. Je travaille aussi sur les systèmes, les processus et les standards qui permettent au design de s'adapter à l'échelle.",
      items: [
        { title: "Produits", description: "Workflows et expériences complexes" },
        { title: "Systèmes", description: "Composants et cohérence du design" },
        { title: "Personnes", description: "Feedback, mentorat et direction design" },
        { title: "Impact", description: "Analytics, KPIs et résultats produit" },
      ],
    },
    designSystem: {
      eyebrow: "Design system",
      heading: "Je ne conçois pas que des écrans. Je crée des systèmes qui font grandir les produits.",
      supporting:
        "Travailler sur plusieurs produits signifie que les mêmes problèmes UX complexes apparaissent souvent dans des contextes différents. Une partie de mon rôle consiste à identifier ces récurrences, à définir leur comportement et leur logique, et à les transformer en solutions réutilisables capables de s'adapter à différents produits.",
      patterns: {
        heading: "Des patterns réutilisables pour des problèmes produit complexes",
        intro:
          "Les éléments les plus précieux d'un design system ne sont pas toujours des composants UI isolés. Je me concentre sur des problèmes produit récurrents où la logique d'interaction, les états, la configuration et le comportement des données doivent rester cohérents à travers différentes applications.",
        feedback: {
          title: "Système de feedback",
          description: [
            "Un pattern de feedback réutilisable conçu pour capter la satisfaction utilisateur à différents moments de l'expérience produit.",
            "Le pattern peut rester visible en permanence dans une interface ou se déclencher après une action spécifique de l'utilisateur.",
            "Les réponses de feedback et les raisons sélectionnées peuvent être connectées aux analytics produit, permettant aux équipes de suivre la satisfaction, d'identifier les frictions récurrentes et d'utiliser ces informations pour orienter les évolutions produit.",
          ],
          flow: ["Interaction utilisateur", "Feedback", "Raison", "Analytics", "Insight produit", "Itération"],
          note: "Pas seulement un composant UI de feedback. Il crée une boucle de feedback produit mesurable.",
        },
        filtering: {
          title: "Filtrage avancé",
          description: [
            "Un modèle de filtrage réutilisable conçu pour prendre en charge différents niveaux de complexité de requête au sein d'une expérience cohérente.",
            "Le défi est de garder différents modèles de filtrage compréhensibles au sein d'un même pattern d'interaction, tout en permettant à chaque produit de configurer les champs, la logique et les options dont il a besoin.",
          ],
          emphasis: [
            "Configuration flexible",
            "Logique de filtrage complexe",
            "Cohérence",
            "Scalabilité",
            "Différents niveaux d'expertise utilisateur",
          ],
          convergeItems: ["Basic", "JQL", "Filtres Jira"],
          convergeTarget: "Un système de filtrage partagé",
        },
        dateRange: {
          title: "Sélection de plage de dates flexible",
          description: [
            "Un pattern de sélection de dates configurable, conçu autour des besoins de reporting et d'analytics partagés entre plusieurs applications.",
            "L'objectif est de centraliser une logique de dates complexe tout en permettant à chaque produit d'exposer uniquement les options pertinentes pour son usage.",
          ],
          groups: [
            {
              title: "Plages prédéfinies",
              items: [
                "Aujourd'hui",
                "Hier",
                "Cette semaine",
                "Ce mois-ci",
                "Cette année",
                "X derniers jours",
                "X dernières semaines",
                "X derniers mois",
                "X dernières années",
              ],
            },
            { title: "Saisie personnalisée", items: ["Plages de dates personnalisées", "Saisie manuelle de date"] },
            { title: "Suggestions contextuelles", items: ["Suggestions de dates contextuelles"] },
          ],
          note: "Ici, la configurabilité compte davantage que l'apparence visuelle.",
        },
        scheduling: {
          title: "Planification de rapports",
          description: [
            "Un pattern de planification réutilisable pour configurer l'envoi automatisé de rapports.",
            "Le défi de design consiste à traduire une logique de planification complexe en une expérience de configuration prévisible, tout en prenant en charge différentes règles de récurrence, fuseaux horaires et scénarios de livraison.",
          ],
          considerations: [
            "Destinataires",
            "Récurrence",
            "Fréquence",
            "Jour de la semaine",
            "Heure",
            "Fuseau horaire",
            "Date de début",
            "Prochaine exécution",
            "Prochaines occurrences programmées",
            "États activé et désactivé",
          ],
          timeline: { past: "Occurrences passées", next: "Prochaine occurrence", upcoming: "À venir" },
        },
        permissions: {
          title: "Permissions et accès",
          description: [
            "Un pattern d'accès réutilisable conçu pour indiquer qui peut accéder à des zones spécifiques du produit, et à quel niveau.",
            "L'objectif est de rendre des règles d'accès complexes faciles à comprendre en un coup d'œil, tout en gardant un modèle sous-jacent assez flexible pour différents contextes produit.",
          ],
          scopes: ["Organisation", "Équipes", "Groupes", "Utilisateurs sélectionnés"],
          convergeTarget: "Un modèle d'accès partagé",
          accessStates: ["Accès autorisé", "Accès restreint"],
        },
      },
      principles: {
        heading: "Plus qu'une bibliothèque de composants",
        items: [
          {
            eyebrow: "Logique réutilisable",
            headline: "Concevoir le comportement, pas seulement l'apparence.",
            body: "Les systèmes réutilisables demandent plus qu'une cohérence visuelle. Je définis le comportement d'interaction, les états, la validation, les dépendances, les cas limites et la logique de configuration pour qu'un pattern fonctionne au-delà d'un seul écran.",
          },
          {
            eyebrow: "Configurabilité",
            headline: "Une base commune, des besoins produit différents.",
            body: "Les patterns partagés sont pensés pour être configurables. Chaque produit peut s'appuyer sur la même base tout en adaptant les champs, options, sources de données et logique métier à son propre contexte.",
          },
          {
            eyebrow: "Design + Engineering",
            headline: "Pensé pour être développé et réutilisé.",
            body: "Je collabore avec l'engineering dès la définition des patterns partagés, pour que la solution soit non seulement cohérente visuellement, mais aussi réaliste techniquement, maintenable et réutilisable.",
          },
          {
            eyebrow: "Évolution",
            headline: "Un design system n'est jamais terminé.",
            body: "De nouveaux besoins produit font émerger de nouveaux états, cas limites et patterns. Je considère le système comme un produit évolutif qui grandit avec l'usage réel, plutôt que comme une bibliothèque figée.",
          },
        ],
      },
      process: {
        heading: "Comment un pattern partagé devient partie du système",
        stages: [
          {
            number: "01",
            title: "Identifier",
            subtitle: "Besoin produit récurrent",
            body: "Repérer un problème UX ou un pattern d'interaction qui apparaît dans différents contextes produit.",
          },
          {
            number: "02",
            title: "Définir",
            subtitle: "Comportement, logique et flexibilité",
            body: "Définir le comportement d'interaction, les états, les cas limites, la personnalisation, les besoins en données et les principes d'usage.",
          },
          {
            number: "03",
            title: "Valider et construire",
            subtitle: "Design + Engineering",
            body: "Valider l'approche avec le contexte produit et technique, puis collaborer avec l'engineering sur l'implémentation.",
          },
          {
            number: "04",
            title: "Étendre",
            subtitle: "Réutiliser, apprendre et faire évoluer",
            body: "Introduire le pattern dans différents produits, observer les nouveaux besoins, et faire évoluer la solution partagée si nécessaire.",
          },
        ],
      },
      impact: {
        heading: "Pourquoi c'est important",
        items: [
          { title: "Cohérence", body: "Les utilisateurs retrouvent des patterns familiers d'un produit à l'autre." },
          {
            title: "Rapidité",
            body: "Les équipes design et engineering évitent de résoudre plusieurs fois le même problème d'interaction.",
          },
          {
            title: "Qualité",
            body: "Les états, cas limites et comportements sont pensés de façon systématique plutôt qu'au cas par cas.",
          },
          {
            title: "Scalabilité",
            body: "Les nouveaux produits et fonctionnalités s'appuient sur des bases éprouvées tout en s'adaptant à leurs propres besoins.",
          },
        ],
      },
      closing:
        "L'objectif n'est pas de faire en sorte que chaque produit se ressemble. C'est de créer une base commune qui permet aux équipes de résoudre des problèmes complexes de façon cohérente, sans brider les besoins propres à chaque produit.",
      confidentialityNote:
        "Certains éléments de travail et détails d'implémentation sont volontairement simplifiés pour protéger des informations produit confidentielles.",
    },
    ai: {
      heading: "IA & pratique du design",
      supporting:
        "J'explore comment l'IA peut renforcer, et non remplacer, le jugement humain à chaque étape du design.",
      items: [
        "Découverte produit et exploration d'idées",
        "Documentation",
        "UX writing",
        "Synthèse de recherche",
        "Prototypage",
        "Tâches de design répétitives",
        "Automatisation de workflows",
        "Efficacité d'équipe",
      ],
      closing:
        "L'IA est un outil que j'utilise pour avancer plus vite sur l'exploration et les tâches répétitives, afin de consacrer plus de temps au jugement, au cadrage et aux décisions qui demandent vraiment un regard humain.",
    },
    finalCta: {
      heading: "Parlons de ce que vous construisez.",
      supporting:
        "Ouverte aux postes de Senior Product Designer, Lead Product Designer, Design Lead et Product Design Manager.",
      ctaPrimary: "Voir mes projets",
      ctaSecondary: "Me contacter",
    },
  },
  about: {
    eyebrow: "À propos",
    headline: "Je conçois de la clarté dans des produits complexes.",
    paragraphs: [
      "Je suis Product Designer et Design Lead, basée à Bordeaux.",
      "Je travaille sur des produits numériques où données, workflows, contraintes techniques et logique métier doivent devenir des expériences claires et utilisables.",
      "Mon travail associe design produit opérationnel, leadership design, réflexion systémique, analytics et collaboration étroite avec le Produit et l'Engineering.",
      "J'aime résoudre des problèmes qui demandent plus qu'une interface soignée, comprendre pourquoi quelque chose doit exister, comment cela doit fonctionner, comment cela peut évoluer à l'échelle, et comment savoir si cela a fonctionné.",
    ],
    highlightsTitle: "En bref",
    highlights: [
      "6+ ans en Product Design",
      "SaaS B2B & plateformes complexes",
      "Leadership design",
      "Design systems",
      "Analytics produit",
      "Design produit assisté par l'IA",
    ],
    locationTitle: "Localisation",
    location: "Bordeaux, France",
    languagesTitle: "Langues",
    languages: [
      { name: "Anglais", level: "B2" },
      { name: "Français", level: "B2" },
      { name: "Ukrainien", level: "C2" },
      { name: "Russe", level: "C2" },
    ],
    imageAlt: "Portrait d'Alesia Korenchuk",
  },
  resume: {
    eyebrow: "CV",
    headline: "Mon expérience, en un coup d'œil.",
    intro:
      "Un aperçu concis de mon expérience, ma formation et mon expertise en product design. Téléchargez mon CV pour l'historique professionnel complet.",
    downloadCta: "Télécharger le CV",
    experience: {
      title: "Expérience",
      years: "Plus de 6 ans en Product Design",
      scope: "SaaS B2B · Écosystème Atlassian · B2C",
      body: [
        "Actuellement Lead Product Designer / Design Lead, je conçois des produits complexes autour de l'analytics, du reporting, des workflows, de la configuration et des expériences riches en données.",
        "Mon travail couvre l'ensemble du cycle de vie produit, du cadrage du problème et de l'exploration jusqu'à la livraison et au Design QA.",
        "J'accompagne et mentore aussi des designers, en étroite collaboration avec le Produit, l'Engineering et la QA.",
      ],
    },
    education: {
      title: "Formation",
      degrees: [
        { degree: "Master en droit", institution: "Yaroslav Mudryi National Law University" },
        {
          degree: "Master en comptabilité et audit",
          institution: "National Technical University « Kharkiv Polytechnic Institute »",
        },
      ],
      additionalLabel: "Formation complémentaire",
      additional: { title: "Design UI/UX", institution: "IT Leaders DataArt · Design Kitchen" },
    },
    skills: {
      title: "Compétences & outils",
      groups: [
        {
          title: "Product design",
          items: [
            "Découverte produit",
            "Cadrage du problème",
            "Workflows complexes",
            "Architecture de l'information",
            "UX orientée données & reporting",
            "Design systems",
            "Product analytics",
            "Design QA",
            "Accessibilité",
          ],
        },
        {
          title: "IA & prototypage",
          items: ["Product design assisté par l'IA", "Prototypage rapide", "Claude Code", "ChatGPT"],
        },
        {
          title: "Outils",
          items: ["Figma", "Jira", "Confluence", "Adobe Illustrator", "Photoshop"],
        },
      ],
    },
  },
  sprint: {
    meta: {
      eyebrow: "Étude de cas",
      title: "Sprint Performance Report",
      category: "SaaS B2B · Product Design · Analytics · Jira",
      headline: "Transformer des données de sprint Jira fragmentées en une histoire de performance claire.",
      intro:
        "Sprint Performance Report réunit le contexte du sprint, la vélocité, la charge de travail, la complétion, les priorités et les changements de périmètre dans une vue structurée unique, pour aider les équipes à comprendre ce qui s'est passé pendant un sprint terminé, et pourquoi.",
      heroImageAlt:
        "Tableau de bord Sprint Performance Report montrant la vue d'ensemble du sprint, Team Velocity, Workload, Completion rate, Committed et Completed, et Scope change, avec un aperçu du Burndown",
    },
    metaRow: {
      role: "Lead Product Designer",
      product: "Time in Status for Jira",
      platform: "Jira Cloud",
      focus: "Découverte produit · UX orientée données · Reporting · Design system · Design QA",
      collaboration: "Produit · Engineering · QA · Design",
    },
    context: {
      heading: "Contexte",
      body: [
        "Sprint Performance Report est une analyse de sprint visuelle et en lecture seule, intégrée à l'application Time in Status pour Jira.",
        "Il fonctionne avec les tableaux Jira activés pour les sprints et utilise la méthode d'estimation déjà en place sur le tableau, comme les Story Points, le nombre de tickets ou le temps estimé initial.",
        "Plutôt que d'exiger des équipes qu'elles combinent manuellement plusieurs vues Jira, le rapport réunit contexte, exécution, charge de travail, priorités, changements de périmètre et résultats dans une expérience structurée unique.",
      ],
    },
    problem: {
      heading: "Les équipes avaient les données. Pas la réponse.",
      intro: [
        "L'information de sprint existait dans Jira, mais comprendre le résultat complet d'un sprint demandait aux utilisateurs de relier eux-mêmes différents signaux.",
        "Le défi de design n'était pas d'ajouter plus de données. Il était de transformer une information de sprint fragmentée en une histoire cohérente, capable de soutenir la planification, les revues et les rétrospectives.",
      ],
      questions: [
        "Qu'avions-nous engagé ?",
        "Qu'est-ce qui a réellement été complété ?",
        "La charge de travail était-elle équilibrée ?",
        "Quelle part du travail est restée incomplète ou reportée ?",
        "Le périmètre du sprint a-t-il changé ?",
        "Les éléments les plus prioritaires ont-ils été livrés ?",
        "La vélocité était-elle stable sur les sprints récents ?",
        "Qu'est-ce qui a influencé le résultat final du sprint ?",
      ],
    },
    whyItMattered: {
      heading: "Pourquoi c'était important",
      userValueLabel: "Valeur pour l'utilisateur",
      userValue:
        "Aider les équipes projet et delivery à comprendre la performance d'un sprint plus rapidement, à identifier les déséquilibres et les changements de périmètre, et à s'appuyer sur des faits plutôt que de combiner manuellement les données Jira.",
      productValueLabel: "Valeur pour le produit",
      productValue:
        "Renforcer la valeur de reporting de Time in Status en transformant des données de sprint brutes en une analyse plus actionnable.",
    },
    needed: {
      heading: "Ce que le rapport devait rendre clair",
      groups: [
        {
          title: "Planification",
          items: ["Avons-nous engagé une charge de travail réaliste ?", "La vélocité de l'équipe est-elle stable ?"],
        },
        {
          title: "Exécution",
          items: ["Comment le travail était-il réparti dans l'équipe ?", "La charge de travail a-t-elle changé pendant le sprint ?"],
        },
        {
          title: "Complétion",
          items: ["Quelle part du travail engagé a été complétée ?", "Qu'est-ce qui est resté incomplet ?", "Qu'est-ce qui a été reporté ?"],
        },
        {
          title: "Périmètre",
          items: ["Combien de travail a été ajouté ou retiré pendant le sprint ?", "Le changement de périmètre a-t-il affecté la livraison ?"],
        },
        {
          title: "Priorités",
          items: ["L'équipe a-t-elle complété le travail qui comptait le plus ?"],
        },
      ],
    },
    currentExperience: {
      heading: "Le parcours fragmenté",
      steps: [
        "Besoin d'évaluer un sprint",
        "Revoir les tickets du sprint",
        "Comparer le travail complété et non complété",
        "Vérifier la charge de travail",
        "Revoir les changements de périmètre",
        "Comparer les priorités",
        "Interpréter le résultat manuellement",
      ],
      callout: "Une question simple demandait plusieurs vérifications déconnectées : « Comment notre sprint s'est-il réellement déroulé ? »",
      note: "Certaines visualisations de processus ont été simplifiées pour cette étude de cas afin de protéger des éléments de travail internes.",
    },
    discovery: {
      heading: "Cadrer le problème",
      items: [
        {
          title: "Données produit",
          body: "Les analytics produit existants et les tendances d'usage ont aidé à situer le comportement de reporting et l'interaction avec le produit.",
        },
        {
          title: "Connaissance produit et métier",
          body: "Les workflows Jira existants, le comportement de reporting, la connaissance des fonctionnalités, le contexte support et les retours produit ont nourri le cadrage du problème.",
        },
        {
          title: "Contexte technique",
          body: "La solution devait fonctionner avec les structures de données Jira, les méthodes d'estimation disponibles, l'architecture produit existante, les composants réutilisables et la faisabilité technique.",
        },
      ],
      competitiveIntro: "Une revue légère de produits de reporting comparables a porté sur :",
      competitiveItems: [
        "Structure du reporting",
        "Hiérarchie des métriques",
        "Data visualization",
        "Drill-down",
        "Comparaison historique",
        "Présentation de la charge de travail",
      ],
    },
    users: {
      heading: "Utilisateurs principaux",
      primary: {
        role: "Chef de projet",
        need: "Comprendre si le sprint s'est déroulé comme prévu et ce qui a influencé le résultat.",
      },
      secondary: {
        role: "Engineering / Delivery Manager",
        need: "Comprendre la prévisibilité de la livraison, la répartition de la charge de travail, la complétion et la stabilité du périmètre.",
      },
      jtbdLabel: "Job to be done",
      jtbd:
        "Quand un sprint se termine, je veux rapidement comprendre ce qui s'est passé et pourquoi, afin d'améliorer la planification et le prochain sprint.",
    },
    hypothesis: {
      heading: "Hypothèse produit",
      statement:
        "Si le contexte du sprint, la vélocité, la charge de travail, la complétion, les priorités et les changements de périmètre sont réunis dans un rapport structuré, les équipes peuvent comprendre ce qui s'est passé pendant le sprint sans combiner manuellement plusieurs vues Jira.",
    },
    mvp: {
      heading: "Définir la première version utile",
      intro:
        "Le défi n'était pas de montrer chaque métrique de sprint disponible. Il était d'identifier les signaux capables, ensemble, d'expliquer le résultat du sprint.",
      areas: ["Informations du sprint", "Team Velocity", "Workload", "Completion rate", "Committed", "Completed", "Scope change"],
      target: "Sprint Performance Report",
    },
    hierarchy: {
      heading: "Des métriques à une histoire de sprint",
      intro:
        "Toutes les métriques ne devaient pas se disputer la même attention. Le rapport devait aller du contexte à la performance, puis vers les signaux qui expliquent le résultat.",
      steps: [
        "Contexte du sprint",
        "Vélocité et tendance de livraison",
        "Charge de travail et complétion",
        "Répartition par priorité",
        "Changement de périmètre",
        "Résultat du sprint",
      ],
      note: "Cette hiérarchie est une reconstitution propre à ce portfolio de la réflexion derrière la mise en page, et non un artefact de design interne original.",
    },
    deliveryTrends: {
      heading: "Tendances de livraison",
      intro:
        "Deux vues complémentaires aident les équipes à comprendre la livraison sous différents angles. Team Velocity montre les tendances sur les sprints terminés, tandis que Burndown montre comment le travail restant a évolué pendant le sprint sélectionné.",
      velocity: {
        title: "Team Velocity",
        body: "Montre le travail engagé face au travail complété sur les sprints terminés récents, et donne du contexte grâce à la vélocité moyenne.",
        points: [
          "Committed représente le travail planifié au début du sprint.",
          "Completed représente le travail ayant atteint le statut final du tableau avant la fin du sprint.",
          "La vélocité moyenne s'appuie sur le travail complété au cours des sept derniers sprints terminés.",
        ],
        imageAlt: "Graphique Team Velocity comparant les story points engagés et complétés sur sept sprints récents",
      },
      burndown: {
        title: "Burndown chart",
        body: "Montre comment le travail restant évolue pendant le sprint sélectionné, et aide les équipes à comprendre comment l'exécution suit la trajectoire attendue.",
        imageAlt: "Burndown chart montrant les story points restants par rapport à la trajectoire de référence sur le sprint",
      },
    },
    execution: {
      heading: "Exécution et périmètre",
      intro:
        "Un examen plus précis de la façon dont le contexte du sprint, la charge de travail, la complétion, les priorités et les changements de périmètre s'assemblent pour expliquer le résultat final.",
      imageAlt:
        "Cartes Sprint Performance Report montrant les informations du sprint, Workload, Completion rate, Committed, Completed et Scope change",
    },
    signals: {
      heading: "Ce que révèle chaque signal",
      items: [
        {
          title: "Informations du sprint",
          body: "Apporte le contexte du sprint : nom, période, objectifs, tickets signalés, temps enregistré, temps par statut et structure des tickets.",
        },
        {
          title: "Workload",
          body: "Montre comment le travail est réparti entre les assignés et aide à faire apparaître les déséquilibres ou les changements en cours de sprint.",
        },
        {
          title: "Completion rate",
          body: "Montre la part du travail engagé qui a été terminée et donne du contexte sur le travail incomplet et les reports.",
        },
        {
          title: "Committed & Completed",
          body: "Montrent comment le travail planifié et le travail livré se répartissent par priorité.",
        },
        {
          title: "Scope change",
          body: "Montre le travail ajouté et retiré pendant le sprint et donne de la visibilité sur la stabilité du périmètre.",
        },
      ],
    },
    principles: {
      heading: "Concevoir pour la compréhension, pas seulement pour la donnée",
      items: [
        {
          title: "Prioriser l'histoire",
          body: "Guider les utilisateurs du contexte du sprint vers le résultat, plutôt que de donner le même poids à chaque métrique.",
        },
        {
          title: "Garder les signaux liés ensemble",
          body: "Placer des métriques comme l'engagement, la complétion, la charge de travail et le périmètre dans une structure qui facilite la comparaison.",
        },
        {
          title: "Réduire l'effort d'interprétation",
          body: "Utiliser des visualisations là où les tendances ou la répartition comptent, et des valeurs claires là où la précision compte davantage.",
        },
        {
          title: "Concevoir pour la réutilisation",
          body: "Utiliser des patterns et des composants partagés capables de s'étendre à d'autres expériences de reporting.",
        },
      ],
    },
    designSystem: {
      heading: "Design system et scalabilité",
      body: "Le rapport a été conçu avec des patterns réutilisables, capables de servir d'autres expériences de reporting à travers le portefeuille produit.",
      patterns: ["Cartes", "Graphiques", "Filtres", "Patterns de statut", "Tableaux", "États vides", "États de chargement", "États d'erreur"],
      visualNote: "Visualisation simplifiée propre à ce portfolio, et non un artefact Figma original.",
    },
    collaboration: {
      heading: "Collaboration produit et engineering",
      steps: [
        "Cadrage du problème",
        "Alignement produit",
        "Exploration de design",
        "Validation technique",
        "Itération",
        "Développement",
        "Design QA",
        "Environnement de test",
        "Production",
      ],
      body: "La collaboration avec l'engineering faisait partie du processus de design, plutôt qu'une étape de handoff final. La faisabilité technique, les contraintes d'implémentation et les patterns produit existants ont nourri les décisions tout au long du travail.",
    },
    designQA: {
      heading: "Du design à la production",
      body: "J'ai vérifié l'expérience implémentée en environnement de test, contrôlé la cohérence visuelle et comportementale, documenté les écarts, et travaillé avec les développeurs sur les derniers ajustements avant la mise en production.",
      areas: ["QA visuelle", "QA d'interaction", "États", "Cas limites", "Comportement de chargement et d'erreur", "Cohérence"],
    },
    measuring: {
      heading: "Mesurer ce qui se passe après la mise en production",
      body: "Après la mise en production, le produit peut être évalué à travers des signaux comme l'usage du rapport, l'adoption de la fonctionnalité, l'usage récurrent, les schémas d'interaction et les points de friction dans le parcours utilisateur.",
      note: "Les résultats quantitatifs post-lancement ne sont pas inclus dans cette étude de cas.",
    },
    outcome: {
      heading: "Résultat",
      body: [
        "Sprint Performance Report a créé une expérience structurée unique pour comprendre un sprint terminé, réunissant contexte, tendances de livraison, charge de travail, complétion, priorités et changements de périmètre dans un seul rapport.",
        "Il a également posé une base évolutive pour une analyse de sprint plus approfondie au sein de l'expérience de reporting Time in Status.",
      ],
    },
    learned: {
      heading: "Ce que j'en ai retenu",
      body: [
        "Plus de données ne crée pas nécessairement plus de clarté.",
        "Le principal défi de design consistait à décider quels signaux méritaient de l'attention, comment ils se reliaient entre eux, et comment transformer plusieurs métriques en une seule histoire de sprint compréhensible.",
        "Ce travail a renforcé l'importance de combiner hiérarchie de l'information, contexte produit, faisabilité technique et réflexion analytics pour concevoir des expériences riches en données.",
      ],
    },
    marketplace: {
      heading: "Voir le produit en action",
      body: "Sprint Performance Report fait partie de Time in Status for Jira. Découvrez le produit sur l'Atlassian Marketplace pour le voir dans le contexte de l'expérience complète de Time in Status.",
      cta: "Voir sur l'Atlassian Marketplace",
    },
  },
  sla: {
    meta: {
      eyebrow: "Étude de cas",
      title: "Gestion et reporting des SLA",
      category: "SaaS B2B · Jira · SLA · Reporting · Workflows complexes",
      headline: "Simplifier le reporting SLA complexe et rendre le comportement des données plus facile à comprendre.",
      intro:
        "Repenser la logique de reporting des vues tableau et graphique SLA pour rendre le filtrage, les périodes temporelles et le comportement des données plus cohérents et compréhensibles.",
      heroImageAlt:
        "Tableau de bord de reporting SLA montrant des tickets filtrés avec les minuteurs de temps de réponse et de résolution par priorité",
    },
    metaRow: {
      role: "Lead Product Designer",
      product: "SLA Time and Report for Jira",
      platform: "Jira Cloud",
      focus: "Reporting · Filtrage · UX orientée données · Logique produit · Design system",
      collaboration: "Produit · Engineering · QA · Design",
    },
    context: {
      heading: "Contexte",
      body: [
        "SLA Time and Report for Jira propose différentes façons d'analyser la performance SLA, y compris des rapports en tableau et des rapports graphiques.",
        "Différents types de rapports peuvent répondre à différentes questions, mais ils introduisent aussi des comportements de données et de temps différents.",
        "À mesure que l'expérience de reporting s'est développée, des contrôles d'apparence similaire pouvaient influencer les résultats des rapports différemment selon le type de rapport.",
      ],
    },
    problem: {
      heading: "Des contrôles similaires. Un comportement différent.",
      body: [
        "Les utilisateurs pouvaient travailler avec plusieurs types de rapports SLA, y compris des vues tableau et des rapports graphiques.",
        "Bien que ces expériences fonctionnent souvent avec des ensembles de tickets et de filtres similaires, certaines logiques de reporting se comportaient différemment en coulisses.",
        "Par exemple, un contrôle lié à une date pouvait déterminer quels tickets étaient inclus dans le rapport.",
        "Dans certains types de rapports, cette même logique temporelle pouvait aussi affecter la période affichée ou calculée dans la visualisation.",
        "La logique sous-jacente pouvait être techniquement correcte, mais l'interface ne rendait pas ces différences explicites.",
        "Des rapports d'apparence similaire pouvaient donc produire des résultats difficiles à comparer ou à prévoir à partir de l'interface seule.",
      ],
    },
    whyItMattered: {
      heading: "Pourquoi c'était important",
      userLabel: "Pour les utilisateurs",
      userBody:
        "Le reporting doit sembler prévisible. Quand des contrôles similaires influencent différentes parties du calcul selon le type de rapport, il devient plus difficile de comprendre pourquoi les résultats diffèrent et ce qu'un filtre fait exactement.",
      productLabel: "Pour le produit",
      productBody:
        "À mesure que le reporting se développe, une logique d'interaction incohérente devient plus difficile à maintenir et à faire évoluer. Les nouveaux rapports tableau et graphique ont besoin d'un modèle partagé capable de répondre à différents usages sans réinventer un comportement de filtrage à chaque fois.",
    },
    challenge: {
      heading: "Le défi de design",
      statement:
        "Comment pourrions-nous séparer « quels tickets appartiennent au rapport » de « quelle période le rapport doit visualiser ou calculer », tout en gardant une expérience cohérente entre les différents types de rapports ?",
    },
    oldModel: {
      heading: "Un seul contrôle pouvait porter plusieurs responsabilités",
      control: "Entrée liée à une date",
      branchA: { title: "Sélection des données", question: "Quels tickets appartiennent au rapport ?" },
      branchB: { title: "Période du rapport", question: "Quelle période la visualisation doit-elle représenter ?" },
      consequences: [
        "Le comportement pouvait différer selon le type de rapport",
        "Plus difficile à prévoir à partir de l'interface",
      ],
      note: "Cette logique a été simplifiée pour cette étude de cas afin de protéger des détails produit internes.",
    },
    direction: {
      heading: "Séparer les responsabilités",
      beforeTitle: "Avant",
      beforeControl: "Un seul contrôle lié à une date",
      beforeConsequences: ["Sélection des données", "Période du rapport", "Comportement propre au rapport"],
      afterTitle: "Après",
      afterDataSelection: { title: "Sélection des données", question: "Quels tickets doivent être inclus ?" },
      afterConnector: "séparée de",
      afterReportPeriod: { title: "Période du rapport", question: "Quelle période le rapport doit-il visualiser ?" },
      afterTargets: ["Rapports tableau", "Rapports graphiques", "Autres expériences de reporting SLA"],
    },
    dataFilter: {
      heading: "Un modèle de sélection des données plus clair",
      intro:
        "La couche de filtrage devrait avoir une seule responsabilité claire : définir quels tickets appartiennent au rapport.",
      criteria: [
        "Projet",
        "Statut",
        "Date de création",
        "Date de mise à jour",
        "Date de résolution",
        "Autres champs pertinents selon le rapport",
      ],
      target: "Un filtre de données réutilisable",
      note: "Les champs disponibles peuvent varier selon le rapport. Le pattern d'interaction, lui, doit rester cohérent.",
      emphasis: [
        "Une seule responsabilité",
        "Comportement prévisible",
        "Structure réutilisable",
        "Champs configurables",
        "Scalable entre les types de rapports",
      ],
    },
    reportPeriod: {
      heading: "Le temps comme partie du rapport, pas caché dans le filtre",
      intro:
        "Le reporting graphique peut aussi avoir besoin de définir la période représentée dans la visualisation. Cette responsabilité doit être compréhensible indépendamment des critères de sélection des données.",
      filterExample: {
        label: "Filtre de données",
        value: "Créé le mois dernier",
        meaning: "Sélectionner les tickets qui correspondent à cette condition.",
      },
      periodExample: {
        label: "Période du rapport",
        value: "Le mois dernier",
        meaning: "Visualiser ou calculer le rapport sur cette période.",
      },
      note: "Cette distinction devrait être visible dans le modèle d'interaction, plutôt que d'exister uniquement dans la logique de calcul sous-jacente.",
    },
    views: {
      heading: "Un seul système de reporting, différentes vues",
      table: {
        title: "Vue tableau",
        label: "Idéale pour",
        items: ["Les tickets individuels", "Les valeurs SLA détaillées", "L'analyse au niveau statut et ticket"],
      },
      chart: {
        title: "Rapport graphique",
        label: "Idéal pour",
        items: ["Les tendances", "La distribution", "La performance dans le temps", "Les insights SLA agrégés"],
      },
      sharedLabel: "Base commune",
      sharedItems: ["Sélection des données", "Logique SLA", "Définitions de reporting"],
      differentLabel: "Présentation différente",
      differentItems: ["Tableau", "Graphique"],
    },
    principles: {
      heading: "Principes qui guident la refonte",
      items: [
        {
          title: "Responsabilité claire",
          body: "Chaque contrôle devrait indiquer quelle partie du rapport il affecte.",
        },
        {
          title: "Comportement cohérent",
          body: "Des contrôles similaires devraient se comporter de façon prévisible selon les types de rapports.",
        },
        {
          title: "Logique réutilisable",
          body: "Le modèle de filtrage devrait s'étendre aux nouveaux rapports sans réinventer les interactions.",
        },
        {
          title: "Complexité progressive",
          body: "Les capacités de reporting avancées ne devraient pas complexifier l'expérience de base.",
        },
      ],
    },
    systemThinking: {
      heading: "Concevoir au-delà d'un seul rapport",
      intro:
        "L'objectif n'est pas seulement de corriger un écran de reporting. Ce travail vise aussi à poser des patterns de reporting réutilisables, capables de soutenir de futures vues SLA.",
      steps: ["Sélection des données", "Logique de reporting partagée"],
      views: ["Vue tableau", "Rapport graphique", "Expérience de tableau de bord", "Futures vues de reporting"],
    },
    collaboration: {
      heading: "Collaboration produit et engineering",
      steps: [
        "Cadrage du problème",
        "Cartographie de la logique",
        "Alignement produit",
        "Direction de design",
        "Validation technique",
        "Itération",
        "Implémentation",
        "Design QA",
      ],
      body: "Comme une grande partie du défi se situe dans le comportement du reporting plutôt que dans le style visuel seul, la collaboration avec le produit et l'engineering fait partie du processus de design dès le départ.",
    },
    currentStatus: {
      heading: "Où en est le travail",
      body: [
        "La refonte du reporting est toujours en cours.",
        "Certains modèles d'interaction et écrans internes ne sont volontairement pas inclus dans cette étude de cas, car ils n'ont pas encore été publiés.",
        "Ce portfolio se concentre plutôt sur le problème produit, le raisonnement de design et la direction système derrière ce travail.",
      ],
    },
    expectedImpact: {
      heading: "Impact attendu",
      body: "Une séparation plus claire entre la sélection des données et la période du rapport vise à rendre le comportement des rapports plus prévisible, à améliorer la cohérence entre les types de rapports, et à créer une base plus solide pour les futures expériences de reporting SLA.",
      items: [
        "Un reporting plus prévisible",
        "Des responsabilités de filtre plus claires",
        "Une meilleure cohérence entre les vues",
        "Des patterns de reporting plus scalables",
        "Une extension plus simple vers de futurs rapports",
      ],
    },
    demonstrates: {
      heading: "Ce que ce travail démontre",
      body: [
        "Les problèmes produit complexes ne sont souvent pas visibles dans des écrans isolés.",
        "Dans ce projet, le défi de design principal se situe dans la relation entre la sélection des données, la logique de reporting, le temps et la visualisation.",
        "Ce travail demandait de comprendre le comportement du système en premier, puis de définir un modèle d'interaction capable de rester clair à mesure que le produit évolue.",
      ],
    },
    explore: {
      heading: "Découvrir le produit",
      intro: "SLA Management & Reporting fait partie de SLA Time and Report for Jira.",
      marketplaceLabel: "Marketplace",
      marketplaceCta: "Voir sur l'Atlassian Marketplace",
      videoLabel: "Vidéo",
      videoCta: "Voir la présentation du produit",
      videoImageAlt: "Aperçu de la vidéo de présentation de SLA Time and Report for Jira",
    },
  },
  replicoo: {
    meta: {
      eyebrow: "Étude de cas 0→1",
      title: "Replicoo",
      headline: "Rendre l'information médicale complexe plus facile à comprendre et à explorer.",
      category: "IA · Santé · Produit 0→1",
      role: "Product Designer",
      platform: "Produit web propulsé par l'IA",
      collaboration: ["Fondateurs", "Engineering", "Design"],
      contribution: [
        "Exploration produit 0→1",
        "Design d'interaction IA",
        "Clarté de l'information",
        "UX/UI",
        "Itération rapide",
      ],
      heroNote:
        "Lorsque des captures d'écran finales ne peuvent pas être partagées en toute sécurité, cette étude de cas utilise des diagrammes simplifiés plutôt qu'une UI produit fabriquée.",
    },
    context: {
      heading: "Contexte",
      body: [
        "Replicoo est un produit de santé propulsé par l'IA visant à rendre l'information médicale complexe plus facile à comprendre et à explorer.",
      ],
    },
    challenge: {
      heading: "Le défi",
      body: [
        "L'information médicale est dense, technique et à fort enjeu. Le défi était de concevoir une expérience assistée par l'IA qui rende cette information plus accessible sans la simplifier à l'excès ni fragiliser la confiance.",
      ],
    },
    approach: {
      heading: "Approche",
      body: [
        "En tant que produit 0→1, ce travail impliquait une exploration précoce : définir ce que devait être le produit, comment présenter le contenu généré par l'IA, et comment construire la confiance dans une interface traitant des informations sensibles.",
      ],
      points: [
        "Exploration produit et d'interaction en phase précoce",
        "Concevoir la présentation des explications générées par l'IA",
        "Structurer une information médicale dense pour plus de clarté",
        "Concevoir pour la confiance dans un contexte sensible et à fort enjeu",
        "Itération rapide dans un environnement 0→1",
      ],
    },
    diagrams: [
      {
        heading: "Concept produit",
        kind: "pills",
        intro: "Comment les éléments centraux du produit s'articulent entre eux.",
        items: ["Utilisateur", "Information médicale", "IA", "Explication & guidage"],
      },
      {
        heading: "Parcours utilisateur principal",
        kind: "flow",
        items: [
          "L'utilisateur saisit ou importe une information",
          "L'IA traite le contexte",
          "L'utilisateur reçoit une explication structurée",
          "L'utilisateur explore le détail ou les étapes suivantes",
        ],
      },
      {
        heading: "Principes de confiance & clarté",
        kind: "pills",
        items: ["Source / contexte clair", "Langage simple", "Hiérarchie", "Contrôle utilisateur", "Transparence"],
      },
      {
        heading: "Exploration 0→1",
        kind: "flow",
        items: ["Problème", "Hypothèse", "Expérience centrale", "MVP", "Itération"],
      },
    ],
    details: {
      heading: "Concevoir pour la confiance et la clarté",
      body: [
        "Dans un contexte de santé, clarté et confiance sont indissociables. Chaque décision d'interface devait soutenir les deux.",
      ],
      items: [
        "Présenter le contenu généré par l'IA de façon transparente",
        "Structurer une information médicale dense en couches digestes",
        "Concevoir une navigation pour une exploration non linéaire de l'information",
        "Établir des patterns visuels et d'interaction pour un nouveau produit 0→1",
      ],
    },
    outcome: {
      heading: "Résultat",
      body: [
        "Le travail de design de Replicoo a permis d'établir une approche pour présenter une information médicale complexe à travers une expérience assistée par l'IA, avec la clarté et la confiance comme principes directeurs.",
      ],
    },
    note: "Cette étude de cas est volontairement plus courte et sera enrichie au fil du temps. Comme pour tous les projets présentés ici, aucune donnée d'utilisateurs, de financement ou de résultat clinique n'est avancée.",
  },
  twish: {
    meta: {
      eyebrow: "Produit personnel · 0→1 · En ligne",
      title: "Twish",
      category: "Produit personnel · B2C · Zero to One",
      headline: "D'un problème du quotidien à un vrai produit.",
      intro:
        "J'ai conçu et développé Twish, une liste de souhaits universelle qui facilite la collecte de souhaits, leur partage, et la coordination des cadeaux sans gâcher la surprise.",
      heroImageAlt:
        "Page d'accueil Twish avec le titre « Wish it. Twish it. » et une liste de souhaits universelle réunissant des produits de différentes boutiques",
    },
    metaRow: {
      role: "Product Designer · Product Owner · Développement assisté par IA",
      product: "Application web B2C",
      scope: "Recherche · Stratégie produit · UX/UI · Développement · Lancement · Analytics",
      status: "Produit en ligne · Itération continue",
    },
    statusLabel: "Statut",
    capabilities: ["Stratégie produit", "Recherche utilisateur", "UX/UI", "Développement assisté par IA", "Analytics"],
    liveCta: "Voir le produit en ligne",
    finalCta: "Découvrir Twish",
    problem: {
      heading: "Tout est parti d'un problème très ordinaire.",
      body: [
        "Les idées de cadeaux sont souvent éparpillées entre captures d'écran, messages, notes et différentes boutiques en ligne.",
        "Cela rend une liste de souhaits difficile à maintenir et difficile à partager, et crée de la friction pour les proches qui cherchent à choisir un cadeau.",
        "Twish explore si cette expérience fragmentée peut devenir une seule liste universelle : rassembler des souhaits de partout, partager une seule liste, et coordonner les cadeaux sans gâcher la surprise.",
      ],
      fragmentsIntro: "Avant Twish, une liste de souhaits vivait en morceaux épars.",
      fragments: ["Captures d'écran", "Liens produits", "Messages", "Notes", "Différentes boutiques"],
      convergeTarget: "Une seule liste, dans Twish",
    },
    understanding: {
      heading: "Comprendre comment les gens gèrent vraiment leurs souhaits et leurs cadeaux.",
      intro:
        "L'idée est partie d'un comportement très ordinaire : les idées de cadeaux ne vivent presque jamais à un seul endroit. Elles sont enregistrées sous forme de captures d'écran, de notes, de messages et de liens produits, puis il faut tout retrouver et repartager au moment d'un anniversaire ou d'une célébration. Je voulais comprendre ce qui rendrait cette expérience plus simple des deux côtés : la personne qui crée une liste, et celle qui choisit un cadeau.",
      personal: {
        title: "Expérience personnelle",
        body: "Les idées de cadeaux étaient éparpillées entre captures d'écran, notes, messages et liens de différentes boutiques. Au moment de les partager, il fallait tout rassembler à nouveau.",
        question: "Comment une seule liste pourrait-elle rassembler des produits de n'importe où et se partager via un seul lien ?",
      },
      feedback: {
        title: "Discussions et retours continus",
        body: [
          "J'ai discuté de l'idée avec mon mari, des amis et des proches qui achètent régulièrement des cadeaux, utilisent des listes de souhaits ou échangent simplement des liens produits.",
          "Une fois le MVP en ligne, j'ai continué à apprendre en donnant le vrai produit à des gens et en observant où ils hésitaient ou se sentaient perdus.",
          "Ce n'était pas une phase de recherche ponctuelle. Les retours se sont poursuivis en parallèle du produit, au fil de la conception, du lancement et de l'itération.",
        ],
      },
      competitive: {
        title: "Exploration concurrentielle",
        intro: "J'ai étudié des produits de liste de souhaits existants pour comprendre les patterns courants et les points de friction qui subsistaient.",
        products: ["GiftList", "Giftster", "Elfster", "MyWishlist.online"],
        dimensionsLabel: "J'ai notamment regardé :",
        dimensions: [
          "L'ajout d'un produit en collant une URL",
          "L'extraction automatique du nom, de l'image et du prix du produit",
          "La nécessité ou non d'une extension de navigateur",
          "Le comportement de réservation",
          "L'expérience de liste partagée / invité",
          "L'ajout de produits de différentes boutiques",
          "Les exigences de compte pour les actions de base",
          "L'import / la migration de liste",
        ],
      },
      principlesHeading: "Ce que cela a façonné",
      principles: [
        { title: "Universel", body: "Les produits ne devraient pas être liés à une seule boutique." },
        { title: "Faible friction", body: "Ajouter un souhait devrait demander le moins d'effort possible." },
        { title: "Facile à partager", body: "Un seul lien devrait suffire pour partager une liste." },
        { title: "Privé quand nécessaire", body: "Tout le monde n'a pas besoin d'accéder aux mêmes informations." },
        {
          title: "Préserve la surprise",
          body: "La réservation doit faciliter la coordination des cadeaux sans révéler la surprise au propriétaire de la liste.",
        },
      ],
      opportunity:
        "Certaines personnes ont peut-être déjà des listes ailleurs et ne devraient pas forcément avoir à les recréer manuellement. Cela a inspiré par la suite l'idée d'importer une liste existante via un lien.",
    },
    mvp: {
      heading: "Quelle était la plus petite expérience qui valait la peine d'être lancée ?",
      intro:
        "J'ai délibérément concentré la première version sur la validation du comportement produit essentiel, plutôt que de construire toutes les fonctionnalités possibles d'une liste de souhaits.",
      journey: [
        "Créer une liste",
        "Ajouter des souhaits",
        "Partager la liste",
        "Ouvrir en tant qu'invité",
        "Choisir un cadeau",
        "Réserver",
        "Garder la surprise",
      ],
      includedLabel: "MVP",
      included: ["Créer une liste", "Ajouter des souhaits", "Partager", "Accès invité", "Réserver des cadeaux", "Protéger la surprise"],
      laterLabel: "Opportunités futures",
      later: [
        "Importer des listes existantes",
        "Informations de livraison",
        "Amis",
        "Comparaison de prix",
        "Fonctionnalités d'affiliation",
        "Gamification",
        "Fonctionnalités de découverte supplémentaires",
      ],
    },
    decisions: {
      heading: "Décisions produit clés",
      intro: "Trois décisions qui ont façonné le produit, et les raisons derrière elles.",
      items: [
        {
          title: "Rendre l'ajout d'un souhait sans effort",
          problemLabel: "Problème",
          problem: "Saisir manuellement les informations d'un produit crée un effort inutile.",
          decisionLabel: "Décision",
          decision: "Permettre d'ajouter un souhait en collant un lien produit, tout en gardant la saisie manuelle disponible.",
          whyLabel: "Pourquoi",
          why: "Réduire la friction sur l'une des actions les plus fréquentes du produit.",
          resultLabel: "Résultat",
          result:
            "On colle un lien, Twish s'occupe des détails : les informations du produit sont récupérées automatiquement et ajoutées à la liste.",
        },
        {
          title: "Une liste, deux perspectives",
          problemLabel: "Problème",
          problem:
            "Le propriétaire gère sa liste mais ne doit pas voir qui a réservé un cadeau. Les invités doivent comprendre ce qui est disponible et réserver un cadeau sans révéler la surprise.",
          decisionLabel: "Décision",
          decision:
            "Afficher le même élément de la liste différemment selon qui le consulte : le propriétaire voit sa liste exactement telle qu'il l'a construite, les invités voient le statut de réservation.",
          whyLabel: "Pourquoi",
          why: "La surprise est au cœur de l'acte d'offrir. Une liste qui révèle le statut de réservation au propriétaire résout la coordination au prix de ce pour quoi on offre un cadeau.",
          resultLabel: "Résultat",
          result: "Un seul modèle de données, deux vues — les doublons sont évités sans gâcher la surprise.",
        },
        {
          title: "Retirer la friction du partage",
          problemLabel: "Problème",
          problem:
            "Demander à une personne qui offre de créer un compte avant de pouvoir consulter ou réserver un cadeau ajoute de la friction au moment précis où elle essaie d'aider.",
          decisionLabel: "Décision",
          decision: "Rendre la liste partagée et le parcours de réservation invité entièrement utilisables sans compte.",
          whyLabel: "Pourquoi",
          why: "Les personnes qui offrent ne sont pas l'utilisateur central du produit — elles aident quelqu'un d'autre. Chaque étape supplémentaire réduit la probabilité qu'elles aillent au bout.",
          resultLabel: "Résultat",
          result: "Un lien partagé ouvre directement la liste. Aucune inscription n'est nécessaire pour réserver un cadeau.",
        },
      ],
    },
    product: {
      heading: "Le produit",
      intro: "Des parcours à un produit fonctionnel — le cœur du parcours, à travers les écrans qui comptent le plus.",
    },
    builder: {
      heading: "Je ne me suis pas arrêtée au prototype.",
      body: [
        "Twish a élargi mon rôle au-delà du design produit traditionnel : construire, tester et lancer le produit réel grâce au développement assisté par IA.",
        "J'ai traduit les exigences produit et les décisions UX en fonctionnalités réelles, testé l'implémentation directement, débogué les problèmes, et itéré — les décisions produit, l'architecture UX et le contrôle qualité restant de ma responsabilité tout au long du processus.",
      ],
      steps: ["Recherche", "Définir", "Concevoir", "Développer avec l'IA", "Tester", "Déployer", "Mesurer", "Itérer"],
      responsibilitiesLabel: "Ce que cela a demandé",
      responsibilities: ["Stratégie produit", "UX/UI", "Développement assisté par IA", "QA", "Déploiement", "Analytics"],
    },
    measure: {
      heading: "Le lancement n'était que le début de la boucle d'apprentissage.",
      intro:
        "Une fois Twish entre les mains des utilisateurs, certains problèmes sont devenus bien plus visibles qu'ils ne l'étaient dans les prototypes. Plutôt que de tout repenser d'un coup, je me suis concentrée sur les moments où les gens hésitaient, se sentaient perdus, ou devaient fournir plus d'effort que nécessaire.",
      storyLabels: { observation: "Observation", hypothesis: "Hypothèse", change: "Changement", learning: "Apprentissage" },
      stories: [
        {
          title: "Expérience propriétaire vs invité",
          observation:
            "La principale source de confusion venait de l'expérience de liste partagée. Les propriétaires et les invités utilisaient la même liste pour des raisons très différentes, mais la distinction entre ces deux expériences n'était pas toujours assez claire.",
          hypothesis:
            "Donner à chaque rôle uniquement les informations et les actions dont il a besoin rendrait l'expérience partagée plus facile à comprendre et préserverait la surprise.",
          change:
            "J'ai séparé plus nettement les états propriétaire et invité. Les propriétaires gèrent leur liste sans voir d'informations de réservation inutiles, tandis que les invités comprennent immédiatement ce qui est disponible et ce qu'ils peuvent réserver.",
          learning:
            "Un produit partagé n'a pas toujours besoin d'une interface partagée. Concevoir autour de ce que chaque personne a besoin de savoir peut simplifier l'ensemble de l'expérience.",
        },
        {
          title: "Amis et états vides",
          observation:
            "L'expérience « Amis » devenait confuse dans les états vides ou peu remplis. « Pas encore d'amis » et « un ami n'a encore rien partagé » sont deux situations différentes, mais l'interface ne le communiquait pas assez clairement.",
          hypothesis:
            "Des états vides contextuels aideraient les gens à comprendre la situation et ce qu'ils pouvaient faire ensuite.",
          change:
            "J'ai séparé les états vides de la page Amis et des pages d'ami individuelles, simplifié le texte, et réduit l'interface mobile superflue. La recherche a aussi été rendue plus contextuelle pour ne pas prendre de place quand il n'y avait que peu d'amis.",
          learning:
            "Les états vides font partie du parcours produit, ce ne sont pas du remplissage. Ils doivent expliquer la situation actuelle et rendre la prochaine étape évidente.",
        },
        {
          title: "Expérience mobile",
          observation:
            "Sur les petits écrans, certains éléments d'interface étaient trop grands, certaines pages demandaient un défilement inutile, et le retour en arrière n'était pas toujours évident.",
          hypothesis:
            "Une hiérarchie plus compacte et une navigation mobile plus claire rendraient le produit plus léger et plus facile à parcourir.",
          change:
            "J'ai réduit la taille des titres et les espacements, rendu les actions plus compactes, amélioré les zones tactiles, clarifié la navigation retour, et repensé la hiérarchie mobile autour des actions les plus importantes.",
          learning:
            "Le design responsive ne consiste pas seulement à faire tenir une interface desktop sur un petit écran. C'est souvent la hiérarchie elle-même qui doit changer.",
        },
      ],
      otherLabel: "Autres améliorations après le lancement",
      other: [
        {
          title: "Ajouter un vœu",
          body: "Suppression des champs techniques comme l'URL d'image. Les images peuvent désormais être téléversées, collées depuis le presse-papiers, ou glissées-déposées, avec un aperçu immédiat.",
        },
        {
          title: "Import",
          body: "Simplification de l'expérience d'import de liste pour rendre le parcours plus facile à comprendre.",
        },
        {
          title: "Confirmation de réservation",
          body: "Remplacement d'une confirmation purement technique par un état de succès plus chaleureux, avec une invitation discrète pour l'invité à créer sa propre liste après avoir réservé un cadeau.",
        },
      ],
    },
    reflection: {
      heading: "Ce que construire Twish a changé pour moi",
      items: [
        {
          title: "La responsabilité",
          body: "Les décisions de design se vivent différemment quand on est responsable de ce qui est réellement livré.",
        },
        {
          title: "Lancer un produit crée des preuves",
          body: "Un vrai produit répond à des questions que les prototypes ne peuvent pas résoudre.",
        },
        {
          title: "L'IA a changé mon rôle",
          body: "L'IA a raccourci la distance entre le design et l'implémentation, et m'a permis de tester des idées directement dans un produit fonctionnel.",
        },
      ],
    },
  },
};
