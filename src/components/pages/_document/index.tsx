import { Head, Html, Main, NextScript } from 'next/document';

import { fontsClassName } from '@/shared/theme/fonts';

const DocumentPage = () => {
  return (
    <Html lang='en'>
      <Head />
      <body className={fontsClassName}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default DocumentPage;
