import React from 'react';
import { Col } from '../col.styled';

export default {
   title: 'Column',
   argTypes: {
      label: { control: 'Column' },
      span:{control:{type:"inputinline"}, options:['1','2'],}
   }
   }

type Props = {
   span?:number,
   label?:string,
}
   export const Column =  (args:Props) => {

      return(
         <Col span={args.span}>{args.label}</Col>
      )

   } 
   Column.args = {
      label: "Column",
   }