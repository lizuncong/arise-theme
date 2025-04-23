import { memo } from 'react';

interface VideoBlockProps {
  className?: string;
  settings: Record<string, any>;
}
const VideoBlock = memo((props: VideoBlockProps) => {
  const { className, settings } = props;
  console.log('VideoBlock=======', settings);
  return <div className={className}>视频 block</div>;
});

export default VideoBlock;
