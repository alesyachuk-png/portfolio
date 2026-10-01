import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    siteTitle: "Alesia Korenchuk, Product Designer & Design Lead",
    siteDescription:
      "Product Designer and Design Lead based in Bordeaux, France, focused on B2B SaaS, analytics, AI-powered products, data-heavy experiences, and scalable design systems.",
    ogAlt: "Alesia Korenchuk, Product Designer & Design Lead",
  },
  nav: {
    work: "Work",
    about: "About",
    resume: "Resume",
    linkedin: "LinkedIn",
    skipToContent: "Skip to content",
  },
  footer: {
    role: "Product Designer & Design Lead",
    location: "Bordeaux, France",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    closingLine: "Designed with clarity. Built with curiosity.",
  },
  common: {
    opensInNewTab: "(opens in a new tab)",
    viewCaseStudy: "View case study",
    backToWork: "Back to work",
    nextProject: "Next project",
    roleLabel: "Role",
    productLabel: "Product",
    platformLabel: "Platform",
    focusLabel: "Focus",
    collaborationLabel: "Collaboration",
    contributionLabel: "Contribution",
    confidentialityNote:
      "Some working materials have been simplified or recreated for this case study to protect confidential product information.",
    addScreenshot: "[Add screenshot]",
    addMetric: "[Add metric]",
    finalExperienceHeading: "Final experience",
    finalExperienceIntro:
      "Real, safe screenshots will replace these placeholders as they become available. Until then, each slot shows exactly what's needed.",
  },
  home: {
    hero: {
      eyebrow: "Product Designer & Design Lead",
      name: "Alesia Korenchuk",
      role: "Product Designer & Design Lead",
      headline: "I design complex products that make difficult workflows feel simple.",
      supporting:
        "Product Designer and Design Lead focused on B2B SaaS, analytics, AI-powered products, data-heavy experiences, and scalable design systems.",
      ctaPrimary: "View my work",
      ctaSecondary: "About me",
      imageAlt: "Portrait of Alesia Korenchuk",
    },
    work: {
      heading: "Selected work",
      intro:
        "A closer look at how I approach complex, data-heavy product problems, from framing to shipped experience.",
      viewCaseStudy: "View case study →",
      featuredLabel: "Featured case study",
      projects: [
        {
          slug: "sprint-performance",
          featured: true,
          title: "Sprint Performance Report",
          category: "B2B SaaS · Analytics · Jira",
          description:
            "Helping delivery teams turn fragmented sprint data into a clear view of performance, workload, completion, and scope change.",
          image: "/images/case-studies/sprint-performance-report.png",
          imageAlt: "Sprint Performance Report dashboard showing burndown chart, workload distribution, and completion rate",
        },
        {
          slug: "sla-management",
          title: "SLA Management & Reporting",
          category: "B2B SaaS · Complex workflows · Reporting",
          description:
            "Simplifying complex SLA logic across configuration, lifecycle states, and historical reporting.",
          image: "/images/case-studies/sla-management.png",
          imageAlt: "SLA management interface showing filtered work items with response and resolution time timers",
        },
        {
          slug: "replicoo",
          title: "Replicoo",
          category: "AI · Healthcare · 0→1 Product",
          description:
            "Designing an AI-powered healthcare product that brings medical records, health data, and AI-assisted guidance into one clear experience.",
          image: "/images/case-studies/replicoo-hero.png",
          imageAlt: "Replicoo medical records card showing activity history, documents, health metrics, and medications",
        },
        {
          slug: "twish",
          title: "Twish",
          category: "Personal Product · B2C · Zero to One",
          description:
            "I designed and built Twish from the ground up, owning the full product journey from user research and product strategy to UX/UI, AI-assisted development, launch, analytics, and iteration.",
          image: "/images/case-studies/twish-hero.png",
          imageAlt: "Twish homepage headline \"Wish it. Twish it.\" with a universal wishlist of products from different stores",
        },
      ],
    },
    howIWork: {
      heading: "From ambiguity to measurable product outcomes.",
      intro:
        "Product design work rarely moves in a straight line. These are the stages I move through on complex problems, often more than once.",
      loopNote:
        "In practice, these stages overlap and loop back. New information at stage six can send a project back to stage two. That's a normal part of designing for complexity, not a failure of process.",
      stages: [
        {
          number: "01",
          title: "Understand",
          items: [
            "Product problem",
            "Business context",
            "Existing behavior",
            "Available product data",
            "User needs",
            "Constraints",
          ],
        },
        {
          number: "02",
          title: "Frame",
          items: [
            "Jobs to be Done",
            "Key questions",
            "Product hypothesis",
            "Success criteria",
            "Technical limitations",
          ],
        },
        {
          number: "03",
          title: "Define",
          items: ["Scope", "MVP", "Information architecture", "User journey", "Priorities"],
        },
        {
          number: "04",
          title: "Explore",
          items: [
            "Possible approaches",
            "UX structure",
            "Data presentation",
            "Interaction patterns",
            "Design directions",
          ],
        },
        {
          number: "05",
          title: "Align & Validate",
          items: [
            "Product review",
            "Engineering feasibility",
            "Stakeholder alignment",
            "Trade-offs",
            "Iteration",
          ],
        },
        {
          number: "06",
          title: "Design & Deliver",
          items: [
            "Final UX/UI",
            "Design system",
            "States",
            "Edge cases",
            "Developer collaboration",
          ],
        },
        {
          number: "07",
          title: "Ship & Verify",
          items: ["Development", "Design QA", "Test environment", "Production validation"],
        },
        {
          number: "08",
          title: "Measure & Iterate",
          items: ["Product analytics", "Adoption", "User behavior", "Friction", "New opportunities"],
        },
      ],
    },
    leadership: {
      heading: "Designing products. Building the system around them.",
      supporting:
        "Alongside hands-on product design, I help shape how design works, scales, and delivers consistent experiences across a portfolio of products.",
      areas: [
        {
          title: "Design system & scalability",
          description:
            "I lead the evolution of a shared design system across multiple products, not just maintaining a library, but actively identifying product needs and initiating the creation and evolution of reusable components.",
          points: [
            "Identifying common product patterns",
            "Finding repeated UX/UI needs across applications",
            "Initiating new shared components",
            "Defining component behavior, states, and interaction logic",
            "Defining usage principles and maintaining consistency",
            "Collaborating with developers on implementation",
            "Reducing duplicated design and development effort",
            "Ensuring components can scale across different product contexts",
          ],
        },
        {
          title: "Design quality & consistency",
          description:
            "I help define and maintain a strong design quality bar across products.",
          points: [
            "UX reviews",
            "UI consistency",
            "Interaction patterns",
            "Component consistency",
            "Accessibility",
            "States and edge cases",
            "Design QA",
            "Cross-product consistency",
          ],
        },
        {
          title: "Product design direction",
          description:
            "I help designers and product teams structure complex problems before jumping into UI.",
          points: [
            "Problem framing",
            "Challenging assumptions",
            "Identifying user needs",
            "Evaluating possible solutions",
            "Defining flows and clarifying scope",
            "Connecting UX decisions with product and business goals",
            "Helping teams make trade-offs",
          ],
        },
        {
          title: "Team development",
          description:
            "I support the growth of designers by enabling them to make stronger product decisions independently, not by micromanaging their work.",
          points: [
            "Design reviews",
            "Constructive feedback",
            "Mentoring",
            "Knowledge sharing",
            "UX and product-thinking discussions",
            "Decision-making support",
            "Quality reviews",
          ],
        },
        {
          title: "Design operations",
          description: "I work on improving how the design function operates.",
          points: [
            "Design processes and documentation",
            "Product-design workflows",
            "Team agreements and templates",
            "Handoff processes",
            "Design review practices",
            "Collaboration between Product, Design, and Engineering",
            "Clearer ownership, less unnecessary work",
          ],
        },
        {
          title: "Design KPIs & impact",
          description:
            "I contribute to defining ways of measuring both product and design impact by building measurement frameworks and using available product analytics to evaluate decisions, rather than fabricating numbers.",
          points: [
            "Product adoption",
            "Feature usage",
            "Friction",
            "User behavior",
            "UX quality",
            "Design effectiveness",
            "Team effectiveness",
            "Delivery quality",
          ],
        },
      ],
    },
    beyond: {
      heading: "Beyond the screen",
      intro:
        "Product design is only one part of my role. I also work on the systems, processes, and standards that help design scale.",
      items: [
        {
          title: "Products",
          description: "Complex workflows & experiences",
        },
        {
          title: "Systems",
          description: "Components & design consistency",
        },
        {
          title: "People",
          description: "Feedback, mentoring & design direction",
        },
        {
          title: "Impact",
          description: "Analytics, KPIs & product outcomes",
        },
      ],
    },
    designSystem: {
      eyebrow: "Design system",
      heading: "I don't only design screens. I create systems that help products scale.",
      supporting:
        "Working across multiple products means the same complex UX problems often appear in different contexts. Part of my role is identifying these recurring patterns, defining their behavior and logic, and turning them into reusable solutions that can scale across products.",
      patterns: {
        heading: "Reusable patterns for complex product problems",
        intro:
          "The most valuable parts of a design system are not always individual UI elements. I focus on recurring product problems where interaction logic, states, configuration, and data behavior need to work consistently across different applications.",
        feedback: {
          title: "Feedback system",
          description: [
            "A reusable feedback pattern designed to capture user satisfaction at different moments in the product experience.",
            "The pattern can be permanently visible within an interface or triggered after a specific user action.",
            "Feedback responses and selected reasons can be connected to product analytics, allowing teams to track satisfaction, identify recurring friction, and use those insights to guide future product improvements.",
          ],
          flow: ["User interaction", "Feedback", "Reason", "Analytics", "Product insight", "Iteration"],
          note: "Not just a feedback UI component. It creates a measurable product feedback loop.",
        },
        filtering: {
          title: "Advanced filtering",
          description: [
            "A reusable filtering model designed to support different levels of query complexity within one consistent experience.",
            "The challenge is to keep different filtering models understandable within one interaction pattern while allowing individual products to configure the fields, logic, and available options they need.",
          ],
          emphasis: [
            "Flexible configuration",
            "Complex filtering logic",
            "Consistency",
            "Scalability",
            "Different levels of user expertise",
          ],
          convergeItems: ["Basic", "JQL", "Jira filters"],
          convergeTarget: "One shared filtering pattern",
        },
        dateRange: {
          title: "Flexible date range selection",
          description: [
            "A configurable date-selection pattern designed around reporting and analytics needs shared across multiple applications.",
            "The goal is to centralize complex date logic while allowing each product to expose only the options relevant to its use case.",
          ],
          groups: [
            {
              title: "Predefined ranges",
              items: [
                "Today",
                "Yesterday",
                "This week",
                "This month",
                "This year",
                "Last X days",
                "Last X weeks",
                "Last X months",
                "Last X years",
              ],
            },
            { title: "Custom input", items: ["Custom date ranges", "Manual date input"] },
            { title: "Contextual suggestions", items: ["Contextual date suggestions"] },
          ],
          note: "Configurability matters more here than visual appearance.",
        },
        scheduling: {
          title: "Report scheduling",
          description: [
            "A reusable scheduling pattern for configuring automated report delivery.",
            "The design challenge is to translate complex scheduling logic into a predictable configuration experience while supporting different recurrence rules, time zones, and delivery scenarios.",
          ],
          considerations: [
            "Recipients",
            "Recurrence",
            "Frequency",
            "Day of week",
            "Time",
            "Time zone",
            "Start date",
            "Upcoming execution",
            "Future scheduled runs",
            "Enabled and disabled states",
          ],
          timeline: { past: "Past runs", next: "Next run", upcoming: "Upcoming" },
        },
        permissions: {
          title: "Permissions & access",
          description: [
            "A reusable access pattern designed to communicate who can access specific product areas and at what level.",
            "The goal is to make complex access rules easy to scan and understand while keeping the underlying model flexible enough for different product contexts.",
          ],
          scopes: ["Organization", "Teams", "Groups", "Selected users"],
          convergeTarget: "One shared access model",
          accessStates: ["Allowed access", "Restricted access"],
        },
      },
      principles: {
        heading: "More than a component library",
        items: [
          {
            eyebrow: "Reusable logic",
            headline: "Design the behavior, not only the appearance.",
            body: "Reusable systems require more than consistent visual styling. I define interaction behavior, states, validation, dependencies, edge cases, and configuration logic so a pattern can work beyond one specific screen.",
          },
          {
            eyebrow: "Configurability",
            headline: "One foundation, different product needs.",
            body: "Shared patterns are designed to be configurable. Each product can use the same foundation while adapting fields, options, data sources, and business logic to its own context.",
          },
          {
            eyebrow: "Design + Engineering",
            headline: "Designed to be built and reused.",
            body: "I collaborate with Engineering while defining shared patterns so the solution is not only visually consistent but technically realistic, maintainable, and reusable.",
          },
          {
            eyebrow: "Evolution",
            headline: "A design system is never finished.",
            body: "New product requirements expose new states, edge cases, and patterns. I treat the system as an evolving product that grows through real use rather than as a static library.",
          },
        ],
      },
      process: {
        heading: "How a shared pattern becomes part of the system",
        stages: [
          {
            number: "01",
            title: "Identify",
            subtitle: "Recurring product need",
            body: "Recognize a UX problem or interaction pattern appearing across different product contexts.",
          },
          {
            number: "02",
            title: "Define",
            subtitle: "Behavior, logic and flexibility",
            body: "Define interaction behavior, states, edge cases, customization, data requirements, and usage principles.",
          },
          {
            number: "03",
            title: "Validate & build",
            subtitle: "Design + Engineering",
            body: "Validate the approach with product and technical context, then collaborate with Engineering on implementation.",
          },
          {
            number: "04",
            title: "Scale",
            subtitle: "Reuse, learn and evolve",
            body: "Introduce the pattern into different products, observe new requirements, and evolve the shared solution when necessary.",
          },
        ],
      },
      impact: {
        heading: "Why this matters",
        items: [
          { title: "Consistency", body: "Users encounter familiar patterns across products." },
          {
            title: "Speed",
            body: "Design and Engineering teams avoid repeatedly solving the same interaction problem.",
          },
          {
            title: "Quality",
            body: "States, edge cases, and behaviors are considered systematically instead of individually.",
          },
          {
            title: "Scalability",
            body: "New products and features can build on proven foundations while still adapting to their own requirements.",
          },
        ],
      },
      closing:
        "The goal isn't to make every product look identical. It's to create a shared foundation that lets teams solve complex problems consistently without limiting the needs of each product.",
      confidentialityNote:
        "Some working materials and implementation details are intentionally simplified to protect confidential product information.",
    },
    ai: {
      heading: "AI & design practice",
      supporting:
        "I explore how AI can strengthen, not replace, human judgment across the design process.",
      items: [
        "Product discovery and idea exploration",
        "Documentation",
        "UX writing",
        "Research synthesis",
        "Prototyping",
        "Repetitive design work",
        "Workflow automation",
        "Team efficiency",
      ],
      closing:
        "AI is a tool I use to move faster through exploration and repetitive work, so more time goes into judgment, framing, and decisions that actually need a human perspective.",
    },
    finalCta: {
      heading: "Let's talk about what you're building.",
      supporting:
        "Open to Senior Product Designer, Lead Product Designer, Design Lead, and Product Design Manager roles.",
      ctaPrimary: "View my work",
      ctaSecondary: "Get in touch",
    },
  },
  about: {
    eyebrow: "About",
    headline: "I design clarity into complex products.",
    paragraphs: [
      "I'm a Product Designer and Design Lead based in Bordeaux, France.",
      "I work on digital products where data, workflows, technical constraints, and business logic need to become clear and usable experiences.",
      "My work combines hands-on product design with design leadership, systems thinking, analytics, and close collaboration with Product and Engineering.",
      "I enjoy solving problems that require more than a polished interface, understanding why something should exist, how it should work, how it can scale, and how we know whether it worked.",
    ],
    highlightsTitle: "At a glance",
    highlights: [
      "6+ years in Product Design",
      "B2B SaaS & complex platforms",
      "Design leadership",
      "Design systems",
      "Product analytics",
      "AI-assisted product design",
    ],
    locationTitle: "Location",
    location: "Bordeaux, France",
    languagesTitle: "Languages",
    languages: [
      { name: "English", level: "B2" },
      { name: "French", level: "B2" },
      { name: "Ukrainian", level: "C2" },
      { name: "Russian", level: "C2" },
    ],
    imageAlt: "Portrait of Alesia Korenchuk",
  },
  resume: {
    eyebrow: "Resume",
    headline: "Experience, at a glance.",
    intro:
      "A concise overview of my experience, education, and product design expertise. Download my CV for the full professional history.",
    downloadCta: "Download CV",
    experience: {
      title: "Experience",
      years: "6+ years in Product Design",
      scope: "B2B SaaS · Atlassian ecosystem · B2C",
      body: [
        "Currently working as a Lead Product Designer / Design Lead, designing complex products across analytics, reporting, workflows, configuration, and data-heavy experiences.",
        "My work spans the full product lifecycle, from problem framing and exploration to delivery and design QA.",
        "I also lead and mentor designers and collaborate closely with Product, Engineering, and QA.",
      ],
    },
    education: {
      title: "Education",
      degrees: [
        { degree: "Master's Degree in Jurisprudence", institution: "Yaroslav Mudryi National Law University" },
        {
          degree: "Master's Degree in Accounting and Audit",
          institution: "National Technical University \"Kharkiv Polytechnic Institute\"",
        },
      ],
      additionalLabel: "Additional training",
      additional: { title: "UI/UX Design", institution: "IT Leaders DataArt · Design Kitchen" },
    },
    skills: {
      title: "Skills & tools",
      groups: [
        {
          title: "Product design",
          items: [
            "Product Discovery",
            "Problem Framing",
            "Complex Workflows",
            "Information Architecture",
            "Data-heavy UX & Reporting",
            "Design Systems",
            "Product Analytics",
            "Design QA",
            "Accessibility",
          ],
        },
        {
          title: "AI & prototyping",
          items: ["AI-assisted Product Design", "Rapid Prototyping", "Claude Code", "ChatGPT"],
        },
        {
          title: "Tools",
          items: ["Figma", "Jira", "Confluence", "Adobe Illustrator", "Photoshop"],
        },
      ],
    },
  },
  sprint: {
    meta: {
      eyebrow: "Case study",
      title: "Sprint Performance Report",
      category: "B2B SaaS · Product Design · Analytics · Jira",
      headline: "Turning fragmented Jira sprint data into one clear performance story.",
      intro:
        "Sprint Performance Report brings sprint context, velocity, workload, completion, priorities, and scope changes into one structured view, helping teams understand what happened during a completed sprint and why.",
      heroImageAlt:
        "Sprint Performance Report dashboard showing sprint overview, team velocity, workload, completion rate, committed and completed work, and scope change, with a burndown chart overlay",
    },
    metaRow: {
      role: "Lead Product Designer",
      product: "Time in Status for Jira",
      platform: "Jira Cloud",
      focus: "Product discovery · Data-heavy UX · Reporting · Design system · Design QA",
      collaboration: "Product · Engineering · QA · Design",
    },
    context: {
      heading: "Context",
      body: [
        "Sprint Performance Report is a visual, read-only sprint analysis inside the Time in Status app for Jira.",
        "It works with sprint-enabled Jira boards and uses the board's existing estimation method, such as Story Points, Work Item Count, or Original Time Estimate.",
        "Instead of requiring teams to manually combine multiple Jira views, the report brings sprint context, execution, workload, priorities, scope changes, and outcomes into one structured experience.",
      ],
    },
    problem: {
      heading: "Teams had the data. They didn't have the answer.",
      intro: [
        "Sprint information existed across Jira, but understanding the full outcome of a sprint required users to connect different signals themselves.",
        "The design challenge was not to add more data. It was to turn fragmented sprint information into a coherent story that could support planning, reviews, and retrospectives.",
      ],
      questions: [
        "What did we commit to?",
        "What was actually completed?",
        "Was workload balanced?",
        "How much work remained incomplete or carried over?",
        "Did the sprint scope change?",
        "Were the highest-priority items delivered?",
        "Was velocity stable across recent sprints?",
        "What affected the final sprint outcome?",
      ],
    },
    whyItMattered: {
      heading: "Why it mattered",
      userValueLabel: "User value",
      userValue:
        "Help project and delivery teams understand sprint performance faster, identify imbalances and scope changes, and use evidence instead of manually combining Jira data.",
      productValueLabel: "Product value",
      productValue:
        "Strengthen the reporting value of Time in Status by turning raw sprint data into a more actionable analysis experience.",
    },
    needed: {
      heading: "What the report needed to make clear",
      groups: [
        {
          title: "Planning",
          items: ["Did we commit to a realistic amount of work?", "Is team velocity stable?"],
        },
        {
          title: "Execution",
          items: ["How was work distributed across the team?", "Did workload change during the sprint?"],
        },
        {
          title: "Completion",
          items: ["How much committed work was completed?", "What remained incomplete?", "What carried over?"],
        },
        {
          title: "Scope",
          items: ["How much work was added or removed during the sprint?", "Did scope change affect delivery?"],
        },
        {
          title: "Priorities",
          items: ["Did the team complete the work that mattered most?"],
        },
      ],
    },
    currentExperience: {
      heading: "The fragmented path",
      steps: [
        "Need to evaluate sprint",
        "Review sprint issues",
        "Compare completed and incomplete work",
        "Check workload",
        "Review scope changes",
        "Compare priorities",
        "Interpret the result manually",
      ],
      callout: "One simple question required several disconnected checks: “How did our sprint actually perform?”",
      note: "Some process visualizations have been simplified for this case study to protect internal working materials.",
    },
    discovery: {
      heading: "Framing the problem",
      items: [
        {
          title: "Product data",
          body: "Existing product analytics and usage patterns helped provide context around reporting behavior and product interaction.",
        },
        {
          title: "Product and domain knowledge",
          body: "Existing Jira workflows, reporting behavior, feature knowledge, support context, and product input informed the problem framing.",
        },
        {
          title: "Technical context",
          body: "The solution needed to work within Jira data structures, available estimation methods, existing product architecture, reusable components, and engineering feasibility.",
        },
      ],
      competitiveIntro: "A lightweight review of comparable reporting products looked at:",
      competitiveItems: [
        "Reporting structure",
        "Metric hierarchy",
        "Data visualization",
        "Drill-down",
        "Historical comparison",
        "Workload presentation",
      ],
    },
    users: {
      heading: "Primary users",
      primary: {
        role: "Project Manager",
        need: "Understand whether the sprint performed as expected and what affected the result.",
      },
      secondary: {
        role: "Engineering / Delivery Manager",
        need: "Understand delivery predictability, workload distribution, completion, and scope stability.",
      },
      jtbdLabel: "Job to be done",
      jtbd:
        "When a sprint ends, I want to quickly understand what happened and why, so I can improve planning and the next sprint.",
    },
    hypothesis: {
      heading: "Product hypothesis",
      statement:
        "If sprint context, velocity, workload, completion, priorities, and scope changes are brought into one structured report, teams can understand what happened during the sprint without manually combining multiple Jira views.",
    },
    mvp: {
      heading: "Defining the first useful version",
      intro:
        "The challenge was not to show every available sprint metric. It was to identify the signals that together could explain the sprint outcome.",
      areas: ["Sprint information", "Team Velocity", "Workload", "Completion rate", "Committed", "Completed", "Scope change"],
      target: "Sprint Performance Report",
    },
    hierarchy: {
      heading: "From metrics to a sprint story",
      intro:
        "Not every metric should compete for the same level of attention. The report needed to move from context to performance, then into the signals that explain the result.",
      steps: [
        "Sprint context",
        "Velocity & delivery trend",
        "Workload & completion",
        "Priority distribution",
        "Scope change",
        "Sprint outcome",
      ],
      note: "This hierarchy is a portfolio-specific reconstruction of the reasoning behind the layout, not an original internal design artifact.",
    },
    deliveryTrends: {
      heading: "Delivery trends",
      intro:
        "Two complementary views help teams understand delivery from different perspectives. Team Velocity shows patterns across completed sprints, while Burndown shows how remaining work changed inside the selected sprint.",
      velocity: {
        title: "Team Velocity",
        body: "Shows committed versus completed work across recent completed sprints and provides context through average velocity.",
        points: [
          "Committed represents the work planned at sprint start.",
          "Completed represents work that reached the board's final status by sprint end.",
          "Average Velocity is based on completed work across the last seven completed sprints.",
        ],
        imageAlt: "Team Velocity chart comparing committed and completed story points across seven recent sprints",
      },
      burndown: {
        title: "Burndown chart",
        body: "Shows how remaining work changes during the selected sprint and helps teams understand how execution tracks against the expected trajectory.",
        imageAlt: "Burndown chart showing remaining story points against the guideline trajectory across the sprint",
      },
    },
    execution: {
      heading: "Execution & scope",
      intro:
        "A closer look at how sprint context, workload, completion, priorities, and scope changes come together to explain the final outcome.",
      imageAlt:
        "Sprint Performance Report cards showing sprint information, workload, completion rate, committed, completed, and scope change",
    },
    signals: {
      heading: "What each signal reveals",
      items: [
        {
          title: "Sprint information",
          body: "Provides sprint context such as sprint name, date range, goals, flagged work items, logged time, status time, and work item structure.",
        },
        {
          title: "Workload",
          body: "Shows how work is distributed between assignees and helps surface imbalance or mid-sprint changes.",
        },
        {
          title: "Completion rate",
          body: "Shows how much committed work was finished and provides context around incomplete work and carryover.",
        },
        {
          title: "Committed & Completed",
          body: "Show how planned work and delivered work are distributed by priority.",
        },
        {
          title: "Scope change",
          body: "Shows work added and removed during the sprint and provides visibility into scope stability.",
        },
      ],
    },
    principles: {
      heading: "Designing for understanding, not just data",
      items: [
        {
          title: "Prioritize the story",
          body: "Guide users from sprint context to outcome instead of giving every metric equal weight.",
        },
        {
          title: "Keep related signals together",
          body: "Place metrics such as commitment, completion, workload, and scope in a structure that supports comparison.",
        },
        {
          title: "Reduce interpretation effort",
          body: "Use visualizations where trends or distribution matter and clear values where precision matters more.",
        },
        {
          title: "Design for reuse",
          body: "Use shared patterns and components that can scale across other reporting experiences.",
        },
      ],
    },
    designSystem: {
      heading: "Design system & scalability",
      body: "The report was designed using reusable patterns that could support other reporting experiences across the product portfolio.",
      patterns: ["Cards", "Charts", "Filters", "Status patterns", "Tables", "Empty states", "Loading states", "Error states"],
      visualNote: "Simplified portfolio visualization, not an original Figma artifact.",
    },
    collaboration: {
      heading: "Product and engineering collaboration",
      steps: [
        "Problem framing",
        "Product alignment",
        "Design exploration",
        "Technical validation",
        "Iteration",
        "Development",
        "Design QA",
        "Test environment",
        "Production",
      ],
      body: "Engineering collaboration was part of the design process rather than a final handoff step. Technical feasibility, implementation constraints, and existing product patterns informed decisions throughout the work.",
    },
    designQA: {
      heading: "From design to production",
      body: "I reviewed the implemented experience in the test environment, checked visual and behavioral consistency, documented issues, and worked with engineers through final adjustments before production.",
      areas: ["Visual QA", "Interaction QA", "States", "Edge cases", "Loading and error behavior", "Consistency"],
    },
    measuring: {
      heading: "Measuring what happens after release",
      body: "After release, the product can be evaluated through signals such as report usage, feature adoption, repeat usage, interaction patterns, and friction in the user journey.",
      note: "Quantitative post-release results are not included in this case study.",
    },
    outcome: {
      heading: "Outcome",
      body: [
        "Sprint Performance Report created a single structured experience for understanding a completed sprint, bringing context, delivery trends, workload, completion, priorities, and scope changes into one report.",
        "It also established a scalable foundation for deeper sprint analysis within the broader Time in Status reporting experience.",
      ],
    },
    learned: {
      heading: "What I learned",
      body: [
        "More data does not necessarily create more clarity.",
        "The key design challenge was deciding which signals needed attention, how they related to each other, and how to turn multiple metrics into one understandable sprint story.",
        "This work reinforced the importance of combining information hierarchy, product context, technical feasibility, and analytics thinking when designing data-heavy experiences.",
      ],
    },
    marketplace: {
      heading: "See the product in action",
      body: "Sprint Performance Report is part of Time in Status for Jira. Explore the product on the Atlassian Marketplace to see it in the context of the full Time in Status experience.",
      cta: "View on Atlassian Marketplace",
    },
  },
  sla: {
    meta: {
      eyebrow: "Case study",
      title: "SLA Management & Reporting",
      category: "B2B SaaS · Jira · SLA · Reporting · Complex workflows",
      headline: "Simplifying complex SLA reporting and making data behavior easier to understand.",
      intro:
        "Redesigning reporting logic across SLA table and chart views to make filtering, time ranges, and data behavior more consistent and understandable.",
      heroImageAlt:
        "SLA reporting dashboard showing filtered work items with response time and resolution time timers by priority",
    },
    metaRow: {
      role: "Lead Product Designer",
      product: "SLA Time and Report for Jira",
      platform: "Jira Cloud",
      focus: "Reporting · Filtering · Data-heavy UX · Product logic · Design system",
      collaboration: "Product · Engineering · QA · Design",
    },
    context: {
      heading: "Context",
      body: [
        "SLA Time and Report for Jira supports different ways of analyzing SLA performance, including table-based and chart-based reporting.",
        "Different report types can answer different questions, but they also introduce different data and time-based behaviors.",
        "As the reporting experience grew, similar-looking controls could influence report results differently depending on the report type.",
      ],
    },
    problem: {
      heading: "Similar controls. Different behavior.",
      body: [
        "Users could work with several SLA report types, including table views and chart-based reports.",
        "Although these experiences often worked with similar sets of work items and similar filters, some reporting logic behaved differently under the hood.",
        "For example, a date-related control could determine which work items were included in the report.",
        "In some report types, the same time-related logic could also affect the period displayed or calculated in the visualization.",
        "The underlying logic could be technically correct, but the interface did not make these differences explicit.",
        "This meant similar-looking reports could produce results that were difficult to compare or predict from the UI alone.",
      ],
    },
    whyItMattered: {
      heading: "Why it mattered",
      userLabel: "For users",
      userBody:
        "Reporting needs to feel predictable. When similar controls influence different parts of the calculation depending on report type, it becomes harder to understand why results differ and what exactly a filter is doing.",
      productLabel: "For the product",
      productBody:
        "As reporting grows, inconsistent interaction logic becomes harder to maintain and scale. New table and chart reports need a shared model that can support different use cases without introducing a new filtering behavior every time.",
    },
    challenge: {
      heading: "The design challenge",
      statement:
        "How might we separate “which work items belong in the report” from “which time period the report should visualize or calculate”, while keeping the experience consistent across different report types?",
    },
    oldModel: {
      heading: "One control could carry multiple responsibilities",
      control: "Date-related input",
      branchA: { title: "Select data", question: "Which work items belong in the report?" },
      branchB: { title: "Report period", question: "Which time period should the visualization represent?" },
      consequences: ["Behavior could differ depending on report type", "Harder to predict from the interface"],
      note: "The logic has been simplified for this case study to protect internal product details.",
    },
    direction: {
      heading: "Separate the responsibilities",
      beforeTitle: "Before",
      beforeControl: "One date-related control",
      beforeConsequences: ["Data selection", "Report period", "Report-specific behavior"],
      afterTitle: "After",
      afterDataSelection: { title: "Data selection", question: "Which work items should be included?" },
      afterConnector: "separate from",
      afterReportPeriod: { title: "Report period", question: "Which time period should the report visualize?" },
      afterTargets: ["Table reports", "Chart reports", "Other SLA reporting experiences"],
    },
    dataFilter: {
      heading: "A clearer data-selection model",
      intro: "The filtering layer should have one clear responsibility: define which work items belong in the report.",
      criteria: ["Project", "Status", "Created date", "Updated date", "Resolved date", "Other report-relevant fields"],
      target: "One reusable data filter",
      note: "The exact available fields can vary by report. The interaction pattern should remain consistent.",
      emphasis: [
        "One responsibility",
        "Predictable behavior",
        "Reusable structure",
        "Configurable fields",
        "Scalable across report types",
      ],
    },
    reportPeriod: {
      heading: "Time as part of the report, not hidden inside the filter",
      intro:
        "Chart-based reporting may also need to define the time period represented in the visualization. That responsibility should be understandable independently from the data-selection criteria.",
      filterExample: {
        label: "Data filter",
        value: "Created last month",
        meaning: "Select work items that match this condition.",
      },
      periodExample: {
        label: "Report period",
        value: "Last month",
        meaning: "Visualize or calculate the report within this period.",
      },
      note: "The distinction should be visible in the interaction model rather than existing only in the underlying calculation logic.",
    },
    views: {
      heading: "One reporting system, different views",
      table: {
        title: "Table view",
        label: "Best for",
        items: ["Individual work items", "Detailed SLA values", "Status and issue-level analysis"],
      },
      chart: {
        title: "Chart report",
        label: "Best for",
        items: ["Patterns", "Distribution", "Performance over time", "Aggregated SLA insights"],
      },
      sharedLabel: "Shared foundation",
      sharedItems: ["Data selection", "SLA logic", "Reporting definitions"],
      differentLabel: "Different presentation",
      differentItems: ["Table", "Chart"],
    },
    principles: {
      heading: "Principles guiding the redesign",
      items: [
        {
          title: "Clear responsibility",
          body: "Every control should communicate what part of the report it affects.",
        },
        {
          title: "Consistent behavior",
          body: "Similar controls should behave predictably across report types.",
        },
        {
          title: "Reusable logic",
          body: "The filtering model should scale across new reports without reinventing interactions.",
        },
        {
          title: "Progressive complexity",
          body: "Advanced reporting capabilities should not make the basic experience harder to understand.",
        },
      ],
    },
    systemThinking: {
      heading: "Designing beyond one report",
      intro:
        "The goal is not only to fix one reporting screen. The work is also about establishing reusable reporting patterns that can support future SLA views.",
      steps: ["Data selection", "Shared reporting logic"],
      views: ["Table view", "Chart view", "Dashboard experience", "Future reporting views"],
    },
    collaboration: {
      heading: "Product and engineering collaboration",
      steps: [
        "Problem framing",
        "Logic mapping",
        "Product alignment",
        "Design direction",
        "Technical validation",
        "Iteration",
        "Implementation",
        "Design QA",
      ],
      body: "Because much of the challenge sits in reporting behavior rather than visual styling alone, Product and Engineering collaboration is part of the design process from the beginning.",
    },
    currentStatus: {
      heading: "Where the work is now",
      body: [
        "The reporting redesign is still in progress.",
        "Some interaction models and internal screens are intentionally not included in this case study because they have not yet been released.",
        "The portfolio focuses instead on the product problem, design reasoning, and system direction behind the work.",
      ],
    },
    expectedImpact: {
      heading: "Expected impact",
      body: "A clearer separation between data selection and reporting period is intended to make report behavior easier to predict, improve consistency across report types, and create a stronger foundation for future SLA reporting experiences.",
      items: [
        "More predictable reporting",
        "Clearer filter responsibilities",
        "Better consistency between views",
        "More scalable reporting patterns",
        "Easier extension to future reports",
      ],
    },
    demonstrates: {
      heading: "What this work demonstrates",
      body: [
        "Complex product problems are often not visible in individual screens.",
        "In this project, the core design challenge sits in the relationship between data selection, reporting logic, time, and visualization.",
        "The work required understanding system behavior first, then defining an interaction model that can remain clear as the product grows.",
      ],
    },
    explore: {
      heading: "Explore the product",
      intro: "SLA Management & Reporting is part of SLA Time and Report for Jira.",
      marketplaceLabel: "Marketplace",
      marketplaceCta: "View on Atlassian Marketplace",
      videoLabel: "Video",
      videoCta: "Watch product overview",
      videoImageAlt: "Product overview video preview for SLA Time and Report for Jira",
    },
  },
  replicoo: {
    meta: {
      eyebrow: "0→1 Case study",
      title: "Replicoo",
      headline: "Making complex medical information easier to understand and navigate.",
      category: "AI · Healthcare · 0→1 Product",
      role: "Product Designer",
      platform: "AI-powered web product",
      collaboration: ["Founders", "Engineering", "Design"],
      contribution: [
        "0→1 product exploration",
        "AI interaction design",
        "Information clarity",
        "UX/UI",
        "Rapid iteration",
      ],
      heroNote:
        "Where safe final screenshots are not available, this case study uses simplified diagrams rather than fabricated product UI.",
    },
    context: {
      heading: "Context",
      body: [
        "Replicoo is an AI-powered healthcare product aimed at making complex medical information easier to understand and navigate.",
      ],
    },
    challenge: {
      heading: "The challenge",
      body: [
        "Medical information is dense, technical, and high-stakes. The challenge was designing an AI-assisted experience that makes that information more approachable without oversimplifying it or undermining trust.",
      ],
    },
    approach: {
      heading: "Approach",
      body: [
        "As a 0→1 product, this work involved early-stage exploration: defining what the product should be, how AI-generated content should be presented, and how to build trust into an interface handling sensitive information.",
      ],
      points: [
        "Early-stage product and interaction exploration",
        "Designing how AI-generated explanations are presented",
        "Structuring complex medical information for clarity",
        "Designing for trust in a sensitive, high-stakes context",
        "Rapid iteration in a 0→1 environment",
      ],
    },
    diagrams: [
      {
        heading: "Product concept",
        kind: "pills",
        intro: "How the core pieces of the product relate to each other.",
        items: ["User", "Medical information", "AI", "Explanation & guidance"],
      },
      {
        heading: "Core user journey",
        kind: "flow",
        items: [
          "User enters or uploads information",
          "AI processes context",
          "User receives structured explanation",
          "User explores details or next steps",
        ],
      },
      {
        heading: "Trust & clarity principles",
        kind: "pills",
        items: ["Clear source / context", "Plain language", "Hierarchy", "User control", "Transparency"],
      },
      {
        heading: "0→1 exploration",
        kind: "flow",
        items: ["Problem", "Hypothesis", "Core experience", "MVP", "Iteration"],
      },
    ],
    details: {
      heading: "Designing for trust and clarity",
      body: [
        "In a healthcare context, clarity and trust are inseparable. Every interface decision had to support both.",
      ],
      items: [
        "Presenting AI-generated content transparently",
        "Structuring dense medical information into digestible layers",
        "Designing navigation for non-linear exploration of information",
        "Establishing visual and interaction patterns for a new 0→1 product",
      ],
    },
    outcome: {
      heading: "Outcome",
      body: [
        "Replicoo's design work established an approach for presenting complex medical information through an AI-assisted experience, with clarity and trust as the guiding principles.",
      ],
    },
    note: "This case study is intentionally shorter and will be expanded over time. As with all client and product work here, no user, funding, or clinical outcome data is claimed.",
  },
  twish: {
    meta: {
      eyebrow: "Personal Product · 0→1 · Live",
      title: "Twish",
      category: "Personal Product · B2C · Zero to One",
      headline: "From an everyday problem to a real product.",
      intro:
        "I designed and built Twish, a universal wishlist that makes it easier to collect wishes, share them, and coordinate gifts without spoiling the surprise.",
      heroImageAlt:
        'Twish homepage headline "Wish it. Twish it." with a universal wishlist of products from different stores',
    },
    metaRow: {
      role: "Product Designer · Product Owner · AI-Assisted Builder",
      product: "B2C Web App",
      scope: "Research · Product Strategy · UX/UI · Build · Launch · Analytics",
      status: "Live product · Ongoing iteration",
    },
    statusLabel: "Status",
    capabilities: ["Product Strategy", "User Research", "UX/UI", "AI-Assisted Development", "Analytics"],
    liveCta: "Visit live product",
    finalCta: "Explore Twish",
    problem: {
      heading: "It started with a very ordinary problem.",
      body: [
        "Gift ideas are often scattered across screenshots, messages, notes, and different online stores.",
        "That makes a wishlist hard to maintain and hard to share, and it creates friction for the people trying to choose a gift.",
        "Twish explores whether that fragmented experience could become one universal wishlist: collect wishes from anywhere, share one list, and coordinate gifts without ruining the surprise.",
      ],
      fragmentsIntro: "Before Twish, a single wishlist lived in pieces.",
      fragments: ["Screenshots", "Product links", "Messages", "Notes", "Different stores"],
      convergeTarget: "One wishlist, in Twish",
    },
    understanding: {
      heading: "Understanding how people actually manage wishes and gifts.",
      intro:
        "The idea started with a very ordinary behaviour: gift ideas rarely live in one place. They get saved as screenshots, notes, messages and product links, then have to be found and shared again when a birthday or celebration comes around. I wanted to understand what would make that experience simpler for both sides: the person creating a wishlist and the person choosing a gift.",
      personal: {
        title: "Personal experience",
        body: "Gift ideas were fragmented across screenshots, notes, messages and links from different stores. When it was time to share them, everything had to be collected again.",
        question: "How could one wishlist collect products from anywhere and be shared through a single link?",
      },
      feedback: {
        title: "Conversations & continuous feedback",
        body: [
          "I discussed the idea with my husband, friends and people around me who regularly buy gifts, use wishlists or simply exchange product links.",
          "Once the MVP was live, I continued learning by giving people the real product and observing where they hesitated or became confused.",
          "This wasn't a one-off research phase. Feedback continued alongside the product as I designed, shipped and iterated.",
        ],
      },
      competitive: {
        title: "Competitive exploration",
        intro: "I looked at existing wishlist products to understand common patterns and where friction still existed.",
        products: ["GiftList", "Giftster", "Elfster", "MyWishlist.online"],
        dimensionsLabel: "I looked specifically at:",
        dimensions: [
          "Adding a product by pasting a URL",
          "Automatic extraction of product name, image and price",
          "Whether a browser extension is required",
          "Reservation behaviour",
          "The shared wishlist / guest experience",
          "Adding products from different stores",
          "Account requirements for basic actions",
          "Wishlist import / migration",
        ],
      },
      principlesHeading: "What this shaped",
      principles: [
        { title: "Universal", body: "Products shouldn't be tied to a single retailer." },
        { title: "Low friction", body: "Adding a wish should take as little effort as possible." },
        { title: "Easy to share", body: "One link should be enough to share a wishlist." },
        { title: "Private when needed", body: "Different people don't always need access to the same information." },
        {
          title: "Surprise-safe",
          body: "Reservation should help gift coordination without revealing the surprise to the wishlist owner.",
        },
      ],
      opportunity:
        "People may already have wishlists elsewhere and shouldn't necessarily have to recreate them manually. This later informed the idea of importing an existing wishlist by link.",
    },
    mvp: {
      heading: "What was the smallest experience worth shipping?",
      intro:
        "I deliberately focused the first version on validating the core product behaviour instead of building every possible wishlist feature.",
      journey: [
        "Create wishlist",
        "Add wishes",
        "Share wishlist",
        "Open as guest",
        "Choose a gift",
        "Reserve",
        "Keep the surprise",
      ],
      includedLabel: "MVP",
      included: ["Create wishlist", "Add wishes", "Share", "Guest access", "Reserve gifts", "Protect the surprise"],
      laterLabel: "Later opportunities",
      later: [
        "Import existing wishlists",
        "Delivery information",
        "Friends",
        "Price comparison",
        "Affiliate features",
        "Gamification",
        "Additional discovery features",
      ],
    },
    decisions: {
      heading: "Key product decisions",
      intro: "Three decisions that shaped the product, and why I made them.",
      items: [
        {
          title: "Make adding a wish effortless",
          problemLabel: "Problem",
          problem: "Adding products manually creates unnecessary effort.",
          decisionLabel: "Decision",
          decision: "Support adding a wish by pasting a product link, while keeping manual entry available.",
          whyLabel: "Why",
          why: "Reduce friction at one of the most frequent actions in the product.",
          resultLabel: "Result",
          result:
            "Paste a link, Twish takes care of the details: product information is fetched automatically and added to the wishlist.",
        },
        {
          title: "One wishlist, two perspectives",
          problemLabel: "Problem",
          problem:
            "The owner manages their wishlist but should not see who reserved a gift. Guests need to understand what's available and reserve a gift without revealing the surprise.",
          decisionLabel: "Decision",
          decision:
            "Render the same wishlist item differently depending on who is viewing it: owners see their list exactly as they built it, guests see reservation status.",
          whyLabel: "Why",
          why: "Surprise is core to gifting. A wishlist that leaks reservation status to the owner solves coordination at the cost of the thing gifting is for.",
          resultLabel: "Result",
          result: "One data model, two views — duplicate gifts are avoided without the surprise being spoiled.",
        },
        {
          title: "Remove friction from sharing",
          problemLabel: "Problem",
          problem:
            "Asking a gift giver to create an account before they can view or reserve a gift adds friction at the exact moment they're trying to help.",
          decisionLabel: "Decision",
          decision: "Make the shared wishlist and guest reservation flow fully usable without an account.",
          whyLabel: "Why",
          why: "Gift givers aren't the product's core user — they're helping someone else. Every extra step reduces the chance they complete it.",
          resultLabel: "Result",
          result: "A shared link opens directly to the wishlist. No sign-up is needed to reserve a gift.",
        },
      ],
    },
    product: {
      heading: "The product",
      intro: "From flows to a working product — the core journey, across the screens that matter most.",
    },
    builder: {
      heading: "I didn't stop at the prototype.",
      body: [
        "Twish expanded my role beyond traditional product design into building, testing, and shipping the actual product with AI-assisted development.",
        "I translated product requirements and UX decisions into working features, tested implementation directly, debugged issues, and iterated — with product decisions, UX architecture, and quality control remaining my responsibility throughout.",
      ],
      steps: ["Research", "Define", "Design", "Build with AI", "Test", "Deploy", "Measure", "Iterate"],
      responsibilitiesLabel: "What this required",
      responsibilities: ["Product strategy", "UX/UI", "AI-assisted development", "QA", "Deployment", "Analytics"],
    },
    measure: {
      heading: "Shipping was the beginning of the learning loop.",
      intro:
        "Once Twish was in people's hands, some problems became much easier to see than they had been in prototypes. Instead of redesigning the product all at once, I focused on the moments where people hesitated, got confused, or had to work harder than necessary.",
      storyLabels: { observation: "Observation", hypothesis: "Hypothesis", change: "Change", learning: "Learning" },
      stories: [
        {
          title: "Owner vs. guest experience",
          observation:
            "The biggest source of confusion was the shared wishlist experience. Owners and guests were using the same wishlist for very different reasons, but the distinction between those experiences wasn't always clear enough.",
          hypothesis:
            "Giving each role only the information and actions it needs would make the shared experience easier to understand and protect the surprise.",
          change:
            "I separated the owner and guest states more clearly. Owners manage their wishlist without seeing unnecessary reservation information, while guests can immediately understand what is available and what they can reserve.",
          learning:
            "A shared product doesn't always need a shared interface. Designing around what each person needs to know can make the overall experience simpler.",
        },
        {
          title: "Friends & empty states",
          observation:
            'The Friends experience became confusing in empty or low-content states. "No friends yet" and "a friend hasn\'t shared anything yet" are different situations, but the interface didn\'t communicate that clearly enough.',
          hypothesis: "Context-specific empty states would help people understand what was happening and what they could do next.",
          change:
            "I separated the empty states for Friends and individual friend pages, simplified the copy, and reduced unnecessary mobile UI. Search was also made more contextual so it didn't take up space when there were only a few friends.",
          learning:
            "Empty states are part of the product flow, not filler. They need to explain the current situation and make the next step obvious.",
        },
        {
          title: "Mobile experience",
          observation:
            "On smaller screens, some UI elements were too large, pages required unnecessary scrolling, and back navigation wasn't always obvious.",
          hypothesis:
            "A more compact hierarchy and clearer mobile navigation would make the product feel lighter and easier to move through.",
          change:
            "I reduced heading sizes and spacing, made actions more compact, improved touch targets, clarified back navigation, and reworked the mobile hierarchy around the most important actions.",
          learning: "Responsive design isn't just fitting desktop UI onto a smaller screen. The hierarchy itself often needs to change.",
        },
      ],
      otherLabel: "Other improvements after launch",
      other: [
        {
          title: "Add wish",
          body: "Removed technical fields such as image URL. Images can now be uploaded, pasted from the clipboard, or added via drag and drop, with immediate preview.",
        },
        {
          title: "Import",
          body: "Simplified the wishlist import experience and made the flow easier to understand.",
        },
        {
          title: "Reservation success",
          body: "Replaced a purely technical confirmation with a warmer success state, and added a subtle opportunity for guests to create their own wishlist after reserving a gift.",
        },
      ],
    },
    reflection: {
      heading: "What building Twish changed for me",
      items: [
        {
          title: "Ownership",
          body: "Design decisions feel different when you're responsible for what actually ships.",
        },
        {
          title: "Shipping creates evidence",
          body: "A real product answers questions prototypes can't.",
        },
        {
          title: "AI changed my role",
          body: "AI shortened the distance between design and implementation and allowed me to test ideas directly in a working product.",
        },
      ],
    },
  },
};
