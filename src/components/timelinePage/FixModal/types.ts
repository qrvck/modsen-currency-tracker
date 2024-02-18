import { ConnectedProps } from 'react-redux';

import { ICurrencyTimelineData } from '@/api/currencyTimeline/types';

import { connector } from './index';

type IFixModalConnectedProps = ConnectedProps<typeof connector>;

interface IFixModalProps extends IFixModalConnectedProps {
  onClose: () => void;
  timelineData: ICurrencyTimelineData[];
}

type IPossibleKeysState = 'selectedDateIndex' | 'priceClose' | 'priceHigh' | 'priceLow' | 'priceOpen';

type IFixModalState = {
  [key in IPossibleKeysState]: number;
};

export type { IFixModalProps, IFixModalState, IPossibleKeysState };
