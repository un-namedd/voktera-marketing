---
name: voktera-api
description: Discover Voktera HTTP APIs and agent metadata. Use before calling app.voktera.com/api routes.
---

# Voktera API (web app)

Authenticated JSON APIs live on the **app** host, not the marketing site.

## Discovery

1. RFC 9727 catalog: https://voktera.com/.well-known/api-catalog
2. Protected resource: https://voktera.com/.well-known/oauth-protected-resource
3. Summary: https://voktera.com/llms.txt

## Common routes (require session)

Base: `https://app.voktera.com/api`

Examples: `/api/todos`, `/api/meals`, `/api/workout-plans`, `/api/dashboard/home`

Always send the user's session cookie or bearer token from Supabase Auth. Do not scrape without permission.

## Health

There is no public unauthenticated health JSON on marketing. Use `/login` reachability or authenticated home fetch.
