import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    color-scheme: ${({ theme }) => (theme.isDark ? 'dark' : 'light')};
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 12px;
    color: ${({ theme }) => theme.colors.inverted.first};
    background-color: ${({ theme }) => theme.colors.inverted.second};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-y: scroll;

    @media (${({ theme }) => theme.media.medium}) {
      font-size: 32px;
  }
  }

  #root {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: bottom;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    transition: color, background-color 0.3s ease;
  }

  button,
  input {
    font: inherit;
    color: inherit;
    border: none;
    background-color: transparent;
  }

  button {
    cursor: pointer;
  }

  svg {
    vertical-align: bottom;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export { GlobalStyles };
