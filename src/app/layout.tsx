import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { MarketingFooter } from "@/components/MarketingFooter";
import { MarketingHeader } from "@/components/MarketingHeader";
import { WebMcpProvider } from "@/components/WebMcpProvider";
import { rootMetadata } from "@/lib/seo/site-metadata";
import "./globals.css";

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  ...rootMetadata(),
  icons: {
    icon: [{ url: "/brand/logo-email.png", type: "image/png" }],
  },
  ...(googleVerification
    ? { verification: { google: googleVerification } }
    : {}),
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
        <WebMcpProvider />
        <Analytics />
      </body>
    </html>
  );
}
