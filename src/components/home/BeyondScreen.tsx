import type { Dictionary } from "@/content/types";
import { SectionHeading } from "../SectionHeading";
import { Stagger, StaggerItem } from "../motion";

export function BeyondScreen({ dict }: { dict: Dictionary }) {
  const b = dict.home.beyond;

  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="container-content mb-14">
        <SectionHeading eyebrow="Beyond the screen" heading={b.heading} supporting={b.intro} />
      </div>
      <div className="container-content">
        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {b.items.map((item, i) => (
            <StaggerItem
              key={item.title}
              className="flex flex-col gap-3 rounded-card border border-line bg-white p-7"
            >
              <span className="text-xs font-medium text-ink/30">{String(i + 1).padStart(2, "0")}</span>
              <p className="font-display text-xl font-semibold text-ink">{item.title}</p>
              <p className="text-sm leading-relaxed text-ink/60">{item.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
