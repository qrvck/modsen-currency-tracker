import { PayloadAction } from '@reduxjs/toolkit';

import { ICurrencyTimeline, ICurrencyTimelineData } from '@/api/currencyTimeline/types';

interface IInitialState {
  selectedDate: string;
  selectedCurrency: string;

  [index: string]:
    | {
        data: ICurrencyTimelineData[];
        updateTimestamp: number;
      }
    | undefined
    | string;
}

type ISetCurrencyTimeline = PayloadAction<ICurrencyTimeline>;
type ISetSelectedDate = PayloadAction<string>;
type ISetSelectedCurrency = PayloadAction<string>;

export type { IInitialState, ISetCurrencyTimeline, ISetSelectedCurrency, ISetSelectedDate };
