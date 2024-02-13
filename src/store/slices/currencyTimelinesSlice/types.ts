import { PayloadAction } from '@reduxjs/toolkit';

import { ICurrencyTimelineData } from '@/api/currencyTimeline/types';

interface IInitialState {
  selectedDate: string;
  selectedCurrency: string;

  currencies: {
    // this key - currency. for example: 'USDT', 'EUR'
    [index: string]: {
      // this key - from request date. for example: get data from '2023-03-01' plus 30days
      [index: string]: {
        timelineData: ICurrencyTimelineData[];
        updateTimestamp: number;
        loadingStatus: 'updating' | 'updated' | 'error';
      };
    };
  };
}

type ISetCurrencyTimeline = PayloadAction<{
  currency: string;
  fromRequestDate: string;
  timelineData: ICurrencyTimelineData[];
}>;

type ISetLoadingStatusCurrencyTimeline = PayloadAction<{
  currency: string;
  fromRequestDate: string;
  loadingStatus: 'updating' | 'updated' | 'error';
}>;

type ISetSelectedDate = PayloadAction<string>;
type ISetSelectedCurrency = PayloadAction<string>;

export type {
  IInitialState,
  ISetCurrencyTimeline,
  ISetLoadingStatusCurrencyTimeline,
  ISetSelectedCurrency,
  ISetSelectedDate,
};
