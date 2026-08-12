import type { ReactNode } from "react";
import type { Dictionary } from "@/content/types";
import { SectionHeading } from "../SectionHeading";
import { Reveal, Stagger, StaggerItem } from "../motion";
import { FlowDiagram } from "../casestudy/FlowDiagram";
import { MVPConverge } from "../casestudy/MVPConverge";
import { PillGroup } from "../casestudy/PillGroup";

// A single consistent soft frame reused across the pattern visuals that
// don't already carry their own container (FlowDiagram, the date-range
// groups, the recurrence timeline). Patterns built on MVPConverge keep its
// own frame instead of nesting a second border inside this one.
function VisualFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-line/60 bg-gradient-to-br from-paper-soft to-lavender/40 p-8 md:p-10 ${className}`}
    >
      {children}
    </div>
  );
}

function PatternRow({
  index,
  title,
  description,
  visual,
}: {
  index: number;
  title: string;
  description: string[];
  visual: ReactNode;
}) {
  const reversed = index % 2 === 1;

  return (
    <Reveal className="container-content">
      <div className="grid grid-cols-1 items-center gap-10 md:gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div className={`order-1 flex flex-col gap-4 ${reversed ? "md:order-2" : "md:order-1"}`}>
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="balance font-display text-2xl font-semibold text-ink md:text-3xl">{title}</h3>
          <div className="flex flex-col gap-3">
            {description.map((p, i) => (
              <p key={i} className="max-w-md text-base leading-relaxed text-ink/65">
                {p}
              </p>
            ))}
          </div>
        </div>
        <div className={`order-2 ${reversed ? "md:order-1" : "md:order-2"}`}>{visual}</div>
      </div>
    </Reveal>
  );
}

function DateRangeGroups({ groups }: { groups: { title: string; items: string[] }[] }) {
  return (
    <Stagger className="flex flex-col gap-6">
      {groups.map((g) => (
        <StaggerItem key={g.title} className="flex flex-col gap-2.5">
          <p className="text-xs font-medium uppercase tracking-wide text-ink/40">{g.title}</p>
          <PillGroup items={g.items} />
        </StaggerItem>
      ))}
    </Stagger>
  );
}

function RecurrenceTimeline({ labels }: { labels: { past: string; next: string; upcoming: string } }) {
  const dots = 8;
  const nextIndex = 4;

  return (
    <div className="flex flex-col gap-4">
      <Stagger className="relative flex items-center justify-between">
        <div className="absolute left-0 right-0 h-px bg-line" aria-hidden />
        {Array.from({ length: dots }).map((_, i) => (
          <StaggerItem
            key={i}
            className={`relative z-10 h-3 w-3 rounded-full ${
              i < nextIndex
                ? "bg-ink/25"
                : i === nextIndex
                  ? "bg-accent ring-4 ring-accent-100"
                  : "border-2 border-line bg-white"
            }`}
          >
            {null}
          </StaggerItem>
        ))}
      </Stagger>
      <div className="flex items-center justify-between text-[11px] font-medium uppercase tracking-wide text-ink/35">
        <span>{labels.past}</span>
        <span className="text-accent-600">{labels.next}</span>
        <span>{labels.upcoming}</span>
      </div>
    </div>
  );
}

function ProcessStages({
  stages,
}: {
  stages: { number: string; title: string; subtitle: string; body: string }[];
}) {
  return (
    <div className="relative">
      <div className="absolute left-0 right-0 top-5 hidden h-px bg-line md:block" aria-hidden />
      <Stagger className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
        {stages.map((stage) => (
          <StaggerItem key={stage.number} className="relative flex flex-col gap-3">
            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent bg-white text-sm font-semibold text-accent">
              {stage.number}
            </div>
            <p className="font-display text-lg font-semibold text-ink">{stage.title}</p>
            <p className="text-xs font-medium uppercase tracking-wide text-accent/70">{stage.subtitle}</p>
            <p className="text-sm leading-relaxed text-ink/65">{stage.body}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}

export function DesignSystemStory({ dict }: { dict: Dictionary }) {
  const d = dict.home.designSystem;
  const { feedback, filtering, dateRange, scheduling, permissions } = d.patterns;

  return (
    <>
      <section className="bg-lavender py-20 md:py-28">
        <div className="container-content">
          <SectionHeading eyebrow={d.eyebrow} heading={d.heading} supporting={d.supporting} />
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-content mb-16 max-w-3xl md:mb-24">
          <SectionHeading eyebrow="What I build" heading={d.patterns.heading} supporting={d.patterns.intro} />
        </div>

        <div className="flex flex-col gap-20 md:gap-28">
          <PatternRow
            index={0}
            title={feedback.title}
            description={feedback.description}
            visual={
              <VisualFrame>
                <FlowDiagram steps={feedback.flow} />
                <p className="mt-6 text-sm font-medium leading-relaxed text-ink/70">{feedback.note}</p>
              </VisualFrame>
            }
          />

          <PatternRow
            index={1}
            title={filtering.title}
            description={filtering.description}
            visual={
              <div className="flex flex-col gap-6">
                <MVPConverge metrics={filtering.convergeItems} target={filtering.convergeTarget} />
                <PillGroup items={filtering.emphasis} />
              </div>
            }
          />

          <PatternRow
            index={2}
            title={dateRange.title}
            description={dateRange.description}
            visual={
              <VisualFrame>
                <DateRangeGroups groups={dateRange.groups} />
                <p className="mt-6 text-sm font-medium leading-relaxed text-ink/70">{dateRange.note}</p>
              </VisualFrame>
            }
          />

          <PatternRow
            index={3}
            title={scheduling.title}
            description={scheduling.description}
            visual={
              <VisualFrame>
                <RecurrenceTimeline labels={scheduling.timeline} />
                <div className="mt-6">
                  <PillGroup items={scheduling.considerations} />
                </div>
              </VisualFrame>
            }
          />

          <PatternRow
            index={4}
            title={permissions.title}
            description={permissions.description}
            visual={
              <div className="flex flex-col gap-6">
                <MVPConverge metrics={permissions.scopes} target={permissions.convergeTarget} />
                <PillGroup items={permissions.accessStates} />
              </div>
            }
          />
        </div>
      </section>

      <section className="bg-paper-mist py-20 md:py-28">
        <div className="container-content mb-14 max-w-3xl md:mb-16">
          <SectionHeading eyebrow="Beyond components" heading={d.principles.heading} />
        </div>
        <div className="container-content">
          <Stagger className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
            {d.principles.items.map((item) => (
              <StaggerItem key={item.eyebrow} className="flex flex-col gap-3">
                <p className="text-xs font-medium uppercase tracking-wide text-accent">{item.eyebrow}</p>
                <p className="balance font-display text-xl font-semibold leading-snug text-ink md:text-2xl">
                  {item.headline}
                </p>
                <p className="max-w-md text-sm leading-relaxed text-ink/65">{item.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-content mb-16 max-w-3xl md:mb-20">
          <SectionHeading eyebrow="How it scales" heading={d.process.heading} />
        </div>
        <div className="container-content">
          <ProcessStages stages={d.process.stages} />
        </div>
      </section>

      <section className="bg-lavender py-20 md:py-28">
        <div className="container-content mb-14 max-w-3xl md:mb-16">
          <SectionHeading eyebrow="Impact" heading={d.impact.heading} />
        </div>
        <div className="container-content">
          <Stagger className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {d.impact.items.map((item) => (
              <StaggerItem key={item.title} className="flex flex-col gap-2">
                <p className="font-display text-lg font-semibold text-ink">{item.title}</p>
                <p className="text-sm leading-relaxed text-ink/65">{item.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-ink py-24 md:py-32">
        <div className="container-content">
          <Reveal>
            <p className="balance max-w-3xl font-display text-2xl font-medium leading-snug text-white md:text-4xl">
              {d.closing}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-xl border-l-2 border-white/20 pl-4 text-sm italic leading-relaxed text-white/40">
              {d.confidentialityNote}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
