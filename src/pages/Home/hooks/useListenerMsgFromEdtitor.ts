import { useEffect } from 'react';

import { useAppDispatch } from '@/store/hooks';
import { changeHomeState } from '@/store/reducer/home';
import { SectionConfigDataStruct, SectionConfigSchema } from '@/types/section';
import iframeCommunicator from '@/utils/IFrameCommunicator';

import { useUpdateConfigData } from './useUpdateConfigDataAndNotify';

export const useListenerMsgFromEditor = () => {
  const dispatch = useAppDispatch();
  const {
    updateSectionConfigOrder,
    updateSectionConfigSections,
    updateSectionConfigSectionBySectionId,
    updateAllSectionConfigData,
  } = useUpdateConfigData();
  useEffect(() => {
    // 监听currentEditingForm改变的信息
    const offCurrentEditingFormChange = iframeCommunicator.onCurrentEditingFormChange((data) => {
      dispatch(
        changeHomeState({
          currentEditingForm: data,
        }),
      );
    });
    // 监听整个section config data改变
    const offSectionConfigData = iframeCommunicator.onSectionConfigData((data: SectionConfigDataStruct) => {
      updateAllSectionConfigData(data);
    });

    // 监听sectionConfigData的order发生的改变
    const offSectionConfigOrderChange = iframeCommunicator.onSectionConfigOrderChange((order: string[]) => {
      updateSectionConfigOrder(order);
    });

    // 监听sectionConfigData的某个section发生了改变
    const offSectionConfigSectionChange = iframeCommunicator.onSectionConfigSectionChange(
      ({ sectionId, section }: { sectionId: string; section: SectionConfigSchema }) => {
        updateSectionConfigSectionBySectionId(sectionId, section);
      },
    );

    // 监听sectionConfigData的sections发生的改变
    const offSectionConfigSectionsChange = iframeCommunicator.onSectionConfigSectionsChange(
      (data: Record<string, SectionConfigSchema | undefined>) => {
        updateSectionConfigSections(data, false);
      },
    );

    return () => {
      offSectionConfigData();
      offSectionConfigOrderChange();
      offSectionConfigSectionChange();
      offSectionConfigSectionsChange();
      offCurrentEditingFormChange();
    };
  }, [
    dispatch,
    updateAllSectionConfigData,
    updateSectionConfigOrder,
    updateSectionConfigSectionBySectionId,
    updateSectionConfigSections,
  ]);
};
