import { readFile } from "node:fs/promises";
import path from "node:path";
import { applyLegalTemplate } from "@/lib/site-config";

export type LegalDocId = "privacy" | "terms" | "cookies" | "legal-notice";

const CONTENT_DIR = path.join(process.cwd(), "src/content/legal");

export async function loadLegalDocument(id: LegalDocId): Promise<string> {
  const filePath = path.join(CONTENT_DIR, `${id}.md`);
  const raw = await readFile(filePath, "utf8");
  return applyLegalTemplate(raw);
}

export const legalDocTitles: Record<LegalDocId, string> = {
  privacy: "Privacy Policy",
  terms: "Terms of Service",
  cookies: "Cookie Policy",
  "legal-notice": "Legal Notice",
};
