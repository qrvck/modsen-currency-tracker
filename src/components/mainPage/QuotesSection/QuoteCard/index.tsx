import React from 'react';

import currencySprite from '@/assets/icons/currency-sprite.svg';

import { DECIMAL_NUMBER } from './constants';
import { Card, CardTitle, Icon, Rate, TextWrapper } from './styled';
import { IQuoteCard } from './types';

function QuoteCard({ quoteID, rate }: IQuoteCard) {
  return (
    <Card>
      <Icon>
        <use href={currencySprite + `#${quoteID}`} />
      </Icon>
      <TextWrapper>
        <CardTitle>{quoteID}</CardTitle>
        <Rate>R$ {rate.toFixed(DECIMAL_NUMBER)}</Rate>
      </TextWrapper>
    </Card>
  );
}

export { QuoteCard };
