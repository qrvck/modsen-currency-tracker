import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from './themes';

interface IThemeContext {
  isDark: boolean;
  updateIsDark: (newValue: boolean) => void;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const [loadingInitial, setLoadingInitial] = useState<boolean>(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('isDark');

    if (savedTheme) {
      setIsDark(true);
    }

    setLoadingInitial(false);
  }, []);

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
      <StyledThemeProvider theme={isDark ? darkTheme : lightTheme}>{!loadingInitial && children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

function useTheme() {
  return useContext(ThemeContext);
}

export { ThemeProvider, useTheme };
