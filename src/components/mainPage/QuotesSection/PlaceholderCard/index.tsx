import React from 'react';

import { CardTitle, Icon, Rate, TextWrapper } from '../QuoteCard/styled';
import { Card } from './styled';
import { IPlaceholderCard } from './types';

function PlaceholderCard({ isAnimated }: IPlaceholderCard) {
  return (
    <Card $isAnimated={isAnimated}>
      <Icon />
      <TextWrapper>
        <CardTitle>ㅤ</CardTitle>
        <Rate>ㅤ</Rate>
      </TextWrapper>
    </Card>
  );
}

export { PlaceholderCard };
