import styled from 'styled-components';
import {Gutter,Wrap,Justify,Align} from './rowProps.styled';


const Row = styled.div<{
   align?:string,
   gutter?:number,
   justify?:string,
   wrap?:string,
}>`
display:flex;
flex-direction:row;
${(props) => Gutter(props.gutter)};
${(props) => Wrap(props.wrap)};
${(props) => Justify(props.justify)};
${(props) => Align(props.align)};
`
export {Row};