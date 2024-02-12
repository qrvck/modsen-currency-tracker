import { ConnectedProps } from 'react-redux';

import { connector } from './index';

type TimelinePageProps = ConnectedProps<typeof connector>;

interface TimelinePageState {
  status: 'updated' | 'updating' | 'error';
  selectedCurrency: string;
}

export type { TimelinePageProps, TimelinePageState };
