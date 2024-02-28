import React from 'react';

import { BANK_CARD_PAGE_PATH, CONTACTS_PAGE_PATH, MAIN_PAGE_PATH, TIMELINE_PAGE_PATH } from '@/constants/routing';

import { BANK_CARD_LINK_TEXT, CONTACTS_LINK_TEXT, MAIN_LINK_TEXT, TIMELINE_LINK_TEXT } from './constants';
import { Link, Nav } from './styled';

function Navigation() {
  return (
    <Nav>
      <Link to={MAIN_PAGE_PATH}>{MAIN_LINK_TEXT}</Link>
      <Link to={TIMELINE_PAGE_PATH}>{TIMELINE_LINK_TEXT}</Link>
      <Link to={BANK_CARD_PAGE_PATH}>{BANK_CARD_LINK_TEXT}</Link>
      <Link to={CONTACTS_PAGE_PATH}>{CONTACTS_LINK_TEXT}</Link>
    </Nav>
  );
}

export { Navigation };
