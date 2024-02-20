import React from 'react';

import { IBankBranch } from '@/api/bankBranches/types';
import { Container } from '@/components/common/Container';
import { ALL_CURRENCY_IDS } from '@/constants/currency';

import { Section } from '../styled';
import { Map } from './Map';
import { Search } from './Search';

interface IMapSectionProps {
  bankBranches: IBankBranch[];
}

class MapSection extends React.Component<IMapSectionProps> {
  state = {
    searchTips: [...ALL_CURRENCY_IDS],
  };

  handleOnChangeSearch = (searchTips: string[]) => {
    this.setState({ searchTips });
  };

  getCurrentBankBranches = () => {
    console.log(this.state.searchTips);
    return this.props.bankBranches.filter(({ availableCurrency }) => this.state.searchTips.includes(availableCurrency));
  };

  render() {
    return (
      <Section>
        <Container>
          <Search onChange={this.handleOnChangeSearch} />
          <Map bankBranches={this.getCurrentBankBranches()} />
        </Container>
      </Section>
    );
  }
}

export { MapSection };
