import { ConnectedProps } from 'react-redux';

import { connector } from './index';

type ConnectedTimelinePageProps = ConnectedProps<typeof connector>;

interface ITimelinePageProps extends ConnectedTimelinePageProps {
  selectedCurrency: string;
  onEndLoading: (value: 'updated' | 'error') => void;
}

export type { ITimelinePageProps };
