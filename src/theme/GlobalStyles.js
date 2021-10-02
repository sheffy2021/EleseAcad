import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html {
    font-size: 62.5%;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

* {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  
  body,
  input {
    font-size: 1.8rem;
    font-weight: 400;
    font-family: "Archivo", sans-serif;
    color: var(--black);
  }
  
  a {
    text-decoration: none;
    cursor: pointer;
  }
  
  ul {
    list-style: none;
  }
  
  img {
    max-width: 100%;
  }
  
`;

export default GlobalStyle