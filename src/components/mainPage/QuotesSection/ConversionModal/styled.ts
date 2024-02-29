import { styled } from 'styled-components';

const Wrapper = styled.div`
  width: 250px;
  padding: ${({ theme }) => theme.sizes.padding.sm};
  text-align: center;

  @media (${({ theme }) => theme.media.medium}) {
    width: 550px;
    padding: ${({ theme }) => theme.sizes.padding.md};
  }
`;

const Title = styled.p`
  font-size: 16px;
  line-height: 19px;
  text-decoration: underline;

  @media (${({ theme }) => theme.media.medium}) {
    font-size: 35px;
    line-height: 49px;
  }
`;

const Subtitle = styled.p`
  font-weight: 500;
`;

const ConverterWrapper = styled.div`
  padding: ${({ theme }) => theme.sizes.padding.xs} 0;
  display: flex;
  justify-content: center;

  @media (${({ theme }) => theme.media.medium}) {
    padding: ${({ theme }) => theme.sizes.padding.sm} 0;
  }
`;

const ConverterText = styled.p`
  margin-right: 20px;
`;

const Select = styled.select`
  @media (${({ theme }) => theme.media.medium}) {
    font-size: 18px;
  }
`;

const ValueDataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;

  @media (${({ theme }) => theme.media.medium}) {
    margin-top: 25px;
  }
`;

const CurrencySoldInput = styled.input.attrs({ type: 'number' })`
  text-align: right;
`;

export { ConverterText, ConverterWrapper, CurrencySoldInput, Select, Subtitle, Title, ValueDataWrapper, Wrapper };
