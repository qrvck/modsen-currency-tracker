import { createSlice } from '@reduxjs/toolkit';

import { IInitialState, ISetIsDarkAction } from './types';

const initialState: IInitialState = {
  isDark: false,
};

const themeProviderSlice = createSlice({
  name: 'themeProvider',
  initialState,
  reducers: {
    setIsDark: (state, action: ISetIsDarkAction) => {
      state.isDark = action.payload;
    },
  },
});

export const { setIsDark } = themeProviderSlice.actions;
export const { reducer: themeProviderReducer } = themeProviderSlice;
