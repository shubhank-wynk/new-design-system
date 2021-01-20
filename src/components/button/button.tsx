import React from 'react';
import {StyledButton} from './button.styled';
import Props from './button.types';

const Button: React.FC<Props> = ({
  size,shape,theme,type,label,iconLeft,iconRight,style,className
}: Props) => {
  type=type||'primary';
  theme= theme || "orange";
  className = className || "";
  return (
    <StyledButton className={`btn-${type}`+ ` ` +  className}  theme={theme} size={size} shape={shape} btntype={type} style={style} >
      {iconLeft}{label}{iconRight}
    </StyledButton>
  );
};

export default Button;
