/**home页面状态。
 *
 *
 * 不同页面之间的状态必须要相互隔离。即不能在home页面引用dashboard页面的状态，也不能在dashboard
 * 页面使用home页面的状态。如果多个页面需要共享状态，那么应该放在global托管
 * **/
import type { PayloadAction } from '@reduxjs/toolkit';

import { createAppSlice } from '../createAppSlice';

export interface HomeSliceState {
  sections: Record<string, any>;
  order: string[];
}

const initialState: HomeSliceState = {
  sections: {
    '1744420001433c7355e4': {
      disabled: false,
      type: 'featured-slideshow',
      settings: {
        content_height: 100,
        show_progress: true,
        show_arrows: true,
        switch: true,
        autoplay: true,
        autoplay_speed: 7,
      },
      blocks: {
        '1744420001433f23a0d7': {
          type: 'image',
          icon: 'image',
          settings: {
            image_text_layout: '100%',
            title_font: 'Oregano:400',
            text_title_font_size: 'title3',
            button_style: 'button',
            text_enabled_custom_font: true,
            title_font_size: 'title4',
            image_layout_style: 'revert',
            show_content_line: true,
            overlay_opacity: 50,
            text_mask: false,
            text_mask_color: 'deep',
            content_vertical_layout: 'flex-end',
            content_horizontal_layout: 'start',
            title: 'Highlight an\nimage banner',
            content: '',
            button_text: 'Shop this',
            text_font_color: '#FFFFFF',
            image_button_text_background: '#000000',
            image_button_text_color: '#FFFFFF',
            image_button_border_color: '#FFFFFF',
            text_content_horizontal_layout: 'center',
            text_title: 'Highlight an\nimage banner',
            text_content: '',
            text_button_text: 'Shop this',
            text_text_color: '#FFFFFF',
            text_background_color: '#2C2924',
            text_button_style: 'button--link',
            text_button_text_color: '#FFFFFF',
            text_button_border_color: '#FFFFFF',
          },
          blockId: '1744420001433f23a0d7',
        },
        '1744420001434b525250': {
          type: 'image',
          icon: 'image',
          settings: {
            image_text_layout: '100%',
            image_layout_style: 'revert',
            show_content_line: true,
            overlay_opacity: 50,
            text_mask: false,
            text_mask_color: 'deep',
            image: 'shopline://shop_images/1.png',
            image_mobile: null,
            content_vertical_layout: 'flex-end',
            content_horizontal_layout: 'start',
            title: 'Highlight an\nimage banner',
            title_font: 'Oregano:400',
            title_font_size: 'title4',
            content: '',
            button_text: 'Shop this',
            text_font_color: '#FFFFFF',
            button_style: 'button',
            image_button_text_background: '#000000',
            image_button_text_color: '#FFFFFF',
            image_button_border_color: '#FFFFFF',
            text_content_horizontal_layout: 'center',
            text_title: 'Highlight an\nimage banner',
            text_enabled_custom_font: true,
            text_title_font_size: 'title3',
            text_content: '',
            text_button_text: 'Shop this',
            text_text_color: '#FFFFFF',
            text_background_color: '#2C2924',
            text_button_style: 'button--link',
            text_button_text_color: '#FFFFFF',
            text_button_border_color: '#FFFFFF',
          },
          blockId: '1744420001434b525250',
        },
      },
      block_order: ['1744420001433f23a0d7', '1744420001434b525250'],
      custom_css: [],
    },
    '1744420056877bdb1ba2': {
      disabled: false,
      type: 'video',
      settings: {
        title: '这是一个视频',
        title_size: 'title3',
        cover: {
          url: '',
        },
        internal_video: '',
        external_video: '',
        video_auto_play: false,
        full_width: true,
        color_scheme: 'none',
        padding_top: 0,
        padding_bottom: 0,
      },
      blocks: {},
      block_order: [],
      custom_css: [],
    },
    '1744420074063e922eb8': {
      disabled: false,
      type: 'multi-media-splicing',
      settings: {
        title: '这是拼贴',
        title_size: 'title3',
        desktop_layout: 'left',
        mobile_layout: 'splicing',
        color_scheme: 'none',
        padding_top: 80,
        padding_bottom: 80,
      },
      blocks: {
        '17444200740631e4419a': {
          type: 'video',
          settings: {
            cover_image: 'shopline://shop_images/1.png',
            internal_video: '',
            external_video: '',
            video_alt: 'Describe the video',
            image_padding: 'cover',
          },
          blockId: '17444200740631e4419a',
        },
        '17444200740637a13470': {
          type: 'product',
          settings: {
            product: null,
            product_hover_show_next: false,
            image_padding: 'cover',
          },
          blockId: '17444200740637a13470',
        },
        '1744420106040f8a3549': {
          type: 'image',
          settings: {
            image: 'shopline://shop_images/color2_6947290210074102469.png',
            image_padding: 'cover',
          },
        },
      },
      block_order: ['17444200740631e4419a', '17444200740637a13470', '1744420106040f8a3549'],
      custom_css: [],
    },
  },
  order: ['1744420001433c7355e4', '1744420056877bdb1ba2', '1744420074063e922eb8'],
};

export const homeSlice = createAppSlice({
  name: 'home',
  initialState,
  reducers: (create) => ({
    // 也可以批量修改
    changeHomeState: create.reducer((state, action: PayloadAction<Partial<HomeSliceState>>) => {
      Object.assign(state, { ...action.payload });
    }),
  }),
  selectors: {},
});

export const { changeHomeState } = homeSlice.actions;
