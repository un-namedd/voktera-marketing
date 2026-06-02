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
  contactEmail: "support@voktera.com",
  privacyEmail: "privacy@voktera.com",
  effectiveDate: "May 31, 2026",
  supabaseProjectRegion: "East US (Ohio), United States",
  governingLaw: "the Province of Ontario and the federal laws of Canada",
  tagline: "Food, gym, and tasks in one place",
} as const;

export type SiteConfig = typeof siteConfig;

export function applyLegalTemplate(text: string): string {
  return text.replace(/\{\{(\w+)\}\}/g, (_, key: string) => {
    const value = siteConfig[key as keyof SiteConfig];
    return value != null ? String(value) : `{{${key}}}`;
  });
}
