import React from 'react';
import Heading from '../heading/heading1';
import Props from '../p.types';
// import {Heading1} from '../heading/h1.styled';
// import {H2} from '../heading/h2';
// import {H3} from '../heading/h3';
// import {S1} from '../heading/s1';
// import {S2} from '../heading/s2';
// import {S3} from '../heading/s3';
// import {S4} from '../heading/s4';
// import {P} from '../p';



export default {
  component: Heading,
  title: 'Heading',
    argTypes: {
      label: { control: 'text' },
      fontWeight: { control: { type: 'inline-radio', options: ['ligth', 'regular', 'bold','extaBold'] } },
      fontStyle: { control: {type:'inline-radio', option:['italic','normal']} },
      case: { control: {type:'inline-radio', option:['upper','camel','lower']} },
    },
  };


  export const TCase = (args :Props) => <Heading {...args} />;
  TCase.args={
    label: 'Heading',
    case :"upper",
  };

  export const TCase = (args :Props) => <Heading {...args} />;
  TCase.args={
    label: 'Heading',
    fontWeight :"bold",
  };

// export const TextCase = (args :Props) => <Headings {...args} />;
//   TextCase.args = {
//     label: 'Headings',
//     Tcase: 'upper',
//   };

