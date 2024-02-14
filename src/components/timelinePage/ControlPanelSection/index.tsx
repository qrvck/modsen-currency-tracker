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

import { Hint, Select, Wrapper } from './styled';
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
  const date29DaysAgo = new Date(Date.now() - millisecondsIn29Days);
  const fullYear = date29DaysAgo.getFullYear();
  const fullMonth = date29DaysAgo.getMonth() < 10 ? `0${date29DaysAgo.getMonth() + 1}` : date29DaysAgo.getMonth() + 1;
  const fullDate = date29DaysAgo.getDate() < 10 ? `0${date29DaysAgo.getDate()}` : date29DaysAgo.getDate();

  return `${fullYear}-${fullMonth}-${fullDate}`;
};

class ControlPanelComp extends React.Component<ControlPanelProps, ControlPanelState> {
  constructor(props: ControlPanelProps) {
    super(props);
    this.state = {
      date: this.props.currencyTimelines.selectedDate,
      currency: this.props.currencyTimelines.selectedCurrency,
    };

    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeCurrency = this.handleChangeCurrency.bind(this);
    this.isDisableApplyButton = this.isDisableApplyButton.bind(this);
    this.handleClickOnApplyButton = this.handleClickOnApplyButton.bind(this);
    this.loadCurrencyTimeline = this.loadCurrencyTimeline.bind(this);
  }

  handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ date: e.target.value });
  };

  handleChangeCurrency = (e: ChangeEvent<HTMLSelectElement>) => {
    this.setState({ currency: e.target.value });
  };

  isDisableApplyButton = () => {
    const { date, currency } = this.state;
    return !date || !currency;
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
      setLoadingStatusCurrencyTimeline({ currency, fromRequestDate: date, loadingStatus: 'updating' });
      const response = await getCurrencyTimeline(currency);
      setCurrencyTimeline({ currency, fromRequestDate: date, timelineData: response.data });
    } catch {
      setLoadingStatusCurrencyTimeline({ currency, fromRequestDate: date, loadingStatus: 'error' });
    }
  };

  render() {
    return (
      <section>
        <Container>
          <Wrapper>
            <div>
              <p>select date:</p>
              <input type="date" value={this.state.date} max={getMaxDate()} onChange={this.handleChangeDate} />
              <Hint>started min 30 days ago</Hint>
            </div>

            <div>
              <p>currency:</p>
              <Select value={this.state.currency} onChange={this.handleChangeCurrency}>
                <option value=""></option>
                {QUOTE_CURRENCY_IDS.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </Select>
              <Hint>select one</Hint>
            </div>

            <button disabled={this.isDisableApplyButton()} onClick={this.handleClickOnApplyButton}>
              APPLY
            </button>
          </Wrapper>
        </Container>
      </section>
    );
  }
}

export const ControlPanel = connector(ControlPanelComp);
