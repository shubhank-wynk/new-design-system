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
            <Col span={2} gutter={1} style={{paddingLeft:0}}><VioletShade>Column 2</VioletShade></Col>
            <Col span={3} gutter={1}><GrayShade color="gray3">Column 3</GrayShade></Col>
            <Col span={6} gutter={1}><OrangeShade>Column 6</OrangeShade></Col>
            <Col span={1} gutter={1} style={{paddingRight:0}}><TealShade color="tealgrad1">Column 1</TealShade></Col>
         </Row>
         <Row style={{marginBottom:"1rem"}}>
            <Col span={5} gutter={0}><BlueShade>column 5</BlueShade></Col>
            <Col span={7} gutter={0}><OrangeShade  color = 'orangeGrad2'>Column 7</OrangeShade></Col>
         </Row>
         <Row>
            <Col span={6} gutter={1} style={{paddingLeft:0}} ><GrayShade color="gray3">column 6</GrayShade></Col>
            <Col span={6} gutter={1} style={{paddingRight:0}}><GrayShade  color = 'gray4'>Column 6</GrayShade></Col>
         </Row>
     
         
         </Container>
   )
}

Containers.args = {
   label:"container",
}