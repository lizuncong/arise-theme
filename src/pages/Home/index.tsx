import { JSX, lazy, LazyExoticComponent, memo, MemoExoticComponent, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { updateSectionConfigData } from '@/store/reducer/home';
import { changeThemeState } from '@/store/reducer/theme';
import themeSchema from '@/theme/schema';
import { AriseThemeStyle, SectionConfigSchema, SectionTypeEnum } from '@/types/section';
import iframeCommunicator from '@/utils/IFrameCommunicator';
import { themeConfigToCssVars } from '@/utils/themeConfigToCssVars';

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
  const [searchParams] = useSearchParams(location.search);
  const themeStyle = searchParams.get('themestyle') as AriseThemeStyle;
  const ispreview = searchParams.get('ispreview') === '1';
  const iseditor = searchParams.get('iseditor') === '1';

  const dispatch = useAppDispatch();
  const themeConfig = useAppSelector((state) => state.theme.themeConfig);
  useEffect(() => {
    if (!iseditor) return;
    if (themeStyle) {
      const preset = themeSchema.presets.find((preset) => preset.type === themeStyle);
      dispatch(changeThemeState({ currentThemeStyle: themeStyle, themeConfig: preset }));
    }
    const off = iframeCommunicator.initWindowListener();
    return off;
  }, [dispatch, themeStyle, iseditor]);
  useEffect(() => {
    // 预览，目前没有后端，纯前端，因此预览会从localstorage中获取数据
    if (!ispreview) return;
    const data = localStorage.getItem('editorConfigData');
    if (!data) return;
    try {
      const { themeConfig, sectionConfigData } = JSON.parse(data);
      dispatch(changeThemeState({ themeConfig }));
      dispatch(updateSectionConfigData(sectionConfigData));
    } catch (error) {
      console.error('预览数据解析失败', error);
    }
  }, [dispatch, ispreview, themeStyle]);
  useEffect(() => {
    if (!themeConfig) return;
    themeConfigToCssVars(themeConfig);
  }, [themeConfig]);
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
