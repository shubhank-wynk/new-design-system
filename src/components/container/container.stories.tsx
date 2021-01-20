import React from 'react';
import { Container } from '../container/container.styled';

export default {
   title: 'Container',
   argTypes: {
      label: { control: 'Container' },
      padding:{control:{type:"range", min:0, max:5, step:0.5}},
   }
}
type Props = {
   padding?:number,
   label?:string,
}

export const Containers =  (args:Props) => {
   return(
      <Container style={{background:"#f00",height:'20px'}}>{args.label}</Container>
   )
}

Containers.args = {
   label:"container",
}