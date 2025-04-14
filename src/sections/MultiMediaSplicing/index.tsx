import { memo } from 'react';

import { SectionConfigSchema } from '@/types/section';

import styles from './index.module.less';
const MultiMediaSplicing = memo((props: SectionConfigSchema) => {
  const { settingsData, type, sectionId } = props;
  const blockOrder = settingsData.block_order || [];
  const sectionSetting = settingsData.settings;
  const blocks = settingsData.blocks || {};
  return (
    <div id={`section_${sectionId}`} className={[styles.container].join(' ')}>
      <div className={styles.sectionType}>{type}</div>
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
      <div className={styles.blockContainer}>
        {blockOrder.map((blockId) => {
          const blockConfig = blocks[blockId];
          if (!blockConfig) return;
          return (
            <div id={`block_${blockId}`} key={blockId}>
              <div className={styles.blocktype}>{blockConfig.type}</div>
              <div className={[styles.settings, styles.block].join(' ')}>
                <div>
                  {Object.keys(blockConfig.settings).map((key) => {
                    const value = JSON.stringify(blockConfig.settings[key].value);
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
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default MultiMediaSplicing;
