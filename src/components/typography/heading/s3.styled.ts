import styled from 'styled-components';
import {textTransform,fontStyle} from './typography.styled';
import {theme} from '../../../globalStyles';

export const S3 = styled.h5<{
    Fcase:string,
    Fweight:string,
    Fstyle:string,
  }>`
    font-size:1.125rem;
    line-height:1.4375rem;
    font-weight:400;
    color:${theme.primary.gray7};
    font-family:${theme.primary.font};
    ${(props) => textTransform(props.Fcase)};
    ${(props) => fontStyle(props.Fstyle)};
  `;