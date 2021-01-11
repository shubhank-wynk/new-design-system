import styled, { css } from 'styled-components';
import {textTransform,fontWeight,fontStyle} from './typography.styled';
import {theme} from '../../../globalStyles';

export const H2 = styled.h2<{
    Fcase:string,
    Fweight:string,
    Fstyle:string,
  }>`
    font-size:2.75rem;
    line-height:3.4375rem;
    letter-spacing:-1%;
    color:${theme.primary.gray7};
    font-family:${theme.primary.font};
    ${(props) => textTransform(props.Fcase)};
    ${(props) => fontWeight(props.Fweight)};
    ${(props) => fontStyle(props.Fstyle)};
  `;