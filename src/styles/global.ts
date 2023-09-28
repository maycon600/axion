import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    background: white;
  }

  body, button, input, textarea {
    font-family: 'Archivo', sans-serif;
  }
`;
export default GlobalStyle;
