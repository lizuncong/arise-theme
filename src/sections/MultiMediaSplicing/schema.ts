import { BlockIconTypeEnum, BlockTypeEnum, SectionSchemaStruct, SectionTypeEnum, WidgetType } from '@/types/section';

const schema: SectionSchemaStruct = {
  name: 'sections.multi-media-splicing.name',
  icon: BlockIconTypeEnum.normal,
  max_blocks: 3,
  type: SectionTypeEnum.MultiMediaSplicing,
  class: 'section',
  blocks: [
    {
      type: BlockTypeEnum.video,
      icon: BlockIconTypeEnum.normal,
      name: 'sections.multi-media-splicing.blocks.video.name',
      settings: [
        {
          id: 'cover_image',
          type: WidgetType.image_picker,
          label: 'sections.multi-media-splicing.blocks.video.settings.cover_image.label',
        },
        {
          type: WidgetType.video,
          id: 'internal_video',
          label: 'sections.multi-media-splicing.blocks.video.settings.internal_video.label',
        },
        {
          type: WidgetType.video_url,
          id: 'external_video',
          format: 'video',
          label: 'sections.multi-media-splicing.blocks.video.settings.external_video.label',
          placeholder: 'https://www.youtube.com/watch?v=V7BEzkRBp_g',
          info: 'sections.multi-media-splicing.blocks.video.settings.external_video.info',
        },
        {
          id: 'video_alt',
          type: WidgetType.text,
          label: 'sections.multi-media-splicing.blocks.video.settings.video_alt.label',
          default: 'Describe the video',
        },
        {
          id: 'image_padding',
          type: WidgetType.select,
          label: 'sections.multi-media-splicing.blocks.video.settings.image_padding.label',
          info: 'sections.multi-media-splicing.blocks.video.settings.image_padding.info',
          options: [
            {
              value: 'cover',
              label: 'sections.multi-media-splicing.blocks.video.settings.image_padding.options__0.label',
            },
            {
              value: 'contain',
              label: 'sections.multi-media-splicing.blocks.video.settings.image_padding.options__1.label',
            },
          ],
          default: 'cover',
        },
      ],
    },
    {
      type: BlockTypeEnum.product,
      icon: BlockIconTypeEnum.normal,
      name: 'sections.multi-media-splicing.blocks.product.name',
      settings: [
        {
          type: WidgetType.product_picker,
          id: 'product',
          label: 'sections.multi-media-splicing.blocks.product.settings.product.label',
          default: '商品',
        },
        {
          type: WidgetType.switch,
          id: 'product_hover_show_next',
          label: 'sections.multi-media-splicing.blocks.product.settings.product_hover_show_next.label',
          default: false,
        },
        {
          id: 'image_padding',
          type: WidgetType.select,
          label: 'sections.multi-media-splicing.blocks.product.settings.image_padding.label',
          info: 'sections.multi-media-splicing.blocks.product.settings.image_padding.info',
          options: [
            {
              value: 'cover',
              label: 'sections.multi-media-splicing.blocks.product.settings.image_padding.options__0.label',
            },
            {
              value: 'contain',
              label: 'sections.multi-media-splicing.blocks.product.settings.image_padding.options__1.label',
            },
          ],
          default: 'cover',
        },
      ],
    },
    {
      type: BlockTypeEnum.collection,
      icon: BlockIconTypeEnum.normal,
      name: 'sections.multi-media-splicing.blocks.collection.name',
      settings: [
        {
          type: WidgetType.collection_picker,
          id: 'category',
          label: 'sections.multi-media-splicing.blocks.collection.settings.category.label',
          default: '商品分类Block',
        },
        {
          id: 'image_padding',
          type: WidgetType.select,
          label: 'sections.multi-media-splicing.blocks.collection.settings.image_padding.label',
          info: 'sections.multi-media-splicing.blocks.collection.settings.image_padding.info',
          options: [
            {
              value: 'cover',
              label: 'sections.multi-media-splicing.blocks.collection.settings.image_padding.options__0.label',
            },
            {
              value: 'contain',
              label: 'sections.multi-media-splicing.blocks.collection.settings.image_padding.options__1.label',
            },
          ],
          default: 'cover',
        },
      ],
    },
    {
      type: BlockTypeEnum.image,
      icon: BlockIconTypeEnum.normal,
      name: 'sections.multi-media-splicing.blocks.image.name',
      settings: [
        {
          type: WidgetType.image_picker,
          id: 'image',
          label: 'sections.multi-media-splicing.blocks.image.settings.image.label',
        },
        {
          id: 'image_padding',
          type: WidgetType.select,
          label: 'sections.multi-media-splicing.blocks.image.settings.image_padding.label',
          info: 'sections.multi-media-splicing.blocks.image.settings.image_padding.info',
          options: [
            {
              value: 'cover',
              label: 'sections.multi-media-splicing.blocks.image.settings.image_padding.options__0.label',
            },
            {
              value: 'contain',
              label: 'sections.multi-media-splicing.blocks.image.settings.image_padding.options__1.label',
            },
          ],
          default: 'cover',
        },
        {
          id: 'jump_link',
          type: WidgetType.url,
          label: 'sections.multi-media-splicing.blocks.image.settings.jump_link.label',
          info: 'sections.multi-media-splicing.blocks.image.settings.jump_link.info',
        },
      ],
    },
  ],
  settings: [
    {
      type: WidgetType.text,
      id: 'title',
      label: 'sections.multi-media-splicing.settings.title.label',
    },
    {
      type: WidgetType.select,
      id: 'title_size',
      label: 'sections.multi-media-splicing.settings.title_size.label',
      options: [
        {
          value: 'title2',
          label: 'sections.multi-media-splicing.settings.title_size.options__0.label',
        },
        {
          value: 'title3',
          label: 'sections.multi-media-splicing.settings.title_size.options__1.label',
        },
        {
          value: 'title5',
          label: 'sections.multi-media-splicing.settings.title_size.options__2.label',
        },
      ],
      default: 'title3',
    },
    {
      type: WidgetType.select,
      id: 'desktop_layout',
      label: 'sections.multi-media-splicing.settings.desktop_layout.label',
      default: 'left',
      options: [
        {
          value: 'left',
          label: 'sections.multi-media-splicing.settings.desktop_layout.options__0.label',
        },
        {
          value: 'right',
          label: 'sections.multi-media-splicing.settings.desktop_layout.options__1.label',
        },
        {
          value: 'list',
          label: 'sections.multi-media-splicing.settings.mobile_layout.options__1.label',
        },
      ],
    },
    // {
    //   type: WidgetType.select,
    //   id: 'mobile_layout',
    //   label: 'sections.multi-media-splicing.settings.mobile_layout.label',
    //   default: 'splicing',
    //   options: [
    //     {
    //       value: 'splicing',
    //       label: 'sections.multi-media-splicing.settings.mobile_layout.options__0.label',
    //     },
    //     {
    //       value: 'list',
    //       label: 'sections.multi-media-splicing.settings.mobile_layout.options__1.label',
    //     },
    //   ],
    // },
    {
      type: WidgetType.select,
      id: 'color_scheme',
      label: 'sections.multi-media-splicing.settings.color_scheme.label',
      default: 'none',
      options: [
        {
          value: 'none',
          label: 'sections.multi-media-splicing.settings.color_scheme.options__0.label',
        },
        {
          value: '1',
          label: 'sections.multi-media-splicing.settings.color_scheme.options__1.label',
        },
        {
          value: '2',
          label: 'sections.multi-media-splicing.settings.color_scheme.options__2.label',
        },
        {
          value: '3',
          label: 'sections.multi-media-splicing.settings.color_scheme.options__3.label',
        },
      ],
    },
    {
      type: WidgetType.group_header,
      label: 'sections.multi-media-splicing.settings.group_header__0.label',
    },
    {
      type: WidgetType.range,
      id: 'padding_top',
      label: 'sections.multi-media-splicing.settings.padding_top.label',
      default: 80,
      min: 0,
      max: 100,
      step: 2,
      unit: 'px',
    },
    {
      type: WidgetType.range,
      id: 'padding_bottom',
      label: 'sections.multi-media-splicing.settings.padding_bottom.label',
      default: 80,
      min: 0,
      max: 100,
      step: 2,
      unit: 'px',
    },
  ],
  presets: [
    {
      category_index: 1,
      category: 'sections.multi-media-splicing.presets.presets__0.category',
      name: 'sections.multi-media-splicing.presets.presets__0.name',
      blocks: [
        {
          type: BlockTypeEnum.video,
          settings: {
            cover_image: '',
            internal_video: '',
            external_video: '',
            video_alt: 'Describe the video',
            image_padding: 'cover',
          },
        },
        {
          type: BlockTypeEnum.product,
          settings: {
            product: '商品Block',
            product_hover_show_next: false,
            image_padding: 'cover',
          },
        },
        {
          type: BlockTypeEnum.collection,
          settings: {
            category: '',
            image_padding: 'cover',
          },
        },
      ],
      settings: {
        title_size: 'title3',
        desktop_layout: 'left',
        mobile_layout: 'splicing',
        color_scheme: 'none',
        padding_top: 80,
        padding_bottom: 80,
      },
    },
  ],
};

export default schema;
