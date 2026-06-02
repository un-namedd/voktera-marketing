# SEO — voktera.com

## What is already configured

- **Metadata** — titles, descriptions, keywords, Open Graph, Twitter cards (`src/lib/seo/site-metadata.ts`)
- **Canonical URLs** — per page via `metadataBase` and `alternates.canonical`
- **Sitemap** — https://voktera.com/sitemap.xml (`src/app/sitemap.ts`)
- **robots.txt** — https://voktera.com/robots.txt (`src/app/robots.ts`)
- **JSON-LD** — Organization, WebSite, SoftwareApplication, FAQPage on home (`src/components/JsonLd.tsx`)
- **OG image** — generated at `/opengraph-image` (`src/app/opengraph-image.tsx`)
- **llms.txt** — https://voktera.com/llms.txt

## Google Search Console (manual)

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add property **URL prefix** `https://voktera.com`.
3. Verify ownership:
   - **DNS** (recommended on Cloudflare), or
   - Set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in Vercel to the meta tag value from Google, redeploy.
4. Submit sitemap: `https://voktera.com/sitemap.xml`.
5. Use **URL inspection** on `https://voktera.com/` → **Request indexing** after major launches.

## Sitelinks

Google chooses sitelinks automatically. This site helps by:

- Clear header nav: Features, How it works, FAQ, Get started (`/#download`)
- Section IDs: `#features`, `#how-it-works`, `#faq`, `#download`
- Separate legal URLs in footer
- FAQ structured data on the home page

Sitelinks are not guaranteed and can take weeks to appear.

## Store badges

When iOS/Android apps ship, set in `src/lib/site-config.ts`:

```ts
appStoreUrl: "https://apps.apple.com/app/...",
playStoreUrl: "https://play.google.com/store/apps/details?id=...",
```

Badges become full color and clickable. Until then they appear greyed with “coming soon”.

## Replacing badge artwork

Download official badges from:

- [Apple App Store Marketing Tools](https://developer.apple.com/app-store/marketing/guidelines/)
- [Google Play badge guidelines](https://partnermarketinghub.withgoogle.com/brands/google-play/visual-identity/badge-guidelines/)

Replace files in `public/badges/` without modifying the artwork.
