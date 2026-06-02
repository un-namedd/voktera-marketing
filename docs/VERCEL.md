# Vercel — marketing vs app

| Domain | Repository | Vercel project |
|--------|------------|----------------|
| `voktera.com`, `www` → apex | **voktera-marketing** (this repo) | New project |
| `app.voktera.com` | Personal-Dashboard-Application-Website | Existing app project |

## This project (marketing)

1. [vercel.com/new](https://vercel.com/new) → Import `un-namedd/voktera-marketing`.
2. Framework: Next.js (auto-detected). Deploy.
3. **Settings → Domains** → Add `voktera.com` and `www.voktera.com`.
4. Cloudflare DNS (example — use values Vercel shows):
   - Apex `voktera.com` → A/CNAME per Vercel
   - `www` → CNAME to Vercel (redirect handled in `vercel.json`)

## App project

1. Add domain `app.voktera.com`.
2. Set `NEXT_PUBLIC_APP_URL=https://app.voktera.com` (Production).
3. Remove `voktera.com` from the app project after marketing is live.
4. Cloudflare: `app` CNAME → app Vercel target.

## Cutover order

1. Deploy marketing; verify `https://voktera.com` and `/brand/logo-email.png`.
2. Deploy app on `app.voktera.com` with updated env.
3. Update Supabase redirect URLs to `https://app.voktera.com/auth/callback`.
4. Move apex DNS from app project to marketing project.
