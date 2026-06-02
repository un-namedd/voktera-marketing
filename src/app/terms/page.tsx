import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { loadLegalDocument } from "@/lib/load-legal-doc";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms for using ${siteConfig.serviceName}.`,
};

export default async function TermsPage() {
  const markdown = await loadLegalDocument("terms");
  return <LegalDocument title="Terms of Service" markdown={markdown} />;
}
