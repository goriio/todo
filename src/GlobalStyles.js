import styled, { createGlobalStyle } from 'styled-components';

export const defaultTheme = {
  primary: 'hsl(220, 79%, 44%)',
  secondary: 'hsl(0, 0%, 54%)',
  background: 'hsl(0, 0%, 100%)',
  text: 'hsl(0, 0%, 0%)',
  warning: 'hsl(0, 79%, 44%)',
};

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }

  ul {
    list-style: none;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 550px;
  margin: 0 auto;
  padding: 1rem;
`;
