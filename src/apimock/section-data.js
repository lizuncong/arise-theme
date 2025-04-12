// 编辑器通过这个api获取section配置项的值
const apiUrl = `
https://zcl6.myshopline.com/admin/api/merchant-bff/editor/theme/67f6a875a6c0bf0f8ef55fb7/installed-sections?themeId=67f6a875a6c0bf0f8ef55fb7&pageName=templates%2Findex.json&oseid=74779a36-1dbb-4428-8e25-271a8d2238d3`;

const response = {
  code: 'SUCCESS',
  msg: 'ok',
  success: true,
  data: [
    {
      type: 'SECTION',
      id: 'announcement-bar',
      config: {
        sectionId: 'announcement-bar',
        type: 'announcement-bar',
        disabled: false,
        settingsData: {
          type: 'announcement-bar',
          disabled: false,
          settings: {},
          blocks: {
            'item-1': {
              type: 'item',
              settings: {
                notice_link_text: {
                  value: '30-day postage paid returns',
                },
                notice_style: {
                  value: '1',
                },
              },
            },
          },
          block_order: ['item-1'],
        },
        schema: {
          name: 't:sections.announcement-bar.name',
          max_blocks: 12,
          settings: [
            {
              type: 'switch',
              id: 'enable_sticky',
              default: false,
              label: 't:sections.announcement-bar.settings.enable_sticky.label',
            },
            {
              id: 'sticky_mode',
              type: 'select',
              label: 't:sections.announcement-bar.settings.sticky_mode.label',
              default: 'always',
              options: [
                {
                  value: 'always',
                  label: 't:sections.announcement-bar.settings.sticky_mode.options__0.label',
                },
                {
                  value: 'pc',
                  label: 't:sections.announcement-bar.settings.sticky_mode.options__1.label',
                },
                {
                  value: 'mobile',
                  label: 't:sections.announcement-bar.settings.sticky_mode.options__2.label',
                },
              ],
            },
            {
              id: 'display_mode',
              type: 'select',
              label: 't:sections.announcement-bar.settings.display_mode.label',
              default: '1',
              options: [
                {
                  value: '1',
                  label: 't:sections.announcement-bar.settings.display_mode.options__0.label',
                },
                {
                  value: '2',
                  label: 't:sections.announcement-bar.settings.display_mode.options__1.label',
                },
                {
                  value: '3',
                  label: 't:sections.announcement-bar.settings.display_mode.options__2.label',
                },
                {
                  value: '4',
                  label: 't:sections.announcement-bar.settings.display_mode.options__3.label',
                },
                {
                  value: '5',
                  label: 't:sections.announcement-bar.settings.display_mode.options__4.label',
                },
                {
                  value: '6',
                  label: 't:sections.announcement-bar.settings.display_mode.options__5.label',
                },
              ],
            },
            {
              type: 'range',
              id: 'autoplay_speed',
              default: 5,
              max: 10,
              min: 3,
              step: 1,
              label: 't:sections.announcement-bar.settings.autoplay_speed.label',
              unit: 's',
            },
            {
              id: 'pc_scroll_interval',
              type: 'range',
              label: 't:sections.announcement-bar.settings.pc_scroll_interval.label',
              default: 12,
              unit: 's',
              min: 5,
              max: 20,
              step: 1,
              info: 't:sections.announcement-bar.settings.pc_scroll_interval.info',
            },
            {
              id: 'mb_scroll_interval',
              type: 'range',
              label: 't:sections.announcement-bar.settings.mb_scroll_interval.label',
              default: 5,
              unit: 's',
              min: 3,
              max: 20,
              step: 1,
            },
            {
              type: 'switch',
              id: 'show_social_media',
              label: 't:sections.announcement-bar.settings.show_social_media.label',
              default: false,
              info: 't:sections.announcement-bar.settings.show_social_media.info',
            },
            {
              type: 'range',
              id: 'padding_top',
              label: 't:sections.announcement-bar.settings.padding_top.label',
              default: 10,
              max: 36,
              min: 2,
              step: 2,
              unit: 'px',
            },
            {
              type: 'range',
              id: 'padding_bottom',
              label: 't:sections.announcement-bar.settings.padding_bottom.label',
              default: 10,
              max: 36,
              min: 2,
              step: 2,
              unit: 'px',
            },
          ],
          blocks: [
            {
              type: 'item',
              icon: 'normal',
              name: 't:sections.announcement-bar.blocks.item.name',
              settings: [
                {
                  id: 'notice_link_text',
                  type: 'richtext',
                  label: 't:sections.announcement-bar.blocks.item.settings.notice_link_text.label',
                  default: '30-day postage paid returns',
                },
                {
                  type: 'url',
                  id: 'notice_link',
                  label: 't:sections.announcement-bar.blocks.item.settings.notice_link.label',
                },
                {
                  id: 'announcement_division_bottom',
                  type: 'switch',
                  label: 't:sections.announcement-bar.blocks.item.settings.announcement_division_bottom.label',
                  default: false,
                },
              ],
            },
          ],
        },
      },
    },
    {
      type: 'SECTION',
      id: 'header',
      config: {
        sectionId: 'header',
        type: 'header',
        disabled: false,
        settingsData: {
          type: 'header',
          disabled: false,
          settings: {
            show_locale_selector: {
              value: false,
            },
            show_country_selector: {
              value: false,
            },
            color_scheme: {
              value: 'none',
            },
            full_width: {
              value: false,
            },
            transparent_header: {
              value: false,
            },
            transparent_title_color: {
              value: '#FFFFFF',
            },
            navigation_layout: {
              value: 'middle-line',
            },
            enable_highlight: {
              value: false,
            },
            highlight_menus: {
              value: '',
            },
            highlight_text_color: {
              value: '#FFFFFF',
            },
            highlight_bg_color: {
              value: '#000000',
            },
            body_pc_second_font_size: {
              value: 'body3',
            },
            body_pc_second_font_bold: {
              value: false,
            },
            body_pc_thirdly_font_size: {
              value: 'body4',
            },
            mobile_top_menu_show_home: {
              value: false,
            },
            main_menu_style: {
              value: 'drawer',
            },
            user_mobile_layout: {
              value: 'menu',
            },
            sticky_header_type: {
              value: 'on-scroll-up',
            },
            show_line_separator: {
              value: false,
            },
            show_search_entry: {
              value: true,
            },
            enabled_tile_search: {
              value: true,
            },
            show_user_entry: {
              value: true,
            },
            hover_show_user_menu: {
              value: false,
            },
            user_menu_text_1: {
              value: '',
            },
            user_menu_link_1: {
              value: '',
            },
            user_menu_text_2: {
              value: '',
            },
            user_menu_link_2: {
              value: '',
            },
            user_menu_text_3: {
              value: '',
            },
            user_menu_link_3: {
              value: '',
            },
            show_cart_entry: {
              value: true,
            },
            header_division_bottom: {
              value: true,
            },
            padding_top: {
              value: 8,
            },
            padding_bottom: {
              value: 8,
            },
            transparent_image: {
              value: null,
            },
            mobile_top_menu: {
              value: '',
            },
            main_menu_link_list: {
              value: 'main-menu',
              resource: {
                id: '6943923949970130969',
                name: 'Main menu',
                type: 0,
                status: 1,
                nodeTree: [
                  {
                    id: '1',
                    name: {
                      en: 'Home',
                      'zh-hans-cn': '首页',
                      default: 'Home',
                    },
                    nodeType: 1,
                    pageLink: '{"pageType":"0","id":"home"}',
                    handle: null,
                    openMode: 1,
                    childNodes: [],
                  },
                  {
                    id: '2',
                    name: {
                      en: 'Collections',
                      'zh-hans-cn': '分类页',
                      default: 'Collections',
                    },
                    nodeType: 9,
                    pageLink: null,
                    handle: null,
                    openMode: 1,
                    childNodes: [],
                  },
                  {
                    id: '3',
                    name: {
                      en: 'All products',
                      'zh-hans-cn': '全部商品列表',
                      default: 'All products',
                    },
                    nodeType: 7,
                    pageLink: null,
                    handle: null,
                    openMode: 1,
                    childNodes: [],
                  },
                ],
                handle: 'main-menu',
              },
            },
          },
          blocks: {
            menuImage1: {
              type: 'menuImage',
              settings: {
                menu_title: {
                  value: '',
                },
                menu_img_style: {
                  value: 'fill',
                },
                image_1_title: {
                  value: 'Promotion heading',
                },
                image_1_link_text: {
                  value: 'Shop',
                },
                image_1_link: {
                  value: '',
                },
                image_1_position: {
                  value: 'right',
                },
                image_2_title: {
                  value: 'Promotion heading',
                },
                image_2_link_text: {
                  value: 'Shop',
                },
                image_2_link: {
                  value: '',
                },
                image_2_position: {
                  value: 'right',
                },
                image_3_title: {
                  value: 'Promotion heading',
                },
                image_3_link_text: {
                  value: 'Shop',
                },
                image_3_link: {
                  value: '',
                },
                image_3_position: {
                  value: 'right',
                },
                image_1: {
                  value: null,
                },
                image_2: {
                  value: null,
                },
                image_3: {
                  value: null,
                },
              },
            },
            menuImage2: {
              type: 'menuImage',
              max_blocks: 5,
              settings: {
                menu_title: {
                  value: '',
                },
                menu_img_style: {
                  value: 'fill',
                },
                image_1_title: {
                  value: 'Promotion heading',
                },
                image_1_link_text: {
                  value: 'Shop',
                },
                image_1_link: {
                  value: '',
                },
                image_1_position: {
                  value: 'right',
                },
                image_2_title: {
                  value: 'Promotion heading',
                },
                image_2_link_text: {
                  value: 'Shop',
                },
                image_2_link: {
                  value: '',
                },
                image_2_position: {
                  value: 'right',
                },
                image_3_title: {
                  value: 'Promotion heading',
                },
                image_3_link_text: {
                  value: 'Shop',
                },
                image_3_link: {
                  value: '',
                },
                image_3_position: {
                  value: 'right',
                },
                image_1: {
                  value: null,
                },
                image_2: {
                  value: null,
                },
                image_3: {
                  value: null,
                },
              },
            },
          },
          block_order: ['menuImage1', 'menuImage2'],
        },
        schema: {
          name: 't:sections.header.name',
          settings: [
            {
              id: 'full_width',
              type: 'switch',
              label: 't:sections.header.settings.full_width.label',
              default: false,
            },
            {
              id: 'header_division_bottom',
              type: 'switch',
              label: 't:sections.header.settings.header_division_bottom.label',
              default: true,
            },
            {
              type: 'switch',
              id: 'show_country_selector',
              label: 't:sections.header.settings.show_country_selector.label',
              info: 't:sections.header.settings.show_country_selector.info',
              default: false,
            },
            {
              type: 'switch',
              id: 'show_locale_selector',
              label: 't:sections.header.settings.show_locale_selector.label',
              info: 't:sections.header.settings.show_locale_selector.info',
              default: false,
            },
            {
              type: 'group_header',
              label: 't:sections.header.settings.group_header__0.label',
            },
            {
              type: 'switch',
              id: 'show_search_entry',
              default: true,
              label: 't:sections.header.settings.show_search_entry.label',
            },
            {
              type: 'switch',
              id: 'enabled_tile_search',
              default: true,
              label: 't:sections.header.settings.enabled_tile_search.label',
            },
            {
              type: 'group_header',
              label: 't:sections.header.settings.group_header__1.label',
            },
            {
              type: 'switch',
              id: 'transparent_header',
              label: 't:sections.header.settings.transparent_header.label',
              default: false,
            },
            {
              type: 'image_picker',
              id: 'transparent_image',
              label: 't:sections.header.settings.transparent_image.label',
              info: 't:sections.header.settings.transparent_image.info',
            },
            {
              type: 'color',
              id: 'transparent_title_color',
              label: 't:sections.header.settings.transparent_title_color.label',
              default: '#FFFFFF',
            },
            {
              type: 'group_header',
              label: 't:sections.header.settings.group_header__2.label',
            },
            {
              type: 'menu_picker',
              id: 'main_menu_link_list',
              label: 't:sections.header.settings.main_menu_link_list.label',
              default: 'main-menu',
            },
            {
              type: 'menu_picker',
              id: 'mobile_main_menu_link_list',
              label: 't:sections.header.settings.mobile_main_menu_link_list.label',
              default: '',
            },
            {
              type: 'select',
              id: 'main_menu_style',
              label: 't:sections.header.settings.main_menu_style.label',
              default: 'dropdown',
              options: [
                {
                  value: 'dropdown',
                  label: 't:sections.header.settings.main_menu_style.options__0.label',
                },
                {
                  value: 'drawer',
                  label: 't:sections.header.settings.main_menu_style.options__1.label',
                },
              ],
            },
            {
              type: 'select',
              id: 'navigation_layout',
              label: 't:sections.header.settings.navigation_layout.label',
              default: 'middle-line',
              options: [
                {
                  value: 'left-line',
                  label: 't:sections.header.settings.navigation_layout.options__0.label',
                },
                {
                  value: 'left-left',
                  label: 't:sections.header.settings.navigation_layout.options__1.label',
                },
                {
                  value: 'middle-left',
                  label: 't:sections.header.settings.navigation_layout.options__2.label',
                },
                {
                  value: 'middle-line',
                  label: 't:sections.header.settings.navigation_layout.options__3.label',
                },
              ],
            },
            {
              type: 'select',
              id: 'body_pc_second_font_size',
              label: 't:sections.header.settings.body_pc_second_font_size.label',
              default: 'body4',
              options: [
                {
                  value: 'body2',
                  label: 't:sections.header.settings.body_pc_second_font_size.options__0.label',
                },
                {
                  value: 'body3',
                  label: 't:sections.header.settings.body_pc_second_font_size.options__1.label',
                },
                {
                  value: 'body4',
                  label: 't:sections.header.settings.body_pc_second_font_size.options__2.label',
                },
              ],
            },
            {
              type: 'switch',
              id: 'body_pc_second_font_bold',
              label: 't:sections.header.settings.body_pc_second_font_bold.label',
              default: false,
            },
            {
              type: 'select',
              id: 'body_pc_thirdly_font_size',
              label: 't:sections.header.settings.body_pc_thirdly_font_size.label',
              default: 'body3',
              options: [
                {
                  value: 'body3',
                  label: 't:sections.header.settings.body_pc_thirdly_font_size.options__0.label',
                },
                {
                  value: 'body4',
                  label: 't:sections.header.settings.body_pc_thirdly_font_size.options__1.label',
                },
                {
                  value: 'body5',
                  label: 't:sections.header.settings.body_pc_thirdly_font_size.options__2.label',
                },
              ],
            },
            {
              type: 'menu_picker',
              id: 'mobile_top_menu',
              label: 't:sections.header.settings.mobile_top_menu.label',
              info: 't:sections.header.settings.mobile_top_menu.info',
              default: '',
            },
            {
              type: 'switch',
              id: 'mobile_top_menu_show_home',
              label: 't:sections.header.settings.mobile_top_menu_show_home.label',
              info: 't:sections.header.settings.mobile_top_menu_show_home.info',
              default: false,
            },
            {
              type: 'select',
              id: 'user_mobile_layout',
              label: 't:sections.header.settings.user_mobile_layout.label',
              default: 'menu',
              options: [
                {
                  value: 'home',
                  label: 't:sections.header.settings.user_mobile_layout.options__0.label',
                },
                {
                  value: 'menu',
                  label: 't:sections.header.settings.user_mobile_layout.options__1.label',
                },
              ],
            },
            {
              type: 'select',
              id: 'sticky_header_type',
              options: [
                {
                  value: 'none',
                  label: 't:sections.header.settings.sticky_header_type.options__0.label',
                },
                {
                  value: 'always',
                  label: 't:sections.header.settings.sticky_header_type.options__1.label',
                },
                {
                  value: 'on-scroll-up',
                  label: 't:sections.header.settings.sticky_header_type.options__2.label',
                },
              ],
              default: 'always',
              label: 't:sections.header.settings.sticky_header_type.label',
            },
            {
              type: 'switch',
              id: 'show_line_separator',
              default: false,
              label: 't:sections.header.settings.show_line_separator.label',
            },
            {
              type: 'switch',
              id: 'show_user_entry',
              default: true,
              label: 't:sections.header.settings.show_user_entry.label',
            },
            {
              type: 'switch',
              id: 'hover_show_user_menu',
              default: false,
              label: 't:sections.header.settings.hover_show_user_menu.label',
            },
            {
              type: 'text',
              id: 'user_menu_text_1',
              default: '',
              label: 't:sections.header.settings.user_menu_text_1.label',
            },
            {
              type: 'url',
              id: 'user_menu_link_1',
              default: '',
              label: 't:sections.header.settings.user_menu_link_1.label',
            },
            {
              type: 'text',
              id: 'user_menu_text_2',
              default: '',
              label: 't:sections.header.settings.user_menu_text_2.label',
            },
            {
              type: 'url',
              id: 'user_menu_link_2',
              default: '',
              label: 't:sections.header.settings.user_menu_link_2.label',
            },
            {
              type: 'text',
              id: 'user_menu_text_3',
              default: '',
              label: 't:sections.header.settings.user_menu_text_3.label',
            },
            {
              type: 'url',
              id: 'user_menu_link_3',
              default: '',
              label: 't:sections.header.settings.user_menu_link_3.label',
            },
            {
              type: 'switch',
              id: 'show_cart_entry',
              default: true,
              label: 't:sections.header.settings.show_cart_entry.label',
            },
            {
              type: 'group_header',
              label: 't:sections.header.settings.group_header__3.label',
              info: 't:sections.header.settings.group_header__3.info',
            },
            {
              type: 'switch',
              id: 'enable_highlight',
              label: 't:sections.header.settings.enable_highlight.label',
              default: false,
            },
            {
              type: 'text',
              id: 'highlight_menus',
              label: 't:sections.header.settings.highlight_menus.label',
              info: 't:sections.header.settings.highlight_menus.info',
              default: '',
            },
            {
              type: 'color',
              id: 'highlight_text_color',
              label: 't:sections.header.settings.highlight_text_color.label',
              default: '#FFFFFF',
            },
            {
              type: 'color',
              id: 'highlight_bg_color',
              label: 't:sections.header.settings.highlight_bg_color.label',
              default: '#000000',
            },
            {
              type: 'group_header',
              label: 't:sections.header.settings.group_header__4.label',
            },
            {
              type: 'range',
              id: 'padding_top',
              min: 0,
              max: 36,
              step: 4,
              unit: 'px',
              label: 't:sections.header.settings.padding_top.label',
              default: 8,
            },
            {
              type: 'range',
              id: 'padding_bottom',
              min: 0,
              max: 36,
              step: 4,
              unit: 'px',
              label: 't:sections.header.settings.padding_bottom.label',
              default: 8,
            },
          ],
          max_blocks: 10,
          blocks: [
            {
              type: 'menuImage',
              name: 't:sections.header.blocks.menuImage.name',
              icon: 'image',
              limit: 5,
              settings: [
                {
                  type: 'text',
                  id: 'menu_title',
                  default: '',
                  label: 't:sections.header.blocks.menuImage.settings.menu_title.label',
                  info: 't:sections.header.blocks.menuImage.settings.menu_title.info',
                },
                {
                  type: 'select',
                  id: 'menu_img_style',
                  default: 'fill',
                  label: 't:sections.header.blocks.menuImage.settings.menu_img_style.label',
                  options: [
                    {
                      value: 'fill',
                      label: 't:sections.header.blocks.menuImage.settings.menu_img_style.options__0.label',
                    },
                    {
                      value: 'normal',
                      label: 't:sections.header.blocks.menuImage.settings.menu_img_style.options__1.label',
                    },
                  ],
                },
                {
                  type: 'color',
                  id: 'text_color',
                  label: 't:sections.header.blocks.menuImage.settings.text_color.label',
                  default: '#FFFFFF',
                },
                {
                  type: 'group_header',
                  label: 't:sections.header.blocks.menuImage.settings.group_header__0.label',
                },
                {
                  type: 'image_picker',
                  id: 'image_1',
                  label: 't:sections.header.blocks.menuImage.settings.image_1.label',
                },
                {
                  type: 'text',
                  id: 'image_1_title',
                  default: 'Promotion heading',
                  label: 't:sections.header.blocks.menuImage.settings.image_1_title.label',
                },
                {
                  type: 'text',
                  id: 'image_1_link_text',
                  default: 'Shop',
                  label: 't:sections.header.blocks.menuImage.settings.image_1_link_text.label',
                },
                {
                  type: 'url',
                  id: 'image_1_link',
                  label: 't:sections.header.blocks.menuImage.settings.image_1_link.label',
                },
                {
                  type: 'select',
                  id: 'image_1_position',
                  label: 't:sections.header.blocks.menuImage.settings.image_1_position.label',
                  default: 'right',
                  options: [
                    {
                      value: 'left',
                      label: 't:sections.header.blocks.menuImage.settings.image_1_position.options__0.label',
                    },
                    {
                      value: 'right',
                      label: 't:sections.header.blocks.menuImage.settings.image_1_position.options__1.label',
                    },
                  ],
                },
                {
                  type: 'group_header',
                  label: 't:sections.header.blocks.menuImage.settings.group_header__1.label',
                },
                {
                  type: 'image_picker',
                  id: 'image_2',
                  label: 't:sections.header.blocks.menuImage.settings.image_2.label',
                },
                {
                  type: 'text',
                  id: 'image_2_title',
                  default: 'Promotion heading',
                  label: 't:sections.header.blocks.menuImage.settings.image_2_title.label',
                },
                {
                  type: 'text',
                  id: 'image_2_link_text',
                  default: 'Shop',
                  label: 't:sections.header.blocks.menuImage.settings.image_2_link_text.label',
                },
                {
                  type: 'url',
                  id: 'image_2_link',
                  label: 't:sections.header.blocks.menuImage.settings.image_2_link.label',
                },
                {
                  type: 'select',
                  id: 'image_2_position',
                  label: 't:sections.header.blocks.menuImage.settings.image_2_position.label',
                  default: 'right',
                  options: [
                    {
                      value: 'left',
                      label: 't:sections.header.blocks.menuImage.settings.image_2_position.options__0.label',
                    },
                    {
                      value: 'right',
                      label: 't:sections.header.blocks.menuImage.settings.image_2_position.options__1.label',
                    },
                  ],
                },
                {
                  type: 'group_header',
                  label: 't:sections.header.blocks.menuImage.settings.group_header__2.label',
                },
                {
                  type: 'image_picker',
                  id: 'image_3',
                  label: 't:sections.header.blocks.menuImage.settings.image_3.label',
                },
                {
                  type: 'text',
                  id: 'image_3_title',
                  default: 'Promotion heading',
                  label: 't:sections.header.blocks.menuImage.settings.image_3_title.label',
                },
                {
                  type: 'text',
                  id: 'image_3_link_text',
                  default: 'Shop',
                  label: 't:sections.header.blocks.menuImage.settings.image_3_link_text.label',
                },
                {
                  type: 'url',
                  id: 'image_3_link',
                  label: 't:sections.header.blocks.menuImage.settings.image_3_link.label',
                },
                {
                  type: 'select',
                  id: 'image_3_position',
                  label: 't:sections.header.blocks.menuImage.settings.image_3_position.label',
                  default: 'right',
                  options: [
                    {
                      value: 'left',
                      label: 't:sections.header.blocks.menuImage.settings.image_3_position.options__0.label',
                    },
                    {
                      value: 'right',
                      label: 't:sections.header.blocks.menuImage.settings.image_3_position.options__1.label',
                    },
                  ],
                },
              ],
            },
            {
              type: 'menuGallery',
              name: 't:sections.header.blocks.menuGallery.name',
              icon: 'image',
              limit: 5,
              settings: [
                {
                  type: 'text',
                  id: 'menu_title',
                  default: '',
                  label: 't:sections.header.blocks.menuGallery.settings.menu_title.label',
                  info: 't:sections.header.blocks.menuGallery.settings.menu_title.info',
                },
                {
                  type: 'url',
                  id: 'menu_url',
                  label: 't:sections.header.blocks.menuGallery.settings.menu_url.label',
                },
                {
                  type: 'group_header',
                  label: 't:sections.header.blocks.menuGallery.settings.group_header__0.label',
                },
                {
                  type: 'image_picker',
                  id: 'image_1',
                  label: 't:sections.header.blocks.menuGallery.settings.image_1.label',
                },
                {
                  type: 'text',
                  id: 'image_1_title',
                  default: '',
                  label: 't:sections.header.blocks.menuGallery.settings.image_1_title.label',
                },
                {
                  type: 'url',
                  id: 'image_1_link',
                  label: 't:sections.header.blocks.menuGallery.settings.image_1_link.label',
                },
                {
                  type: 'group_header',
                  label: 't:sections.header.blocks.menuGallery.settings.group_header__1.label',
                },
                {
                  type: 'image_picker',
                  id: 'image_2',
                  label: 't:sections.header.blocks.menuGallery.settings.image_2.label',
                },
                {
                  type: 'text',
                  id: 'image_2_title',
                  default: '',
                  label: 't:sections.header.blocks.menuGallery.settings.image_2_title.label',
                },
                {
                  type: 'url',
                  id: 'image_2_link',
                  label: 't:sections.header.blocks.menuGallery.settings.image_2_link.label',
                },
                {
                  type: 'group_header',
                  label: 't:sections.header.blocks.menuGallery.settings.group_header__2.label',
                },
                {
                  type: 'image_picker',
                  id: 'image_3',
                  label: 't:sections.header.blocks.menuGallery.settings.image_3.label',
                },
                {
                  type: 'text',
                  id: 'image_3_title',
                  default: '',
                  label: 't:sections.header.blocks.menuGallery.settings.image_3_title.label',
                },
                {
                  type: 'url',
                  id: 'image_3_link',
                  label: 't:sections.header.blocks.menuGallery.settings.image_3_link.label',
                },
                {
                  type: 'group_header',
                  label: 't:sections.header.blocks.menuGallery.settings.group_header__3.label',
                },
                {
                  type: 'image_picker',
                  id: 'image_4',
                  label: 't:sections.header.blocks.menuGallery.settings.image_4.label',
                },
                {
                  type: 'text',
                  id: 'image_4_title',
                  default: '',
                  label: 't:sections.header.blocks.menuGallery.settings.image_4_title.label',
                },
                {
                  type: 'url',
                  id: 'image_4_link',
                  label: 't:sections.header.blocks.menuGallery.settings.image_4_link.label',
                },
                {
                  type: 'group_header',
                  label: 't:sections.header.blocks.menuGallery.settings.group_header__4.label',
                },
                {
                  type: 'select',
                  id: 'image_size',
                  label: 't:sections.header.blocks.menuGallery.settings.image_size.label',
                  default: 'square',
                  options: [
                    {
                      value: 'square',
                      label: 't:sections.header.blocks.menuGallery.settings.image_size.options__0.label',
                    },
                    {
                      value: 'adapt',
                      label: 't:sections.header.blocks.menuGallery.settings.image_size.options__1.label',
                    },
                  ],
                },
                {
                  type: 'color',
                  id: 'title_color',
                  label: 't:sections.header.blocks.menuGallery.settings.title_color.label',
                  default: '#FFFFFF',
                },
                {
                  type: 'range',
                  id: 'opacity',
                  label: 't:sections.header.blocks.menuGallery.settings.opacity.label',
                  default: 20,
                  min: 0,
                  max: 100,
                  step: 1,
                  unit: '%',
                },
              ],
            },
          ],
        },
      },
    },
    {
      type: 'TEMPLATE',
      order: ['1744420001433c7355e4', '1744420056877bdb1ba2', '1744420074063e922eb8'],
      sections: {
        'icon-list': {
          sectionId: 'icon-list',
          type: 'icon-list',
          disabled: false,
          settingsData: {
            disabled: false,
            type: 'icon-list',
            settings: {
              title: {
                value: '',
              },
              slide: {
                value: true,
              },
              color_scheme: {
                value: 'none',
              },
              padding_top: {
                value: 60,
              },
              padding_bottom: {
                value: 60,
              },
            },
            blocks: {
              'block-1': {
                type: 'item',
                icon: 'image',
                settings: {
                  jump_link: {
                    value: '',
                  },
                  image: {
                    value: {},
                  },
                },
              },
              'block-2': {
                type: 'item',
                icon: 'image',
                settings: {
                  jump_link: {
                    value: '',
                  },
                  image: {
                    value: {},
                  },
                },
              },
              'block-3': {
                type: 'item',
                icon: 'image',
                settings: {
                  jump_link: {
                    value: '',
                  },
                  image: {
                    value: {},
                  },
                },
              },
              'block-4': {
                type: 'item',
                icon: 'image',
                settings: {
                  jump_link: {
                    value: '',
                  },
                  image: {
                    value: {},
                  },
                },
              },
              'block-5': {
                type: 'item',
                icon: 'image',
                settings: {
                  jump_link: {
                    value: '',
                  },
                  image: {
                    value: {},
                  },
                },
              },
              'block-6': {
                type: 'item',
                icon: 'image',
                settings: {
                  jump_link: {
                    value: '',
                  },
                  image: {
                    value: {},
                  },
                },
              },
            },
            block_order: ['block-1', 'block-2', 'block-3', 'block-4', 'block-5', 'block-6'],
          },
          schema: {
            name: 't:sections.icon-list.name',
            max_blocks: 12,
            blocks: [
              {
                type: 'item',
                name: 't:sections.icon-list.blocks.item.name',
                icon: 'image',
                limit: 12,
                settings: [
                  {
                    id: 'image',
                    type: 'image_picker',
                    label: 't:sections.icon-list.blocks.item.settings.image.label',
                  },
                  {
                    id: 'jump_link',
                    type: 'url',
                    label: 't:sections.icon-list.blocks.item.settings.jump_link.label',
                  },
                ],
              },
            ],
            settings: [
              {
                type: 'text',
                id: 'title',
                label: 't:sections.icon-list.settings.title.label',
              },
              {
                type: 'switch',
                id: 'slide',
                label: 't:sections.icon-list.settings.slide.label',
                info: 't:sections.icon-list.settings.slide.info',
                default: true,
              },
              {
                type: 'select',
                id: 'color_scheme',
                label: 't:sections.icon-list.settings.color_scheme.label',
                default: 'none',
                options: [
                  {
                    value: 'none',
                    label: 't:sections.icon-list.settings.color_scheme.options__0.label',
                  },
                  {
                    value: '1',
                    label: 't:sections.icon-list.settings.color_scheme.options__1.label',
                  },
                  {
                    value: '2',
                    label: 't:sections.icon-list.settings.color_scheme.options__2.label',
                  },
                  {
                    value: '3',
                    label: 't:sections.icon-list.settings.color_scheme.options__3.label',
                  },
                ],
              },
              {
                type: 'group_header',
                label: 't:sections.icon-list.settings.group_header__0.label',
              },
              {
                type: 'range',
                id: 'padding_top',
                min: 0,
                max: 100,
                step: 2,
                unit: 'px',
                label: 't:sections.icon-list.settings.padding_top.label',
                default: 40,
              },
              {
                type: 'range',
                id: 'padding_bottom',
                min: 0,
                max: 100,
                step: 2,
                unit: 'px',
                label: 't:sections.icon-list.settings.padding_bottom.label',
                default: 40,
              },
            ],
            presets: [
              {
                category_index: 4,
                category: 't:sections.icon-list.presets.presets__0.category',
                name: 't:sections.icon-list.presets.presets__0.name',
                settings: {
                  title: '',
                  slide: true,
                  padding_top: 60,
                  padding_bottom: 60,
                },
                blocks: [
                  {
                    type: 'item',
                    icon: 'image',
                    settings: {
                      image: {},
                      jump_link: '',
                    },
                  },
                  {
                    type: 'item',
                    icon: 'image',
                    settings: {
                      image: {},
                      jump_link: '',
                    },
                  },
                  {
                    type: 'item',
                    icon: 'image',
                    settings: {
                      image: {},
                      jump_link: '',
                    },
                  },
                  {
                    type: 'item',
                    icon: 'image',
                    settings: {
                      image: {},
                      jump_link: '',
                    },
                  },
                  {
                    type: 'item',
                    icon: 'image',
                    settings: {
                      image: {},
                      jump_link: '',
                    },
                  },
                  {
                    type: 'item',
                    icon: 'image',
                    settings: {
                      image: {},
                      jump_link: '',
                    },
                  },
                ],
              },
            ],
          },
        },
        '1744420001433c7355e4': {
          sectionId: '1744420001433c7355e4',
          type: 'featured-slideshow',
          disabled: false,
          settingsData: {
            disabled: false,
            type: 'featured-slideshow',
            settings: {
              content_height: {
                value: 100,
              },
              show_progress: {
                value: true,
              },
              show_arrows: {
                value: true,
              },
              switch: {
                value: true,
              },
              autoplay: {
                value: true,
              },
              autoplay_speed: {
                value: 7,
              },
            },
            blocks: {
              '1744420001433f23a0d7': {
                type: 'image',
                icon: 'image',
                settings: {
                  image_text_layout: {
                    value: '100%',
                  },
                  title_font: {
                    value: 'Oregano:400',
                  },
                  text_title_font_size: {
                    value: 'title3',
                  },
                  button_style: {
                    value: 'button',
                  },
                  text_enabled_custom_font: {
                    value: true,
                  },
                  title_font_size: {
                    value: 'title4',
                  },
                  image_layout_style: {
                    value: 'revert',
                  },
                  show_content_line: {
                    value: true,
                  },
                  overlay_opacity: {
                    value: 50,
                  },
                  text_mask: {
                    value: false,
                  },
                  text_mask_color: {
                    value: 'deep',
                  },
                  content_vertical_layout: {
                    value: 'flex-end',
                  },
                  content_horizontal_layout: {
                    value: 'start',
                  },
                  title: {
                    value: 'Highlight an\nimage banner',
                  },
                  content: {
                    value: '',
                  },
                  button_text: {
                    value: 'Shop this',
                  },
                  text_font_color: {
                    value: '#FFFFFF',
                  },
                  image_button_text_background: {
                    value: '#000000',
                  },
                  image_button_text_color: {
                    value: '#FFFFFF',
                  },
                  image_button_border_color: {
                    value: '#FFFFFF',
                  },
                  text_content_horizontal_layout: {
                    value: 'center',
                  },
                  text_title: {
                    value: 'Highlight an\nimage banner',
                  },
                  text_content: {
                    value: '',
                  },
                  text_button_text: {
                    value: 'Shop this',
                  },
                  text_text_color: {
                    value: '#FFFFFF',
                  },
                  text_background_color: {
                    value: '#2C2924',
                  },
                  text_button_style: {
                    value: 'button--link',
                  },
                  text_button_text_color: {
                    value: '#FFFFFF',
                  },
                  text_button_border_color: {
                    value: '#FFFFFF',
                  },
                },
                blockId: '1744420001433f23a0d7',
              },
              '1744420001434b525250': {
                type: 'image',
                icon: 'image',
                settings: {
                  image_text_layout: {
                    value: '100%',
                  },
                  image_layout_style: {
                    value: 'revert',
                  },
                  show_content_line: {
                    value: true,
                  },
                  overlay_opacity: {
                    value: 50,
                  },
                  text_mask: {
                    value: false,
                  },
                  text_mask_color: {
                    value: 'deep',
                  },
                  content_vertical_layout: {
                    value: 'flex-end',
                  },
                  content_horizontal_layout: {
                    value: 'start',
                  },
                  title: {
                    value: 'Highlight an\nimage banner',
                  },
                  title_font: {
                    value: 'Oregano:400',
                  },
                  title_font_size: {
                    value: 'title4',
                  },
                  content: {
                    value: '',
                  },
                  button_text: {
                    value: 'Shop this',
                  },
                  text_font_color: {
                    value: '#FFFFFF',
                  },
                  button_style: {
                    value: 'button',
                  },
                  image_button_text_background: {
                    value: '#000000',
                  },
                  image_button_text_color: {
                    value: '#FFFFFF',
                  },
                  image_button_border_color: {
                    value: '#FFFFFF',
                  },
                  text_content_horizontal_layout: {
                    value: 'center',
                  },
                  text_title: {
                    value: 'Highlight an\nimage banner',
                  },
                  text_enabled_custom_font: {
                    value: true,
                  },
                  text_title_font_size: {
                    value: 'title3',
                  },
                  text_content: {
                    value: '',
                  },
                  text_button_text: {
                    value: 'Shop this',
                  },
                  text_text_color: {
                    value: '#FFFFFF',
                  },
                  text_background_color: {
                    value: '#2C2924',
                  },
                  text_button_style: {
                    value: 'button--link',
                  },
                  text_button_text_color: {
                    value: '#FFFFFF',
                  },
                  text_button_border_color: {
                    value: '#FFFFFF',
                  },
                  image_mobile: {
                    value: null,
                  },
                  image: {
                    value: 'shopline://shop_images/1.png',
                    resource: {
                      id: '6943930668708276315',
                      storeId: 1744218611515,
                      name: '1.png',
                      materialType: {
                        name: 'IMAGE',
                      },
                      url: 'https://img.myshopline.com/image/store/1744218611515/1.png?w=640&h=853',
                      size: 1053523,
                      atlSeo: null,
                      defaultAlt: null,
                      captionSeo: null,
                      status: 1,
                      exhibition: true,
                      extensions: 'png',
                      firstFrameUrl: null,
                      formattedSlug: '1',
                      originalType: {
                        name: 'FILE_UPLOAD',
                      },
                      originalUrl: '',
                      domainType: {
                        name: 'STORE',
                      },
                      bizType: 'editorComponent',
                      reqContext: null,
                      resMetaId: '6943930667701643354',
                      externalResourceId: null,
                      createTime: {
                        date: {
                          year: 2025,
                          month: 4,
                          day: 10,
                        },
                        time: {
                          hour: 1,
                          minute: 10,
                          second: 30,
                          nano: 0,
                        },
                      },
                      updateTime: {
                        date: {
                          year: 2025,
                          month: 4,
                          day: 10,
                        },
                        time: {
                          hour: 1,
                          minute: 10,
                          second: 31,
                          nano: 0,
                        },
                      },
                      creator: null,
                      updater: null,
                      aspectRatio: 0.7502930832356389,
                      previewImages: null,
                    },
                  },
                },
                blockId: '1744420001434b525250',
              },
            },
            block_order: ['1744420001433f23a0d7', '1744420001434b525250'],
            custom_css: [],
          },
          schema: {
            name: 't:sections.featured-slideshow.name',
            class: 'section index-section--hero',
            block_info: 't:sections.featured-slideshow.block_info',
            max_blocks: 10,
            settings: [
              {
                type: 'range',
                id: 'content_height',
                label: 't:sections.featured-slideshow.settings.content_height.label',
                info: 't:sections.featured-slideshow.settings.content_height.info',
                default: 100,
                min: 50,
                max: 100,
                step: 5,
                unit: '%',
              },
              {
                type: 'switch',
                id: 'show_progress',
                label: 't:sections.featured-slideshow.settings.show_progress.label',
                default: true,
              },
              {
                type: 'switch',
                id: 'show_arrows',
                label: 't:sections.featured-slideshow.settings.show_arrows.label',
                default: true,
              },
              {
                type: 'switch',
                id: 'autoplay',
                label: 't:sections.featured-slideshow.settings.autoplay.label',
                default: true,
              },
              {
                type: 'range',
                id: 'autoplay_speed',
                label: 't:sections.featured-slideshow.settings.autoplay_speed.label',
                default: 7,
                min: 3,
                max: 10,
                step: 1,
                unit: 't:sections.featured-slideshow.settings.autoplay_speed.unit',
              },
            ],
            blocks: [
              {
                type: 'image',
                icon: 'image',
                name: 't:sections.featured-slideshow.blocks.image.name',
                settings: [
                  {
                    type: 'group_header',
                    label: 't:sections.featured-slideshow.blocks.image.settings.group_header__0.label',
                  },
                  {
                    id: 'image_text_layout',
                    type: 'select',
                    label: 't:sections.featured-slideshow.blocks.image.settings.image_text_layout.label',
                    default: '100%',
                    options: [
                      {
                        value: '50%',
                        label: 't:sections.featured-slideshow.blocks.image.settings.image_text_layout.options__0.label',
                      },
                      {
                        value: '70%',
                        label: 't:sections.featured-slideshow.blocks.image.settings.image_text_layout.options__1.label',
                      },
                      {
                        value: '100%',
                        label: 't:sections.featured-slideshow.blocks.image.settings.image_text_layout.options__2.label',
                      },
                    ],
                  },
                  {
                    type: 'select',
                    id: 'image_layout_style',
                    label: 't:sections.featured-slideshow.blocks.image.settings.image_layout_style.label',
                    default: 'revert',
                    options: [
                      {
                        value: 'revert',
                        label:
                          't:sections.featured-slideshow.blocks.image.settings.image_layout_style.options__0.label',
                      },
                      {
                        value: 'row-reverse',
                        label:
                          't:sections.featured-slideshow.blocks.image.settings.image_layout_style.options__1.label',
                      },
                    ],
                  },
                  {
                    type: 'switch',
                    id: 'show_content_line',
                    label: 't:sections.featured-slideshow.blocks.image.settings.show_content_line.label',
                    default: true,
                  },
                  {
                    type: 'range',
                    id: 'overlay_opacity',
                    label: 't:sections.featured-slideshow.blocks.image.settings.overlay_opacity.label',
                    default: 50,
                    min: 0,
                    max: 100,
                    step: 2,
                    unit: '%',
                  },
                  {
                    type: 'switch',
                    label: 't:sections.featured-slideshow.blocks.image.settings.text_mask.label',
                    id: 'text_mask',
                    default: false,
                  },
                  {
                    type: 'select',
                    label: 't:sections.featured-slideshow.blocks.image.settings.text_mask_color.label',
                    id: 'text_mask_color',
                    default: 'deep',
                    options: [
                      {
                        label: 't:sections.featured-slideshow.blocks.image.settings.text_mask_color.options__0.label',
                        value: 'deep',
                      },
                      {
                        label: 't:sections.featured-slideshow.blocks.image.settings.text_mask_color.options__1.label',
                        value: 'light',
                      },
                    ],
                  },
                  {
                    type: 'group_header',
                    label: 't:sections.featured-slideshow.blocks.image.settings.group_header__1.label',
                  },
                  {
                    type: 'image_picker',
                    id: 'image',
                    label: 't:sections.featured-slideshow.blocks.image.settings.image.label',
                    info: 't:sections.featured-slideshow.blocks.image.settings.image.info',
                  },
                  {
                    type: 'image_picker',
                    id: 'image_mobile',
                    label: 't:sections.featured-slideshow.blocks.image.settings.image_mobile.label',
                    info: 't:sections.featured-slideshow.blocks.image.settings.image_mobile.info',
                  },
                  {
                    type: 'select',
                    id: 'content_vertical_layout',
                    label: 't:sections.featured-slideshow.blocks.image.settings.content_vertical_layout.label',
                    default: 'flex-end',
                    options: [
                      {
                        value: 'start',
                        label:
                          't:sections.featured-slideshow.blocks.image.settings.content_vertical_layout.options__0.label',
                      },
                      {
                        value: 'center',
                        label:
                          't:sections.featured-slideshow.blocks.image.settings.content_vertical_layout.options__1.label',
                      },
                      {
                        value: 'flex-end',
                        label:
                          't:sections.featured-slideshow.blocks.image.settings.content_vertical_layout.options__2.label',
                      },
                    ],
                  },
                  {
                    id: 'content_horizontal_layout',
                    type: 'select',
                    label: 't:sections.featured-slideshow.blocks.image.settings.content_horizontal_layout.label',
                    default: 'start',
                    options: [
                      {
                        value: 'start',
                        label:
                          't:sections.featured-slideshow.blocks.image.settings.content_horizontal_layout.options__0.label',
                      },
                      {
                        value: 'center',
                        label:
                          't:sections.featured-slideshow.blocks.image.settings.content_horizontal_layout.options__1.label',
                      },
                      {
                        value: 'flex-end',
                        label:
                          't:sections.featured-slideshow.blocks.image.settings.content_horizontal_layout.options__2.label',
                      },
                    ],
                  },
                  {
                    type: 'textarea',
                    id: 'title',
                    label: 't:sections.featured-slideshow.blocks.image.settings.title.label',
                    default: 'Highlight an\nimage banner',
                    limit: 500,
                  },
                  {
                    type: 'font',
                    id: 'title_font',
                    label: 't:sections.featured-slideshow.blocks.image.settings.title_font.label',
                    default: 'Oregano:400',
                  },
                  {
                    type: 'select',
                    id: 'title_font_size',
                    label: 't:sections.featured-slideshow.blocks.image.settings.title_font_size.label',
                    options: [
                      {
                        value: 'title4',
                        label: 't:sections.featured-slideshow.blocks.image.settings.title_font_size.options__0.label',
                      },
                      {
                        value: 'title3',
                        label: 't:sections.featured-slideshow.blocks.image.settings.title_font_size.options__1.label',
                      },
                      {
                        value: 'title2',
                        label: 't:sections.featured-slideshow.blocks.image.settings.title_font_size.options__2.label',
                      },
                    ],
                    default: 'title4',
                  },
                  {
                    type: 'textarea',
                    id: 'content',
                    label: 't:sections.featured-slideshow.blocks.image.settings.content.label',
                    default: '',
                  },
                  {
                    type: 'text',
                    id: 'button_text',
                    label: 't:sections.featured-slideshow.blocks.image.settings.button_text.label',
                    info: 't:sections.featured-slideshow.blocks.image.settings.button_text.info',
                    default: 'Shop this',
                  },
                  {
                    type: 'url',
                    id: 'link',
                    label: 't:sections.featured-slideshow.blocks.image.settings.link.label',
                  },
                  {
                    type: 'color',
                    id: 'text_font_color',
                    label: 't:sections.featured-slideshow.blocks.image.settings.text_font_color.label',
                    default: '#FFFFFF',
                  },
                  {
                    type: 'select',
                    id: 'button_style',
                    label: 't:sections.featured-slideshow.blocks.image.settings.button_style.label',
                    default: 'button',
                    options: [
                      {
                        value: 'button',
                        label: 't:sections.featured-slideshow.blocks.image.settings.button_style.options__0.label',
                      },
                      {
                        value: 'button--secondary',
                        label: 't:sections.featured-slideshow.blocks.image.settings.button_style.options__1.label',
                      },
                      {
                        value: 'button--link',
                        label: 't:sections.featured-slideshow.blocks.image.settings.button_style.options__2.label',
                      },
                    ],
                  },
                  {
                    label: 't:sections.featured-slideshow.blocks.image.settings.image_button_text_background.label',
                    type: 'color',
                    id: 'image_button_text_background',
                    default: '#000000',
                  },
                  {
                    label: 't:sections.featured-slideshow.blocks.image.settings.image_button_text_color.label',
                    type: 'color',
                    id: 'image_button_text_color',
                    default: '#FFFFFF',
                  },
                  {
                    label: 't:sections.featured-slideshow.blocks.image.settings.image_button_border_color.label',
                    type: 'color',
                    id: 'image_button_border_color',
                    default: '#FFFFFF',
                  },
                  {
                    type: 'group_header',
                    label: 't:sections.featured-slideshow.blocks.image.settings.group_header__2.label',
                  },
                  {
                    id: 'text_content_horizontal_layout',
                    type: 'select',
                    label: 't:sections.featured-slideshow.blocks.image.settings.text_content_horizontal_layout.label',
                    default: 'center',
                    options: [
                      {
                        value: 'start',
                        label:
                          't:sections.featured-slideshow.blocks.image.settings.text_content_horizontal_layout.options__0.label',
                      },
                      {
                        value: 'center',
                        label:
                          't:sections.featured-slideshow.blocks.image.settings.text_content_horizontal_layout.options__1.label',
                      },
                      {
                        value: 'flex-end',
                        label:
                          't:sections.featured-slideshow.blocks.image.settings.text_content_horizontal_layout.options__2.label',
                      },
                    ],
                  },
                  {
                    type: 'textarea',
                    id: 'text_title',
                    label: 't:sections.featured-slideshow.blocks.image.settings.text_title.label',
                    default: 'Highlight an\nimage banner',
                    limit: 500,
                  },
                  {
                    type: 'switch',
                    id: 'text_enabled_custom_font',
                    label: 't:sections.featured-slideshow.blocks.image.settings.text_enabled_custom_font.label',
                    default: true,
                  },
                  {
                    type: 'select',
                    id: 'text_title_font_size',
                    label: 't:sections.featured-slideshow.blocks.image.settings.text_title_font_size.label',
                    options: [
                      {
                        value: 'title4',
                        label:
                          't:sections.featured-slideshow.blocks.image.settings.text_title_font_size.options__0.label',
                      },
                      {
                        value: 'title3',
                        label:
                          't:sections.featured-slideshow.blocks.image.settings.text_title_font_size.options__1.label',
                      },
                      {
                        value: 'title2',
                        label:
                          't:sections.featured-slideshow.blocks.image.settings.text_title_font_size.options__2.label',
                      },
                    ],
                    default: 'title4',
                  },
                  {
                    type: 'textarea',
                    id: 'text_content',
                    label: 't:sections.featured-slideshow.blocks.image.settings.text_content.label',
                    default: '',
                  },
                  {
                    type: 'text',
                    id: 'text_button_text',
                    label: 't:sections.featured-slideshow.blocks.image.settings.text_button_text.label',
                    default: 'Shop this',
                  },
                  {
                    type: 'url',
                    id: 'text_link',
                    label: 't:sections.featured-slideshow.blocks.image.settings.text_link.label',
                  },
                  {
                    type: 'color',
                    id: 'text_text_color',
                    label: 't:sections.featured-slideshow.blocks.image.settings.text_text_color.label',
                    default: '#FFFFFF',
                  },
                  {
                    type: 'color',
                    id: 'text_background_color',
                    label: 't:sections.featured-slideshow.blocks.image.settings.text_background_color.label',
                    default: '#2C2924',
                  },
                  {
                    type: 'select',
                    id: 'text_button_style',
                    label: 't:sections.featured-slideshow.blocks.image.settings.text_button_style.label',
                    default: 'button--link',
                    options: [
                      {
                        value: 'button',
                        label: 't:sections.featured-slideshow.blocks.image.settings.text_button_style.options__0.label',
                      },
                      {
                        value: 'button--secondary',
                        label: 't:sections.featured-slideshow.blocks.image.settings.text_button_style.options__1.label',
                      },
                      {
                        value: 'button--link',
                        label: 't:sections.featured-slideshow.blocks.image.settings.text_button_style.options__2.label',
                      },
                    ],
                  },
                  {
                    label: 't:sections.featured-slideshow.blocks.image.settings.text_button_background_color.label',
                    type: 'color',
                    id: 'text_button_background_color',
                  },
                  {
                    label: 't:sections.featured-slideshow.blocks.image.settings.text_button_text_color.label',
                    type: 'color',
                    id: 'text_button_text_color',
                    default: '#FFFFFF',
                  },
                  {
                    label: 't:sections.featured-slideshow.blocks.image.settings.text_button_border_color.label',
                    type: 'color',
                    id: 'text_button_border_color',
                    default: '#FFFFFF',
                  },
                ],
              },
            ],
            presets: [
              {
                category_index: 1,
                category: 't:sections.featured-slideshow.presets.presets__0.category',
                name: 't:sections.featured-slideshow.presets.presets__0.name',
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
                    type: 'image',
                    icon: 'image',
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
                    type: 'image',
                    icon: 'image',
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
                category_index: 2,
                category: 't:sections.featured-slideshow.presets.presets__0.category',
                name: 't:sections.featured-slideshow.presets.presets__1.name',
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
                    type: 'image',
                    icon: 'image',
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
                    type: 'image',
                    icon: 'image',
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
          },
        },
        '1744420056877bdb1ba2': {
          sectionId: '1744420056877bdb1ba2',
          type: 'video',
          disabled: false,
          settingsData: {
            disabled: false,
            type: 'video',
            settings: {
              title: {
                value: '这是一个视频',
              },
              title_size: {
                value: 'title3',
              },
              external_video: {
                value: '',
              },
              video_auto_play: {
                value: false,
              },
              full_width: {
                value: true,
              },
              color_scheme: {
                value: 'none',
              },
              padding_top: {
                value: 0,
              },
              padding_bottom: {
                value: 0,
              },
              cover: {
                value: {
                  url: '',
                },
              },
              internal_video: {
                value: '',
              },
            },
            blocks: {},
            block_order: [],
            custom_css: [],
          },
          schema: {
            name: 't:sections.video.name',
            icon: 'video',
            class: 'section',
            settings: [
              {
                type: 'text',
                id: 'title',
                default: '',
                label: 't:sections.video.settings.title.label',
              },
              {
                type: 'select',
                id: 'title_size',
                options: [
                  {
                    value: 'title5',
                    label: 't:sections.video.settings.title_size.options__0.label',
                  },
                  {
                    value: 'title3',
                    label: 't:sections.video.settings.title_size.options__1.label',
                  },
                  {
                    value: 'title2',
                    label: 't:sections.video.settings.title_size.options__2.label',
                  },
                ],
                default: 'title3',
                label: 't:sections.video.settings.title_size.label',
              },
              {
                type: 'image_picker',
                id: 'cover',
                label: 't:sections.video.settings.cover.label',
              },
              {
                type: 'video',
                id: 'internal_video',
                label: 't:sections.video.settings.internal_video.label',
              },
              {
                type: 'video_url',
                id: 'external_video',
                format: 'video',
                label: 't:sections.video.settings.external_video.label',
                placeholder: 'https://www.youtube.com/watch?v=V7BEzkRBp_g',
                info: 't:sections.video.settings.external_video.info',
              },
              {
                type: 'switch',
                id: 'video_auto_play',
                label: 't:sections.video.settings.video_auto_play.label',
                info: 't:sections.video.settings.video_auto_play.info',
                default: false,
              },
              {
                type: 'switch',
                id: 'full_width',
                label: 't:sections.video.settings.full_width.label',
                default: true,
              },
              {
                type: 'select',
                id: 'color_scheme',
                label: 't:sections.video.settings.color_scheme.label',
                options: [
                  {
                    value: 'none',
                    label: 't:sections.video.settings.color_scheme.options__0.label',
                  },
                  {
                    value: '1',
                    label: 't:sections.video.settings.color_scheme.options__1.label',
                  },
                  {
                    value: '2',
                    label: 't:sections.video.settings.color_scheme.options__2.label',
                  },
                  {
                    value: '3',
                    label: 't:sections.video.settings.color_scheme.options__3.label',
                  },
                ],
                default: 'none',
              },
              {
                type: 'group_header',
                label: 't:sections.video.settings.group_header__0.label',
              },
              {
                type: 'range',
                id: 'padding_top',
                min: 0,
                max: 100,
                step: 2,
                unit: 'px',
                label: 't:sections.video.settings.padding_top.label',
                default: 0,
              },
              {
                type: 'range',
                id: 'padding_bottom',
                min: 0,
                max: 100,
                step: 2,
                unit: 'px',
                label: 't:sections.video.settings.padding_bottom.label',
                default: 0,
              },
            ],
            presets: [
              {
                category_index: 1,
                category: 't:sections.video.presets.presets__0.category',
                name: 't:sections.video.presets.presets__0.name',
                icon: 'video',
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
          },
        },
        '1744420074063e922eb8': {
          sectionId: '1744420074063e922eb8',
          type: 'multi-media-splicing',
          disabled: false,
          settingsData: {
            disabled: false,
            type: 'multi-media-splicing',
            settings: {
              title: {
                value: '这是拼贴',
              },
              title_size: {
                value: 'title3',
              },
              desktop_layout: {
                value: 'left',
              },
              mobile_layout: {
                value: 'splicing',
              },
              color_scheme: {
                value: 'none',
              },
              padding_top: {
                value: 80,
              },
              padding_bottom: {
                value: 80,
              },
            },
            blocks: {
              '1744420106040f8a3549': {
                type: 'image',
                settings: {
                  image_padding: {
                    value: 'cover',
                  },
                  image: {
                    value: 'shopline://shop_images/color2_6947290210074102469.png',
                    resource: {
                      id: '6947290210074102469',
                      storeId: 1744218611515,
                      name: 'color2_6947290210074102469.png',
                      materialType: {
                        name: 'IMAGE',
                      },
                      url: 'https://img.myshopline.com/image/store/1744218611515/color2.png?w=4&h=4',
                      size: 137,
                      atlSeo: null,
                      defaultAlt: null,
                      captionSeo: null,
                      status: 1,
                      exhibition: true,
                      extensions: 'png',
                      firstFrameUrl: null,
                      formattedSlug: 'color2',
                      originalType: {
                        name: 'FILE_UPLOAD',
                      },
                      originalUrl: '',
                      domainType: {
                        name: 'STORE',
                      },
                      bizType: 'createProduct',
                      reqContext: null,
                      resMetaId: '6943926504049614836',
                      externalResourceId: null,
                      createTime: {
                        date: {
                          year: 2025,
                          month: 4,
                          day: 12,
                        },
                        time: {
                          hour: 8,
                          minute: 47,
                          second: 54,
                          nano: 0,
                        },
                      },
                      updateTime: {
                        date: {
                          year: 2025,
                          month: 4,
                          day: 12,
                        },
                        time: {
                          hour: 8,
                          minute: 47,
                          second: 55,
                          nano: 0,
                        },
                      },
                      creator: null,
                      updater: null,
                      aspectRatio: 1,
                      previewImages: null,
                    },
                  },
                },
              },
              '17444200740631e4419a': {
                type: 'video',
                settings: {
                  external_video: {
                    value: '',
                  },
                  video_alt: {
                    value: 'Describe the video',
                  },
                  image_padding: {
                    value: 'cover',
                  },
                  internal_video: {
                    value: '',
                  },
                  cover_image: {
                    value: 'shopline://shop_images/1.png',
                    resource: {
                      id: '6943930668708276315',
                      storeId: 1744218611515,
                      name: '1.png',
                      materialType: {
                        name: 'IMAGE',
                      },
                      url: 'https://img.myshopline.com/image/store/1744218611515/1.png?w=640&h=853',
                      size: 1053523,
                      atlSeo: null,
                      defaultAlt: null,
                      captionSeo: null,
                      status: 1,
                      exhibition: true,
                      extensions: 'png',
                      firstFrameUrl: null,
                      formattedSlug: '1',
                      originalType: {
                        name: 'FILE_UPLOAD',
                      },
                      originalUrl: '',
                      domainType: {
                        name: 'STORE',
                      },
                      bizType: 'editorComponent',
                      reqContext: null,
                      resMetaId: '6943930667701643354',
                      externalResourceId: null,
                      createTime: {
                        date: {
                          year: 2025,
                          month: 4,
                          day: 10,
                        },
                        time: {
                          hour: 1,
                          minute: 10,
                          second: 30,
                          nano: 0,
                        },
                      },
                      updateTime: {
                        date: {
                          year: 2025,
                          month: 4,
                          day: 10,
                        },
                        time: {
                          hour: 1,
                          minute: 10,
                          second: 31,
                          nano: 0,
                        },
                      },
                      creator: null,
                      updater: null,
                      aspectRatio: 0.7502930832356389,
                      previewImages: null,
                    },
                  },
                },
                blockId: '17444200740631e4419a',
              },
              '17444200740637a13470': {
                type: 'product',
                settings: {
                  product_hover_show_next: {
                    value: false,
                  },
                  image_padding: {
                    value: 'cover',
                  },
                  product: {
                    value: null,
                  },
                },
                blockId: '17444200740637a13470',
              },
            },
            block_order: ['1744420106040f8a3549', '17444200740631e4419a', '17444200740637a13470'],
            custom_css: [],
          },
          schema: {
            name: 't:sections.multi-media-splicing.name',
            icon: 'video',
            max_blocks: 3,
            class: 'section',
            blocks: [
              {
                type: 'video',
                icon: 'normal',
                name: 't:sections.multi-media-splicing.blocks.video.name',
                settings: [
                  {
                    id: 'cover_image',
                    type: 'image_picker',
                    label: 't:sections.multi-media-splicing.blocks.video.settings.cover_image.label',
                  },
                  {
                    type: 'video',
                    id: 'internal_video',
                    label: 't:sections.multi-media-splicing.blocks.video.settings.internal_video.label',
                  },
                  {
                    type: 'video_url',
                    id: 'external_video',
                    format: 'video',
                    label: 't:sections.multi-media-splicing.blocks.video.settings.external_video.label',
                    placeholder: 'https://www.youtube.com/watch?v=V7BEzkRBp_g',
                    info: 't:sections.multi-media-splicing.blocks.video.settings.external_video.info',
                  },
                  {
                    id: 'video_alt',
                    type: 'text',
                    label: 't:sections.multi-media-splicing.blocks.video.settings.video_alt.label',
                    default: 'Describe the video',
                  },
                  {
                    id: 'image_padding',
                    type: 'select',
                    label: 't:sections.multi-media-splicing.blocks.video.settings.image_padding.label',
                    info: 't:sections.multi-media-splicing.blocks.video.settings.image_padding.info',
                    options: [
                      {
                        value: 'cover',
                        label: 't:sections.multi-media-splicing.blocks.video.settings.image_padding.options__0.label',
                      },
                      {
                        value: 'contain',
                        label: 't:sections.multi-media-splicing.blocks.video.settings.image_padding.options__1.label',
                      },
                    ],
                    default: 'cover',
                  },
                ],
              },
              {
                type: 'product',
                icon: 'normal',
                name: 't:sections.multi-media-splicing.blocks.product.name',
                settings: [
                  {
                    type: 'product_picker',
                    id: 'product',
                    label: 't:sections.multi-media-splicing.blocks.product.settings.product.label',
                  },
                  {
                    type: 'switch',
                    id: 'product_hover_show_next',
                    label: 't:sections.multi-media-splicing.blocks.product.settings.product_hover_show_next.label',
                    default: false,
                  },
                  {
                    id: 'image_padding',
                    type: 'select',
                    label: 't:sections.multi-media-splicing.blocks.product.settings.image_padding.label',
                    info: 't:sections.multi-media-splicing.blocks.product.settings.image_padding.info',
                    options: [
                      {
                        value: 'cover',
                        label: 't:sections.multi-media-splicing.blocks.product.settings.image_padding.options__0.label',
                      },
                      {
                        value: 'contain',
                        label: 't:sections.multi-media-splicing.blocks.product.settings.image_padding.options__1.label',
                      },
                    ],
                    default: 'cover',
                  },
                ],
              },
              {
                type: 'collection',
                icon: 'normal',
                name: 't:sections.multi-media-splicing.blocks.collection.name',
                settings: [
                  {
                    type: 'collection_picker',
                    id: 'category',
                    label: 't:sections.multi-media-splicing.blocks.collection.settings.category.label',
                  },
                  {
                    id: 'image_padding',
                    type: 'select',
                    label: 't:sections.multi-media-splicing.blocks.collection.settings.image_padding.label',
                    info: 't:sections.multi-media-splicing.blocks.collection.settings.image_padding.info',
                    options: [
                      {
                        value: 'cover',
                        label:
                          't:sections.multi-media-splicing.blocks.collection.settings.image_padding.options__0.label',
                      },
                      {
                        value: 'contain',
                        label:
                          't:sections.multi-media-splicing.blocks.collection.settings.image_padding.options__1.label',
                      },
                    ],
                    default: 'cover',
                  },
                ],
              },
              {
                type: 'image',
                icon: 'normal',
                name: 't:sections.multi-media-splicing.blocks.image.name',
                settings: [
                  {
                    type: 'image_picker',
                    id: 'image',
                    label: 't:sections.multi-media-splicing.blocks.image.settings.image.label',
                  },
                  {
                    id: 'image_padding',
                    type: 'select',
                    label: 't:sections.multi-media-splicing.blocks.image.settings.image_padding.label',
                    info: 't:sections.multi-media-splicing.blocks.image.settings.image_padding.info',
                    options: [
                      {
                        value: 'cover',
                        label: 't:sections.multi-media-splicing.blocks.image.settings.image_padding.options__0.label',
                      },
                      {
                        value: 'contain',
                        label: 't:sections.multi-media-splicing.blocks.image.settings.image_padding.options__1.label',
                      },
                    ],
                    default: 'cover',
                  },
                  {
                    id: 'jump_link',
                    type: 'url',
                    label: 't:sections.multi-media-splicing.blocks.image.settings.jump_link.label',
                    info: 't:sections.multi-media-splicing.blocks.image.settings.jump_link.info',
                  },
                ],
              },
            ],
            settings: [
              {
                type: 'text',
                id: 'title',
                label: 't:sections.multi-media-splicing.settings.title.label',
              },
              {
                type: 'select',
                id: 'title_size',
                label: 't:sections.multi-media-splicing.settings.title_size.label',
                options: [
                  {
                    value: 'title2',
                    label: 't:sections.multi-media-splicing.settings.title_size.options__0.label',
                  },
                  {
                    value: 'title3',
                    label: 't:sections.multi-media-splicing.settings.title_size.options__1.label',
                  },
                  {
                    value: 'title5',
                    label: 't:sections.multi-media-splicing.settings.title_size.options__2.label',
                  },
                ],
                default: 'title3',
              },
              {
                type: 'select',
                id: 'desktop_layout',
                label: 't:sections.multi-media-splicing.settings.desktop_layout.label',
                default: 'left',
                options: [
                  {
                    value: 'left',
                    label: 't:sections.multi-media-splicing.settings.desktop_layout.options__0.label',
                  },
                  {
                    value: 'right',
                    label: 't:sections.multi-media-splicing.settings.desktop_layout.options__1.label',
                  },
                ],
              },
              {
                type: 'select',
                id: 'mobile_layout',
                label: 't:sections.multi-media-splicing.settings.mobile_layout.label',
                default: 'splicing',
                options: [
                  {
                    value: 'splicing',
                    label: 't:sections.multi-media-splicing.settings.mobile_layout.options__0.label',
                  },
                  {
                    value: 'list',
                    label: 't:sections.multi-media-splicing.settings.mobile_layout.options__1.label',
                  },
                ],
              },
              {
                type: 'select',
                id: 'color_scheme',
                label: 't:sections.multi-media-splicing.settings.color_scheme.label',
                default: 'none',
                options: [
                  {
                    value: 'none',
                    label: 't:sections.multi-media-splicing.settings.color_scheme.options__0.label',
                  },
                  {
                    value: '1',
                    label: 't:sections.multi-media-splicing.settings.color_scheme.options__1.label',
                  },
                  {
                    value: '2',
                    label: 't:sections.multi-media-splicing.settings.color_scheme.options__2.label',
                  },
                  {
                    value: '3',
                    label: 't:sections.multi-media-splicing.settings.color_scheme.options__3.label',
                  },
                ],
              },
              {
                type: 'group_header',
                label: 't:sections.multi-media-splicing.settings.group_header__0.label',
              },
              {
                type: 'range',
                id: 'padding_top',
                label: 't:sections.multi-media-splicing.settings.padding_top.label',
                default: 80,
                min: 0,
                max: 100,
                step: 2,
                unit: 'px',
              },
              {
                type: 'range',
                id: 'padding_bottom',
                label: 't:sections.multi-media-splicing.settings.padding_bottom.label',
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
                category: 't:sections.multi-media-splicing.presets.presets__0.category',
                name: 't:sections.multi-media-splicing.presets.presets__0.name',
                blocks: [
                  {
                    type: 'video',
                    settings: {
                      cover_image: '',
                      internal_video: '',
                      external_video: '',
                      video_alt: 'Describe the video',
                      image_padding: 'cover',
                    },
                  },
                  {
                    type: 'product',
                    settings: {
                      product: null,
                      product_hover_show_next: false,
                      image_padding: 'cover',
                    },
                  },
                  {
                    type: 'collection',
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
          },
        },
      },
    },
    {
      type: 'SECTION',
      id: 'footer',
      config: {
        sectionId: 'footer',
        type: 'footer',
        disabled: false,
        settingsData: {
          type: 'footer',
          disabled: false,
          settings: {
            show_locale_selector: {
              value: false,
            },
            show_country_selector: {
              value: false,
            },
            show_social_media: {
              value: true,
            },
            blocks_col: {
              value: 4,
            },
            align_type: {
              value: 'center',
            },
            padding_left: {
              value: 30,
            },
            padding_right: {
              value: 30,
            },
            padding_top: {
              value: 40,
            },
            padding_bottom: {
              value: 40,
            },
            letter_show_type: {
              value: 'down',
            },
            media_show_type: {
              value: 'down',
            },
            letter_pc_show_row: {
              value: true,
            },
            media_pc_show_row: {
              value: true,
            },
            show_pay_channel: {
              value: {
                show: false,
                pay_channel_list: [],
              },
            },
            color_scheme: {
              value: '2',
            },
            show_letter_subscribe: {
              value: false,
            },
            subscribe_letter_title: {
              value: 'Subscribe today and get 10% off your first purchase',
            },
            subscribe_letter_placeholder: {
              value: 'Enter your email',
            },
          },
          blocks: {
            'footer-menu1': {
              type: 'menu',
              settings: {
                title: {
                  value: 'Menu title',
                },
                default_fold: {
                  value: false,
                },
                menu: {
                  value: 'footer',
                  resource: {
                    id: '6943923950221789210',
                    name: 'Footer',
                    type: 1,
                    status: 1,
                    nodeTree: [
                      {
                        id: '4',
                        name: {
                          en: 'Search',
                          'zh-hans-cn': '搜索页',
                          default: 'Search',
                        },
                        nodeType: 8,
                        pageLink: null,
                        handle: null,
                        openMode: 1,
                        childNodes: [],
                      },
                    ],
                    handle: 'footer',
                  },
                },
              },
            },
            'footer-menu2': {
              type: 'menu',
              settings: {
                title: {
                  value: 'Menu title',
                },
                default_fold: {
                  value: false,
                },
                menu: {
                  value: 'footer',
                  resource: {
                    id: '6943923950221789210',
                    name: 'Footer',
                    type: 1,
                    status: 1,
                    nodeTree: [
                      {
                        id: '4',
                        name: {
                          en: 'Search',
                          'zh-hans-cn': '搜索页',
                          default: 'Search',
                        },
                        nodeType: 8,
                        pageLink: null,
                        handle: null,
                        openMode: 1,
                        childNodes: [],
                      },
                    ],
                    handle: 'footer',
                  },
                },
              },
            },
            'footer-custom': {
              type: 'custom',
              settings: {
                title: {
                  value: 'Custom text',
                },
                content: {
                  value: 'Add your own custom text here.',
                },
              },
            },
          },
          block_order: ['footer-menu1', 'footer-menu2', 'footer-custom'],
        },
        schema: {
          name: 't:sections.footer.name',
          max_blocks: 16,
          settings: [
            {
              type: 'group_header',
              label: 't:sections.footer.settings.group_header__0.label',
            },
            {
              type: 'range',
              id: 'blocks_col',
              label: 't:sections.footer.settings.blocks_col.label',
              default: 4,
              min: 3,
              max: 5,
              step: 1,
              unit: 't:sections.footer.settings.blocks_col.unit',
            },
            {
              type: 'select',
              id: 'align_type',
              label: 't:sections.footer.settings.align_type.label',
              default: 'left',
              options: [
                {
                  value: 'left',
                  label: 't:sections.footer.settings.align_type.options__0.label',
                },
                {
                  value: 'center',
                  label: 't:sections.footer.settings.align_type.options__1.label',
                },
                {
                  value: 'right',
                  label: 't:sections.footer.settings.align_type.options__2.label',
                },
              ],
            },
            {
              type: 'range',
              id: 'padding_top',
              min: 0,
              max: 100,
              step: 2,
              unit: 'px',
              label: 't:sections.footer.settings.padding_top.label',
              default: 40,
            },
            {
              type: 'range',
              id: 'padding_bottom',
              min: 0,
              max: 100,
              step: 2,
              unit: 'px',
              label: 't:sections.footer.settings.padding_bottom.label',
              default: 40,
            },
            {
              type: 'range',
              id: 'padding_left',
              label: 't:sections.footer.settings.padding_left.label',
              default: 30,
              max: 400,
              min: 10,
              step: 2,
              unit: 'px',
            },
            {
              type: 'range',
              id: 'padding_right',
              label: 't:sections.footer.settings.padding_right.label',
              default: 30,
              max: 400,
              min: 10,
              step: 2,
              unit: 'px',
            },
            {
              type: 'group_header',
              label: 't:sections.footer.settings.group_header__1.label',
            },
            {
              type: 'switch',
              id: 'show_letter_subscribe',
              label: 't:sections.footer.settings.show_letter_subscribe.label',
              default: true,
            },
            {
              type: 'switch',
              id: 'letter_pc_show_row',
              label: 't:sections.footer.settings.letter_pc_show_row.label',
              default: false,
            },
            {
              type: 'select',
              id: 'letter_show_type',
              label: 't:sections.footer.settings.letter_show_type.label',
              options: [
                {
                  value: 'up',
                  label: 't:sections.footer.settings.letter_show_type.options__0.label',
                },
                {
                  value: 'down',
                  label: 't:sections.footer.settings.letter_show_type.options__1.label',
                },
              ],
              default: 'down',
            },
            {
              type: 'select',
              id: 'letter_show_size',
              label: 't:sections.footer.settings.letter_show_size.label',
              options: [
                {
                  value: 'small',
                  label: 't:sections.footer.settings.letter_show_size.options__0.label',
                },
                {
                  value: 'middle',
                  label: 't:sections.footer.settings.letter_show_size.options__1.label',
                },
                {
                  value: 'large',
                  label: 't:sections.footer.settings.letter_show_size.options__2.label',
                },
              ],
              default: 'small',
            },
            {
              type: 'richtext',
              id: 'subscribe_letter_title',
              label: 't:sections.footer.settings.subscribe_letter_title.label',
              default: 'Subscribe today and get 10% off your first purchase',
            },
            {
              type: 'text',
              id: 'subscribe_letter_placeholder',
              label: 't:sections.footer.settings.subscribe_letter_placeholder.label',
              default: 'Enter your email',
            },
            {
              type: 'group_header',
              label: 't:sections.footer.settings.group_header__2.label',
              info: 't:sections.footer.settings.group_header__2.info',
            },
            {
              type: 'switch',
              id: 'show_social_media',
              label: 't:sections.footer.settings.show_social_media.label',
              default: true,
            },
            {
              type: 'switch',
              id: 'media_pc_show_row',
              label: 't:sections.footer.settings.media_pc_show_row.label',
              default: false,
            },
            {
              type: 'select',
              id: 'media_show_type',
              label: 't:sections.footer.settings.media_show_type.label',
              options: [
                {
                  value: 'up',
                  label: 't:sections.footer.settings.media_show_type.options__0.label',
                },
                {
                  value: 'down',
                  label: 't:sections.footer.settings.media_show_type.options__1.label',
                },
              ],
              default: 'down',
            },
            {
              type: 'range',
              id: 'media_icon_width',
              label: 't:sections.footer.settings.media_icon_width.label',
              default: 28,
              max: 88,
              min: 24,
              step: 1,
              unit: 'px',
            },
            {
              type: 'range',
              id: 'media_icon_padding',
              label: 't:sections.footer.settings.media_icon_padding.label',
              default: 8,
              max: 40,
              min: 8,
              step: 1,
              unit: 'px',
            },
            {
              type: 'group_header',
              label: 't:sections.footer.settings.group_header__3.label',
            },
            {
              type: 'select',
              id: 'copyright_show_type',
              label: 't:sections.footer.settings.copyright_show_type.label',
              options: [
                {
                  value: 'flatten',
                  label: 't:sections.footer.settings.copyright_show_type.options__0.label',
                },
                {
                  value: 'vertical',
                  label: 't:sections.footer.settings.copyright_show_type.options__1.label',
                },
              ],
              default: 'flatten',
            },
            {
              type: 'choose_payment_icons',
              id: 'show_pay_channel',
              label: 't:sections.footer.settings.show_pay_channel.label',
              default: false,
            },
            {
              type: 'switch',
              id: 'show_country_selector',
              label: 't:sections.footer.settings.show_country_selector.label',
              info: 't:sections.footer.settings.show_country_selector.info',
              default: false,
            },
            {
              type: 'switch',
              id: 'show_locale_selector',
              label: 't:sections.footer.settings.show_locale_selector.label',
              info: 't:sections.footer.settings.show_locale_selector.info',
              default: false,
            },
            {
              type: 'menu_picker',
              id: 'copyright_menu',
              label: 't:sections.footer.settings.copyright_menu.label',
            },
            {
              type: 'select',
              id: 'copyright_menu_type',
              label: 't:sections.footer.settings.copyright_menu_type.label',
              options: [
                {
                  value: 'copyright_top',
                  label: 't:sections.footer.settings.copyright_menu_type.options__0.label',
                },
                {
                  value: 'copyright_left',
                  label: 't:sections.footer.settings.copyright_menu_type.options__1.label',
                },
              ],
              default: 'copyright_top',
            },
          ],
          blocks: [
            {
              limit: 1,
              type: 'newsletter',
              icon: 'email',
              name: 't:sections.footer.blocks.newsletter.name',
              settings: [
                {
                  type: 'richtext',
                  id: 'title',
                  label: 't:sections.footer.blocks.newsletter.settings.title.label',
                  default: 'Sign up and save',
                },
                {
                  type: 'richtext',
                  id: 'subscribe_letter_title',
                  label: 't:sections.footer.blocks.newsletter.settings.subscribe_letter_title.label',
                  default: 'Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.',
                },
              ],
            },
            {
              limit: 1,
              type: 'social_media',
              icon: 'normal',
              name: 't:sections.footer.blocks.social_media.name',
              settings: [
                {
                  type: 'group_header',
                  label: 't:sections.footer.blocks.social_media.settings.group_header__0.label',
                  info: 't:sections.footer.blocks.social_media.settings.group_header__0.info',
                },
                {
                  type: 'text',
                  id: 'title',
                  label: 't:sections.footer.blocks.social_media.settings.title.label',
                  default: 'Follow us',
                },
                {
                  type: 'range',
                  id: 'block_media_icon_width',
                  label: 't:sections.footer.blocks.social_media.settings.block_media_icon_width.label',
                  default: 28,
                  max: 88,
                  min: 24,
                  step: 1,
                  unit: 'px',
                },
                {
                  type: 'range',
                  id: 'block_media_icon_padding',
                  label: 't:sections.footer.blocks.social_media.settings.block_media_icon_padding.label',
                  default: 8,
                  max: 40,
                  min: 8,
                  step: 1,
                  unit: 'px',
                },
              ],
            },
            {
              type: 'menu',
              icon: 'normal',
              name: 't:sections.footer.blocks.menu.name',
              settings: [
                {
                  type: 'text',
                  id: 'title',
                  label: 't:sections.footer.blocks.menu.settings.title.label',
                },
                {
                  type: 'menu_picker',
                  id: 'menu',
                  label: 't:sections.footer.blocks.menu.settings.menu.label',
                  default: 'footer',
                },
                {
                  type: 'switch',
                  id: 'default_fold',
                  label: 't:sections.footer.blocks.menu.settings.default_fold.label',
                  default: false,
                },
              ],
            },
            {
              type: 'custom',
              icon: 'paragraph',
              name: 't:sections.footer.blocks.custom.name',
              settings: [
                {
                  type: 'text',
                  id: 'title',
                  label: 't:sections.footer.blocks.custom.settings.title.label',
                  default: 'Custom text',
                },
                {
                  type: 'richtext',
                  id: 'content',
                  label: 't:sections.footer.blocks.custom.settings.content.label',
                  default: 'Add your own custom text here.',
                },
              ],
            },
            {
              type: 'image',
              icon: 'image',
              name: 't:sections.footer.blocks.image.name',
              settings: [
                {
                  type: 'image_picker',
                  id: 'image',
                  label: 't:sections.footer.blocks.image.settings.image.label',
                },
                {
                  id: 'image_width',
                  type: 'range',
                  label: 't:sections.footer.blocks.image.settings.image_width.label',
                  min: 50,
                  max: 200,
                  step: 10,
                  unit: 'px',
                  default: 100,
                },
                {
                  id: 'image_full_width',
                  type: 'switch',
                  label: 't:sections.footer.blocks.image.settings.image_full_width.label',
                  default: false,
                },
                {
                  type: 'select',
                  id: 'align',
                  label: 't:sections.footer.blocks.image.settings.align.label',
                  options: [
                    {
                      value: 'left',
                      label: 't:sections.footer.blocks.image.settings.align.options__0.label',
                    },
                    {
                      value: 'center',
                      label: 't:sections.footer.blocks.image.settings.align.options__1.label',
                    },
                    {
                      value: 'right',
                      label: 't:sections.footer.blocks.image.settings.align.options__2.label',
                    },
                  ],
                  default: 'center',
                },
              ],
            },
            {
              limit: 5,
              type: 'conact',
              icon: 'image',
              name: 't:sections.footer.blocks.conact.name',
              settings: [
                {
                  type: 'text',
                  id: 'title',
                  label: 't:sections.footer.blocks.conact.settings.title.label',
                  default: 'Contact us',
                },
                {
                  type: 'select',
                  id: 'conact_icon_1',
                  default: 'address',
                  label: 't:sections.footer.blocks.conact.settings.conact_icon_1.label',
                  options: [
                    {
                      value: 'address',
                      label: 't:sections.footer.blocks.conact.settings.conact_icon_1.options__0.label',
                    },
                    {
                      value: 'tel',
                      label: 't:sections.footer.blocks.conact.settings.conact_icon_1.options__1.label',
                    },
                    {
                      value: 'phone',
                      label: 't:sections.footer.blocks.conact.settings.conact_icon_1.options__2.label',
                    },
                    {
                      value: 'wechat',
                      label: 't:sections.footer.blocks.conact.settings.conact_icon_1.options__3.label',
                    },
                    {
                      value: 'email',
                      label: 't:sections.footer.blocks.conact.settings.conact_icon_1.options__4.label',
                    },
                  ],
                },
                {
                  type: 'text',
                  id: 'conact_text_1',
                  label: 't:sections.footer.blocks.conact.settings.conact_text_1.label',
                  default: '235 Fake St. London, UK',
                },
                {
                  type: 'select',
                  id: 'conact_icon_2',
                  default: 'tel',
                  label: 't:sections.footer.blocks.conact.settings.conact_icon_2.label',
                  options: [
                    {
                      value: 'address',
                      label: 't:sections.footer.blocks.conact.settings.conact_icon_2.options__0.label',
                    },
                    {
                      value: 'tel',
                      label: 't:sections.footer.blocks.conact.settings.conact_icon_2.options__1.label',
                    },
                    {
                      value: 'phone',
                      label: 't:sections.footer.blocks.conact.settings.conact_icon_2.options__2.label',
                    },
                    {
                      value: 'wechat',
                      label: 't:sections.footer.blocks.conact.settings.conact_icon_2.options__3.label',
                    },
                    {
                      value: 'email',
                      label: 't:sections.footer.blocks.conact.settings.conact_icon_2.options__4.label',
                    },
                  ],
                },
                {
                  type: 'text',
                  id: 'conact_text_2',
                  label: 't:sections.footer.blocks.conact.settings.conact_text_2.label',
                  default: '44 020 34473471',
                },
                {
                  type: 'select',
                  id: 'conact_icon_3',
                  default: 'email',
                  label: 't:sections.footer.blocks.conact.settings.conact_icon_3.label',
                  options: [
                    {
                      value: 'address',
                      label: 't:sections.footer.blocks.conact.settings.conact_icon_3.options__0.label',
                    },
                    {
                      value: 'tel',
                      label: 't:sections.footer.blocks.conact.settings.conact_icon_3.options__1.label',
                    },
                    {
                      value: 'phone',
                      label: 't:sections.footer.blocks.conact.settings.conact_icon_3.options__2.label',
                    },
                    {
                      value: 'wechat',
                      label: 't:sections.footer.blocks.conact.settings.conact_icon_3.options__3.label',
                    },
                    {
                      value: 'email',
                      label: 't:sections.footer.blocks.conact.settings.conact_icon_3.options__4.label',
                    },
                  ],
                },
                {
                  type: 'text',
                  id: 'conact_text_3',
                  label: 't:sections.footer.blocks.conact.settings.conact_text_3.label',
                  default: 'info@chanrolapparel.com',
                },
                {
                  type: 'select',
                  id: 'conact_icon_4',
                  default: '',
                  label: 't:sections.footer.blocks.conact.settings.conact_icon_4.label',
                  options: [
                    {
                      value: 'address',
                      label: 't:sections.footer.blocks.conact.settings.conact_icon_4.options__0.label',
                    },
                    {
                      value: 'tel',
                      label: 't:sections.footer.blocks.conact.settings.conact_icon_4.options__1.label',
                    },
                    {
                      value: 'phone',
                      label: 't:sections.footer.blocks.conact.settings.conact_icon_4.options__2.label',
                    },
                    {
                      value: 'wechat',
                      label: 't:sections.footer.blocks.conact.settings.conact_icon_4.options__3.label',
                    },
                    {
                      value: 'email',
                      label: 't:sections.footer.blocks.conact.settings.conact_icon_4.options__4.label',
                    },
                  ],
                },
                {
                  type: 'text',
                  id: 'conact_text_4',
                  label: 't:sections.footer.blocks.conact.settings.conact_text_4.label',
                  default: '',
                },
                {
                  type: 'select',
                  id: 'conact_icon_5',
                  default: '',
                  label: 't:sections.footer.blocks.conact.settings.conact_icon_5.label',
                  options: [
                    {
                      value: 'address',
                      label: 't:sections.footer.blocks.conact.settings.conact_icon_5.options__0.label',
                    },
                    {
                      value: 'tel',
                      label: 't:sections.footer.blocks.conact.settings.conact_icon_5.options__1.label',
                    },
                    {
                      value: 'phone',
                      label: 't:sections.footer.blocks.conact.settings.conact_icon_5.options__2.label',
                    },
                    {
                      value: 'wechat',
                      label: 't:sections.footer.blocks.conact.settings.conact_icon_5.options__3.label',
                    },
                    {
                      value: 'email',
                      label: 't:sections.footer.blocks.conact.settings.conact_icon_5.options__4.label',
                    },
                  ],
                },
                {
                  type: 'text',
                  id: 'conact_text_5',
                  label: 't:sections.footer.blocks.conact.settings.conact_text_5.label',
                  default: '',
                },
                {
                  type: 'switch',
                  id: 'default_fold',
                  label: 't:sections.footer.blocks.conact.settings.default_fold.label',
                  default: false,
                },
              ],
            },
            {
              limit: 5,
              type: 'logo_list',
              icon: 'image',
              name: 't:sections.footer.blocks.logo_list.name',
              settings: [
                {
                  type: 'text',
                  id: 'title',
                  label: 't:sections.footer.blocks.logo_list.settings.title.label',
                  default: 'Service',
                },
                {
                  type: 'select',
                  id: 'icon_1',
                  default: 'van',
                  label: 't:sections.footer.blocks.logo_list.settings.icon_1.label',
                  options: [
                    {
                      value: 'checkbox',
                      label: 't:sections.footer.blocks.logo_list.settings.icon_1.options__0.label',
                    },
                    {
                      value: 'earth',
                      label: 't:sections.footer.blocks.logo_list.settings.icon_1.options__1.label',
                    },
                    {
                      value: 'green',
                      label: 't:sections.footer.blocks.logo_list.settings.icon_1.options__2.label',
                    },
                    {
                      value: 'package',
                      label: 't:sections.footer.blocks.logo_list.settings.icon_1.options__3.label',
                    },
                    {
                      value: 'safe',
                      label: 't:sections.footer.blocks.logo_list.settings.icon_1.options__4.label',
                    },
                    {
                      value: 'van',
                      label: 't:sections.footer.blocks.logo_list.settings.icon_1.options__5.label',
                    },
                  ],
                },
                {
                  type: 'image_picker',
                  id: 'image_1',
                  label: 't:sections.footer.blocks.logo_list.settings.image_1.label',
                },
                {
                  type: 'richtext',
                  id: 'text_1',
                  label: 't:sections.footer.blocks.logo_list.settings.text_1.label',
                  default: 'Fast and free delivery',
                },
                {
                  type: 'select',
                  id: 'icon_2',
                  default: 'package',
                  label: 't:sections.footer.blocks.logo_list.settings.icon_2.label',
                  options: [
                    {
                      value: 'checkbox',
                      label: 't:sections.footer.blocks.logo_list.settings.icon_2.options__0.label',
                    },
                    {
                      value: 'earth',
                      label: 't:sections.footer.blocks.logo_list.settings.icon_2.options__1.label',
                    },
                    {
                      value: 'green',
                      label: 't:sections.footer.blocks.logo_list.settings.icon_2.options__2.label',
                    },
                    {
                      value: 'package',
                      label: 't:sections.footer.blocks.logo_list.settings.icon_2.options__3.label',
                    },
                    {
                      value: 'safe',
                      label: 't:sections.footer.blocks.logo_list.settings.icon_2.options__4.label',
                    },
                    {
                      value: 'van',
                      label: 't:sections.footer.blocks.logo_list.settings.icon_2.options__5.label',
                    },
                  ],
                },
                {
                  type: 'image_picker',
                  id: 'image_2',
                  label: 't:sections.footer.blocks.logo_list.settings.image_2.label',
                },
                {
                  type: 'richtext',
                  id: 'text_2',
                  label: 't:sections.footer.blocks.logo_list.settings.text_2.label',
                  default: '30 day refund guarantee',
                },
                {
                  type: 'select',
                  id: 'icon_3',
                  default: 'safe',
                  label: 't:sections.footer.blocks.logo_list.settings.icon_3.label',
                  options: [
                    {
                      value: 'checkbox',
                      label: 't:sections.footer.blocks.logo_list.settings.icon_3.options__0.label',
                    },
                    {
                      value: 'earth',
                      label: 't:sections.footer.blocks.logo_list.settings.icon_3.options__1.label',
                    },
                    {
                      value: 'green',
                      label: 't:sections.footer.blocks.logo_list.settings.icon_3.options__2.label',
                    },
                    {
                      value: 'package',
                      label: 't:sections.footer.blocks.logo_list.settings.icon_3.options__3.label',
                    },
                    {
                      value: 'safe',
                      label: 't:sections.footer.blocks.logo_list.settings.icon_3.options__4.label',
                    },
                    {
                      value: 'van',
                      label: 't:sections.footer.blocks.logo_list.settings.icon_3.options__5.label',
                    },
                  ],
                },
                {
                  type: 'image_picker',
                  id: 'image_3',
                  label: 't:sections.footer.blocks.logo_list.settings.image_3.label',
                },
                {
                  type: 'richtext',
                  id: 'text_3',
                  label: 't:sections.footer.blocks.logo_list.settings.text_3.label',
                  default: 'Worry free guarantee',
                },
                {
                  type: 'select',
                  id: 'icon_4',
                  default: 'checkbox',
                  label: 't:sections.footer.blocks.logo_list.settings.icon_4.label',
                  options: [
                    {
                      value: 'checkbox',
                      label: 't:sections.footer.blocks.logo_list.settings.icon_4.options__0.label',
                    },
                    {
                      value: 'earth',
                      label: 't:sections.footer.blocks.logo_list.settings.icon_4.options__1.label',
                    },
                    {
                      value: 'green',
                      label: 't:sections.footer.blocks.logo_list.settings.icon_4.options__2.label',
                    },
                    {
                      value: 'package',
                      label: 't:sections.footer.blocks.logo_list.settings.icon_4.options__3.label',
                    },
                    {
                      value: 'safe',
                      label: 't:sections.footer.blocks.logo_list.settings.icon_4.options__4.label',
                    },
                    {
                      value: 'van',
                      label: 't:sections.footer.blocks.logo_list.settings.icon_4.options__5.label',
                    },
                  ],
                },
                {
                  type: 'image_picker',
                  id: 'image_4',
                  label: 't:sections.footer.blocks.logo_list.settings.image_4.label',
                },
                {
                  type: 'richtext',
                  id: 'text_4',
                  label: 't:sections.footer.blocks.logo_list.settings.text_4.label',
                  default: 'Lifetime customer support',
                },
                {
                  type: 'switch',
                  id: 'default_fold',
                  label: 't:sections.footer.blocks.logo_list.settings.default_fold.label',
                  default: false,
                },
              ],
            },
          ],
          default: {
            blocks: [
              {
                type: 'menu',
                settings: {
                  menu: 'footer',
                  default_fold: false,
                  title: 'Menu title',
                },
              },
              {
                type: 'custom',
                settings: {
                  title: 'Custom text',
                  content: 'Add your own custom text here.',
                },
              },
              {
                type: 'image',
                settings: {
                  image: {},
                },
              },
            ],
            settings: {
              show_locale_selector: false,
              show_country_selector: false,
              show_social_media: true,
              show_pay_channel: {
                show: false,
                pay_channel_list: [
                  {
                    type: 'visa',
                    show: true,
                  },
                  {
                    type: 'master-card',
                    show: true,
                  },
                  {
                    type: 'master-card2',
                    show: true,
                  },
                  {
                    type: 'visa-electron',
                    show: true,
                  },
                  {
                    type: 'jcb',
                    show: true,
                  },
                  {
                    type: 'american-express',
                    show: true,
                  },
                  {
                    type: 'diners-club',
                    show: true,
                  },
                  {
                    type: 'discover',
                    show: true,
                  },
                  {
                    type: 'paypal',
                    show: true,
                  },
                  {
                    type: 'union-pay',
                    show: true,
                  },
                ],
              },
              show_letter_subscribe: false,
              subscribe_letter_title: 'Subscribe today and get 10% off your first purchase',
              subscribe_letter_placeholder: 'Enter your email',
              blocks_col: 4,
              align_type: 'left',
              padding_left: 30,
              padding_right: 30,
              padding_top: 40,
              padding_bottom: 40,
              letter_show_type: 'down',
              media_show_type: 'down',
              letter_pc_show_row: false,
              media_pc_show_row: false,
            },
          },
        },
      },
    },
  ],
};
