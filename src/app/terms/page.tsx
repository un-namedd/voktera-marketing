import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { loadLegalDocument } from "@/lib/load-legal-doc";
import { buildPageMetadata } from "@/lib/seo/site-metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildPageMetadata({
  title: `Terms of Service — ${siteConfig.serviceName}`,
  description: `Terms for using ${siteConfig.serviceName} at ${siteConfig.websiteUrl}.`,
  path: "/terms",
});

export default async function TermsPage() {
  const markdown = await loadLegalDocument("terms");
  return <LegalDocument title="Terms of Service" markdown={markdown} />;
}
