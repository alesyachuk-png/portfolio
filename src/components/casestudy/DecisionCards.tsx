import type { DecisionCard } from "@/content/types";
import { Stagger, StaggerItem } from "../motion";

export function DecisionCards({
  cards,
  labels,
}: {
  cards: DecisionCard[];
  labels: { context: string; options: string; constraint: string; reasoning: string; outcome: string };
}) {
  return (
    <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {cards.map((card) => (
        <StaggerItem
          key={card.decision}
          className="flex h-full flex-col gap-4 rounded-card border border-line bg-white p-6"
        >
          <p className="font-display text-lg font-semibold text-ink">{card.decision}</p>

          <div className="flex flex-col gap-1">
            <p className="text-xs font-medium uppercase tracking-wide text-ink/40">{labels.context}</p>
            <p className="text-sm leading-relaxed text-ink/70">{card.context}</p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-xs font-medium uppercase tracking-wide text-ink/40">{labels.options}</p>
            <ul className="flex flex-col gap-1">
              {card.options.map((o) => (
                <li key={o} className="text-sm leading-relaxed text-ink/70">
                  · {o}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-xs font-medium uppercase tracking-wide text-ink/40">{labels.constraint}</p>
            <p className="text-sm leading-relaxed text-ink/70">{card.constraint}</p>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-xs font-medium uppercase tracking-wide text-ink/40">{labels.reasoning}</p>
            <p className="text-sm leading-relaxed text-ink/70">{card.reasoning}</p>
          </div>

          <div className="mt-auto flex flex-col gap-1 rounded-xl bg-accent-50 p-3">
            <p className="text-xs font-medium uppercase tracking-wide text-accent-600">{labels.outcome}</p>
            <p className="text-sm font-medium leading-relaxed text-ink">{card.outcome}</p>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
