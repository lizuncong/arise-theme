import { JSX, lazy, LazyExoticComponent, memo, MemoExoticComponent, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from '@/store/hooks';
import { SectionConfigSchema, SectionTypeEnum } from '@/types/section';
import iframeCommunicator from '@/utils/IFrameCommunicator';

import { useInitEditor } from './hooks/useInitEditor';
import { useListenerMsgFromEditor } from './hooks/useListenerMsgFromEdtitor';
import { useSendLanguageToEditor } from './hooks/useSendLanguageToEditor';
import styles from './index.module.less';
const FeatureSlideShow = lazy(() => import(/* webpackChunkName: 'slideshow' */ '@/sections/FeaturedSlideShow'));
const Video = lazy(() => import(/* webpackChunkName: 'video' */ '@/sections/Video'));
const Splicing = lazy(() => import(/* webpackChunkName: 'splicing' */ '@/sections/MultiMediaSplicing'));

// key要和section/schema.json里面的type对应
const SectionCompMap: Record<
  SectionTypeEnum,
  LazyExoticComponent<MemoExoticComponent<(props: SectionConfigSchema) => JSX.Element>>
> = {
  [SectionTypeEnum.SlideShow]: FeatureSlideShow,
  [SectionTypeEnum.Video]: Video,
  [SectionTypeEnum.MultiMediaSplicing]: Splicing,
};
const Home = memo(() => {
  const { t } = useTranslation();
  const sectionConfigData = useAppSelector((state) => state.home.sectionConfigData);
  useEffect(() => {
    const off = iframeCommunicator.initWindowListener();
    return off;
  }, []);
  // 初始化时，给编辑器发送消息
  useInitEditor();
  // 监听编辑器的消息
  useListenerMsgFromEditor();
  useSendLanguageToEditor();
  return (
    <div className={styles.home}>
      <div className={styles.header}>{t('home.title')}</div>
      {sectionConfigData.order.map((sectionId) => {
        const seConfigData = sectionConfigData.sections[sectionId];
        if (!seConfigData || seConfigData.disabled) return;
        const Comp = SectionCompMap[seConfigData.type];
        return <Comp key={seConfigData.sectionId} {...seConfigData} />;
      })}
    </div>
  );
});

export default Home;
