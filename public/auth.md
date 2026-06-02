# Voktera — Agent authentication

This document is for **AI agents** integrating with Voktera. Humans can use the [web app](https://app.voktera.com/login) directly.

## Product URLs

| Resource | URL |
|----------|-----|
| Marketing / discovery | https://voktera.com |
| Web application | https://app.voktera.com |
| API surface (authenticated) | https://app.voktera.com/api |
| API catalog (RFC 9727) | https://voktera.com/.well-known/api-catalog |

## How users sign in

Voktera uses **Supabase Auth** with email OTP (one-time code). There is no password flow.

1. Open `https://app.voktera.com/login`
2. Submit an email address
3. User completes Turnstile when enabled
4. User enters the OTP from email or follows the magic link
5. Session cookies are issued for the app origin (`app.voktera.com`)

Agents cannot complete sign-in on behalf of a user without their email inbox. Automations should use a **user-delegated** session or documented API keys if we publish them later.

## Machine-readable discovery

- `/.well-known/oauth-authorization-server` — OAuth 2.0 metadata (requires `NEXT_PUBLIC_SUPABASE_URL` on marketing deploy)
- `/.well-known/openid-configuration` — OpenID Connect metadata (Supabase Auth)
- `/.well-known/oauth-protected-resource` — Protected resource metadata for `app.voktera.com`
- `/.well-known/agent-skills/index.json` — Agent Skills index
- `/llms.txt` — Site summary for LLM crawlers

## Content preferences

See `/robots.txt` for Content Signals (`ai-train=no`, `search=yes`, `ai-input=no`).

## Support

- Email: support@voktera.com
- Privacy: privacy@voktera.com
