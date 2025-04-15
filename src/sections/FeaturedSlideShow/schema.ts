import { BlockIconTypeEnum, BlockTypeEnum, SectionSchemaStruct, SectionTypeEnum, WidgetType } from '@/types/section';

const schema: SectionSchemaStruct = {
  name: 'sections.featured-slideshow.name',
  class: 'section index-section--hero',
  block_info: 'sections.featured-slideshow.block_info',
  type: SectionTypeEnum.SlideShow,
  icon: BlockIconTypeEnum.image,
  max_blocks: 10,
  settings: [
    {
      type: WidgetType.range,
      id: 'content_height',
      label: 'sections.featured-slideshow.settings.content_height.label',
      info: 'sections.featured-slideshow.settings.content_height.info',
      default: 100,
      min: 50,
      max: 100,
      step: 5,
      unit: '%',
    },
    {
      type: WidgetType.switch,
      id: 'show_progress',
      info: 'sections.featured-slideshow.settings.show_progress.info',
      label: 'sections.featured-slideshow.settings.show_progress.label',
      default: true,
    },
    {
      type: WidgetType.switch,
      id: 'show_arrows',
      label: 'sections.featured-slideshow.settings.show_arrows.label',
      default: true,
    },
    {
      type: WidgetType.switch,
      id: 'autoplay',
      label: 'sections.featured-slideshow.settings.autoplay.label',
      default: true,
    },
    {
      type: WidgetType.range,
      id: 'autoplay_speed',
      label: 'sections.featured-slideshow.settings.autoplay_speed.label',
      default: 7,
      min: 3,
      max: 10,
      step: 1,
      unit: 'sections.featured-slideshow.settings.autoplay_speed.unit',
    },
  ],
  blocks: [
    {
      type: BlockTypeEnum.image,
      icon: BlockIconTypeEnum.image,
      name: 'sections.featured-slideshow.blocks.image.name',
      settings: [
        {
          type: WidgetType.group_header,
          label: 'sections.featured-slideshow.blocks.image.settings.group_header__0.label',
        },
        {
          id: 'image_text_layout',
          type: WidgetType.select,
          label: 'sections.featured-slideshow.blocks.image.settings.image_text_layout.label',
          default: '100%',
          options: [
            {
              value: '50%',
              label: 'sections.featured-slideshow.blocks.image.settings.image_text_layout.options__0.label',
            },
            {
              value: '70%',
              label: 'sections.featured-slideshow.blocks.image.settings.image_text_layout.options__1.label',
            },
            {
              value: '100%',
              label: 'sections.featured-slideshow.blocks.image.settings.image_text_layout.options__2.label',
            },
          ],
        },
        {
          type: WidgetType.group_header,
          label: 'sections.featured-slideshow.blocks.image.settings.group_header__1.label',
        },
        {
          type: WidgetType.image_picker,
          id: 'image',
          label: 'sections.featured-slideshow.blocks.image.settings.image.label',
          info: 'sections.featured-slideshow.blocks.image.settings.image.info',
        },
      ],
    },
  ],
  presets: [
    {
      category_index: 1,
      category: 'sections.featured-slideshow.presets.presets__0.category',
      name: 'sections.featured-slideshow.presets.presets__0.name',
      settings: {
        content_height: 100,
        show_progress: true,
        show_arrows: true,
        switch: true,
        autoplay: true,
        autoplay_speed: 7,
      },
      blocks: [
        {
          type: BlockTypeEnum.image,
          settings: {
            image_text_layout: '100%',
            title_font: 'Oregano:400',
            text_title_font_size: 'title3',
            button_style: 'button',
            text_enabled_custom_font: true,
            title_font_size: 'title4',
          },
        },
        {
          type: BlockTypeEnum.image,
          settings: {
            image_text_layout: '100%',
            title_font: 'Oregano:400',
            text_title_font_size: 'title3',
            button_style: 'button',
            text_enabled_custom_font: true,
            title_font_size: 'title4',
          },
        },
      ],
    },
    {
      category_index: 1,
      category: 'sections.featured-slideshow.presets.presets__0.category',
      name: 'sections.featured-slideshow.presets.presets__1.name',
      settings: {
        content_height: 200,
        show_progress: false,
        show_arrows: false,
        switch: false,
        autoplay: false,
        autoplay_speed: 17,
      },
      blocks: [
        {
          type: BlockTypeEnum.image,
          settings: {
            image_text_layout: '100%',
            title_font: 'Oregano:400',
            text_title_font_size: 'title3',
            button_style: 'button',
            text_enabled_custom_font: true,
            title_font_size: 'title4',
          },
        },
        {
          type: BlockTypeEnum.image,
          settings: {
            image_text_layout: '100%',
            title_font: 'Oregano:400',
            text_title_font_size: 'title3',
            button_style: 'button',
            text_enabled_custom_font: true,
            title_font_size: 'title4',
          },
        },
        {
          type: BlockTypeEnum.image,
          settings: {
            image_text_layout: '100%',
            title_font: 'Oregano:400',
            text_title_font_size: 'title3',
            button_style: 'button',
            text_enabled_custom_font: true,
            title_font_size: 'title4',
          },
        },
      ],
    },
  ],
};

export default schema;
