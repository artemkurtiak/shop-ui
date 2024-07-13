import React from 'react';

import { DefaultTheme } from 'styled-components';

export type TypographyVariant =
  | 'display-sm'
  | 'display-xs'
  | 'text-xl'
  | 'text-lg'
  | 'text-md'
  | 'text-sm';

export type TypographyWeight = 'regular' | 'medium' | 'semibold' | 'bold';

export type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span' | 'label';

export type TypographyProps = {
  className?: string;
  forId?: string;
  align?: 'left' | 'right' | 'center' | 'inherit';
  variant?: TypographyVariant;
  tag?: TypographyTag;
  weight?: TypographyWeight;
  color?: keyof DefaultTheme['colors'];
} & Required<React.PropsWithChildren>;

export type StyledTypographyProps = Required<
  Pick<TypographyProps, 'variant' | 'weight' | 'color' | 'align'>
>;
