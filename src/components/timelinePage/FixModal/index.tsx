import React, { ChangeEvent, Component } from 'react';
import { connect } from 'react-redux';

import { Modal } from '@/components/common/Modal';
import { IRootState } from '@/store';
import { updateSelectedTimelineData } from '@/store/slices/currencyTimelinesSlice';
import { convertTimestampToStringDate } from '@/utils';

import {
  DATE_LEGEND_TEXT,
  PRICE_CLOSE_LEGEND_TEXT,
  PRICE_HIGH_LEGEND_TEXT,
  PRICE_LOW_LEGEND_TEXT,
  PRICE_OPEN_LEGEND_TEXT,
  SAVE_BUTTON_TEXT,
  TITLE_TEXT,
} from './constants';
import { Fieldset, PriceInput, SaveButton, Title, Wrapper } from './styled';
import { IFixModalProps, IFixModalState, IPossibleKeysState } from './types';

const mapStateToProps = (state: IRootState) => ({
  currencyTimelines: state.currencyTimelines,
});

const mapDispatchToProps = {
  updateSelectedTimelineData,
};
export const connector = connect(mapStateToProps, mapDispatchToProps);

class FixModalComp extends Component<IFixModalProps, IFixModalState> {
  state = {
    selectedDateIndex: 0,
    priceClose: this.props.timelineData[0].price_close,
    priceHigh: this.props.timelineData[0].price_high,
    priceLow: this.props.timelineData[0].price_low,
    priceOpen: this.props.timelineData[0].price_open,
  };

  handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = +e.target.value;
    const timelineData = this.props.timelineData[value];

    this.setState({
      selectedDateIndex: +value,
      priceClose: timelineData.price_close,
      priceHigh: timelineData.price_high,
      priceLow: timelineData.price_low,
      priceOpen: timelineData.price_open,
    });
  };

  handleChangePriceInput = (
    e: ChangeEvent<HTMLInputElement>,
    type: 'priceClose' | 'priceHigh' | 'priceLow' | 'priceOpen' | 'selectedDateIndex'
  ) => {
    const value = +e.target.value;
    this.setState({ [type]: value } as { [index in IPossibleKeysState]: number });
  };

  isDisabledSaveButton = () => {
    const { selectedDateIndex, priceClose, priceHigh, priceLow, priceOpen } = this.state;
    const { price_close, price_high, price_low, price_open } = this.props.timelineData[selectedDateIndex];

    return priceClose === price_close && priceHigh === price_high && priceLow === price_low && priceOpen === price_open;
  };

  handleClickOnSaveButton = () => {
    this.props.updateSelectedTimelineData(this.state);
  };

  render() {
    return (
      <Modal onClose={this.props.onClose}>
        <Wrapper>
          <Title>{TITLE_TEXT}</Title>

          <Fieldset>
            <p>{DATE_LEGEND_TEXT}</p>
            <select value={this.state.selectedDateIndex} onChange={this.handleChangeSelect}>
              {this.props.timelineData.map(({ timestamp }, index) => (
                <option value={index} key={timestamp}>
                  {convertTimestampToStringDate(timestamp)}
                </option>
              ))}
            </select>
          </Fieldset>

          <Fieldset>
            <p>{PRICE_OPEN_LEGEND_TEXT}</p>
            <PriceInput
              type="number"
              value={this.state.priceOpen}
              onChange={(e) => this.handleChangePriceInput(e, 'priceOpen')}
            />
          </Fieldset>

          <Fieldset>
            <p>{PRICE_CLOSE_LEGEND_TEXT}</p>
            <PriceInput
              type="number"
              value={this.state.priceClose}
              onChange={(e) => this.handleChangePriceInput(e, 'priceClose')}
            />
          </Fieldset>

          <Fieldset>
            <p>{PRICE_HIGH_LEGEND_TEXT}</p>
            <PriceInput
              type="number"
              value={this.state.priceHigh}
              onChange={(e) => this.handleChangePriceInput(e, 'priceHigh')}
            />
          </Fieldset>

          <Fieldset>
            <p>{PRICE_LOW_LEGEND_TEXT}</p>
            <PriceInput
              type="number"
              value={this.state.priceLow}
              onChange={(e) => this.handleChangePriceInput(e, 'priceLow')}
            />
          </Fieldset>

          <SaveButton onClick={this.handleClickOnSaveButton} disabled={this.isDisabledSaveButton()}>
            {SAVE_BUTTON_TEXT}
          </SaveButton>
        </Wrapper>
      </Modal>
    );
  }
}

export const FixModal = connector(FixModalComp);
