// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap          from '@astrojs/sitemap';
import mdx              from '@astrojs/mdx';

export default defineConfig({
  site: 'https://power.ivanakao.com',

  integrations: [
    sitemap({
      filter:    (page) => !page.includes('/drafts/'),
      changefreq: 'weekly',
      priority:   0.7,
      lastmod:    new Date(),
    }),
    mdx(),
  ],

  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});
