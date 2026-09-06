/**
 * 幕后花絮（镜头之外）配置
 * 照片放 src/assets/moments/ ，文件名对应下面的 key
 * caption 留空则只显示照片不显示文字
 */
export interface Moment {
  file: string;
  caption: string;
}

export const moments: Moment[] = [
  { file: 'moment-01', caption: '天台上的等待，为了最后一缕光' },
  { file: 'moment-02', caption: '快门次数最多的搭档' },
  { file: 'moment-03', caption: '进山，永远值得' },
  { file: 'moment-04', caption: '深夜选片，咖啡是燃料' },
];
