import styled, { css } from 'styled-components';
import {textTransform,fontWeight,fontStyle} from './heading.styled';
import {theme} from '../../../globalStyles';

export const S2 = styled.h5<{
    Tcase:string,
    weight:string,
    style:string,
  }>`
    font-size:1.25rem;
    line-height:1.5rem;
    color:${theme.primary.gray7};
    font-family:${theme.primary.font};
    ${(props) => textTransform(props.Tcase)};
    ${(props) => fontWeight(props.weight)};
    ${(props) => fontStyle(props.style)};
  `;