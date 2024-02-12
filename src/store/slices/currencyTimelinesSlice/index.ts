import { createSlice } from '@reduxjs/toolkit';

import { IInitialState, ISetCurrencyTimeline } from './types';

const initialState: IInitialState = {};

const currencyTimelinesSlice = createSlice({
  name: 'currencyTimelines',
  initialState,
  reducers: {
    setCurrencyTimeline: (state, action: ISetCurrencyTimeline) => {
      const { currency, data } = action.payload;

      state[currency] = {
        data,
        updateTimestamp: new Date().getTime(),
      };
    },
  },
});

export const { setCurrencyTimeline } = currencyTimelinesSlice.actions;
export const { reducer: currencyTimelinesReduser } = currencyTimelinesSlice;
