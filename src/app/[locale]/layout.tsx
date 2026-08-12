import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/content";
import { siteConfig } from "@/lib/config";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);

  const languages = Object.fromEntries(locales.map((l) => [l, `/${l}`]));

  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: {
      default: dict.meta.siteTitle,
      template: "%s, Alesia Korenchuk",
    },
    description: dict.meta.siteDescription,
    alternates: {
      canonical: `/${params.locale}`,
      languages,
    },
    openGraph: {
      title: dict.meta.siteTitle,
      description: dict.meta.siteDescription,
      url: `${siteConfig.siteUrl}/${params.locale}`,
      siteName: dict.meta.siteTitle,
      images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: dict.meta.ogAlt }],
      locale: params.locale === "fr" ? "fr_FR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.siteTitle,
      description: dict.meta.siteDescription,
      images: ["/images/og-image.jpg"],
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const dict = getDictionary(locale);

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <Header locale={locale} dict={dict} />
        <main id="main-content">{children}</main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
