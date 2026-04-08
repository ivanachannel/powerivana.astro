import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.ivanakao.com',
  output: 'static',
  trailingSlash: 'always',        // 已改成 'always'，比較穩定

  // 開發伺服器設定
  server: {
    host: true,
    port: 4321,
    // open: true,   // 如果想每次 dev 自動開啟瀏覽器，可以把這行註解取消
  },

  integrations: [
    // mdx(),
    // sitemap({ ... }),
  ],

  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});