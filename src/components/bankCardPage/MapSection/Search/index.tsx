import React, { ChangeEvent } from 'react';

import sprite from '@/assets/icons/sprite.svg';
import { ALL_CURRENCY_IDS } from '@/constants/currency';

import { InputWrapper, SearchInput, Svg, TipItem, TipList, Wrapper } from './styled';
import { ISearchProps } from './types';

class Search extends React.Component<ISearchProps> {
  state = {
    isOpenSearchTips: false,
    searchTips: [...ALL_CURRENCY_IDS],
    searchValue: '',
  };

  inputWrapperRef = React.createRef<HTMLDivElement>();

  handleChangeSeachInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    this.setState({ searchValue: value, isOpenSearchTips: Boolean(value) });
    this.setNewTips(value);
  };

  handleClickOnTipItem = (tip: string) => {
    this.setState({ searchValue: tip, isOpenSearchTips: false });
    this.setNewTips(tip);
  };

  setNewTips = (newValue: string) => {
    const currentSearchTips = ALL_CURRENCY_IDS.filter((currency) => currency.includes(newValue.toUpperCase()));
    this.setState({ searchTips: currentSearchTips });
    this.props.onChange(currentSearchTips);
  };

  handleFocusOnSearchInput = () => {
    this.setState({ isOpenSearchTips: true });
  };

  handleOnBlurSearchInput = () => {
    this.setState({ isOpenSearchTips: false });
  };

  render() {
    return (
      <Wrapper>
        <p>Search currency in the bank</p>
        <InputWrapper ref={this.inputWrapperRef}>
          <SearchInput
            value={this.state.searchValue}
            onChange={this.handleChangeSeachInput}
            onFocus={this.handleFocusOnSearchInput}
            onBlur={this.handleOnBlurSearchInput}
          />
          <Svg>
            <use href={sprite + '#search'} />
          </Svg>

          {this.state.isOpenSearchTips && (
            <TipList>
              {this.state.searchTips.map((tip) => (
                <TipItem
                  key={tip}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => this.handleClickOnTipItem(tip)}
                >
                  {tip}
                </TipItem>
              ))}
            </TipList>
          )}
        </InputWrapper>
      </Wrapper>
    );
  }
}

export { Search };
