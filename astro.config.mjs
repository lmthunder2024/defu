import { defineConfig } from 'astro/config';

// 部署到 PocketBay 后，把 site 换成实际分配的 pocketbay.app 子域名
export default defineConfig({
  site: 'https://defu.pocketbay.app',
  build: {
    inlineStylesheets: 'auto',
  },
  // PocketBay 平台用 `astro preview`（或其等价物）启动预览，平台注入的请求 Host 含
  // staging 环境后缀（如 `defu--e.pocketbay.app`），不在 Vite 默认 allowlist 里，
  // 会触发 `Blocked request. This host (...) is not allowed.`。
  // 部署场景放开即可；本地 dev 不受影响（dev 仍走 localhost）。
  vite: {
    server: {
      allowedHosts: true,
    },
    preview: {
      allowedHosts: true,
    },
  },
});
