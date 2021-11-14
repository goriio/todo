import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
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
