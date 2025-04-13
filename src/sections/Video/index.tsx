import { memo } from 'react';

import styles from './index.module.less';
const Video = memo((props: any) => {
  console.log('视频...', props);

  return <div className={[styles.container, `section_${props.sectionId}`].join(' ')}>视频</div>;
});

export default Video;
