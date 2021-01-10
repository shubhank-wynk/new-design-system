import React from 'react';
import {Heading1} from './h1.styled';
import Props from '../p.types';

const Heading: React.FC<Props> = ({
    Tcase,weight,style,label
  }: Props) => {
    return (
      <Heading1 case={Tcase} weight={weight} Tstyle={style}>
        {label}
      </Heading1>
    );
  };

  export default Heading;