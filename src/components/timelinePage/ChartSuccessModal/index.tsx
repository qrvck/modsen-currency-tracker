import React from 'react';

import { Modal } from '@/components/common/Modal';

import { IChartSuccessModalProps, IChartSuccessModalState } from './types';

class ChartSuccessModal extends React.Component<IChartSuccessModalProps, IChartSuccessModalState> {
  constructor(props: IChartSuccessModalProps) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.onClose = this.onClose.bind(this);
    this.update = this.update.bind(this);
  }

  onClose() {
    this.setState({ isOpen: false });
  }

  update() {
    this.setState({ isOpen: true });
  }

  render() {
    if (this.state.isOpen) {
      return (
        <Modal onClose={this.onClose}>
          <p>The chart for the currency you selected was successfully built!</p>
          <p>
            You can also specify a different currency and date and view the available information. It&apos;s simple and
            free for everyone
          </p>
        </Modal>
      );
    } else {
      return null;
    }
  }
}

export { ChartSuccessModal };
