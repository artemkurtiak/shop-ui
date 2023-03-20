import { Inter } from '@next/font/google';

const inter = Inter({ variable: '--inter-font' });

const fontVariables = {
  inter: inter.variable,
} as const;

export const fontsClassName = Object.values(fontVariables).join(' ');

export const fonts = {
  inter: inter.style.fontFamily,
} as const;
