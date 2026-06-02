# Voktera — Marketing site

Public site for [voktera.com](https://voktera.com): product overview, legal pages, and brand assets.

The web app lives in a separate repo at **app.voktera.com**:

- [Personal-Dashboard-Application-Website](https://github.com/un-namedd/Personal-Dashboard-Application-Website)

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Changelog

Public release notes: edit [`src/content/marketing/changelog.ts`](src/content/marketing/changelog.ts) (see [`CHANGELOG.md`](CHANGELOG.md)). Live at `/changelog`, included in `sitemap.xml`.

## Legal content sync

Edit legal markdown in the **app** repo (`src/content/legal/`), then sync here:

```bash
npm run sync:legal
```

Or set `VOKTERA_APP_ROOT` if the app repo is not a sibling folder.

## Deploy (Vercel)

1. Import this repo as a new Vercel project.
2. Domains: `voktera.com` (apex) and `www.voktera.com` (redirects to apex via `vercel.json`).
3. No Supabase or app secrets required.

See [docs/VERCEL.md](docs/VERCEL.md) for domain split with the app project.

## SEO

See [docs/SEO.md](docs/SEO.md) for sitemap, Search Console, and structured data.

## Agent discovery

See [docs/AGENT_DISCOVERY.md](docs/AGENT_DISCOVERY.md). Set `NEXT_PUBLIC_SUPABASE_URL` on Vercel for OAuth/OIDC well-known endpoints.

## Brand assets

Static files under `public/brand/` — used by auth email templates at `https://voktera.com/brand/logo-email.png`.
