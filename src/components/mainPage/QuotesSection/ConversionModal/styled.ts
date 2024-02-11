import { styled } from 'styled-components';

const Wrapper = styled.div`
  width: 250px;
  padding: 20px;
  text-align: center;

  @media (${({ theme }) => theme.media.medium}) {
    width: 550px;
    padding: 35px;
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
  padding: 10px 0;
  display: flex;
  justify-content: center;

  @media (${({ theme }) => theme.media.medium}) {
    padding: 20px 0;
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

const TextHint = styled.p`
  font-size: 10px;
  margin-top: 15px;

  color: ${({ theme }) => theme.colors.inverted.fifth};

  @media (${({ theme }) => theme.media.medium}) {
    margin-top: 25px;
    font-size: 18px;
  }
`;

export { ConverterText, ConverterWrapper, Select, Subtitle, TextHint, Title, Wrapper };
