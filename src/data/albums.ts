/**
 * 专辑配置 —— 新增专辑两步：
 *  1. 在 src/assets/albums/ 下新建以 slug 命名的文件夹，把照片丢进去
 *  2. 在下面数组里加一条配置（cover 留空则自动取文件夹第一张）
 * 照片文件名建议用 01.jpg、02.jpg … 排序即展示顺序
 */
export interface Album {
  slug: string;
  title: string;
  titleEn: string;
  category: string;
  year: string;
  location: string;
  description: string;
  cover?: string; // 封面文件名（不含扩展名），留空自动取第一张
}

export const albums: Album[] = [
  {
    slug: 'city-nocturne',
    title: '城市夜曲',
    titleEn: 'City Nocturne',
    category: '城市',
    year: '2025',
    location: '上海 / 重庆',
    description:
      '霓虹落在雨后的柏油路上，城市在深夜里露出它柔软的一面。这一辑记录了那些只有夜行者才看得见的时刻。',
    cover: 'city-01',
  },
  {
    slug: 'wild-atlas',
    title: '山海图志',
    titleEn: 'Wild Atlas',
    category: '风光',
    year: '2024 – 2025',
    location: '川西 / 福建',
    description:
      '从雾中群峰到海岸暮色，自然的尺度让人安静。每一张都是一次漫长的等待，等云、等风、等光。',
    cover: 'land-01',
  },
  {
    slug: 'portraits-of-light',
    title: '光的肖像',
    titleEn: 'Portraits of Light',
    category: '人像',
    year: '2025',
    location: '上海',
    description:
      '只用一扇窗、一盏灯，和一段认真的对话。人像摄影拍的不是脸，是那个人藏在表情后面的故事。',
    cover: 'port-01',
  },
  {
    slug: 'monochrome',
    title: '黑白独白',
    titleEn: 'Monologue',
    category: '黑白',
    year: '2023 – 2025',
    location: '街头',
    description:
      '去掉颜色之后，世界只剩下形状、影调和情绪。黑白是摄影最初的语言，也是最诚实的语言。',
    cover: 'bw-01',
  },
  {
    slug: 'daily-fragments',
    title: '日常切片',
    titleEn: 'Daily Fragments',
    category: '生活',
    year: '2026',
    location: '随拍',
    description:
      '不带任务的随手拍。清晨的咖啡、桌上的相机、某个无所事事的下午——生活的底色由这些碎片构成。',
    cover: 'life-01',
  },
];

export const categories: string[] = ['全部', ...Array.from(new Set(albums.map((a) => a.category)))];
