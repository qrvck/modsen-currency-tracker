import { styled } from 'styled-components';

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.sizes.padding.sm} 0;

  @media (${({ theme }) => theme.media.medium}) {
    padding: ${({ theme }) => theme.sizes.padding.md} 0;
  }

  @media (${({ theme }) => theme.media.extraLarge}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export { Wrapper };
