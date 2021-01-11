import styled, { css } from 'styled-components';
import {textTransform,fontWeight,fontStyle} from './typography.styled';
import {theme} from '../../../globalStyles';

export const S1 = styled.h4<{
  Fcase?:string;
  Fweight?:string;
  Fstyle?:string;
  }>`
    font-size:1.5rem;
    line-height:1.875rem;
    color:${theme.primary.gray7};
    font-family:${theme.primary.font};
    ${(props) => textTransform(props.Fcase)};
    ${(props) => fontWeight(props.Fweight)};
    ${(props) => fontStyle(props.Fstyle)};
  `;