import styled, { css } from 'styled-components';
import {textTransform,fontWeight,fontStyle} from './heading.styled';
import {theme} from '../../../globalStyles';

export const H2 = styled.h2<{
    case:string,
    weight:string,
    style:string,
  }>`
    font-size:2.75rem;
    line-height:3.4375rem;
    letter-spacing:-1%;
    color:${theme.primary.gray7};
    font-family:${theme.primary.font};
    ${(props) => textTransform(props.case)};
    ${(props) => fontWeight(props.weight)};
    ${(props) => fontStyle(props.style)};
  `;