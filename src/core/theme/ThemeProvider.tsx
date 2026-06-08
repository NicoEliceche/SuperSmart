import type { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    letter-spacing: 0;
  }

  html {
    scroll-behavior: smooth;
    text-size-adjust: 100%;
    scroll-padding-top: calc(${({ theme }) => theme.layout.headerHeight} + ${({ theme }) => theme.spacing[6]});
  }

  body {
    margin: 0;
    min-width: 320px;
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text};
    font-family: ${({ theme }) => theme.typography.fontFamily.sans};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  body.modal-open {
    overflow: hidden;
  }

  img,
  picture,
  svg {
    display: block;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  section {
    scroll-margin-top: calc(${({ theme }) => theme.layout.headerHeight} + ${({ theme }) => theme.spacing[6]});
  }

  a {
    color: inherit;
  }

  :focus-visible {
    outline: 3px solid ${({ theme }) => theme.color.borderFocus};
    outline-offset: 3px;
  }

  ::selection {
    background-color: ${({ theme }) => theme.color.accent};
    color: ${({ theme }) => theme.color.neutral[900]};
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};
