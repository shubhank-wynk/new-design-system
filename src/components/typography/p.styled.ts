import styled from 'styled-components';
import {textTransform,fontWeight,fontStyle} from './heading/typography.styled';
import {theme} from '../../globalStyles';

export const P = styled.p<{
  Fcase?:string;
  Fweight?:string;
  Fstyle?:string;
  }>`
    font-size:1rem;
    line-height:1.5rem;
    color:${theme.primary.gray7};
    font-family:${theme.primary.font};
    ${(props) => textTransform(props.Fcase)};
    ${(props) => fontStyle(props.Fstyle)};
    ${(props) => fontWeight(props.Fweight)};
  `;