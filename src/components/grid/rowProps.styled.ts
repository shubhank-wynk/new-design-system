import {css} from 'styled-components';
const Align  = (align?:string ) => {
   switch(align){
      case  ' top':
         return css`
         align-items: flex-start;
         `
      case  'bottom':
         return css`
         align-items: flex-end;
         `
         default :
         return css`
         vertical-align:middle;
         `
   }
}
const Justify  = (justify?:string ) => {
   switch(justify){
      case  'center':
         return css`
         justify-content:center;
         `
      case  'space-around':
         return css`
         justify-content:space-around;
         `
      case  'space-between':
         return css`
         justify-content:space-between;
         `
         default :
         return css`
         justify-content:start;
         `
   }
}

const Wrap = (wrap?:string) =>{
   switch(wrap){
      case 'wrap':
         return css`
         flex-wrap:wrap;
         `
      case 'nowrap':
         return css`
         flex-wrap:nowrap;
         `
      case 'wrap-reverse':
         return css`
         flex-wrap:wrap-reverse;
         `
         default:
            return css`
            flex-wrap:initial;
            `
   }
}
const Gutter = (gutter?:string) =>{
   switch(gutter){
      case 'sm':
         return css`
         @media (min-width:768px){
            margin-left:-0.5rem;
            margin-right:-0.5rem;
         }
         `
      case 'md':
         return css`
          @media (min-width:1280px){
            margin-left:-0.75rem;
            margin-right:-0.75rem;
         }
         `
      case 'lg':
         return css`
           @media (min-width:1920px){
            margin-left:-1rem;
            margin-right:-1rem;
         }
         `
         default:
            return css`
            @media (min-width:1920px){
             margin-left:-0.5rem;
             margin-right:-0.5rem;
          }
          `
   }
}

export {
Align,
Justify,
Wrap,
Gutter,
}
