import { createSlice } from '@reduxjs/toolkit';

import {
  IInitialState,
  ISetCurrencyTimeline,
  ISetLoadingStatusCurrencyTimeline,
  ISetSelectedCurrency,
  ISetSelectedDate,
  IUpdateTimelineData,
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
        ...state.currencies[currency],

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
        ...state.currencies[currency],

        [fromRequestDate]: {
          timelineData: [],
          updateTimestamp: 0,
          loadingStatus,
        },
      };
    },

    updateSelectedTimelineData: (state, action: IUpdateTimelineData) => {
      const { selectedCurrency, selectedDate } = state;
      const {
        selectedDateIndex,
        priceOpen: price_open,
        priceLow: price_low,
        priceHigh: price_high,
        priceClose: price_close,
      } = action.payload;

      if (selectedCurrency && selectedDate) {
        const timelineData = state.currencies[selectedCurrency]![selectedDate].timelineData[selectedDateIndex];

        timelineData.price_open = price_open;
        timelineData.price_low = price_low;
        timelineData.price_high = price_high;
        timelineData.price_close = price_close;
      }
    },
  },
});

export const {
  setCurrencyTimeline,
  setSelectedDate,
  setSelectedCurrency,
  setLoadingStatusCurrencyTimeline,
  updateSelectedTimelineData,
} = currencyTimelinesSlice.actions;
export const { reducer: currencyTimelinesReduser } = currencyTimelinesSlice;
