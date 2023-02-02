import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Kumbh Sans', sans-serif;
  }

  a {
    color: unset;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  .container {
    margin: 0 auto;
  }

  button {
    all: unset;
  }
  
${'' /* 
  @media screen and (min-width: 640px) {
      .container {
        max-width: 500px;
      }
  }

  @media screen and (min-width: 768px) {
      .container {
        max-width: 640px;
      }
  }

  @media screen and (min-width: 1024px) {
      .container {
        max-width: 768px;
      }
  } */}

  @media screen and (min-width: 1400px) {
      .container {
        max-width: 1200px;
      }
  }




`;

export default GlobalStyle;
