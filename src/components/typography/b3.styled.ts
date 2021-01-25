import styled from 'styled-components';
import {textTransform,fontWeight,fontStyle} from './heading/typography.styled';

export const B3 = styled.p<{
  Fcase?:string;
  Fweight?:string;
  Fstyle?:string;
  }>`
    font-size:0.75rem;
    line-height:1.075rem;
    color:var(--gray7);
    font-family:var(--font);
    letter-spacing:0.15px;
    ${(props) => textTransform(props.Fcase)};
    ${(props) => fontStyle(props.Fstyle)};
    ${(props) => fontWeight(props.Fweight)};
  `;