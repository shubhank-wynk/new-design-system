import { createGlobalStyle } from 'styled-components';
 export const GlobalStyle = createGlobalStyle` 
:root{
  --font: 'Nunito', sans-serif;

  --gray7: #252525;
  --gray6: #555555;
  --gray5: #858585;
  --gray4: #C5C5C5;
  --gray3: #E5E5E5;
  --gray2: #F5F5F5;
  --gray: #F9F9F9;

  --teal6:#224D5B;
  --teal5:#336676;
  --teal4:#4F8293;
  --teal3:#83AAB7;
  --teal2:#CFE0E5;
  --teal1:#E6F1F4;
  --teal:#F4F9FB;

  --tealGrad1:linear-gradient(96.45deg, #698F9A 0%, #255A68 100%);
  --tealGrad2:linear-gradient(180deg, #255A68 0%, #698F9A 100%);

  --orange5:#EF420F;
  --orange4:#FF6639;
  --orange3:#FF7D57;
  --orange2:#FFE6DF;
  --orange1:#FFF3F0;

  --orangeGrad1:linear-gradient(96.45deg, #FF6E65 0%, #FF8957 100%);
  --orangeGrad2:linear-gradient(96.45deg, #FF5D52 0%, #FF7940 100%);

  --error4: #E24A4A;
  --error3: #FF2C2C;
  --error2: #DA1414;
  --error1: #FBE7E7;

  --warning4: #F9E000;
  --warning3: #EE9F28;
  --warning2: #DB9000;
  --warning1: #F8F2E5;

  --success5: #24D092;
  --success4: #00F99F;
  --success3: #0CE06E;
  --success2: #287D3C;
  --success1: #E9F2EB;

  --blue:#4FC7FA;
  --violet:#8676FF;
  --indigo:#023AFF;
  --orange:#FD756C;
  --yellow:#FF9F2E;
  --green:#00B998;
  --white: #FFF;
  

}
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family:'Nunito', sans-serif;
}
`;