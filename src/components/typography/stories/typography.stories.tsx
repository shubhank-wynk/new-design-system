import React from 'react';
import Props from '../typography.types';
import {H1} from "../heading/h1.styled";
import {H2} from '../heading/h2.styled';
import {H3} from '../heading/h3.styled';
import {S1} from '../heading/s1.styled';
import {S2} from '../heading/s2.styled';
import {S3} from '../heading/s3.styled';
import {P} from '../p.styled';
export default {
  title: 'Heading',
    argTypes: {
      Flabel: { control: 'text' },
      Fweight: { control: { type: 'inline-radio', options: ['ligth', 'regular', 'bold','extaBold'] } },
      Fstyle: { control: {type:'inline-radio', options:['italic','normal']} },
      Fcase: { control: {type:'inline-radio', options:['upper','camel','lower']} },
    },
  };

  
  export const Heading1 = (args :Props) =>{
    return(
    <H1 Fcase={args.Fcase} Fweight={args.Fweight} Fstyle={args.Fstyle}>
        {args.Flabel}
      </H1>
    )
  };
  Heading1.args={
    Flabel: 'Heading 1',
  };
  export const Heading2 = (args :Props) =>{
    return(
    <H2 Fcase={args.Fcase} Fweight={args.Fweight} Fstyle={args.Fstyle}>
        {args.Flabel}
      </H2>
    )
  };
  Heading2.args={
    Flabel: 'Heading 2',
  };
  export const Heading3 = (args :Props) =>{
    return(
    <H3 Fcase={args.Fcase} Fweight={args.Fweight} Fstyle={args.Fstyle}>
        {args.Flabel}
      </H3>
    )
  };
  Heading3.args={
    Flabel: 'Heading 3',
  };
  export const Subtitle1 = (args :Props) =>{
    return(
    <S1 Fcase={args.Fcase} Fweight={args.Fweight} Fstyle={args.Fstyle}>
        {args.Flabel}
      </S1>
    )
  };
  Subtitle1.args={
    Flabel: 'Subtitle 1',
  };
  export const Subtitle2 = (args :Props) =>{
    return(
    <S2 Fcase={args.Fcase} Fweight={args.Fweight} Fstyle={args.Fstyle}>
        {args.Flabel}
      </S2>
    )
  };
  Subtitle2.args={
    Flabel: 'Subtitle 2',
  };
  export const Subtitle3 = (args :Props) =>{
    return(
    <S3 Fcase={args.Fcase} Fweight={args.Fweight} Fstyle={args.Fstyle}>
        {args.Flabel}
      </S3>
    )
  };
  Subtitle3.args={
    Flabel: 'Subtitle 3',
    Fweight:'regular',
  };
  export const Paragraph = (args :Props) =>{
    return(
    <P Fcase={args.Fcase} Fweight={args.Fweight} Fstyle={args.Fstyle}>
        {args.Flabel}
      </P>
    )
  };
  Paragraph.args={
    Flabel: 'Paragraph',
  };

