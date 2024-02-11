import { keyframes } from 'styled-components';

const skeletonAnimation = keyframes`
  0% {
    opacity: 0.85;
  }

  50% {
    opacity: 0.45;
  }

  100% {
    opacity: 0.85;
  }
`;

export { skeletonAnimation };
