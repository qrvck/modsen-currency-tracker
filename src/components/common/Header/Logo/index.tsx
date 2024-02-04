import React from 'react';

import logoImg from '@/assets/icons/logo.svg';
import { RoutPathEnum } from '@/constants/routing';

import { Img, Link } from './styled';

function Logo() {
  return (
    <Link to={RoutPathEnum.MAIN_PAGE}>
      <Img src={logoImg} alt="Currency Tracker" />
    </Link>
  );
}

export { Logo };
