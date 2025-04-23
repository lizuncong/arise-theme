import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { BlockTypeEnum, SectionConfigSchema } from '@/types/section';

import CollectionBlock from './Collection';
import ImageBlock from './Image';
import styles from './index.module.less';
import ProductBlock from './Product';
import VideoBlock from './Video';
const MultiMediaSplicing = memo((props: SectionConfigSchema) => {
  const { settingsData, sectionId } = props;
  const { t } = useTranslation();
  const blockOrder = settingsData.block_order || [];
  const sectionSetting = settingsData.settings;
  const blocks = settingsData.blocks || {};
  const sectionTitle = sectionSetting.title?.value as string;
  const sectionTitleSize = sectionSetting.title_size?.value as string;
  const paddingTop = sectionSetting.padding_top?.value as number;
  const paddingBottom = sectionSetting.padding_bottom?.value as number;
  const colorScheme = sectionSetting.color_scheme?.value as string;
  const desktopLayout = sectionSetting.desktop_layout?.value as string;
  return (
    <div
      id={sectionId}
      style={{ paddingTop: `${paddingTop}px`, paddingBottom: `${paddingBottom}px` }}
      className={['section', styles.container, `color-scheme-${colorScheme}`].join(' ')}
    >
      {sectionTitle && <h2 className={[styles.sectiontitle, sectionTitleSize].join(' ')}>{sectionTitle}</h2>}
      <div
        className={[
          desktopLayout !== 'list' && styles.splicing,
          styles[desktopLayout],
          !blockOrder.length && styles.hide,
        ].join(' ')}
      >
        {blockOrder.map((blockId) => {
          const block = blocks[blockId] || {};
          const blockType = block.type;
          const blockSettings = block.settings || {};
          if (blockType === BlockTypeEnum.image) {
            return <ImageBlock settings={blockSettings} className={styles.block} key={blockId} />;
          }
          if (blockType === BlockTypeEnum.video) {
            return <VideoBlock settings={blockSettings} className={styles.block} key={blockId} />;
          }
          if (blockType === BlockTypeEnum.product) {
            return <ProductBlock settings={blockSettings} className={styles.block} key={blockId} />;
          }
          if (blockType === BlockTypeEnum.collection) {
            return <CollectionBlock settings={blockSettings} className={styles.block} key={blockId} />;
          }
          return (
            <div className={styles.block} key={blockId}>
              {t('home.block.notfound')}
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default MultiMediaSplicing;
