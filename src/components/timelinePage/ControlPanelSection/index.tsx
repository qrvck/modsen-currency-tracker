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

import { FixModal } from '../FixModal';
import {
  APPLY_BUTTON_TEXT,
  CURRENCY_SELECT_HINT,
  CURRENCY_SELECT_TITLE,
  DATE_INPUT_HINT,
  DATE_INPUT_TITLE,
} from './constants';
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
      isOpenFixModal: false,
    };

    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeCurrency = this.handleChangeCurrency.bind(this);
    this.isDisableApplyButton = this.isDisableApplyButton.bind(this);
    this.handleClickOnApplyButton = this.handleClickOnApplyButton.bind(this);
  }

  handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ date: e.target.value });
  };

  handleChangeCurrency = (e: ChangeEvent<HTMLSelectElement>) => {
    this.setState({ currency: e.target.value });
  };

  isDisableApplyButton = () => {
    const { date, currency } = this.state;
    const { selectedCurrency, selectedDate } = this.props.currencyTimelines;
    return !date || !currency || (selectedCurrency === currency && selectedDate === date);
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

  render() {
    return (
      <>
        <section>
          <Container>
            <Wrapper>
              <div>
                <p>{DATE_INPUT_TITLE}</p>
                <input type="date" value={this.state.date} max={getMaxDate()} onChange={this.handleChangeDate} />
                <Hint>{DATE_INPUT_HINT}</Hint>
              </div>

              <div>
                <p>{CURRENCY_SELECT_TITLE}</p>
                <Select value={this.state.currency} onChange={this.handleChangeCurrency}>
                  <option value=""></option>
                  {QUOTE_CURRENCY_IDS.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </Select>
                <Hint>{CURRENCY_SELECT_HINT}</Hint>
              </div>

              <button disabled={this.isDisableApplyButton()} onClick={this.handleClickOnApplyButton}>
                {APPLY_BUTTON_TEXT}
              </button>
              <button onClick={this.handleClickOnFixButton} disabled={this.isDisabledFixButton()}>
                FIX
              </button>
            </Wrapper>
          </Container>
        </section>

        {this.state.isOpenFixModal && <FixModal onClose={this.handleCloseFixModal} />}
      </>
    );
  }
}

export const ControlPanel = connector(ControlPanelComp);
