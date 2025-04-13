import { BlockIconTypeEnum, SectionSchemaStruct, SectionTypeEnum, WidgetType } from '@/types/section';

const schema: SectionSchemaStruct = {
  name: 'sections.video.name',
  icon: BlockIconTypeEnum.video,
  type: SectionTypeEnum.Video,
  class: 'section',
  settings: [
    {
      type: WidgetType.text,
      id: 'title',
      default: '',
      label: 'sections.video.settings.title.label',
    },
    {
      type: WidgetType.select,
      id: 'title_size',
      options: [
        {
          value: 'title5',
          label: 'sections.video.settings.title_size.options__0.label',
        },
        {
          value: 'title3',
          label: 'sections.video.settings.title_size.options__1.label',
        },
        {
          value: 'title2',
          label: 'sections.video.settings.title_size.options__2.label',
        },
      ],
      default: 'title3',
      label: 'sections.video.settings.title_size.label',
    },
    {
      type: WidgetType.image_picker,
      id: 'cover',
      label: 'sections.video.settings.cover.label',
    },
    {
      type: WidgetType.video,
      id: 'internal_video',
      label: 'sections.video.settings.internal_video.label',
    },
    {
      type: WidgetType.video_url,
      id: 'external_video',
      format: 'video',
      label: 'sections.video.settings.external_video.label',
      placeholder: 'https://www.youtube.com/watch?v=V7BEzkRBp_g',
      info: 'sections.video.settings.external_video.info',
    },
    {
      type: WidgetType.switch,
      id: 'video_auto_play',
      label: 'sections.video.settings.video_auto_play.label',
      info: 'sections.video.settings.video_auto_play.info',
      default: false,
    },
    {
      type: WidgetType.switch,
      id: 'full_width',
      label: 'sections.video.settings.full_width.label',
      default: true,
    },
    {
      type: WidgetType.select,
      id: 'color_scheme',
      label: 'sections.video.settings.color_scheme.label',
      options: [
        {
          value: 'none',
          label: 'sections.video.settings.color_scheme.options__0.label',
        },
        {
          value: '1',
          label: 'sections.video.settings.color_scheme.options__1.label',
        },
        {
          value: '2',
          label: 'sections.video.settings.color_scheme.options__2.label',
        },
        {
          value: '3',
          label: 'sections.video.settings.color_scheme.options__3.label',
        },
      ],
      default: 'none',
    },
    {
      type: WidgetType.group_header,
      label: 'sections.video.settings.group_header__0.label',
    },
    {
      type: WidgetType.range,
      id: 'padding_top',
      min: 0,
      max: 100,
      step: 2,
      unit: 'px',
      label: 'sections.video.settings.padding_top.label',
      default: 0,
    },
    {
      type: WidgetType.range,
      id: 'padding_bottom',
      min: 0,
      max: 100,
      step: 2,
      unit: 'px',
      label: 'sections.video.settings.padding_bottom.label',
      default: 0,
    },
  ],
  presets: [
    {
      category_index: 1,
      category: 'sections.video.presets.presets__0.category',
      name: 'sections.video.presets.presets__0.name',
      settings: {
        title: '',
        title_size: 'title3',
        cover: {
          url: '',
        },
        internal_video: '',
        external_video: '',
        full_width: true,
        color_scheme: 'none',
        padding_top: 0,
        padding_bottom: 0,
      },
    },
  ],
};

export default schema;
