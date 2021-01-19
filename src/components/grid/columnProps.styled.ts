import {css} from 'styled-components';

const Span = (span:number = 12) => {
   return css`
   flex: 0 0 ${(100/12)*span}%;
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
export {Span,Pull,Push,Offset}