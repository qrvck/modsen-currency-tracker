import { styled } from 'styled-components';

const Wrapper = styled.div`
  padding: 20px 0 30px;

  @media (${({ theme }) => theme.media.medium}) {
    padding: 25px 0 70px;
  }
`;

const Title = styled.p`
  padding: 25px 0 65px;
  text-align: center;
`;

export { Title, Wrapper };
