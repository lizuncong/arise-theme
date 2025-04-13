export interface SectionConfigDataStruct {
  order: string[];
  sections: Record<string, SectionConfigSchema | undefined>;
}
export interface SectionConfigSchema {
  sectionId: string;
  type: string;
  disabled: boolean;
  settingsData: {
    disabled: boolean;
    type: string;
    block_order: string[];
    settings: Record<string, { value: any }>;
    blocks: Record<string, SectionBlockConfigSchema>;
  };
  [propsName: string]: any;
}

interface SectionBlockConfigSchema {
  type: string;
  icon?: string;
  blockId?: string;
  settings: Record<string, { value: any; [propsName: string]: any }>;
}
