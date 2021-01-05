import React from 'react';

import { StyledButton } from './button.styled';
import Props from './button.types';

const Button: React.FC<Props> = ({
  primary = false,
  backgroundColor,
  size = 'medium',
  label,
}: Props) => {
  return (
    <StyledButton backgroundColor={backgroundColor} primary={primary} size={size}>
      {label}
    </StyledButton>
  );
};

export default Button;
