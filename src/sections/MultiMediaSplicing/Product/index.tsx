import { memo } from 'react';

interface ProductBlockProps {
  className?: string;
}
const ProductBlock = memo((props: ProductBlockProps) => {
  const { className } = props;
  return <div className={className}>商品block</div>;
});

export default ProductBlock;
