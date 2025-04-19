import { useEffect, useRef } from 'react';

import { allSectionSchema } from '@/sections/schema';
import { useAppSelector } from '@/store/hooks';
import themeSchema from '@/theme/schema';
import iframeCommunicator from '@/utils/IFrameCommunicator';
// 向编辑器发送初始化数据，包括主题的schema多语言语料
// 主题所有section的schema描述信息
// 主题默认的section config data配置数据
// 实际上这部分工作应该是编辑器从后端拉起这些数据即可
// 但现在没有后端，就由主题向编辑器发送这些初始化数据
export const useInitEditor = () => {
  const sectionConfigData = useAppSelector((state) => state.home.sectionConfigData);
  const sectionConfigDataRef = useRef(sectionConfigData);
  sectionConfigDataRef.current = sectionConfigData;
  const themeStyle = useAppSelector((state) => state.theme.currentThemeStyle);
  useEffect(() => {
    const preset = themeSchema.presets.find((preset) => preset.type === themeStyle);

    iframeCommunicator.notifySectionConfigDataChange(sectionConfigDataRef.current);
    iframeCommunicator.notifyAllSectionSchemaChange(allSectionSchema);
    iframeCommunicator.notifyThemeSchemaChange(themeSchema);
    iframeCommunicator.notifyThemeConfigChange(preset);
  }, [themeStyle]);
};
