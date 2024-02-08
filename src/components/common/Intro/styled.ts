import { styled } from 'styled-components';

const Section = styled.section`
  background: linear-gradient(
    225deg,
    rgba(36, 121, 64, 0) 0%,
    rgba(31, 95, 52, 0.25) 25.28%,
    rgba(27, 69, 41, 0.5) 49.15%,
    rgba(31, 95, 52, 0.25) 74.72%,
    rgba(36, 121, 64, 0) 100%
  );
`;

const Wrapper = styled.div`
  padding: 13px 0 17px;

  @media (${({ theme }) => theme.media.medium}) {
    padding: 33px 0 58px;

    display: flex;
  }
`;

const TextWrapper = styled.div`
  flex-shrink: 0;
`;

const Title = styled.h1`
  font-size: 38px;
  font-weight: 600;
  text-align: center;

  background-color: ${({ theme }) => theme.colors.lime};
  background: linear-gradient(92deg, #00ce2c 0%, #aedf23 49.26%, #a3dc00 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (${({ theme }) => theme.media.medium}) {
    padding-right: 75px;
    font-size: 76px;
    text-align: right;
  }
`;

const TitleSpan = styled.span`
  font-size: 38px;

  @media (${({ theme }) => theme.media.medium}) {
    margin-right: -14px;
    font-size: 90px;
  }
`;

const SubTitle = styled.p`
  margin-top: 7px;

  font-size: 12px;
  font-weight: 300;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.inverted.third};
  text-align: center;

  @media (${({ theme }) => theme.media.medium}) {
    padding-right: 18px;

    font-size: 25px;
    line-height: 47px;
    text-align: right;
  }
`;

const Img = styled.img`
  display: none;

  @media (${({ theme }) => theme.media.extraLarge}) {
    display: inline-block;
    width: 300px;
    height: 350px;
  }
`;

export { Img, Section, SubTitle, TextWrapper, Title, TitleSpan, Wrapper };
