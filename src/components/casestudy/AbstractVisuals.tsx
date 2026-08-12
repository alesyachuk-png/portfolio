// Original, abstract portfolio-specific visualizations.
// These intentionally do NOT represent real product UI or confidential
// screenshots -- they illustrate structure and reasoning only.

export function AbstractHero({ seed = 1 }: { seed?: number }) {
  const bars = [42, 68, 30, 85, 54, 72, 38];
  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-white">
      <div className="grid grid-cols-1 gap-6 p-8 md:grid-cols-[1.3fr_1fr] md:p-12">
        <div className="flex items-end gap-2 md:gap-3">
          {bars.map((h, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-2">
              <div
                className="w-full rounded-t-md"
                style={{
                  height: `${h * (seed === 2 ? 1.5 : 2)}px`,
                  background:
                    i % 3 === 0
                      ? "linear-gradient(180deg, #2954E5 0%, #5A78EE 100%)"
                      : "#E4E7F0",
                }}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between gap-6">
          <div className="flex items-center justify-between rounded-xl bg-paper-mist px-4 py-3">
            <span className="h-2 w-16 rounded-full bg-ink/15" />
            <span className="h-5 w-10 rounded-full bg-accent-100" />
          </div>
          <div className="flex items-center justify-between rounded-xl bg-paper-mist px-4 py-3">
            <span className="h-2 w-20 rounded-full bg-ink/15" />
            <span className="h-5 w-10 rounded-full bg-lavender" />
          </div>
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 100 40" className="h-10 w-full" preserveAspectRatio="none" aria-hidden>
              <polyline
                points="0,32 15,20 30,26 45,10 60,18 75,6 100,14"
                fill="none"
                stroke="#2954E5"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

const glyphs = [
  // Sprint overview: grouped bars + ring
  (
    <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden>
      <circle cx="32" cy="32" r="22" fill="none" stroke="#DCE4FD" strokeWidth="6" />
      <circle
        cx="32"
        cy="32"
        r="22"
        fill="none"
        stroke="#2954E5"
        strokeWidth="6"
        strokeDasharray="100 138"
        strokeLinecap="round"
        transform="rotate(-90 32 32)"
      />
    </svg>
  ),
  // Velocity: line trend
  (
    <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden>
      <polyline
        points="4,48 18,34 30,40 44,18 60,24"
        fill="none"
        stroke="#2954E5"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  // Workload: distributed bars
  (
    <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden>
      <rect x="6" y="30" width="8" height="26" rx="2" fill="#B7C7FB" />
      <rect x="20" y="18" width="8" height="38" rx="2" fill="#2954E5" />
      <rect x="34" y="24" width="8" height="32" rx="2" fill="#5A78EE" />
      <rect x="48" y="10" width="8" height="46" rx="2" fill="#B7C7FB" />
    </svg>
  ),
  // Committed vs completed: two bars compared
  (
    <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden>
      <rect x="10" y="12" width="18" height="44" rx="3" fill="#DCE4FD" />
      <rect x="36" y="24" width="18" height="32" rx="3" fill="#2954E5" />
    </svg>
  ),
  // Scope change: delta arrows
  (
    <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden>
      <path d="M20 44 L20 20 M12 28 L20 20 L28 28" fill="none" stroke="#2954E5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M44 20 L44 44 M36 36 L44 44 L52 36" fill="none" stroke="#B7C7FB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
];

export function MetricGlyph({ index }: { index: number }) {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-paper-mist">
      {glyphs[index % glyphs.length]}
    </div>
  );
}
