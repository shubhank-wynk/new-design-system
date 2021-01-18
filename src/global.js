import { createGlobalStyle } from 'styled-components';
 export const GlobalStyle = createGlobalStyle` 
 @import url('https://fonts.googleapis.com/css2?family=Potta+One&display=swap');
:root{
  --gray7: "#252525";
  --font: cursive;
}
body {
  margin: 0;
  font-family: 'Potta One', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;