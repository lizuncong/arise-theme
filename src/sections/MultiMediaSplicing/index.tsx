import { memo } from 'react';

import styles from './index.module.less';
const MultiMediaSplicing = memo((props: any) => {
  console.log('拼贴...', props);

  return <div className={[styles.container, `section_${props.sectionId}`].join(' ')}>拼贴</div>;
});

export default MultiMediaSplicing;
