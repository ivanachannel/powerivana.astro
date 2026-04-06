// astro.config.mjs
import { defineConfig } from 'astro/config';
// import mdx from '@astrojs/mdx';        // 暫時註解
// import sitemap from '@astrojs/sitemap'; // 暫時註解

export default defineConfig({
  site: 'https://power.ivanakao.com',

  integrations: [
    // mdx(),      // 暫時註解
    // sitemap({   // 暫時註解，避免 build 錯誤
    //   filter: (page) => !page.includes('/drafts/'),
    //   changefreq: 'weekly',
    //   priority: 0.7,
    //   lastmod: new Date(),
    // }),
  ],

  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});