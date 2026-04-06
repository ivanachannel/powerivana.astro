// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// import mdx from '@astrojs/mdx';     // ← 暫時註解掉

export default defineConfig({
  site: 'https://power.ivanakao.com',

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/drafts/'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    // mdx(),        // ← 暫時註解掉
  ],

  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});