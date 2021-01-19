import React from 'react';
import { Col, Placeholder } from '../col.styled';
import { Row } from '../row.styled';

export default {
   title: 'Col',
   argTypes: {
      label: { control: 'Column' },
      span:{control:{type:"range", min:1, max:12, step:1}},
      pull:{control:{type:"range", min:1, max:12, step:1}},
      push:{control:{type:"range", min:1, max:12, step:1}},
      offset:{control:{type:"range", min:0, max:11, step:1}},
      gutter:{control:{type:"range", min:0, max:5, step:0.5}},
   }
   }

type Props = {
   span?:number,
   pull?:number,
   push?:number,
   offset?:number,
   gutter?:number,
   label?:string,
}
   export const Column =  (args:Props) => {

      return(
         <Row>
             <Col span={args.span} pull={args.pull} push={args.push} offset={args.offset} gutter={args.gutter}><Placeholder>{args.label}</Placeholder></Col>
         </Row>
        
      )

   } 
   Column.args = {
      label: "Column",
   }