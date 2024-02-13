import React from 'react';
import { connect } from 'react-redux';

import { getCurrencyTimeline } from '@/api/currencyTimeline';
import { Container } from '@/components/common/Container';
import { IRootState } from '@/store';
import { setCurrencyTimeline } from '@/store/slices/currencyTimelinesSlice';
import { isRelevantData } from '@/utils';

import { Wrapper } from './styled';
import { TimelineChart } from './TimelineChart';
import { ITimelinePageProps } from './types';

const mapStateToProps = (state: IRootState) => ({
  currencyTimelines: state.currencyTimelines,
});

const mapDispatchToProps = { setCurrencyTimeline };
export const connector = connect(mapStateToProps, mapDispatchToProps);

class ChartSectionComp extends React.PureComponent<ITimelinePageProps> {
  constructor(props: ITimelinePageProps) {
    super(props);
  }

  componentDidMount() {
    this.loadTimelineForSelectedCurrency();
  }

  componentDidUpdate() {
    this.loadTimelineForSelectedCurrency();
  }

  isCachedTimelineForSelectedCurrency() {
    const { selectedCurrency, currencyTimelines } = this.props;
    return Boolean(currencyTimelines[selectedCurrency]);
  }

  isRelevantTimelineSelectedCurrency() {
    const { selectedCurrency, currencyTimelines } = this.props;
    return isRelevantData(currencyTimelines[selectedCurrency]!.updateTimestamp);
  }

  loadTimelineForSelectedCurrency() {
    const loadCurrencyTimeline = async () => {
      try {
        const response = await getCurrencyTimeline(this.props.selectedCurrency);
        this.props.setCurrencyTimeline(response);
        this.props.onEndLoading('updated');
      } catch {
        this.props.onEndLoading('error');
      }
    };

    if (!this.isCachedTimelineForSelectedCurrency() || !this.isRelevantTimelineSelectedCurrency()) {
      loadCurrencyTimeline();
    }
  }

  render() {
    return (
      <Container>
        <Wrapper>
          <TimelineChart />
        </Wrapper>
      </Container>
    );
  }
}

export const ChartSection = connector(ChartSectionComp);
