import { StoreBadges } from "@/components/StoreBadges";
import { siteConfig } from "@/lib/site-config";

export function DownloadSection({
  id,
  compact = false,
}: {
  id?: string;
  compact?: boolean;
}) {
  return (
    <div id={id} className={id ? "scroll-mt-20" : undefined}>
      <StoreBadges />
      <a
        href={`${siteConfig.appUrl}/login`}
        className={`mx-auto mt-6 flex items-center justify-center rounded-xl bg-violet-600 font-semibold text-white shadow-lg shadow-violet-600/25 transition hover:bg-violet-500 ${
          compact
            ? "min-w-[200px] px-8 py-3.5 text-base"
            : "w-full max-w-sm px-8 py-4 text-lg sm:w-auto"
        }`}
      >
        Try the app on the web
      </a>
    </div>
  );
}
