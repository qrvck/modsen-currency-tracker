import { IRate } from '@/types/currentRates.types';

interface IQuotesSection {
  rates: IRate[];
  status: 'updated' | 'updating' | 'error';
}

export type { IQuotesSection };
