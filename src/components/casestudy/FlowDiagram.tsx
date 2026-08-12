"use client";

import { Stagger, StaggerItem } from "../motion";

export function FlowDiagram({ steps, note }: { steps: string[]; note?: string }) {
  return (
    <div className="flex flex-col gap-6">
      <Stagger className="flex flex-wrap items-center gap-x-2 gap-y-4">
        {steps.map((step, i) => (
          <StaggerItem key={step} className="flex items-center gap-2">
            <div className="flex items-center gap-3 rounded-2xl border border-line bg-white px-5 py-3 shadow-[0_1px_2px_rgba(11,18,32,0.04)]">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-50 text-xs font-semibold text-accent-600">
                {i + 1}
              </span>
              <span className="text-sm font-medium text-ink">{step}</span>
            </div>
            {i < steps.length - 1 ? (
              <span aria-hidden className="text-ink/25">
                →
              </span>
            ) : null}
          </StaggerItem>
        ))}
      </Stagger>
      {note ? (
        <p className="max-w-xl rounded-2xl bg-lavender px-5 py-4 text-sm leading-relaxed text-ink/70">{note}</p>
      ) : null}
    </div>
  );
}
