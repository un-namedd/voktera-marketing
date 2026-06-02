export type ChangelogEntry = {
  date: string;
  version?: string;
  title: string;
  summary: string;
  items: readonly string[];
};

/** Public product changelog (newest first). Update when you ship visible changes. */
export const changelogEntries: readonly ChangelogEntry[] = [
  {
    date: "2026-05-28",
    version: "0.2.0",
    title: "Marketing site and app subdomain",
    summary:
      "voktera.com is now the public home for Voktera; the web app lives at app.voktera.com.",
    items: [
      "New marketing site with product overview, FAQ, and legal pages",
      "Try the app on the web — store badges shown as coming soon",
      "Sitemap and structured data for search engines",
    ],
  },
  {
    date: "2026-05-28",
    version: "0.1.0",
    title: "Voktera rebrand",
    summary: "Flamios is now Voktera — same app, new name and branding.",
    items: [
      "Updated sign-in emails, PWA name, and legal pages for voktera.com",
      "Goals moved under Tasks (Today + Goals tabs)",
      "Home focuses on Tasks, Food, and Gym",
      "Account tab replaces header settings shortcut",
    ],
  },
  {
    date: "2026-05-27",
    title: "Nutrition recognition",
    summary: "Broader nutrient name matching, including French labels.",
    items: [
      "Expanded nutrient alias registry for food logging",
      "Improved label and ingredient parsing coverage",
    ],
  },
] as const;

export function latestChangelogDate(): Date {
  const first = changelogEntries[0]?.date;
  return first ? new Date(`${first}T00:00:00.000Z`) : new Date();
}

export function formatChangelogDate(isoDate: string): string {
  return new Date(`${isoDate}T12:00:00.000Z`).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
