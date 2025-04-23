import { memo } from 'react';

interface ImageBlockProps {
  className?: string;
  settings: Record<string, any>;
}
const ImageBlock = memo((props: ImageBlockProps) => {
  const { className, settings } = props;
  console.log('ImageBlock=======', settings);
  return <div className={className}>图片 block</div>;
});

export default ImageBlock;
