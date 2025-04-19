/**theme主题设置
 *
 *

 * **/

import type { PayloadAction } from '@reduxjs/toolkit';

import { AriseThemeStyle } from '@/types/section';

import { createAppSlice } from '../createAppSlice';

export interface ThemeSliceState {
  currentThemeStyle: AriseThemeStyle | undefined;
  config: any;
}

const initialState: ThemeSliceState = {
  currentThemeStyle: undefined,
  config: null,
};
export const themeSlice = createAppSlice({
  name: 'theme',
  initialState,
  reducers: (create) => ({
    // 也可以批量修改，就不用针对每个属性写一遍change方法。
    changeThemeState: create.reducer((state, action: PayloadAction<Partial<ThemeSliceState>>) => {
      Object.assign(state, { ...action.payload });
    }),
  }),
  selectors: {},
});

export const { changeThemeState } = themeSlice.actions;
