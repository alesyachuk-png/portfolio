import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/content";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { CTAButton } from "@/components/Button";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);
  return { title: dict.resume.headline, description: dict.resume.intro };
}

export default function ResumePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const dict = getDictionary(locale);
  const r = dict.resume;
  const cvHref = locale === "fr" ? "/cv/alesia-korenchuk-cv-fr.pdf" : "/cv/alesia-korenchuk-cv-en.pdf";

  return (
    <section className="bg-paper-soft py-16 md:py-24">
      <div className="container-content flex flex-col gap-12">
        <div className="flex flex-col gap-5">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-wide text-accent">{r.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="balance font-display text-3xl font-semibold text-ink md:text-5xl">{r.headline}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xl text-base leading-relaxed text-ink/65 md:text-lg">{r.intro}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <CTAButton href={cvHref} variant="primary" className="mt-2">
              {r.downloadCta}
            </CTAButton>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <StaggerItem className="rounded-card border border-line bg-white p-7">
            <p className="mb-4 font-display text-lg font-semibold text-ink">{r.experience.title}</p>
            <p className="text-sm font-semibold text-ink">{r.experience.years}</p>
            <p className="mb-4 text-xs font-medium uppercase tracking-wide text-ink/40">{r.experience.scope}</p>
            <div className="flex flex-col gap-3">
              {r.experience.body.map((p, i) => (
                <p key={i} className="text-sm leading-relaxed text-ink/65">
                  {p}
                </p>
              ))}
            </div>
          </StaggerItem>

          <StaggerItem className="rounded-card border border-line bg-white p-7">
            <p className="mb-4 font-display text-lg font-semibold text-ink">{r.education.title}</p>
            <div className="flex flex-col gap-4">
              {r.education.degrees.map((d) => (
                <div key={d.degree}>
                  <p className="text-sm font-semibold leading-snug text-ink">{d.degree}</p>
                  <p className="text-sm text-ink/60">{d.institution}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 border-t border-line pt-4">
              <p className="mb-1 text-xs font-medium uppercase tracking-wide text-ink/40">
                {r.education.additionalLabel}
              </p>
              <p className="text-sm text-ink/70">{r.education.additional.title}</p>
              <p className="text-xs text-ink/50">{r.education.additional.institution}</p>
            </div>
          </StaggerItem>

          <StaggerItem className="rounded-card border border-line bg-white p-7">
            <p className="mb-4 font-display text-lg font-semibold text-ink">{r.skills.title}</p>
            <div className="flex flex-col gap-5">
              {r.skills.groups.map((g) => (
                <div key={g.title}>
                  <p className="mb-2 text-xs font-medium uppercase tracking-wide text-ink/40">{g.title}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {g.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-paper-mist px-2.5 py-1 text-xs font-medium text-ink/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
