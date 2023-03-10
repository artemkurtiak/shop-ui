import React from 'react';

import { StyledTypography } from './styled';

import { TypographyTagByVariant } from './constants';

import { TypographyProps } from './types';

const Typography: React.FC<TypographyProps> = ({
  variant = 'display-sm',
  weight = 'regular',
  color = 'tuna',
  align = 'inherit',
  tag = TypographyTagByVariant[variant],
  forId,
  className,
  children,
}) => {
  return (
    <StyledTypography
      htmlFor={forId}
      as={tag}
      variant={variant}
      weight={weight}
      color={color}
      className={className}
      align={align}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;
