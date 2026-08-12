import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/content";
import { CSSection } from "@/components/casestudy/Section";
import { FlowDiagram } from "@/components/casestudy/FlowDiagram";
import { PillGroup } from "@/components/casestudy/PillGroup";
import { MVPConverge } from "@/components/casestudy/MVPConverge";
import { ConfidentialNote } from "@/components/casestudy/ConfidentialNote";
import { ShowcaseFrame } from "@/components/casestudy/ShowcaseFrame";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

const MARKETPLACE_URL = "https://marketplace.atlassian.com/apps/1219732/time-in-status";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);
  return {
    title: dict.sprint.meta.title,
    description: dict.sprint.meta.headline,
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

export default function SprintPerformancePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const dict = getDictionary(locale);
  const s = dict.sprint;
  const c = dict.common;

  return (
    <>
      {/* Hero */}
      <section className="bg-paper pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="container-content flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-wide text-accent">{s.meta.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-sm font-medium text-ink/50">{s.meta.category}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="balance max-w-4xl font-display text-3xl font-semibold leading-[1.08] text-ink md:text-6xl">
                {s.meta.headline}
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="balance max-w-2xl text-lg leading-relaxed text-ink/65 md:text-xl">{s.meta.intro}</p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-x-12 gap-y-6 border-y border-line py-8">
              <MetaItem label={c.roleLabel} value={s.metaRow.role} />
              <MetaItem label={c.productLabel} value={s.metaRow.product} />
              <MetaItem label={c.platformLabel} value={s.metaRow.platform} />
              <MetaItem label={c.focusLabel} value={s.metaRow.focus} />
              <MetaItem label={c.collaborationLabel} value={s.metaRow.collaboration} />
            </div>
          </Reveal>
        </div>

        <div className="container-content mt-14 md:mt-20">
          <Reveal y={30}>
            <div className="relative mx-auto max-w-5xl">
              <div
                className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-accent-50 via-lavender/70 to-accent-100/60 opacity-70 blur-3xl"
                aria-hidden
              />
              <div className="relative w-full" style={{ aspectRatio: "2576/1360" }}>
                <Image
                  src="/images/case-studies/sprint-hero.png"
                  alt={s.meta.heroImageAlt}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 1100px, 100vw"
                  quality={92}
                  priority
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CSSection heading={s.context.heading} tone="white">
        <div className="max-w-2xl space-y-4">
          {s.context.body.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="text-base leading-relaxed text-ink/70 md:text-lg">{p}</p>
            </Reveal>
          ))}
        </div>
      </CSSection>

      <CSSection heading={s.problem.heading} tone="lavender">
        <div className="max-w-2xl space-y-4">
          {s.problem.intro.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="text-base leading-relaxed text-ink/70 md:text-lg">{p}</p>
            </Reveal>
          ))}
        </div>
        <Stagger className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
          {s.problem.questions.map((q, i) => (
            <StaggerItem key={q} className="flex items-baseline gap-4 border-t border-ink/10 pt-4">
              <span className="font-display text-sm font-semibold text-accent">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-base font-medium leading-snug text-ink/85">{q}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </CSSection>

      <CSSection heading={s.whyItMattered.heading} tone="white">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <Reveal className="flex flex-col gap-3">
            <p className="text-xs font-medium uppercase tracking-wide text-accent">{s.whyItMattered.userValueLabel}</p>
            <p className="max-w-md text-base leading-relaxed text-ink/70 md:text-lg">{s.whyItMattered.userValue}</p>
          </Reveal>
          <Reveal delay={0.05} className="flex flex-col gap-3">
            <p className="text-xs font-medium uppercase tracking-wide text-accent">{s.whyItMattered.productValueLabel}</p>
            <p className="max-w-md text-base leading-relaxed text-ink/70 md:text-lg">{s.whyItMattered.productValue}</p>
          </Reveal>
        </div>
      </CSSection>

      <CSSection heading={s.needed.heading} tone="white">
        <Stagger className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {s.needed.groups.map((g) => (
            <StaggerItem key={g.title} className="flex flex-col gap-3 border-l-2 border-accent-100 pl-5">
              <p className="font-display text-base font-semibold text-ink">{g.title}</p>
              <ul className="flex flex-col gap-2">
                {g.items.map((it) => (
                  <li key={it} className="text-sm leading-relaxed text-ink/65">
                    {it}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </CSSection>

      <CSSection heading={s.currentExperience.heading} tone="mist">
        <FlowDiagram steps={s.currentExperience.steps} note={s.currentExperience.callout} />
        <ConfidentialNote text={s.currentExperience.note} />
      </CSSection>

      <CSSection heading={s.discovery.heading} tone="white">
        <Stagger className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {s.discovery.items.map((item) => (
            <StaggerItem key={item.title} className="flex flex-col gap-3">
              <p className="font-display text-lg font-semibold text-ink">{item.title}</p>
              <p className="text-sm leading-relaxed text-ink/65">{item.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="flex flex-col gap-3 border-t border-line pt-8">
          <p className="text-sm leading-relaxed text-ink/60">{s.discovery.competitiveIntro}</p>
          <PillGroup items={s.discovery.competitiveItems} />
        </Reveal>
      </CSSection>

      <CSSection heading={s.users.heading} tone="white">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Reveal className="flex flex-col gap-2">
            <p className="font-display text-xl font-semibold text-ink">{s.users.primary.role}</p>
            <p className="text-sm leading-relaxed text-ink/65">{s.users.primary.need}</p>
          </Reveal>
          <Reveal delay={0.05} className="flex flex-col gap-2">
            <p className="font-display text-xl font-semibold text-ink/70">{s.users.secondary.role}</p>
            <p className="text-sm leading-relaxed text-ink/65">{s.users.secondary.need}</p>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="max-w-2xl rounded-2xl bg-lavender p-7">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-accent-600">{s.users.jtbdLabel}</p>
          <p className="font-display text-lg font-medium leading-snug text-ink">“{s.users.jtbd}”</p>
        </Reveal>
      </CSSection>

      <CSSection heading={s.hypothesis.heading} tone="mist">
        <Reveal>
          <p className="balance max-w-3xl font-display text-2xl font-medium leading-snug text-ink md:text-4xl">
            “{s.hypothesis.statement}”
          </p>
        </Reveal>
      </CSSection>

      <CSSection heading={s.mvp.heading} tone="white">
        <Reveal className="max-w-2xl">
          <p className="text-base leading-relaxed text-ink/70 md:text-lg">{s.mvp.intro}</p>
        </Reveal>
        <MVPConverge metrics={s.mvp.areas} target={s.mvp.target} />
      </CSSection>

      <CSSection heading={s.hierarchy.heading} tone="mist">
        <Reveal className="max-w-2xl">
          <p className="text-base leading-relaxed text-ink/70 md:text-lg">{s.hierarchy.intro}</p>
        </Reveal>
        <FlowDiagram steps={s.hierarchy.steps} />
        <ConfidentialNote text={s.hierarchy.note} />
      </CSSection>

      <CSSection heading={s.deliveryTrends.heading} tone="white">
        <Reveal className="max-w-2xl">
          <p className="text-base leading-relaxed text-ink/70 md:text-lg">{s.deliveryTrends.intro}</p>
        </Reveal>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <ShowcaseFrame
              src="/images/case-studies/sprint-team-velocity.png"
              alt={s.deliveryTrends.velocity.imageAlt}
              aspect="20/9"
            />
            <p className="font-display text-lg font-semibold text-ink">{s.deliveryTrends.velocity.title}</p>
            <p className="text-sm leading-relaxed text-ink/65">{s.deliveryTrends.velocity.body}</p>
            <ul className="flex flex-col gap-2">
              {s.deliveryTrends.velocity.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2 text-sm leading-relaxed text-ink/60">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <ShowcaseFrame
              src="/images/case-studies/sprint-burndown.png"
              alt={s.deliveryTrends.burndown.imageAlt}
              aspect="20/9"
            />
            <p className="font-display text-lg font-semibold text-ink">{s.deliveryTrends.burndown.title}</p>
            <p className="text-sm leading-relaxed text-ink/65">{s.deliveryTrends.burndown.body}</p>
          </div>
        </div>
      </CSSection>

      <CSSection heading={s.execution.heading} tone="lavender">
        <Reveal className="max-w-2xl">
          <p className="text-base leading-relaxed text-ink/70 md:text-lg">{s.execution.intro}</p>
        </Reveal>
        <ShowcaseFrame
          src="/images/case-studies/sprint-execution.png"
          alt={s.execution.imageAlt}
          aspect="941/562"
          tint="bg-white"
          padding="p-4 md:p-8"
          className="mx-auto w-full max-w-4xl"
        />
      </CSSection>

      <CSSection heading={s.signals.heading} tone="white">
        <Stagger className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {s.signals.items.map((item) => (
            <StaggerItem key={item.title} className="flex flex-col gap-2">
              <p className="font-display text-base font-semibold text-ink">{item.title}</p>
              <p className="text-sm leading-relaxed text-ink/65">{item.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </CSSection>

      <CSSection heading={s.principles.heading} tone="white">
        <Stagger className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {s.principles.items.map((item, i) => (
            <StaggerItem key={item.title} className="flex flex-col gap-2">
              <span className="font-display text-sm font-semibold text-accent">{String(i + 1).padStart(2, "0")}</span>
              <p className="font-display text-lg font-semibold text-ink">{item.title}</p>
              <p className="text-sm leading-relaxed text-ink/65">{item.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </CSSection>

      <CSSection heading={s.designSystem.heading} tone="mist">
        <Reveal className="max-w-2xl">
          <p className="text-base leading-relaxed text-ink/70 md:text-lg">{s.designSystem.body}</p>
        </Reveal>
        <PillGroup items={s.designSystem.patterns} />
        <Stagger className="grid max-w-xl grid-cols-4 gap-3 rounded-2xl border border-dashed border-line bg-white p-6">
          {s.designSystem.patterns.slice(0, 8).map((p, i) => {
            const swatch = i % 3 === 0 ? "bg-accent-50" : i % 3 === 1 ? "bg-paper-mist" : "bg-lavender";
            return (
              <StaggerItem
                key={p}
                className={`flex h-16 items-center justify-center rounded-xl px-2 text-center text-[11px] font-medium text-ink/50 ${swatch}`}
              >
                {p}
              </StaggerItem>
            );
          })}
        </Stagger>
        <ConfidentialNote text={s.designSystem.visualNote} />
      </CSSection>

      <CSSection heading={s.collaboration.heading} tone="mist">
        <Reveal className="max-w-2xl">
          <p className="text-base leading-relaxed text-ink/70 md:text-lg">{s.collaboration.body}</p>
        </Reveal>
        <FlowDiagram steps={s.collaboration.steps} />
      </CSSection>

      <CSSection heading={s.designQA.heading} tone="mist">
        <Reveal className="max-w-2xl">
          <p className="text-base leading-relaxed text-ink/70 md:text-lg">{s.designQA.body}</p>
        </Reveal>
        <PillGroup items={s.designQA.areas} />
      </CSSection>

      <CSSection heading={s.measuring.heading} tone="white">
        <Reveal className="max-w-2xl">
          <p className="text-base leading-relaxed text-ink/70 md:text-lg">{s.measuring.body}</p>
        </Reveal>
        <ConfidentialNote text={s.measuring.note} />
      </CSSection>

      <CSSection heading={s.outcome.heading} tone="white">
        <div className="max-w-3xl space-y-4">
          {s.outcome.body.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="text-xl font-medium leading-relaxed text-ink md:text-2xl">{p}</p>
            </Reveal>
          ))}
        </div>
      </CSSection>

      <CSSection heading={s.learned.heading} tone="white">
        <div className="max-w-2xl space-y-4">
          {s.learned.body.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="text-base leading-relaxed text-ink/70 md:text-lg">{p}</p>
            </Reveal>
          ))}
        </div>
      </CSSection>

      <section className="bg-lavender py-16 md:py-24">
        <div className="container-content flex flex-col items-start gap-6">
          <Reveal>
            <h2 className="balance font-display text-2xl font-semibold leading-tight text-ink md:text-4xl">
              {s.marketplace.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg">{s.marketplace.body}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={MARKETPLACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-all duration-300 ease-premium hover:bg-accent-600"
            >
              <span>{s.marketplace.cta}</span>
              <ExternalIcon className="transition-transform duration-300 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-paper-soft py-16">
        <div className="container-content flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <Link href={`/${locale}#work`} className="text-sm font-medium text-ink/60 transition-colors duration-200 hover:text-ink">
            ← {c.backToWork}
          </Link>
          <Link href={`/${locale}/work/sla-management`} className="group flex items-center gap-3">
            <span className="text-sm font-medium uppercase tracking-wide text-ink/40">{c.nextProject}</span>
            <span className="font-display text-xl font-semibold text-ink transition-colors duration-300 ease-premium group-hover:text-accent-600 md:text-2xl">
              {dict.sla.meta.title}
            </span>
            <span
              aria-hidden
              className="inline-block text-xl text-ink transition-transform duration-300 ease-premium group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
