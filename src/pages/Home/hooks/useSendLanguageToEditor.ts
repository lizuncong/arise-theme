import { useEffect, useRef } from 'react';

import enTranslation from '@/locales/en.schema.json';
import translation from '@/locales/zh-hans-cn.schema.json';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { changeGlobalState } from '@/store/reducer/global';
import { LanguageEnum } from '@/types/enum';
import iframeCommunicator from '@/utils/IFrameCommunicator';

const languageMap = {
  [LanguageEnum.ZH]: translation,
  [LanguageEnum.EN]: enTranslation,
};
export const useSendLanguageToEditor = () => {
  const language = useAppSelector((state) => state.global.language);
  const dispatch = useAppDispatch();
  const initRef = useRef(language);

  useEffect(() => {
    const off = iframeCommunicator.onLanguageData((i18nKey) => {
      dispatch(
        changeGlobalState({
          language: i18nKey,
        }),
      );
      iframeCommunicator.notifySectionSchemaLanguage({ i18nKey: i18nKey, locales: languageMap[i18nKey] });
    });

    const language = initRef.current;
    iframeCommunicator.notifySectionSchemaLanguage({
      i18nKey: language,
      locales: languageMap[language],
    });

    return off;
  }, [dispatch]);
};
