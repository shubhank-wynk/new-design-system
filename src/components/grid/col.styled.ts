import styled from 'styled-components';
import {Span } from './columnProps.styled';


const Col = styled.div<{
   span?:number,
   size?:string,
   align?:string,
}>`

${(props) => Span(props.span)};
`
export {Col} ;