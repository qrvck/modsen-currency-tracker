import { ConnectedProps } from 'react-redux';

import { connector } from './index';

type ITimelinePageProps = ConnectedProps<typeof connector>;

export type { ITimelinePageProps };
