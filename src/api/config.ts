import axios from 'axios';

import { API_BASE_URL, API_KEY } from './constants';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: { Accept: 'application/json', 'X-CoinAPI-Key': API_KEY },
});

export { axiosInstance };
