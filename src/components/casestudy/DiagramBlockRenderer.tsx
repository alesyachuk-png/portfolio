import type { DiagramBlock } from "@/content/types";
import { Reveal } from "../motion";
import { PillGroup } from "./PillGroup";
import { FlowDiagram } from "./FlowDiagram";

export function DiagramBlockRenderer({ block }: { block: DiagramBlock }) {
  return (
    <div className="flex flex-col gap-4">
      <Reveal>
        <p className="font-display text-lg font-semibold text-ink">{block.heading}</p>
      </Reveal>
      {block.intro ? (
        <Reveal delay={0.05}>
          <p className="max-w-2xl text-sm leading-relaxed text-ink/60">{block.intro}</p>
        </Reveal>
      ) : null}
      {block.kind === "pills" ? <PillGroup items={block.items} /> : <FlowDiagram steps={block.items} />}
    </div>
  );
}
