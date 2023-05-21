import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --color-primary: #0B0D17;
    --color-secondary: #D0D6F9;
    --color-terciary: #FFFFFF;
    --font-primary: 'Barlow Condensed', sans-serif;
    --font-secondary: 'Roboto', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


html {
  font-size: 62.5%;
}

.root {
  width: 100vw;
  height: 100vh;
}

body {
  width: 100%;
  height: 100%;
}

.active {
  border-bottom: 3px solid #fff;
}

.active {
  color: var(--color-terciary);
  border-bottom: 1px solid var(--color-terciary);
}
`;

export default GlobalStyle;
