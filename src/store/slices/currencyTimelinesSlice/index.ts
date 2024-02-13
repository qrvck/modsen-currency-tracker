import { createSlice } from '@reduxjs/toolkit';

import {
  IInitialState,
  ISetCurrencyTimeline,
  ISetLoadingStatusCurrencyTimeline,
  ISetSelectedCurrency,
  ISetSelectedDate,
} from './types';

const initialState: IInitialState = {
  selectedDate: '',
  selectedCurrency: '',
  currencies: {},
};

const currencyTimelinesSlice = createSlice({
  name: 'currencyTimelines',
  initialState,
  reducers: {
    setSelectedDate: (state, action: ISetSelectedDate) => {
      state.selectedDate = action.payload;
    },

    setSelectedCurrency: (state, action: ISetSelectedCurrency) => {
      state.selectedCurrency = action.payload;
    },

    setCurrencyTimeline: (state, action: ISetCurrencyTimeline) => {
      const { currency, fromRequestDate, timelineData } = action.payload;

      state.currencies[currency] = {
        [fromRequestDate]: {
          timelineData,
          updateTimestamp: Date.now(),
          loadingStatus: 'updated',
        },
      };
    },

    setLoadingStatusCurrencyTimeline: (state, action: ISetLoadingStatusCurrencyTimeline) => {
      const { currency, loadingStatus, fromRequestDate } = action.payload;

      state.currencies[currency] = {
        [fromRequestDate]: {
          timelineData: [],
          updateTimestamp: 0,
          loadingStatus,
        },
      };
    },
  },
});

export const { setCurrencyTimeline, setSelectedDate, setSelectedCurrency } = currencyTimelinesSlice.actions;
export const { reducer: currencyTimelinesReduser } = currencyTimelinesSlice;
