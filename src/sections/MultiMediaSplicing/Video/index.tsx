import { memo } from 'react';

interface VideoBlockProps {
  className?: string;
}
const VideoBlock = memo((props: VideoBlockProps) => {
  const { className } = props;
  return <div className={className}>视频 block</div>;
});

export default VideoBlock;
