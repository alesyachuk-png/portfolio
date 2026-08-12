import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/content";
import { replicooAssets } from "@/content/assets";
import { ShortCaseStudyLayout } from "@/components/casestudy/ShortCaseStudyLayout";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);
  return { title: dict.replicoo.meta.title, description: dict.replicoo.meta.headline };
}

export default function ReplicooPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const dict = getDictionary(locale);
  const c = dict.common;

  return (
    <ShortCaseStudyLayout
      study={dict.replicoo}
      locale={locale}
      heroSlot={replicooAssets.hero}
      finalGallery={[replicooAssets.final1, replicooAssets.final2, replicooAssets.aiInteraction, replicooAssets.information]}
      finalHeading={c.finalExperienceHeading}
      finalIntro={c.finalExperienceIntro}
      labels={{
        roleLabel: c.roleLabel,
        platformLabel: c.platformLabel,
        collaborationLabel: c.collaborationLabel,
        contributionLabel: c.contributionLabel,
        backToWork: c.backToWork,
        nextProject: c.nextProject,
      }}
      nextHref={`/${locale}/work/sprint-performance`}
      nextTitle={dict.sprint.meta.title}
    />
  );
}
