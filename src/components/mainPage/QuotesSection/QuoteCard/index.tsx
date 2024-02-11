import React, { useState } from 'react';

import currencySprite from '@/assets/icons/currency-sprite.svg';

import { ConversionModal } from '../ConversionModal';
import { DECIMAL_NUMBER } from './constants';
import { Card, CardTitle, Icon, Rate, TextWrapper } from './styled';
import { IQuoteCard } from './types';

function QuoteCard({ quoteID, rate }: IQuoteCard) {
  const [openedQuote, setOpenedQuote] = useState<string | null>(null);

  return (
    <>
      <Card onClick={() => setOpenedQuote(quoteID)}>
        <Icon>
          <use href={currencySprite + `#${quoteID}`} />
        </Icon>
        <TextWrapper>
          <CardTitle>{quoteID}</CardTitle>
          <Rate>R$ {rate.toFixed(DECIMAL_NUMBER)}</Rate>
        </TextWrapper>
      </Card>

      <ConversionModal quote={openedQuote} onClose={() => setOpenedQuote(null)} />
    </>
  );
}

export { QuoteCard };
