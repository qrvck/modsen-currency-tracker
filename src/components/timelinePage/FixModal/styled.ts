import { styled } from 'styled-components';

const Wrapper = styled.div`
  padding: 10px;
  width: 300px;

  @media (${({ theme }) => theme.media.medium}) {
    padding: 25px;
    width: 650px;
  }
`;

const Title = styled.p`
  padding: 12px 0;
  font-weight: 600;
  text-align: center;

  @media (${({ theme }) => theme.media.medium}) {
    padding: 24px 0;
  }
`;

const Fieldset = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;

  @media (${({ theme }) => theme.media.medium}) {
    padding: 12px 0;
  }
`;

const PriceInput = styled.input.attrs({ type: 'number' })`
  text-align: right;
`;

const SaveButton = styled.button`
  display: block;
  margin: 10px auto 0;

  @media (${({ theme }) => theme.media.medium}) {
    margin-top: 20px;
  }
`;

export { Fieldset, PriceInput, SaveButton, Title, Wrapper };
