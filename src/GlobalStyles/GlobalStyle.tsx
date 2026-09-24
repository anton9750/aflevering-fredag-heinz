// src/GlobalStyles/GlobalStyle.tsx
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");

  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    background-color: #4a2c17;
  }

  #root {
    min-height: 150vh;
    max-width: 1650px;
    margin: 0 auto;
    background: white;
    display: flex;
    flex-direction: column;
  }
`;