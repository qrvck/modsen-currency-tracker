import { axiosInstance } from '../config';
import { BASE_ASSET_ID, FILTERED_ASSET_IDS } from '../constants';
import { IResponseData } from './types';

async function getCurrentRates() {
  return axiosInstance.get<IResponseData>(
    `exchangerate/${BASE_ASSET_ID}?invert=true&filter_asset_id=${FILTERED_ASSET_IDS}`
  );
}

export { getCurrentRates };
