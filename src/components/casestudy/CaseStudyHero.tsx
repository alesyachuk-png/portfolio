import type { CaseStudyMeta } from "@/content/types";
import type { AssetSlot } from "@/content/assets";
import type { Locale } from "@/lib/i18n";
import { Reveal } from "../motion";
import { AssetPlaceholder } from "./AssetPlaceholder";

export function CaseStudyHero({
  meta,
  labels,
  heroSlot,
  locale,
}: {
  meta: CaseStudyMeta;
  labels: { role: string; platform: string; collaboration: string; contribution: string };
  heroSlot: AssetSlot;
  locale: Locale;
}) {
  return (
    <section className="border-b border-line bg-paper-soft pb-16 pt-14 md:pb-24 md:pt-20">
      <div className="container-content flex flex-col gap-12">
        <div className="flex flex-col gap-5">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-wide text-accent">{meta.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-sm font-medium text-ink/50">{meta.category}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="balance max-w-4xl font-display text-3xl font-semibold leading-[1.08] text-ink md:text-6xl">
              {meta.headline}
            </h1>
          </Reveal>
        </div>

        <AssetPlaceholder slot={heroSlot} locale={locale} />

        <Reveal delay={0.25}>
          <div className="grid grid-cols-2 gap-8 border-t border-line pt-8 md:grid-cols-4">
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-ink/40">{labels.role}</p>
              <p className="text-sm font-medium text-ink">{meta.role}</p>
            </div>
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-ink/40">{labels.platform}</p>
              <p className="text-sm font-medium text-ink">{meta.platform}</p>
            </div>
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-ink/40">{labels.collaboration}</p>
              <p className="text-sm font-medium text-ink">{meta.collaboration.join(", ")}</p>
            </div>
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-ink/40">{labels.contribution}</p>
              <p className="text-sm font-medium text-ink">{meta.contribution.slice(0, 3).join(", ")}…</p>
            </div>
          </div>
        </Reveal>

        <p className="max-w-xl text-sm italic leading-relaxed text-ink/40">{meta.heroNote}</p>
      </div>
    </section>
  );
}
