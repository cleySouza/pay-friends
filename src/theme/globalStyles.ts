import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
  }
  html, body {
    height: 100vh;
    margin: 0;
    padding: 0;
    font-weight: 400;
  }
`;

export default GlobalStyles;
