import {css} from 'styled-components';

const Span = (span:number = 12) => {
   return css`
   flex-basis:${(100/12)*span}%;
   max-width:${(100/12)*span}%;
`
}
const Pull = (pull:number = 0) => {
   return css`
   right:${(100/12)*pull}%;
`
}
const Push = (push:number = 0) => {
   return css`
   left:${(100/12)*push}%;
`
}
const Offset = (offset:number = 0) => {
   return css`
   margin-left:${(100/12)*offset}%;
`
}
const Gutter = (gutter:number =0) => {
   return css `
   @media (min-width:1920px){
      padding-left:${1.5*gutter}rem;
      padding-right:${1.5*gutter}rem;
   }
   @media (min-width:1440px){
      padding-left:${1*gutter}rem;
      padding-right:${1*gutter}rem;
   }
   @media (min-width:768px){
      padding-left:${0.75*gutter}rem;
      padding-right:${0.75*gutter}rem;
   }
   `
}
export {Span,Pull,Push,Offset,Gutter}