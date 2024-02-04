import React from 'react';

import logo from '@/assets/icons/logo.svg';

import { INFO_TEXT, LOGO_TEXT } from './constants';
import { InfoText, Logo, LogoImg, LogoText } from './styled';

function Info() {
  return (
    <div>
      <Logo>
        <LogoImg src={logo} alt="Currency Tracker" />
        <LogoText>{LOGO_TEXT}</LogoText>
      </Logo>
      <InfoText>{INFO_TEXT}</InfoText>
    </div>
  );
}

export { Info };
