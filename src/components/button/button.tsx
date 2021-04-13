import React from 'react';
import {StyledButton} from './button.styled';
import Props from './button.types';
import HtmlElement from '../htmlElement.type';

const Button: React.FC<Props & HtmlElement> = ({
  size,shape,theme,type,label,iconLeft,iconRight,style,className, ...props
}: React.PropsWithChildren<Props> ) => {
  type=type||'primary';
  theme= theme || "orange";
  className = className || "";
  return (
    <StyledButton className={`btn-${type}`+ ` ` +  className}  theme={theme} size={size} shape={shape} btntype={type} style={style} {...props}>
      <span className="iconLeft">{iconLeft}</span><span className="label">{props.children}{label}</span><span className="iconRight">{iconRight}</span>
    </StyledButton>
  );
};

export default Button;
