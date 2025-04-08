import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import { remarkReadingTime } from './integrations/remark-reading-time.mjs';
import icon from "astro-icon";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.xavieroyj.dev',
  trailingSlash: 'always',
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },

  integrations: [
    react(),
    sitemap(),
    icon(),
    mdx(),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});
