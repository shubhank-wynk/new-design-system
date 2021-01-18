import React from 'react';
import styled,{css} from 'styled-components';


const bgColor = (color?:string) => {   
   switch (color) {
      case 'gray':
          return css`
         background:"#ecd";
      `;
   }

}
const Colors = styled.div <{
color?:string;
}>`
${(props) => bgColor(props.color)};
`

export default Colors;