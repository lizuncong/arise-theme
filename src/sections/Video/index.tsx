import { memo, useEffect, useRef } from 'react';

import DefaultVideo from '@/assets/default.svg?react';
import { SectionConfigSchema } from '@/types/section';

import styles from './index.module.less';
const Video = memo((props: SectionConfigSchema) => {
  const { settingsData, sectionId } = props;
  const internalVideoRef = useRef<HTMLVideoElement>(null);
  const externalVideoRef = useRef<HTMLVideoElement>(null);
  const sectionSetting = settingsData.settings;
  const cover = sectionSetting.cover?.value as { url: string; origin: string };
  const externalVideoUrl = sectionSetting.external_video?.value as string;
  const internalVideoUrl = sectionSetting.internal_video?.value as string;
  const autoPlay = sectionSetting.video_auto_play?.value as boolean;
  const paddingTop = sectionSetting.padding_top?.value as number;
  const paddingBottom = sectionSetting.padding_bottom?.value as number;
  useEffect(() => {
    if (autoPlay) {
      internalVideoRef.current?.play();
      externalVideoRef.current?.play();
    } else {
      internalVideoRef.current?.pause();
      externalVideoRef.current?.pause();
    }
  }, [autoPlay]);
  return (
    <div
      id={sectionId}
      style={{ paddingTop: `${paddingTop}px`, paddingBottom: `${paddingBottom}px` }}
      className={[
        'section',
        styles.container,
        sectionSetting.full_width.value && 'page-width',
        `color-scheme-${sectionSetting.color_scheme.value as string}`,
      ].join(' ')}
    >
      <h2 className={sectionSetting.title_size.value as string}>{sectionSetting.title.value as string}</h2>

      <div className={styles.videoContainer}>
        {externalVideoUrl && (
          <video ref={internalVideoRef} autoPlay={autoPlay} muted controls src={externalVideoUrl}></video>
        )}
        {internalVideoUrl && (
          <video ref={externalVideoRef} autoPlay={autoPlay} muted controls src={internalVideoUrl}></video>
        )}
        {!externalVideoUrl &&
          !internalVideoUrl &&
          (cover.url ? <img src={cover.origin + cover.url} alt="" /> : <DefaultVideo />)}
      </div>
    </div>
  );
});

export default Video;
