import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#faq", label: "FAQ" },
  { href: "/changelog", label: "Changelog" },
] as const;

export function MarketingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <Image
            src="/brand/logo-email.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9"
            priority
          />
          <span className="text-lg font-semibold tracking-tight text-zinc-900">
            {siteConfig.serviceName}
          </span>
        </Link>
        <nav
          className="hidden items-center gap-6 text-sm font-medium text-zinc-600 md:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-violet-600">
              {link.label}
            </a>
          ))}
          <a
            href="/#download"
            className="rounded-lg bg-violet-600 px-4 py-2 text-white transition hover:bg-violet-500"
          >
            Get started
          </a>
        </nav>
        <a
          href={`${siteConfig.appUrl}/login`}
          className="rounded-lg bg-violet-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-violet-500 md:hidden"
        >
          Try the app
        </a>
      </div>
    </header>
  );
}
