import styled from 'styled-components';

import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Typography from '@/components/ui/typography';

export const LoginForm = styled.form`
  max-width: 360px;
  min-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.media.mobile} {
    max-width: 315px;
    min-width: auto;
  }
`;

export const LoginFormTitle = styled(Typography)`
  margin-top: 22px;
`;

export const LoginFormDescription = styled(Typography)`
  margin-top: 12px;
`;

export const LoginFormInput = styled(Input)`
  margin-top: 24px;
`;

export const LoginOptionsPanel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

export const LoginButton = styled(Button)`
  margin-top: 24px;
`;

export const LoginNoAccountPanel = styled.div`
  display: flex;
  place-items: center;
  gap: 4px;
  margin-top: 32px;
`;
