import React from 'react';
import { connect } from 'react-redux';

import { UpdateStatus } from '@/components/common/UpdateStatus';
import { ChartSection } from '@/components/timelinePage/ChartSection';
import { ChartSuccessModal } from '@/components/timelinePage/ChartSuccessModal';
import { ControlPanel } from '@/components/timelinePage/ControlPanelSection';
import { IRootState } from '@/store';
import { setCurrencyTimeline } from '@/store/slices/currencyTimelinesSlice';

import { TimelinePageProps } from './types';

const mapStateToProps = (state: IRootState) => ({
  currencyTimelines: state.currencyTimelines,
});

const mapDispatchToProps = { setCurrencyTimeline };
export const connector = connect(mapStateToProps, mapDispatchToProps);

class TimelinePageComp extends React.Component<TimelinePageProps> {
  constructor(props: TimelinePageProps) {
    super(props);
    this.getStatusSelectedCurrency = this.getStatusSelectedCurrency.bind(this);
  }

  getUpdateTimestamp() {
    const { selectedCurrency, selectedDate, currencies } = this.props.currencyTimelines;

    if (selectedCurrency && selectedDate) {
      return currencies[selectedCurrency]![selectedDate].updateTimestamp;
    }
  }

  getStatusSelectedCurrency = () => {
    const { selectedCurrency, selectedDate, currencies } = this.props.currencyTimelines;

    if (selectedCurrency && selectedDate) {
      return currencies[selectedCurrency]![selectedDate].loadingStatus;
    } else {
      return 'updated';
    }
  };

  render() {
    return (
      <>
        <UpdateStatus status={this.getStatusSelectedCurrency()} timestamp={this.getUpdateTimestamp()} />
        <ControlPanel />
        <ChartSection />
        <ChartSuccessModal />
      </>
    );
  }
}

export const TimelinePage = connector(TimelinePageComp);
