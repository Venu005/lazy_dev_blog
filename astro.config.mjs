import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel/serverless";
// https://astro.build/config

export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [react(), mdx(), tailwind(), sitemap()],
});
