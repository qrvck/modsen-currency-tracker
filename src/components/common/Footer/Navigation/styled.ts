import { Link as RouterLink } from 'react-router-dom';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  margin-top: 34px;

  @media (${({ theme }) => theme.media.small}) {
    margin-top: 36px;
  }

  @media (${({ theme }) => theme.media.medium}) {
    margin-top: 50px;
  }

  @media (${({ theme }) => theme.media.extraLarge}) {
    margin: 0;
    width: 50%;
  }
`;

const AccordionNavWrapper = styled.div`
  @media (${({ theme }) => theme.media.small}) {
    display: none;
  }
`;

const NavWrapper = styled.div`
  display: none;

  @media (${({ theme }) => theme.media.small}) {
    display: flex;
    justify-content: space-between;
    width: 65%;
    margin-left: auto;
    margin-right: auto;
  }

  @media (${({ theme }) => theme.media.medium}) {
    width: 78%;
  }

  @media (${({ theme }) => theme.media.extraLarge}) {
    width: auto;
  }
`;

const NavTitle = styled.p`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.01em;

  @media (${({ theme }) => theme.media.medium}) {
    font-size: 28px;
  }
`;

const LinkWrapper = styled.div`
  margin-top: 8px;

  @media (${({ theme }) => theme.media.medium}) {
    margin-top: 20px;
  }
`;

const Link = styled(RouterLink)`
  display: block;
  padding: 8px 0;
  color: ${({ theme }) => theme.colors.inverted.sixth};

  & + & {
    margin-bottom: 15px;
  }

  &:hover {
    opacity: 0.6;
  }

  @media (${({ theme }) => theme.media.small}) {
    & + & {
      margin-bottom: 0;
    }
  }

  @media (${({ theme }) => theme.media.medium}) {
    font-size: 24px;
  }
`;

export { AccordionNavWrapper, Link, LinkWrapper, NavTitle, NavWrapper, Wrapper };
