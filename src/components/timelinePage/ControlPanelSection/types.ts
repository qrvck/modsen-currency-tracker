import { ConnectedProps } from 'react-redux';

import { connector } from './index';

type ControlPanelProps = ConnectedProps<typeof connector>;

interface ControlPanelState {
  date: string;
  currency: string;
  isOpenFixModal: boolean;
}

export type { ControlPanelProps, ControlPanelState };
