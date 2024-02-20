import { createSlice } from '@reduxjs/toolkit';

import { IInitialState, ISetBankBranchesAction } from './types';

const initialState: IInitialState = {
  bankBranches: [],
  updateTimestamp: 0,
};

const bankBranchesSlice = createSlice({
  name: 'currentRates',
  initialState,
  reducers: {
    setBankBranches: (state, action: ISetBankBranchesAction) => {
      state.bankBranches = action.payload;
      state.updateTimestamp = new Date().getTime();
    },
  },
});

export const { setBankBranches } = bankBranchesSlice.actions;
export const { reducer: bankBranchesReduser } = bankBranchesSlice;
