import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export function buildPageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}): Metadata {
  const canonical =
    path === "/" ? siteConfig.websiteUrl : `${siteConfig.websiteUrl}${path}`;

  return {
    title,
    description,
    keywords: [...siteConfig.seo.keywords],
    alternates: {
      canonical,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-image-preview": "large" },
        },
    openGraph: {
      type: "website",
      locale: "en_CA",
      url: canonical,
      siteName: siteConfig.serviceName,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function rootMetadata(): Metadata {
  const canonical = siteConfig.websiteUrl;

  return {
    metadataBase: new URL(siteConfig.websiteUrl),
    title: {
      default: siteConfig.seo.title,
      template: `%s`,
    },
    description: siteConfig.seo.description,
    keywords: [...siteConfig.seo.keywords],
    alternates: {
      canonical,
    },
    applicationName: siteConfig.serviceName,
    authors: [{ name: siteConfig.operatorLegalName }],
    creator: siteConfig.serviceName,
    formatDetection: { email: false, telephone: false },
    openGraph: {
      type: "website",
      locale: "en_CA",
      url: canonical,
      siteName: siteConfig.serviceName,
      title: siteConfig.seo.title,
      description: siteConfig.seo.description,
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.seo.title,
      description: siteConfig.seo.description,
    },
  };
}
