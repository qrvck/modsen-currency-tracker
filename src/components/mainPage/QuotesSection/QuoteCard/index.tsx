import React from 'react';

import currencySprite from '@/assets/icons/currency-sprite.svg';

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
        <Rate>R$ {rate.toFixed(6)}</Rate>
      </TextWrapper>
    </Card>
  );
}

export { QuoteCard };
