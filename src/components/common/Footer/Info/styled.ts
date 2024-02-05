import { styled } from 'styled-components';

const Wrapper = styled.div`
  @media (${({ theme }) => theme.media.extraLarge}) {
    width: 40%;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  @media (${({ theme }) => theme.media.small}) {
    justify-content: center;
  }

  @media (${({ theme }) => theme.media.extraLarge}) {
    justify-content: flex-start;
  }
`;

const LogoImg = styled.img`
  width: 22px;
  height: 25px;

  @media (${({ theme }) => theme.media.medium}) {
    width: 40px;
    height: 47px;
  }
`;

const LogoText = styled.p`
  margin-left: 16px;
  font-size: 20px;
  font-weight: 600;

  background-color: ${({ theme }) => theme.colors.lime};
  background: linear-gradient(92deg, #00ce2c 0%, #aedf23 49.26%, #a3dc00 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (${({ theme }) => theme.media.medium}) {
    font-size: 26px;
  }
`;

const InfoText = styled.p`
  display: none;
  margin-top: 36px;

  font-size: 24px;
  line-height: 36px;
  font-weight: 300;

  @media (${({ theme }) => theme.media.medium}) {
    display: block;
  }
`;

export { InfoText, Logo, LogoImg, LogoText, Wrapper };
