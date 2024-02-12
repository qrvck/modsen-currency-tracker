import { styled } from 'styled-components';

const Wrapper = styled.div`
  padding: 40px 0;

  @media (${({ theme }) => theme.media.medium}) {
    padding: 80px 0;
  }
`;

export { Wrapper };
