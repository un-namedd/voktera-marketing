import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookies", label: "Cookies" },
  { href: "/legal-notice", label: "Legal notice" },
] as const;

export function MarketingFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-10 text-center text-sm text-zinc-500">
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2" aria-label="Legal">
          {legalLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-violet-600">
              {link.label}
            </Link>
          ))}
        </nav>
        <p>
          <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-violet-600">
            {siteConfig.contactEmail}
          </a>
        </p>
        <p className="text-xs text-zinc-400">
          © {new Date().getFullYear()} {siteConfig.operatorLegalName}
        </p>
      </div>
    </footer>
  );
}
