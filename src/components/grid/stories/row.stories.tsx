import React from 'react';
import {Row} from '../row.styled';

export default {
   title: 'Row',
   argTypes: {
      label: { control: 'Row' },
      justify :{ control: { type: 'inline-radio', options: ['end', 'center', 'space-around','space-between','default'] } },
      wrap:{control:{type:"inline-radio",options:['wrap',"nowrap","wrap-reverse",]}},
      gutter:{control:{type:"inline-radio",options:['sm',"lg","md",'default']}},
      align:{control:{type:"inline-radio",options:['top',"bottom",'default']}},
   }
   }
   type Props = {
      align?: string;
      gutter?: string;
      justify?: string;
      wrap?:string;
      label?:string;
    };

   export const Rows = (args:Props) => {

      return(
         <Row align={args.align} gutter={args.gutter} justify={args.justify} wrap={args.wrap}>
            {args.label}
         </Row>
      )
      
   };
   Rows.args={
      label: 'Row',
    };
   
