import React from 'react';
import {GrayShade,} from './colors.styled';


export default {
   title: 'Color Gray',
   component: GrayShade,
   argTypes: {
      gray:{control:{type:"inline-radio", options:["gray6","gray5","gray4","gray3","gray2","gray1","default"]}},
   },
 }
 type args = {
    gray?: string,
    teal?:string,
    orange?:string,
    };
 export  const Gray = (args:args) => {
    return(
       <GrayShade  color = {args.gray}/>
    )
 }
 Gray.args = { color:'gray6' }