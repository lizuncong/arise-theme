import { memo } from 'react';

import styles from './index.module.less';
interface ProductBlockProps {
  className?: string;
  settings: Record<string, any>;
}
const ProductBlock = memo((props: ProductBlockProps) => {
  const { className, settings } = props;
  const productTitle = settings.product?.value as string;
  return <div className={[styles.block, className].join(' ')}>{productTitle}</div>;
});

export default ProductBlock;
