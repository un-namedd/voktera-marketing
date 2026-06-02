import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { loadLegalDocument } from "@/lib/load-legal-doc";
import { buildPageMetadata } from "@/lib/seo/site-metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildPageMetadata({
  title: `Legal Notice — ${siteConfig.serviceName}`,
  description: `Legal notice and operator information for ${siteConfig.serviceName}.`,
  path: "/legal-notice",
});

export default async function LegalNoticePage() {
  const markdown = await loadLegalDocument("legal-notice");
  return <LegalDocument title="Legal Notice" markdown={markdown} />;
}
