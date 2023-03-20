import React, { PropsWithChildren } from 'react';

import Logo from '@/components/ui/logo';

import { AuthLayoutTitle, StyledAuthLayout } from './styled';

const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledAuthLayout>
      <div>
        <Logo />
        <AuthLayoutTitle>Shopeam</AuthLayoutTitle>
      </div>
      <div>{children}</div>
    </StyledAuthLayout>
  );
};

export default AuthLayout;
