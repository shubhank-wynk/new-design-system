import React from 'react';
import { Col, Placeholder } from '../col.styled';
import {Row} from '../row.styled';

export default {
   title: 'Row',
   argTypes: {
      label: { control: 'Row' },
      justify :{ control: { type: 'inline-radio', options: ['center', 'space-around','space-between','default'] } },
      wrap:{control:{type:"inline-radio",options:['wrap',"nowrap","wrap-reverse",]}},
      gutter:{control:{type:"range", min:0, max:5, step:0.5}},
      align:{control:{type:"inline-radio",options:['top',"bottom",'default']}},
   }
   }
   type Props = {
      align?: string;
      gutter?: number;
      justify?: string;
      wrap?:string;
      label?:string;
    };

   export const Rows = (args:Props) => {

      return(
         <Row align={args.align} gutter={args.gutter} justify={args.justify} wrap={args.wrap}>
           <Col span={4}><Placeholder>{args.label}</Placeholder></Col> 
           <Col span={3}><Placeholder>{args.label}</Placeholder></Col> 
           <Col span={4}><Placeholder>{args.label}</Placeholder></Col> 
         </Row>
      )
      
   };
   Rows.args={
      label: 'Column',
    };
   
