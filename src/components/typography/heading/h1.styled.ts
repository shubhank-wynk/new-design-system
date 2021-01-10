import styled,{css} from 'styled-components';
// import {textTransform,fontWeight,fontStyle} from './heading.styled';
import {theme} from '../../../globalStyles';


const textTransform = (Tcase?: string) => {
  switch (Tcase) {
      case 'upper':
      return css`
      text-transform:uppercase;
      `;
      case 'camel':
      return css`
      text-transform:capitalize;
      `;
      default:
          return css`
            text-transform:lowercase;
          `;
  }
}
const fontWeight = (weight?: string) => {
  switch (weight) {
      case 'ligth':
      return css`font-weight:300;`;
      case 'regular':
      return css`font-weight:400;`;
      case 'extaBold':
          return css `font-weight:800;`;
      default:
          return css`font-weight:600;`;
  }
}
const fontStyle = (Tstyle?: string) => {
  switch (Tstyle) {
      case 'italic':
      return css`font-style:italic;`;
      default:
          return css`font-style:normal;`;
  }
}


export const Heading1 = styled.h1<{
    case?:string,
    weight?:string,
    Tstyle?:string,
  }>`
    font-size:3.25rem;
    line-height:4.0625rem;
    letter-spacing:-0.5%;
    color:${theme.primary.gray7};
    font-family:${theme.primary.font};
    ${(props) => textTransform(props.case)};
    ${(props) => fontWeight(props.weight)};
    ${(props) => fontStyle(props.Tstyle)};
  `;