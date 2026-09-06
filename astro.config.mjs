import { defineConfig } from 'astro/config';

// 部署到 PocketBay 后，把 site 换成实际分配的 pocketbay.app 子域名
export default defineConfig({
  site: 'https://your-site.pocketbay.app',
  build: {
    inlineStylesheets: 'auto',
  },
});
