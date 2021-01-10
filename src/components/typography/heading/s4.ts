import styled, { css } from 'styled-components';
import {textTransform,fontWeight,fontStyle} from './heading.styled';
import {theme} from '../../../globalStyles';

export const S4 = styled.h5<{
    Tcase:string,
    weight:string,
    style:string,
  }>`
    font-size:1.125rem;
    line-height:1.4375rem;
    font-weight:600;
    color:${theme.primary.gray7};
    font-family:${theme.primary.font};
    ${(props) => textTransform(props.Tcase)};
    ${(props) => fontStyle(props.style)};
  `;