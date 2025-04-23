import { memo } from 'react';

interface CollectionBlockProps {
  className?: string;
}
const CollectionBlock = memo((props: CollectionBlockProps) => {
  const { className } = props;
  return <div className={className}>商品分类 block</div>;
});

export default CollectionBlock;
