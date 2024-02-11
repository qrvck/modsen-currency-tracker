import { PayloadAction } from '@reduxjs/toolkit';

import { IResponseData } from '@/api/convertCurrency/types';

interface IInitialState {
  [index: string]: IConvertibleCurrencies;
}

interface IConvertibleCurrencies {
  fromCurrency: string;
  toCurrency: string;
  rate: number;
  updateTimestamp: number;
}

type ISetConvertibleCurrencies = PayloadAction<IResponseData>;

export type { IInitialState, ISetConvertibleCurrencies };
