import { PayloadAction } from '@reduxjs/toolkit';

import { ICurrencyTimeline, ICurrencyTimelineData } from '@/api/currencyTimeline/types';

interface IInitialState {
  selectedDate: string;
  selectedCurrency: string;

  currencies: {
    // this key - currency. for example 'USDT', 'EUR'
    [index: string]: {
      // this key - from request date. for example: get data from '2023-03-01' plus 30days
      [index: string]: {
        timelineData: ICurrencyTimelineData[];
        updateTimestamp: number;
      };
    };
  };
}

type ISetCurrencyTimeline = PayloadAction<ICurrencyTimeline>;
type ISetSelectedDate = PayloadAction<string>;
type ISetSelectedCurrency = PayloadAction<string>;

export type { IInitialState, ISetCurrencyTimeline, ISetSelectedCurrency, ISetSelectedDate };
