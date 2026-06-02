# Agent discovery (voktera.com)

Implements common [isitagentready.com](https://isitagentready.com) checks for AI agents and crawlers.

## Enabled in code

| Check | Location |
|-------|----------|
| Link headers (RFC 8288) | `src/middleware.ts` on `/` |
| API catalog (RFC 9727) | `/.well-known/api-catalog` |
| Markdown negotiation | `Accept: text/markdown` on main pages |
| Content Signals | `robots.txt` via `src/app/robots.txt/route.ts` |
| Agent Skills index | `/.well-known/agent-skills/index.json` |
| auth.md | `/auth.md` |
| OAuth / OIDC discovery | `/.well-known/oauth-*`, `openid-configuration` (needs env) |
| OAuth protected resource | `/.well-known/oauth-protected-resource` |
| MCP server card | `/.well-known/mcp/server-card.json` |
| WebMCP tools | `WebMcpProvider` in root layout |

## Vercel environment

Set on the **marketing** project:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
```

This publishes OAuth/OIDC metadata pointing at Supabase Auth for the app. Without it, those endpoints return `503` with a link to `/auth.md`.

## DNS-AID (manual — Cloudflare)

Not in application code. See [src/app/docs/dns-aid/page.tsx](../src/app/docs/dns-aid/page.tsx) and publish `_agents` SVCB/HTTPS records with DNSSEC.

## Validate

```bash
curl -sI https://voktera.com/ | grep -i ^link:
curl -sH "Accept: text/markdown" https://voktera.com/ | head
curl -s https://voktera.com/robots.txt
curl -s https://voktera.com/.well-known/api-catalog | jq .
```

Or POST your URL to https://isitagentready.com/api/scan
