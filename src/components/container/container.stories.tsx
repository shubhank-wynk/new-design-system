import React from 'react';
import { GrayShade } from '../colours/colors.styled';
import { Container } from '../container/container.styled';
import { Col } from '../grid/col.styled';
import { Row } from '../grid/row.styled';

export default {
   title: 'Container',
   argTypes: {
      label: { control: 'Container' },
      padding:{control:{type:"range", min:0, max:5, step:0.5}},
   }
}
type Props = {
   padding?:number;
   label?:string;
}

export const Containers =  (args:Props) => {
   return(
      <Container style={{background:"var(--gray)"}} padding={args.padding}>
             {args.label}
             <Row style={{background:"var(--gray3)",marginBottom:"1rem"}}>Row</Row>
         <Row style={{marginBottom:"1rem"}}gutter={2}>
            <Col span={4} ><GrayShade color="gray5">Columns 4</GrayShade></Col>
            <Col span={8} ><GrayShade color="gray5">Columns 8</GrayShade></Col>
         </Row>
         <Row style={{marginBottom:"1rem"}}gutter={2}>
         <Col span={6} ><GrayShade color="gray5">Columns 6</GrayShade></Col>
            <Col span={6} ><GrayShade color="gray5">Columns 6</GrayShade></Col>
         </Row>
         <Row style={{marginBottom:"1rem"}} gutter={2}>
         <Col span={7}><GrayShade color="gray5">Columns 7</GrayShade></Col>
            <Col span={5}><GrayShade color="gray5">Columns 5</GrayShade></Col>
         </Row>
         <Row gutter={1}>
            <Col span={2} ><GrayShade color="gray4">columns 2</GrayShade></Col>
            <Col span={10} ><GrayShade  color = 'gray3'>Columns 10</GrayShade></Col>
            <Col span={12} ><GrayShade  color = 'gray3'>Columns 12</GrayShade></Col>
            <Col span={12} ><GrayShade  color = 'gray3'>Columns 12</GrayShade></Col>

         </Row>
         </Container>
   )
}

Containers.args = {
   label:"container",
   padding:2,
}