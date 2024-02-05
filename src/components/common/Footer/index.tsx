import React from 'react';

import { Container } from '../Container';
import { Copyright } from './Copyright';
import { Info } from './Info';
import { Navigation } from './Navigation';
import { Wrapper } from './styled';

function Footer() {
  return (
    <footer>
      <Container>
        <Wrapper>
          <Info />
          <Navigation />
          <Copyright />
        </Wrapper>
      </Container>
    </footer>
  );
}

export { Footer };
