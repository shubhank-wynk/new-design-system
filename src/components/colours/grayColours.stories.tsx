import React from 'react';
import { Col } from '../grid/col.styled';
import { Row } from '../grid/row.styled';
import {GrayShade,TealShade,OrangeShade} from './colors.styled';


export default {
   title: 'Colours',

 }

 export  const Colors = () => {
    return(
       <Row>
          <Col span={4}>
            <GrayShade  color = 'gray7'/>
            <GrayShade  color = 'gray6'/>
            <GrayShade  color = 'gray5'/>
            <GrayShade  color = 'gray4'/>
            <GrayShade  color = 'gray3'/>
            <GrayShade  color = 'gray2'/>
            <GrayShade  color = 'gray1'/>
          </Col>
          <Col span={4}>

            <TealShade  color = 'teal6'/>
            <TealShade  color = 'teal5'/>
            <TealShade  color = 'teal4'/>
            <TealShade  color = 'teal3'/>
            <TealShade  color = 'teal2'/>
            <TealShade  color = 'teal1'/>
            <TealShade  color = 'teal7'/>
          </Col>
          <Col span={4}>

            <OrangeShade  color = 'orange5'/>
            <OrangeShade  color = 'orange4'/>
            <OrangeShade  color = 'orange3'/>
            <OrangeShade  color = 'orange2'/>
            <OrangeShade  color = 'orange1'/>
            <OrangeShade  color = 'orange7'/>
            <OrangeShade  color = 'orange6'/>
          </Col>
       </Row>
      
    )
 }
 Colors.args = { color:'gray6' }