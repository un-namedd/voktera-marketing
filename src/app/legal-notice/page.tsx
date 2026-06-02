import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { loadLegalDocument } from "@/lib/load-legal-doc";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Legal Notice",
  description: `Legal notice for ${siteConfig.serviceName}.`,
};

export default async function LegalNoticePage() {
  const markdown = await loadLegalDocument("legal-notice");
  return <LegalDocument title="Legal Notice" markdown={markdown} />;
}
