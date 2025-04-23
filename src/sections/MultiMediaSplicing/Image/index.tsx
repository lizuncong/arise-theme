import { memo } from 'react';

import styles from './index.module.less';
interface ImageBlockProps {
  className?: string;
  settings: Record<string, any>;
}
const ImageBlock = memo((props: ImageBlockProps) => {
  const { className, settings } = props;
  const imgUrl = settings.image?.value?.url as string;
  const origin = settings.image?.value?.origin as string;

  return <div className={[styles.block, className].join(' ')}>{imgUrl && <img src={origin + imgUrl} />}</div>;
});

export default ImageBlock;
