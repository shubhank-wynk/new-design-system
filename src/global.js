import { createGlobalStyle } from 'styled-components';
 export const GlobalStyle = createGlobalStyle` 
 @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;0,700;0,800;0,900;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');
 :root{
  --gray7: "#252525";
  --font: 'Nunito, sans-serif';
}
body {
  margin: 0;
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;