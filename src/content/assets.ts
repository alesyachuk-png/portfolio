// Central registry of every visual "asset slot" used across the case
// studies: hero shots, final-experience screens, design-system captures,
// and so on. Nothing here is a real screenshot -- each slot renders an
// elegant, labeled placeholder until you add a real image.
//
// To add a real image later: drop the file in public/images/case-studies/
// and set `src` on the relevant slot below. The layout will not shift --
// the placeholder and the final image share the same aspect ratio box.

export type AssetSlot = {
  key: string;
  aspect: string;
  formatLabel: { en: string; fr: string };
  required: { en: string; fr: string };
  title: { en: string; fr: string };
  description: { en: string; fr: string };
  recreatable: boolean;
  src?: string | null;
};

const req = { en: "Required", fr: "Obligatoire" };
const opt = { en: "Optional", fr: "Optionnel" };
const reqIfSafe = { en: "Required if safe to share", fr: "Si le partage est possible" };
const reqIfAvailable = { en: "Required if available", fr: "Si disponible" };

export const replicooAssets: Record<string, AssetSlot> = {
  hero: {
    key: "replicoo-hero",
    aspect: "16/9",
    formatLabel: { en: "Desktop or mobile screenshot", fr: "Capture desktop ou mobile" },
    required: req,
    title: { en: "Hero visual", fr: "Visuel principal" },
    description: {
      en: "The strongest product screen that communicates the AI healthcare concept.",
      fr: "L'écran le plus fort pour communiquer le concept de santé assisté par l'IA.",
    },
    recreatable: false,
    src: null,
  },
  aiInteraction: {
    key: "replicoo-ai-interaction",
    aspect: "4/3",
    formatLabel: { en: "Mobile screen", fr: "Écran mobile" },
    required: reqIfAvailable,
    title: { en: "AI interaction", fr: "Interaction avec l'IA" },
    description: { en: "A screen demonstrating AI interaction.", fr: "Un écran illustrant l'interaction avec l'IA." },
    recreatable: false,
    src: null,
  },
  information: {
    key: "replicoo-information",
    aspect: "4/3",
    formatLabel: { en: "Mobile screen", fr: "Écran mobile" },
    required: opt,
    title: { en: "Information presentation", fr: "Présentation de l'information" },
    description: {
      en: "How complex health information is structured to feel understandable.",
      fr: "Comment l'information médicale complexe est structurée pour rester compréhensible.",
    },
    recreatable: false,
    src: null,
  },
  final1: {
    key: "replicoo-final-1",
    aspect: "4/3",
    formatLabel: { en: "Mobile screen", fr: "Écran mobile" },
    required: req,
    title: { en: "Final experience 1", fr: "Expérience finale 1" },
    description: { en: "One of 2 to 4 key screens.", fr: "Un des 2 à 4 écrans clés." },
    recreatable: false,
    src: null,
  },
  final2: {
    key: "replicoo-final-2",
    aspect: "4/3",
    formatLabel: { en: "Mobile screen", fr: "Écran mobile" },
    required: req,
    title: { en: "Final experience 2", fr: "Expérience finale 2" },
    description: { en: "One of 2 to 4 key screens.", fr: "Un des 2 à 4 écrans clés." },
    recreatable: false,
    src: null,
  },
};

export const designSystemAssets: Record<string, AssetSlot> = {
  componentLibrary: {
    key: "ds-component-library",
    aspect: "16/9",
    formatLabel: { en: "Component composition", fr: "Composition de composants" },
    required: opt,
    title: { en: "Component library", fr: "Bibliothèque de composants" },
    description: {
      en: "Button, Select, Badge, Table, Modal, Filter, Status, Chart.",
      fr: "Bouton, Select, Badge, Tableau, Modale, Filtre, Statut, Graphique.",
    },
    recreatable: true,
    src: null,
  },
  componentStates: {
    key: "ds-component-states",
    aspect: "16/9",
    formatLabel: { en: "Component composition", fr: "Composition de composants" },
    required: opt,
    title: { en: "Component states", fr: "États des composants" },
    description: {
      en: "Default, hover, selected, disabled, error, loading.",
      fr: "Par défaut, survol, sélectionné, désactivé, erreur, chargement.",
    },
    recreatable: true,
    src: null,
  },
};
