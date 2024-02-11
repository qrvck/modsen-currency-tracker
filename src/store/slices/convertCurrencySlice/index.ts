import { createSlice } from '@reduxjs/toolkit';

import { IInitialState, ISetConvertibleCurrencies } from './types';

const initialState: IInitialState = {};

const convertCurrencySlice = createSlice({
  name: 'convertCurrency',
  initialState,
  reducers: {
    setConvertibleCurrencies: (state, action: ISetConvertibleCurrencies) => {
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

export const { setConvertibleCurrencies } = convertCurrencySlice.actions;
export const { reducer: convertCurrencyReduser } = convertCurrencySlice;
