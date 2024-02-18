import { styled } from 'styled-components';

const OuterWrapper = styled.div`
  position: relative;
  padding-bottom: 75%;

  @media ${({ theme }) => theme.media.small} {
    padding-bottom: 50%;
  }
`;

const InnerWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export { InnerWrapper, OuterWrapper };
