import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
  }
  html,
  body {
    height: 100vh;
    margin: 0;
    font-weight: 400;
    background: #ededed;
  }

  .react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        
        display: flex;
        align-items: center;
        justify-content: center;
        }

    .react-modal-content {
        
        max-width: 576px;
        background: #ffffff;
        padding: 70px 74px;
        position: relative;
        border-radius: 0.24rem;
        display: flex;
        flex-direction: column;
    }
`;

export default GlobalStyles;
