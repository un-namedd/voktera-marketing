/**
 * Marketing + legal site configuration (voktera.com).
 */
export const siteConfig = {
  serviceName: "Voktera",
  serviceFullName: "Voktera",
  operatorLegalName: "Omar Rihani",
  operatorAddress: "29 Sara Dr., Welland, Ontario, Canada",
  websiteUrl: "https://voktera.com",
  appUrl: "https://app.voktera.com",
  /** Set when iOS app is live on the App Store */
  appStoreUrl: "" as string,
  /** Set when Android app is live on Google Play */
  playStoreUrl: "" as string,
  contactEmail: "support@voktera.com",
  privacyEmail: "privacy@voktera.com",
  effectiveDate: "May 31, 2026",
  supabaseProjectRegion: "East US (Ohio), United States",
  governingLaw: "the Province of Ontario and the federal laws of Canada",
  tagline: "Food, gym, and tasks in one place",
  /** Descriptive alt text for brand images (Bing/Google image SEO). */
  logoAltShort: "Voktera logo",
  logoAlt:
    "Voktera logo — personal dashboard app for meal tracking, workouts, and daily tasks",
  seo: {
    title: "Voktera — Personal dashboard for food, gym, and tasks",
    description:
      "Track meals and nutrients, log workouts, and manage daily tasks in one mobile-first app. Install Voktera on the web or add it to your Home Screen.",
    keywords: [
      "personal dashboard",
      "meal tracking",
      "nutrition tracker",
      "workout log",
      "gym tracker",
      "task manager",
      "PWA",
      "Voktera",
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;

export function applyLegalTemplate(text: string): string {
  return text.replace(/\{\{(\w+)\}\}/g, (_, key: string) => {
    const value = siteConfig[key as keyof SiteConfig];
    return value != null && typeof value !== "object" ? String(value) : `{{${key}}}`;
  });
}

export function storeBadgesEnabled(): boolean {
  return Boolean(siteConfig.appStoreUrl && siteConfig.playStoreUrl);
}
