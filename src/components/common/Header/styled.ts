import { styled } from 'styled-components';

const Wrapper = styled.div`
  padding: 7px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (${({ theme }) => theme.media.medium}) {
    padding: 36px 0;
  }
`;

export { Wrapper };
