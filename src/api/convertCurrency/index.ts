import { axiosInstance } from '../config';
import { IResponseData } from './types';

async function convertCurrency(from: string, to: string) {
  return axiosInstance.get<IResponseData>(`exchangerate/${from}/${to}`);
}

export { convertCurrency };
