import React from 'react';
import Colors from './colors';


export default {
   title: 'Colors',
   argTypes: {
      color:{control:{type:"inline-radio", options:["#fff","#ccc"]}},
   },
 }
 type args = {fontSize:string,color: string };


 export  const Color =(args:args) => {
    return(
       <Colors color = {args.color}/>
    )
 }
 Color.args = { color: '#171725' };
