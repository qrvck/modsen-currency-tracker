import React from 'react';

import { Container } from '@/components/common/Container';

import { QuoteCard } from './QuoteCard';
import { QuotesList, Title, Wrapper } from './styled';
import { IQuotesSection } from './types';

function QuotesSection({ rates }: IQuotesSection) {
  return (
    <section>
      <Container>
        <Wrapper>
          <Title>Quotes</Title>
          <QuotesList>
            {rates.map(({ asset_id_quote, rate }) => (
              <QuoteCard quoteID={asset_id_quote} rate={rate} key={asset_id_quote} />
            ))}
          </QuotesList>
        </Wrapper>
      </Container>
    </section>
  );
}

export { QuotesSection };
