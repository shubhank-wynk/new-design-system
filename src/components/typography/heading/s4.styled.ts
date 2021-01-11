import styled from 'styled-components';
import {textTransform,fontWeight,fontStyle} from './typography.styled';
import {theme} from '../../../globalStyles';

export const S4 = styled.h5<{
    Fcase:string,
    Fstyle:string,
  }>`
    font-size:1.125rem;
    line-height:1.4375rem;
    font-weight:600;
    color:${theme.primary.gray7};
    font-family:${theme.primary.font};
    ${(props) => textTransform(props.Fcase)};
    ${(props) => fontStyle(props.Fstyle)};
  `;