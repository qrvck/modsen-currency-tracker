import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { IRootState } from '@/store';

import { darkTheme, lightTheme } from '../themes/themes';

function ThemeProvider({ children }: { children: ReactNode }) {
  const { isDark } = useSelector((store: IRootState) => store.themeProvider);

  return <StyledThemeProvider theme={isDark ? darkTheme : lightTheme}>{children}</StyledThemeProvider>;
}

export { ThemeProvider };
