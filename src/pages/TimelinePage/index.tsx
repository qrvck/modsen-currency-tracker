import React from 'react';
import { connect } from 'react-redux';

import { UpdateStatus } from '@/components/common/UpdateStatus';
import { ChartSection } from '@/components/timelinePage/ChartSection';
import { ControlPanel } from '@/components/timelinePage/ControlPanelSection';
import { QUOTE_CURRENCY_IDS } from '@/constants/currency';
import { IRootState } from '@/store';
import { setCurrencyTimeline } from '@/store/slices/currencyTimelinesSlice';
import { IInitialState as ICurrencyTimelineState } from '@/store/slices/currencyTimelinesSlice/types';
import { isRelevantData } from '@/utils';

import { TimelinePageProps, TimelinePageState } from './types';

const mapStateToProps = (state: IRootState) => ({
  currencyTimelines: state.currencyTimelines,
});

const mapDispatchToProps = { setCurrencyTimeline };
export const connector = connect(mapStateToProps, mapDispatchToProps);

function getInitialStatusState(currencyTimeState: ICurrencyTimelineState, selectedCurrency: string) {
  const currency = currencyTimeState[selectedCurrency];
  if (currency) {
    return isRelevantData(currency.updateTimestamp) ? 'updated' : 'updating';
  } else {
    return 'updating';
  }
}

class TimelinePageComp extends React.Component<TimelinePageProps, TimelinePageState> {
  constructor(props: TimelinePageProps) {
    super(props);
    this.state = {
      selectedCurrency: QUOTE_CURRENCY_IDS[0],
      status: getInitialStatusState(this.props.currencyTimelines, QUOTE_CURRENCY_IDS[0]),
    };

    this.handleEndChartSectionLoading = this.handleEndChartSectionLoading.bind(this);
  }

  getUpdateTimestamp() {
    const { selectedCurrency } = this.state;
    const { currencyTimelines } = this.props;
    return currencyTimelines[selectedCurrency]?.updateTimestamp || 0;
  }

  handleEndChartSectionLoading(value: 'updated' | 'error') {
    this.setState({ status: value });
  }

  render() {
    return (
      <>
        <UpdateStatus status={this.state.status} timestamp={this.getUpdateTimestamp()} />
        <ControlPanel />
        <ChartSection selectedCurrency={this.state.selectedCurrency} onEndLoading={this.handleEndChartSectionLoading} />
      </>
    );
  }
}

export const TimelinePage = connector(TimelinePageComp);
