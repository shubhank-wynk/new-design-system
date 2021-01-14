import styled from 'styled-components';
import {textTransform,fontWeight,fontStyle} from './typography.styled';
import {theme} from '../../../theme';

export const S2 = styled.h5<{
  Fcase?:string;
    Fweight?:string;
    Fstyle?:string;
  }>`
    font-size:1.25rem;
    line-height:1.5rem;
    color:var(--gray7);
    font-family:var(--font);
    ${(props) => textTransform(props.Fcase)};
    ${(props) => fontWeight(props.Fweight)};
    ${(props) => fontStyle(props.Fstyle)};
  `;