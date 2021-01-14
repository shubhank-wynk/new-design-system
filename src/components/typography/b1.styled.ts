import styled from 'styled-components';
import {textTransform,fontWeight,fontStyle} from './heading/typography.styled';
import {theme} from '../../theme';

export const B1 = styled.p<{
  Fcase?:string;
  Fweight?:string;
  Fstyle?:string;
  }>`
    font-size:1rem;
    line-height:1.5rem;
    color:var(--gray7);
    font-family:var(--font);
    ${(props) => textTransform(props.Fcase)};
    ${(props) => fontStyle(props.Fstyle)};
    ${(props) => fontWeight(props.Fweight)};
  `;