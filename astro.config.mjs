import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";
import dotenv from 'dotenv'
// https://astro.build/config
dotenv.config();
export default defineConfig({
  site: "",
  integrations: [react(), mdx(), tailwind(), sitemap()],
  publicRuntimeConfig: {
    emailjs: {
      serviceId: process.env.SERVICE_ID,
      templateId: process.env.TEMPLATE_ID,
    },
  },
});