import { BASE_CURRENCY_ID, QUOTE_CURRENCY_IDS } from '@/constants/currency';

const BASE_ASSET_ID = BASE_CURRENCY_ID;
const FILTERED_ASSET_IDS = QUOTE_CURRENCY_IDS.join(',');

export { BASE_ASSET_ID, FILTERED_ASSET_IDS };
