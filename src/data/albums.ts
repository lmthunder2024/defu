/**
 * 专辑配置 —— 新增专辑两步：
 *  1. 在 src/assets/albums/ 下新建以 slug 命名的文件夹，把照片丢进去
 *  2. 在下面数组里加一条配置（cover 留空则自动取文件夹第一张）
 * 照片文件名建议用 01.jpg、02.jpg … 排序即展示顺序
 *
 * category：用作“分类标签”（即作品集子目录名），会在作品页顶部作为筛选标签展示
 * tag：专辑小标签，显示在卡片角标上（较短的风格关键词）
 */
export interface Album {
  slug: string;
  title: string;
  titleEn: string;
  category: string;
  tag: string;
  year: string;
  location: string;
  description: string;
  cover?: string; // 封面文件名（不含扩展名），留空自动取第一张
}

export const albums: Album[] = [
  {
    slug: 'sweet-doll',
    title: '妹宝解锁新裙子',
    titleEn: 'Sweet Doll',
    category: '妹宝解锁新裙子',
    tag: '甜系',
    year: '2026',
    location: '室内 · 影棚',
    description:
      '软乎乎的粉色、蕾丝和玩偶——像住进了一个童话橱窗。这一辑想拍的，是女孩子眼里亮晶晶的那份喜欢。',
    cover: '01',
  },
  {
    slug: 'own-timezone',
    title: '生活在自己的时区',
    titleEn: 'Own Time Zone',
    category: '生活在自己的时区',
    tag: '酷感',
    year: '2026',
    location: '户外 · 山野',
    description:
      '轰鸣、尘土、和一颗不被定义的心。每个人都该有自己的节奏——不赶别人的人生，只在自己的时区里自在地活。',
    cover: '01',
  },
  {
    slug: 'standing-in-light',
    title: '站在光里感受风',
    titleEn: 'Stand in the Light',
    category: '站在光里感受风',
    tag: '光影',
    year: '2026',
    location: '户外 · 黄昏',
    description:
      '黄昏把头发染成琥珀色，风正好穿过。人像摄影最迷人的，就是光落在一个人身上时，那一刻的安静与发亮。',
    cover: '01',
  },
  {
    slug: 'new-chapter',
    title: '迈入人生新阶段',
    titleEn: 'New Chapter',
    category: '迈入人生新阶段',
    tag: '纪实',
    year: '2026',
    location: '民政局 · 记录',
    description:
      '喜帖一样的红、藏不住的慌张、和望向彼此的眼神。人生里最值得被记住的，往往是按下快门时你们正在笑的那一秒。',
    cover: '01',
  },
];

/** 分类标签：全部 + 各专辑名（作为作品页顶部筛选标签） */
export const categories: string[] = ['全部', ...albums.map((a) => a.category)];
