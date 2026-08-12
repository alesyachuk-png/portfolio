import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { Reveal } from "../motion";
import { SectionHeading } from "../SectionHeading";

// One shared presentation system for all three project visuals: same outer
// dimensions, radius, background, border, shadow, padding, and hover
// behavior. Each screenshot keeps its own native proportions inside via
// object-contain, so nothing is cropped or distorted.
const gridCols = {
  textFirst: "lg:grid-cols-[0.85fr_1.15fr]",
  visualFirst: "lg:grid-cols-[1.15fr_0.85fr]",
};

function ProjectVisual({ image, imageAlt }: { image: string; imageAlt: string }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-paper-soft to-lavender/60 shadow-[0_14px_36px_-24px_rgba(11,18,32,0.2)] transition-all duration-500 ease-premium group-hover:-translate-y-1 group-hover:scale-[1.015] group-hover:shadow-[0_22px_48px_-20px_rgba(41,84,229,0.28)]">
      <div className="absolute inset-0 p-6 md:p-10">
        <div className="relative h-full w-full">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-contain"
            sizes="(min-width: 1024px) 620px, (min-width: 768px) 60vw, 100vw"
            quality={90}
          />
        </div>
      </div>
    </div>
  );
}

export function SelectedWork({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const w = dict.home.work;

  return (
    <section id="work" className="scroll-mt-20 bg-paper py-20 md:py-28">
      <div className="container-content mb-16 md:mb-20">
        <SectionHeading eyebrow="Selected work" heading={w.heading} supporting={w.intro} />
      </div>

      <div className="flex flex-col gap-24 md:gap-32">
        {w.projects.map((project, i) => {
          const reversed = i % 2 === 1;
          const colsKey = reversed ? "visualFirst" : "textFirst";

          return (
            <Reveal key={project.slug} className="container-content">
              <Link
                href={`/${locale}/work/${project.slug}`}
                className={`group grid grid-cols-1 items-center gap-10 md:gap-16 ${gridCols[colsKey]}`}
              >
                <div className={`order-1 flex flex-col gap-5 ${reversed ? "md:order-2" : "md:order-1"}`}>
                  {project.featured ? (
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                        {w.featuredLabel}
                      </span>
                      <span className="text-sm font-medium uppercase tracking-wide text-ink/45">
                        {project.category}
                      </span>
                    </div>
                  ) : (
                    <p className="text-sm font-medium uppercase tracking-wide text-accent">
                      {String(i + 1).padStart(2, "0")} · {project.category}
                    </p>
                  )}
                  <h3 className="balance font-display text-2xl font-semibold text-ink transition-colors duration-300 group-hover:text-accent-600 md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="max-w-md text-base leading-relaxed text-ink/65 md:text-lg">
                    {project.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-ink">
                    {w.viewCaseStudy.replace(" →", "")}
                    <span
                      aria-hidden
                      className="inline-block transition-transform duration-300 ease-premium group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>
                <div className={`order-2 ${reversed ? "md:order-1" : "md:order-2"}`}>
                  <ProjectVisual image={project.image} imageAlt={project.imageAlt} />
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
