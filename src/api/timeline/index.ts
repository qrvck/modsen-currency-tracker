import { TIMELINE_GENERATION_DATA } from '@/constants/timeline-generation-data';
import { getRandomInteger } from '@/utils';

import { IDayTimeline } from './types';

function getCurrencyTimeline(currency: string, daysPeriod: number = 30): Promise<IDayTimeline[]> {
  return new Promise((resolve) => {
    const randomTimeline = new Array(daysPeriod).fill('').map(() => {
      const randomInteger = getRandomInteger(0, TIMELINE_GENERATION_DATA.length - 1);
      return TIMELINE_GENERATION_DATA[randomInteger];
    });

    setTimeout(() => resolve(randomTimeline), 1500);
  });
}

export { getCurrencyTimeline };
