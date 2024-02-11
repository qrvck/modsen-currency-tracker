import React, { useState } from 'react';

import currencySprite from '@/assets/icons/currency-sprite.svg';

import { ConversionModal } from '../ConversionModal';
import { DECIMAL_NUMBER } from './constants';
import { Card, CardTitle, Icon, Rate, TextWrapper } from './styled';
import { IQuoteCard } from './types';

function QuoteCard({ currencyID, rate }: IQuoteCard) {
  const [openedCurrency, setOpenedCurrency] = useState<string | null>(null);

  return (
    <>
      <Card onClick={() => setOpenedCurrency(currencyID)}>
        <Icon>
          <use href={currencySprite + `#${currencyID}`} />
        </Icon>
        <TextWrapper>
          <CardTitle>{currencyID}</CardTitle>
          <Rate>R$ {rate.toFixed(DECIMAL_NUMBER)}</Rate>
        </TextWrapper>
      </Card>

      {openedCurrency && <ConversionModal currencyID={openedCurrency} onClose={() => setOpenedCurrency(null)} />}
    </>
  );
}

export { QuoteCard };
