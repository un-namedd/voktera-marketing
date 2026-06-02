import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { loadLegalDocument } from "@/lib/load-legal-doc";
import { buildPageMetadata } from "@/lib/seo/site-metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildPageMetadata({
  title: `Cookie Policy — ${siteConfig.serviceName}`,
  description: `How ${siteConfig.serviceName} uses cookies and similar technologies.`,
  path: "/cookies",
});

export default async function CookiesPage() {
  const markdown = await loadLegalDocument("cookies");
  return <LegalDocument title="Cookie Policy" markdown={markdown} />;
}
