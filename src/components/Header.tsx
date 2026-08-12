"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content/types";
import { siteConfig } from "@/lib/config";
import { LanguageSwitcher } from "./LanguageSwitcher";

// One shared box model for every primary nav item (Work / About / Resume /
// LinkedIn): identical symmetric vertical padding and no border. The active
// underline is an absolutely positioned overlay so it never adds height to
// the box -- that's what previously made LinkedIn sit a couple of pixels off
// from its siblings, since only they carried a border-bottom + padding-bottom.
const navItemClass = (active: boolean) =>
  `relative inline-flex items-center py-1.5 text-sm font-medium transition-colors duration-200 ${
    active ? "text-ink" : "text-ink/70 hover:text-ink"
  }`;

function NavUnderline({ active }: { active: boolean }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full transition-colors duration-200 ${
        active ? "bg-accent" : "bg-transparent"
      }`}
    />
  );
}

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname() || "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const links = [
    { href: `/${locale}#work`, label: dict.nav.work, match: "/work" },
    { href: `/${locale}/about`, label: dict.nav.about, match: "/about" },
    { href: `/${locale}/resume`, label: dict.nav.resume, match: "/resume" },
  ];

  const linkedinAriaLabel = `${dict.nav.linkedin} ${dict.common.opensInNewTab}`;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-premium ${
        scrolled ? "bg-white/85 shadow-[0_1px_0_0_rgba(11,18,32,0.06)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        {dict.nav.skipToContent}
      </a>
      <div
        className={`container-content flex items-center justify-between transition-[padding] duration-300 ease-premium ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <Link
          href={`/${locale}`}
          className="inline-flex items-center py-1.5 font-display text-base font-semibold leading-none tracking-tight text-ink transition-colors duration-200 hover:text-accent-600"
        >
          {siteConfig.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive = pathname.includes(link.match);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={navItemClass(isActive)}
              >
                {link.label}
                <NavUnderline active={isActive} />
              </Link>
            );
          })}
          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={linkedinAriaLabel}
            className={`${navItemClass(false)} group gap-1`}
          >
            <span>{dict.nav.linkedin}</span>
            <span
              aria-hidden
              className="inline-block text-xs transition-transform duration-200 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              ↗
            </span>
            <NavUnderline active={false} />
          </a>

          <span className="h-4 w-px shrink-0 bg-line" aria-hidden />

          <LanguageSwitcher locale={locale} />
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`block h-px w-5 bg-ink transition-transform duration-300 ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-5 bg-ink transition-transform duration-300 ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-white md:hidden"
          >
            <nav aria-label="Mobile" className="container-content flex flex-col gap-5 py-6">
              {links.map((link) => {
                const isActive = pathname.includes(link.match);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`text-lg font-medium ${isActive ? "text-accent" : "text-ink"}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={linkedinAriaLabel}
                className="inline-flex items-center gap-1.5 text-lg font-medium text-ink"
              >
                {dict.nav.linkedin}
                <span aria-hidden className="text-base">
                  ↗
                </span>
              </a>
              <div className="pt-2">
                <LanguageSwitcher locale={locale} />
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
