/**
 * 关于页「镜头之外」—— 摄影师本人照片墙配置
 * 照片放 src/assets/moments/ ，文件名对应下面的 key
 * caption 留空则只显示照片不显示文字
 */
export interface Moment {
  file: string;
  caption: string;
}

export const moments: Moment[] = [
  { file: 'moment-01', caption: '没有在工作的时刻，也是我的一部分' },
  { file: 'moment-02', caption: '认真生活，也认真臭美' },
  { file: 'moment-03', caption: '在路上，口袋里装着一整个夏天' },
  { file: 'moment-04', caption: '' },
  { file: 'moment-05', caption: '偶尔也想被镜头找到' },
  { file: 'moment-06', caption: '' },
  { file: 'moment-07', caption: '把喜欢的事，做成了现在的生活' },
  { file: 'moment-08', caption: '' },
  { file: 'moment-09', caption: '被光照亮的时候，记得微笑' },
  { file: 'moment-10', caption: '' },
  { file: 'moment-11', caption: '下一个故事，等你来' },
];
