"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Dictionary } from "@/content/types";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export function DesignLeadership({ dict }: { dict: Dictionary }) {
  const l = dict.home.leadership;
  const [active, setActive] = useState(0);

  return (
    <section className="bg-ink py-20 text-white md:py-28">
      <div className="container-content mb-14 md:mb-20">
        <SectionHeading
          eyebrow="Design leadership"
          heading={<span className="text-white">{l.heading}</span>}
          supporting={<span className="text-white/60">{l.supporting}</span>}
        />
      </div>

      <div className="container-content grid grid-cols-1 gap-3 md:grid-cols-[0.85fr_1.15fr] md:gap-10">
        <div className="flex flex-col gap-2">
          {l.areas.map((area, i) => (
            <button
              key={area.title}
              onClick={() => setActive(i)}
              className={`flex items-center justify-between rounded-xl border px-5 py-4 text-left transition-colors duration-300 ${
                active === i
                  ? "border-accent-400 bg-white/5 text-white"
                  : "border-white/10 text-white/50 hover:border-white/25 hover:text-white/80"
              }`}
            >
              <span className="text-sm font-medium md:text-base">{area.title}</span>
              <span aria-hidden className="text-lg">
                {active === i ? "—" : "+"}
              </span>
            </button>
          ))}
        </div>

        <Reveal className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 md:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <p className="mb-6 text-base leading-relaxed text-white/70 md:text-lg">
                {l.areas[active].description}
              </p>
              <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {l.areas[active].points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm leading-relaxed text-white/55">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
