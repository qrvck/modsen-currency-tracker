import { PayloadAction } from '@reduxjs/toolkit';

import { IResponseData } from '@/api/currentRates/types';

interface IInitialState {
  baseCurrencyID: string;
  currencies: ICurrency[];
  updateTimestamp: number;
}

interface ICurrency {
  id: string;
  rate: number;
}

type ISetCurrentRatesAction = PayloadAction<IResponseData>;

export type { ICurrency, IInitialState, ISetCurrentRatesAction };
