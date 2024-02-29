import { styled } from 'styled-components';

const Box = styled.div`
  min-width: 360px;
  max-width: 1435px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.sizes.padding.sm};

  @media (${({ theme }) => theme.media.medium}) {
    padding: 0 ${({ theme }) => theme.sizes.padding.md};
  }

  @media (${({ theme }) => theme.media.large}) {
    padding: 0 ${({ theme }) => theme.sizes.padding.lg};
  }

  @media (${({ theme }) => theme.media.extraLarge}) {
    padding: 0 ${({ theme }) => theme.sizes.padding.xl};
  }

  @media (${({ theme }) => theme.media.extraExtraLarge}) {
    padding: 0 ${({ theme }) => theme.sizes.padding.xxl};
  }
`;

export { Box };
