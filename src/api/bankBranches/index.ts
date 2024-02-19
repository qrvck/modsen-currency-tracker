import axios from 'axios';

import { ALL_CURRENCY_IDS } from '@/constants/currency';
import { getRandomInteger } from '@/utils';

import { API_BASE_URL } from './constants';
import { IResponseData } from './types';

async function getBankBranches() {
  const response = await axios.get<IResponseData>(API_BASE_URL);

  response.data.forEach((branch) => {
    const randomCurrencyIndex = getRandomInteger(0, ALL_CURRENCY_IDS.length - 1);
    const randomCurrency = ALL_CURRENCY_IDS[randomCurrencyIndex];

    branch.availableCurrency = randomCurrency;
  });

  return response;
}

export { getBankBranches };
