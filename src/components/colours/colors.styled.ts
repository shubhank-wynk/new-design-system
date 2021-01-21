import styled,{css} from 'styled-components';


const Gray = (gray?:string) => {   
   switch (gray) {
      case 'gray6':
          return css`
          background:var(--gray6);
      `;
      case 'gray5':
          return css`
          background:var(--gray5);
      `;
      case 'gray4':
          return css`
          background:var(--gray4);
      `;
      case 'gray3':
          return css`
          background:var(--gray3);
      `;
      case 'gray2':
          return css`
          background:var(--gray2);
      `;
      case 'gray1':
          return css`
          background:var(--gray);
      `;
      default:
          return css`
          background:var(--gray7);
      `;
   }
}
const Teal = (teal?:string) => {   
   switch (teal) {
      case 'teal6':
          return css`
          background:var(--teal6);
      `;
      case 'teal5':
          return css`
          background:var(--teal5);
      `;
      case 'teal4':
          return css`
          background:var(--teal4);
      `;
      case 'teal3':
          return css`
          background:var(--teal3);
      `;
      case 'teal2':
          return css`
          background:var(--teal2);
      `;
      case 'teal1':
          return css`
          background:var(--teal1);
      `;
      case 'tealgrad1':
          return css`
          background:var(--tealGrad1);
      `;
      case 'tealgrad2':
          return css`
          background:var(--tealGrad2);
      `;
      default:
          return css`
          background:var(--teal);
      `;
   }
}
const Orange = (orange?:string) => {   
   switch (orange) {
      case 'orange5':
          return css`
          background:var(--orange5);
      `;
      case 'orange4':
          return css`
          background:var(--orange4);
      `;
      case 'orange3':
          return css`
          background:var(--orange3);
      `;
      case 'orange2':
          return css`
          background:var(--orange2);
      `;
      case 'orange1':
          return css`
          background:var(--orange1);
      `;
      case "orangeGrad1" :
          return css `
          background:var(--orangeGrad1);
          `
      case "orangeGrad2" :
          return css `
          background:var(--orangeGrad2);
          `
      default:
          return css`
          background:#FF6639;
      `;
   }
}
const Error = (error?:string) => {   
    switch (error) {
       case 'error4':
           return css`
           background:var(--error4);
       `;
       case 'error3':
           return css`
           background:var(--error3);
       `;
       case 'error2':
           return css`
           background:var(--error2);
       `;
       case 'error1':
           return css`
           background:var(--error1);
       `;
       default :
       return css`
       background:var(--error1);
       `
    }
}
const Warning = (warning?:string) => {   
    switch (warning) {
       case 'warning4':
           return css`
           background:var(--warning4);
       `;
       case 'warning3':
           return css`
           background:var(--warning3);
       `;
       case 'warning2':
           return css`
           background:var(--warning2);
       `;
       case 'warning1':
           return css`
           background:var(--warning1);
       `;
    }
}
const Success = (success?:string) => {   
    switch (success) {
       case 'success5':
           return css`
           background:var(--success5);
       `;
       case 'success4':
           return css`
           background:var(--success4);
       `;
       case 'success3':
           return css`
           background:var(--success3);
       `;
       case 'success2':
           return css`
           background:var(--success2);
       `;
       case 'success1':
           return css`
           background:var(--success1);
       `;
    }
}

const GrayShade = styled.div <{
color?:string;
}>`
width:100%;
height:50px;
${(props) => Gray(props.color)};
`
const TealShade = styled.div <{
color?:string;
}>`
width:100%;
height:50px;
${(props) => Teal(props.color)};
`
const OrangeShade = styled.div <{
color?:string;
}>`
width:100%;
height:50px;
${(props) => Orange(props.color)};
`
const ErrorShade = styled.div <{
color?:string;
}>`
width:100%;
height:50px;
${(props) => Error(props.color)};
`
const WarningShade = styled.div <{
color?:string;
}>`
width:100%;
height:50px;
${(props) => Warning(props.color)};
`
const SuccessShade = styled.div <{
color?:string;
}>`
width:100%;
height:50px;
${(props) => Success(props.color)};
`
const VioletShade = styled.div`
width:100%;
height:50px;
background-color:var(--violet);
` 
const BlueShade = styled.div`
width:100%;
height:50px;
background-color:var(--blue);
` 
const IndigoShade = styled.div`
width:100%;
height:50px;
background-color:var(--indigo);
` 
const OrangeShades = styled.div`
width:100%;
height:50px;
background-color:var(--orange);
`
const YellowShades = styled.div`
width:100%;
height:50px;
background-color:var(--yellow);
` 
const GreenShades = styled.div`
width:100%;
height:50px;
background-color:var(--green);
` 

export {
   GrayShade,
   TealShade,
   OrangeShade,
   ErrorShade,
   WarningShade,
   SuccessShade,
   VioletShade,
   BlueShade,
   OrangeShades,
   IndigoShade,
   GreenShades,
   YellowShades,
};