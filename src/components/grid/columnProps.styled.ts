import {css} from 'styled-components';

const Span = (span:number = 12) => {
   return css`
   flex: 0 0 ${(100/12)*span}%;
   max-width:${(100/12)*span}%;
`

}
export {Span}