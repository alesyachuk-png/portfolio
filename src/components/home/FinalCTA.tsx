import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { CTAButton } from "../Button";
import { Reveal } from "../motion";
import { siteConfig } from "@/lib/config";

export function FinalCTA({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const c = dict.home.finalCta;

  return (
    <section className="bg-paper-soft py-20 md:py-28">
      <div className="container-content flex flex-col items-start gap-6 md:items-center md:text-center">
        <Reveal className="flex flex-col items-start gap-4 md:items-center">
          <h2 className="balance font-display text-3xl font-semibold text-ink md:text-5xl">{c.heading}</h2>
          <p className="balance max-w-xl text-base leading-relaxed text-ink/60 md:text-lg">{c.supporting}</p>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-wrap gap-4">
          <CTAButton href={`/${locale}#work`} variant="primary">
            {c.ctaPrimary}
          </CTAButton>
          <CTAButton href={`mailto:${siteConfig.email}`} variant="secondary">
            {c.ctaSecondary}
          </CTAButton>
        </Reveal>
      </div>
    </section>
  );
}
