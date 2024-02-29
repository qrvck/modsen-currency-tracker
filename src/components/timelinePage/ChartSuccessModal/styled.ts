import { styled } from 'styled-components';

const Wrapper = styled.div`
  width: 306px;
  padding: ${({ theme }) => theme.sizes.padding.sm};

  @media (${({ theme }) => theme.media.medium}) {
    width: 700px;
    padding: ${({ theme }) => theme.sizes.padding.md};
  }
`;

const Title = styled.p`
  text-align: center;
  font-weight: 600;
`;

const Text = styled.p`
  text-align: center;
  margin-top: 15px;

  @media (${({ theme }) => theme.media.medium}) {
    margin-top: 25px;
  }
`;

export { Text, Title, Wrapper };
