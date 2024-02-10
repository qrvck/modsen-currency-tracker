import { PayloadAction } from '@reduxjs/toolkit';

import { ICurrentRates } from '@/types/currentRates.types';

type IInitialState = ICurrentRates;

type ISetCurrentRatesAction = PayloadAction<ICurrentRates>;

export type { IInitialState, ISetCurrentRatesAction };
