import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/content";
import { notFound } from "next/navigation";
import { Hero } from "@/components/home/Hero";
import { SelectedWork } from "@/components/home/SelectedWork";
import { HowIWork } from "@/components/home/HowIWork";
import { DesignLeadership } from "@/components/home/DesignLeadership";
import { DesignSystemStory } from "@/components/home/DesignSystemStory";
import { BeyondScreen } from "@/components/home/BeyondScreen";
import { AISection } from "@/components/home/AISection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const dict = getDictionary(locale);

  return (
    <>
      <Hero dict={dict} locale={locale} />
      <SelectedWork dict={dict} locale={locale} />
      <HowIWork dict={dict} />
      <DesignLeadership dict={dict} />
      <DesignSystemStory dict={dict} />
      <BeyondScreen dict={dict} />
      <AISection dict={dict} />
      <FinalCTA dict={dict} locale={locale} />
    </>
  );
}
