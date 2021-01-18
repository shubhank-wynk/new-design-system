import React from 'react';
import {GrayShade,OrangeShade,TealShade} from './colors.styled';


export default {
   title: 'Colors',
   argTypes: {
      gray:{control:{type:"inline-radio", options:["gray6","gray5","gray4","gray3","gray2","gray1","default"]}},
      teal:{control:{type:"inline-radio", options:["teal6","teal5","teal4","teal3","teal2","teal1","default"]}},
      orange:{control:{type:"inline-radio", options:["teal","#ccc"]}},
      warning:{control:{type:"inline-radio", options:["gray","#ccc"]}},
      sucess:{control:{type:"inline-radio", options:["gray","#ccc"]}},
      error:{control:{type:"inline-radio", options:["gray","#ccc"]}},
   },
 }
 type args = {
    color?: string,
    };
 export  const Gray = (args:args) => {
    return(
       <GrayShade  color = {args.color}/>
    )
 }
 Gray.args = { color:'gray6' }

 export  const Orange = (args:args) => {
    return(
       <OrangeShade  color = {args.color}/>
    )
 }
 Orange.args = { color:'orange5' }
 export  const Teal = (args:args) => {
    return(
       <TealShade  color = {args.color}/>
    )
 }
 Teal.args = { color:'teal6' }

