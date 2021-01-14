import React from 'react';
import {StyledButton} from './button.styled';
import Props from './button.types';

const Button: React.FC<Props> = ({
  size,shape,theme,type,label,
}: Props) => {
  type=type||'primary';
  theme= theme || "teal";
  return (
    <StyledButton className={`btn-${type}`} theme={theme} size={size} shape={shape} btntype={type}>
      {label}
    </StyledButton>
  );
};

export default Button;
