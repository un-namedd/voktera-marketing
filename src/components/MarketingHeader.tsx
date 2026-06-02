import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function MarketingHeader() {
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/brand/logo-email.png"
          alt=""
          width={40}
          height={40}
          className="h-10 w-10"
          priority
        />
        <span className="text-lg font-semibold tracking-tight text-zinc-900">
          {siteConfig.serviceName}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm">
        <a
          href={`${siteConfig.appUrl}/login`}
          className="rounded-lg bg-violet-600 px-4 py-2 font-medium text-white transition hover:bg-violet-500"
        >
          Try the app
        </a>
      </nav>
    </header>
  );
}
