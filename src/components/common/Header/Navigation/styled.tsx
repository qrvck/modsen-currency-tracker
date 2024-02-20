import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const Nav = styled.nav`
  width: 62%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (${({ theme }) => theme.media.large}) {
    width: 53%;
  }
`;

const Link = styled((props: { to: string; children: string }) => <NavLink {...props} />)`
  font-size: 10px;
  font-weight: 300;
  line-height: 16px;

  &.active {
    position: relative;
    color: ${({ theme }) => theme.colors.lime};

    &::before {
      position: absolute;
      content: '';
      left: 0;
      right: 0;
      bottom: 0;
      height: 1px;

      background-color: ${({ theme }) => theme.colors.lime};

      @media (${({ theme }) => theme.media.medium}) {
        height: 2px;
      }
    }
  }

  @media (${({ theme }) => theme.media.medium}) {
    font-size: 20px;
    font-weight: 300;
    line-height: 30px;
  }
`;

export { Link, Nav };
