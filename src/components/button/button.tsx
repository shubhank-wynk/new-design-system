import React from 'react';
import {StyledButton} from './button.styled';
import Props from './button.types';

const Button: React.FC<Props> = ({
  size,shape,theme,type,label,iconLeft,iconRight
}: Props) => {
  type=type||'primary';
  theme= theme || "orange";
  return (
    <StyledButton className={`btn-${type}`}  theme={theme} size={size} shape={shape} btntype={type}>
      {iconLeft}{label}{iconRight}
    </StyledButton>
  );
};

export default Button;
