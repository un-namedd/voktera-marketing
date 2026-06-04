import { BrandLogo } from "@/components/brand/BrandLogo";
import { proofItems } from "@/content/marketing/home";
import { siteConfig } from "@/lib/site-config";

export function BrandPanel({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={
        compact
          ? "mb-6 flex flex-col items-center text-center"
          : "flex max-w-md flex-col justify-center px-6 py-12 lg:px-12 lg:py-16"
      }
    >
      <div
        className={`flex items-center gap-3 ${compact ? "justify-center" : ""}`}
      >
        <BrandLogo size={compact ? 48 : 56} priority />
        <div className={compact ? "text-left" : undefined}>
          <h1
            className={
              compact
                ? "text-xl font-light tracking-tight text-text"
                : "text-4xl font-light tracking-tight text-text lg:text-5xl"
            }
          >
            {siteConfig.serviceName}
          </h1>
          {!compact ? (
            <p className="mt-2 text-base text-muted lg:text-lg">
              {siteConfig.tagline}
            </p>
          ) : null}
        </div>
      </div>

      {compact ? (
        <p className="mt-2 text-sm text-muted">{siteConfig.tagline}</p>
      ) : (
        <ul className="mt-10 space-y-3 text-sm text-muted lg:text-base">
          {proofItems.map((item) => (
            <li key={item.label} className="flex items-start gap-2.5">
              <span
                className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent-purple"
                aria-hidden
              />
              <span>
                <span className="font-medium text-text">{item.label}</span>
                {" — "}
                {item.description}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
