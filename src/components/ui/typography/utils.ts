import { StyledTypographyProps } from './types';

export const typographyUtils = {
  handleFontSize: (props: StyledTypographyProps): number => {
    switch (props.variant) {
      case 'display-sm':
        return 30;
      case 'display-xs':
        return 24;
      case 'text-xl':
        return 20;
      case 'text-lg':
        return 18;
      case 'text-md':
        return 16;
      case 'text-sm':
        return 14;
    }
  },

  handleLineHeight: (props: StyledTypographyProps): number => {
    switch (props.variant) {
      case 'display-sm':
        return 38;
      case 'display-xs':
        return 32;
      case 'text-xl':
        return 30;
      case 'text-lg':
        return 28;
      case 'text-md':
        return 24;
      case 'text-sm':
        return 20;
    }
  },

  handleFontWeight: (props: StyledTypographyProps): number => {
    switch (props.weight) {
      case 'bold':
        return 700;
      case 'semibold':
        return 600;
      case 'medium':
        return 500;
      case 'regular':
        return 400;
    }
  },
};
