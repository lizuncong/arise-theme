import { memo } from 'react';

import DefaultVideo from '@/assets/default.svg?react';
import { SectionConfigSchema } from '@/types/section';

import styles from './index.module.less';
const Video = memo((props: SectionConfigSchema) => {
  const { settingsData, sectionId } = props;

  const sectionSetting = settingsData.settings;
  const cover = sectionSetting.cover.value as { url: string; origin: string };
  const externalVideoUrl = sectionSetting.external_video.value as string;
  const internalVideoUrl = sectionSetting.internal_video.value as string;
  return (
    <div
      id={sectionId}
      className={[
        styles.container,
        sectionSetting.full_width.value && 'page-width',
        `color-scheme-${sectionSetting.color_scheme.value as string}`,
      ].join(' ')}
    >
      <h2 className={sectionSetting.title_size.value as string}>{sectionSetting.title.value as string}</h2>

      <div className={styles.videoContainer}>
        {externalVideoUrl && <video src={externalVideoUrl}></video>}
        {internalVideoUrl && <video src={internalVideoUrl}></video>}
        {!externalVideoUrl &&
          !internalVideoUrl &&
          (cover.url ? <img src={cover.origin + cover.url} alt="" /> : <DefaultVideo />)}
      </div>
    </div>
  );
});

export default Video;
