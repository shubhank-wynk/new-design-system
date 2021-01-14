import styled from 'styled-components';
import {textTransform,fontWeight,fontStyle} from './typography.styled';
import {theme} from '../../../theme';

export const S3 = styled.h5<{
  Fcase?:string;
  Fweight?:string;
  Fstyle?:string;
  }>`
    font-size:1.125rem;
    line-height:1.4375rem;
    color:var(--gray7);
    font-family:var(--font);
    ${(props) => fontWeight(props.Fweight)};
    ${(props) => textTransform(props.Fcase)};
    ${(props) => fontStyle(props.Fstyle)};
  `;