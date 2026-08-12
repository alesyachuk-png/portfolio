import Link from "next/link";
import type { ShortCaseStudy } from "@/content/types";
import type { AssetSlot } from "@/content/assets";
import type { Locale } from "@/lib/i18n";
import { CaseStudyHero } from "./CaseStudyHero";
import { CSSection } from "./Section";
import { ConfidentialNote } from "./ConfidentialNote";
import { DecisionCards } from "./DecisionCards";
import { DiagramBlockRenderer } from "./DiagramBlockRenderer";
import { AssetPlaceholder } from "./AssetPlaceholder";
import { Reveal, Stagger, StaggerItem } from "../motion";
import { CTAButton } from "../Button";

const decisionLabels = {
  en: { context: "Context", options: "Options considered", constraint: "Constraint", reasoning: "Reasoning", outcome: "Outcome" },
  fr: { context: "Contexte", options: "Options envisagées", constraint: "Contrainte", reasoning: "Raisonnement", outcome: "Résultat" },
};

export function ShortCaseStudyLayout({
  study,
  locale,
  labels,
  heroSlot,
  finalGallery,
  finalHeading,
  finalIntro,
  nextHref,
  nextTitle,
}: {
  study: ShortCaseStudy;
  locale: Locale;
  labels: {
    roleLabel: string;
    platformLabel: string;
    collaborationLabel: string;
    contributionLabel: string;
    backToWork: string;
    nextProject: string;
  };
  heroSlot: AssetSlot;
  finalGallery: AssetSlot[];
  finalHeading: string;
  finalIntro: string;
  nextHref: string;
  nextTitle: string;
}) {
  return (
    <>
      <CaseStudyHero
        meta={study.meta}
        heroSlot={heroSlot}
        locale={locale}
        labels={{
          role: labels.roleLabel,
          platform: labels.platformLabel,
          collaboration: labels.collaborationLabel,
          contribution: labels.contributionLabel,
        }}
      />

      <CSSection heading={study.context.heading} tone="white">
        <div className="max-w-2xl space-y-4">
          {study.context.body.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="text-base leading-relaxed text-ink/70">{p}</p>
            </Reveal>
          ))}
        </div>
      </CSSection>

      <CSSection heading={study.challenge.heading} tone="mist">
        <div className="max-w-2xl space-y-4">
          {study.challenge.body.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="text-base leading-relaxed text-ink/70">{p}</p>
            </Reveal>
          ))}
        </div>
      </CSSection>

      <CSSection heading={study.approach.heading} tone="white">
        <div className="max-w-2xl space-y-4">
          {study.approach.body.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="text-base leading-relaxed text-ink/70">{p}</p>
            </Reveal>
          ))}
        </div>
        <Stagger className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {study.approach.points.map((point) => (
            <StaggerItem
              key={point}
              className="flex items-start gap-3 rounded-xl border border-line bg-white px-5 py-4 text-sm leading-relaxed text-ink/75"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {point}
            </StaggerItem>
          ))}
        </Stagger>
      </CSSection>

      {study.diagrams && study.diagrams.length > 0 ? (
        <CSSection tone="mist">
          <div className="flex flex-col gap-14">
            {study.diagrams.map((block) => (
              <DiagramBlockRenderer key={block.heading} block={block} />
            ))}
          </div>
        </CSSection>
      ) : null}

      {study.decisions ? (
        <CSSection heading={study.decisions.heading} tone="white">
          <Reveal className="max-w-2xl">
            <p className="text-base leading-relaxed text-ink/70">{study.decisions.intro}</p>
          </Reveal>
          <DecisionCards cards={study.decisions.cards} labels={decisionLabels[locale]} />
        </CSSection>
      ) : null}

      <CSSection heading={study.details.heading} tone="lavender">
        <div className="max-w-2xl space-y-4">
          {study.details.body.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="text-base leading-relaxed text-ink/70">{p}</p>
            </Reveal>
          ))}
        </div>
        <Stagger className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {study.details.items.map((item) => (
            <StaggerItem key={item} className="rounded-xl bg-white px-5 py-4 text-sm font-medium text-ink/80">
              {item}
            </StaggerItem>
          ))}
        </Stagger>
      </CSSection>

      <CSSection heading={finalHeading} tone="white">
        <Reveal className="max-w-2xl">
          <p className="text-base leading-relaxed text-ink/70">{finalIntro}</p>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {finalGallery.map((slot) => (
            <AssetPlaceholder key={slot.key} slot={slot} locale={locale} />
          ))}
        </div>
      </CSSection>

      <CSSection heading={study.outcome.heading} tone="mist">
        <div className="max-w-2xl space-y-4">
          {study.outcome.body.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="text-xl font-medium leading-relaxed text-ink md:text-2xl">{p}</p>
            </Reveal>
          ))}
        </div>
        {study.note ? (
          <div className="max-w-2xl pt-2">
            <ConfidentialNote text={study.note} />
          </div>
        ) : null}
      </CSSection>

      <section className="border-t border-line bg-paper-soft py-16">
        <div className="container-content flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <Link href={`/${locale}#work`} className="text-sm font-medium text-ink/60 hover:text-ink">
            ← {labels.backToWork}
          </Link>
          <CTAButton href={nextHref} variant="primary">
            {labels.nextProject}: {nextTitle}
          </CTAButton>
        </div>
      </section>
    </>
  );
}
