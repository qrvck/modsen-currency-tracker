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

const Hint = styled.p<{ $isError?: boolean }>`
  margin-top: 3px;
  font-size: 8px;
  line-height: inherit;
  color: ${({ $isError, theme }) => ($isError ? theme.colors.red : '')};

  @media (${({ theme }) => theme.media.medium}) {
    font-size: 16px;
  }
`;

const Button = styled.button`
  margin-bottom: -1px;

  @media (${({ theme }) => theme.media.medium}) {
    margin-bottom: -15px;
  }
`;

export { Button, Hint, Select, Wrapper };
