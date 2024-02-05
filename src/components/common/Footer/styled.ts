import { styled } from 'styled-components';

const Wrapper = styled.div`
  padding: 18px 0;

  @media (${({ theme }) => theme.media.medium}) {
    padding: 40px 0;
  }

  @media (${({ theme }) => theme.media.extraLarge}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export { Wrapper };
