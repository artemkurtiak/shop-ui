import React from 'react';

import { StyledButton } from './styled';

import { ButtonProps } from './types';

import Typography from '../typography';

const Button: React.FC<ButtonProps> = ({
  className,
  disabled,
  children,
  background = 'denim',
  color = 'white',
  ...typographyProps
}) => {
  return (
    <StyledButton disabled={disabled} className={className} background={background}>
      <Typography variant='text-md' tag='span' color={color} {...typographyProps}>
        {children}
      </Typography>
    </StyledButton>
  );
};

export default Button;
