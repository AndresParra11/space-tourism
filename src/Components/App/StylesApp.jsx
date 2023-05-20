import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --color-primary: #0B0D17;
    --color-secondary: #D0D6F9;
    --  : #FFFFFF;
    --font-primary: 'Barlow Condensed', sans-serif;
    --font-secondary: 'Roboto', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
