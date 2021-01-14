import styled from 'styled-components';
import {textTransform,fontWeight,fontStyle} from './typography.styled';
import {theme} from '../../../theme';

export const H1 = styled.h1<{
    Fcase?:string;
    Fweight?:string;
    Fstyle?:string;
  }>`
    font-size:3.25rem;
    line-height:4.0625rem;
    letter-spacing:-0.25px;
    color:var(--gray7);
    font-family:var(--font);
    ${(props) => textTransform(props.Fcase)};
    ${(props) => fontWeight(props.Fweight)};
    ${(props) => fontStyle(props.Fstyle)};
  `;