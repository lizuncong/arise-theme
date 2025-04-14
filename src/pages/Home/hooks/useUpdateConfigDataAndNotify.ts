import { useCallback, useRef } from 'react';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { changeHomeState, updateSectionConfigData } from '@/store/reducer/home';
import { CurrentEditingFormType, SectionConfigDataStruct, SectionConfigSchema } from '@/types/section';
import iframeCommunicator from '@/utils/IFrameCommunicator';

// 更新配置项的信息
export const useUpdateConfigData = () => {
  const dispatch = useAppDispatch();
  const sectionConfigData = useAppSelector((state) => state.home.sectionConfigData);
  const sectionConfigDataRef = useRef(sectionConfigData);
  sectionConfigDataRef.current = sectionConfigData;
  const updateCurrentEditingForm = useCallback(
    (currentEditingForm: CurrentEditingFormType | undefined, shouldNotifyEditor = true) => {
      dispatch(
        changeHomeState({
          currentEditingForm,
        }),
      );
      if (shouldNotifyEditor) {
        iframeCommunicator.notifyCurrentEditingFormChange(currentEditingForm);
      }
    },
    [dispatch],
  );
  const updateSectionConfigOrder = useCallback(
    (newOrder: string[], shouldNotifyEditor = false) => {
      dispatch(
        updateSectionConfigData({
          ...sectionConfigDataRef.current,
          order: newOrder,
        }),
      );
      if (shouldNotifyEditor) {
        iframeCommunicator.notifySectionConfigOrderChange(newOrder);
      }
    },
    [dispatch],
  );

  const updateAllSectionConfigData = useCallback(
    (configData: SectionConfigDataStruct, shouldNotifyEditor = false) => {
      dispatch(updateSectionConfigData(configData));
      if (shouldNotifyEditor) {
        iframeCommunicator.notifySectionConfigDataChange(configData);
      }
    },
    [dispatch],
  );

  const updateSectionConfigSections = useCallback(
    (sections: Record<string, SectionConfigSchema | undefined>, shouldNotifyEditor = false) => {
      dispatch(
        updateSectionConfigData({
          ...sectionConfigDataRef.current,
          sections: sections,
        }),
      );
      if (shouldNotifyEditor) {
        iframeCommunicator.notifySectionConfigSectionsChange(sections);
      }
    },
    [dispatch],
  );

  const updateSectionConfigSectionBySectionId = useCallback(
    (sectionId: string, section: SectionConfigSchema | undefined, shouldNotifyEditor = false) => {
      const newV = {
        ...sectionConfigDataRef.current,
        sections: {
          ...sectionConfigDataRef.current.sections,
          [sectionId]: section,
        },
      };
      dispatch(updateSectionConfigData(newV));
      if (shouldNotifyEditor) {
        iframeCommunicator.notifySectionConfigSectionChange(sectionId, section);
      }
    },
    [dispatch],
  );

  return {
    updateSectionConfigOrder,
    updateSectionConfigSections,
    updateSectionConfigSectionBySectionId,
    updateAllSectionConfigData,
    updateCurrentEditingForm,
  };
};
