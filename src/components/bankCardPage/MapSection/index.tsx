import React from 'react';

import { IBankBranch } from '@/api/bankBranches/types';
import { Container } from '@/components/common/Container';

import { Map } from './Map';

interface IMapSectionProps {
  bankBranches: IBankBranch[];
}

class MapSection extends React.Component<IMapSectionProps> {
  render() {
    return (
      <section>
        <Container>
          <Map bankBranches={this.props.bankBranches} />
        </Container>
      </section>
    );
  }
}

export { MapSection };
