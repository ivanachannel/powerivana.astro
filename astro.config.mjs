import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.ivanakao.com',

  output: 'static',

  trailingSlash: 'never',        // 這是我們這次主要要改的設定

  // 開發伺服器設定
  server: {
    host: true,
    port: 4321,
    // open: true,   // 如果想自動開啟瀏覽器，可以取消註解
  },

  integrations: [
    // mdx(),
    // sitemap({ ... }),
  ],

  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});