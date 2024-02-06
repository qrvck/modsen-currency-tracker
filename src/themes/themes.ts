const media = {
  extraExtraLarge: '(min-width: 1435px)',
  extraLarge: '(min-width: 1200px)',
  large: '(min-width: 992px)',
  medium: '(min-width: 768px)',
  small: '(min-width: 576px)',
};

const staticColors = {
  orange: '#ff971d',
  greenGradient: '92deg, #00ce2c 0%, #aedf23 49.26%, #a3dc00 100%',
  lime: '#aedf23',
  darkGreen: '#00bc4f',
  red: '#ff0000',
};

const fonts = {
  primary: 'Poppins, sans-serif',
  secondary: 'Inter, sans-serif',
};

const darkTheme = {
  isDark: true,

  media,
  fonts,

  colors: {
    inverted: {
      first: '#ffffff',
      second: '#030304',
      third: '#d9d9d9',
      fourth: '#474747',
      fifth: '#a7b2c3',
      sixth: '#898989',
      seventh: '#9e9e9e',
      eighth: '#1b2028',
    },

    ...staticColors,
  },
};

const lightTheme = {
  isDark: false,

  media,
  fonts,

  colors: {
    inverted: {
      first: '#000000',
      second: '#fcfcfb',
      third: '#262626',
      fourth: '#b8b8b8',
      fifth: '#584d3c',
      sixth: '#767676',
      seventh: '#616161',
      eighth: '#e4dfd7',
    },

    ...staticColors,
  },
};

export { darkTheme, lightTheme };
