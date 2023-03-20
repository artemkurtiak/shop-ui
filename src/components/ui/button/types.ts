import React from 'react';

import { DefaultTheme } from 'styled-components';

import { StyledTypographyProps } from '../typography/types';

export type ButtonProps = {
  className?: string;
  disabled?: boolean;
  background?: keyof DefaultTheme['colors'];
  color?: keyof DefaultTheme['colors'];
} & Partial<Omit<StyledTypographyProps, 'align'>> &
  Required<React.PropsWithChildren>;

export type StyledButtonProps = Required<Pick<ButtonProps, 'background'>>;
