import React from 'react';
import { Col } from '../grid/col.styled';
import { Row } from '../grid/row.styled';
import {GrayShade,TealShade,OrangeShade, ErrorShade, WarningShade, 
              SuccessShade, BlueShade, IndigoShade, YellowShades, GreenShades, VioletShade} from './colors.styled';


export default {
   title: 'Colours',

 }

 export  const Colors = () => {
    return(
       <Row wrap={'wrap'}>
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
            <TealShade  color = 'teal'/>
            <TealShade  color = 'tealgrad1'/>
            <TealShade  color = 'tealgrad2'/>
          </Col>
          <Col span={4}>

            <OrangeShade  color = 'orange5'/>
            <OrangeShade  color = 'orange4'/>
            <OrangeShade  color = 'orange3'/>
            <OrangeShade  color = 'orange2'/>
            <OrangeShade  color = 'orange1'/>
            <OrangeShade  color = 'orangeGrad1'/>
            <OrangeShade  color = 'orangeGrad2'/>
          </Col>
          <Col span={4}>
            <ErrorShade  color = 'error4'/>
            <ErrorShade  color = 'error3'/>
            <ErrorShade  color = 'error2'/>
            <ErrorShade  color = 'error1'/>
          </Col>
          <Col span={4}>
            <WarningShade  color = 'warning4'/>
            <WarningShade  color = 'warning3'/>
            <WarningShade  color = 'warning2'/>
            <WarningShade  color = 'warning1'/>
          </Col>
          <Col span={4}>
            <SuccessShade  color = 'success5'/>
            <SuccessShade  color = 'success4'/>
            <SuccessShade  color = 'success3'/>
            <SuccessShade  color = 'success2'/>
            <SuccessShade  color = 'success1'/>
          </Col>
          <Col span={4}>
          <VioletShade />
          <BlueShade/>
          <OrangeShade/>
          <IndigoShade/>
          <GreenShades/>
          <YellowShades/>
          </Col>
       </Row>
      
    )
 }
 Colors.args = { color:'gray6' }