import { PayloadAction } from '@reduxjs/toolkit';

import { IResponseData } from '@/api/convertCurrency/types';

interface IInitialState {
  [index: string]: IConvertedCurrency;
}

interface IConvertedCurrency {
  fromCurrency: string;
  toCurrency: string;
  rate: number;
  updateTimestamp: number;
}

type ISetConvertedCurrency = PayloadAction<IResponseData>;

export type { IInitialState, ISetConvertedCurrency };
