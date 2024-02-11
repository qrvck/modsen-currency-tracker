import React, { useMemo } from 'react';

import { Container } from '@/components/common/Container';

import { PLACEHOLDER_CARD_NUMBER } from './constants';
import { PlaceholderCard } from './PlaceholderCard';
import { QuoteCard } from './QuoteCard';
import { QuotesList, Title, Wrapper } from './styled';
import { IQuotesSection } from './types';

function QuotesSection({ currencies, status }: IQuotesSection) {
  const placeholderCardList = useMemo(
    () =>
      new Array(PLACEHOLDER_CARD_NUMBER)
        .fill('')
        .map((_, index) => <PlaceholderCard key={index} isAnimated={status === 'updating'} />),
    [status]
  );

  return (
    <section>
      <Container>
        <Wrapper>
          <Title>Quotes</Title>
          <QuotesList>
            {status === 'updated'
              ? currencies.map(({ id, rate }) => <QuoteCard currencyID={id} rate={rate} key={id} />)
              : placeholderCardList}
          </QuotesList>
        </Wrapper>
      </Container>
    </section>
  );
}

export { QuotesSection };
