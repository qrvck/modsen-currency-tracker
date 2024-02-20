import React from 'react';
import { connect } from 'react-redux';

import { ICurrencyTimelineData } from '@/api/currencyTimeline/types';
import { Container } from '@/components/common/Container';
import { IRootState } from '@/store';
import { setCurrencyTimeline } from '@/store/slices/currencyTimelinesSlice';

import { TITLE_TEXT1_PART_1, TITLE_TEXT1_PART_2, TITLE_TEXT1_PART_3, TITLE_TEXT2, TITLE_TEXT3 } from './constants';
import { Title, Wrapper } from './styled';
import { TimelineChart } from './TimelineChart';
import { ITimelinePageProps } from './types';

const mapStateToProps = (state: IRootState) => ({
  currencyTimelines: state.currencyTimelines,
});

const mapDispatchToProps = { setCurrencyTimeline };
export const connector = connect(mapStateToProps, mapDispatchToProps);

class ChartSectionComp extends React.PureComponent<ITimelinePageProps> {
  getTitleText = () => {
    const { selectedCurrency, selectedDate, currencies } = this.props.currencyTimelines;
    const loadingStatus = currencies[selectedCurrency]?.[selectedDate].loadingStatus;
    const date = selectedDate.split('-').reverse().join('-');

    if (loadingStatus === 'updated') {
      return `${TITLE_TEXT1_PART_1}${selectedCurrency}${TITLE_TEXT1_PART_2}${date}${TITLE_TEXT1_PART_3}`;
    } else if (loadingStatus === 'updating') {
      return TITLE_TEXT2;
    } else {
      return TITLE_TEXT3;
    }
  };

  getTimelineDataForDisplaying = () => {
    const { selectedCurrency, selectedDate, currencies } = this.props.currencyTimelines;
    const loadingStatus = currencies[selectedCurrency]?.[selectedDate].loadingStatus;

    if (loadingStatus === 'updated') {
      return this.convertTimelineDataForTimelineChart(currencies[selectedCurrency]![selectedDate].timelineData);
    } else {
      return [];
    }
  };

  convertTimelineDataForTimelineChart = (data: ICurrencyTimelineData[]) => {
    return data.map(({ timestamp, price_open, price_high, price_low, price_close }) => {
      return {
        x: timestamp,
        o: price_open,
        h: price_high,
        l: price_low,
        c: price_close,
      };
    });
  };

  render() {
    return (
      <section>
        <Container>
          <Wrapper>
            <Title>{this.getTitleText()}</Title>
            <TimelineChart timelineData={this.getTimelineDataForDisplaying()} />
          </Wrapper>
        </Container>
      </section>
    );
  }
}

export const ChartSection = connector(ChartSectionComp);
