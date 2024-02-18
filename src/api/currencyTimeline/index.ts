import { getRandomInteger } from '@/utils';

import { TIMELINE_GENERATION_DATA } from './constants';
import { ICurrencyTimeline } from './types';

function getCurrencyTimeline(currency: string, fromDate: number, daysPeriod: number = 30): Promise<ICurrencyTimeline> {
  return new Promise((resolve) => {
    const randomData = new Array(daysPeriod).fill('').map((_, index) => {
      const millisecondsIn1Day = 86400000;
      const randomInteger = getRandomInteger(0, TIMELINE_GENERATION_DATA.length - 1);
      const randomData = { ...TIMELINE_GENERATION_DATA[randomInteger] };
      randomData.timestamp = fromDate + millisecondsIn1Day * index;

      return randomData;
    });

    const currencyTimeline = {
      currency,
      data: randomData,
    };

    setTimeout(() => resolve(currencyTimeline), 1500);
  });
}

export { getCurrencyTimeline };
