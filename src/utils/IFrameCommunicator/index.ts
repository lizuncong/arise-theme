import { getEditorOrigin } from '@/constant';
import { LanguageEnum } from '@/types/enum';
import {
  CurrentEditingFormType,
  SectionConfigDataStruct,
  SectionConfigSchema,
  ThemePresetType,
  ThemeSchemaStruct,
} from '@/types/section';

import { CommunicateType } from './type';

class FrameCommunicator {
  private origin: string;
  private eventListeners = new Map<string, ((data: any) => void)[]>();
  constructor() {
    this.origin = getEditorOrigin();
  }
  public initWindowListener() {
    // 初始化监听iframe的消息
    const listener = (event: { origin: string; data: any }) => {
      console.log('Iframe监听编辑器的消息：', event);
      if (this.origin && event.origin !== this.origin) {
        console.warn(`Message from unknown origin: ${event.origin}`);
        return;
      }

      // 解析消息
      const { type, data } = event.data;

      // 触发对应的监听器
      if (this.eventListeners.has(type)) {
        const handlers = this.eventListeners.get(type);
        handlers?.forEach((handler) => {
          handler(data);
        });
      }
    };
    window.addEventListener('message', listener);
    return () => {
      window.removeEventListener('message', listener);
    };
  }

  private sendMessage(type: CommunicateType, data: any): void {
    const message = {
      type,
      data,
    };
    console.log('给Editor发送消息：', message, this.origin);
    window.parent.postMessage(message, this.origin);
  }
  // currentEditingForm发生了改变
  public notifyCurrentEditingFormChange(currentEditingForm: CurrentEditingFormType | undefined) {
    this.sendMessage(CommunicateType.currentEditingForm, currentEditingForm);
  }
  // sectionConfigData的order发生了改变
  public notifySectionConfigOrderChange(order: string[]) {
    this.sendMessage(CommunicateType.order, order);
  }
  // sectionConfigData的sections发生了改变
  public notifySectionConfigSectionsChange(sections: Record<string, SectionConfigSchema | undefined>) {
    this.sendMessage(CommunicateType.sections, sections);
  }

  // sectionConfigData的某个section发生了改变
  public notifySectionConfigSectionChange(sectionId: string, section: SectionConfigSchema | undefined) {
    this.sendMessage(CommunicateType.section, { sectionId, section });
  }

  // sectionConfigData整个发生了改变
  public notifySectionConfigDataChange(configData: SectionConfigDataStruct) {
    this.sendMessage(CommunicateType.sectionConfigData, configData);
  }
  //向编辑器同步一份所有section的schema协议。
  public notifyAllSectionSchemaChange(schema: any) {
    this.sendMessage(CommunicateType.allSectionSchemaChange, schema);
  }
  //向编辑器同步一份theme的schema协议。
  public notifyThemeSchemaChange(schema: ThemeSchemaStruct) {
    this.sendMessage(CommunicateType.themeSchemaChange, schema);
  }
  //向编辑器同步一份theme的config。
  public notifyThemeConfigChange(themeConfig: ThemePresetType | undefined) {
    this.sendMessage(CommunicateType.themeConfigChange, themeConfig);
  }
  // 监听主题配置项改变
  public onThemeConfigChange(handler: (themeConfig: ThemePresetType) => void) {
    return this.onMessage(CommunicateType.themeConfigChange, handler);
  }
  // 多语言或者语料发生了改变
  public notifySectionSchemaLanguage(data: { i18nKey: LanguageEnum; locales: any }) {
    this.sendMessage(CommunicateType.sectionSchemaLanguage, data);
  }
  private onMessage(type: string, handler: (data: any) => void): () => void {
    if (!this.eventListeners.has(type)) {
      this.eventListeners.set(type, []);
    }
    this.eventListeners.get(type)?.push(handler);

    return () => {
      this.offMessage(type, handler);
    };
  }
  // 监听currentEditingForm改变的信息
  public onCurrentEditingFormChange(handler: (currentEditingForm: CurrentEditingFormType | undefined) => void) {
    return this.onMessage(CommunicateType.currentEditingForm, handler);
  }
  // 监听sectionConfigData的order发生的改变
  public onSectionConfigOrderChange(handler: (order: string[]) => void) {
    return this.onMessage(CommunicateType.order, handler);
  }
  // 监听sectionConfigData的sections发生的改变
  public onSectionConfigSectionsChange(handler: (data: Record<string, SectionConfigSchema | undefined>) => void) {
    return this.onMessage(CommunicateType.sections, handler);
  }

  // 监听sectionConfigData的某个section发生了改变
  public onSectionConfigSectionChange(handler: (data: { sectionId: string; section: SectionConfigSchema }) => void) {
    return this.onMessage(CommunicateType.section, handler);
  }

  // 监听整个section config data改变
  public onSectionConfigData(handler: (data: SectionConfigDataStruct) => void) {
    return this.onMessage(CommunicateType.sectionConfigData, handler);
  }

  // 监听language变化改变
  public onLanguageData(handler: (i18nKey: LanguageEnum) => void) {
    return this.onMessage(CommunicateType.language, handler);
  }

  private offMessage(type: string, handler: (data: any) => void): void {
    if (!this.eventListeners.has(type)) return;

    const handlers = this.eventListeners.get(type);
    if (handlers) {
      const index = handlers.indexOf(handler);
      if (index !== -1) {
        handlers.splice(index, 1);
      }
    }
  }
}

const iframeCommunicator = new FrameCommunicator();

export default iframeCommunicator;
