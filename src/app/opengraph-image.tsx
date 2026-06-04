import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = siteConfig.serviceName;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logoPath = path.join(process.cwd(), "public/brand/logo.png");
  const logoBuffer = await readFile(logoPath);
  const logoBase64 = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #4c1d95 0%, #7c3aed 45%, #a855f7 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <img
          src={logoBase64}
          alt=""
          width={140}
          height={140}
          style={{ marginBottom: 24, borderRadius: 28 }}
        />
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          {siteConfig.serviceName}
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 28,
            opacity: 0.92,
            maxWidth: 800,
            textAlign: "center",
            lineHeight: 1.3,
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
