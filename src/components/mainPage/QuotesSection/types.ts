import { ICurrency } from '@/store/slices/currentRatesSlice/types';

interface IQuotesSection {
  currencies: ICurrency[];
  status: 'updated' | 'updating' | 'error';
}

export type { IQuotesSection };
