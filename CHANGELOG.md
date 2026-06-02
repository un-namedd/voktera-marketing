# Changelog

Public-facing release notes are maintained in **[src/content/marketing/changelog.ts](src/content/marketing/changelog.ts)** and rendered at [voktera.com/changelog](https://voktera.com/changelog).

When you ship something user-visible:

1. Add a new entry at the **top** of `changelogEntries` in `changelog.ts` (ISO date `YYYY-MM-DD`).
2. Commit and deploy — `/changelog` and `/sitemap.xml` update automatically.

The web app repo may have its own git history; this changelog is the **product** log for visitors and search engines.
