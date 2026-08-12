import { Reveal } from "../motion";

export function BeforeAfter({
  beforeTitle,
  before,
  afterTitle,
  after,
}: {
  beforeTitle: string;
  before: string[];
  afterTitle: string;
  after: string[];
}) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Reveal className="rounded-card border border-line bg-paper-mist p-8">
        <p className="mb-5 text-sm font-medium uppercase tracking-wide text-ink/40">{beforeTitle}</p>
        <ul className="flex flex-col gap-3">
          {before.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink/60">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/30" />
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal delay={0.1} className="rounded-card border border-accent-200 bg-accent-50 p-8">
        <p className="mb-5 text-sm font-medium uppercase tracking-wide text-accent-600">{afterTitle}</p>
        <ul className="flex flex-col gap-3">
          {after.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm font-medium leading-relaxed text-ink">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
