import React from 'react';

import { Container } from '../Container';
import { Info } from './Info';
import { Wrapper } from './styled';

function Footer() {
  return (
    <footer>
      <Container>
        <Wrapper>
          <Info />
        </Wrapper>
      </Container>
    </footer>
  );
}

export { Footer };
