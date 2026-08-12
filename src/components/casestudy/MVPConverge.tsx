import { Stagger, StaggerItem, Reveal } from "../motion";

export function MVPConverge({ metrics, target }: { metrics: string[]; target: string }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-line bg-paper-mist px-6 py-10">
      <Stagger className="flex flex-wrap justify-center gap-3">
        {metrics.map((m) => (
          <StaggerItem
            key={m}
            className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink/80"
          >
            {m}
          </StaggerItem>
        ))}
      </Stagger>
      <svg viewBox="0 0 200 40" className="h-8 w-40" aria-hidden>
        <path d="M20 4 L100 34 M70 4 L100 34 M100 34 L130 4 M100 34 L180 4" fill="none" stroke="#B7C7FB" strokeWidth="2" />
        <circle cx="100" cy="34" r="3" fill="#2954E5" />
      </svg>
      <Reveal>
        <div className="rounded-xl bg-ink px-6 py-3 text-sm font-semibold text-white">{target}</div>
      </Reveal>
    </div>
  );
}
