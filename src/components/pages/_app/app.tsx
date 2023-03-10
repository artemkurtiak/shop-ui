import { AppProps } from 'next/app';
import React from 'react';

import { ThemeProvider } from 'styled-components';

import { theme } from '@/shared/theme';

import { GlobalStyle } from './styled';

const AppPage: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default AppPage;
