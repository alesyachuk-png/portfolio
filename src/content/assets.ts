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

export const twishAssets: Record<string, AssetSlot> = {
  hero: {
    key: "twish-hero",
    aspect: "4/3",
    formatLabel: { en: "Desktop screenshot", fr: "Capture desktop" },
    required: req,
    title: { en: "Twish homepage", fr: "Page d'accueil Twish" },
    description: {
      en: "Real screenshot captured from the live twishnow.com homepage.",
      fr: "Capture réelle de la page d'accueil de twishnow.com.",
    },
    recreatable: false,
    src: "/images/case-studies/twish-hero.png",
  },
  addViaLink: {
    key: "twish-add-link",
    aspect: "4/3",
    formatLabel: { en: "Desktop screenshot", fr: "Capture desktop" },
    required: req,
    title: { en: "Add a wish by pasting a link", fr: "Ajouter un vœu en collant un lien" },
    description: {
      en: "Real screenshot captured from the public twishnow.com marketing page.",
      fr: "Capture réelle de la page publique de twishnow.com.",
    },
    recreatable: false,
    src: "/images/case-studies/twish-add-link.png",
  },
  shareReserve: {
    key: "twish-share-reserve",
    aspect: "4/3",
    formatLabel: { en: "Desktop screenshot", fr: "Capture desktop" },
    required: req,
    title: { en: "Share once, gift better", fr: "Partager une fois, mieux offrir" },
    description: {
      en: "Real screenshot captured from the public twishnow.com marketing page.",
      fr: "Capture réelle de la page publique de twishnow.com.",
    },
    recreatable: false,
    src: "/images/case-studies/twish-share-reserve.png",
  },
  myWishlists: {
    key: "twish-my-wishlists",
    aspect: "2000/620",
    formatLabel: { en: "Desktop screenshot", fr: "Capture desktop" },
    required: req,
    title: { en: "My Wishlists desktop screen", fr: "Écran « Mes listes » (desktop)" },
    description: {
      en: "Real screenshot of the signed-in overview where the owner sees and manages all their wishlists.",
      fr: "Capture réelle de la vue d'ensemble connectée où le propriétaire voit et gère toutes ses listes.",
    },
    recreatable: false,
    src: "/images/case-studies/twish-my-wishlists.png",
  },
  wishlistOwnerView: {
    key: "twish-wishlist-owner-view",
    aspect: "1460/832",
    formatLabel: { en: "Desktop screenshot", fr: "Capture desktop" },
    required: req,
    title: { en: "Wishlist detail: owner view", fr: "Détail de la liste : vue propriétaire" },
    description: {
      en: "Real screenshot of the owner's wishlist with full edit controls (Add a wish, Share).",
      fr: "Capture réelle de la liste avec les contrôles d'édition du propriétaire (Ajouter un vœu, Partager).",
    },
    recreatable: false,
    src: "/images/case-studies/twish-wishlist-owner-view.png",
  },
  addWish: {
    key: "twish-add-wish",
    aspect: "1460/1000",
    formatLabel: { en: "Desktop screenshot", fr: "Capture desktop" },
    required: req,
    title: { en: "Add a wish modal", fr: "Fenêtre « Ajouter un vœu »" },
    description: {
      en: "Real screenshot of the add-a-wish modal inside the owner's wishlist.",
      fr: "Capture réelle de la fenêtre d'ajout d'un vœu dans la liste du propriétaire.",
    },
    recreatable: false,
    src: "/images/case-studies/twish-add-wish.png",
  },
  wishlistGuestView: {
    key: "twish-wishlist-guest-view",
    aspect: "1373/716",
    formatLabel: { en: "Desktop screenshot", fr: "Capture desktop" },
    required: req,
    title: { en: "Wishlist detail: guest view", fr: "Détail de la liste : vue invité" },
    description: {
      en: "Real screenshot of the same wishlist as a public guest sees it, with no edit controls.",
      fr: "Capture réelle de la même liste telle qu'un invité public la voit, sans contrôle d'édition.",
    },
    recreatable: false,
    src: "/images/case-studies/twish-wishlist-guest-view.png",
  },
  reservationFlow: {
    key: "twish-reservation-flow",
    aspect: "2000/1050",
    formatLabel: { en: "Desktop screenshot", fr: "Capture desktop" },
    required: req,
    title: { en: "Reservation flow", fr: "Parcours de réservation" },
    description: {
      en: "Real screenshot of a wish's detail page, showing the guest reservation action.",
      fr: "Capture réelle de la page détail d'un vœu, montrant l'action de réservation pour l'invité.",
    },
    recreatable: false,
    src: "/images/case-studies/twish-reservation-flow.png",
  },
  mobileWishlist: {
    key: "twish-mobile-wishlist",
    aspect: "780/1366",
    formatLabel: { en: "Mobile screenshot", fr: "Capture mobile" },
    required: req,
    title: { en: "Mobile wishlist screen", fr: "Écran mobile de la liste" },
    description: {
      en: "Real screenshot of the owner's wishlist on a phone.",
      fr: "Capture réelle de la liste du propriétaire sur mobile.",
    },
    recreatable: false,
    src: "/images/case-studies/twish-mobile-wishlist.png",
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
