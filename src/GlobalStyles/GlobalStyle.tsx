// src/GlobalStyles/GlobalStyle.tsx
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    min-height: 125vh;
    background-color: #4a2c17; /* the brown */
  }

  #root {
    min-height: 100vh;
    max-width: 1650px;
    margin: 0 auto;
    background: white;
  }
`;