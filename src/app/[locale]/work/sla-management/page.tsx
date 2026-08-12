import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/content";
import { CSSection } from "@/components/casestudy/Section";
import { FlowDiagram } from "@/components/casestudy/FlowDiagram";
import { PillGroup } from "@/components/casestudy/PillGroup";
import { MVPConverge } from "@/components/casestudy/MVPConverge";
import { ConfidentialNote } from "@/components/casestudy/ConfidentialNote";
import { ShowcaseFrame } from "@/components/casestudy/ShowcaseFrame";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

const MARKETPLACE_URL =
  "https://marketplace.atlassian.com/apps/1220741/sla-time-and-report-for-jira-sla-management-compliance?hosting=cloud&tab=overview";
const YOUTUBE_URL = "https://www.youtube.com/watch?v=Z_yN_Wll3uA";
const YOUTUBE_EMBED_URL = "https://www.youtube-nocookie.com/embed/Z_yN_Wll3uA";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);
  return {
    title: dict.sla.meta.title,
    description: dict.sla.meta.headline,
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

function BranchSplit({
  control,
  branchA,
  branchB,
  consequences,
}: {
  control: string;
  branchA: { title: string; question: string };
  branchB: { title: string; question: string };
  consequences: string[];
}) {
  return (
    <div className="flex flex-col items-center gap-6 rounded-2xl border border-line/60 bg-gradient-to-br from-paper-soft to-lavender/30 p-8 md:p-12">
      <Reveal>
        <span className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink shadow-sm">
          {control}
        </span>
      </Reveal>
      <span aria-hidden className="text-ink/25">
        ↓
      </span>
      <Stagger className="grid w-full max-w-xl grid-cols-1 items-center gap-4 sm:grid-cols-[1fr_auto_1fr]">
        <StaggerItem className="rounded-xl bg-white p-5 text-center shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-accent">{branchA.title}</p>
          <p className="text-sm leading-relaxed text-ink/70">{branchA.question}</p>
        </StaggerItem>
        <span aria-hidden className="hidden text-ink/25 sm:block">
          •
        </span>
        <StaggerItem className="rounded-xl bg-white p-5 text-center shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-accent">{branchB.title}</p>
          <p className="text-sm leading-relaxed text-ink/70">{branchB.question}</p>
        </StaggerItem>
      </Stagger>
      <span aria-hidden className="text-ink/25">
        ↓
      </span>
      <div className="flex flex-col items-center gap-2">
        {consequences.map((c, i) => (
          <Reveal key={c} delay={i * 0.05}>
            <p className="text-sm font-medium text-ink/55">{c}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function PeriodExample({
  label,
  value,
  meaning,
  accent = false,
}: {
  label: string;
  value: string;
  meaning: string;
  accent?: boolean;
}) {
  return (
    <Reveal
      className={`flex flex-col gap-2 rounded-2xl p-7 ${accent ? "border border-accent-200 bg-accent-50" : "bg-paper-mist"}`}
    >
      <p className={`text-xs font-semibold uppercase tracking-wide ${accent ? "text-accent-600" : "text-ink/40"}`}>
        {label}
      </p>
      <p className="font-display text-lg font-semibold text-ink">{value}</p>
      <p className="text-sm leading-relaxed text-ink/60">{meaning}</p>
    </Reveal>
  );
}

export default function SlaManagementPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const dict = getDictionary(locale);
  const s = dict.sla;
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
          <ShowcaseFrame
            src="/images/case-studies/sla-management-dashboard.png"
            alt={s.meta.heroImageAlt}
            aspect="3588/1379"
            padding="p-4 md:p-8"
            priority
            sizes="(min-width: 1024px) 1160px, 100vw"
          />
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
          {s.problem.body.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="text-base leading-relaxed text-ink/70 md:text-lg">{p}</p>
            </Reveal>
          ))}
        </div>
      </CSSection>

      <CSSection heading={s.whyItMattered.heading} tone="white">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <Reveal className="flex flex-col gap-3">
            <p className="text-xs font-medium uppercase tracking-wide text-accent">{s.whyItMattered.userLabel}</p>
            <p className="max-w-md text-base leading-relaxed text-ink/70 md:text-lg">{s.whyItMattered.userBody}</p>
          </Reveal>
          <Reveal delay={0.05} className="flex flex-col gap-3">
            <p className="text-xs font-medium uppercase tracking-wide text-accent">{s.whyItMattered.productLabel}</p>
            <p className="max-w-md text-base leading-relaxed text-ink/70 md:text-lg">{s.whyItMattered.productBody}</p>
          </Reveal>
        </div>
      </CSSection>

      <CSSection heading={s.challenge.heading} tone="mist">
        <Reveal>
          <p className="balance max-w-3xl font-display text-2xl font-medium leading-snug text-ink md:text-4xl">
            {s.challenge.statement}
          </p>
        </Reveal>
      </CSSection>

      <CSSection heading={s.oldModel.heading} tone="white">
        <BranchSplit
          control={s.oldModel.control}
          branchA={s.oldModel.branchA}
          branchB={s.oldModel.branchB}
          consequences={s.oldModel.consequences}
        />
        <ConfidentialNote text={s.oldModel.note} />
      </CSSection>

      <CSSection heading={s.direction.heading} tone="lavender">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal className="flex flex-col gap-4 rounded-2xl bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">{s.direction.beforeTitle}</p>
            <span className="w-fit rounded-full bg-paper-mist px-4 py-2 text-sm font-medium text-ink/70">
              {s.direction.beforeControl}
            </span>
            <span aria-hidden className="text-ink/25">
              ↓
            </span>
            <ul className="flex flex-col gap-2">
              {s.direction.beforeConsequences.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-ink/60">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-ink/30" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.05} className="flex flex-col gap-4 rounded-2xl border border-accent-200 bg-accent-50 p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent-600">{s.direction.afterTitle}</p>
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <div className="flex-1 rounded-xl bg-white p-4 text-center shadow-sm">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-accent">
                  {s.direction.afterDataSelection.title}
                </p>
                <p className="text-sm text-ink/70">{s.direction.afterDataSelection.question}</p>
              </div>
              <span className="shrink-0 text-center text-xs font-medium italic text-ink/40">
                {s.direction.afterConnector}
              </span>
              <div className="flex-1 rounded-xl bg-white p-4 text-center shadow-sm">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-accent">
                  {s.direction.afterReportPeriod.title}
                </p>
                <p className="text-sm text-ink/70">{s.direction.afterReportPeriod.question}</p>
              </div>
            </div>
            <span aria-hidden className="text-center text-ink/25">
              ↓
            </span>
            <div className="flex flex-wrap justify-center gap-2">
              {s.direction.afterTargets.map((t) => (
                <span key={t} className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-ink/70 shadow-sm">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </CSSection>

      <CSSection heading={s.dataFilter.heading} tone="white">
        <Reveal className="max-w-2xl">
          <p className="text-base leading-relaxed text-ink/70 md:text-lg">{s.dataFilter.intro}</p>
        </Reveal>
        <MVPConverge metrics={s.dataFilter.criteria} target={s.dataFilter.target} />
        <PillGroup items={s.dataFilter.emphasis} />
        <ConfidentialNote text={s.dataFilter.note} />
      </CSSection>

      <CSSection heading={s.reportPeriod.heading} tone="white">
        <Reveal className="max-w-2xl">
          <p className="text-base leading-relaxed text-ink/70 md:text-lg">{s.reportPeriod.intro}</p>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <PeriodExample {...s.reportPeriod.filterExample} />
          <PeriodExample {...s.reportPeriod.periodExample} accent />
        </div>
        <ConfidentialNote text={s.reportPeriod.note} />
      </CSSection>

      <CSSection heading={s.views.heading} tone="mist">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <Reveal className="flex flex-col gap-3">
            <p className="font-display text-xl font-semibold text-ink">{s.views.table.title}</p>
            <p className="text-xs font-medium uppercase tracking-wide text-ink/40">{s.views.table.label}</p>
            <ul className="mt-1 flex flex-col gap-2">
              {s.views.table.items.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-ink/65">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.05} className="flex flex-col gap-3">
            <p className="font-display text-xl font-semibold text-ink">{s.views.chart.title}</p>
            <p className="text-xs font-medium uppercase tracking-wide text-ink/40">{s.views.chart.label}</p>
            <ul className="mt-1 flex flex-col gap-2">
              {s.views.chart.items.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-ink/65">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="flex flex-col gap-6 rounded-2xl bg-white p-8 sm:flex-row sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-wide text-ink/40">{s.views.sharedLabel}</p>
            <PillGroup items={s.views.sharedItems} />
          </div>
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-wide text-ink/40">{s.views.differentLabel}</p>
            <PillGroup items={s.views.differentItems} />
          </div>
        </Reveal>
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

      <CSSection heading={s.systemThinking.heading} tone="white">
        <Reveal className="max-w-2xl">
          <p className="text-base leading-relaxed text-ink/70 md:text-lg">{s.systemThinking.intro}</p>
        </Reveal>
        <FlowDiagram steps={s.systemThinking.steps} />
        <div className="flex flex-col items-center gap-4 border-t border-line pt-6">
          <span aria-hidden className="text-ink/25">
            ↓
          </span>
          <Stagger className="flex flex-wrap justify-center gap-3">
            {s.systemThinking.views.map((v) => (
              <StaggerItem
                key={v}
                className="rounded-full border border-line bg-paper-mist px-4 py-2 text-sm font-medium text-ink/70"
              >
                {v}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </CSSection>

      <CSSection heading={s.collaboration.heading} tone="mist">
        <Reveal className="max-w-2xl">
          <p className="text-base leading-relaxed text-ink/70 md:text-lg">{s.collaboration.body}</p>
        </Reveal>
        <FlowDiagram steps={s.collaboration.steps} />
      </CSSection>

      <CSSection heading={s.currentStatus.heading} tone="white">
        <div className="max-w-2xl space-y-4">
          {s.currentStatus.body.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="text-base leading-relaxed text-ink/70 md:text-lg">{p}</p>
            </Reveal>
          ))}
        </div>
      </CSSection>

      <CSSection heading={s.expectedImpact.heading} tone="lavender">
        <Reveal className="max-w-2xl">
          <p className="text-base leading-relaxed text-ink/70 md:text-lg">{s.expectedImpact.body}</p>
        </Reveal>
        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {s.expectedImpact.items.map((item) => (
            <StaggerItem key={item} className="flex items-start gap-3 text-sm font-medium leading-relaxed text-ink/75">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              {item}
            </StaggerItem>
          ))}
        </Stagger>
      </CSSection>

      <CSSection heading={s.demonstrates.heading} tone="white">
        <div className="max-w-2xl space-y-4">
          {s.demonstrates.body.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="text-base leading-relaxed text-ink/70 md:text-lg">{p}</p>
            </Reveal>
          ))}
        </div>
      </CSSection>

      <section className="bg-lavender py-16 md:py-24">
        <div className="container-content mb-10 max-w-2xl md:mb-14">
          <SectionHeading eyebrow="Explore" heading={s.explore.heading} supporting={s.explore.intro} />
        </div>
        <div className="container-content grid grid-cols-1 gap-8 md:grid-cols-2">
          <Reveal className="flex flex-col justify-center gap-4 rounded-2xl bg-white p-8">
            <p className="text-xs font-medium uppercase tracking-wide text-ink/40">{s.explore.marketplaceLabel}</p>
            <a
              href={MARKETPLACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${s.explore.marketplaceCta} ${c.opensInNewTab}`}
              className="group mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-all duration-300 ease-premium hover:bg-accent-600"
            >
              <span>{s.explore.marketplaceCta}</span>
              <ExternalIcon className="transition-transform duration-300 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>

          <Reveal delay={0.05} className="flex flex-col gap-4">
            <p className="text-xs font-medium uppercase tracking-wide text-ink/40">{s.explore.videoLabel}</p>
            <div
              className="w-full overflow-hidden rounded-2xl border border-line/60 bg-black shadow-sm"
              style={{ aspectRatio: "16/9" }}
            >
              <iframe
                className="h-full w-full"
                src={YOUTUBE_EMBED_URL}
                title={s.explore.videoImageAlt}
                loading="lazy"
                allow="clipboard-write; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${s.explore.videoCta} ${c.opensInNewTab}`}
              className="group inline-flex w-fit items-center gap-1.5 text-sm font-medium text-ink transition-colors duration-200 hover:text-accent-600"
            >
              <span>{s.explore.videoCta}</span>
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
          <Link href={`/${locale}/work/replicoo`} className="group flex items-center gap-3">
            <span className="text-sm font-medium uppercase tracking-wide text-ink/40">{c.nextProject}</span>
            <span className="font-display text-xl font-semibold text-ink transition-colors duration-300 ease-premium group-hover:text-accent-600 md:text-2xl">
              {dict.replicoo.meta.title}
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
