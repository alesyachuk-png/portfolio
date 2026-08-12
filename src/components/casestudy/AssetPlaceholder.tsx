import Image from "next/image";
import type { AssetSlot } from "@/content/assets";
import type { Locale } from "@/lib/i18n";
import { Reveal } from "../motion";

function PlaceholderIcon() {
  return (
    <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden>
      <rect x="4" y="7" width="32" height="26" rx="4" fill="none" stroke="#B7C7FB" strokeWidth="2" />
      <circle cx="14" cy="16" r="3" fill="none" stroke="#2954E5" strokeWidth="2" />
      <path
        d="M7 28 L16 20 L21 25 L27 18 L33 26"
        fill="none"
        stroke="#2954E5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AssetPlaceholder({
  slot,
  locale,
  className = "",
}: {
  slot: AssetSlot;
  locale: Locale;
  className?: string;
}) {
  const requiredLabel = slot.required[locale];
  const formatLabel = slot.formatLabel[locale];
  const ratioText = slot.aspect.replace("/", ":");

  if (slot.src) {
    return (
      <Reveal className={className}>
        <div className="relative w-full overflow-hidden rounded-2xl border border-line bg-paper-mist" style={{ aspectRatio: slot.aspect }}>
          <Image src={slot.src} alt={slot.title[locale]} fill className="object-cover" sizes="(min-width: 768px) 60vw, 100vw" />
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal className={className}>
      <div
        className="flex w-full flex-col items-center justify-center gap-3 rounded-2xl border-[1.5px] border-dashed border-line bg-paper-mist px-6 py-8 text-center"
        style={{ aspectRatio: slot.aspect }}
      >
        <PlaceholderIcon />
        <p className="font-display text-sm font-semibold text-ink">{slot.title[locale]}</p>
        <p className="max-w-xs text-xs leading-relaxed text-ink/55">{slot.description[locale]}</p>
        <p className="text-[11px] font-medium uppercase tracking-wide text-ink/35">
          {ratioText} · {formatLabel} · {requiredLabel}
        </p>
      </div>
    </Reveal>
  );
}
