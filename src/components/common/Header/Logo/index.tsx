import React from 'react';

import logoImg from '@/assets/icons/logo.svg';
import { MAIN_PAGE_PATH } from '@/constants/routing';

import { Img, Link } from './styled';

function Logo() {
  return (
    <Link to={MAIN_PAGE_PATH}>
      <Img src={logoImg} alt="Currency Tracker" />
    </Link>
  );
}

export { Logo };
