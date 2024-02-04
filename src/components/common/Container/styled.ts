import { styled } from 'styled-components';

const Box = styled.div`
  min-width: 360px;
  max-width: 1435px;
  margin: 0 auto;
  padding: 0 16px;

  @media (${({ theme }) => theme.media.medium}) {
    padding: 0 40px;
  }

  @media (${({ theme }) => theme.media.large}) {
    padding: 0 60px;
  }

  @media (${({ theme }) => theme.media.extraLarge}) {
    padding: 0 80px;
  }

  @media (${({ theme }) => theme.media.extraExtraLarge}) {
    padding: 0 100px;
  }
`;

export { Box };
