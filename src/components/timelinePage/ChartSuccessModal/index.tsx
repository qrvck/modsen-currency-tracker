import React from 'react';

import { Modal } from '@/components/common/Modal';

import { timelineChartObserver } from '../ChartSection/TimelineChart';
import { TEXT_1, TEXT_2, TITLE_TEXT } from './constants';
import { Text, Title, Wrapper } from './styled';
import { IChartSuccessModalProps, IChartSuccessModalState } from './types';

class ChartSuccessModal extends React.Component<IChartSuccessModalProps, IChartSuccessModalState> {
  state = {
    isOpen: false,
  };

  componentDidMount() {
    timelineChartObserver.subscribe('successfulCharting', this.update);
  }

  onClose = () => {
    this.setState({ isOpen: false });
  };

  update = () => {
    this.setState({ isOpen: true });
  };

  render() {
    if (this.state.isOpen) {
      return (
        <Modal onClose={this.onClose}>
          <Wrapper>
            <Title>{TITLE_TEXT}</Title>
            <Text>{TEXT_1}</Text>
            <Text>{TEXT_2}</Text>
          </Wrapper>
        </Modal>
      );
    } else {
      return null;
    }
  }
}

export { ChartSuccessModal };
