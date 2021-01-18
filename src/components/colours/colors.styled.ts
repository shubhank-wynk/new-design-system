import styled,{css} from 'styled-components';


const Gray = (color?:string) => {   
   switch (color) {
      case 'gray6':
          return css`
          background:#555555;
      `;
      case 'gray5':
          return css`
          background:#858585;
      `;
      case 'gray4':
          return css`
          background:#C5C5C5;
      `;
      case 'gray3':
          return css`
          background:#E5E5E5;
      `;
      case 'gray2':
          return css`
          background:#F5F5F5;
      `;
      case 'gray1':
          return css`
          background:#F9F9F9;
      `;
      default:
          return css`
          background:#252525;
      `;
   }
}
const Teal = (color?:string) => {   
   switch (color) {
      case 'teal6':
          return css`
          background:#224D5B;
      `;
      case 'teal5':
          return css`
          background:#336676;
      `;
      case 'teal4':
          return css`
          background:#4F8293;
      `;
      case 'teal3':
          return css`
          background#83AAB7;
      `;
      case 'teal2':
          return css`
          background:#CFE0E5;
      `;
      case 'teal1':
          return css`
          background:#F4F9FB;
      `;
      default:
          return css`
          background:#E6F1F4;
      `;
   }
}
const Orange = (color?:string) => {   
   switch (color) {
      case 'orange5':
          return css`
          background:#EF420F;
      `;
      case 'orange4':
          return css`
          background:#FF6639;
      `;
      case 'orange3':
          return css`
          background#FF7D57;
      `;
      case 'orange2':
          return css`
          background:#FFE6DF;
      `;
      case 'orange1':
          return css`
          background:#FFF3F0;
      `;
      default:
          return css`
          background:#E6F1F4;
      `;
   }
}
const GrayShade = styled.div <{
color?:string;
}>`
width:100px;
height:100px;
${(props) => Gray(props.color)};
`
const TealShade = styled.div <{
color?:string;
}>`
width:100px;
height:100px;
${(props) => Teal(props.color)};
`
const OrangeShade = styled.div <{
color?:string;
}>`
width:100px;
height:100px;
${(props) => Orange(props.color)};
`

export {
   GrayShade,
   TealShade,
   OrangeShade,
};