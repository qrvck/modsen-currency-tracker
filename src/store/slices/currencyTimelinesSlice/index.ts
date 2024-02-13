import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { IInitialState, ISetCurrencyTimeline, ISetSelectedCurrency, ISetSelectedDate } from './types';

const currencyTimelinesPersistConfig = {
  key: 'currencyTimelines',
  storage: storage,
  blacklist: ['somethingTemporary'],
};

const initialState: IInitialState = {
  selectedDate: '',
  selectedCurrency: '',
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

      state[currency] = {
        data,
        updateTimestamp: new Date().getTime(),
      };
    },
  },
});

export const { setCurrencyTimeline, setSelectedDate, setSelectedCurrency } = currencyTimelinesSlice.actions;

export const currencyTimelinesReduser = persistReducer(currencyTimelinesPersistConfig, currencyTimelinesSlice.reducer);
