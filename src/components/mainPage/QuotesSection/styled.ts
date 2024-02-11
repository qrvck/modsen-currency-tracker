import { styled } from 'styled-components';

const Wrapper = styled.div`
  padding: 25px 0;
`;

const Title = styled.h2`
  position: relative;
  padding-bottom: 9px;

  font-weight: 300;
  font-size: 12px;
  line-height: 16px;

  &::before {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;

    height: 1px;
    width: 42%;
    background-color: ${({ theme }) => theme.colors.inverted.fourth};

    @media (${({ theme }) => theme.media.small}) {
      width: 46%;
    }

    @media (${({ theme }) => theme.media.medium}) {
      right: 0;
      width: 100%;
    }
  }

  @media (${({ theme }) => theme.media.medium}) {
    font-size: 32px;
    line-height: 41px;
  }
`;

const QuotesList = styled.div`
  padding: 28px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (${({ theme }) => theme.media.medium}) {
    padding: 50px 0;
  }
`;

export { QuotesList, Title, Wrapper };
