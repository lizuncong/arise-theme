import { memo } from 'react';

import DefaultVideo from '@/assets/default.svg?react';
import { SectionConfigSchema } from '@/types/section';

import styles from './index.module.less';
const Video = memo((props: SectionConfigSchema) => {
  const { settingsData, sectionId } = props;
  // const blockOrder = settingsData.block_order || [];
  const sectionSetting = settingsData.settings;
  // const blocks = settingsData.blocks || {};
  return (
    <div id={sectionId} className={[styles.container].join(' ')}>
      <h2 className={sectionSetting.title_size.value as string}>{sectionSetting.title.value as string}</h2>
      <div>
        <DefaultVideo />
      </div>
      <div className={styles.settingheader}>Section Settings</div>
      <div className={styles.settings}>
        {Object.keys(sectionSetting).map((key) => {
          const value = JSON.stringify(sectionSetting[key].value);
          // if (typeof value === 'object') {
          //   value = JSON.stringify(value);
          // }
          return (
            <div className={styles.settingitem} key={key}>
              <span>{key}：</span>
              {value}
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default Video;
