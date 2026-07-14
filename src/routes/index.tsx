import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/app/bot-builder" });
  },
  head: () => ({
    meta: [
      { title: "Digittool — Bot Builder" },
      { name: "description", content: "Build, run, and manage automated trading bots with Digittool." },
      { property: "og:title", content: "Digittool — Bot Builder" },
      { property: "og:description", content: "Build, run, and manage automated trading bots with Digittool." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => null,
});
