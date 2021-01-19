import React from 'react';
import {TealShade} from './colors.styled';


export default {
   title: 'Color Teal',
   component: TealShade,
   argTypes: {
      teal:{control:{type:"inline-radio", options:["teal6","teal5","teal4","teal3","teal2","teal1","grad1","grad2","default"]}},
      // backgroundColor:{control:'color',type:"inline-radio", options:["#acd","#bcd"]}
   },
 }
 type args = {
    gray?: string,
    teal?:string,
    orange?:string,
    };

 export  const Teal = (args:args) => {
    return(
       <TealShade  color = {args.teal}/>
    )
 }
 Teal.args = { color:'teal6' }

