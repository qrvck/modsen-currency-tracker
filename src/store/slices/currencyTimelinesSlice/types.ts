import { PayloadAction } from '@reduxjs/toolkit';

import { ICurrencyTimeline, ICurrencyTimelineData } from '@/api/currencyTimeline/types';

interface IInitialState {
  [index: string]: {
    data: ICurrencyTimelineData[];
    updateTimestamp: number;
  };
}

type ISetCurrencyTimeline = PayloadAction<ICurrencyTimeline>;

export type { IInitialState, ISetCurrencyTimeline };
