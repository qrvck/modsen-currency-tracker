import React from 'react';

import { RoutPathEnum } from '@/constants/routing';

import { BANK_CARD_LINK_TEXT, CONTACTS_LINK_TEXT, MAIN_LINK_TEXT, TIMELINE_LINK_TEXT } from './constants';
import { Link, Nav } from './styled';

function Navigation() {
  return (
    <Nav>
      <Link to={RoutPathEnum.MAIN_PAGE}>{MAIN_LINK_TEXT}</Link>
      <Link to={RoutPathEnum.TIMELINE_PAGE}>{TIMELINE_LINK_TEXT}</Link>
      <Link to={RoutPathEnum.BANK_CARD_PAGE}>{BANK_CARD_LINK_TEXT}</Link>
      <Link to={RoutPathEnum.CONTACTS_PAGE}>{CONTACTS_LINK_TEXT}</Link>
    </Nav>
  );
}

export { Navigation };
