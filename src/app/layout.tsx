import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { MarketingFooter } from "@/components/MarketingFooter";
import { MarketingHeader } from "@/components/MarketingHeader";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.serviceName,
    template: `%s — ${siteConfig.serviceName}`,
  },
  description: siteConfig.tagline,
  icons: {
    icon: [{ url: "/brand/logo-email.png", type: "image/png" }],
  },
  metadataBase: new URL(siteConfig.websiteUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col antialiased">
        <MarketingHeader />
        <main className="flex-1">{children}</main>
        <MarketingFooter />
        <Analytics />
      </body>
    </html>
  );
}
