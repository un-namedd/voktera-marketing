import { faqItems } from "@/content/marketing/home";
import { siteConfig } from "@/lib/site-config";

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function HomeJsonLd() {
  const logo = `${siteConfig.websiteUrl}/brand/logo-email.png`;

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.serviceName,
    url: siteConfig.websiteUrl,
    logo,
    email: siteConfig.contactEmail,
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.serviceName,
    url: siteConfig.websiteUrl,
    description: siteConfig.seo.description,
  };

  const software = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.serviceName,
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    url: `${siteConfig.appUrl}/login`,
    description: siteConfig.seo.description,
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLdScript data={organization} />
      <JsonLdScript data={website} />
      <JsonLdScript data={software} />
      <JsonLdScript data={faq} />
    </>
  );
}
