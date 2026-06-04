export const THEME_STORAGE_KEY = "voktera-marketing-theme";

export type MarketingTheme = "light" | "dark";

export function readStoredTheme(): MarketingTheme | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(THEME_STORAGE_KEY);
  if (raw === "light" || raw === "dark") return raw;
  return null;
}

export function writeStoredTheme(theme: MarketingTheme): void {
  localStorage.setItem(THEME_STORAGE_KEY, theme);
}

export function resolveTheme(stored: MarketingTheme | null): MarketingTheme {
  if (stored) return stored;
  if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "light";
  }
  return "dark";
}
