import styled, { css } from 'styled-components';
import {textTransform,fontWeight,fontStyle} from './typography.styled';
import {theme} from '../../../globalStyles';

export const H3 = styled.h3<{
    Fcase:string,
    Fweight:string,
    Fstyle:string,
  }>`
    font-size:2rem;
    line-height:2.5rem;
    color:${theme.primary.gray7};
    font-family:${theme.primary.font};
    ${(props) => textTransform(props.Fcase)};
    ${(props) => fontWeight(props.Fweight)};
    ${(props) => fontStyle(props.Fstyle)};
  `;