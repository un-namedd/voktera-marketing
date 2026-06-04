/** Single transparent asset — plain img, not next/image. */
export function BrandLogo({
  size = 56,
  className = "",
  priority = false,
}: {
  size?: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/logo.png"
      alt=""
      width={size}
      height={size}
      className={`block bg-transparent ${className}`.trim()}
      decoding="async"
      {...(priority ? { fetchPriority: "high" } : {})}
    />
  );
}
