"use client";

import { useEffect } from "react";
import { siteConfig } from "@/lib/site-config";

type ModelContext = {
  provideContext: (context: {
    tools: Array<{
      name: string;
      description: string;
      inputSchema: Record<string, unknown>;
      execute: (input: Record<string, unknown>) => Promise<{ content: Array<{ type: string; text: string }> }>;
    }>;
  }) => void;
};

declare global {
  interface Navigator {
    modelContext?: ModelContext;
  }
}

export function WebMcpProvider() {
  useEffect(() => {
    const mc = navigator.modelContext;
    if (!mc?.provideContext) return;

    mc.provideContext({
      tools: [
        {
          name: "voktera_open_app",
          description: "Open the Voktera web application sign-in page in the browser.",
          inputSchema: { type: "object", properties: {}, additionalProperties: false },
          execute: async () => {
            window.open(`${siteConfig.appUrl}/login`, "_blank", "noopener,noreferrer");
            return {
              content: [{ type: "text", text: "Opened Voktera app login." }],
            };
          },
        },
        {
          name: "voktera_view_changelog",
          description: "Navigate to the public Voktera product changelog.",
          inputSchema: { type: "object", properties: {}, additionalProperties: false },
          execute: async () => {
            window.location.href = "/changelog";
            return {
              content: [{ type: "text", text: "Navigated to /changelog." }],
            };
          },
        },
        {
          name: "voktera_fetch_api_catalog",
          description: "Fetch the RFC 9727 API catalog JSON for Voktera.",
          inputSchema: { type: "object", properties: {}, additionalProperties: false },
          execute: async () => {
            const res = await fetch("/.well-known/api-catalog");
            const text = await res.text();
            return {
              content: [{ type: "text", text }],
            };
          },
        },
      ],
    });
  }, []);

  return null;
}
