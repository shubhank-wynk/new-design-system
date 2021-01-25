import React from 'react';
import { BlueShade, GrayShade, OrangeShade, TealShade, VioletShade } from '../colours/colors.styled';
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
   padding?:number,
   label?:string,
}

export const Containers =  (args:Props) => {
   return(
      <Container style={{background:"var(--gray)"}}>
             {args.label}
             <Row style={{background:"var(--gray3)",marginBottom:"1rem"}}>Row</Row>
         <Row style={{marginBottom:"1rem"}}>
            <Col span={4} gutter={1}><GrayShade color="gray5">Columns 4</GrayShade></Col>
            <Col span={8} gutter={1}><GrayShade color="gray5">Columns 8</GrayShade></Col>
         </Row>
         <Row style={{marginBottom:"1rem"}}>
         <Col span={6} gutter={1}><GrayShade color="gray5">Columns 6</GrayShade></Col>
            <Col span={6} gutter={1}><GrayShade color="gray5">Columns 6</GrayShade></Col>
         </Row>
         <Row style={{marginBottom:"1rem"}}>
         <Col span={7} gutter={1}><GrayShade color="gray5">Columns 7</GrayShade></Col>
            <Col span={5} gutter={1}><GrayShade color="gray5">Columns 5</GrayShade></Col>
         </Row>
         <Row>
            <Col span={2} gutter={0} style={{paddingLeft:0}} ><GrayShade color="gray4">columns 2</GrayShade></Col>
            <Col span={10} gutter={0} style={{paddingRight:0}}><GrayShade  color = 'gray3'>Columns 10</GrayShade></Col>
         </Row>
         </Container>
   )
}

Containers.args = {
   label:"container",
}