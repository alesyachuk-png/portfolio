# Alesia Korenchuk — Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion. Bilingual (EN default / FR), fully static, ready to deploy to Vercel.

## Project structure

```
src/
  app/
    [locale]/            All real pages live here ("en" or "fr")
      layout.tsx          Root <html>/<body>, header, footer, page <head> metadata
      page.tsx             Homepage
      about/page.tsx
      resume/page.tsx
      work/
        sprint-performance/page.tsx
        sla-management/page.tsx
        repliku/page.tsx
      not-found.tsx
    globals.css
    sitemap.ts / robots.ts
  middleware.ts           Redirects "/" -> "/en"
  content/
    en.ts                 All English copy
    fr.ts                 All French copy
    types.ts              Shared shape both files must match
    index.ts               getDictionary(locale)
  components/              Header, Footer, buttons, motion helpers, homepage
                            sections, and case-study building blocks
                            (components/casestudy/*)
  lib/
    i18n.ts                Locale helpers
    config.ts               Name / email / LinkedIn URL — edit here
public/
  images/                  Portrait, OG image, favicons
  cv/                      CV PDFs (placeholders — replace these)
```

## Editing English content

Open `src/content/en.ts`. Everything on the site — nav labels, hero copy,
case study text, footer — lives in this one typed object. Edit any string
and save.

## Editing French content

Same idea, in `src/content/fr.ts`. TypeScript will show an error if the
French file is missing a field the English file has (they share the
`Dictionary` type in `src/content/types.ts`), so it's hard for the two
languages to drift out of sync by accident.

## Replacing your portrait

Replace `public/images/alesia-portrait.jpg` with your own image (same
filename, or update the two `src="/images/alesia-portrait.jpg"` references
in `src/components/home/Hero.tsx` and `src/app/[locale]/about/page.tsx`).

**Note:** the current portrait was cropped from the candid photo you shared
in this conversation. It works as a placeholder, but it's a social/event
photo (sunglasses, side profile) rather than a professional headshot — you
may want to swap in a more formal portrait before publishing this live,
especially since the site targets Senior/Lead hiring conversations.

## Replacing product screenshots / case study visuals

Every image a case study might eventually need — hero shot, final-experience
screens, design-system capture, analytics screenshot — is registered as a
named "asset slot" in **one file**: `src/content/assets.ts`. Until you add a
real image, each slot renders as an elegant placeholder card (icon, title,
description, and a line like `16:9 · Desktop screenshot · Required`) instead
of a blank grey box or a fake screenshot.

To add a real, safe screenshot:

1. Drop the image in `public/images/case-studies/`.
2. Open `src/content/assets.ts`, find the slot (e.g. `sprintAssets.hero`),
   and set `src: "/images/case-studies/your-file.jpg"`.

That's it — no layout code to touch. The placeholder and the real image
share the same aspect-ratio box, so nothing shifts when you swap it in.
Diagrams that were safe to recreate (journeys, MVP maps, SLA states, IA,
before/after, etc.) are already built as real components rather than
placeholders — you'll find those in `src/components/casestudy/`.

Never commit anything containing real customer names, emails, internal
Jira issue keys, or other confidential data — blur or crop those out first.

## Editing a case study

Each case study page (`src/app/[locale]/work/<slug>/page.tsx`) pulls its
text from `dict.sprint`, `dict.sla`, or `dict.repliku` in
`src/content/en.ts` / `fr.ts`. Edit the content there; the page layout
components (decision cards, flow diagrams, before/after, etc.) will pick
up the new text automatically.

## Adding a new project

1. Add a new entry to `home.work.projects` in `en.ts` and `fr.ts` (this
   adds the editorial block on the homepage).
2. Add a new `ShortCaseStudy` (or a full one, following the `sprint` shape)
   entry to the `Dictionary` in both content files.
3. Create `src/app/[locale]/work/<your-slug>/page.tsx`, following
   `sla-management/page.tsx` as a template (it uses the shared
   `<ShortCaseStudyLayout />` component).

## Your CV / Resume

The Resume page (`src/app/[locale]/resume/page.tsx`) links to:

- `public/cv/alesia-korenchuk-cv-en.pdf`
- `public/cv/alesia-korenchuk-cv-fr.pdf`

Both are currently placeholder PDFs. Replace them with your real CV
(keep the same filenames, or update the paths in `resume/page.tsx`).
The on-page "Experience / Education / Skills" cards are placeholders too —
fill them in once you're ready, in `resume.sections` in the content files.

## Contact details

Edit `src/lib/config.ts` to update your email and LinkedIn URL. The
LinkedIn URL in there right now is a placeholder guess — double-check it
before publishing.

## Running locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000 (redirects to `/en`).

Other useful scripts:

```bash
npm run typecheck   # TypeScript, no build
npm run build        # production build
npm run start         # serve the production build locally
npm run lint           # ESLint
```

## Deploying to Vercel

1. Push this project to a GitHub/GitLab/Bitbucket repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset "Next.js" is auto-detected — no config needed.
4. Deploy. Vercel will build and serve both `/en` and `/fr` automatically.

Before going live, update `siteUrl` in `src/lib/config.ts` and
`metadataBase` usage (already wired to `siteConfig.siteUrl`) to your real
production domain, and swap in your real portrait, CV, and LinkedIn URL as
described above.

## Notes on content honesty

Per the original brief, this site intentionally avoids inventing metrics,
user research, interviews, funding, revenue, or confidential internal
artifacts. Where real information wasn't available, you'll find either a
qualitative description of the approach or an explicit placeholder like
`[Add metric]` — search the content files for `[Add` to find every one of
these and fill them in as real information becomes available.
