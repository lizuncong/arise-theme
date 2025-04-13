// 向编辑器发送初始化数据，包括主题的schema多语言语料
// 主题所有section的schema描述信息
// 主题默认的section config data配置数据
// 实际上这部分工作应该是编辑器从后端拉起这些数据即可

import { useEffect, useRef } from 'react';

import { zhKey } from '@/i18n';
import zhSectionSchemaLanguage from '@/locales/zh-hans-cn.schema.json';
import { allSectionSchema } from '@/sections/schema';
import { useAppSelector } from '@/store/hooks';
import iframeCommunicator from '@/utils/IFrameCommunicator';
// 但现在没有后端，就由主题向编辑器发送这些初始化数据
export const useInitEditor = () => {
  const sectionConfigData = useAppSelector((state) => state.home.sectionConfigData);
  const sectionConfigDataRef = useRef(sectionConfigData);
  sectionConfigDataRef.current = sectionConfigData;
  useEffect(() => {
    iframeCommunicator.notifySectionConfigDataChange(sectionConfigDataRef.current);
    iframeCommunicator.notifyAllSectionSchemaChange(allSectionSchema);
    iframeCommunicator.notifySectionSchemaLanguage({ i18nKey: zhKey, locales: zhSectionSchemaLanguage });
  }, []);
};
