import type { ReactNode } from "react";
import { Reveal } from "./motion";

export function SectionHeading({
  eyebrow,
  heading,
  supporting,
  align = "left",
  size = "lg",
}: {
  eyebrow?: string;
  heading: ReactNode;
  supporting?: ReactNode;
  align?: "left" | "center";
  size?: "lg" | "md";
}) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left";
  const headingSize =
    size === "lg" ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl";

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignClass}`}>
      {eyebrow ? (
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-wide text-accent">{eyebrow}</p>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2 className={`balance font-display ${headingSize} font-semibold leading-[1.1] text-ink`}>
          {heading}
        </h2>
      </Reveal>
      {supporting ? (
        <Reveal delay={0.1}>
          <p className="balance text-base leading-relaxed text-ink/70 md:text-lg">{supporting}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
