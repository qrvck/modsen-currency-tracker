import React from 'react';

import { NAVIGATION_LIST } from '../constants';
import { Link, LinkWrapper, Title, Wrapper } from './styled';

function NavigationList() {
  return (
    <Wrapper>
      {NAVIGATION_LIST.map(({ title, links }) => (
        <div key={title}>
          <Title>{title}</Title>
          <LinkWrapper>
            {links.map(({ name, path }) => (
              <Link to={path} key={name}>
                {name}
              </Link>
            ))}
          </LinkWrapper>
        </div>
      ))}
    </Wrapper>
  );
}

export { NavigationList };
