# Voktera auth.md

Agent registration and authentication for **Voktera**. Humans sign in at [app.voktera.com/login](https://app.voktera.com/login).

## Protected resources

| Resource | Identifier |
|----------|------------|
| Web application & API | `https://app.voktera.com` |
| Marketing & discovery | `https://voktera.com` |

## Registration (verified email)

Voktera uses **Supabase Auth** with email OTP (one-time code). There is no password flow.

1. Open `https://app.voktera.com/login`
2. Submit an email address
3. Complete Turnstile when prompted
4. Enter the OTP from email or follow the magic link
5. Session cookies are issued for `app.voktera.com`

Agents cannot complete sign-in without access to the user’s inbox. Automations must use a **user-delegated** session.

**Registration URI:** `https://app.voktera.com/login`  
**Credential type:** `otp`  
**Identity type:** `verified_email`

## Machine-readable discovery

| Document | URL |
|----------|-----|
| OAuth protected resource (app) | https://app.voktera.com/.well-known/oauth-protected-resource |
| OAuth protected resource (site) | https://voktera.com/.well-known/oauth-protected-resource |
| OAuth authorization server | https://voktera.com/.well-known/oauth-authorization-server |
| OpenID configuration | https://voktera.com/.well-known/openid-configuration |
| Agent Skills index | https://voktera.com/.well-known/agent-skills/index.json |
| API catalog (RFC 9727) | https://voktera.com/.well-known/api-catalog |

Authorization server issuer: your Supabase project `https://<project>.supabase.co/auth/v1` (see well-known URLs above when `NEXT_PUBLIC_SUPABASE_URL` is configured on the marketing deploy).

## Content preferences

See https://voktera.com/robots.txt for Content Signals (`ai-train=no`, `search=yes`, `ai-input=no`).

## Support

- support@voktera.com
- privacy@voktera.com
