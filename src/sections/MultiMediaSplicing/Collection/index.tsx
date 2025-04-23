import { memo } from 'react';

import styles from './index.module.less';
interface CollectionBlockProps {
  className?: string;
  settings: Record<string, any>;
}
const CollectionBlock = memo((props: CollectionBlockProps) => {
  const { className, settings } = props;
  const category = settings.category?.value as string;
  return <div className={[styles.block, className].join(' ')}>{category}</div>;
});

export default CollectionBlock;
