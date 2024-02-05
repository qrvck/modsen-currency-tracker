import React from 'react';

import { NavigationAccordion } from './NavigationAccordion';
import { NavigationList } from './NavigationList';
import { Wrapper } from './styled';

function Navigation() {
  return (
    <Wrapper>
      <NavigationAccordion />
      <NavigationList />
    </Wrapper>
  );
}

export { Navigation };
