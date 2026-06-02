import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { loadLegalDocument } from "@/lib/load-legal-doc";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.serviceName} collects, uses, and protects your personal information.`,
};

export default async function PrivacyPage() {
  const markdown = await loadLegalDocument("privacy");
  return <LegalDocument title="Privacy Policy" markdown={markdown} />;
}
