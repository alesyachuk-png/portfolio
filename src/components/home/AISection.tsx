import type { Dictionary } from "@/content/types";
import { SectionHeading } from "../SectionHeading";
import { Stagger, StaggerItem } from "../motion";

export function AISection({ dict }: { dict: Dictionary }) {
  const a = dict.home.ai;

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-content mb-12">
        <SectionHeading eyebrow="AI & design practice" heading={a.heading} supporting={a.supporting} />
      </div>
      <div className="container-content flex flex-col gap-8">
        <Stagger className="flex flex-wrap gap-3">
          {a.items.map((item) => (
            <StaggerItem
              key={item}
              className="rounded-full border border-line bg-paper-mist px-4 py-2 text-sm font-medium text-ink/75"
            >
              {item}
            </StaggerItem>
          ))}
        </Stagger>
        <p className="max-w-2xl text-base leading-relaxed text-ink/60">{a.closing}</p>
      </div>
    </section>
  );
}
