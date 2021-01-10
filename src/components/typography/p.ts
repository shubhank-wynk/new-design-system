import styled, { css } from 'styled-components';
import {textTransform,fontWeight,fontStyle} from './heading/heading.styled';
import {theme} from '../../globalStyles';

export const P = styled.p<{
    Tcase:string,
    weight:string,
    style:string,
  }>`
    font-size:1rem;
    line-height:1.5rem;
    color:${theme.primary.gray7};
    font-family:${theme.primary.font};
    ${(props) => textTransform(props.Tcase)};
    ${(props) => fontStyle(props.style)};
    ${(props) => fontWeight(props.weight)};
  `;