# 雷芒影像 · 个人摄影作品集

Astro 静态站点，暗色调设计，构建产物为纯静态文件，适配 PocketBay 部署。

## 本地开发

```bash
npm install --registry=https://registry.npmmirror.com
npm run dev        # 开发预览 http://localhost:4321
npm run build      # 构建到 dist/
npm run preview    # 本地预览构建产物
```

## 更新照片（无需写代码）

| 想做什么 | 操作 |
| --- | --- |
| 给已有专辑加照片 | 把图片放进 `src/assets/albums/<专辑slug>/`，文件名用 `03.jpg`、`04.jpg` 递增（排序即展示顺序） |
| 新建专辑 | 在 `src/assets/albums/` 建同名文件夹丢入照片，再到 `src/data/albums.ts` 加一条配置 |
| 更新"镜头之外"照片墙 | 图片放进 `src/assets/moments/`（命名 `moment-05.png` 递增），在 `src/data/moments.ts` 加一句说明 |
| 换首页主视觉 / 关于页肖像 | 覆盖 `src/assets/hero.png` / `src/assets/about-portrait.png` |
| 改名字、邮箱、社交账号 | 只改 `src/data/site.ts` |

改完重新 `npm run build` 并部署即可。

## 目录结构

```
src/
├── assets/
│   ├── hero.png               # 首页主视觉
│   ├── about-portrait.png     # 关于页肖像
│   ├── albums/<slug>/         # 每个专辑一个文件夹
│   └── moments/               # 镜头之外（摄影师本人照片墙）
├── components/                # Nav / Footer / AlbumCard
├── data/                      # site / albums / moments 三份配置
├── layouts/Base.astro
├── lib/photos.ts              # 照片管道（glob 自动收集）
└── pages/                     # 首页 / 作品 / 专辑详情 / 关于 / 联系
```

## 部署到 PocketBay

构建产物在 `dist/`，为纯静态文件。通过 PocketBay 的一句话部署 / CLI / MCP 或 ZIP 上传 `dist/` 目录即可。
部署后把 `astro.config.mjs` 里的 `site` 改成实际分配的 `*.pocketbay.app` 域名再重新构建。
