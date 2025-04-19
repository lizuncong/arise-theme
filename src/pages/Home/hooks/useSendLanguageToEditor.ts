import i18n from 'i18next'; // 确保你已经初始化了i18n
import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router';

import enTranslation from '@/locales/en.schema.json';
import translation from '@/locales/zh-hans-cn.schema.json';
import { useAppDispatch } from '@/store/hooks';
import { changeGlobalState } from '@/store/reducer/global';
import { LanguageEnum } from '@/types/enum';
import iframeCommunicator from '@/utils/IFrameCommunicator';

const languageMap = {
  [LanguageEnum.ZH]: translation,
  [LanguageEnum.EN]: enTranslation,
};
export const useSendLanguageToEditor = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams(location.search);
  const language = searchParams.get('language') as LanguageEnum;
  const initRef = useRef(language);

  useEffect(() => {
    const off = iframeCommunicator.onLanguageData((i18nKey) => {
      dispatch(
        changeGlobalState({
          language: i18nKey,
        }),
      );
      i18n.changeLanguage(i18nKey);

      iframeCommunicator.notifySectionSchemaLanguage({ i18nKey: i18nKey, locales: languageMap[i18nKey] });
    });

    const language = initRef.current;
    i18n.changeLanguage(language);
    iframeCommunicator.notifySectionSchemaLanguage({
      i18nKey: language,
      locales: languageMap[language],
    });

    return off;
  }, [dispatch]);
};
