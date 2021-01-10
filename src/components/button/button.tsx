import React from 'react';
import {StyledButton} from './button.styled';
import Props from './button.types';

const Button: React.FC<Props> = ({
  size,shape,theme,type,label,
}: Props) => {
  return (
    <StyledButton theme={theme} size={size} shape={shape} btntype={type}>
      {label}
    </StyledButton>
  );
};

export default Button;
