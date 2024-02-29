import { Link as RouterLink } from 'react-router-dom';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  @media (${({ theme }) => theme.media.small}) {
    display: none;
  }
`;

const Title = styled.p`
  padding: ${({ theme }) => theme.sizes.padding.sm} 0;

  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: left;
`;

const Link = styled(RouterLink)`
  display: block;
  padding: ${({ theme }) => theme.sizes.padding.xs} 0;
  color: ${({ theme }) => theme.colors.inverted.sixth};

  & + & {
    margin-bottom: 15px;
  }

  &:hover {
    opacity: 0.6;
  }
`;

export { Link, Title, Wrapper };
