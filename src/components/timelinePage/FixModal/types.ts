import { ICurrencyTimelineData } from '@/api/currencyTimeline/types';

interface IFixModalProps {
  onClose: () => void;
  timelineData: ICurrencyTimelineData[];
}

type IPossibleKeysState = 'selectedDateIndex' | 'priceClose' | 'priceHigh' | 'priceLow' | 'priceOpen';

type IFixModalState = {
  [key in IPossibleKeysState]: number;
};

export type { IFixModalProps, IFixModalState, IPossibleKeysState };
