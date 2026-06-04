import Image from "next/image";
import Link from "next/link";
import { siteConfig, storeBadgesEnabled } from "@/lib/site-config";

const BADGE_HEIGHT = 44;

export function StoreBadges({ className = "" }: { className?: string }) {
  const enabled = storeBadgesEnabled();

  const appStore = (
    <Image
      src="/badges/app-store.svg"
      alt="Download on the App Store"
      width={120}
      height={BADGE_HEIGHT}
      className="h-11 w-auto"
    />
  );

  const googlePlay = (
    <Image
      src="/badges/google-play.svg"
      alt="Get it on Google Play"
      width={135}
      height={BADGE_HEIGHT}
      className="h-11 w-auto"
    />
  );

  return (
    <div className={className}>
      <div
        className={`flex flex-wrap items-center justify-center gap-3 ${
          enabled ? "" : "store-badges-disabled pointer-events-none"
        }`}
        aria-disabled={!enabled}
      >
        {enabled ? (
          <>
            <Link
              href={siteConfig.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              {appStore}
            </Link>
            <Link
              href={siteConfig.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              {googlePlay}
            </Link>
          </>
        ) : (
          <>
            <span className="inline-block">{appStore}</span>
            <span className="inline-block">{googlePlay}</span>
          </>
        )}
      </div>
      {!enabled && (
        <p className="mt-2 text-center text-xs text-muted">
          iOS and Android apps — coming soon
        </p>
      )}
    </div>
  );
}
