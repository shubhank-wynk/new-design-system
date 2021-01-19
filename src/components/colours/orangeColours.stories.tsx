import React from 'react';
import {OrangeShade} from './colors.styled';


export default {
   title: 'Color Orange',
   component: OrangeShade,
   argTypes: {
      orange:{control:{type:"inline-radio", options:["orange5","orange4","orange3","orange2","orange1","grad1","grad2","default"]}},
   },
 }
 type args = {
    orange?:string,
    };

 export  const Orange = (args:args) => {
    return(
       <OrangeShade  color = {args.orange}/>
    )
 }
 Orange.args = { color:'orange5' }

