"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import type { Dictionary } from "@/content/types";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../motion";

export function HowIWork({ dict }: { dict: Dictionary }) {
  const hw = dict.home.howIWork;
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="bg-paper-mist py-20 md:py-28">
      <div className="container-content mb-16 md:mb-20">
        <SectionHeading eyebrow="How I work" heading={hw.heading} supporting={hw.intro} />
      </div>

      <div ref={ref} className="container-content relative max-w-3xl">
        <div className="absolute left-[19px] top-2 hidden h-[calc(100%-16px)] w-px bg-line md:block" aria-hidden />
        {!shouldReduce ? (
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[19px] top-2 hidden w-px bg-accent md:block"
            aria-hidden
          />
        ) : null}

        <ol className="flex flex-col gap-10 md:gap-12">
          {hw.stages.map((stage) => (
            <Reveal key={stage.number} y={24} className="relative flex gap-6 md:pl-2">
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-white text-xs font-semibold text-ink">
                {stage.number}
              </div>
              <div className="flex flex-1 flex-col gap-3 rounded-card border border-line bg-white p-6 md:p-7">
                <h3 className="font-display text-xl font-semibold text-ink">{stage.title}</h3>
                <ul className="flex flex-wrap gap-x-2 gap-y-2">
                  {stage.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-paper-mist px-3 py-1 text-xs font-medium text-ink/60"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.1} className="mt-10 flex items-start gap-3 rounded-2xl bg-lavender p-6">
          <span aria-hidden className="mt-0.5 text-lg text-accent">
            ↻
          </span>
          <p className="text-sm leading-relaxed text-ink/70">{hw.loopNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
