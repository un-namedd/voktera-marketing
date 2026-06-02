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
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <p className="font-semibold text-zinc-900">{siteConfig.serviceName}</p>
            <p className="mt-1 text-sm text-zinc-600">{siteConfig.tagline}</p>
            <a
              href={`${siteConfig.appUrl}/login`}
              className="mt-3 inline-block text-sm font-medium text-violet-600 hover:underline"
            >
              Open the web app
            </a>
          </div>
          <nav className="flex flex-col gap-2 text-sm" aria-label="Site">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-zinc-600 hover:text-violet-600">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <nav
          className="mt-8 flex flex-wrap gap-x-4 gap-y-2 border-t border-zinc-100 pt-8 text-sm text-zinc-500"
          aria-label="Legal"
        >
          {legalLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-violet-600">
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="mt-6 text-xs text-zinc-400">
          <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-violet-600">
            {siteConfig.contactEmail}
          </a>
          {" · "}
          © {new Date().getFullYear()} {siteConfig.operatorLegalName}
        </p>
      </div>
    </footer>
  );
}
