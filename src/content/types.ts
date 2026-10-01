// Shared content shape for the EN and FR dictionaries.
// Keeping this typed means the French dictionary cannot silently drift out
// of sync with the English one -- TypeScript will flag missing fields.

export interface HowWorkStage {
  number: string;
  title: string;
  items: string[];
}

export interface LeadershipArea {
  title: string;
  description: string;
  points: string[];
}

export interface BeyondItem {
  title: string;
  description: string;
}

export interface ProjectSummary {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export interface DecisionCard {
  decision: string;
  context: string;
  options: string[];
  constraint: string;
  reasoning: string;
  outcome: string;
}

export interface FlowStep {
  label: string;
  detail?: string;
}

export interface CaseStudyMeta {
  eyebrow: string;
  title: string;
  headline: string;
  category: string;
  role: string;
  platform: string;
  collaboration: string[];
  contribution: string[];
  heroNote: string;
}

export interface SectionCopy {
  heading: string;
  body: string[];
}

export interface SprintCaseStudy {
  meta: {
    eyebrow: string;
    title: string;
    category: string;
    headline: string;
    intro: string;
    heroImageAlt: string;
  };
  metaRow: {
    role: string;
    product: string;
    platform: string;
    focus: string;
    collaboration: string;
  };
  context: SectionCopy;
  problem: {
    heading: string;
    intro: string[];
    questions: string[];
  };
  whyItMattered: {
    heading: string;
    userValueLabel: string;
    userValue: string;
    productValueLabel: string;
    productValue: string;
  };
  needed: {
    heading: string;
    groups: { title: string; items: string[] }[];
  };
  currentExperience: {
    heading: string;
    steps: string[];
    callout: string;
    note: string;
  };
  discovery: {
    heading: string;
    items: { title: string; body: string }[];
    competitiveIntro: string;
    competitiveItems: string[];
  };
  users: {
    heading: string;
    primary: { role: string; need: string };
    secondary: { role: string; need: string };
    jtbdLabel: string;
    jtbd: string;
  };
  hypothesis: {
    heading: string;
    statement: string;
  };
  mvp: {
    heading: string;
    intro: string;
    areas: string[];
    target: string;
  };
  hierarchy: {
    heading: string;
    intro: string;
    steps: string[];
    note: string;
  };
  deliveryTrends: {
    heading: string;
    intro: string;
    velocity: { title: string; body: string; points: string[]; imageAlt: string };
    burndown: { title: string; body: string; imageAlt: string };
  };
  execution: {
    heading: string;
    intro: string;
    imageAlt: string;
  };
  signals: {
    heading: string;
    items: { title: string; body: string }[];
  };
  principles: {
    heading: string;
    items: { title: string; body: string }[];
  };
  designSystem: {
    heading: string;
    body: string;
    patterns: string[];
    visualNote: string;
  };
  collaboration: {
    heading: string;
    steps: string[];
    body: string;
  };
  designQA: {
    heading: string;
    body: string;
    areas: string[];
  };
  measuring: {
    heading: string;
    body: string;
    note: string;
  };
  outcome: SectionCopy;
  learned: {
    heading: string;
    body: string[];
  };
  marketplace: {
    heading: string;
    body: string;
    cta: string;
  };
}

export interface DiagramBlock {
  heading: string;
  kind: "pills" | "flow";
  items: string[];
  intro?: string;
}

export interface ShortCaseStudy {
  meta: CaseStudyMeta;
  context: SectionCopy;
  challenge: SectionCopy;
  approach: {
    heading: string;
    body: string[];
    points: string[];
  };
  diagrams?: DiagramBlock[];
  decisions?: {
    heading: string;
    intro: string;
    cards: DecisionCard[];
  };
  details: {
    heading: string;
    body: string[];
    items: string[];
  };
  outcome: SectionCopy;
  note?: string;
}

export interface SlaCaseStudy {
  meta: {
    eyebrow: string;
    title: string;
    category: string;
    headline: string;
    intro: string;
    heroImageAlt: string;
  };
  metaRow: {
    role: string;
    product: string;
    platform: string;
    focus: string;
    collaboration: string;
  };
  context: SectionCopy;
  problem: {
    heading: string;
    body: string[];
  };
  whyItMattered: {
    heading: string;
    userLabel: string;
    userBody: string;
    productLabel: string;
    productBody: string;
  };
  challenge: {
    heading: string;
    statement: string;
  };
  oldModel: {
    heading: string;
    control: string;
    branchA: { title: string; question: string };
    branchB: { title: string; question: string };
    consequences: string[];
    note: string;
  };
  direction: {
    heading: string;
    beforeTitle: string;
    beforeControl: string;
    beforeConsequences: string[];
    afterTitle: string;
    afterDataSelection: { title: string; question: string };
    afterConnector: string;
    afterReportPeriod: { title: string; question: string };
    afterTargets: string[];
  };
  dataFilter: {
    heading: string;
    intro: string;
    criteria: string[];
    target: string;
    note: string;
    emphasis: string[];
  };
  reportPeriod: {
    heading: string;
    intro: string;
    filterExample: { label: string; value: string; meaning: string };
    periodExample: { label: string; value: string; meaning: string };
    note: string;
  };
  views: {
    heading: string;
    table: { title: string; label: string; items: string[] };
    chart: { title: string; label: string; items: string[] };
    sharedLabel: string;
    sharedItems: string[];
    differentLabel: string;
    differentItems: string[];
  };
  principles: {
    heading: string;
    items: { title: string; body: string }[];
  };
  systemThinking: {
    heading: string;
    intro: string;
    steps: string[];
    views: string[];
  };
  collaboration: {
    heading: string;
    steps: string[];
    body: string;
  };
  currentStatus: {
    heading: string;
    body: string[];
  };
  expectedImpact: {
    heading: string;
    body: string;
    items: string[];
  };
  demonstrates: {
    heading: string;
    body: string[];
  };
  explore: {
    heading: string;
    intro: string;
    marketplaceLabel: string;
    marketplaceCta: string;
    videoLabel: string;
    videoCta: string;
    videoImageAlt: string;
  };
}

export interface TwishDecisionStory {
  title: string;
  problemLabel: string;
  problem: string;
  decisionLabel: string;
  decision: string;
  whyLabel: string;
  why: string;
  resultLabel: string;
  result: string;
}

export interface TwishCaseStudy {
  meta: {
    eyebrow: string;
    title: string;
    category: string;
    headline: string;
    intro: string;
    heroImageAlt: string;
  };
  metaRow: {
    role: string;
    product: string;
    scope: string;
    status: string;
  };
  statusLabel: string;
  capabilities: string[];
  liveCta: string;
  finalCta: string;
  problem: {
    heading: string;
    body: string[];
    fragmentsIntro: string;
    fragments: string[];
    convergeTarget: string;
  };
  understanding: {
    heading: string;
    intro: string;
    personal: { title: string; body: string; question: string };
    feedback: { title: string; body: string[] };
    competitive: {
      title: string;
      intro: string;
      products: string[];
      dimensionsLabel: string;
      dimensions: string[];
    };
    principlesHeading: string;
    principles: { title: string; body: string }[];
    opportunity: string;
  };
  mvp: {
    heading: string;
    intro: string;
    journey: string[];
    includedLabel: string;
    included: string[];
    laterLabel: string;
    later: string[];
  };
  decisions: {
    heading: string;
    intro: string;
    items: TwishDecisionStory[];
  };
  product: {
    heading: string;
    intro: string;
  };
  builder: {
    heading: string;
    body: string[];
    steps: string[];
    responsibilitiesLabel: string;
    responsibilities: string[];
  };
  measure: {
    heading: string;
    intro: string;
    storyLabels: { observation: string; hypothesis: string; change: string; learning: string };
    stories: { title: string; observation: string; hypothesis: string; change: string; learning: string }[];
    otherLabel: string;
    other: { title: string; body: string }[];
  };
  reflection: {
    heading: string;
    items: { title: string; body: string }[];
  };
}

export interface Dictionary {
  meta: {
    siteTitle: string;
    siteDescription: string;
    ogAlt: string;
  };
  nav: {
    work: string;
    about: string;
    resume: string;
    linkedin: string;
    skipToContent: string;
  };
  footer: {
    role: string;
    location: string;
    emailLabel: string;
    linkedinLabel: string;
    closingLine: string;
  };
  common: {
    opensInNewTab: string;
    viewCaseStudy: string;
    backToWork: string;
    nextProject: string;
    roleLabel: string;
    productLabel: string;
    platformLabel: string;
    focusLabel: string;
    collaborationLabel: string;
    contributionLabel: string;
    confidentialityNote: string;
    addScreenshot: string;
    addMetric: string;
    finalExperienceHeading: string;
    finalExperienceIntro: string;
  };
  home: {
    hero: {
      eyebrow: string;
      name: string;
      role: string;
      headline: string;
      supporting: string;
      ctaPrimary: string;
      ctaSecondary: string;
      imageAlt: string;
    };
    work: {
      heading: string;
      intro: string;
      viewCaseStudy: string;
      featuredLabel: string;
      projects: ProjectSummary[];
    };
    howIWork: {
      heading: string;
      intro: string;
      loopNote: string;
      stages: HowWorkStage[];
    };
    leadership: {
      heading: string;
      supporting: string;
      areas: LeadershipArea[];
    };
    beyond: {
      heading: string;
      intro: string;
      items: BeyondItem[];
    };
    designSystem: {
      eyebrow: string;
      heading: string;
      supporting: string;
      patterns: {
        heading: string;
        intro: string;
        feedback: { title: string; description: string[]; flow: string[]; note: string };
        filtering: {
          title: string;
          description: string[];
          emphasis: string[];
          convergeItems: string[];
          convergeTarget: string;
        };
        dateRange: {
          title: string;
          description: string[];
          groups: { title: string; items: string[] }[];
          note: string;
        };
        scheduling: {
          title: string;
          description: string[];
          considerations: string[];
          timeline: { past: string; next: string; upcoming: string };
        };
        permissions: {
          title: string;
          description: string[];
          scopes: string[];
          convergeTarget: string;
          accessStates: string[];
        };
      };
      principles: {
        heading: string;
        items: { eyebrow: string; headline: string; body: string }[];
      };
      process: {
        heading: string;
        stages: { number: string; title: string; subtitle: string; body: string }[];
      };
      impact: {
        heading: string;
        items: { title: string; body: string }[];
      };
      closing: string;
      confidentialityNote: string;
    };
    ai: {
      heading: string;
      supporting: string;
      items: string[];
      closing: string;
    };
    finalCta: {
      heading: string;
      supporting: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
  };
  about: {
    eyebrow: string;
    headline: string;
    paragraphs: string[];
    highlightsTitle: string;
    highlights: string[];
    locationTitle: string;
    location: string;
    languagesTitle: string;
    languages: { name: string; level: string }[];
    imageAlt: string;
  };
  resume: {
    eyebrow: string;
    headline: string;
    intro: string;
    downloadCta: string;
    experience: {
      title: string;
      years: string;
      scope: string;
      body: string[];
    };
    education: {
      title: string;
      degrees: { degree: string; institution: string }[];
      additionalLabel: string;
      additional: { title: string; institution: string };
    };
    skills: {
      title: string;
      groups: { title: string; items: string[] }[];
    };
  };
  sprint: SprintCaseStudy;
  sla: SlaCaseStudy;
  replicoo: ShortCaseStudy;
  twish: TwishCaseStudy;
}
