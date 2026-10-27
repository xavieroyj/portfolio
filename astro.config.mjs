import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import { remarkReadingTime } from './integrations/remark-reading-time.mjs';
import icon from "astro-icon";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { unified } from '@astrojs/markdown-remark';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.xavieroyj.dev',
  trailingSlash: 'always',
  markdown: {
    processor: unified({
      remarkPlugins: [remarkReadingTime],
    }),
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
