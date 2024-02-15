import React, { createContext, ReactNode, useContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from './themes';

interface IThemeContext {
  isDark: boolean;
  updateIsDark: (newValue: boolean) => void;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(() => Boolean(localStorage.getItem('isDark')));

  const themeProviderParams = {
    isDark,
    updateIsDark: function (newValue: boolean) {
      setIsDark(newValue);

      if (newValue) {
        localStorage.setItem('isDark', 'dark');
      } else {
        localStorage.removeItem('isDark');
      }
    },
  };

  return (
    <ThemeContext.Provider value={themeProviderParams}>
      <StyledThemeProvider theme={isDark ? darkTheme : lightTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

function useTheme() {
  return useContext(ThemeContext);
}

export { ThemeProvider, useTheme };
