import React from 'react';

import { Accordion } from './Accordion';
import { NAVIGATION_LIST } from './constants';
import { AccordionNavWrapper, Link, LinkWrapper, NavTitle, NavWrapper, Wrapper } from './styled';

function Navigation() {
  return (
    <Wrapper>
      <AccordionNavWrapper>
        {NAVIGATION_LIST.map(({ title, links }) => (
          <Accordion title={title} key={title}>
            {links.map(({ name, path }) => (
              <Link to={path} key={name}>
                {name}
              </Link>
            ))}
          </Accordion>
        ))}
      </AccordionNavWrapper>

      <NavWrapper>
        {NAVIGATION_LIST.map(({ title, links }) => (
          <div key={title}>
            <NavTitle>{title}</NavTitle>
            <LinkWrapper>
              {links.map(({ name, path }) => (
                <Link to={path} key={name}>
                  {name}
                </Link>
              ))}
            </LinkWrapper>
          </div>
        ))}
      </NavWrapper>
    </Wrapper>
  );
}

export { Navigation };
