import { styled } from 'styled-components';

import { Card as QuoteCard } from '../QuoteCard/styled';
import { skeletonAnimation } from './styled.keyframes';

const Card = styled(QuoteCard)<{ $isAnimated: boolean }>`
  cursor: auto;
  opacity: 0.85;
  animation: 2s ease-in-out 0.5s infinite ${({ $isAnimated }) => $isAnimated && skeletonAnimation};

  &:hover {
    opacity: 0.85;
  }
`;

export { Card };
