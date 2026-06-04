import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
  { href: "/legal-notice", label: "Legal notice" },
] as const;

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#faq", label: "FAQ" },
  { href: "/changelog", label: "Changelog" },
  { href: "/#download", label: "Download" },
] as const;

export function MarketingFooter() {
  return (
    <footer className="border-t border-card-border bg-card/50">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <p className="font-semibold text-text">{siteConfig.serviceName}</p>
            <p className="mt-1 text-sm text-muted">{siteConfig.tagline}</p>
            <a
              href={`${siteConfig.appUrl}/login`}
              className="mt-3 inline-block text-sm font-medium text-accent-purple hover:underline"
            >
              Open the web app
            </a>
          </div>
          <nav className="flex flex-col gap-2 text-sm" aria-label="Site">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-muted hover:text-accent-purple">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <nav
          className="mt-8 flex flex-wrap gap-x-4 gap-y-2 border-t border-card-border/60 pt-8 text-sm text-muted"
          aria-label="Legal"
        >
          {legalLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-accent-purple">
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="mt-6 text-xs text-muted">
          <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-accent-purple">
            {siteConfig.contactEmail}
          </a>
          {" · "}
          © {new Date().getFullYear()} {siteConfig.operatorLegalName}
        </p>
      </div>
    </footer>
  );
}
