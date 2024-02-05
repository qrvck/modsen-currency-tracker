import React from 'react';

import { NAVIGATION_LIST } from '../constants';
import { Accordion } from './Accordion';
import { Link, Title, Wrapper } from './styled';

function NavigationAccordion() {
  return (
    <Wrapper>
      {NAVIGATION_LIST.map(({ title, links }) => (
        <Accordion
          title={<Title>{title}</Title>}
          dropDownContent={links.map(({ name, path }) => (
            <Link to={path} key={name}>
              {name}
            </Link>
          ))}
          key={title}
        />
      ))}
    </Wrapper>
  );
}

export { NavigationAccordion };
