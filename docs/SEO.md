# SEO — voktera.com

## What is already configured

- **Metadata** — titles, descriptions, keywords, Open Graph, Twitter cards (`src/lib/seo/site-metadata.ts`)
- **Canonical URLs** — per page via `metadataBase` and `alternates.canonical`
- **Sitemap** — https://voktera.com/sitemap.xml (`src/app/sitemap.ts`) — includes `/`, `/changelog`, and legal pages
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

- Clear header nav: Features, How it works, FAQ, Changelog, Get started (`/#download`)
- Section IDs: `#features`, `#how-it-works`, `#faq`, `#download`
- Separate legal URLs in footer
- FAQ structured data on the home page

Sitelinks are not guaranteed and can take weeks to appear.

## Changelog

Product updates: https://voktera.com/changelog

Edit `src/content/marketing/changelog.ts` (see root `CHANGELOG.md`). New entries update the page and sitemap `lastModified` for `/changelog`.

## App subdomain (`app.voktera.com`)

The **marketing site** (`voktera.com`) is what you index in Search Console and Bing. The app is sign-in only:

- Link to `https://app.voktera.com/login`, not the bare app root (avoids redirect/crawler noise).
- App serves `robots.txt` with `Disallow: /` and `noindex` metadata so dashboards are not treated as public landing pages.

If an SEO crawler reports **HTTP 4xx** on app URLs, check **Vercel → Project (app) → Security**: Bot Protection / Attack Challenge Mode can return **429** to automated clients. Allow verified search bots or relax protection for `/login`.

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
