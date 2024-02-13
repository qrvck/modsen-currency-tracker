import { createSlice } from '@reduxjs/toolkit';

import { IInitialState, ISetCurrencyTimeline, ISetSelectedCurrency, ISetSelectedDate } from './types';

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
      const { currency, data } = action.payload;

      state.currencies[currency] = {
        // ! заменить на правильный ключ
        hereWillLBeDate: {
          timelineData: data,
          updateTimestamp: Date.now(),
        },
      };
    },
  },
});

export const { setCurrencyTimeline, setSelectedDate, setSelectedCurrency } = currencyTimelinesSlice.actions;
export const { reducer: currencyTimelinesReduser } = currencyTimelinesSlice;
