import React from 'react';
import { connect } from 'react-redux';

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
  constructor(props: ITimelinePageProps) {
    super(props);

    this.getTitleText = this.getTitleText.bind(this);
  }

  getTitleText() {
    const { selectedCurrency, selectedDate, currencies } = this.props.currencyTimelines;

    if (selectedCurrency && selectedDate) {
      const { loadingStatus } = currencies[selectedCurrency]![selectedDate];
      if (loadingStatus === 'updated') {
        return `${TITLE_TEXT1_PART_1}${selectedCurrency}${TITLE_TEXT1_PART_2}${selectedDate}${TITLE_TEXT1_PART_3}`;
      } else if (loadingStatus === 'updating') {
        return TITLE_TEXT2;
      }
    } else {
      return TITLE_TEXT3;
    }
  }

  render() {
    return (
      <section>
        <Container>
          <Wrapper>
            <Title>{this.getTitleText()}</Title>
            <TimelineChart />
          </Wrapper>
        </Container>
      </section>
    );
  }
}

export const ChartSection = connector(ChartSectionComp);
