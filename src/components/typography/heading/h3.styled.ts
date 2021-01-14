import styled from 'styled-components';
import {textTransform,fontWeight,fontStyle} from './typography.styled';
import {theme} from '../../../theme';

export const H3 = styled.h3<{
  Fcase?:string;
  Fweight?:string;
  Fstyle?:string;
  }>`
    font-size:2rem;
    line-height:2.5rem;
    color:var(--gray7);
    font-family:var(--font);
    ${(props) => textTransform(props.Fcase)};
    ${(props) => fontWeight(props.Fweight)};
    ${(props) => fontStyle(props.Fstyle)};
  `;