import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    isDark: boolean;

    media: {
      extraExtraLarge: string;
      extraLarge: string;
      large: string;
      medium: string;
      small: string;
    };

    fonts: {
      primary: string;
      secondary: string;
    };

    colors: {
      inverted: {
        first: string;
        second: string;
        third: string;
        fourth: string;
        fifth: string;
        sixth: string;
        seventh: string;
        eighth: string;
      };

      orange: string;
      greenGradient: string;
    };
  }
}
