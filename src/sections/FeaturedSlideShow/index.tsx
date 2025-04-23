// Import Swiper styles
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import 'swiper/css';
// Import Swiper styles
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import 'swiper/css/pagination';
// Import Swiper styles
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import 'swiper/css/navigation';

import { memo } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import DefaultImage from '@/assets/default_img.svg?react';
import { SectionConfigSchema } from '@/types/section';

import styles from './index.module.less';
const FeaturedSlideShow = memo((props: SectionConfigSchema) => {
  const { settingsData, sectionId } = props;
  const blockOrder = settingsData.block_order || [];
  const sectionSetting = settingsData.settings;
  const blocks = settingsData.blocks || {};
  const contentHeight = sectionSetting.content_height.value as string;
  const autoplay = sectionSetting.autoplay.value as boolean;
  const autoplayDelay = sectionSetting.autoplay_speed.value as number;
  const showProgress = sectionSetting.show_progress.value as boolean;
  const showArrows = sectionSetting.show_arrows.value as boolean;
  return (
    <div id={sectionId} className={[styles.container, 'section'].join(' ')}>
      <Swiper
        className={styles.myswiper}
        style={{ height: contentHeight }}
        loop={true}
        centeredSlides={true}
        autoplay={
          autoplay
            ? {
                delay: autoplayDelay * 1000,
                disableOnInteraction: false,
              }
            : false
        }
        pagination={
          showProgress
            ? {
                clickable: true,
              }
            : false
        }
        navigation={showArrows}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {blockOrder.map((blockId) => {
          const block = blocks[blockId];
          const blockSettings = block.settings;
          const imgValue = blockSettings.image?.value as { url: string; origin: string };
          const imgUrl = imgValue?.url;
          const origin = imgValue?.origin;
          return (
            <SwiperSlide key={blockId}>
              <div className={styles.slide}>{imgUrl ? <img src={origin + imgUrl} alt="" /> : <DefaultImage />}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
});

export default FeaturedSlideShow;
