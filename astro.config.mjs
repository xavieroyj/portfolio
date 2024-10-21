import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import { remarkReadingTime } from './integrations/remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.xavieroyj.dev',
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  trailingSlash: 'never',
  integrations: [
    tailwind(),
    react(),
  ]
});