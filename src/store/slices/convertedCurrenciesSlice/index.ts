import { createSlice } from '@reduxjs/toolkit';

import { IInitialState, ISetConvertedCurrency } from './types';

const initialState: IInitialState = {};

const convertCurrencySlice = createSlice({
  name: 'convertedCurrencies',
  initialState,
  reducers: {
    setConvertedCurrency: (state, action: ISetConvertedCurrency) => {
      const { asset_id_base, asset_id_quote, rate } = action.payload;

      state[`${asset_id_base}-${asset_id_quote}`] = {
        fromCurrency: asset_id_base,
        toCurrency: asset_id_quote,
        rate,
        updateTimestamp: Date.now(),
      };
    },
  },
});

export const { setConvertedCurrency } = convertCurrencySlice.actions;
export const { reducer: convertedCurrenciesReduser } = convertCurrencySlice;
