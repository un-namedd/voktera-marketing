import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { loadLegalDocument } from "@/lib/load-legal-doc";
import { buildPageMetadata } from "@/lib/seo/site-metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildPageMetadata({
  title: `Privacy Policy — ${siteConfig.serviceName}`,
  description: `How ${siteConfig.serviceName} collects, uses, and protects your personal information.`,
  path: "/privacy",
});

export default async function PrivacyPage() {
  const markdown = await loadLegalDocument("privacy");
  return <LegalDocument title="Privacy Policy" markdown={markdown} />;
}
