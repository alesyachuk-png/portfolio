import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content/types";
import { siteConfig } from "@/lib/config";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper-soft">
      <div className="container-content flex flex-col gap-10 py-16 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-2">
          <Link href={`/${locale}`} className="font-display text-lg font-semibold text-ink">
            {siteConfig.name}
          </Link>
          <p className="text-sm text-ink/60">{dict.footer.role}</p>
          <p className="text-sm text-ink/60">{dict.footer.location}</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium uppercase tracking-wide text-ink/40">{dict.footer.emailLabel}</p>
          <a href={`mailto:${siteConfig.email}`} className="text-sm text-ink hover:text-accent">
            {siteConfig.email}
          </a>
          <p className="mt-2 text-xs font-medium uppercase tracking-wide text-ink/40">{dict.footer.linkedinLabel}</p>
          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${dict.footer.linkedinLabel} ${dict.common.opensInNewTab}`}
            className="group inline-flex w-fit items-center gap-1 text-sm text-ink transition-colors duration-200 hover:text-accent"
          >
            <span>LinkedIn</span>
            <span
              aria-hidden
              className="inline-block text-xs transition-transform duration-200 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              ↗
            </span>
          </a>
        </div>

        <div className="flex flex-col items-start gap-4 md:items-end">
          <LanguageSwitcher locale={locale} />
          <p className="text-sm text-ink/50">{dict.footer.closingLine}</p>
        </div>
      </div>
      <div className="border-t border-line py-5">
        <p className="container-content text-xs text-ink/40">
          © {year} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
