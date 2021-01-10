import styled, { css } from 'styled-components';
import {textTransform,fontWeight,fontStyle} from './heading.styled';
import {theme} from '../../../globalStyles';

export const H3 = styled.h3<{
    Tcase:string,
    weight:string,
    style:string,
  }>`
    font-size:2rem;
    line-height:2.5rem;
    color:${theme.primary.gray7};
    font-family:${theme.primary.font};
    ${(props) => textTransform(props.Tcase)};
    ${(props) => fontWeight(props.weight)};
    ${(props) => fontStyle(props.style)};
  `;