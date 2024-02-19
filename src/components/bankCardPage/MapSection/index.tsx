import React from 'react';

import { Container } from '@/components/common/Container';

import { Map } from './Map';

class MapSection extends React.Component {
  render() {
    return (
      <section>
        <Container>
          <Map />
        </Container>
      </section>
    );
  }
}

export { MapSection };
