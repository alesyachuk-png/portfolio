"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CTAButton } from "../Button";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/i18n";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const shouldReduce = useReducedMotion();
  const h = dict.home.hero;

  const rise = (delay: number) => ({
    initial: { opacity: 0, y: shouldReduce ? 0 : 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: EASE },
  });

  return (
    <section className="relative overflow-hidden bg-paper pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="container-content grid grid-cols-1 items-center gap-14 md:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col gap-7">
          <motion.p {...rise(0)} className="text-sm font-medium uppercase tracking-wide text-accent">
            {h.eyebrow} · Bordeaux, France
          </motion.p>

          <motion.h1
            {...rise(0.08)}
            className="balance font-display text-4xl font-semibold leading-[1.05] text-ink md:text-6xl lg:text-[64px]"
          >
            {h.headline}
          </motion.h1>

          <motion.p {...rise(0.18)} className="balance max-w-xl text-lg leading-relaxed text-ink/65 md:text-xl">
            {h.supporting}
          </motion.p>

          <motion.div {...rise(0.28)} className="mt-2 flex flex-wrap items-center gap-4">
            <CTAButton href={`/${locale}#work`} variant="primary">
              {h.ctaPrimary}
            </CTAButton>
            <CTAButton href={`/${locale}/about`} variant="secondary">
              {h.ctaSecondary}
            </CTAButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: shouldReduce ? 0 : 24, scale: shouldReduce ? 1 : 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          className="relative mx-auto w-full max-w-[300px] md:max-w-[340px]"
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-paper-mist">
            <Image
              src="/images/alesia-portrait.jpg"
              alt={h.imageAlt}
              fill
              sizes="(min-width: 768px) 340px, 60vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden h-24 w-24 rounded-2xl bg-lavender md:block" aria-hidden />
        </motion.div>
      </div>
    </section>
  );
}
