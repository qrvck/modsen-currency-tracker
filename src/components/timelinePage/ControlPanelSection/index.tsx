import React, { ChangeEvent } from 'react';
import { connect } from 'react-redux';

import { getCurrencyTimeline } from '@/api/currencyTimeline';
import { Container } from '@/components/common/Container';
import { QUOTE_CURRENCY_IDS } from '@/constants/currency';
import { IRootState } from '@/store';
import {
  setCurrencyTimeline,
  setLoadingStatusCurrencyTimeline,
  setSelectedCurrency,
  setSelectedDate,
} from '@/store/slices/currencyTimelinesSlice';
import { convertTimestampToStringDate } from '@/utils';

import { FixModal } from '../FixModal';
import {
  APPLY_BUTTON_TEXT,
  CURRENCY_SELECT_HINT,
  CURRENCY_SELECT_TITLE,
  DATE_INPUT_HINT,
  DATE_INPUT_TITLE,
} from './constants';
import { Button, Hint, Select, Wrapper } from './styled';
import { ControlPanelProps, ControlPanelState } from './types';

const mapStateToProps = (state: IRootState) => ({
  currencyTimelines: state.currencyTimelines,
});

const mapDispatchToProps = {
  setCurrencyTimeline,
  setSelectedDate,
  setSelectedCurrency,
  setLoadingStatusCurrencyTimeline,
};
export const connector = connect(mapStateToProps, mapDispatchToProps);

const getMaxDate = () => {
  const millisecondsIn29Days = 2505600000;
  const timestamp29DaysAgo = Date.now() - millisecondsIn29Days;
  return convertTimestampToStringDate(timestamp29DaysAgo);
};

class ControlPanelComp extends React.Component<ControlPanelProps, ControlPanelState> {
  state = {
    date: this.props.currencyTimelines.selectedDate,
    currency: this.props.currencyTimelines.selectedCurrency,
    isOpenFixModal: false,
  };

  handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ date: e.target.value });
  };

  handleChangeCurrency = (e: ChangeEvent<HTMLSelectElement>) => {
    this.setState({ currency: e.target.value });
  };

  isDisableApplyButton = () => {
    const { date, currency } = this.state;
    const { selectedCurrency, selectedDate } = this.props.currencyTimelines;

    const isEmptyState = !date || !currency;
    const isUpdatedStore = selectedCurrency === currency && selectedDate === date;
    const isInvalidDate = this.isInvalidDate();

    return isEmptyState || isUpdatedStore || isInvalidDate;
  };

  isInvalidDate = () => {
    const { date } = this.state;
    return new Date(date) > new Date(getMaxDate());
  };

  handleClickOnApplyButton = () => {
    const { setSelectedCurrency, setSelectedDate, currencyTimelines } = this.props;
    const { currency, date } = this.state;
    setSelectedCurrency(currency);
    setSelectedDate(date);

    if (!currencyTimelines.currencies?.[currency]?.[date]) {
      this.loadCurrencyTimeline();
    }
  };

  loadCurrencyTimeline = async () => {
    const { currency, date } = this.state;
    const { setLoadingStatusCurrencyTimeline, setCurrencyTimeline } = this.props;

    try {
      const timestamp = new Date(date).getTime();
      setLoadingStatusCurrencyTimeline({ currency, fromRequestDate: date, loadingStatus: 'updating' });
      const response = await getCurrencyTimeline(currency, timestamp);
      setCurrencyTimeline({ currency, fromRequestDate: date, timelineData: response.data });
    } catch {
      setLoadingStatusCurrencyTimeline({ currency, fromRequestDate: date, loadingStatus: 'error' });
    }
  };

  handleCloseFixModal = () => {
    this.setState({ isOpenFixModal: false });
  };

  isDisabledFixButton = () => {
    const { selectedCurrency, selectedDate, currencies } = this.props.currencyTimelines;

    return currencies[selectedCurrency]?.[selectedDate].loadingStatus !== 'updated';
  };

  handleClickOnFixButton = () => {
    this.setState({ isOpenFixModal: true });
  };

  getTimelineDataForFixModal = () => {
    const { selectedCurrency, selectedDate, currencies } = this.props.currencyTimelines;
    const currencyData = currencies[selectedCurrency]?.[selectedDate];

    if (currencyData && currencyData.loadingStatus === 'updated') {
      return currencyData.timelineData;
    }

    return [];
  };

  render() {
    return (
      <>
        <section>
          <Container>
            <Wrapper>
              <div>
                <p>{DATE_INPUT_TITLE}</p>
                <input
                  type="date"
                  value={this.state.date}
                  max={getMaxDate()}
                  onChange={this.handleChangeDate}
                  data-testid="date-input"
                />
                <Hint $isError={this.isInvalidDate()}>{DATE_INPUT_HINT}</Hint>
              </div>

              <div>
                <p>{CURRENCY_SELECT_TITLE}</p>
                <Select value={this.state.currency} onChange={this.handleChangeCurrency} data-testid="currency-select">
                  <option value=""></option>
                  {QUOTE_CURRENCY_IDS.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </Select>
                <Hint>{CURRENCY_SELECT_HINT}</Hint>
              </div>

              <Button
                disabled={this.isDisableApplyButton()}
                onClick={this.handleClickOnApplyButton}
                data-testid="apply-button"
              >
                {APPLY_BUTTON_TEXT}
              </Button>
              <Button onClick={this.handleClickOnFixButton} disabled={this.isDisabledFixButton()}>
                FIX
              </Button>
            </Wrapper>
          </Container>
        </section>

        {this.state.isOpenFixModal && (
          <FixModal onClose={this.handleCloseFixModal} timelineData={this.getTimelineDataForFixModal()} />
        )}
      </>
    );
  }
}

export const ControlPanel = connector(ControlPanelComp);
