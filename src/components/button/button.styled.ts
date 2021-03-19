import styled, { css } from 'styled-components';
import {theme} from '../../theme';

const getDesignTypeStyles = (type?: string,color:keyof typeof theme="orange") => {
  switch(type){
      case 'secoundary' :
        return css`
          &.btn-secoundary{
            background:transparent;
            color:${theme[color].white};
            border:1px solid ${theme[color].white};
          &:hover,&:focus{
          background-color:${theme[color].secondaryF};
          color:${theme[color].white};
          border-color:${theme[color].white};
        }
        &:active,.active{background-color:${theme[color].secondaryA};
        color:${theme[color].secondaryAText};
        border-color:${theme[color].secondaryAText};
      }
    }
        `
      case 'tertiary' :
        return css`
          background:transparent;
          color:${theme[color].tertiaryText};
          border:none;
          border-bottom:1px solid transparent;
          padding:0.366rem 0.75rem;
          border-radius:0;
          &.btn-tertiary{
            &:hover,&:focus{border-bottom-color:${theme[color].tertiaryText};}
            &.active,&:active{border-bottom-color:${theme[color].tertiaryTextA};
              color:${theme[color].tertiaryTextA};
            }
          }
        `
      default:
        return css`
        border:1px solid transparent;
        background:${theme[color].grad1};
        color:${theme[color].btnColor1};
        &:hover,&:focus{background:${theme[color].grad2};}
        &.active,&:active{background:${theme[color].shade5};
            color:${theme[color].defaultText};}
        `
  }
};

const getSizeStyles = (size?: string) => {
  switch (size) {
    case 'small':
      return css`
        font-size: 1rem;	
        line-height:1.5rem;	
        padding: 0.288rem 1rem;
      `;
    case 'large':
      return css`
        font-size: 1.5rem;
        line-height:1.75rem;
        padding: 0.75rem 1.75rem;
      `;
    default:
      return css`
        font-size: 1.25rem;
        line-height:1.5rem;  
        padding: 0.21rem 1.5rem;
        span.icon{font-size:1.5rem;line-height:1.5rem;}
      `;
  }
};
const getShape = (shape?: string,color:keyof typeof theme="orange") => {
  switch (shape) {
    case 'circle':
      return css`
        border-radius:50%;
        padding:0;
        height:3rem;
        width:3rem;
        span{
          svg{font-size:1.5rem;line-height:1.5rem;padding-left:0 !important ;padding-right:0 !important;margin-top:0.25rem;}
        }
      `;
    case 'rounded':
      return css`
        border-radius:1.25rem;
        background-color:${theme[color].rounded};
        :hover,:focus{background-color:${theme[color].roundedF}; } 
        :active,.active{background-color:${theme[color].roundedA}; } 
      `;
    case 'floating':
      return css`
        border-radius:3rem;
        padding : 1.084rem 1.5rem;
        box-shadow:0.4rem 0.4rem 1.85rem ${theme[color].shadow}; 
        font-size:1.5rem;
      `;
    default:
      return css`
         border-radius:0.5rem;
         background-color:inherit;
         color:inherit;
         border-color:inherit;
      `;
  }
};

export const StyledButton = styled.button<{
  size?: string;
  shape?: string;
  btntype?:string;
  theme?:string;
}>`
  font-weight: 600;
  cursor: pointer;
  text-align:center;
  line-height:initial;
  outline:none;
  font-family:inherit;
  box-sizing:border-box;
  ${(props) => getSizeStyles(props.size)};
  ${(props) => getShape(props.shape,props.theme)};
  ${(props) => getDesignTypeStyles(props.btntype,props.theme)};
  &.btn-primary{
    &:hover{background:${theme.orange.shade5};}
    &:active,.active{color:${theme.orange.btnColor1};}
  }
  span{
      &:first-child{svg{padding-right:0rem;}}
      &:last-child{svg{padding-left:0rem;}}
    }
`;
