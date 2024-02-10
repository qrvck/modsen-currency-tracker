import { PayloadAction } from '@reduxjs/toolkit';

import { ICurrentRates } from '@/types/currentRates.types';

interface IInitialState extends ICurrentRates {
  updateTimestamp: number;
}

type ISetCurrentRatesAction = PayloadAction<ICurrentRates>;

export type { IInitialState, ISetCurrentRatesAction };
