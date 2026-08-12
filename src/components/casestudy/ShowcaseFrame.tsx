import Image from "next/image";
import { Reveal } from "../motion";

// Shared premium presentation for real product screenshots inside a case
// study: consistent radius, border, soft shadow, and background across
// every visual moment, with each image kept at its own aspect ratio via
// object-contain so nothing is cropped or distorted.
export function ShowcaseFrame({
  src,
  alt,
  aspect,
  tint = "bg-paper-soft",
  padding = "p-6 md:p-10",
  priority = false,
  sizes = "(min-width: 1024px) 900px, 100vw",
  className = "",
}: {
  src: string;
  alt: string;
  aspect: string;
  tint?: string;
  padding?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <div
        className={`relative w-full overflow-hidden rounded-2xl border border-line ${tint} shadow-[0_16px_40px_-26px_rgba(11,18,32,0.22)]`}
      >
        <div className={`relative w-full ${padding}`} style={{ aspectRatio: aspect }}>
          <Image src={src} alt={alt} fill className="object-contain" sizes={sizes} quality={90} priority={priority} />
        </div>
      </div>
    </Reveal>
  );
}
