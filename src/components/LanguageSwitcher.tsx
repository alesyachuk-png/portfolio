"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, switchLocalePath, type Locale } from "@/lib/i18n";

const languageNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
};

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";

  return (
    <nav aria-label="Language switcher" className="flex items-center gap-1 text-sm font-medium">
      {locales.map((code, i) => (
        <span key={code} className="flex items-center gap-1">
          <Link
            href={switchLocalePath(pathname, code)}
            aria-current={locale === code ? "true" : undefined}
            aria-label={languageNames[code]}
            className={`inline-flex items-center rounded-full px-2 py-1 transition-colors duration-200 ${
              locale === code ? "text-ink" : "text-ink/40 hover:text-ink"
            }`}
          >
            {code.toUpperCase()}
          </Link>
          {i < locales.length - 1 ? <span className="text-ink/20">/</span> : null}
        </span>
      ))}
    </nav>
  );
}
