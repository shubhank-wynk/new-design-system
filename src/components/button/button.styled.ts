import styled, { css } from 'styled-components';
import {theme} from '../../globalStyles';
const getTheme = (Theme?: string) => {
  switch (Theme) {
    case 'primary':
      return css`
      background:${theme.primary.tealGrad1};
      color:${theme.secondary.white};
      border-color:${theme.primary.teal6};
      :hover,:focus{
        background:${theme.primary.teal2};
      }
      :active,.active{background:${theme.primary.teal6};}
      `;
    case 'sucess':
      return css`
      background:${theme.primary.sucess3};
      color:${theme.secondary.white};
      border-color:${theme.primary.sucess3};
      `;
    default:
      return css`
        background:${theme.primary.orangeGrad2};
        border-color:${theme.primary.orange5};
        color:${theme.secondary.white};
        :hover,:focus{
          background: ${theme.primary.orangeGrad1};
        }
        :active,&.active{
          background-color:${theme.primary.orange6};
        }
      `;
  }
};
const getDesignTypeStyles = (type?: string) => {
  switch(type){
      case 'outlined' :
        return css`
          background:transparent;
          color:${theme.primary.orange4};
          border:1px solid inherit;
          &:hover,&:focus{
          background-color:${theme.primary.orange3};
          color:${theme.primary.orange4};
        }
        &:active,.active{background-color:${theme.primary.orange3};
        color:${theme.primary.orange4};  
      }
        `
      case 'link' :
        return css`
          background:transparent;
          color:${theme.primary.orange4};
          border-color:transparent;
        `
      default:
        return css`
        border:1px solid transparent;
        `
  }
};

const getSizeStyles = (size?: string) => {
  switch (size) {
    case 'small':
      return css`
        font-size: 1rem;
        line-height:1.25rem;
        padding: 0.75rem 1rem;
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
        padding:0.75rem 1.5rem;
      `;
  }
};
const getShape = (shape?: string) => {
  switch (shape) {
    case 'circle':
      return css`
        border-radius:50%;
        height:2em;
        width:2em;
      `;
    case 'round':
      return css`
        border-radius:3rem;
        box-shadow: 0.375rem 0.375rem  1.875rem ${theme.primary.orangeShadow} ;
        
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
  font-family: ${theme.primary.font};
  font-weight: 600;
  cursor: pointer;
  text-align:center;
  line-height:initial;
  outline:none;
  ${(props) => getSizeStyles(props.size)};
  ${(props) => getShape(props.shape)};
  ${(props) => getTheme(props.theme)};
  ${(props) => getDesignTypeStyles(props.btntype)};
`;
