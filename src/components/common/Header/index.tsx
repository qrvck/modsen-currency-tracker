import React from 'react';

import { Container } from '../Container';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { Wrapper } from './styled';
import { Switcher } from './Switcher';

function Header() {
  return (
    <header>
      <Container>
        <Wrapper>
          <Logo />
          <Navigation />
          <Switcher />
        </Wrapper>
      </Container>
    </header>
  );
}

export { Header };
