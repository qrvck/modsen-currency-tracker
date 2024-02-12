import { TIMELINE_GENERATION_DATA } from '@/constants/timeline-generation-data';
import { getRandomInteger } from '@/utils';

import { ICurrencyTimeline } from './types';

function getCurrencyTimeline(currency: string, daysPeriod: number = 30): Promise<ICurrencyTimeline> {
  return new Promise((resolve) => {
    const randomData = new Array(daysPeriod).fill('').map(() => {
      const randomInteger = getRandomInteger(0, TIMELINE_GENERATION_DATA.length - 1);
      return TIMELINE_GENERATION_DATA[randomInteger];
    });

    const currencyTimeline = {
      currency,
      data: randomData,
    };

    setTimeout(() => resolve(currencyTimeline), 1500);
  });
}

export { getCurrencyTimeline };
