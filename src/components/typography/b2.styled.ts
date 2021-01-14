import styled from 'styled-components';
import {textTransform,fontWeight,fontStyle} from './heading/typography.styled';

export const B2 = styled.p<{
  Fcase?:string;
  Fweight?:string;
  Fstyle?:string;
  }>`
    font-size:0.875rem;
    line-height:1.25rem;
    color:var(--gray7);
    font-family:var(--font);
    ${(props) => textTransform(props.Fcase)};
    ${(props) => fontStyle(props.Fstyle)};
    ${(props) => fontWeight(props.Fweight)};
  `;