import { styled } from 'styled-components';

const Wrapper = styled.div`
  margin-top: 34px;

  @media (${({ theme }) => theme.media.small}) {
    margin-top: 36px;
  }

  @media (${({ theme }) => theme.media.medium}) {
    margin-top: 50px;
  }

  @media (${({ theme }) => theme.media.extraLarge}) {
    margin: 0;
    width: 50%;
  }
`;

export { Wrapper };
