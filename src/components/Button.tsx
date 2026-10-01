import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ease-premium focus-visible:outline-2";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-white hover:bg-accent-600",
  secondary: "border border-line bg-white text-ink hover:border-ink",
  ghost: "text-ink hover:text-accent",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  download,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  download?: string;
}) {
  return (
    <Link href={href} download={download} className={`${base} ${variants[variant]} ${className}`}>
      <span>{children}</span>
      <span
        aria-hidden
        className="inline-block transition-transform duration-300 ease-premium group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
