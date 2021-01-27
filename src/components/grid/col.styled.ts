import styled from 'styled-components';
import {Span,Pull,Push, Offset, } from './columnProps.styled';


const Col = styled.div<{
   span?:number,
   pull?:number,
   push?:number,
   size?:string,
   align?:string,
   offset?:number,
   gutter?:number,
}>`
position:relative;
display:block;
flex-grow:0;
box-sizing:border-box;
${(props) => Span(props.span)};
${(props) => Pull(props.pull)};
${(props) => Push(props.push)};
${(props) => Offset(props.offset)};
`
const Placeholder = styled.div`
   background:#555555;
   color:#fff;
   height:4rem;
   width:100%;
   text-align:center;
`

export {Col,Placeholder} ;