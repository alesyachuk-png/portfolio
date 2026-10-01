import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/content";
import { twishAssets } from "@/content/assets";
import { CSSection } from "@/components/casestudy/Section";
import { FlowDiagram } from "@/components/casestudy/FlowDiagram";
import { PillGroup } from "@/components/casestudy/PillGroup";
import { AssetPlaceholder } from "@/components/casestudy/AssetPlaceholder";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { CTAButton } from "@/components/Button";

const LIVE_URL = "https://twishnow.com";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);
  return {
    title: dict.twish.meta.title,
    description: dict.twish.meta.headline,
  };
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex max-w-xs flex-col gap-1.5">
      <p className="text-xs font-medium uppercase tracking-wide text-ink/40">{label}</p>
      <p className="text-sm font-medium leading-relaxed text-ink">{value}</p>
    </div>
  );
}

function ExternalIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={`h-3.5 w-3.5 ${className}`} aria-hidden fill="none">
      <path
        d="M6 3.5H3.75A1.25 1.25 0 0 0 2.5 4.75v7.5a1.25 1.25 0 0 0 1.25 1.25h7.5a1.25 1.25 0 0 0 1.25-1.25V10M9.5 2.5h4v4M13.25 2.75 7.5 8.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Editorial replacement for "fragmented sources converge into one product":
// plain typographic labels (no pills/buttons), hairline SVG paths standing in
// for the literal arrows, and a minimal wireframe "wishlist artifact" instead
// of a dark CTA-shaped target.
function FragmentedSources({ fragments, target }: { fragments: string[]; target: string }) {
  const indents = ["", "md:ml-8", "md:ml-2", "md:ml-10", "md:ml-4"];
  return (
    <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto_auto] md:gap-6">
      <Stagger className="flex flex-col gap-5 md:gap-7">
        {fragments.map((f, i) => (
          <StaggerItem
            key={f}
            className={`text-base font-medium text-ink/55 md:text-lg ${indents[i % indents.length]}`}
          >
            {f}
          </StaggerItem>
        ))}
      </Stagger>

      <svg viewBox="0 0 72 180" className="hidden h-44 w-20 md:block" preserveAspectRatio="none" aria-hidden>
        {fragments.map((_, i) => {
          const y = 14 + i * (152 / Math.max(fragments.length - 1, 1));
          return (
            <path key={i} d={`M0,${y} C36,${y} 36,90 72,90`} fill="none" stroke="#B7C7FB" strokeWidth="1" />
          );
        })}
        <circle cx="72" cy="90" r="2.5" fill="#2954E5" />
      </svg>

      <Reveal
        delay={0.1}
        className="w-full max-w-[220px] justify-self-center rounded-xl border border-line/70 bg-white p-5 md:justify-self-start"
      >
        <p className="text-[11px] font-semibold uppercase tracking-wide text-accent">Twish</p>
        <p className="mt-1 font-display text-base font-semibold leading-snug text-ink">{target}</p>
        <div className="mt-4 flex flex-col gap-2.5">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-2.5">
              <span className="h-5 w-5 shrink-0 rounded-[4px] bg-paper-mist" aria-hidden />
              <span className="h-1 flex-1 rounded-full bg-paper-mist" aria-hidden />
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

function LiveProductCta({ label }: { label: string }) {
  return (
    <a
      href={LIVE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-all duration-300 ease-premium hover:bg-accent-600"
    >
      <span>{label}</span>
      <ExternalIcon className="transition-transform duration-300 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

function DecisionStory({
  title,
  problemLabel,
  problem,
  decisionLabel,
  decision,
  whyLabel,
  why,
  resultLabel,
  result,
  visual,
}: {
  title: string;
  problemLabel: string;
  problem: string;
  decisionLabel: string;
  decision: string;
  whyLabel: string;
  why: string;
  resultLabel: string;
  result: string;
  visual: ReactNode;
}) {
  return (
    <Reveal className="grid grid-cols-1 gap-8 rounded-card border border-line bg-white p-6 md:grid-cols-2 md:p-8">
      <div className="flex flex-col gap-5">
        <p className="font-display text-xl font-semibold text-ink">{title}</p>
        <div className="flex flex-col gap-1">
          <p className="text-xs font-medium uppercase tracking-wide text-ink/40">{problemLabel}</p>
          <p className="text-sm leading-relaxed text-ink/70">{problem}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs font-medium uppercase tracking-wide text-ink/40">{decisionLabel}</p>
          <p className="text-sm leading-relaxed text-ink/70">{decision}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs font-medium uppercase tracking-wide text-ink/40">{whyLabel}</p>
          <p className="text-sm leading-relaxed text-ink/70">{why}</p>
        </div>
        <div className="mt-auto flex flex-col gap-1 rounded-xl bg-accent-50 p-3">
          <p className="text-xs font-medium uppercase tracking-wide text-accent-600">{resultLabel}</p>
          <p className="text-sm font-medium leading-relaxed text-ink">{result}</p>
        </div>
      </div>
      <div className="flex items-center">{visual}</div>
    </Reveal>
  );
}

function IterationStory({
  title,
  labels,
  observation,
  hypothesis,
  change,
  learning,
}: {
  title: string;
  labels: { observation: string; hypothesis: string; change: string; learning: string };
  observation: string;
  hypothesis: string;
  change: string;
  learning: string;
}) {
  return (
    <Reveal className="flex flex-col gap-4 border-l-2 border-line pl-5">
      <p className="font-display text-base font-semibold text-ink">{title}</p>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-0.5">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">{labels.observation}</p>
          <p className="text-sm leading-relaxed text-ink/70">{observation}</p>
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">{labels.hypothesis}</p>
          <p className="text-sm leading-relaxed text-ink/70">{hypothesis}</p>
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">{labels.change}</p>
          <p className="text-sm leading-relaxed text-ink/70">{change}</p>
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">{labels.learning}</p>
          <p className="text-sm font-medium leading-relaxed text-ink">{learning}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function TwishPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const dict = getDictionary(locale);
  const t = dict.twish;
  const c = dict.common;
  const a = twishAssets;

  return (
    <>
      {/* Hero */}
      <section className="bg-paper pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="container-content flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-wide text-accent">{t.meta.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-sm font-medium text-ink/50">{t.meta.category}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="balance max-w-4xl font-display text-3xl font-semibold leading-[1.08] text-ink md:text-6xl">
                {t.meta.headline}
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="balance max-w-2xl text-lg leading-relaxed text-ink/65 md:text-xl">{t.meta.intro}</p>
            </Reveal>
            <Reveal delay={0.18}>
              <LiveProductCta label={t.liveCta} />
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-x-12 gap-y-6 border-y border-line py-8">
              <MetaItem label={c.roleLabel} value={t.metaRow.role} />
              <MetaItem label={c.productLabel} value={t.metaRow.product} />
              <MetaItem label={c.focusLabel} value={t.metaRow.scope} />
              <MetaItem label={t.statusLabel} value={t.metaRow.status} />
            </div>
          </Reveal>

          <PillGroup items={t.capabilities} />
        </div>

        <div className="container-content mt-14 md:mt-20">
          <AssetPlaceholder slot={a.hero} locale={locale} />
        </div>
      </section>

      {/* 01 — The problem */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-content grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center md:gap-16">
          <div className="flex flex-col gap-5">
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-wide text-accent">01</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="balance font-display text-2xl font-semibold leading-tight text-ink md:text-4xl">
                {t.problem.heading}
              </h2>
            </Reveal>
            <div className="flex flex-col gap-4">
              {t.problem.body.map((p, i) => (
                <Reveal key={i} delay={0.1 + i * 0.05}>
                  <p className="text-base leading-relaxed text-ink/70 md:text-lg">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <Reveal className="text-sm font-medium text-ink/50">{t.problem.fragmentsIntro}</Reveal>
            <FragmentedSources fragments={t.problem.fragments} target={t.problem.convergeTarget} />
          </div>
        </div>
      </section>

      {/* 02 — Understanding the problem */}
      <CSSection eyebrow="02" heading={t.understanding.heading} tone="mist">
        <Reveal className="max-w-2xl">
          <p className="text-base leading-relaxed text-ink/70 md:text-lg">{t.understanding.intro}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="flex flex-col gap-3 border-l-2 border-line pl-5">
            <div className="flex items-center gap-2">
              <span className="font-display text-sm font-semibold text-accent">01</span>
              <p className="font-display text-base font-semibold text-ink">{t.understanding.personal.title}</p>
            </div>
            <p className="text-sm leading-relaxed text-ink/70">{t.understanding.personal.body}</p>
            <p className="text-sm font-medium italic leading-relaxed text-ink">{t.understanding.personal.question}</p>
          </div>

          <div className="flex flex-col gap-3 border-l-2 border-line pl-5">
            <div className="flex items-center gap-2">
              <span className="font-display text-sm font-semibold text-accent">02</span>
              <p className="font-display text-base font-semibold text-ink">{t.understanding.feedback.title}</p>
            </div>
            {t.understanding.feedback.body.map((p, i) => (
              <p key={i} className="text-sm leading-relaxed text-ink/70">
                {p}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-3 border-l-2 border-line pl-5">
            <div className="flex items-center gap-2">
              <span className="font-display text-sm font-semibold text-accent">03</span>
              <p className="font-display text-base font-semibold text-ink">{t.understanding.competitive.title}</p>
            </div>
            <p className="text-sm leading-relaxed text-ink/70">{t.understanding.competitive.intro}</p>
            <p className="text-sm text-ink/50">{t.understanding.competitive.products.join(" · ")}</p>
            <div className="flex flex-col gap-1.5">
              <p className="text-xs font-medium uppercase tracking-wide text-ink/35">
                {t.understanding.competitive.dimensionsLabel}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {t.understanding.competitive.dimensions.map((d) => (
                  <span key={d} className="rounded-full bg-paper-mist px-2.5 py-1 text-xs text-ink/55">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-line pt-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">{t.understanding.principlesHeading}</p>
          <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {t.understanding.principles.map((p) => (
              <StaggerItem key={p.title} className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-ink">{p.title}</p>
                <p className="text-xs leading-relaxed text-ink/60">{p.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <p className="max-w-2xl border-l-2 border-accent-200 pl-4 text-sm italic leading-relaxed text-ink/50">
          {t.understanding.opportunity}
        </p>
      </CSSection>

      {/* 03 — Defining the MVP */}
      <CSSection eyebrow="03" heading={t.mvp.heading} tone="white">
        <Reveal className="max-w-2xl">
          <p className="text-base leading-relaxed text-ink/70 md:text-lg">{t.mvp.intro}</p>
        </Reveal>
        <FlowDiagram steps={t.mvp.journey} />
        <div className="grid grid-cols-1 gap-6 pt-2 md:grid-cols-2">
          <Reveal className="flex flex-col gap-4 rounded-2xl border border-accent-200 bg-accent-50 p-7">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent-600">{t.mvp.includedLabel}</p>
            <ul className="flex flex-col gap-2">
              {t.mvp.included.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium text-ink">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.05} className="flex flex-col gap-4 rounded-2xl bg-paper-mist p-7">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">{t.mvp.laterLabel}</p>
            <ul className="flex flex-col gap-2">
              {t.mvp.later.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-ink/55">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-ink/30" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </CSSection>

      {/* 04 — Key product decisions */}
      <CSSection eyebrow="04" heading={t.decisions.heading} tone="lavender">
        <Reveal className="max-w-2xl">
          <p className="text-base leading-relaxed text-ink/70 md:text-lg">{t.decisions.intro}</p>
        </Reveal>
        <div className="flex flex-col gap-6">
          <DecisionStory
            {...t.decisions.items[0]}
            visual={<AssetPlaceholder slot={a.addViaLink} locale={locale} className="w-full" />}
          />
          <DecisionStory
            {...t.decisions.items[1]}
            visual={
              <div className="grid w-full grid-cols-2 gap-3">
                <AssetPlaceholder slot={a.wishlistOwnerView} locale={locale} />
                <AssetPlaceholder slot={a.wishlistGuestView} locale={locale} />
              </div>
            }
          />
          <DecisionStory
            {...t.decisions.items[2]}
            visual={<AssetPlaceholder slot={a.shareReserve} locale={locale} className="w-full" />}
          />
        </div>
      </CSSection>

      {/* 05 — The product */}
      <CSSection eyebrow="05" heading={t.product.heading} tone="white">
        <Reveal className="max-w-2xl">
          <p className="text-base leading-relaxed text-ink/70 md:text-lg">{t.product.intro}</p>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <AssetPlaceholder slot={a.myWishlists} locale={locale} className="lg:col-span-3" />
          <AssetPlaceholder slot={a.wishlistOwnerView} locale={locale} className="lg:col-span-2" />
          <AssetPlaceholder slot={a.mobileWishlist} locale={locale} className="mx-auto w-full max-w-[220px] lg:max-w-none" />
          <AssetPlaceholder slot={a.addWish} locale={locale} />
          <AssetPlaceholder slot={a.wishlistGuestView} locale={locale} />
          <AssetPlaceholder slot={a.reservationFlow} locale={locale} />
        </div>
      </CSSection>

      {/* 06 — From designer to builder */}
      <section className="bg-ink py-20 md:py-28">
        <div className="container-content flex flex-col gap-8">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-wide text-accent-200">06</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="balance max-w-2xl font-display text-2xl font-semibold leading-tight text-white md:text-4xl">
              {t.builder.heading}
            </h2>
          </Reveal>
          <div className="max-w-2xl space-y-4">
            {t.builder.body.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.05}>
                <p className="text-base leading-relaxed text-white/70 md:text-lg">{p}</p>
              </Reveal>
            ))}
          </div>
          <div className="pt-2">
            <Stagger className="flex flex-wrap items-center gap-x-2 gap-y-4">
              {t.builder.steps.map((step, i) => (
                <StaggerItem key={step} className="flex items-center gap-2">
                  <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-5 py-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-semibold text-white">
                      {i + 1}
                    </span>
                    <span className="text-sm font-medium text-white">{step}</span>
                  </div>
                  {i < t.builder.steps.length - 1 ? (
                    <span aria-hidden className="text-white/25">
                      →
                    </span>
                  ) : null}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <div className="flex flex-col gap-3 border-t border-white/10 pt-6">
            <Reveal className="text-xs font-semibold uppercase tracking-wide text-white/40">
              {t.builder.responsibilitiesLabel}
            </Reveal>
            <Stagger className="flex flex-wrap gap-2">
              {t.builder.responsibilities.map((item) => (
                <StaggerItem
                  key={item}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/80"
                >
                  {item}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* 07 — Measure, learn, iterate */}
      <CSSection eyebrow="07" heading={t.measure.heading} tone="white">
        <Reveal className="max-w-2xl">
          <p className="text-base leading-relaxed text-ink/70 md:text-lg">{t.measure.intro}</p>
        </Reveal>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {t.measure.stories.map((story) => (
            <IterationStory key={story.title} labels={t.measure.storyLabels} {...story} />
          ))}
        </div>
        <div className="flex flex-col gap-4 border-t border-line pt-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">{t.measure.otherLabel}</p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {t.measure.other.map((item) => (
              <div key={item.title} className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-ink">{item.title}</p>
                <p className="text-sm leading-relaxed text-ink/60">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </CSSection>

      {/* 08 — Reflection */}
      <CSSection eyebrow="08" heading={t.reflection.heading} tone="mist">
        <div className="flex flex-col gap-6">
          {t.reflection.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05} className="flex items-baseline gap-4 border-t border-line/60 pt-6 first:border-t-0 first:pt-0">
              <span className="font-display text-sm font-semibold text-accent">{String(i + 1).padStart(2, "0")}</span>
              <div className="flex flex-col gap-1">
                <p className="font-display text-base font-semibold text-ink">{item.title}</p>
                <p className="text-sm leading-relaxed text-ink/65">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <LiveProductCta label={t.finalCta} />
        </Reveal>
      </CSSection>

      <section className="border-t border-line bg-paper-soft py-16">
        <div className="container-content flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <Link href={`/${locale}#work`} className="text-sm font-medium text-ink/60 transition-colors duration-200 hover:text-ink">
            ← {c.backToWork}
          </Link>
          <CTAButton href={`/${locale}/work/sprint-performance`} variant="primary">
            {c.nextProject}: {dict.sprint.meta.title}
          </CTAButton>
        </div>
      </section>
    </>
  );
}
