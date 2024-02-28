import axios from 'axios';

import { API_BASE_URL } from './constants';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: { Accept: 'application/json', 'X-CoinAPI-Key': process.env.CURRENCY_API_TOKEN },
});

export { axiosInstance };
