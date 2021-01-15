import styled from 'styled-components';
import {textTransform,fontWeight,fontStyle} from './typography.styled';

export const S1 = styled.h4<{
  Fcase?:string;
  Fweight?:string;
  Fstyle?:string;
  }>`
    font-size:1.5rem;
    line-height:1.875rem;
    color:var(--gray7);
    font-family:var(--font);
    ${(props) => textTransform(props.Fcase)};
    ${(props) => fontWeight(props.Fweight)};
    ${(props) => fontStyle(props.Fstyle)};
  `;