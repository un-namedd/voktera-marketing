import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#faq", label: "FAQ" },
  { href: "/changelog", label: "Changelog" },
] as const;

export function MarketingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-card-border/80 bg-card/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <BrandLogo size={36} priority />
          <span className="text-lg font-semibold tracking-tight text-text">
            {siteConfig.serviceName}
          </span>
        </Link>
        <nav
          className="hidden items-center gap-5 text-sm font-medium text-muted md:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-accent-purple">
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href="/#download"
            className="rounded-lg bg-accent-purple px-4 py-2 font-medium text-white transition hover:opacity-90"
          >
            Get started
          </a>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <a
            href={`${siteConfig.appUrl}/login`}
            className="rounded-lg bg-accent-purple px-3 py-2 text-sm font-medium text-white transition hover:opacity-90"
          >
            Try the app
          </a>
        </div>
      </div>
    </header>
  );
}
