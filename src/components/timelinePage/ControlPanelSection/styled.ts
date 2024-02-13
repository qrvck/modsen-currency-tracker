import { styled } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 260px;
  margin: auto;
  padding: 10px 0;

  @media (${({ theme }) => theme.media.medium}) {
    width: 600px;
    padding: 20px 0;
  }
`;

const Select = styled.select`
  @media (${({ theme }) => theme.media.medium}) {
    width: 145px;
  }
`;

const Hint = styled.p`
  margin-top: 3px;
  font-size: 8px;

  @media (${({ theme }) => theme.media.medium}) {
    font-size: 16px;
  }
`;

export { Hint, Select, Wrapper };
