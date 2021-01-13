import { createGlobalStyle } from 'styled-components';
 export const GlobalStyle = createGlobalStyle` 
 @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,600;0,700;0,800;0,900;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');
body {
  margin: 0;
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;
export const theme = {

  orange:{shade2:'#FFE6DF',},
  primary: {
    shade2:"",
    font: 'Nunito, sans-serif',
    gray7: "#252525",
    gray6: "#555555",
    gray5: "#858585",
    gray4: "#C5C5C5",

    orange6: "#EF420F",
    orange5: "#FF6639",
    orange4: "#FF7D57",
    orange3:"#FFF3F0",
    orange2:"#FFE6DF",

    error5: "#DA1414",
    error4: "#FF2C2C",
    error3: "#E24A4A",
    sucess5: "#287D3C",
    sucess4: "#00B998",
    sucess3: "#00F99F",
    warning5: "#DB9000",
    warning4: "#FF9F2E",
    warning3: "#EE9F28",
    teal6: "#224D5B",
    teal5: "#336676",
    teal4: "#4F8293",
    teal2:"#CFE0E5",

    tealGrad1: 'linear-gradient(96.45deg, #698F9A 0%, #255A68 100%)',
    tealGrad2: 'linear-gradient(180deg, #255A68 0%, #698F9A 100%)',
    tealShadow:'rgba(59, 99, 112, 0.6)',
    orangeGrad1: 'linear-gradient(96.45deg, #FF6E65 0%, #FF8957 100%)',
    orangeGrad2: 'linear-gradient(96.45deg, #FF5D52 0%, #FF7940 100%)',
    orangeShadow:'rgba(255, 139, 105, 0.2)',
  },
  secondary: {
    shade2:"",
    font: "nonito",
    white3: "#FBF8F1",
    white2: "#FCFCFC",
    white: "#FFFFFF",
    gray3: "#E5E5E5",
    gray2: "#F5F5F5",
    gray: "#F9F9F9",


    sucess2: "#0CE06E",
    sucess1: "#24D092",
    sucess: "#E9F2EB",
  }
}