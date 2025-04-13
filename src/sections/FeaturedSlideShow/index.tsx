import { memo } from 'react';

import styles from './index.module.less';
const FeaturedSlideShow = memo((props: any) => {
  console.log('轮播图...', props);
  return <div className={[styles.container, `section_${props.sectionId}`].join(' ')}>轮播图</div>;
});

export default FeaturedSlideShow;
