import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { loadLegalDocument } from "@/lib/load-legal-doc";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `How ${siteConfig.serviceName} uses cookies.`,
};

export default async function CookiesPage() {
  const markdown = await loadLegalDocument("cookies");
  return <LegalDocument title="Cookie Policy" markdown={markdown} />;
}
