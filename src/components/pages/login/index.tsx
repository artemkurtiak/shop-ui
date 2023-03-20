import Head from 'next/head';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import AuthLayout from '@/components/layouts/auth';

import Checkbox from '@/components/ui/checkbox';
import InlineLink from '@/components/ui/inline-link';
import Logo from '@/components/ui/logo';
import Typography from '@/components/ui/typography';

import {
  LoginButton,
  LoginForm,
  LoginFormDescription,
  LoginFormInput,
  LoginFormTitle,
  LoginNoAccountPanel,
  LoginOptionsPanel,
} from './styled';

import { LoginFormType } from './types';

import { LoginFormSchema } from './schema';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<LoginFormType>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(LoginFormSchema),
    mode: 'onChange',
  });

  const onSubmit = (values: LoginFormType) => {
    console.log(values);
  };

  return (
    <AuthLayout>
      <Head>
        <title>Login</title>
      </Head>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <Logo width={48} height={48} />
        <LoginFormTitle weight='semibold'>Log in to your account</LoginFormTitle>
        <LoginFormDescription tag='div' variant='text-md' color='stormGray'>
          Welcome back! Please enter your details.
        </LoginFormDescription>
        <LoginFormInput
          name='email'
          register={register}
          label='Email'
          id='email'
          autoComplete='email'
          placeholder='Enter your email'
        />
        <LoginFormInput
          name='password'
          register={register}
          label='Password'
          id='password'
          autoComplete='password'
          type='password'
          placeholder='••••••••'
        />
        <LoginOptionsPanel>
          <Checkbox id='rememberMe' label='Remember for 30 days' />
          <InlineLink href='/forget'>Forgot password</InlineLink>
        </LoginOptionsPanel>
        <LoginButton disabled={!isValid}>Sign in</LoginButton>
        <LoginNoAccountPanel>
          <Typography tag='span' color='stormGray' variant='text-sm'>
            Don`t have an account?
          </Typography>
          <InlineLink href='/sign-up'>Sign up</InlineLink>
        </LoginNoAccountPanel>
      </LoginForm>
    </AuthLayout>
  );
};

export default LoginPage;
