import { AppProps } from 'next/app';
import React from 'react';

import AppPage from '@/components/pages/_app/app';

import wrappedStore from '@/store';

const App: React.FC<AppProps> = (props) => <AppPage {...props} />;

export default wrappedStore.withRedux(App);
