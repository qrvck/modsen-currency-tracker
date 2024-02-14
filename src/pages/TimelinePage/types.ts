import { ConnectedProps } from 'react-redux';

import { connector } from './index';

type TimelinePageProps = ConnectedProps<typeof connector>;

export type { TimelinePageProps };
