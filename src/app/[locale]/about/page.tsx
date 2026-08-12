import Image from "next/image";
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
  return {
    title: dict.about.headline,
    description: dict.about.paragraphs[0],
  };
}

export default function AboutPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const dict = getDictionary(locale);
  const a = dict.about;

  return (
    <>
      <section className="bg-paper-soft py-16 md:py-24">
        <div className="container-content grid grid-cols-1 items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div className="flex flex-col gap-6">
            <Reveal>
              <p className="text-sm font-medium uppercase tracking-wide text-accent">{a.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="balance font-display text-3xl font-semibold leading-tight text-ink md:text-5xl">
                {a.headline}
              </h1>
            </Reveal>
            <div className="flex flex-col gap-4">
              {a.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.08 + i * 0.05}>
                  <p className="max-w-xl text-base leading-relaxed text-ink/70 md:text-lg">{p}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.3}>
              <CTAButton href={`/${locale}/resume`} variant="secondary" className="mt-2">
                {dict.nav.resume}
              </CTAButton>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="relative mx-auto w-full max-w-[320px]">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-paper-mist">
              <Image
                src="/images/alesia-portrait.jpg"
                alt={a.imageAlt}
                fill
                sizes="(min-width: 768px) 320px, 70vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 hidden h-24 w-24 rounded-2xl bg-accent-100 md:block" aria-hidden />
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container-content grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <Reveal className="mb-5 text-xs font-medium uppercase tracking-wide text-ink/40">
              {a.highlightsTitle}
            </Reveal>
            <Stagger className="flex flex-col gap-3">
              {a.highlights.map((h) => (
                <StaggerItem key={h} className="text-sm font-medium text-ink/80">
                  {h}
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div>
            <Reveal className="mb-5 text-xs font-medium uppercase tracking-wide text-ink/40">
              {a.locationTitle}
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-sm font-medium text-ink/80">{a.location}</p>
            </Reveal>
          </div>

          <div>
            <Reveal className="mb-5 text-xs font-medium uppercase tracking-wide text-ink/40">
              {a.languagesTitle}
            </Reveal>
            <Stagger className="flex flex-col gap-3">
              {a.languages.map((l) => (
                <StaggerItem key={l.name} className="flex items-center justify-between gap-4 text-sm">
                  <span className="font-medium text-ink/80">{l.name}</span>
                  <span className="text-ink/40">{l.level}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>
    </>
  );
}
