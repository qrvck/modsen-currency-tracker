import { createSlice } from '@reduxjs/toolkit';

import { IInitialState, ISetCurrentRatesAction } from './types';

const initialState: IInitialState = {
  asset_id_base: '',
  rates: [],
  updateTimestamp: 0,
};

const currentRatesSlice = createSlice({
  name: 'currentRates',
  initialState,
  reducers: {
    setCurrentRates: (state, action: ISetCurrentRatesAction) => {
      const { asset_id_base, rates } = action.payload;

      state.asset_id_base = asset_id_base;
      state.rates = rates;
      state.updateTimestamp = Date.now();
    },
  },
});

export const { setCurrentRates } = currentRatesSlice.actions;
export const { reducer: currentRatesReduser } = currentRatesSlice;
