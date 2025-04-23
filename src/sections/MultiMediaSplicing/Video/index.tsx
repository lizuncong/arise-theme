import { memo } from 'react';

import DefaultVideo from '@/assets/default.svg?react';

import styles from './index.module.less';
interface VideoBlockProps {
  className?: string;
  settings: Record<string, any>;
}
const VideoBlock = memo((props: VideoBlockProps) => {
  const { className, settings } = props;
  const cover = settings.cover_image?.value as { url: string; origin: string };
  const externalVideoUrl = settings.external_video?.value as string;
  const internalVideoUrl = settings.internal_video?.value as string;
  return (
    <div className={[styles.block, className].join(' ')}>
      {externalVideoUrl && <video muted controls src={externalVideoUrl}></video>}
      {internalVideoUrl && <video muted controls src={internalVideoUrl}></video>}
      {!externalVideoUrl &&
        !internalVideoUrl &&
        (cover?.url ? <img src={cover?.origin + cover?.url} alt="" /> : <DefaultVideo />)}
    </div>
  );
});

export default VideoBlock;
