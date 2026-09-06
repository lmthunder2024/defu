import type { ImageMetadata } from 'astro';
import { moments } from '../data/moments';

/**
 * 照片管道 —— 丢文件即更新：
 *  - 专辑照片：src/assets/albums/<slug>/*.jpg
 *  - 幕后花絮：src/assets/moments/*.jpg
 * 重新构建部署后自动生效
 */

const albumGlob = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/albums/**/*.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);

const momentGlob = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/moments/*.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);

export interface Photo {
  src: ImageMetadata;
  /** 文件名（不含扩展名） */
  name: string;
}

function toPhotos(entries: [string, { default: ImageMetadata }][]): Photo[] {
  return entries
    .map(([path, mod]) => ({
      src: mod.default,
      name: path.split('/').pop()!.replace(/\.[^.]+$/, ''),
    }))
    .sort((a, b) => a.name.localeCompare(b.name, 'zh-CN', { numeric: true }));
}

/** 取某专辑全部照片（按文件名排序） */
export function getAlbumPhotos(slug: string): Photo[] {
  return toPhotos(
    Object.entries(albumGlob).filter(([p]) => p.includes(`/albums/${slug}/`)),
  );
}

/** 取专辑封面：优先配置的 cover，否则第一张 */
export function getAlbumCover(slug: string, cover?: string): Photo | undefined {
  const photos = getAlbumPhotos(slug);
  if (photos.length === 0) return undefined;
  return photos.find((p) => p.name === cover) ?? photos[0];
}

export interface MomentPhoto extends Photo {
  caption: string;
}

/** 取幕后花絮照片墙 */
export function getMoments(): MomentPhoto[] {
  const photos = toPhotos(Object.entries(momentGlob));
  return photos.map((p) => ({
    ...p,
    caption: moments.find((m) => m.file === p.name)?.caption ?? '',
  }));
}
