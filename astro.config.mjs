import { defineConfig, squooshImageService } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import config from "./src/config/config.json";

// https://astro.build/config

export default defineConfig({
  //site: config.site.base_url ? config.site.base_url : "http://examplesite.com",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  image: {
    service: squooshImageService(),
  },
  integrations: [
    react(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    AutoImport({
      imports: [
        "./src/layouts/components/ui/Button",
        "./src/layouts/components/ui/Accordion",
        "./src/layouts/components/ui/Notice",
        "./src/layouts/components/ui/Video",
        "./src/layouts/components/ui/Youtube",
        "./src/layouts/components/ui/Tabs",
        "./src/layouts/components/ui/Tab",
      ],
    }),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
});
