import { createSlice } from '@reduxjs/toolkit';

import { IInitialState, ISetCurrentRatesAction } from './types';

const initialState: IInitialState = {
  baseCurrencyID: '',
  currencies: [],
  updateTimestamp: 0,
};

const currentRatesSlice = createSlice({
  name: 'currentRates',
  initialState,
  reducers: {
    setCurrentRates: (state, action: ISetCurrentRatesAction) => {
      const { asset_id_base, rates } = action.payload;

      state.baseCurrencyID = asset_id_base;
      state.currencies = rates.map(({ asset_id_quote, rate }) => ({ id: asset_id_quote, rate }));
      state.updateTimestamp = Date.now();
    },
  },
});

export const { setCurrentRates } = currentRatesSlice.actions;
export const { reducer: currentRatesReduser } = currentRatesSlice;
