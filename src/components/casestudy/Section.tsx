import type { ReactNode } from "react";
import { Reveal } from "../motion";

export function CSSection({
  heading,
  eyebrow,
  tone = "white",
  children,
  id,
}: {
  heading?: ReactNode;
  eyebrow?: string;
  tone?: "white" | "mist" | "lavender";
  children: ReactNode;
  id?: string;
}) {
  const bg =
    tone === "mist" ? "bg-paper-mist" : tone === "lavender" ? "bg-lavender" : "bg-white";

  return (
    <section id={id} className={`${bg} py-16 md:py-24`}>
      <div className="container-content flex flex-col gap-8">
        {heading ? (
          <div className="flex flex-col gap-3">
            {eyebrow ? (
              <Reveal>
                <p className="text-sm font-medium uppercase tracking-wide text-accent">{eyebrow}</p>
              </Reveal>
            ) : null}
            <Reveal delay={0.05}>
              <h2 className="balance font-display text-2xl font-semibold leading-tight text-ink md:text-4xl">
                {heading}
              </h2>
            </Reveal>
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
