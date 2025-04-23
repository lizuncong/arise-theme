import { memo } from 'react';

interface ImageBlockProps {
  className?: string;
}
const ImageBlock = memo((props: ImageBlockProps) => {
  const { className } = props;
  return <div className={className}>图片 block</div>;
});

export default ImageBlock;
