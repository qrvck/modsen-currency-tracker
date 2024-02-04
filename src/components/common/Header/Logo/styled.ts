import { Link as RouterLink } from 'react-router-dom';
import { styled } from 'styled-components';

const Link = styled(RouterLink)`
  &:hover {
    opacity: 0.6;
  }
`;

const Img = styled.img`
  display: block;
  width: 12px;
  height: 13px;

  @media (${({ theme }) => theme.media.medium}) {
    width: 40px;
    height: 41px;
  }
`;

export { Img, Link };
